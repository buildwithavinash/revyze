import OptionButton from "./OptionButton";

const QuestionCard = ({ question, questionNumber, onAnswerSelect, selectedAnswer }) => {
  const isCodeQuestion = question.question.includes("\n");
  const questionLines = question.question.split("\n");
  const questionTitle = isCodeQuestion ? questionLines[0] : question.question;
  const codeBlock = isCodeQuestion ? questionLines.slice(1).join("\n") : null;

  return (
    <div className="h-full flex flex-col">
      <h2 className="font-semibold text-base sm:text-lg text-text leading-snug mb-3 flex-shrink-0">
        {questionNumber}. {questionTitle}
      </h2>

      {isCodeQuestion && (
        <pre className="bg-background border border-border rounded-button p-3 sm:p-3.5 text-xs sm:text-sm font-mono text-text overflow-auto mb-3 sm:mb-4 leading-relaxed flex-1 min-h-0">
          {codeBlock.trim()}
        </pre>
      )}

      <div className="flex flex-col gap-2 sm:gap-2.5 flex-shrink-0">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            onAnswerSelect={onAnswerSelect}
            selectedAnswer={selectedAnswer}
            questionId={question.id}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard