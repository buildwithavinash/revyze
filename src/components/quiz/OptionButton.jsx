const OptionButton = ({ option, onAnswerSelect, selectedAnswer, questionId }) => {
  const isSelected = selectedAnswer === option.id;

  return (
    <button
      onClick={() => onAnswerSelect(questionId, option.id)}
      className={`w-full flex items-center gap-3 text-start px-3 py-2.5 rounded-button border text-sm transition-all duration-150 cursor-pointer text-text
        ${isSelected
          ? "border-primary bg-primary/10"
          : "border-border bg-background hover:bg-surface-hover"}`}
    >
      <span
        className={`w-4 h-4 rounded-pill border-2 flex-shrink-0 ${
          isSelected ? "border-primary bg-primary" : "border-border"
        }`}
      />
      {option.text}
    </button>
  )
}

export default OptionButton