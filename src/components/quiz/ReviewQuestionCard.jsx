const badgeStyles = {
  skipped: "bg-warning/10 text-warning",
  correct: "bg-success/10 text-success",
  wrong: "bg-danger/10 text-danger",
};

const ReviewQuestionCard = ({
  question,
  questionNumber,
  selectedOptionId,
}) => {
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

  const isCodeQuestion = question.question.includes("\n");

  return (
    <div className="border border-border rounded-card bg-surface p-3.5 sm:p-4 flex flex-col">

      {/* Question header */}
      <div className="flex items-start justify-between gap-2 mb-3">

        <h2 className="font-medium text-xs sm:text-sm text-text leading-snug">
          {questionNumber}.{" "}

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


      {/* Answer */}
      <div className="flex flex-col gap-2 mb-3">

        {isSkipped ? (

          <p className="text-xs sm:text-sm text-text-secondary bg-warning/10 border-l-2 border-warning pl-3 py-1.5 rounded-r-button">
            You didn't answer this question.
          </p>

        ) : isCorrect ? (

          <p className="text-xs sm:text-sm bg-success/10 border-l-2 border-success pl-3 py-1.5 rounded-r-button">

            <span className="font-medium text-text-secondary">
              Your answer:{" "}
            </span>

            <span className="italic text-text">
              {selectedOption?.text}
            </span>

          </p>

        ) : (

          <>
            <p className="text-xs sm:text-sm bg-danger/10 border-l-2 border-danger pl-3 py-1.5 rounded-r-button">

              <span className="font-medium text-text-secondary">
                Your answer:{" "}
              </span>

              <span className="italic text-text">
                {selectedOption?.text}
              </span>

            </p>

            <p className="text-xs sm:text-sm bg-success/10 border-l-2 border-success pl-3 py-1.5 rounded-r-button">

              <span className="font-medium text-text-secondary">
                Correct answer:{" "}
              </span>

              <span className="italic text-text">
                {correctOption?.text}
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
};

export default ReviewQuestionCard;