const ResumeQuizModal = ({
  answeredQuestions,
  onContinue,
  onStartAgain,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-surface border border-border rounded-card p-5">

        <h2 className="text-lg font-semibold text-text">
          Continue your quiz?
        </h2>

        <p className="text-sm text-text-secondary mt-2">
          You already answered {answeredQuestions} questions
          in this quiz.
        </p>

        <p className="text-sm text-text-secondary mt-1">
          Would you like to continue where you left off?
        </p>

        <div className="flex justify-end gap-2 mt-5">

          <button
            onClick={onStartAgain}
            className="border border-border px-4 py-2 rounded-button text-sm hover:bg-surface-hover transition-colors"
          >
            Start Again
          </button>

          <button
            onClick={onContinue}
            className="bg-primary text-background px-4 py-2 rounded-button text-sm hover:bg-primary-hover transition-colors"
          >
            Continue
          </button>

        </div>

      </div>

    </div>
  );
};

export default ResumeQuizModal;