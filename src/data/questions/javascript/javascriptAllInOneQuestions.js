const javascriptAllInOneQuestions = [
  {
    id: "javascript-all-in-one-q-001",
    quizId: "quiz_javascript_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: [
      { id: "A", text: "let" },
      { id: "B", text: "const" },
      { id: "C", text: "var" },
      { id: "D", text: "static" }
    ],
    correctOptionId: "A",
    explanation: "`let` creates a block-scoped variable and allows its binding to be reassigned. `const` is also block-scoped but does not allow reassignment of the binding.",
    tags: ["variables", "let", "scope"]
  },

  {
    id: "javascript-all-in-one-q-002",
    quizId: "quiz_javascript_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the result of `typeof null` in JavaScript?",
    options: [
      { id: "A", text: "\"object\"" },
      { id: "B", text: "\"null\"" },
      { id: "C", text: "\"undefined\"" },
      { id: "D", text: "\"boolean\"" }
    ],
    correctOptionId: "A",
    explanation: "`typeof null` returns the string `\"object\"`. This is a long-standing historical behavior of JavaScript and is considered a language quirk.",
    tags: ["types", "typeof", "null"]
  },

  {
    id: "javascript-all-in-one-q-003",
    quizId: "quiz_javascript_all_in_one",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the strict equality operator `===` compare?",
    options: [
      { id: "A", text: "Value and type without performing implicit type coercion" },
      { id: "B", text: "Only the values after converting them to strings" },
      { id: "C", text: "Only object references" },
      { id: "D", text: "Only the data types" }
    ],
    correctOptionId: "A",
    explanation: "`===` performs strict equality comparison. Unlike `==`, it does not perform the usual implicit type coercion between different types.",
    tags: ["operators", "equality", "type-coercion"]
  },

  {
    id: "javascript-all-in-one-q-004",
    quizId: "quiz_javascript_all_in_one",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the output?",
    options: [
      { id: "A", text: "1020" },
      { id: "B", text: "30" },
      { id: "C", text: "10 + 20" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "A",
    explanation: "The `+` operator performs string concatenation when one operand is a string. Therefore `\"10\" + 20` produces the string `\"1020\"`.",
    tags: ["operators", "strings", "type-coercion"]
  },

  {
    id: "javascript-all-in-one-q-005",
    quizId: "quiz_javascript_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value is falsy in JavaScript?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "\"0\"" },
      { id: "C", text: "[]" },
      { id: "D", text: "{}" }
    ],
    correctOptionId: "A",
    explanation: "`0` is one of JavaScript's falsy values. The string `\"0\"`, empty arrays, and empty objects are truthy.",
    tags: ["truthy", "falsy", "boolean"]
  },

  {
    id: "javascript-all-in-one-q-006",
    quizId: "quiz_javascript_all_in_one",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "15" },
      { id: "C", text: "510" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "B",
    explanation: "The `+` operator is evaluated left to right. `5 + 10` produces `15`, and there is no string involved in this expression.",
    tags: ["operators", "arithmetic", "evaluation"]
  },

  {
    id: "javascript-all-in-one-q-007",
    quizId: "quiz_javascript_all_in_one",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about `const` is correct?",
    options: [
      { id: "A", text: "The binding cannot be reassigned, but an object referenced by it can still be mutated." },
      { id: "B", text: "All properties of an object stored in const are automatically immutable." },
      { id: "C", text: "const variables are function-scoped." },
      { id: "D", text: "const values can never be changed in any way." }
    ],
    correctOptionId: "A",
    explanation: "`const` prevents reassignment of the binding. It does not automatically freeze referenced objects or arrays, so their contents can still be mutated unless additional immutability techniques are used.",
    tags: ["const", "objects", "immutability"]
  },

  {
    id: "javascript-all-in-one-q-008",
    quizId: "quiz_javascript_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which loop is most appropriate when you need to iterate over the values of an iterable such as an array?",
    options: [
      { id: "A", text: "for...of" },
      { id: "B", text: "for...in" },
      { id: "C", text: "switch" },
      { id: "D", text: "while...in" }
    ],
    correctOptionId: "A",
    explanation: "`for...of` iterates over values produced by an iterable. `for...in` is designed for enumerable property keys and is generally not the preferred way to iterate array values.",
    tags: ["loops", "iteration", "for-of"]
  },

  {
    id: "javascript-all-in-one-q-009",
    quizId: "quiz_javascript_all_in_one",
    order: 9,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the output?",
    options: [
      { id: "A", text: "1, 2, 3" },
      { id: "B", text: "2, 4, 6" },
      { id: "C", text: "1, 4, 9" },
      { id: "D", text: "3, 6, 9" }
    ],
    correctOptionId: "B",
    explanation: "`map` creates a new array by applying the callback to every element. Each number is multiplied by 2, producing `[2, 4, 6]`.",
    tags: ["arrays", "map", "callbacks"]
  },

  {
    id: "javascript-all-in-one-q-010",
    quizId: "quiz_javascript_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which array method returns a new array containing only elements that satisfy a condition?",
    options: [
      { id: "A", text: "filter" },
      { id: "B", text: "find" },
      { id: "C", text: "some" },
      { id: "D", text: "every" }
    ],
    correctOptionId: "A",
    explanation: "`filter` creates a new array containing every element for which the callback returns a truthy value.",
    tags: ["arrays", "filter", "higher-order-functions"]
  },

  {
    id: "javascript-all-in-one-q-011",
    quizId: "quiz_javascript_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `reduce` primarily provide?",
    options: [
      { id: "A", text: "A way to accumulate array values into a single result or another accumulated value." },
      { id: "B", text: "A way to remove duplicate DOM nodes automatically." },
      { id: "C", text: "A way to sort objects by reference." },
      { id: "D", text: "A way to stop all asynchronous operations." }
    ],
    correctOptionId: "A",
    explanation: "`reduce` processes array elements while carrying an accumulator from one iteration to the next. It can produce numbers, objects, arrays, strings, or other accumulated results.",
    tags: ["arrays", "reduce", "accumulator"]
  },

  {
    id: "javascript-all-in-one-q-012",
    quizId: "quiz_javascript_all_in_one",
    order: 12,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "5" },
      { id: "C", text: "15" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The accumulator starts at 0. The values are added sequentially: `0 + 1 + 2 + 3 = 6`.",
    tags: ["arrays", "reduce", "accumulator"]
  },

  {
    id: "javascript-all-in-one-q-013",
    quizId: "quiz_javascript_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a function return when it reaches the end without encountering a return statement?",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "null" },
      { id: "C", text: "false" },
      { id: "D", text: "0" }
    ],
    correctOptionId: "A",
    explanation: "A JavaScript function that does not explicitly return a value returns `undefined`.",
    tags: ["functions", "return", "undefined"]
  },

  {
    id: "javascript-all-in-one-q-014",
    quizId: "quiz_javascript_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a higher-order function?",
    options: [
      { id: "A", text: "A function that accepts another function, returns a function, or both." },
      { id: "B", text: "A function with more than ten parameters." },
      { id: "C", text: "A function that can only be used inside classes." },
      { id: "D", text: "A function that always executes asynchronously." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript treats functions as first-class values. A higher-order function uses functions as inputs or outputs, such as `map`, `filter`, or a custom function factory.",
    tags: ["functions", "higher-order-functions", "callbacks"]
  },

  {
    id: "javascript-all-in-one-q-015",
    quizId: "quiz_javascript_all_in_one",
    order: 15,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "undefined" },
      { id: "C", text: "World" },
      { id: "D", text: "Hello World" }
    ],
    correctOptionId: "C",
    explanation: "The function receives `\"World\"` as its argument and returns `Hello ${name}`. Therefore the result is `Hello World`, not just World.",
    tags: ["functions", "template-literals", "parameters"]
  },

  {
    id: "javascript-all-in-one-q-016",
    quizId: "quiz_javascript_all_in_one",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is lexical scope?",
    options: [
      { id: "A", text: "The scope determined by where variables and functions are written in the source code." },
      { id: "B", text: "The scope determined randomly at runtime." },
      { id: "C", text: "The scope created only by objects." },
      { id: "D", text: "The scope used only inside asynchronous callbacks." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript uses lexical scoping. A function's access to surrounding variables is determined by where the function is defined in the source code.",
    tags: ["scope", "lexical-scope", "functions"]
  },

  {
    id: "javascript-all-in-one-q-017",
    quizId: "quiz_javascript_all_in_one",
    order: 17,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "20" },
      { id: "C", text: "undefined" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "The inner function closes over the `count` variable from `createCounter`. Even after `createCounter` finishes, the returned function retains access to that variable. The first call increments it from 0 to 1, so the exact result depends on the provided initialization. Here the closure returns the captured value after its defined update.",
    tags: ["closures", "scope", "functions"]
  },

  {
    id: "javascript-all-in-one-q-018",
    quizId: "quiz_javascript_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are closures useful in JavaScript?",
    options: [
      { id: "A", text: "They allow a function to retain access to variables from its lexical environment." },
      { id: "B", text: "They make every variable globally accessible." },
      { id: "C", text: "They automatically convert functions into classes." },
      { id: "D", text: "They disable garbage collection." }
    ],
    correctOptionId: "A",
    explanation: "A closure allows an inner function to retain access to variables from its surrounding lexical scope even after the outer function has finished executing.",
    tags: ["closures", "lexical-scope", "functions"]
  },

  {
    id: "javascript-all-in-one-q-019",
    quizId: "quiz_javascript_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is hoisting best understood as?",
    options: [
      { id: "A", text: "JavaScript's creation of bindings during the setup phase of an execution context before normal statement execution." },
      { id: "B", text: "Moving every line of JavaScript physically to the top of the file." },
      { id: "C", text: "Automatically moving variables between functions." },
      { id: "D", text: "Converting all declarations into global variables." }
    ],
    correctOptionId: "A",
    explanation: "Hoisting is a useful description of how declarations are handled during execution-context setup. It does not literally mean the source code is physically rearranged.",
    tags: ["hoisting", "execution-context", "scope"]
  },

  {
    id: "javascript-all-in-one-q-020",
    quizId: "quiz_javascript_all_in_one",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when a `let` variable is accessed before its declaration is initialized?",
    options: [
      { id: "A", text: "A ReferenceError is thrown because the variable is in the temporal dead zone." },
      { id: "B", text: "It returns undefined." },
      { id: "C", text: "It automatically becomes global." },
      { id: "D", text: "It returns null." }
    ],
    correctOptionId: "A",
    explanation: "`let` and `const` bindings exist before their declaration is evaluated but cannot be accessed during the temporal dead zone. Accessing them early results in a ReferenceError.",
    tags: ["let", "const", "hoisting", "TDZ"]
  },

  {
    id: "javascript-all-in-one-q-021",
    quizId: "quiz_javascript_all_in_one",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about object property access is correct?",
    options: [
      { id: "A", text: "Dot notation is convenient for valid identifier-like property names, while bracket notation can use dynamic expressions." },
      { id: "B", text: "Bracket notation can only access numeric properties." },
      { id: "C", text: "Dot notation always performs deep cloning." },
      { id: "D", text: "Both forms create a new object." }
    ],
    correctOptionId: "A",
    explanation: "Dot notation such as `user.name` is concise. Bracket notation such as `user[key]` is especially useful when the property name is dynamic or cannot be expressed through normal identifier syntax.",
    tags: ["objects", "property-access", "bracket-notation"]
  },

  {
    id: "javascript-all-in-one-q-022",
    quizId: "quiz_javascript_all_in_one",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "1" },
      { id: "C", text: "undefined" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "The object is mutated through the `user` reference. `user.age = 2` changes the object's property, and `console.log(user.age)` therefore prints 2.",
    tags: ["objects", "references", "mutation"]
  },

  {
    id: "javascript-all-in-one-q-023",
    quizId: "quiz_javascript_all_in_one",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between a shallow copy and a deep copy?",
    options: [
      { id: "A", text: "A shallow copy duplicates the outer structure but may retain references to nested objects; a deep copy duplicates nested structures as well." },
      { id: "B", text: "A shallow copy always duplicates every nested object." },
      { id: "C", text: "A deep copy only copies primitive values." },
      { id: "D", text: "There is no meaningful difference." }
    ],
    correctOptionId: "A",
    explanation: "Operations such as object spread create a shallow copy. Nested objects remain shared references unless they are separately copied.",
    tags: ["objects", "shallow-copy", "deep-copy"]
  },

  {
    id: "javascript-all-in-one-q-024",
    quizId: "quiz_javascript_all_in_one",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does destructuring allow you to do?",
    options: [
      { id: "A", text: "Extract values from arrays or properties from objects into variables." },
      { id: "B", text: "Convert every object into JSON." },
      { id: "C", text: "Freeze an object recursively." },
      { id: "D", text: "Remove all properties from an object." }
    ],
    correctOptionId: "A",
    explanation: "Destructuring provides concise syntax for extracting values from arrays and object properties and assigning them to variables.",
    tags: ["destructuring", "arrays", "objects"]
  },

  {
    id: "javascript-all-in-one-q-025",
    quizId: "quiz_javascript_all_in_one",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "Developer" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Avi Developer" }
    ],
    correctOptionId: "A",
    explanation: "Object destructuring extracts the `name` property and assigns it to the variable `name`. The value is `Avi`.",
    tags: ["objects", "destructuring"]
  },

  {
    id: "javascript-all-in-one-q-026",
    quizId: "quiz_javascript_all_in_one",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about the spread syntax for arrays is correct?",
    options: [
      { id: "A", text: "It can create a new array containing the elements of an existing iterable, but the copy is shallow." },
      { id: "B", text: "It recursively deep-clones all nested objects." },
      { id: "C", text: "It only works with objects." },
      { id: "D", text: "It permanently modifies the original array." }
    ],
    correctOptionId: "A",
    explanation: "Array spread such as `[...items]` creates a new outer array. If elements are objects, their references are copied rather than recursively cloned.",
    tags: ["spread", "arrays", "shallow-copy"]
  },

  {
    id: "javascript-all-in-one-q-027",
    quizId: "quiz_javascript_all_in_one",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Promise?",
    options: [
      { id: "A", text: "An object representing the eventual completion or failure of an asynchronous operation and its resulting value." },
      { id: "B", text: "A special type of loop." },
      { id: "C", text: "A synchronous replacement for functions." },
      { id: "D", text: "A browser-only DOM element." }
    ],
    correctOptionId: "A",
    explanation: "A Promise represents a future result. It can be pending, fulfilled, or rejected, allowing asynchronous operations to be composed and handled.",
    tags: ["Promises", "async", "JavaScript"]
  },

  {
    id: "javascript-all-in-one-q-028",
    quizId: "quiz_javascript_all_in_one",
    order: 28,
    type: "code",
    difficulty: "Advanced",
    question: "What is the output order?",
    options: [
      { id: "A", text: "A B C" },
      { id: "B", text: "A C B" },
      { id: "C", text: "B A C" },
      { id: "D", text: "C B A" }
    ],
    correctOptionId: "B",
    explanation: "The synchronous `console.log('A')` runs first. The Promise callback is placed in the microtask queue, while the synchronous `console.log('C')` runs before microtasks are processed. Therefore the order is A, C, B.",
    tags: ["Promises", "event-loop", "microtasks", "async"]
  },

  {
    id: "javascript-all-in-one-q-029",
    quizId: "quiz_javascript_all_in_one",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an `async` function always return?",
    options: [
      { id: "A", text: "A Promise" },
      { id: "B", text: "A string" },
      { id: "C", text: "An iterator" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "An `async` function always returns a Promise. A normal returned value becomes the fulfillment value of that Promise, while a thrown error causes rejection.",
    tags: ["async", "Promises", "async-function"]
  },

  {
    id: "javascript-all-in-one-q-030",
    quizId: "quiz_javascript_all_in_one",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `await` do inside an async function?",
    options: [
      { id: "A", text: "It pauses that async function's execution until the awaited Promise settles, without blocking the JavaScript thread." },
      { id: "B", text: "It blocks the entire browser until the Promise completes." },
      { id: "C", text: "It converts every Promise into a synchronous value globally." },
      { id: "D", text: "It cancels the Promise." }
    ],
    correctOptionId: "A",
    explanation: "`await` suspends execution of the current async function until the awaited value settles. Other JavaScript work can continue while the operation is pending.",
    tags: ["async-await", "Promises", "event-loop"]
  },

  {
    id: "javascript-all-in-one-q-031",
    quizId: "quiz_javascript_all_in_one",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method is commonly used to handle a rejected Promise?",
    options: [
      { id: "A", text: "catch" },
      { id: "B", text: "rejectOnly" },
      { id: "C", text: "errorHandlerOnly" },
      { id: "D", text: "finallyError" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.prototype.catch()` handles rejection from the Promise chain. With async/await, `try...catch` is another common approach.",
    tags: ["Promises", "catch", "error-handling"]
  },

  {
    id: "javascript-all-in-one-q-032",
    quizId: "quiz_javascript_all_in_one",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `finally` in a Promise chain?",
    options: [
      { id: "A", text: "Run cleanup logic after the Promise settles regardless of fulfillment or rejection." },
      { id: "B", text: "Convert a rejected Promise into a fulfilled one automatically." },
      { id: "C", text: "Cancel the Promise." },
      { id: "D", text: "Retry the Promise forever." }
    ],
    correctOptionId: "A",
    explanation: "`finally` is useful for cleanup operations that should happen regardless of whether the asynchronous operation succeeds or fails.",
    tags: ["Promises", "finally", "cleanup"]
  },

  {
    id: "javascript-all-in-one-q-033",
    quizId: "quiz_javascript_all_in_one",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `try...catch` primarily provide?",
    options: [
      { id: "A", text: "A way to handle exceptions thrown during execution." },
      { id: "B", text: "A way to prevent all JavaScript errors." },
      { id: "C", text: "A way to retry every failed function automatically." },
      { id: "D", text: "A way to catch syntax errors before JavaScript parses the file." }
    ],
    correctOptionId: "A",
    explanation: "`try...catch` allows runtime exceptions to be handled rather than terminating the current execution path without handling.",
    tags: ["error-handling", "try-catch", "exceptions"]
  },

  {
    id: "javascript-all-in-one-q-034",
    quizId: "quiz_javascript_all_in_one",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `throw new Error('Something went wrong')` do?",
    options: [
      { id: "A", text: "Creates and throws an Error object." },
      { id: "B", text: "Logs the error without interrupting execution." },
      { id: "C", text: "Returns an Error object to the caller." },
      { id: "D", text: "Automatically catches the error." }
    ],
    correctOptionId: "A",
    explanation: "`throw` interrupts the current normal execution flow and propagates the thrown value until it is caught by an appropriate handler.",
    tags: ["error-handling", "throw", "Error"]
  },

  {
    id: "javascript-all-in-one-q-035",
    quizId: "quiz_javascript_all_in_one",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `finally` in a try/catch/finally statement?",
    options: [
      { id: "A", text: "Execute cleanup code regardless of whether an exception occurred." },
      { id: "B", text: "Catch every error automatically." },
      { id: "C", text: "Prevent the try block from executing." },
      { id: "D", text: "Convert exceptions into return values." }
    ],
    correctOptionId: "A",
    explanation: "The `finally` block is designed for cleanup that should happen whether the protected operation succeeds or throws.",
    tags: ["error-handling", "finally", "cleanup"]
  },

  {
    id: "javascript-all-in-one-q-036",
    quizId: "quiz_javascript_all_in_one",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `this` usually represent inside a regular object method called as `obj.method()`?",
    options: [
      { id: "A", text: "The object used as the receiver of the method call." },
      { id: "B", text: "The global object in every JavaScript environment." },
      { id: "C", text: "The function's source code." },
      { id: "D", text: "The parent class automatically." }
    ],
    correctOptionId: "A",
    explanation: "For a regular function called as a property method, the receiver before the dot becomes the `this` value. Therefore `obj.method()` normally gives `this === obj` inside the method.",
    tags: ["this", "objects", "methods"]
  },

  {
    id: "javascript-all-in-one-q-037",
    quizId: "quiz_javascript_all_in_one",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about arrow functions and `this` is correct?",
    options: [
      { id: "A", text: "Arrow functions do not create their own `this`; they use the surrounding lexical `this`." },
      { id: "B", text: "Arrow functions always bind `this` to the object before the dot." },
      { id: "C", text: "Arrow functions always use the global object as `this`." },
      { id: "D", text: "Arrow functions cannot access `this`." }
    ],
    correctOptionId: "A",
    explanation: "Arrow functions capture `this` lexically from their surrounding scope rather than creating a new `this` based on how they are called.",
    tags: ["this", "arrow-functions", "lexical-this"]
  },

  {
    id: "javascript-all-in-one-q-038",
    quizId: "quiz_javascript_all_in_one",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `bind` do when used with a function?",
    options: [
      { id: "A", text: "Creates a new function with a specified `this` value and optionally pre-filled arguments." },
      { id: "B", text: "Immediately executes the function." },
      { id: "C", text: "Converts the function into an arrow function." },
      { id: "D", text: "Copies all properties from the function's return value." }
    ],
    correctOptionId: "A",
    explanation: "`bind` returns a new function with its `this` value fixed to the supplied value. It can also partially apply arguments.",
    tags: ["this", "bind", "functions"]
  },

  {
    id: "javascript-all-in-one-q-039",
    quizId: "quiz_javascript_all_in_one",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a prototype in JavaScript?",
    options: [
      { id: "A", text: "An object that can provide inherited properties and methods to another object through the prototype chain." },
      { id: "B", text: "A copy of every object stored in memory." },
      { id: "C", text: "A special primitive data type." },
      { id: "D", text: "A CSS object used by JavaScript." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript uses prototype-based inheritance. Objects can delegate property lookup to another object through their prototype chain.",
    tags: ["prototypes", "inheritance", "objects"]
  },

  {
    id: "javascript-all-in-one-q-040",
    quizId: "quiz_javascript_all_in_one",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What do JavaScript classes primarily provide?",
    options: [
      { id: "A", text: "Syntax for creating objects and expressing prototype-based inheritance in a class-oriented style." },
      { id: "B", text: "A completely separate inheritance system unrelated to prototypes." },
      { id: "C", text: "A way to create only static objects." },
      { id: "D", text: "A replacement for functions." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript classes provide a more familiar syntax for constructing objects and defining inheritance, but the underlying inheritance model remains prototype-based.",
    tags: ["classes", "prototypes", "inheritance"]
  },

  {
    id: "javascript-all-in-one-q-041",
    quizId: "quiz_javascript_all_in_one",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of ES modules?",
    options: [
      { id: "A", text: "To organize JavaScript into reusable modules with explicit imports and exports." },
      { id: "B", text: "To make every variable globally accessible." },
      { id: "C", text: "To replace all asynchronous programming." },
      { id: "D", text: "To prevent functions from being reused." }
    ],
    correctOptionId: "A",
    explanation: "ES modules provide explicit dependency boundaries through `import` and `export`, making larger codebases easier to organize and maintain.",
    tags: ["modules", "ESM", "import", "export"]
  },

  {
    id: "javascript-all-in-one-q-042",
    quizId: "quiz_javascript_all_in_one",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement is valid ES module syntax?",
    options: [
      { id: "A", text: "export const apiUrl = '/api';" },
      { id: "B", text: "module export apiUrl;" },
      { id: "C", text: "send apiUrl;" },
      { id: "D", text: "public export apiUrl;" }
    ],
    correctOptionId: "A",
    explanation: "`export` is part of the ECMAScript module syntax and can be used to expose declarations from a module.",
    tags: ["modules", "ESM", "export"]
  },

  {
    id: "javascript-all-in-one-q-043",
    quizId: "quiz_javascript_all_in_one",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the key distinction between CommonJS and ES modules?",
    options: [
      { id: "A", text: "CommonJS commonly uses require/module.exports, while ES modules use import/export." },
      { id: "B", text: "CommonJS is only for browsers and ES modules are only for databases." },
      { id: "C", text: "ES modules cannot export functions." },
      { id: "D", text: "They are identical syntax with different file extensions only." }
    ],
    correctOptionId: "A",
    explanation: "CommonJS and ES modules are different module systems. CommonJS traditionally uses `require` and `module.exports`, while ES modules use standardized `import` and `export` syntax.",
    tags: ["modules", "CommonJS", "ESM"]
  },

  {
    id: "javascript-all-in-one-q-044",
    quizId: "quiz_javascript_all_in_one",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the event loop responsible for in JavaScript environments?",
    options: [
      { id: "A", text: "Coordinating execution of queued asynchronous callbacks and tasks with the JavaScript execution stack." },
      { id: "B", text: "Making JavaScript execute every operation in parallel." },
      { id: "C", text: "Replacing the call stack." },
      { id: "D", text: "Turning asynchronous code into machine code." }
    ],
    correctOptionId: "A",
    explanation: "The event loop coordinates when queued tasks and microtasks can run relative to the current execution stack. It is a key part of JavaScript's asynchronous execution model.",
    tags: ["event-loop", "async", "call-stack"]
  },

  {
    id: "javascript-all-in-one-q-045",
    quizId: "quiz_javascript_all_in_one",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "What is the output order?",
    options: [
      { id: "A", text: "start, timeout, promise, end" },
      { id: "B", text: "start, end, promise, timeout" },
      { id: "C", text: "start, promise, end, timeout" },
      { id: "D", text: "promise, start, end, timeout" }
    ],
    correctOptionId: "B",
    explanation: "The synchronous logs `start` and `end` run first. The resolved Promise callback is a microtask and runs before the timer callback, which is a task. Therefore the order is start, end, promise, timeout.",
    tags: ["event-loop", "microtasks", "setTimeout", "Promises"]
  },

  {
    id: "javascript-all-in-one-q-046",
    quizId: "quiz_javascript_all_in_one",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can a long-running synchronous loop prevent a Promise callback from executing immediately?",
    options: [
      { id: "A", text: "The JavaScript execution stack must become available before queued asynchronous callbacks can run." },
      { id: "B", text: "Promises are always lower priority than CSS." },
      { id: "C", text: "Promise callbacks run in a separate JavaScript thread by default." },
      { id: "D", text: "Promises cannot execute while loops exist anywhere in the program." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript execution is generally single-threaded at the language level. A long synchronous task keeps the execution stack busy, preventing queued callbacks and microtasks from being processed until the current work yields.",
    tags: ["event-loop", "call-stack", "Promises", "performance"]
  },

  {
    id: "javascript-all-in-one-q-047",
    quizId: "quiz_javascript_all_in_one",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is generally better when two independent API requests can run concurrently?",
    options: [
      { id: "A", text: "Start both Promises and use Promise.all when both results are required." },
      { id: "B", text: "Always await the first request before even starting the second." },
      { id: "C", text: "Convert both requests into synchronous loops." },
      { id: "D", text: "Use setTimeout to guarantee concurrency." }
    ],
    correctOptionId: "A",
    explanation: "If the requests are independent, starting them together avoids unnecessary sequential waiting. `Promise.all` can then wait for both results and fail if any required Promise rejects.",
    tags: ["Promises", "Promise.all", "concurrency", "performance"]
  },

  {
    id: "javascript-all-in-one-q-048",
    quizId: "quiz_javascript_all_in_one",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens when one Promise passed to `Promise.all` rejects?",
    options: [
      { id: "A", text: "The returned Promise rejects with that rejection." },
      { id: "B", text: "The returned Promise always fulfills with the successful results." },
      { id: "C", text: "The rejected Promise is silently ignored." },
      { id: "D", text: "All Promises are automatically retried." }
    ],
    correctOptionId: "A",
    explanation: "`Promise.all` fulfills only when all supplied Promises fulfill. If any input rejects, the combined Promise rejects with that rejection.",
    tags: ["Promises", "Promise.all", "error-handling"]
  },

  {
    id: "javascript-all-in-one-q-049",
    quizId: "quiz_javascript_all_in_one",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes functional programming practices in JavaScript?",
    options: [
      { id: "A", text: "They often emphasize pure functions, avoiding unnecessary mutation, and treating functions as values." },
      { id: "B", text: "They require every function to be asynchronous." },
      { id: "C", text: "They prohibit arrays and objects." },
      { id: "D", text: "They require all code to use classes." }
    ],
    correctOptionId: "A",
    explanation: "Functional programming techniques commonly emphasize predictable pure functions, minimizing side effects, and composing functions. JavaScript supports these practices because functions are first-class values.",
    tags: ["functional-programming", "pure-functions", "immutability"]
  },

  {
    id: "javascript-all-in-one-q-050",
    quizId: "quiz_javascript_all_in_one",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are building a dashboard that fetches a user profile, loads notifications, transforms the returned data, and renders the result. Which approach best reflects strong modern JavaScript practices?",
    options: [
      {
        id: "A",
        text: "Use clear functions with focused responsibilities, appropriate array/object methods, async/await with error handling, Promise concurrency for independent requests, and modules to separate concerns."
      },
      {
        id: "B",
        text: "Put all logic inside one large function, mutate every object directly, and nest callbacks for every asynchronous operation."
      },
      {
        id: "C",
        text: "Use global variables for all fetched data and rely on implicit type coercion to simplify the code."
      },
      {
        id: "D",
        text: "Make every operation synchronous and block execution until all network requests finish."
      }
    ],
    correctOptionId: "A",
    explanation: "A maintainable JavaScript application benefits from separation of concerns, explicit data transformations, structured asynchronous code, proper error handling, and modular organization. Independent network operations can run concurrently, while focused functions make the code easier to test and maintain.",
    tags: ["architecture", "async", "modules", "functions", "best-practices"]
  }
];

export default javascriptAllInOneQuestions;