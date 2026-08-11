import { Link, useLocation, useParams } from "react-router"
import { getQuestionsByQuiz, getQuizBySlug } from "../services/quizService";

const ReviewAnswersPage = () => {
    const {slug} = useParams();
    const {state} = useLocation();
    
    if(!state?.answers){
        return (
            <div>
                <h1>
                    Review data not found
                </h1>

                <Link to='/'>
                    Back Home
                </Link>
            </div>
        )
    }
    
    const {answers} = state;

    const quiz = getQuizBySlug(slug);

    if(!quiz){
        return (
            <div>
                <h1>Quiz not found!</h1>

                <Link to='/'>Back Home</Link>
            </div>
        )
    }

    const questions = getQuestionsByQuiz(quiz.id);
  return (
    <div>
        <div>
            <Link to='/results' state={state}>
            Back to Results
            </Link>

            <h1>Review Answers</h1>

            <p>{quiz.title}</p>
        </div>

        <div>
            {questions.map((question, index) => {
                const selectedOptionId = answers[question.id];
                const selectedOption = question.options.find(
                    (option) => option.id === selectedOptionId
                )

                const correctOption = question.options.find(
                    (option) => option.id === question.correctOptionId
                )

                const isSkipped = !selectedOptionId;

                const isCorrect = selectedOptionId === question.correctOptionId;

                return (
                    <div key={question.id}>
                        <h2>
                            {index + 1}. {question.question}
                        </h2>

                        <div>
                            {isSkipped ? (
                                <p>
                                    Skipped
                                </p>
                            ) : isCorrect ? (
                                <div>
                                <p>
                                    Correct
                                </p>

                                <p>
                                    Your Answer: 
                                    <span>{selectedOption.text}</span>
                                </p>
                                </div>
                            ) : (
                                <div>
                                    <p>Wrong</p>

                                    <p>
                                        Your Answer:
                                        <span>{selectedOption.text}</span>
                                    </p>

                                    <p>
                                        Correct Answer: 
                                        <span>{correctOption.text}</span>
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* explanation */}
                        <div>
                            <p>
                                Explanation
                            </p>

                            <p>
                                {question.explanation}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default ReviewAnswersPage