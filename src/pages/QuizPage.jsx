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

  if(!quiz) {
    return (
      <div>
        <h1>Quiz not found!</h1>

        <Link to='/'>Back Home</Link>
      </div>
    )
  }

  const questions = getQuestionsByQuiz(quiz.id);

  if(questions.length === 0){
    return (
      <div>
        <h1>No questions available</h1>

        <Link to='/'>Back Home</Link>
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
    setAnswers((prevAnswers) => (
      {...prevAnswers, [questionId]: optionId}
    ));
  }

  const handleEndQuiz = () => {
    setShowFinishModal(true);
  }

  const finishQuiz = () => {
    setShowFinishModal(false)
    const results = calculateQuizResults(questions, answers);

    navigate('/results', { state: {
      quiz, results, answers
    }})


  }


  return (
    <div className="min-h-screen flex items-center justify-center">

      <Container>
        <div className="w-2xl">

      <div className="border border-border rounded-md p-2 bg-surface">

      <QuizHeader
        quiz={quiz}
        currentQuestionIndex={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        />
        
      <QuestionCard question={currentQuestion} questionNumber={currentQuestionIndex + 1} onAnswerSelect={handleAnswerSelect} selectedAnswer={answers[currentQuestion.id]}/>
      <QuizFooter
        onNext={handleNext}
        onPrevious={handlePrevious}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        onEndQuiz={handleEndQuiz}
        />
        {
          showFinishModal && (
            <FinishQuizModal attemptedQuestions={Object.keys(answers).length} totalQuestions={questions.length} onClose={() => setShowFinishModal(false)} onFinish={finishQuiz}/>
          )
        }
        
    </div>
        </div>
        </Container>
        </div> 
  );
};

export default QuizPage;
