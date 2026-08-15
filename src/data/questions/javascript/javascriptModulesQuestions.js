const javascriptModulesQuestions = [
  {
    id: "javascript-modules-q-001",
    quizId: "quiz_javascript_modules",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a JavaScript module?",
    options: [
      { id: "A", text: "A JavaScript file whose code can have its own module scope and explicitly import or export values" },
      { id: "B", text: "A JavaScript object that can only contain functions" },
      { id: "C", text: "A browser-only API for manipulating HTML" },
      { id: "D", text: "A special type of JSON file" }
    ],
    correctOptionId: "A",
    explanation: "A module is a unit of JavaScript code with its own scope that can explicitly expose values with exports and consume values with imports.",
    tags: ["modules", "fundamentals", "module-scope"]
  },

  {
    id: "javascript-modules-q-002",
    quizId: "quiz_javascript_modules",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is one major benefit of using modules?",
    options: [
      { id: "A", text: "They help organize code into separate, reusable units with controlled dependencies" },
      { id: "B", text: "They eliminate the need for functions" },
      { id: "C", text: "They automatically make every variable global" },
      { id: "D", text: "They prevent JavaScript from running asynchronously" }
    ],
    correctOptionId: "A",
    explanation: "Modules improve organization, reuse, maintainability, and dependency management by separating code into explicit units.",
    tags: ["modules", "organization", "maintainability"]
  },

  {
    id: "javascript-modules-q-003",
    quizId: "quiz_javascript_modules",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What does this statement do?\n\nexport const username = \"Avi\";",
    options: [
      { id: "A", text: "Makes username available for import by other modules" },
      { id: "B", text: "Makes username a global browser variable" },
      { id: "C", text: "Imports username from another module" },
      { id: "D", text: "Deletes username after the module runs" }
    ],
    correctOptionId: "A",
    explanation: "`export` makes the declared binding available to other modules that import it.",
    tags: ["export", "named-exports", "ES-modules"]
  },

  {
    id: "javascript-modules-q-004",
    quizId: "quiz_javascript_modules",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What does this statement do?\n\nimport { username } from \"./user.js\";",
    options: [
      { id: "A", text: "Imports the named export username from user.js" },
      { id: "B", text: "Exports username from the current module" },
      { id: "C", text: "Creates a new global variable named username" },
      { id: "D", text: "Executes user.js without importing anything" }
    ],
    correctOptionId: "A",
    explanation: "The named import syntax `{ username }` requests the export named `username` from the specified module.",
    tags: ["import", "named-imports", "ES-modules"]
  },

  {
    id: "javascript-modules-q-005",
    quizId: "quiz_javascript_modules",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a named export?",
    options: [
      { id: "A", text: "An export identified by a specific exported name" },
      { id: "B", text: "An export that can only contain strings" },
      { id: "C", text: "An export that automatically becomes global" },
      { id: "D", text: "An export available only inside the same file" }
    ],
    correctOptionId: "A",
    explanation: "Named exports expose specific bindings under specific names, which consumers can import using matching names or aliases.",
    tags: ["named-exports", "exports", "ES-modules"]
  },

  {
    id: "javascript-modules-q-006",
    quizId: "quiz_javascript_modules",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "Which import correctly consumes this export?\n\nexport const add = (a, b) => a + b;",
    options: [
      { id: "A", text: "import { add } from \"./math.js\";" },
      { id: "B", text: "import add from \"./math.js\";" },
      { id: "C", text: "require { add } from \"./math.js\";" },
      { id: "D", text: "import { math } from \"./math.js\";" }
    ],
    correctOptionId: "A",
    explanation: "`add` is a named export, so it is imported using braces with the exported name.",
    tags: ["named-exports", "named-imports", "import"]
  },

  {
    id: "javascript-modules-q-007",
    quizId: "quiz_javascript_modules",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a default export?",
    options: [
      { id: "A", text: "The module's designated default exported value" },
      { id: "B", text: "The first variable declared in a file" },
      { id: "C", text: "An export that must always be a string" },
      { id: "D", text: "An export automatically created by Node.js" }
    ],
    correctOptionId: "A",
    explanation: "A module can have one default export, representing the module's primary exported value.",
    tags: ["default-export", "exports", "ES-modules"]
  },

  {
    id: "javascript-modules-q-008",
    quizId: "quiz_javascript_modules",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "Which syntax correctly imports the default export from a module?",
    options: [
      { id: "A", text: "import calculate from \"./math.js\";" },
      { id: "B", text: "import { calculate } from \"./math.js\";" },
      { id: "C", text: "import default calculate from \"./math.js\";" },
      { id: "D", text: "require default calculate from \"./math.js\";" }
    ],
    correctOptionId: "A",
    explanation: "A default import does not use braces. The importing module can choose the local name for the default export.",
    tags: ["default-import", "default-export", "import"]
  },

  {
    id: "javascript-modules-q-009",
    quizId: "quiz_javascript_modules",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What is exported by this module?\n\nexport default function greet() {\n  return \"Hello\";\n}",
    options: [
      { id: "A", text: "The function greet as the module's default export" },
      { id: "B", text: "A named export called default and a named export called greet" },
      { id: "C", text: "Only the string \"Hello\"" },
      { id: "D", text: "Nothing because functions cannot be exported" }
    ],
    correctOptionId: "A",
    explanation: "`export default` marks the function as the module's default export. The function can still have the local name `greet` within the module.",
    tags: ["default-export", "functions", "ES-modules"]
  },

  {
    id: "javascript-modules-q-010",
    quizId: "quiz_javascript_modules",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "How can this named export be imported under another local name?\n\nexport const calculateTotal = () => 100;",
    options: [
      { id: "A", text: "import { calculateTotal as total } from \"./cart.js\";" },
      { id: "B", text: "import total = calculateTotal from \"./cart.js\";" },
      { id: "C", text: "import { total } from \"./cart.js\";" },
      { id: "D", text: "import calculateTotal to total from \"./cart.js\";" }
    ],
    correctOptionId: "A",
    explanation: "The `as` keyword creates a local alias for a named import.",
    tags: ["named-imports", "aliases", "as"]
  },

  {
    id: "javascript-modules-q-011",
    quizId: "quiz_javascript_modules",
    order: 11,
    type: "code",
    difficulty: "Beginner",
    question: "Which syntax exports multiple existing bindings by name?",
    options: [
      { id: "A", text: "export { add, subtract };" },
      { id: "B", text: "export(add, subtract);" },
      { id: "C", text: "exports [add, subtract];" },
      { id: "D", text: "module.export(add, subtract);" }
    ],
    correctOptionId: "A",
    explanation: "An export list can expose existing local bindings using `export { ... }`.",
    tags: ["named-exports", "export-list", "ES-modules"]
  },

  {
    id: "javascript-modules-q-012",
    quizId: "quiz_javascript_modules",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "What does this syntax accomplish?\n\nexport { calculate as total };",
    options: [
      { id: "A", text: "Exports the local binding calculate under the name total" },
      { id: "B", text: "Imports total as calculate" },
      { id: "C", text: "Renames the local variable calculate to total" },
      { id: "D", text: "Creates a default export" }
    ],
    correctOptionId: "A",
    explanation: "The `as` keyword in an export list gives the exported binding a different public name without renaming the local variable.",
    tags: ["named-exports", "aliases", "as"]
  },

  {
    id: "javascript-modules-q-013",
    quizId: "quiz_javascript_modules",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Can an ES module have multiple named exports?",
    options: [
      { id: "A", text: "Yes" },
      { id: "B", text: "No, only one value can be exported" },
      { id: "C", text: "Only if the exports are functions" },
      { id: "D", text: "Only in Node.js" }
    ],
    correctOptionId: "A",
    explanation: "A module can expose many named exports. It can also have at most one default export.",
    tags: ["named-exports", "default-export", "ES-modules"]
  },

  {
    id: "javascript-modules-q-014",
    quizId: "quiz_javascript_modules",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "How many default exports can a single ES module have?",
    options: [
      { id: "A", text: "One" },
      { id: "B", text: "Two" },
      { id: "C", text: "Unlimited" },
      { id: "D", text: "None" }
    ],
    correctOptionId: "A",
    explanation: "An ES module can have one default export, while it may have multiple named exports.",
    tags: ["default-export", "ES-modules"]
  },

  {
    id: "javascript-modules-q-015",
    quizId: "quiz_javascript_modules",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What is the purpose of this HTML attribute?\n\n<script type=\"module\" src=\"main.js\"></script>",
    options: [
      { id: "A", text: "It tells the browser to treat main.js as an ES module" },
      { id: "B", text: "It tells the browser to execute main.js as CommonJS" },
      { id: "C", text: "It prevents main.js from executing" },
      { id: "D", text: "It converts main.js into TypeScript" }
    ],
    correctOptionId: "A",
    explanation: "The `type=\"module\"` attribute tells browsers to load and execute the script using ES module semantics.",
    tags: ["browser-modules", "script", "type-module"]
  },

  {
    id: "javascript-modules-q-016",
    quizId: "quiz_javascript_modules",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How does module scope differ from the traditional global script scope?",
    options: [
      { id: "A", text: "Top-level declarations in a module are scoped to that module rather than automatically becoming global variables" },
      { id: "B", text: "Every module variable automatically becomes a property of window" },
      { id: "C", text: "Modules cannot declare variables" },
      { id: "D", text: "Modules always share one global lexical scope" }
    ],
    correctOptionId: "A",
    explanation: "ES modules have their own top-level scope. Their declarations are not automatically exposed as globals.",
    tags: ["module-scope", "global-scope", "ES-modules"]
  },

  {
    id: "javascript-modules-q-017",
    quizId: "quiz_javascript_modules",
    order: 17,
    type: "code",
    difficulty: "Intermediate",
    question: "What is true about this module?\n\nconst secret = 42;\n\nexport const value = 10;",
    options: [
      { id: "A", text: "secret is private to the module unless it is exported, while value is available to importing modules" },
      { id: "B", text: "Both secret and value automatically become global variables" },
      { id: "C", text: "Neither variable exists after module evaluation" },
      { id: "D", text: "secret is automatically exported because value is exported" }
    ],
    correctOptionId: "A",
    explanation: "Only explicitly exported bindings are part of the module's public interface.",
    tags: ["module-scope", "exports", "encapsulation"]
  },

  {
    id: "javascript-modules-q-018",
    quizId: "quiz_javascript_modules",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an ES module's public API refer to?",
    options: [
      { id: "A", text: "The values that the module intentionally exposes through exports" },
      { id: "B", text: "Every variable declared inside the module" },
      { id: "C", text: "Only the module filename" },
      { id: "D", text: "The browser's global window object" }
    ],
    correctOptionId: "A",
    explanation: "Exports define what other modules are allowed to consume from a module's interface.",
    tags: ["module-api", "exports", "encapsulation"]
  },

  {
    id: "javascript-modules-q-019",
    quizId: "quiz_javascript_modules",
    order: 19,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the purpose of this syntax?\n\nimport * as utils from \"./utils.js\";",
    options: [
      { id: "A", text: "Imports the module's exported bindings into a namespace object called utils" },
      { id: "B", text: "Imports only the default export" },
      { id: "C", text: "Imports every variable from the module, including unexported variables" },
      { id: "D", text: "Renames the entire module file" }
    ],
    correctOptionId: "A",
    explanation: "Namespace imports provide access to the module's exports through an object-like namespace such as `utils.add`.",
    tags: ["namespace-import", "import", "ES-modules"]
  },

  {
    id: "javascript-modules-q-020",
    quizId: "quiz_javascript_modules",
    order: 20,
    type: "code",
    difficulty: "Intermediate",
    question: "Given this module:\n\nexport const add = (a, b) => a + b;\nexport const subtract = (a, b) => a - b;\n\nWhich expression accesses add after a namespace import?",
    options: [
      { id: "A", text: "utils.add" },
      { id: "B", text: "utils::add" },
      { id: "C", text: "utils[add]" },
      { id: "D", text: "add.utils" }
    ],
    correctOptionId: "A",
    explanation: "With `import * as utils`, exported names are accessed as properties such as `utils.add`.",
    tags: ["namespace-import", "named-exports", "module-api"]
  },

  {
    id: "javascript-modules-q-021",
    quizId: "quiz_javascript_modules",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a relative module path such as \"./utils.js\" indicate?",
    options: [
      { id: "A", text: "A module located relative to the importing module's location" },
      { id: "B", text: "A module installed globally on the operating system" },
      { id: "C", text: "A module that must exist on a remote server" },
      { id: "D", text: "A built-in JavaScript module" }
    ],
    correctOptionId: "A",
    explanation: "`./` represents the current directory context, so the path is resolved relative to the importing module.",
    tags: ["module-paths", "relative-imports", "ES-modules"]
  },

  {
    id: "javascript-modules-q-022",
    quizId: "quiz_javascript_modules",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does ../ in an import path generally mean?",
    options: [
      { id: "A", text: "Move to the parent directory when resolving the path" },
      { id: "B", text: "Load a package from npm" },
      { id: "C", text: "Load the module asynchronously" },
      { id: "D", text: "Access the global scope" }
    ],
    correctOptionId: "A",
    explanation: "`../` refers to the parent directory relative to the current module's location.",
    tags: ["module-paths", "relative-imports", "file-system"]
  },

  {
    id: "javascript-modules-q-023",
    quizId: "quiz_javascript_modules",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when an ES module imports another module?",
    options: [
      { id: "A", text: "The imported module is evaluated according to the module system's dependency rules and its exports become available to the importer" },
      { id: "B", text: "The imported file is copied into the importer as plain text" },
      { id: "C", text: "Only functions from the imported module execute" },
      { id: "D", text: "The imported module automatically becomes global" }
    ],
    correctOptionId: "A",
    explanation: "ES modules form a dependency graph. Imported modules are loaded and evaluated as required, and their exported bindings become available to the importer.",
    tags: ["module-loading", "dependency-graph", "ES-modules"]
  },

  {
    id: "javascript-modules-q-024",
    quizId: "quiz_javascript_modules",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a module dependency graph?",
    options: [
      { id: "A", text: "The network of modules connected through their import and export relationships" },
      { id: "B", text: "A graph of DOM elements created by each module" },
      { id: "C", text: "A list containing only npm packages" },
      { id: "D", text: "A graph of JavaScript variables in memory" }
    ],
    correctOptionId: "A",
    explanation: "Modules form a graph because one module can import from another, which can itself import additional modules.",
    tags: ["dependency-graph", "modules", "architecture"]
  },

  {
    id: "javascript-modules-q-025",
    quizId: "quiz_javascript_modules",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is CommonJS?",
    options: [
      { id: "A", text: "A module system historically associated with Node.js that commonly uses require() and module.exports" },
      { id: "B", text: "A browser-only replacement for HTML modules" },
      { id: "C", text: "A CSS module system" },
      { id: "D", text: "A JavaScript class inheritance mechanism" }
    ],
    correctOptionId: "A",
    explanation: "CommonJS is a module system widely used in Node.js ecosystems, using constructs such as `require()` and `module.exports`.",
    tags: ["CommonJS", "Node.js", "modules"]
  },

  {
    id: "javascript-modules-q-026",
    quizId: "quiz_javascript_modules",
    order: 26,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this CommonJS statement do?\n\nconst math = require(\"./math\");",
    options: [
      { id: "A", text: "Loads the exported value from the ./math module into the local variable math" },
      { id: "B", text: "Exports math from the current module" },
      { id: "C", text: "Creates a new npm package named math" },
      { id: "D", text: "Deletes the math module from cache" }
    ],
    correctOptionId: "A",
    explanation: "`require()` loads a CommonJS module and returns the value assigned to that module's exports.",
    tags: ["CommonJS", "require", "modules"]
  },

  {
    id: "javascript-modules-q-027",
    quizId: "quiz_javascript_modules",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this CommonJS code expose?\n\nmodule.exports = {\n  add,\n  subtract\n};",
    options: [
      { id: "A", text: "An object containing add and subtract as exported properties" },
      { id: "B", text: "Two ES module named exports" },
      { id: "C", text: "Only the add function" },
      { id: "D", text: "Nothing because CommonJS cannot export objects" }
    ],
    correctOptionId: "A",
    explanation: "`module.exports` is the value returned by `require()`. Here that value is an object with `add` and `subtract` properties.",
    tags: ["CommonJS", "module.exports", "exports"]
  },

  {
    id: "javascript-modules-q-028",
    quizId: "quiz_javascript_modules",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which pair is most strongly associated with CommonJS?",
    options: [
      { id: "A", text: "require() and module.exports" },
      { id: "B", text: "import and export default" },
      { id: "C", text: "extends and super" },
      { id: "D", text: "async and await" }
    ],
    correctOptionId: "A",
    explanation: "`require()` and `module.exports` are core CommonJS constructs.",
    tags: ["CommonJS", "require", "module.exports"]
  },

  {
    id: "javascript-modules-q-029",
    quizId: "quiz_javascript_modules",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which pair is associated with ES Modules?",
    options: [
      { id: "A", text: "import and export" },
      { id: "B", text: "require and module.exports" },
      { id: "C", text: "include and expose" },
      { id: "D", text: "load and unload" }
    ],
    correctOptionId: "A",
    explanation: "ES Modules use the standardized `import` and `export` syntax.",
    tags: ["ES-modules", "import", "export"]
  },

  {
    id: "javascript-modules-q-030",
    quizId: "quiz_javascript_modules",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should a project generally avoid mixing module systems unnecessarily?",
    options: [
      { id: "A", text: "Different module systems have different semantics and tooling expectations, which can complicate configuration and interoperability" },
      { id: "B", text: "JavaScript allows only one module file in a project" },
      { id: "C", text: "ES Modules cannot contain functions" },
      { id: "D", text: "CommonJS automatically deletes ES Modules" }
    ],
    correctOptionId: "A",
    explanation: "Mixing systems can be valid in some environments, but it introduces interoperability and configuration concerns that should be handled deliberately.",
    tags: ["CommonJS", "ES-modules", "architecture"]
  },

  {
    id: "javascript-modules-q-031",
    quizId: "quiz_javascript_modules",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this syntax mean?\n\nexport { default as Button } from \"./Button.js\";",
    options: [
      { id: "A", text: "Re-exports the default export from Button.js under the named export Button" },
      { id: "B", text: "Imports Button locally and creates a new class" },
      { id: "C", text: "Exports every variable from Button.js" },
      { id: "D", text: "Converts Button.js into CommonJS" }
    ],
    correctOptionId: "A",
    explanation: "This is a re-export. It exposes another module's default export under the name `Button` without creating a local binding in the current module.",
    tags: ["re-export", "default-export", "module-organization"]
  },

  {
    id: "javascript-modules-q-032",
    quizId: "quiz_javascript_modules",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a barrel file commonly used for?",
    options: [
      { id: "A", text: "Re-exporting related modules through a single entry point" },
      { id: "B", text: "Storing binary data for Node.js" },
      { id: "C", text: "Replacing package.json" },
      { id: "D", text: "Preventing all modules from importing one another" }
    ],
    correctOptionId: "A",
    explanation: "A barrel file commonly gathers exports from multiple modules, allowing consumers to import related functionality from one location.",
    tags: ["barrel-files", "re-exports", "module-organization"]
  },

  {
    id: "javascript-modules-q-033",
    quizId: "quiz_javascript_modules",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "Consider this file:\n\nexport { add } from \"./math.js\";\nexport { formatCurrency } from \"./currency.js\";\n\nWhat is the role of this file?",
    options: [
      { id: "A", text: "It acts as an entry point that re-exports functionality from other modules" },
      { id: "B", text: "It creates copies of both functions in memory manually" },
      { id: "C", text: "It converts both files into CommonJS" },
      { id: "D", text: "It prevents either function from being imported elsewhere" }
    ],
    correctOptionId: "A",
    explanation: "The file does not need to implement the functionality itself. It exposes selected exports from other modules through its own public interface.",
    tags: ["barrel-files", "re-exports", "module-api"]
  },

  {
    id: "javascript-modules-q-034",
    quizId: "quiz_javascript_modules",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does tree shaking generally refer to in modern JavaScript tooling?",
    options: [
      { id: "A", text: "Removing unused statically analyzable module exports from a production bundle" },
      { id: "B", text: "Deleting files from the source repository" },
      { id: "C", text: "Removing all asynchronous code" },
      { id: "D", text: "Converting CommonJS into CSS" }
    ],
    correctOptionId: "A",
    explanation: "Bundlers can analyze static ES module dependencies and remove code that is not used, reducing production bundle size.",
    tags: ["tree-shaking", "bundlers", "ES-modules", "performance"]
  },

  {
    id: "javascript-modules-q-035",
    quizId: "quiz_javascript_modules",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are ES module imports and exports particularly useful for static analysis?",
    options: [
      { id: "A", text: "Their syntax is statically structured, allowing tooling to analyze dependency relationships before execution" },
      { id: "B", text: "They are always executed at runtime using eval()" },
      { id: "C", text: "They automatically contain type information" },
      { id: "D", text: "They cannot reference other files" }
    ],
    correctOptionId: "A",
    explanation: "ES module dependency syntax is statically analyzable, which helps bundlers and development tools understand the module graph.",
    tags: ["static-analysis", "ES-modules", "bundlers"]
  },

  {
    id: "javascript-modules-q-036",
    quizId: "quiz_javascript_modules",
    order: 36,
    type: "code",
    difficulty: "Advanced",
    question: "What is special about ES module bindings when an exported variable changes?",
    options: [
      { id: "A", text: "Imports are live bindings that reflect updates to the exported binding" },
      { id: "B", text: "Imports are always deep copies of the exported value" },
      { id: "C", text: "Imports automatically become global variables" },
      { id: "D", text: "The exporting module is reloaded every time the variable changes" }
    ],
    correctOptionId: "A",
    explanation: "ES module imports are live bindings. The importer receives access to the exported binding rather than a simple independent copy of its value.",
    tags: ["live-bindings", "exports", "imports"]
  },

  {
    id: "javascript-modules-q-037",
    quizId: "quiz_javascript_modules",
    order: 37,
    type: "code",
    difficulty: "Advanced",
    question: "Which statement about an imported binding is correct?\n\nimport { count } from \"./counter.js\";",
    options: [
      { id: "A", text: "The importing module cannot directly reassign count" },
      { id: "B", text: "The importing module owns an independent mutable copy of count" },
      { id: "C", text: "count becomes a global variable" },
      { id: "D", text: "count can always be reassigned with count = 10" }
    ],
    correctOptionId: "A",
    explanation: "Imported bindings are read-only from the importer's perspective. The exporting module controls the binding itself.",
    tags: ["live-bindings", "imports", "read-only"]
  },

  {
    id: "javascript-modules-q-038",
    quizId: "quiz_javascript_modules",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a circular dependency?",
    options: [
      { id: "A", text: "A dependency relationship in which modules eventually depend on one another through a cycle" },
      { id: "B", text: "A module imported twice by the same file" },
      { id: "C", text: "A module whose filename contains a circle" },
      { id: "D", text: "A module with no exports" }
    ],
    correctOptionId: "A",
    explanation: "A circular dependency occurs when module A depends on B and B directly or indirectly depends back on A.",
    tags: ["circular-dependencies", "dependency-graph", "modules"]
  },

  {
    id: "javascript-modules-q-039",
    quizId: "quiz_javascript_modules",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can circular dependencies be problematic?",
    options: [
      { id: "A", text: "Initialization order and partially initialized bindings can produce surprising behavior" },
      { id: "B", text: "They always cause infinite loops in every JavaScript environment" },
      { id: "C", text: "They prevent JavaScript from parsing any module" },
      { id: "D", text: "They automatically delete one of the modules" }
    ],
    correctOptionId: "A",
    explanation: "Circular dependencies can be valid, but they make initialization order more difficult to reason about and can expose bindings before they are initialized.",
    tags: ["circular-dependencies", "initialization", "dependency-graph"]
  },

  {
    id: "javascript-modules-q-040",
    quizId: "quiz_javascript_modules",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is dynamic import()?",
    options: [
      { id: "A", text: "A function-like syntax that loads a module dynamically and returns a Promise" },
      { id: "B", text: "A replacement for export default" },
      { id: "C", text: "A CommonJS-only syntax for exporting modules" },
      { id: "D", text: "A synchronous version of require()" }
    ],
    correctOptionId: "A",
    explanation: "Dynamic `import()` loads a module asynchronously and returns a Promise that resolves to the module namespace object.",
    tags: ["dynamic-import", "code-splitting", "ES-modules"]
  },

  {
    id: "javascript-modules-q-041",
    quizId: "quiz_javascript_modules",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "What does this code return?\n\nconst module = import(\"./analytics.js\");",
    options: [
      { id: "A", text: "A Promise" },
      { id: "B", text: "The module namespace object immediately" },
      { id: "C", text: "The default export immediately" },
      { id: "D", text: "A string containing the file contents" }
    ],
    correctOptionId: "A",
    explanation: "Dynamic `import()` is asynchronous and returns a Promise that resolves to the imported module's namespace object.",
    tags: ["dynamic-import", "Promise", "ES-modules"]
  },

  {
    id: "javascript-modules-q-042",
    quizId: "quiz_javascript_modules",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is dynamic import useful for code splitting?",
    options: [
      { id: "A", text: "It allows functionality to be loaded only when it is needed instead of being included in the initial code path" },
      { id: "B", text: "It permanently removes unused source files" },
      { id: "C", text: "It makes all JavaScript synchronous" },
      { id: "D", text: "It prevents bundlers from creating chunks" }
    ],
    correctOptionId: "A",
    explanation: "Bundlers can use dynamic imports as boundaries for separate chunks, allowing applications to load certain code on demand.",
    tags: ["dynamic-import", "code-splitting", "performance"]
  },

  {
    id: "javascript-modules-q-043",
    quizId: "quiz_javascript_modules",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "What does this syntax do?\n\nexport * from \"./utils.js\";",
    options: [
      { id: "A", text: "Re-exports the named exports from utils.js" },
      { id: "B", text: "Re-exports the default export from utils.js automatically" },
      { id: "C", text: "Imports every private variable from utils.js" },
      { id: "D", text: "Copies utils.js into the current file" }
    ],
    correctOptionId: "A",
    explanation: "`export * from` re-exports the module's named exports. It does not re-export the default export through this syntax.",
    tags: ["re-export", "export-star", "named-exports"]
  },

  {
    id: "javascript-modules-q-044",
    quizId: "quiz_javascript_modules",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which module organization is generally better for a large frontend application?",
    options: [
      { id: "A", text: "Group related functionality into focused modules with clear public interfaces and avoid unnecessary dependencies" },
      { id: "B", text: "Put every function in one enormous module" },
      { id: "C", text: "Make every variable globally accessible" },
      { id: "D", text: "Make every module import every other module" }
    ],
    correctOptionId: "A",
    explanation: "Focused modules with clear responsibilities reduce coupling and make code easier to test, maintain, reuse, and understand.",
    tags: ["module-organization", "architecture", "maintainability"]
  },

  {
    id: "javascript-modules-q-045",
    quizId: "quiz_javascript_modules",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a useful principle when designing a module's exports?",
    options: [
      { id: "A", text: "Expose the smallest public interface necessary for other modules to use it" },
      { id: "B", text: "Export every internal variable so other modules can inspect it" },
      { id: "C", text: "Export only primitive values" },
      { id: "D", text: "Avoid named exports completely" }
    ],
    correctOptionId: "A",
    explanation: "A small, intentional public interface improves encapsulation and reduces coupling between modules.",
    tags: ["module-api", "encapsulation", "architecture"]
  },

  {
    id: "javascript-modules-q-046",
    quizId: "quiz_javascript_modules",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is the problem with this design?\n\n// user.js\nexport const user = { ... };\n\n// dashboard.js\nimport { user } from \"./user.js\";\n\n// user.js imports something from dashboard.js\n\noptions: \"This creates a circular dependency\"\n",
    options: [
      { id: "A", text: "The modules depend on each other, creating a circular dependency that can complicate initialization" },
      { id: "B", text: "ES Modules cannot export objects" },
      { id: "C", text: "A module can only be imported once" },
      { id: "D", text: "Objects cannot cross module boundaries" }
    ],
    correctOptionId: "A",
    explanation: "When two modules depend directly or indirectly on one another, the dependency graph contains a cycle. Such designs can be difficult to reason about and may expose initialization-order problems.",
    tags: ["circular-dependencies", "architecture", "module-design"]
  },

  {
    id: "javascript-modules-q-047",
    quizId: "quiz_javascript_modules",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Suppose math.js contains:\n\nexport const add = (a, b) => a + b;\nexport const multiply = (a, b) => a * b;\n\nWhich statement imports only add?",
    options: [
      { id: "A", text: "import { add } from \"./math.js\";" },
      { id: "B", text: "import * as add from \"./math.js\";" },
      { id: "C", text: "import default add from \"./math.js\";" },
      { id: "D", text: "require { add } from \"./math.js\";" }
    ],
    correctOptionId: "A",
    explanation: "A named import allows the consumer to request the specific exported binding it needs.",
    tags: ["named-imports", "module-api", "imports"]
  },

  {
    id: "javascript-modules-q-048",
    quizId: "quiz_javascript_modules",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "Consider:\n\n// config.js\nexport default {\n  apiUrl: \"https://example.com\"\n};\n\nWhich import is valid?",
    options: [
      { id: "A", text: "import config from \"./config.js\";" },
      { id: "B", text: "import { config } from \"./config.js\";" },
      { id: "C", text: "import default { config } from \"./config.js\";" },
      { id: "D", text: "import * config from \"./config.js\";" }
    ],
    correctOptionId: "A",
    explanation: "The module has a default export, so the consumer uses a default import without braces.",
    tags: ["default-export", "default-import", "ES-modules"]
  },

  {
    id: "javascript-modules-q-049",
    quizId: "quiz_javascript_modules",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A project has this structure:\n\nsrc/\n  services/\n    api.js\n    auth.js\n  components/\n    Button.jsx\n  utils/\n    format.js\n\nWhich approach is most maintainable?",
    options: [
      { id: "A", text: "Keep modules focused by responsibility and import only the functionality each file actually needs" },
      { id: "B", text: "Make every component import every service and utility" },
      { id: "C", text: "Move all functions into one global module" },
      { id: "D", text: "Export every internal implementation detail from every file" }
    ],
    correctOptionId: "A",
    explanation: "Organizing modules by responsibility and keeping dependencies focused improves maintainability and reduces coupling.",
    tags: ["module-organization", "architecture", "dependencies"]
  },

  {
    id: "javascript-modules-q-050",
    quizId: "quiz_javascript_modules",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "A frontend application has a large analytics library that is needed only after the user opens an Analytics dashboard. Which module strategy is most appropriate?",
    options: [
      { id: "A", text: "Use a dynamic import for the analytics module so it can be loaded when the dashboard is needed" },
      { id: "B", text: "Attach the analytics library to window globally at application startup" },
      { id: "C", text: "Copy the analytics library into every component" },
      { id: "D", text: "Put all analytics functions into Object.prototype" }
    ],
    correctOptionId: "A",
    explanation: "Dynamic `import()` allows the analytics code to be loaded on demand and can enable code splitting, reducing the initial JavaScript required by the application.",
    tags: ["dynamic-import", "code-splitting", "performance", "architecture"]
  }
];

export default javascriptModulesQuestions;