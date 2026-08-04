import { Link, useParams } from "react-router";
import categories from "../data/categories";
import Header from "../components/common/Header";
import quizzes from "../data/quizzes";
import Container from "../components/ui/Container";
import QuizInfoModal from "../components/ui/QuizInfoModal";
import { useState } from "react";

const CategoryPage = () => {
  // Get the slug from the URL
  const { slug } = useParams();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  // Find the matching category
  const category = categories.find((category) => category.slug === slug);

  // Handle invalid URL
  if (!category) {
    return <h1 className="text-3xl font-bold">404 - Category Not Found</h1>;
  }

  // Get every quiz with category
  const categoryQuizzes = quizzes.filter((quiz) => quiz.categorySlug === slug);

  return (
    <div className="md:pb-24 pt-2 pb-12">
      <Header />
      <Container>
        <Link
          to={`/`}
          className="border border-border rounded-md px-2 py-1 text-xs bg-surface text-text-secondary-secondary hover:bg-surface-hover transition-all duration-200 inline-block mt-4"
        >
          Back to Homepage
        </Link>

        {/* category info */}
        <div className="mt-4">
          <div className="flex gap-2 text-3xl">
            <div>{category.icon}</div>
            <h2 className="font-semibold text-text">{category.title}</h2>
          </div>
          <p className="text-text-secondary mt-1">{category.description}</p>
        </div>

        {/* category stats */}
        <div>
          <div>Total Quizzes: {category.totalQuizzes}</div>
        </div>

        {/* show all quizzes */}
        <section className="mt-4">
          <h2 className="text-text font-semibold text-xl">Available Quizzes</h2>

          {categoryQuizzes.length === 0 ? (
            <p>No quizzes available. More quizzes coming soon.</p>
          ) : (
            <div className="grid grid-cols-3 gap-4 mt-2">
              {categoryQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  onClick={() => setSelectedQuiz(quiz)}
                  className=" border border-border rounded-md p-2 cursor-pointer transition-all duration-200 hover:shadow-md flex flex-col"
                >
                  <h3 className="text-text font-bold text-xl">{quiz.title}</h3>
                  <p className="text-text-secondary text-sm">
                    {quiz.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <p className="border border-border rounded-md bg-surface-hover text-sm px-1 py-0.5">
                      {quiz.totalQuestions} Questions
                    </p>
                    <p className="border border-border rounded-md bg-surface-hover text-sm px-1 py-0.5">
                      {quiz.duration} Minutes
                    </p>
                  </div>
                  <p>{quiz.difficulty}</p>
                  <button className="border border-primary text-primary font-semibold bg-emerald-50 hover:bg-primary hover:text-background transition-all duration-200 rounded-md mt-auto self-end px-2 py-1">
                    Start Quiz
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* quiz info modal */}
        {selectedQuiz && (
          <QuizInfoModal
            quiz={selectedQuiz}
            onClose={() => setSelectedQuiz(null)}
          />
        )}
      </Container>
    </div>
  );
};

export default CategoryPage;
