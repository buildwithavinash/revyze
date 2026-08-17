import {db} from "../db/db";


const createAttemptId = () => {
  return crypto.randomUUID();
};
// quiz attempts
export const saveQuizAttempt = async (attempt) => {

    const attemptWithId = {
    ...attempt,
    id: createAttemptId(),
  }
    return await db.quizAttempts.add(attemptWithId);
}

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