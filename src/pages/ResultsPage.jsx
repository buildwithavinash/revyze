import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ClipboardCheck } from "lucide-react";
import {
  getCategoryById,
  getQuizFeedback,
  getQuizById,
} from "../services/quizService";
import { getQuizAttemptById } from "../services/storageService";

const LAST_ATTEMPT_KEY = "revyze:lastAttemptId";

const ResultsPage = () => {
  const { state } = useLocation();
  const [resolvedState, setResolvedState] = useState(state || null);
  const [isLoading, setIsLoading] = useState(!state);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let isActive = true;

    if (state) {
      if (state.attemptId) {
        sessionStorage.setItem(LAST_ATTEMPT_KEY, String(state.attemptId));
      }
      return undefined;
    }

    const loadLastAttempt = async () => {
      try {
        const attemptId = sessionStorage.getItem(LAST_ATTEMPT_KEY);

        if (!attemptId) {
          if (isActive) {
            setResolvedState(null);
            setIsLoading(false);
          }
          return;
        }

        const attempt = await getQuizAttemptById(attemptId);

        if (!attempt) {
          if (isActive) {
            setResolvedState(null);
            setIsLoading(false);
          }
          return;
        }

        const quiz = getQuizById(attempt.quizId);

        if (!quiz) {
          throw new Error("Quiz not found.");
        }

        if (isActive) {
          setResolvedState({
            quiz,
            results: attempt.results,
            answers: attempt.answers || {},
            attemptId: attempt.id,
            shuffleSeed: attempt.shuffleSeed,
          });
        }
      } catch (error) {
        console.error(error);

        if (isActive) {
          setLoadError("Unable to restore your last quiz results.");
          setResolvedState(null);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadLastAttempt();

    return () => {
      isActive = false;
    };
  }, [state]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-text-secondary">Loading results...</p>
      </div>
    );
  }

  if (!resolvedState) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">No results found</h1>
        <p className="text-sm text-text-secondary">
          {loadError || "Finish a quiz to see your results here."}
        </p>
        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const { quiz, results, answers, attemptId } = resolvedState;
  const category = getCategoryById(quiz.categoryId);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Category not found</h1>
        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const feedback = getQuizFeedback(results.accuracy, results.completion);
  const reviewHref = attemptId
    ? `/history/${attemptId}/review`
    : `/quiz/${quiz.slug}/review`;

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="w-full max-w-md border border-border rounded-card bg-surface p-5 sm:p-6 text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-pill bg-primary/10 flex items-center justify-center">
          <ClipboardCheck
            className="w-6 h-6 sm:w-7 sm:h-7 text-primary"
            strokeWidth={2}
          />
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-text">
          Quiz completed
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary mb-5">
          {quiz.title}
        </p>

        <div className="mb-1">
          <span className="text-3xl sm:text-4xl font-semibold text-text">
            {results.correct}
          </span>
          <span className="text-base sm:text-lg text-text-secondary">
            {" "}
            / {results.totalQuestions}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-text-secondary mb-5">
          {results.accuracy}% accuracy · {results.completion}% completed
        </p>

        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="rounded-button bg-success/10 py-2 sm:py-2.5">
            <p className="text-base sm:text-lg font-semibold text-success">
              {results.correct}
            </p>
            <p className="text-[11px] sm:text-xs text-success">Correct</p>
          </div>

          <div className="rounded-button bg-danger/10 py-2 sm:py-2.5">
            <p className="text-base sm:text-lg font-semibold text-danger">
              {results.wrong}
            </p>
            <p className="text-[11px] sm:text-xs text-danger">Wrong</p>
          </div>

          <div className="rounded-button bg-surface-hover py-2 sm:py-2.5">
            <p className="text-base sm:text-lg font-semibold text-text-secondary">
              {results.skipped}
            </p>
            <p className="text-[11px] sm:text-xs text-text-secondary">
              Skipped
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-text mb-0.5">
            {feedback.title}
          </p>
          <p className="text-xs sm:text-sm text-text-secondary">
            {feedback.message}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Link
            to={`/quiz/${quiz.slug}`}
            className="w-full px-4 py-2.5 rounded-button bg-primary text-background text-sm font-medium hover:bg-primary-hover transition-all duration-200"
          >
            Retry quiz
          </Link>

          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              to={reviewHref}
              state={
                attemptId
                  ? undefined
                  : { quiz, results, answers, attemptId, shuffleSeed: resolvedState.shuffleSeed }
              }
              className="flex-1 px-4 py-2 rounded-button border border-border text-sm text-text hover:bg-surface-hover transition-all duration-200"
            >
              Review answers
            </Link>
            <Link
              to={`/category/${category.slug}`}
              className="flex-1 px-4 py-2 rounded-button border border-border text-sm text-text hover:bg-surface-hover transition-all duration-200"
            >
              Back to category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
