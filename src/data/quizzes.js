const quizzes = [
  {
    id: crypto.randomUUID(),
    slug: "react-fundamentals",
    categorySlug: "react",
    title: "React Fundamentals",
    description: "Learn JSX, Components, Props and State.",
    difficulty: "Beginner",
    duration: 20,
    totalQuestions: 15,
  },

  {
    id: crypto.randomUUID(),
    slug: "react-hooks",
    categorySlug: "react",
    title: "React Hooks",
    description: "Master useState, useEffect and custom hooks.",
    difficulty: "Intermediate",
    duration: 25,
    totalQuestions: 20,
  },

  {
    id: crypto.randomUUID(),
    slug: "react-performance",
    categorySlug: "react",
    title: "React Performance",
    description: "Optimize rendering using memoization and lazy loading.",
    difficulty: "Advanced",
    duration: 30,
    totalQuestions: 20,
  },
];

export default quizzes;
