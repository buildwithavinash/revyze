const nodejsAsyncEventLoopQuestions = [
  {
    id: "nodejs-async-event-loop-q-001",
    quizId: "quiz_nodejs_async_event_loop",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does asynchronous programming allow a Node.js application to do?",
    options: [
      { id: "A", text: "Execute every operation on a separate CPU automatically" },
      { id: "B", text: "Avoid using JavaScript entirely while I/O happens" },
      { id: "C", text: "Start an operation and continue handling other work while waiting for it to complete" },
      { id: "D", text: "Make every operation execute synchronously" }
    ],
    correctOptionId: "C",
    explanation: "Asynchronous APIs allow Node.js to initiate work such as I/O and continue processing other JavaScript while waiting for the result.",
    tags: ["async", "node"]
  },

  {
    id: "nodejs-async-event-loop-q-002",
    quizId: "quiz_nodejs_async_event_loop",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a callback?",
    options: [
      { id: "A", text: "A function passed to another function to be invoked later" },
      { id: "B", text: "A special type of database" },
      { id: "C", text: "A Node.js process ID" },
      { id: "D", text: "A replacement for variables" }
    ],
    correctOptionId: "A",
    explanation: "A callback is a function supplied to another function so it can be invoked at an appropriate point later.",
    tags: ["callbacks", "async"]
  },

  {
    id: "nodejs-async-event-loop-q-003",
    quizId: "quiz_nodejs_async_event_loop",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which callback style is commonly associated with traditional Node.js APIs?",
    options: [
      { id: "A", text: "The callback receives only the successful result" },
      { id: "B", text: "The callback receives the error first and the result second" },
      { id: "C", text: "The callback must always return a Promise" },
      { id: "D", text: "The callback receives the result first and error second" }
    ],
    correctOptionId: "B",
    explanation: "Traditional Node.js callback APIs commonly follow the error-first convention: `(err, result)`.",
    tags: ["callbacks", "error-first"]
  },

  {
    id: "nodejs-async-event-loop-q-004",
    quizId: "quiz_nodejs_async_event_loop",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What problem is often called 'callback hell'?",
    options: [
      { id: "A", text: "A callback that executes too quickly" },
      { id: "B", text: "A callback that returns a number" },
      { id: "C", text: "A callback that uses an arrow function" },
      { id: "D", text: "Deeply nested callbacks that make asynchronous control flow difficult to read and maintain" }
    ],
    correctOptionId: "D",
    explanation: "Heavy nesting of callbacks can make sequencing, error handling, and maintenance increasingly difficult.",
    tags: ["callbacks", "callback-hell"]
  },

  {
    id: "nodejs-async-event-loop-q-005",
    quizId: "quiz_nodejs_async_event_loop",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a Promise?",
    options: [
      { id: "A", text: "An object representing the eventual completion or failure of an asynchronous operation" },
      { id: "B", text: "A function that can never fail" },
      { id: "C", text: "A synchronous file descriptor" },
      { id: "D", text: "A special Node.js database connection" }
    ],
    correctOptionId: "A",
    explanation: "A Promise represents a future result of an asynchronous operation and can be fulfilled or rejected.",
    tags: ["promises", "async"]
  },

  {
    id: "nodejs-async-event-loop-q-006",
    quizId: "quiz_nodejs_async_event_loop",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which states can a JavaScript Promise have?",
    options: [
      { id: "A", text: "Started, stopped, and paused" },
      { id: "B", text: "Open, closed, and waiting" },
      { id: "C", text: "Pending, fulfilled, and rejected" },
      { id: "D", text: "Running, sleeping, and completed" }
    ],
    correctOptionId: "C",
    explanation: "A Promise begins pending and eventually becomes fulfilled or rejected.",
    tags: ["promises", "states"]
  },

  {
    id: "nodejs-async-event-loop-q-007",
    quizId: "quiz_nodejs_async_event_loop",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method handles a fulfilled Promise?",
    options: [
      { id: "A", text: "catch()" },
      { id: "B", text: "then()" },
      { id: "C", text: "finallyError()" },
      { id: "D", text: "resolveOnly()" }
    ],
    correctOptionId: "B",
    explanation: "`then()` registers handlers for successful Promise fulfillment.",
    tags: ["promises", "then"]
  },

  {
    id: "nodejs-async-event-loop-q-008",
    quizId: "quiz_nodejs_async_event_loop",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method handles a rejected Promise?",
    options: [
      { id: "A", text: "catch()" },
      { id: "B", text: "rejectHandlerOnly()" },
      { id: "C", text: "error()" },
      { id: "D", text: "failPromise()" }
    ],
    correctOptionId: "A",
    explanation: "`catch()` registers a rejection handler for a Promise chain.",
    tags: ["promises", "catch", "errors"]
  },

  {
    id: "nodejs-async-event-loop-q-009",
    quizId: "quiz_nodejs_async_event_loop",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does an async function return?",
    options: [
      { id: "A", text: "A callback" },
      { id: "B", text: "A Promise" },
      { id: "C", text: "A stream" },
      { id: "D", text: "A synchronous value only" }
    ],
    correctOptionId: "B",
    explanation: "An `async` function always returns a Promise.",
    tags: ["async", "promises"]
  },

  {
    id: "nodejs-async-event-loop-q-010",
    quizId: "quiz_nodejs_async_event_loop",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `await` normally do inside an async function?",
    options: [
      { id: "A", text: "Stops the entire Node.js process" },
      { id: "B", text: "Converts the Promise into a callback" },
      { id: "C", text: "Waits for a Promise's settlement before continuing that async function" },
      { id: "D", text: "Makes the underlying operation CPU-bound" }
    ],
    correctOptionId: "C",
    explanation: "`await` pauses the continuation of the current async function until the awaited value settles; it does not block the entire Node.js process.",
    tags: ["async", "await"]
  },

  {
    id: "nodejs-async-event-loop-q-011",
    quizId: "quiz_nodejs_async_event_loop",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when an async function returns a normal value?",
    options: [
      { id: "A", text: "The value is automatically wrapped in a fulfilled Promise" },
      { id: "B", text: "The value is discarded" },
      { id: "C", text: "The function becomes synchronous permanently" },
      { id: "D", text: "Node.js throws an error" }
    ],
    correctOptionId: "A",
    explanation: "Returning a normal value from an async function produces a fulfilled Promise containing that value.",
    tags: ["async", "promises"]
  },

  {
    id: "nodejs-async-event-loop-q-012",
    quizId: "quiz_nodejs_async_event_loop",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when an async function throws an error?",
    options: [
      { id: "A", text: "The error is always ignored" },
      { id: "B", text: "The returned Promise is rejected with that error" },
      { id: "C", text: "The error becomes a resolved value" },
      { id: "D", text: "The Node process must always terminate immediately" }
    ],
    correctOptionId: "B",
    explanation: "An exception thrown inside an async function causes its returned Promise to reject.",
    tags: ["async", "errors"]
  },

  {
    id: "nodejs-async-event-loop-q-013",
    quizId: "quiz_nodejs_async_event_loop",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Promise.resolve(42)` produce?",
    options: [
      { id: "A", text: "The number 42 synchronously" },
      { id: "B", text: "A rejected Promise" },
      { id: "C", text: "A fulfilled Promise containing 42" },
      { id: "D", text: "A callback containing 42" }
    ],
    correctOptionId: "C",
    explanation: "`Promise.resolve()` creates or adopts a fulfilled Promise for the supplied value.",
    tags: ["promises", "resolve"]
  },

  {
    id: "nodejs-async-event-loop-q-014",
    quizId: "quiz_nodejs_async_event_loop",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Promise.reject(new Error('Failed'))` produce?",
    options: [
      { id: "A", text: "A rejected Promise" },
      { id: "B", text: "A fulfilled Promise" },
      { id: "C", text: "A callback" },
      { id: "D", text: "A synchronous exception before creating anything" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.reject()` creates a Promise already rejected with the supplied reason.",
    tags: ["promises", "reject", "errors"]
  },

  {
    id: "nodejs-async-event-loop-q-015",
    quizId: "quiz_nodejs_async_event_loop",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `Promise.finally()`?",
    options: [
      { id: "A", text: "It only runs when a Promise succeeds" },
      { id: "B", text: "It only runs when a Promise fails" },
      { id: "C", text: "It converts a Promise into a callback" },
      { id: "D", text: "It runs cleanup logic regardless of whether the Promise fulfills or rejects" }
    ],
    correctOptionId: "D",
    explanation: "`finally()` is useful for cleanup that should occur regardless of the Promise's outcome.",
    tags: ["promises", "finally"]
  },

  {
    id: "nodejs-async-event-loop-q-016",
    quizId: "quiz_nodejs_async_event_loop",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n```js\nPromise.resolve(10)\n  .then(value => value * 2)\n  .then(value => console.log(value));\n```\n\nWhat is printed?",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "20" },
      { id: "C", text: "undefined" },
      { id: "D", text: "A Promise object" }
    ],
    correctOptionId: "B",
    explanation: "The first `then()` transforms 10 into 20, which becomes the fulfillment value for the next `then()`.",
    tags: ["promises", "then", "chaining"]
  },

  {
    id: "nodejs-async-event-loop-q-017",
    quizId: "quiz_nodejs_async_event_loop",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can Promise chains be chained with multiple `then()` calls?",
    options: [
      { id: "A", text: "Each then() returns a new Promise" },
      { id: "B", text: "Promises can only contain numbers" },
      { id: "C", text: "Node automatically converts every callback into a Promise" },
      { id: "D", text: "then() modifies the original Promise in place and returns nothing" }
    ],
    correctOptionId: "A",
    explanation: "Each `then()` returns a new Promise whose result depends on the handler's return value or thrown error.",
    tags: ["promises", "chaining"]
  },

  {
    id: "nodejs-async-event-loop-q-018",
    quizId: "quiz_nodejs_async_event_loop",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when a `then()` handler returns another Promise?",
    options: [
      { id: "A", text: "The outer chain immediately ignores that Promise" },
      { id: "B", text: "The next Promise in the chain adopts the returned Promise's eventual state" },
      { id: "C", text: "The returned Promise becomes synchronous" },
      { id: "D", text: "The chain is automatically rejected" }
    ],
    correctOptionId: "B",
    explanation: "Promise resolution follows returned thenables/Promises, allowing asynchronous operations to be composed naturally.",
    tags: ["promises", "chaining"]
  },

  {
    id: "nodejs-async-event-loop-q-019",
    quizId: "quiz_nodejs_async_event_loop",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main role of Node.js's event loop?",
    options: [
      { id: "A", text: "To compile JavaScript into TypeScript" },
      { id: "B", text: "To create a new operating system thread for every request" },
      { id: "C", text: "To coordinate JavaScript execution and callbacks for asynchronous work" },
      { id: "D", text: "To manage npm package versions" }
    ],
    correctOptionId: "C",
    explanation: "The event loop coordinates when JavaScript callbacks and other queued work are processed.",
    tags: ["event-loop", "node"]
  },

  {
    id: "nodejs-async-event-loop-q-020",
    quizId: "quiz_nodejs_async_event_loop",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Does `await` block the entire Node.js event loop?",
    options: [
      { id: "A", text: "Yes, every await blocks all requests" },
      { id: "B", text: "Yes, because Promises run synchronously" },
      { id: "C", text: "Only when the Promise resolves quickly" },
      { id: "D", text: "No; it pauses the async function's continuation while other work can proceed" }
    ],
    correctOptionId: "D",
    explanation: "`await` suspends the current async function's continuation. It does not freeze the entire event loop while the Promise is pending.",
    tags: ["await", "event-loop"]
  },

  {
    id: "nodejs-async-event-loop-q-021",
    quizId: "quiz_nodejs_async_event_loop",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `setTimeout(callback, 0)` mean?",
    options: [
      { id: "A", text: "The callback runs before the current synchronous code" },
      { id: "B", text: "The callback is scheduled after at least the requested delay, subject to event-loop scheduling" },
      { id: "C", text: "The callback runs immediately without entering the event loop" },
      { id: "D", text: "The callback executes on a guaranteed separate CPU core" }
    ],
    correctOptionId: "B",
    explanation: "A zero delay does not mean immediate execution. The callback becomes eligible after the timer threshold and when the event loop reaches the relevant phase.",
    tags: ["timers", "event-loop"]
  },

  {
    id: "nodejs-async-event-loop-q-022",
    quizId: "quiz_nodejs_async_event_loop",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a microtask in JavaScript?",
    options: [
      { id: "A", text: "A small CPU thread created for each Promise" },
      { id: "B", text: "A synchronous function that cannot be delayed" },
      { id: "C", text: "Queued work such as Promise reactions that is processed at microtask checkpoints" },
      { id: "D", text: "An npm package smaller than 1 KB" }
    ],
    correctOptionId: "C",
    explanation: "Promise reactions and other microtasks are queued separately from timer callbacks and are processed at defined microtask checkpoints.",
    tags: ["microtasks", "promises", "event-loop"]
  },

  {
    id: "nodejs-async-event-loop-q-023",
    quizId: "quiz_nodejs_async_event_loop",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n```js\nconsole.log('A');\nPromise.resolve().then(() => console.log('B'));\nconsole.log('C');\n```\n\nWhat is the output order?",
    options: [
      { id: "A", text: "A, C, B" },
      { id: "B", text: "B, A, C" },
      { id: "C", text: "A, B, C" },
      { id: "D", text: "C, A, B" }
    ],
    correctOptionId: "A",
    explanation: "Synchronous code runs first. The Promise reaction is queued as a microtask and runs after the current synchronous execution completes.",
    tags: ["microtasks", "promises", "event-loop"]
  },

  {
    id: "nodejs-async-event-loop-q-024",
    quizId: "quiz_nodejs_async_event_loop",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n```js\nconsole.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');\n```\n\nWhat is the typical output order?",
    options: [
      { id: "A", text: "A, B, C, D" },
      { id: "B", text: "A, D, C, B" },
      { id: "C", text: "C, A, D, B" },
      { id: "D", text: "A, D, B, C" }
    ],
    correctOptionId: "B",
    explanation: "Synchronous code runs first (`A`, `D`), then the Promise microtask (`C`), and the timer callback is processed afterward (`B`).",
    tags: ["microtasks", "timers", "event-loop"]
  },

  {
    id: "nodejs-async-event-loop-q-025",
    quizId: "quiz_nodejs_async_event_loop",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can a large amount of CPU-heavy synchronous JavaScript hurt a Node.js server?",
    options: [
      { id: "A", text: "It can keep the event loop busy and delay other callbacks and requests" },
      { id: "B", text: "It automatically deletes pending Promises" },
      { id: "C", text: "It turns all network requests into HTTP errors" },
      { id: "D", text: "It disables npm" }
    ],
    correctOptionId: "A",
    explanation: "Node's JavaScript execution occurs on the main event-loop thread. Long synchronous CPU work can prevent other callbacks from being processed.",
    tags: ["event-loop", "performance"]
  },

  {
    id: "nodejs-async-event-loop-q-026",
    quizId: "quiz_nodejs_async_event_loop",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Promise.all()` do?",
    options: [
      { id: "A", text: "Runs only the first Promise" },
      { id: "B", text: "Converts all Promises into callbacks" },
      { id: "C", text: "Waits for all input Promises to fulfill, or rejects when one rejects" },
      { id: "D", text: "Always waits for every rejection before settling" }
    ],
    correctOptionId: "C",
    explanation: "`Promise.all()` fulfills with all results when every input fulfills and rejects when an input rejects.",
    tags: ["Promise.all", "promises"]
  },

  {
    id: "nodejs-async-event-loop-q-027",
    quizId: "quiz_nodejs_async_event_loop",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When is `Promise.all()` especially useful?",
    options: [
      { id: "A", text: "When several independent asynchronous operations can run concurrently" },
      { id: "B", text: "When operations must always execute strictly one after another" },
      { id: "C", text: "When you want to ignore all errors" },
      { id: "D", text: "When you need synchronous file I/O" }
    ],
    correctOptionId: "A",
    explanation: "Independent operations can be started together and awaited as a group with `Promise.all()`.",
    tags: ["Promise.all", "concurrency"]
  },

  {
    id: "nodejs-async-event-loop-q-028",
    quizId: "quiz_nodejs_async_event_loop",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the key difference between `Promise.all()` and `Promise.allSettled()`?",
    options: [
      { id: "A", text: "all() ignores rejection while allSettled() throws immediately" },
      { id: "B", text: "allSettled() waits for every input to settle and reports each result, while all() rejects on rejection" },
      { id: "C", text: "all() only accepts one Promise" },
      { id: "D", text: "They have identical behavior" }
    ],
    correctOptionId: "B",
    explanation: "`allSettled()` is useful when you need the outcome of every operation regardless of whether some fail.",
    tags: ["Promise.all", "allSettled"]
  },

  {
    id: "nodejs-async-event-loop-q-029",
    quizId: "quiz_nodejs_async_event_loop",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Promise.race()` return?",
    options: [
      { id: "A", text: "A Promise that settles according to the first input Promise to settle" },
      { id: "B", text: "A Promise that always waits for every input" },
      { id: "C", text: "The first input value synchronously" },
      { id: "D", text: "An array of all results" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.race()` settles as soon as the first input Promise settles, whether fulfilled or rejected.",
    tags: ["Promise.race", "promises"]
  },

  {
    id: "nodejs-async-event-loop-q-030",
    quizId: "quiz_nodejs_async_event_loop",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which Promise utility waits for the first Promise to fulfill while ignoring earlier rejections?",
    options: [
      { id: "A", text: "Promise.all()" },
      { id: "B", text: "Promise.race()" },
      { id: "C", text: "Promise.any()" },
      { id: "D", text: "Promise.resolve()" }
    ],
    correctOptionId: "C",
    explanation: "`Promise.any()` fulfills when the first input fulfills and rejects with an AggregateError only if all inputs reject.",
    tags: ["Promise.any", "promises"]
  },

  {
    id: "nodejs-async-event-loop-q-031",
    quizId: "quiz_nodejs_async_event_loop",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is sequential async execution?",
    options: [
      { id: "A", text: "Starting all operations at exactly the same time" },
      { id: "B", text: "Waiting for one asynchronous operation to finish before starting the next" },
      { id: "C", text: "Running asynchronous operations without Promises" },
      { id: "D", text: "Blocking the event loop permanently" }
    ],
    correctOptionId: "B",
    explanation: "Sequential execution intentionally waits for one operation before beginning the next, which is sometimes necessary when later work depends on earlier results.",
    tags: ["async", "sequencing"]
  },

  {
    id: "nodejs-async-event-loop-q-032",
    quizId: "quiz_nodejs_async_event_loop",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is generally faster when `requestA()` and `requestB()` are completely independent?",
    options: [
      { id: "A", text: "await requestA(); await requestB();" },
      { id: "B", text: "Use synchronous versions of both requests" },
      { id: "C", text: "Start both and await Promise.all([requestA(), requestB()])" },
      { id: "D", text: "Run requestA() only after requestB() finishes" }
    ],
    correctOptionId: "C",
    explanation: "Starting independent operations together allows their waiting periods to overlap.",
    tags: ["async", "concurrency", "Promise.all"]
  },

  {
    id: "nodejs-async-event-loop-q-033",
    quizId: "quiz_nodejs_async_event_loop",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is required if `requestB()` needs the result of `requestA()`?",
    options: [
      { id: "A", text: "Run them independently with Promise.all() regardless of the dependency" },
      { id: "B", text: "Wait for requestA() before using its result to start requestB()" },
      { id: "C", text: "Use setTimeout() with a guessed delay" },
      { id: "D", text: "Run requestB() before requestA()" }
    ],
    correctOptionId: "B",
    explanation: "When there is a data dependency, the second operation cannot correctly start until the required result from the first is available.",
    tags: ["async", "sequencing", "dependencies"]
  },

  {
    id: "nodejs-async-event_loop-q-034",
    quizId: "quiz_nodejs_async_event_loop",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is wrong with this pattern?\n\n```js\ntry {\n  fetchData().then(data => console.log(data));\n} catch (error) {\n  console.log(error);\n}\n```",
    options: [
      { id: "A", text: "try/catch around the registration does not generally catch a later Promise rejection" },
      { id: "B", text: "fetchData() cannot return a Promise" },
      { id: "C", text: "then() is synchronous" },
      { id: "D", text: "try/catch cannot exist in Node.js" }
    ],
    correctOptionId: "A",
    explanation: "A later Promise rejection must be handled with `.catch()` or by awaiting the Promise inside a suitable try/catch.",
    tags: ["promises", "errors", "try-catch"]
  },

  {
    id: "nodejs-async-event-loop-q-035",
    quizId: "quiz_nodejs_async_event_loop",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which pattern correctly handles an awaited Promise rejection?",
    options: [
      { id: "A", text: "Use try/catch around the await inside an async function" },
      { id: "B", text: "Put catch around the function declaration" },
      { id: "C", text: "Use console.log() before await" },
      { id: "D", text: "Wrap await in setTimeout()" }
    ],
    correctOptionId: "A",
    explanation: "An awaited rejected Promise throws at the await expression, so a surrounding try/catch can handle it.",
    tags: ["async", "await", "errors"]
  },

  {
    id: "nodejs-async-event_loop-q-036",
    quizId: "quiz_nodejs_async_event_loop",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this function return?\n\n```js\nasync function getUser() {\n  return { id: 1 };\n}\n```",
    options: [
      { id: "A", text: "The object directly" },
      { id: "B", text: "A rejected Promise" },
      { id: "C", text: "A fulfilled Promise containing the object" },
      { id: "D", text: "A callback" }
    ],
    correctOptionId: "C",
    explanation: "Async functions wrap returned values in fulfilled Promises.",
    tags: ["async", "promises"]
  },

  {
    id: "nodejs-async_event_loop-q-037",
    quizId: "quiz_nodejs_async_event_loop",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens here?\n\n```js\nasync function test() {\n  throw new Error('Boom');\n}\n\ntest().catch(console.log);\n```",
    options: [
      { id: "A", text: "The error is converted into a fulfilled Promise" },
      { id: "B", text: "test() returns a rejected Promise and catch() receives the error" },
      { id: "C", text: "The process must always terminate before catch() runs" },
      { id: "D", text: "The function returns undefined synchronously" }
    ],
    correctOptionId: "B",
    explanation: "Throwing inside an async function rejects its returned Promise, allowing `.catch()` to handle the error.",
    tags: ["async", "errors"]
  },

  {
    id: "nodejs-async_event_loop-q-038",
    quizId: "quiz_nodejs_async_event_loop",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can an unhandled Promise rejection be dangerous in a production application?",
    options: [
      { id: "A", text: "It guarantees a memory leak" },
      { id: "B", text: "It guarantees the request will succeed" },
      { id: "C", text: "It means the Promise will retry forever" },
      { id: "D", text: "It can leave failures improperly handled and, depending on runtime behavior and application setup, can contribute to process-level problems" }
    ],
    correctOptionId: "D",
    explanation: "Unhandled rejections indicate missing error handling. Their consequences depend on the Node.js version and application behavior, but they should not be ignored.",
    tags: ["promises", "errors", "production"]
  },

  {
    id: "nodejs-async_event_loop-q-039",
    quizId: "quiz_nodejs_async_event_loop",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\n```js\nasync function load() {\n  const a = await getA();\n  const b = await getB();\n  return [a, b];\n}\n```\n\nIf `getA()` and `getB()` are independent, what is a potential optimization?",
    options: [
      { id: "A", text: "Run both operations concurrently with Promise.all()" },
      { id: "B", text: "Make both functions synchronous" },
      { id: "C", text: "Add a longer setTimeout()" },
      { id: "D", text: "Remove both awaits and ignore their results" }
    ],
    correctOptionId: "A",
    explanation: "Independent operations can overlap their waiting time by starting both before awaiting their combined results.",
    tags: ["async", "concurrency", "optimization"]
  },

  {
    id: "nodejs-async_event_loop-q-040",
    quizId: "quiz_nodejs_async_event_loop",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main danger of using `await` sequentially inside a loop when every iteration is independent?",
    options: [
      { id: "A", text: "The loop becomes impossible to debug" },
      { id: "B", text: "It can unnecessarily serialize operations and increase total waiting time" },
      { id: "C", text: "It always causes a syntax error" },
      { id: "D", text: "It converts all values to strings" }
    ],
    correctOptionId: "B",
    explanation: "Sequential awaits force each iteration to wait for the previous one. Independent operations may be better handled concurrently.",
    tags: ["async", "loops", "concurrency"]
  },

  {
    id: "nodejs-async_event_loop-q-041",
    quizId: "quiz_nodejs_async_event_loop",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might blindly using `Promise.all()` on thousands of operations be a bad idea?",
    options: [
      { id: "A", text: "Promise.all() is synchronous" },
      { id: "B", text: "Promises cannot contain more than one value" },
      { id: "C", text: "It may create excessive concurrency and overwhelm resources such as APIs, sockets, memory, or databases" },
      { id: "D", text: "Promise.all() always executes operations sequentially" }
    ],
    correctOptionId: "C",
    explanation: "Concurrency should be controlled when dealing with large workloads. Limiting concurrency can protect external services and application resources.",
    tags: ["Promise.all", "concurrency", "performance"]
  },

  {
    id: "nodejs-async_event_loop-q-042",
    quizId: "quiz_nodejs_async_event_loop",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a useful pattern for limiting concurrency when processing many asynchronous tasks?",
    options: [
      { id: "A", text: "Start every task immediately regardless of resource limits" },
      { id: "B", text: "Use a concurrency limiter or worker pool to control how many tasks run at once" },
      { id: "C", text: "Replace every Promise with setTimeout()" },
      { id: "D", text: "Block the event loop between every task" }
    ],
    correctOptionId: "B",
    explanation: "Concurrency limits allow applications to process large workloads without creating uncontrolled pressure on resources.",
    tags: ["concurrency", "performance"]
  },

  {
    id: "nodejs-async-event_loop-q-043",
    quizId: "quiz_nodejs_async_event_loop",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about asynchronous I/O and CPU-heavy work is most accurate?",
    options: [
      { id: "A", text: "Async I/O automatically makes CPU-heavy JavaScript non-blocking" },
      { id: "B", text: "CPU-heavy JavaScript can still block the main event-loop thread even in an asynchronous application" },
      { id: "C", text: "Promises always execute CPU work on another thread" },
      { id: "D", text: "await automatically moves JavaScript execution to another CPU core" }
    ],
    correctOptionId: "B",
    explanation: "Asynchronous I/O does not make CPU-bound JavaScript automatically parallel. Heavy synchronous computation can still block the event loop.",
    tags: ["event-loop", "cpu", "performance"]
  },

  {
    id: "nodejs-async_event_loop-q-044",
    quizId: "quiz_nodejs_async_event_loop",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which Node.js feature can be used when CPU-intensive JavaScript should run separately from the main thread?",
    options: [
      { id: "A", text: "worker_threads" },
      { id: "B", text: "Promise.resolve()" },
      { id: "C", text: "process.env" },
      { id: "D", text: "console.log()" }
    ],
    correctOptionId: "A",
    explanation: "Node.js worker threads provide a mechanism for running JavaScript in separate threads, useful for CPU-intensive workloads.",
    tags: ["worker-threads", "cpu", "performance"]
  },

  {
    id: "nodejs-async_event_loop-q-045",
    quizId: "quiz_nodejs_async_event_loop",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `process.nextTick()` schedule?",
    options: [
      { id: "A", text: "A callback that runs after a one-second timer" },
      { id: "B", text: "A callback that is queued to run after the current operation completes, before the event loop proceeds to later phases" },
      { id: "C", text: "A callback on a guaranteed worker thread" },
      { id: "D", text: "A callback that runs only after all network requests finish" }
    ],
    correctOptionId: "B",
    explanation: "`process.nextTick()` schedules work for the next tick of the current turn and has higher priority than many later event-loop phases. Excessive use can starve the event loop.",
    tags: ["process.nextTick", "event-loop"]
  },

  {
    id: "nodejs-async_event_loop-q-046",
    quizId: "quiz_nodejs_async_event_loop",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can excessive recursive use of `process.nextTick()` be problematic?",
    options: [
      { id: "A", text: "It can prevent the event loop from reaching other phases for too long" },
      { id: "B", text: "It automatically creates infinite HTTP requests" },
      { id: "C", text: "It disables Promise support" },
      { id: "D", text: "It deletes the callback queue" }
    ],
    correctOptionId: "A",
    explanation: "An excessive nextTick queue can starve I/O and other event-loop work because nextTick callbacks are processed with high priority.",
    tags: ["process.nextTick", "event-loop", "performance"]
  },

  {
    id: "nodejs-async_event_loop-q-047",
    quizId: "quiz_nodejs_async_event_loop",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A Node.js API receives a request and performs three independent database queries. Which implementation best avoids unnecessary sequential waiting?",
    options: [
      { id: "A", text: "await query1(); await query2(); await query3();" },
      { id: "B", text: "Use setTimeout() before each query" },
      { id: "C", text: "Start all three queries and await Promise.all([query1(), query2(), query3()])" },
      { id: "D", text: "Convert all queries to synchronous operations" }
    ],
    correctOptionId: "C",
    explanation: "When the queries are independent, starting them together allows their I/O waiting periods to overlap.",
    tags: ["database", "Promise.all", "api"]
  },

  {
    id: "nodejs-async_event_loop-q-048",
    quizId: "quiz_nodejs_async_event_loop",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A service calls an external API that sometimes takes 30 seconds. Which design concern is especially important?",
    options: [
      { id: "A", text: "Assume the request will always finish quickly" },
      { id: "B", text: "Use timeouts or cancellation mechanisms so slow external operations do not consume resources indefinitely" },
      { id: "C", text: "Block the event loop until the API responds" },
      { id: "D", text: "Retry infinitely without limits" }
    ],
    correctOptionId: "B",
    explanation: "Timeouts and cancellation help prevent slow or stuck external operations from consuming connections, memory, and other resources indefinitely.",
    tags: ["async", "timeouts", "api", "production"]
  },

  {
    id: "nodejs-async_event_loop-q-049",
    quizId: "quiz_nodejs_async_event_loop",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the best explanation of the relationship between Promises and the event loop?",
    options: [
      { id: "A", text: "Promises replace the event loop" },
      { id: "B", text: "Promises create a new JavaScript engine for every operation" },
      { id: "C", text: "Promises represent asynchronous results, while the runtime schedules their reactions for execution through the event-loop machinery" },
      { id: "D", text: "Promises make every operation run in parallel CPU threads" }
    ],
    correctOptionId: "C",
    explanation: "Promises provide a model for representing asynchronous results. Their reactions are scheduled by the JavaScript runtime and processed as microtasks.",
    tags: ["promises", "event-loop", "async"]
  },

  {
    id: "nodejs-async_event_loop-q-050",
    quizId: "quiz_nodejs_async_event_loop",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A production Node.js endpoint performs several independent I/O operations, must handle failures cleanly, and should remain responsive under load. Which approach is strongest?",
    options: [
      { id: "A", text: "Run all operations synchronously and catch errors at the process level" },
      { id: "B", text: "Use asynchronous APIs, run independent operations concurrently with controlled concurrency, handle Promise failures explicitly, and avoid CPU-heavy work on the event-loop thread" },
      { id: "C", text: "Use unlimited Promise.all() calls and ignore rejected Promises" },
      { id: "D", text: "Use recursive process.nextTick() calls to maximize throughput" }
    ],
    correctOptionId: "B",
    explanation: "Production Node.js code should use asynchronous I/O appropriately, control concurrency, handle failures explicitly, and keep CPU-heavy work away from the main event-loop thread.",
    tags: ["async", "event-loop", "concurrency", "errors", "performance"]
  }
];

export default nodejsAsyncEventLoopQuestions;