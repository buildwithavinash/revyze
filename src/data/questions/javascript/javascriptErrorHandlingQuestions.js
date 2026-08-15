const javascriptErrorHandlingQuestions = [
  {
    id: "javascript-error-handling-q-001",
    quizId: "quiz_javascript_error_handling",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of error handling in JavaScript?",
    options: [
      { id: "A", text: "To detect, handle, or propagate failures that occur during program execution" },
      { id: "B", text: "To prevent JavaScript from executing any functions" },
      { id: "C", text: "To automatically fix every bug in the application" },
      { id: "D", text: "To make all asynchronous code synchronous" }
    ],
    correctOptionId: "A",
    explanation: "Error handling provides mechanisms for responding to runtime failures rather than allowing unexpected exceptions to propagate without being handled.",
    tags: ["error-handling", "fundamentals", "exceptions"]
  },

  {
    id: "javascript-error-handling-q-002",
    quizId: "quiz_javascript_error_handling",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which JavaScript construct is specifically designed to catch exceptions?",
    options: [
      { id: "A", text: "try...catch" },
      { id: "B", text: "if...else" },
      { id: "C", text: "switch...case" },
      { id: "D", text: "for...of" }
    ],
    correctOptionId: "A",
    explanation: "The `try...catch` construct executes potentially failing code in `try` and transfers control to `catch` when an exception is thrown.",
    tags: ["try-catch", "exceptions", "fundamentals"]
  },

  {
    id: "javascript-error-handling-q-003",
    quizId: "quiz_javascript_error_handling",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What happens when an exception is thrown inside the try block?",
    options: [
      { id: "A", text: "Execution of the remaining try-block statements stops and control moves to catch" },
      { id: "B", text: "The remaining try-block statements always continue normally" },
      { id: "C", text: "The finally block is permanently skipped" },
      { id: "D", text: "The exception is automatically converted into undefined" }
    ],
    correctOptionId: "A",
    explanation: "Once an exception is thrown, normal execution of the current `try` block stops and control transfers to the corresponding `catch` block.",
    tags: ["try-catch", "throw", "control-flow"]
  },

  {
    id: "javascript-error-handling-q-004",
    quizId: "quiz_javascript_error_handling",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged?\n\ntry {\n  console.log(\"A\");\n  throw new Error(\"Failed\");\n  console.log(\"B\");\n} catch (error) {\n  console.log(\"C\");\n}",
    options: [
      { id: "A", text: "A, then C" },
      { id: "B", text: "A, then B, then C" },
      { id: "C", text: "C only" },
      { id: "D", text: "A only" }
    ],
    correctOptionId: "A",
    explanation: "`A` runs before the error. The `throw` immediately transfers control to `catch`, so `B` is unreachable and `C` is logged.",
    tags: ["try-catch", "throw", "execution-flow"]
  },

  {
    id: "javascript-error-handling-q-005",
    quizId: "quiz_javascript_error_handling",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "When does the catch block execute?",
    options: [
      { id: "A", text: "When an exception is thrown from the associated try block" },
      { id: "B", text: "Every time the try block finishes" },
      { id: "C", text: "Only when finally throws" },
      { id: "D", text: "Before the try block executes" }
    ],
    correctOptionId: "A",
    explanation: "If the `try` block completes without throwing, its `catch` block is skipped. If an exception occurs, control transfers to `catch`.",
    tags: ["try-catch", "catch", "control-flow"]
  },

  {
    id: "javascript-error-handling-q-006",
    quizId: "quiz_javascript_error_handling",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged?\n\ntry {\n  console.log(\"Success\");\n} catch (error) {\n  console.log(\"Error\");\n}",
    options: [
      { id: "A", text: "Success" },
      { id: "B", text: "Error" },
      { id: "C", text: "Success, then Error" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "Because the `try` block completes successfully without throwing, the `catch` block is skipped.",
    tags: ["try-catch", "control-flow"]
  },

  {
    id: "javascript-error-handling-q-007",
    quizId: "quiz_javascript_error_handling",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the finally block?",
    options: [
      { id: "A", text: "To execute cleanup code regardless of whether an exception occurred" },
      { id: "B", text: "To catch only TypeError exceptions" },
      { id: "C", text: "To replace the catch block" },
      { id: "D", text: "To automatically retry failed code" }
    ],
    correctOptionId: "A",
    explanation: "A `finally` block executes as control leaves the try/catch construct, whether the operation succeeds, fails, returns, or throws.",
    tags: ["finally", "cleanup", "control-flow"]
  },

  {
    id: "javascript-error-handling-q-008",
    quizId: "quiz_javascript_error_handling",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged?\n\ntry {\n  console.log(\"A\");\n} catch {\n  console.log(\"B\");\n} finally {\n  console.log(\"C\");\n}",
    options: [
      { id: "A", text: "A, then C" },
      { id: "B", text: "A, then B, then C" },
      { id: "C", text: "C only" },
      { id: "D", text: "B, then C" }
    ],
    correctOptionId: "A",
    explanation: "The try block succeeds, so catch is skipped. The finally block still runs afterward.",
    tags: ["finally", "try-catch", "execution-order"]
  },

  {
    id: "javascript-error-handling-q-009",
    quizId: "quiz_javascript_error_handling",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged?\n\ntry {\n  throw new Error(\"Oops\");\n} catch (error) {\n  console.log(\"caught\");\n} finally {\n  console.log(\"cleanup\");\n}",
    options: [
      { id: "A", text: "caught, then cleanup" },
      { id: "B", text: "cleanup only" },
      { id: "C", text: "caught only" },
      { id: "D", text: "Oops only" }
    ],
    correctOptionId: "A",
    explanation: "The thrown error transfers execution to catch, which logs `caught`. The finally block then executes and logs `cleanup`.",
    tags: ["finally", "catch", "throw"]
  },

  {
    id: "javascript-error-handling-q-010",
    quizId: "quiz_javascript_error_handling",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of the following is a valid JavaScript error-handling structure?",
    options: [
      { id: "A", text: "try { } catch (error) { } finally { }" },
      { id: "B", text: "catch { } try { }" },
      { id: "C", text: "error { } catch { }" },
      { id: "D", text: "try { } error { }" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript supports `try...catch`, `try...finally`, and `try...catch...finally` forms.",
    tags: ["try-catch", "finally", "syntax"]
  },

  {
    id: "javascript-error-handling-q-011",
    quizId: "quiz_javascript_error_handling",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the throw statement do?",
    options: [
      { id: "A", text: "It raises an exception and transfers control to an appropriate error handler" },
      { id: "B", text: "It silently logs an error" },
      { id: "C", text: "It automatically catches the current error" },
      { id: "D", text: "It restarts the current function" }
    ],
    correctOptionId: "A",
    explanation: "`throw` explicitly raises an exception. If a matching handler exists, control moves there; otherwise the error continues propagating.",
    tags: ["throw", "exceptions", "control-flow"]
  },

  {
    id: "javascript-error-handling-q-012",
    quizId: "quiz_javascript_error_handling",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "What happens after this statement?\n\nthrow new Error(\"Invalid input\");\n\nconsole.log(\"Done\");",
    options: [
      { id: "A", text: "Done is not executed unless the thrown error is handled elsewhere" },
      { id: "B", text: "Done always executes immediately" },
      { id: "C", text: "The error is ignored" },
      { id: "D", text: "Done executes before the error is thrown" }
    ],
    correctOptionId: "A",
    explanation: "`throw` interrupts normal execution. Code after it in the same control path does not execute.",
    tags: ["throw", "control-flow", "exceptions"]
  },

  {
    id: "javascript-error-handling-q-013",
    quizId: "quiz_javascript_error_handling",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which is generally the preferred way to create a standard JavaScript exception?",
    options: [
      { id: "A", text: "throw new Error(\"Something went wrong\")" },
      { id: "B", text: "throw \"Something went wrong\"" },
      { id: "C", text: "console.error(\"Something went wrong\")" },
      { id: "D", text: "return Error.message" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript allows many values to be thrown, but throwing an `Error` object provides standard properties such as `message`, `name`, and stack information.",
    tags: ["throw", "Error", "best-practices"]
  },

  {
    id: "javascript-error-handling-q-014",
    quizId: "quiz_javascript_error_handling",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property usually contains the human-readable description of an Error?",
    options: [
      { id: "A", text: "message" },
      { id: "B", text: "descriptionText" },
      { id: "C", text: "reason" },
      { id: "D", text: "detailsOnly" }
    ],
    correctOptionId: "A",
    explanation: "The `message` property contains the descriptive error message supplied when the Error was created.",
    tags: ["Error", "message", "error-properties"]
  },

  {
    id: "javascript-error-handling-q-015",
    quizId: "quiz_javascript_error_handling",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged?\n\ntry {\n  throw new Error(\"Database failed\");\n} catch (error) {\n  console.log(error.message);\n}",
    options: [
      { id: "A", text: "Database failed" },
      { id: "B", text: "Error" },
      { id: "C", text: "undefined" },
      { id: "D", text: "DatabaseError" }
    ],
    correctOptionId: "A",
    explanation: "The Error object's `message` property contains the string supplied to the Error constructor.",
    tags: ["Error", "message", "catch"]
  },

  {
    id: "javascript-error-handling-q-016",
    quizId: "quiz_javascript_error_handling",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which built-in error is commonly produced when code tries to access a property on null or undefined?",
    options: [
      { id: "A", text: "TypeError" },
      { id: "B", text: "SyntaxError" },
      { id: "C", text: "RangeError" },
      { id: "D", text: "URIError" }
    ],
    correctOptionId: "A",
    explanation: "A `TypeError` commonly occurs when an operation is performed on a value of an inappropriate type, such as attempting property access on `null` or `undefined`.",
    tags: ["TypeError", "built-in-errors", "error-types"]
  },

  {
    id: "javascript-error-handling-q-017",
    quizId: "quiz_javascript_error_handling",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which error usually indicates that JavaScript encountered invalid syntax?",
    options: [
      { id: "A", text: "SyntaxError" },
      { id: "B", text: "TypeError" },
      { id: "C", text: "RangeError" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "`SyntaxError` indicates that the JavaScript parser encountered code that does not conform to valid JavaScript syntax.",
    tags: ["SyntaxError", "error-types", "syntax"]
  },

  {
    id: "javascript-error-handling-q-018",
    quizId: "quiz_javascript_error_handling",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which error commonly occurs when code references a variable that does not exist in the accessible scope?",
    options: [
      { id: "A", text: "ReferenceError" },
      { id: "B", text: "RangeError" },
      { id: "C", text: "SyntaxError" },
      { id: "D", text: "EvalError" }
    ],
    correctOptionId: "A",
    explanation: "A `ReferenceError` commonly occurs when JavaScript cannot resolve an identifier being referenced.",
    tags: ["ReferenceError", "error-types", "scope"]
  },

  {
    id: "javascript-error-handling-q-019",
    quizId: "quiz_javascript_error_handling",
    order: 19,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens here?\n\ntry {\n  JSON.parse(\"{invalid json}\");\n} catch (error) {\n  console.log(error instanceof SyntaxError);\n}",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "It always throws a TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Invalid JSON passed to `JSON.parse()` results in a `SyntaxError`, which can be identified using `instanceof SyntaxError`.",
    tags: ["SyntaxError", "JSON.parse", "instanceof"]
  },

  {
    id: "javascript-error-handling-q-020",
    quizId: "quiz_javascript_error_handling",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can instanceof be useful inside a catch block?",
    options: [
      { id: "A", text: "It can help distinguish different error types and handle them differently" },
      { id: "B", text: "It automatically fixes the error" },
      { id: "C", text: "It prevents finally from running" },
      { id: "D", text: "It converts all errors into strings" }
    ],
    correctOptionId: "A",
    explanation: "Different error types can require different responses. `instanceof` can be used to determine whether the caught value is an instance of a particular Error class.",
    tags: ["instanceof", "error-types", "catch"]
  },

  {
    id: "javascript-error-handling-q-021",
    quizId: "quiz_javascript_error_handling",
    order: 21,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nfunction test() {\n  try {\n    throw new Error(\"Boom\");\n  } catch (error) {\n    console.log(\"caught\");\n  }\n  console.log(\"after\");\n}\n\ntest();",
    options: [
      { id: "A", text: "caught, then after" },
      { id: "B", text: "caught only" },
      { id: "C", text: "after only" },
      { id: "D", text: "Boom only" }
    ],
    correctOptionId: "A",
    explanation: "The error is handled by catch, so execution continues after the entire try/catch construct and logs `after`.",
    tags: ["try-catch", "control-flow", "recovery"]
  },

  {
    id: "javascript-error-handling-q-022",
    quizId: "quiz_javascript_error_handling",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens when a function called inside a try block throws an error and does not catch it itself?",
    options: [
      { id: "A", text: "The error can be caught by the surrounding try/catch" },
      { id: "B", text: "The error is automatically ignored" },
      { id: "C", text: "The caller can never catch it" },
      { id: "D", text: "The function automatically returns null" }
    ],
    correctOptionId: "A",
    explanation: "Exceptions propagate up the call stack. A surrounding try/catch can catch an exception thrown by a function invoked from inside its try block.",
    tags: ["error-propagation", "call-stack", "try-catch"]
  },

  {
    id: "javascript-error-handling-q-023",
    quizId: "quiz_javascript_error_handling",
    order: 23,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nfunction inner() {\n  throw new Error(\"Failed\");\n}\n\nfunction outer() {\n  try {\n    inner();\n  } catch (error) {\n    console.log(error.message);\n  }\n}\n\nouter();",
    options: [
      { id: "A", text: "Failed" },
      { id: "B", text: "undefined" },
      { id: "C", text: "outer" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "`inner()` throws, and because it does not catch the error, the exception propagates to `outer()`, whose catch block handles it.",
    tags: ["error-propagation", "call-stack", "catch"]
  },

  {
    id: "javascript-error-handling-q-024",
    quizId: "quiz_javascript_error_handling",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is error propagation?",
    options: [
      { id: "A", text: "An uncaught exception moving up the call stack until a handler catches it or it becomes unhandled" },
      { id: "B", text: "Copying an Error object into every variable" },
      { id: "C", text: "Automatically retrying failed functions" },
      { id: "D", text: "Converting errors into Promise values" }
    ],
    correctOptionId: "A",
    explanation: "If an error is not handled at the point where it occurs, JavaScript propagates it through callers until an appropriate catch handler is found or the exception reaches the top level.",
    tags: ["error-propagation", "call-stack", "exceptions"]
  },

  {
    id: "javascript-error-handling-q-025",
    quizId: "quiz_javascript_error_handling",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this code demonstrate?\n\ntry {\n  riskyOperation();\n} catch (error) {\n  console.error(\"Logging error\");\n  throw error;\n}",
    options: [
      { id: "A", text: "The error is logged locally and then re-thrown for a higher-level handler" },
      { id: "B", text: "The error is permanently swallowed" },
      { id: "C", text: "The error is converted into a successful result" },
      { id: "D", text: "The original error is automatically deleted" }
    ],
    correctOptionId: "A",
    explanation: "Re-throwing allows the current layer to perform useful local handling, such as logging, while still informing callers that the operation failed.",
    tags: ["rethrow", "error-propagation", "catch"]
  },

  {
    id: "javascript-error-handling-q-026",
    quizId: "quiz_javascript_error_handling",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When is re-throwing an error particularly appropriate?",
    options: [
      { id: "A", text: "When the current layer cannot fully handle the problem but needs to perform some local work first" },
      { id: "B", text: "Whenever the code succeeds" },
      { id: "C", text: "Only for SyntaxError" },
      { id: "D", text: "When you want to hide the error from callers" }
    ],
    correctOptionId: "A",
    explanation: "A lower-level layer may log, add context, or clean up before re-throwing an error so a higher-level layer can make the final decision about handling it.",
    tags: ["rethrow", "error-propagation", "architecture"]
  },

  {
    id: "javascript-error-handling-q-027",
    quizId: "quiz_javascript_error_handling",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the result?\n\nfunction test() {\n  try {\n    return \"try\";\n  } finally {\n    return \"finally\";\n  }\n}\n\nconsole.log(test());",
    options: [
      { id: "A", text: "finally" },
      { id: "B", text: "try" },
      { id: "C", text: "undefined" },
      { id: "D", text: "It throws a SyntaxError" }
    ],
    correctOptionId: "A",
    explanation: "A control-flow statement such as `return` in `finally` overrides the pending return from `try`. This is why returning from finally is generally discouraged.",
    tags: ["finally", "return", "control-flow", "edge-cases"]
  },

  {
    id: "javascript-error-handling-q-028",
    quizId: "quiz_javascript_error_handling",
    order: 28,
    type: "code",
    difficulty: "Advanced",
    question: "What happens here?\n\nfunction test() {\n  try {\n    throw new Error(\"original\");\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\n\ntest();",
    options: [
      { id: "A", text: "cleanup is logged, then the original error continues propagating" },
      { id: "B", text: "cleanup is logged and the error is automatically swallowed" },
      { id: "C", text: "Nothing is logged because finally requires catch" },
      { id: "D", text: "The error is converted to undefined" }
    ],
    correctOptionId: "A",
    explanation: "A `try...finally` is valid without catch. The finally block executes, then the original exception continues propagating because nothing caught it.",
    tags: ["finally", "throw", "error-propagation", "try-finally"]
  },

  {
    id: "javascript-error-handling-q-029",
    quizId: "quiz_javascript_error_handling",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is returning from a finally block generally discouraged?",
    options: [
      { id: "A", text: "It can override a return value or exception that was already pending from try or catch" },
      { id: "B", text: "finally cannot contain return statements syntactically" },
      { id: "C", text: "It always creates an infinite loop" },
      { id: "D", text: "It prevents cleanup code from executing" }
    ],
    correctOptionId: "A",
    explanation: "A return in finally takes precedence over pending control flow from try/catch. It can therefore accidentally suppress an error or replace a return value.",
    tags: ["finally", "return", "edge-cases", "best-practices"]
  },

  {
    id: "javascript-error-handling-q-030",
    quizId: "quiz_javascript_error_handling",
    order: 30,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nfunction test() {\n  try {\n    throw new Error(\"A\");\n  } catch (error) {\n    console.log(\"caught\");\n    throw error;\n  } finally {\n    console.log(\"finally\");\n  }\n}\n\ntry {\n  test();\n} catch {\n  console.log(\"outer\");\n}",
    options: [
      { id: "A", text: "caught → finally → outer" },
      { id: "B", text: "caught → outer → finally" },
      { id: "C", text: "finally → caught → outer" },
      { id: "D", text: "caught only" }
    ],
    correctOptionId: "A",
    explanation: "The error enters the inner catch, which logs `caught` and rethrows. Before that rethrow leaves the function, finally executes. The outer catch then handles the propagated error.",
    tags: ["finally", "rethrow", "error-propagation", "control-flow"]
  },

  {
    id: "javascript-error-handling-q-031",
    quizId: "quiz_javascript_error_handling",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a custom error class useful for?",
    options: [
      { id: "A", text: "Representing domain-specific failure types with meaningful names and optional extra information" },
      { id: "B", text: "Preventing all errors from occurring" },
      { id: "C", text: "Replacing JavaScript functions with classes" },
      { id: "D", text: "Making every exception a SyntaxError" }
    ],
    correctOptionId: "A",
    explanation: "Custom Error subclasses allow applications to distinguish domain-specific failures such as authentication, validation, or resource-not-found errors.",
    tags: ["custom-errors", "Error", "classes"]
  },

  {
    id: "javascript-error-handling-q-032",
    quizId: "quiz_javascript_error_handling",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "Which is a valid custom Error class?",
    options: [
      {
        id: "A",
        text: "class ValidationError extends Error { constructor(message) { super(message); this.name = \"ValidationError\"; } }"
      },
      {
        id: "B",
        text: "class ValidationError Error { message() {} }"
      },
      {
        id: "C",
        text: "class ValidationError throws Error { }"
      },
      {
        id: "D",
        text: "Error.class ValidationError extends throw"
      }
    ],
    correctOptionId: "A",
    explanation: "A custom error can extend `Error`, call `super(message)` to initialize the base Error, and assign a meaningful name.",
    tags: ["custom-errors", "Error", "class-inheritance"]
  },

  {
    id: "javascript-error-handling-q-033",
    quizId: "quiz_javascript_error_handling",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass ValidationError extends Error {}\n\nconst error = new ValidationError(\"Invalid email\");\nconsole.log(error instanceof Error);",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "ValidationError" }
    ],
    correctOptionId: "A",
    explanation: "A subclass instance is also an instance of its parent class. Therefore a `ValidationError` is also an `Error`.",
    tags: ["custom-errors", "instanceof", "inheritance"]
  },

  {
    id: "javascript-error-handling-q-034",
    quizId: "quiz_javascript_error_handling",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "Which catch block correctly handles a custom ValidationError differently from other errors?",
    options: [
      {
        id: "A",
        text: "catch (error) { if (error instanceof ValidationError) showValidationMessage(); else throw error; }"
      },
      {
        id: "B",
        text: "catch (error) { if (error === ValidationError) showValidationMessage(); }"
      },
      {
        id: "C",
        text: "catch { ValidationError(error); }"
      },
      {
        id: "D",
        text: "catch (ValidationError) { }"
      }
    ],
    correctOptionId: "A",
    explanation: "The caught value is an instance, so `instanceof ValidationError` checks whether it belongs to that custom error class. Other errors can then be re-thrown.",
    tags: ["custom-errors", "instanceof", "rethrow"]
  },

  {
    id: "javascript-error-handling-q-035",
    quizId: "quiz_javascript_error_handling",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an empty catch block like this do?\n\ntry {\n  riskyOperation();\n} catch (error) {\n}",
    options: [
      { id: "A", text: "It catches the error and silently discards it" },
      { id: "B", text: "It automatically fixes the error" },
      { id: "C", text: "It rethrows the error" },
      { id: "D", text: "It causes a syntax error" }
    ],
    correctOptionId: "A",
    explanation: "The exception is caught and no action is taken. This silently swallows the error, which can make failures difficult to diagnose.",
    tags: ["catch", "common-mistakes", "error-handling"]
  },

  {
    id: "javascript-error-handling-q-036",
    quizId: "quiz_javascript_error_handling",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When is it reasonable to catch an error?",
    options: [
      { id: "A", text: "When the current layer knows how to meaningfully handle, recover from, transform, or report the failure" },
      { id: "B", text: "Every time a function is called" },
      { id: "C", text: "Only when debugging locally" },
      { id: "D", text: "Whenever you want to hide a bug" }
    ],
    correctOptionId: "A",
    explanation: "Catching errors without knowing what to do with them can hide real failures. A useful catch block should provide meaningful recovery, reporting, transformation, cleanup, or propagation.",
    tags: ["error-handling", "best-practices", "catch"]
  },

  {
    id: "javascript-error-handling-q-037",
    quizId: "quiz_javascript_error_handling",
    order: 37,
    type: "code",
    difficulty: "Advanced",
    question: "Why does this not catch the error?\n\ntry {\n  setTimeout(() => {\n    throw new Error(\"Failed\");\n  }, 0);\n} catch (error) {\n  console.log(\"caught\");\n}",
    options: [
      { id: "A", text: "The throw occurs later in a different asynchronous callback, after the try/catch has already finished" },
      { id: "B", text: "setTimeout cannot throw errors" },
      { id: "C", text: "try/catch only catches SyntaxError" },
      { id: "D", text: "The callback executes before try starts" }
    ],
    correctOptionId: "A",
    explanation: "The `try` block schedules the timer and finishes before the callback runs. When the callback later throws, the original synchronous try/catch is no longer active.",
    tags: ["async-errors", "setTimeout", "try-catch", "event-loop"]
  },

  {
    id: "javascript-error-handling-q-038",
    quizId: "quiz_javascript_error_handling",
    order: 38,
    type: "code",
    difficulty: "Advanced",
    question: "Which approach correctly catches a rejection from an async function?",
    options: [
      {
        id: "A",
        text: "try { await loadData(); } catch (error) { handleError(error); }"
      },
      {
        id: "B",
        text: "try { setTimeout(loadData, 0); } catch (error) { handleError(error); }"
      },
      {
        id: "C",
        text: "catch (loadData()) { }"
      },
      {
        id: "D",
        text: "finally { await loadData(); }"
      }
    ],
    correctOptionId: "A",
    explanation: "Awaiting a Promise inside a try block allows a rejection to be converted into a thrown exception at the await expression, where catch can handle it.",
    tags: ["async-errors", "async-await", "try-catch", "promises"]
  },

  {
    id: "javascript-error-handling-q-039",
    quizId: "quiz_javascript_error_handling",
    order: 39,
    type: "code",
    difficulty: "Advanced",
    question: "What happens here?\n\nasync function load() {\n  try {\n    await Promise.reject(new Error(\"Failed\"));\n  } catch (error) {\n    console.log(\"handled\");\n  }\n}\n\nload();",
    options: [
      { id: "A", text: "handled is logged and load() returns a fulfilled Promise unless another error is thrown" },
      { id: "B", text: "handled is never logged" },
      { id: "C", text: "load() always returns a rejected Promise" },
      { id: "D", text: "The rejection cannot be caught with async/await" }
    ],
    correctOptionId: "A",
    explanation: "The rejection is caught by the catch block. Since the catch completes normally without rethrowing, the async function's returned Promise fulfills.",
    tags: ["async-errors", "async-await", "catch", "promises"]
  },

  {
    id: "javascript-error-handling-q-040",
    quizId: "quiz_javascript_error_handling",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the difference between throwing an error and returning an error object?",
    options: [
      { id: "A", text: "Throwing changes control flow into exception handling, while returning an Error object is simply a normal return value" },
      { id: "B", text: "They always have identical control-flow behavior" },
      { id: "C", text: "Returning an Error automatically triggers catch" },
      { id: "D", text: "Throwing an Error simply returns it to the caller" }
    ],
    correctOptionId: "A",
    explanation: "An Error object can be returned like any other value. `throw` is different because it interrupts normal execution and begins exception propagation.",
    tags: ["throw", "return", "control-flow", "exceptions"]
  },

  {
    id: "javascript-error-handling-q-041",
    quizId: "quiz_javascript_error_handling",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nfunction parseUser(json) {\n  try {\n    return JSON.parse(json);\n  } catch (error) {\n    throw new Error(\"Invalid user data\");\n  }\n}\n\ntry {\n  parseUser(\"bad json\");\n} catch (error) {\n  console.log(error.message);\n}",
    options: [
      { id: "A", text: "Invalid user data" },
      { id: "B", text: "Unexpected token"
      },
      { id: "C", text: "undefined" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The original parsing error is caught and replaced by a new Error with the message `Invalid user data`. The caller catches that new error.",
    tags: ["JSON.parse", "custom-errors", "error-transformation"]
  },

  {
    id: "javascript-error-handling-q-042",
    quizId: "quiz_javascript_error_handling",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential drawback of replacing an original error with a new generic Error without preserving its cause or context?",
    options: [
      { id: "A", text: "Useful debugging information from the original failure may be lost" },
      { id: "B", text: "The new Error can never be caught" },
      { id: "C", text: "The application becomes synchronous" },
      { id: "D", text: "finally blocks stop running" }
    ],
    correctOptionId: "A",
    explanation: "Wrapping errors can be useful, but blindly replacing the original error may discard valuable details. Modern JavaScript supports an Error `cause` option for preserving the underlying failure.",
    tags: ["error-wrapping", "Error", "cause", "debugging"]
  },

  {
    id: "javascript-error-handling-q-043",
    quizId: "quiz_javascript_error_handling",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "Which approach preserves the original error as the cause of a higher-level error?",
    options: [
      {
        id: "A",
        text: "throw new Error(\"Failed to load user\", { cause: error });"
      },
      {
        id: "B",
        text: "throw cause(error, \"Failed to load user\");"
      },
      {
        id: "C",
        text: "throw Error.cause(error);"
      },
      {
        id: "D",
        text: "return new Error(\"Failed to load user\", error)"
      }
    ],
    correctOptionId: "A",
    explanation: "The `Error` constructor supports an options object with a `cause` property, allowing higher-level code to preserve the underlying error while providing more useful context.",
    tags: ["Error", "cause", "error-wrapping", "debugging"]
  },

  {
    id: "javascript-error-handling-q-044",
    quizId: "quiz_javascript_error_handling",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nfunction test() {\n  try {\n    return 10;\n  } finally {\n    console.log(\"cleanup\");\n  }\n}\n\nconsole.log(test());",
    options: [
      { id: "A", text: "cleanup, then 10" },
      { id: "B", text: "10, then cleanup" },
      { id: "C", text: "cleanup only" },
      { id: "D", text: "10 only" }
    ],
    correctOptionId: "A",
    explanation: "The return value is determined, but control passes through finally before the function actually completes. Therefore cleanup is logged before the caller receives and logs `10`.",
    tags: ["finally", "return", "execution-order"]
  },

  {
    id: "javascript-error-handling-q-045",
    quizId: "quiz_javascript_error_handling",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "What happens here?\n\ntry {\n  throw new Error(\"A\");\n} catch (error) {\n  console.log(\"B\");\n} finally {\n  throw new Error(\"C\");\n}",
    options: [
      { id: "A", text: "B is logged, then the error C propagates" },
      { id: "B", text: "A propagates and C is ignored" },
      { id: "C", text: "Nothing happens because finally cannot throw" },
      { id: "D", text: "A and C are both caught automatically" }
    ],
    correctOptionId: "A",
    explanation: "The original error is caught and `B` is logged. The finally block then throws a new error, which becomes the active exception leaving the construct.",
    tags: ["finally", "throw", "error-propagation", "edge-cases"]
  },

  {
    id: "javascript-error-handling-q-046",
    quizId: "quiz_javascript_error_handling",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the benefit of using a specific custom error type instead of checking error.message strings everywhere?",
    options: [
      { id: "A", text: "The application can identify the semantic error category using the error's type rather than fragile message text" },
      { id: "B", text: "Custom errors cannot be caught" },
      { id: "C", text: "Message strings are required to be unique globally" },
      { id: "D", text: "Custom errors automatically retry operations" }
    ],
    correctOptionId: "A",
    explanation: "Error messages can change and are primarily intended for human-readable context. A custom error class gives code a stable semantic category that can be checked with `instanceof`.",
    tags: ["custom-errors", "instanceof", "architecture", "best-practices"]
  },

  {
    id: "javascript-error-handling-q-047",
    quizId: "quiz_javascript_error_handling",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation best follows the principle of handling only errors the current layer understands?\n\nfunction loadConfig() {\n  try {\n    return parseConfig();\n  } catch (error) {",
    options: [
      {
        id: "A",
        text: "if (error instanceof SyntaxError) return defaultConfig(); throw error;"
      },
      {
        id: "B",
        text: "return null;"
      },
      {
        id: "C",
        text: "console.log(\"ignored\");"
      },
      {
        id: "D",
        text: "throw new Error(\"Something happened\");"
      }
    ],
    correctOptionId: "A",
    explanation: "If this layer knows how to recover from malformed configuration syntax, it can handle that specific error. Other unexpected errors should continue propagating rather than being silently hidden.",
    tags: ["error-propagation", "instanceof", "rethrow", "best-practices"]
  },

  {
    id: "javascript-error-handling-q-048",
    quizId: "quiz_javascript_error_handling",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "A developer writes:\n\ntry {\n  const data = await fetchData();\n} catch (error) {\n  console.log(\"Request failed\");\n}\n\nWhat important question should the developer ask before deciding this is sufficient error handling?",
    options: [
      { id: "A", text: "Whether the application can actually recover, report, or otherwise meaningfully handle the failure at this layer" },
      { id: "B", text: "Whether catch blocks are allowed to contain console.log" },
      { id: "C", text: "Whether every Promise must be retried automatically" },
      { id: "D", text: "Whether await makes errors impossible" }
    ],
    correctOptionId: "A",
    explanation: "Simply logging a failure may not be enough. Good error handling should decide whether to recover, display useful feedback, transform the error, clean up, or rethrow it for a higher layer.",
    tags: ["async-errors", "error-handling", "architecture", "best-practices"]
  },

  {
    id: "javascript-error-handling-q-049",
    quizId: "quiz_javascript_error_handling",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "Which statement about try/catch and asynchronous Promise errors is correct?",
    options: [
      { id: "A", text: "A try/catch can catch a Promise rejection when the Promise is awaited inside the try block" },
      { id: "B", text: "A try/catch automatically catches every future asynchronous callback" },
      { id: "C", text: "Promise rejections cannot be handled with catch" },
      { id: "D", text: "await prevents all Promise rejections" }
    ],
    correctOptionId: "A",
    explanation: "When an awaited Promise rejects, the await expression throws within the async function, allowing the surrounding try/catch to handle it.",
    tags: ["async-errors", "promises", "await", "try-catch"]
  },

  {
    id: "javascript-error-handling-q-050",
    quizId: "quiz_javascript_error_handling",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "A production application has this pattern:\n\ntry {\n  await saveUser(user);\n} catch (error) {\n  console.log(\"failed\");\n}\n\nWhat is the biggest concern if this is the only handling performed?",
    options: [
      { id: "A", text: "The failure may be silently hidden from the rest of the application, leaving the caller unable to know that saving failed" },
      { id: "B", text: "try/catch automatically retries saveUser forever" },
      { id: "C", text: "await converts the failure into success" },
      { id: "D", text: "console.log causes the Promise to resolve" }
    ],
    correctOptionId: "A",
    explanation: "Catching an error and merely logging it means the function may continue as though the operation succeeded unless it explicitly returns a failure result or rethrows. Production error handling should preserve the application's ability to respond correctly to the failure.",
    tags: ["async-errors", "error-propagation", "rethrow", "production-code"]
  }
];

export default javascriptErrorHandlingQuestions;