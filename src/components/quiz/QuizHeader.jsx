
const QuizHeader = ({quiz, currentQuestionIndex, totalQuestions}) => {
    
  return (
    <div className="flex justify-between border-b border-border pb-1 text-sm text-text-secondary">
    <h3 className="">{quiz.title}</h3>
    <h3 className="">Question {currentQuestionIndex} of {totalQuestions}</h3>
    </div>
  )
}

export default QuizHeader