import {
  getAllQuizAttempts,
  getAllQuizProgress,
  saveQuizAttempt,
  saveQuizProgress,
} from "./storageService";

import {
  deleteCloudQuizProgress,
  getCloudQuizAttempts,
  getCloudQuizProgress,
  saveCloudQuizAttempts,
  saveCloudQuizProgresses,
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
    shuffleSeed: cloudAttempt.shuffle_seed || null,
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
    await saveCloudQuizAttempts(localAttemptsToUpload);

    uploadedCount = localAttemptsToUpload.length;
  }

  // Refresh cloud attempts after uploading.
  const updatedCloudAttempts = await getCloudQuizAttempts();

  const localAttemptIds = new Set(
    localAttempts.map((attempt) => attempt.id)
  );

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
    currentQuestionIndex:
      cloudProgress.current_question_index ?? 0,
    startedAt: cloudProgress.started_at
      ? new Date(cloudProgress.started_at).getTime()
      : null,
    updatedAt: cloudProgress.updated_at
      ? new Date(cloudProgress.updated_at).getTime()
      : null,
    shuffleSeed: cloudProgress.shuffle_seed || null,
  };
};

export const syncQuizProgress = async () => {
  const localProgress = await getAllQuizProgress();
  const cloudProgress = await getCloudQuizProgress();
  const cloudAttempts = await getCloudQuizAttempts();

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

  const completedAttemptByQuizId = new Map();

  for (const attempt of cloudAttempts) {
    const existingAttempt =
      completedAttemptByQuizId.get(attempt.quiz_id);

    if (
      !existingAttempt ||
      new Date(attempt.completed_at).getTime() >
        new Date(existingAttempt.completed_at).getTime()
    ) {
      completedAttemptByQuizId.set(
        attempt.quiz_id,
        attempt
      );
    }
  }

  const progressToUpload = [];
  const progressToImport = [];
  const progressToDelete = [];

  // Compare local progress with cloud progress.
  for (const local of localProgress) {
    const cloud = cloudProgressByQuizId.get(local.quizId);

    // If this quiz has already been completed and the
    // completion is newer than the local progress,
    // this progress is stale.
    const completedAttempt =
      completedAttemptByQuizId.get(local.quizId);

    if (completedAttempt) {
      const completedAt = new Date(
        completedAttempt.completed_at
      ).getTime();

      const localUpdatedAt = local.updatedAt ?? 0;

      if (completedAt >= localUpdatedAt) {
        continue;
      }
    }

    // No cloud version → upload local.
    if (!cloud) {
      progressToUpload.push(local);
      continue;
    }

    const localUpdatedAt = local.updatedAt ?? 0;

    const cloudUpdatedAt = cloud.updated_at
      ? new Date(cloud.updated_at).getTime()
      : 0;

    // Local version is newer → upload local.
    if (localUpdatedAt > cloudUpdatedAt) {
      progressToUpload.push(local);
    }
  }

  // Find cloud progress that doesn't exist locally
  // or determine whether cloud progress is newer.
  for (const cloud of cloudProgress) {
    const local = localProgressByQuizId.get(
      cloud.quiz_id
    );

    const completedAttempt =
      completedAttemptByQuizId.get(cloud.quiz_id);

    // If the quiz has been completed after this
    // progress was created, the cloud progress is stale.
    if (completedAttempt) {
      const completedAt = new Date(
        completedAttempt.completed_at
      ).getTime();

      const cloudUpdatedAt = cloud.updated_at
        ? new Date(cloud.updated_at).getTime()
        : 0;

      if (completedAt >= cloudUpdatedAt) {
        progressToDelete.push(cloud.quiz_id);
        continue;
      }
    }

    // Cloud progress doesn't exist locally.
    if (!local) {
      progressToImport.push(
        normalizeCloudProgress(cloud)
      );
      continue;
    }

    const localUpdatedAt = local.updatedAt ?? 0;

    const cloudUpdatedAt = cloud.updated_at
      ? new Date(cloud.updated_at).getTime()
      : 0;

    // Cloud version is newer → import cloud.
    if (cloudUpdatedAt > localUpdatedAt) {
      progressToImport.push(
        normalizeCloudProgress(cloud)
      );
    }
  }

  // Upload newer local progress.
  if (progressToUpload.length > 0) {
    await saveCloudQuizProgresses(progressToUpload);
  }

  // Import newer cloud progress.
  for (const progress of progressToImport) {
    await saveQuizProgress(progress);
  }

  // Delete stale cloud progress after a quiz
  // has been completed.
  for (const quizId of progressToDelete) {
    try {
      await deleteCloudQuizProgress(quizId);
    } catch (error) {
      console.error(
        `Failed to delete stale cloud progress for quiz ${quizId}:`,
        error
      );
    }
  }

  return {
    localCount: localProgress.length,
    cloudCount: cloudProgress.length,
    uploadedCount: progressToUpload.length,
    importedCount: progressToImport.length,
    deletedCount: progressToDelete.length,
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