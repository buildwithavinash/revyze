import OptionButton from "./OptionButton";

const parseQuestionContent = (rawQuestion, type) => {
  const fencedCodeMatch = rawQuestion.match(
    /^([\s\S]*?)```(?:[a-zA-Z]+)?\n([\s\S]*?)```([\s\S]*)$/,
  );

  if (fencedCodeMatch) {
    const prompt = `${fencedCodeMatch[1]}${fencedCodeMatch[3]}`.trim();

    return {
      prompt: prompt || rawQuestion,
      code: fencedCodeMatch[2].trim(),
    };
  }

  if (type === "code" || rawQuestion.includes("\n")) {
    const [promptLine, ...codeLines] = rawQuestion.split("\n");

    return {
      prompt: promptLine.trim(),
      code: codeLines.join("\n").trim(),
    };
  }

  return {
    prompt: rawQuestion,
    code: "",
  };
};

const QuestionCard = ({ question, questionNumber, onAnswerSelect, selectedAnswer }) => {
  const { prompt, code } = parseQuestionContent(question.question, question.type);

  return (
    <div className="h-full min-w-0 flex flex-col">
      <h2 className="font-semibold text-base sm:text-lg text-text leading-snug mb-3 shrink-0">
        {questionNumber}. {prompt}
      </h2>

      {code && (
        <pre className="bg-background border border-border rounded-button p-3 sm:p-3.5 text-[11px] sm:text-sm font-mono text-text overflow-auto whitespace-pre leading-relaxed mb-3 sm:mb-4 flex-1 min-h-0 min-w-0 w-full">
          {code}
        </pre>
      )}

      <div className="flex flex-col gap-2 sm:gap-2.5 shrink-0">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            onAnswerSelect={onAnswerSelect}
            selectedAnswer={selectedAnswer}
            questionId={question.id}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard
