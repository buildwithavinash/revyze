import {
  getAllQuizAttempts,
  saveQuizAttempt,
} from "./storageService";

import {
  getCloudQuizAttempts,
  saveCloudQuizAttempts,
} from "./cloudService";


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
};


export const syncQuizAttempts = async () => {
  const localAttempts = await getAllQuizAttempts();
  const cloudAttempts = await getCloudQuizAttempts();

  const cloudAttemptIds = new Set(
    cloudAttempts.map((attempt) => attempt.id)
  );

  const localAttemptsToUpload = localAttempts.filter(
    (attempt) => !cloudAttemptIds.has(attempt.id)
  );

  let uploadedCount = 0;

  if (localAttemptsToUpload.length > 0) {
    await saveCloudQuizAttempts(
      localAttemptsToUpload
    );

    uploadedCount =
      localAttemptsToUpload.length;
  }

  // Refresh cloud attempts after uploading
  const updatedCloudAttempts =
    await getCloudQuizAttempts();

  const localAttemptIds = new Set(
    localAttempts.map((attempt) => attempt.id)
  );

  let importedCount = 0;

  for (const cloudAttempt of updatedCloudAttempts) {
    if (localAttemptIds.has(cloudAttempt.id)) {
      continue;
    }

    const localAttempt =
      normalizeCloudAttempt(cloudAttempt);

    await saveQuizAttempt(localAttempt);

    localAttemptIds.add(localAttempt.id);

    importedCount++;
  }

  return {
    localCount: localAttempts.length,
    cloudCount: updatedCloudAttempts.length,
    uploadedCount,
    importedCount,
  };
};