import { Link, useLocation, useParams } from "react-router";
import { ChevronRight } from "lucide-react";
import { getQuizBySlug } from "../services/quizService";
import { loadQuestionsForQuiz } from "../services/questionService";
import { useEffect, useState } from "react";
import Container from "../components/ui/Container";

const badgeStyles = {
  skipped: "bg-warning/10 text-warning",
  correct: "bg-success/10 text-success",
  wrong: "bg-danger/10 text-danger",
};

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
}, [quiz?.id]);

  // Review data doesn't exist
  if (!state?.answers) {
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

  const { answers } = state;

  // Quiz doesn't exist
  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          Quiz not found
        </h1>

        <Link to="/" className="text-sm text-primary hover:underline">
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

        <Link to="/" className="text-sm text-primary hover:underline">
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

        <Link to="/" className="text-sm text-primary hover:underline">
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
          </div>

          <h1 className="text-base sm:text-lg font-semibold text-text">
            {quiz.title}
          </h1>
        </div>

        {/* Questions */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 sm:gap-4">

          {questions.map((question, index) => {

            const selectedOptionId = answers[question.id];

            const selectedOption = question.options.find(
              (option) => option.id === selectedOptionId
            );

            const correctOption = question.options.find(
              (option) => option.id === question.correctOptionId
            );

            const isSkipped = !selectedOptionId;

            const isCorrect =
              selectedOptionId === question.correctOptionId;

            const status = isSkipped
              ? "skipped"
              : isCorrect
                ? "correct"
                : "wrong";

            const isCodeQuestion =
              question.question.includes("\n");

            return (
              <div
                key={question.id}
                className="border border-border rounded-card bg-surface p-3.5 sm:p-4 flex flex-col"
              >

                {/* Question header */}
                <div className="flex items-start justify-between gap-2 mb-3">

                  <h2 className="font-medium text-xs sm:text-sm text-text leading-snug">
                    {index + 1}.{" "}

                    {isCodeQuestion
                      ? question.question.split("\n")[0]
                      : question.question}
                  </h2>

                  <span
                    className={`flex-shrink-0 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-pill ${badgeStyles[status]}`}
                  >
                    {status === "skipped"
                      ? "Skipped"
                      : status === "correct"
                        ? "Correct"
                        : "Wrong"}
                  </span>

                </div>

                {/* Code block */}
                {isCodeQuestion && (
                  <pre className="bg-background border border-border rounded-button p-2.5 sm:p-3 text-[11px] sm:text-xs font-mono text-text overflow-x-auto mb-3 leading-relaxed">
                    {question.question
                      .split("\n")
                      .slice(1)
                      .join("\n")
                      .trim()}
                  </pre>
                )}

                {/* Answer information */}
                <div className="flex flex-col gap-2 mb-3">

                  {/* Skipped */}
                  {isSkipped ? (
                    <p className="text-xs sm:text-sm text-text-secondary bg-warning/10 border-l-2 border-warning pl-3 py-1.5 rounded-r-button">
                      You didn't answer this question.
                    </p>
                  ) : isCorrect ? (

                    /* Correct */
                    <p className="text-xs sm:text-sm bg-success/10 border-l-2 border-success pl-3 py-1.5 rounded-r-button">
                      <span className="font-medium text-text-secondary">
                        Your answer:{" "}
                      </span>

                      <span className="italic text-text">
                        {selectedOption.text}
                      </span>
                    </p>

                  ) : (

                    /* Wrong */
                    <>
                      <p className="text-xs sm:text-sm bg-danger/10 border-l-2 border-danger pl-3 py-1.5 rounded-r-button">
                        <span className="font-medium text-text-secondary">
                          Your answer:{" "}
                        </span>

                        <span className="italic text-text">
                          {selectedOption.text}
                        </span>
                      </p>

                      <p className="text-xs sm:text-sm bg-success/10 border-l-2 border-success pl-3 py-1.5 rounded-r-button">
                        <span className="font-medium text-text-secondary">
                          Correct answer:{" "}
                        </span>

                        <span className="italic text-text">
                          {correctOption.text}
                        </span>
                      </p>
                    </>
                  )}

                </div>

                {/* Explanation */}
                <p className="text-xs sm:text-sm text-text-secondary mt-auto">
                  <span className="font-medium text-text">
                    Explanation:{" "}
                  </span>

                  {question.explanation}
                </p>

              </div>
            );
          })}

        </div>
      </Container>
    </div>
  );
};

export default ReviewAnswersPage;