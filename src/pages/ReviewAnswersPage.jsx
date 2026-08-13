import { Link, useLocation, useParams } from "react-router";
import { getQuestionsByQuiz, getQuizBySlug } from "../services/quizService";
import Container from '../components/ui/Container'

const ReviewAnswersPage = () => {
  const { slug } = useParams();
  const { state } = useLocation();

  if (!state?.answers) {
    return (
      <div>
        <h1>Review data not found</h1>

        <Link to="/">Back Home</Link>
      </div>
    );
  }

  const { answers } = state;

  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    return (
      <div>
        <h1>Quiz not found!</h1>

        <Link to="/">Back Home</Link>
      </div>
    );
  }

  const questions = getQuestionsByQuiz(quiz.id);
  return (
    <div>
      <Container>

      
      <div>
        <Link to="/results" state={state}>
          Back to Results
        </Link>

        <h1>Review Answers</h1>

        <p>{quiz.title}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {questions.map((question, index) => {
          const selectedOptionId = answers[question.id];
          const selectedOption = question.options.find(
            (option) => option.id === selectedOptionId,
          );

          const correctOption = question.options.find(
            (option) => option.id === question.correctOptionId,
          );

          const isSkipped = !selectedOptionId;

          const isCorrect = selectedOptionId === question.correctOptionId;

          return (
            <div key={question.id} className="border border-border p-3 rounded-md relative shadow shadow-primary/20">
              <h2 className="font-semibold">
                {index + 1}. {question.question}
              </h2>

              <div>
                {isSkipped ? (
                  <p className="border border-yellow-500 text-yellow-600 border-dashed w-fit px-1 py-0.5 text-xs rounded-full bg-yellow-100 absolute -top-2 -right-2">Skipped</p>
                ) : isCorrect ? (
                  <div>
                    <p className="border border-green-500 text-green-600 border-dashed w-fit px-1 py-0.5 text-xs rounded-md bg-green-100 absolute -top-2 -right-2">Correct</p>

                    <p className="font-semibold text-text-secondary">
                      Your Answer: {""}
                      <span className="italic">{selectedOption.text}</span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="border border-red-500 text-red-600 border-dashed w-fit px-1 py-0.5 text-xs rounded-md bg-red-100 absolute -top-2 -right-2">Wrong</p>

                    <p className="font-semibold text-text-secondary mt-1">
                      Your Answer: {""}
                      <span className="italic">{selectedOption.text}</span>
                    </p>

                    <p className="font-semibold text-primary mt-1">
                      Correct Answer: {""}
                      <span className="italic">{correctOption.text}</span>
                    </p>
                  </div>
                )}
              </div>

              {/* explanation */}
              <div className="mt-1">
                <p className="font-semibold text-slate-800">Explanation: <span>{question.explanation}</span></p>

                <p></p>
              </div>
            </div>
          );
        })}
      </div>
      </Container>
    </div>
  );
};

export default ReviewAnswersPage;
