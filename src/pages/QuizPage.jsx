import { Link, useParams } from "react-router";
import quizzes from "../data/quizzes";
import Header from "../components/common/Header";
import Container from "../components/ui/Container";

const QuizPage = () => {
  const { slug } = useParams();

  // find the selected quiz
  const quiz = quizzes.find((quiz) => quiz.slug === slug);

  if (!quiz) {
    return <h1>Quiz not found!</h1>;
  }

  return (
    <>
      <Header />
      <Container>
        <Link to={-1}>← Back</Link>

        <section>
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>
        </section>

        <section>
          <div>Questions: {quiz.totalQuestions}</div>
          <div>Duration: {quiz.duration}</div>
          <div>Difficulty: {quiz.difficulty}</div>
        </section>

        <section>
          <h2>Instructions</h2>

          <ul>
            <li>You can change your answers.</li>
            <li>You can go back to previous questions.</li>
            <li>Your score is shown after submission.</li>
            <li>Do not refresh the page during the quiz.</li>
          </ul>
        </section>

        <button>Start Quiz</button>
      </Container>
    </>
  );
};

export default QuizPage;
