import { Link } from "react-router";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`category/${category.slug}`} className="border border-border rounded-md bg-surface p-2 flex flex-col hover:shadow-md transition-all duration-200">
      <div className="flex gap-2 text-xl font-semibold">
      <div>{category.icon}</div>
      <h3>{category.title}</h3>
      </div>
      <p className="mt-1 text-secondary">{category.description}</p>
      <p className="text-sm mt-auto">
        Total Quizzes: <span>{category.totalQuizzes}</span>
      </p>
    </Link>
  );
};

export default CategoryCard;
