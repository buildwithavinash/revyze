const nodejsExpressApisQuestions = [
  {
    id: "nodejs-express-apis-q-001",
    quizId: "quiz_nodejs_express_apis",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is Express.js primarily used for in a Node.js application?",
    options: [
      { id: "A", text: "Managing relational databases" },
      { id: "B", text: "Building web servers and APIs" },
      { id: "C", text: "Compiling TypeScript" },
      { id: "D", text: "Managing operating-system processes" }
    ],
    correctOptionId: "B",
    explanation: "Express is a web framework for Node.js commonly used to build servers, APIs, routing systems, and middleware pipelines.",
    tags: ["express", "api", "fundamentals"]
  },

  {
    id: "nodejs-express-apis-q-002",
    quizId: "quiz_nodejs_express_apis",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which code creates a basic Express application?",
    options: [
      { id: "A", text: "const app = express();" },
      { id: "B", text: "const app = new ExpressServer();" },
      { id: "C", text: "const app = Express.create();" },
      { id: "D", text: "const app = requireServer('express');" }
    ],
    correctOptionId: "A",
    explanation: "Calling the imported `express` function creates an Express application instance.",
    tags: ["express", "app"]
  },

  {
    id: "nodejs-express-apis-q-003",
    quizId: "quiz_nodejs_express_apis",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which HTTP method is normally used to retrieve a resource?",
    options: [
      { id: "A", text: "POST" },
      { id: "B", text: "PATCH" },
      { id: "C", text: "GET" },
      { id: "D", text: "DELETE" }
    ],
    correctOptionId: "C",
    explanation: "GET is conventionally used to retrieve resources without intending to modify server state.",
    tags: ["http", "rest", "get"]
  },

  {
    id: "nodejs-express-apis-q-004",
    quizId: "quiz_nodejs_express_apis",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which Express method defines a route that responds to GET requests?",
    options: [
      { id: "A", text: "app.fetch()" },
      { id: "B", text: "app.routeGet()" },
      { id: "C", text: "app.get()" },
      { id: "D", text: "app.request()" }
    ],
    correctOptionId: "C",
    explanation: "`app.get(path, handler)` registers a handler for HTTP GET requests matching the path.",
    tags: ["express", "routing", "get"]
  },

  {
    id: "nodejs-express-apis-q-005",
    quizId: "quiz_nodejs_express_apis",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `res.json(data)` do in Express?",
    options: [
      { id: "A", text: "Reads JSON from the request body" },
      { id: "B", text: "Sends a JSON response to the client" },
      { id: "C", text: "Stores JSON in a database" },
      { id: "D", text: "Creates a JSON file on disk" }
    ],
    correctOptionId: "B",
    explanation: "`res.json()` sends a response with the supplied JavaScript value serialized as JSON.",
    tags: ["express", "response", "json"]
  },

  {
    id: "nodejs-express-apis-q-006",
    quizId: "quiz_nodejs_express_apis",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "In an Express route handler, what does the first parameter usually represent?",
    options: [
      { id: "A", text: "The response object" },
      { id: "B", text: "The database connection" },
      { id: "C", text: "The request object" },
      { id: "D", text: "The server instance" }
    ],
    correctOptionId: "C",
    explanation: "A typical Express handler has the signature `(req, res)`, where `req` represents the incoming request.",
    tags: ["express", "request", "response"]
  },

  {
    id: "nodejs-express-apis-q-007",
    quizId: "quiz_nodejs_express_apis",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Where would you normally access a route parameter such as `/users/:id`?",
    options: [
      { id: "A", text: "req.params.id" },
      { id: "B", text: "req.body.id" },
      { id: "C", text: "req.query.id" },
      { id: "D", text: "req.routeId" }
    ],
    correctOptionId: "A",
    explanation: "Express stores named route parameters in `req.params`.",
    tags: ["express", "routing", "params"]
  },

  {
    id: "nodejs-express-apis-q-008",
    quizId: "quiz_nodejs_express_apis",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "For a URL such as `/products?category=books&page=2`, where would Express expose `category` and `page`?",
    options: [
      { id: "A", text: "req.params" },
      { id: "B", text: "req.body" },
      { id: "C", text: "req.query" },
      { id: "D", text: "req.searchParamsOnly" }
    ],
    correctOptionId: "C",
    explanation: "Query-string parameters are available through `req.query`.",
    tags: ["express", "query", "routing"]
  },

  {
    id: "nodejs-express-apis-q-009",
    quizId: "quiz_nodejs_express_apis",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which middleware is commonly used to parse incoming JSON request bodies?",
    options: [
      { id: "A", text: "express.json()" },
      { id: "B", text: "express.bodyParserJSONOnly()" },
      { id: "C", text: "express.parse()" },
      { id: "D", text: "express.requestJSON()" }
    ],
    correctOptionId: "A",
    explanation: "`express.json()` returns middleware that parses incoming requests with JSON payloads.",
    tags: ["express", "middleware", "json"]
  },

  {
    id: "nodejs-express-apis-q-010",
    quizId: "quiz_nodejs_express_apis",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is middleware in Express?",
    options: [
      { id: "A", text: "A database table used by Express" },
      { id: "B", text: "A function that can process a request/response and pass control onward" },
      { id: "C", text: "A replacement for HTTP" },
      { id: "D", text: "A special type of frontend component" }
    ],
    correctOptionId: "B",
    explanation: "Middleware functions can inspect or modify the request and response and either end the response or call `next()`.",
    tags: ["express", "middleware"]
  },

  {
    id: "nodejs-express-apis-q-011",
    quizId: "quiz_nodejs_express_apis",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of `next()` in normal Express middleware?",
    options: [
      { id: "A", text: "It restarts the Node.js process" },
      { id: "B", text: "It sends the response automatically" },
      { id: "C", text: "It passes control to the next matching middleware or route handler" },
      { id: "D", text: "It creates another HTTP request" }
    ],
    correctOptionId: "C",
    explanation: "Calling `next()` tells Express to continue processing the request through the middleware stack.",
    tags: ["express", "middleware", "next"]
  },

  {
    id: "nodejs-express-apis-q-012",
    quizId: "quiz_nodejs_express_apis",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens if middleware neither sends a response nor calls `next()`?",
    options: [
      { id: "A", text: "The request can remain hanging" },
      { id: "B", text: "Express automatically calls the next route" },
      { id: "C", text: "The server automatically returns 404" },
      { id: "D", text: "Node.js automatically retries the request" }
    ],
    correctOptionId: "A",
    explanation: "If middleware neither finishes the response nor passes control onward, the request may never complete.",
    tags: ["express", "middleware", "common-mistakes"]
  },

  {
    id: "nodejs-express-apis-q-013",
    quizId: "quiz_nodejs_express_apis",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which HTTP method is commonly used to create a new resource?",
    options: [
      { id: "A", text: "GET" },
      { id: "B", text: "POST" },
      { id: "C", text: "DELETE" },
      { id: "D", text: "HEAD" }
    ],
    correctOptionId: "B",
    explanation: "POST is commonly used to submit data for creating a new resource.",
    tags: ["http", "rest", "post"]
  },

  {
    id: "nodejs-express-apis-q-014",
    quizId: "quiz_nodejs_express_apis",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which HTTP method is commonly used to remove a resource?",
    options: [
      { id: "A", text: "DELETE" },
      { id: "B", text: "PATCH" },
      { id: "C", text: "OPTIONS" },
      { id: "D", text: "CONNECT" }
    ],
    correctOptionId: "A",
    explanation: "DELETE is conventionally used to request removal of a resource.",
    tags: ["http", "rest", "delete"]
  },

  {
    id: "nodejs-express-apis-q-015",
    quizId: "quiz_nodejs_express_apis",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which status code usually indicates that a request succeeded and returned a resource?",
    options: [
      { id: "A", text: "404" },
      { id: "B", text: "500" },
      { id: "C", text: "201" },
      { id: "D", text: "200" }
    ],
    correctOptionId: "D",
    explanation: "HTTP 200 OK indicates successful processing of a request. A 201 status is more specifically associated with successful creation.",
    tags: ["http", "status-codes"]
  },

  {
    id: "nodejs-express-apis-q-016",
    quizId: "quiz_nodejs_express_apis",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which status code is most appropriate after successfully creating a new resource?",
    options: [
      { id: "A", text: "201" },
      { id: "B", text: "204" },
      { id: "C", text: "301" },
      { id: "D", text: "409" }
    ],
    correctOptionId: "A",
    explanation: "HTTP 201 Created indicates that a new resource was successfully created.",
    tags: ["http", "status-codes", "rest"]
  },

  {
    id: "nodejs-express-apis-q-017",
    quizId: "quiz_nodejs_express_apis",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which status code indicates that the server successfully processed the request but has no response body to return?",
    options: [
      { id: "A", text: "202" },
      { id: "B", text: "204" },
      { id: "C", text: "206" },
      { id: "D", text: "304" }
    ],
    correctOptionId: "B",
    explanation: "204 No Content indicates successful processing with no response content.",
    tags: ["http", "status-codes"]
  },

  {
    id: "nodejs-express-apis-q-018",
    quizId: "quiz_nodejs_express_apis",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which status code is normally used when a requested resource cannot be found?",
    options: [
      { id: "A", text: "400" },
      { id: "B", text: "401" },
      { id: "C", text: "404" },
      { id: "D", text: "409" }
    ],
    correctOptionId: "C",
    explanation: "404 Not Found indicates that the requested resource could not be found.",
    tags: ["http", "status-codes", "404"]
  },

  {
    id: "nodejs-express-apis-q-019",
    quizId: "quiz_nodejs_express_apis",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which status code usually indicates that the client sent an invalid request?",
    options: [
      { id: "A", text: "400" },
      { id: "B", text: "201" },
      { id: "C", text: "204" },
      { id: "D", text: "302" }
    ],
    correctOptionId: "A",
    explanation: "400 Bad Request is commonly used when the server cannot process the request because of invalid client input.",
    tags: ["http", "status-codes", "validation"]
  },

  {
    id: "nodejs-express-apis-q-020",
    quizId: "quiz_nodejs_express_apis",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `res.status(404).json({ error: 'Not found' })` do?",
    options: [
      { id: "A", text: "Redirects the client to `/404`" },
      { id: "B", text: "Sets the response status to 404 and sends a JSON response" },
      { id: "C", text: "Throws a JavaScript syntax error" },
      { id: "D", text: "Deletes the requested resource" }
    ],
    correctOptionId: "B",
    explanation: "`res.status(404)` sets the HTTP status, and `.json()` sends the JSON response.",
    tags: ["express", "response", "status-codes"]
  },

  {
    id: "nodejs-express-apis-q-021",
    quizId: "quiz_nodejs_express_apis",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method is commonly used for partially updating an existing resource?",
    options: [
      { id: "A", text: "PATCH" },
      { id: "B", text: "GET" },
      { id: "C", text: "HEAD" },
      { id: "D", text: "OPTIONS" }
    ],
    correctOptionId: "A",
    explanation: "PATCH is commonly used for partial modifications to an existing resource.",
    tags: ["http", "rest", "patch"]
  },

  {
    id: "nodejs-express-apis-q-022",
    quizId: "quiz_nodejs_express_apis",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common distinction between PUT and PATCH?",
    options: [
      { id: "A", text: "PUT is only for reading and PATCH is only for deleting" },
      { id: "B", text: "PATCH normally represents partial modification, while PUT commonly represents replacement/update of a resource representation" },
      { id: "C", text: "They are completely unrelated to HTTP" },
      { id: "D", text: "PUT can only be used with HTML forms" }
    ],
    correctOptionId: "B",
    explanation: "PATCH is generally associated with partial updates, while PUT commonly represents replacing or fully updating a resource representation.",
    tags: ["http", "put", "patch", "rest"]
  },

  {
    id: "nodejs-express-apis-q-023",
    quizId: "quiz_nodejs_express_apis",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which Express method is used to define a POST route?",
    options: [
      { id: "A", text: "app.submit()" },
      { id: "B", text: "app.post()" },
      { id: "C", text: "app.create()" },
      { id: "D", text: "app.send()" }
    ],
    correctOptionId: "B",
    explanation: "`app.post()` registers a handler for HTTP POST requests.",
    tags: ["express", "routing", "post"]
  },

  {
    id: "nodejs-express-apis-q-024",
    quizId: "quiz_nodejs_express_apis",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `express.Router()`?",
    options: [
      { id: "A", text: "To create a modular router that can group related routes and middleware" },
      { id: "B", text: "To connect directly to MongoDB" },
      { id: "C", text: "To replace Node's HTTP module completely" },
      { id: "D", text: "To compile JavaScript" }
    ],
    correctOptionId: "A",
    explanation: "Routers allow applications to organize related routes and middleware into reusable modules.",
    tags: ["express", "router", "architecture"]
  },

  {
    id: "nodejs-express-apis-q-025",
    quizId: "quiz_nodejs_express_apis",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "If a router is mounted with `app.use('/api/users', userRouter)`, what path would a router route `router.get('/')` match?",
    options: [
      { id: "A", text: "/users" },
      { id: "B", text: "/" },
      { id: "C", text: "/api/users" },
      { id: "D", text: "/api" }
    ],
    correctOptionId: "C",
    explanation: "The router's `/` path is combined with its mount path, resulting in `/api/users`.",
    tags: ["express", "router", "routing"]
  },

  {
    id: "nodejs-express-apis-q-026",
    quizId: "quiz_nodejs_express_apis",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n```js\napp.get('/users/:id', (req, res) => {\n  res.json({ id: req.params.id });\n});\n```\n\nWhat does `/users/42` produce?",
    options: [
      { id: "A", text: "{ \"id\": \"users\" }" },
      { id: "B", text: "{ \"id\": 42 }" },
      { id: "C", text: "{ \"id\": \"/42\" }" },
      { id: "D", text: "{ \"id\": \"42\" }" }
    ],
    correctOptionId: "D",
    explanation: "Route parameters are strings by default, so `req.params.id` is the string `\"42\"`.",
    tags: ["express", "params", "routing"]
  },

  {
    id: "nodejs-express-apis-q-027",
    quizId: "quiz_nodejs_express_apis",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Where would JSON sent in the body of a POST request normally be available after `express.json()`?",
    options: [
      { id: "A", text: "req.params" },
      { id: "B", text: "req.body" },
      { id: "C", text: "req.query" },
      { id: "D", text: "req.payloadOnly" }
    ],
    correctOptionId: "B",
    explanation: "After JSON body parsing middleware runs, parsed request data is available through `req.body`.",
    tags: ["express", "middleware", "body"]
  },

  {
    id: "nodejs-express-apis-q-028",
    quizId: "quiz_nodejs_express_apis",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the correct order for this common Express setup?",
    options: [
      { id: "A", text: "Define routes, then create the app, then import Express" },
      { id: "B", text: "Create app → configure middleware/routes → start listening" },
      { id: "C", text: "Start listening → configure middleware → create app" },
      { id: "D", text: "Create database → start listening → import Express" }
    ],
    correctOptionId: "B",
    explanation: "A typical Express application creates the app, configures middleware/routes, and then starts the server.",
    tags: ["express", "architecture"]
  },

  {
    id: "nodejs-express-apis-q-029",
    quizId: "quiz_nodejs_express_apis",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `app.use('/api', router)` generally do?",
    options: [
      { id: "A", text: "Mounts the router under the `/api` path prefix" },
      { id: "B", text: "Makes every request POST" },
      { id: "C", text: "Creates an API database" },
      { id: "D", text: "Converts all responses to XML" }
    ],
    correctOptionId: "A",
    explanation: "`app.use()` can mount middleware or routers at a path prefix.",
    tags: ["express", "router", "middleware"]
  },

  {
    id: "nodejs-express-apis-q-030",
    quizId: "quiz_nodejs_express_apis",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of request validation in an API?",
    options: [
      { id: "A", text: "To make HTTP faster automatically" },
      { id: "B", text: "To ensure incoming data satisfies the API's expected rules before processing it" },
      { id: "C", text: "To remove the need for authentication" },
      { id: "D", text: "To convert every request to GET" }
    ],
    correctOptionId: "B",
    explanation: "Validation protects application logic by ensuring incoming data has the expected shape and values.",
    tags: ["api", "validation", "security"]
  },

  {
    id: "nodejs-express-apis-q-031",
    quizId: "quiz_nodejs_express_apis",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which pattern is generally preferable when an asynchronous route operation fails?",
    options: [
      { id: "A", text: "Silently ignore the failure" },
      { id: "B", text: "Send multiple responses to ensure the client receives one" },
      { id: "C", text: "Propagate the error to centralized Express error-handling logic" },
      { id: "D", text: "Restart the server for every error" }
    ],
    correctOptionId: "C",
    explanation: "Centralized error handling keeps route handlers simpler and provides consistent API error responses.",
    tags: ["express", "errors", "architecture"]
  },

  {
    id: "nodejs-express-apis-q-032",
    quizId: "quiz_nodejs_express_apis",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What distinguishes Express error-handling middleware from normal middleware?",
    options: [
      { id: "A", text: "It has four parameters: `(err, req, res, next)`" },
      { id: "B", text: "It must have zero parameters" },
      { id: "C", text: "It only runs for GET requests" },
      { id: "D", text: "It must always return JSON" }
    ],
    correctOptionId: "A",
    explanation: "Express recognizes error-handling middleware by its four-argument signature: `err, req, res, next`.",
    tags: ["express", "errors", "middleware"]
  },

  {
    id: "nodejs-express-apis-q-033",
    quizId: "quiz_nodejs_express_apis",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does calling `next(err)` generally signal to Express?",
    options: [
      { id: "A", text: "The request should be treated as successful" },
      { id: "B", text: "The current route should be repeated" },
      { id: "C", text: "An error should be passed through the error-handling middleware chain" },
      { id: "D", text: "The server should shut down" }
    ],
    correctOptionId: "C",
    explanation: "Passing an error to `next()` tells Express to enter error-handling middleware.",
    tags: ["express", "errors", "next"]
  },

  {
    id: "nodejs-express-apis-q-034",
    quizId: "quiz_nodejs_express_apis",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should an Express API avoid sending sensitive internal error details directly to clients in production?",
    options: [
      { id: "A", text: "Detailed errors can expose implementation or security information" },
      { id: "B", text: "JSON cannot contain error messages" },
      { id: "C", text: "HTTP does not support errors" },
      { id: "D", text: "Express automatically deletes detailed errors" }
    ],
    correctOptionId: "A",
    explanation: "Stack traces, database errors, file paths, and internal details can expose information useful to attackers.",
    tags: ["express", "errors", "security"]
  },

  {
    id: "nodejs-express-apis-q-035",
    quizId: "quiz_nodejs_express_apis",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "An endpoint returns a user's data. Which approach is generally best for deciding what fields to return?",
    options: [
      { id: "A", text: "Return the entire database record automatically" },
      { id: "B", text: "Return only fields the API intentionally exposes" },
      { id: "C", text: "Return passwords because HTTPS encrypts them" },
      { id: "D", text: "Return every internal field and let the frontend filter it" }
    ],
    correctOptionId: "B",
    explanation: "APIs should explicitly shape responses and avoid accidentally exposing sensitive or internal fields.",
    tags: ["api", "security", "responses"]
  },

  {
    id: "nodejs-express-apis-q-036",
    quizId: "quiz_nodejs_express_apis",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which route design is most REST-like for retrieving a specific user?",
    options: [
      { id: "A", text: "GET /getUser?id=42" },
      { id: "B", text: "POST /user/get" },
      { id: "C", text: "GET /users/42" },
      { id: "D", text: "GET /users?action=retrieve&id=42" }
    ],
    correctOptionId: "C",
    explanation: "A resource-oriented API commonly represents a specific user as `/users/:id` and retrieves it with GET.",
    tags: ["rest", "routing", "api-design"]
  },

  {
    id: "nodejs-express-apis-q-037",
    quizId: "quiz_nodejs_express_apis",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which route is most appropriate for creating a new user in a resource-oriented API?",
    options: [
      { id: "A", text: "POST /users" },
      { id: "B", text: "GET /createUser" },
      { id: "C", text: "POST /users/:id/create" },
      { id: "D", text: "GET /users/new/save" }
    ],
    correctOptionId: "A",
    explanation: "POSTing to the collection `/users` conventionally represents creating a new user resource.",
    tags: ["rest", "api-design", "post"]
  },

  {
    id: "nodejs-express-apis-q-038",
    quizId: "quiz_nodejs_express_apis",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which status code is commonly appropriate when authentication credentials are missing or invalid?",
    options: [
      { id: "A", text: "200" },
      { id: "B", text: "401" },
      { id: "C", text: "204" },
      { id: "D", text: "301" }
    ],
    correctOptionId: "B",
    explanation: "401 Unauthorized is used when valid authentication credentials are required but are missing or invalid.",
    tags: ["http", "authentication", "status-codes"]
  },

  {
    id: "nodejs-express-apis-q-039",
    quizId: "quiz_nodejs_express_apis",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which status code is commonly associated with an authenticated user lacking permission to access a resource?",
    options: [
      { id: "A", text: "403" },
      { id: "B", text: "201" },
      { id: "C", text: "302" },
      { id: "D", text: "304" }
    ],
    correctOptionId: "A",
    explanation: "403 Forbidden indicates that the server understood the request but refuses to authorize access.",
    tags: ["http", "authorization", "status-codes"]
  },

  {
    id: "nodejs-express-apis-q-040",
    quizId: "quiz_nodejs_express_apis",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is one major reason to separate Express routes, controllers, and business logic in a larger application?",
    options: [
      { id: "A", text: "It guarantees zero bugs" },
      { id: "B", text: "It makes JavaScript execute synchronously" },
      { id: "C", text: "It improves organization, testing, and maintainability" },
      { id: "D", text: "It eliminates the need for HTTP status codes" }
    ],
    correctOptionId: "C",
    explanation: "Separating responsibilities keeps HTTP-specific concerns separate from application and business logic.",
    tags: ["express", "architecture", "maintainability"]
  },

  {
    id: "nodejs-express-apis-q-041",
    quizId: "quiz_nodejs_express_apis",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\n```js\napp.use((req, res, next) => {\n  console.log(req.method);\n  next();\n});\n```\n\nWhat does this middleware do?",
    options: [
      { id: "A", text: "Logs the HTTP method and allows the request to continue" },
      { id: "B", text: "Ends every request" },
      { id: "C", text: "Only runs after the response is sent" },
      { id: "D", text: "Converts the request method to POST" }
    ],
    correctOptionId: "A",
    explanation: "The middleware logs the method and calls `next()`, allowing later middleware or routes to process the request.",
    tags: ["express", "middleware", "logging"]
  },

  {
    id: "nodejs-express-apis-q-042",
    quizId: "quiz_nodejs_express_apis",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of CORS middleware in an API?",
    options: [
      { id: "A", text: "It controls browser cross-origin access according to HTTP CORS rules" },
      { id: "B", text: "It encrypts database passwords" },
      { id: "C", text: "It replaces authentication" },
      { id: "D", text: "It converts REST APIs into GraphQL APIs" }
    ],
    correctOptionId: "A",
    explanation: "CORS controls which browser origins are permitted to make cross-origin requests to a server.",
    tags: ["express", "cors", "security"]
  },

  {
    id: "nodejs-express-apis-q-043",
    quizId: "quiz_nodejs_express_apis",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might an API use pagination for `GET /products` instead of returning every product?",
    options: [
      { id: "A", text: "Pagination prevents HTTP from returning JSON" },
      { id: "B", text: "It can reduce response size and server/client processing for large collections" },
      { id: "C", text: "Pagination is required for all GET requests" },
      { id: "D", text: "It makes the database unnecessary" }
    ],
    correctOptionId: "B",
    explanation: "Pagination limits how much data is transferred and processed per request, which improves scalability.",
    tags: ["api", "pagination", "performance"]
  },

  {
    id: "nodejs-express-apis-q-044",
    quizId: "quiz_nodejs_express_apis",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "A client sends `GET /products?limit=20&offset=40`. What are `limit` and `offset` most naturally considered?",
    options: [
      { id: "A", text: "Route parameters" },
      { id: "B", text: "Request body fields" },
      { id: "C", text: "Query parameters" },
      { id: "D", text: "HTTP headers" }
    ],
    correctOptionId: "C",
    explanation: "Values following `?` in the URL query string are query parameters and are available through `req.query`.",
    tags: ["express", "query", "pagination"]
  },

  {
    id: "nodejs-express-apis-q-045",
    quizId: "quiz_nodejs_express_apis",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should an API validate pagination values such as `limit`?",
    options: [
      { id: "A", text: "A client could request an excessively large amount of data and create unnecessary load" },
      { id: "B", text: "Query parameters cannot contain numbers" },
      { id: "C", text: "Express automatically rejects all numeric values" },
      { id: "D", text: "Pagination only works with strings" }
    ],
    correctOptionId: "A",
    explanation: "Unbounded pagination parameters can lead to expensive database queries and oversized responses, so they should be validated and constrained.",
    tags: ["api", "pagination", "validation", "performance"]
  },

  {
    id: "nodejs-express-apis-q-046",
    quizId: "quiz_nodejs_express_apis",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common mistake when handling an Express response?",
    options: [
      { id: "A", text: "Calling `res.json()` once" },
      { id: "B", text: "Setting a status code before sending a response" },
      { id: "C", text: "Sending multiple responses for the same request" },
      { id: "D", text: "Using middleware" }
    ],
    correctOptionId: "C",
    explanation: "Once a response has been sent, attempting to send another response can result in errors such as 'headers already sent'.",
    tags: ["express", "responses", "common-mistakes"]
  },

  {
    id: "nodejs-express-apis-q-047",
    quizId: "quiz_nodejs_express_apis",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\n```js\napp.get('/users', (req, res) => {\n  res.json({ users: [] });\n  console.log('after response');\n});\n```\n\nWhich statement is correct?",
    options: [
      { id: "A", text: "The console statement can still execute because sending the response does not terminate JavaScript execution" },
      { id: "B", text: "The console statement can never execute" },
      { id: "C", text: "Express restarts the handler after `res.json()`" },
      { id: "D", text: "res.json() throws automatically after sending" }
    ],
    correctOptionId: "A",
    explanation: "Sending a response does not automatically stop execution of the current JavaScript function. Developers often use `return res.json(...)` when they want to exit the handler.",
    tags: ["express", "response", "control-flow"]
  },

  {
    id: "nodejs-express-apis-q-048",
    quizId: "quiz_nodejs_express_apis",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which pattern is useful when a route should immediately stop after sending an error response?",
    options: [
      { id: "A", text: "res.json(error); continue();" },
      { id: "B", text: "return res.status(400).json({ error: 'Invalid input' });" },
      { id: "C", text: "res.status(400); nextResponse();" },
      { id: "D", text: "res.errorAndRestart();" }
    ],
    correctOptionId: "B",
    explanation: "Returning the response expression exits the current route handler, preventing later code from accidentally attempting another response.",
    tags: ["express", "response", "control-flow"]
  },

  {
    id: "nodejs-express-apis-q-049",
    quizId: "quiz_nodejs_express_apis",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A route needs authentication before accessing `/api/profile`. Where is authentication middleware most appropriately placed?",
    options: [
      { id: "A", text: "After the protected route has already sent its response" },
      { id: "B", text: "Before the protected route handler, so unauthorized requests can be rejected" },
      { id: "C", text: "Only inside the frontend application" },
      { id: "D", text: "After `app.listen()` and outside the request pipeline" }
    ],
    correctOptionId: "B",
    explanation: "Authentication middleware should run before protected route logic so it can verify credentials and either continue or reject the request.",
    tags: ["express", "middleware", "authentication"]
  },

  {
    id: "nodejs-express-apis-q-050",
    quizId: "quiz_nodejs_express_apis",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design best represents a scalable Express API architecture?",
    options: [
      { id: "A", text: "Put every route, database query, validation rule, and business operation into one massive file" },
      { id: "B", text: "Let every route directly expose raw database records" },
      { id: "C", text: "Separate routing, middleware, validation, business logic, data access, and centralized error handling where appropriate" },
      { id: "D", text: "Avoid middleware entirely and duplicate authentication in every route" }
    ],
    correctOptionId: "C",
    explanation: "Separating responsibilities makes an Express API easier to maintain, test, secure, and extend as it grows.",
    tags: ["express", "architecture", "api-design", "scalability"]
  }
];

export default nodejsExpressApisQuestions;