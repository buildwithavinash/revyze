import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { ChevronRight } from "lucide-react";
import { getQuizBySlug } from "../services/quizService";
import { loadQuestionsForQuiz } from "../services/questionService";
import { getQuizAttemptById } from "../services/storageService";
import Container from "../components/ui/Container";
import ReviewQuestionCard from "../components/quiz/ReviewQuestionCard";
import LoadingState from "../components/common/LoadingState";
import ErrorState from "../components/common/ErrorState";

const LAST_ATTEMPT_KEY = "revyze:lastAttemptId";

const ReviewAnswersPage = () => {
  const { slug } = useParams();
  const { state } = useLocation();

  const quiz = getQuizBySlug(slug);

  const [attemptData, setAttemptData] = useState(
    state?.answers ? state : null,
  );
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!quiz) {
      return;
    }

    let isActive = true;

    const loadReviewQuestions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        let reviewState = state?.answers ? state : null;

        if (!reviewState) {
          const attemptId = sessionStorage.getItem(LAST_ATTEMPT_KEY);

          if (attemptId) {
            const attempt = await getQuizAttemptById(attemptId);

            if (attempt && attempt.quizId === quiz.id) {
              reviewState = {
                quiz,
                results: attempt.results,
                answers: attempt.answers || {},
                attemptId: attempt.id,
                shuffleSeed: attempt.shuffleSeed,
              };
            }
          }
        }

        if (!reviewState || !reviewState.answers) {
          if (isActive) {
            setAttemptData(null);
            setQuestions([]);
            setError("Review data not found.");
          }
          return;
        }

        const seed = reviewState.shuffleSeed ?? "__legacy__";
        const data = await loadQuestionsForQuiz(quiz, { seed });

        if (!isActive) {
          return;
        }

        setAttemptData(reviewState);
        setQuestions(data);
      } catch (loadError) {
        console.error(loadError);

        if (isActive) {
          setError("Unable to load review questions.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadReviewQuestions();

    return () => {
      isActive = false;
    };
  }, [quiz, state]);

  if (!attemptData && !isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          Review data not found
        </h1>

        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Quiz not found</h1>

        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingState message="Loading review..." fullScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <ErrorState
          message={error}
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          No questions available
        </h1>

        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const { answers } = attemptData;

  return (
    <div className="min-h-screen py-6 sm:py-8">
      <Container>
        <div className="mb-5 sm:mb-6">
          <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-2">
            <Link to="/" className="hover:text-text transition-colors">
              Home
            </Link>

            <ChevronRight className="w-3 h-3" strokeWidth={2} />

            <Link
              to={`/quiz/${quiz.slug}`}
              className="hover:text-text transition-colors"
            >
              Quiz
            </Link>

            <ChevronRight className="w-3 h-3" strokeWidth={2} />

            <span className="text-text">Review answers</span>
          </div>

          <h1 className="text-base sm:text-lg font-semibold text-text">
            {quiz.title}
          </h1>
        </div>

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
