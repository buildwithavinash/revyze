import { Link, useNavigate, useParams } from "react-router";
import { calculateQuizResults, getQuestionsByQuiz, getQuizBySlug } from "../services/quizService";
import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import Container from '../components/ui/Container'
import QuizFooter from "../components/quiz/QuizFooter";
import { useState } from "react";
import FinishQuizModal from "../components/quiz/FinishQuizModal";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFinishModal, setShowFinishModal] = useState(false);
  const { slug } = useParams();
  const navigate = useNavigate();
  const quiz = getQuizBySlug(slug);

  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Quiz not found</h1>
        <Link to='/' className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    )
  }

  const questions = getQuestionsByQuiz(quiz.id);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">No questions available</h1>
        <Link to='/' className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleAnswerSelect = (questionId, optionId) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: optionId }));
  }

  const handleEndQuiz = () => {
    setShowFinishModal(true);
  }

  const finishQuiz = () => {
    setShowFinishModal(false)
    const results = calculateQuizResults(questions, answers);

    navigate('/results', {
      state: { quiz, results, answers }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-1 sm:px-4">
      <Container>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl sm:w-xl lg:w-2xl h-[560px] sm:h-[580px] flex flex-col border border-border rounded-card bg-surface p-4 sm:p-5 md:p-6">
            <QuizHeader
              quiz={quiz}
              currentQuestionIndex={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />

            <div className="flex-1 min-h-0 min-w-0 flex flex-col py-3 sm:py-4">
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                onAnswerSelect={handleAnswerSelect}
                selectedAnswer={answers[currentQuestion.id]}
              />
            </div>

            <QuizFooter
              onNext={handleNext}
              onPrevious={handlePrevious}
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              onEndQuiz={handleEndQuiz}
            />
          </div>
        </div>
      </Container>

      {showFinishModal && (
        <FinishQuizModal
          attemptedQuestions={Object.keys(answers).length}
          totalQuestions={questions.length}
          onClose={() => setShowFinishModal(false)}
          onFinish={finishQuiz}
        />
      )}
    </div>
  );
};

export default QuizPage;