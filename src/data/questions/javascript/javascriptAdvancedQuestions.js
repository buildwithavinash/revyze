const javascriptAdvancedQuestions = [
  {
    id: "javascript-advanced-q-001",
    quizId: "quiz_javascript_advanced",
    order: 1,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the JavaScript event loop primarily responsible for?",
    options: [
      { id: "A", text: "Coordinating execution of JavaScript code with queued asynchronous callbacks" },
      { id: "B", text: "Converting JavaScript into machine code before every function call" },
      { id: "C", text: "Creating a new JavaScript thread for every asynchronous operation" },
      { id: "D", text: "Preventing all synchronous code from blocking execution" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript execution is generally coordinated around a call stack and task queues. The event loop determines when queued work can be moved onto the call stack after the current synchronous work completes.",
    tags: ["event-loop", "async", "call-stack"]
  },

  {
    id: "javascript-advanced-q-002",
    quizId: "quiz_javascript_advanced",
    order: 2,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the call stack?",
    options: [
      { id: "A", text: "A structure that tracks currently executing function calls" },
      { id: "B", text: "A queue containing only Promise callbacks" },
      { id: "C", text: "A storage area for all browser events" },
      { id: "D", text: "A list of variables that have been garbage collected" }
    ],
    correctOptionId: "A",
    explanation: "The call stack keeps track of active execution contexts. When a function is called, an execution frame is pushed onto the stack, and it is removed when that function finishes.",
    tags: ["call-stack", "execution-context", "event-loop"]
  },

  {
    id: "javascript-advanced-q-003",
    quizId: "quiz_javascript_advanced",
    order: 3,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged first?\n\nconsole.log(\"A\");\n\nsetTimeout(() => {\n  console.log(\"B\");\n}, 0);\n\nconsole.log(\"C\");",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "The order is nondeterministic" }
    ],
    correctOptionId: "A",
    explanation: "The synchronous `console.log(\"A\")` executes immediately. The timer callback cannot execute until the current synchronous work has completed and the callback is eligible to be processed.",
    tags: ["event-loop", "setTimeout", "synchronous"]
  },

  {
    id: "javascript-advanced-q-004",
    quizId: "quiz_javascript_advanced",
    order: 4,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the output order?\n\nconsole.log(1);\n\nsetTimeout(() => console.log(2), 0);\n\nPromise.resolve().then(() => console.log(3));\n\nconsole.log(4);",
    options: [
      { id: "A", text: "1, 4, 3, 2" },
      { id: "B", text: "1, 3, 4, 2" },
      { id: "C", text: "1, 4, 2, 3" },
      { id: "D", text: "1, 2, 3, 4" }
    ],
    correctOptionId: "A",
    explanation: "The synchronous logs run first: `1` then `4`. The Promise reaction is a microtask and is processed before the timer task, so `3` comes before `2`.",
    tags: ["event-loop", "microtasks", "macrotasks", "Promise"]
  },

  {
    id: "javascript-advanced-q-005",
    quizId: "quiz_javascript_advanced",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a microtask in JavaScript?",
    options: [
      { id: "A", text: "A queued unit of work such as a Promise reaction that is processed after the current stack completes before the next task" },
      { id: "B", text: "Any callback scheduled with setTimeout" },
      { id: "C", text: "A function that always runs on a separate operating-system thread" },
      { id: "D", text: "A synchronous function with fewer than five statements" }
    ],
    correctOptionId: "A",
    explanation: "Promise reactions and other microtask sources are placed in the microtask queue. After the current JavaScript stack finishes, the runtime processes available microtasks before moving on to another task.",
    tags: ["microtasks", "Promise", "event-loop"]
  },

  {
    id: "javascript-advanced-q-006",
    quizId: "quiz_javascript_advanced",
    order: 6,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens here?\n\nconsole.log(\"start\");\n\nqueueMicrotask(() => console.log(\"microtask\"));\n\nconsole.log(\"end\");",
    options: [
      { id: "A", text: "start, end, microtask" },
      { id: "B", text: "start, microtask, end" },
      { id: "C", text: "microtask, start, end" },
      { id: "D", text: "end, start, microtask" }
    ],
    correctOptionId: "A",
    explanation: "The microtask is queued while synchronous code is still executing. Therefore `end` is logged first, and the microtask runs after the current synchronous stack completes.",
    tags: ["microtasks", "queueMicrotask", "synchronous"]
  },

  {
    id: "javascript-advanced-q-007",
    quizId: "quiz_javascript_advanced",
    order: 7,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nPromise.resolve()\n  .then(() => console.log(\"A\"))\n  .then(() => console.log(\"B\"));\n\nconsole.log(\"C\");",
    options: [
      { id: "A", text: "C, A, B" },
      { id: "B", text: "A, B, C" },
      { id: "C", text: "C, B, A" },
      { id: "D", text: "A, C, B" }
    ],
    correctOptionId: "A",
    explanation: "`console.log(\"C\")` is synchronous. The first `.then()` runs afterward as a microtask, and the second `.then()` is scheduled by the first reaction, so `B` follows `A`.",
    tags: ["Promise", "microtasks", "chaining", "event-loop"]
  },

  {
    id: "javascript-advanced-q-008",
    quizId: "quiz_javascript_advanced",
    order: 8,
    type: "code",
    difficulty: "Advanced",
    question: "What is the output order?\n\nsetTimeout(() => console.log(\"timer\"), 0);\n\nPromise.resolve().then(() => {\n  console.log(\"promise\");\n});\n\nconsole.log(\"sync\");",
    options: [
      { id: "A", text: "sync, promise, timer" },
      { id: "B", text: "promise, sync, timer" },
      { id: "C", text: "timer, sync, promise" },
      { id: "D", text: "sync, timer, promise" }
    ],
    correctOptionId: "A",
    explanation: "Synchronous code executes first. The Promise reaction is a microtask, which is processed before the timer task.",
    tags: ["event-loop", "microtasks", "setTimeout", "Promise"]
  },

  {
    id: "javascript-advanced-q-009",
    quizId: "quiz_javascript_advanced",
    order: 9,
    type: "mcq",
    difficulty: "Advanced",
    question: "What can happen if code continuously schedules new microtasks?",
    options: [
      { id: "A", text: "Other queued tasks may be delayed because microtasks are processed before moving to the next task" },
      { id: "B", text: "The call stack is automatically cleared after every microtask" },
      { id: "C", text: "Timers are guaranteed to run before microtasks" },
      { id: "D", text: "The browser converts the microtasks into synchronous function calls" }
    ],
    correctOptionId: "A",
    explanation: "Because the runtime processes microtasks before proceeding to another task, continuously creating microtasks can delay timers, rendering opportunities, and other task-level work.",
    tags: ["microtasks", "starvation", "event-loop"]
  },

  {
    id: "javascript-advanced-q-010",
    quizId: "quiz_javascript_advanced",
    order: 10,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes JavaScript's usual single-threaded execution model?",
    options: [
      { id: "A", text: "JavaScript code generally executes one call-stack operation at a time, while the host can provide asynchronous facilities" },
      { id: "B", text: "Every JavaScript function executes simultaneously" },
      { id: "C", text: "Promises create a new JavaScript thread for every callback" },
      { id: "D", text: "The event loop makes all JavaScript code parallel" }
    ],
    correctOptionId: "A",
    explanation: "The JavaScript execution model generally processes one piece of JavaScript at a time on the main execution thread. The host environment can perform or coordinate asynchronous operations outside the JavaScript call stack.",
    tags: ["single-threaded", "event-loop", "async"]
  },

  {
    id: "javascript-advanced-q-011",
    quizId: "quiz_javascript_advanced",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a closure?",
    options: [
      { id: "A", text: "A function together with access to variables from its surrounding lexical scope" },
      { id: "B", text: "A function that must return another function" },
      { id: "C", text: "A function that can only run once" },
      { id: "D", text: "A variable stored automatically on window" }
    ],
    correctOptionId: "A",
    explanation: "A closure occurs when a function retains access to bindings from its lexical environment even after the surrounding function has finished executing.",
    tags: ["closures", "lexical-scope", "functions"]
  },

  {
    id: "javascript-advanced-q-012",
    quizId: "quiz_javascript_advanced",
    order: 12,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nfunction createCounter() {\n  let count = 0;\n\n  return () => ++count;\n}\n\nconst counter = createCounter();\n\nconsole.log(counter());\nconsole.log(counter());",
    options: [
      { id: "A", text: "1 then 2" },
      { id: "B", text: "1 then 1" },
      { id: "C", text: "0 then 0" },
      { id: "D", text: "2 then 2" }
    ],
    correctOptionId: "A",
    explanation: "The returned function closes over `count`. The binding remains accessible between calls, so the first call changes it to 1 and the second changes it to 2.",
    tags: ["closures", "lexical-scope", "state"]
  },

  {
    id: "javascript-advanced-q-013",
    quizId: "quiz_javascript_advanced",
    order: 13,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\n\nconst a = createCounter();\nconst b = createCounter();\n\nconsole.log(a(), b(), a());",
    options: [
      { id: "A", text: "1, 1, 2" },
      { id: "B", text: "1, 2, 3" },
      { id: "C", text: "1, 1, 1" },
      { id: "D", text: "2, 2, 2" }
    ],
    correctOptionId: "A",
    explanation: "Each invocation of `createCounter()` creates a separate lexical environment and therefore a separate `count` binding. `a` and `b` maintain independent state.",
    tags: ["closures", "lexical-scope", "state", "factory-functions"]
  },

  {
    id: "javascript-advanced-q-014",
    quizId: "quiz_javascript_advanced",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are closures useful for encapsulation?",
    options: [
      { id: "A", text: "They can keep state accessible to selected functions without exposing the binding directly as a global" },
      { id: "B", text: "They automatically encrypt variables in memory" },
      { id: "C", text: "They prevent garbage collection" },
      { id: "D", text: "They make every variable immutable" }
    ],
    correctOptionId: "A",
    explanation: "Closures allow functions to retain access to private lexical bindings. Other code cannot directly access those local bindings unless the closure exposes operations that interact with them.",
    tags: ["closures", "encapsulation", "private-state"]
  },

  {
    id: "javascript-advanced-q-015",
    quizId: "quiz_javascript_advanced",
    order: 15,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nfunction outer() {\n  let value = 10;\n\n  return function inner() {\n    return value;\n  };\n}\n\nconst fn = outer();\nconsole.log(fn());",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "undefined" },
      { id: "C", text: "null" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "`inner` closes over the lexical environment of `outer`, so it retains access to `value` after `outer()` has returned.",
    tags: ["closures", "lexical-scope", "execution"]
  },

  {
    id: "javascript-advanced-q-016",
    quizId: "quiz_javascript_advanced",
    order: 16,
    type: "code",
    difficulty: "Advanced",
    question: "What does this function demonstrate?\n\nfunction once(fn) {\n  let called = false;\n  let result;\n\n  return (...args) => {\n    if (!called) {\n      called = true;\n      result = fn(...args);\n    }\n    return result;\n  };\n}",
    options: [
      { id: "A", text: "A closure-based function that preserves private state between calls" },
      { id: "B", text: "A function that always executes fn twice" },
      { id: "C", text: "A recursive function" },
      { id: "D", text: "A function that disables lexical scope" }
    ],
    correctOptionId: "A",
    explanation: "The returned function closes over `called` and `result`, allowing it to remember whether `fn` has already executed and reuse its result.",
    tags: ["closures", "higher-order-functions", "encapsulation"]
  },

  {
    id: "javascript-advanced-q-017",
    quizId: "quiz_javascript_advanced",
    order: 17,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nconst funcs = [];\n\nfor (let i = 0; i < 3; i++) {\n  funcs.push(() => i);\n}\n\nconsole.log(funcs[0](), funcs[1](), funcs[2]());",
    options: [
      { id: "A", text: "0, 1, 2" },
      { id: "B", text: "3, 3, 3" },
      { id: "C", text: "0, 0, 0" },
      { id: "D", text: "2, 2, 2" }
    ],
    correctOptionId: "A",
    explanation: "`let` creates a separate binding for each loop iteration in this context. Each arrow function closes over the binding for its corresponding iteration.",
    tags: ["closures", "let", "loops", "lexical-scope"]
  },

  {
    id: "javascript-advanced-q-018",
    quizId: "quiz_javascript_advanced",
    order: 18,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nconst funcs = [];\n\nfor (var i = 0; i < 3; i++) {\n  funcs.push(() => i);\n}\n\nconsole.log(funcs[0](), funcs[1](), funcs[2]());",
    options: [
      { id: "A", text: "3, 3, 3" },
      { id: "B", text: "0, 1, 2" },
      { id: "C", text: "0, 0, 0" },
      { id: "D", text: "2, 2, 2" }
    ],
    correctOptionId: "A",
    explanation: "`var` creates one function-scoped binding for `i`. All three closures reference that same binding, whose value is 3 after the loop finishes.",
    tags: ["closures", "var", "loops", "lexical-scope"]
  },

  {
    id: "javascript-advanced-q-019",
    quizId: "quiz_javascript_advanced",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is lexical scoping?",
    options: [
      { id: "A", text: "The rule that determines variable access based on where code is written in the source" },
      { id: "B", text: "A rule where variables are resolved based on which function calls them" },
      { id: "C", text: "A mechanism that makes all variables global" },
      { id: "D", text: "A special form of dynamic import" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript uses lexical scoping: the structure of the source code determines which surrounding bindings a function can access.",
    tags: ["lexical-scope", "closures", "scope"]
  },

  {
    id: "javascript-advanced-q-020",
    quizId: "quiz_javascript_advanced",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this usually refer to in a normal JavaScript function?",
    options: [
      { id: "A", text: "The object or context determined by how the function is called" },
      { id: "B", text: "Always the object where the function was originally written" },
      { id: "C", text: "Always the global object" },
      { id: "D", text: "Always the function itself" }
    ],
    correctOptionId: "A",
    explanation: "For normal functions, `this` is determined by the call site and invocation form. It is not simply determined by where the function was defined.",
    tags: ["this", "function-invocation", "binding"]
  },

  {
    id: "javascript-advanced-q-021",
    quizId: "quiz_javascript_advanced",
    order: 21,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nconst user = {\n  name: \"Avi\",\n  greet() {\n    return this.name;\n  }\n};\n\nconsole.log(user.greet());",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "undefined" },
      { id: "C", text: "user" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "The function is called as `user.greet()`, so the receiver of the method call becomes `this`. Therefore `this.name` resolves to `user.name`.",
    tags: ["this", "method-call", "object"]
  },

  {
    id: "javascript-advanced-q-022",
    quizId: "quiz_javascript_advanced",
    order: 22,
    type: "code",
    difficulty: "Advanced",
    question: "What is the likely result in strict mode?\n\n\"use strict\";\n\nconst user = {\n  name: \"Avi\",\n  greet() {\n    return this.name;\n  }\n};\n\nconst fn = user.greet;\nconsole.log(fn());",
    options: [
      { id: "A", text: "A TypeError because this is undefined and accessing this.name fails" },
      { id: "B", text: "Avi" },
      { id: "C", text: "undefined" },
      { id: "D", text: "user" }
    ],
    correctOptionId: "A",
    explanation: "Extracting the method removes the `user.` receiver. In strict mode, a plain function call gives `this` the value `undefined`, so `this.name` throws.",
    tags: ["this", "strict-mode", "method-extraction"]
  },

  {
    id: "javascript-advanced-q-023",
    quizId: "quiz_javascript_advanced",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How does an arrow function's this behavior differ from a normal function?",
    options: [
      { id: "A", text: "An arrow function does not have its own this binding and instead uses the surrounding lexical this" },
      { id: "B", text: "An arrow function always binds this to window" },
      { id: "C", text: "An arrow function always binds this to the object before the dot" },
      { id: "D", text: "An arrow function creates a new this object on every call" }
    ],
    correctOptionId: "A",
    explanation: "Arrow functions capture `this` lexically from their surrounding context. They do not establish their own dynamic `this` binding.",
    tags: ["this", "arrow-functions", "lexical-this"]
  },

  {
    id: "javascript-advanced-q-024",
    quizId: "quiz_javascript_advanced",
    order: 24,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nconst user = {\n  name: \"Avi\",\n  greet() {\n    const fn = () => this.name;\n    return fn();\n  }\n};\n\nconsole.log(user.greet());",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "undefined" },
      { id: "C", text: "TypeError" },
      { id: "D", text: "fn" }
    ],
    correctOptionId: "A",
    explanation: "`greet()` is called as a method, so its `this` is `user`. The arrow function captures that same `this` lexically.",
    tags: ["this", "arrow-functions", "closures"]
  },

  {
    id: "javascript-advanced-q-025",
    quizId: "quiz_javascript_advanced",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does Function.prototype.call() allow you to do?",
    options: [
      { id: "A", text: "Invoke a function immediately with an explicitly supplied this value and arguments" },
      { id: "B", text: "Create a closure automatically" },
      { id: "C", text: "Delay a function until the next event-loop iteration" },
      { id: "D", text: "Convert a normal function into an arrow function" }
    ],
    correctOptionId: "A",
    explanation: "`call()` invokes the function immediately and lets you specify the value used as `this`, followed by individual arguments.",
    tags: ["this", "call", "function-methods"]
  },

  {
    id: "javascript-advanced-q-026",
    quizId: "quiz_javascript_advanced",
    order: 26,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nfunction greet() {\n  return `Hi ${this.name}`;\n}\n\nconst user = { name: \"Avi\" };\n\nconsole.log(greet.call(user));",
    options: [
      { id: "A", text: "Hi Avi" },
      { id: "B", text: "Hi undefined" },
      { id: "C", text: "Hi user" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`call(user)` explicitly sets `this` to the `user` object for that invocation, so `this.name` is `Avi`.",
    tags: ["this", "call", "explicit-binding"]
  },

  {
    id: "javascript-advanced-q-027",
    quizId: "quiz_javascript_advanced",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary difference between call() and apply()?",
    options: [
      { id: "A", text: "call() receives arguments individually, while apply() receives them as an array-like collection" },
      { id: "B", text: "apply() permanently binds this while call() does not" },
      { id: "C", text: "call() is asynchronous while apply() is synchronous" },
      { id: "D", text: "apply() only works with arrow functions" }
    ],
    correctOptionId: "A",
    explanation: "Both invoke a function immediately with an explicit `this`. The main difference is how arguments are supplied.",
    tags: ["this", "call", "apply"]
  },

  {
    id: "javascript-advanced-q-028",
    quizId: "quiz_javascript_advanced",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does bind() do?",
    options: [
      { id: "A", text: "Creates a new function with this and optionally some arguments permanently bound for future calls" },
      { id: "B", text: "Immediately executes the original function" },
      { id: "C", text: "Queues the function as a microtask" },
      { id: "D", text: "Creates a Promise from the function" }
    ],
    correctOptionId: "A",
    explanation: "`bind()` does not invoke the function immediately. It returns a new function whose `this` and optionally initial arguments are bound.",
    tags: ["this", "bind", "explicit-binding"]
  },

  {
    id: "javascript-advanced-q-029",
    quizId: "quiz_javascript_advanced",
    order: 29,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nconst user = { name: \"Avi\" };\n\nfunction greet(greeting) {\n  return `${greeting}, ${this.name}`;\n}\n\nconst bound = greet.bind(user, \"Hello\");\nconsole.log(bound());",
    options: [
      { id: "A", text: "Hello, Avi" },
      { id: "B", text: "Hello, undefined" },
      { id: "C", text: "undefined, Avi" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`bind()` fixes `this` to `user` and also pre-fills the first argument with `Hello`. Calling `bound()` therefore produces `Hello, Avi`.",
    tags: ["this", "bind", "partial-application"]
  },

  {
    id: "javascript-advanced-q-030",
    quizId: "quiz_javascript_advanced",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a higher-order function?",
    options: [
      { id: "A", text: "A function that accepts another function as an argument, returns a function, or both" },
      { id: "B", text: "A function that can only contain more than ten lines" },
      { id: "C", text: "A function that must be recursive" },
      { id: "D", text: "A function that executes only asynchronously" }
    ],
    correctOptionId: "A",
    explanation: "Functions are first-class values in JavaScript, so functions can be passed around and returned. A higher-order function uses that capability by accepting and/or returning functions.",
    tags: ["higher-order-functions", "first-class-functions", "functional-programming"]
  },

  {
    id: "javascript-advanced-q-031",
    quizId: "quiz_javascript_advanced",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "Why is map() considered a higher-order function?",
    options: [
      { id: "A", text: "It accepts a callback function as an argument" },
      { id: "B", text: "It always returns a function" },
      { id: "C", text: "It creates a Promise" },
      { id: "D", text: "It changes this automatically" }
    ],
    correctOptionId: "A",
    explanation: "`map()` accepts a callback function that determines how each element is transformed. Accepting a function makes it a higher-order function.",
    tags: ["higher-order-functions", "map", "callbacks"]
  },

  {
    id: "javascript-advanced-q-032",
    quizId: "quiz_javascript_advanced",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this function return?\n\nfunction multiplier(factor) {\n  return function (value) {\n    return value * factor;\n  };\n}\n\nconst double = multiplier(2);\nconsole.log(double(5));",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "7" },
      { id: "C", text: "5" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The returned function closes over `factor`. `double` therefore retains the value 2 and multiplies its argument 5 by it.",
    tags: ["closures", "higher-order-functions", "factory-functions"]
  },

  {
    id: "javascript-advanced-q-033",
    quizId: "quiz_javascript_advanced",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is currying?",
    options: [
      { id: "A", text: "Transforming a function that takes multiple arguments into a sequence of functions that each take one argument" },
      { id: "B", text: "Calling a function recursively until it returns null" },
      { id: "C", text: "Binding this to an object" },
      { id: "D", text: "Converting a Promise into a callback" }
    ],
    correctOptionId: "A",
    explanation: "Currying transforms a multi-argument function into nested single-argument functions, allowing arguments to be supplied one at a time.",
    tags: ["currying", "functional-programming", "higher-order-functions"]
  },

  {
    id: "javascript-advanced-q-034",
    quizId: "quiz_javascript_advanced",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "Which implementation is a curried version of add(a, b)?",
    options: [
      { id: "A", text: "const add = a => b => a + b;" },
      { id: "B", text: "const add = (a, b) => a + b;" },
      { id: "C", text: "const add = a + b;" },
      { id: "D", text: "const add = () => a + b;" }
    ],
    correctOptionId: "A",
    explanation: "`a => b => a + b` returns a function after receiving `a`. That returned function receives `b`, making the function curried.",
    tags: ["currying", "arrow-functions", "higher-order-functions"]
  },

  {
    id: "javascript-advanced-q-035",
    quizId: "quiz_javascript_advanced",
    order: 35,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nconst add = a => b => a + b;\n\nconsole.log(add(2)(3));",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "23" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`add(2)` returns a function that closes over `a = 2`. Calling that function with 3 produces `2 + 3`, which is 5.",
    tags: ["currying", "closures", "higher-order-functions"]
  },

  {
    id: "javascript-advanced-q-036",
    quizId: "quiz_javascript_advanced",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is partial application?",
    options: [
      { id: "A", text: "Creating a new function by pre-filling some arguments of an existing function" },
      { id: "B", text: "Executing only half of a function's statements" },
      { id: "C", text: "Converting every function into a Promise" },
      { id: "D", text: "Removing some parameters from a function declaration" }
    ],
    correctOptionId: "A",
    explanation: "Partial application fixes some arguments ahead of time and returns a new function that accepts the remaining arguments.",
    tags: ["partial-application", "functional-programming", "bind"]
  },

  {
    id: "javascript-advanced-q-037",
    quizId: "quiz_javascript_advanced",
    order: 37,
    type: "code",
    difficulty: "Advanced",
    question: "Which statement best describes the difference between currying and partial application?",
    options: [
      { id: "A", text: "Currying transforms argument structure into a sequence of functions, while partial application pre-fills some arguments" },
      { id: "B", text: "They are exactly the same technique in every implementation" },
      { id: "C", text: "Partial application only works with classes" },
      { id: "D", text: "Currying changes this while partial application changes prototypes" }
    ],
    correctOptionId: "A",
    explanation: "Both techniques can create specialized functions, but they do so differently. Currying changes a function's calling structure; partial application fixes selected arguments.",
    tags: ["currying", "partial-application", "functional-programming"]
  },

  {
    id: "javascript-advanced-q-038",
    quizId: "quiz_javascript_advanced",
    order: 38,
    type: "code",
    difficulty: "Advanced",
    question: "What does this function demonstrate?\n\nconst compose = (f, g) => value => f(g(value));\n\nconst double = x => x * 2;\nconst addOne = x => x + 1;\n\nconst result = compose(double, addOne);\nconsole.log(result(3));",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "7" },
      { id: "C", text: "6" },
      { id: "D", text: "4" }
    ],
    correctOptionId: "A",
    explanation: "`compose(double, addOne)` creates a function that first applies `addOne` to 3, producing 4, then applies `double`, producing 8.",
    tags: ["function-composition", "higher-order-functions", "closures"]
  },

  {
    id: "javascript-advanced-q-039",
    quizId: "quiz_javascript_advanced",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is function composition?",
    options: [
      { id: "A", text: "Combining functions so the output of one becomes the input of another" },
      { id: "B", text: "Combining two objects into one prototype" },
      { id: "C", text: "Calling two unrelated functions simultaneously" },
      { id: "D", text: "Creating a class from multiple constructors" }
    ],
    correctOptionId: "A",
    explanation: "Composition builds a larger operation by connecting smaller functions, where one function's result feeds into another function.",
    tags: ["function-composition", "higher-order-functions", "functional-programming"]
  },

  {
    id: "javascript-advanced-q-040",
    quizId: "quiz_javascript_advanced",
    order: 40,
    type: "code",
    difficulty: "Advanced",
    question: "What is the main issue with this debounce implementation if the returned function is recreated on every render of a UI component?\n\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}",
    options: [
      { id: "A", text: "Recreating it can create separate timer state, preventing calls from being coordinated through one persistent closure" },
      { id: "B", text: "debounce cannot use closures" },
      { id: "C", text: "clearTimeout always cancels every timer in the application" },
      { id: "D", text: "setTimeout executes synchronously" }
    ],
    correctOptionId: "A",
    explanation: "The `timer` variable belongs to the closure created by each returned function. If a new debounced function is created repeatedly, each instance can have its own timer, defeating the intended shared debounce behavior.",
    tags: ["closures", "debounce", "higher-order-functions", "state"]
  },

  {
    id: "javascript-advanced-q-041",
    quizId: "quiz_javascript_advanced",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nfunction outer() {\n  let x = 1;\n\n  return function () {\n    x += 1;\n    return x;\n  };\n}\n\nconst fn = outer();\nconsole.log(fn());\nconsole.log(fn());",
    options: [
      { id: "A", text: "2 then 3" },
      { id: "B", text: "1 then 2" },
      { id: "C", text: "2 then 2" },
      { id: "D", text: "3 then 3" }
    ],
    correctOptionId: "A",
    explanation: "The closure retains the mutable `x` binding. The first call increments it from 1 to 2, and the second increments the same binding from 2 to 3.",
    tags: ["closures", "mutable-state", "lexical-scope"]
  },

  {
    id: "javascript-advanced-q-042",
    quizId: "quiz_javascript_advanced",
    order: 42,
    type: "code",
    difficulty: "Advanced",
    question: "What is the output?\n\nconsole.log(\"start\");\n\nsetTimeout(() => {\n  console.log(\"timeout\");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log(\"promise-1\");\n}).then(() => {\n  console.log(\"promise-2\");\n});\n\nconsole.log(\"end\");",
    options: [
      { id: "A", text: "start, end, promise-1, promise-2, timeout" },
      { id: "B", text: "start, end, timeout, promise-1, promise-2" },
      { id: "C", text: "start, promise-1, promise-2, end, timeout" },
      { id: "D", text: "start, timeout, end, promise-1, promise-2" }
    ],
    correctOptionId: "A",
    explanation: "The synchronous logs happen first. Promise reactions are microtasks, so both Promise callbacks are processed before the timer task. The second reaction is queued by the first.",
    tags: ["event-loop", "microtasks", "Promise", "setTimeout"]
  },

  {
    id: "javascript-advanced-q-043",
    quizId: "quiz_javascript_advanced",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nconst obj = {\n  value: 10,\n  getValue() {\n    return this.value;\n  }\n};\n\nconst get = obj.getValue.bind(obj);\nobj.value = 20;\n\nconsole.log(get());",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "10" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`bind(obj)` permanently binds `this` to the object reference. The function reads `this.value` when it is called, after the object's value has changed to 20.",
    tags: ["this", "bind", "object-mutation"]
  },

  {
    id: "javascript-advanced-q-044",
    quizId: "quiz_javascript_advanced",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nfunction createMultiplier(multiplier) {\n  return value => value * multiplier;\n}\n\nconst triple = createMultiplier(3);\n\nconsole.log(triple(4));",
    options: [
      { id: "A", text: "12" },
      { id: "B", text: "7" },
      { id: "C", text: "4" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`triple` is a closure over `multiplier = 3`. When called with 4, it evaluates `4 * 3` and returns 12.",
    tags: ["closures", "higher-order-functions", "factory-functions"]
  },

  {
    id: "javascript-advanced-q-045",
    quizId: "quiz_javascript_advanced",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can closures increase memory usage if used carelessly?",
    options: [
      { id: "A", text: "A closure can keep referenced data reachable for as long as the closure itself remains reachable" },
      { id: "B", text: "Closures disable garbage collection globally" },
      { id: "C", text: "Every closure creates a permanent operating-system thread" },
      { id: "D", text: "Closures automatically copy every object in the program" }
    ],
    correctOptionId: "A",
    explanation: "Garbage collection can reclaim objects that are no longer reachable. If a live closure retains references to data, that data remains reachable and cannot be collected merely because the outer function returned.",
    tags: ["closures", "memory", "garbage-collection"]
  },

  {
    id: "javascript-advanced-q-046",
    quizId: "quiz_javascript_advanced",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "A developer wants to preserve an object's method context when passing the method as a callback. Which option is appropriate?\n\nconst user = {\n  name: \"Avi\",\n  greet() {\n    return this.name;\n  }\n};",
    options: [
      { id: "A", text: "const callback = user.greet.bind(user);" },
      { id: "B", text: "const callback = user.greet;" },
      { id: "C", text: "const callback = () => user;" },
      { id: "D", text: "const callback = user.greet.call;" }
    ],
    correctOptionId: "A",
    explanation: "Passing `user.greet` by itself can lose the receiver. `bind(user)` creates a function whose `this` is explicitly fixed to the `user` object.",
    tags: ["this", "bind", "callbacks"]
  },

  {
    id: "javascript-advanced-q-047",
    quizId: "quiz_javascript_advanced",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "What does this pattern demonstrate?\n\nfunction withLogging(fn) {\n  return (...args) => {\n    console.log(\"calling\");\n    return fn(...args);\n  };\n}",
    options: [
      { id: "A", text: "A higher-order function used to wrap another function and add behavior" },
      { id: "B", text: "A recursive function that calls itself" },
      { id: "C", text: "A constructor function using prototype inheritance" },
      { id: "D", text: "A function that changes the event loop priority" }
    ],
    correctOptionId: "A",
    explanation: "`withLogging` accepts a function and returns a new function that adds logging before delegating to the original function. This is a common higher-order function/decorator pattern.",
    tags: ["higher-order-functions", "closures", "decorators", "callbacks"]
  },

  {
    id: "javascript-advanced-q-048",
    quizId: "quiz_javascript_advanced",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "Consider:\n\nfunction curryAdd(a) {\n  return function (b) {\n    return function (c) {\n      return a + b + c;\n    };\n  };\n}\n\nconst result = curryAdd(1)(2)(3);\n\nWhat is result?",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "5" },
      { id: "C", text: "123" },
      { id: "D", text: "A function" }
    ],
    correctOptionId: "A",
    explanation: "Each invocation supplies one argument and returns the next function. The final function has access to all three arguments through closures and returns `1 + 2 + 3`.",
    tags: ["currying", "closures", "higher-order-functions"]
  },

  {
    id: "javascript-advanced-q-049",
    quizId: "quiz_javascript_advanced",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A developer writes:\n\nfunction runLater() {\n  let value = 10;\n\n  setTimeout(() => {\n    console.log(value);\n  }, 1000);\n\n  value = 20;\n}\n\nrunLater();\n\nWhat will the callback log when it executes?",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "10" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "The callback closes over the `value` binding, not a frozen copy of its initial value. Before the callback runs, `value` is reassigned to 20, so the closure observes 20.",
    tags: ["closures", "setTimeout", "async", "lexical-scope"]
  },

  {
    id: "javascript-advanced-q-050",
    quizId: "quiz_javascript_advanced",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "A frontend application needs a reusable search utility that waits until the user stops typing before making an API request. The utility must preserve its timer between calls and allow the original search function to receive the latest arguments. Which design best matches the required concepts?",
    options: [
      {
        id: "A",
        text: "Create a higher-order debounce function that returns a closure containing the timer, clears the previous timer on each call, and schedules the latest invocation"
      },
      {
        id: "B",
        text: "Call the API synchronously on every keystroke and rely on the event loop to remove duplicate requests"
      },
      {
        id: "C",
        text: "Use a global timer variable shared by every search input in the application"
      },
      {
        id: "D",
        text: "Use Promise.resolve() on every keystroke and assume microtasks automatically debounce the requests"
      }
    ],
    correctOptionId: "A",
    explanation: "A debounce utility is naturally implemented as a higher-order function that returns a closure. The closure preserves timer state between calls, `clearTimeout()` cancels the previous pending call, and the latest arguments can be captured for the eventual invocation.",
    tags: ["closures", "higher-order-functions", "debounce", "event-loop", "callbacks"]
  }
];

export default javascriptAdvancedQuestions;