const reactLifecycleEffectsQuestions = [
  {
    id: "react-lifecycle-effects-q-001",
    quizId: "quiz_react_lifecycle_effects",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does it mean when a React component mounts?",
    options: [
      {
        id: "A",
        text: "The component is added to the UI for the first time."
      },
      {
        id: "B",
        text: "The component is permanently removed from memory."
      },
      {
        id: "C",
        text: "The component receives new props."
      },
      {
        id: "D",
        text: "The component's state is automatically reset on every render."
      }
    ],
    correctOptionId: "A",
    explanation: "Mounting refers to a component being created and committed to the UI for the first time.",
    tags: ["lifecycle", "mount", "rendering"]
  },

  {
    id: "react-lifecycle-effects-q-002",
    quizId: "quiz_react_lifecycle_effects",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does it mean when a React component unmounts?",
    options: [
      {
        id: "A",
        text: "The component is removed from the UI."
      },
      {
        id: "B",
        text: "The component receives new props."
      },
      {
        id: "C",
        text: "The component renders for the first time."
      },
      {
        id: "D",
        text: "The component's state is automatically incremented."
      }
    ],
    correctOptionId: "A",
    explanation: "Unmounting occurs when React removes a component from the rendered UI. Effects can use cleanup functions to stop external subscriptions or other ongoing work.",
    tags: ["lifecycle", "unmount", "cleanup"]
  },

  {
    id: "react-lifecycle-effects-q-003",
    quizId: "quiz_react_lifecycle_effects",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a React re-render?",
    options: [
      {
        id: "A",
        text: "React calls the component again to determine what the UI should look like."
      },
      {
        id: "B",
        text: "The browser completely reloads the page."
      },
      {
        id: "C",
        text: "The component is always unmounted and mounted again."
      },
      {
        id: "D",
        text: "The component's JavaScript file is downloaded again."
      }
    ],
    correctOptionId: "A",
    explanation: "A re-render means React re-executes the component's rendering logic to determine the next UI. A re-render does not necessarily mean the DOM is completely recreated.",
    tags: ["rendering", "re-render", "lifecycle"]
  },

  {
    id: "react-lifecycle-effects-q-004",
    quizId: "quiz_react_lifecycle_effects",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which Hook is primarily used to synchronize a component with an external system?",
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
        text: "useMemo"
      },
      {
        id: "D",
        text: "useRef"
      }
    ],
    correctOptionId: "A",
    explanation: "useEffect is designed for synchronizing React with external systems such as subscriptions, timers, browser APIs, network connections, or third-party widgets.",
    tags: ["hooks", "useEffect", "side-effects"]
  },

  {
    id: "react-lifecycle-effects-q-005",
    quizId: "quiz_react_lifecycle_effects",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the basic structure of a useEffect call?",
    options: [
      {
        id: "A",
        text: "useEffect(() => { /* effect */ }, [dependencies])"
      },
      {
        id: "B",
        text: "useEffect({ dependencies }, () => {})"
      },
      {
        id: "C",
        text: "useEffect([dependencies], { /* effect */ })"
      },
      {
        id: "D",
        text: "useEffect(() => {}, dependencies => {})"
      }
    ],
    correctOptionId: "A",
    explanation: "useEffect accepts a setup function and optionally a dependency array that determines when React should re-run the effect.",
    tags: ["hooks", "useEffect", "dependency-array"]
  },

  {
    id: "react-lifecycle-effects-q-006",
    quizId: "quiz_react_lifecycle_effects",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "When does this effect run?\n\nuseEffect(() => {\n  console.log(\"effect\");\n});",
    options: [
      {
        id: "A",
        text: "After every completed render."
      },
      {
        id: "B",
        text: "Only after the first render."
      },
      {
        id: "C",
        text: "Only when the component unmounts."
      },
      {
        id: "D",
        text: "Only when props change."
      }
    ],
    correctOptionId: "A",
    explanation: "When no dependency array is supplied, the effect is re-run after every completed render where the effect participates.",
    tags: ["useEffect", "rendering", "dependencies"]
  },

  {
    id: "react-lifecycle-effects-q-007",
    quizId: "quiz_react_lifecycle_effects",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "When does this effect normally run?\n\nuseEffect(() => {\n  console.log(\"effect\");\n}, []);",
    options: [
      {
        id: "A",
        text: "After the initial mount, with no dependency-triggered re-runs."
      },
      {
        id: "B",
        text: "After every render."
      },
      {
        id: "C",
        text: "Only when the component unmounts."
      },
      {
        id: "D",
        text: "Whenever any state in the entire application changes."
      }
    ],
    correctOptionId: "A",
    explanation: "An empty dependency array means the effect has no reactive dependencies, so React does not re-run it because of dependency changes. In normal production behavior it runs after the initial mount. Development Strict Mode can intentionally perform an extra setup/cleanup cycle.",
    tags: ["useEffect", "dependency-array", "mount"]
  },

  {
    id: "react-lifecycle-effects-q-008",
    quizId: "quiz_react_lifecycle_effects",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the dependency array in useEffect?",
    options: [
      {
        id: "A",
        text: "It tells React which reactive values the effect depends on so React can determine when synchronization needs to be repeated."
      },
      {
        id: "B",
        text: "It stores the component's state permanently."
      },
      {
        id: "C",
        text: "It prevents the component from rendering."
      },
      {
        id: "D",
        text: "It determines the component's HTML structure."
      }
    ],
    correctOptionId: "A",
    explanation: "Dependencies describe reactive values used by the effect. React compares them between renders and re-runs the effect when a dependency changes.",
    tags: ["useEffect", "dependencies", "synchronization"]
  },

  {
    id: "react-lifecycle-effects-q-009",
    quizId: "quiz_react_lifecycle_effects",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Consider:\n\nuseEffect(() => {\n  console.log(count);\n}, [count]);\n\nWhen does the effect re-run because of count?",
    options: [
      {
        id: "A",
        text: "When count changes between renders."
      },
      {
        id: "B",
        text: "Whenever the component receives any prop."
      },
      {
        id: "C",
        text: "Only when count becomes zero."
      },
      {
        id: "D",
        text: "Never, because dependency arrays prevent effects."
      }
    ],
    correctOptionId: "A",
    explanation: "count is listed as a dependency, so React re-runs the effect when its value differs from the previous render.",
    tags: ["useEffect", "dependencies", "state"]
  },

  {
    id: "react-lifecycle-effects-q-010",
    quizId: "quiz_react_lifecycle_effects",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What can a useEffect setup function optionally return?",
    options: [
      {
        id: "A",
        text: "A cleanup function."
      },
      {
        id: "B",
        text: "A JSX element that React automatically renders."
      },
      {
        id: "C",
        text: "A new component."
      },
      {
        id: "D",
        text: "A dependency array."
      }
    ],
    correctOptionId: "A",
    explanation: "An effect can return a cleanup function. React calls that cleanup before the effect re-runs with changed dependencies and when the component is removed.",
    tags: ["useEffect", "cleanup", "lifecycle"]
  },

  {
    id: "react-lifecycle-effects-q-011",
    quizId: "quiz_react_lifecycle_effects",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which example correctly cleans up an interval created by an effect?",
    options: [
      {
        id: "A",
        text: "useEffect(() => { const id = setInterval(tick, 1000); return () => clearInterval(id); }, []);"
      },
      {
        id: "B",
        text: "useEffect(() => { setInterval(tick, 1000); clearInterval(); }, []);"
      },
      {
        id: "C",
        text: "useEffect(() => { return setInterval(tick, 1000); }, []);"
      },
      {
        id: "D",
        text: "useEffect(() => { clearInterval(tick); }, []);"
      }
    ],
    correctOptionId: "A",
    explanation: "The interval ID returned by setInterval is captured by the effect, and the cleanup function uses that ID to cancel the interval.",
    tags: ["useEffect", "cleanup", "setInterval", "timers"]
  },

  {
    id: "react-lifecycle-effects-q-012",
    quizId: "quiz_react_lifecycle_effects",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why should an effect that subscribes to an external event usually return a cleanup function?",
    options: [
      {
        id: "A",
        text: "To remove the subscription when it is no longer needed."
      },
      {
        id: "B",
        text: "To force React to render twice."
      },
      {
        id: "C",
        text: "To prevent state from existing."
      },
      {
        id: "D",
        text: "To make the subscription run faster."
      }
    ],
    correctOptionId: "A",
    explanation: "Cleanup prevents stale subscriptions, duplicate listeners, memory leaks, and other unwanted external synchronization after the effect is no longer active.",
    tags: ["useEffect", "cleanup", "subscriptions"]
  },

  {
    id: "react-lifecycle-effects-q-013",
    quizId: "quiz_react_lifecycle_effects",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "When an effect with dependencies changes from one dependency value to another, what is the usual sequence?",
    options: [
      {
        id: "A",
        text: "React runs the previous cleanup, then runs the new setup."
      },
      {
        id: "B",
        text: "React always runs the new setup first and never runs cleanup."
      },
      {
        id: "C",
        text: "React unmounts the entire application."
      },
      {
        id: "D",
        text: "React ignores the effect."
      }
    ],
    correctOptionId: "A",
    explanation: "When dependencies change, React first cleans up the previous synchronization and then establishes the new synchronization using the latest values.",
    tags: ["useEffect", "cleanup", "dependencies"]
  },

  {
    id: "react-lifecycle-effects-q-014",
    quizId: "quiz_react_lifecycle_effects",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens to an effect's cleanup when its component unmounts?",
    options: [
      {
        id: "A",
        text: "React runs the cleanup function if one was returned."
      },
      {
        id: "B",
        text: "React converts the cleanup into state."
      },
      {
        id: "C",
        text: "React runs the setup function again forever."
      },
      {
        id: "D",
        text: "React ignores cleanup during unmount."
      }
    ],
    correctOptionId: "A",
    explanation: "Unmounting ends the component's synchronization with the external system, so React runs the cleanup returned by the effect.",
    tags: ["useEffect", "cleanup", "unmount"]
  },

  {
    id: "react-lifecycle-effects-q-015",
    quizId: "quiz_react_lifecycle_effects",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about useEffect is correct?",
    options: [
      {
        id: "A",
        text: "Effects run after React has committed the relevant render to the UI."
      },
      {
        id: "B",
        text: "Effects run before the component function executes."
      },
      {
        id: "C",
        text: "Effects replace JSX rendering."
      },
      {
        id: "D",
        text: "Effects can only be used for network requests."
      }
    ],
    correctOptionId: "A",
    explanation: "Effects are used to synchronize with external systems after React has committed the render. They are not a replacement for rendering logic.",
    tags: ["useEffect", "rendering", "commit"]
  },

  {
    id: "react-lifecycle-effects-q-016",
    quizId: "quiz_react_lifecycle_effects",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is the best reason to use useEffect for a browser event listener?",
    options: [
      {
        id: "A",
        text: "The listener is an external browser-system subscription that should be synchronized with the component."
      },
      {
        id: "B",
        text: "useEffect makes all browser events synchronous."
      },
      {
        id: "C",
        text: "React cannot otherwise render buttons."
      },
      {
        id: "D",
        text: "useEffect automatically removes every event listener globally."
      }
    ],
    correctOptionId: "A",
    explanation: "A browser event listener is an external subscription. An effect can establish it and its cleanup can remove it when the synchronization is no longer needed.",
    tags: ["useEffect", "event-listeners", "side-effects"]
  },

  {
    id: "react-lifecycle-effects-q-017",
    quizId: "quiz_react_lifecycle_effects",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which code correctly subscribes to resize events and cleans them up?",
    options: [
      {
        id: "A",
        text: "useEffect(() => { const handleResize = () => {}; window.addEventListener('resize', handleResize); return () => window.removeEventListener('resize', handleResize); }, []);"
      },
      {
        id: "B",
        text: "useEffect(() => { window.addEventListener('resize', () => {}); }, []);"
      },
      {
        id: "C",
        text: "useEffect(() => { window.removeEventListener('resize'); }, []);"
      },
      {
        id: "D",
        text: "useEffect(() => { return window.addEventListener('resize', () => {}); }, []);"
      }
    ],
    correctOptionId: "A",
    explanation: "The same function reference used during addEventListener must be supplied to removeEventListener. The cleanup returned from the effect performs that removal.",
    tags: ["useEffect", "event-listeners", "cleanup"]
  },

  {
    id: "react-lifecycle-effects-q-018",
    quizId: "quiz_react_lifecycle_effects",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is this cleanup incorrect?\n\nwindow.addEventListener('resize', () => handleResize());\nwindow.removeEventListener('resize', () => handleResize());",
    options: [
      {
        id: "A",
        text: "The two arrow functions are different function objects, so the listener added earlier cannot be removed this way."
      },
      {
        id: "B",
        text: "Arrow functions cannot be event listeners."
      },
      {
        id: "C",
        text: "removeEventListener only works for click events."
      },
      {
        id: "D",
        text: "resize events cannot be removed."
      }
    ],
    correctOptionId: "A",
    explanation: "removeEventListener needs the same listener function reference that was registered. Creating another arrow function creates a different object.",
    tags: ["event-listeners", "cleanup", "javascript-functions"]
  },

  {
    id: "react-lifecycle-effects-q-019",
    quizId: "quiz_react_lifecycle_effects",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\nuseEffect(() => {\n  console.log(userId);\n}, []);\n\nIf userId is a reactive value used by the effect, what is the main problem?",
    options: [
      {
        id: "A",
        text: "The effect can keep using the value from the render in which it was created instead of synchronizing when userId changes."
      },
      {
        id: "B",
        text: "An empty dependency array means the effect runs after every render."
      },
      {
        id: "C",
        text: "React automatically changes userId to undefined."
      },
      {
        id: "D",
        text: "useEffect cannot access variables."
      }
    ],
    correctOptionId: "A",
    explanation: "If an effect depends on a reactive value such as userId, that dependency normally belongs in the dependency array so React can re-synchronize when it changes.",
    tags: ["useEffect", "dependencies", "stale-closures"]
  },

  {
    id: "react-lifecycle-effects-q-020",
    quizId: "quiz_react_lifecycle_effects",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a stale closure in the context of a React effect?",
    options: [
      {
        id: "A",
        text: "An effect continues to reference values from an older render because it was created with that render's lexical environment."
      },
      {
        id: "B",
        text: "A component that has been unmounted automatically becomes a closure."
      },
      {
        id: "C",
        text: "A closure always means memory has leaked."
      },
      {
        id: "D",
        text: "A closure only occurs when using classes."
      }
    ],
    correctOptionId: "A",
    explanation: "Each render creates its own lexical environment. An effect callback closes over the values from the render that created it, so incorrect dependencies can cause it to observe outdated values.",
    tags: ["useEffect", "closures", "stale-closures"]
  },

  {
    id: "react-lifecycle-effects-q-021",
    quizId: "quiz_react_lifecycle_effects",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which situation is a strong candidate for useEffect?",
    options: [
      {
        id: "A",
        text: "Connecting to an external chat server when a component becomes active."
      },
      {
        id: "B",
        text: "Calculating totalPrice from price and quantity when rendering."
      },
      {
        id: "C",
        text: "Returning JSX from a component."
      },
      {
        id: "D",
        text: "Choosing whether a button should have text."
      }
    ],
    correctOptionId: "A",
    explanation: "Connecting to an external system is a side effect and a synchronization concern, making it an appropriate use case for an effect.",
    tags: ["useEffect", "external-systems", "side-effects"]
  },

  {
    id: "react-lifecycle-effects-q-022",
    quizId: "quiz_react_lifecycle_effects",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is usually NOT a good reason to use useEffect?",
    options: [
      {
        id: "A",
        text: "To calculate a value that can be derived directly from existing props and state."
      },
      {
        id: "B",
        text: "To subscribe to an external event source."
      },
      {
        id: "C",
        text: "To synchronize with a browser API."
      },
      {
        id: "D",
        text: "To connect to an external system."
      }
    ],
    correctOptionId: "A",
    explanation: "Derived values can normally be calculated during rendering. Using an effect for pure calculations often creates unnecessary state, extra renders, and more complicated synchronization.",
    tags: ["useEffect", "derived-state", "best-practices"]
  },

  {
    id: "react-lifecycle-effects-q-023",
    quizId: "quiz_react_lifecycle_effects",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\nconst fullName = `${firstName} ${lastName}`;\n\nWhy is an effect usually unnecessary for calculating fullName?",
    options: [
      {
        id: "A",
        text: "fullName is directly derived from existing render inputs and can be calculated during rendering."
      },
      {
        id: "B",
        text: "Strings cannot be used inside effects."
      },
      {
        id: "C",
        text: "React only supports numbers in state."
      },
      {
        id: "D",
        text: "Effects cannot access props."
      }
    ],
    correctOptionId: "A",
    explanation: "Because fullName is a pure calculation from firstName and lastName, it does not need synchronization with an external system.",
    tags: ["useEffect", "derived-values", "rendering"]
  },

  {
    id: "react-lifecycle-effects-q-024",
    quizId: "quiz_react_lifecycle_effects",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one problem with using an effect to set state that could instead be derived during rendering?",
    options: [
      {
        id: "A",
        text: "It can cause an unnecessary extra render and make the data flow more complicated."
      },
      {
        id: "B",
        text: "It permanently disables React state."
      },
      {
        id: "C",
        text: "It makes JSX invalid."
      },
      {
        id: "D",
        text: "It prevents all effects from running."
      }
    ],
    correctOptionId: "A",
    explanation: "If a value can be derived directly during rendering, storing it in state and updating it from an effect adds an unnecessary synchronization step.",
    tags: ["useEffect", "derived-state", "performance"]
  },

  {
    id: "react-lifecycle-effects-q-025",
    quizId: "quiz_react_lifecycle_effects",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens if an effect calls setState every time it runs and has no dependency array?",
    options: [
      {
        id: "A",
        text: "It can create a render-effect-update loop."
      },
      {
        id: "B",
        text: "It automatically runs only once."
      },
      {
        id: "C",
        text: "React ignores the setState call."
      },
      {
        id: "D",
        text: "The component is immediately unmounted."
      }
    ],
    correctOptionId: "A",
    explanation: "The effect runs after a render, updates state, causes another render, and then the effect can run again. This can continue indefinitely if nothing breaks the cycle.",
    tags: ["useEffect", "state", "infinite-loop", "debugging"]
  },

  {
    id: "react-lifecycle-effects-q-026",
    quizId: "quiz_react_lifecycle_effects",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which change can prevent an effect from running unnecessarily when it depends on an object?",
    options: [
      {
        id: "A",
        text: "Avoid creating a new object on every render when the effect only needs stable primitive values or restructure the dependency."
      },
      {
        id: "B",
        text: "Remove React from the project."
      },
      {
        id: "C",
        text: "Always use an empty dependency array regardless of the effect's values."
      },
      {
        id: "D",
        text: "Call the effect manually during rendering."
      }
    ],
    correctOptionId: "A",
    explanation: "React compares dependencies using Object.is. A newly created object has a new identity even when its contents are identical, so unnecessary object dependencies can cause repeated synchronization.",
    tags: ["useEffect", "dependencies", "object-identity"]
  },

  {
    id: "react-lifecycle-effects-q-027",
    quizId: "quiz_react_lifecycle_effects",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does React use when comparing dependency values between renders?",
    options: [
      {
        id: "A",
        text: "Object.is comparison semantics."
      },
      {
        id: "B",
        text: "Deep equality for every object."
      },
      {
        id: "C",
        text: "JSON.stringify for every dependency."
      },
      {
        id: "D",
        text: "Random comparison."
      }
    ],
    correctOptionId: "A",
    explanation: "React compares dependency values using Object.is semantics. This means object and function dependencies are compared by identity rather than by deep content.",
    tags: ["useEffect", "dependencies", "Object.is"]
  },

  {
    id: "react-lifecycle-effects-q-028",
    quizId: "quiz_react_lifecycle_effects",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\nconst options = { room: roomId };\n\nuseEffect(() => {\n  connect(options);\n  return () => disconnect(options);\n}, [options]);\n\nWhy can this effect run more often than expected?",
    options: [
      {
        id: "A",
        text: "options is a new object on every render, so its identity changes."
      },
      {
        id: "B",
        text: "React deep-compares objects and finds them different every time."
      },
      {
        id: "C",
        text: "useEffect ignores object dependencies."
      },
      {
        id: "D",
        text: "roomId cannot be used in an effect."
      }
    ],
    correctOptionId: "A",
    explanation: "The object literal creates a new object on each render. Since dependency comparison uses identity, React sees options as changed even when roomId has not changed.",
    tags: ["useEffect", "dependencies", "object-identity", "debugging"]
  },

  {
    id: "react-lifecycle-effects-q-029",
    quizId: "quiz_react_lifecycle_effects",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which dependency is usually more stable for the previous example if the connection only depends on roomId?",
    options: [
      {
        id: "A",
        text: "[roomId]"
      },
      {
        id: "B",
        text: "[Math.random()]"
      },
      {
        id: "C",
        text: "[{}]"
      },
      {
        id: "D",
        text: "No dependency array regardless of the effect."
      }
    ],
    correctOptionId: "A",
    explanation: "If the synchronization depends only on roomId, using roomId as the dependency expresses the actual dependency directly.",
    tags: ["useEffect", "dependencies", "synchronization"]
  },

  {
    id: "react-lifecycle-effects-q-030",
    quizId: "quiz_react_lifecycle_effects",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should an effect's cleanup be symmetrical with its setup?",
    options: [
      {
        id: "A",
        text: "The cleanup should undo or stop the external synchronization established by the setup."
      },
      {
        id: "B",
        text: "React requires cleanup to return JSX."
      },
      {
        id: "C",
        text: "Cleanup should create another subscription."
      },
      {
        id: "D",
        text: "Cleanup exists only to improve CSS."
      }
    ],
    correctOptionId: "A",
    explanation: "A good effect establishes a synchronization and its cleanup removes or reverses that synchronization, keeping the external system aligned with the component's lifecycle.",
    tags: ["useEffect", "cleanup", "synchronization"]
  },

  {
    id: "react-lifecycle-effects-q-031",
    quizId: "quiz_react_lifecycle_effects",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common purpose of cleanup when fetching data with an effect?",
    options: [
      {
        id: "A",
        text: "To prevent outdated asynchronous work from incorrectly affecting the current UI state."
      },
      {
        id: "B",
        text: "To make every request synchronous."
      },
      {
        id: "C",
        text: "To prevent the browser from creating promises."
      },
      {
        id: "D",
        text: "To guarantee that every request succeeds."
      }
    ],
    correctOptionId: "A",
    explanation: "When dependencies change or a component unmounts, older asynchronous work may finish later. Cleanup or an AbortController can prevent obsolete results from affecting the current synchronization.",
    tags: ["useEffect", "fetch", "cleanup", "async"]
  },

  {
    id: "react-lifecycle-effects-q-032",
    quizId: "quiz_react_lifecycle_effects",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which browser API can be used to cancel a fetch request from an effect cleanup?",
    options: [
      {
        id: "A",
        text: "AbortController"
      },
      {
        id: "B",
        text: "CancelPromise"
      },
      {
        id: "C",
        text: "FetchControllerOnly"
      },
      {
        id: "D",
        text: "Promise.stop()"
      }
    ],
    correctOptionId: "A",
    explanation: "AbortController provides an AbortSignal that can be passed to fetch and later aborted during cleanup.",
    tags: ["useEffect", "fetch", "AbortController", "cleanup"]
  },

  {
    id: "react-lifecycle-effects-q-033",
    quizId: "quiz_react_lifecycle_effects",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\nuseEffect(() => {\n  const controller = new AbortController();\n\n  fetch(`/api/users/${userId}`, {\n    signal: controller.signal\n  });\n\n  return () => controller.abort();\n}, [userId]);\n\nWhy is userId included in the dependency array?",
    options: [
      {
        id: "A",
        text: "The effect's synchronization depends on userId, so changing userId should replace the previous request with synchronization for the new user."
      },
      {
        id: "B",
        text: "Dependency arrays are required to contain every URL."
      },
      {
        id: "C",
        text: "Without userId, fetch cannot return JSON."
      },
      {
        id: "D",
        text: "React only permits string dependencies."
      }
    ],
    correctOptionId: "A",
    explanation: "The request URL depends on userId. When userId changes, React cleans up the previous effect, aborts the old request, and runs the new setup for the new user.",
    tags: ["useEffect", "fetch", "dependencies", "AbortController"]
  },

  {
    id: "react-lifecycle-effects-q-034",
    quizId: "quiz_react_lifecycle_effects",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What problem can occur if an effect starts a subscription whenever roomId changes but never cleans up the old subscription?",
    options: [
      {
        id: "A",
        text: "Multiple subscriptions can remain active and cause duplicate updates or resource leaks."
      },
      {
        id: "B",
        text: "React automatically deletes all subscriptions."
      },
      {
        id: "C",
        text: "The component becomes a class component."
      },
      {
        id: "D",
        text: "roomId becomes immutable."
      }
    ],
    correctOptionId: "A",
    explanation: "Without cleanup, changing roomId can leave the previous subscription active while establishing another one, resulting in stale updates and leaked resources.",
    tags: ["useEffect", "cleanup", "subscriptions", "debugging"]
  },

  {
    id: "react-lifecycle-effects-q-035",
    quizId: "quiz_react_lifecycle_effects",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does React Strict Mode commonly do with effects in development that can surprise developers?",
    options: [
      {
        id: "A",
        text: "It can intentionally run an extra setup/cleanup cycle to help reveal effects that are not resilient to remounting."
      },
      {
        id: "B",
        text: "It permanently disables all effects."
      },
      {
        id: "C",
        text: "It makes every effect run only once."
      },
      {
        id: "D",
        text: "It runs effects only after production deployment."
      }
    ],
    correctOptionId: "A",
    explanation: "In development Strict Mode, React may perform an additional setup and cleanup cycle for effects to expose missing cleanup and other lifecycle-related bugs. This is development behavior and should not be treated as production duplicate execution.",
    tags: ["useEffect", "StrictMode", "development", "cleanup"]
  },

  {
    id: "react-lifecycle-effects-q-036",
    quizId: "quiz_react_lifecycle_effects",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "An effect creates a WebSocket connection but does not close it during cleanup. What is the main issue?",
    options: [
      {
        id: "A",
        text: "The connection can remain active after the component no longer needs it."
      },
      {
        id: "B",
        text: "React automatically converts the socket into state."
      },
      {
        id: "C",
        text: "WebSockets cannot be used with React."
      },
      {
        id: "D",
        text: "The effect will never run."
      }
    ],
    correctOptionId: "A",
    explanation: "A WebSocket is an external resource. The effect should establish the connection and cleanup should close it when the synchronization ends.",
    tags: ["useEffect", "WebSocket", "cleanup", "external-systems"]
  },

  {
    id: "react-lifecycle-effects-q-037",
    quizId: "quiz_react_lifecycle_effects",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which mental model is most accurate for useEffect?",
    options: [
      {
        id: "A",
        text: "Think of it as synchronizing an external system with the current React render."
      },
      {
        id: "B",
        text: "Think of it as a replacement for every event handler."
      },
      {
        id: "C",
        text: "Think of it as a component constructor."
      },
      {
        id: "D",
        text: "Think of it as a way to force React to render synchronously."
      }
    ],
    correctOptionId: "A",
    explanation: "The modern mental model is synchronization rather than simply 'code that runs after render.' The effect connects the component to something outside React and keeps that connection synchronized with its dependencies.",
    tags: ["useEffect", "mental-model", "synchronization"]
  },

  {
    id: "react-lifecycle-effects-q-038",
    quizId: "quiz_react_lifecycle_effects",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can treating useEffect as a generic 'componentDidMount replacement' lead to poor React code?",
    options: [
      {
        id: "A",
        text: "It encourages developers to force unrelated logic into effects instead of identifying the actual synchronization dependency."
      },
      {
        id: "B",
        text: "useEffect cannot run after mounting."
      },
      {
        id: "C",
        text: "React does not support lifecycle behavior."
      },
      {
        id: "D",
        text: "Effects only work in class components."
      }
    ],
    correctOptionId: "A",
    explanation: "Thinking only in lifecycle terms can lead to effects being used for derived calculations or event-driven logic that does not require synchronization. Effects are better understood in terms of external synchronization.",
    tags: ["useEffect", "lifecycle", "best-practices", "mental-model"]
  },

  {
    id: "react-lifecycle-effects-q-039",
    quizId: "quiz_react_lifecycle_effects",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "A button click should submit a form to an API. Where is the most natural place to initiate that user-triggered request?",
    options: [
      {
        id: "A",
        text: "Inside the event handler for the form submission."
      },
      {
        id: "B",
        text: "Inside a useEffect that runs after every render."
      },
      {
        id: "C",
        text: "Inside the component's JSX string."
      },
      {
        id: "D",
        text: "Inside the cleanup function."
      }
    ],
    correctOptionId: "A",
    explanation: "The request is caused by a user event, so handling it directly in the submit handler usually gives a clearer data flow. An effect is not required simply because the operation is asynchronous.",
    tags: ["useEffect", "event-handlers", "forms", "best-practices"]
  },

  {
    id: "react-lifecycle-effects-q-040",
    quizId: "quiz_react_lifecycle_effects",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which situation is more appropriate for an effect than an event handler?",
    options: [
      {
        id: "A",
        text: "Keeping a WebSocket connection synchronized with the currently selected room."
      },
      {
        id: "B",
        text: "Sending a form when the user clicks Submit."
      },
      {
        id: "C",
        text: "Deleting a task when the user clicks Delete."
      },
      {
        id: "D",
        text: "Opening a modal specifically because the user clicked a button."
      }
    ],
    correctOptionId: "A",
    explanation: "A WebSocket connection represents ongoing synchronization with an external system and should change when its dependencies, such as room ID, change. The other actions are directly caused by user events.",
    tags: ["useEffect", "event-handlers", "WebSocket", "synchronization"]
  },

  {
    id: "react-lifecycle-effects-q-041",
    quizId: "quiz_react_lifecycle_effects",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the likely problem here?\n\nuseEffect(() => {\n  setDocumentTitle(name);\n}, []);\n\nThe component's name state can change.",
    options: [
      {
        id: "A",
        text: "The document title will not be synchronized when name changes."
      },
      {
        id: "B",
        text: "The document title automatically updates for every name."
      },
      {
        id: "C",
        text: "React cannot modify document.title."
      },
      {
        id: "D",
        text: "An empty dependency array means the effect runs every time name changes."
      }
    ],
    correctOptionId: "A",
    explanation: "Because name is used by the effect and can change, it should normally be included as a dependency so the document title can be synchronized with the latest value.",
    tags: ["useEffect", "dependencies", "document-title", "debugging"]
  },

  {
    id: "react-lifecycle-effects-q-042",
    quizId: "quiz_react_lifecycle_effects",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);\n\nWhat happens when count changes?",
    options: [
      {
        id: "A",
        text: "React runs the effect after the render containing the new count, updating the document title."
      },
      {
        id: "B",
        text: "The effect runs before React calculates the new UI."
      },
      {
        id: "C",
        text: "The effect runs only when count becomes zero."
      },
      {
        id: "D",
        text: "React prevents document.title from changing."
      }
    ],
    correctOptionId: "A",
    explanation: "count is a dependency, so after a render with a changed count, React runs the effect and synchronizes document.title with the latest value.",
    tags: ["useEffect", "dependencies", "document-title"]
  },

  {
    id: "react-lifecycle-effects-q-043",
    quizId: "quiz_react_lifecycle_effects",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the best explanation for why effects should generally not mutate React state merely to mirror props?",
    options: [
      {
        id: "A",
        text: "Duplicating props in state can create two sources of truth and synchronization problems."
      },
      {
        id: "B",
        text: "React forbids props from being used in state."
      },
      {
        id: "C",
        text: "Effects cannot read props."
      },
      {
        id: "D",
        text: "State can never contain strings from props."
      }
    ],
    correctOptionId: "A",
    explanation: "If the same information exists in both props and state, the application must keep both synchronized. When the value can simply be derived from props, duplication is often unnecessary.",
    tags: ["useEffect", "props", "state", "derived-state"]
  },

  {
    id: "react-lifecycle-effects-q-044",
    quizId: "quiz_react_lifecycle_effects",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about cleanup functions is correct?",
    options: [
      {
        id: "A",
        text: "Cleanup can run before an effect re-runs and when the component unmounts."
      },
      {
        id: "B",
        text: "Cleanup only runs when the browser tab closes."
      },
      {
        id: "C",
        text: "Cleanup always runs before the component renders."
      },
      {
        id: "D",
        text: "Cleanup is required for every useEffect."
      }
    ],
    correctOptionId: "A",
    explanation: "When an effect has a cleanup function, React uses it to stop the previous synchronization before replacing it and when the component is removed.",
    tags: ["useEffect", "cleanup", "lifecycle"]
  },

  {
    id: "react-lifecycle-effects-q-045",
    quizId: "quiz_react_lifecycle_effects",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "An effect contains this code:\n\nreturn () => {\n  console.log(\"cleanup\");\n};\n\nWhat is this returned function NOT intended to do?",
    options: [
      {
        id: "A",
        text: "Return JSX that should become part of the component's UI."
      },
      {
        id: "B",
        text: "Remove an event listener."
      },
      {
        id: "C",
        text: "Disconnect an external subscription."
      },
      {
        id: "D",
        text: "Clear a timer."
      }
    ],
    correctOptionId: "A",
    explanation: "An effect cleanup is for undoing or stopping the synchronization established by the effect. It is not a rendering mechanism and should not return JSX.",
    tags: ["useEffect", "cleanup", "rendering"]
  },

  {
    id: "react-lifecycle-effects-q-046",
    quizId: "quiz_react_lifecycle_effects",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens if a component's effect depends on userId and userId changes from 1 to 2?",
    options: [
      {
        id: "A",
        text: "React cleans up the synchronization for userId 1 and establishes the synchronization for userId 2."
      },
      {
        id: "B",
        text: "React permanently unmounts the entire application."
      },
      {
        id: "C",
        text: "React ignores the dependency change."
      },
      {
        id: "D",
        text: "React automatically resets every state variable."
      }
    ],
    correctOptionId: "A",
    explanation: "Changing a dependency means the previous synchronization is no longer current. React runs the previous cleanup and then runs the effect with the new dependency value.",
    tags: ["useEffect", "dependencies", "cleanup", "synchronization"]
  },

  {
    id: "react-lifecycle-effects-q-047",
    quizId: "quiz_react_lifecycle_effects",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer says, 'My useEffect is running twice, so React must be broken.' Which response is most accurate in a development environment using Strict Mode?",
    options: [
      {
        id: "A",
        text: "Strict Mode may intentionally perform an extra setup/cleanup cycle in development to expose missing cleanup or unsafe effect logic."
      },
      {
        id: "B",
        text: "React always runs every effect twice in production."
      },
      {
        id: "C",
        text: "Strict Mode permanently duplicates every network request in production."
      },
      {
        id: "D",
        text: "The dependency array is always ignored in Strict Mode."
      }
    ],
    correctOptionId: "A",
    explanation: "Development Strict Mode intentionally stress-tests effect setup and cleanup. Proper effects should be resilient to setup followed by cleanup followed by setup.",
    tags: ["useEffect", "StrictMode", "development", "debugging"]
  },

  {
    id: "react-lifecycle-effects-q-048",
    quizId: "quiz_react_lifecycle_effects",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which implementation best represents a well-structured subscription effect?",
    options: [
      {
        id: "A",
        text: "Connect using the current dependency values and return cleanup that disconnects exactly that connection."
      },
      {
        id: "B",
        text: "Connect on every render and never disconnect."
      },
      {
        id: "C",
        text: "Connect once with an empty dependency array even though the connection depends on changing roomId."
      },
      {
        id: "D",
        text: "Store the subscription only in JSX."
      }
    ],
    correctOptionId: "A",
    explanation: "A robust effect establishes one synchronization for its current dependencies and provides cleanup that removes that exact synchronization before the dependencies change or the component unmounts.",
    tags: ["useEffect", "subscriptions", "cleanup", "best-practices"]
  },

  {
    id: "react-lifecycle-effects-q-049",
    quizId: "quiz_react_lifecycle_effects",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which debugging approach is most useful when an effect unexpectedly runs repeatedly?",
    options: [
      {
        id: "A",
        text: "Inspect its dependency values and determine which dependency identity is changing between renders."
      },
      {
        id: "B",
        text: "Immediately remove the dependency array."
      },
      {
        id: "C",
        text: "Move every piece of code into the effect."
      },
      {
        id: "D",
        text: "Disable React rendering."
      }
    ],
    correctOptionId: "A",
    explanation: "Unexpected effect executions are often caused by dependencies changing, especially object or function identities. Inspecting the dependencies reveals what is causing the synchronization to restart.",
    tags: ["useEffect", "dependencies", "debugging", "object-identity"]
  },

  {
    id: "react-lifecycle-effects-q-050",
    quizId: "quiz_react_lifecycle_effects",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component displays a chat room and receives roomId as a prop. The component should connect to the correct room, disconnect from the previous room when roomId changes, and disconnect when the component disappears. Which implementation best matches this requirement?",
    options: [
      {
        id: "A",
        text: "useEffect(() => { const connection = createConnection(roomId); connection.connect(); return () => connection.disconnect(); }, [roomId]);"
      },
      {
        id: "B",
        text: "useEffect(() => { createConnection(roomId).connect(); }, []);"
      },
      {
        id: "C",
        text: "useEffect(() => { const connection = createConnection(roomId); connection.connect(); }, []);"
      },
      {
        id: "D",
        text: "useEffect(() => { createConnection(roomId).connect(); return () => createConnection(roomId).disconnect(); }, []);"
      }
    ],
    correctOptionId: "A",
    explanation: "roomId is the synchronization dependency. The effect creates and connects the current connection, while cleanup disconnects that exact connection before roomId changes or the component unmounts.",
    tags: ["useEffect", "dependencies", "cleanup", "subscriptions", "real-world"]
  }
];

export default reactLifecycleEffectsQuestions;