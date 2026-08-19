const nodejsFileSystemQuestions = [
  {
    id: "nodejs-file-system-q-001",
    quizId: "quiz_nodejs_file_system",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which built-in Node.js module is primarily used for interacting with the file system?",
    options: [
      { id: "A", text: "path" },
      { id: "B", text: "stream" },
      { id: "C", text: "fs" },
      { id: "D", text: "file" }
    ],
    correctOptionId: "C",
    explanation: "Node.js provides the `fs` module for working with files and directories.",
    tags: ["fs", "filesystem"]
  },

  {
    id: "nodejs-file-system-q-002",
    quizId: "quiz_nodejs_file_system",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method reads an entire file asynchronously?",
    options: [
      { id: "A", text: "fs.readFile()" },
      { id: "B", text: "fs.read()" },
      { id: "C", text: "fs.openFile()" },
      { id: "D", text: "fs.load()" }
    ],
    correctOptionId: "A",
    explanation: "`fs.readFile()` asynchronously reads the entire contents of a file.",
    tags: ["fs", "readFile"]
  },

  {
    id: "nodejs-file-system-q-003",
    quizId: "quiz_nodejs_file_system",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What type of value does `fs.readFile()` return when no encoding is specified?",
    options: [
      { id: "A", text: "A JavaScript string" },
      { id: "B", text: "A Buffer" },
      { id: "C", text: "A JSON object" },
      { id: "D", text: "An ArrayBuffer only" }
    ],
    correctOptionId: "B",
    explanation: "Without an encoding such as `utf8`, Node.js returns the file contents as a Buffer.",
    tags: ["fs", "buffer", "readFile"]
  },

  {
    id: "nodejs-file-system-q-004",
    quizId: "quiz_nodejs_file_system",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "How can you make `fs.readFile()` return text instead of a Buffer?",
    options: [
      { id: "A", text: "Pass an encoding such as `utf8`" },
      { id: "B", text: "Pass `{ text: true }`" },
      { id: "C", text: "Call `.toJSON()` first" },
      { id: "D", text: "Use `fs.textFile()`" }
    ],
    correctOptionId: "A",
    explanation: "Providing an encoding such as `'utf8'` causes `fs.readFile()` to return a string.",
    tags: ["fs", "encoding"]
  },

  {
    id: "nodejs-file-system-q-005",
    quizId: "quiz_nodejs_file_system",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method writes data to a file asynchronously?",
    options: [
      { id: "A", text: "fs.putFile()" },
      { id: "B", text: "fs.save()" },
      { id: "C", text: "fs.writeFile()" },
      { id: "D", text: "fs.writeData()" }
    ],
    correctOptionId: "C",
    explanation: "`fs.writeFile()` asynchronously writes data to a file, replacing the file by default if it already exists.",
    tags: ["fs", "writeFile"]
  },

  {
    id: "nodejs-file-system-q-006",
    quizId: "quiz_nodejs_file_system",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens by default when `fs.writeFile()` writes to an existing file?",
    options: [
      { id: "A", text: "The new data is appended" },
      { id: "B", text: "The existing file contents are replaced" },
      { id: "C", text: "The operation always fails" },
      { id: "D", text: "A second file is automatically created" }
    ],
    correctOptionId: "B",
    explanation: "`fs.writeFile()` uses the write flag by default, replacing existing contents.",
    tags: ["fs", "writeFile"]
  },

  {
    id: "nodejs-file-system-q-007",
    quizId: "quiz_nodejs_file_system",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method is appropriate when you want to append data to an existing file?",
    options: [
      { id: "A", text: "fs.appendFile()" },
      { id: "B", text: "fs.addFile()" },
      { id: "C", text: "fs.pushFile()" },
      { id: "D", text: "fs.extendFile()" }
    ],
    correctOptionId: "A",
    explanation: "`fs.appendFile()` adds data to the end of an existing file.",
    tags: ["fs", "appendFile"]
  },

  {
    id: "nodejs-file-system-q-008",
    quizId: "quiz_nodejs_file_system",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method can remove a file?",
    options: [
      { id: "A", text: "fs.deleteFile()" },
      { id: "B", text: "fs.unlink()" },
      { id: "C", text: "fs.removeFile()" },
      { id: "D", text: "fs.destroyFile()" }
    ],
    correctOptionId: "B",
    explanation: "`fs.unlink()` removes a file from the file system.",
    tags: ["fs", "unlink"]
  },

  {
    id: "nodejs-file-system-q-009",
    quizId: "quiz_nodejs_file_system",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method creates a directory?",
    options: [
      { id: "A", text: "fs.mkdir()" },
      { id: "B", text: "fs.createFolder()" },
      { id: "C", text: "fs.directory()" },
      { id: "D", text: "fs.makeDirSyncOnly()" }
    ],
    correctOptionId: "A",
    explanation: "`fs.mkdir()` creates a directory.",
    tags: ["fs", "directories"]
  },

  {
    id: "nodejs-file-system-q-010",
    quizId: "quiz_nodejs_file_system",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method reads the names of entries inside a directory?",
    options: [
      { id: "A", text: "fs.files()" },
      { id: "B", text: "fs.directoryList()" },
      { id: "C", text: "fs.readdir()" },
      { id: "D", text: "fs.listDirectory()" }
    ],
    correctOptionId: "C",
    explanation: "`fs.readdir()` reads the contents of a directory.",
    tags: ["fs", "directories", "readdir"]
  },

  {
    id: "nodejs-file-system-q-011",
    quizId: "quiz_nodejs_file_system",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method checks information about a file or directory?",
    options: [
      { id: "A", text: "fs.inspect()" },
      { id: "B", text: "fs.stat()" },
      { id: "C", text: "fs.info()" },
      { id: "D", text: "fs.details()" }
    ],
    correctOptionId: "B",
    explanation: "`fs.stat()` retrieves metadata about a file or directory.",
    tags: ["fs", "stat"]
  },

  {
    id: "nodejs-file-system-q-012",
    quizId: "quiz_nodejs_file_system",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which `fs` API is synchronous?",
    options: [
      { id: "A", text: "fs.readFile()" },
      { id: "B", text: "fs.readFileSync()" },
      { id: "C", text: "fs.readAsync()" },
      { id: "D", text: "fs.readPromise()" }
    ],
    correctOptionId: "B",
    explanation: "Methods ending in `Sync`, such as `fs.readFileSync()`, perform synchronous file-system operations.",
    tags: ["fs", "sync"]
  },

  {
    id: "nodejs-file-system-q-013",
    quizId: "quiz_nodejs_file_system",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should synchronous file-system operations generally be avoided in a request handler for a high-throughput Node.js server?",
    options: [
      { id: "A", text: "They cannot read files larger than 1 MB" },
      { id: "B", text: "They require Express" },
      { id: "C", text: "They can block the event loop while the operation completes" },
      { id: "D", text: "They always corrupt files" }
    ],
    correctOptionId: "C",
    explanation: "Synchronous file-system operations block the JavaScript thread, potentially delaying other requests and callbacks.",
    tags: ["fs", "sync", "performance"]
  },

  {
    id: "nodejs-file-system-q-014",
    quizId: "quiz_nodejs_file_system",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Buffer in Node.js?",
    options: [
      { id: "A", text: "An object used to work with raw binary data" },
      { id: "B", text: "A replacement for JavaScript arrays" },
      { id: "C", text: "A database cache" },
      { id: "D", text: "A file-system path object" }
    ],
    correctOptionId: "A",
    explanation: "Buffers provide a way to work with sequences of bytes, which is important for files, sockets, and other binary data.",
    tags: ["buffer", "binary"]
  },

  {
    id: "nodejs-file-system-q-015",
    quizId: "quiz_nodejs_file_system",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which expression creates a Buffer from UTF-8 text?",
    options: [
      { id: "A", text: "Buffer.text('hello')" },
      { id: "B", text: "Buffer.from('hello')" },
      { id: "C", text: "new BufferText('hello')" },
      { id: "D", text: "Buffer.createString('hello')" }
    ],
    correctOptionId: "B",
    explanation: "`Buffer.from()` creates a Buffer from strings and other supported input values.",
    tags: ["buffer", "encoding"]
  },

  {
    id: "nodejs-file-system-q-016",
    quizId: "quiz_nodejs_file_system",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main advantage of a stream when processing a very large file?",
    options: [
      { id: "A", text: "It automatically compresses the file" },
      { id: "B", text: "It allows data to be processed incrementally instead of loading the entire file into memory" },
      { id: "C", text: "It makes the file smaller on disk" },
      { id: "D", text: "It eliminates all I/O operations" }
    ],
    correctOptionId: "B",
    explanation: "Streams process data in chunks, which can significantly reduce memory usage for large files.",
    tags: ["streams", "memory"]
  },

  {
    id: "nodejs-file-system-q-017",
    quizId: "quiz_nodejs_file_system",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method creates a readable stream for a file?",
    options: [
      { id: "A", text: "fs.readStream()" },
      { id: "B", text: "fs.createReadStream()" },
      { id: "C", text: "fs.openReadStream()" },
      { id: "D", text: "fs.streamRead()" }
    ],
    correctOptionId: "B",
    explanation: "`fs.createReadStream()` creates a readable stream that reads a file incrementally.",
    tags: ["streams", "fs", "read"]
  },

  {
    id: "nodejs-file-system-q-018",
    quizId: "quiz_nodejs_file_system",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method creates a writable stream for a file?",
    options: [
      { id: "A", text: "fs.createWriteStream()" },
      { id: "B", text: "fs.writeStream()" },
      { id: "C", text: "fs.openWrite()" },
      { id: "D", text: "fs.streamWriteFile()" }
    ],
    correctOptionId: "A",
    explanation: "`fs.createWriteStream()` creates a writable stream for writing data to a file.",
    tags: ["streams", "fs", "write"]
  },

  {
    id: "nodejs-file-system-q-019",
    quizId: "quiz_nodejs_file_system",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which stream method connects a readable stream to a writable stream?",
    options: [
      { id: "A", text: "connect()" },
      { id: "B", text: "transfer()" },
      { id: "C", text: "pipe()" },
      { id: "D", text: "forward()" }
    ],
    correctOptionId: "C",
    explanation: "`readable.pipe(writable)` sends data from the readable stream into the writable stream.",
    tags: ["streams", "pipe"]
  },

  {
    id: "nodejs-file-system-q-020",
    quizId: "quiz_nodejs_file_system",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this code primarily do?\n\n```js\nfs.createReadStream('input.txt')\n  .pipe(fs.createWriteStream('copy.txt'));\n```",
    options: [
      { id: "A", text: "Deletes input.txt" },
      { id: "B", text: "Reads input.txt and streams its data into copy.txt" },
      { id: "C", text: "Converts input.txt into JSON" },
      { id: "D", text: "Loads the entire file into memory first" }
    ],
    correctOptionId: "B",
    explanation: "The readable stream supplies file data to the writable stream through `pipe()`.",
    tags: ["streams", "pipe", "files"]
  },

  {
    id: "nodejs-file-system-q-021",
    quizId: "quiz_nodejs_file_system",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which event is commonly emitted by a readable stream when a chunk of data is available?",
    options: [
      { id: "A", text: "data" },
      { id: "B", text: "chunkReadyOnly" },
      { id: "C", text: "receive" },
      { id: "D", text: "chunk" }
    ],
    correctOptionId: "A",
    explanation: "Readable streams can emit `data` events when data chunks are available in flowing mode.",
    tags: ["streams", "data"]
  },

  {
    id: "nodejs-file-system-q-022",
    quizId: "quiz_nodejs-file_system",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which event indicates that a readable stream has no more data to provide?",
    options: [
      { id: "A", text: "close" },
      { id: "B", text: "finish" },
      { id: "C", text: "end" },
      { id: "D", text: "complete" }
    ],
    correctOptionId: "C",
    explanation: "Readable streams emit `end` when all available data has been consumed.",
    tags: ["streams", "end"]
  },

  {
    id: "nodejs-file-system-q-023",
    quizId: "quiz_nodejs_file_system",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which event is associated with a writable stream finishing its writes?",
    options: [
      { id: "A", text: "finish" },
      { id: "B", text: "end" },
      { id: "C", text: "done" },
      { id: "D", text: "written" }
    ],
    correctOptionId: "A",
    explanation: "Writable streams emit `finish` after `end()` has been called and all data has been flushed.",
    tags: ["streams", "writable"]
  },

  {
    id: "nodejs-file-system-q-024",
    quizId: "quiz_nodejs_file_system",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `error` event on a stream indicate?",
    options: [
      { id: "A", text: "The stream has successfully completed" },
      { id: "B", text: "An error occurred during stream operation" },
      { id: "C", text: "The stream automatically switched to synchronous mode" },
      { id: "D", text: "The stream received an empty chunk" }
    ],
    correctOptionId: "B",
    explanation: "Streams emit `error` when an error occurs during their operation.",
    tags: ["streams", "errors"]
  },

  {
    id: "nodejs-file-system-q-025",
    quizId: "quiz_nodejs_file_system",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is backpressure in a stream?",
    options: [
      { id: "A", text: "A file being compressed twice" },
      { id: "B", text: "A readable source producing data faster than the destination can consume it" },
      { id: "C", text: "A stream being automatically reversed" },
      { id: "D", text: "A network connection being encrypted" }
    ],
    correctOptionId: "B",
    explanation: "Backpressure occurs when the producer is faster than the consumer. Streams provide mechanisms to regulate data flow.",
    tags: ["streams", "backpressure"]
  },

  {
    id: "nodejs-file-system-q-026",
    quizId: "quiz_nodejs_file_system",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is `pipe()` useful beyond simply reducing code?",
    options: [
      { id: "A", text: "It can coordinate data flow between streams and handle backpressure" },
      { id: "B", text: "It makes every stream synchronous" },
      { id: "C", text: "It converts all data into JSON" },
      { id: "D", text: "It stores the entire source in memory" }
    ],
    correctOptionId: "A",
    explanation: "`pipe()` connects streams in a way that coordinates flow and respects backpressure.",
    tags: ["streams", "pipe", "backpressure"]
  },

  {
    id: "nodejs-file-system-q-027",
    quizId: "quiz_nodejs_file_system",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `highWaterMark` generally control for a stream?",
    options: [
      { id: "A", text: "The maximum file size on disk" },
      { id: "B", text: "A buffering threshold used to manage how much data the stream keeps in memory" },
      { id: "C", text: "The encryption strength of the stream" },
      { id: "D", text: "The number of CPU cores available" }
    ],
    correctOptionId: "B",
    explanation: "`highWaterMark` is a buffering threshold that influences stream flow behavior and buffering.",
    tags: ["streams", "highWaterMark"]
  },

  {
    id: "nodejs-file-system-q-028",
    quizId: "quiz_nodejs_file_system",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a readable stream's `read()` method do?",
    options: [
      { id: "A", text: "Requests data from the internal readable buffer" },
      { id: "B", text: "Creates a new file automatically" },
      { id: "C", text: "Converts the stream to JSON" },
      { id: "D", text: "Closes the file descriptor immediately" }
    ],
    correctOptionId: "A",
    explanation: "Readable streams expose `read()` for retrieving data from their internal buffer in non-flowing/readable mode.",
    tags: ["streams", "read"]
  },

  {
    id: "nodejs-file-system-q-029",
    quizId: "quiz_nodejs_file_system",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which stream type is designed for both reading and writing?",
    options: [
      { id: "A", text: "Readable" },
      { id: "B", text: "Writable" },
      { id: "C", text: "Duplex" },
      { id: "D", text: "Static" }
    ],
    correctOptionId: "C",
    explanation: "A Duplex stream has independently readable and writable sides.",
    tags: ["streams", "duplex"]
  },

  {
    id: "nodejs-file-system-q-030",
    quizId: "quiz_nodejs_file_system",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Transform stream?",
    options: [
      { id: "A", text: "A stream that can transform data as it passes through" },
      { id: "B", text: "A stream that only reads files synchronously" },
      { id: "C", text: "A stream that can only write strings" },
      { id: "D", text: "A stream that disables backpressure" }
    ],
    correctOptionId: "A",
    explanation: "Transform streams are Duplex streams where output is related to transformed input.",
    tags: ["streams", "transform"]
  },

  {
    id: "nodejs-file-system-q-031",
    quizId: "quiz_nodejs_file_system",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which built-in module provides the `Readable`, `Writable`, and `Transform` stream classes?",
    options: [
      { id: "A", text: "buffer" },
      { id: "B", text: "stream" },
      { id: "C", text: "events-only" },
      { id: "D", text: "fs-streams-only" }
    ],
    correctOptionId: "B",
    explanation: "Node's `stream` module provides the core stream abstractions.",
    tags: ["streams", "module"]
  },

  {
    id: "nodejs-file-system-q-032",
    quizId: "quiz_nodejs_file_system",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `path.join()` do?",
    options: [
      { id: "A", text: "Reads a file from disk" },
      { id: "B", text: "Creates a directory" },
      { id: "C", text: "Combines path segments using the platform's path separator" },
      { id: "D", text: "Converts a path into a Buffer" }
    ],
    correctOptionId: "C",
    explanation: "`path.join()` combines path segments and normalizes the resulting path.",
    tags: ["path", "filesystem"]
  },

  {
    id: "nodejs-file-system-q-033",
    quizId: "quiz_nodejs_file_system",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is `path.join()` preferable to manually concatenating paths with `/`?",
    options: [
      { id: "A", text: "It automatically encrypts the path" },
      { id: "B", text: "It handles platform-specific path separators and normalization" },
      { id: "C", text: "It guarantees the file exists" },
      { id: "D", text: "It creates missing directories" }
    ],
    correctOptionId: "B",
    explanation: "Node's path utilities make path construction more portable across operating systems.",
    tags: ["path", "cross-platform"]
  },

  {
    id: "nodejs-file-system-q-034",
    quizId: "quiz_nodejs_file_system",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `path.resolve()` generally produce?",
    options: [
      { id: "A", text: "A JSON representation of the path" },
      { id: "B", text: "A relative path containing no separators" },
      { id: "C", text: "An absolute path based on the supplied path segments" },
      { id: "D", text: "A Buffer containing the path" }
    ],
    correctOptionId: "C",
    explanation: "`path.resolve()` resolves a sequence of paths into an absolute path.",
    tags: ["path", "resolve"]
  },

  {
    id: "nodejs-file-system-q-035",
    quizId: "quiz_nodejs_file_system",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between `path.basename('/app/data/file.txt')` and `path.dirname('/app/data/file.txt')`?",
    options: [
      { id: "A", text: "basename gives `file.txt`, while dirname gives `/app/data`" },
      { id: "B", text: "basename gives `/app/data`, while dirname gives `file.txt`" },
      { id: "C", text: "Both return `/app/data/file.txt`" },
      { id: "D", text: "Both return `file.txt`" }
    ],
    correctOptionId: "A",
    explanation: "`basename()` extracts the final component, while `dirname()` returns the directory portion.",
    tags: ["path", "basename", "dirname"]
  },

  {
    id: "nodejs-file-system-q-036",
    quizId: "quiz_nodejs_file_system",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can directly concatenating user input into a file path be dangerous?",
    options: [
      { id: "A", text: "It always causes a syntax error" },
      { id: "B", text: "It can enable path traversal, allowing access to files outside the intended directory" },
      { id: "C", text: "It makes the file read-only" },
      { id: "D", text: "It automatically deletes parent directories" }
    ],
    correctOptionId: "B",
    explanation: "Untrusted path components can contain traversal sequences such as `../`, potentially allowing access outside an intended directory.",
    tags: ["path", "security", "path-traversal"]
  },

  {
    id: "nodejs-file-system-q-037",
    quizId: "quiz_nodejs_file_system",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "A server lets users request `/files/<filename>`. Which is the safest general approach?",
    options: [
      { id: "A", text: "Concatenate the filename directly with the server's root path" },
      { id: "B", text: "Trust the filename because it came from an HTTP request" },
      { id: "C", text: "Validate/normalize the requested path and ensure the resolved path stays inside the allowed directory" },
      { id: "D", text: "Replace every slash with a space" }
    ],
    correctOptionId: "C",
    explanation: "File-serving endpoints should validate untrusted input and enforce the intended directory boundary.",
    tags: ["security", "path", "path-traversal"]
  },

  {
    id: "nodejs-file-system-q-038",
    quizId: "quiz_nodejs_file_system",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes the relationship between a file stream and a Buffer?",
    options: [
      { id: "A", text: "A stream can deliver file data incrementally as chunks, commonly represented as Buffers" },
      { id: "B", text: "Buffers can only contain text" },
      { id: "C", text: "Streams and Buffers are the same abstraction" },
      { id: "D", text: "Streams cannot work with binary data" }
    ],
    correctOptionId: "A",
    explanation: "File streams commonly deliver chunks of binary data represented by Buffers.",
    tags: ["streams", "buffer"]
  },

  {
    id: "nodejs-file-system-q-039",
    quizId: "quiz_nodejs_file_system",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "A 5 GB log file needs to be sent to a client. Why is `fs.createReadStream()` generally preferable to `fs.readFile()`?",
    options: [
      { id: "A", text: "readFile() cannot open log files" },
      { id: "B", text: "createReadStream() can process the file incrementally instead of requiring the entire file in memory" },
      { id: "C", text: "createReadStream() compresses every file automatically" },
      { id: "D", text: "readFile() always converts files to JSON" }
    ],
    correctOptionId: "B",
    explanation: "A readable stream allows large data to be transferred incrementally, reducing memory pressure.",
    tags: ["streams", "performance", "memory"]
  },

  {
    id: "nodejs-file-system-q-040",
    quizId: "quiz_nodejs_file_system",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is most appropriate for copying a very large file while keeping memory usage reasonable?",
    options: [
      { id: "A", text: "Read the entire file into a string and then write it" },
      { id: "B", text: "Read the file using a stream and pipe it into a write stream" },
      { id: "C", text: "Convert the file to JSON first" },
      { id: "D", text: "Use repeated synchronous reads on the main thread" }
    ],
    correctOptionId: "B",
    explanation: "Streaming the file from a readable stream to a writable stream processes it incrementally.",
    tags: ["streams", "pipe", "performance"]
  },

  {
    id: "nodejs-file-system-q-041",
    quizId: "quiz_nodejs_file_system",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of a file descriptor?",
    options: [
      { id: "A", text: "It identifies an open file or other I/O resource within the operating system process" },
      { id: "B", text: "It stores the complete contents of the file" },
      { id: "C", text: "It is always the file's URL" },
      { id: "D", text: "It is a JavaScript class containing the file extension" }
    ],
    correctOptionId: "A",
    explanation: "A file descriptor is an OS-level identifier for an open file or I/O resource.",
    tags: ["fs", "file-descriptor"]
  },

  {
    id: "nodejs-file-system-q-042",
    quizId: "quiz_nodejs_file_system",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is it important to close file descriptors when you are finished with them?",
    options: [
      { id: "A", text: "Closing them changes the file extension" },
      { id: "B", text: "Open descriptors consume operating-system resources and can accumulate if not released" },
      { id: "C", text: "The file becomes encrypted otherwise" },
      { id: "D", text: "Node.js cannot create another file afterward" }
    ],
    correctOptionId: "B",
    explanation: "Open file descriptors consume OS resources. Properly releasing them helps avoid resource exhaustion.",
    tags: ["fs", "file-descriptor", "resources"]
  },

  {
    id: "nodejs-file-system-q-043",
    quizId: "quiz_nodejs_file_system",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which `fs` API is designed for opening a file and obtaining a file handle in modern Promise-based Node.js code?",
    options: [
      { id: "A", text: "fs.open()" },
      { id: "B", text: "fs.fileHandle()" },
      { id: "C", text: "fs.promises.open()" },
      { id: "D", text: "fs.getHandle()" }
    ],
    correctOptionId: "C",
    explanation: "`fs.promises.open()` provides a Promise-based API for opening files and obtaining a FileHandle.",
    tags: ["fs", "promises", "file-handle"]
  },

  {
    id: "nodejs-file-system-q-044",
    quizId: "quiz_nodejs_file_system",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a practical advantage of the Promise-based `fs/promises` API?",
    options: [
      { id: "A", text: "It removes the need for the operating system" },
      { id: "B", text: "It makes every file operation synchronous" },
      { id: "C", text: "It provides file-system operations that work naturally with async/await and Promises" },
      { id: "D", text: "It automatically stores files in memory" }
    ],
    correctOptionId: "C",
    explanation: "The Promise-based API integrates naturally with modern asynchronous JavaScript using `await` and Promise composition.",
    tags: ["fs", "promises", "async-await"]
  },

  {
    id: "nodejs-file-system-q-045",
    quizId: "quiz_nodejs_file_system",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Suppose `data.txt` does not exist. What should well-designed code do when `fs.readFile()` fails?",
    options: [
      { id: "A", text: "Ignore the error because file operations never fail" },
      { id: "B", text: "Handle the rejected Promise or callback error appropriately" },
      { id: "C", text: "Create an unrelated database table" },
      { id: "D", text: "Retry forever without any limit" }
    ],
    correctOptionId: "B",
    explanation: "File operations can fail for many reasons, so asynchronous errors should be explicitly handled.",
    tags: ["fs", "errors", "async"]
  },

  {
    id: "nodejs-file-system-q-046",
    quizId: "quiz_nodejs_file_system",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which error is commonly associated with trying to read a file that does not exist?",
    options: [
      { id: "A", text: "ENOENT" },
      { id: "B", text: "EJSON" },
      { id: "C", text: "NOBUFFER" },
      { id: "D", text: "FILEMISS" }
    ],
    correctOptionId: "A",
    explanation: "`ENOENT` generally indicates that a required file or directory does not exist.",
    tags: ["fs", "errors", "ENOENT"]
  },

  {
    id: "nodejs-file-system-q-047",
    quizId: "quiz_nodejs_file_system",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does the `encoding` option control when reading a text file?",
    options: [
      { id: "A", text: "The file's physical location" },
      { id: "B", text: "How the raw bytes are decoded into text" },
      { id: "C", text: "The number of CPU cores used" },
      { id: "D", text: "Whether the file exists" }
    ],
    correctOptionId: "B",
    explanation: "An encoding such as UTF-8 determines how bytes are interpreted as characters.",
    tags: ["fs", "encoding", "buffer"]
  },

  {
    id: "nodejs-file-system-q-048",
    quizId: "quiz_nodejs_file_system",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A stream-based image processing pipeline reads an image, transforms it, and writes the result. Which design best matches Node.js stream concepts?",
    options: [
      { id: "A", text: "Readable stream → Transform stream → Writable stream" },
      { id: "B", text: "Writable stream → Promise → directory" },
      { id: "C", text: "Buffer → synchronous loop → npm" },
      { id: "D", text: "Readable stream → JSON parser only → CPU thread" }
    ],
    correctOptionId: "A",
    explanation: "A readable source can feed a Transform stream that processes chunks before sending them to a writable destination.",
    tags: ["streams", "transform", "pipeline"]
  },

  {
    id: "nodejs-file_system-q-049",
    quizId: "quiz_nodejs_file_system",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can `stream.pipeline()` be preferable to manually chaining several streams with `pipe()`?",
    options: [
      { id: "A", text: "It converts streams into synchronous functions" },
      { id: "B", text: "It provides more robust handling of stream completion and errors across a pipeline" },
      { id: "C", text: "It loads every chunk into memory first" },
      { id: "D", text: "It prevents streams from handling binary data" }
    ],
    correctOptionId: "B",
    explanation: "`pipeline()` is designed to connect streams while providing coordinated cleanup and error handling.",
    tags: ["streams", "pipeline", "errors"]
  },

  {
    id: "nodejs-file-system-q-050",
    quizId: "quiz_nodejs_file_system",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A production Node.js application needs to serve multi-gigabyte files efficiently. Which approach is strongest?",
    options: [
      { id: "A", text: "Read the complete file into memory before sending it" },
      { id: "B", text: "Use synchronous file reads for every request" },
      { id: "C", text: "Use readable streams, pipe data to the response where appropriate, handle errors, and avoid loading the entire file into memory" },
      { id: "D", text: "Convert every file into a JavaScript object before responding" }
    ],
    correctOptionId: "C",
    explanation: "Streaming large files keeps memory usage manageable and allows data to be sent incrementally while errors and connection lifecycle are handled appropriately.",
    tags: ["streams", "performance", "http", "files"]
  }
];

export default nodejsFileSystemQuestions;