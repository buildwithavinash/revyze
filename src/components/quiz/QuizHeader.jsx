
const QuizHeader = ({quiz, currentQuestionIndex, totalQuestions}) => {
    console.log(quiz);
  return (
    <div className="flex justify-between border-b border-border pb-1">
    <h3 className="">{quiz.title}</h3>
    <h3 className="">{currentQuestionIndex}/{totalQuestions}</h3>
    </div>
  )
}

export default QuizHeader