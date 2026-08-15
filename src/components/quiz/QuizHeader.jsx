const QuizHeader = ({ quiz, currentQuestionIndex, totalQuestions }) => {
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <div className="pb-3 border-b border-border flex-shrink-0">
      <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-text-secondary mb-2">
        <span className="truncate">{quiz.title}</span>
        <span className="flex-shrink-0">Question {currentQuestionIndex} of {totalQuestions}</span>
      </div>
      <div className="h-1 bg-surface-hover rounded-pill overflow-hidden">
        <div
          className="h-full bg-primary rounded-pill transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default QuizHeader