const nodejsAllInOneQuestions = [
  {
    id: "nodejs-all-in-one-q-001",
    quizId: "quiz_nodejs_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is Node.js?",
    options: [
      { id: "A", text: "A JavaScript runtime built on Google's V8 engine" },
      { id: "B", text: "A JavaScript framework for building React components" },
      { id: "C", text: "A relational database" },
      { id: "D", text: "A CSS preprocessor" }
    ],
    correctOptionId: "A",
    explanation: "Node.js is a JavaScript runtime that allows JavaScript to execute outside the browser, using the V8 JavaScript engine.",
    tags: ["node", "runtime", "v8"]
  },

  {
    id: "nodejs-all-in-one-q-002",
    quizId: "quiz_nodejs_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which engine executes JavaScript in Node.js?",
    options: [
      { id: "A", text: "SpiderMonkey" },
      { id: "B", text: "V8" },
      { id: "C", text: "JavaScriptCore only" },
      { id: "D", text: "Chakra" }
    ],
    correctOptionId: "B",
    explanation: "Node.js uses Google's V8 JavaScript engine, the same engine family used by Chromium-based browsers.",
    tags: ["node", "v8"]
  },

  {
    id: "nodejs-all-in-one-q-003",
    quizId: "quiz_nodejs_all_in_one",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is npm primarily used for?",
    options: [
      { id: "A", text: "Managing JavaScript packages and project dependencies" },
      { id: "B", text: "Compiling CSS only" },
      { id: "C", text: "Managing Git branches" },
      { id: "D", text: "Running SQL queries" }
    ],
    correctOptionId: "A",
    explanation: "npm is the package manager commonly used with Node.js projects for installing, updating, and managing dependencies and scripts.",
    tags: ["npm", "packages"]
  },

  {
    id: "nodejs-all-in-one-q-004",
    quizId: "quiz_nodejs_all_in_one",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `package.json` usually contain?",
    options: [
      { id: "A", text: "Project metadata, scripts, and dependency information" },
      { id: "B", text: "Only compiled JavaScript" },
      { id: "C", text: "Only environment variables" },
      { id: "D", text: "The Node.js source code" }
    ],
    correctOptionId: "A",
    explanation: "`package.json` describes the project and commonly contains scripts, dependencies, metadata, and configuration.",
    tags: ["npm", "package-json"]
  },

  {
    id: "nodejs-all-in-one-q-005",
    quizId: "quiz_nodejs_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command initializes a new npm project using default answers?",
    options: [
      { id: "A", text: "npm start" },
      { id: "B", text: "npm init --yes" },
      { id: "C", text: "npm create-project" },
      { id: "D", text: "node init --default" }
    ],
    correctOptionId: "B",
    explanation: "`npm init --yes` or `npm init -y` creates a package.json using default values.",
    tags: ["npm", "package-json"]
  },

  {
    id: "nodejs-all-in-one-q-006",
    quizId: "quiz_nodejs_all_in_one",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which object provides information about the current Node.js process?",
    options: [
      { id: "A", text: "window" },
      { id: "B", text: "document" },
      { id: "C", text: "process" },
      { id: "D", text: "browser" }
    ],
    correctOptionId: "C",
    explanation: "Node.js exposes information and controls for the current process through the global `process` object.",
    tags: ["process", "node-runtime"]
  },

  {
    id: "nodejs-all-in-one-q-007",
    quizId: "quiz_nodejs_all_in_one",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `process.env` provide?",
    options: [
      { id: "A", text: "Environment variables available to the process" },
      { id: "B", text: "All installed npm packages" },
      { id: "C", text: "Browser cookies" },
      { id: "D", text: "The current Git branch" }
    ],
    correctOptionId: "A",
    explanation: "`process.env` exposes environment variables to the running Node.js process.",
    tags: ["process", "environment-variables"]
  },

  {
    id: "nodejs-all-in-one-q-008",
    quizId: "quiz_nodejs_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which Node.js global is commonly used to access command-line arguments?",
    options: [
      { id: "A", text: "process.argv" },
      { id: "B", text: "process.args" },
      { id: "C", text: "console.argv" },
      { id: "D", text: "node.arguments" }
    ],
    correctOptionId: "A",
    explanation: "`process.argv` contains the command-line arguments passed to the Node.js process.",
    tags: ["process", "cli"]
  },

  {
    id: "nodejs-all-in-one-q-009",
    quizId: "quiz_nodejs_all_in_one",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which built-in module is used for working with files and directories?",
    options: [
      { id: "A", text: "http" },
      { id: "B", text: "fs" },
      { id: "C", text: "events" },
      { id: "D", text: "url" }
    ],
    correctOptionId: "B",
    explanation: "The `fs` module provides APIs for interacting with the file system.",
    tags: ["fs", "file-system"]
  },

  {
    id: "nodejs-all-in-one-q-010",
    quizId: "quiz_nodejs_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of Node.js's `http` module?",
    options: [
      { id: "A", text: "Creating HTTP servers and making HTTP-related requests" },
      { id: "B", text: "Managing files" },
      { id: "C", text: "Encrypting passwords automatically" },
      { id: "D", text: "Connecting to Git" }
    ],
    correctOptionId: "A",
    explanation: "The built-in `http` module provides functionality for HTTP servers and clients.",
    tags: ["http", "servers"]
  },

  {
    id: "nodejs-all-in-one-q-011",
    quizId: "quiz_nodejs_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement best describes Node.js's event-driven model?",
    options: [
      { id: "A", text: "Code can respond to events and asynchronous operations through callbacks, promises, and event mechanisms" },
      { id: "B", text: "Every operation must block the process until completion" },
      { id: "C", text: "Only browser events can be handled" },
      { id: "D", text: "Events are limited to HTTP requests" }
    ],
    correctOptionId: "A",
    explanation: "Node.js heavily uses event-driven and asynchronous programming patterns to handle I/O efficiently.",
    tags: ["events", "async", "architecture"]
  },

  {
    id: "nodejs-all-in-one-q-012",
    quizId: "quiz_nodejs_all_in_one",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the event loop responsible for?",
    options: [
      { id: "A", text: "Coordinating execution of JavaScript and asynchronous callbacks" },
      { id: "B", text: "Compiling TypeScript types" },
      { id: "C", text: "Managing npm dependencies" },
      { id: "D", text: "Rendering HTML" }
    ],
    correctOptionId: "A",
    explanation: "The event loop enables Node.js to handle asynchronous operations while JavaScript execution remains coordinated on its main thread.",
    tags: ["event-loop", "async"]
  },

  {
    id: "nodejs-all-in-one-q-013",
    quizId: "quiz_nodejs_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is synchronous file I/O potentially problematic in a Node.js server?",
    options: [
      { id: "A", text: "It can block JavaScript execution while the operation completes" },
      { id: "B", text: "It always deletes the file" },
      { id: "C", text: "It cannot read files larger than 1 KB" },
      { id: "D", text: "It automatically crashes Node.js" }
    ],
    correctOptionId: "A",
    explanation: "Synchronous I/O blocks the executing JavaScript thread, which can reduce responsiveness when used during request handling.",
    tags: ["async", "fs", "performance"]
  },

  {
    id: "nodejs-all-in-one-q-014",
    quizId: "quiz_nodejs_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method is an asynchronous way to read a file using the promise-based fs API?",
    options: [
      { id: "A", text: "fs.readFileSync()" },
      { id: "B", text: "fs.promises.readFile()" },
      { id: "C", text: "fs.file()" },
      { id: "D", text: "fs.asyncRead()" }
    ],
    correctOptionId: "B",
    explanation: "`fs.promises.readFile()` returns a Promise that resolves with the file contents.",
    tags: ["fs", "promises", "async"]
  },

  {
    id: "nodejs-all-in-one-q-015",
    quizId: "quiz_nodejs_all_in_one",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `async/await` primarily provide?",
    options: [
      { id: "A", text: "A cleaner syntax for working with Promises" },
      { id: "B", text: "A way to make all code synchronous" },
      { id: "C", text: "A replacement for JavaScript functions" },
      { id: "D", text: "A replacement for npm" }
    ],
    correctOptionId: "A",
    explanation: "`async/await` provides syntax that makes Promise-based asynchronous code easier to read and reason about.",
    tags: ["async", "await", "promises"]
  },

  {
    id: "nodejs-all-in-one-q-016",
    quizId: "quiz_nodejs_all_in_one",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an `async` function always return?",
    options: [
      { id: "A", text: "A Promise" },
      { id: "B", text: "A callback" },
      { id: "C", text: "A stream" },
      { id: "D", text: "An EventEmitter" }
    ],
    correctOptionId: "A",
    explanation: "An async function wraps its return value in a Promise, even when the function returns a normal value.",
    tags: ["async", "promises"]
  },

  {
    id: "nodejs-all-in-one-q-017",
    quizId: "quiz_nodejs_all_in_one",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Where should errors from an awaited Promise commonly be handled?",
    options: [
      { id: "A", text: "Inside a try/catch around the await" },
      { id: "B", text: "Inside package.json" },
      { id: "C", text: "Inside node_modules" },
      { id: "D", text: "Only with console.log()" }
    ],
    correctOptionId: "A",
    explanation: "A rejected Promise awaited inside an async function can be handled with `try/catch`.",
    tags: ["async", "errors", "try-catch"]
  },

  {
    id: "nodejs-all-in-one-q-018",
    quizId: "quiz_nodejs_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common problem with deeply nested callbacks?",
    options: [
      { id: "A", text: "They can create difficult-to-read and difficult-to-maintain control flow" },
      { id: "B", text: "They always run in parallel" },
      { id: "C", text: "They cannot perform asynchronous work" },
      { id: "D", text: "They are only available in browsers" }
    ],
    correctOptionId: "A",
    explanation: "Deep callback nesting can lead to complex control flow, often called callback hell.",
    tags: ["callbacks", "async"]
  },

  {
    id: "nodejs-all_in_one-q-019",
    quizId: "quiz_nodejs_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Promise.all()` do?",
    options: [
      { id: "A", text: "Waits for multiple Promises and fulfills when all fulfill, rejecting if one rejects" },
      { id: "B", text: "Runs only the first Promise" },
      { id: "C", text: "Converts all Promises into callbacks" },
      { id: "D", text: "Always ignores rejected Promises" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.all()` waits for all inputs to fulfill and rejects as soon as one rejects.",
    tags: ["promises", "Promise.all"]
  },

  {
    id: "nodejs-all-in-one-q-020",
    quizId: "quiz_nodejs_all_in_one",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "If you need several independent API requests to complete before continuing, which approach is often appropriate?",
    options: [
      { id: "A", text: "await Promise.all([requestA(), requestB(), requestC()])" },
      { id: "B", text: "await requestA(); requestB(); requestC(); without waiting" },
      { id: "C", text: "Use only setTimeout()" },
      { id: "D", text: "Convert every request into synchronous I/O" }
    ],
    correctOptionId: "A",
    explanation: "Independent asynchronous operations can be started together and awaited collectively with `Promise.all()`.",
    tags: ["promises", "concurrency"]
  },

  {
    id: "nodejs-all-in-one-q-021",
    quizId: "quiz_nodejs_all_in_one",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between `Promise.all()` and `Promise.allSettled()`?",
    options: [
      { id: "A", text: "allSettled waits for every input and reports each outcome, while all rejects when one rejects" },
      { id: "B", text: "They are exactly identical" },
      { id: "C", text: "allSettled only works with synchronous functions" },
      { id: "D", text: "all never waits for Promises" }
    ],
    correctOptionId: "A",
    explanation: "`Promise.allSettled()` provides the status of every input after all settle, regardless of fulfillment or rejection.",
    tags: ["promises", "allSettled"]
  },

  {
    id: "nodejs-all-in-one-q-022",
    quizId: "quiz_nodejs_all_in_one",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which module provides Node.js's EventEmitter?",
    options: [
      { id: "A", text: "events" },
      { id: "B", text: "emitter" },
      { id: "C", text: "event-loop" },
      { id: "D", text: "signals" }
    ],
    correctOptionId: "A",
    explanation: "The built-in `events` module provides `EventEmitter` and related event functionality.",
    tags: ["events", "EventEmitter"]
  },

  {
    id: "nodejs-all-in-one-q-023",
    quizId: "quiz_nodejs_all_in_one",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method registers a listener on an EventEmitter?",
    options: [
      { id: "A", text: "on()" },
      { id: "B", text: "listenOnly()" },
      { id: "C", text: "subscribeOnce()" },
      { id: "D", text: "watch()" }
    ],
    correctOptionId: "A",
    explanation: "`emitter.on(eventName, listener)` registers a listener for an event.",
    tags: ["events", "EventEmitter"]
  },

  {
    id: "nodejs-all-in-one-q-024",
    quizId: "quiz_nodejs_all_in_one",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `EventEmitter.emit()` do?",
    options: [
      { id: "A", text: "Triggers an event and passes arguments to registered listeners" },
      { id: "B", text: "Removes all listeners" },
      { id: "C", text: "Creates a Promise" },
      { id: "D", text: "Stops the Node process" }
    ],
    correctOptionId: "A",
    explanation: "`emit()` synchronously invokes listeners registered for the specified event.",
    tags: ["events", "EventEmitter"]
  },

  {
    id: "nodejs-all-in-one-q-025",
    quizId: "quiz_nodejs_all_in_one",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Buffer in Node.js?",
    options: [
      { id: "A", text: "A way to work with raw binary data" },
      { id: "B", text: "A replacement for Promise" },
      { id: "C", text: "A database connection" },
      { id: "D", text: "An HTML element" }
    ],
    correctOptionId: "A",
    explanation: "Node.js Buffers represent raw binary data and are commonly used with files, streams, and network operations.",
    tags: ["buffer", "binary-data"]
  },

  {
    id: "nodejs-all-in-one-q-026",
    quizId: "quiz_nodejs_all_in_one",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a stream useful for?",
    options: [
      { id: "A", text: "Processing data incrementally rather than loading everything into memory at once" },
      { id: "B", text: "Only storing environment variables" },
      { id: "C", text: "Replacing all databases" },
      { id: "D", text: "Defining TypeScript interfaces" }
    ],
    correctOptionId: "A",
    explanation: "Streams allow data to be processed piece by piece, which is useful for large files and network data.",
    tags: ["streams", "performance"]
  },

  {
    id: "nodejs-all-in-one-q-027",
    quizId: "quiz_nodejs_all_in_one",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which of these is a Node.js stream type?",
    options: [
      { id: "A", text: "Readable" },
      { id: "B", text: "Renderable" },
      { id: "C", text: "Queryable" },
      { id: "D", text: "SerializableOnly" }
    ],
    correctOptionId: "A",
    explanation: "Node.js provides Readable, Writable, Duplex, and Transform stream types.",
    tags: ["streams"]
  },

  {
    id: "nodejs-all-in-one-q-028",
    quizId: "quiz_nodejs_all_in_one",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is backpressure in streams?",
    options: [
      { id: "A", text: "A mechanism for preventing a fast producer from overwhelming a slower consumer" },
      { id: "B", text: "A database rollback" },
      { id: "C", text: "A failed HTTP request" },
      { id: "D", text: "A JavaScript syntax error" }
    ],
    correctOptionId: "A",
    explanation: "Backpressure allows streams to regulate data flow when the destination cannot consume data as quickly as the source produces it.",
    tags: ["streams", "backpressure"]
  },

  {
    id: "nodejs-all-in-one-q-029",
    quizId: "quiz_nodejs_all_in_one",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which built-in module is commonly used for creating file paths safely across operating systems?",
    options: [
      { id: "A", text: "path" },
      { id: "B", text: "file-paths" },
      { id: "C", text: "filesystem-path" },
      { id: "D", text: "directory" }
    ],
    correctOptionId: "A",
    explanation: "The `path` module provides utilities for working with file and directory paths.",
    tags: ["path", "file-system"]
  },

  {
    id: "nodejs-all-in-one-q-030",
    quizId: "quiz_nodejs_all_in_one",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `path.join()` do?",
    options: [
      { id: "A", text: "Joins path segments using the platform's path separator" },
      { id: "B", text: "Joins arrays into strings only" },
      { id: "C", text: "Creates a database connection" },
      { id: "D", text: "Joins HTTP requests" }
    ],
    correctOptionId: "A",
    explanation: "`path.join()` combines path segments and normalizes the resulting path.",
    tags: ["path"]
  },

  {
    id: "nodejs-all-in-one-q-031",
    quizId: "quiz_nodejs_all_in_one",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the `url` module?",
    options: [
      { id: "A", text: "Parsing and working with URLs" },
      { id: "B", text: "Reading files" },
      { id: "C", text: "Managing npm packages" },
      { id: "D", text: "Creating database tables" }
    ],
    correctOptionId: "A",
    explanation: "Node.js provides URL utilities for parsing, constructing, and manipulating URLs.",
    tags: ["url", "web"]
  },

  {
    id: "nodejs-all-in-one-q-032",
    quizId: "quiz_nodejs_all_in_one",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which built-in module is commonly used for cryptographic functionality?",
    options: [
      { id: "A", text: "crypto" },
      { id: "B", text: "secure" },
      { id: "C", text: "hashing-only" },
      { id: "D", text: "encrypt-node" }
    ],
    correctOptionId: "A",
    explanation: "Node.js's built-in `crypto` module provides cryptographic primitives and utilities.",
    tags: ["crypto", "security"]
  },

  {
    id: "nodejs-all-in-one-q-033",
    quizId: "quiz_nodejs_all_in_one",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is middleware in a typical Node.js web framework?",
    options: [
      { id: "A", text: "A function that can inspect or modify a request/response and control the request flow" },
      { id: "B", text: "A database table" },
      { id: "C", text: "A CSS component" },
      { id: "D", text: "A replacement for the event loop" }
    ],
    correctOptionId: "A",
    explanation: "Middleware functions can run during request processing, perform tasks such as authentication or logging, and pass control onward.",
    tags: ["middleware", "http", "express"]
  },

  {
    id: "nodejs-all-in-one-q-034",
    quizId: "quiz_nodejs_all_in_one",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In Express, what does `next()` generally do in middleware?",
    options: [
      { id: "A", text: "Passes control to the next matching middleware or route handler" },
      { id: "B", text: "Ends the Node process" },
      { id: "C", text: "Creates a new database" },
      { id: "D", text: "Automatically sends a 200 response" }
    ],
    correctOptionId: "A",
    explanation: "`next()` tells Express to continue processing the middleware chain.",
    tags: ["express", "middleware"]
  },

  {
    id: "nodejs-all-in-one-q-035",
    quizId: "quiz_nodejs_all_in_one",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which HTTP method is conventionally used to retrieve a resource?",
    options: [
      { id: "A", text: "GET" },
      { id: "B", text: "POST" },
      { id: "C", text: "PATCH" },
      { id: "D", text: "DELETE" }
    ],
    correctOptionId: "A",
    explanation: "GET is conventionally used for retrieving resources without requesting a state-changing operation.",
    tags: ["http", "rest", "api"]
  },

  {
    id: "nodejs-all-in-one-q-036",
    quizId: "quiz_nodejs_all_in_one",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which HTTP method is commonly used to create a new resource?",
    options: [
      { id: "A", text: "GET" },
      { id: "B", text: "POST" },
      { id: "C", text: "OPTIONS" },
      { id: "D", text: "HEAD" }
    ],
    correctOptionId: "B",
    explanation: "POST is commonly used when submitting data to create a new resource or trigger a server-side action.",
    tags: ["http", "rest", "api"]
  },

  {
    id: "nodejs-all-in-one-q-037",
    quizId: "quiz_nodejs_all_in_one",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does HTTP status code 404 normally mean?",
    options: [
      { id: "A", text: "The requested resource was not found" },
      { id: "B", text: "The request succeeded" },
      { id: "C", text: "The server restarted" },
      { id: "D", text: "The client was authenticated" }
    ],
    correctOptionId: "A",
    explanation: "HTTP 404 indicates that the requested resource could not be found.",
    tags: ["http", "status-codes"]
  },

  {
    id: "nodejs-all-in-one-q-038",
    quizId: "quiz_nodejs_all_in_one",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does HTTP status code 500 generally indicate?",
    options: [
      { id: "A", text: "A server-side error" },
      { id: "B", text: "Successful resource creation" },
      { id: "C", text: "Permanent redirect" },
      { id: "D", text: "Client authentication success" }
    ],
    correctOptionId: "A",
    explanation: "500 is a generic server error status indicating that the server encountered an unexpected condition.",
    tags: ["http", "status-codes", "errors"]
  },

  {
    id: "nodejs-all-in-one-q-039",
    quizId: "quiz_nodejs_all_in_one",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should an API validate request data before using it?",
    options: [
      { id: "A", text: "To enforce expected input and reduce invalid or unsafe data reaching application logic" },
      { id: "B", text: "Because JSON cannot contain strings" },
      { id: "C", text: "Because Node automatically validates every request" },
      { id: "D", text: "To make HTTP requests synchronous" }
    ],
    correctOptionId: "A",
    explanation: "Server-side validation is essential because clients cannot be trusted to send valid or safe input.",
    tags: ["api", "validation", "security"]
  },

  {
    id: "nodejs-all-in-one-q-040",
    quizId: "quiz_nodejs_all_in_one",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of centralized error-handling middleware in an Express application?",
    options: [
      { id: "A", text: "To provide a consistent way to handle and format application errors" },
      { id: "B", text: "To prevent every route from running" },
      { id: "C", text: "To replace HTTP status codes" },
      { id: "D", text: "To automatically fix database errors" }
    ],
    correctOptionId: "A",
    explanation: "Centralized error handling avoids duplicating response logic and provides consistent API error responses.",
    tags: ["express", "errors", "middleware"]
  },

  {
    id: "nodejs-all-in-one-q-041",
    quizId: "quiz_nodejs_all_in_one",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the key difference between authentication and authorization?",
    options: [
      { id: "A", text: "Authentication verifies identity; authorization determines what that identity is allowed to access" },
      { id: "B", text: "Authentication controls permissions; authorization verifies passwords only" },
      { id: "C", text: "They are exactly the same concept" },
      { id: "D", text: "Authorization only applies to databases" }
    ],
    correctOptionId: "A",
    explanation: "Authentication answers 'Who are you?', while authorization answers 'What are you allowed to do?'.",
    tags: ["authentication", "authorization", "security"]
  },

  {
    id: "nodejs-all-in-one-q-042",
    quizId: "quiz_nodejs_all_in_one",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should passwords generally not be stored as plain text in a Node.js application?",
    options: [
      { id: "A", text: "A database compromise could expose users' actual passwords" },
      { id: "B", text: "Plain text passwords cannot be sent over HTTP" },
      { id: "C", text: "Node.js cannot read strings" },
      { id: "D", text: "Databases only support numbers" }
    ],
    correctOptionId: "A",
    explanation: "Passwords should be stored using a password-hashing algorithm designed for password storage, not as recoverable plain text.",
    tags: ["security", "passwords"]
  },

  {
    id: "nodejs-all-in-one-q-043",
    quizId: "quiz_nodejs_all_in_one",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why are environment variables commonly used for secrets such as database credentials?",
    options: [
      { id: "A", text: "They allow configuration to be supplied outside the source code" },
      { id: "B", text: "They automatically encrypt all secrets" },
      { id: "C", text: "They make secrets publicly accessible" },
      { id: "D", text: "They eliminate the need for authentication" }
    ],
    correctOptionId: "A",
    explanation: "Environment-based configuration keeps deployment-specific values separate from application source code, although secrets still need proper secret-management practices.",
    tags: ["security", "environment-variables"]
  },

  {
    id: "nodejs-all-in-one-q-044",
    quizId: "quiz_nodejs_all_in_one",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens if CPU-heavy synchronous JavaScript runs for a long time on Node's main thread?",
    options: [
      { id: "A", text: "It can block the event loop and delay other requests and callbacks" },
      { id: "B", text: "It automatically moves to another CPU core" },
      { id: "C", text: "It becomes asynchronous automatically" },
      { id: "D", text: "It only affects console output" }
    ],
    correctOptionId: "A",
    explanation: "Long-running CPU-bound JavaScript blocks the main event-loop thread and can make the server unresponsive.",
    tags: ["event-loop", "performance", "cpu"]
  },

  {
    id: "nodejs-all-in-one-q-045",
    quizId: "quiz_nodejs_all_in_one",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which Node.js feature can help move CPU-intensive JavaScript work off the main thread?",
    options: [
      { id: "A", text: "worker_threads" },
      { id: "B", text: "fs.readFileSync" },
      { id: "C", text: "console.log" },
      { id: "D", text: "process.env" }
    ],
    correctOptionId: "A",
    explanation: "The `worker_threads` module allows JavaScript to run in separate threads, which can be useful for CPU-intensive tasks.",
    tags: ["worker-threads", "performance"]
  },

  {
    id: "nodejs-all-in-one-q-046",
    quizId: "quiz_nodejs_all_in_one",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of clustering or running multiple Node.js processes?",
    options: [
      { id: "A", text: "To use multiple processes and potentially take advantage of multiple CPU cores" },
      { id: "B", text: "To make JavaScript synchronous" },
      { id: "C", text: "To replace HTTP" },
      { id: "D", text: "To eliminate the event loop" }
    ],
    correctOptionId: "A",
    explanation: "Multiple Node.js processes can distribute work across CPU cores and improve throughput for suitable workloads.",
    tags: ["cluster", "performance", "scaling"]
  },

  {
    id: "nodejs-all-in-one-q-047",
    quizId: "quiz_nodejs_all_in_one",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A Node.js API receives 1,000 requests. Each request waits on an independent database query. What is generally better than blocking the process synchronously for each query?",
    options: [
      { id: "A", text: "Use asynchronous database APIs so the event loop can continue handling other work" },
      { id: "B", text: "Use synchronous file operations for every request" },
      { id: "C", text: "Freeze the event loop until all queries finish" },
      { id: "D", text: "Convert every query into CPU-intensive JavaScript" }
    ],
    correctOptionId: "A",
    explanation: "Asynchronous I/O allows Node.js to continue processing other work while external operations are in progress.",
    tags: ["async", "database", "event-loop", "performance"]
  },

  {
    id: "nodejs-all-in-one-q-048",
    quizId: "quiz_nodejs_all_in_one",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is generally best for an API route that performs three independent external requests and only needs the combined results?",
    options: [
      { id: "A", text: "Start all three operations and await them with Promise.all()" },
      { id: "B", text: "Perform them synchronously one after another" },
      { id: "C", text: "Use setTimeout() to guess when they finish" },
      { id: "D", text: "Ignore the returned Promises" }
    ],
    correctOptionId: "A",
    explanation: "When operations are independent, running them concurrently with `Promise.all()` can reduce total waiting time.",
    tags: ["promises", "concurrency", "api"]
  },

  {
    id: "nodejs-all-in-one-q-049",
    quizId: "quiz_nodejs_all_in_one",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A production Node.js API suddenly becomes slow because one endpoint performs a huge CPU-intensive calculation synchronously. What is the most likely underlying issue?",
    options: [
      { id: "A", text: "The calculation is blocking the event loop" },
      { id: "B", text: "The HTTP protocol cannot handle JSON" },
      { id: "C", text: "npm is deleting requests" },
      { id: "D", text: "Promises automatically serialize all requests" }
    ],
    correctOptionId: "A",
    explanation: "CPU-heavy synchronous JavaScript can monopolize the event-loop thread and prevent other callbacks and requests from being processed promptly.",
    tags: ["event-loop", "performance", "api"]
  },

  {
    id: "nodejs-all-in-one-q-050",
    quizId: "quiz_nodejs_all_in_one",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are designing a production Node.js REST API. Which architecture is the strongest overall choice?",
    options: [
      { id: "A", text: "Validate input, use asynchronous I/O, separate routes/services/data access, centralize error handling, protect secrets, and avoid blocking the event loop" },
      { id: "B", text: "Put all logic in one route, store passwords in plain text, and use synchronous I/O" },
      { id: "C", text: "Return 200 for every request and ignore errors" },
      { id: "D", text: "Use global variables for every request and disable validation" }
    ],
    correctOptionId: "A",
    explanation: "Production Node.js applications benefit from clear separation of concerns, validation, asynchronous I/O, proper error handling, secure configuration, and careful event-loop usage.",
    tags: ["node", "api", "architecture", "security", "performance"]
  }
];

export default nodejsAllInOneQuestions;