import { Link, useNavigate, useParams } from "react-router";
import { calculateQuizResults, getQuizBySlug } from "../services/quizService";
import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import Container from "../components/ui/Container";
import QuizFooter from "../components/quiz/QuizFooter";
import { useEffect, useState } from "react";
import FinishQuizModal from "../components/quiz/FinishQuizModal";
import { loadQuestionsForQuiz } from "../services/questionService";
import {
  deleteQuizProgress,
  getQuizProgress,
  saveQuizAttempt,
  saveQuizProgress,
} from "../services/storageService";
import ResumeQuizModal from "../components/quiz/ResumeQuizModal";

const QuizPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const quiz = getQuizBySlug(slug);

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedProgress, setSavedProgress] = useState(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [quizStartedAt] = useState(() => Date.now());
  const [showResumeModal, setShowResumeModal] = useState(false);

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

  // Load saved progress
  useEffect(() => {
    if (!quiz) return;

    const loadSavedProgress = async () => {
      try {
        const progress = await getQuizProgress(quiz.id);

        if (progress) {
          setSavedProgress(progress);
          setShowResumeModal(true);
        }
      } catch (error) {
        console.error("Failed to laod quiz progress:", error);
      }
    };

    loadSavedProgress();
  }, [quiz?.id]);
  // Invalid quiz
  if (!quiz) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Quiz not found</h1>

        <Link to="/" className="text-sm text-primary hover:underline">
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

        <p className="text-sm text-text-secondary">{error}</p>

        <Link to="/" className="text-sm text-primary hover:underline">
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

        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextQuestionIndex = currentQuestionIndex + 1;

      setCurrentQuestionIndex(nextQuestionIndex);

      await saveQuizProgress({
        quizId: quiz.id,
        currentQuestionIndex: nextQuestionIndex,
        answers,
        startedAt: quizStartedAt,
        updatedAt: Date.now(),
      });
    }
  };

  const handlePrevious = async () => {
    if (currentQuestionIndex > 0) {
      const previousQuestionIndex = currentQuestionIndex - 1;

      setCurrentQuestionIndex(previousQuestionIndex);

      await saveQuizProgress({
        quizId: quiz.id,
        currentQuestionIndex: previousQuestionIndex,
        answers,
        startedAt: quizStartedAt,
        updatedAt: Date.now(),
      });
    }
  };

  const handleAnswerSelect = async (questionId, optionId) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: optionId,
    };

    setAnswers(updatedAnswers);

    await saveQuizProgress({
      quizId: quiz.id,
      currentQuestionIndex,
      answers: updatedAnswers,
      startedAt: quizStartedAt,
      updatedAt: Date.now(),
    });
  };

  const handleContinueQuiz = () => {
    if (!savedProgress) return;

    setAnswers(savedProgress.answers || {});

    setCurrentQuestionIndex(savedProgress.currentQuestionIndex || 0);

    setShowResumeModal(false);
  };

  const handleStartAgain = async () => {
    await deleteQuizProgress(quiz.id);

    setAnswers({});
    setCurrentQuestionIndex(0);
    setSavedProgress(null);
    setShowResumeModal(false);
  };

  const handleEndQuiz = () => {
    setShowFinishModal(true);
  };

  const finishQuiz = async () => {
    setShowFinishModal(false);

    const results = calculateQuizResults(questions, answers);

    const attempt = {
      quizId: quiz.id,
      answers,
      results,
      startedAt: quizStartedAt,
      completedAt: Date.now(),
    };

    try {
      await saveQuizAttempt(attempt);

      await deleteQuizProgress(quiz.id);

      navigate("/results", {
        state: {
          quiz,
          results,
          answers,
        },
      });
    } catch (error) {
      console.error("Failed to finish quiz:", error);
    }
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

      {showResumeModal && savedProgress && (
        <ResumeQuizModal
          answeredQuestions={Object.keys(savedProgress.answers || {}).length}
          onContinue={handleContinueQuiz}
          onStartAgain={handleStartAgain}
        />
      )}
    </div>
  );
};

export default QuizPage;
