import { Link, useNavigate, useParams } from "react-router";
import { calculateQuizResults, getQuizBySlug } from "../services/quizService";
import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import Container from "../components/ui/Container";
import QuizFooter from "../components/quiz/QuizFooter";
import { useEffect, useState } from "react";
import FinishQuizModal from "../components/quiz/FinishQuizModal";
import { loadQuestionsForQuiz } from "../services/questionService";
import { getAllQuizAttempts, saveQuizAttempt } from "../services/storageService";

const QuizPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const quiz = getQuizBySlug(slug);

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [quizStartedAt] = useState(()=> Date.now());

  // Load questions for the selected quiz
  useEffect(() => {
    if (!quiz) return;

    const loadQuizQuestions = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await loadQuestionsForQuiz(quiz);

        setQuestions(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load quiz questions.");
      } finally {
        setIsLoading(false);
      }
    };

    loadQuizQuestions();
  }, [quiz?.id]);

  // Invalid quiz
  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          Quiz not found
        </h1>

        <Link
          to="/"
          className="text-sm text-primary hover:underline"
        >
          Back home
        </Link>
      </div>
    );
  }

  // Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading quiz...</p>
      </div>
    );
  }

  // Loading error
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          Something went wrong
        </h1>

        <p className="text-sm text-text-secondary">
          {error}
        </p>

        <Link
          to="/"
          className="text-sm text-primary hover:underline"
        >
          Back home
        </Link>
      </div>
    );
  }

  // Quiz exists, loading finished, but no questions
  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">
          No questions available
        </h1>

        <Link
          to="/"
          className="text-sm text-primary hover:underline"
        >
          Back home
        </Link>
      </div>
    );
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
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleEndQuiz = () => {
    setShowFinishModal(true);
  };

  const finishQuiz = async () => {
    setShowFinishModal(false);

    const results = calculateQuizResults(
      questions,
      answers
    );

    const attempt = {
      quizId: quiz.id,
      answers,
      results,
      startedAt: quizStartedAt,
      completedAt: Date.now(),
    }

    await saveQuizAttempt(attempt)

    const attempts = await getAllQuizAttempts();
  console.log(attempts);

    navigate("/results", {
      state: {
        quiz,
        results,
        answers,
      },
    });
  };

  

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