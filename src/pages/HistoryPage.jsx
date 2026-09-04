import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle2, CircleAlert } from "lucide-react";

import { getAllQuizAttempts } from "../services/storageService";
import { getQuizById } from "../services/quizService";
import Container from "../components/ui/Container";
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

const HistoryPage = () => {
  const [attempts, setAttempts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getAllQuizAttempts();

        setAttempts(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load quiz history.");
      } finally {
        setIsLoading(false);
      }
    };

    loadHistory();
  }, []);

  // Loading
  if (isLoading) {
    return <LoadingState message="Loading history..." fullScreen />;
  }

  // Error
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

  return (
    <div className="min-h-screen py-6 sm:py-8">
      <Container>
        {/* Header */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-secondary hover:text-text transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
            Back
          </Link>

          <h1 className="text-2xl font-semibold text-text mt-4">
            Quiz History
          </h1>

          <p className="text-sm text-text-secondary mt-1">
            Review your previous quiz attempts.
          </p>
        </div>

        {/* Empty state */}
        {attempts.length === 0 ? (
          <div className="border border-border rounded-card bg-surface p-8 text-center">
            <div className="flex justify-center mb-3">
              <CircleAlert
                className="w-8 h-8 text-text-secondary"
                strokeWidth={1.5}
              />
            </div>

            <h2 className="font-semibold text-text">No quiz attempts yet</h2>

            <p className="text-sm text-text-secondary mt-1">
              Complete your first quiz and it will appear here.
            </p>

            <Link
              to="/"
              className="inline-block mt-4 bg-primary text-background px-4 py-2 rounded-button text-sm hover:bg-primary-hover transition-colors"
            >
              Explore quizzes
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {attempts.map((attempt) => {
              const quiz = getQuizById(attempt.quizId);

              // Protect against deleted/invalid quizzes
              if (!quiz) {
                return null;
              }

              const results = attempt.results;

              const accuracy = results?.accuracy ?? 0;

              const completion = results?.completion ?? 0;

              const scoreStyle = getScoreStyle(accuracy);

              return (
                <Link
                  key={attempt.id}
                  to={`/history/${attempt.id}`}
                  className="group border border-border rounded-card bg-surface p-4 sm:p-5 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                >
                  {/* Top section */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    {/* Quiz information */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold text-text text-sm sm:text-base truncate">
                          {quiz.title}
                        </h2>

                        {accuracy >= quiz.passingScore && (
                          <CheckCircle2
                            className="w-4 h-4 text-success shrink-0"
                            strokeWidth={2}
                          />
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-text-secondary">
                          {quiz.difficulty}
                        </span>

                        <span className="text-text-secondary">·</span>

                        <span className="text-xs text-text-secondary">
                          {quiz.totalQuestions} questions
                        </span>
                      </div>
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-2 sm:flex-col sm:items-end sm:gap-1">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-pill text-sm font-semibold ${scoreStyle}`}
                      >
                        {accuracy}%
                      </span>

                      <span className="text-xs text-text-secondary">
                        Accuracy
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                    <div className="border border-border rounded-button p-2">
                      <p className="text-sm font-medium text-text">
                        {results.correct}
                      </p>

                      <p className="text-[11px] text-text-secondary mt-0.5">
                        Correct
                      </p>
                    </div>

                    <div className="border border-border rounded-button p-2">
                      <p className="text-sm font-medium text-text">
                        {results.wrong}
                      </p>

                      <p className="text-[11px] text-text-secondary mt-0.5">
                        Wrong
                      </p>
                    </div>

                    <div className="border border-border rounded-button p-2">
                      <p className="text-sm font-medium text-text">
                        {results.skipped}
                      </p>

                      <p className="text-[11px] text-text-secondary mt-0.5">
                        Skipped
                      </p>
                    </div>

                    <div className="border border-border rounded-button p-2">
                      <p className="text-sm font-medium text-text">
                        {completion}%
                      </p>

                      <p className="text-[11px] text-text-secondary mt-0.5">
                        Completion
                      </p>
                    </div>
                  </div>

                  {/* Bottom section */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4 pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <span>
                        {results.attempted}/{results.totalQuestions} answered
                      </span>

                      <span>·</span>

                      <span>
                        {new Date(attempt.completedAt).toLocaleString()}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-primary group-hover:underline">
                      Review answers →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default HistoryPage;
