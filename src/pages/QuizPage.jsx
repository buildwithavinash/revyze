import { useParams } from "react-router";
import { getQuestionsByQuiz, getQuizBySlug } from "../services/quizService";
import QuizHeader from "../components/quiz/QuizHeader";
import QuestionCard from "../components/quiz/QuestionCard";
import Container from '../components/ui/Container'
import QuizFooter from "../components/quiz/QuizFooter";
import { useState } from "react";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { slug } = useParams();
  const quiz = getQuizBySlug(slug);
  const questions = getQuestionsByQuiz(quiz.id);
  const currentQuestion = questions[currentQuestionIndex];
  const [answers, setAnswers] = useState({}); 

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
  if (questions.length === 0) {
    return <h1>No questions found.</h1>;
  }

  console.log(answers);
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
        />
        
    </div>
        </div>
        </Container>
        </div> 
  );
};

export default QuizPage;
