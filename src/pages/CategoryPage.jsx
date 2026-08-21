import { Link, useParams } from "react-router";
import Header from "../components/common/Header";
import Container from "../components/ui/Container";
import QuizInfoModal from "../components/quiz/QuizInfoModal";
import { useState } from "react";
import { getCategoryBySlug, getQuizzesByCategory } from "../services/quizService";
import { ArrowLeft, Clock, HelpCircle } from "lucide-react";

const difficultyStyles = {
  Beginner: "bg-success/10 text-success",
  Intermediate: "bg-warning/10 text-warning",
  Advanced: "bg-danger/10 text-danger",
};

const CategoryPage = () => {
  const { slug } = useParams();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  
  
  const category = getCategoryBySlug(slug);
  const quizzes = getQuizzesByCategory(category.id);

  const filteredQuizzes = quizzes.filter((quiz) => {
    const query = searchQuery.toLowerCase().trim();
    
    if(!query) {
      return true;
    }
    
    return (
      quiz.title.toLowerCase().includes(query) || quiz.description.toLowerCase().includes(query)
    );
  })
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Category not found</h1>
        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const categoryQuizzes = getQuizzesByCategory(category.id);

  return (
    <div className="md:pb-24 pb-12">
      <Header />
      <Container>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 border border-border rounded-button px-3 py-1.5 text-xs text-text-secondary bg-surface hover:bg-surface-hover transition-all duration-200 mt-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
          Back
        </Link>

        {/* category info */}
        <div className="mt-5 sm:mt-6">
          <div className="flex gap-2.5 sm:gap-3 items-center">
            <img src={category.icon} alt="" className="h-8 w-8 sm:h-10 sm:w-10" />
            <h1 className="font-semibold text-text text-xl sm:text-2xl md:text-3xl">{category.title}</h1>
          </div>
          <p className="text-sm sm:text-base text-text-secondary mt-2">{category.description}</p>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            {categoryQuizzes.length} quizzes available
          </p>
        </div>


{/* categroy search */}
<input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder={`Search ${category.title} quizzes...`}
  className="border border-border rounded-button px-3 py-2 w-full"
/>
        {/* show all quizzes */}
        <section className="mt-6 sm:mt-8">
          <h2 className="text-text font-semibold text-base sm:text-lg mb-3 sm:mb-4">Available quizzes</h2>

          {categoryQuizzes.length === 0 ? (
            <p className="text-sm text-text-secondary border border-border rounded-card bg-surface p-4">
              No quizzes available yet. More quizzes coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredQuizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  onClick={() => setSelectedQuiz(quiz)}
                  className="h-full border border-border rounded-card bg-surface p-3.5 sm:p-4 cursor-pointer transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-text font-medium text-sm sm:text-base leading-snug">
                      {quiz.title}
                    </h3>
                    <span
                      className={`shrink-0 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-pill ${difficultyStyles[quiz.difficulty]}`}
                    >
                      {quiz.difficulty}
                    </span>
                  </div>

                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {quiz.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 text-text-secondary text-[11px] sm:text-xs">
                      <span className="flex items-center gap-1">
                        <HelpCircle size={13} /> {quiz.totalQuestions} Qs
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {quiz.estimatedTime} min
                      </span>
                    </div>
                    <button className="border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-all duration-200 rounded-button px-3 py-1.5 text-xs sm:text-sm cursor-pointer shrink-0">
                      Start quiz
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

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