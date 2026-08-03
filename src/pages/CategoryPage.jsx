import { Link, useParams } from "react-router";
import categories from "../constants/categories";
import Header from "../components/common/Header";
import quizzes from "../constants/quizzes";

const CategoryPage = () => {
  // Get the slug from the URL
  const { slug } = useParams();

  // Find the matching category
  const category = categories.find((category) => category.slug === slug);

  // Handle invalid URL
  if (!category) {
    return <h1 className="text-3xl font-bold">404 - Category Not Found</h1>;
  }

  // Get every quiz with category
  const categoryQuizzes = quizzes.filter((quiz) => quiz.categorySlug === slug);

  return (
    <div>
      <Header />

      <Link to={`/`}>Back to Homepage</Link>

      {/* category info */}
      <div>
        <div className="flex gap-2 text-3xl">
          <div>{category.icon}</div>
          <h2>{category.title}</h2>
        </div>
        <p>{category.description}</p>
      </div>

      {/* category stats */}

      <div>
        <h2>Stats</h2>

        <div>
          <div>Total Quizzes: {category.totalQuizzes}</div>
        </div>
      </div>

      <div>
        <h2>Available Quizzes</h2>

        <div className="grid grid-cols-3 gap-4">
        {categoryQuizzes.map((quiz) => (
            <div className="border border-border rounded-md p-2">
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
                <p>{quiz.totalQuestions} Questions</p>
                <p>{quiz.duration} Minutes</p>
                <p>{quiz.difficulty}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
