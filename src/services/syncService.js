import { getCloudQuizAttempts } from "./cloudService";
import { getAllQuizAttempts, saveQuizAttempt } from "./storageService";

const normalizeCloudAttempt = (cloudAttempt) => {
     return {
    id: cloudAttempt.id,
    quizId: cloudAttempt.quiz_id,
    answers: cloudAttempt.answers || {},
    results: cloudAttempt.results || {},
    startedAt: cloudAttempt.started_at
      ? new Date(cloudAttempt.started_at).getTime()
      : null,
    completedAt: cloudAttempt.completed_at
      ? new Date(cloudAttempt.completed_at).getTime()
      : null,
  };
}

export const syncQuizAttempts = async () => {
    const localAttempts = await getAllQuizAttempts();
    const cloudAttempts = await getCloudQuizAttempts();

    const localAttemptIds = new Set(localAttempts.map((attempt)=> attempt.id));

    let importedCount = 0;

     for (const cloudAttempt of cloudAttempts) {
    if (localAttemptIds.has(cloudAttempt.id)) {
      continue;
    }

    const localAttempt =
      normalizeCloudAttempt(cloudAttempt);

    await saveQuizAttempt(localAttempt);

    importedCount++;
  }

  return {
    localCount: localAttempts.length,
    cloudCount: cloudAttempts.length,
    importedCount,
  };
}