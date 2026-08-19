const nodejsErrorHandlingQuestions = [
  {
    id: "nodejs-error-handling-q-001",
    quizId: "quiz_nodejs_error_handling",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of try/catch in JavaScript?",
    options: [
      { id: "A", text: "To prevent all runtime errors from occurring" },
      { id: "B", text: "To catch and handle exceptions thrown during synchronous execution" },
      { id: "C", text: "To convert callbacks into Promises" },
      { id: "D", text: "To restart the Node.js process" }
    ],
    correctOptionId: "B",
    explanation: "try/catch allows synchronous exceptions thrown inside the try block to be caught and handled.",
    tags: ["try-catch", "errors"]
  },

  {
    id: "nodejs-error-handling-q-002",
    quizId: "quiz_nodejs_error_handling",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which keyword explicitly creates an exception?",
    options: [
      { id: "A", text: "throw" },
      { id: "B", text: "error" },
      { id: "C", text: "raise" },
      { id: "D", text: "except" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript uses the `throw` statement to explicitly throw an exception.",
    tags: ["throw", "errors"]
  },

  {
    id: "nodejs-error-handling-q-003",
    quizId: "quiz_nodejs_error_handling",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which block executes whether an exception occurs or not?",
    options: [
      { id: "A", text: "catch" },
      { id: "B", text: "throw" },
      { id: "C", text: "finally" },
      { id: "D", text: "error" }
    ],
    correctOptionId: "C",
    explanation: "The `finally` block is intended for cleanup that should run regardless of whether an exception was thrown.",
    tags: ["finally", "try-catch"]
  },

  {
    id: "nodejs-error-handling-q-004",
    quizId: "quiz_nodejs_error_handling",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this code do?\n\n```js\nthrow new Error('Something went wrong');\n```",
    options: [
      { id: "A", text: "Logs a warning and continues normally" },
      { id: "B", text: "Creates a Promise that resolves with the message" },
      { id: "C", text: "Creates a file named Error" },
      { id: "D", text: "Throws an Error exception" }
    ],
    correctOptionId: "D",
    explanation: "The `throw` statement immediately throws the created Error object.",
    tags: ["throw", "Error"]
  },

  {
    id: "nodejs-error-handling-q-005",
    quizId: "quiz_nodejs_error_handling",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the benefit of throwing an Error object rather than a plain string?",
    options: [
      { id: "A", text: "It automatically retries the operation" },
      { id: "B", text: "It provides useful error information such as a message and stack trace" },
      { id: "C", text: "It prevents the error from being caught" },
      { id: "D", text: "It makes the application synchronous" }
    ],
    correctOptionId: "B",
    explanation: "Error objects contain useful debugging information, especially the message and stack trace.",
    tags: ["Error", "debugging"]
  },

  {
    id: "nodejs-error-handling-q-006",
    quizId: "quiz_nodejs_error_handling",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property usually contains the human-readable description of an Error?",
    options: [
      { id: "A", text: "description" },
      { id: "B", text: "reason" },
      { id: "C", text: "message" },
      { id: "D", text: "details" }
    ],
    correctOptionId: "C",
    explanation: "The standard Error object has a `message` property containing the error description.",
    tags: ["Error", "message"]
  },

  {
    id: "nodejs-error-handling-q-007",
    quizId: "quiz_nodejs_error_handling",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property is especially useful for locating where an Error originated?",
    options: [
      { id: "A", text: "stack" },
      { id: "B", text: "locationOnly" },
      { id: "C", text: "origin" },
      { id: "D", text: "traceIdOnly" }
    ],
    correctOptionId: "A",
    explanation: "The `stack` property generally contains a stack trace showing where the error was created/thrown.",
    tags: ["Error", "stack", "debugging"]
  },

  {
    id: "nodejs-error-handling-q-008",
    quizId: "quiz_nodejs_error_handling",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens if an exception is thrown inside a try block and there is a matching catch block?",
    options: [
      { id: "A", text: "The exception is ignored" },
      { id: "B", text: "The catch block receives the thrown value" },
      { id: "C", text: "The finally block is skipped" },
      { id: "D", text: "The process must always exit immediately" }
    ],
    correctOptionId: "B",
    explanation: "A matching catch block receives the value thrown by the try block.",
    tags: ["try-catch", "errors"]
  },

  {
    id: "nodejs-error-handling-q-009",
    quizId: "quiz_nodejs_error_handling",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens if code inside a try block completes without throwing?",
    options: [
      { id: "A", text: "The catch block runs anyway" },
      { id: "B", text: "The program terminates" },
      { id: "C", text: "The catch block is skipped" },
      { id: "D", text: "The finally block can never run" }
    ],
    correctOptionId: "C",
    explanation: "If no exception occurs, the catch block is skipped. The finally block, if present, still runs.",
    tags: ["try-catch", "finally"]
  },

  {
    id: "nodejs-error-handling-q-010",
    quizId: "quiz_nodejs_error_handling",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `catch (error)` give you?",
    options: [
      { id: "A", text: "The value that was thrown" },
      { id: "B", text: "The Node.js process object" },
      { id: "C", text: "The HTTP response" },
      { id: "D", text: "The current function's return value" }
    ],
    correctOptionId: "A",
    explanation: "The catch parameter receives the value thrown by the exception.",
    tags: ["catch", "errors"]
  },

  {
    id: "nodejs-error-handling-q-011",
    quizId: "quiz_nodejs_error_handling",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement is correct about `finally`?",
    options: [
      { id: "A", text: "It only executes after errors" },
      { id: "B", text: "It only executes after successful code" },
      { id: "C", text: "It is useful for cleanup that should happen regardless of success or failure" },
      { id: "D", text: "It can only be used with Promises" }
    ],
    correctOptionId: "C",
    explanation: "`finally` is commonly used for cleanup such as releasing resources regardless of the outcome.",
    tags: ["finally", "cleanup"]
  },

  {
    id: "nodejs-error-handling-q-012",
    quizId: "quiz_nodejs_error_handling",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when an error is thrown inside a function and that function does not catch it?",
    options: [
      { id: "A", text: "The error can propagate up the call stack" },
      { id: "B", text: "The error is automatically converted into null" },
      { id: "C", text: "The error is always ignored" },
      { id: "D", text: "Node.js converts it into a warning" }
    ],
    correctOptionId: "A",
    explanation: "If not caught locally, a synchronous exception propagates through callers until a matching handler is found.",
    tags: ["errors", "propagation"]
  },

  {
    id: "nodejs-error-handling-q-013",
    quizId: "quiz_nodejs_error_handling",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is error propagation?",
    options: [
      { id: "A", text: "Copying an error into every variable" },
      { id: "B", text: "An error moving through calling layers until it is handled" },
      { id: "C", text: "Sending an error to a database" },
      { id: "D", text: "Automatically retrying an operation" }
    ],
    correctOptionId: "B",
    explanation: "Errors can propagate from lower-level functions to higher-level callers when they are not handled at the point where they occur.",
    tags: ["errors", "propagation"]
  },

  {
    id: "nodejs-error-handling-q-014",
    quizId: "quiz_nodejs_error_handling",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is this pattern problematic?\n\n```js\ntry {\n  doSomethingAsync();\n} catch (error) {\n  console.log(error);\n}\n```",
    options: [
      { id: "A", text: "try/catch can never contain function calls" },
      { id: "B", text: "Asynchronous operations cannot fail" },
      { id: "C", text: "The catch may not receive an error that occurs asynchronously after the try block has finished" },
      { id: "D", text: "Node.js does not support catch" }
    ],
    correctOptionId: "C",
    explanation: "A later asynchronous failure is outside the synchronous execution window of the try block. Promises should be awaited/caught or callback errors handled appropriately.",
    tags: ["async", "try-catch", "common-mistakes"]
  },

  {
    id: "nodejs-error-handling-q-015",
    quizId: "quiz_nodejs_error_handling",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which pattern correctly catches a rejected Promise using async/await?",
    options: [
      { id: "A", text: "Wrap the await expression in try/catch" },
      { id: "B", text: "Put try/catch around the function declaration only" },
      { id: "C", text: "Use finally instead of catch" },
      { id: "D", text: "Ignore the returned Promise" }
    ],
    correctOptionId: "A",
    explanation: "A rejected Promise awaited inside an async function throws at the await expression, allowing a surrounding try/catch to handle it.",
    tags: ["async", "await", "try-catch"]
  },

  {
    id: "nodejs-error-handling-q-016",
    quizId: "quiz_nodejs_error_handling",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is a valid way to handle a rejected Promise?",
    options: [
      { id: "A", text: "promise.errorHandler()" },
      { id: "B", text: "promise.catch(handler)" },
      { id: "C", text: "promise.handleErrorOnly()" },
      { id: "D", text: "promise.onError(handler)" }
    ],
    correctOptionId: "B",
    explanation: "`.catch(handler)` registers a rejection handler for a Promise.",
    tags: ["promises", "catch"]
  },

  {
    id: "nodejs-error-handling-q-017",
    quizId: "quiz_nodejs_error_handling",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when an async function throws an Error?",
    options: [
      { id: "A", text: "The returned Promise is rejected" },
      { id: "B", text: "The returned Promise is fulfilled with the Error" },
      { id: "C", text: "The function automatically retries" },
      { id: "D", text: "The error is always ignored" }
    ],
    correctOptionId: "A",
    explanation: "An exception thrown inside an async function causes its returned Promise to reject.",
    tags: ["async", "errors", "promises"]
  },

  {
    id: "nodejs-error-handling-q-018",
    quizId: "quiz_nodejs_error_handling",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n```js\nPromise.reject(new Error('Failed'))\n  .catch(error => console.log(error.message));\n```\n\nWhat is printed?",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "Promise" },
      { id: "C", text: "Failed" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "C",
    explanation: "The rejected Error reaches catch(), and `error.message` is `Failed`.",
    tags: ["promises", "catch", "Error"]
  },

  {
    id: "nodejs-error-handling-q-019",
    quizId: "quiz_nodejs_error_handling",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an unhandled Promise rejection?",
    options: [
      { id: "A", text: "A Promise that fulfills twice" },
      { id: "B", text: "A rejected Promise for which the application has not attached appropriate rejection handling" },
      { id: "C", text: "A Promise containing an array" },
      { id: "D", text: "A Promise that resolves synchronously" }
    ],
    correctOptionId: "B",
    explanation: "A rejected Promise without appropriate rejection handling is considered unhandled.",
    tags: ["promises", "unhandled-rejection"]
  },

  {
    id: "nodejs-error-handling-q-020",
    quizId: "quiz_nodejs_error_handling",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should unhandled Promise rejections not simply be ignored?",
    options: [
      { id: "A", text: "They can represent failed operations that leave application state inconsistent or failures unnoticed" },
      { id: "B", text: "They always improve performance" },
      { id: "C", text: "They automatically fix database transactions" },
      { id: "D", text: "They only affect development environments" }
    ],
    correctOptionId: "A",
    explanation: "Ignoring asynchronous failures can leave the application in an unexpected state and make production problems difficult to detect.",
    tags: ["promises", "errors", "production"]
  },

  {
    id: "nodejs-error-handling-q-021",
    quizId: "quiz_nodejs_error_handling",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In the traditional Node.js error-first callback pattern, where is the error normally placed?",
    options: [
      { id: "A", text: "As the last argument" },
      { id: "B", text: "As the first argument" },
      { id: "C", text: "Inside global.error" },
      { id: "D", text: "Inside the return value" }
    ],
    correctOptionId: "B",
    explanation: "Node-style callbacks conventionally use `(err, result)`, putting the error first.",
    tags: ["callbacks", "errors"]
  },

  {
    id: "nodejs-error-handling-q-022",
    quizId: "quiz_nodejs_error_handling",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n```js\nfs.readFile('data.txt', (err, data) => {\n  if (err) {\n    return console.error(err);\n  }\n\n  console.log(data);\n});\n```\n\nWhy is `return` useful in the error branch?",
    options: [
      { id: "A", text: "It converts err into a Promise" },
      { id: "B", text: "It prevents the rest of the callback from executing after the error is handled" },
      { id: "C", text: "It closes the file automatically" },
      { id: "D", text: "It retries readFile()" }
    ],
    correctOptionId: "B",
    explanation: "Returning exits the callback after handling the error, preventing accidental execution of success-path code.",
    tags: ["callbacks", "errors", "control-flow"]
  },

  {
    id: "nodejs-error-handling-q-023",
    quizId: "quiz_nodejs_error_handling",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a custom Error class useful for?",
    options: [
      { id: "A", text: "Creating meaningful error types for different application failure cases" },
      { id: "B", text: "Preventing all errors" },
      { id: "C", text: "Replacing HTTP entirely" },
      { id: "D", text: "Making JavaScript execute faster" }
    ],
    correctOptionId: "A",
    explanation: "Custom error classes let applications distinguish different categories of failures while retaining Error behavior.",
    tags: ["custom-errors", "classes"]
  },

  {
    id: "nodejs-error-handling-q-024",
    quizId: "quiz_nodejs_error_handling",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is a valid custom Error class?",
    options: [
      { id: "A", text: "class ValidationError extends Error {}" },
      { id: "B", text: "class ValidationError extends Exception {}" },
      { id: "C", text: "error ValidationError {}" },
      { id: "D", text: "class ValidationError implements ErrorOnly {}" }
    ],
    correctOptionId: "A",
    explanation: "Custom JavaScript errors can extend the built-in `Error` class.",
    tags: ["custom-errors", "classes"]
  },

  {
    id: "nodejs-error-handling-q-025",
    quizId: "quiz_nodejs_error_handling",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of an error `cause`?",
    options: [
      { id: "A", text: "To automatically retry the operation" },
      { id: "B", text: "To preserve information about the underlying error that caused a higher-level error" },
      { id: "C", text: "To replace the stack trace" },
      { id: "D", text: "To prevent an error from being logged" }
    ],
    correctOptionId: "B",
    explanation: "Error causes allow higher-level errors to preserve the underlying failure for debugging and diagnosis.",
    tags: ["errors", "cause", "debugging"]
  },

  {
    id: "nodejs-error-handling-q-026",
    quizId: "quiz_nodejs_error_handling",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main purpose of logging an error stack trace during debugging?",
    options: [
      { id: "A", text: "To identify the execution path leading to the error" },
      { id: "B", text: "To restart the application" },
      { id: "C", text: "To encrypt the error" },
      { id: "D", text: "To automatically repair the code" }
    ],
    correctOptionId: "A",
    explanation: "A stack trace provides valuable information about where the error originated and how execution reached that point.",
    tags: ["debugging", "stack"]
  },

  {
    id: "nodejs-error-handling-q-027",
    quizId: "quiz_nodejs_error_handling",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a debugger breakpoint allow you to do?",
    options: [
      { id: "A", text: "Pause execution at a chosen point and inspect program state" },
      { id: "B", text: "Delete all runtime errors" },
      { id: "C", text: "Convert Node.js to synchronous mode" },
      { id: "D", text: "Restart the operating system" }
    ],
    correctOptionId: "A",
    explanation: "Breakpoints pause execution so developers can inspect variables, call stacks, and program state.",
    tags: ["debugging", "breakpoints"]
  },

  {
    id: "nodejs-error-handling-q-028",
    quizId: "quiz_nodejs_error_handling",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can reproducing a bug consistently be valuable?",
    options: [
      { id: "A", text: "It makes the bug impossible to fix" },
      { id: "B", text: "It provides a repeatable scenario for isolating and testing the cause" },
      { id: "C", text: "It guarantees the bug is caused by Node.js" },
      { id: "D", text: "It eliminates the need for logs" }
    ],
    correctOptionId: "B",
    explanation: "A reliable reproduction makes debugging much easier because changes can be tested against the same failure.",
    tags: ["debugging", "testing"]
  },

  {
    id: "nodejs-error-handling-q-029",
    quizId: "quiz_nodejs_error_handling",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is generally better than logging `Something went wrong` for every failure?",
    options: [
      { id: "A", text: "Log useful contextual information while avoiding sensitive data" },
      { id: "B", text: "Never log anything" },
      { id: "C", text: "Log every environment secret" },
      { id: "D", text: "Only log the word ERROR" }
    ],
    correctOptionId: "A",
    explanation: "Useful structured context makes diagnosis easier, but logs must avoid passwords, tokens, and other sensitive information.",
    tags: ["logging", "debugging", "security"]
  },

  {
    id: "nodejs-error-handling-q-030",
    quizId: "quiz_nodejs_error_handling",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should production applications avoid exposing full stack traces in API responses?",
    options: [
      { id: "A", text: "Stack traces are invalid JSON" },
      { id: "B", text: "They can expose internal implementation details and sensitive information" },
      { id: "C", text: "Browsers cannot display them" },
      { id: "D", text: "HTTP automatically deletes them" }
    ],
    correctOptionId: "B",
    explanation: "Stack traces can reveal file paths, libraries, implementation details, and other information that should remain server-side.",
    tags: ["security", "errors", "api"]
  },

  {
    id: "nodejs-error-handling-q-031",
    quizId: "quiz_nodejs_error_handling",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is an operational error?",
    options: [
      { id: "A", text: "A normal runtime failure such as a missing file, timeout, or unavailable external service" },
      { id: "B", text: "A syntax error in the JavaScript parser" },
      { id: "C", text: "A typo that makes the application impossible to start" },
      { id: "D", text: "A compiler warning only" }
    ],
    correctOptionId: "A",
    explanation: "Operational errors are expected runtime failures that applications can often handle or recover from appropriately.",
    tags: ["errors", "operational-errors"]
  },

  {
    id: "nodejs-error-handling-q-032",
    quizId: "quiz_nodejs_error_handling",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which is an example of a programmer error?",
    options: [
      { id: "A", text: "A third-party API timing out" },
      { id: "B", text: "A database temporarily refusing connections" },
      { id: "C", text: "Accessing a property incorrectly because of a programming bug" },
      { id: "D", text: "A user submitting an invalid email address" }
    ],
    correctOptionId: "C",
    explanation: "Programmer errors are defects in application logic that should generally be fixed in code rather than treated as ordinary operational conditions.",
    tags: ["errors", "programmer-errors"]
  },

  {
    id: "nodejs-error-handling-q-033",
    quizId: "quiz_nodejs_error_handling",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is retrying every error automatically a bad strategy?",
    options: [
      { id: "A", text: "Some failures are permanent or caused by invalid input, and retries can increase load" },
      { id: "B", text: "Retries are impossible in JavaScript" },
      { id: "C", text: "Retries always delete the original error" },
      { id: "D", text: "Retries only work for syntax errors" }
    ],
    correctOptionId: "A",
    explanation: "Retries should be selective. Retrying invalid requests or permanent failures wastes resources and may amplify outages.",
    tags: ["errors", "retries", "production"]
  },

  {
    id: "nodejs-error-handling-q-034",
    quizId: "quiz_nodejs_error_handling",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is exponential backoff commonly used for?",
    options: [
      { id: "A", text: "Increasing retry delays between repeated attempts to reduce pressure on a failing service" },
      { id: "B", text: "Making every request execute immediately" },
      { id: "C", text: "Deleting old logs" },
      { id: "D", text: "Changing HTTP methods automatically" }
    ],
    correctOptionId: "A",
    explanation: "Exponential backoff progressively increases retry delays and can help prevent retry storms during temporary failures.",
    tags: ["retries", "backoff", "resilience"]
  },

  {
    id: "nodejs-error-handling-q-035",
    quizId: "quiz_nodejs_error_handling",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a timeout useful for when calling an external service?",
    options: [
      { id: "A", text: "It guarantees the external service will respond successfully" },
      { id: "B", text: "It limits how long the application is willing to wait before treating the operation as failed" },
      { id: "C", text: "It disables all network errors" },
      { id: "D", text: "It converts the request into a synchronous operation" }
    ],
    correctOptionId: "B",
    explanation: "Timeouts prevent resources from remaining occupied indefinitely when an external dependency becomes slow or unresponsive.",
    tags: ["timeouts", "resilience"]
  },

  {
    id: "nodejs-error-handling-q-036",
    quizId: "quiz_nodejs_error_handling",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which Node.js event is associated with an uncaught exception?",
    options: [
      { id: "A", text: "uncaughtException" },
      { id: "B", text: "unhandledErrorOnly" },
      { id: "C", text: "exceptionThrown" },
      { id: "D", text: "fatalErrorEvent" }
    ],
    correctOptionId: "A",
    explanation: "Node.js exposes the `uncaughtException` process event for exceptions that reach the process without being caught.",
    tags: ["node", "uncaughtException"]
  },

  {
    id: "nodejs-error-handling-q-037",
    quizId: "quiz_nodejs_error_handling",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should `process.on('uncaughtException', ...)` not normally be treated as a complete recovery strategy?",
    options: [
      { id: "A", text: "An uncaught exception can leave application state inconsistent, so continuing blindly can be unsafe" },
      { id: "B", text: "The event never fires" },
      { id: "C", text: "It only works in browsers" },
      { id: "D", text: "It automatically fixes the original bug" }
    ],
    correctOptionId: "A",
    explanation: "An uncaught exception represents an unexpected state. Logging and controlled shutdown/restart strategies are generally safer than assuming the process is fully healthy.",
    tags: ["uncaughtException", "production", "resilience"]
  },

  {
    id: "nodejs-error-handling-q-038",
    quizId: "quiz_nodejs_error_handling",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which process event is associated with a Promise rejection that has no handler at the relevant time?",
    options: [
      { id: "A", text: "promiseFailure" },
      { id: "B", text: "uncaughtPromise" },
      { id: "C", text: "unhandledRejection" },
      { id: "D", text: "rejectionErrorOnly" }
    ],
    correctOptionId: "C",
    explanation: "Node.js exposes the `unhandledRejection` process event for unhandled Promise rejections.",
    tags: ["node", "unhandledRejection", "promises"]
  },

  {
    id: "nodejs-error-handling-q-039",
    quizId: "quiz_nodejs_error_handling",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the best general role for `uncaughtException` or `unhandledRejection` monitoring in production?",
    options: [
      { id: "A", text: "Use them as the application's primary validation system" },
      { id: "B", text: "Use them for visibility, logging, and controlled failure handling rather than masking application bugs" },
      { id: "C", text: "Use them to silently continue every failed operation" },
      { id: "D", text: "Use them to replace all try/catch statements" }
    ],
    correctOptionId: "B",
    explanation: "Process-level error monitoring is valuable for detecting unexpected failures, but it should not replace appropriate local error handling.",
    tags: ["node", "production", "monitoring"]
  },

  {
    id: "nodejs-error-handling-q-040",
    quizId: "quiz_nodejs_error_handling",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is centralized error handling useful in an Express application?",
    options: [
      { id: "A", text: "It guarantees every database query succeeds" },
      { id: "B", text: "It provides a consistent place to format/log application errors and send appropriate responses" },
      { id: "C", text: "It removes the need for validation" },
      { id: "D", text: "It makes every route synchronous" }
    ],
    correctOptionId: "B",
    explanation: "Centralized error middleware can provide consistent response formatting, logging, and handling policies.",
    tags: ["express", "errors", "middleware"]
  },

  {
    id: "nodejs-error-handling-q-041",
    quizId: "quiz_nodejs_error_handling",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What signature identifies Express error-handling middleware?",
    options: [
      { id: "A", text: "(req, res)" },
      { id: "B", text: "(req, next)" },
      { id: "C", text: "(error, request, response, next)" },
      { id: "D", text: "(request, response, error)" }
    ],
    correctOptionId: "C",
    explanation: "Express recognizes error-handling middleware by its four parameters: `(err, req, res, next)`.",
    tags: ["express", "error-middleware"]
  },

  {
    id: "nodejs-error-handling-q-042",
    quizId: "quiz_nodejs_error_handling",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "A route catches an error and does `res.status(500).json(...)`. What should it avoid doing afterward?",
    options: [
      { id: "A", text: "Logging the error internally" },
      { id: "B", text: "Returning from the handler when appropriate" },
      { id: "C", text: "Sending another response for the same request" },
      { id: "D", text: "Including a safe public error message" }
    ],
    correctOptionId: "C",
    explanation: "Once a response has been sent, attempting to send another response can cause 'headers already sent' errors.",
    tags: ["express", "responses", "errors"]
  },

  {
    id: "nodejs-error-handling-q-043",
    quizId: "quiz_nodejs_error_handling",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is safest when logging user-related errors?",
    options: [
      { id: "A", text: "Log passwords so debugging is easier" },
      { id: "B", text: "Log access tokens and cookies" },
      { id: "C", text: "Log useful diagnostic context while redacting sensitive information" },
      { id: "D", text: "Disable all logging" }
    ],
    correctOptionId: "C",
    explanation: "Logs should contain enough context for diagnosis without exposing passwords, tokens, secrets, or unnecessary personal data.",
    tags: ["logging", "security", "errors"]
  },

  {
    id: "nodejs-error-handling-q-044",
    quizId: "quiz_nodejs_error_handling",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is structured logging useful for?",
    options: [
      { id: "A", text: "Making logs machine-searchable and easier to correlate and analyze" },
      { id: "B", text: "Preventing all runtime exceptions" },
      { id: "C", text: "Replacing HTTP responses" },
      { id: "D", text: "Making database queries synchronous" }
    ],
    correctOptionId: "A",
    explanation: "Structured logs commonly use consistent fields such as timestamp, level, request ID, and error information, making analysis easier.",
    tags: ["logging", "observability"]
  },

  {
    id: "nodejs-error-handling-q-045",
    quizId: "quiz_nodejs_error_handling",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a correlation/request ID useful for when debugging a distributed application?",
    options: [
      { id: "A", text: "It identifies the user's password" },
      { id: "B", text: "It allows related logs and operations for one request to be connected across services" },
      { id: "C", text: "It replaces authentication" },
      { id: "D", text: "It makes requests execute in parallel" }
    ],
    correctOptionId: "B",
    explanation: "A request or correlation ID can be propagated across services so logs belonging to one request can be traced together.",
    tags: ["debugging", "logging", "observability"]
  },

  {
    id: "nodejs-error-handling-q-046",
    quizId: "quiz_nodejs_error_handling",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "An API returns HTTP 500 for invalid user input. What is the likely problem?",
    options: [
      { id: "A", text: "Client input errors are often better represented by a 4xx status rather than a generic server-error 5xx status" },
      { id: "B", text: "HTTP 500 is required for all API errors" },
      { id: "C", text: "Invalid input must always produce 200" },
      { id: "D", text: "The client cannot receive JSON" }
    ],
    correctOptionId: "A",
    explanation: "4xx responses generally indicate client-side/request problems, while 5xx responses represent server-side failures.",
    tags: ["http", "api", "errors"]
  },

  {
    id: "nodejs-error-handling-q-047",
    quizId: "quiz_nodejs_error_handling",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A database connection temporarily fails. Which error-handling strategy is generally more appropriate than immediately crashing for every occurrence?",
    options: [
      { id: "A", text: "Ignore the failure completely" },
      { id: "B", text: "Use appropriate timeout/retry/recovery policies and return a controlled error when recovery is not possible" },
      { id: "C", text: "Retry forever with no delay" },
      { id: "D", text: "Send the database password to the client" }
    ],
    correctOptionId: "B",
    explanation: "Transient infrastructure failures may be recoverable, but retry policies need limits, backoff, and appropriate failure responses.",
    tags: ["database", "retries", "resilience"]
  },

  {
    id: "nodejs-error-handling-q-048",
    quizId: "quiz_nodejs_error_handling",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a useful debugging sequence when a production request unexpectedly fails?",
    options: [
      { id: "A", text: "Immediately rewrite the entire application" },
      { id: "B", text: "Ignore logs and guess the cause" },
      { id: "C", text: "Inspect logs/context, reproduce when possible, identify the failing layer, form a hypothesis, and verify it" },
      { id: "D", text: "Restart the server repeatedly without investigating" }
    ],
    correctOptionId: "C",
    explanation: "Systematic debugging uses evidence, reproduction, isolation, hypotheses, and verification rather than guesswork.",
    tags: ["debugging", "production"]
  },

  {
    id: "nodejs-error-handling-q-049",
    quizId: "quiz_nodejs_error_handling",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes good error handling in a production Node.js backend?",
    options: [
      { id: "A", text: "Catch every error and silently continue" },
      { id: "B", text: "Handle expected failures at appropriate boundaries, propagate unexpected failures, log useful context safely, and expose appropriate client-facing errors" },
      { id: "C", text: "Return stack traces to every client" },
      { id: "D", text: "Use process.exit() for every exception" }
    ],
    correctOptionId: "B",
    explanation: "Good error handling distinguishes expected operational failures from programming bugs, preserves useful diagnostics, and avoids leaking internal details.",
    tags: ["errors", "production", "architecture"]
  },

  {
    id: "nodejs-error-handling-q-050",
    quizId: "quiz_nodejs_error_handling",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A production Node.js service receives an unexpected database error. Which response demonstrates the strongest overall error-handling design?",
    options: [
      { id: "A", text: "Send the database stack trace directly to the client and keep retrying forever" },
      { id: "B", text: "Ignore the error and return success" },
      { id: "C", text: "Handle/log the failure with safe diagnostic context, return an appropriate API error, apply controlled recovery if the failure is transient, and monitor the incident" },
      { id: "D", text: "Expose the database credentials so the client can retry" }
    ],
    correctOptionId: "C",
    explanation: "Production error handling should protect sensitive information, provide useful observability, distinguish transient failures from permanent/programmer errors, and return an appropriate response.",
    tags: ["errors", "database", "production", "observability", "resilience"]
  }
];

export default nodejsErrorHandlingQuestions;