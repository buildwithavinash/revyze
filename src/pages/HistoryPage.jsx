import { useEffect, useState } from "react"
import { getAllQuizAttempts } from "../services/storageService";
import { Link } from "react-router";
import { getQuizById } from "../services/quizService";
import Container from "../components/ui/Container";

const HistoryPage = () => {
    const [attempts, setAttempts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const loadHistory = async () => {
            try{
                setIsLoading(true);
                setError(null);

                const data = await getAllQuizAttempts();
                setAttempts(data);
            }catch (error) {
                console.error(error);
                setError('Unable to load quiz history.')
            }finally{
                setIsLoading(false);
            }
        };

        loadHistory();
    }, [])

    if(isLoading){
        return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-text-secondary">
          Loading history...
        </p>
      </div>
    );
    }

    if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 px-4 text-center">
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


  return (
    <div className="min-h-screen py-6 sm:py-8">
      <Container>

        {/* Page header */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-xs text-text-secondary hover:text-text transition-colors"
          >
            ← Back home
          </Link>

          <h1 className="text-2xl font-semibold text-text mt-3">
            Quiz History
          </h1>

          <p className="text-sm text-text-secondary mt-1">
            Review your previous quiz attempts.
          </p>
        </div>

        {/* Empty state */}
        {attempts.length === 0 ? (
          <div className="border border-border rounded-card bg-surface p-8 text-center">
            <h2 className="font-semibold text-text">
              No quiz attempts yet
            </h2>

            <p className="text-sm text-text-secondary mt-1">
              Complete your first quiz and it will appear here.
            </p>

            <Link
              to="/"
              className="inline-block mt-4 bg-primary text-background px-4 py-2 rounded-button text-sm"
            >
              Explore Quizzes
            </Link>
          </div>
        ) : (

          /* History list */
          <div className="flex flex-col gap-3">

            {attempts.map((attempt) => {

              const quiz = getQuizById(attempt.quizId);

              // Old/deleted quiz protection
              if (!quiz) {
                return null;
              }

              return (
                <div
                  key={attempt.id}
                  className="border border-border rounded-card bg-surface p-4"
                >
                  <div className="flex items-start justify-between gap-4">

                    {/* Quiz information */}
                    <div>
                      <h2 className="font-semibold text-text">
                        {quiz.title}
                      </h2>

                      <p className="text-xs text-text-secondary mt-1">
                        {quiz.difficulty}
                      </p>
                    </div>

                    {/* Score */}
                    <div className="text-right">
                      <p className="text-lg font-semibold text-text">
                        {attempt.results.accuracy}%
                      </p>

                      <p className="text-xs text-text-secondary">
                        Accuracy
                      </p>
                    </div>

                  </div>

                  {/* Stats */}
                  <div className="flex gap-4 mt-4 text-xs text-text-secondary">
                    <span>
                      {attempt.results.correct} correct
                    </span>

                    <span>
                      {attempt.results.wrong} wrong
                    </span>

                    <span>
                      {attempt.results.skipped} skipped
                    </span>

                    <span>
                      {attempt.results.attempted}/
                      {attempt.results.totalQuestions} answered
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-text-secondary mt-3">
                    {new Date(
                      attempt.completedAt
                    ).toLocaleString()}
                  </p>

                </div>
              );
            })}

          </div>
        )}

      </Container>
    </div>
  );
}

export default HistoryPage