const reactAllInOneQuestions = [
  {
    id: "react-all-in-one-q-001",
    quizId: "quiz_react_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of JSX in a React application?",
    options: [
      {
        id: "A",
        text: "To write UI structure using a syntax that resembles HTML inside JavaScript."
      },
      {
        id: "B",
        text: "To replace JavaScript with HTML in React components."
      },
      {
        id: "C",
        text: "To automatically manage component state."
      },
      {
        id: "D",
        text: "To create CSS styles without external stylesheets."
      }
    ],
    correctOptionId: "A",
    explanation: "JSX provides a syntax for describing UI within JavaScript. It is transformed into JavaScript that React can use to create elements.",
    tags: ["jsx", "react", "fundamentals"]
  },

  {
    id: "react-all-in-one-q-002",
    quizId: "quiz_react_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main role of props in a React component?",
    options: [
      {
        id: "A",
        text: "To directly modify the component's internal state."
      },
      {
        id: "B",
        text: "To pass data from a parent component to a child component."
      },
      {
        id: "C",
        text: "To force a component to render on every event."
      },
      {
        id: "D",
        text: "To store data permanently in the browser."
      }
    ],
    correctOptionId: "B",
    explanation: "Props are inputs passed to a component, commonly from its parent. They allow components to receive data and configuration without directly modifying the parent's state.",
    tags: ["props", "components", "data-flow"]
  },

  {
    id: "react-all-in-one-q-003",
    quizId: "quiz_react_all_in_one",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement best describes React state?",
    options: [
      {
        id: "A",
        text: "Data that can change over time and trigger a component re-render when updated through React."
      },
      {
        id: "B",
        text: "Static information passed only through HTML attributes."
      },
      {
        id: "C",
        text: "Data that can only be changed by modifying props."
      },
      {
        id: "D",
        text: "Browser storage that remains available after the application closes."
      }
    ],
    correctOptionId: "A",
    explanation: "State represents data managed by a component that can change over time. Updating state through its React state setter schedules a re-render.",
    tags: ["state", "rendering", "fundamentals"]
  },

  {
    id: "react-all-in-one-q-004",
    quizId: "quiz_react_all_in_one",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when a component returns the following JSX?\n\nreturn <h1>Hello</h1>;",
    options: [
      {
        id: "A",
        text: "The component returns a React element describing an h1 element containing Hello."
      },
      {
        id: "B",
        text: "The browser immediately executes Hello as JavaScript."
      },
      {
        id: "C",
        text: "React creates a new state variable named Hello."
      },
      {
        id: "D",
        text: "The component returns a string containing the literal JSX source code."
      }
    ],
    correctOptionId: "A",
    explanation: "JSX describes the UI element React should render. The returned JSX represents an h1 element whose content is Hello.",
    tags: ["jsx", "components", "rendering"]
  },

  {
    id: "react-all-in-one-q-005",
    quizId: "quiz_react_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why are keys important when rendering a list of React elements?",
    options: [
      {
        id: "A",
        text: "They give React a stable identity for each item when reconciling the list."
      },
      {
        id: "B",
        text: "They prevent every list item from receiving props."
      },
      {
        id: "C",
        text: "They automatically sort the list alphabetically."
      },
      {
        id: "D",
        text: "They convert an array into a React state variable."
      }
    ],
    correctOptionId: "A",
    explanation: "Keys help React identify which list items correspond to which elements between renders, allowing it to reconcile changes more effectively.",
    tags: ["lists", "keys", "reconciliation"]
  },

  {
    id: "react-all-in-one-q-006",
    quizId: "quiz_react_all_in_one",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Given the component below, what is logged after clicking the button once?\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1);\n    console.log(count);\n  }\n\n  return <button onClick={handleClick}>{count}</button>;\n}",
    options: [
      {
        id: "A",
        text: "0"
      },
      {
        id: "B",
        text: "1"
      },
      {
        id: "C",
        text: "2"
      },
      {
        id: "D",
        text: "undefined"
      }
    ],
    correctOptionId: "A",
    explanation: "The count variable inside the current render still contains 0 when handleClick executes. Calling setCount schedules the state update; it does not immediately change the current render's count variable.",
    tags: ["state", "useState", "state-updates"]
  },

  {
    id: "react-all-in-one-q-007",
    quizId: "quiz_react_all_in_one",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the recommended approach when the next state value depends on the previous state value?",
    options: [
      {
        id: "A",
        text: "Use the functional updater form of the state setter."
      },
      {
        id: "B",
        text: "Modify the state variable directly before calling the setter."
      },
      {
        id: "C",
        text: "Store the previous state in localStorage first."
      },
      {
        id: "D",
        text: "Force the component to unmount and mount again."
      }
    ],
    correctOptionId: "A",
    explanation: "The functional updater receives the previous state value, making it the reliable approach when calculating the next state from the previous state.",
    tags: ["useState", "state-updates", "functional-updater"]
  },

  {
    id: "react-all-in-one-q-008",
    quizId: "quiz_react_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this code do?\n\nfunction User({ name }) {\n  return <h2>{name}</h2>;\n}\n\nfunction App() {\n  return <User name=\"Avi\" />;\n}",
    options: [
      {
        id: "A",
        text: "It passes the string Avi to User through a prop named name."
      },
      {
        id: "B",
        text: "It creates a state variable named name inside User."
      },
      {
        id: "C",
        text: "It passes name from User back to App."
      },
      {
        id: "D",
        text: "It creates a context value named Avi."
      }
    ],
    correctOptionId: "A",
    explanation: "The name attribute on the User element becomes the name prop. User receives that prop through its function parameter and renders it.",
    tags: ["props", "components", "jsx"]
  },

  {
    id: "react-all-in-one-q-009",
    quizId: "quiz_react_all_in_one",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main purpose of useEffect?",
    options: [
      {
        id: "A",
        text: "To perform side effects associated with rendering and state or prop changes."
      },
      {
        id: "B",
        text: "To replace every use of useState."
      },
      {
        id: "C",
        text: "To create CSS classes dynamically."
      },
      {
        id: "D",
        text: "To define routes without a router."
      }
    ],
    correctOptionId: "A",
    explanation: "useEffect is used to synchronize a component with external systems and perform side effects such as subscriptions, timers, or network-related synchronization.",
    tags: ["hooks", "useEffect", "side-effects"]
  },

  {
    id: "react-all-in-one-q-010",
    quizId: "quiz_react_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an empty dependency array in useEffect indicate?\n\nuseEffect(() => {\n  console.log(\"effect\");\n}, []);",
    options: [
      {
        id: "A",
        text: "The effect does not depend on any reactive values declared for the effect."
      },
      {
        id: "B",
        text: "The effect runs after every state update."
      },
      {
        id: "C",
        text: "The effect can never run."
      },
      {
        id: "D",
        text: "The effect automatically receives every prop."
      }
    ],
    correctOptionId: "A",
    explanation: "An empty dependency array means the effect has no listed reactive dependencies. In the common case, it runs after the initial commit rather than after every re-render.",
    tags: ["useEffect", "dependencies", "effects"]
  },

  {
    id: "react-all-in-one-q-011",
    quizId: "quiz_react_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach correctly renders an array of users into list items?",
    options: [
      {
        id: "A",
        text: "{users.map(user => <li key={user.id}>{user.name}</li>)}"
      },
      {
        id: "B",
        text: "{users.forEach(user => <li>{user.name}</li>)}"
      },
      {
        id: "C",
        text: "{users.filter(user => <li>{user.name}</li>)}"
      },
      {
        id: "D",
        text: "{users.reduce(user => <li>{user.name}</li>)}"
      }
    ],
    correctOptionId: "A",
    explanation: "map transforms each user into a React element and returns the resulting array. A stable key such as user.id gives each rendered item an identity.",
    tags: ["lists", "map", "keys"]
  },

  {
    id: "react-all-in-one-q-012",
    quizId: "quiz_react_all_in_one",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is directly mutating a state object generally incorrect in React?",
    options: [
      {
        id: "A",
        text: "It changes the existing object instead of creating a new state value for the update."
      },
      {
        id: "B",
        text: "React only allows objects to contain strings."
      },
      {
        id: "C",
        text: "React automatically freezes every object permanently."
      },
      {
        id: "D",
        text: "Objects cannot be stored in React state."
      }
    ],
    correctOptionId: "A",
    explanation: "State updates should generally treat objects as immutable and create a new object. This allows React and the developer's code to reason about the state transition using new references.",
    tags: ["state", "immutability", "objects"]
  },

  {
    id: "react-all-in-one-q-013",
    quizId: "quiz_react_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the difference between props and state?",
    options: [
      {
        id: "A",
        text: "Props are inputs received by a component, while state is data managed by the component."
      },
      {
        id: "B",
        text: "Props can only contain strings, while state can only contain numbers."
      },
      {
        id: "C",
        text: "Props always change automatically, while state never changes."
      },
      {
        id: "D",
        text: "Props are browser data, while state is server data."
      }
    ],
    correctOptionId: "A",
    explanation: "Props allow a component to receive data from its parent or other JSX usage, while state represents data managed by the component or its associated logic.",
    tags: ["props", "state", "components"]
  },

  {
    id: "react-all-in-one-q-014",
    quizId: "quiz_react_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What problem does lifting state up solve?",
    options: [
      {
        id: "A",
        text: "It lets multiple components share state by moving the state to their nearest appropriate common parent."
      },
      {
        id: "B",
        text: "It prevents all components from rendering."
      },
      {
        id: "C",
        text: "It automatically stores state in a database."
      },
      {
        id: "D",
        text: "It eliminates the need for props in every component."
      }
    ],
    correctOptionId: "A",
    explanation: "When sibling or related components need to coordinate around the same state, moving that state to their common parent creates a single source of truth that can be passed down through props.",
    tags: ["state", "lifting-state", "data-flow"]
  },

  {
    id: "react-all-in-one-q-015",
    quizId: "quiz_react_all_in_one",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a controlled input in React?",
    options: [
      {
        id: "A",
        text: "An input whose current value is controlled by React state."
      },
      {
        id: "B",
        text: "An input that cannot receive user interaction."
      },
      {
        id: "C",
        text: "An input controlled only by the browser's URL."
      },
      {
        id: "D",
        text: "An input whose value can only be changed with CSS."
      }
    ],
    correctOptionId: "A",
    explanation: "A controlled input gets its current value from React state and typically updates that state through an onChange handler.",
    tags: ["forms", "controlled-components", "state"]
  },

  {
    id: "react-all-in-one-q-016",
    quizId: "quiz_react_all_in_one",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of useRef?",
    options: [
      {
        id: "A",
        text: "To hold a mutable value or reference that persists across renders without itself causing a re-render when changed."
      },
      {
        id: "B",
        text: "To replace useState for every state update."
      },
      {
        id: "C",
        text: "To automatically fetch data from an API."
      },
      {
        id: "D",
        text: "To create a new React component."
      }
    ],
    correctOptionId: "A",
    explanation: "useRef returns an object whose current property persists across renders. Updating it does not itself trigger a React re-render, and refs are commonly used for DOM references and other mutable values.",
    tags: ["hooks", "useRef", "refs"]
  },

  {
    id: "react-all-in-one-q-017",
    quizId: "quiz_react_all_in_one",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about React Context is most accurate?",
    options: [
      {
        id: "A",
        text: "It allows values to be made available to descendant components without passing them through every intermediate component."
      },
      {
        id: "B",
        text: "It permanently stores data on the user's device."
      },
      {
        id: "C",
        text: "It prevents descendant components from rendering."
      },
      {
        id: "D",
        text: "It replaces React state in every application."
      }
    ],
    correctOptionId: "A",
    explanation: "Context provides a mechanism for making a value available to components deeper in the tree without manually passing that value through each intermediate component.",
    tags: ["context", "useContext", "state-management"]
  },

  {
    id: "react-all-in-one-q-018",
    quizId: "quiz_react_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is React.memo primarily used for?",
    options: [
      {
        id: "A",
        text: "Skipping a component re-render when its props have not changed according to React's memoization comparison."
      },
      {
        id: "B",
        text: "Caching every API response automatically."
      },
      {
        id: "C",
        text: "Preventing state updates inside a component."
      },
      {
        id: "D",
        text: "Making every component render only once."
      }
    ],
    correctOptionId: "A",
    explanation: "React.memo can allow a component to skip re-rendering when its props are unchanged according to the comparison used by the memoized component.",
    tags: ["performance", "React.memo", "rendering"]
  },

  {
    id: "react-all-in-one-q-019",
    quizId: "quiz_react_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider this component:\n\nfunction Search({ items, query }) {\n  const filtered = useMemo(\n    () => items.filter(item => item.name.includes(query)),\n    [items, query]\n  );\n\n  return <List items={filtered} />;\n}\n\nWhat is the main reason for using useMemo here?",
    options: [
      {
        id: "A",
        text: "To cache the filtered result until items or query changes."
      },
      {
        id: "B",
        text: "To guarantee that List never renders again."
      },
      {
        id: "C",
        text: "To make filtering asynchronous."
      },
      {
        id: "D",
        text: "To move the filtering operation to the server."
      }
    ],
    correctOptionId: "A",
    explanation: "useMemo caches the calculated value and recalculates it when a dependency changes. It can avoid repeating an expensive calculation when the inputs remain the same.",
    tags: ["performance", "useMemo", "memoization"]
  },

  {
    id: "react-all-in-one-q-020",
    quizId: "quiz_react_all_in_one",
    order: 20,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can useCallback be useful when passing a callback to a memoized child component?",
    options: [
      {
        id: "A",
        text: "It can preserve the callback reference between renders until its dependencies change."
      },
      {
        id: "B",
        text: "It guarantees the callback executes only once."
      },
      {
        id: "C",
        text: "It automatically makes the callback asynchronous."
      },
      {
        id: "D",
        text: "It prevents the callback from accessing component state."
      }
    ],
    correctOptionId: "A",
    explanation: "useCallback memoizes a function reference based on its dependencies. This can matter when a child uses reference equality, such as a component wrapped with React.memo.",
    tags: ["performance", "useCallback", "memoization"]
  },

  {
    id: "react-all-in-one-q-021",
    quizId: "quiz_react_all_in_one",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main purpose of client-side routing in a React application?",
    options: [
      {
        id: "A",
        text: "To display different application views based on the current URL without requiring a full page reload for every navigation."
      },
      {
        id: "B",
        text: "To replace React components with server-side HTML permanently."
      },
      {
        id: "C",
        text: "To store component state in the URL automatically."
      },
      {
        id: "D",
        text: "To prevent users from navigating between views."
      }
    ],
    correctOptionId: "A",
    explanation: "Client-side routing maps URLs to application views and can update the displayed content without performing a traditional full-page navigation for each route change.",
    tags: ["routing", "react-router", "navigation"]
  },

  {
    id: "react-all-in-one-q-022",
    quizId: "quiz_react_all_in_one",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is generally appropriate when a React component needs to fetch data when a particular ID changes?",
    options: [
      {
        id: "A",
        text: "Use an effect whose dependencies include the ID used by the request."
      },
      {
        id: "B",
        text: "Place the fetch call directly inside the JSX markup."
      },
      {
        id: "C",
        text: "Change the component's props directly after the request."
      },
      {
        id: "D",
        text: "Use CSS to trigger the network request."
      }
    ],
    correctOptionId: "A",
    explanation: "An effect can synchronize the component with the external data source, and including the ID in its dependency list allows the effect to respond when that ID changes.",
    tags: ["useEffect", "data-fetching", "dependencies"]
  },

  {
    id: "react-all-in-one-q-023",
    quizId: "quiz_react_all_in_one",
    order: 23,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main purpose of code splitting in a React application?",
    options: [
      {
        id: "A",
        text: "To load JavaScript in smaller chunks so users do not necessarily download the entire application upfront."
      },
      {
        id: "B",
        text: "To convert React components into CSS files."
      },
      {
        id: "C",
        text: "To eliminate JavaScript from the application."
      },
      {
        id: "D",
        text: "To guarantee that every component renders faster."
      }
    ],
    correctOptionId: "A",
    explanation: "Code splitting separates application code into chunks that can be loaded when needed, which can reduce the amount of JavaScript required during the initial load.",
    tags: ["performance", "code-splitting", "optimization"]
  },

  {
    id: "react-all-in-one-q-024",
    quizId: "quiz_react_all_in_one",
    order: 24,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component subscribes to an external event source inside useEffect. What should it generally do when the component no longer needs the subscription?",
    options: [
      {
        id: "A",
        text: "Remove the subscription in the effect cleanup function."
      },
      {
        id: "B",
        text: "Create another subscription every time the component unmounts."
      },
      {
        id: "C",
        text: "Store the subscription in JSX."
      },
      {
        id: "D",
        text: "Disable React state updates globally."
      }
    ],
    correctOptionId: "A",
    explanation: "Effects that establish subscriptions or other resources should generally return a cleanup function that releases those resources when the effect is cleaned up.",
    tags: ["useEffect", "cleanup", "subscriptions"]
  },

  {
    id: "react-all-in-one-q-025",
    quizId: "quiz_react_all_in_one",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes React's component composition approach?",
    options: [
      {
        id: "A",
        text: "Complex interfaces can be built by combining smaller components and passing data or content between them."
      },
      {
        id: "B",
        text: "Every application must use exactly one component."
      },
      {
        id: "C",
        text: "Components can only communicate through global variables."
      },
      {
        id: "D",
        text: "Composition requires every component to share the same state."
      }
    ],
    correctOptionId: "A",
    explanation: "Composition encourages building interfaces from smaller reusable components that can be combined and configured through props, children, and other React mechanisms.",
    tags: ["components", "composition", "architecture"]
  },
   {
    id: "react-all-in-one-q-026",
    quizId: "quiz_react_all_in_one",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does conditional rendering mean in React?",
    options: [
      {
        id: "A",
        text: "Rendering different UI based on a condition in the component's logic."
      },
      {
        id: "B",
        text: "Rendering every component regardless of application state."
      },
      {
        id: "C",
        text: "Changing CSS only when the browser window is resized."
      },
      {
        id: "D",
        text: "Rendering components only after they receive a ref."
      }
    ],
    correctOptionId: "A",
    explanation: "Conditional rendering allows a component to choose what UI to return or include based on values such as state, props, or other conditions.",
    tags: ["conditional-rendering", "jsx", "rendering"]
  },

  {
    id: "react-all-in-one-q-027",
    quizId: "quiz_react_all_in_one",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What will this component render when isLoggedIn is false?\n\nfunction App({ isLoggedIn }) {\n  return <div>{isLoggedIn ? <Dashboard /> : <Login />}</div>;\n}",
    options: [
      {
        id: "A",
        text: "Only Dashboard"
      },
      {
        id: "B",
        text: "Only Login"
      },
      {
        id: "C",
        text: "Both Dashboard and Login"
      },
      {
        id: "D",
        text: "Neither component"
      }
    ],
    correctOptionId: "B",
    explanation: "The conditional expression evaluates its second branch when isLoggedIn is false, so Login is rendered.",
    tags: ["conditional-rendering", "ternary", "jsx"]
  },

  {
    id: "react-all-in-one-q-028",
    quizId: "quiz_react_all_in_one",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which React event handler correctly passes the clicked item's ID to a function?",
    options: [
      {
        id: "A",
        text: "onClick={handleDelete(item.id)}"
      },
      {
        id: "B",
        text: "onClick={() => handleDelete(item.id)}"
      },
      {
        id: "C",
        text: "onClick={handleDelete => item.id}"
      },
      {
        id: "D",
        text: "onClick={item.id => handleDelete}"
      }
    ],
    correctOptionId: "B",
    explanation: "An arrow function delays execution until the click occurs and then calls handleDelete with the item's ID. Calling handleDelete(item.id) directly would execute during rendering.",
    tags: ["events", "event-handlers", "callbacks"]
  },

  {
    id: "react-all-in-one-q-029",
    quizId: "quiz_react_all_in_one",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is event.preventDefault() commonly used in a React form submit handler?",
    options: [
      {
        id: "A",
        text: "To prevent the browser's default form submission behavior."
      },
      {
        id: "B",
        text: "To prevent React state from being updated."
      },
      {
        id: "C",
        text: "To automatically validate every input."
      },
      {
        id: "D",
        text: "To stop the submit handler from executing."
      }
    ],
    correctOptionId: "A",
    explanation: "Calling preventDefault prevents the browser's default action for the event, which is commonly useful when React handles form submission itself.",
    tags: ["forms", "events", "preventDefault"]
  },

  {
    id: "react-all-in-one-q-030",
    quizId: "quiz_react_all_in_one",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is prop drilling?",
    options: [
      {
        id: "A",
        text: "Passing data through intermediate components that do not otherwise need the data."
      },
      {
        id: "B",
        text: "Updating props directly inside a child component."
      },
      {
        id: "C",
        text: "Removing props from a component tree."
      },
      {
        id: "D",
        text: "Passing state only through React Context."
      }
    ],
    correctOptionId: "A",
    explanation: "Prop drilling occurs when a value must be passed through several component layers simply so a deeply nested component can receive it.",
    tags: ["props", "prop-drilling", "state-management"]
  },

  {
    id: "react-all-in-one-q-031",
    quizId: "quiz_react_all_in_one",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "A parent component creates a new object on every render and passes it to a child wrapped with React.memo. Why might the child still re-render?",
    options: [
      {
        id: "A",
        text: "The object has a new reference on each parent render."
      },
      {
        id: "B",
        text: "React.memo ignores all object props."
      },
      {
        id: "C",
        text: "React.memo only works with string props."
      },
      {
        id: "D",
        text: "Child components cannot receive objects as props."
      }
    ],
    correctOptionId: "A",
    explanation: "A newly created object has a different reference even when its contents are identical. React.memo's default comparison can therefore detect the prop as changed.",
    tags: ["performance", "React.memo", "references"]
  },

  {
    id: "react-all-in-one-q-032",
    quizId: "quiz_react_all_in_one",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes the relationship between useMemo and useCallback?",
    options: [
      {
        id: "A",
        text: "useMemo memoizes a calculated value, while useCallback memoizes a function reference."
      },
      {
        id: "B",
        text: "useMemo memoizes components, while useCallback memoizes state."
      },
      {
        id: "C",
        text: "useMemo handles effects, while useCallback handles routing."
      },
      {
        id: "D",
        text: "They are identical APIs with different names."
      }
    ],
    correctOptionId: "A",
    explanation: "useMemo caches the result of a calculation, whereas useCallback caches the function itself. Both can be useful for controlling unnecessary work or reference changes.",
    tags: ["useMemo", "useCallback", "performance"]
  },

  {
    id: "react-all-in-one-q-033",
    quizId: "quiz_react_all_in_one",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the children prop?",
    options: [
      {
        id: "A",
        text: "It represents content nested between a component's opening and closing tags."
      },
      {
        id: "B",
        text: "It contains only the component's internal state."
      },
      {
        id: "C",
        text: "It automatically contains every child component in the application."
      },
      {
        id: "D",
        text: "It is used only for rendering HTML forms."
      }
    ],
    correctOptionId: "A",
    explanation: "Content placed between a component's opening and closing tags is available to that component through the children prop.",
    tags: ["props", "children", "composition"]
  },

  {
    id: "react-all-in-one-q-034",
    quizId: "quiz_react_all_in_one",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a custom Hook in React?",
    options: [
      {
        id: "A",
        text: "A reusable function that uses React Hooks to share stateful logic between components."
      },
      {
        id: "B",
        text: "A special class that replaces function components."
      },
      {
        id: "C",
        text: "A browser API for creating custom DOM events."
      },
      {
        id: "D",
        text: "A React component that cannot accept props."
      }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks are JavaScript functions whose names conventionally begin with use and that can call other Hooks, allowing reusable stateful logic to be shared.",
    tags: ["custom-hooks", "hooks", "reusability"]
  },

  {
    id: "react-all-in-one-q-035",
    quizId: "quiz_react_all_in_one",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why must React Hooks generally be called at the top level of a component or custom Hook?",
    options: [
      {
        id: "A",
        text: "React relies on a consistent Hook call order between renders."
      },
      {
        id: "B",
        text: "Hooks can only be executed by the browser."
      },
      {
        id: "C",
        text: "Hooks cannot contain JavaScript expressions."
      },
      {
        id: "D",
        text: "React automatically converts top-level Hooks into props."
      }
    ],
    correctOptionId: "A",
    explanation: "React associates Hook state with the order in which Hooks are called. Conditional or inconsistent Hook calls can change that order between renders and break the association.",
    tags: ["hooks", "rules-of-hooks", "rendering"]
  },

  {
    id: "react-all-in-one-q-036",
    quizId: "quiz_react_all_in_one",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider this effect:\n\nuseEffect(() => {\n  const connection = connect(roomId);\n\n  return () => {\n    connection.disconnect();\n  };\n}, [roomId]);\n\nWhen roomId changes, what happens to the previous connection?",
    options: [
      {
        id: "A",
        text: "The previous effect cleanup runs before the effect is synchronized with the new roomId."
      },
      {
        id: "B",
        text: "The previous connection remains permanently active."
      },
      {
        id: "C",
        text: "React automatically converts the connection into state."
      },
      {
        id: "D",
        text: "The new effect runs without any relationship to the previous cleanup."
      }
    ],
    correctOptionId: "A",
    explanation: "When dependencies change, React cleans up the previous effect before running the updated effect, allowing the previous connection to be disconnected.",
    tags: ["useEffect", "cleanup", "dependencies"]
  },

  {
    id: "react-all-in-one-q-037",
    quizId: "quiz_react_all_in_one",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main benefit of using a stable database ID as a React list key?",
    options: [
      {
        id: "A",
        text: "The identity of an item remains stable even when the list order changes."
      },
      {
        id: "B",
        text: "React automatically creates the database record."
      },
      {
        id: "C",
        text: "The ID prevents the item from ever being removed."
      },
      {
        id: "D",
        text: "The ID makes the component state global."
      }
    ],
    correctOptionId: "A",
    explanation: "A stable item-specific ID lets React associate an element with the same logical item across renders, including when items are reordered.",
    tags: ["keys", "lists", "reconciliation"]
  },

  {
    id: "react-all-in-one-q-038",
    quizId: "quiz_react_all_in_one",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can using an array index as a key cause problems when items can be inserted or removed from the middle of a list?",
    options: [
      {
        id: "A",
        text: "The same index can refer to a different logical item after the list changes."
      },
      {
        id: "B",
        text: "Indexes cannot be numbers in JavaScript."
      },
      {
        id: "C",
        text: "React does not allow arrays to be rendered."
      },
      {
        id: "D",
        text: "Index keys automatically sort the list."
      }
    ],
    correctOptionId: "A",
    explanation: "When the list changes order or items are inserted or removed, indexes can shift. React may then associate existing elements with different logical items.",
    tags: ["keys", "lists", "reconciliation", "common-mistakes"]
  },

  {
    id: "react-all-in-one-q-039",
    quizId: "quiz_react_all_in_one",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of React Router's route parameters?",
    options: [
      {
        id: "A",
        text: "To represent dynamic values within a URL path."
      },
      {
        id: "B",
        text: "To store React state permanently."
      },
      {
        id: "C",
        text: "To replace component props completely."
      },
      {
        id: "D",
        text: "To define CSS breakpoints."
      }
    ],
    correctOptionId: "A",
    explanation: "Dynamic route parameters allow a route such as /users/:id to represent different resources using values supplied in the URL.",
    tags: ["routing", "route-params", "react-router"]
  },

  {
    id: "react-all-in-one-q-040",
    quizId: "quiz_react_all_in_one",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main advantage of nested routes?",
    options: [
      {
        id: "A",
        text: "They allow route structures to reflect nested UI layouts and shared parent views."
      },
      {
        id: "B",
        text: "They prevent child components from rendering."
      },
      {
        id: "C",
        text: "They eliminate the need for URL paths."
      },
      {
        id: "D",
        text: "They make every route globally accessible without configuration."
      }
    ],
    correctOptionId: "A",
    explanation: "Nested routes allow child routes to render within a parent route's layout, which is useful for dashboards and other hierarchical interfaces.",
    tags: ["routing", "nested-routes", "react-router"]
  },

  {
    id: "react-all-in-one-q-041",
    quizId: "quiz_react_all_in_one",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component has expensive filtering logic that runs on every render even when its input data has not changed. Which approach may reduce unnecessary recalculation?",
    options: [
      {
        id: "A",
        text: "Memoize the calculated result with useMemo using the relevant inputs as dependencies."
      },
      {
        id: "B",
        text: "Move the calculation into a CSS class."
      },
      {
        id: "C",
        text: "Replace every state variable with a ref."
      },
      {
        id: "D",
        text: "Call the calculation twice so React can cache it."
      }
    ],
    correctOptionId: "A",
    explanation: "useMemo can cache the result of an expensive calculation and recalculate it when its specified dependencies change.",
    tags: ["useMemo", "performance", "optimization"]
  },

  {
    id: "react-all-in-one-q-042",
    quizId: "quiz_react_all_in_one",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about memoization in React is most accurate?",
    options: [
      {
        id: "A",
        text: "Memoization is an optimization technique and should not be assumed to eliminate every render."
      },
      {
        id: "B",
        text: "Memoization guarantees that a component renders exactly once."
      },
      {
        id: "C",
        text: "Memoization automatically makes network requests faster."
      },
      {
        id: "D",
        text: "Memoization prevents state changes from working."
      }
    ],
    correctOptionId: "A",
    explanation: "Memoization can skip work when relevant inputs remain unchanged, but it is an optimization rather than a guarantee that a component will render only once.",
    tags: ["performance", "memoization", "React.memo"]
  },

  {
    id: "react-all-in-one-q-043",
    quizId: "quiz_react_all_in_one",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when a parent passes a new primitive string value to a child during a render?",
    options: [
      {
        id: "A",
        text: "The child receives the new prop value during the resulting render."
      },
      {
        id: "B",
        text: "React refuses to pass primitive props."
      },
      {
        id: "C",
        text: "The string is automatically converted into component state."
      },
      {
        id: "D",
        text: "The child can only receive the value through Context."
      }
    ],
    correctOptionId: "A",
    explanation: "Primitive values such as strings can be passed directly as props. The child receives the value provided by the parent during rendering.",
    tags: ["props", "components", "data-flow"]
  },

  {
    id: "react-all-in-one-q-044",
    quizId: "quiz_react_all_in_one",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach best keeps a React component's derived display value synchronized with existing state?",
    options: [
      {
        id: "A",
        text: "Calculate the value during rendering when it can be derived directly from current props or state."
      },
      {
        id: "B",
        text: "Always duplicate the value in another state variable."
      },
      {
        id: "C",
        text: "Store every derived value in localStorage."
      },
      {
        id: "D",
        text: "Update the derived value only when the user refreshes the page."
      }
    ],
    correctOptionId: "A",
    explanation: "If a value can be calculated directly from current props or state, deriving it during rendering avoids maintaining unnecessary duplicate state that could become inconsistent.",
    tags: ["state", "derived-data", "component-design"]
  },

  {
    id: "react-all-in-one-q-045",
    quizId: "quiz_react_all_in_one",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component uses an effect to calculate a value that can be derived directly from props during rendering. What is generally a concern with this design?",
    options: [
      {
        id: "A",
        text: "It introduces an unnecessary synchronization step for a value that could be calculated directly."
      },
      {
        id: "B",
        text: "Effects cannot access props."
      },
      {
        id: "C",
        text: "React prevents effects from running after rendering."
      },
      {
        id: "D",
        text: "Props automatically become immutable only inside effects."
      }
    ],
    correctOptionId: "A",
    explanation: "Using an effect and extra state for a value that can be derived during rendering can add unnecessary complexity and an additional update cycle.",
    tags: ["useEffect", "derived-data", "state-design"]
  },

  {
    id: "react-all-in-one-q-046",
    quizId: "quiz_react_all_in_one",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a key architectural benefit of keeping state as close as possible to the components that need it?",
    options: [
      {
        id: "A",
        text: "It can reduce unnecessary data flow and keep state ownership easier to understand."
      },
      {
        id: "B",
        text: "It guarantees that no component will ever re-render."
      },
      {
        id: "C",
        text: "It eliminates all need for component composition."
      },
      {
        id: "D",
        text: "It automatically converts local state into global state."
      }
    ],
    correctOptionId: "A",
    explanation: "Keeping state at an appropriate level avoids unnecessarily broad ownership and can make data flow and component responsibilities easier to reason about.",
    tags: ["state-management", "architecture", "component-design"]
  },

  {
    id: "react-all-in-one-q-047",
    quizId: "quiz_react_all_in_one",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which situation is a reasonable use case for React Context?",
    options: [
      {
        id: "A",
        text: "Making application-wide or subtree-wide configuration available to many descendants."
      },
      {
        id: "B",
        text: "Replacing every local component state variable."
      },
      {
        id: "C",
        text: "Performing CSS calculations."
      },
      {
        id: "D",
        text: "Making every network request automatically."
      }
    ],
    correctOptionId: "A",
    explanation: "Context is useful when many components in a subtree need access to shared values such as theme, locale, or application-level configuration.",
    tags: ["context", "state-management", "architecture"]
  },

  {
    id: "react-all-in-one-q-048",
    quizId: "quiz_react_all_in_one",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can excessive use of Context make performance and architecture harder to manage?",
    options: [
      {
        id: "A",
        text: "Changes to a context value can cause consuming components to update, so broad contexts can increase the affected rendering area."
      },
      {
        id: "B",
        text: "Context values can only contain strings."
      },
      {
        id: "C",
        text: "Context prevents components from receiving props."
      },
      {
        id: "D",
        text: "Context always creates a new browser tab."
      }
    ],
    correctOptionId: "A",
    explanation: "Consumers of a context respond to changes in the provided value. A broad context containing frequently changing data can therefore affect many components unnecessarily.",
    tags: ["context", "performance", "state-management"]
  },

  {
    id: "react-all-in-one-q-049",
    quizId: "quiz_react_all_in_one",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is lazy loading a React component primarily intended to accomplish?",
    options: [
      {
        id: "A",
        text: "Delay loading a component's code until it is needed."
      },
      {
        id: "B",
        text: "Prevent the component from ever rendering."
      },
      {
        id: "C",
        text: "Convert the component into server-side state."
      },
      {
        id: "D",
        text: "Automatically remove unused CSS from the component."
      }
    ],
    correctOptionId: "A",
    explanation: "React.lazy can defer loading a component's module until React needs to render it, commonly supporting code splitting and smaller initial bundles.",
    tags: ["performance", "lazy-loading", "code-splitting"]
  },

  {
    id: "react-all-in-one-q-050",
    quizId: "quiz_react_all_in_one",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes an Error Boundary in React?",
    options: [
      {
        id: "A",
        text: "It can catch certain rendering errors in descendant components and display fallback UI."
      },
      {
        id: "B",
        text: "It catches every possible JavaScript error from every asynchronous operation."
      },
      {
        id: "C",
        text: "It prevents all React components from throwing errors."
      },
      {
        id: "D",
        text: "It replaces try/catch for every JavaScript operation."
      }
    ],
    correctOptionId: "A",
    explanation: "Error boundaries provide fallback UI when certain errors occur during rendering and related React lifecycle processing in their descendant tree. They do not catch every type of asynchronous or event-handler error.",
    tags: ["error-handling", "error-boundaries", "react"]
  }
];

export default reactAllInOneQuestions;