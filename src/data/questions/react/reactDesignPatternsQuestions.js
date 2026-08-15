const reactDesignPatternsQuestions = [
  {
    id: "react-patterns-q-001",
    quizId: "quiz_react_patterns",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary idea behind composition in React?",
    options: [
      { id: "A", text: "Build complex UI by combining smaller components and passing behavior or content between them." },
      { id: "B", text: "Make every component inherit from a common React base class." },
      { id: "C", text: "Move all component logic into global state." },
      { id: "D", text: "Prevent components from receiving children." }
    ],
    correctOptionId: "A",
    explanation: "Composition is a core React design approach. Instead of relying heavily on inheritance, components can be combined and customized through props, children, and other composition techniques.",
    tags: ["composition", "components", "architecture"]
  },

  {
    id: "react-patterns-q-002",
    quizId: "quiz_react_patterns",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which React feature is most directly associated with component composition?",
    options: [
      { id: "A", text: "The children prop." },
      { id: "B", text: "The key attribute only." },
      { id: "C", text: "The CSS className attribute only." },
      { id: "D", text: "The browser's DOMContentLoaded event." }
    ],
    correctOptionId: "A",
    explanation: "The children prop allows a component to receive arbitrary JSX content from its parent, making it possible to create flexible wrapper and layout components.",
    tags: ["composition", "children", "props"]
  },

  {
    id: "react-patterns-q-003",
    quizId: "quiz_react_patterns",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a Higher-Order Component (HOC)?",
    options: [
      { id: "A", text: "A function that takes a component and returns an enhanced component." },
      { id: "B", text: "A component that must always be rendered above the root component." },
      { id: "C", text: "A component that can only contain other components." },
      { id: "D", text: "A special React component that replaces Hooks." }
    ],
    correctOptionId: "A",
    explanation: "A Higher-Order Component is a reusable abstraction expressed as a function. It receives a component and returns another component with additional behavior or data.",
    tags: ["HOC", "higher-order-components", "composition"]
  },

  {
    id: "react-patterns-q-004",
    quizId: "quiz_react_patterns",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement correctly represents the shape of a typical HOC?",
    options: [
      { id: "A", text: "const Enhanced = withFeature(Component);" },
      { id: "B", text: "const Enhanced = Component.withFeature();" },
      { id: "C", text: "const Enhanced = new Component(withFeature);" },
      { id: "D", text: "const Enhanced = <withFeature Component />;" }
    ],
    correctOptionId: "A",
    explanation: "A HOC is conventionally a function that receives a component and returns a new component. The resulting component can then be rendered like any other component.",
    tags: ["HOC", "higher-order-components", "syntax"]
  },

  {
    id: "react-patterns-q-005",
    quizId: "quiz_react_patterns",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of a render prop pattern?",
    options: [
      { id: "A", text: "Allow a component to share behavior while letting the consumer decide what UI to render." },
      { id: "B", text: "Prevent a component from rendering children." },
      { id: "C", text: "Replace all props with global variables." },
      { id: "D", text: "Make every component a class component." }
    ],
    correctOptionId: "A",
    explanation: "A render prop is typically a function passed as a prop. The component owns reusable behavior or state and calls that function to let the consumer determine the resulting UI.",
    tags: ["render-props", "composition", "reusable-logic"]
  },

  {
    id: "react-patterns-q-006",
    quizId: "quiz_react_patterns",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which example demonstrates a render prop?",
    options: [
      {
        id: "A",
        text: "<MouseTracker render={(position) => <Cursor x={position.x} y={position.y} />} />"
      },
      {
        id: "B",
        text: "<MouseTracker color=\"red\" />"
      },
      {
        id: "C",
        text: "<MouseTracker />"
      },
      {
        id: "D",
        text: "<MouseTracker onClick=\"track\" />"
      }
    ],
    correctOptionId: "A",
    explanation: "The render prop is the render function passed through the render prop. The MouseTracker can provide reusable mouse-tracking behavior while the consumer controls the UI.",
    tags: ["render-props", "functions-as-props", "composition"]
  },

  {
    id: "react-patterns-q-007",
    quizId: "quiz_react_patterns",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a compound component pattern?",
    options: [
      { id: "A", text: "A group of components designed to work together through shared state or context while exposing a flexible declarative API." },
      { id: "B", text: "Several unrelated components placed in one file." },
      { id: "C", text: "A single component containing hundreds of lines of JSX." },
      { id: "D", text: "A component that always renders another React application." }
    ],
    correctOptionId: "A",
    explanation: "Compound components provide a coordinated set of components such as Tabs and TabList. The parent component manages shared behavior while child components participate in that behavior.",
    tags: ["compound-components", "composition", "context"]
  },

  {
    id: "react-patterns-q-008",
    quizId: "quiz_react_patterns",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which API is commonly useful for implementing compound components that need to share internal state?",
    options: [
      { id: "A", text: "Context." },
      { id: "B", text: "setTimeout only." },
      { id: "C", text: "document.write." },
      { id: "D", text: "localStorage only." }
    ],
    correctOptionId: "A",
    explanation: "Context can allow related compound components to access shared state without requiring the parent to manually pass the same data through every level.",
    tags: ["compound-components", "context", "shared-state"]
  },

  {
    id: "react-patterns-q-009",
    quizId: "quiz_react_patterns",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider this API:\n\n<Tabs>\n  <Tabs.List />\n  <Tabs.Panel />\n</Tabs>\n\nWhat pattern does this most closely represent?",
    options: [
      { id: "A", text: "Compound components." },
      { id: "B", text: "Higher-order component." },
      { id: "C", text: "Render prop only." },
      { id: "D", text: "Inheritance-based component design." }
    ],
    correctOptionId: "A",
    explanation: "Tabs, Tabs.List, Tabs.Tab, and Tabs.Panel are a classic compound-component API. The components form a coordinated family while giving the consumer a declarative structure.",
    tags: ["compound-components", "Tabs", "composition"]
  },

  {
    id: "react-patterns-q-010",
    quizId: "quiz_react_patterns",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one major advantage of composition over creating a huge configurable component?",
    options: [
      { id: "A", text: "Consumers can combine smaller pieces in different ways without adding an ever-growing list of configuration props." },
      { id: "B", text: "Composition eliminates the need for props." },
      { id: "C", text: "Composition guarantees fewer components." },
      { id: "D", text: "Composition prevents reusable components." }
    ],
    correctOptionId: "A",
    explanation: "Highly configurable components can become difficult to understand as boolean and mode props multiply. Composition lets consumers construct the desired UI from smaller pieces.",
    tags: ["composition", "component-design", "API-design"]
  },

  {
    id: "react-patterns-q-011",
    quizId: "quiz_react_patterns",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is a common problem with Higher-Order Components?",
    options: [
      { id: "A", text: "Multiple HOCs can create wrapper nesting that makes component trees and debugging harder to understand." },
      { id: "B", text: "HOCs cannot accept components as arguments." },
      { id: "C", text: "HOCs cannot return React components." },
      { id: "D", text: "HOCs automatically mutate the original component." }
    ],
    correctOptionId: "A",
    explanation: "HOCs can compose reusable behavior, but deeply wrapping a component with multiple HOCs can produce wrapper-heavy trees and make debugging and prop flow harder to follow.",
    tags: ["HOC", "composition", "tradeoffs"]
  },

  {
    id: "react-patterns-q-012",
    quizId: "quiz_react_patterns",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should a HOC generally avoid mutating the component it receives?",
    options: [
      { id: "A", text: "Mutating the original component can create surprising behavior and conflicts when the same component is enhanced multiple times." },
      { id: "B", text: "React components cannot be functions." },
      { id: "C", text: "Mutation is required only for class components." },
      { id: "D", text: "React automatically rejects mutated components at runtime." }
    ],
    correctOptionId: "A",
    explanation: "A composable HOC should generally wrap and enhance the input component rather than modifying it directly. This preserves the original component's behavior and makes enhancement more predictable.",
    tags: ["HOC", "immutability", "composition", "best-practices"]
  },

  {
    id: "react-patterns-q-013",
    quizId: "quiz_react_patterns",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which implementation best represents a non-mutating HOC?",
    options: [
      {
        id: "A",
        text: "const withLoading = Component => props => props.loading ? <Spinner /> : <Component {...props} />;"
      },
      {
        id: "B",
        text: "const withLoading = Component => { Component.loading = true; return Component; };"
      },
      {
        id: "C",
        text: "const withLoading = Component => Component.prototype.render = Spinner;"
      },
      {
        id: "D",
        text: "const withLoading = Component => delete Component;"
      }
    ],
    correctOptionId: "A",
    explanation: "The HOC returns a new wrapper component and leaves the original Component untouched. This makes the enhancement composable and avoids modifying shared component behavior.",
    tags: ["HOC", "immutability", "wrapper-components"]
  },

  {
    id: "react-patterns-q-014",
    quizId: "quiz_react_patterns",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should a HOC usually pass unrelated props through to the wrapped component?",
    options: [
      { id: "A", text: "So consumers can continue supplying the wrapped component's normal API." },
      { id: "B", text: "Because React requires every prop to be copied." },
      { id: "C", text: "Because HOCs cannot create their own props." },
      { id: "D", text: "So the wrapped component receives only strings." }
    ],
    correctOptionId: "A",
    explanation: "A good HOC generally adds its own behavior while preserving the wrapped component's existing public interface. Passing unrelated props through makes the abstraction composable.",
    tags: ["HOC", "props", "API-design"]
  },

  {
    id: "react-patterns-q-015",
    quizId: "quiz_react_patterns",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What can happen if a HOC accidentally fails to forward a required prop?",
    options: [
      { id: "A", text: "The wrapped component may receive undefined or incorrect data and behave incorrectly." },
      { id: "B", text: "React automatically forwards the missing prop." },
      { id: "C", text: "The browser adds the prop automatically." },
      { id: "D", text: "The HOC becomes a render prop." }
    ],
    correctOptionId: "A",
    explanation: "Props are not automatically forwarded through arbitrary wrapper components. If the HOC consumes or forgets to forward a prop, the wrapped component may not receive the data it expects.",
    tags: ["HOC", "props", "prop-forwarding", "debugging"]
  },

  {
    id: "react-patterns-q-016",
    quizId: "quiz_react_patterns",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes the relationship between render props and HOCs?",
    options: [
      { id: "A", text: "Both can share reusable behavior, but HOCs enhance a component while render props let the consumer provide rendering behavior through a function." },
      { id: "B", text: "They are exactly the same syntax." },
      { id: "C", text: "Render props can only be used with class components." },
      { id: "D", text: "HOCs cannot share state." }
    ],
    correctOptionId: "A",
    explanation: "Both patterns solve reusable-logic problems but expose different APIs. A HOC returns an enhanced component, whereas a render prop delegates part of rendering to a supplied function.",
    tags: ["HOC", "render-props", "comparison", "reusable-logic"]
  },

  {
    id: "react-patterns-q-017",
    quizId: "quiz_react_patterns",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a potential drawback of render props?",
    options: [
      { id: "A", text: "Heavy nesting of function-based render APIs can make JSX harder to read." },
      { id: "B", text: "Render props cannot receive data." },
      { id: "C", text: "Render props cannot share behavior." },
      { id: "D", text: "Render props always require Redux." }
    ],
    correctOptionId: "A",
    explanation: "Render props can be powerful, but composing many nested render functions can create deeply nested JSX and make the resulting UI harder to scan.",
    tags: ["render-props", "tradeoffs", "composition"]
  },

  {
    id: "react-patterns-q-018",
    quizId: "quiz_react_patterns",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A component tracks mouse coordinates and exposes them through a render prop. What should the component primarily own?",
    options: [
      { id: "A", text: "The mouse-tracking behavior and state." },
      { id: "B", text: "Every possible UI design the consumer might want." },
      { id: "C", text: "The consumer's CSS files." },
      { id: "D", text: "The entire application's routing configuration." }
    ],
    correctOptionId: "A",
    explanation: "The value of the render prop pattern is separating reusable behavior from presentation. The tracking component owns the behavior while the consumer decides how the data is displayed.",
    tags: ["render-props", "separation-of-concerns", "reusable-logic"]
  },

  {
    id: "react-patterns-q-019",
    quizId: "quiz_react_patterns",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which pattern is particularly well suited to APIs such as <Accordion><Accordion.Item /></Accordion>?",
    options: [
      { id: "A", text: "Compound components." },
      { id: "B", text: "Higher-order component only." },
      { id: "C", text: "Render prop only." },
      { id: "D", text: "Inheritance." }
    ],
    correctOptionId: "A",
    explanation: "Accordion and Accordion.Item form a natural component family. A compound-component API can coordinate their state while giving users a readable declarative structure.",
    tags: ["compound-components", "Accordion", "composition"]
  },

  {
    id: "react-patterns-q-020",
    quizId: "quiz_react_patterns",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is context useful inside a compound component implementation?",
    options: [
      { id: "A", text: "It can let deeply nested subcomponents access shared state without manually passing that state through every intermediate component." },
      { id: "B", text: "It automatically renders all child components." },
      { id: "C", text: "It prevents children from receiving props." },
      { id: "D", text: "It turns the compound component into a HOC." }
    ],
    correctOptionId: "A",
    explanation: "Compound components often need coordinated state such as activeTab or expandedItem. Context provides a convenient communication mechanism between related components.",
    tags: ["compound-components", "context", "prop-drilling"]
  },

  {
    id: "react-patterns-q-021",
    quizId: "quiz_react_patterns",
    order: 21,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design gives consumers the most declarative control over the structure of a compound component?",
    options: [
      {
        id: "A",
        text: "<Tabs><Tabs.List><Tabs.Tab /></Tabs.List><Tabs.Panel /></Tabs>"
      },
      {
        id: "B",
        text: "<Tabs config=\"large-string-containing-all-markup\" />"
      },
      {
        id: "C",
        text: "<Tabs mode=\"everything\" />"
      },
      {
        id: "D",
        text: "<Tabs renderEntireApplication />"
      }
    ],
    correctOptionId: "A",
    explanation: "The compound API exposes meaningful building blocks while the parent coordinates their behavior. This makes the consumer's intended UI structure explicit in JSX.",
    tags: ["compound-components", "declarative-API", "composition"]
  },

  {
    id: "react-patterns-q-022",
    quizId: "quiz_react_patterns",
    order: 22,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is one trade-off of compound components compared with a single configuration-heavy component?",
    options: [
      { id: "A", text: "The implementation can be more complex because related components need coordination and clear rules about how they work together." },
      { id: "B", text: "Compound components cannot share state." },
      { id: "C", text: "Compound components cannot accept children." },
      { id: "D", text: "Compound components always require class components." }
    ],
    correctOptionId: "A",
    explanation: "Compound APIs improve flexibility but require careful coordination between the parent and its subcomponents, often involving context and validation of usage.",
    tags: ["compound-components", "tradeoffs", "architecture"]
  },

  {
    id: "react-patterns-q-023",
    quizId: "quiz_react_patterns",
    order: 23,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer builds a Button component with 14 boolean props such as isPrimary, isDanger, isCompact, isOutlined, isLoading, and isIconOnly. Which design concern does this illustrate?",
    options: [
      { id: "A", text: "A potentially over-configurable component that may benefit from composition or a more focused API." },
      { id: "B", text: "A requirement to use a HOC." },
      { id: "C", text: "A requirement to use render props." },
      { id: "D", text: "A React limitation on boolean props." }
    ],
    correctOptionId: "A",
    explanation: "Many configuration flags can create a combinatorial API and make the component difficult to reason about. Composition or smaller focused components can sometimes provide a cleaner API.",
    tags: ["composition", "API-design", "component-design"]
  },

  {
    id: "react-patterns-q-024",
    quizId: "quiz_react_patterns",
    order: 24,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach best demonstrates composition for a reusable Card?",
    options: [
      {
        id: "A",
        text: "<Card><Card.Header /><Card.Body /><Card.Footer /></Card>"
      },
      {
        id: "B",
        text: "<Card everyPossibleLayout=\"true\" />"
      },
      {
        id: "C",
        text: "<Card inheritFrom=\"HeaderBodyFooter\" />"
      },
      {
        id: "D",
        text: "<Card useAllModes=\"true\" />"
      }
    ],
    correctOptionId: "A",
    explanation: "The Card exposes composable pieces that consumers can arrange according to their needs. This avoids forcing every possible layout into a large collection of conditional props.",
    tags: ["composition", "compound-components", "Card", "API-design"]
  },

  {
    id: "react-patterns-q-025",
    quizId: "quiz_react_patterns",
    order: 25,
    type: "mcq",
    difficulty: "Advanced",
    question: "A HOC receives a component and adds authentication-related behavior. What should the returned wrapper generally do after authentication succeeds?",
    options: [
      { id: "A", text: "Render the wrapped component while forwarding the appropriate props." },
      { id: "B", text: "Delete the wrapped component." },
      { id: "C", text: "Convert the wrapped component into CSS." },
      { id: "D", text: "Always render the login page regardless of authentication state." }
    ],
    correctOptionId: "A",
    explanation: "An authentication HOC can decide whether to render protected UI or another state. When access is allowed, it should render the wrapped component and preserve its expected props.",
    tags: ["HOC", "authentication", "prop-forwarding"]
  },

  {
    id: "react-patterns-q-026",
    quizId: "quiz_react_patterns",
    order: 26,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can creating a HOC inside a component render function be problematic?",
    options: [
      { id: "A", text: "It can create a new component type on every render, potentially causing remounting and losing component state." },
      { id: "B", text: "React forbids all functions inside components." },
      { id: "C", text: "HOCs can only be created in CSS files." },
      { id: "D", text: "The browser cannot execute nested functions." }
    ],
    correctOptionId: "A",
    explanation: "Component identity matters to React. Creating a new enhanced component during every render can produce a different component type and cause the wrapped subtree to remount.",
    tags: ["HOC", "component-identity", "remounting", "performance"]
  },

  {
    id: "react-patterns-q-027",
    quizId: "quiz_react_patterns",
    order: 27,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about HOC composition is correct?",
    options: [
      { id: "A", text: "Multiple HOCs can be applied to a component, although excessive wrapping can reduce readability." },
      { id: "B", text: "A component can only ever be wrapped by one HOC." },
      { id: "C", text: "HOCs cannot return other enhanced components." },
      { id: "D", text: "Applying two HOCs automatically merges their source code." }
    ],
    correctOptionId: "A",
    explanation: "HOCs are composable functions, so one enhanced component can be passed into another HOC. The trade-off is that many wrappers can make the component hierarchy harder to understand.",
    tags: ["HOC", "composition", "wrapping"]
  },

  {
    id: "react-patterns-q-028",
    quizId: "quiz_react_patterns",
    order: 28,
    type: "mcq",
    difficulty: "Advanced",
    question: "What problem can arise when several HOCs inject props with the same name?",
    options: [
      { id: "A", text: "One enhancement can overwrite or conflict with another enhancement's injected value." },
      { id: "B", text: "React automatically merges conflicting props into an array." },
      { id: "C", text: "The browser renames the props." },
      { id: "D", text: "Props with the same name are ignored by React." }
    ],
    correctOptionId: "A",
    explanation: "Injected props are ordinary JavaScript props. If multiple layers use the same property name, the resulting value can conflict or become difficult to reason about.",
    tags: ["HOC", "props", "composition", "API-conflicts"]
  },

  {
    id: "react-patterns-q-029",
    quizId: "quiz_react_patterns",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which pattern most naturally separates reusable stateful behavior from consumer-controlled rendering?",
    options: [
      { id: "A", text: "Render props." },
      { id: "B", text: "A giant component with hard-coded markup." },
      { id: "C", text: "CSS inheritance." },
      { id: "D", text: "A global variable." }
    ],
    correctOptionId: "A",
    explanation: "The component can manage the reusable behavior while invoking a supplied render function with the resulting data. This gives consumers control over presentation.",
    tags: ["render-props", "reusable-logic", "separation-of-concerns"]
  },

  {
    id: "react-patterns-q-030",
    quizId: "quiz_react_patterns",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\n<DataProvider render={(data) => <List data={data} />} />\n\nWhat responsibility does the render function have?",
    options: [
      { id: "A", text: "It decides how the data supplied by DataProvider should be represented in the UI." },
      { id: "B", text: "It owns the browser's HTTP implementation." },
      { id: "C", text: "It replaces the React renderer." },
      { id: "D", text: "It creates the DataProvider component." }
    ],
    correctOptionId: "A",
    explanation: "DataProvider owns the reusable data behavior, while the render prop gives the consumer control over how that data is presented.",
    tags: ["render-props", "data-fetching", "composition"]
  },

  {
    id: "react-patterns-q-031",
    quizId: "quiz_react_patterns",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes why Hooks reduced the need for some older render-prop and HOC use cases?",
    options: [
      { id: "A", text: "Hooks allow reusable stateful logic to be extracted into functions that components can call directly." },
      { id: "B", text: "Hooks make composition impossible." },
      { id: "C", text: "Hooks automatically convert every HOC into a component." },
      { id: "D", text: "Hooks eliminate the need for components." }
    ],
    correctOptionId: "A",
    explanation: "Custom Hooks provide a direct way to reuse stateful logic without necessarily introducing wrapper components or nested render functions.",
    tags: ["Hooks", "HOC", "render-props", "reusable-logic"]
  },

  {
    id: "react-patterns-q-032",
    quizId: "quiz_react_patterns",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "Does the existence of Hooks mean HOCs and render props are always wrong?",
    options: [
      { id: "A", text: "No. They remain valid patterns and can still be appropriate for particular APIs, libraries, or component abstractions." },
      { id: "B", text: "Yes. React rejects them in modern versions." },
      { id: "C", text: "Yes. Render props cannot be used with function components." },
      { id: "D", text: "Yes. HOCs were removed from JavaScript." }
    ],
    correctOptionId: "A",
    explanation: "Hooks changed how reusable logic is commonly expressed, but existing patterns remain valid. The right abstraction depends on the API and problem being solved.",
    tags: ["Hooks", "HOC", "render-props", "architecture"]
  },

  {
    id: "react-patterns-q-033",
    quizId: "quiz_react_patterns",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which pattern is most appropriate when the API should let consumers control exactly which subcomponents appear and in what order?",
    options: [
      { id: "A", text: "Composition." },
      { id: "B", text: "A fixed monolithic component." },
      { id: "C", text: "A global singleton." },
      { id: "D", text: "Inheritance-only design." }
    ],
    correctOptionId: "A",
    explanation: "Composition lets consumers supply and arrange children or subcomponents. This makes it particularly useful for flexible UI structures.",
    tags: ["composition", "children", "API-design"]
  },

  {
    id: "react-patterns-q-034",
    quizId: "quiz_react_patterns",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "A reusable Modal needs shared state for open/close behavior while allowing consumers to define Header, Body, and Footer. Which architecture is a strong fit?",
    options: [
      { id: "A", text: "A compound component API with shared state managed by the parent and exposed through context." },
      { id: "B", text: "A single component with dozens of HTML strings." },
      { id: "C", text: "A separate global variable for every Modal instance." },
      { id: "D", text: "A HOC around every individual paragraph." }
    ],
    correctOptionId: "A",
    explanation: "A compound Modal can coordinate shared behavior while giving consumers flexible composition of its subcomponents. Context can provide the shared state to those subcomponents.",
    tags: ["compound-components", "Modal", "context", "composition"]
  },

  {
    id: "react-patterns-q-035",
    quizId: "quiz_react_patterns",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main architectural benefit of separating behavior from presentation?",
    options: [
      { id: "A", text: "The same behavior can potentially be reused with different UI representations." },
      { id: "B", text: "The application no longer needs state." },
      { id: "C", text: "Presentation becomes impossible to customize." },
      { id: "D", text: "All components become global." }
    ],
    correctOptionId: "A",
    explanation: "Separating behavior from presentation can make abstractions more reusable. Render props, HOCs, custom Hooks, and compound components can all address different versions of this separation.",
    tags: ["separation-of-concerns", "composition", "reusability"]
  },

  {
    id: "react-patterns-q-036",
    quizId: "quiz_react_patterns",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component exposes both `renderHeader` and `renderBody` function props. What does this resemble?",
    options: [
      { id: "A", text: "A render-prop-based composition API." },
      { id: "B", text: "A CSS module." },
      { id: "C", text: "An inheritance hierarchy." },
      { id: "D", text: "A browser event delegation system." }
    ],
    correctOptionId: "A",
    explanation: "Functions supplied by the consumer to control portions of rendering are a form of render-prop-style composition.",
    tags: ["render-props", "composition", "functions-as-props"]
  },

  {
    id: "react-patterns-q-037",
    quizId: "quiz_react_patterns",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential readability problem with excessive render props?",
    options: [
      { id: "A", text: "Deeply nested callback functions can make JSX structure difficult to scan and maintain." },
      { id: "B", text: "Render props automatically remove indentation." },
      { id: "C", text: "Render props cannot return JSX." },
      { id: "D", text: "Render props always cause infinite recursion." }
    ],
    correctOptionId: "A",
    explanation: "Nested render functions can create a callback-heavy component tree. When many layers are composed this way, the resulting JSX may become difficult to understand.",
    tags: ["render-props", "readability", "maintainability"]
  },

  {
    id: "react-patterns-q-038",
    quizId: "quiz_react_patterns",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about composition and inheritance in React is generally most accurate?",
    options: [
      { id: "A", text: "React commonly favors composition because components can be combined flexibly through props and children." },
      { id: "B", text: "React requires every reusable component to inherit from another component." },
      { id: "C", text: "Composition is only possible with class components." },
      { id: "D", text: "Inheritance automatically provides better component reuse in every case." }
    ],
    correctOptionId: "A",
    explanation: "React's component model is designed around composition. Props, children, context, and component boundaries allow behavior and UI to be assembled without requiring inheritance-based component hierarchies.",
    tags: ["composition", "inheritance", "architecture"]
  },

  {
    id: "react-patterns-q-039",
    quizId: "quiz_react_patterns",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component accepts `children` and renders them inside a styled container. What kind of abstraction is this?",
    options: [
      { id: "A", text: "A simple composition-based wrapper." },
      { id: "B", text: "A Higher-Order Component." },
      { id: "C", text: "A render prop." },
      { id: "D", text: "A compound component by definition." }
    ],
    correctOptionId: "A",
    explanation: "Accepting children and placing them inside a wrapper is a straightforward form of composition. It does not automatically make the component an HOC or render-prop component.",
    tags: ["composition", "children", "wrapper"]
  },

  {
    id: "react-patterns-q-040",
    quizId: "quiz_react_patterns",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "A library component exposes `<Select>`, `<Select.Trigger>`, `<Select.Content>`, and `<Select.Option>`. Why might this API be preferable to a single Select component with many configuration props?",
    options: [
      { id: "A", text: "It gives consumers a structured and extensible way to compose the UI while the Select family can coordinate behavior internally." },
      { id: "B", text: "It guarantees that no state is needed." },
      { id: "C", text: "It prevents consumers from customizing the component." },
      { id: "D", text: "It requires every child to be a separate application." }
    ],
    correctOptionId: "A",
    explanation: "Compound components can provide an expressive API where structure is visible in JSX. The parent can coordinate state while the individual parts handle their own responsibilities.",
    tags: ["compound-components", "Select", "API-design", "composition"]
  },

  {
    id: "react-patterns-q-041",
    quizId: "quiz_react_patterns",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What should a compound component generally do when one of its subcomponents is rendered outside the required provider context?",
    options: [
      { id: "A", text: "Fail clearly or provide a sensible fallback rather than silently relying on unavailable shared state." },
      { id: "B", text: "Automatically search the entire application for another provider." },
      { id: "C", text: "Create a global provider automatically." },
      { id: "D", text: "Convert the component into a HOC." }
    ],
    correctOptionId: "A",
    explanation: "Compound components often depend on shared context. Clear failure behavior helps developers identify incorrect usage instead of producing confusing undefined-state behavior.",
    tags: ["compound-components", "context", "error-handling", "API-design"]
  },

  {
    id: "react-patterns-q-042",
    quizId: "quiz_react_patterns",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "A HOC adds a `user` prop to the wrapped component, but the wrapped component already receives a `user` prop from its parent. What design issue should be considered?",
    options: [
      { id: "A", text: "The HOC's injected prop can conflict with the consumer-provided prop, so the API needs a clear ownership rule." },
      { id: "B", text: "React automatically merges both user objects." },
      { id: "C", text: "React prevents HOCs from injecting props." },
      { id: "D", text: "The browser resolves the conflict automatically." }
    ],
    correctOptionId: "A",
    explanation: "Injected props are part of the component's API. If the same property can come from multiple sources, developers need a clear contract about which source wins or whether the name should be changed.",
    tags: ["HOC", "props", "API-design", "prop-conflicts"]
  },

  {
    id: "react-patterns-q-043",
    quizId: "quiz_react_patterns",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which abstraction would be most appropriate if a reusable component needs to expose internal state to consumers while allowing them to completely control the rendered markup?",
    options: [
      { id: "A", text: "A render prop." },
      { id: "B", text: "A fixed visual component with no children." },
      { id: "C", text: "A CSS selector." },
      { id: "D", text: "A static HTML file." }
    ],
    correctOptionId: "A",
    explanation: "Render props explicitly allow a component to provide state or behavior to a consumer-controlled rendering function, making the presentation highly flexible.",
    tags: ["render-props", "reusable-logic", "presentation"]
  },

  {
    id: "react-patterns-q-044",
    quizId: "quiz_react_patterns",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which abstraction would be most appropriate when several UI pieces need to cooperate around one shared stateful interaction and the desired API should read naturally in JSX?",
    options: [
      { id: "A", text: "Compound components." },
      { id: "B", text: "A random global variable." },
      { id: "C", text: "A single enormous conditional expression." },
      { id: "D", text: "A database trigger." }
    ],
    correctOptionId: "A",
    explanation: "Compound components are designed for coordinated component families. They allow related pieces to share behavior while exposing a declarative JSX API.",
    tags: ["compound-components", "shared-state", "declarative-API"]
  },

  {
    id: "react-patterns-q-045",
    quizId: "quiz_react_patterns",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which is the strongest reason to choose composition instead of adding another boolean prop to an already complex component?",
    options: [
      { id: "A", text: "Composition can let consumers express different structures directly instead of increasing the component's internal conditional logic." },
      { id: "B", text: "Boolean props are forbidden in React." },
      { id: "C", text: "Composition always produces fewer lines of code." },
      { id: "D", text: "Composition removes the need for testing." }
    ],
    correctOptionId: "A",
    explanation: "As configuration props multiply, the component can become a collection of interacting modes. Composition can move structural decisions to the consumer and keep individual components more focused.",
    tags: ["composition", "boolean-props", "component-design", "API-design"]
  },

  {
    id: "react-patterns-q-046",
    quizId: "quiz_react_patterns",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A team has a reusable behavior that is needed by many unrelated components. The behavior exposes state and event handlers, but each component needs a completely different UI. Which approach is generally the cleanest modern abstraction?",
    options: [
      { id: "A", text: "Extract the behavior into a reusable custom Hook and let each component compose it into its own UI." },
      { id: "B", text: "Force every component to use the same rendered markup." },
      { id: "C", text: "Create a separate HOC for every visual variation." },
      { id: "D", text: "Store the behavior in a global DOM element." }
    ],
    correctOptionId: "A",
    explanation: "When the shared concern is stateful behavior rather than a specific UI structure, a custom Hook can provide reusable logic while allowing each component to control its own presentation.",
    tags: ["composition", "custom-hooks", "reusable-logic", "architecture"]
  },

  {
    id: "react-patterns-q-047",
    quizId: "quiz_react_patterns",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A component library wants an API where consumers can use `<Menu.Item>`, `<Menu.Separator>`, and `<Menu.Group>` while Menu internally manages open state and keyboard behavior. Which design best matches this requirement?",
    options: [
      { id: "A", text: "A compound component system with shared internal state and behavior." },
      { id: "B", text: "A single component with no children." },
      { id: "C", text: "A separate HOC for every Menu.Item." },
      { id: "D", text: "A render prop that returns the entire application." }
    ],
    correctOptionId: "A",
    explanation: "The Menu family needs coordinated behavior while exposing multiple declarative subcomponents. A compound component architecture is a natural fit for this kind of component-library API.",
    tags: ["compound-components", "Menu", "context", "component-library"]
  },

  {
    id: "react-patterns-q-048",
    quizId: "quiz_react_patterns",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer uses three HOCs to provide authentication, analytics, and feature flags. Debugging becomes difficult because the component tree contains several wrapper layers. What is the best architectural response?",
    options: [
      { id: "A", text: "Evaluate whether the concerns can be expressed more directly through composition, Hooks, or context while preserving clear boundaries." },
      { id: "B", text: "Add ten more HOCs so each concern has fewer lines." },
      { id: "C", text: "Put all behavior into one global variable." },
      { id: "D", text: "Remove all component boundaries." }
    ],
    correctOptionId: "A",
    explanation: "HOCs are valid, but wrapper-heavy designs can become difficult to reason about. Modern React applications can often express reusable logic more directly with Hooks, context, or composition depending on the concern.",
    tags: ["HOC", "Hooks", "composition", "architecture", "tradeoffs"]
  },

  {
    id: "react-patterns-q-049",
    quizId: "quiz_react_patterns",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are designing a reusable Tabs component for a component library. Requirements: consumers should choose which tab pieces appear, the Tabs system should manage active-tab state, individual subcomponents should access that state, and the API should remain declarative. Which architecture is the strongest fit?",
    options: [
      {
        id: "A",
        text: "Compound components using a parent Tabs component with shared state and context for its coordinated subcomponents."
      },
      {
        id: "B",
        text: "One component with dozens of boolean props describing every possible layout."
      },
      {
        id: "C",
        text: "A separate global state variable shared by every Tabs instance."
      },
      {
        id: "D",
        text: "A HOC that hard-codes the complete Tabs markup."
      }
    ],
    correctOptionId: "A",
    explanation: "Compound components fit the requirements directly: the parent owns the shared interaction state, context can make that state available to related subcomponents, and consumers retain a declarative composition API.",
    tags: ["compound-components", "Tabs", "context", "shared-state", "API-design"]
  },

  {
    id: "react-patterns-q-050",
    quizId: "quiz_react_patterns",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are designing a production component library. Some abstractions need reusable behavior with completely consumer-controlled UI, some need coordinated families such as Tabs and Menu, and some legacy integrations already use component enhancement. Which design strategy is the most appropriate?",
    options: [
      {
        id: "A",
        text: "Use composition and custom Hooks where behavior should be reusable independently, render props when consumers need explicit control over rendering, compound components for coordinated component families, and HOCs where component enhancement is a suitable existing abstraction."
      },
      {
        id: "B",
        text: "Use HOCs for every problem because all React abstractions should create wrapper components."
      },
      {
        id: "C",
        text: "Use render props for every component, including simple static UI."
      },
      {
        id: "D",
        text: "Use one monolithic component with configuration props for every possible use case."
      }
    ],
    correctOptionId: "A",
    explanation: "There is no single universal React pattern. Composition and Hooks are strong choices for reusable behavior, render props are useful when consumers need direct control over rendering, compound components work well for coordinated component families, and HOCs remain useful when enhancement through wrapping fits the problem. Good architecture chooses the smallest abstraction that clearly solves the actual reuse problem.",
    tags: ["composition", "HOC", "render-props", "compound-components", "custom-hooks", "architecture"]
  }
];

export default reactDesignPatternsQuestions;