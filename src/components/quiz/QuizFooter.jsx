
const QuizFooter = ({onPrevious, onNext, currentQuestionIndex, totalQuestions}) => {
  return (
    <div className="mt-4">
        <div className="flex justify-between">
            <button onClick={onPrevious} disabled={currentQuestionIndex === 0} className="border border-amber-300 bg-amber-300/30 px-2 py-1 rounded-md cursor-pointer">Previous</button>
            <button onClick={onNext} disabled={currentQuestionIndex === totalQuestions - 1} className="border border-green-300 bg-green-300/30 px-2 py-1 rounded-md cursor-pointer">Next</button>
        </div>

        <div>
            <button>End Quiz</button>
        </div>
    </div>
  )
}

export default QuizFooter