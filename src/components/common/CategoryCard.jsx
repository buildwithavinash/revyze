import { Link } from "react-router";
import { getQuizzesByCategory } from "../../services/quizService";

const CategoryCard = ({ category }) => {
  const totalQuizzes = getQuizzesByCategory(category.id)
  return (
    <Link to={`category/${category.slug}`} className="border border-border rounded-md bg-surface p-2 flex flex-col hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex gap-2 text-xl items-center font-semibold">
      <img src={category.icon} alt={category.title} className="h-6 w-6"/>
      <h3>{category.title}</h3>
      </div>
      <p className="mt-1 text-secondary">{category.description}</p>
      <p className="text-sm mt-auto">
        Total Quizzes: <span>{totalQuizzes.length}</span>
      </p>
    </Link>
  );
};

export default CategoryCard;
