const javascriptAsyncQuestions = [
  {
    id: "javascript-async-q-001",
    quizId: "quiz_javascript_async",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does asynchronous JavaScript allow a program to do?",
    options: [
      { id: "A", text: "Start an operation and continue executing other work without waiting for that operation to finish" },
      { id: "B", text: "Run every operation on multiple CPU cores automatically" },
      { id: "C", text: "Make synchronous code execute without a call stack" },
      { id: "D", text: "Prevent the browser from executing JavaScript" }
    ],
    correctOptionId: "A",
    explanation: "Asynchronous programming allows JavaScript to initiate operations such as timers, network requests, or other tasks and continue executing available synchronous work while waiting for the result.",
    tags: ["async", "asynchronous-programming", "fundamentals"]
  },

  {
    id: "javascript-async-q-002",
    quizId: "quiz_javascript_async",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement best describes a callback function?",
    options: [
      { id: "A", text: "A function passed to another function so it can be called later" },
      { id: "B", text: "A function that can only be used with Promises" },
      { id: "C", text: "A function that automatically runs before the program starts" },
      { id: "D", text: "A function that always returns a Promise" }
    ],
    correctOptionId: "A",
    explanation: "A callback is simply a function supplied to another function so that the receiving function can invoke it at an appropriate time.",
    tags: ["callbacks", "async", "fundamentals"]
  },

  {
    id: "javascript-async-q-003",
    quizId: "quiz_javascript_async",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged first?\n\nconsole.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nconsole.log(\"C\");",
    options: [
      { id: "A", text: "A" },
      { id: "B", text: "B" },
      { id: "C", text: "C" },
      { id: "D", text: "A and B simultaneously" }
    ],
    correctOptionId: "A",
    explanation: "The first synchronous statement executes immediately. The timer callback is scheduled for later, so `A` is logged before `C`, and `B` runs after the current synchronous code finishes.",
    tags: ["setTimeout", "event-loop", "synchronous-code"]
  },

  {
    id: "javascript-async-q-004",
    quizId: "quiz_javascript_async",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What is the output order?\n\nconsole.log(\"start\");\nsetTimeout(() => console.log(\"timeout\"), 0);\nconsole.log(\"end\");",
    options: [
      { id: "A", text: "start → end → timeout" },
      { id: "B", text: "start → timeout → end" },
      { id: "C", text: "timeout → start → end" },
      { id: "D", text: "end → start → timeout" }
    ],
    correctOptionId: "A",
    explanation: "Both `console.log()` calls are synchronous. The timer callback cannot execute until the current call stack is empty, so `end` is logged before `timeout`.",
    tags: ["setTimeout", "event-loop", "execution-order"]
  },

  {
    id: "javascript-async-q-005",
    quizId: "quiz_javascript_async",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What problem can deeply nested callbacks create?",
    options: [
      { id: "A", text: "Callback hell, where nested asynchronous logic becomes difficult to read and maintain" },
      { id: "B", text: "They automatically disable the event loop" },
      { id: "C", text: "They make all code synchronous" },
      { id: "D", text: "They prevent functions from accepting parameters" }
    ],
    correctOptionId: "A",
    explanation: "Deeply nested callbacks can make control flow difficult to follow, especially when handling multiple dependent asynchronous operations and errors. Promises and async/await provide clearer alternatives.",
    tags: ["callbacks", "callback-hell", "async"]
  },

  {
    id: "javascript-async-q-006",
    quizId: "quiz_javascript_async",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a Promise in JavaScript?",
    options: [
      { id: "A", text: "An object representing the eventual completion or failure of an asynchronous operation" },
      { id: "B", text: "A callback that must always execute immediately" },
      { id: "C", text: "A special type of array" },
      { id: "D", text: "A browser event listener" }
    ],
    correctOptionId: "A",
    explanation: "A Promise represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected.",
    tags: ["promises", "async", "fundamentals"]
  },

  {
    id: "javascript-async-q-007",
    quizId: "quiz_javascript_async",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which three states can a Promise have?",
    options: [
      { id: "A", text: "pending, fulfilled, rejected" },
      { id: "B", text: "waiting, running, stopped" },
      { id: "C", text: "created, executing, destroyed" },
      { id: "D", text: "open, closed, paused" }
    ],
    correctOptionId: "A",
    explanation: "A Promise begins as `pending` and eventually becomes either `fulfilled` or `rejected`. Once settled, its state does not change again.",
    tags: ["promises", "promise-states"]
  },

  {
    id: "javascript-async-q-008",
    quizId: "quiz_javascript_async",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "What does this Promise eventually become?\n\nconst promise = new Promise((resolve, reject) => {\n  resolve(\"Success\");\n});",
    options: [
      { id: "A", text: "Fulfilled with the value \"Success\"" },
      { id: "B", text: "Rejected with the value \"Success\"" },
      { id: "C", text: "Pending forever" },
      { id: "D", text: "It throws automatically" }
    ],
    correctOptionId: "A",
    explanation: "Calling `resolve(\"Success\")` settles the Promise as fulfilled with `\"Success\"` as its fulfillment value.",
    tags: ["promises", "resolve", "fulfilled"]
  },

  {
    id: "javascript-async-q-009",
    quizId: "quiz_javascript_async",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What happens here?\n\nconst promise = new Promise((resolve, reject) => {\n  reject(new Error(\"Failed\"));\n});",
    options: [
      { id: "A", text: "The Promise becomes rejected with the Error" },
      { id: "B", text: "The Promise becomes fulfilled" },
      { id: "C", text: "The Promise remains pending" },
      { id: "D", text: "The Error is automatically caught" }
    ],
    correctOptionId: "A",
    explanation: "Calling `reject()` settles the Promise as rejected. A rejection handler such as `.catch()` or a surrounding `try/catch` with `await` can handle it.",
    tags: ["promises", "reject", "rejected"]
  },

  {
    id: "javascript-async-q-010",
    quizId: "quiz_javascript_async",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the .then() method primarily handle?",
    options: [
      { id: "A", text: "The fulfillment value of a Promise" },
      { id: "B", text: "Only synchronous exceptions thrown before the Promise exists" },
      { id: "C", text: "DOM rendering" },
      { id: "D", text: "Creating JavaScript modules" }
    ],
    correctOptionId: "A",
    explanation: "A callback passed to `.then()` is executed when the Promise is fulfilled, receiving its fulfillment value.",
    tags: ["promises", "then", "fulfilled"]
  },

  {
    id: "javascript-async-q-011",
    quizId: "quiz_javascript_async",
    order: 11,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nPromise.resolve(10)\n  .then(value => value * 2)\n  .then(value => console.log(value));",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "10" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Promise { 20 }" }
    ],
    correctOptionId: "A",
    explanation: "The first `.then()` receives `10` and returns `20`. The next `.then()` receives that returned value and logs it.",
    tags: ["promises", "then", "promise-chaining"]
  },

  {
    id: "javascript-async-q-012",
    quizId: "quiz_javascript_async",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can Promise chains be written like this?\n\npromise.then(step1).then(step2).then(step3);",
    options: [
      { id: "A", text: "Each then() returns a new Promise that can be chained" },
      { id: "B", text: "then() always returns the original Promise" },
      { id: "C", text: "JavaScript automatically converts functions into arrays" },
      { id: "D", text: "Promises can only contain three callbacks" }
    ],
    correctOptionId: "A",
    explanation: "`.then()` returns a new Promise. That returned Promise adopts the result of the callback, allowing subsequent asynchronous steps to be chained.",
    tags: ["promises", "then", "promise-chaining"]
  },

  {
    id: "javascript-async-q-013",
    quizId: "quiz_javascript_async",
    order: 13,
    type: "code",
    difficulty: "Intermediate",
    question: "What does the following callback return to the next .then()?\n\nPromise.resolve(5)\n  .then(value => {\n    console.log(value);\n  })\n  .then(value => console.log(value));",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "5" },
      { id: "C", text: "Promise rejected with undefined" },
      { id: "D", text: "The original Promise object" }
    ],
    correctOptionId: "A",
    explanation: "A callback that reaches the end without an explicit `return` returns `undefined`. Therefore the next `.then()` receives `undefined`.",
    tags: ["promises", "then", "return-values"]
  },

  {
    id: "javascript-async-q-014",
    quizId: "quiz_javascript_async",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of .catch() in a Promise chain?",
    options: [
      { id: "A", text: "To handle Promise rejections and errors propagated through the chain" },
      { id: "B", text: "To convert every rejection into a DOM event" },
      { id: "C", text: "To make a Promise synchronous" },
      { id: "D", text: "To restart the JavaScript runtime" }
    ],
    correctOptionId: "A",
    explanation: "`.catch()` registers a rejection handler. It can handle a rejection from the original Promise or an error/rejection propagated from an earlier step in the chain.",
    tags: ["promises", "catch", "error-handling"]
  },

  {
    id: "javascript-async-q-015",
    quizId: "quiz_javascript_async",
    order: 15,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nPromise.reject(\"error\")\n  .catch(error => {\n    console.log(error);\n    return \"recovered\";\n  })\n  .then(value => console.log(value));",
    options: [
      { id: "A", text: "error, then recovered" },
      { id: "B", text: "Only error" },
      { id: "C", text: "Only recovered" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The rejection enters `.catch()`, which logs `error` and returns `recovered`. Returning normally from the catch handler fulfills the next Promise, so the following `.then()` logs `recovered`.",
    tags: ["promises", "catch", "recovery", "promise-chaining"]
  },

  {
    id: "javascript-async-q-016",
    quizId: "quiz_javascript_async",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when a Promise callback throws an error?",
    options: [
      { id: "A", text: "The Promise returned by that callback's then() becomes rejected" },
      { id: "B", text: "The error is always ignored" },
      { id: "C", text: "The Promise automatically becomes fulfilled" },
      { id: "D", text: "The entire browser crashes" }
    ],
    correctOptionId: "A",
    explanation: "If a callback supplied to `.then()` throws, the Promise returned by that `.then()` becomes rejected with the thrown error.",
    tags: ["promises", "errors", "then", "rejection"]
  },

  {
    id: "javascript-async-q-017",
    quizId: "quiz_javascript_async",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does Promise.all() do?",
    options: [
      { id: "A", text: "Waits for all supplied Promises to fulfill and rejects if any input Promise rejects" },
      { id: "B", text: "Runs Promises one at a time in sequence" },
      { id: "C", text: "Ignores rejected Promises" },
      { id: "D", text: "Returns only the fastest Promise's result" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.all()` fulfills when every input fulfills and provides their results in input order. It rejects as soon as the combined operation observes an input rejection.",
    tags: ["promises", "Promise.all", "concurrency"]
  },

  {
    id: "javascript-async-q-018",
    quizId: "quiz_javascript_async",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the result?\n\nconst result = await Promise.all([\n  Promise.resolve(\"A\"),\n  Promise.resolve(\"B\"),\n  Promise.resolve(\"C\")\n]);",
    options: [
      { id: "A", text: "[\"A\", \"B\", \"C\"]" },
      { id: "B", text: "[\"C\", \"B\", \"A\"]" },
      { id: "C", text: "\"ABC\"" },
      { id: "D", text: "A single Promise object" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.all()` returns an array of fulfillment values in the same order as the input iterable.",
    tags: ["Promise.all", "promises", "await"]
  },

  {
    id: "javascript-async-q-019",
    quizId: "quiz_javascript_async",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method is appropriate when you need all Promise outcomes, including both fulfilled and rejected results?",
    options: [
      { id: "A", text: "Promise.allSettled()" },
      { id: "B", text: "Promise.onlySuccess()" },
      { id: "C", text: "Promise.allRejected()" },
      { id: "D", text: "Promise.collect()" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.allSettled()` waits for every input Promise to settle and returns an object describing whether each one fulfilled or rejected.",
    tags: ["Promise.allSettled", "promises", "concurrency"]
  },

  {
    id: "javascript-async-q-020",
    quizId: "quiz_javascript_async",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does Promise.race() return?",
    options: [
      { id: "A", text: "A Promise that settles according to the first input Promise to settle" },
      { id: "B", text: "The results of every Promise" },
      { id: "C", text: "Only the first fulfilled Promise, ignoring rejections" },
      { id: "D", text: "The slowest Promise" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.race()` settles when the first input Promise settles, whether that first settlement is fulfillment or rejection.",
    tags: ["Promise.race", "promises", "concurrency"]
  },

  {
    id: "javascript-async-q-021",
    quizId: "quiz_javascript_async",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does an async function always return?",
    options: [
      { id: "A", text: "A Promise" },
      { id: "B", text: "A callback" },
      { id: "C", text: "An iterator" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "An `async` function always returns a Promise. A returned value becomes the fulfillment value of that Promise, while a thrown error causes rejection.",
    tags: ["async-functions", "promises", "async-await"]
  },

  {
    id: "javascript-async-q-022",
    quizId: "quiz_javascript_async",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this function return?\n\nasync function getValue() {\n  return 42;\n}",
    options: [
      { id: "A", text: "A fulfilled Promise containing 42" },
      { id: "B", text: "The number 42 directly" },
      { id: "C", text: "undefined" },
      { id: "D", text: "A rejected Promise" }
    ],
    correctOptionId: "A",
    explanation: "Because the function is marked `async`, its returned value is automatically wrapped in a fulfilled Promise.",
    tags: ["async-functions", "return", "promises"]
  },

  {
    id: "javascript-async-q-023",
    quizId: "quiz_javascript_async",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does await do inside an async function?",
    options: [
      { id: "A", text: "It waits for a Promise's settlement before continuing that async function's execution" },
      { id: "B", text: "It blocks the entire JavaScript runtime until the Promise finishes" },
      { id: "C", text: "It converts every Promise into a callback" },
      { id: "D", text: "It makes the Promise execute synchronously on the main thread" }
    ],
    correctOptionId: "A",
    explanation: "`await` pauses the execution of the surrounding async function until the awaited Promise settles. It does not block the entire JavaScript thread.",
    tags: ["await", "async-await", "promises"]
  },

  {
    id: "javascript-async-q-024",
    quizId: "quiz_javascript_async",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nasync function test() {\n  console.log(\"A\");\n  await Promise.resolve();\n  console.log(\"B\");\n}\n\ntest();\nconsole.log(\"C\");",
    options: [
      { id: "A", text: "A → C → B" },
      { id: "B", text: "A → B → C" },
      { id: "C", text: "C → A → B" },
      { id: "D", text: "B → A → C" }
    ],
    correctOptionId: "A",
    explanation: "`A` runs synchronously. When execution reaches `await`, the remainder of the async function is scheduled to continue later. The surrounding synchronous code logs `C` first, then the continuation logs `B`.",
    tags: ["await", "event-loop", "microtasks", "execution-order"]
  },

  {
    id: "javascript-async-q-025",
    quizId: "quiz_javascript_async",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens when an async function throws?\n\nasync function test() {\n  throw new Error(\"Failed\");\n}",
    options: [
      { id: "A", text: "The function returns a rejected Promise" },
      { id: "B", text: "The function returns a fulfilled Promise" },
      { id: "C", text: "The error is automatically ignored" },
      { id: "D", text: "The function cannot throw errors" }
    ],
    correctOptionId: "A",
    explanation: "An exception thrown inside an async function causes the Promise returned by that function to become rejected with that error.",
    tags: ["async-functions", "throw", "rejection"]
  },

  {
    id: "javascript-async-q-026",
    quizId: "quiz_javascript_async",
    order: 26,
    type: "code",
    difficulty: "Intermediate",
    question: "Which pattern correctly handles a rejected Promise with async/await?",
    options: [
      {
        id: "A",
        text: "try { await operation(); } catch (error) { handle(error); }"
      },
      {
        id: "B",
        text: "try { operation(); } finally { await(error); }"
      },
      {
        id: "C",
        text: "catch { operation(); } without a try"
      },
      {
        id: "D",
        text: "await.catch(operation);"
      }
    ],
    correctOptionId: "A",
    explanation: "A `try/catch` surrounding an `await` can catch a rejection from the awaited Promise, allowing normal synchronous-style error handling.",
    tags: ["async-await", "try-catch", "error-handling"]
  },

  {
    id: "javascript-async-q-027",
    quizId: "quiz_javascript_async",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the result?\n\nasync function getUser() {\n  try {\n    return await Promise.reject(\"Failed\");\n  } catch (error) {\n    return \"Fallback\";\n  }\n}",
    options: [
      { id: "A", text: "A fulfilled Promise containing \"Fallback\"" },
      { id: "B", text: "A rejected Promise containing \"Failed\"" },
      { id: "C", text: "The string \"Fallback\" directly" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The rejected Promise is caught by `catch`, which returns `\"Fallback\"`. Since the surrounding function is async, the returned value becomes the fulfillment value of its returned Promise.",
    tags: ["async-await", "try-catch", "fallback", "promises"]
  },

  {
    id: "javascript-async-q-028",
    quizId: "quiz_javascript_async",
    order: 28,
    type: "code",
    difficulty: "Intermediate",
    question: "What is wrong with this sequential approach if the two requests are independent?\n\nconst users = await fetchUsers();\nconst posts = await fetchPosts();",
    options: [
      { id: "A", text: "The second request is not started until the first request finishes" },
      { id: "B", text: "Both requests are guaranteed to run simultaneously" },
      { id: "C", text: "await cannot be used with fetch" },
      { id: "D", text: "The code causes infinite recursion" }
    ],
    correctOptionId: "A",
    explanation: "The second `await` is reached only after `fetchUsers()` settles. When operations are independent, starting both first and awaiting them with `Promise.all()` can allow them to proceed concurrently.",
    tags: ["async-await", "Promise.all", "concurrency", "performance"]
  },

  {
    id: "javascript-async-q-029",
    quizId: "quiz_javascript_async",
    order: 29,
    type: "code",
    difficulty: "Intermediate",
    question: "Which is generally better when two asynchronous operations are independent?\n\nA: await getUsers(); await getPosts();\n\nB: const [users, posts] = await Promise.all([getUsers(), getPosts()]);",
    options: [
      { id: "A", text: "B, because both operations can be started without unnecessarily waiting for the other" },
      { id: "B", text: "A, because Promise.all always runs operations sequentially" },
      { id: "C", text: "A, because await cannot work with multiple Promises" },
      { id: "D", text: "They always have identical execution timing" }
    ],
    correctOptionId: "A",
    explanation: "Calling both functions before awaiting the combined result allows their asynchronous work to overlap. `Promise.all()` then waits for both results.",
    tags: ["Promise.all", "concurrency", "async-await", "performance"]
  },

  {
    id: "javascript-async-q-030",
    quizId: "quiz_javascript_async",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is fetch() primarily used for in browser JavaScript?",
    options: [
      { id: "A", text: "Making network requests and returning a Promise for the Response" },
      { id: "B", text: "Selecting DOM elements" },
      { id: "C", text: "Compiling JavaScript" },
      { id: "D", text: "Creating CSS animations" }
    ],
    correctOptionId: "A",
    explanation: "`fetch()` provides a Promise-based API for making network requests. The Promise fulfills with a `Response` object when the response headers are available.",
    tags: ["fetch", "api", "networking", "promises"]
  },

  {
    id: "javascript-async-q-031",
    quizId: "quiz_javascript_async",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this return?\n\nconst response = await fetch(\"/api/users\");",
    options: [
      { id: "A", text: "A Response object" },
      { id: "B", text: "The parsed JSON data automatically" },
      { id: "C", text: "A DOM element" },
      { id: "D", text: "A JavaScript array automatically" }
    ],
    correctOptionId: "A",
    explanation: "`fetch()` resolves to a `Response` object. The response body must then be consumed, for example with `await response.json()` when the body contains JSON.",
    tags: ["fetch", "Response", "json", "api"]
  },

  {
    id: "javascript-async-q-032",
    quizId: "quiz_javascript_async",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "Which code correctly parses a JSON response from fetch()?",
    options: [
      {
        id: "A",
        text: "const response = await fetch(url); const data = await response.json();"
      },
      {
        id: "B",
        text: "const data = await fetch(url).json();"
      },
      {
        id: "C",
        text: "const data = JSON.parse(await fetch(url));"
      },
      {
        id: "D",
        text: "const data = response.parseJSON();"
      }
    ],
    correctOptionId: "A",
    explanation: "First await the `fetch()` Promise to obtain the Response, then call `response.json()`, which itself returns a Promise for the parsed body.",
    tags: ["fetch", "json", "Response", "async-await"]
  },

  {
    id: "javascript-async-q-033",
    quizId: "quiz_javascript_async",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Does fetch() reject its Promise automatically for an HTTP 404 or 500 response?",
    options: [
      { id: "A", text: "No. HTTP error statuses generally still produce a fulfilled Response; you should check response.ok or response.status" },
      { id: "B", text: "Yes, every non-2xx status automatically rejects" },
      { id: "C", text: "Only 404 rejects; 500 always fulfills" },
      { id: "D", text: "Only 500 rejects; 404 is impossible" }
    ],
    correctOptionId: "A",
    explanation: "A network failure can reject the fetch Promise, but HTTP error responses such as 404 or 500 normally resolve to a Response. Application code should explicitly inspect the response status.",
    tags: ["fetch", "http-errors", "response.ok", "error-handling"]
  },

  {
    id: "javascript-async-q-034",
    quizId: "quiz_javascript_async",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "Which pattern correctly treats a non-2xx HTTP response as an application error?",
    options: [
      {
        id: "A",
        text: "const response = await fetch(url); if (!response.ok) throw new Error(`HTTP ${response.status}`);"
      },
      {
        id: "B",
        text: "const response = await fetch(url); if (response) throw new Error(\"Always failed\");"
      },
      {
        id: "C",
        text: "await fetch(url).rejectOn404();"
      },
      {
        id: "D",
        text: "if (!fetch(url)) throw new Error(\"HTTP error\");"
      }
    ],
    correctOptionId: "A",
    explanation: "`response.ok` is true for successful HTTP statuses in the 200–299 range. Checking it allows application code to explicitly reject unsuccessful HTTP responses.",
    tags: ["fetch", "response.ok", "http-errors", "error-handling"]
  },

  {
    id: "javascript-async-q-035",
    quizId: "quiz_javascript_async",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the JavaScript event loop responsible for at a high level?",
    options: [
      { id: "A", text: "Coordinating execution of synchronous code with queued asynchronous callbacks" },
      { id: "B", text: "Compiling JavaScript into machine code only" },
      { id: "C", text: "Creating HTML elements" },
      { id: "D", text: "Guaranteeing that every asynchronous operation runs immediately" }
    ],
    correctOptionId: "A",
    explanation: "The event loop coordinates the call stack and task queues so JavaScript can process asynchronous callbacks after the current synchronous work has completed.",
    tags: ["event-loop", "call-stack", "async"]
  },

  {
    id: "javascript-async-q-036",
    quizId: "quiz_javascript_async",
    order: 36,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the output order?\n\nconsole.log(\"A\");\nPromise.resolve().then(() => console.log(\"B\"));\nconsole.log(\"C\");",
    options: [
      { id: "A", text: "A → C → B" },
      { id: "B", text: "A → B → C" },
      { id: "C", text: "B → A → C" },
      { id: "D", text: "C → A → B" }
    ],
    correctOptionId: "A",
    explanation: "The synchronous logs `A` and `C` run first. The `.then()` callback is queued as a microtask and runs after the current synchronous execution completes.",
    tags: ["promises", "microtasks", "event-loop", "execution-order"]
  },

  {
    id: "javascript-async-q-037",
    quizId: "quiz_javascript_async",
    order: 37,
    type: "code",
    difficulty: "Advanced",
    question: "What is the output order?\n\nconsole.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"D\");",
    options: [
      { id: "A", text: "A → D → C → B" },
      { id: "B", text: "A → C → D → B" },
      { id: "C", text: "A → D → B → C" },
      { id: "D", text: "B → C → A → D" }
    ],
    correctOptionId: "A",
    explanation: "The synchronous code logs `A` and `D`. Promise reactions are microtasks, while the timer callback is a task. Microtasks are processed before the next task, so `C` runs before `B`.",
    tags: ["event-loop", "microtasks", "macrotasks", "setTimeout", "promises"]
  },

  {
    id: "javascript-async-q-038",
    quizId: "quiz_javascript_async",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "In the common browser event-loop model, which generally runs before a queued timer callback after the current synchronous task finishes?",
    options: [
      { id: "A", text: "Pending microtasks such as Promise reactions" },
      { id: "B", text: "Every future timer regardless of its delay" },
      { id: "C", text: "All network requests synchronously" },
      { id: "D", text: "The next page navigation" }
    ],
    correctOptionId: "A",
    explanation: "After the current task completes, the JavaScript environment processes pending microtasks before moving on to another task such as a timer callback.",
    tags: ["microtasks", "macrotasks", "event-loop"]
  },

  {
    id: "javascript-async-q-039",
    quizId: "quiz_javascript_async",
    order: 39,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nPromise.resolve()\n  .then(() => {\n    console.log(\"A\");\n    return Promise.resolve();\n  })\n  .then(() => console.log(\"B\"));\n\nconsole.log(\"C\");",
    options: [
      { id: "A", text: "C → A → B" },
      { id: "B", text: "A → B → C" },
      { id: "C", text: "A → C → B" },
      { id: "D", text: "C → B → A" }
    ],
    correctOptionId: "A",
    explanation: "`C` is synchronous and runs first. The first Promise reaction then logs `A`. Returning a Promise causes the next `.then()` to wait for that returned Promise's settlement before its reaction runs, so `B` follows.",
    tags: ["promises", "microtasks", "promise-chaining", "event-loop"]
  },

  {
    id: "javascript-async-q-040",
    quizId: "quiz_javascript_async",
    order: 40,
    type: "code",
    difficulty: "Advanced",
    question: "What is the output order?\n\nasync function test() {\n  console.log(\"A\");\n  await null;\n  console.log(\"B\");\n}\n\ntest();\nconsole.log(\"C\");",
    options: [
      { id: "A", text: "A → C → B" },
      { id: "B", text: "A → B → C" },
      { id: "C", text: "C → A → B" },
      { id: "D", text: "B → A → C" }
    ],
    correctOptionId: "A",
    explanation: "The code before `await` runs synchronously. Even though `null` is not a Promise, `await` resumes the async function asynchronously, so the surrounding synchronous `console.log(\"C\")` runs first.",
    tags: ["await", "microtasks", "async-functions", "event-loop"]
  },

  {
    id: "javascript-async-q-041",
    quizId: "quiz_javascript_async",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the key difference between Promise.all() and sequential await when operations are independent?",
    options: [
      { id: "A", text: "Promise.all() can allow independent operations to proceed concurrently instead of waiting for each one before starting the next" },
      { id: "B", text: "Promise.all() makes all operations synchronous" },
      { id: "C", text: "Sequential await always starts every operation immediately" },
      { id: "D", text: "There is never any timing difference" }
    ],
    correctOptionId: "A",
    explanation: "With sequential awaits, the second operation is not started until the first has settled. Calling the operations first and combining them with `Promise.all()` allows their asynchronous work to overlap.",
    tags: ["Promise.all", "concurrency", "async-await", "performance"]
  },

  {
    id: "javascript-async-q-042",
    quizId: "quiz_javascript_async",
    order: 42,
    type: "code",
    difficulty: "Advanced",
    question: "What is the problem with this pattern?\n\nconst data = await fetch(url).then(response => response.json());\n\nif (!response.ok) {\n  throw new Error(\"Request failed\");\n}",
    options: [
      { id: "A", text: "response is not available in that scope, and the HTTP status should be checked before parsing the body" },
      { id: "B", text: "fetch cannot be combined with then()" },
      { id: "C", text: "response.ok always throws automatically" },
      { id: "D", text: "json() returns a synchronous object" }
    ],
    correctOptionId: "A",
    explanation: "The variable named `response` exists only as the callback parameter inside `.then()`. A robust implementation should retain the Response, check `response.ok`, and then parse the body.",
    tags: ["fetch", "response.ok", "scope", "error-handling"]
  },

  {
    id: "javascript-async-q-043",
    quizId: "quiz_javascript_async",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation correctly handles both network failures and unsuccessful HTTP responses?\n\nasync function getData(url) {",
    options: [
      {
        id: "A",
        text: "try { const response = await fetch(url); if (!response.ok) throw new Error(`HTTP ${response.status}`); return await response.json(); } catch (error) { throw error; }"
      },
      {
        id: "B",
        text: "return fetch(url).json();"
      },
      {
        id: "C",
        text: "const response = fetch(url); return response.data;"
      },
      {
        id: "D",
        text: "fetch(url); return undefined;"
      }
    ],
    correctOptionId: "A",
    explanation: "The `try/catch` handles rejected network requests. The explicit `response.ok` check converts unsuccessful HTTP responses into thrown errors, and `response.json()` parses a successful JSON response.",
    tags: ["fetch", "error-handling", "response.ok", "async-await"]
  },

  {
    id: "javascript-async-q-044",
    quizId: "quiz_javascript_async",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should you avoid unnecessarily awaiting independent operations one after another?",
    options: [
      { id: "A", text: "It can introduce avoidable latency because each operation waits for the previous one before starting" },
      { id: "B", text: "await permanently blocks the browser" },
      { id: "C", text: "Promises cannot run independently" },
      { id: "D", text: "It causes every Promise to reject" }
    ],
    correctOptionId: "A",
    explanation: "Sequential awaits can serialize independent work. Starting independent operations before awaiting their combined results can reduce total waiting time.",
    tags: ["async-await", "concurrency", "performance"]
  },

  {
    id: "javascript-async-q-045",
    quizId: "quiz_javascript_async",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "What happens if one Promise rejects in this code?\n\nconst results = await Promise.all([\n  getUser(),\n  getPosts(),\n  getComments()\n]);",
    options: [
      { id: "A", text: "The Promise returned by Promise.all() rejects" },
      { id: "B", text: "Promise.all() always returns the successful results" },
      { id: "C", text: "The rejected Promise is automatically retried" },
      { id: "D", text: "All Promises are converted into fulfilled values" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.all()` rejects when an input Promise rejects. If you need to inspect every outcome regardless of failures, `Promise.allSettled()` is more appropriate.",
    tags: ["Promise.all", "rejection", "error-handling"]
  },

  {
    id: "javascript-async-q-046",
    quizId: "quiz_javascript_async",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is wrong with this retry implementation?\n\nasync function getData() {\n  try {\n    return await fetchData();\n  } catch (error) {\n    return getData();\n  }\n}",
    options: [
      { id: "A", text: "A persistent failure can cause unbounded recursive retries" },
      { id: "B", text: "async functions cannot call themselves" },
      { id: "C", text: "catch cannot return a Promise" },
      { id: "D", text: "fetchData can only be called once" }
    ],
    correctOptionId: "A",
    explanation: "Every failure immediately calls `getData()` again without a retry limit, delay, or stopping condition. Persistent failures can therefore produce an unbounded retry loop.",
    tags: ["async-await", "error-handling", "retry", "recursion"]
  },

  {
    id: "javascript-async-q-047",
    quizId: "quiz_javascript_async",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Which approach is better for three independent API requests when you need all successful results together?",
    options: [
      {
        id: "A",
        text: "const promises = [getUsers(), getPosts(), getProducts()]; const [users, posts, products] = await Promise.all(promises);"
      },
      {
        id: "B",
        text: "await getUsers(); await getPosts(); await getProducts();"
      },
      {
        id: "C",
        text: "setTimeout(getUsers, 0); setTimeout(getPosts, 0); setTimeout(getProducts, 0);"
      },
      {
        id: "D",
        text: "Only call getUsers() because Promise.all supports one Promise"
      }
    ],
    correctOptionId: "A",
    explanation: "The three functions are started without waiting for each other, and `Promise.all()` waits for all of them while preserving the input order of their results.",
    tags: ["Promise.all", "concurrency", "api", "performance"]
  },

  {
    id: "javascript-async-q-048",
    quizId: "quiz_javascript_async",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "Consider:\n\nasync function load() {\n  const response = await fetch(\"/api/data\");\n  const data = await response.json();\n  return data;\n}\n\nconst result = load();\nconsole.log(result);\n\nWhat is result?",
    options: [
      { id: "A", text: "A Promise that will eventually fulfill with the parsed data" },
      { id: "B", text: "The parsed data object immediately" },
      { id: "C", text: "The Response object" },
      { id: "D", text: "Always undefined" }
    ],
    correctOptionId: "A",
    explanation: "Because `load()` is async, calling it returns a Promise. The Promise eventually fulfills with the value returned by the function, which is the parsed data.",
    tags: ["async-functions", "fetch", "promises", "return"]
  },

  {
    id: "javascript-async-q-049",
    quizId: "quiz_javascript_async",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A developer writes:\n\nconst user = getUser();\nconsole.log(user.name);\n\nwhere getUser() is an async function returning a user object. Why does this fail?",
    options: [
      { id: "A", text: "user is a Promise, not the resolved user object" },
      { id: "B", text: "Async functions cannot return objects" },
      { id: "C", text: "Promises only contain strings" },
      { id: "D", text: "user.name automatically triggers a network request" }
    ],
    correctOptionId: "A",
    explanation: "An async function always returns a Promise. The resolved user must be obtained with `await getUser()` inside an async context or by using a Promise handler.",
    tags: ["async-functions", "promises", "await", "common-mistakes"]
  },

  {
    id: "javascript-async-q-050",
    quizId: "quiz_javascript_async",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "You need to load a user and then use that user's ID to load their posts. Which implementation correctly models the dependency between the operations?",
    options: [
      {
        id: "A",
        text: "const user = await getUser(); const posts = await getPosts(user.id);"
      },
      {
        id: "B",
        text: "const [user, posts] = await Promise.all([getUser(), getPosts(user.id)]);"
      },
      {
        id: "C",
        text: "const posts = await getPosts(user.id); const user = await getUser();"
      },
      {
        id: "D",
        text: "Promise.all() must always be used for dependent operations"
      }
    ],
    correctOptionId: "A",
    explanation: "The second operation depends on the result of the first because it needs `user.id`. Therefore the user must be obtained before `getPosts(user.id)` can be started. `Promise.all()` is appropriate for independent operations, not operations with this dependency.",
    tags: ["async-await", "dependencies", "Promise.all", "api", "concurrency"]
  }
];

export default javascriptAsyncQuestions;