[
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "JavaScript Extension",
      "Java Syntax Extension",
      "JSON XML"
    ],
    correctAnswer: 0,
    explanation: "JSX stands for JavaScript XML, a syntax extension that allows writing HTML-like code in JavaScript.",
    tags: ["JSX"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "How do you correctly embed a JavaScript expression inside JSX?",
    options: [
      "{{ expression }}",
      "{ expression }",
      "[[ expression ]]",
      "(( expression ))"
    ],
    correctAnswer: 1,
    explanation: "Curly braces `{ }` are used in JSX to embed JavaScript expressions.",
    tags: ["JSX"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of the following is a valid way to define a functional component in React?",
    options: [
      "function MyComponent() { return <div>Hello</div>; }",
      "component MyComponent() { return <div>Hello</div>; }",
      "def MyComponent(): return <div>Hello</div>;",
      "function myComponent { return <div>Hello</div>; }"
    ],
    correctAnswer: 0,
    explanation: "A functional component is simply a JavaScript function that returns JSX, and its name should start with a capital letter.",
    tags: ["Components"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "How are props passed to a React component?",
    options: [
      "As global variables",
      "As attributes in the component's JSX tag",
      "Through the browser's local storage",
      "Via CSS classes"
    ],
    correctAnswer: 1,
    explanation: "Props are passed to components as attributes in JSX, similar to HTML attributes.",
    tags: ["Props"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Can a component modify the props it receives?",
    options: [
      "Yes, props can be freely reassigned",
      "No, props are read-only and should not be modified by the receiving component",
      "Only if the prop is a string",
      "Only inside useEffect"
    ],
    correctAnswer: 1,
    explanation: "Props are read-only; a component should never modify its own props.",
    tags: ["Props"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of state in a React component?",
    options: [
      "To style the component",
      "To store data that can change over time and trigger re-renders",
      "To define the component's props",
      "To import other components"
    ],
    correctAnswer: 1,
    explanation: "State holds data that can change over time, and updating it causes the component to re-render.",
    tags: ["State"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly handles a button click event in React?",
    options: [
      "<button onclick=\"handleClick()\">Click</button>",
      "<button onClick={handleClick}>Click</button>",
      "<button on-click={handleClick}>Click</button>",
      "<button click={handleClick}>Click</button>"
    ],
    correctAnswer: 1,
    explanation: "React uses camelCase event handlers like `onClick` and passes a function reference, not a string.",
    tags: ["Event Handling"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens if you call handleClick() instead of passing handleClick as the onClick handler?",
    options: [
      "Nothing changes, both work identically",
      "The function executes immediately during render instead of on click",
      "React throws a syntax error",
      "The event never fires"
    ],
    correctAnswer: 1,
    explanation: "Calling the function immediately invokes it during rendering instead of waiting for the click event.",
    tags: ["Event Handling"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which is a common way to conditionally render JSX in React?",
    options: [
      "Using a for loop inside JSX",
      "Using the ternary operator inside curly braces",
      "Using CSS media queries",
      "Using try-catch blocks"
    ],
    correctAnswer: 1,
    explanation: "The ternary operator inside `{ }` is a common pattern for conditional rendering in JSX.",
    tags: ["Conditional Rendering"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the following code render if isLoggedIn is false? { isLoggedIn && <p>Welcome back!</p> }",
    options: [
      "It renders 'Welcome back!'",
      "It renders nothing",
      "It throws an error",
      "It renders 'false'"
    ],
    correctAnswer: 1,
    explanation: "When the left side of `&&` is false, React renders nothing since the expression short-circuits.",
    tags: ["Conditional Rendering"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why does React require a unique 'key' prop when rendering lists?",
    options: [
      "To style each list item differently",
      "To help React identify which items changed, were added, or removed",
      "To sort the list automatically",
      "Keys are optional and have no real purpose"
    ],
    correctAnswer: 1,
    explanation: "Keys help React efficiently identify and update list items during re-renders.",
    tags: ["Lists & Keys"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which array method is most commonly used to render a list of elements in React?",
    options: [
      "forEach()",
      "map()",
      "filter()",
      "reduce()"
    ],
    correctAnswer: 1,
    explanation: "`map()` transforms each array item into a JSX element and returns a new array, which React can render.",
    tags: ["Lists & Keys"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the useState hook return?",
    options: [
      "A single value representing the state",
      "An array with the current state value and a function to update it",
      "An object with a `state` and `props` property",
      "A promise that resolves to the state"
    ],
    correctAnswer: 1,
    explanation: "useState returns an array containing the current state value and a setter function to update it.",
    tags: ["useState"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is 'component composition' in React?",
    options: [
      "Writing all logic in a single large component",
      "Building complex UIs by combining smaller, reusable components",
      "Compiling components into CSS files",
      "Using inheritance to extend component classes"
    ],
    correctAnswer: 1,
    explanation: "Component composition means building UIs by nesting and combining smaller, reusable components.",
    tags: ["Component Composition"]
  },
  {
    id: crypto.randomUUID(),
    quizSlug: "react-fundamentals",
    questionNumber: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "What triggers a React component to re-render?",
    options: [
      "Refreshing the browser only",
      "A change in the component's state or props",
      "Adding a new CSS file",
      "Only when the page first loads"
    ],
    correctAnswer: 1,
    explanation: "React re-renders a component whenever its state or props change.",
    tags: ["React Rendering Basics"]
  }
]