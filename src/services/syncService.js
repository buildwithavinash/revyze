import { getAllQuizAttempts, getAllQuizProgress, saveQuizAttempt, saveQuizProgress } from "./storageService";

import { getCloudQuizAttempts, getCloudQuizProgress, saveCloudQuizAttempts, saveCloudQuizProgresses } from "./cloudService";

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

  const cloudAttemptIds = new Set(cloudAttempts.map((attempt) => attempt.id));

  const localAttemptsToUpload = localAttempts.filter(
    (attempt) => !cloudAttemptIds.has(attempt.id),
  );

  let uploadedCount = 0;

  if (localAttemptsToUpload.length > 0) {
    await saveCloudQuizAttempts(localAttemptsToUpload);

    uploadedCount = localAttemptsToUpload.length;
  }

  // Refresh cloud attempts after uploading
  const updatedCloudAttempts = await getCloudQuizAttempts();

  const localAttemptIds = new Set(localAttempts.map((attempt) => attempt.id));

  let importedCount = 0;

  for (const cloudAttempt of updatedCloudAttempts) {
    if (localAttemptIds.has(cloudAttempt.id)) {
      continue;
    }

    const localAttempt = normalizeCloudAttempt(cloudAttempt);

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



const normalizeCloudProgress = (cloudProgress) => {
  return {
    quizId: cloudProgress.quiz_id,
    answers: cloudProgress.answers || {},
    currentQuestionIndex: cloudProgress.current_question_index ?? 0,
    startedAt: cloudProgress.started_at
      ? new Date(cloudProgress.started_at).getTime()
      : null,
    updatedAt: cloudProgress.updated_at
      ? new Date(cloudProgress.updated_at).getTime()
      : null,
      shuffle_seed: cloudProgress.shuffleSeed || null,
  };
};

export const syncQuizProgress = async () => {
  const localProgress = await getAllQuizProgress();
  const cloudProgress = await getCloudQuizProgress();

  const cloudProgressByQuizId = new Map(
    cloudProgress.map((progress) => [
      progress.quiz_id,
      progress,
    ])
  );

  const localProgressByQuizId = new Map(
    localProgress.map((progress) => [
      progress.quizId,
      progress,
    ])
  );

  const progressToUpload = [];
  const progressToImport = [];

  // Compare local progress with cloud progress
  for (const local of localProgress) {
    const cloud = cloudProgressByQuizId.get(local.quizId);

    // No cloud version → upload local
    if (!cloud) {
      progressToUpload.push(local);
      continue;
    }

    const localUpdatedAt = local.updatedAt ?? 0;
    const cloudUpdatedAt = cloud.updated_at
      ? new Date(cloud.updated_at).getTime()
      : 0;

    // Local version is newer → upload local
    if (localUpdatedAt > cloudUpdatedAt) {
      progressToUpload.push(local);
    }
  }

  // Find cloud progress that doesn't exist locally
  for (const cloud of cloudProgress) {
    const local = localProgressByQuizId.get(cloud.quiz_id);

    if (!local) {
      progressToImport.push(normalizeCloudProgress(cloud));
      continue;
    }

    const localUpdatedAt = local.updatedAt ?? 0;
    const cloudUpdatedAt = cloud.updated_at
      ? new Date(cloud.updated_at).getTime()
      : 0;

    // Cloud version is newer → import cloud
    if (cloudUpdatedAt > localUpdatedAt) {
      progressToImport.push(normalizeCloudProgress(cloud));
    }
  }

  if (progressToUpload.length > 0) {
    await saveCloudQuizProgresses(progressToUpload);
  }

  for (const progress of progressToImport) {
    await saveQuizProgress(progress);
  }

  return {
    localCount: localProgress.length,
    cloudCount: cloudProgress.length,
    uploadedCount: progressToUpload.length,
    importedCount: progressToImport.length,
  };
};

export const syncAll = async () => {
  const attemptsResult = await syncQuizAttempts();
  const progressResult = await syncQuizProgress();

  return {
    attempts: attemptsResult,
    progress: progressResult,
  };
};