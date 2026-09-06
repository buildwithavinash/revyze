import { Link } from "react-router"
import categories from "../../data/categories"
import quizzes from "../../data/quizzes"

const HeroSection = () => {
  const totalQuestions = quizzes.reduce(
    (sum, quiz) => sum + (quiz.totalQuestions ?? 0),
    0,
  );

  
  const roundedQuestionCount = Math.floor(totalQuestions / 100) * 100;

  const totalCategories = categories.length;

  return (
    <section className="hero-grid">
      <div className="mx-auto max-w-2xl text-center flex flex-col items-center py-34 md:py-24 px-4 md:px-4">

      <h1 className="text-2xl text-nowrap sm:text-3xl md:text-4xl font-semibold tracking-tight leading-snug text-text">
        Revise what you learned, <br /> before you forget it.
      </h1>

      <p className="text-sm sm:text-base text-text-secondary mt-3 max-w-lg">
        Quick quizzes on React, JavaScript, SQL, and more - made for students who want concepts to actually stick, not just get skimmed once and forgotten.
      </p>

      <Link to={`/categories`} className="bg-primary text-background rounded-button px-5 py-2.5 font-medium hover:bg-primary-hover transition-all duration-150 cursor-pointer mt-6 w-full sm:w-auto">
        Start practicing - it's free
      </Link>

      <p className="text-xs sm:text-sm text-text-secondary mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>{roundedQuestionCount.toLocaleString()}+ Qs</span>
        <span className="">·</span>
        <span>{totalCategories} categories</span>
        <span className="">·</span>
        <span>No sign-up required</span>
      </p>

      </div>
    </section>
  )
}

export default HeroSection