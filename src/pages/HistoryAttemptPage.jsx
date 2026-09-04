import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, CircleX, Clock3 } from "lucide-react";

import Container from "../components/ui/Container";

import { getQuizAttemptById } from "../services/storageService";

import { getQuizById } from "../services/quizService";
import LoadingState from "../components/common/LoadingState";
import ErrorState from "../components/common/ErrorState";

const getScoreStyle = (accuracy) => {
  if (accuracy >= 90) {
    return "bg-success/10 text-success";
  }

  if (accuracy >= 70) {
    return "bg-warning/10 text-warning";
  }

  return "bg-danger/10 text-danger";
};

const HistoryAttemptPage = () => {
  const { attemptId } = useParams();

  const [attempt, setAttempt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAttempt = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getQuizAttemptById(attemptId);

        if (!data) {
          setError("Quiz attempt not found.");
          return;
        }

        setAttempt(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load quiz attempt.");
      } finally {
        setIsLoading(false);
      }
    };

    loadAttempt();
  }, [attemptId]);

  // Loading
  if (isLoading) {
    return <LoadingState message="Loading attempt..." fullScreen />;
  }

  // Attempt not found
  if (error || !attempt) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        {error?.startsWith("Unable") ? (
          <ErrorState
            title="Unable to load attempt"
            message={error}
            onRetry={() => window.location.reload()}
          />
        ) : (
          <div className="text-center">
            <h1 className="text-lg font-semibold text-text">Attempt not found</h1>
            <p className="mt-2 text-sm text-text-secondary">{error}</p>
            <Link to="/history" className="inline-block mt-3 text-sm text-primary hover:underline">
              Back to history
            </Link>
          </div>
        )}
      </div>
    );
  }

  const quiz = getQuizById(attempt.quizId);

  // Quiz no longer exists
  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Quiz not found</h1>

        <p className="text-sm text-text-secondary">
          This quiz is no longer available.
        </p>

        <Link to="/history" className="text-sm text-primary hover:underline">
          Back to history
        </Link>
      </div>
    );
  }

  const results = attempt.results;

  const accuracy = results?.accuracy ?? 0;
  const completion = results?.completion ?? 0;

  const passed = accuracy >= quiz.passingScore;

  const scoreStyle = getScoreStyle(accuracy);

  return (
    <div className="min-h-screen py-6 sm:py-8">
      <Container>
        {/* Back */}
        <Link
          to="/history"
          className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
          Back to history
        </Link>

        {/* Header */}
        <div className="mt-5 sm:mt-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-text">
                {quiz.title}
              </h1>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs sm:text-sm text-text-secondary">
                  {quiz.difficulty}
                </span>

                <span className="text-text-secondary">·</span>

                <span className="text-xs sm:text-sm text-text-secondary">
                  Previous attempt
                </span>
              </div>
            </div>

            {/* Pass / fail */}
            <div
              className={`inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-pill text-xs font-medium ${
                passed
                  ? "bg-success/10 text-success"
                  : "bg-danger/10 text-danger"
              }`}
            >
              {passed ? (
                <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
              ) : (
                <CircleX className="w-3.5 h-3.5" strokeWidth={2} />
              )}

              {passed ? "Passed" : "Not passed"}
            </div>
          </div>
        </div>

        {/* Results card */}
        <div className="border border-border rounded-card bg-surface p-4 sm:p-5 mt-6">
          {/* Score */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs text-text-secondary">Accuracy</p>

              <div className="flex items-center gap-2 mt-1">
                <p className="text-3xl sm:text-4xl font-semibold text-text">
                  {accuracy}%
                </p>

                <span
                  className={`text-xs font-medium px-2 py-1 rounded-pill ${scoreStyle}`}
                >
                  {passed
                    ? `Passed · ${quiz.passingScore}% required`
                    : `Pass mark · ${quiz.passingScore}%`}
                </span>
              </div>
            </div>

            {/* Completion */}
            <div className="sm:text-right">
              <p className="text-xs text-text-secondary">Completion</p>

              <p className="text-xl font-semibold text-text mt-1">
                {completion}%
              </p>

              <p className="text-xs text-text-secondary mt-0.5">
                {results.attempted} / {results.totalQuestions} answered
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-6">
            <div className="border border-border rounded-button p-3 text-center">
              <p className="text-lg font-semibold text-text">
                {results.correct}
              </p>

              <p className="text-xs text-text-secondary mt-0.5">Correct</p>
            </div>

            <div className="border border-border rounded-button p-3 text-center">
              <p className="text-lg font-semibold text-text">{results.wrong}</p>

              <p className="text-xs text-text-secondary mt-0.5">Wrong</p>
            </div>

            <div className="border border-border rounded-button p-3 text-center">
              <p className="text-lg font-semibold text-text">
                {results.skipped}
              </p>

              <p className="text-xs text-text-secondary mt-0.5">Skipped</p>
            </div>

            <div className="border border-border rounded-button p-3 text-center">
              <p className="text-lg font-semibold text-text">
                {results.totalQuestions}
              </p>

              <p className="text-xs text-text-secondary mt-0.5">Total</p>
            </div>
          </div>

          {/* Attempt metadata */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-5 pt-4 border-t border-border">
            <div className="flex items-center gap-1.5 text-xs text-text-secondary">
              <Clock3 className="w-3.5 h-3.5" strokeWidth={2} />
              Completed {new Date(attempt.completedAt).toLocaleString()}
            </div>

            {attempt.startedAt && (
              <p className="text-xs text-text-secondary">
                Started {new Date(attempt.startedAt).toLocaleString()}
              </p>
            )}
          </div>

          {/* Review action */}
          <div className="flex justify-end mt-5">
            <Link
              to={`/history/${attempt.id}/review`}
              className="inline-flex items-center justify-center bg-primary text-background px-4 py-2 rounded-button text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              Review answers
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HistoryAttemptPage;
