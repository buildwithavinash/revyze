const nodejsFundamentalsQuestions = [
  {
    id: "nodejs-fundamentals-q-001",
    quizId: "quiz_nodejs_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is Node.js?",
    options: [
      { id: "A", text: "A JavaScript runtime for executing JavaScript outside the browser" },
      { id: "B", text: "A database management system" },
      { id: "C", text: "A frontend CSS framework" },
      { id: "D", text: "A JavaScript-only operating system" }
    ],
    correctOptionId: "A",
    explanation: "Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.",
    tags: ["runtime", "node"]
  },

  {
    id: "nodejs-fundamentals-q-002",
    quizId: "quiz_nodejs_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which JavaScript engine powers Node.js?",
    options: [
      { id: "A", text: "SpiderMonkey" },
      { id: "B", text: "V8" },
      { id: "C", text: "Chakra" },
      { id: "D", text: "Hermes" }
    ],
    correctOptionId: "B",
    explanation: "Node.js uses Google's V8 JavaScript engine.",
    tags: ["runtime", "v8"]
  },

  {
    id: "nodejs-fundamentals-q-003",
    quizId: "quiz_nodejs_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why can Node.js execute JavaScript without a browser?",
    options: [
      { id: "A", text: "Because JavaScript no longer needs an engine" },
      { id: "B", text: "Because Node.js converts JavaScript into CSS" },
      { id: "C", text: "Because Node.js embeds a JavaScript engine and runtime APIs" },
      { id: "D", text: "Because npm replaces the browser" }
    ],
    correctOptionId: "C",
    explanation: "Node.js embeds V8 and provides runtime APIs for things such as files, networking, processes, and streams.",
    tags: ["runtime", "v8", "apis"]
  },

  {
    id: "nodejs-fundamentals-q-004",
    quizId: "quiz_nodejs_fundamentals",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command prints the installed Node.js version?",
    options: [
      { id: "A", text: "node --check-version" },
      { id: "B", text: "node version" },
      { id: "C", text: "npm node-version" },
      { id: "D", text: "node --version" }
    ],
    correctOptionId: "D",
    explanation: "`node --version` or `node -v` prints the installed Node.js version.",
    tags: ["cli", "node"]
  },

  {
    id: "nodejs-fundamentals-q-005",
    quizId: "quiz_nodejs_fundamentals",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does npm primarily manage?",
    options: [
      { id: "A", text: "JavaScript packages and project dependencies" },
      { id: "B", text: "Operating-system processes" },
      { id: "C", text: "Browser tabs" },
      { id: "D", text: "SQL databases" }
    ],
    correctOptionId: "A",
    explanation: "npm is the package manager commonly used with Node.js projects.",
    tags: ["npm", "packages"]
  },

  {
    id: "nodejs-fundamentals-q-006",
    quizId: "quiz_nodejs_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of `package.json`?",
    options: [
      { id: "A", text: "It contains only compiled JavaScript" },
      { id: "B", text: "It describes project metadata, scripts, and dependencies" },
      { id: "C", text: "It stores the Node.js runtime itself" },
      { id: "D", text: "It replaces all source files" }
    ],
    correctOptionId: "B",
    explanation: "`package.json` is the central metadata and configuration file for an npm project.",
    tags: ["npm", "package-json"]
  },

  {
    id: "nodejs-fundamentals-q-007",
    quizId: "quiz_nodejs_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command creates a package.json interactively?",
    options: [
      { id: "A", text: "npm start" },
      { id: "B", text: "node init" },
      { id: "C", text: "npm init" },
      { id: "D", text: "npm package" }
    ],
    correctOptionId: "C",
    explanation: "`npm init` walks you through creating a package.json file.",
    tags: ["npm", "package-json"]
  },

  {
    id: "nodejs-fundamentals-q-008",
    quizId: "quiz_nodejs_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `npm init -y` do?",
    options: [
      { id: "A", text: "Installs every dependency automatically" },
      { id: "B", text: "Creates package.json using default answers" },
      { id: "C", text: "Deletes package.json" },
      { id: "D", text: "Runs the production build" }
    ],
    correctOptionId: "B",
    explanation: "`-y` accepts the default answers and creates package.json without the interactive questionnaire.",
    tags: ["npm", "package-json"]
  },

  {
    id: "nodejs-fundamentals-q-009",
    quizId: "quiz_nodejs_fundamentals",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command installs a package and adds it as a regular project dependency?",
    options: [
      { id: "A", text: "npm install package-name" },
      { id: "B", text: "node add package-name" },
      { id: "C", text: "npm fetch package-name" },
      { id: "D", text: "package install package-name" }
    ],
    correctOptionId: "A",
    explanation: "`npm install package-name` installs the package and records it in dependencies.",
    tags: ["npm", "dependencies"]
  },

  {
    id: "nodejs-fundamentals-q-010",
    quizId: "quiz_nodejs_fundamentals",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Where are normal runtime dependencies listed in package.json?",
    options: [
      { id: "A", text: "scripts" },
      { id: "B", text: "engines" },
      { id: "C", text: "dependencies" },
      { id: "D", text: "runtime" }
    ],
    correctOptionId: "C",
    explanation: "Packages required by the application at runtime are normally listed under `dependencies`.",
    tags: ["npm", "dependencies"]
  },

  {
    id: "nodejs-fundamentals-q-011",
    quizId: "quiz_nodejs_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Where are packages needed primarily for development commonly listed?",
    options: [
      { id: "A", text: "devDependencies" },
      { id: "B", text: "developmentPackages" },
      { id: "C", text: "devModules" },
      { id: "D", text: "tools" }
    ],
    correctOptionId: "A",
    explanation: "`devDependencies` contains packages primarily needed during development, testing, linting, or building.",
    tags: ["npm", "devDependencies"]
  },

  {
    id: "nodejs-fundamentals-q-012",
    quizId: "quiz_nodejs_fundamentals",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command is commonly used to install a package as a development dependency?",
    options: [
      { id: "A", text: "npm install package --runtime" },
      { id: "B", text: "npm install package --save-dev" },
      { id: "C", text: "npm add package --production-only" },
      { id: "D", text: "node install package --dev" }
    ],
    correctOptionId: "B",
    explanation: "`npm install package --save-dev` records the package in `devDependencies`.",
    tags: ["npm", "devDependencies"]
  },

  {
    id: "nodejs-fundamentals-q-013",
    quizId: "quiz_nodejs_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is `node_modules`?",
    options: [
      { id: "A", text: "A directory containing installed project packages and their dependencies" },
      { id: "B", text: "The Node.js executable" },
      { id: "C", text: "A replacement for package.json" },
      { id: "D", text: "A directory containing only source TypeScript" }
    ],
    correctOptionId: "A",
    explanation: "npm installs packages and their dependency trees into `node_modules`.",
    tags: ["npm", "node_modules"]
  },

  {
    id: "nodejs-fundamentals-q-014",
    quizId: "quiz_nodejs_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is `node_modules` usually not committed to Git?",
    options: [
      { id: "A", text: "Node.js cannot read files from Git" },
      { id: "B", text: "Dependencies can be recreated from package.json and the lockfile" },
      { id: "C", text: "npm requires node_modules to be deleted" },
      { id: "D", text: "Git does not support folders" }
    ],
    correctOptionId: "B",
    explanation: "The dependency tree can be installed from the project's dependency metadata and lockfile, making the generated `node_modules` directory unnecessary to commit.",
    tags: ["npm", "node_modules", "git"]
  },

  {
    id: "nodejs-fundamentals-q-015",
    quizId: "quiz_nodejs_fundamentals",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is package-lock.json primarily used for?",
    options: [
      { id: "A", text: "Storing the exact resolved dependency tree" },
      { id: "B", text: "Storing environment secrets" },
      { id: "C", text: "Replacing package.json" },
      { id: "D", text: "Storing application source code" }
    ],
    correctOptionId: "A",
    explanation: "The lockfile records resolved package versions and dependency information to support reproducible installs.",
    tags: ["npm", "package-lock"]
  },

  {
    id: "nodejs-fundamentals-q-016",
    quizId: "quiz_nodejs_fundamentals",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the key benefit of committing package-lock.json?",
    options: [
      { id: "A", text: "It prevents JavaScript from running" },
      { id: "B", text: "It helps teams and CI install the same resolved dependency tree" },
      { id: "C", text: "It stores database passwords" },
      { id: "D", text: "It replaces node_modules permanently" }
    ],
    correctOptionId: "B",
    explanation: "The lockfile helps make dependency installation more reproducible across environments.",
    tags: ["npm", "package-lock"]
  },

  {
    id: "nodejs-fundamentals-q-017",
    quizId: "quiz_nodejs_fundamentals",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which module system traditionally uses `require()` and `module.exports`?",
    options: [
      { id: "A", text: "CommonJS" },
      { id: "B", text: "ESM" },
      { id: "C", text: "UMD only" },
      { id: "D", text: "CSS Modules" }
    ],
    correctOptionId: "A",
    explanation: "CommonJS uses patterns such as `require()` and `module.exports`.",
    tags: ["commonjs", "modules"]
  },

  {
    id: "nodejs-fundamentals-q-018",
    quizId: "quiz_nodejs_fundamentals",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax is associated with ECMAScript Modules?",
    options: [
      { id: "A", text: "require() and exports only" },
      { id: "B", text: "import and export" },
      { id: "C", text: "include and module" },
      { id: "D", text: "load and expose" }
    ],
    correctOptionId: "B",
    explanation: "ES modules use the standard JavaScript `import` and `export` syntax.",
    tags: ["esm", "modules"]
  },

  {
    id: "nodejs-fundamentals-q-019",
    quizId: "quiz_nodejs_fundamentals",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In CommonJS, what does `module.exports` represent?",
    options: [
      { id: "A", text: "The value exposed by that module to other modules" },
      { id: "B", text: "The npm registry" },
      { id: "C", text: "The current operating system" },
      { id: "D", text: "The package-lock file" }
    ],
    correctOptionId: "A",
    explanation: "`module.exports` defines the value that another CommonJS module receives when it requires the module.",
    tags: ["commonjs", "module-exports"]
  },

  {
    id: "nodejs-fundamentals-q-020",
    quizId: "quiz_nodejs_fundamentals",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider:\n\n`module.exports = { add, subtract };`\n\nWhat does another CommonJS module receive from `require('./math')`?",
    options: [
      { id: "A", text: "A string containing the file path" },
      { id: "B", text: "An object containing add and subtract" },
      { id: "C", text: "Only the add function" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "B",
    explanation: "The object assigned to `module.exports` becomes the exported module value.",
    tags: ["commonjs", "require", "exports"]
  },

  {
    id: "nodejs-fundamentals-q-021",
    quizId: "quiz_nodejs_fundamentals",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one important characteristic of CommonJS modules?",
    options: [
      { id: "A", text: "They use synchronous-style module loading through require()" },
      { id: "B", text: "They can only run in browsers" },
      { id: "C", text: "They cannot export functions" },
      { id: "D", text: "They require TypeScript" }
    ],
    correctOptionId: "A",
    explanation: "CommonJS uses `require()` for loading modules, with module loading occurring synchronously.",
    tags: ["commonjs", "modules"]
  },

  {
    id: "nodejs-fundamentals-q-022",
    quizId: "quiz_nodejs_fundamentals",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In a Node.js project using ESM, what does `export default` define?",
    options: [
      { id: "A", text: "The package.json file" },
      { id: "B", text: "The module's default export" },
      { id: "C", text: "A named npm dependency" },
      { id: "D", text: "An environment variable" }
    ],
    correctOptionId: "B",
    explanation: "`export default` defines the default exported value of an ES module.",
    tags: ["esm", "export"]
  },

  {
    id: "nodejs-fundamentals-q-023",
    quizId: "quiz_nodejs_fundamentals",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which package.json field can indicate that `.js` files should be interpreted as ES modules?",
    options: [
      { id: "A", text: "moduleType" },
      { id: "B", text: "jsMode" },
      { id: "C", text: "type" },
      { id: "D", text: "syntax" }
    ],
    correctOptionId: "C",
    explanation: "Setting `\"type\": \"module\"` in package.json establishes ESM semantics for applicable `.js` files in that package scope.",
    tags: ["esm", "package-json"]
  },

  {
    id: "nodejs-fundamentals-q-024",
    quizId: "quiz_nodejs_fundamentals",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a Node.js module?",
    options: [
      { id: "A", text: "To organize and encapsulate reusable code" },
      { id: "B", text: "To replace the operating system" },
      { id: "C", text: "To store only CSS variables" },
      { id: "D", text: "To automatically create databases" }
    ],
    correctOptionId: "A",
    explanation: "Modules help divide applications into smaller, reusable, maintainable pieces.",
    tags: ["modules", "architecture"]
  },

  {
    id: "nodejs-fundamentals-q-025",
    quizId: "quiz_nodejs_fundamentals",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which of the following is a built-in Node.js module?",
    options: [
      { id: "A", text: "react" },
      { id: "B", text: "express" },
      { id: "C", text: "fs" },
      { id: "D", text: "axios" }
    ],
    correctOptionId: "C",
    explanation: "`fs` is provided by Node.js itself, while the others are external packages.",
    tags: ["built-in-modules", "fs"]
  },

  {
    id: "nodejs-fundamentals-q-026",
    quizId: "quiz_nodejs_fundamentals",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which built-in module is used for working with file paths?",
    options: [
      { id: "A", text: "path" },
      { id: "B", text: "route" },
      { id: "C", text: "filesystem-paths" },
      { id: "D", text: "directory" }
    ],
    correctOptionId: "A",
    explanation: "The `path` module provides platform-aware utilities for constructing and manipulating file paths.",
    tags: ["path", "built-in-modules"]
  },

  {
    id: "nodejs-fundamentals-q-027",
    quizId: "quiz_nodejs_fundamentals",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `__dirname` represent in a CommonJS module?",
    options: [
      { id: "A", text: "The absolute path of the current module's directory" },
      { id: "B", text: "The npm registry URL" },
      { id: "C", text: "The current Git branch" },
      { id: "D", text: "The process ID" }
    ],
    correctOptionId: "A",
    explanation: "In CommonJS, `__dirname` contains the absolute path to the directory containing the current module.",
    tags: ["commonjs", "dirname", "paths"]
  },

  {
    id: "nodejs-fundamentals-q-028",
    quizId: "quiz_nodejs_fundamentals",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `__filename` represent in CommonJS?",
    options: [
      { id: "A", text: "The absolute path to the current module file" },
      { id: "B", text: "The npm package name" },
      { id: "C", text: "The operating-system version" },
      { id: "D", text: "The current process environment" }
    ],
    correctOptionId: "A",
    explanation: "`__filename` gives the absolute path of the current CommonJS module file.",
    tags: ["commonjs", "filename", "paths"]
  },

  {
    id: "nodejs-fundamentals-q-029",
    quizId: "quiz_nodejs_fundamentals",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of npm scripts?",
    options: [
      { id: "A", text: "To define reusable commands for project tasks" },
      { id: "B", text: "To replace JavaScript functions" },
      { id: "C", text: "To store database rows" },
      { id: "D", text: "To configure the operating system" }
    ],
    correctOptionId: "A",
    explanation: "The `scripts` section of package.json lets teams define standard commands such as dev, build, test, and start.",
    tags: ["npm", "scripts"]
  },

  {
    id: "nodejs-fundamentals-q-030",
    quizId: "quiz_nodejs_fundamentals",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Given this package.json:\n\n`\"scripts\": { \"start\": \"node server.js\" }`\n\nWhat does `npm start` do?",
    options: [
      { id: "A", text: "Installs server.js" },
      { id: "B", text: "Runs `node server.js`" },
      { id: "C", text: "Deletes server.js" },
      { id: "D", text: "Compiles server.js to TypeScript" }
    ],
    correctOptionId: "B",
    explanation: "npm executes the command configured under the `start` script.",
    tags: ["npm", "scripts"]
  },

  {
    id: "nodejs-fundamentals-q-031",
    quizId: "quiz_nodejs_fundamentals",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `npm run build` generally do?",
    options: [
      { id: "A", text: "Executes the command defined under the build script" },
      { id: "B", text: "Always installs every package" },
      { id: "C", text: "Deletes package-lock.json" },
      { id: "D", text: "Starts the Node runtime automatically" }
    ],
    correctOptionId: "A",
    explanation: "`npm run <script>` executes the matching script from package.json.",
    tags: ["npm", "scripts"]
  },

  {
    id: "nodejs-fundamentals-q-032",
    quizId: "quiz_nodejs_fundamentals",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `npm uninstall express` do?",
    options: [
      { id: "A", text: "Removes the Express package from the project dependencies" },
      { id: "B", text: "Uninstalls Node.js itself" },
      { id: "C", text: "Deletes all npm projects" },
      { id: "D", text: "Removes every package globally" }
    ],
    correctOptionId: "A",
    explanation: "`npm uninstall` removes the specified package from the project and updates dependency metadata.",
    tags: ["npm", "dependencies"]
  },

  {
    id: "nodejs-fundamentals-q-033",
    quizId: "quiz_nodejs_fundamentals",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a Node.js built-in module?",
    options: [
      { id: "A", text: "A module shipped as part of Node.js itself" },
      { id: "B", text: "Any package published to npm" },
      { id: "C", text: "A React component" },
      { id: "D", text: "A module that requires Express" }
    ],
    correctOptionId: "A",
    explanation: "Built-in modules are provided directly by Node.js and do not need to be installed from npm.",
    tags: ["built-in-modules"]
  },

  {
    id: "nodejs-fundamentals-q-034",
    quizId: "quiz_nodejs_fundamentals",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement imports the built-in `fs` module using CommonJS?",
    options: [
      { id: "A", text: "import fs from 'fs'" },
      { id: "B", text: "require('fs')" },
      { id: "C", text: "include('fs')" },
      { id: "D", text: "load fs from node" }
    ],
    correctOptionId: "B",
    explanation: "CommonJS loads modules using `require()`.",
    tags: ["commonjs", "fs"]
  },

  {
    id: "nodejs-fundamentals-q-035",
    quizId: "quiz_nodejs_fundamentals",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement imports a named export called `readFile` using ESM syntax?",
    options: [
      { id: "A", text: "require('fs').readFile" },
      { id: "B", text: "include { readFile } from 'fs'" },
      { id: "C", text: "import { readFile } from 'fs'" },
      { id: "D", text: "load { readFile } using 'fs'" }
    ],
    correctOptionId: "C",
    explanation: "ES modules use `import { name } from 'module'` for named imports.",
    tags: ["esm", "imports"]
  },

  {
    id: "nodejs-fundamentals-q-036",
    quizId: "quiz_nodejs_fundamentals",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between a built-in module and an npm package?",
    options: [
      { id: "A", text: "Built-in modules are supplied by Node.js, while npm packages are typically installed separately" },
      { id: "B", text: "They are always identical" },
      { id: "C", text: "npm packages can only contain CSS" },
      { id: "D", text: "Built-in modules require npm installation before use" }
    ],
    correctOptionId: "A",
    explanation: "Node ships with built-in modules such as `fs` and `path`; external packages are commonly installed from registries such as npm.",
    tags: ["built-in-modules", "npm"]
  },

  {
    id: "nodejs-fundamentals-q-037",
    quizId: "quiz_nodejs_fundamentals",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does semantic versioning commonly communicate in a package version such as `2.4.1`?",
    options: [
      { id: "A", text: "Major, minor, and patch versions" },
      { id: "B", text: "Node version, npm version, and OS version" },
      { id: "C", text: "Database, API, and UI versions" },
      { id: "D", text: "Development, production, and testing versions" }
    ],
    correctOptionId: "A",
    explanation: "Semantic versioning commonly uses MAJOR.MINOR.PATCH.",
    tags: ["npm", "semver"]
  },

  {
    id: "nodejs-fundamentals-q-038",
    quizId: "quiz_nodejs_fundamentals",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Under semantic versioning, what generally indicates a breaking API change?",
    options: [
      { id: "A", text: "Patch version increase" },
      { id: "B", text: "Major version increase" },
      { id: "C", text: "Minor version increase only" },
      { id: "D", text: "Changing the package description" }
    ],
    correctOptionId: "B",
    explanation: "A major version increase traditionally signals breaking changes.",
    tags: ["semver", "npm"]
  },

  {
    id: "nodejs-fundamentals-q-039",
    quizId: "quiz_nodejs_fundamentals",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does a dependency version such as `^1.4.2` generally allow under npm's semver rules?",
    options: [
      { id: "A", text: "Only exactly version 1.4.2" },
      { id: "B", text: "Compatible versions within the same major version, subject to semver rules" },
      { id: "C", text: "Any future major version" },
      { id: "D", text: "Only patch version 1.4.2" }
    ],
    correctOptionId: "B",
    explanation: "For a normal semver range beginning with `^1.4.2`, versions compatible within major version 1 can generally satisfy the range.",
    tags: ["semver", "npm"]
  },

  {
    id: "nodejs-fundamentals-q-040",
    quizId: "quiz_nodejs_fundamentals",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is dependency versioning important in a Node.js project?",
    options: [
      { id: "A", text: "It helps control which package versions can be installed and reduces unexpected compatibility problems" },
      { id: "B", text: "It determines the CPU architecture automatically" },
      { id: "C", text: "It replaces source control" },
      { id: "D", text: "It prevents all security vulnerabilities" }
    ],
    correctOptionId: "A",
    explanation: "Dependency ranges and lockfiles help control dependency versions and improve reproducibility.",
    tags: ["npm", "dependencies", "semver"]
  },

  {
    id: "nodejs-fundamentals-q-041",
    quizId: "quiz_nodejs_fundamentals",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "A project has `package.json` but no `node_modules` directory. What is normally required before running the project locally?",
    options: [
      { id: "A", text: "Rename package.json" },
      { id: "B", text: "Install the project's dependencies" },
      { id: "C", text: "Delete package.json" },
      { id: "D", text: "Convert package.json into JavaScript" }
    ],
    correctOptionId: "B",
    explanation: "Running `npm install` installs dependencies described by package.json and the lockfile when available.",
    tags: ["npm", "dependencies"]
  },

  {
    id: "nodejs-fundamentals-q-042",
    quizId: "quiz_nodejs_fundamentals",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "A teammate clones your Node.js project and runs `npm install`. What is npm primarily using to determine what to install?",
    options: [
      { id: "A", text: "package.json and, when present, the lockfile" },
      { id: "B", text: "Only the README" },
      { id: "C", text: "Only the Git history" },
      { id: "D", text: "Only the operating-system version" }
    ],
    correctOptionId: "A",
    explanation: "npm uses dependency metadata from package.json and lockfile information to construct the installed dependency tree.",
    tags: ["npm", "package-json", "package-lock"]
  },

  {
    id: "nodejs-fundamentals-q-043",
    quizId: "quiz_nodejs_fundamentals",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is it useful to separate application code into modules instead of putting everything in one file?",
    options: [
      { id: "A", text: "It improves organization, reuse, testing, and maintainability" },
      { id: "B", text: "Node.js only allows one function per file" },
      { id: "C", text: "Modules automatically make code bug-free" },
      { id: "D", text: "Modules eliminate the need for dependencies" }
    ],
    correctOptionId: "A",
    explanation: "Modular design separates responsibilities and makes code easier to maintain and reuse.",
    tags: ["modules", "architecture"]
  },

  {
    id: "nodejs-fundamentals-q-044",
    quizId: "quiz_nodejs_fundamentals",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "You have this CommonJS module:\n\n`module.exports = function greet(name) { return \\'Hello \\' + name; }`\n\nHow should another CommonJS file use it?",
    options: [
      { id: "A", text: "const greet = require('./greet')" },
      { id: "B", text: "const greet = import './greet'" },
      { id: "C", text: "require = greet('./greet')" },
      { id: "D", text: "include greet from './greet'" }
    ],
    correctOptionId: "A",
    explanation: "Because the module exports the function directly, `require()` receives that function.",
    tags: ["commonjs", "require", "module-exports"]
  },

  {
    id: "nodejs-fundamentals-q-045",
    quizId: "quiz_nodejs_fundamentals",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is one major conceptual difference between CommonJS and ESM?",
    options: [
      { id: "A", text: "CommonJS uses require/module.exports, while ESM uses import/export" },
      { id: "B", text: "CommonJS is for CSS and ESM is for databases" },
      { id: "C", text: "ESM cannot export functions" },
      { id: "D", text: "CommonJS only works inside browsers" }
    ],
    correctOptionId: "A",
    explanation: "The two module systems use different module syntax and have different loading and interoperability semantics.",
    tags: ["commonjs", "esm", "modules"]
  },

  {
    id: "nodejs-fundamentals-q-046",
    quizId: "quiz_nodejs_fundamentals",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A package contains both application dependencies and testing tools. Which setup best represents their intended roles?",
    options: [
      { id: "A", text: "Put everything under devDependencies" },
      { id: "B", text: "Put runtime packages under dependencies and testing/build tools under devDependencies" },
      { id: "C", text: "Put everything under scripts" },
      { id: "D", text: "Put runtime packages into package-lock only" }
    ],
    correctOptionId: "B",
    explanation: "Runtime requirements belong in `dependencies`; development-only tooling commonly belongs in `devDependencies`.",
    tags: ["npm", "dependencies", "devDependencies"]
  },

  {
    id: "nodejs-fundamentals-q-047",
    quizId: "quiz_nodejs_fundamentals",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer changes `package.json` but forgets to update the lockfile manually. What should normally happen when using npm to install/update dependencies?",
    options: [
      { id: "A", text: "npm can update the lockfile as part of dependency installation" },
      { id: "B", text: "The project becomes permanently unusable" },
      { id: "C", text: "Node.js automatically deletes package.json" },
      { id: "D", text: "The lockfile is unrelated to dependencies" }
    ],
    correctOptionId: "A",
    explanation: "npm manages package-lock.json during dependency operations so the lockfile reflects the resolved dependency tree.",
    tags: ["npm", "package-lock"]
  },

  {
    id: "nodejs-fundamentals-q-048",
    quizId: "quiz_nodejs_fundamentals",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should you avoid blindly copying random npm packages into a production project?",
    options: [
      { id: "A", text: "Dependencies introduce maintenance, compatibility, and security considerations" },
      { id: "B", text: "Node.js cannot use third-party packages" },
      { id: "C", text: "npm packages always slow the CPU permanently" },
      { id: "D", text: "Every npm package is automatically malicious" }
    ],
    correctOptionId: "A",
    explanation: "Third-party dependencies should be evaluated for maintenance, security, compatibility, licensing, and necessity.",
    tags: ["npm", "security", "dependencies"]
  },

  {
    id: "nodejs-fundamentals-q-049",
    quizId: "quiz_nodejs_fundamentals",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A Node.js project needs to support modern ESM imports while maintaining a clear package boundary. Which package.json setting is commonly relevant?",
    options: [
      { id: "A", text: "\"type\": \"module\"" },
      { id: "B", text: "\"module\": true" },
      { id: "C", text: "\"esm\": true" },
      { id: "D", text: "\"imports\": \"esm-only\"" }
    ],
    correctOptionId: "A",
    explanation: "`\"type\": \"module\"` tells Node to interpret `.js` files within that package scope using ESM semantics.",
    tags: ["esm", "package-json"]
  },

  {
    id: "nodejs-fundamentals-q-050",
    quizId: "quiz_nodejs_fundamentals",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are starting a production Node.js project. Which setup best follows the fundamentals covered in this quiz?",
    options: [
      { id: "A", text: "Put all code in one file and install every package globally" },
      { id: "B", text: "Avoid package.json and manually copy dependencies" },
      { id: "C", text: "Use modules to separate responsibilities, manage dependencies with package.json/lockfile, and choose CommonJS or ESM deliberately" },
      { id: "D", text: "Commit node_modules and ignore dependency versions" }
    ],
    correctOptionId: "C",
    explanation: "A maintainable Node.js project uses modules for organization, npm for dependency management, lockfiles for reproducibility, and a deliberate module-system choice.",
    tags: ["node", "modules", "npm", "architecture"]
  }
];

export default nodejsFundamentalsQuestions;