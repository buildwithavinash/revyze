import { Link, useLocation, useParams } from "react-router";
import { ChevronRight } from "lucide-react";
import { getQuizBySlug } from "../services/quizService";
import { loadQuestionsForQuiz } from "../services/questionService";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import ReviewQuestionCard from "../components/quiz/ReviewQuestionCard";

const ReviewAnswersPage = () => {
  const { slug } = useParams();
  const { state } = useLocation();

  const quiz = getQuizBySlug(slug);

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load questions for this quiz
  useEffect(() => {
    if (!quiz || !state?.answers) {
      return;
    }

    const loadReviewQuestions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await loadQuestionsForQuiz(quiz);

        setQuestions(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load review questions.");
      } finally {
        setIsLoading(false);
      }
    };

    loadReviewQuestions();
  }, [quiz?.id, state?.answers]);

  // Review data doesn't exist
  if (!state?.answers) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          Review data not found
        </h1>

        <Link
          to="/"
          className="text-sm text-primary hover:underline"
        >
          Back home
        </Link>
      </div>
    );
  }

  const { answers } = state;

  // Quiz doesn't exist
  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          Quiz not found
        </h1>

        <Link
          to="/"
          className="text-sm text-primary hover:underline"
        >
          Back home
        </Link>
      </div>
    );
  }

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
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          Something went wrong
        </h1>

        <p className="text-sm text-text-secondary">
          {error}
        </p>

        <Link
          to="/"
          className="text-sm text-primary hover:underline"
        >
          Back home
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
          to="/"
          className="text-sm text-primary hover:underline"
        >
          Back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 sm:py-8">
      <Container>

        {/* Page header */}
        <div className="mb-5 sm:mb-6">

          <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-2">

            <Link
              to="/results"
              state={state}
              className="hover:text-text transition-colors"
            >
              Results
            </Link>

            <ChevronRight
              className="w-3 h-3"
              strokeWidth={2}
            />

            <span className="text-text">
              Review answers
            </span>


            <Link to="/" className="ml-auto">Back Home</Link>
          </div>

          <h1 className="text-base sm:text-lg font-semibold text-text">
            {quiz.title}
          </h1>

        </div>


        {/* Questions */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">

          {questions.map((question, index) => (
            <ReviewQuestionCard
              key={question.id}
              question={question}
              questionNumber={index + 1}
              selectedOptionId={answers[question.id]}
            />
          ))}

        </div>

      </Container>
    </div>
  );
};

export default ReviewAnswersPage;