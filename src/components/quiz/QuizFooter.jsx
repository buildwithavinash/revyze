const QuizFooter = ({ onPrevious, onNext, currentQuestionIndex, totalQuestions, onEndQuiz }) => {
  return (
    <div className="flex items-center justify-between pt-3 sm:pt-4 mt-2 border-t border-border flex-shrink-0">
      <button
        onClick={onPrevious}
        disabled={currentQuestionIndex === 0}
        className="px-2.5 sm:px-4 py-2 rounded-button border border-border text-xs sm:text-sm text-text hover:bg-surface-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
      >
        Previous
      </button>

      <div className="flex items-center gap-1.5 sm:gap-3">
        <button
          onClick={onEndQuiz}
          className="px-2 sm:px-3 py-2 text-xs sm:text-sm text-danger hover:opacity-80 transition-all duration-200 cursor-pointer"
        >
          End quiz
        </button>
        <button
          onClick={onNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
          className="px-3.5 sm:px-4 py-2 rounded-button bg-primary text-background text-xs sm:text-sm font-medium hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default QuizFooter