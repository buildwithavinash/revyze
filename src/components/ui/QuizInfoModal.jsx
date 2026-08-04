import { Link } from "react-router"

const QuizInfoModal = ({quiz, onClose}) => {
  return (
    // outer/overlay
    <div className="fixed inset-0 bg-slate-900/70 flex items-center justify-center z-50">

        {/* main modal */}
        <div className="bg-background border border-border rounded-md w-full max-w-lg p-6">
           <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{quiz.title}</h2>
            <button onClick={onClose} className="border border-border px-1 py-0.5 rounded-md bg-surface hover:bg-surface-hover text-sm transition-all duration-200 cursor-pointer">Close</button>
           </div>

           <p className="text-text-secondary mt-3">{quiz.description}</p>

            {/* metadata */}
           <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="border border-border rounded-md p-1">
                <p className="text-sm text-text-secondary">Questions</p>
                <p>{quiz.totalQuestions}</p>
            </div>
            <div className="border border-border rounded-md p-1">
                <p className="text-sm text-text-secondary">Duration</p>
                <p>{quiz.duration} mins</p>
            </div>
            <div className="border border-border rounded-md p-1">
                <p className="text-sm text-text-secondary">Difficulty</p>
                <p>{quiz.difficulty}</p>
            </div>
           </div>

           {/* instructions */}
           <div className="mt-6">
            <h3 className="font-semibold">Instructions</h3>

            <ul className="list-disc ml-6 mt-3 space-y-2">
                <li>Read each question carefully.</li>
                <li>You can go back anytime.</li>
                <li>You can change answers.</li>
                <li>Results appear after submission.</li>
            </ul>
           </div>

           {/* actions */}
           <div className="flex justify-end gap-3 mt-8">
            <button onClick={onClose}
            className="border border-border px-4 py-2 rounded-lg cursor-pointer hover:bg-surface-hover transition-all duration-200">Cancel</button>
            <Link to={`/quiz/${quiz.slug}`}
            className="bg-primary text-background px-4 py-2 rounded-lg cursor-pointer hover:bg-primary-hover transition-all duration-200">Start Quiz</Link>
           </div>
        </div>
    </div>
  )
}

export default QuizInfoModal