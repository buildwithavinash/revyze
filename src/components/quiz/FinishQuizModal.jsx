const FinishQuizModal = ({ attemptedQuestions, totalQuestions, onClose, onFinish }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 z-50">
      <div className="bg-background rounded-card p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold text-text mb-2">Finish quiz?</h2>

        <p className="text-sm text-text-secondary mb-1">
          You've answered <span className="font-medium text-text">{attemptedQuestions}</span> out of{" "}
          <span className="font-medium text-text">{totalQuestions}</span> questions.
        </p>
        <p className="text-sm text-text-secondary mb-6">
          You can still go back and change your answers before submitting.
        </p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-button border border-border text-sm text-text hover:bg-surface-hover transition-all duration-200 cursor-pointer"
          >
            Continue quiz
          </button>
          <button
            onClick={onFinish}
            className="px-4 py-2 rounded-button bg-primary text-background text-sm font-medium hover:bg-primary-hover transition-all duration-200 cursor-pointer"
          >
            Finish quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinishQuizModal