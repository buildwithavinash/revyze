import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";

import Container from "../components/ui/Container";
import {
  getQuizAttemptById,
} from "../services/storageService";

import {
  getQuizById,
} from "../services/quizService";

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-text-secondary">
          Loading attempt...
        </p>
      </div>
    );
  }

  if (error || !attempt) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">

        <h1 className="text-lg font-semibold text-text">
          Attempt not found
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

  const quiz = getQuizById(attempt.quizId);

  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">

        <h1 className="text-lg font-semibold text-text">
          Quiz not found
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

        <Link
          to="/history"
          className="text-xs text-text-secondary hover:text-text transition-colors"
        >
          ← Back to history
        </Link>

        <div className="mt-4">

          <h1 className="text-2xl font-semibold text-text">
            {quiz.title}
          </h1>

          <p className="text-sm text-text-secondary mt-1">
            Previous attempt
          </p>

        </div>

        {/* Results */}

        <div className="border border-border rounded-card bg-surface p-5 mt-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-text-secondary">
                Accuracy
              </p>

              <p className="text-3xl font-semibold text-text">
                {attempt.results.accuracy}%
              </p>
            </div>

            <div className="text-right">

              <p className="text-sm text-text-secondary">
                Completed
              </p>

              <p className="text-sm text-text">
                {new Date(
                  attempt.completedAt
                ).toLocaleString()}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">

            <div className="border border-border rounded-button p-3 text-center">
              <p className="text-lg font-semibold text-text">
                {attempt.results.correct}
              </p>

              <p className="text-xs text-text-secondary">
                Correct
              </p>
            </div>

            <div className="border border-border rounded-button p-3 text-center">
              <p className="text-lg font-semibold text-text">
                {attempt.results.wrong}
              </p>

              <p className="text-xs text-text-secondary">
                Wrong
              </p>
            </div>

            <div className="border border-border rounded-button p-3 text-center">
              <p className="text-lg font-semibold text-text">
                {attempt.results.skipped}
              </p>

              <p className="text-xs text-text-secondary">
                Skipped
              </p>
            </div>

          </div>

<div className="flex items-center justify-end">

                <Link
  to={`/history/${attempt.id}/review`}
  className="inline-block  mt-5 bg-primary text-background px-4 py-2 rounded-button text-sm"
>
  Review Answers
</Link>
  </div>
        </div>

      </Container>

    </div>
  );
};

export default HistoryAttemptPage;