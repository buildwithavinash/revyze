const nodejsAdvancedQuestions = [
  {
    id: "nodejs-advanced-q-001",
    quizId: "quiz_nodejs_advanced",
    order: 1,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the primary reason Node.js applications may use multiple processes?",
    options: [
      { id: "A", text: "To make JavaScript syntax stricter" },
      { id: "B", text: "To avoid using asynchronous APIs" },
      { id: "C", text: "To utilize multiple CPU cores and improve process-level scalability" },
      { id: "D", text: "To eliminate the event loop" }
    ],
    correctOptionId: "C",
    explanation: "A single Node.js process primarily runs JavaScript on one main thread. Multiple processes can allow workloads to utilize multiple CPU cores.",
    tags: ["clustering", "scalability", "cpu"]
  },

  {
    id: "nodejs-advanced-q-002",
    quizId: "quiz_nodejs_advanced",
    order: 2,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does the Node.js cluster module primarily allow?",
    options: [
      { id: "A", text: "Creating multiple Node.js processes that can share a server port" },
      { id: "B", text: "Converting callbacks into Promises" },
      { id: "C", text: "Replacing HTTP with WebSockets" },
      { id: "D", text: "Running JavaScript directly inside the database" }
    ],
    correctOptionId: "A",
    explanation: "Node's cluster mechanism can create multiple worker processes that can handle connections on a shared server port.",
    tags: ["cluster", "processes"]
  },

  {
    id: "nodejs-advanced-q-003",
    quizId: "quiz_nodejs_advanced",
    order: 3,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a major limitation of using multiple Node.js processes for scaling?",
    options: [
      { id: "A", text: "Processes cannot listen for HTTP requests" },
      { id: "B", text: "Each process has its own memory space" },
      { id: "C", text: "Processes cannot communicate" },
      { id: "D", text: "Processes automatically share every JavaScript variable" }
    ],
    correctOptionId: "B",
    explanation: "Separate Node.js processes do not share ordinary JavaScript memory. Shared state therefore requires external mechanisms such as databases, caches, or inter-process communication.",
    tags: ["cluster", "memory", "architecture"]
  },

  {
    id: "nodejs-advanced-q-004",
    quizId: "quiz_nodejs_advanced",
    order: 4,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which workload is generally more likely to benefit from worker threads?",
    options: [
      { id: "A", text: "Serving a simple static file" },
      { id: "B", text: "Reading an environment variable" },
      { id: "C", text: "Parsing a small JSON response" },
      { id: "D", text: "Performing CPU-intensive calculations" }
    ],
    correctOptionId: "D",
    explanation: "Worker threads can move CPU-intensive JavaScript work away from the main event-loop thread.",
    tags: ["worker-threads", "cpu"]
  },

  {
    id: "nodejs-advanced-q-005",
    quizId: "quiz_nodejs_advanced",
    order: 5,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can CPU-heavy JavaScript code hurt a Node.js server's responsiveness?",
    options: [
      { id: "A", text: "It can block the main event-loop thread from processing other callbacks and requests" },
      { id: "B", text: "It automatically closes all sockets" },
      { id: "C", text: "It disables npm" },
      { id: "D", text: "It converts HTTP requests into files" }
    ],
    correctOptionId: "A",
    explanation: "Long-running JavaScript on the main thread prevents the event loop from promptly processing other work.",
    tags: ["event-loop", "performance", "cpu"]
  },

  {
    id: "nodejs-advanced-q-006",
    quizId: "quiz_nodejs_advanced",
    order: 6,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which is generally a better approach for a very large file download?",
    options: [
      { id: "A", text: "Load the entire file into memory before responding" },
      { id: "B", text: "Convert the file to one enormous string" },
      { id: "C", text: "Use streaming to process data incrementally" },
      { id: "D", text: "Duplicate the file in memory first" }
    ],
    correctOptionId: "C",
    explanation: "Streams allow data to be processed incrementally and can significantly reduce memory usage for large payloads.",
    tags: ["streams", "performance", "memory"]
  },

  {
    id: "nodejs-advanced-q-007",
    quizId: "quiz_nodejs_advanced",
    order: 7,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is backpressure in Node.js streams?",
    options: [
      { id: "A", text: "A database retry mechanism" },
      { id: "B", text: "A mechanism that prevents a fast producer from overwhelming a slower consumer" },
      { id: "C", text: "A way to encrypt stream data" },
      { id: "D", text: "A method for restarting the process" }
    ],
    correctOptionId: "B",
    explanation: "Backpressure allows producers and consumers to coordinate so a fast producer does not overwhelm downstream processing.",
    tags: ["streams", "backpressure"]
  },

  {
    id: "nodejs-advanced-q-008",
    quizId: "quiz_nodejs_advanced",
    order: 8,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common symptom of a memory leak in a long-running Node.js application?",
    options: [
      { id: "A", text: "Memory usage continually grows without being properly released" },
      { id: "B", text: "The CPU always stays at exactly 0%" },
      { id: "C", text: "All HTTP requests become GET requests" },
      { id: "D", text: "npm packages uninstall themselves" }
    ],
    correctOptionId: "A",
    explanation: "A memory leak can cause retained objects to accumulate, resulting in increasing memory usage and potentially eventual process termination.",
    tags: ["memory", "performance", "debugging"]
  },

  {
    id: "nodejs-advanced-q-009",
    quizId: "quiz_nodejs_advanced",
    order: 9,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which tool is particularly useful for investigating JavaScript heap memory usage?",
    options: [
      { id: "A", text: "npm publish" },
      { id: "B", text: "package.json" },
      { id: "C", text: "A heap snapshot/profile from Node.js debugging tools" },
      { id: "D", text: "HTTP status 404" }
    ],
    correctOptionId: "C",
    explanation: "Heap snapshots and profiling tools can help identify retained objects and potential memory leaks.",
    tags: ["memory", "heap", "debugging"]
  },

  {
    id: "nodejs-advanced-q-010",
    quizId: "quiz_nodejs_advanced",
    order: 10,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of connection pooling for databases?",
    options: [
      { id: "A", text: "To avoid sending SQL queries" },
      { id: "B", text: "To reuse database connections instead of repeatedly creating new ones" },
      { id: "C", text: "To encrypt every SQL statement" },
      { id: "D", text: "To make the database single-threaded" }
    ],
    correctOptionId: "B",
    explanation: "Connection pools maintain reusable connections, reducing the overhead of repeatedly establishing database connections.",
    tags: ["database", "performance", "pooling"]
  },

  {
    id: "nodejs-advanced-q-011",
    quizId: "quiz_nodejs_advanced",
    order: 11,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can creating a new database connection for every request be inefficient?",
    options: [
      { id: "A", text: "Connection establishment has overhead and can exhaust database resources under load" },
      { id: "B", text: "Databases only support one connection" },
      { id: "C", text: "Node.js cannot use databases asynchronously" },
      { id: "D", text: "HTTP requires exactly one database connection" }
    ],
    correctOptionId: "A",
    explanation: "Repeated connection creation adds latency and resource overhead and can overwhelm the database.",
    tags: ["database", "performance"]
  },

  {
    id: "nodejs-advanced-q-012",
    quizId: "quiz_nodejs_advanced",
    order: 12,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is caching primarily used for?",
    options: [
      { id: "A", text: "Increasing the size of source files" },
      { id: "B", text: "Replacing all databases permanently" },
      { id: "C", text: "Reducing repeated expensive computation or data retrieval" },
      { id: "D", text: "Disabling authentication" }
    ],
    correctOptionId: "C",
    explanation: "Caching can reduce latency and backend load by reusing previously computed or retrieved data.",
    tags: ["caching", "performance"]
  },

  {
    id: "nodejs-advanced-q-013",
    quizId: "quiz_nodejs_advanced",
    order: 13,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential problem with stale cache data?",
    options: [
      { id: "A", text: "Users may receive outdated information" },
      { id: "B", text: "The event loop automatically stops" },
      { id: "C", text: "Node.js cannot process JSON anymore" },
      { id: "D", text: "All cache reads become writes" }
    ],
    correctOptionId: "A",
    explanation: "Cached data can become outdated unless an appropriate expiration or invalidation strategy is used.",
    tags: ["caching", "consistency"]
  },

  {
    id: "nodejs-advanced-q-014",
    quizId: "quiz_nodejs_advanced",
    order: 14,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does rate limiting help protect an API against?",
    options: [
      { id: "A", text: "Invalid JavaScript syntax" },
      { id: "B", text: "Excessive requests from clients or abusive traffic" },
      { id: "C", text: "Missing semicolons" },
      { id: "D", text: "Slow local variables" }
    ],
    correctOptionId: "B",
    explanation: "Rate limiting restricts how frequently clients can make requests and can reduce abuse and resource exhaustion.",
    tags: ["security", "rate-limiting", "api"]
  },

  {
    id: "nodejs-advanced-q-015",
    quizId: "quiz_nodejs_advanced",
    order: 15,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should user input be validated on the server even if the frontend already validates it?",
    options: [
      { id: "A", text: "Browsers automatically prevent malicious requests" },
      { id: "B", text: "Frontend validation makes SQL injection impossible" },
      { id: "C", text: "Clients can bypass or modify frontend validation" },
      { id: "D", text: "Server validation slows down attacks" }
    ],
    correctOptionId: "C",
    explanation: "A client is not trusted. Attackers can send requests directly to the server without using the application's frontend.",
    tags: ["security", "validation", "api"]
  },

  {
    id: "nodejs-advanced-q-016",
    quizId: "quiz_nodejs_advanced",
    order: 16,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which practice helps protect against SQL injection?",
    options: [
      { id: "A", text: "Concatenating user input into SQL strings" },
      { id: "B", text: "Using parameterized queries or prepared statements" },
      { id: "C", text: "Disabling database indexes" },
      { id: "D", text: "Returning SQL errors to users" }
    ],
    correctOptionId: "B",
    explanation: "Parameterized queries keep user-controlled values separate from SQL syntax and are a fundamental SQL injection defense.",
    tags: ["security", "sql-injection", "database"]
  },

  {
    id: "nodejs-advanced-q-017",
    quizId: "quiz_nodejs_advanced",
    order: 17,
    type: "mcq",
    difficulty: "Advanced",
    question: "Where should sensitive secrets such as production API keys generally NOT be hardcoded?",
    options: [
      { id: "A", text: "Source code committed to a public or shared repository" },
      { id: "B", text: "A protected server-side secret management system" },
      { id: "C", text: "Environment configuration supplied securely at deployment" },
      { id: "D", text: "A dedicated secret store" }
    ],
    correctOptionId: "A",
    explanation: "Hardcoding secrets in source code creates a major risk of accidental exposure, especially when repositories are shared or public.",
    tags: ["security", "secrets", "environment"]
  },

  {
    id: "nodejs-advanced-q-018",
    quizId: "quiz_nodejs_advanced",
    order: 18,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the principle of least privilege?",
    options: [
      { id: "A", text: "Give every service administrator access" },
      { id: "B", text: "Give users and services only the permissions they actually need" },
      { id: "C", text: "Remove authentication from internal services" },
      { id: "D", text: "Use one shared account for everything" }
    ],
    correctOptionId: "B",
    explanation: "Least privilege limits permissions to the minimum required, reducing the impact of compromised credentials or components.",
    tags: ["security", "least-privilege"]
  },

  {
    id: "nodejs-advanced-q-019",
    quizId: "quiz_nodejs_advanced",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should an API avoid returning internal database errors directly to clients?",
    options: [
      { id: "A", text: "Database errors are never useful" },
      { id: "B", text: "Clients cannot receive strings" },
      { id: "C", text: "They may reveal schema, infrastructure, or implementation details" },
      { id: "D", text: "HTTP does not support database errors" }
    ],
    correctOptionId: "C",
    explanation: "Internal errors may reveal information useful to attackers. Clients should generally receive safe, appropriate error responses.",
    tags: ["security", "api", "errors"]
  },

  {
    id: "nodejs-advanced-q-020",
    quizId: "quiz_nodejs_advanced",
    order: 20,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a denial-of-service attack generally intended to do?",
    options: [
      { id: "A", text: "Make a service unavailable by exhausting resources or overwhelming it with traffic/work" },
      { id: "B", text: "Improve application performance" },
      { id: "C", text: "Reduce memory usage" },
      { id: "D", text: "Optimize SQL queries" }
    ],
    correctOptionId: "A",
    explanation: "DoS attacks attempt to consume enough resources that legitimate users can no longer effectively use the service.",
    tags: ["security", "dos"]
  },

  {
    id: "nodejs-advanced-q-021",
    quizId: "quiz_nodejs_advanced",
    order: 21,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does the event loop primarily coordinate?",
    options: [
      { id: "A", text: "Only database schemas" },
      { id: "B", text: "Only CPU calculations" },
      { id: "C", text: "Asynchronous callbacks and other scheduled work" },
      { id: "D", text: "Only filesystem permissions" }
    ],
    correctOptionId: "C",
    explanation: "The event loop coordinates execution of callbacks and asynchronous work so Node.js can handle many I/O-bound operations efficiently.",
    tags: ["event-loop", "async"]
  },

  {
    id: "nodejs-advanced-q-022",
    quizId: "quiz_nodejs_advanced",
    order: 22,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main performance danger of a synchronous CPU-heavy function in a request handler?",
    options: [
      { id: "A", text: "It blocks the event loop while it executes" },
      { id: "B", text: "It automatically creates a worker thread" },
      { id: "C", text: "It always increases available CPU cores" },
      { id: "D", text: "It disables HTTP status codes" }
    ],
    correctOptionId: "A",
    explanation: "Synchronous CPU-heavy work occupies the JavaScript thread and delays other event-loop tasks.",
    tags: ["event-loop", "performance"]
  },

  {
    id: "nodejs-advanced-q-023",
    quizId: "quiz_nodejs_advanced",
    order: 23,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does asynchronous I/O allow Node.js to do?",
    options: [
      { id: "A", text: "Perform I/O without blocking the JavaScript thread while waiting for completion" },
      { id: "B", text: "Make CPU calculations disappear" },
      { id: "C", text: "Remove all callbacks" },
      { id: "D", text: "Guarantee zero latency" }
    ],
    correctOptionId: "A",
    explanation: "Asynchronous I/O lets Node.js continue handling other work while the underlying operation is waiting for completion.",
    tags: ["async", "io", "performance"]
  },

  {
    id: "nodejs-advanced-q-024",
    quizId: "quiz_nodejs_advanced",
    order: 24,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which metric is particularly useful when evaluating API performance?",
    options: [
      { id: "A", text: "File extension length" },
      { id: "B", text: "Response latency" },
      { id: "C", text: "Variable naming style" },
      { id: "D", text: "Number of comments" }
    ],
    correctOptionId: "B",
    explanation: "Latency measures how long requests take and is a key indicator of API responsiveness.",
    tags: ["performance", "latency", "monitoring"]
  },

  {
    id: "nodejs-advanced-q-025",
    quizId: "quiz_nodejs_advanced",
    order: 25,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does throughput measure?",
    options: [
      { id: "A", text: "How much work a system can process over a given period" },
      { id: "B", text: "How many source files exist" },
      { id: "C", text: "The size of one JavaScript variable" },
      { id: "D", text: "The number of comments in a project" }
    ],
    correctOptionId: "A",
    explanation: "Throughput represents the volume of work processed per unit of time, such as requests per second.",
    tags: ["performance", "throughput"]
  },

  {
    id: "nodejs-advanced-q-026",
    quizId: "quiz_nodejs_advanced",
    order: 26,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is profiling generally preferable to guessing when optimizing Node.js performance?",
    options: [
      { id: "A", text: "Profiling provides evidence about where time or resources are actually being spent" },
      { id: "B", text: "Profiling automatically rewrites the application" },
      { id: "C", text: "Guessing is required by Node.js" },
      { id: "D", text: "Profiling disables the event loop" }
    ],
    correctOptionId: "A",
    explanation: "Performance profiling identifies actual bottlenecks so optimization efforts can focus on measurable problems.",
    tags: ["profiling", "performance"]
  },

  {
    id: "nodejs-advanced-q-027",
    quizId: "quiz_nodejs_advanced",
    order: 27,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is horizontal scaling?",
    options: [
      { id: "A", text: "Adding more instances of an application to distribute load" },
      { id: "B", text: "Increasing the RAM of one server only" },
      { id: "C", text: "Reducing database indexes" },
      { id: "D", text: "Removing load balancing" }
    ],
    correctOptionId: "A",
    explanation: "Horizontal scaling increases capacity by adding more application instances or servers.",
    tags: ["scalability", "architecture"]
  },

  {
    id: "nodejs-advanced-q-028",
    quizId: "quiz_nodejs_advanced",
    order: 28,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is vertical scaling?",
    options: [
      { id: "A", text: "Adding more application instances" },
      { id: "B", text: "Increasing resources such as CPU or RAM on an existing machine" },
      { id: "C", text: "Splitting one request into ten requests" },
      { id: "D", text: "Moving all state to the browser" }
    ],
    correctOptionId: "B",
    explanation: "Vertical scaling increases the resources available to an existing machine or instance.",
    tags: ["scalability", "architecture"]
  },

  {
    id: "nodejs-advanced-q-029",
    quizId: "quiz_nodejs_advanced",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is stateless application design useful for horizontal scaling?",
    options: [
      { id: "A", text: "Any instance can handle a request without depending on local process state" },
      { id: "B", text: "It removes the need for databases" },
      { id: "C", text: "It guarantees no authentication is needed" },
      { id: "D", text: "It prevents network failures" }
    ],
    correctOptionId: "A",
    explanation: "Stateless instances make it easier for a load balancer to route requests to different instances without relying on memory stored in one process.",
    tags: ["scalability", "stateless", "architecture"]
  },

  {
    id: "nodejs-advanced-q-030",
    quizId: "quiz_nodejs_advanced",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What problem can occur if authentication/session state is stored only in one Node.js process?",
    options: [
      { id: "A", text: "A request routed to another instance may not find the required state" },
      { id: "B", text: "HTTP automatically becomes encrypted" },
      { id: "C", text: "The database becomes read-only" },
      { id: "D", text: "The event loop stops permanently" }
    ],
    correctOptionId: "A",
    explanation: "Process-local state is not automatically shared across instances, which can cause inconsistent behavior when requests are load-balanced.",
    tags: ["scalability", "sessions", "architecture"]
  },

  {
    id: "nodejs-advanced-q-031",
    quizId: "quiz_nodejs_advanced",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a load balancer responsible for?",
    options: [
      { id: "A", text: "Distributing incoming traffic among available application instances" },
      { id: "B", text: "Writing JavaScript code automatically" },
      { id: "C", text: "Replacing the database schema" },
      { id: "D", text: "Encrypting source files" }
    ],
    correctOptionId: "A",
    explanation: "Load balancers distribute requests among backend instances and can also provide health checks and traffic management.",
    tags: ["load-balancing", "scalability"]
  },

  {
    id: "nodejs-advanced-q-032",
    quizId: "quiz_nodejs_advanced",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a health check endpoint commonly used for?",
    options: [
      { id: "A", text: "Allowing infrastructure to determine whether an instance is healthy enough to receive traffic" },
      { id: "B", text: "Changing database passwords" },
      { id: "C", text: "Serving frontend CSS" },
      { id: "D", text: "Generating JWT secrets" }
    ],
    correctOptionId: "A",
    explanation: "Health checks help load balancers or orchestration systems determine whether an instance should continue receiving traffic.",
    tags: ["health-checks", "deployment", "scalability"]
  },

  {
    id: "nodejs-advanced-q-033",
    quizId: "quiz_nodejs_advanced",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is graceful shutdown?",
    options: [
      { id: "A", text: "Immediately killing every connection" },
      { id: "B", text: "Stopping new work while allowing existing work to finish safely before termination" },
      { id: "C", text: "Ignoring active requests" },
      { id: "D", text: "Deleting application logs" }
    ],
    correctOptionId: "B",
    explanation: "Graceful shutdown allows the application to stop accepting new work and clean up resources while existing work finishes where possible.",
    tags: ["shutdown", "production", "architecture"]
  },

  {
    id: "nodejs-advanced-q-034",
    quizId: "quiz_nodejs_advanced",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should a production server handle termination signals gracefully?",
    options: [
      { id: "A", text: "To reduce the chance of abruptly terminating active requests or leaving resources in a bad state" },
      { id: "B", text: "To make JavaScript synchronous" },
      { id: "C", text: "To disable load balancing" },
      { id: "D", text: "To avoid all deployments" }
    ],
    correctOptionId: "A",
    explanation: "Graceful termination improves reliability during deployments, restarts, scaling, and infrastructure changes.",
    tags: ["shutdown", "reliability"]
  },

  {
    id: "nodejs-advanced-q-035",
    quizId: "quiz_nodejs_advanced",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a circuit breaker pattern designed to help with?",
    options: [
      { id: "A", text: "Preventing repeated calls to an unhealthy dependency from making an outage worse" },
      { id: "B", text: "Encrypting passwords" },
      { id: "C", text: "Replacing database transactions" },
      { id: "D", text: "Making CPU operations synchronous" }
    ],
    correctOptionId: "A",
    explanation: "Circuit breakers can temporarily stop calls to a failing dependency, allowing systems to fail faster and recover without continuous pressure.",
    tags: ["resilience", "circuit-breaker"]
  },

  {
    id: "nodejs-advanced-q-036",
    quizId: "quiz_nodejs_advanced",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is idempotency particularly important for in distributed systems?",
    options: [
      { id: "A", text: "Ensuring repeated processing of the same operation does not unintentionally create repeated side effects" },
      { id: "B", text: "Making passwords shorter" },
      { id: "C", text: "Increasing JavaScript bundle size" },
      { id: "D", text: "Disabling retries" }
    ],
    correctOptionId: "A",
    explanation: "Retries can cause duplicate operations. Idempotency techniques help ensure repeated requests have predictable effects.",
    tags: ["distributed-systems", "idempotency", "reliability"]
  },

  {
    id: "nodejs-advanced-q-037",
    quizId: "quiz_nodejs_advanced",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can an unbounded in-memory cache be dangerous?",
    options: [
      { id: "A", text: "It can continually consume memory and eventually cause excessive memory usage or process failure" },
      { id: "B", text: "It automatically disables HTTP" },
      { id: "C", text: "It prevents garbage collection from existing" },
      { id: "D", text: "It always improves performance indefinitely" }
    ],
    correctOptionId: "A",
    explanation: "Caches need appropriate limits, eviction, and expiration strategies to prevent uncontrolled memory growth.",
    tags: ["caching", "memory", "performance"]
  },

  {
    id: "nodejs-advanced-q-038",
    quizId: "quiz_nodejs_advanced",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is garbage collection responsible for?",
    options: [
      { id: "A", text: "Automatically reclaiming memory that is no longer reachable by the JavaScript program" },
      { id: "B", text: "Deleting database rows" },
      { id: "C", text: "Closing HTTP ports" },
      { id: "D", text: "Compiling TypeScript" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript's garbage collector reclaims memory associated with objects that are no longer reachable.",
    tags: ["memory", "garbage-collection"]
  },

  {
    id: "nodejs-advanced-q-039",
    quizId: "quiz_nodejs_advanced",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which situation can prevent an object from being garbage-collected?",
    options: [
      { id: "A", text: "The object remains reachable through a live reference" },
      { id: "B", text: "The object has no references" },
      { id: "C", text: "The process uses async/await" },
      { id: "D", text: "The object was created inside a function" }
    ],
    correctOptionId: "A",
    explanation: "Objects remain eligible for garbage collection only when they are no longer reachable through active references.",
    tags: ["memory", "garbage-collection"]
  },

  {
    id: "nodejs-advanced-q-040",
    quizId: "quiz_nodejs_advanced",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can global variables contribute to memory leaks?",
    options: [
      { id: "A", text: "They can keep objects reachable for the lifetime of the process" },
      { id: "B", text: "Global variables are always automatically deleted" },
      { id: "C", text: "They cannot contain objects" },
      { id: "D", text: "They disable garbage collection completely" }
    ],
    correctOptionId: "A",
    explanation: "Long-lived references, including globals, can keep objects reachable and prevent them from being reclaimed.",
    tags: ["memory", "globals", "leaks"]
  },

  {
    id: "nodejs-advanced-q-041",
    quizId: "quiz_nodejs_advanced",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common benefit of using compression for HTTP responses?",
    options: [
      { id: "A", text: "It can reduce the amount of data transferred over the network" },
      { id: "B", text: "It guarantees zero CPU usage" },
      { id: "C", text: "It removes the need for HTTPS" },
      { id: "D", text: "It makes every response larger" }
    ],
    correctOptionId: "A",
    explanation: "Compression can reduce response size and network transfer costs, although it also introduces CPU overhead.",
    tags: ["performance", "http", "compression"]
  },

  {
    id: "nodejs-advanced-q-042",
    quizId: "quiz_nodejs_advanced",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should developers avoid blindly increasing Node.js memory limits to solve memory problems?",
    options: [
      { id: "A", text: "It can hide an underlying memory leak rather than fixing the root cause" },
      { id: "B", text: "Node.js cannot use memory" },
      { id: "C", text: "Memory limits are only for browsers" },
      { id: "D", text: "Increasing memory always makes leaks disappear" }
    ],
    correctOptionId: "A",
    explanation: "Increasing the heap limit can postpone failure but does not fix code that continually retains unnecessary objects.",
    tags: ["memory", "performance", "debugging"]
  },

  {
    id: "nodejs-advanced-q-043",
    quizId: "quiz_nodejs_advanced",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is dependency auditing primarily intended to identify?",
    options: [
      { id: "A", text: "Security vulnerabilities or problematic dependencies in the project" },
      { id: "B", text: "CSS spacing issues" },
      { id: "C", text: "Unused HTML headings only" },
      { id: "D", text: "Database query formatting" }
    ],
    correctOptionId: "A",
    explanation: "Dependency auditing helps identify known vulnerabilities and security issues in third-party packages.",
    tags: ["security", "dependencies", "npm"]
  },

  {
    id: "nodejs-advanced-q-044",
    quizId: "quiz_nodejs_advanced",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is keeping dependencies reasonably up to date important?",
    options: [
      { id: "A", text: "It can provide security fixes, bug fixes, and compatibility improvements" },
      { id: "B", text: "It guarantees no bugs will ever exist" },
      { id: "C", text: "It eliminates the need for tests" },
      { id: "D", text: "It automatically optimizes every database query" }
    ],
    correctOptionId: "A",
    explanation: "Maintaining dependencies helps address known vulnerabilities and defects, although updates should still be tested carefully.",
    tags: ["security", "dependencies", "maintenance"]
  },

  {
    id: "nodejs-advanced-q-045",
    quizId: "quiz_nodejs_advanced",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of security headers in an HTTP application?",
    options: [
      { id: "A", text: "To provide browsers with security-related instructions and reduce certain attack risks" },
      { id: "B", text: "To increase database storage" },
      { id: "C", text: "To replace authentication entirely" },
      { id: "D", text: "To make JavaScript execute faster" }
    ],
    correctOptionId: "A",
    explanation: "Security-related HTTP headers can instruct clients about policies such as content handling, framing, and transport security.",
    tags: ["security", "http", "headers"]
  },

  {
    id: "nodejs-advanced-q-046",
    quizId: "quiz_nodejs_advanced",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is HTTPS important for a Node.js API?",
    options: [
      { id: "A", text: "It encrypts data in transit and helps protect against network interception" },
      { id: "B", text: "It automatically validates all user input" },
      { id: "C", text: "It eliminates application vulnerabilities" },
      { id: "D", text: "It makes databases unnecessary" }
    ],
    correctOptionId: "A",
    explanation: "HTTPS uses TLS to protect data transmitted between clients and servers from unauthorized interception or modification.",
    tags: ["security", "https", "tls"]
  },

  {
    id: "nodejs-advanced-q-047",
    quizId: "quiz_nodejs_advanced",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is observability concerned with in a production backend?",
    options: [
      { id: "A", text: "Understanding system behavior through signals such as logs, metrics, and traces" },
      { id: "B", text: "Only changing CSS styles" },
      { id: "C", text: "Removing all application logs" },
      { id: "D", text: "Replacing databases with files" }
    ],
    correctOptionId: "A",
    explanation: "Observability helps teams understand what is happening inside a running system using telemetry such as logs, metrics, and traces.",
    tags: ["observability", "monitoring", "production"]
  },

  {
    id: "nodejs-advanced-q-048",
    quizId: "quiz_nodejs_advanced",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which combination provides the strongest basic foundation for diagnosing production performance problems?",
    options: [
      { id: "A", text: "Random code changes and repeated restarts" },
      { id: "B", text: "Metrics, logs, tracing/profiling, and reproducible measurements" },
      { id: "C", text: "Only console.log statements with no context" },
      { id: "D", text: "Increasing server size without measurement" }
    ],
    correctOptionId: "B",
    explanation: "Multiple observability signals provide evidence about latency, errors, resource usage, and where work is occurring.",
    tags: ["observability", "profiling", "performance"]
  },

  {
    id: "nodejs-advanced-q-049",
    quizId: "quiz_nodejs_advanced",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A Node.js API becomes slow only under heavy traffic. What is the best first step?",
    options: [
      { id: "A", text: "Immediately rewrite the entire backend" },
      { id: "B", text: "Add more dependencies" },
      { id: "C", text: "Measure the system and identify the actual bottleneck before optimizing" },
      { id: "D", text: "Disable error logging" }
    ],
    correctOptionId: "C",
    explanation: "Performance optimization should begin with measurement. The bottleneck could be CPU, database queries, network latency, memory pressure, or another component.",
    tags: ["performance", "debugging", "profiling"]
  },

  {
    id: "nodejs-advanced-q-050",
    quizId: "quiz_nodejs_advanced",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which architecture best represents a production-ready scalable Node.js API?",
    options: [
      { id: "A", text: "One process with unlimited in-memory state and no monitoring" },
      { id: "B", text: "A server that exposes database credentials and has no rate limits" },
      { id: "C", text: "A system using appropriate scaling, externalized shared state, validation, security controls, observability, controlled error handling, and performance monitoring" },
      { id: "D", text: "A system that retries every failed operation forever" }
    ],
    correctOptionId: "C",
    explanation: "Production architecture combines scalability, security, resilience, observability, appropriate state management, and measured performance practices rather than relying on one optimization.",
    tags: [
      "architecture",
      "scalability",
      "security",
      "performance",
      "observability"
    ]
  }
];

export default nodejsAdvancedQuestions;