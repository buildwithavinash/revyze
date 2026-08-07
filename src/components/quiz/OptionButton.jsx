
const OptionButton = ({option, onAnswerSelect, selectedAnswer, questionId, }) => {
  return (
    <button onClick={() => onAnswerSelect(questionId, option.id)} className={`border border-border w-full text-start px-2 py-3 rounded-sm bg-white/50 cursor-pointer hover:bg-surface-hover transition-all duration-200 text-sm text-text ${selectedAnswer === option.id ? 'bg-emerald-400' : ''}`}>
        {option.text}
    </button>
  )
}

export default OptionButton