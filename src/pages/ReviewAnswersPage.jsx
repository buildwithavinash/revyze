import { Link, useLocation, useParams } from "react-router";
import { ChevronRight } from "lucide-react";
import { getQuestionsByQuiz, getQuizBySlug } from "../services/quizService";
import Container from '../components/ui/Container'

const badgeStyles = {
  skipped: "bg-warning/10 text-warning",
  correct: "bg-success/10 text-success",
  wrong: "bg-danger/10 text-danger",
};

const ReviewAnswersPage = () => {
  const { slug } = useParams();
  const { state } = useLocation();

  if (!state?.answers) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Review data not found</h1>
        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const { answers } = state;
  const quiz = getQuizBySlug(slug);

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

  const questions = getQuestionsByQuiz(quiz.id);

  return (
    <div className="min-h-screen py-8">
      <Container>

        {/* breadcrumb + header */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 text-xs text-text-secondary mb-2">
            <Link to="/results" state={state} className="hover:text-text transition-colors">
              Results
            </Link>
            <ChevronRight className="w-3 h-3" strokeWidth={2} />
            <span className="text-text">Review answers</span>
          </div>
          <h1 className="text-lg font-semibold text-text">{quiz.title}</h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {questions.map((question, index) => {
            const selectedOptionId = answers[question.id];
            const selectedOption = question.options.find(
              (option) => option.id === selectedOptionId,
            );
            const correctOption = question.options.find(
              (option) => option.id === question.correctOptionId,
            );

            const isSkipped = !selectedOptionId;
            const isCorrect = selectedOptionId === question.correctOptionId;
            const status = isSkipped ? "skipped" : isCorrect ? "correct" : "wrong";
            const isCodeQuestion = question.question.includes("\n");

            return (
              <div
                key={question.id}
                className="border border-border rounded-card bg-surface p-4 flex flex-col"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2 className="font-medium text-sm text-text leading-snug">
                    {index + 1}. {isCodeQuestion ? question.question.split("\n")[0] : question.question}
                  </h2>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-pill ${badgeStyles[status]}`}
                  >
                    {status === "skipped" ? "Skipped" : status === "correct" ? "Correct" : "Wrong"}
                  </span>
                </div>

                {isCodeQuestion && (
                  <pre className="bg-background border border-border rounded-button p-3 text-xs font-mono text-text overflow-x-auto mb-3 leading-relaxed">
                    {question.question.split("\n").slice(1).join("\n")}
                  </pre>
                )}

                <div className="flex flex-col gap-2 mb-3">
                  {isSkipped ? (
                    <p className="text-sm text-text-secondary bg-warning/10 border-l-2 border-warning pl-3 py-1.5 rounded-r-button">
                      You didn't answer this question.
                    </p>
                  ) : isCorrect ? (
                    <p className="text-sm bg-success/10 border-l-2 border-success pl-3 py-1.5 rounded-r-button">
                      <span className="font-medium text-text-secondary">Your answer: </span>
                      <span className="italic text-text">{selectedOption.text}</span>
                    </p>
                  ) : (
                    <>
                      <p className="text-sm bg-danger/10 border-l-2 border-danger pl-3 py-1.5 rounded-r-button">
                        <span className="font-medium text-text-secondary">Your answer: </span>
                        <span className="italic text-text">{selectedOption.text}</span>
                      </p>
                      <p className="text-sm bg-success/10 border-l-2 border-success pl-3 py-1.5 rounded-r-button">
                        <span className="font-medium text-text-secondary">Correct answer: </span>
                        <span className="italic text-text">{correctOption.text}</span>
                      </p>
                    </>
                  )}
                </div>

                <p className="text-sm text-text-secondary mt-auto">
                  <span className="font-medium text-text">Explanation: </span>
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