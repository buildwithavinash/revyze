
const OptionButton = ({option, onAnswerSelect, selectedAnswer, questionId, }) => {
  return (
    <button onClick={() => onAnswerSelect(questionId, option.id)} className={`border border-border w-full text-start px-2 py-3 rounded-sm  cursor-pointer  transition-all duration-200 text-sm text-text ${selectedAnswer === option.id ? 'bg-emerald-400 hover:bg-emerald-400' : 'bg-white/50 hover:bg-surface-hover'}`}>
        {option.text}
    </button>
  )
}

export default OptionButton