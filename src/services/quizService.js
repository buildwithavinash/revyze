import categories from "../data/categories";
import reactQuestions from "../data/questions/react";
import quizzes from "../data/quizzes";

const questionBank = [
    ...reactQuestions,
];

// categories
export const getCategoryBySlug = (slug) => {
    return categories.find((cateogory) => cateogory.slug === slug);
}

// quizzes
export const getQuizzesByCategory = (categoryId) => {
    return quizzes.filter((quiz) => quiz.categoryId === categoryId)
}

export const getQuizBySlug = (slug) => {
    return quizzes.find((quiz) => quiz.slug === slug)
}

// questions
export const getQuestionsByQuiz = (quizId) => {
    return questionBank.filter((question) => question.quizId === quizId)
}