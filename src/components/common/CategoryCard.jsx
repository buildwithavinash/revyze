
const CategoryCard = ({ category }) => {
  return (
    <div className="border border-border rounded-md bg-surface p-2 flex flex-col">
      <div className="flex gap-2 text-xl font-semibold">
      <div>{category.icon}</div>
      <h3>{category.title}</h3>
      </div>
      <p className="mt-1 text-secondary">{category.description}</p>
      <p className="text-sm mt-auto">
        Total Quizzes: <span>{category.totalQuizzes}</span>
      </p>
    </div>
  );
};

export default CategoryCard;
