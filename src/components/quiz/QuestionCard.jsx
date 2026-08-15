import OptionButton from "./OptionButton";

const QuestionCard = ({ question, questionNumber, onAnswerSelect, selectedAnswer }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg text-text leading-snug mb-4">
        {questionNumber}. {question.question}
      </h2>

      <div className="flex flex-col gap-2.5">
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