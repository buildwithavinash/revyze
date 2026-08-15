const javascriptFunctionsQuestions = [
  {
    id: "javascript-functions-q-001",
    quizId: "quiz_javascript_functions",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of a JavaScript function?",
    options: [
      { id: "A", text: "To package reusable behavior that can be executed when called." },
      { id: "B", text: "To permanently store data in the browser." },
      { id: "C", text: "To create HTML elements automatically." },
      { id: "D", text: "To define CSS styles." }
    ],
    correctOptionId: "A",
    explanation: "A function packages a set of instructions into a reusable unit that can be invoked whenever the program needs that behavior.",
    tags: ["functions", "fundamentals", "reusability"]
  },

  {
    id: "javascript-functions-q-002",
    quizId: "quiz_javascript_functions",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly declares a named JavaScript function?",
    options: [
      { id: "A", text: "function greet() { }" },
      { id: "B", text: "def greet() { }" },
      { id: "C", text: "func greet() { }" },
      { id: "D", text: "function: greet() { }" }
    ],
    correctOptionId: "A",
    explanation: "A traditional function declaration uses the `function` keyword followed by the function name and parameter list.",
    tags: ["function-declaration", "syntax"]
  },

  {
    id: "javascript-functions-q-003",
    quizId: "quiz_javascript_functions",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfunction greet() {\n  console.log(\"Hello\");\n}\n\ngreet();",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "greet" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "Calling `greet()` executes the function body, which logs `Hello`.",
    tags: ["function-call", "function-declaration"]
  },

  {
    id: "javascript-functions-q-004",
    quizId: "quiz_javascript_functions",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a parameter?",
    options: [
      { id: "A", text: "A named variable listed in a function definition that receives an argument when the function is called." },
      { id: "B", text: "The value printed by console.log." },
      { id: "C", text: "The name of the JavaScript file." },
      { id: "D", text: "A function that calls another function." }
    ],
    correctOptionId: "A",
    explanation: "Parameters are placeholders declared by the function. Arguments are the actual values supplied when the function is invoked.",
    tags: ["parameters", "arguments", "functions"]
  },

  {
    id: "javascript-functions-q-005",
    quizId: "quiz_javascript_functions",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfunction greet(name) {\n  console.log(name);\n}\n\ngreet(\"Avi\");",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "name" },
      { id: "C", text: "undefined" },
      { id: "D", text: "\"name\"" }
    ],
    correctOptionId: "A",
    explanation: "`\"Avi\"` is passed as the argument and becomes the value of the `name` parameter during the call.",
    tags: ["parameters", "arguments", "function-call"]
  },

  {
    id: "javascript-functions-q-006",
    quizId: "quiz_javascript_functions",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an argument in a function call?",
    options: [
      { id: "A", text: "The actual value supplied to a function parameter." },
      { id: "B", text: "The function's name." },
      { id: "C", text: "The return keyword." },
      { id: "D", text: "The function body." }
    ],
    correctOptionId: "A",
    explanation: "Arguments are the actual values passed into a function when it is invoked.",
    tags: ["arguments", "parameters"]
  },

  {
    id: "javascript-functions-q-007",
    quizId: "quiz_javascript_functions",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "What is returned?\n\nfunction add(a, b) {\n  return a + b;\n}\n\nconst result = add(4, 6);",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "46" },
      { id: "C", text: "undefined" },
      { id: "D", text: "4" }
    ],
    correctOptionId: "A",
    explanation: "The function adds the two parameters and explicitly returns the result. Therefore `result` becomes 10.",
    tags: ["return", "parameters", "function-call"]
  },

  {
    id: "javascript-functions-q-008",
    quizId: "quiz_javascript_functions",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when a function reaches a `return` statement?",
    options: [
      { id: "A", text: "The function immediately completes and provides the specified return value to its caller." },
      { id: "B", text: "The function automatically runs again." },
      { id: "C", text: "All functions in the program stop." },
      { id: "D", text: "The return value is automatically printed." }
    ],
    correctOptionId: "A",
    explanation: "`return` ends the current function invocation and optionally supplies a value to the caller.",
    tags: ["return", "functions"]
  },

  {
    id: "javascript-functions-q-009",
    quizId: "quiz_javascript_functions",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What is the value of `result`?\n\nfunction multiply(a, b) {\n  return a * b;\n}\n\nconst result = multiply(3, 5);",
    options: [
      { id: "A", text: "15" },
      { id: "B", text: "8" },
      { id: "C", text: "35" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The function returns 3 × 5, which is 15.",
    tags: ["return", "parameters", "arithmetic"]
  },

  {
    id: "javascript-functions-q-010",
    quizId: "quiz_javascript_functions",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfunction greet() {\n  \"Hello\";\n}\n\nconsole.log(greet());",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "Hello" },
      { id: "C", text: "\"Hello\"" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "The function contains no `return` statement. Simply writing a string expression inside the function does not return it, so the function returns `undefined`.",
    tags: ["return", "undefined", "functions"]
  },

  {
    id: "javascript-functions-q-011",
    quizId: "quiz_javascript_functions",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax creates a function expression?",
    options: [
      { id: "A", text: "const greet = function() { };" },
      { id: "B", text: "function = greet() { };" },
      { id: "C", text: "const function greet() { };" },
      { id: "D", text: "greet function() { };" }
    ],
    correctOptionId: "A",
    explanation: "A function expression creates a function value and assigns it to a variable. Here the function is assigned to `greet`.",
    tags: ["function-expression", "functions"]
  },

  {
    id: "javascript-functions-q-012",
    quizId: "quiz_javascript_functions",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst greet = function() {\n  return \"Hello\";\n};\n\nconsole.log(greet());",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "greet" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The function expression is stored in `greet`, and calling `greet()` executes it and returns `Hello`.",
    tags: ["function-expression", "return", "function-call"]
  },

  {
    id: "javascript-functions-q-013",
    quizId: "quiz_javascript_functions",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an anonymous function?",
    options: [
      { id: "A", text: "A function expression that does not have its own function name." },
      { id: "B", text: "A function that cannot be called." },
      { id: "C", text: "A function with no parameters." },
      { id: "D", text: "A function that always returns undefined." }
    ],
    correctOptionId: "A",
    explanation: "An anonymous function is a function without an explicit function name, commonly used in function expressions and callbacks.",
    tags: ["anonymous-functions", "function-expression"]
  },

  {
    id: "javascript-functions-q-014",
    quizId: "quiz_javascript_functions",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax defines an arrow function with one parameter and an implicit expression return?",
    options: [
      { id: "A", text: "const double = n => n * 2;" },
      { id: "B", text: "const double => n = n * 2;" },
      { id: "C", text: "arrow double(n) { return n * 2; }" },
      { id: "D", text: "const double = function => n * 2;" }
    ],
    correctOptionId: "A",
    explanation: "Arrow functions can omit parentheses around a single parameter and can use an expression body for an implicit return.",
    tags: ["arrow-functions", "return", "syntax"]
  },

  {
    id: "javascript-functions-q-015",
    quizId: "quiz_javascript_functions",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst double = n => n * 2;\nconsole.log(double(7));",
    options: [
      { id: "A", text: "14" },
      { id: "B", text: "7" },
      { id: "C", text: "72" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The arrow function implicitly returns `n * 2`. With n equal to 7, the result is 14.",
    tags: ["arrow-functions", "implicit-return"]
  },

  {
    id: "javascript-functions-q-016",
    quizId: "quiz_javascript_functions",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which arrow function syntax correctly handles multiple parameters?",
    options: [
      { id: "A", text: "const add = (a, b) => a + b;" },
      { id: "B", text: "const add = a, b => a + b;" },
      { id: "C", text: "const add = [a, b] => a + b;" },
      { id: "D", text: "const add = function(a, b) => a + b;" }
    ],
    correctOptionId: "A",
    explanation: "Arrow functions require parentheses around multiple parameters.",
    tags: ["arrow-functions", "parameters"]
  },

  {
    id: "javascript-functions-q-017",
    quizId: "quiz_javascript_functions",
    order: 17,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst add = (a, b) => a + b;\nconsole.log(add(2, 8));",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "28" },
      { id: "C", text: "16" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The arrow function receives 2 and 8 and implicitly returns their sum, 10.",
    tags: ["arrow-functions", "parameters", "implicit-return"]
  },

  {
    id: "javascript-functions-q-018",
    quizId: "quiz_javascript_functions",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the difference between these two arrow functions?\n\nconst a = x => x * 2;\nconst b = x => { return x * 2; };",
    options: [
      { id: "A", text: "Both return the same result; the first uses an implicit return and the second uses an explicit return." },
      { id: "B", text: "Only `b` is a valid function." },
      { id: "C", text: "Only `a` can accept parameters." },
      { id: "D", text: "They always return different values." }
    ],
    correctOptionId: "A",
    explanation: "An expression-bodied arrow function implicitly returns the expression. A block-bodied arrow function requires an explicit `return`.",
    tags: ["arrow-functions", "implicit-return", "return"]
  },

  {
    id: "javascript-functions-q-019",
    quizId: "quiz_javascript_functions",
    order: 19,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst getValue = () => {\n  42;\n};\n\nconsole.log(getValue());",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "42" },
      { id: "C", text: "\"42\"" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "Because the arrow function uses a block body, the expression `42` is not automatically returned. An explicit `return 42` would be required.",
    tags: ["arrow-functions", "return", "block-body"]
  },

  {
    id: "javascript-functions-q-020",
    quizId: "quiz_javascript_functions",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about arrow functions is correct?",
    options: [
      { id: "A", text: "They provide a concise function syntax and have lexical `this` behavior." },
      { id: "B", text: "They always create their own dynamic `this`." },
      { id: "C", text: "They cannot return values." },
      { id: "D", text: "They cannot accept parameters." }
    ],
    correctOptionId: "A",
    explanation: "Arrow functions have concise syntax and do not create their own `this`; their `this` comes from the surrounding lexical context.",
    tags: ["arrow-functions", "this"]
  },

  {
    id: "javascript-functions-q-021",
    quizId: "quiz_javascript_functions",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens if a function is called with fewer arguments than it declares parameters?",
    options: [
      { id: "A", text: "Missing parameters receive `undefined` unless a different value is supplied through other parameter behavior." },
      { id: "B", text: "JavaScript automatically throws an error." },
      { id: "C", text: "Missing parameters become null." },
      { id: "D", text: "The function cannot execute." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript does not require every declared parameter to receive an argument. Missing arguments result in `undefined` for those parameters.",
    tags: ["parameters", "arguments", "undefined"]
  },

  {
    id: "javascript-functions-q-022",
    quizId: "quiz_javascript_functions",
    order: 22,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfunction greet(name) {\n  return name;\n}\n\nconsole.log(greet());",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "null" },
      { id: "C", text: "Error" },
      { id: "D", text: "\"\"" }
    ],
    correctOptionId: "A",
    explanation: "No argument is supplied for `name`, so the parameter receives `undefined` and the function returns it.",
    tags: ["parameters", "arguments", "undefined"]
  },

  {
    id: "javascript-functions-q-023",
    quizId: "quiz_javascript_functions",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "Can a JavaScript function accept more arguments than the number of declared parameters?",
    options: [
      { id: "A", text: "Yes, JavaScript allows extra arguments." },
      { id: "B", text: "No, JavaScript throws an error immediately." },
      { id: "C", text: "Only arrow functions can do this." },
      { id: "D", text: "Only function declarations can do this." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript permits callers to supply more arguments than there are named parameters. Extra arguments can be accessed through mechanisms such as rest parameters or the arguments object in applicable functions.",
    tags: ["parameters", "arguments"]
  },

  {
    id: "javascript-functions-q-024",
    quizId: "quiz_javascript_functions",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(2, 3, 4));",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "9" },
      { id: "C", text: "234" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Only the named parameters `a` and `b` participate in the function body. The extra argument 4 is not used by this implementation.",
    tags: ["arguments", "parameters", "function-call"]
  },

  {
    id: "javascript-functions-q-025",
    quizId: "quiz_javascript_functions",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a callback function?",
    options: [
      { id: "A", text: "A function passed to another function so that it can be invoked by that function." },
      { id: "B", text: "A function that must always call itself." },
      { id: "C", text: "A function that can only return strings." },
      { id: "D", text: "A function that automatically runs when JavaScript starts." }
    ],
    correctOptionId: "A",
    explanation: "Functions are first-class values in JavaScript, so one function can receive another function as an argument and invoke it when appropriate.",
    tags: ["callbacks", "higher-order-functions"]
  },

  {
    id: "javascript-functions-q-026",
    quizId: "quiz_javascript_functions",
    order: 26,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfunction run(callback) {\n  callback();\n}\n\nrun(() => console.log(\"done\"));",
    options: [
      { id: "A", text: "done" },
      { id: "B", text: "callback" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The arrow function is passed as `callback`, and `callback()` invokes it, causing `done` to be logged.",
    tags: ["callbacks", "arrow-functions", "function-call"]
  },

  {
    id: "javascript-functions-q-027",
    quizId: "quiz_javascript_functions",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a higher-order function?",
    options: [
      { id: "A", text: "A function that accepts functions as arguments, returns a function, or both." },
      { id: "B", text: "A function that has more than five parameters." },
      { id: "C", text: "A function that only runs asynchronously." },
      { id: "D", text: "A function declared inside an object." }
    ],
    correctOptionId: "A",
    explanation: "Higher-order functions use other functions as inputs or outputs. JavaScript supports this because functions are first-class values.",
    tags: ["higher-order-functions", "callbacks", "functions"]
  },

  {
    id: "javascript-functions-q-028",
    quizId: "quiz_javascript_functions",
    order: 28,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the value of `result`?\n\nfunction createMultiplier(multiplier) {\n  return function(value) {\n    return value * multiplier;\n  };\n}\n\nconst double = createMultiplier(2);\nconst result = double(6);",
    options: [
      { id: "A", text: "12" },
      { id: "B", text: "8" },
      { id: "C", text: "6" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`createMultiplier(2)` returns a function that multiplies its input by 2. Calling `double(6)` therefore returns 12.",
    tags: ["functions", "higher-order-functions", "function-return"]
  },

  {
    id: "javascript-functions-q-029",
    quizId: "quiz_javascript_functions",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does it mean that JavaScript functions are first-class values?",
    options: [
      { id: "A", text: "Functions can be stored in variables, passed as arguments, and returned from other functions." },
      { id: "B", text: "Functions must always be declared before variables." },
      { id: "C", text: "Functions can only be used once." },
      { id: "D", text: "Functions cannot be stored in objects." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript treats functions as values, allowing them to be assigned, passed around, stored, and returned like other values.",
    tags: ["first-class-functions", "functions"]
  },

  {
    id: "javascript-functions-q-030",
    quizId: "quiz_javascript_functions",
    order: 30,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction execute(fn) {\n  return fn(5);\n}\n\nconst square = n => n * n;\nconsole.log(execute(square));",
    options: [
      { id: "A", text: "25" },
      { id: "B", text: "10" },
      { id: "C", text: "5" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`square` is passed as an argument to `execute`. `execute` calls it with 5, so the result is 25.",
    tags: ["callbacks", "higher-order-functions", "arrow-functions"]
  },

  {
    id: "javascript-functions-q-031",
    quizId: "quiz_javascript_functions",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between passing `fn` and passing `fn()` as an argument?",
    options: [
      { id: "A", text: "`fn` passes the function itself, while `fn()` immediately calls the function and passes its result." },
      { id: "B", text: "They are always identical." },
      { id: "C", text: "`fn` calls the function while `fn()` stores it." },
      { id: "D", text: "`fn()` is only valid for arrow functions." }
    ],
    correctOptionId: "A",
    explanation: "Without parentheses, the function value is passed. With parentheses, the function is invoked immediately and its returned value is passed instead.",
    tags: ["function-call", "callbacks", "first-class-functions"]
  },

  {
    id: "javascript-functions-q-032",
    quizId: "quiz_javascript_functions",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction getNumber() {\n  return 10;\n}\n\nfunction show(value) {\n  console.log(value);\n}\n\nshow(getNumber());",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "getNumber" },
      { id: "C", text: "undefined" },
      { id: "D", text: "show" }
    ],
    correctOptionId: "A",
    explanation: "`getNumber()` is executed first and returns 10. That returned value is then passed to `show`.",
    tags: ["function-call", "return", "arguments"]
  },

  {
    id: "javascript-functions-q-033",
    quizId: "quiz_javascript_functions",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Can a function return another function?",
    options: [
      { id: "A", text: "Yes, because functions are first-class values." },
      { id: "B", text: "No, functions can only return primitive values." },
      { id: "C", text: "Only class methods can do this." },
      { id: "D", text: "Only asynchronous functions can do this." }
    ],
    correctOptionId: "A",
    explanation: "Because functions are values in JavaScript, one function can return another function.",
    tags: ["function-return", "first-class-functions"]
  },

  {
    id: "javascript-functions-q-034",
    quizId: "quiz_javascript_functions",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction makeGreeting() {\n  return () => \"Hello\";\n}\n\nconst greet = makeGreeting();\nconsole.log(greet());",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "undefined" },
      { id: "C", text: "() => \"Hello\"" },
      { id: "D", text: "makeGreeting" }
    ],
    correctOptionId: "A",
    explanation: "`makeGreeting()` returns an arrow function. Calling the returned function produces `Hello`.",
    tags: ["function-return", "arrow-functions"]
  },

  {
    id: "javascript-functions-q-035",
    quizId: "quiz_javascript_functions",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a pure function?",
    options: [
      { id: "A", text: "A function that produces the same output for the same inputs and does not cause observable side effects." },
      { id: "B", text: "A function that always returns a string." },
      { id: "C", text: "A function that cannot accept parameters." },
      { id: "D", text: "A function that must be an arrow function." }
    ],
    correctOptionId: "A",
    explanation: "Pure functions depend only on their inputs and avoid observable side effects such as mutating external state or performing uncontrolled I/O.",
    tags: ["pure-functions", "functions", "side-effects"]
  },

  {
    id: "javascript-functions-q-036",
    quizId: "quiz_javascript_functions",
    order: 36,
    type: "code",
    difficulty: "Intermediate",
    question: "Which function is pure?",
    options: [
      { id: "A", text: "function add(a, b) { return a + b; }" },
      { id: "B", text: "function add(a) { total += a; return total; }" },
      { id: "C", text: "function log(a) { console.log(a); }" },
      { id: "D", text: "function random() { return Math.random(); }" }
    ],
    correctOptionId: "A",
    explanation: "`add(a, b)` depends only on its parameters and does not modify external state or perform an external side effect.",
    tags: ["pure-functions", "side-effects"]
  },

  {
    id: "javascript-functions-q-037",
    quizId: "quiz_javascript_functions",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a side effect in the context of a function?",
    options: [
      { id: "A", text: "An observable interaction with state or the outside world beyond simply producing a return value." },
      { id: "B", text: "Any value returned by a function." },
      { id: "C", text: "A parameter passed into a function." },
      { id: "D", text: "A syntax error." }
    ],
    correctOptionId: "A",
    explanation: "Mutating external state, writing to the console, modifying the DOM, making a network request, or changing a file are examples of side effects.",
    tags: ["side-effects", "pure-functions"]
  },

  {
    id: "javascript-functions-q-038",
    quizId: "quiz_javascript_functions",
    order: 38,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction test() {\n  return;\n  console.log(\"after\");\n}\n\ntest();",
    options: [
      { id: "A", text: "Nothing" },
      { id: "B", text: "after" },
      { id: "C", text: "undefined after" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "Execution leaves the function immediately when it reaches `return`, so the following `console.log` is never executed.",
    tags: ["return", "control-flow", "functions"]
  },

  {
    id: "javascript-functions-q-039",
    quizId: "quiz_javascript_functions",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes function composition?",
    options: [
      { id: "A", text: "Combining functions so that the output of one becomes the input of another." },
      { id: "B", text: "Putting every function into one large function." },
      { id: "C", text: "Calling a function only once." },
      { id: "D", text: "Converting functions into objects." }
    ],
    correctOptionId: "A",
    explanation: "Function composition builds larger behavior by combining smaller functions, where one function's result can feed another function.",
    tags: ["function-composition", "functions"]
  },

  {
    id: "javascript-functions-q-040",
    quizId: "quiz_javascript_functions",
    order: 40,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst double = n => n * 2;\nconst addOne = n => n + 1;\n\nconsole.log(addOne(double(4)));",
    options: [
      { id: "A", text: "9" },
      { id: "B", text: "10" },
      { id: "C", text: "8" },
      { id: "D", text: "5" }
    ],
    correctOptionId: "A",
    explanation: "`double(4)` produces 8, then `addOne(8)` produces 9. This demonstrates composing small functions.",
    tags: ["function-composition", "arrow-functions"]
  },

  {
    id: "javascript-functions-q-041",
    quizId: "quiz_javascript_functions",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a function's return value?",
    options: [
      { id: "A", text: "To provide a result back to the code that called the function." },
      { id: "B", text: "To automatically print the result to the console." },
      { id: "C", text: "To define the function's parameters." },
      { id: "D", text: "To make the function execute asynchronously." }
    ],
    correctOptionId: "A",
    explanation: "A return value allows the caller to receive and use the result produced by the function.",
    tags: ["return", "functions"]
  },

  {
    id: "javascript-functions-q-042",
    quizId: "quiz_javascript_functions",
    order: 42,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction calculate(a, b) {\n  if (a > b) {\n    return a - b;\n  }\n\n  return b - a;\n}\n\nconsole.log(calculate(3, 8));",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "-5" },
      { id: "C", text: "11" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Since 3 is not greater than 8, the second return executes: 8 - 3 = 5.",
    tags: ["return", "conditionals", "functions"]
  },

  {
    id: "javascript-functions-q-043",
    quizId: "quiz_javascript_functions",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "A function has three parameters but the caller supplies only one argument. What should the function designer assume about the missing parameters?",
    options: [
      { id: "A", text: "They are `undefined` unless the function defines another mechanism such as a default value." },
      { id: "B", text: "They automatically become 0." },
      { id: "C", text: "They automatically become null." },
      { id: "D", text: "The function call always throws an exception." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript allows missing arguments. The corresponding parameters receive `undefined` unless other parameter behavior supplies a value.",
    tags: ["parameters", "arguments", "undefined"]
  },

  {
    id: "javascript-functions-q-044",
    quizId: "quiz_javascript_functions",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction process(value, callback) {\n  return callback(value);\n}\n\nconst result = process(5, value => value * 3);\nconsole.log(result);",
    options: [
      { id: "A", text: "15" },
      { id: "B", text: "5" },
      { id: "C", text: "8" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`process` invokes the callback with 5. The callback multiplies it by 3 and returns 15, which `process` then returns.",
    tags: ["callbacks", "higher-order-functions", "return"]
  },

  {
    id: "javascript-functions-q-045",
    quizId: "quiz_javascript_functions",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main advantage of breaking a large operation into smaller functions?",
    options: [
      { id: "A", text: "It can improve readability, reuse, testing, and separation of responsibilities." },
      { id: "B", text: "It guarantees the program will execute faster." },
      { id: "C", text: "It eliminates all possible bugs." },
      { id: "D", text: "It removes the need for parameters." }
    ],
    correctOptionId: "A",
    explanation: "Focused functions make code easier to understand, reuse, test, and maintain. They do not automatically guarantee better performance or bug-free code.",
    tags: ["functions", "code-quality", "separation-of-concerns"]
  },

  {
    id: "javascript-functions-q-046",
    quizId: "quiz_javascript_functions",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction formatName(first, last) {\n  return `${first} ${last}`;\n}\n\nconst formatter = formatName;\nconsole.log(formatter(\"Avi\", \"Prasad\"));",
    options: [
      { id: "A", text: "Avi Prasad" },
      { id: "B", text: "formatName" },
      { id: "C", text: "undefined" },
      { id: "D", text: "AviPrasad" }
    ],
    correctOptionId: "A",
    explanation: "Functions are first-class values. Assigning `formatName` to `formatter` stores a reference to the same function, which can then be called through `formatter`.",
    tags: ["first-class-functions", "function-reference"]
  },

  {
    id: "javascript-functions-q-047",
    quizId: "quiz_javascript_functions",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the difference between a function reference and a function call?",
    options: [
      { id: "A", text: "A reference points to the function value, while a call executes the function." },
      { id: "B", text: "A reference always executes the function asynchronously." },
      { id: "C", text: "A call only stores the function." },
      { id: "D", text: "There is no difference." }
    ],
    correctOptionId: "A",
    explanation: "Using a function name without parentheses generally refers to the function value. Adding `()` invokes it.",
    tags: ["function-reference", "function-call"]
  },

  {
    id: "javascript-functions-q-048",
    quizId: "quiz_javascript_functions",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction applyOperation(a, b, operation) {\n  return operation(a, b);\n}\n\nconst multiply = (x, y) => x * y;\n\nconsole.log(applyOperation(4, 5, multiply));",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "9" },
      { id: "C", text: "45" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`multiply` is passed as a function value. `applyOperation` calls it with 4 and 5, producing 20.",
    tags: ["callbacks", "higher-order-functions", "function-reference"]
  },

  {
    id: "javascript-functions-q-049",
    quizId: "quiz_javascript_functions",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design best demonstrates a function with a single focused responsibility?",
    options: [
      { id: "A", text: "A function that validates one piece of input and returns whether it is valid." },
      { id: "B", text: "A function that validates input, fetches data, updates the DOM, saves files, and sends analytics all at once." },
      { id: "C", text: "A function that contains every operation in the application." },
      { id: "D", text: "A function that depends on several unrelated global variables." }
    ],
    correctOptionId: "A",
    explanation: "A focused function is easier to understand, test, reuse, and change because its responsibility is narrow and clear.",
    tags: ["functions", "single-responsibility", "code-quality"]
  },

  {
    id: "javascript-functions-q-050",
    quizId: "quiz_javascript_functions",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are designing a reusable JavaScript utility. Which approach best follows good function design?",
    options: [
      {
        id: "A",
        text: "Accept clear inputs through parameters, perform one well-defined responsibility, return a predictable result, and avoid unnecessary external side effects."
      },
      {
        id: "B",
        text: "Use global variables instead of parameters so every caller can modify the function's state."
      },
      {
        id: "C",
        text: "Make the function responsible for unrelated tasks so fewer functions are needed."
      },
      {
        id: "D",
        text: "Always mutate external data instead of returning a result."
      }
    ],
    correctOptionId: "A",
    explanation: "Well-designed functions tend to have clear inputs, focused responsibilities, predictable outputs, and controlled side effects. This makes them easier to reuse, test, and maintain.",
    tags: ["functions", "code-quality", "reusability", "best-practices"]
  }
];

export default javascriptFunctionsQuestions;