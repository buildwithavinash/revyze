const reactFundamentalsQuestions = [
  {
    id: "react-fundamentals-q-001",
    quizId: "quiz_react_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is React primarily used for?",
    options: [
      {
        id: "A",
        text: "Building user interfaces from reusable components."
      },
      {
        id: "B",
        text: "Managing relational databases."
      },
      {
        id: "C",
        text: "Creating operating system kernels."
      },
      {
        id: "D",
        text: "Compiling JavaScript into machine code."
      }
    ],
    correctOptionId: "A",
    explanation: "React is a JavaScript library for building user interfaces, particularly interfaces composed from reusable components.",
    tags: ["react", "fundamentals", "components"]
  },

  {
    id: "react-fundamentals-q-002",
    quizId: "quiz_react_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax is used to embed a JavaScript expression inside JSX?",
    options: [
      {
        id: "A",
        text: "Double parentheses"
      },
      {
        id: "B",
        text: "Curly braces"
      },
      {
        id: "C",
        text: "Square brackets"
      },
      {
        id: "D",
        text: "Angle brackets"
      }
    ],
    correctOptionId: "B",
    explanation: "JSX uses curly braces to embed JavaScript expressions, such as variables, calculations, or function calls, inside markup.",
    tags: ["jsx", "expressions", "syntax"]
  },

  {
    id: "react-fundamentals-q-003",
    quizId: "quiz_react_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of the following is a valid React function component?",
    options: [
      {
        id: "A",
        text: "function Welcome() { return <h1>Hello</h1>; }"
      },
      {
        id: "B",
        text: "component Welcome() { return <h1>Hello</h1>; }"
      },
      {
        id: "C",
        text: "function: Welcome() { return <h1>Hello</h1>; }"
      },
      {
        id: "D",
        text: "React.component Welcome() { return <h1>Hello</h1>; }"
      }
    ],
    correctOptionId: "A",
    explanation: "A React function component is a JavaScript function that returns React elements or JSX. Function components are commonly named using PascalCase.",
    tags: ["components", "function-components", "jsx"]
  },

  {
    id: "react-fundamentals-q-004",
    quizId: "quiz_react_fundamentals",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why are React component names conventionally written using PascalCase?",
    options: [
      {
        id: "A",
        text: "It allows JSX to distinguish user-defined components from intrinsic HTML elements."
      },
      {
        id: "B",
        text: "It automatically gives the component access to state."
      },
      {
        id: "C",
        text: "It prevents the component from receiving props."
      },
      {
        id: "D",
        text: "It converts the component into a class."
      }
    ],
    correctOptionId: "A",
    explanation: "Capitalized JSX tags are treated as references to components, while lowercase tags such as div and button represent intrinsic HTML elements.",
    tags: ["components", "jsx", "naming"]
  },

  {
    id: "react-fundamentals-q-005",
    quizId: "quiz_react_fundamentals",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this JSX expression render?\n\nconst name = \"Avi\";\nreturn <h1>Hello, {name}!</h1>;",
    options: [
      {
        id: "A",
        text: "Hello, name!"
      },
      {
        id: "B",
        text: "Hello, {name}!"
      },
      {
        id: "C",
        text: "Hello, Avi!"
      },
      {
        id: "D",
        text: "Hello!"
      }
    ],
    correctOptionId: "C",
    explanation: "The curly braces evaluate the JavaScript variable name, whose value is Avi, so the rendered heading contains Hello, Avi!",
    tags: ["jsx", "expressions", "variables"]
  },

  {
    id: "react-fundamentals-q-006",
    quizId: "quiz_react_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "How does a parent component pass a value named title to a child component?",
    options: [
      {
        id: "A",
        text: "<Child title=\"Dashboard\" />"
      },
      {
        id: "B",
        text: "<Child prop.title=\"Dashboard\" />"
      },
      {
        id: "C",
        text: "<Child -> title=\"Dashboard\" />"
      },
      {
        id: "D",
        text: "<Child state=\"title: Dashboard\" />"
      }
    ],
    correctOptionId: "A",
    explanation: "JSX attributes on a component become props. In this example, the child receives a prop named title with the value Dashboard.",
    tags: ["props", "jsx", "data-flow"]
  },

  {
    id: "react-fundamentals-q-007",
    quizId: "quiz_react_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "How can a function component access a prop named name?",
    options: [
      {
        id: "A",
        text: "function User({ name }) { return <p>{name}</p>; }"
      },
      {
        id: "B",
        text: "function User(name.props) { return <p>{name}</p>; }"
      },
      {
        id: "C",
        text: "function User(state.name) { return <p>{name}</p>; }"
      },
      {
        id: "D",
        text: "function User(props.name) { return <p>{name}</p>; }"
      }
    ],
    correctOptionId: "A",
    explanation: "The component receives a props object. Destructuring { name } from that object provides direct access to the name prop.",
    tags: ["props", "destructuring", "components"]
  },

  {
    id: "react-fundamentals-q-008",
    quizId: "quiz_react_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does it mean that React components should generally be reusable?",
    options: [
      {
        id: "A",
        text: "The same component can be used in different places with different inputs."
      },
      {
        id: "B",
        text: "A component can only be rendered once."
      },
      {
        id: "C",
        text: "A component cannot receive props."
      },
      {
        id: "D",
        text: "A component must contain all application logic."
      }
    ],
    correctOptionId: "A",
    explanation: "Reusable components encapsulate UI and behavior so they can be rendered in multiple places and configured with different props.",
    tags: ["components", "reusability", "architecture"]
  },

  {
    id: "react-fundamentals-q-009",
    quizId: "quiz_react_fundamentals",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which Hook is commonly used to add local state to a function component?",
    options: [
      {
        id: "A",
        text: "useEffect"
      },
      {
        id: "B",
        text: "useState"
      },
      {
        id: "C",
        text: "useContext"
      },
      {
        id: "D",
        text: "useRef"
      }
    ],
    correctOptionId: "B",
    explanation: "useState provides a state value and a setter function that can be used to update that state.",
    tags: ["state", "useState", "hooks"]
  },

  {
    id: "react-fundamentals-q-010",
    quizId: "quiz_react_fundamentals",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does useState return?",
    options: [
      {
        id: "A",
        text: "A state value and a function for updating it."
      },
      {
        id: "B",
        text: "A component and its props."
      },
      {
        id: "C",
        text: "An event object and a DOM element."
      },
      {
        id: "D",
        text: "A route and a URL parameter."
      }
    ],
    correctOptionId: "A",
    explanation: "useState returns a two-item array containing the current state value and a setter function used to request an update to that state.",
    tags: ["useState", "state", "hooks"]
  },

  {
    id: "react-fundamentals-q-011",
    quizId: "quiz_react_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the initial state value in this component?\n\nconst [count, setCount] = useState(5);",
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
        text: "5"
      },
      {
        id: "D",
        text: "undefined"
      }
    ],
    correctOptionId: "C",
    explanation: "The argument passed to useState is used as the initial state value, so count starts at 5.",
    tags: ["useState", "initial-state", "state"]
  },

  {
    id: "react-fundamentals-q-012",
    quizId: "quiz_react_fundamentals",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What should you generally do to update a state value created with useState?",
    options: [
      {
        id: "A",
        text: "Call the setter function returned by useState."
      },
      {
        id: "B",
        text: "Assign a new value directly to the state variable."
      },
      {
        id: "C",
        text: "Modify the component function's source code."
      },
      {
        id: "D",
        text: "Change the component's props."
      }
    ],
    correctOptionId: "A",
    explanation: "The setter returned by useState should be used to request a state update so React can process the change and update the component accordingly.",
    tags: ["useState", "state-updates", "fundamentals"]
  },

  {
    id: "react-fundamentals-q-013",
    quizId: "quiz_react_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when this button is clicked?\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
    options: [
      {
        id: "A",
        text: "The state is requested to change from its current value to one greater."
      },
      {
        id: "B",
        text: "The component is permanently removed from the page."
      },
      {
        id: "C",
        text: "The count variable is changed directly without a render."
      },
      {
        id: "D",
        text: "The browser reloads the entire page."
      }
    ],
    correctOptionId: "A",
    explanation: "The click handler calls setCount with count + 1, requesting a state update that causes React to render the updated value.",
    tags: ["useState", "events", "rendering"]
  },

  {
    id: "react-fundamentals-q-014",
    quizId: "quiz_react_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which JSX correctly renders a button with the text Save?",
    options: [
      {
        id: "A",
        text: "<button>Save</button>"
      },
      {
        id: "B",
        text: "<button value=\"Save\" />"
      },
      {
        id: "C",
        text: "<button text=\"Save\" />"
      },
      {
        id: "D",
        text: "<button content=\"Save\"></button>"
      }
    ],
    correctOptionId: "A",
    explanation: "Text placed between the opening and closing button tags becomes the button's child content.",
    tags: ["jsx", "elements", "components"]
  },

  {
    id: "react-fundamentals-q-015",
    quizId: "quiz_react_fundamentals",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why can a React component not return two adjacent JSX elements without a parent or Fragment?",
    options: [
      {
        id: "A",
        text: "A component return expression needs a single enclosing JSX structure."
      },
      {
        id: "B",
        text: "React components can only render buttons."
      },
      {
        id: "C",
        text: "JSX does not support multiple elements."
      },
      {
        id: "D",
        text: "React requires every element to have a unique CSS class."
      }
    ],
    correctOptionId: "A",
    explanation: "A component's return expression needs one enclosing structure. A Fragment can group multiple sibling elements without adding an extra DOM element.",
    tags: ["jsx", "fragments", "components"]
  },

  {
    id: "react-fundamentals-q-016",
    quizId: "quiz_react_fundamentals",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of the following correctly uses a React Fragment?",
    options: [
      {
        id: "A",
        text: "<><h1>Title</h1><p>Text</p></>"
      },
      {
        id: "B",
        text: "<fragment><h1>Title</h1><p>Text</p></fragment>"
      },
      {
        id: "C",
        text: "<group><h1>Title</h1><p>Text</p></group>"
      },
      {
        id: "D",
        text: "<wrapper><h1>Title</h1><p>Text</p></wrapper>"
      }
    ],
    correctOptionId: "A",
    explanation: "The shorthand Fragment syntax <>...</> groups multiple JSX elements without adding an extra DOM element.",
    tags: ["fragments", "jsx", "syntax"]
  },

  {
    id: "react-fundamentals-q-017",
    quizId: "quiz_react_fundamentals",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about props is correct?",
    options: [
      {
        id: "A",
        text: "A component should treat its props as inputs rather than directly modifying them."
      },
      {
        id: "B",
        text: "A child component should directly assign new values to its props."
      },
      {
        id: "C",
        text: "Props can only be passed from a child to a parent."
      },
      {
        id: "D",
        text: "Props automatically persist after the application closes."
      }
    ],
    correctOptionId: "A",
    explanation: "Props are inputs supplied to a component. A component should not directly mutate the props object it receives.",
    tags: ["props", "immutability", "components"]
  },

  {
    id: "react-fundamentals-q-018",
    quizId: "quiz_react_fundamentals",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this component display?\n\nfunction Greeting({ name = \"Guest\" }) {\n  return <p>Hello, {name}</p>;\n}\n\n<Greeting />",
    options: [
      {
        id: "A",
        text: "Hello, Guest"
      },
      {
        id: "B",
        text: "Hello, name"
      },
      {
        id: "C",
        text: "Hello, undefined"
      },
      {
        id: "D",
        text: "Hello, null"
      }
    ],
    correctOptionId: "A",
    explanation: "The destructured name prop has a default value of Guest, which is used when no name prop is provided.",
    tags: ["props", "default-values", "destructuring"]
  },

  {
    id: "react-fundamentals-q-019",
    quizId: "quiz_react_fundamentals",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement best describes a React re-render?",
    options: [
      {
        id: "A",
        text: "React runs the component again to determine the UI for the updated state or props."
      },
      {
        id: "B",
        text: "React always reloads the browser page."
      },
      {
        id: "C",
        text: "React deletes the entire application and rebuilds it from scratch."
      },
      {
        id: "D",
        text: "React only re-renders when CSS changes."
      }
    ],
    correctOptionId: "A",
    explanation: "When relevant state or props change, React can render the component again to determine the resulting UI and reconcile the changes.",
    tags: ["rendering", "state", "props"]
  },

  {
    id: "react-fundamentals-q-020",
    quizId: "quiz_react_fundamentals",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the key prop when rendering a collection of React elements?",
    options: [
      {
        id: "A",
        text: "To provide a stable identity for each item in the collection."
      },
      {
        id: "B",
        text: "To encrypt the rendered element."
      },
      {
        id: "C",
        text: "To make the element receive keyboard input automatically."
      },
      {
        id: "D",
        text: "To make the element globally accessible."
      }
    ],
    correctOptionId: "A",
    explanation: "Keys identify list items to React during reconciliation, helping React understand which items have changed, been added, or been removed.",
    tags: ["lists", "keys", "rendering"]
  },

  {
    id: "react-fundamentals-q-021",
    quizId: "quiz_react_fundamentals",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which approach correctly renders each product name from an array?",
    options: [
      {
        id: "A",
        text: "{products.map(product => <p key={product.id}>{product.name}</p>)}"
      },
      {
        id: "B",
        text: "{products.render(product => <p>{product.name}</p>)}"
      },
      {
        id: "C",
        text: "{products.loop(product => <p>{product.name}</p>)}"
      },
      {
        id: "D",
        text: "{products.display(product => <p>{product.name}</p>)}"
      }
    ],
    correctOptionId: "A",
    explanation: "Array.prototype.map creates a new array of React elements from the products array. Each element also receives a key.",
    tags: ["lists", "map", "keys"]
  },

  {
    id: "react-fundamentals-q-022",
    quizId: "quiz_react_fundamentals",
    order: 22,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement correctly describes the relationship between a parent and child component?",
    options: [
      {
        id: "A",
        text: "The parent can pass data to the child through props."
      },
      {
        id: "B",
        text: "The child automatically owns all of the parent's state."
      },
      {
        id: "C",
        text: "The parent can directly access every local variable inside the child."
      },
      {
        id: "D",
        text: "The child must always be implemented as a class."
      }
    ],
    correctOptionId: "A",
    explanation: "Props provide the standard one-way mechanism for passing data from a parent component to a child component.",
    tags: ["props", "parent-child", "data-flow"]
  },

  {
    id: "react-fundamentals-q-023",
    quizId: "quiz_react_fundamentals",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the result of this JSX?\n\nconst isAdmin = true;\nreturn <div>{isAdmin && <p>Admin panel</p>}</div>;",
    options: [
      {
        id: "A",
        text: "The paragraph containing Admin panel is rendered."
      },
      {
        id: "B",
        text: "Nothing inside the div is rendered."
      },
      {
        id: "C",
        text: "The string true is rendered instead of the paragraph."
      },
      {
        id: "D",
        text: "React throws an error because && cannot be used in JSX."
      }
    ],
    correctOptionId: "A",
    explanation: "With && conditional rendering, when the left side is truthy, React evaluates and renders the right-side JSX expression.",
    tags: ["jsx", "conditional-rendering", "expressions"]
  },

  {
    id: "react-fundamentals-q-024",
    quizId: "quiz_react_fundamentals",
    order: 24,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement best describes one-way data flow in React?",
    options: [
      {
        id: "A",
        text: "Data generally flows from parent components toward child components through props."
      },
      {
        id: "B",
        text: "Data automatically flows from every child to every parent."
      },
      {
        id: "C",
        text: "Every component can directly modify every other component's state."
      },
      {
        id: "D",
        text: "Data can only flow through browser storage."
      }
    ],
    correctOptionId: "A",
    explanation: "React commonly uses one-way data flow, where parent components pass values down to children through props. Child components can communicate upward through callbacks supplied by parents.",
    tags: ["data-flow", "props", "components"]
  },

  {
    id: "react-fundamentals-q-025",
    quizId: "quiz_react_fundamentals",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A component receives a prop named user containing { name: \"Avi\" }. Which JSX correctly displays the user's name?",
    options: [
      {
        id: "A",
        text: "<h2>{user.name}</h2>"
      },
      {
        id: "B",
        text: "<h2>{user->name}</h2>"
      },
      {
        id: "C",
        text: "<h2>{user::name}</h2>"
      },
      {
        id: "D",
        text: "<h2>{user/name}</h2>"
      }
    ],
    correctOptionId: "A",
    explanation: "JavaScript object properties are accessed with dot notation, so user.name retrieves the value of the name property.",
    tags: ["props", "objects", "jsx"]
  },
  {
    id: "react-fundamentals-q-026",
    quizId: "quiz_react_fundamentals",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is JSX transformed into before React uses it?",
    options: [
      {
        id: "A",
        text: "JavaScript expressions that create React elements."
      },
      {
        id: "B",
        text: "CSS rules that describe the interface."
      },
      {
        id: "C",
        text: "SQL queries that create the interface."
      },
      {
        id: "D",
        text: "HTML files that replace the JavaScript application."
      }
    ],
    correctOptionId: "A",
    explanation: "JSX is syntax that is transformed into JavaScript representations of React elements. It is not directly treated as ordinary HTML source code.",
    tags: ["jsx", "react-elements", "transformation"]
  },

  {
    id: "react-fundamentals-q-027",
    quizId: "quiz_react_fundamentals",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which JSX attribute is used to provide a CSS class name?",
    options: [
      {
        id: "A",
        text: "class"
      },
      {
        id: "B",
        text: "className"
      },
      {
        id: "C",
        text: "cssClass"
      },
      {
        id: "D",
        text: "styleClass"
      }
    ],
    correctOptionId: "B",
    explanation: "React uses className for the HTML class attribute in JSX because class is treated specially in JavaScript syntax.",
    tags: ["jsx", "className", "styling"]
  },

  {
    id: "react-fundamentals-q-028",
    quizId: "quiz_react_fundamentals",
    order: 28,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which JSX syntax correctly assigns an expression to a prop?",
    options: [
      {
        id: "A",
        text: "<Profile age={user.age} />"
      },
      {
        id: "B",
        text: "<Profile age=(user.age) />"
      },
      {
        id: "C",
        text: "<Profile age=[user.age] />"
      },
      {
        id: "D",
        text: "<Profile age={{user.age}} />"
      }
    ],
    correctOptionId: "A",
    explanation: "Curly braces allow JavaScript expressions to be used as JSX prop values. Here, user.age is evaluated and passed as the age prop.",
    tags: ["jsx", "props", "expressions"]
  },

  {
    id: "react-fundamentals-q-029",
    quizId: "quiz_react_fundamentals",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the following component receive?\n\nfunction Button({ children }) {\n  return <button>{children}</button>;\n}\n\n<Button>Save</Button>",
    options: [
      {
        id: "A",
        text: "The string Save through the children prop."
      },
      {
        id: "B",
        text: "The string Button through the children prop."
      },
      {
        id: "C",
        text: "A state variable named Save."
      },
      {
        id: "D",
        text: "No value because children is not a valid prop."
      }
    ],
    correctOptionId: "A",
    explanation: "Content placed between a component's opening and closing tags is passed through the children prop. In this case, children contains Save.",
    tags: ["children", "props", "composition"]
  },

  {
    id: "react-fundamentals-q-030",
    quizId: "quiz_react_fundamentals",
    order: 30,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this component render?\n\nfunction Status() {\n  const online = false;\n  return <p>{online ? \"Online\" : \"Offline\"}</p>;\n}",
    options: [
      {
        id: "A",
        text: "Online"
      },
      {
        id: "B",
        text: "Offline"
      },
      {
        id: "C",
        text: "false"
      },
      {
        id: "D",
        text: "Nothing"
      }
    ],
    correctOptionId: "B",
    explanation: "The ternary expression chooses the second branch when online is false, so the paragraph displays Offline.",
    tags: ["jsx", "conditional-rendering", "ternary"]
  },

  {
    id: "react-fundamentals-q-031",
    quizId: "quiz_react_fundamentals",
    order: 31,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about React state is correct?",
    options: [
      {
        id: "A",
        text: "State belongs to a component's React-managed data and can change over time."
      },
      {
        id: "B",
        text: "State can only contain numbers."
      },
      {
        id: "C",
        text: "State must always be received from a parent."
      },
      {
        id: "D",
        text: "State is permanently stored in the DOM."
      }
    ],
    correctOptionId: "A",
    explanation: "React state can represent changing component data and can contain values such as numbers, strings, arrays, objects, or other supported JavaScript values.",
    tags: ["state", "useState", "fundamentals"]
  },

  {
    id: "react-fundamentals-q-032",
    quizId: "quiz_react_fundamentals",
    order: 32,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the setter returned by useState?",
    options: [
      {
        id: "A",
        text: "To request that React update the associated state value."
      },
      {
        id: "B",
        text: "To read the current DOM element."
      },
      {
        id: "C",
        text: "To define a component's props."
      },
      {
        id: "D",
        text: "To create a new React application."
      }
    ],
    correctOptionId: "A",
    explanation: "The setter function returned by useState is the mechanism used to request a state update.",
    tags: ["useState", "state-updates", "hooks"]
  },

  {
    id: "react-fundamentals-q-033",
    quizId: "quiz_react_fundamentals",
    order: 33,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens to the displayed value after the click in this component?\n\nfunction Counter() {\n  const [count, setCount] = useState(10);\n  return <button onClick={() => setCount(20)}>{count}</button>;\n}",
    options: [
      {
        id: "A",
        text: "It changes from 10 to 20 after the state update is processed."
      },
      {
        id: "B",
        text: "It remains 10 because state cannot be replaced."
      },
      {
        id: "C",
        text: "It changes from 10 to 30."
      },
      {
        id: "D",
        text: "It becomes undefined."
      }
    ],
    correctOptionId: "A",
    explanation: "Calling setCount(20) requests that the state value become 20, after which React renders the button using the updated state.",
    tags: ["useState", "state-updates", "rendering"]
  },

  {
    id: "react-fundamentals-q-034",
    quizId: "quiz_react_fundamentals",
    order: 34,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement best describes a React element?",
    options: [
      {
        id: "A",
        text: "It is a description of what React should render."
      },
      {
        id: "B",
        text: "It is always an actual DOM node."
      },
      {
        id: "C",
        text: "It is always a class component instance."
      },
      {
        id: "D",
        text: "It is a browser event object."
      }
    ],
    correctOptionId: "A",
    explanation: "A React element is a JavaScript representation describing a piece of UI. React uses these descriptions when determining what should appear in the interface.",
    tags: ["react-elements", "rendering", "fundamentals"]
  },

  {
    id: "react-fundamentals-q-035",
    quizId: "quiz_react_fundamentals",
    order: 35,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which code correctly passes a number as a prop?",
    options: [
      {
        id: "A",
        text: "<Product quantity={3} />"
      },
      {
        id: "B",
        text: "<Product quantity=\"{3}\" />"
      },
      {
        id: "C",
        text: "<Product quantity=(3) />"
      },
      {
        id: "D",
        text: "<Product quantity=[3] />"
      }
    ],
    correctOptionId: "A",
    explanation: "Curly braces allow the JavaScript number 3 to be passed as the prop value. Quotation marks would create a string value.",
    tags: ["props", "jsx", "expressions"]
  },

  {
    id: "react-fundamentals-q-036",
    quizId: "quiz_react_fundamentals",
    order: 36,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the value of the title prop in this component?\n\n<Card title=\"React Basics\" />",
    options: [
      {
        id: "A",
        text: "React Basics as a string."
      },
      {
        id: "B",
        text: "The variable React Basics."
      },
      {
        id: "C",
        text: "An object containing title."
      },
      {
        id: "D",
        text: "A React state value."
      }
    ],
    correctOptionId: "A",
    explanation: "A quoted JSX attribute value is treated as a string, so the title prop receives the string React Basics.",
    tags: ["props", "jsx", "strings"]
  },

  {
    id: "react-fundamentals-q-037",
    quizId: "quiz_react_fundamentals",
    order: 37,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of the following is a valid way to define a default value for a destructured prop?",
    options: [
      {
        id: "A",
        text: "function Avatar({ size = 40 }) { return <img width={size} />; }"
      },
      {
        id: "B",
        text: "function Avatar({ size : 40 }) { return <img width={size} />; }"
      },
      {
        id: "C",
        text: "function Avatar({ size -> 40 }) { return <img width={size} />; }"
      },
      {
        id: "D",
        text: "function Avatar({ default size 40 }) { return <img width={size} />; }"
      }
    ],
    correctOptionId: "A",
    explanation: "JavaScript destructuring supports default values using the equals sign, so size becomes 40 when the prop is undefined.",
    tags: ["props", "destructuring", "default-values"]
  },

  {
    id: "react-fundamentals-q-038",
    quizId: "quiz_react_fundamentals",
    order: 38,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this JSX render?\n\nreturn <h1>{2 + 3}</h1>;",
    options: [
      {
        id: "A",
        text: "2 + 3"
      },
      {
        id: "B",
        text: "5"
      },
      {
        id: "C",
        text: "{5}"
      },
      {
        id: "D",
        text: "Nothing"
      }
    ],
    correctOptionId: "B",
    explanation: "The expression inside JSX braces is evaluated as JavaScript. The expression 2 + 3 produces the number 5.",
    tags: ["jsx", "expressions", "javascript"]
  },

  {
    id: "react-fundamentals-q-039",
    quizId: "quiz_react_fundamentals",
    order: 39,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about a function component's props is correct?",
    options: [
      {
        id: "A",
        text: "The component receives its props through its function parameter."
      },
      {
        id: "B",
        text: "Props are available only through localStorage."
      },
      {
        id: "C",
        text: "Props must always be accessed through document.querySelector."
      },
      {
        id: "D",
        text: "Props are created automatically by CSS."
      }
    ],
    correctOptionId: "A",
    explanation: "React passes the component's props to its function parameter, where they can be accessed directly or destructured.",
    tags: ["props", "function-components", "data-flow"]
  },

  {
    id: "react-fundamentals-q-040",
    quizId: "quiz_react_fundamentals",
    order: 40,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of React's Fragment syntax?",
    options: [
      {
        id: "A",
        text: "To group multiple elements without adding an extra DOM element."
      },
      {
        id: "B",
        text: "To create a new browser window."
      },
      {
        id: "C",
        text: "To store component state."
      },
      {
        id: "D",
        text: "To replace every HTML element."
      }
    ],
    correctOptionId: "A",
    explanation: "Fragments allow multiple sibling elements to be returned together without introducing an additional wrapper element into the DOM.",
    tags: ["fragments", "jsx", "components"]
  },

  {
    id: "react-fundamentals-q-041",
    quizId: "quiz_react_fundamentals",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the output of this component?\n\nfunction User({ user }) {\n  return <p>{user ? user.name : \"No user\"}</p>;\n}\n\n<User user={null} />",
    options: [
      {
        id: "A",
        text: "No user"
      },
      {
        id: "B",
        text: "null"
      },
      {
        id: "C",
        text: "undefined"
      },
      {
        id: "D",
        text: "user.name"
      }
    ],
    correctOptionId: "A",
    explanation: "Because user is null, the condition is falsy and the ternary expression chooses the fallback string No user.",
    tags: ["props", "conditional-rendering", "ternary"]
  },

  {
    id: "react-fundamentals-q-042",
    quizId: "quiz_react_fundamentals",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should a component avoid modifying an object received through props?",
    options: [
      {
        id: "A",
        text: "Props represent inputs from the component's owner and should be treated as read-only."
      },
      {
        id: "B",
        text: "JavaScript objects cannot be changed."
      },
      {
        id: "C",
        text: "React automatically converts objects into strings."
      },
      {
        id: "D",
        text: "Props can only contain primitive values."
      }
    ],
    correctOptionId: "A",
    explanation: "A component should treat props as read-only inputs. If data needs to change, the appropriate owner of that data should update its state and provide the new value.",
    tags: ["props", "immutability", "data-flow"]
  },

  {
    id: "react-fundamentals-q-043",
    quizId: "quiz_react_fundamentals",
    order: 43,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which code correctly handles a click event on a React button?",
    options: [
      {
        id: "A",
        text: "<button onClick={handleClick}>Save</button>"
      },
      {
        id: "B",
        text: "<button click={handleClick}>Save</button>"
      },
      {
        id: "C",
        text: "<button on-click={handleClick}>Save</button>"
      },
      {
        id: "D",
        text: "<button eventClick={handleClick}>Save</button>"
      }
    ],
    correctOptionId: "A",
    explanation: "React uses event props such as onClick for event handling. Passing the function reference allows React to call it when the button is clicked.",
    tags: ["events", "onClick", "jsx"]
  },

  {
    id: "react-fundamentals-q-044",
    quizId: "quiz_react_fundamentals",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is this usually incorrect for a React event handler?\n\n<button onClick={handleClick()}>Save</button>",
    options: [
      {
        id: "A",
        text: "handleClick is called while rendering instead of being provided as the click handler."
      },
      {
        id: "B",
        text: "React does not support button events."
      },
      {
        id: "C",
        text: "Functions cannot be used with onClick."
      },
      {
        id: "D",
        text: "JSX does not support parentheses."
      }
    ],
    correctOptionId: "A",
    explanation: "The parentheses call handleClick immediately while JSX is being evaluated. To call it in response to the click, pass the function itself or wrap the call in another function.",
    tags: ["events", "onClick", "common-mistakes"]
  },

  {
    id: "react-fundamentals-q-045",
    quizId: "quiz_react_fundamentals",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is appropriate when a child component needs to request that its parent update some state?",
    options: [
      {
        id: "A",
        text: "The parent can pass a callback function to the child through props."
      },
      {
        id: "B",
        text: "The child should directly modify the parent's local variable."
      },
      {
        id: "C",
        text: "The child should modify the parent's props object."
      },
      {
        id: "D",
        text: "The child must access the parent's function scope directly."
      }
    ],
    correctOptionId: "A",
    explanation: "A parent can provide a callback through props. The child can call that callback to communicate an event or value back to the parent.",
    tags: ["props", "callbacks", "parent-child"]
  },

  {
    id: "react-fundamentals-q-046",
    quizId: "quiz_react_fundamentals",
    order: 46,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this component display after clicking the button once?\n\nfunction Counter() {\n  const [count, setCount] = useState(3);\n\n  return (\n    <button onClick={() => setCount(count * 2)}>\n      {count}\n    </button>\n  );\n}",
    options: [
      {
        id: "A",
        text: "3"
      },
      {
        id: "B",
        text: "5"
      },
      {
        id: "C",
        text: "6"
      },
      {
        id: "D",
        text: "9"
      }
    ],
    correctOptionId: "C",
    explanation: "The initial count is 3. The click handler requests count * 2, producing 6, which is then displayed after the state update.",
    tags: ["useState", "state-updates", "code-reading"]
  },

  {
    id: "react-fundamentals-q-047",
    quizId: "quiz_react_fundamentals",
    order: 47,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of conditional rendering in a component such as a loading indicator?",
    options: [
      {
        id: "A",
        text: "To show different UI depending on whether the required condition is true or false."
      },
      {
        id: "B",
        text: "To prevent React from using JavaScript."
      },
      {
        id: "C",
        text: "To permanently remove state from the component."
      },
      {
        id: "D",
        text: "To force every component to render simultaneously."
      }
    ],
    correctOptionId: "A",
    explanation: "Conditional rendering allows UI such as loading indicators, error messages, or content to be shown according to the current application state.",
    tags: ["conditional-rendering", "state", "ui"]
  },

  {
    id: "react-fundamentals-q-048",
    quizId: "quiz_react_fundamentals",
    order: 48,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about state and props is correct?",
    options: [
      {
        id: "A",
        text: "A component can receive props while also maintaining its own state."
      },
      {
        id: "B",
        text: "A component must choose either props or state."
      },
      {
        id: "C",
        text: "Props automatically become state after the first render."
      },
      {
        id: "D",
        text: "State can only be used by parent components."
      }
    ],
    correctOptionId: "A",
    explanation: "Props and state serve different purposes and can be used together. A component can receive external inputs through props while managing its own changing data through state.",
    tags: ["props", "state", "components"]
  },

  {
    id: "react-fundamentals-q-049",
    quizId: "quiz_react_fundamentals",
    order: 49,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main reason React encourages breaking an interface into components?",
    options: [
      {
        id: "A",
        text: "Components separate UI responsibilities into reusable and manageable pieces."
      },
      {
        id: "B",
        text: "Components eliminate the need for JavaScript."
      },
      {
        id: "C",
        text: "Components guarantee that an application has no bugs."
      },
      {
        id: "D",
        text: "Components prevent users from interacting with the interface."
      }
    ],
    correctOptionId: "A",
    explanation: "Componentization helps organize an interface into focused pieces that can be reused, tested, composed, and maintained independently.",
    tags: ["components", "architecture", "reusability"]
  },

  {
    id: "react-fundamentals-q-050",
    quizId: "quiz_react_fundamentals",
    order: 50,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A parent renders <User name=\"Avi\" />. The User component is defined as function User(props) { return <h2>{props.name}</h2>; }. What is rendered?",
    options: [
      {
        id: "A",
        text: "A heading containing Avi."
      },
      {
        id: "B",
        text: "A heading containing name."
      },
      {
        id: "C",
        text: "A heading containing props."
      },
      {
        id: "D",
        text: "Nothing because props cannot be accessed through an object."
      }
    ],
    correctOptionId: "A",
    explanation: "The name attribute becomes the name property of the props object. Accessing props.name therefore produces Avi.",
    tags: ["props", "components", "code-reading"]
  }
];

export default reactFundamentalsQuestions;