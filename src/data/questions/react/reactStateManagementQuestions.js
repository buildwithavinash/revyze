const reactStateManagementQuestions = [
  {
    id: "react-state-management-q-001",
    quizId: "quiz_react_state_management",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of state in React?",
    options: [
      { id: "A", text: "To store CSS class names only" },
      { id: "B", text: "To replace props in every component" },
      { id: "C", text: "To hold data that can change over time and affect what the UI renders" },
      { id: "D", text: "To keep values permanently in memory across app installs" }
    ],
    correctOptionId: "C",
    explanation: "State is the component-managed data that can change over time and cause the UI to update when it changes.",
    tags: ["state", "fundamentals", "ui"]
  },
  {
    id: "react-state-management-q-002",
    quizId: "quiz_react_state_management",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does lifting state up mean?",
    options: [
      { id: "A", text: "Moving state into localStorage" },
      { id: "B", text: "Turning state into props everywhere" },
      { id: "C", text: "Removing state from child components entirely" },
      { id: "D", text: "Moving shared state to the nearest common parent of the components that need it" }
    ],
    correctOptionId: "D",
    explanation: "Lifting state up lets sibling components share data by keeping the source of truth in their common parent.",
    tags: ["state", "lifting-state", "data-flow"]
  },
  {
    id: "react-state-management-q-003",
    quizId: "quiz_react_state_management",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "When should you usually prefer props over state?",
    options: [
      { id: "A", text: "When values are passed down from a parent and should be treated as inputs" },
      { id: "B", text: "When a component owns changing internal data" },
      { id: "C", text: "When you need to mutate an object directly" },
      { id: "D", text: "When the data must survive a browser reinstall" }
    ],
    correctOptionId: "A",
    explanation: "Props are inputs provided by a parent or caller. State is for data a component owns and manages itself.",
    tags: ["props", "state", "fundamentals"]
  },
  {
    id: "react-state-management-q-004",
    quizId: "quiz_react_state_management",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What problem does prop drilling describe?",
    options: [
      { id: "A", text: "Using props only in class components" },
      { id: "B", text: "Passing a value through several layers of components just so a deep child can use it" },
      { id: "C", text: "Passing data from the browser to the server" },
      { id: "D", text: "Storing props in a database" }
    ],
    correctOptionId: "B",
    explanation: "Prop drilling is when data is threaded through components that do not actually need it, only to reach a deeply nested consumer.",
    tags: ["props", "prop-drilling", "architecture"]
  },
  {
    id: "react-state-management-q-005",
    quizId: "quiz_react_state_management",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which state update approach is best when the next value depends on the previous value?",
    options: [
      { id: "A", text: "Mutate the current state object directly" },
      { id: "B", text: "Ignore the previous value and hard-code a new one" },
      { id: "C", text: "Use the functional updater form, such as setCount(prev => prev + 1)" },
      { id: "D", text: "Store the previous value in a DOM attribute" }
    ],
    correctOptionId: "C",
    explanation: "The functional updater receives the latest state value and is the safe choice when computing the next state from the previous one.",
    tags: ["state", "functional-updater", "updates"]
  },
  {
    id: "react-state-management-q-006",
    quizId: "quiz_react_state_management",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is direct mutation of a state object usually a bad idea?",
    options: [
      { id: "A", text: "React cannot render objects" },
      { id: "B", text: "It converts objects into strings" },
      { id: "C", text: "It only affects CSS" },
      { id: "D", text: "It changes the existing object instead of producing a new state value React can track cleanly" }
    ],
    correctOptionId: "D",
    explanation: "State should generally be treated as immutable. Creating a new object or array makes the update easier for React to detect and reason about.",
    tags: ["state", "immutability", "objects"]
  },
  {
    id: "react-state-management-q-007",
    quizId: "quiz_react_state_management",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When is useReducer often a better fit than useState?",
    options: [
      { id: "A", text: "When state transitions are more complex or depend on multiple action types" },
      { id: "B", text: "When the component only needs one simple boolean" },
      { id: "C", text: "When the state logic is tiny and trivial" },
      { id: "D", text: "When you want to avoid all state updates" }
    ],
    correctOptionId: "A",
    explanation: "useReducer is useful when state transitions are more structured, such as when multiple related actions can affect the same state object.",
    tags: ["useReducer", "state", "architecture"]
  },
  {
    id: "react-state-management-q-008",
    quizId: "quiz_react_state_management",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is derived state?",
    options: [
      { id: "A", text: "State copied from a server and never changed" },
      { id: "B", text: "A value that can be calculated from existing props or state instead of being stored separately" },
      { id: "C", text: "State stored in a ref" },
      { id: "D", text: "State that only exists in a class component" }
    ],
    correctOptionId: "B",
    explanation: "If a value can be calculated from current props or state during rendering, it is usually better to derive it than to duplicate it in another state variable.",
    tags: ["derived-data", "state", "rendering"]
  },
  {
    id: "react-state-management-q-009",
    quizId: "quiz_react_state_management",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a controlled input?",
    options: [
      { id: "A", text: "An input that cannot be typed into" },
      { id: "B", text: "An input controlled by CSS only" },
      { id: "C", text: "An input whose value is managed by React state" },
      { id: "D", text: "An input that must be stored in localStorage" }
    ],
    correctOptionId: "C",
    explanation: "A controlled input gets its current value from React state and usually updates that state through an onChange handler.",
    tags: ["forms", "controlled-components", "state"]
  },
  {
    id: "react-state-management-q-010",
    quizId: "quiz_react_state_management",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does useRef provide that is useful for state management patterns?",
    options: [
      { id: "A", text: "A value that always triggers a re-render when changed" },
      { id: "B", text: "A database connection" },
      { id: "C", text: "A built-in form validator" },
      { id: "D", text: "A way to store mutable data that persists across renders without causing re-renders itself" }
    ],
    correctOptionId: "D",
    explanation: "useRef is useful for mutable values, DOM references, and instance-like data that should survive re-renders without causing one when updated.",
    tags: ["useRef", "mutable-values", "state"]
  },
  {
    id: "react-state-management-q-011",
    quizId: "quiz_react_state_management",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is Context useful in React?",
    options: [
      { id: "A", text: "It lets values be shared with deeply nested components without passing them through every intermediate layer" },
      { id: "B", text: "It replaces the need for components" },
      { id: "C", text: "It stores data only in the browser cache" },
      { id: "D", text: "It automatically makes all state global" }
    ],
    correctOptionId: "A",
    explanation: "Context is helpful when many descendants need the same value, such as a theme, locale, or authenticated user object.",
    tags: ["context", "shared-state", "architecture"]
  },
  {
    id: "react-state-management-q-012",
    quizId: "quiz_react_state_management",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common benefit of memoizing a Context provider value with useMemo?",
    options: [
      { id: "A", text: "It guarantees no consumer will ever re-render" },
      { id: "B", text: "It can help avoid unnecessary updates caused by a new object reference on every render" },
      { id: "C", text: "It converts Context into local state" },
      { id: "D", text: "It makes the value writable in the DOM" }
    ],
    correctOptionId: "B",
    explanation: "If the provider passes a new object on every render, consumers may update more often than needed. Memoizing the value can reduce that churn.",
    tags: ["context", "useMemo", "performance"]
  },
  {
    id: "react-state-management-q-013",
    quizId: "quiz_react_state_management",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are stable keys important for stateful list items?",
    options: [
      { id: "A", text: "They make the list render faster because CSS uses them" },
      { id: "B", text: "They automatically sort the array" },
      { id: "C", text: "They help React preserve item identity when list order changes" },
      { id: "D", text: "They stop items from being removed" }
    ],
    correctOptionId: "C",
    explanation: "Stable keys let React associate the same logical item across renders, which matters when items are inserted, removed, or reordered.",
    tags: ["keys", "lists", "state"]
  },
  {
    id: "react-state-management-q-014",
    quizId: "quiz_react_state_management",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of resetting a component with a different key?",
    options: [
      { id: "A", text: "It changes only the CSS without affecting state" },
      { id: "B", text: "It guarantees the component keeps all previous local state" },
      { id: "C", text: "It converts the component into a route" },
      { id: "D", text: "It can force React to treat the component as a new instance and reset its local state" }
    ],
    correctOptionId: "D",
    explanation: "Changing a component's key tells React to unmount the old instance and mount a new one, which is useful when you need to reset local state deliberately.",
    tags: ["keys", "state-reset", "components"]
  },
  {
    id: "react-state-management-q-015",
    quizId: "quiz_react_state_management",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a custom Hook in the context of state management?",
    options: [
      { id: "A", text: "A reusable function that uses Hooks to share stateful logic" },
      { id: "B", text: "A special CSS file for state" },
      { id: "C", text: "A class that replaces useState" },
      { id: "D", text: "A browser API for events" }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks let you package reusable stateful logic, such as form handling or synchronized storage behavior, into a small function.",
    tags: ["custom-hooks", "reusability", "state"]
  },
  {
    id: "react-state-management-q-016",
    quizId: "quiz_react_state_management",
    order: 16,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a good reason to keep state as local as possible?",
    options: [
      { id: "A", text: "It ensures the state never changes" },
      { id: "B", text: "It reduces the amount of unrelated code that depends on the state" },
      { id: "C", text: "It forces all data into Context" },
      { id: "D", text: "It makes the app work without React" }
    ],
    correctOptionId: "B",
    explanation: "Keeping state close to where it is used usually makes the data flow easier to understand and can reduce unnecessary re-renders in the rest of the tree.",
    tags: ["state", "architecture", "component-design"]
  },
  {
    id: "react-state-management-q-017",
    quizId: "quiz_react_state_management",
    order: 17,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this state update pattern help avoid?\n\nsetCount((prev) => prev + 1);",
    options: [
      { id: "A", text: "Using props instead of state" },
      { id: "B", text: "Rendering the component at all" },
      { id: "C", text: "Reading the latest state value when multiple updates are queued" },
      { id: "D", text: "Passing values to a child component" }
    ],
    correctOptionId: "C",
    explanation: "The functional updater gets the latest state value, which is safer than relying on a possibly stale value from the current render.",
    tags: ["state", "functional-updater", "code-reading"]
  },
  {
    id: "react-state-management-q-018",
    quizId: "quiz_react_state_management",
    order: 18,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main risk of duplicating the same value in multiple pieces of state?",
    options: [
      { id: "A", text: "The value becomes read-only automatically" },
      { id: "B", text: "The app will not compile" },
      { id: "C", text: "React stops supporting hooks" },
      { id: "D", text: "The copies can drift out of sync and create bugs" }
    ],
    correctOptionId: "D",
    explanation: "Duplicating state often creates synchronization problems. If the value can be derived, it is usually better to compute it from one source of truth.",
    tags: ["derived-data", "state", "bug-prevention"]
  },
  {
    id: "react-state-management-q-019",
    quizId: "quiz_react_state_management",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which use case is a strong fit for Context?",
    options: [
      { id: "A", text: "A theme or locale that many components in the same subtree need to read" },
      { id: "B", text: "A value that only one input needs" },
      { id: "C", text: "A value that changes only inside CSS" },
      { id: "D", text: "A value that should be stored in every child component separately" }
    ],
    correctOptionId: "A",
    explanation: "Context works best when a value is read by many descendants and it would be awkward to thread it through each intermediate component.",
    tags: ["context", "shared-state", "architecture"]
  },
  {
    id: "react-state-management-q-020",
    quizId: "quiz_react_state_management",
    order: 20,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main benefit of using a reducer for more complex form state?",
    options: [
      { id: "A", text: "It prevents all re-renders" },
      { id: "B", text: "It centralizes update logic into predictable actions and transitions" },
      { id: "C", text: "It makes the state immutable by default" },
      { id: "D", text: "It automatically stores form data on the server" }
    ],
    correctOptionId: "B",
    explanation: "A reducer can make complex state updates easier to reason about by grouping related transitions into named actions.",
    tags: ["useReducer", "forms", "architecture"]
  }
];

export default reactStateManagementQuestions;
