import Dexie from "dexie";

export const db = new Dexie('revyzedb');

db.version(1).stores({
    quizAttempts: "id, quizId, completedAt",
    quizProgress: "quizId, updatedAt",
});

