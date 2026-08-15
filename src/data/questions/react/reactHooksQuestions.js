const reactHooksQuestions = [
  {
    id: "react-hooks-q-001",
    quizId: "quiz_react_hooks",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of the useState Hook?",
    options: [
      { id: "A", text: "To add state to a function component." },
      { id: "B", text: "To create a database connection." },
      { id: "C", text: "To define application routes." },
      { id: "D", text: "To directly manipulate CSS." }
    ],
    correctOptionId: "A",
    explanation: "useState lets a function component retain a value between renders and provides a setter for requesting updates to that value.",
    tags: ["useState", "state", "hooks"]
  },

  {
    id: "react-hooks-q-002",
    quizId: "quiz_react_hooks",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does useState(0) return?",
    options: [
      { id: "A", text: "Only the number 0." },
      { id: "B", text: "A state value and a state setter function." },
      { id: "C", text: "An object containing value and update methods." },
      { id: "D", text: "A Promise containing 0." }
    ],
    correctOptionId: "B",
    explanation: "useState returns a two-item array: the current state value and a setter function.",
    tags: ["useState", "state", "hooks"]
  },

  {
    id: "react-hooks-q-003",
    quizId: "quiz_react_hooks",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the initial value of count here?\n\nconst [count, setCount] = useState(10);",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "10" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "B",
    explanation: "The argument passed to useState is used as the initial state value, so count starts at 10.",
    tags: ["useState", "initial-state"]
  },

  {
    id: "react-hooks-q-004",
    quizId: "quiz_react_hooks",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement correctly updates a state value created with useState?",
    options: [
      { id: "A", text: "Assign directly to the state variable." },
      { id: "B", text: "Use the setter returned by useState." },
      { id: "C", text: "Modify the component function parameter." },
      { id: "D", text: "Change the corresponding DOM element." }
    ],
    correctOptionId: "B",
    explanation: "The setter function returned by useState should be used to request a state update.",
    tags: ["useState", "state-updates"]
  },

  {
    id: "react-hooks-q-005",
    quizId: "quiz_react_hooks",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is directly modifying a state variable incorrect?\n\ncount = count + 1;",
    options: [
      { id: "A", text: "It bypasses React's state update mechanism." },
      { id: "B", text: "JavaScript does not allow arithmetic on state." },
      { id: "C", text: "React state can only contain strings." },
      { id: "D", text: "The browser automatically resets the value." }
    ],
    correctOptionId: "A",
    explanation: "Direct assignment does not tell React that state changed. The setter should be used to request an update and corresponding render.",
    tags: ["useState", "state-updates", "common-mistakes"]
  },

  {
    id: "react-hooks-q-006",
    quizId: "quiz_react_hooks",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When should the functional updater form of a state setter be preferred?",
    options: [
      { id: "A", text: "When the next state depends on the previous state." },
      { id: "B", text: "Whenever the state is a string." },
      { id: "C", text: "Only when using useEffect." },
      { id: "D", text: "Only when state contains an object." }
    ],
    correctOptionId: "A",
    explanation: "A functional updater receives the previous state value, making it the reliable form when calculating the next state from that previous value.",
    tags: ["useState", "functional-updater", "state"]
  },

  {
    id: "react-hooks-q-007",
    quizId: "quiz_react_hooks",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the result after one click?\n\nconst [count, setCount] = useState(0);\n\nfunction handleClick() {\n  setCount(c => c + 1);\n}",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "B",
    explanation: "The updater receives the current state value, 0, and returns 1.",
    tags: ["useState", "functional-updater", "code-reading"]
  },

  {
    id: "react-hooks-q-008",
    quizId: "quiz_react_hooks",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the result of these two updater calls when count starts at 0?\n\nsetCount(c => c + 1);\nsetCount(c => c + 1);",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "It throws an error." }
    ],
    correctOptionId: "C",
    explanation: "Each functional updater receives the result of the preceding update, so the two increments produce 2.",
    tags: ["useState", "functional-updater", "batching"]
  },

  {
    id: "react-hooks-q-009",
    quizId: "quiz_react_hooks",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the lazy initializer form of useState allow?",
    options: [
      { id: "A", text: "It allows an expensive initial-state calculation to be provided as a function." },
      { id: "B", text: "It makes every state update asynchronous." },
      { id: "C", text: "It delays all component rendering indefinitely." },
      { id: "D", text: "It stores state only in localStorage." }
    ],
    correctOptionId: "A",
    explanation: "Passing a function to useState lets React use that function to calculate the initial state rather than requiring the calculation's result to be computed directly during the call.",
    tags: ["useState", "lazy-initialization", "performance"]
  },

  {
    id: "react-hooks-q-010",
    quizId: "quiz_react_hooks",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is a valid useState declaration for an object?",
    options: [
      { id: "A", text: "const [user, setUser] = useState({ name: \"Avi\", age: 23 });" },
      { id: "B", text: "const [user] = useState.object({ name: \"Avi\" });" },
      { id: "C", text: "const user = useState({ name: \"Avi\" }).object();" },
      { id: "D", text: "const [user, setUser] = state({ name: \"Avi\" });" }
    ],
    correctOptionId: "A",
    explanation: "useState can hold objects just like other JavaScript values.",
    tags: ["useState", "objects", "state"]
  },

  {
    id: "react-hooks-q-011",
    quizId: "quiz_react_hooks",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the recommended way to update one property of an object stored in state?",
    options: [
      { id: "A", text: "Create a new object containing the existing properties and the changed property." },
      { id: "B", text: "Mutate the existing object directly." },
      { id: "C", text: "Delete the state variable and recreate the component." },
      { id: "D", text: "Modify the object's prototype." }
    ],
    correctOptionId: "A",
    explanation: "State objects should generally be treated immutably. The spread operator is commonly used to create a new object while preserving existing properties.",
    tags: ["useState", "objects", "immutability"]
  },

  {
    id: "react-hooks-q-012",
    quizId: "quiz_react_hooks",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of useEffect?",
    options: [
      { id: "A", text: "To synchronize a component with external systems and perform side effects." },
      { id: "B", text: "To replace JSX." },
      { id: "C", text: "To create CSS classes." },
      { id: "D", text: "To define component props." }
    ],
    correctOptionId: "A",
    explanation: "useEffect is designed for synchronizing React components with external systems and performing effects such as subscriptions, timers, and external data synchronization.",
    tags: ["useEffect", "side-effects", "hooks"]
  },

  {
    id: "react-hooks-q-013",
    quizId: "quiz_react_hooks",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When does an effect with no dependency array generally run?",
    options: [
      { id: "A", text: "After every completed render." },
      { id: "B", text: "Only before the first render." },
      { id: "C", text: "Only when the component unmounts." },
      { id: "D", text: "It never runs." }
    ],
    correctOptionId: "A",
    explanation: "When no dependency array is provided, the effect is run after each completed render.",
    tags: ["useEffect", "dependencies", "effects"]
  },

  {
    id: "react-hooks-q-014",
    quizId: "quiz_react_hooks",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an empty dependency array mean in this effect?\n\nuseEffect(() => {\n  console.log(\"effect\");\n}, []);",
    options: [
      { id: "A", text: "The effect has no listed reactive dependencies." },
      { id: "B", text: "The effect runs after every render." },
      { id: "C", text: "The effect never executes." },
      { id: "D", text: "The effect automatically depends on every prop." }
    ],
    correctOptionId: "A",
    explanation: "An empty dependency array means there are no dependencies listed for the effect. In the usual lifecycle, it runs after the initial commit and its cleanup runs when appropriate.",
    tags: ["useEffect", "dependencies"]
  },

  {
    id: "react-hooks-q-015",
    quizId: "quiz_react_hooks",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the dependency array passed to useEffect?",
    options: [
      { id: "A", text: "It tells React which reactive values the effect depends on." },
      { id: "B", text: "It determines the component's HTML structure." },
      { id: "C", text: "It stores the effect's return value permanently." },
      { id: "D", text: "It prevents the effect from accessing state." }
    ],
    correctOptionId: "A",
    explanation: "The dependency list describes values used by the effect whose changes should cause React to re-synchronize the effect.",
    tags: ["useEffect", "dependencies", "synchronization"]
  },

  {
    id: "react-hooks-q-016",
    quizId: "quiz_react_hooks",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\nuseEffect(() => {\n  document.title = name;\n}, [name]);\n\nWhen does the effect re-run because of its dependency?",
    options: [
      { id: "A", text: "When name changes between renders." },
      { id: "B", text: "Only when the component receives a new DOM node." },
      { id: "C", text: "Every millisecond." },
      { id: "D", text: "Only when name is undefined." }
    ],
    correctOptionId: "A",
    explanation: "name is listed as a dependency, so a changed name value causes React to synchronize the effect again.",
    tags: ["useEffect", "dependencies", "side-effects"]
  },

  {
    id: "react-hooks-q-017",
    quizId: "quiz_react_hooks",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What should an effect cleanup function commonly be used for?",
    options: [
      { id: "A", text: "Releasing resources created by the effect, such as subscriptions or timers." },
      { id: "B", text: "Updating state on every render." },
      { id: "C", text: "Rendering JSX returned by the component." },
      { id: "D", text: "Defining the component's props." }
    ],
    correctOptionId: "A",
    explanation: "Cleanup lets an effect undo or disconnect external resources that it established.",
    tags: ["useEffect", "cleanup", "subscriptions"]
  },

  {
    id: "react-hooks-q-018",
    quizId: "quiz_react_hooks",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which effect correctly cleans up a window event listener?",
    options: [
      { id: "A", text: "return () => window.removeEventListener(\"resize\", handleResize);" },
      { id: "B", text: "return window.removeEventListener(\"resize\", handleResize);" },
      { id: "C", text: "cleanup(window.addEventListener(\"resize\", handleResize));" },
      { id: "D", text: "window.cleanup(\"resize\", handleResize);" }
    ],
    correctOptionId: "A",
    explanation: "The cleanup function should return a function that removes the listener established by the effect.",
    tags: ["useEffect", "cleanup", "events"]
  },

  {
    id: "react-hooks-q-019",
    quizId: "quiz_react_hooks",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can putting a newly created object directly in an effect's dependency array cause frequent effect executions?",
    options: [
      { id: "A", text: "A new object reference can be created on every render." },
      { id: "B", text: "React compares object contents recursively by default." },
      { id: "C", text: "Objects are never valid dependencies." },
      { id: "D", text: "Effects cannot depend on objects." }
    ],
    correctOptionId: "A",
    explanation: "Dependency comparisons use reference identity for objects. A newly created object is a different reference even if its properties contain the same values.",
    tags: ["useEffect", "dependencies", "references"]
  },

  {
    id: "react-hooks-q-020",
    quizId: "quiz_react_hooks",
    order: 20,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common problem with this effect?\n\nuseEffect(() => {\n  setCount(count + 1);\n}, [count]);",
    options: [
      { id: "A", text: "It can repeatedly update count because changing count causes the effect to run again." },
      { id: "B", text: "It can never update count." },
      { id: "C", text: "It automatically resets count to zero." },
      { id: "D", text: "The dependency array is ignored." }
    ],
    correctOptionId: "A",
    explanation: "The effect changes count, and count is itself a dependency. The resulting state change can cause another effect execution, potentially creating an update loop.",
    tags: ["useEffect", "dependencies", "infinite-loop"]
  },

  {
    id: "react-hooks-q-021",
    quizId: "quiz_react_hooks",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is useRef primarily useful for?",
    options: [
      { id: "A", text: "Holding a mutable value that persists across renders without causing a render when changed." },
      { id: "B", text: "Replacing every useState variable." },
      { id: "C", text: "Fetching data from APIs automatically." },
      { id: "D", text: "Creating application routes." }
    ],
    correctOptionId: "A",
    explanation: "useRef returns an object with a current property that persists across renders. Changing current does not itself trigger a re-render.",
    tags: ["useRef", "refs", "hooks"]
  },

  {
    id: "react-hooks-q-022",
    quizId: "quiz_react_hooks",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property is commonly used to access the value stored in a ref?",
    options: [
      { id: "A", text: "value" },
      { id: "B", text: "current" },
      { id: "C", text: "data" },
      { id: "D", text: "refValue" }
    ],
    correctOptionId: "B",
    explanation: "A ref object returned by useRef exposes its mutable value through the current property.",
    tags: ["useRef", "current", "refs"]
  },

  {
    id: "react-hooks-q-023",
    quizId: "quiz_react_hooks",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which example correctly focuses an input using useRef?",
    options: [
      { id: "A", text: "inputRef.current.focus()" },
      { id: "B", text: "inputRef.focus.current()" },
      { id: "C", text: "inputRef.value.focus()" },
      { id: "D", text: "focus(inputRef.currentValue)" }
    ],
    correctOptionId: "A",
    explanation: "When a ref is attached to a DOM input, inputRef.current refers to that DOM node, allowing methods such as focus() to be called.",
    tags: ["useRef", "dom", "focus"]
  },

  {
    id: "react-hooks-q-024",
    quizId: "quiz_react_hooks",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why would you choose useRef instead of useState for a value that should not trigger a re-render when changed?",
    options: [
      { id: "A", text: "Updating ref.current does not itself schedule a React render." },
      { id: "B", text: "useRef values are automatically persisted to a server." },
      { id: "C", text: "useRef values can only contain DOM nodes." },
      { id: "D", text: "useState cannot store primitive values." }
    ],
    correctOptionId: "A",
    explanation: "Refs are useful for mutable values that need to persist across renders but do not belong in the rendered UI.",
    tags: ["useRef", "useState", "rendering"]
  },

  {
    id: "react-hooks-q-025",
    quizId: "quiz_react_hooks",
    order: 25,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential mistake when using a ref for data that should appear immediately in the UI?",
    options: [
      { id: "A", text: "Changing ref.current does not trigger a re-render." },
      { id: "B", text: "Refs cannot hold numbers." },
      { id: "C", text: "Refs are automatically reset after every render." },
      { id: "D", text: "Refs can only be used in class components." }
    ],
    correctOptionId: "A",
    explanation: "If changing a value should cause the displayed UI to update, state is generally more appropriate because ref mutations do not themselves trigger rendering.",
    tags: ["useRef", "state", "common-mistakes"]
  },

  {
    id: "react-hooks-q-026",
    quizId: "quiz_react_hooks",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is React Context primarily designed to help with?",
    options: [
      { id: "A", text: "Making values available to descendants without passing them through every intermediate component." },
      { id: "B", text: "Replacing all state management." },
      { id: "C", text: "Creating CSS variables." },
      { id: "D", text: "Making every component globally accessible." }
    ],
    correctOptionId: "A",
    explanation: "Context provides a mechanism for sharing values with components deeper in a tree without manually threading props through every intermediate component.",
    tags: ["useContext", "context", "state-management"]
  },

  {
    id: "react-hooks-q-027",
    quizId: "quiz_react_hooks",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which Hook is used to read a context value inside a function component?",
    options: [
      { id: "A", text: "useContext" },
      { id: "B", text: "useProvider" },
      { id: "C", text: "useContextValue" },
      { id: "D", text: "useGlobal" }
    ],
    correctOptionId: "A",
    explanation: "useContext reads and subscribes the component to the value provided by the nearest matching Context provider.",
    tags: ["useContext", "context", "hooks"]
  },

  {
    id: "react-hooks-q-028",
    quizId: "quiz_react_hooks",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when a component calls useContext(MyContext) and no matching provider is above it?",
    options: [
      { id: "A", text: "It receives the context's default value." },
      { id: "B", text: "It automatically creates a provider." },
      { id: "C", text: "It always returns undefined regardless of the default." },
      { id: "D", text: "It causes the application to reload." }
    ],
    correctOptionId: "A",
    explanation: "When there is no matching provider in the component's ancestor tree, useContext returns the default value supplied when the context was created.",
    tags: ["useContext", "context", "default-value"]
  },

  {
    id: "react-hooks-q-029",
    quizId: "quiz_react_hooks",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which pattern correctly provides a context value?",
    options: [
      { id: "A", text: "<ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>" },
      { id: "B", text: "<ThemeContext value={theme}>{children}</ThemeContext>" },
      { id: "C", text: "<ThemeContext.Context theme={theme}>{children}</ThemeContext.Context>" },
      { id: "D", text: "<Provider.Theme value={theme}>{children}</Provider.Theme>" }
    ],
    correctOptionId: "A",
    explanation: "A Context provider supplies its value through the provider's value prop and makes that value available to descendant consumers.",
    tags: ["useContext", "context", "provider"]
  },

  {
    id: "react-hooks-q-030",
    quizId: "quiz_react_hooks",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can putting frequently changing values into one broad Context cause performance concerns?",
    options: [
      { id: "A", text: "Consumers of that context may update when the provided value changes." },
      { id: "B", text: "Context values cannot contain changing data." },
      { id: "C", text: "Context automatically forces a full browser reload." },
      { id: "D", text: "Context disables React's rendering system." }
    ],
    correctOptionId: "A",
    explanation: "Components consuming a context respond to changes in its value. A very broad context with frequently changing data can therefore affect many consumers.",
    tags: ["useContext", "performance", "context"]
  },

  {
    id: "react-hooks-q-031",
    quizId: "quiz_react_hooks",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a custom Hook?",
    options: [
      { id: "A", text: "A reusable JavaScript function that can use Hooks to share stateful logic." },
      { id: "B", text: "A special React component that cannot return JSX." },
      { id: "C", text: "A browser API for creating DOM elements." },
      { id: "D", text: "A class that extends React.Component." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks are functions that use React Hooks and encapsulate reusable stateful behavior or synchronization logic.",
    tags: ["custom-hooks", "hooks", "reusability"]
  },

  {
    id: "react-hooks-q-032",
    quizId: "quiz_react_hooks",
    order: 32,
    type: "mcq",
    difficulty: "Beginner",
    question: "What naming convention should a custom Hook normally follow?",
    options: [
      { id: "A", text: "Its name should begin with use." },
      { id: "B", text: "Its name must end with Hook." },
      { id: "C", text: "Its name must contain React." },
      { id: "D", text: "Its name must be lowercase." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hook names conventionally begin with use, such as useOnlineStatus or useLocalStorage.",
    tags: ["custom-hooks", "naming", "rules-of-hooks"]
  },

  {
    id: "react-hooks-q-033",
    quizId: "quiz_react_hooks",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main benefit of extracting repeated Hook logic into a custom Hook?",
    options: [
      { id: "A", text: "It allows the stateful logic to be reused across components." },
      { id: "B", text: "It makes all components share the same state automatically." },
      { id: "C", text: "It converts local state into Context." },
      { id: "D", text: "It prevents the custom Hook from re-rendering." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks share logic, not a single state instance. Each component calling the custom Hook normally gets its own Hook state.",
    tags: ["custom-hooks", "reusability", "state"]
  },

  {
    id: "react-hooks-q-034",
    quizId: "quiz_react_hooks",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "If two components both call the same custom Hook containing useState, what normally happens?",
    options: [
      { id: "A", text: "Each component receives its own independent state for that Hook call." },
      { id: "B", text: "Both components automatically share one state value." },
      { id: "C", text: "The second component cannot use the Hook." },
      { id: "D", text: "The state is automatically moved into Context." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks share logic, not state instances. Each component invocation has its own Hook state associated with that component.",
    tags: ["custom-hooks", "state", "reusability"]
  },

  {
    id: "react-hooks-q-035",
    quizId: "quiz_react_hooks",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which of the following follows the Rules of Hooks?",
    options: [
      { id: "A", text: "Call useState at the top level of a function component." },
      { id: "B", text: "Call useState inside an if statement." },
      { id: "C", text: "Call useEffect inside a loop." },
      { id: "D", text: "Call useContext only after a button click." }
    ],
    correctOptionId: "A",
    explanation: "Hooks should be called at the top level of function components or custom Hooks, not conditionally or inside loops.",
    tags: ["rules-of-hooks", "useState", "hooks"]
  },

  {
    id: "react-hooks-q-036",
    quizId: "quiz_react_hooks",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should Hooks not normally be called conditionally?",
    options: [
      { id: "A", text: "React relies on a consistent order of Hook calls between renders." },
      { id: "B", text: "Conditional statements cannot contain JavaScript." },
      { id: "C", text: "Hooks only work in class components." },
      { id: "D", text: "Conditional Hooks are always converted into props." }
    ],
    correctOptionId: "A",
    explanation: "React associates Hook state with the order of Hook calls. Changing that order between renders can cause Hook state to become associated with the wrong call.",
    tags: ["rules-of-hooks", "hooks", "rendering"]
  },

  {
    id: "react-hooks-q-037",
    quizId: "quiz_react_hooks",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which example violates the Rules of Hooks?",
    options: [
      { id: "A", text: "if (loggedIn) { useEffect(() => {}, []); }" },
      { id: "B", text: "useEffect(() => {}, []);" },
      { id: "C", text: "function useUser() { return useState(null); }" },
      { id: "D", text: "function App() { const [open, setOpen] = useState(false); return null; }" }
    ],
    correctOptionId: "A",
    explanation: "The Hook is called conditionally. Instead, call the Hook unconditionally and place the condition inside the effect or component logic as appropriate.",
    tags: ["rules-of-hooks", "useEffect", "common-mistakes"]
  },

  {
    id: "react-hooks-q-038",
    quizId: "quiz_react_hooks",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the best general approach when an effect should only perform an action if a condition is true?",
    options: [
      { id: "A", text: "Call the Hook unconditionally and put the condition inside the effect logic." },
      { id: "B", text: "Call the Hook only when the condition is true." },
      { id: "C", text: "Move the Hook into a loop." },
      { id: "D", text: "Replace the Hook with a DOM event." }
    ],
    correctOptionId: "A",
    explanation: "The Hook call itself should remain unconditional. Conditional behavior can be implemented inside the effect callback.",
    tags: ["rules-of-hooks", "useEffect", "conditional-logic"]
  },

  {
    id: "react-hooks-q-039",
    quizId: "quiz_react_hooks",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component needs to remember the ID of a timer between renders, but changing the ID should not update the UI. Which Hook is generally appropriate?",
    options: [
      { id: "A", text: "useRef" },
      { id: "B", text: "useContext" },
      { id: "C", text: "useState" },
      { id: "D", text: "useEffect only" }
    ],
    correctOptionId: "A",
    explanation: "A ref can persist the timer ID across renders without causing another render when the ID changes.",
    tags: ["useRef", "timers", "hooks"]
  },

  {
    id: "react-hooks-q-040",
    quizId: "quiz_react_hooks",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential issue with storing a value in a ref when that value is also displayed in JSX?",
    options: [
      { id: "A", text: "Changing the ref does not automatically cause the displayed JSX to update." },
      { id: "B", text: "Refs cannot be read during rendering." },
      { id: "C", text: "JSX cannot display numbers." },
      { id: "D", text: "Refs are reset after every event." }
    ],
    correctOptionId: "A",
    explanation: "Ref mutations do not schedule renders. State is generally more appropriate when a value participates directly in the rendered UI.",
    tags: ["useRef", "rendering", "state"]
  },

  {
    id: "react-hooks-q-041",
    quizId: "quiz_react_hooks",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\nfunction Timer() {\n  const id = useRef(null);\n\n  useEffect(() => {\n    id.current = setInterval(() => {}, 1000);\n    return () => clearInterval(id.current);\n  }, []);\n}\n\nWhy is the ref useful here?",
    options: [
      { id: "A", text: "It provides a persistent place to store the interval ID without making that ID rendered state." },
      { id: "B", text: "It causes the interval to render every second." },
      { id: "C", text: "It automatically clears all browser timers." },
      { id: "D", text: "It makes setInterval synchronous." }
    ],
    correctOptionId: "A",
    explanation: "The interval ID is mutable information needed by the cleanup but does not need to appear in the UI, making a ref appropriate.",
    tags: ["useRef", "useEffect", "cleanup", "timers"]
  },

  {
    id: "react-hooks-q-042",
    quizId: "quiz_react_hooks",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should an effect that creates a subscription usually return a cleanup function?",
    options: [
      { id: "A", text: "To unsubscribe when the effect is no longer active." },
      { id: "B", text: "To force the component to render twice." },
      { id: "C", text: "To preserve the subscription forever." },
      { id: "D", text: "To convert the subscription into state." }
    ],
    correctOptionId: "A",
    explanation: "Cleanup prevents stale subscriptions and resource leaks by disconnecting the external resource when the effect is cleaned up.",
    tags: ["useEffect", "cleanup", "subscriptions"]
  },

  {
    id: "react-hooks-q-043",
    quizId: "quiz_react_hooks",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Suppose an effect subscribes using userId and has [userId] as its dependency. What should happen when userId changes?",
    options: [
      { id: "A", text: "The previous effect is cleaned up and the effect is synchronized using the new userId." },
      { id: "B", text: "The old subscription remains active forever." },
      { id: "C", text: "The effect never runs again." },
      { id: "D", text: "React changes userId automatically." }
    ],
    correctOptionId: "A",
    explanation: "When a dependency changes, React cleans up the previous effect and then runs the effect with the updated dependency values.",
    tags: ["useEffect", "dependencies", "cleanup"]
  },

  {
    id: "react-hooks-q-044",
    quizId: "quiz_react_hooks",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which situation is most appropriate for useEffect?",
    options: [
      { id: "A", text: "Connecting to an external subscription when a component needs to synchronize with it." },
      { id: "B", text: "Calculating totalPrice directly from price and quantity during rendering." },
      { id: "C", text: "Rendering a list using map." },
      { id: "D", text: "Formatting a string before displaying it." }
    ],
    correctOptionId: "A",
    explanation: "Effects are intended for synchronization with external systems. Pure calculations based on current props and state generally do not require an effect.",
    tags: ["useEffect", "side-effects", "derived-data"]
  },

  {
    id: "react-hooks-q-045",
    quizId: "quiz_react_hooks",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is it often unnecessary to use useEffect to calculate a value directly derived from state?",
    options: [
      { id: "A", text: "The value can usually be calculated during rendering without an extra synchronization step." },
      { id: "B", text: "useEffect cannot access state." },
      { id: "C", text: "State values cannot be calculated." },
      { id: "D", text: "React automatically calculates every derived value." }
    ],
    correctOptionId: "A",
    explanation: "If a value is purely derived from existing props or state, calculating it during rendering avoids unnecessary state and effect synchronization.",
    tags: ["useEffect", "derived-data", "state-design"]
  },

  {
    id: "react-hooks-q-046",
    quizId: "quiz_react_hooks",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A custom Hook contains useEffect and useState. What does the custom Hook primarily allow you to reuse?",
    options: [
      { id: "A", text: "The logic involving state and effects." },
      { id: "B", text: "The exact same state instance across every caller." },
      { id: "C", text: "A global DOM node." },
      { id: "D", text: "The component's JSX tree." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks extract reusable behavior and stateful logic. Each component using the Hook still has its own Hook state unless shared state is explicitly introduced through another mechanism.",
    tags: ["custom-hooks", "useState", "useEffect"]
  },

  {
    id: "react-hooks-q-047",
    quizId: "quiz_react_hooks",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design is most appropriate for a reusable useOnlineStatus custom Hook?",
    options: [
      { id: "A", text: "Encapsulate the online-status state and browser event subscription inside the custom Hook." },
      { id: "B", text: "Put all application components inside the Hook." },
      { id: "C", text: "Make the Hook directly modify every component's props." },
      { id: "D", text: "Store the browser status only in a CSS class." }
    ],
    correctOptionId: "A",
    explanation: "A custom Hook is a good place to encapsulate reusable stateful behavior such as tracking browser online/offline events.",
    tags: ["custom-hooks", "useEffect", "useState", "reusability"]
  },

  {
    id: "react-hooks-q-048",
    quizId: "quiz_react_hooks",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the difference between sharing logic with a custom Hook and sharing state through Context?",
    options: [
      { id: "A", text: "A custom Hook reuses logic, while Context can make a shared value available to many descendants." },
      { id: "B", text: "They are exactly the same mechanism." },
      { id: "C", text: "Custom Hooks always create global state." },
      { id: "D", text: "Context can only be used for CSS." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks encapsulate reusable behavior, while Context provides a way to supply values through a component tree. They can also be used together.",
    tags: ["custom-hooks", "useContext", "state-management"]
  },

  {
    id: "react-hooks-q-049",
    quizId: "quiz_react_hooks",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A custom Hook returns [value, setValue]. What is the main advantage of this API design?",
    options: [
      { id: "A", text: "It can expose a simple interface while hiding the Hook's internal implementation details." },
      { id: "B", text: "It forces all consumers to share the same state." },
      { id: "C", text: "It prevents the Hook from using useState." },
      { id: "D", text: "It automatically turns the Hook into Context." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks can encapsulate implementation details and expose only the values and functions a consuming component needs.",
    tags: ["custom-hooks", "abstraction", "reusability"]
  },

  {
    id: "react-hooks-q-050",
    quizId: "quiz_react_hooks",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component needs to remember the previous value of a prop between renders without causing another render when that remembered value changes. Which approach is most appropriate?",
    options: [
      { id: "A", text: "Store the previous value in a ref and update the ref in an appropriate effect." },
      { id: "B", text: "Always mutate the prop directly." },
      { id: "C", text: "Store the value in Context regardless of the component tree." },
      { id: "D", text: "Use a new state variable and update it during every render." }
    ],
    correctOptionId: "A",
    explanation: "A ref persists across renders without causing a render when its current value changes. A common previous-value pattern uses an effect to update the ref after rendering.",
    tags: ["useRef", "useEffect", "previous-value", "advanced"]
  }
];

export default reactHooksQuestions;