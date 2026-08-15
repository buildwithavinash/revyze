const reactPerformanceQuestions = [
  {
    id: "react-performance-q-001",
    quizId: "quiz_react_performance",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main goal of React performance optimization?",
    options: [
      { id: "A", text: "Reduce unnecessary work while keeping the application's behavior correct." },
      { id: "B", text: "Prevent React from rendering entirely." },
      { id: "C", text: "Replace all state with refs." },
      { id: "D", text: "Make every component use useMemo." }
    ],
    correctOptionId: "A",
    explanation: "Performance optimization is about reducing unnecessary computation, rendering, network work, or JavaScript delivered to the user without changing the application's intended behavior.",
    tags: ["performance", "optimization", "rendering"]
  },

  {
    id: "react-performance-q-002",
    quizId: "quiz_react_performance",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an unnecessary re-render?",
    options: [
      { id: "A", text: "A render that occurs even though the component's relevant inputs did not require its output to change." },
      { id: "B", text: "Any render caused by state." },
      { id: "C", text: "Any render that takes more than one millisecond." },
      { id: "D", text: "A render that happens after mounting." }
    ],
    correctOptionId: "A",
    explanation: "A re-render is not automatically bad. The performance concern is work that React performs without needing to produce a meaningfully different result or because a component could have safely skipped the work.",
    tags: ["re-render", "performance", "rendering"]
  },

  {
    id: "react-performance-q-003",
    quizId: "quiz_react_performance",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Does every React re-render mean the browser completely rebuilds the DOM?",
    options: [
      { id: "A", text: "No. React can render components and then determine that little or no DOM work is necessary." },
      { id: "B", text: "Yes. Every render deletes the entire DOM." },
      { id: "C", text: "Yes. React reloads the HTML document after every state update." },
      { id: "D", text: "Only when useMemo is used." }
    ],
    correctOptionId: "A",
    explanation: "Rendering and DOM mutation are different stages. React can re-run rendering logic without replacing the entire DOM. Performance work should therefore consider where the actual cost occurs.",
    tags: ["rendering", "dom", "re-render", "performance"]
  },

  {
    id: "react-performance-q-004",
    quizId: "quiz_react_performance",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does React.memo primarily do?",
    options: [
      { id: "A", text: "It allows a component to skip re-rendering when its props have not changed according to the memoization comparison." },
      { id: "B", text: "It caches every API response." },
      { id: "C", text: "It prevents the component from ever rendering again." },
      { id: "D", text: "It automatically memoizes every child component." }
    ],
    correctOptionId: "A",
    explanation: "React.memo memoizes a component so React can skip rendering it when its props are considered equal. It is an optimization, not a guarantee that the component will never render.",
    tags: ["React.memo", "memoization", "props", "re-render"]
  },

  {
    id: "react-performance-q-005",
    quizId: "quiz_react_performance",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about React.memo is correct?",
    options: [
      { id: "A", text: "It is most useful when a component receives the same props frequently and rendering that component is meaningfully expensive." },
      { id: "B", text: "It should automatically be added to every component." },
      { id: "C", text: "It prevents state updates inside the component." },
      { id: "D", text: "It converts a function component into a class component." }
    ],
    correctOptionId: "A",
    explanation: "Memoization has a cost and is most valuable when it prevents meaningful repeated work. Automatically memoizing every component can add complexity without producing a useful performance benefit.",
    tags: ["React.memo", "memoization", "performance"]
  },

  {
    id: "react-performance-q-006",
    quizId: "quiz_react_performance",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does useMemo return?",
    options: [
      { id: "A", text: "The memoized result of a calculation." },
      { id: "B", text: "A stable event handler function." },
      { id: "C", text: "A DOM node." },
      { id: "D", text: "A React component instance." }
    ],
    correctOptionId: "A",
    explanation: "useMemo caches the result of a calculation and can recalculate it when one of its dependencies changes.",
    tags: ["useMemo", "memoization", "hooks"]
  },

  {
    id: "react-performance-q-007",
    quizId: "quiz_react_performance",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does useCallback return?",
    options: [
      { id: "A", text: "A memoized function reference." },
      { id: "B", text: "The result of calling the function immediately." },
      { id: "C", text: "A memoized array only." },
      { id: "D", text: "A DOM element." }
    ],
    correctOptionId: "A",
    explanation: "useCallback caches a function definition between renders and returns a stable function reference until its dependencies change.",
    tags: ["useCallback", "memoization", "functions"]
  },

  {
    id: "react-performance-q-008",
    quizId: "quiz_react_performance",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the key difference between useMemo and useCallback?",
    options: [
      { id: "A", text: "useMemo memoizes a calculated value, while useCallback memoizes a function reference." },
      { id: "B", text: "useMemo only works with strings, while useCallback only works with numbers." },
      { id: "C", text: "useCallback prevents all component renders, while useMemo prevents all state updates." },
      { id: "D", text: "They are completely unrelated APIs." }
    ],
    correctOptionId: "A",
    explanation: "The APIs solve related memoization problems. useMemo caches the result of a calculation, while useCallback caches the function itself.",
    tags: ["useMemo", "useCallback", "memoization"]
  },

  {
    id: "react-performance-q-009",
    quizId: "quiz_react_performance",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which example is a reasonable candidate for useMemo?",
    options: [
      { id: "A", text: "Filtering and sorting a very large list when the calculation is expensive and its inputs change infrequently." },
      { id: "B", text: "Adding two numbers once." },
      { id: "C", text: "Rendering a simple heading." },
      { id: "D", text: "Changing a CSS class name." }
    ],
    correctOptionId: "A",
    explanation: "useMemo is useful when a calculation is expensive enough that avoiding repeated execution matters. Small calculations often cost less than the memoization machinery and complexity.",
    tags: ["useMemo", "memoization", "expensive-calculation"]
  },

  {
    id: "react-performance-q-010",
    quizId: "quiz_react_performance",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which is a common misconception about useMemo?",
    options: [
      { id: "A", text: "Assuming useMemo automatically makes every component faster." },
      { id: "B", text: "Using dependencies to control recalculation." },
      { id: "C", text: "Memoizing an expensive calculation." },
      { id: "D", text: "Returning a calculated value." }
    ],
    correctOptionId: "A",
    explanation: "useMemo itself has overhead and complexity. It is a performance optimization that should be used when avoiding recalculation provides a real benefit.",
    tags: ["useMemo", "misconceptions", "performance"]
  },

  {
    id: "react-performance-q-011",
    quizId: "quiz_react_performance",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens to a useMemo calculation when one of its dependencies changes?",
    options: [
      { id: "A", text: "React can recalculate the memoized value for the new dependency values." },
      { id: "B", text: "The value can never change again." },
      { id: "C", text: "The entire application reloads." },
      { id: "D", text: "React automatically converts the value into state." }
    ],
    correctOptionId: "A",
    explanation: "The memoized calculation is associated with its dependency list. When a dependency changes, React can recompute the value for the new inputs.",
    tags: ["useMemo", "dependencies", "memoization"]
  },

  {
    id: "react-performance-q-012",
    quizId: "quiz_react_performance",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Consider:\n\nconst result = useMemo(() => expensiveCalculation(a), [a]);\n\nWhen is expensiveCalculation expected to be recalculated?",
    options: [
      { id: "A", text: "When a changes, rather than on every render where the memoized value can be reused." },
      { id: "B", text: "Only when the component unmounts." },
      { id: "C", text: "Whenever any component in the application renders." },
      { id: "D", text: "Never." }
    ],
    correctOptionId: "A",
    explanation: "The dependency array tells React that the calculation's relevant reactive input is a. When a remains the same, React can reuse the memoized result.",
    tags: ["useMemo", "dependencies", "performance"]
  },

  {
    id: "react-performance-q-013",
    quizId: "quiz_react_performance",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can useCallback be useful when passing a function to a memoized child?",
    options: [
      { id: "A", text: "It can preserve the function reference so the child does not see a changed function prop on every parent render." },
      { id: "B", text: "It prevents the function from ever executing." },
      { id: "C", text: "It converts the function into state." },
      { id: "D", text: "It automatically caches every argument passed to the function." }
    ],
    correctOptionId: "A",
    explanation: "A new function created during every parent render has a new identity. When a memoized child receives that function as a prop, useCallback can preserve the reference when its dependencies remain unchanged.",
    tags: ["useCallback", "React.memo", "function-identity", "re-render"]
  },

  {
    id: "react-performance-q-014",
    quizId: "quiz_react_performance",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\nconst handleClick = () => {\n  setCount(c => c + 1);\n};\n\nWhy might React.memo still consider handleClick a changed prop on every parent render?",
    options: [
      { id: "A", text: "The function expression creates a new function object on each render." },
      { id: "B", text: "React.memo compares function bodies instead of references." },
      { id: "C", text: "setCount makes functions immutable." },
      { id: "D", text: "Functions cannot be passed as props." }
    ],
    correctOptionId: "A",
    explanation: "Function identity is based on the function object. A new function expression creates a new object on each render, so a memoized child receiving it can see the prop as changed.",
    tags: ["function-identity", "React.memo", "re-render"]
  },

  {
    id: "react-performance-q-015",
    quizId: "quiz_react_performance",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which implementation can stabilize the handleClick function from the previous example?",
    options: [
      {
        id: "A",
        text: "const handleClick = useCallback(() => { setCount(c => c + 1); }, []);"
      },
      {
        id: "B",
        text: "const handleClick = useMemo(() => setCount(c => c + 1), []);"
      },
      {
        id: "C",
        text: "const handleClick = useEffect(() => setCount(c => c + 1), []);"
      },
      {
        id: "D",
        text: "const handleClick = useState(() => setCount(c => c + 1));"
      }
    ],
    correctOptionId: "A",
    explanation: "useCallback returns a function reference and can keep it stable because the callback uses the functional state updater and therefore does not need count as a dependency.",
    tags: ["useCallback", "function-identity", "state-updater"]
  },

  {
    id: "react-performance-q-016",
    quizId: "quiz_react_performance",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is an empty dependency array appropriate in this useCallback?\n\nconst increment = useCallback(() => {\n  setCount(c => c + 1);\n}, []);",
    options: [
      { id: "A", text: "The callback uses the functional updater and therefore does not need to capture the current count value." },
      { id: "B", text: "Empty dependency arrays always make callbacks correct." },
      { id: "C", text: "State setters cannot be called inside callbacks." },
      { id: "D", text: "count is automatically converted into a ref." }
    ],
    correctOptionId: "A",
    explanation: "The callback does not read count from its closure. Instead, it asks React for the latest state through the functional updater, allowing the callback to remain independent of count.",
    tags: ["useCallback", "state-updater", "closures", "dependencies"]
  },

  {
    id: "react-performance-q-017",
    quizId: "quiz_react_performance",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main performance benefit of code splitting?",
    options: [
      { id: "A", text: "It can reduce the amount of JavaScript that must be loaded and parsed before the user needs certain features." },
      { id: "B", text: "It makes JavaScript execute infinitely faster." },
      { id: "C", text: "It eliminates the need for React components." },
      { id: "D", text: "It prevents network requests entirely." }
    ],
    correctOptionId: "A",
    explanation: "Code splitting divides application code into chunks that can be loaded when needed. This can reduce the initial JavaScript payload and improve initial loading performance.",
    tags: ["code-splitting", "performance", "bundling"]
  },

  {
    id: "react-performance-q-018",
    quizId: "quiz_react_performance",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which React API is commonly used to lazily load a component?",
    options: [
      { id: "A", text: "lazy" },
      { id: "B", text: "loadComponentNow" },
      { id: "C", text: "deferComponentOnly" },
      { id: "D", text: "asyncComponentState" }
    ],
    correctOptionId: "A",
    explanation: "React.lazy can defer loading a component until React attempts to render it. It works with dynamic imports and is typically paired with Suspense.",
    tags: ["lazy", "code-splitting", "React"]
  },

  {
    id: "react-performance-q-019",
    quizId: "quiz_react_performance",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is Suspense commonly used with React.lazy?",
    options: [
      { id: "A", text: "It provides a fallback UI while the lazy-loaded component's code is being loaded." },
      { id: "B", text: "It prevents all asynchronous code from running." },
      { id: "C", text: "It automatically caches every component forever." },
      { id: "D", text: "It converts lazy components into server components." }
    ],
    correctOptionId: "A",
    explanation: "A lazy component may not be available immediately. Suspense provides a declarative boundary that can display fallback content while the component is loading.",
    tags: ["Suspense", "lazy", "code-splitting"]
  },

  {
    id: "react-performance-q-020",
    quizId: "quiz_react_performance",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which feature is a strong candidate for route-level code splitting?",
    options: [
      { id: "A", text: "A large admin dashboard that most first-time visitors do not immediately need." },
      { id: "B", text: "A tiny logo component used on every page." },
      { id: "C", text: "A basic button used above the fold." },
      { id: "D", text: "A short static heading." }
    ],
    correctOptionId: "A",
    explanation: "Large feature areas that are not required for the initial screen are good candidates for lazy loading because their code can be downloaded when the user navigates to that feature.",
    tags: ["code-splitting", "lazy-loading", "routes"]
  },

  {
    id: "react-performance-q-021",
    quizId: "quiz_react_performance",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which code correctly lazy-loads a Dashboard component?",
    options: [
      {
        id: "A",
        text: "const Dashboard = lazy(() => import('./Dashboard'));"
      },
      {
        id: "B",
        text: "const Dashboard = lazy('./Dashboard');"
      },
      {
        id: "C",
        text: "const Dashboard = import('./Dashboard');"
      },
      {
        id: "D",
        text: "const Dashboard = useMemo('./Dashboard');"
      }
    ],
    correctOptionId: "A",
    explanation: "React.lazy expects a function that returns a promise resolving to a module with a default component export. Dynamic import provides that promise.",
    tags: ["lazy", "dynamic-import", "code-splitting"]
  },

  {
    id: "react-performance-q-022",
    quizId: "quiz_react_performance",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about React.memo and useMemo is correct?",
    options: [
      { id: "A", text: "React.memo memoizes a component's rendering based on props, while useMemo memoizes a calculated value inside a component." },
      { id: "B", text: "They are identical APIs with different names." },
      { id: "C", text: "React.memo memoizes network requests and useMemo memoizes components." },
      { id: "D", text: "useMemo prevents parent components from rendering." }
    ],
    correctOptionId: "A",
    explanation: "React.memo operates at the component boundary, while useMemo caches the result of a calculation within a component.",
    tags: ["React.memo", "useMemo", "memoization"]
  },

  {
    id: "react-performance-q-023",
    quizId: "quiz_react_performance",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens if a parent passes a newly created object to a React.memo child on every render?",
    options: [
      { id: "A", text: "The child can still re-render because the object prop has a new identity." },
      { id: "B", text: "React.memo deep-compares the object automatically and always skips the render." },
      { id: "C", text: "The child is permanently frozen." },
      { id: "D", text: "React converts the object to primitive state." }
    ],
    correctOptionId: "A",
    explanation: "Memoization comparisons do not automatically deep-compare arbitrary objects. A newly created object has a different reference, so it can cause the memoized child to render again.",
    tags: ["React.memo", "object-identity", "props", "re-render"]
  },

  {
    id: "react-performance-q-024",
    quizId: "quiz_react_performance",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach can help prevent the object-identity problem in the previous question when the object itself is expensive or meaningful to stabilize?",
    options: [
      { id: "A", text: "Memoize the object with useMemo using the values that actually determine it." },
      { id: "B", text: "Put the object in JSX text." },
      { id: "C", text: "Create a new object more frequently." },
      { id: "D", text: "Replace the object with a random value." }
    ],
    correctOptionId: "A",
    explanation: "useMemo can preserve an object reference when its dependencies remain unchanged. This can be useful when that object is passed to a memoized child.",
    tags: ["useMemo", "object-identity", "React.memo"]
  },

  {
    id: "react-performance-q-025",
    quizId: "quiz_react_performance",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is generally the best first step before optimizing a slow React component?",
    options: [
      { id: "A", text: "Measure or profile the application's behavior to identify the actual bottleneck." },
      { id: "B", text: "Add useMemo to every calculation." },
      { id: "C", text: "Wrap every component in React.memo." },
      { id: "D", text: "Replace every function with useCallback." }
    ],
    correctOptionId: "A",
    explanation: "Optimization should be evidence-driven. Profiling helps determine whether the bottleneck is rendering, computation, network activity, bundle size, or something else.",
    tags: ["profiling", "performance", "optimization"]
  },

  {
    id: "react-performance-q-026",
    quizId: "quiz_react_performance",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can blindly adding useCallback hurt rather than help?",
    options: [
      { id: "A", text: "Memoization itself has overhead and adds complexity, so it may provide no benefit when child renders are already cheap." },
      { id: "B", text: "useCallback always causes infinite loops." },
      { id: "C", text: "useCallback prevents functions from being called." },
      { id: "D", text: "useCallback deletes dependencies." }
    ],
    correctOptionId: "A",
    explanation: "useCallback is not free. If no meaningful consumer benefits from a stable function identity, the optimization may add complexity without improving performance.",
    tags: ["useCallback", "performance", "memoization", "best-practices"]
  },

  {
    id: "react-performance-q-027",
    quizId: "quiz_react_performance",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about useMemo is most accurate?",
    options: [
      { id: "A", text: "It is a performance optimization, not a semantic guarantee that a value will remain cached forever." },
      { id: "B", text: "It creates permanent global storage." },
      { id: "C", text: "It guarantees the calculation never runs twice." },
      { id: "D", text: "It replaces state management." }
    ],
    correctOptionId: "A",
    explanation: "React may discard memoized values in circumstances where it needs to, so code should remain correct even without relying on useMemo as permanent storage.",
    tags: ["useMemo", "memoization", "performance"]
  },

  {
    id: "react-performance-q-028",
    quizId: "quiz_react_performance",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is usually preferable for a cheap calculation such as `const doubled = count * 2`?",
    options: [
      { id: "A", text: "Calculate it directly during rendering." },
      { id: "B", text: "Always wrap it in useMemo." },
      { id: "C", text: "Store it in state and synchronize it with useEffect." },
      { id: "D", text: "Store it in localStorage." }
    ],
    correctOptionId: "A",
    explanation: "A trivial calculation is usually cheaper and simpler to perform directly than to memoize. Memoization should be justified by meaningful repeated work.",
    tags: ["useMemo", "derived-values", "performance"]
  },

  {
    id: "react-performance-q-029",
    quizId: "quiz_react_performance",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\nconst filtered = useMemo(\n  () => items.filter(item => item.active),\n  [items]\n);\n\nWhat is the main benefit if items retains the same reference across renders?",
    options: [
      { id: "A", text: "React can reuse the previously calculated filtered result instead of running filter again." },
      { id: "B", text: "The items array becomes immutable automatically." },
      { id: "C", text: "React stops rendering the component." },
      { id: "D", text: "filter runs asynchronously." }
    ],
    correctOptionId: "A",
    explanation: "When items has the same dependency identity, the memoized calculation can be reused. If items changes, the filtering calculation is recalculated.",
    tags: ["useMemo", "arrays", "dependencies", "performance"]
  },

  {
    id: "react-performance-q-030",
    quizId: "quiz_react_performance",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is wrong with this optimization?\n\nconst result = useMemo(() => expensiveCalculation(), []);\n\nThe calculation depends on `query`.",
    options: [
      { id: "A", text: "query is missing from the dependency list, so the memoized result may not update when query changes." },
      { id: "B", text: "useMemo cannot call functions." },
      { id: "C", text: "Empty dependency arrays always recalculate." },
      { id: "D", text: "expensiveCalculation must be asynchronous." }
    ],
    correctOptionId: "A",
    explanation: "If the calculation reads query, query is a reactive dependency. Omitting it can cause the calculation to remain based on stale data.",
    tags: ["useMemo", "dependencies", "stale-values", "debugging"]
  },

  {
    id: "react-performance-q-031",
    quizId: "quiz_react_performance",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "A React.memo child receives `onSelect` and `items`. The parent recreates onSelect every render but items stays stable. The child is expensive to render. Which optimization is most directly relevant?",
    options: [
      { id: "A", text: "Use useCallback for onSelect with the correct dependencies so its identity can remain stable when appropriate." },
      { id: "B", text: "Use useMemo on items even though items is already stable." },
      { id: "C", text: "Move onSelect into CSS." },
      { id: "D", text: "Remove React.memo from the child." }
    ],
    correctOptionId: "A",
    explanation: "The unstable function prop is causing the memoized child's props to appear changed. useCallback can stabilize that function reference when doing so is actually beneficial.",
    tags: ["useCallback", "React.memo", "function-identity", "optimization"]
  },

  {
    id: "react-performance-q-032",
    quizId: "quiz_react_performance",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can a React.memo child still render when its parent renders?",
    options: [
      { id: "A", text: "Its props may have changed, its own state may have changed, or a relevant context value may have changed." },
      { id: "B", text: "React.memo guarantees zero renders after the first render." },
      { id: "C", text: "React.memo only works on class components." },
      { id: "D", text: "Parent rendering is always ignored by React.memo." }
    ],
    correctOptionId: "A",
    explanation: "React.memo primarily optimizes parent-to-child prop-driven rendering. It does not prevent the component from rendering because of its own state or relevant context updates.",
    tags: ["React.memo", "state", "context", "re-render"]
  },

  {
    id: "react-performance-q-033",
    quizId: "quiz_react_performance",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about context and React.memo is correct?",
    options: [
      { id: "A", text: "A memoized component that consumes a context can still update when the relevant context value changes." },
      { id: "B", text: "React.memo prevents all context updates." },
      { id: "C", text: "Context changes only affect class components." },
      { id: "D", text: "Context values are never compared." }
    ],
    correctOptionId: "A",
    explanation: "Memoization does not isolate a component from context it consumes. When the relevant context value changes, consumers can update even if their props remain unchanged.",
    tags: ["React.memo", "context", "re-render", "performance"]
  },

  {
    id: "react-performance-q-034",
    quizId: "quiz_react_performance",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which architecture can help reduce unnecessary updates caused by a frequently changing context value?",
    options: [
      { id: "A", text: "Split contexts so components subscribe only to the state they actually need." },
      { id: "B", text: "Put every application value into one context." },
      { id: "C", text: "Force every component to use useMemo." },
      { id: "D", text: "Move the context provider into every leaf node." }
    ],
    correctOptionId: "A",
    explanation: "Splitting unrelated context concerns can reduce the number of components affected by a particular context update and make the state architecture easier to reason about.",
    tags: ["context", "performance", "state-architecture", "re-render"]
  },

  {
    id: "react-performance-q-035",
    quizId: "quiz_react_performance",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "A list contains 10,000 rows and scrolling becomes slow because every row is rendered at once. Which optimization is most directly relevant?",
    options: [
      { id: "A", text: "Virtualization or windowing so only the visible portion of the list is rendered." },
      { id: "B", text: "useMemo on the page title." },
      { id: "C", text: "useCallback on every utility function." },
      { id: "D", text: "Adding more context providers." }
    ],
    correctOptionId: "A",
    explanation: "Virtualization limits the number of DOM nodes and row components that need to exist and update at once, making it especially valuable for very large lists.",
    tags: ["lists", "virtualization", "performance", "rendering"]
  },

  {
    id: "react-performance-q-036",
    quizId: "quiz_react_performance",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can stable React keys matter for performance as well as correctness?",
    options: [
      { id: "A", text: "Stable keys help React preserve element identity and avoid unnecessary mounting, unmounting, or DOM work when list items move or change." },
      { id: "B", text: "Keys directly memoize every row." },
      { id: "C", text: "Keys prevent all list renders." },
      { id: "D", text: "Keys reduce JavaScript bundle size." }
    ],
    correctOptionId: "A",
    explanation: "Keys allow React to identify which list items correspond across renders. Stable keys help React reconcile changes efficiently and preserve component state correctly.",
    tags: ["keys", "lists", "reconciliation", "performance"]
  },

  {
    id: "react-performance-q-037",
    quizId: "quiz_react_performance",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which key choice can cause unnecessary remounting when list items are reordered?",
    options: [
      { id: "A", text: "Using the array index as the key when item order can change." },
      { id: "B", text: "Using a stable unique ID from the data." },
      { id: "C", text: "Using an immutable database ID." },
      { id: "D", text: "Using a stable identifier tied to the item." }
    ],
    correctOptionId: "A",
    explanation: "When list order changes, index-based keys can associate the wrong key with a different item. Stable item IDs preserve identity across reordering.",
    tags: ["keys", "lists", "reconciliation", "performance"]
  },

  {
    id: "react-performance-q-038",
    quizId: "quiz_react_performance",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which change can reduce unnecessary child rendering when only one part of a large parent changes?",
    options: [
      { id: "A", text: "Split the UI into smaller components so updates are isolated to the relevant parts when possible." },
      { id: "B", text: "Put all UI into one component." },
      { id: "C", text: "Use one giant useMemo around the entire application." },
      { id: "D", text: "Replace all props with global variables." }
    ],
    correctOptionId: "A",
    explanation: "Component boundaries can isolate rendering work. When state is placed close to where it is needed and the UI is appropriately split, unrelated portions can avoid unnecessary work.",
    tags: ["component-design", "re-render", "performance", "state-locality"]
  },

  {
    id: "react-performance-q-039",
    quizId: "quiz_react_performance",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can moving state closer to the component that needs it improve performance?",
    options: [
      { id: "A", text: "It can prevent higher-level components and unrelated subtrees from re-rendering when that state changes." },
      { id: "B", text: "Local state is always faster than server state." },
      { id: "C", text: "State near the leaf never causes renders." },
      { id: "D", text: "React ignores state updates in child components." }
    ],
    correctOptionId: "A",
    explanation: "State updates cause the component owning that state to render. Keeping state local can reduce the amount of the component tree that needs to participate in the update.",
    tags: ["state-locality", "re-render", "performance", "architecture"]
  },

  {
    id: "react-performance-q-040",
    quizId: "quiz_react_performance",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which situation is most likely to benefit from React.memo?",
    options: [
      { id: "A", text: "A large chart component receives stable data props while a parent frequently updates unrelated UI state." },
      { id: "B", text: "A tiny component containing one static span." },
      { id: "C", text: "A component whose props change on every render anyway." },
      { id: "D", text: "A component that always depends on changing context." }
    ],
    correctOptionId: "A",
    explanation: "React.memo is most useful when a component is relatively expensive and its props often remain unchanged while its parent renders for unrelated reasons.",
    tags: ["React.memo", "re-render", "performance", "component-boundaries"]
  },

  {
    id: "react-performance-q-041",
    quizId: "quiz_react_performance",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "A parent is wrapped in React.memo but its child is expensive and receives a new object prop every render. What is the likely result?",
    options: [
      { id: "A", text: "The child may still re-render because the parent can pass a new object identity as a prop." },
      { id: "B", text: "The child automatically becomes memoized." },
      { id: "C", text: "The child can never render again." },
      { id: "D", text: "React.memo recursively memoizes all descendants." }
    ],
    correctOptionId: "A",
    explanation: "React.memo does not recursively memoize descendants. Each component's rendering behavior is considered separately, and changing object identity can make a child prop appear changed.",
    tags: ["React.memo", "children", "object-identity", "re-render"]
  },

  {
    id: "react-performance-q-042",
    quizId: "quiz_react_performance",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential downside of excessive memoization?",
    options: [
      { id: "A", text: "More code complexity, memory usage, dependency management, and comparison overhead without necessarily improving performance." },
      { id: "B", text: "It makes React unable to render JSX." },
      { id: "C", text: "It automatically causes a full page reload." },
      { id: "D", text: "It prevents all browser events." }
    ],
    correctOptionId: "A",
    explanation: "Memoization is an optimization technique with its own cost. Overusing it can make code harder to maintain while providing little or no measurable benefit.",
    tags: ["memoization", "performance", "tradeoffs"]
  },

  {
    id: "react-performance-q-043",
    quizId: "quiz_react_performance",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component performs an expensive sort every render, but the source array changes frequently. Which question should you ask before adding useMemo?",
    options: [
      { id: "A", text: "Whether the sorting cost is actually significant enough for memoization to provide a measurable benefit." },
      { id: "B", text: "Whether every React component should use useMemo." },
      { id: "C", text: "Whether useMemo prevents sorting completely." },
      { id: "D", text: "Whether sorting can only happen in useEffect." }
    ],
    correctOptionId: "A",
    explanation: "If the dependency changes frequently, the memoized calculation may also run frequently. Profiling and understanding the actual cost determine whether memoization is worthwhile.",
    tags: ["useMemo", "profiling", "performance", "tradeoffs"]
  },

  {
    id: "react-performance-q-044",
    quizId: "quiz_react_performance",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about useCallback dependencies is correct?",
    options: [
      { id: "A", text: "The dependency list must reflect reactive values used by the callback so the callback does not accidentally capture stale values." },
      { id: "B", text: "useCallback never needs dependencies." },
      { id: "C", text: "The dependency array should always contain every state variable in the application." },
      { id: "D", text: "Dependencies determine when the callback executes." }
    ],
    correctOptionId: "A",
    explanation: "The dependencies determine when React should provide a new function definition. Omitting reactive values used by the callback can make it close over stale data.",
    tags: ["useCallback", "dependencies", "closures", "stale-values"]
  },

  {
    id: "react-performance-q-045",
    quizId: "quiz_react_performance",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about useMemo dependencies is correct?",
    options: [
      { id: "A", text: "They should represent the reactive values used by the calculation so the memoized result corresponds to the current inputs." },
      { id: "B", text: "They are only used for debugging." },
      { id: "C", text: "They determine when the component mounts." },
      { id: "D", text: "They are ignored by React." }
    ],
    correctOptionId: "A",
    explanation: "The dependency list tells React which inputs determine the calculation. If those inputs change, the cached result needs to be recalculated.",
    tags: ["useMemo", "dependencies", "memoization"]
  },

  {
    id: "react-performance-q-046",
    quizId: "quiz_react_performance",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A page contains a rarely visited analytics section that imports a large charting library. What is a strong optimization strategy?",
    options: [
      { id: "A", text: "Lazy-load the analytics section so its large code dependency can be loaded when the feature is needed." },
      { id: "B", text: "Use useCallback for every chart function." },
      { id: "C", text: "Wrap the chart library in React.memo." },
      { id: "D", text: "Move the library import into localStorage." }
    ],
    correctOptionId: "A",
    explanation: "The biggest cost here may be initial bundle size rather than repeated rendering. Code splitting can defer the large dependency until the analytics feature is actually needed.",
    tags: ["code-splitting", "lazy-loading", "bundle-size", "performance"]
  },

  {
    id: "react-performance-q-047",
    quizId: "quiz_react_performance",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A React application feels slow on first load, but component re-renders are inexpensive. Which area should you investigate first?",
    options: [
      { id: "A", text: "JavaScript bundle size, loading, parsing, and other initial-load costs." },
      { id: "B", text: "Adding React.memo to every component." },
      { id: "C", text: "Adding useCallback to every event handler." },
      { id: "D", text: "Memoizing every string." }
    ],
    correctOptionId: "A",
    explanation: "If initial loading is the bottleneck rather than rendering, memoization may not help. Bundle size, code splitting, network delivery, and parsing costs are more relevant.",
    tags: ["bundle-size", "code-splitting", "initial-load", "performance"]
  },

  {
    id: "react-performance-q-048",
    quizId: "quiz_react_performance",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer says, 'I used useMemo everywhere, but the application is still slow.' What is the most appropriate response?",
    options: [
      { id: "A", text: "Profile the application because the real bottleneck may be elsewhere, such as network requests, bundle size, DOM work, or expensive rendering." },
      { id: "B", text: "Add another useMemo around every component." },
      { id: "C", text: "Replace useMemo with useCallback everywhere." },
      { id: "D", text: "Memoize the React root." }
    ],
    correctOptionId: "A",
    explanation: "Memoization only addresses certain kinds of repeated work. Performance problems can come from many layers, so profiling is necessary to identify the actual bottleneck.",
    tags: ["profiling", "useMemo", "performance", "debugging"]
  },

  {
    id: "react-performance-q-049",
    quizId: "quiz_react_performance",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A parent renders a memoized child with a stable primitive prop, but the child still performs expensive work whenever its own state changes. Which statement is correct?",
    options: [
      { id: "A", text: "React.memo does not prevent the child from rendering because of its own state updates." },
      { id: "B", text: "React.memo should prevent all state updates." },
      { id: "C", text: "The child must be moved outside React." },
      { id: "D", text: "The primitive prop must be converted into an object." }
    ],
    correctOptionId: "A",
    explanation: "React.memo optimizes parent-to-child prop-driven updates. A component still needs to render when its own state changes because its output may depend on that state.",
    tags: ["React.memo", "state", "re-render", "performance"]
  },

  {
    id: "react-performance-q-050",
    quizId: "quiz_react_performance",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are optimizing a production React dashboard. A large table contains thousands of rows, an expensive derived dataset, several memoized row components, and a rarely used analytics page with a large charting library. Which strategy is the most technically sound?",
    options: [
      {
        id: "A",
        text: "Profile first; virtualize the large table, memoize genuinely expensive derived calculations when inputs justify it, stabilize props only where memoized children benefit, and lazy-load the rarely used analytics feature."
      },
      {
        id: "B",
        text: "Wrap every component in React.memo, every value in useMemo, and every function in useCallback without measuring."
      },
      {
        id: "C",
        text: "Move all state into one global context and memoize the provider."
      },
      {
        id: "D",
        text: "Disable React re-renders and load every feature eagerly to avoid asynchronous code."
      }
    ],
    correctOptionId: "A",
    explanation: "Different bottlenecks require different solutions. Large lists benefit from virtualization, expensive calculations can benefit from useMemo when justified, stable prop identities can help React.memo boundaries, and large rarely used features are strong candidates for code splitting. Profiling should guide which optimizations actually matter.",
    tags: ["performance", "profiling", "virtualization", "useMemo", "useCallback", "React.memo", "code-splitting"]
  }
];

export default reactPerformanceQuestions;