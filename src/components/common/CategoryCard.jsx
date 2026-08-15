import { Link } from "react-router";
import { getQuizzesByCategory } from "../../services/quizService";

const CategoryCard = ({ category }) => {
  const totalQuizzes = getQuizzesByCategory(category.id)

  return (
    <Link
      to={`/category/${category.slug}`}
      className="h-full border border-border rounded-card bg-surface p-3 sm:p-4 flex flex-col hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-button bg-primary/10 flex items-center justify-center mb-2.5 sm:mb-3">
        <img src={category.icon} alt="" className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
      </div>

      <h3 className="font-medium text-sm sm:text-base text-text mb-1">{category.title}</h3>
      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
        {category.description}
      </p>

      <p className="text-xs text-text-secondary mt-auto">
        {totalQuizzes.length} quizzes
      </p>
    </Link>
  );
};

export default CategoryCard;