import { Link } from "react-router"
import { X, HelpCircle, Clock } from "lucide-react"

const difficultyStyles = {
  Beginner: "bg-success/10 text-success",
  Intermediate: "bg-warning/10 text-warning",
  Advanced: "bg-danger/10 text-danger",
};

const QuizInfoModal = ({ quiz, onClose }) => {
  return (
    // outer/overlay
    <div className="fixed inset-0 bg-slate-900/70 flex items-center justify-center z-50 px-4 py-6">

      {/* main modal */}
      <div className="bg-background border border-border rounded-card w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto p-5 sm:p-6">

        <div className="flex justify-between items-start gap-3">
          <h2 className="text-lg sm:text-xl font-semibold text-text leading-snug">{quiz.title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 p-1.5 rounded-button hover:bg-surface-hover text-text-secondary transition-all duration-200 cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
          </button>
        </div>

        <p className="text-sm sm:text-base text-text-secondary mt-2 sm:mt-3">{quiz.description}</p>

        {/* metadata */}
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 py-3 sm:py-3.5 border-y border-border mt-4 text-xs sm:text-sm text-text-secondary">
          <span className="flex items-center gap-1.5">
            <HelpCircle size={14} /> {quiz.totalQuestions} questions
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {quiz.estimatedTime} min
          </span>
          <span
            className={`text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-pill ${difficultyStyles[quiz.difficulty]}`}
          >
            {quiz.difficulty}
          </span>
        </div>

        {/* instructions */}
        <div className="mt-4 sm:mt-6">
          <h3 className="font-medium text-sm sm:text-base text-text mb-2 sm:mb-3">Instructions</h3>

          <ul className="text-xs sm:text-sm text-text-secondary space-y-1.5 sm:space-y-2 list-disc ml-5">
            <li>Read each question carefully.</li>
            <li>You can go back anytime.</li>
            <li>You can change answers.</li>
            <li>Results appear after submission.</li>
          </ul>
        </div>

        {/* actions */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-6 sm:mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2.5 sm:py-2 rounded-button border border-border text-sm text-text hover:bg-surface-hover transition-all duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <Link
            to={`/quiz/${quiz.slug}`}
            className="text-center bg-primary text-background px-4 py-2.5 sm:py-2 rounded-button text-sm font-medium hover:bg-primary-hover transition-all duration-200"
          >
            Start quiz
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuizInfoModal