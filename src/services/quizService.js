import categories from "../data/categories";
import reactFundamentalsQuestions from "../data/questions/react/fundamentals";
import quizzes from "../data/quizzes";

const questionBank = [
    ...reactFundamentalsQuestions,
];

// categories
export const getCategoryBySlug = (slug) => {
    return categories.find((cateogory) => cateogory.slug === slug);
}

export const getCategoryById = (id) => {
    return categories.find((category)=> category.id === id)
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

// calculate quiz results
export const calculateQuizResults = (questions, answers) => {
    let correct = 0;

    questions.forEach((question) => {
        const selectedAnswer = answers[question.id];

        if(selectedAnswer === question.correctOptionId) {
            correct++;
        }
    });

    const totalQuestions = questions.length;
    const attempted = Object.keys(answers).length;
    const skipped = totalQuestions - attempted;
    const wrong = attempted - correct;

    const accuracy = attempted === 0 ? 0 : Math.round((correct/attempted)* 100);
    const completion = Math.round((attempted/totalQuestions) * 100);

    return {
        totalQuestions,
        attempted,
        correct,
        wrong,
        skipped,
        accuracy,
        completion
    };
}

export const getQuizFeedback = (accuracy, completion) => {
    if(completion === 0) {
        return {
            title: "Quiz not attempted",
            message: "You didn't answer any questions.",
        };
    }

    if(accuracy >= 90){
        return {
            title: "Excellent",
            message: "You have a very strong understanding of this topic."
        }
    }

    if(accuracy >= 75){
        return {
            title: "Great Job!",
            message: "You have a solid understanding of this topic.",
        };
    }

    if(accuracy >= 50){
        return {
            title: "Good Start",
            message: "You understand some of the concepts, but there's room to improve."
        }
    }

    return {
        title: "Keep Revising",
        message: "Review the topic and try the quiz again.",
    }
}