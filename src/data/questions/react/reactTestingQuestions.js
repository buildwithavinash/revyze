const reactTestingQuestions = [
  {
    id: "react-testing-q-001",
    quizId: "quiz_react_testing",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of testing a React component?",
    options: [
      { id: "A", text: "To prove that the component contains no JavaScript." },
      { id: "B", text: "To guarantee that the component can never contain bugs." },
      { id: "C", text: "To verify that the component behaves correctly under expected user and application scenarios." },
      { id: "D", text: "To replace all manual development and debugging." }
    ],
    correctOptionId: "C",
    explanation: "Component tests should give confidence that a component behaves correctly. Tests cannot prove the complete absence of bugs, but they can verify important expected behaviors and prevent regressions.",
    tags: ["testing", "components", "fundamentals"]
  },

  {
    id: "react-testing-q-002",
    quizId: "quiz_react_testing",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is React Testing Library primarily designed to encourage?",
    options: [
      { id: "A", text: "Testing React's internal Fiber implementation." },
      { id: "B", text: "Testing private component variables directly." },
      { id: "C", text: "Replacing React components with static HTML." },
      { id: "D", text: "Testing components through their observable behavior and user-facing interface." }
    ],
    correctOptionId: "D",
    explanation: "React Testing Library encourages tests that resemble how users interact with the application. The focus is generally on observable behavior rather than implementation details.",
    tags: ["React-Testing-Library", "testing-philosophy", "behavior"]
  },

  {
    id: "react-testing-q-003",
    quizId: "quiz_react_testing",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which function is commonly used to render a React component in React Testing Library?",
    options: [
      { id: "A", text: "render" },
      { id: "B", text: "mountComponent" },
      { id: "C", text: "display" },
      { id: "D", text: "startReact" }
    ],
    correctOptionId: "A",
    explanation: "React Testing Library provides the `render` function to render a React element into a testing environment so that its DOM and behavior can be examined.",
    tags: ["React-Testing-Library", "render", "components"]
  },

  {
    id: "react-testing-q-004",
    quizId: "quiz_react_testing",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which library is commonly used alongside React Testing Library for assertions and test execution in a Jest-based setup?",
    options: [
      { id: "A", text: "Webpack only" },
      { id: "B", text: "Jest" },
      { id: "C", text: "ESLint only" },
      { id: "D", text: "Prettier only" }
    ],
    correctOptionId: "B",
    explanation: "Jest provides the test runner, mocking utilities, and assertion capabilities commonly used with React Testing Library. React Testing Library focuses primarily on rendering and querying the UI.",
    tags: ["Jest", "React-Testing-Library", "testing-tools"]
  },

  {
    id: "react-testing-q-005",
    quizId: "quiz_react_testing",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which Jest function is commonly used to define an individual test?",
    options: [
      { id: "A", text: "componentTest" },
      { id: "B", text: "verifyComponent" },
      { id: "C", text: "test" },
      { id: "D", text: "assertTest" }
    ],
    correctOptionId: "C",
    explanation: "Jest provides `test` as a function for defining an individual test case. `it` is also commonly available as an equivalent style of test declaration.",
    tags: ["Jest", "test", "fundamentals"]
  },

  {
    id: "react-testing-q-006",
    quizId: "quiz_react_testing",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `expect(value).toBe(true)` primarily communicate?",
    options: [
      { id: "A", text: "The test converts value into a boolean." },
      { id: "B", text: "The test sets value to true." },
      { id: "C", text: "The test renders a boolean element." },
      { id: "D", text: "The test expects value to be exactly the boolean true." }
    ],
    correctOptionId: "D",
    explanation: "`expect` creates an assertion target and `toBe(true)` checks that the received value is exactly the boolean `true` using Jest's strict identity-style comparison.",
    tags: ["Jest", "expect", "assertions"]
  },

  {
    id: "react-testing-q-007",
    quizId: "quiz_react_testing",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which query is generally preferred when locating a button based on the text accessible to users?",
    options: [
      { id: "A", text: "getByRole with an appropriate accessible name." },
      { id: "B", text: "getByInternalReactId." },
      { id: "C", text: "getByComponentInstance." },
      { id: "D", text: "getByFiberNode." }
    ],
    correctOptionId: "A",
    explanation: "React Testing Library encourages accessible, user-facing queries. `getByRole` can identify a button by its semantic role and accessible name, making the test more representative of user interaction.",
    tags: ["React-Testing-Library", "queries", "getByRole", "accessibility"]
  },

  {
    id: "react-testing-q-008",
    quizId: "quiz_react_testing",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Consider:\n\n<button>Save</button>\n\nWhich query best represents the user-facing way to find this element?",
    options: [
      { id: "A", text: "screen.getByReactType('button')" },
      { id: "B", text: "screen.getByRole('button', { name: 'Save' })" },
      { id: "C", text: "screen.getByClass('button')" },
      { id: "D", text: "screen.getByFiber('Save')" }
    ],
    correctOptionId: "B",
    explanation: "The button has a semantic button role and an accessible name of Save. `getByRole` directly expresses how the element can be identified from its accessible interface.",
    tags: ["getByRole", "queries", "accessibility"]
  },

  {
    id: "react-testing-q-009",
    quizId: "quiz_react_testing",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the key difference between `getByRole` and `queryByRole` when an element is absent?",
    options: [
      { id: "A", text: "getByRole returns null, while queryByRole throws an error." },
      { id: "B", text: "Both always throw errors." },
      { id: "C", text: "getByRole throws an error, while queryByRole returns null." },
      { id: "D", text: "Both always return undefined." }
    ],
    correctOptionId: "C",
    explanation: "`getBy...` queries expect an element to exist and throw when it cannot find one. `queryBy...` returns null when no matching element exists, which is useful for asserting absence.",
    tags: ["queries", "getByRole", "queryByRole"]
  },

  {
    id: "react-testing-q-010",
    quizId: "quiz_react_testing",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which query is most appropriate when testing that an element is NOT currently present in the DOM?",
    options: [
      { id: "A", text: "getByRole" },
      { id: "B", text: "getByText" },
      { id: "C", text: "getByTestId" },
      { id: "D", text: "queryByRole" }
    ],
    correctOptionId: "D",
    explanation: "When testing absence, a `queryBy...` query is useful because it returns null instead of throwing when no matching element exists.",
    tags: ["queryByRole", "absence", "queries"]
  },

  {
    id: "react-testing-q-011",
    quizId: "quiz_react_testing",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `screen` provide in React Testing Library?",
    options: [
      { id: "A", text: "Convenient queries against the rendered document." },
      { id: "B", text: "Access to React's internal state." },
      { id: "C", text: "Direct access to component instances." },
      { id: "D", text: "A replacement for the browser." }
    ],
    correctOptionId: "A",
    explanation: "The `screen` object provides queries against the document rendered by the test. It makes tests concise and avoids repeatedly extracting query functions from the render result.",
    tags: ["screen", "React-Testing-Library", "queries"]
  },

  {
    id: "react-testing-q-012",
    quizId: "quiz_react_testing",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which query would be appropriate for visible text such as `<h1>Dashboard</h1>`?",
    options: [
      { id: "A", text: "getByState('Dashboard')" },
      { id: "B", text: "getByText('Dashboard')" },
      { id: "C", text: "getByComponent('h1')" },
      { id: "D", text: "getByFiberText('Dashboard')" }
    ],
    correctOptionId: "B",
    explanation: "`getByText` searches for elements based on their rendered text content. It is useful when the visible text itself is the meaningful thing being tested.",
    tags: ["getByText", "queries", "text"]
  },

  {
    id: "react-testing-q-013",
    quizId: "quiz_react_testing",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When should `getByTestId` generally be considered?",
    options: [
      { id: "A", text: "For every element in every test." },
      { id: "B", text: "Only for buttons." },
      { id: "C", text: "When an appropriate user-facing or semantic query is not practical." },
      { id: "D", text: "Only for elements containing text." }
    ],
    correctOptionId: "C",
    explanation: "Testing Library generally favors queries that reflect how users interact with the UI. Test IDs can still be useful when there is no suitable semantic or user-facing query.",
    tags: ["getByTestId", "queries", "best-practices"]
  },

  {
    id: "react-testing-q-014",
    quizId: "quiz_react_testing",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is relying heavily on CSS class selectors often undesirable in React component tests?",
    options: [
      { id: "A", text: "CSS classes cannot be queried in JavaScript." },
      { id: "B", text: "React automatically removes CSS classes during testing." },
      { id: "C", text: "CSS classes are inaccessible to browsers." },
      { id: "D", text: "CSS classes are implementation details and may change without changing user-visible behavior." }
    ],
    correctOptionId: "D",
    explanation: "A test coupled to CSS class names can fail because of harmless styling refactors. User-facing queries generally make tests more resilient to implementation changes.",
    tags: ["testing-philosophy", "queries", "implementation-details"]
  },

  {
    id: "react-testing-q-015",
    quizId: "quiz_react_testing",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes `userEvent` in React Testing Library-based tests?",
    options: [
      { id: "A", text: "It provides higher-level simulations of user interactions such as clicking and typing." },
      { id: "B", text: "It directly changes React component state." },
      { id: "C", text: "It replaces Jest assertions." },
      { id: "D", text: "It renders components without React." }
    ],
    correctOptionId: "A",
    explanation: "`userEvent` provides interaction utilities intended to more closely model realistic user actions. Tests can therefore verify behavior resulting from interactions rather than directly manipulating implementation state.",
    tags: ["userEvent", "interactions", "testing"]
  },

  {
    id: "react-testing-q-016",
    quizId: "quiz_react_testing",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is testing a button by clicking it preferable to directly changing its React state in many cases?",
    options: [
      { id: "A", text: "React state cannot be changed programmatically." },
      { id: "B", text: "It tests the behavior through the same interaction path a real user would use." },
      { id: "C", text: "Direct state changes always crash tests." },
      { id: "D", text: "Button clicks automatically test the entire application." }
    ],
    correctOptionId: "B",
    explanation: "Behavior-oriented tests interact with the UI rather than bypassing it. This helps verify that event handlers, state updates, and resulting UI changes work together correctly.",
    tags: ["userEvent", "behavior-testing", "state"]
  },

  {
    id: "react-testing-q-017",
    quizId: "quiz_react_testing",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\nconst button = screen.getByRole('button', { name: 'Increment' });\nawait user.click(button);\n\nWhat is the purpose of this interaction?",
    options: [
      { id: "A", text: "To directly set the component's state to one." },
      { id: "B", text: "To bypass the button's event handler." },
      { id: "C", text: "To simulate a user activating the Increment button and then allow the component to respond." },
      { id: "D", text: "To modify the test runner's configuration." }
    ],
    correctOptionId: "C",
    explanation: "The interaction activates the actual rendered button. Any event handler and resulting state or DOM updates can then be observed by the test.",
    tags: ["userEvent", "click", "interactions"]
  },

  {
    id: "react-testing-q-018",
    quizId: "quiz_react_testing",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are asynchronous queries such as `findByRole` useful?",
    options: [
      { id: "A", text: "They make every query synchronous." },
      { id: "B", text: "They access React's internal scheduler directly." },
      { id: "C", text: "They permanently disable test timeouts." },
      { id: "D", text: "They wait for an element to appear asynchronously before failing." }
    ],
    correctOptionId: "D",
    explanation: "`findBy...` queries are designed for elements that may appear after asynchronous work. They wait for the element to appear rather than immediately failing like a synchronous get query.",
    tags: ["findByRole", "async", "queries"]
  },

  {
    id: "react-testing-q-019",
    quizId: "quiz_react_testing",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A component initially displays `Loading...` and later displays `Dashboard`. Which query is most appropriate for waiting for Dashboard to appear?",
    options: [
      { id: "A", text: "findByText('Dashboard')" },
      { id: "B", text: "getByText('Dashboard') immediately before the async operation completes" },
      { id: "C", text: "queryByText('Dashboard') once without waiting" },
      { id: "D", text: "getByState('Dashboard')" }
    ],
    correctOptionId: "A",
    explanation: "Because Dashboard appears asynchronously, `findByText` can wait for the matching element to appear instead of checking only the initial DOM state.",
    tags: ["async", "findByText", "loading-states"]
  },

  {
    id: "react-testing-q-020",
    quizId: "quiz_react_testing",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of `waitFor`?",
    options: [
      { id: "A", text: "Render a component repeatedly forever." },
      { id: "B", text: "Wait for an assertion or condition to become true after asynchronous changes." },
      { id: "C", text: "Replace every synchronous query." },
      { id: "D", text: "Disable React state updates." }
    ],
    correctOptionId: "B",
    explanation: "`waitFor` repeatedly executes a callback until it succeeds or times out. It is useful when the desired condition does not map cleanly to a specific `findBy...` query.",
    tags: ["waitFor", "async", "assertions"]
  },

  {
    id: "react-testing-q-021",
    quizId: "quiz_react_testing",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which matcher is appropriate for checking that an element is present in the document?",
    options: [
      { id: "A", text: "toBeRenderedByReact" },
      { id: "B", text: "toExistInFiber" },
      { id: "C", text: "toBeInTheDocument" },
      { id: "D", text: "toBeMountedByDOM" }
    ],
    correctOptionId: "C",
    explanation: "`toBeInTheDocument` is a DOM-oriented matcher commonly provided through the Testing Library Jest DOM matchers. It expresses the intended assertion clearly.",
    tags: ["jest-dom", "assertions", "DOM"]
  },

  {
    id: "react-testing-q-022",
    quizId: "quiz_react_testing",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `toHaveTextContent` allow a test to verify?",
    options: [
      { id: "A", text: "That an element has a specific React state variable." },
      { id: "B", text: "That an element has a particular component class." },
      { id: "C", text: "That a component has a specific Fiber node." },
      { id: "D", text: "That an element contains expected text content." }
    ],
    correctOptionId: "D",
    explanation: "`toHaveTextContent` checks the text content of a DOM element, allowing tests to verify what users can see without inspecting React's internal state.",
    tags: ["jest-dom", "toHaveTextContent", "assertions"]
  },

  {
    id: "react-testing-q-023",
    quizId: "quiz_react_testing",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which assertion is most appropriate for checking that a button is disabled?",
    options: [
      { id: "A", text: "expect(button).toBeDisabled()" },
      { id: "B", text: "expect(button).toHaveState('disabled')" },
      { id: "C", text: "expect(button).isDisabled()" },
      { id: "D", text: "expect(button).toBeReactDisabled()" }
    ],
    correctOptionId: "A",
    explanation: "`toBeDisabled` expresses the DOM behavior directly. It checks whether the element is disabled according to the relevant HTML semantics.",
    tags: ["jest-dom", "toBeDisabled", "forms"]
  },

  {
    id: "react-testing-q-024",
    quizId: "quiz_react_testing",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which test best follows behavior-oriented testing?",
    options: [
      { id: "A", text: "Inspect the component's private `isSaved` state variable." },
      { id: "B", text: "Click the Save button and assert that a success message appears." },
      { id: "C", text: "Check the exact internal function name used by the component." },
      { id: "D", text: "Assert that React created a specific Fiber structure." }
    ],
    correctOptionId: "B",
    explanation: "The first test verifies observable behavior from a user's perspective. The other approaches couple the test to implementation details that users do not directly observe.",
    tags: ["behavior-testing", "testing-philosophy", "best-practices"]
  },

  {
    id: "react-testing-q-025",
    quizId: "quiz_react_testing",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a mock function in Jest useful for?",
    options: [
      { id: "A", text: "Automatically fixing production bugs." },
      { id: "B", text: "Rendering React components without JSX." },
      { id: "C", text: "Replacing or observing a function so a test can verify how it was called." },
      { id: "D", text: "Replacing all DOM elements." }
    ],
    correctOptionId: "C",
    explanation: "Jest mock functions can record calls, arguments, return values, and other information. This is useful when testing whether a callback or dependency was invoked correctly.",
    tags: ["Jest", "mock-functions", "mocks"]
  },

  {
    id: "react-testing-q-026",
    quizId: "quiz_react_testing",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\nconst onSave = jest.fn();\nrender(<Form onSave={onSave} />);\n\nWhy might `jest.fn()` be useful here?",
    options: [
      { id: "A", text: "It automatically submits the form." },
      { id: "B", text: "It replaces React's form state." },
      { id: "C", text: "It guarantees that onSave performs its production implementation." },
      { id: "D", text: "The test can later verify whether onSave was called and with which arguments." }
    ],
    correctOptionId: "D",
    explanation: "`jest.fn()` creates a mock function that records calls. A test can therefore assert that the form invoked its callback with the expected data.",
    tags: ["Jest", "jest.fn", "callbacks", "forms"]
  },

  {
    id: "react-testing-q-027",
    quizId: "quiz_react_testing",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which assertion checks that a mock function was called exactly once?",
    options: [
      { id: "A", text: "expect(mockFn).toHaveBeenCalledTimes(1)" },
      { id: "B", text: "expect(mockFn).toCallOnce()" },
      { id: "C", text: "expect(mockFn).calledOnce()" },
      { id: "D", text: "expect(mockFn).toHaveCalls(1)" }
    ],
    correctOptionId: "A",
    explanation: "`toHaveBeenCalledTimes(1)` checks the recorded call count of a Jest mock function.",
    tags: ["Jest", "mock-functions", "assertions"]
  },

  {
    id: "react-testing-q-028",
    quizId: "quiz_react_testing",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which assertion checks that a mock was called with a specific argument?",
    options: [
      { id: "A", text: "toHaveArgumentOnly" },
      { id: "B", text: "toHaveBeenCalledWith" },
      { id: "C", text: "toReceiveWith" },
      { id: "D", text: "toHavePassedValue" }
    ],
    correctOptionId: "B",
    explanation: "`toHaveBeenCalledWith` verifies that the mock function was called with the specified arguments.",
    tags: ["Jest", "mock-functions", "assertions"]
  },

  {
    id: "react-testing-q-029",
    quizId: "quiz_react_testing",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is mocking an external API dependency useful for in a component test?",
    options: [
      { id: "A", text: "Guaranteeing that the real API is working." },
      { id: "B", text: "Making network latency identical to production." },
      { id: "C", text: "Making the test deterministic and allowing controlled success or failure responses." },
      { id: "D", text: "Testing the external server's database directly." }
    ],
    correctOptionId: "C",
    explanation: "Mocking external dependencies lets a test control responses without relying on a real network or external service. This improves determinism and allows different scenarios to be tested.",
    tags: ["mocking", "API", "deterministic-tests"]
  },

  {
    id: "react-testing-q-030",
    quizId: "quiz_react_testing",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A component shows `Loading...`, calls an API, and then renders either data or an error. Which test strategy provides useful coverage?",
    options: [
      { id: "A", text: "Only test the initial Loading text." },
      { id: "B", text: "Only test the API function's source code." },
      { id: "C", text: "Only test the successful response because errors are impossible." },
      { id: "D", text: "Test the loading state, successful response, and failure response as separate behavioral scenarios." }
    ],
    correctOptionId: "D",
    explanation: "Each state represents meaningful user-visible behavior. Testing loading, success, and failure scenarios gives stronger coverage of the component's behavior.",
    tags: ["API", "async", "loading", "error-handling"]
  },

  {
    id: "react-testing-q-031",
    quizId: "quiz_react_testing",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should tests usually avoid asserting the exact implementation sequence of internal React state updates?",
    options: [
      { id: "A", text: "Internal implementation can change while the externally observable behavior remains correct." },
      { id: "B", text: "React state cannot be tested." },
      { id: "C", text: "Jest cannot execute React code." },
      { id: "D", text: "State updates are never observable." }
    ],
    correctOptionId: "A",
    explanation: "Implementation-focused assertions make tests brittle. If the component is refactored without changing behavior, such tests may fail unnecessarily.",
    tags: ["testing-philosophy", "state", "implementation-details"]
  },

  {
    id: "react-testing-q-032",
    quizId: "quiz_react_testing",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main purpose of `beforeEach` in Jest?",
    options: [
      { id: "A", text: "Run production code before every browser request." },
      { id: "B", text: "Run setup logic before each test in the relevant scope." },
      { id: "C", text: "Run a test only once." },
      { id: "D", text: "Automatically retry failed assertions forever." }
    ],
    correctOptionId: "B",
    explanation: "`beforeEach` is useful for repeated test setup, such as creating fresh mocks or rendering common test fixtures before each test.",
    tags: ["Jest", "beforeEach", "test-setup"]
  },

  {
    id: "react-testing-q-033",
    quizId: "quiz_react_testing",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is test isolation important?",
    options: [
      { id: "A", text: "It makes tests depend on execution order." },
      { id: "B", text: "It prevents tests from using mocks." },
      { id: "C", text: "Each test should ideally be able to run independently without relying on state or side effects left by another test." },
      { id: "D", text: "It requires every test to use a different framework." }
    ],
    correctOptionId: "C",
    explanation: "Independent tests are easier to understand and more reliable. Shared mutable state can cause one test to influence another and create order-dependent failures.",
    tags: ["test-isolation", "Jest", "best-practices"]
  },

  {
    id: "react-testing-q-034",
    quizId: "quiz_react_testing",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A test passes when run alone but fails when the entire test file runs. What is a likely cause?",
    options: [
      { id: "A", text: "React automatically changes behavior based on test count." },
      { id: "B", text: "Jest cannot run multiple tests." },
      { id: "C", text: "The browser deletes all components after the first test." },
      { id: "D", text: "State, mocks, or other side effects are leaking between tests." }
    ],
    correctOptionId: "D",
    explanation: "Test-order-dependent failures often indicate inadequate cleanup or shared mutable state. Tests should isolate their setup and reset relevant mocks and state.",
    tags: ["test-isolation", "debugging", "Jest"]
  },

  {
    id: "react-testing-q-035",
    quizId: "quiz_react_testing",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common reason to use `cleanup` behavior between React Testing Library tests?",
    options: [
      { id: "A", text: "To prevent DOM rendered by one test from interfering with another test." },
      { id: "B", text: "To delete production source files." },
      { id: "C", text: "To reset the user's browser." },
      { id: "D", text: "To remove React from the project." }
    ],
    correctOptionId: "A",
    explanation: "Tests should not accidentally interact with DOM left behind by previous tests. Modern React Testing Library setups generally handle cleanup automatically through the testing environment.",
    tags: ["cleanup", "test-isolation", "DOM"]
  },

  {
    id: "react-testing-q-036",
    quizId: "quiz_react_testing",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about testing custom Hooks is most accurate?",
    options: [
      { id: "A", text: "Hooks can only be tested by reading their source code as strings." },
      { id: "B", text: "A custom Hook can be tested by exercising its observable behavior in an appropriate React rendering environment." },
      { id: "C", text: "Hooks cannot be tested." },
      { id: "D", text: "Hooks must always be converted into class components before testing." }
    ],
    correctOptionId: "B",
    explanation: "Hooks depend on React's rendering rules, so they need to be exercised within an appropriate React test environment. Their resulting behavior can then be asserted.",
    tags: ["custom-hooks", "testing", "Hooks"]
  },

  {
    id: "react-testing-q-037",
    quizId: "quiz_react_testing",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why shouldn't a test call a Hook directly like a normal JavaScript function when that Hook uses React state?",
    options: [
      { id: "A", text: "JavaScript cannot call functions beginning with use." },
      { id: "B", text: "Hooks only work inside class components." },
      { id: "C", text: "Hooks depend on React's rendering and Hook execution rules." },
      { id: "D", text: "Jest blocks all functions beginning with use." }
    ],
    correctOptionId: "C",
    explanation: "Hooks such as useState and useEffect rely on React's Hook dispatcher and rendering lifecycle. They must be exercised in a valid React component or Hook-testing environment.",
    tags: ["Hooks", "custom-hooks", "testing"]
  },

  {
    id: "react-testing-q-038",
    quizId: "quiz_react_testing",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A form contains a label `Email` associated with an input. Which query most closely represents the user's relationship with that field?",
    options: [
      { id: "A", text: "getByReactState('Email')" },
      { id: "B", text: "getByClassName('email-input')" },
      { id: "C", text: "getByFiber('Email')" },
      { id: "D", text: "getByLabelText('Email')" }
    ],
    correctOptionId: "D",
    explanation: "`getByLabelText` uses the accessible relationship between a label and its associated form control, making it a useful query for form inputs.",
    tags: ["forms", "getByLabelText", "accessibility"]
  },

  {
    id: "react-testing-q-039",
    quizId: "quiz_react_testing",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which query is particularly useful for selecting a form input by its associated label?",
    options: [
      { id: "A", text: "getByLabelText" },
      { id: "B", text: "getByState" },
      { id: "C", text: "getByHook" },
      { id: "D", text: "getByComponentInstance" }
    ],
    correctOptionId: "A",
    explanation: "`getByLabelText` is designed for form controls that have accessible labels, making it both user-oriented and accessibility-aware.",
    tags: ["getByLabelText", "forms", "accessibility"]
  },

  {
    id: "react-testing-q-040",
    quizId: "quiz_react_testing",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A test needs to verify that an error message appears after submitting invalid form data. Which approach is strongest?",
    options: [
      { id: "A", text: "Set the component's internal error state directly." },
      { id: "B", text: "Fill the form with invalid data, submit it through the UI, then assert that the error message appears." },
      { id: "C", text: "Modify the DOM manually before asserting." },
      { id: "D", text: "Inspect the source code for the validation function." }
    ],
    correctOptionId: "B",
    explanation: "This test follows the real user path and verifies the resulting behavior. It covers the interaction, validation logic, state update, and visible error together.",
    tags: ["forms", "userEvent", "validation", "behavior-testing"]
  },

  {
    id: "react-testing-q-041",
    quizId: "quiz_react_testing",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which scenario is a good candidate for a Jest mock function?",
    options: [
      { id: "A", text: "Checking whether a CSS declaration has the expected spelling." },
      { id: "B", text: "Checking whether the browser supports JavaScript." },
      { id: "C", text: "Verifying that a child component calls an onSubmit callback with the expected data." },
      { id: "D", text: "Verifying the exact internal Fiber tree." }
    ],
    correctOptionId: "C",
    explanation: "A mock callback allows the test to observe whether the component invokes the callback and what arguments it provides.",
    tags: ["Jest", "mock-functions", "callbacks", "forms"]
  },

  {
    id: "react-testing-q-042",
    quizId: "quiz_react_testing",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the benefit of testing an error state when an API request fails?",
    options: [
      { id: "A", text: "It guarantees that the API can never fail in production." },
      { id: "B", text: "It eliminates the need for error handling." },
      { id: "C", text: "It tests only CSS rendering." },
      { id: "D", text: "It verifies that users receive appropriate feedback when an expected external operation fails." }
    ],
    correctOptionId: "D",
    explanation: "Failure states are part of the component's user-facing behavior. Testing them helps prevent regressions where users might otherwise encounter blank or broken UI.",
    tags: ["error-handling", "API", "async", "user-experience"]
  },

  {
    id: "react-testing-q-043",
    quizId: "quiz_react_testing",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A test uses `getByRole('button', { name: 'Submit' })`. The button's visible text changes from Submit to Send. What is likely to happen?",
    options: [
      { id: "A", text: "The test may fail because its expected accessible name no longer matches." },
      { id: "B", text: "The test always passes because roles ignore names." },
      { id: "C", text: "React automatically updates the test expectation." },
      { id: "D", text: "Jest ignores all DOM text changes." }
    ],
    correctOptionId: "A",
    explanation: "The accessible name is part of the query. If the user-facing name changes, the test should generally be updated if the new behavior is intentional.",
    tags: ["getByRole", "accessible-name", "queries"]
  },

  {
    id: "react-testing-q-044",
    quizId: "quiz_react_testing",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which test is more resilient to a refactor that changes a button's CSS class but keeps its behavior unchanged?",
    options: [
      { id: "A", text: "A test that requires the exact CSS class name." },
      { id: "B", text: "A test that finds the button by role and accessible name." },
      { id: "C", text: "A test that checks the internal component function name." },
      { id: "D", text: "A test that checks a private state variable." }
    ],
    correctOptionId: "B",
    explanation: "The role and accessible name represent user-facing semantics. Changing styling classes should not affect such a test if the behavior remains unchanged.",
    tags: ["queries", "getByRole", "test-resilience"]
  },

  {
    id: "react-testing-q-045",
    quizId: "quiz_react_testing",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A test checks that clicking `Add to Cart` causes the cart count to change from 0 to 1. What kind of test is this primarily?",
    options: [
      { id: "A", text: "A test of React's internal implementation." },
      { id: "B", text: "A CSS parser test." },
      { id: "C", text: "A behavior-oriented component interaction test." },
      { id: "D", text: "A compiler test." }
    ],
    correctOptionId: "C",
    explanation: "The test performs a user interaction and verifies an observable UI change. It focuses on behavior rather than internal implementation.",
    tags: ["behavior-testing", "userEvent", "interactions"]
  },

  {
    id: "react-testing-q-046",
    quizId: "quiz_react_testing",
    order: 46,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A component updates its UI after an asynchronous Promise resolves. Which strategy is most appropriate?",
    options: [
      { id: "A", text: "Immediately assert the final UI before the Promise resolves." },
      { id: "B", text: "Read the component's private Promise variable." },
      { id: "C", text: "Use a fixed random delay in every test." },
      { id: "D", text: "Await an appropriate asynchronous query or condition before making the final assertion." }
    ],
    correctOptionId: "D",
    explanation: "Tests involving asynchronous UI changes should wait for the expected behavior rather than assuming the update has already happened. `findBy...` or `waitFor` can be appropriate depending on the scenario.",
    tags: ["async", "Promises", "findBy", "waitFor"]
  },

  {
    id: "react-testing-q-047",
    quizId: "quiz_react_testing",
    order: 47,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can fixed delays such as `await new Promise(resolve => setTimeout(resolve, 1000))` be a poor general testing strategy?",
    options: [
      { id: "A", text: "They can make tests unnecessarily slow and still fail to guarantee that the expected condition has occurred." },
      { id: "B", text: "JavaScript does not support setTimeout." },
      { id: "C", text: "React ignores all timers." },
      { id: "D", text: "Jest automatically converts all timers into errors." }
    ],
    correctOptionId: "A",
    explanation: "A fixed delay guesses how long an operation will take. Condition-based waiting is generally more reliable because the test waits for the behavior it actually cares about.",
    tags: ["async", "waitFor", "testing-best-practices"]
  },

  {
    id: "react-testing-q-048",
    quizId: "quiz_react_testing",
    order: 48,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A developer writes a test that directly calls the component's internal `handleSubmit()` function. What is the main concern?",
    options: [
      { id: "A", text: "React does not allow event handlers to be functions." },
      { id: "B", text: "The test is coupled to an implementation detail instead of verifying the behavior users trigger through the UI." },
      { id: "C", text: "Jest cannot execute JavaScript functions." },
      { id: "D", text: "The function will always return undefined." }
    ],
    correctOptionId: "B",
    explanation: "Testing through the UI can verify that the event wiring and component behavior work together. Calling internal functions directly can bypass important parts of that behavior.",
    tags: ["implementation-details", "behavior-testing", "event-handlers"]
  },

  {
    id: "react-testing-q-049",
    quizId: "quiz_react_testing",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component fetches users on mount. The test mocks the API, renders the component, expects `Loading...`, waits for the users to appear, and finally verifies the list. Why is this test valuable?",
    options: [
      { id: "A", text: "It proves that the real API server is available." },
      { id: "B", text: "It verifies React's internal Fiber implementation." },
      { id: "C", text: "It verifies the component's observable lifecycle from initial loading through asynchronous success." },
      { id: "D", text: "It guarantees that network latency will match production." }
    ],
    correctOptionId: "C",
    explanation: "The test covers meaningful user-visible states while controlling the external dependency. It verifies that the component transitions from loading to successful content correctly.",
    tags: ["async", "API", "loading", "component-testing"]
  },

  {
    id: "react-testing-q-050",
    quizId: "quiz_react_testing",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are testing a production React form. It contains labeled inputs, client-side validation, a submit callback, loading state, success feedback, and server errors. Which testing strategy provides the strongest behavioral coverage?",
    options: [
      { id: "A", text: "Inspect the component's private state variables and assert their exact values after every render." },
      { id: "B", text: "Test only that the component renders without throwing an exception." },
      { id: "C", text: "Mock every React Hook and verify that each Hook was called in a specific internal order." },
      { id: "D", text: "Interact with the labeled fields and submit button as a user would, verify validation errors for invalid input, verify the callback or controlled API behavior for valid input, and test loading, success, and failure states." }
    ],
    correctOptionId: "D",
    explanation: "A strong component test focuses on observable behavior. It exercises the form through accessible controls and realistic interactions, then verifies the important user-facing states and outcomes. This provides useful regression protection without unnecessarily coupling the test to implementation details.",
    tags: ["forms", "behavior-testing", "userEvent", "validation", "async", "error-handling"]
  }
];

export default reactTestingQuestions;