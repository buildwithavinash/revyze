const javascriptScopeClosuresQuestions = [
  {
    id: "javascript-scope-closures-q-001",
    quizId: "quiz_javascript_scope_closures",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does 'scope' determine in JavaScript?",
    options: [
      { id: "A", text: "Where a variable or identifier can be accessed in the code." },
      { id: "B", text: "How quickly a function executes." },
      { id: "C", text: "What data type a variable must contain." },
      { id: "D", text: "How many times a function can be called." }
    ],
    correctOptionId: "A",
    explanation: "Scope determines the region of code where an identifier is visible and can be referenced.",
    tags: ["scope", "fundamentals"]
  },

  {
    id: "javascript-scope-closures-q-002",
    quizId: "quiz_javascript_scope_closures",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which scope exists for code declared outside functions and blocks in a normal script?",
    options: [
      { id: "A", text: "Global scope" },
      { id: "B", text: "Function scope" },
      { id: "C", text: "Local scope" },
      { id: "D", text: "Parameter scope" }
    ],
    correctOptionId: "A",
    explanation: "Code at the top level of a classic script is in the global scope.",
    tags: ["global-scope", "scope"]
  },

  {
    id: "javascript-scope-closures-q-003",
    quizId: "quiz_javascript_scope_closures",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst message = \"Hello\";\n\nfunction greet() {\n  console.log(message);\n}\n\ngreet();",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "undefined" },
      { id: "C", text: "ReferenceError" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The function does not have a local `message`, so JavaScript looks outward and finds the variable in the outer scope.",
    tags: ["scope-chain", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-004",
    quizId: "quiz_javascript_scope_closures",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What happens?\n\nfunction test() {\n  const secret = 42;\n}\n\nconsole.log(secret);",
    options: [
      { id: "A", text: "ReferenceError" },
      { id: "B", text: "42" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`secret` is declared inside `test`, so it belongs to that function's scope and cannot be accessed from outside.",
    tags: ["function-scope", "local-scope"]
  },

  {
    id: "javascript-scope-closures-q-005",
    quizId: "quiz_javascript_scope_closures",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is lexical scoping?",
    options: [
      { id: "A", text: "Variable visibility is determined by where declarations appear in the source code." },
      { id: "B", text: "Variable visibility is determined by which function executes last." },
      { id: "C", text: "Variables are visible everywhere after being declared once." },
      { id: "D", text: "Variables are scoped according to the order in which functions are called." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript uses lexical scoping: the location of a declaration in the source code determines its accessible scopes.",
    tags: ["lexical-scope", "scope"]
  },

  {
    id: "javascript-scope-closures-q-006",
    quizId: "quiz_javascript_scope_closures",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst x = 10;\n\nfunction outer() {\n  const x = 20;\n  console.log(x);\n}\n\nouter();",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "10" },
      { id: "C", text: "30" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "The function has its own `x`, which shadows the outer `x`. Name lookup finds the nearest matching declaration.",
    tags: ["scope", "shadowing"]
  },

  {
    id: "javascript-scope-closures-q-007",
    quizId: "quiz_javascript_scope_closures",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is variable shadowing?",
    options: [
      { id: "A", text: "A declaration in an inner scope uses the same name as a declaration in an outer scope." },
      { id: "B", text: "A variable is automatically deleted." },
      { id: "C", text: "A variable changes from one type to another." },
      { id: "D", text: "A function is called recursively." }
    ],
    correctOptionId: "A",
    explanation: "An inner declaration with the same identifier hides the outer declaration within the inner scope.",
    tags: ["shadowing", "scope"]
  },

  {
    id: "javascript-scope-closures-q-008",
    quizId: "quiz_javascript_scope_closures",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nlet value = \"outer\";\n\n{\n  let value = \"inner\";\n  console.log(value);\n}\n\nconsole.log(value);",
    options: [
      { id: "A", text: "inner, then outer" },
      { id: "B", text: "outer, then inner" },
      { id: "C", text: "inner, then inner" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "The block has its own `value`. Inside the block it shadows the outer variable, but outside the block the outer variable remains visible.",
    tags: ["block-scope", "let", "shadowing"]
  },

  {
    id: "javascript-scope-closures-q-009",
    quizId: "quiz_javascript_scope_closures",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declarations are block-scoped?",
    options: [
      { id: "A", text: "`let` and `const`" },
      { id: "B", text: "`var` only" },
      { id: "C", text: "`var` and `let` only" },
      { id: "D", text: "All declarations behave identically" }
    ],
    correctOptionId: "A",
    explanation: "`let` and `const` are block-scoped, meaning their declarations are limited to the block in which they occur.",
    tags: ["block-scope", "let", "const"]
  },

  {
    id: "javascript-scope-closures-q-010",
    quizId: "quiz_javascript_scope_closures",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "What happens?\n\nif (true) {\n  let count = 5;\n}\n\nconsole.log(count);",
    options: [
      { id: "A", text: "ReferenceError" },
      { id: "B", text: "5" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`count` is block-scoped because it was declared with `let`. The declaration is not accessible outside the `if` block.",
    tags: ["block-scope", "let"]
  },

  {
    id: "javascript-scope-closures-q-011",
    quizId: "quiz_javascript_scope_closures",
    order: 11,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nif (true) {\n  var count = 5;\n}\n\nconsole.log(count);",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "ReferenceError" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`var` is not block-scoped. In this top-level script example, the variable remains accessible outside the `if` block.",
    tags: ["var", "block-scope", "function-scope"]
  },

  {
    id: "javascript-scope-closures-q-012",
    quizId: "quiz_javascript_scope_closures",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What kind of scope does `var` use inside a function?",
    options: [
      { id: "A", text: "Function scope" },
      { id: "B", text: "Block scope" },
      { id: "C", text: "Module scope only" },
      { id: "D", text: "No scope" }
    ],
    correctOptionId: "A",
    explanation: "`var` declarations are function-scoped when declared inside a function. They do not become limited to individual blocks within that function.",
    tags: ["var", "function-scope"]
  },

  {
    id: "javascript-scope-closures-q-013",
    quizId: "quiz_javascript_scope_closures",
    order: 13,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfunction test() {\n  if (true) {\n    var value = 10;\n  }\n  console.log(value);\n}\n\ntest();",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "ReferenceError" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`var` is scoped to the function rather than the `if` block, so `value` remains accessible throughout `test`.",
    tags: ["var", "function-scope", "block-scope"]
  },

  {
    id: "javascript-scope-closures-q-014",
    quizId: "quiz_javascript_scope_closures",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the scope chain?",
    options: [
      { id: "A", text: "The hierarchy JavaScript follows when looking for an identifier in the current and outer lexical scopes." },
      { id: "B", text: "The order in which functions are stored in memory." },
      { id: "C", text: "The sequence of function calls in a recursive function." },
      { id: "D", text: "The order in which variables are declared." }
    ],
    correctOptionId: "A",
    explanation: "When JavaScript cannot find an identifier in the current scope, it searches enclosing scopes according to the lexical scope chain.",
    tags: ["scope-chain", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-015",
    quizId: "quiz_javascript_scope_closures",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst a = \"global\";\n\nfunction outer() {\n  const b = \"outer\";\n\n  function inner() {\n    console.log(a, b);\n  }\n\n  inner();\n}\n\nouter();",
    options: [
      { id: "A", text: "global outer" },
      { id: "B", text: "outer global" },
      { id: "C", text: "ReferenceError" },
      { id: "D", text: "undefined undefined" }
    ],
    correctOptionId: "A",
    explanation: "`inner` can access both its parent scope's `b` and the global scope's `a` through lexical scope lookup.",
    tags: ["scope-chain", "nested-functions"]
  },

  {
    id: "javascript-scope-closures-q-016",
    quizId: "quiz_javascript_scope_closures",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which direction does lexical scope access work?",
    options: [
      { id: "A", text: "An inner scope can access declarations from its outer scopes, but an outer scope cannot directly access declarations exclusive to an inner scope." },
      { id: "B", text: "Only outer scopes can access inner declarations." },
      { id: "C", text: "Every scope can access every declaration." },
      { id: "D", text: "Scope access depends only on execution order." }
    ],
    correctOptionId: "A",
    explanation: "Child scopes can look outward through their scope chain. Parent scopes cannot look inward into child-only declarations.",
    tags: ["scope-chain", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-017",
    quizId: "quiz_javascript_scope_closures",
    order: 17,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens?\n\nfunction outer() {\n  function inner() {\n    const secret = 42;\n  }\n\n  console.log(secret);\n}\n\nouter();",
    options: [
      { id: "A", text: "ReferenceError" },
      { id: "B", text: "42" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`secret` belongs to the inner function's scope. The outer function cannot access declarations that exist only inside its child scope.",
    tags: ["scope-chain", "nested-functions"]
  },

  {
    id: "javascript-scope-closures-q-018",
    quizId: "quiz_javascript_scope_closures",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is hoisting commonly used to describe?",
    options: [
      { id: "A", text: "JavaScript's behavior where certain declarations are processed before normal execution reaches their source position." },
      { id: "B", text: "Moving every assignment to the top of a file." },
      { id: "C", text: "Automatically moving all code into functions." },
      { id: "D", text: "Copying variables into global scope." }
    ],
    correctOptionId: "A",
    explanation: "Hoisting is a general term describing observable behavior around declarations being available or affecting a scope before their textual position is executed.",
    tags: ["hoisting", "scope"]
  },

  {
    id: "javascript-scope-closures-q-019",
    quizId: "quiz_javascript_scope_closures",
    order: 19,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(value);\nvar value = 10;",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "10" },
      { id: "C", text: "ReferenceError" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`var` declarations are hoisted, but the assignment is not. Before the assignment executes, `value` has the value `undefined`.",
    tags: ["hoisting", "var"]
  },

  {
    id: "javascript-scope-closures-q-020",
    quizId: "quiz_javascript_scope_closures",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which part of `var value = 10` is effectively hoisted?",
    options: [
      { id: "A", text: "The declaration of `value`, not the assignment of 10." },
      { id: "B", text: "Only the value 10." },
      { id: "C", text: "The entire statement including the assignment." },
      { id: "D", text: "Nothing." }
    ],
    correctOptionId: "A",
    explanation: "The variable declaration is processed before execution, while its initialization with 10 occurs when execution reaches the assignment.",
    tags: ["hoisting", "var", "initialization"]
  },

  {
    id: "javascript-scope-closures-q-021",
    quizId: "quiz_javascript_scope_closures",
    order: 21,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens?\n\nconsole.log(value);\nlet value = 10;",
    options: [
      { id: "A", text: "ReferenceError" },
      { id: "B", text: "undefined" },
      { id: "C", text: "10" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`let` is inaccessible before its declaration is initialized. The period between entering the scope and reaching the declaration is the temporal dead zone.",
    tags: ["let", "tdz", "hoisting"]
  },

  {
    id: "javascript-scope-closures-q-022",
    quizId: "quiz_javascript_scope_closures",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the Temporal Dead Zone (TDZ)?",
    options: [
      { id: "A", text: "The period in a scope where a `let` or `const` binding exists but cannot be accessed before its declaration is initialized." },
      { id: "B", text: "The time after a variable is garbage-collected." },
      { id: "C", text: "The period when a function is executing asynchronously." },
      { id: "D", text: "A period when `var` variables are undefined forever." }
    ],
    correctOptionId: "A",
    explanation: "Lexical declarations such as `let` and `const` cannot be accessed from the start of their scope until execution reaches their declaration.",
    tags: ["tdz", "let", "const", "hoisting"]
  },

  {
    id: "javascript-scope-closures-q-023",
    quizId: "quiz_javascript_scope_closures",
    order: 23,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens?\n\nconst value = 10;\n\n{\n  console.log(value);\n  const value = 20;\n}",
    options: [
      { id: "A", text: "ReferenceError" },
      { id: "B", text: "10" },
      { id: "C", text: "20" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The inner `const value` creates a binding for the entire block. Before its initialization, accessing that binding triggers a TDZ `ReferenceError` rather than falling back to the outer `value`.",
    tags: ["tdz", "const", "shadowing"]
  },

  {
    id: "javascript-scope-closures-q-024",
    quizId: "quiz_javascript_scope_closures",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nsayHello();\n\nfunction sayHello() {\n  console.log(\"Hello\");\n}",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "undefined" },
      { id: "C", text: "ReferenceError" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Function declarations are hoisted with their function value, so the declaration can be called before its textual position.",
    tags: ["hoisting", "function-declaration"]
  },

  {
    id: "javascript-scope-closures-q-025",
    quizId: "quiz_javascript_scope_closures",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens?\n\nsayHello();\n\nconst sayHello = function() {\n  console.log(\"Hello\");\n};",
    options: [
      { id: "A", text: "ReferenceError" },
      { id: "B", text: "Hello" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "The `const` binding cannot be accessed before initialization. Function expressions assigned to `const` do not behave like hoisted function declarations.",
    tags: ["hoisting", "function-expression", "tdz"]
  },

  {
    id: "javascript-scope-closures-q-026",
    quizId: "quiz_javascript_scope_closures",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a closure?",
    options: [
      { id: "A", text: "A function together with access to variables from its surrounding lexical environment." },
      { id: "B", text: "A function that can only be called once." },
      { id: "C", text: "A variable that is automatically made global." },
      { id: "D", text: "A function that has no parameters." }
    ],
    correctOptionId: "A",
    explanation: "A closure allows a function to retain access to variables from the lexical environment in which it was created.",
    tags: ["closures", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-027",
    quizId: "quiz_javascript_scope_closures",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction outer() {\n  const message = \"Hello\";\n\n  return function inner() {\n    return message;\n  };\n}\n\nconst greet = outer();\nconsole.log(greet());",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "undefined" },
      { id: "C", text: "ReferenceError" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`inner` closes over `message`. Even after `outer` finishes, the returned function retains access to that lexical binding.",
    tags: ["closures", "nested-functions", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-028",
    quizId: "quiz_javascript_scope_closures",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can a returned inner function still access a variable from its parent function?",
    options: [
      { id: "A", text: "Because the inner function forms a closure over its surrounding lexical environment." },
      { id: "B", text: "Because all local variables automatically become global." },
      { id: "C", text: "Because JavaScript copies every variable into the child function." },
      { id: "D", text: "Because the parent function runs again whenever the child is called." }
    ],
    correctOptionId: "A",
    explanation: "The inner function retains access to the lexical environment containing the captured variable.",
    tags: ["closures", "lexical-environment"]
  },

  {
    id: "javascript-scope-closures-q-029",
    quizId: "quiz_javascript_scope_closures",
    order: 29,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction createCounter() {\n  let count = 0;\n\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter());\nconsole.log(counter());",
    options: [
      { id: "A", text: "1, then 2" },
      { id: "B", text: "1, then 1" },
      { id: "C", text: "0, then 0" },
      { id: "D", text: "2, then 2" }
    ],
    correctOptionId: "A",
    explanation: "The returned function closes over the same `count` binding. Each invocation increments that retained value.",
    tags: ["closures", "state", "counter"]
  },

  {
    id: "javascript-scope-closures-q-030",
    quizId: "quiz_javascript_scope_closures",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What useful property does a closure-based counter provide?",
    options: [
      { id: "A", text: "It allows state to persist between function calls without exposing the state variable directly." },
      { id: "B", text: "It makes the state variable global." },
      { id: "C", text: "It resets the variable after every call." },
      { id: "D", text: "It prevents the returned function from being called multiple times." }
    ],
    correctOptionId: "A",
    explanation: "The closed-over variable remains available to the returned function while remaining inaccessible directly from outside the closure.",
    tags: ["closures", "encapsulation", "state"]
  },

  {
    id: "javascript-scope-closures-q-031",
    quizId: "quiz_javascript_scope_closures",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\n\nconst a = createCounter();\nconst b = createCounter();\n\nconsole.log(a());\nconsole.log(a());\nconsole.log(b());",
    options: [
      { id: "A", text: "1, 2, 1" },
      { id: "B", text: "1, 1, 1" },
      { id: "C", text: "1, 2, 3" },
      { id: "D", text: "0, 1, 0" }
    ],
    correctOptionId: "A",
    explanation: "Each call to `createCounter()` creates a separate lexical environment and therefore a separate `count` binding. `a` and `b` maintain independent state.",
    tags: ["closures", "state", "factory-functions"]
  },

  {
    id: "javascript-scope-closures-q-032",
    quizId: "quiz_javascript_scope_closures",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a closure-based factory function typically do?",
    options: [
      { id: "A", text: "Creates and returns functions that retain access to state created during the factory call." },
      { id: "B", text: "Converts all local variables into global variables." },
      { id: "C", text: "Prevents functions from retaining state." },
      { id: "D", text: "Automatically creates JavaScript classes." }
    ],
    correctOptionId: "A",
    explanation: "Factory functions can create private state and return functions that close over that state.",
    tags: ["closures", "factory-functions"]
  },

  {
    id: "javascript-scope-closures-q-033",
    quizId: "quiz_javascript_scope_closures",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction createUser(name) {\n  return function() {\n    return `User: ${name}`;\n  };\n}\n\nconst getUser = createUser(\"Avi\");\nconsole.log(getUser());",
    options: [
      { id: "A", text: "User: Avi" },
      { id: "B", text: "User: undefined" },
      { id: "C", text: "Avi" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "The returned function closes over the `name` parameter from the `createUser` invocation.",
    tags: ["closures", "parameters", "factory-functions"]
  },

  {
    id: "javascript-scope-closures-q-034",
    quizId: "quiz_javascript_scope_closures",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Can a closure capture a variable declared with `let`?",
    options: [
      { id: "A", text: "Yes." },
      { id: "B", text: "No, closures only work with `var`." },
      { id: "C", text: "Only inside arrow functions." },
      { id: "D", text: "Only if the variable is global." }
    ],
    correctOptionId: "A",
    explanation: "Closures can capture bindings from surrounding lexical environments, including variables declared with `let`.",
    tags: ["closures", "let", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-035",
    quizId: "quiz_javascript_scope_closures",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nlet value = 10;\n\nfunction outer() {\n  function inner() {\n    console.log(value);\n  }\n\n  inner();\n}\n\nouter();",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "undefined" },
      { id: "C", text: "ReferenceError" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "`inner` can access the outer lexical environment, eventually finding the global `value`.",
    tags: ["closures", "scope-chain", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-036",
    quizId: "quiz_javascript_scope_closures",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Does a closure capture only the value of a variable at the moment the function is created?",
    options: [
      { id: "A", text: "No. A closure retains access to the binding, so later changes to that binding can be observed." },
      { id: "B", text: "Yes, every closure permanently copies primitive values." },
      { id: "C", text: "Yes, but only for `let`." },
      { id: "D", text: "Yes, but only for `const`." }
    ],
    correctOptionId: "A",
    explanation: "Closures retain access to bindings rather than simply freezing a snapshot of their values. If the binding changes, later calls can observe the new value.",
    tags: ["closures", "bindings", "lexical-environment"]
  },

  {
    id: "javascript-scope-closures-q-037",
    quizId: "quiz_javascript_scope_closures",
    order: 37,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction create() {\n  let value = 1;\n\n  return {\n    get: () => value,\n    set: newValue => {\n      value = newValue;\n    }\n  };\n}\n\nconst state = create();\nconsole.log(state.get());\nstate.set(5);\nconsole.log(state.get());",
    options: [
      { id: "A", text: "1, then 5" },
      { id: "B", text: "1, then 1" },
      { id: "C", text: "5, then 5" },
      { id: "D", text: "undefined, then 5" }
    ],
    correctOptionId: "A",
    explanation: "Both returned functions close over the same `value` binding. `set` updates it, and `get` subsequently reads the updated value.",
    tags: ["closures", "encapsulation", "state"]
  },

  {
    id: "javascript-scope-closures-q-038",
    quizId: "quiz_javascript_scope_closures",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which is a practical use of closures?",
    options: [
      { id: "A", text: "Encapsulating private state behind functions." },
      { id: "B", text: "Making every variable globally accessible." },
      { id: "C", text: "Disabling lexical scope." },
      { id: "D", text: "Preventing functions from returning values." }
    ],
    correctOptionId: "A",
    explanation: "Closures can expose controlled operations while keeping the captured state inaccessible directly from outside.",
    tags: ["closures", "encapsulation", "private-state"]
  },

  {
    id: "javascript-scope-closures-q-039",
    quizId: "quiz_javascript_scope_closures",
    order: 39,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction outer() {\n  let value = 10;\n\n  return function inner() {\n    value += 5;\n    return value;\n  };\n}\n\nconst fn = outer();\nconsole.log(fn());\nconsole.log(fn());",
    options: [
      { id: "A", text: "15, then 20" },
      { id: "B", text: "15, then 15" },
      { id: "C", text: "10, then 15" },
      { id: "D", text: "20, then 25" }
    ],
    correctOptionId: "A",
    explanation: "The same closed-over `value` binding is updated on each invocation: 10 → 15 → 20.",
    tags: ["closures", "state", "mutation"]
  },

  {
    id: "javascript-scope-closures-q-040",
    quizId: "quiz_javascript_scope_closures",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens to a lexical environment captured by a closure after the outer function finishes?",
    options: [
      { id: "A", text: "It can remain reachable because the closure still references the bindings it needs." },
      { id: "B", text: "It is always immediately destroyed." },
      { id: "C", text: "All captured variables become global." },
      { id: "D", text: "The closure becomes automatically undefined." }
    ],
    correctOptionId: "A",
    explanation: "If a returned or otherwise reachable function still references the environment, the relevant state remains reachable and can continue to be used.",
    tags: ["closures", "memory", "lexical-environment"]
  },

  {
    id: "javascript-scope-closures-q-041",
    quizId: "quiz_javascript_scope_closures",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction createFunctions() {\n  const functions = [];\n\n  for (let i = 0; i < 3; i++) {\n    functions.push(() => i);\n  }\n\n  return functions;\n}\n\nconst functions = createFunctions();\nconsole.log(functions[0](), functions[1](), functions[2]());",
    options: [
      { id: "A", text: "0 1 2" },
      { id: "B", text: "3 3 3" },
      { id: "C", text: "0 0 0" },
      { id: "D", text: "1 2 3" }
    ],
    correctOptionId: "A",
    explanation: "A `let` binding in a `for` loop provides a distinct binding for each iteration, so each closure retains the appropriate iteration value.",
    tags: ["closures", "let", "loops"]
  },

  {
    id: "javascript-scope-closures-q-042",
    quizId: "quiz_javascript_scope_closures",
    order: 42,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction createFunctions() {\n  const functions = [];\n\n  for (var i = 0; i < 3; i++) {\n    functions.push(() => i);\n  }\n\n  return functions;\n}\n\nconst functions = createFunctions();\nconsole.log(functions[0](), functions[1](), functions[2]());",
    options: [
      { id: "A", text: "3 3 3" },
      { id: "B", text: "0 1 2" },
      { id: "C", text: "0 0 0" },
      { id: "D", text: "1 2 3" }
    ],
    correctOptionId: "A",
    explanation: "`var` creates one function-scoped binding for `i`. All three closures reference that same binding, whose final value after the loop is 3.",
    tags: ["closures", "var", "loops"]
  },

  {
    id: "javascript-scope-closures-q-043",
    quizId: "quiz_javascript_scope_closures",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why does replacing `var` with `let` in many closure-in-loop examples change the result?",
    options: [
      { id: "A", text: "`let` creates block-scoped bindings with a distinct binding for each loop iteration." },
      { id: "B", text: "`let` disables closures." },
      { id: "C", text: "`let` automatically copies functions." },
      { id: "D", text: "`let` makes all variables global." }
    ],
    correctOptionId: "A",
    explanation: "For a `for` loop, `let` provides per-iteration bindings, allowing closures created in different iterations to retain different values.",
    tags: ["closures", "let", "loops", "var"]
  },

  {
    id: "javascript-scope-closures-q-044",
    quizId: "quiz_javascript_scope_closures",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction makeLogger(message) {\n  return () => console.log(message);\n}\n\nconst logHello = makeLogger(\"Hello\");\nconst logBye = makeLogger(\"Bye\");\n\nlogHello();\nlogBye();",
    options: [
      { id: "A", text: "Hello, then Bye" },
      { id: "B", text: "Bye, then Hello" },
      { id: "C", text: "Hello, then Hello" },
      { id: "D", text: "undefined, then undefined" }
    ],
    correctOptionId: "A",
    explanation: "Each call to `makeLogger` creates a separate lexical environment containing its own `message`. Each returned closure retains its corresponding value.",
    tags: ["closures", "factory-functions", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-045",
    quizId: "quiz_javascript_scope_closures",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about closures is most accurate?",
    options: [
      { id: "A", text: "A closure preserves access to the lexical environment needed by a function, not merely a simple copied snapshot of every outer variable." },
      { id: "B", text: "A closure always copies every variable from the entire program." },
      { id: "C", text: "A closure can only access global variables." },
      { id: "D", text: "A closure exists only when `var` is used." }
    ],
    correctOptionId: "A",
    explanation: "Closures are based on lexical environments and retained bindings. A function has access to the relevant surrounding environment rather than copying the entire program state.",
    tags: ["closures", "lexical-environment"]
  },

  {
    id: "javascript-scope-closures-q-046",
    quizId: "quiz_javascript_scope_closures",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nlet x = \"global\";\n\nfunction outer() {\n  let x = \"outer\";\n\n  return function inner() {\n    console.log(x);\n  };\n}\n\nconst fn = outer();\nfn();",
    options: [
      { id: "A", text: "outer" },
      { id: "B", text: "global" },
      { id: "C", text: "undefined" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "`inner` resolves `x` through its lexical environment. The nearest matching declaration is `outer`'s `x`, which the closure retains.",
    tags: ["closures", "shadowing", "scope-chain"]
  },

  {
    id: "javascript-scope-closures-q-047",
    quizId: "quiz_javascript_scope_closures",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Suppose an inner function and an outer function both declare a variable named `count`. Which `count` does the inner function normally use when it references `count`?",
    options: [
      { id: "A", text: "The nearest `count` in its lexical scope chain." },
      { id: "B", text: "Always the global `count`." },
      { id: "C", text: "Always the outermost `count`." },
      { id: "D", text: "A random declaration chosen at runtime." }
    ],
    correctOptionId: "A",
    explanation: "Identifier resolution searches the current lexical environment first, then proceeds outward until a matching binding is found.",
    tags: ["scope-chain", "shadowing", "lexical-scope"]
  },

  {
    id: "javascript-scope-closures-q-048",
    quizId: "quiz_javascript_scope_closures",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction outer() {\n  let count = 0;\n\n  function increment() {\n    count++;\n  }\n\n  function getCount() {\n    return count;\n  }\n\n  increment();\n  increment();\n\n  return getCount;\n}\n\nconst getCount = outer();\nconsole.log(getCount());",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "0" },
      { id: "C", text: "1" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`increment` and `getCount` close over the same `count` binding. The two increments occur before `getCount` is returned, leaving count equal to 2.",
    tags: ["closures", "shared-state", "nested-functions"]
  },

  {
    id: "javascript-scope-closures-q-049",
    quizId: "quiz_javascript_scope_closures",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which situation can cause unnecessary memory retention with closures?",
    options: [
      { id: "A", text: "Keeping a reachable closure that retains access to a large object or environment that is no longer otherwise needed." },
      { id: "B", text: "Calling a pure function with two parameters." },
      { id: "C", text: "Using a local variable inside a function and allowing the function to finish." },
      { id: "D", text: "Returning a primitive value from a function." }
    ],
    correctOptionId: "A",
    explanation: "A reachable closure can keep referenced data reachable as well. Carelessly retaining closures can therefore contribute to unnecessary memory usage.",
    tags: ["closures", "memory", "performance"]
  },

  {
    id: "javascript-scope-closures-q-050",
    quizId: "quiz_javascript_scope_closures",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best summarizes the relationship between lexical scope, scope chains, and closures?",
    options: [
      {
        id: "A",
        text: "Lexical scope determines where identifiers are available, the scope chain determines where JavaScript searches for them, and closures allow functions to retain access to relevant surrounding lexical environments."
      },
      {
        id: "B",
        text: "Lexical scope makes all variables global, while closures remove the need for scope chains."
      },
      {
        id: "C",
        text: "Scope chains are created only for asynchronous functions, and closures only work with `var`."
      },
      {
        id: "D",
        text: "Closures replace lexical scope and make variable declarations unnecessary."
      }
    ],
    correctOptionId: "A",
    explanation: "These three ideas are closely connected: lexical scope establishes visibility based on source-code structure, the scope chain governs identifier lookup through nested environments, and closures preserve access to surrounding environments when functions outlive their original execution context.",
    tags: ["scope", "scope-chain", "lexical-scope", "closures"]
  }
];

export default javascriptScopeClosuresQuestions;