const reactFundamentalsQuestions = [
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 1,
    question: "Which hook is used to store local state inside a React component?",
    options: [
      "useEffect()",
      "useState()",
      "useMemo()",
      "useContext()",
    ],
    correctAnswer: 1,
    explanation:
      "useState() is React's built-in Hook for storing local component state.",
  },

  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 2,
    question: "Which syntax allows you to write HTML inside JavaScript?",
    options: [
      "XML",
      "HTML",
      "JSX",
      "ReactHTML",
    ],
    correctAnswer: 2,
    explanation:
      "JSX allows developers to write HTML-like syntax directly inside JavaScript.",
  },

  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 3,
    question: "Props are mainly used to:",
    options: [
      "Store local state",
      "Pass data from parent to child",
      "Fetch API data",
      "Style components",
    ],
    correctAnswer: 1,
    explanation:
      "Props allow parent components to pass data to child components.",
  },
];

export default reactFundamentalsQuestions;