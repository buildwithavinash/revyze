import {db} from "../db/db";


// quiz attempts
export const saveQuizAttempt = async (attempt) => {
  await db.quizAttempts.add(attempt);

  return attempt.id;
};

export const getQuizAttempts = async (quizId) => {
    return await db.quizAttempts.where("quizId").equals(quizId).reverse().sortBy('completedAt');
};

export const getAllQuizAttempts = async () => {
    return await db.quizAttempts.orderBy('completedAt').reverse().toArray();
}

export const getQuizAttemptById = async (attemptId) => {
    return await db.quizAttempts.get(attemptId)
}

// quiz progress
export const saveQuizProgress = async (progress) => {
    return await db.quizProgress.put(progress);
};

export const getQuizProgress = async (quizId) => {
    return await db.quizProgress.get(quizId);
}

export const deleteQuizProgress = async (quizId) => {
    return await db.quizProgress.delete(quizId);
}

export const getQuizProgressByIds = async (quizIds) => {
return await db.quizProgress.where('quizId').anyOf(quizIds).toArray();
}

export const getAllQuizProgress = async () => {
    return await db.quizProgress.toArray();
}

export const getQuizAttemptSummariesByIds = async (quizIds) => {
    const attempts = await db.quizAttempts.where("quizId").anyOf(quizIds).toArray();

    const summaries = {};

    attempts.forEach((attempt) => {
        const { quizId, results, completedAt} = attempt;

        if(!summaries[quizId]){
            summaries[quizId] = {
                attemptCount: 0,
                bestAccuracy: 0,
                lastAttemptAt: null,
            };
        }

        const summary = summaries[quizId];

        summary.attemptCount += 1;

        summary.bestAccuracy = Math.max(summary.bestAccuracy, results.accuracy);

        if(!summary.lastAttemptAt || completedAt > summary.lastAttemptAt) {
            summary.lastAttemptAt = completedAt;
        }
    });

    return summaries;
}
