import OptionButton from "./OptionButton";

const QuestionCard = ({question, questionNumber, onAnswerSelect, selectedAnswer}) => {
    console.log(question);
  return (
    <div className="mt-4">
        <div className="flex gap-1 font-semibold text-lg">
            <h2>{questionNumber}.</h2>
        <h2>
            {question.question}
        </h2>
        </div>

        <div className="flex flex-col gap-4 items-start mt-4">
            {question.options.map((option) => (
               
               <OptionButton key={option.id} option={option} onAnswerSelect={onAnswerSelect} selectedAnswer={selectedAnswer} questionId={question.id}/>
                
            ))}
        </div>
    </div>
  )
}

export default QuestionCard