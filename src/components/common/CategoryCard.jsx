
const CategoryCard = ({ category }) => {
  return (
    <div>
      <div>{category.icon}</div>
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <p>
        Total Quizzes: <span>{category.totalQuizzes}</span>
      </p>
    </div>
  );
};

export default CategoryCard;
