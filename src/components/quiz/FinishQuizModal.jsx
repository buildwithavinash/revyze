const FinishQuizModal = ({
  attemptedQuestions,
  totalQuestions,
  onClose,
  onFinish,
}) => {
  console.log("");
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-background rounded-lg p-6 w-[500px] flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Finish Quiz?</h2>

        <p className="text-text mb-1">
          You have answered
          <span className="font-bold"> {attemptedQuestions} </span>
          out of
          <span className="font-bold"> {totalQuestions} </span>questions
        </p>

        <p className="text-text-secondary mb-4">You can still return and change your answers before submitting.</p>

        <div className="flex mt-auto justify-end gap-2">
          <button
            onClick={onClose}
            className="border border-border hover:bg-surface-hover px-4 py-2 rounded-md cursor-pointer transition-all duration-200"
          >
            Continue Quiz
          </button>
          <button
            onClick={onFinish}
            className="bg-primary text-background px-4 py-2 rounded-md cursor-pointer hover:bg-primary-hover transition-all duration-200"
          >
            Finish Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishQuizModal;
