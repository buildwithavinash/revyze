import { Link, useParams } from "react-router";
import Header from "../components/common/Header";
import Container from "../components/ui/Container";
import QuizInfoModal from "../components/ui/QuizInfoModal";
import { useState } from "react";
import { getCategoryBySlug, getQuizzesByCategory } from "../services/quizService";
import { Clock, HelpCircle } from "lucide-react";

const CategoryPage = () => {
  // Get the slug from the URL
  const { slug } = useParams();
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  // Find the matching category
  const category = getCategoryBySlug(slug);

  // Handle invalid URL
  if (!category) {
    return <h1 className="text-3xl font-bold">404 - Category Not Found</h1>;
  }

  // Get every quiz with category
  const categoryQuizzes = getQuizzesByCategory(category.id);

  const difficultyStyles = {
  Beginner: "bg-emerald-50 text-emerald-700 border border-emerald-400",
  Intermediate: "bg-amber-50 text-amber-700 border border-amber-400",
  Advanced: "bg-red-50 text-red-700 border border-red-400",
};

  return (
    <div className="md:pb-24 pt-2 pb-12">
      <Header />
      <Container>
        <Link
          to={`/`}
          className="border border-border rounded-md px-2 text-text-secondary py-0.5 text-xs bg-surface text-text-secondary-secondary hover:bg-surface-hover transition-all duration-200 inline-block mt-4"
        >
          Back
        </Link>

        {/* category info */}
        <div className="mt-6">
          <div className="flex gap-2 items-center">
            <img src={category.icon} alt="" className="h-10 w-10"/>
            <h2 className="font-semibold text-text text-3xl">{category.title}</h2>
          </div>
          <p className="text-text-secondary mt-2">{category.description}</p>
        </div>

        {/* category stats */}
        <div>
          <div className="text-text-secondary">Total Quizzes: {categoryQuizzes.length}</div>
        </div>

        {/* show all quizzes */}
        <section className="mt-6">
          <h2 className="text-text font-semibold text-xl">Available Quizzes</h2>

          {categoryQuizzes.length === 0 ? (
            <p>No quizzes available. More quizzes coming soon.</p>
          ) : (
            <div className="grid grid-cols-3 gap-4 mt-2">
              {categoryQuizzes.map((quiz) => (
  <div
    key={quiz.id}
    onClick={() => setSelectedQuiz(quiz)}
    className="border border-border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 flex flex-col h-full"
  >
    <div className="flex items-start justify-between gap-2 mb-1">
      <h3 className="text-text font-semibold text-lg leading-snug">{quiz.title}</h3>
      <span
        className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${difficultyStyles[quiz.difficulty]}`}
      >
        {quiz.difficulty}
      </span>
    </div>

    <p className="text-text-secondary text-sm leading-relaxed mb-4">
      {quiz.description}
    </p>

    <div className="mt-auto flex items-center justify-between">
      <div className="flex items-center gap-3 text-text-secondary text-xs">
        <span className="flex items-center gap-1">
          <HelpCircle size={14} /> {quiz.totalQuestions} Qs
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} /> {quiz.estimatedTime} min
        </span>
      </div>
      <button className="border border-primary text-primary font-semibold bg-emerald-50 hover:bg-primary hover:text-background transition-all duration-200 rounded-md px-3 py-1.5 text-sm cursor-pointer">
        Start Quiz
      </button>
    </div>
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
