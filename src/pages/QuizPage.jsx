import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import { calculateQuizResults, getQuizBySlug } from "../services/quizService";

import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import Container from "../components/ui/Container";
import QuizFooter from "../components/quiz/QuizFooter";
import FinishQuizModal from "../components/quiz/FinishQuizModal";
import ResumeQuizModal from "../components/quiz/ResumeQuizModal";

import { loadQuestionsForQuiz } from "../services/questionService";

import {
  deleteQuizProgress,
  getQuizProgress,
  saveQuizAttempt,
  saveQuizProgress,
} from "../services/storageService";

import {
  deleteCloudQuizProgress,
  saveCloudQuizAttempt,
  saveCloudQuizProgress,
} from "../services/cloudService";

import { useAuth } from "../context/AuthContext";

const createQuizSessionSeed = () => crypto.randomUUID();

const QuizPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  const quiz = getQuizBySlug(slug);

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedProgress, setSavedProgress] = useState(null);
  const [quizSessionSeed, setQuizSessionSeed] = useState(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [quizStartedAt, setQuizStartedAt] = useState(() => Date.now());
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    if (!quiz) {
      return;
    }

    let isActive = true;

    const loadQuizData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setShowFinishModal(false);
        setShowResumeModal(false);

        const progress = await getQuizProgress(quiz.id);

        const seed = progress?.shuffleSeed
          ? progress.shuffleSeed
          : progress
            ? "__legacy__"
            : createQuizSessionSeed();

        const data = await loadQuestionsForQuiz(quiz, {
          seed,
        });

        if (!isActive) {
          return;
        }

        setSavedProgress(progress || null);
        setQuizSessionSeed(seed);
        setQuestions(data);
        setAnswers(progress?.answers || {});
        setCurrentQuestionIndex(progress?.currentQuestionIndex ?? 0);
        setQuizStartedAt(progress?.startedAt ?? Date.now());
        setShowResumeModal(Boolean(progress));
      } catch (loadError) {
        console.error(loadError);

        if (isActive) {
          setError("Unable to load quiz questions.");
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadQuizData();

    return () => {
      isActive = false;
    };
  }, [quiz]);

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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-text-secondary">Loading quiz...</p>
      </div>
    );
  }

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

  const persistProgress = async (nextAnswers, nextQuestionIndex) => {
    if (!quizSessionSeed) {
      return;
    }

    const progress = {
      quizId: quiz.id,
      currentQuestionIndex: nextQuestionIndex,
      answers: nextAnswers,
      startedAt: quizStartedAt,
      shuffleSeed: quizSessionSeed,
      updatedAt: Date.now(),
    };

    // Always save locally first.
    await saveQuizProgress(progress);

    // If the user is logged in, also try to save to Supabase.
    if (isAuthenticated) {
      try {
        await saveCloudQuizProgress(progress);
      } catch (cloudError) {
        console.error("Cloud progress sync failed:", cloudError);
      }
    }
  };

  const handleNext = async () => {
    if (currentQuestionIndex >= questions.length - 1) {
      return;
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    setCurrentQuestionIndex(nextQuestionIndex);

    await persistProgress(answers, nextQuestionIndex);
  };

  const handlePrevious = async () => {
    if (currentQuestionIndex <= 0) {
      return;
    }

    const previousQuestionIndex = currentQuestionIndex - 1;

    setCurrentQuestionIndex(previousQuestionIndex);

    await persistProgress(answers, previousQuestionIndex);
  };

  const handleAnswerSelect = async (questionId, optionId) => {
    const updatedAnswers = {
      ...answers,
      [questionId]: optionId,
    };

    setAnswers(updatedAnswers);

    await persistProgress(updatedAnswers, currentQuestionIndex);
  };

  const handleContinueQuiz = () => {
    if (!savedProgress) {
      return;
    }

    setAnswers(savedProgress.answers || {});

    setCurrentQuestionIndex(savedProgress.currentQuestionIndex || 0);

    setQuizStartedAt(savedProgress.startedAt || Date.now());

    setShowResumeModal(false);
  };

  const handleStartAgain = async () => {
    const freshSeed = createQuizSessionSeed();

    const freshQuestions = await loadQuestionsForQuiz(quiz, {
      seed: freshSeed,
    });

    await deleteQuizProgress(quiz.id);

    if (isAuthenticated) {
      try {
        await deleteCloudQuizProgress(quiz.id);
      } catch (cloudError) {
        console.error("Failed to delete cloud quiz progress: ", cloudError);
      }
    }

    setSavedProgress(null);
    setQuizSessionSeed(freshSeed);
    setQuestions(freshQuestions);
    setAnswers({});
    setCurrentQuestionIndex(0);
    setQuizStartedAt(Date.now());
    setShowResumeModal(false);
  };

  const handleEndQuiz = () => {
    setShowFinishModal(true);
  };

  const finishQuiz = async () => {
    setShowFinishModal(false);

    const results = calculateQuizResults(questions, answers);

    const attempt = {
      id: crypto.randomUUID(),
      quizId: quiz.id,
      answers,
      results,
      startedAt: quizStartedAt,
      completedAt: Date.now(),
      shuffleSeed: quizSessionSeed,
    };

    try {
      // 1. Always save locally first.
      await saveQuizAttempt(attempt);

      // 2. Try cloud save.
      try {
        await saveCloudQuizAttempt(attempt);
      } catch (cloudError) {
        console.error("Cloud sync failed:", cloudError);
      }

      // 3. Quiz is completed, so remove local progress.
      await deleteQuizProgress(quiz.id);

      // Remove cloud progress for authenticated users
      if (isAuthenticated) {
        try {
          await deleteCloudQuizProgress(quiz.id);
        } catch (cloudError) {
          console.error("Failed to delete cloud quiz progress:", cloudError);
        }
      }

      // 4. Remember the attempt.
      sessionStorage.setItem("revyze:lastAttemptId", String(attempt.id));

      // 5. Go to results.
      navigate("/results", {
        state: {
          quiz,
          results,
          answers,
          attemptId: attempt.id,
          shuffleSeed: quizSessionSeed,
        },
      });
    } catch (finishError) {
      console.error("Failed to finish quiz:", finishError);

      setError("Unable to save your quiz attempt.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-1 sm:px-4">
      <Container>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl sm:w-xl lg:w-2xl h-140 sm:h-145 flex flex-col border border-border rounded-card bg-surface p-4 sm:p-5 md:p-6">
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
