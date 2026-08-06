
const QuestionCard = ({question, questionNumber}) => {
    console.log(question);
  return (
    <div className="mt-2">
        <div className="flex gap-1 font-semibold text-xl">
            <h2>{questionNumber}.</h2>
        <h2>
            {question.question}
        </h2>
        </div>

        <div className="flex flex-col gap-4 items-start mt-2">
            {question.options.map((option) => (
                <button key={option.id} className="border border-border w-full text-start px-2 py-1 rounded-sm bg-white/50 cursor-pointer hover:bg-surface-hover transition-all duration-200">{option.text}</button>
            ))}
        </div>
    </div>
  )
}

export default QuestionCard