import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import Container from "../components/ui/Container";
import ReviewQuestionCard from "../components/quiz/ReviewQuestionCard";

import {
  getQuizAttemptById,
} from "../services/storageService";

import {
  getQuizById,
} from "../services/quizService";

import {
  loadQuestionsForQuiz,
} from "../services/questionService";


const HistoryReviewAnswersPage = () => {
  const { attemptId } = useParams();

  const [attempt, setAttempt] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const loadReviewData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get the saved attempt
        const savedAttempt = await getQuizAttemptById(attemptId);

        if (!savedAttempt) {
          setError("Quiz attempt not found.");
          return;
        }

        setAttempt(savedAttempt);


        // Get the quiz
        const quizData = getQuizById(savedAttempt.quizId);

        if (!quizData) {
          setError("Quiz not found.");
          return;
        }

        setQuiz(quizData);


        // Load questions
        const questionData = await loadQuestionsForQuiz(quizData);

        setQuestions(questionData);

      } catch (error) {
        console.error(error);
        setError("Unable to load review data.");
      } finally {
        setIsLoading(false);
      }
    };

    loadReviewData();
  }, [attemptId]);


  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-text-secondary">
          Loading review...
        </p>
      </div>
    );
  }


  // Error
  if (error || !attempt || !quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">

        <h1 className="text-lg font-semibold text-text">
          Unable to load review
        </h1>

        <p className="text-sm text-text-secondary">
          {error}
        </p>

        <Link
          to="/history"
          className="text-sm text-primary hover:underline"
        >
          Back to history
        </Link>

      </div>
    );
  }


  // No questions
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">

        <h1 className="text-lg font-semibold text-text">
          No questions available
        </h1>

        <Link
          to="/history"
          className="text-sm text-primary hover:underline"
        >
          Back to history
        </Link>

      </div>
    );
  }


  return (
    <div className="min-h-screen py-6 sm:py-8">

      <Container>

        {/* Header */}

        <div className="mb-5 sm:mb-6">

          <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-2">

            <Link
              to="/history"
              className="hover:text-text transition-colors"
            >
              History
            </Link>

            <ChevronRight
              className="w-3 h-3"
              strokeWidth={2}
            />

            <Link
              to={`/history/${attempt.id}`}
              className="hover:text-text transition-colors"
            >
              Attempt
            </Link>

            <ChevronRight
              className="w-3 h-3"
              strokeWidth={2}
            />

            <span className="text-text">
              Review answers
            </span>

          </div>


          <h1 className="text-base sm:text-lg font-semibold text-text">
            {quiz.title}
          </h1>

          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Review your answers from this attempt
          </p>

        </div>


        {/* Questions */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">

          {questions.map((question, index) => (
            <ReviewQuestionCard
              key={question.id}
              question={question}
              questionNumber={index + 1}
              selectedOptionId={attempt.answers[question.id]}
            />
          ))}

        </div>

      </Container>

    </div>
  );
};


export default HistoryReviewAnswersPage;