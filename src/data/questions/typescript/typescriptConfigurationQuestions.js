const typescriptConfigurationQuestions = [
  {
    id: "typescript-configuration-q-001",
    quizId: "quiz_typescript_configuration",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of `tsconfig.json`?",
    options: [
      { id: "A", text: "To configure how TypeScript compiles a project" },
      { id: "B", text: "To store npm authentication credentials" },
      { id: "C", text: "To define React components" },
      { id: "D", text: "To replace package.json" }
    ],
    correctOptionId: "A",
    explanation: "`tsconfig.json` defines compiler options and project configuration used by TypeScript.",
    tags: ["tsconfig", "configuration"]
  },

  {
    id: "typescript-configuration-q-002",
    quizId: "quiz_typescript_configuration",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which command can create a basic `tsconfig.json` file?",
    options: [
      { id: "A", text: "npm create-typescript" },
      { id: "B", text: "tsc --init" },
      { id: "C", text: "typescript init" },
      { id: "D", text: "tsconfig --create" }
    ],
    correctOptionId: "B",
    explanation: "`tsc --init` creates a starter TypeScript configuration file.",
    tags: ["tsconfig", "tsc"]
  },

  {
    id: "typescript-configuration-q-003",
    quizId: "quiz_typescript_configuration",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `compilerOptions` section of `tsconfig.json` contain?",
    options: [
      { id: "A", text: "TypeScript compiler settings" },
      { id: "B", text: "Only npm dependencies" },
      { id: "C", text: "Only environment variables" },
      { id: "D", text: "Git configuration" }
    ],
    correctOptionId: "A",
    explanation: "`compilerOptions` contains settings controlling TypeScript's type checking and emitted JavaScript.",
    tags: ["tsconfig", "compilerOptions"]
  },

  {
    id: "typescript-configuration-q-004",
    quizId: "quiz_typescript_configuration",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `target` compiler option control?",
    options: [
      { id: "A", text: "The JavaScript language version emitted by TypeScript" },
      { id: "B", text: "Which files Git tracks" },
      { id: "C", text: "The npm package name" },
      { id: "D", text: "The browser's screen size" }
    ],
    correctOptionId: "A",
    explanation: "`target` determines the ECMAScript version of the generated JavaScript.",
    tags: ["target", "compilerOptions"]
  },

  {
    id: "typescript-configuration-q-005",
    quizId: "quiz_typescript_configuration",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "If `target` is set to `ES2017`, what does that primarily describe?",
    options: [
      { id: "A", text: "The minimum TypeScript version required" },
      { id: "B", text: "The ECMAScript version targeted for emitted JavaScript" },
      { id: "C", text: "The version of Node installed" },
      { id: "D", text: "The browser version being used" }
    ],
    correctOptionId: "B",
    explanation: "`target` describes the ECMAScript level TypeScript should emit.",
    tags: ["target", "ecmascript"]
  },

  {
    id: "typescript-configuration-q-006",
    quizId: "quiz_typescript_configuration",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `module` configure?",
    options: [
      { id: "A", text: "The module system used for generated JavaScript" },
      { id: "B", text: "The number of CPU cores used by TypeScript" },
      { id: "C", text: "The CSS module naming convention" },
      { id: "D", text: "The number of TypeScript files allowed" }
    ],
    correctOptionId: "A",
    explanation: "`module` controls the module code generation and module resolution behavior associated with the selected module system.",
    tags: ["module", "compilerOptions"]
  },

  {
    id: "typescript-configuration-q-007",
    quizId: "quiz_typescript_configuration",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `strict` option generally do?",
    options: [
      { id: "A", text: "Enables a broad set of stricter type-checking options" },
      { id: "B", text: "Prevents JavaScript files from running" },
      { id: "C", text: "Disables all compiler errors" },
      { id: "D", text: "Only checks spelling" }
    ],
    correctOptionId: "A",
    explanation: "`strict` enables a family of strict type-checking settings designed to catch more potential errors.",
    tags: ["strict", "type-checking"]
  },

  {
    id: "typescript-configuration-q-008",
    quizId: "quiz_typescript_configuration",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is enabling strict mode generally recommended for new TypeScript projects?",
    options: [
      { id: "A", text: "It catches more type-related problems during development" },
      { id: "B", text: "It makes every variable `any`" },
      { id: "C", text: "It removes the need for type annotations entirely" },
      { id: "D", text: "It prevents TypeScript from compiling" }
    ],
    correctOptionId: "A",
    explanation: "Strict checking helps detect bugs earlier and encourages safer type modeling.",
    tags: ["strict", "best-practices"]
  },

  {
    id: "typescript-configuration-q-009",
    quizId: "quiz_typescript_configuration",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `strictNullChecks` primarily affect?",
    options: [
      { id: "A", text: "Whether null and undefined are treated as distinct types during checking" },
      { id: "B", text: "Whether TypeScript emits CSS" },
      { id: "C", text: "Whether functions can have parameters" },
      { id: "D", text: "Whether arrays can contain strings" }
    ],
    correctOptionId: "A",
    explanation: "With `strictNullChecks`, `null` and `undefined` are not freely assignable to unrelated types.",
    tags: ["strictNullChecks", "strict"]
  },

  {
    id: "typescript-configuration-q-010",
    quizId: "quiz_typescript_configuration",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What problem can `strictNullChecks` help catch?",
    options: [
      { id: "A", text: "Using a possibly undefined value where a definite value is required" },
      { id: "B", text: "Incorrect CSS selectors" },
      { id: "C", text: "Missing npm scripts" },
      { id: "D", text: "Incorrect Git branches" }
    ],
    correctOptionId: "A",
    explanation: "It forces code to account for nullish values instead of silently treating them as every other type.",
    tags: ["strictNullChecks", "null", "undefined"]
  },

  {
    id: "typescript-configuration-q-011",
    quizId: "quiz_typescript_configuration",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `noImplicitAny` help detect?",
    options: [
      { id: "A", text: "Cases where TypeScript would otherwise infer an implicit any type" },
      { id: "B", text: "All explicit any annotations" },
      { id: "C", text: "All JavaScript syntax errors" },
      { id: "D", text: "Unused CSS classes" }
    ],
    correctOptionId: "A",
    explanation: "`noImplicitAny` reports certain cases where TypeScript would otherwise infer `any` implicitly.",
    tags: ["noImplicitAny", "strict"]
  },

  {
    id: "typescript-configuration-q-012",
    quizId: "quiz_typescript_configuration",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which setting is part of TypeScript's strict type-checking family?",
    options: [
      { id: "A", text: "strictNullChecks" },
      { id: "B", text: "cssModules" },
      { id: "C", text: "browserMode" },
      { id: "D", text: "npmStrict" }
    ],
    correctOptionId: "A",
    explanation: "`strictNullChecks` is one of the compiler checks controlled by strict mode.",
    tags: ["strict", "strictNullChecks"]
  },

  {
    id: "typescript-configuration-q-013",
    quizId: "quiz_typescript_configuration",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `outDir` option specify?",
    options: [
      { id: "A", text: "The directory where emitted JavaScript files are placed" },
      { id: "B", text: "The directory containing node_modules" },
      { id: "C", text: "The source control directory" },
      { id: "D", text: "The browser cache directory" }
    ],
    correctOptionId: "A",
    explanation: "`outDir` specifies the output directory for generated files.",
    tags: ["outDir", "build"]
  },

  {
    id: "typescript-configuration-q-014",
    quizId: "quiz_typescript_configuration",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `rootDir` generally indicate?",
    options: [
      { id: "A", text: "The root directory of the input source files" },
      { id: "B", text: "The root of node_modules" },
      { id: "C", text: "The location of the TypeScript executable" },
      { id: "D", text: "The root of the operating system" }
    ],
    correctOptionId: "A",
    explanation: "`rootDir` helps TypeScript understand the expected root of the source tree.",
    tags: ["rootDir", "build"]
  },

  {
    id: "typescript-configuration-q-015",
    quizId: "quiz_typescript_configuration",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A project stores TypeScript source in `src/` and wants compiled files in `dist/`. Which configuration is appropriate?",
    options: [
      { id: "A", text: "\"rootDir\": \"dist\", \"outDir\": \"src\"" },
      { id: "B", text: "\"rootDir\": \"src\", \"outDir\": \"dist\"" },
      { id: "C", text: "\"rootDir\": \"src\", \"target\": \"dist\"" },
      { id: "D", text: "\"module\": \"src\", \"outDir\": \"dist\"" }
    ],
    correctOptionId: "B",
    explanation: "`rootDir` represents the source root and `outDir` represents the generated output directory.",
    tags: ["rootDir", "outDir"]
  },

  {
    id: "typescript-configuration-q-016",
    quizId: "quiz_typescript_configuration",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `include` field in `tsconfig.json` control?",
    options: [
      { id: "A", text: "Which files or directories should be included in the TypeScript project" },
      { id: "B", text: "Which npm packages are installed" },
      { id: "C", text: "Which Git branches are included" },
      { id: "D", text: "Which browser APIs are available" }
    ],
    correctOptionId: "A",
    explanation: "`include` defines file patterns that should be included in the project.",
    tags: ["include", "tsconfig"]
  },

  {
    id: "typescript-configuration-q-017",
    quizId: "quiz_typescript_configuration",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `exclude` in `tsconfig.json`?",
    options: [
      { id: "A", text: "To specify files or directories that should not be included by the project configuration" },
      { id: "B", text: "To remove packages from package.json" },
      { id: "C", text: "To disable TypeScript entirely" },
      { id: "D", text: "To exclude TypeScript from JavaScript output" }
    ],
    correctOptionId: "A",
    explanation: "`exclude` defines patterns that should be excluded from the project.",
    tags: ["exclude", "tsconfig"]
  },

  {
    id: "typescript-configuration-q-018",
    quizId: "quiz_typescript_configuration",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which directory is commonly excluded from a TypeScript source project?",
    options: [
      { id: "A", text: "node_modules" },
      { id: "B", text: "src" },
      { id: "C", text: "components" },
      { id: "D", text: "types" }
    ],
    correctOptionId: "A",
    explanation: "`node_modules` contains dependencies rather than the application's own source files and is commonly excluded.",
    tags: ["exclude", "node_modules"]
  },

  {
    id: "typescript-configuration-q-019",
    quizId: "quiz_typescript_configuration",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `noEmit` do?",
    options: [
      { id: "A", text: "Runs type checking without emitting JavaScript output" },
      { id: "B", text: "Disables all type checking" },
      { id: "C", text: "Prevents TypeScript files from being read" },
      { id: "D", text: "Deletes the dist directory" }
    ],
    correctOptionId: "A",
    explanation: "`noEmit` tells TypeScript not to write output files, which is useful when another tool handles bundling.",
    tags: ["noEmit", "build"]
  },

  {
    id: "typescript-configuration-q-020",
    quizId: "quiz_typescript_configuration",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a Vite or another bundler-based project use `noEmit: true`?",
    options: [
      { id: "A", text: "Because the bundler handles the final JavaScript build output" },
      { id: "B", text: "Because TypeScript is not used for type checking" },
      { id: "C", text: "Because JavaScript cannot be emitted" },
      { id: "D", text: "Because npm requires it" }
    ],
    correctOptionId: "A",
    explanation: "In many modern toolchains, TypeScript is used for type checking while the bundler/transpiler handles the emitted application code.",
    tags: ["noEmit", "vite", "build"]
  },

  {
    id: "typescript-configuration-q-021",
    quizId: "quiz_typescript_configuration",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `sourceMap` enable?",
    options: [
      { id: "A", text: "Mapping generated JavaScript back to the original source during debugging" },
      { id: "B", text: "Converting TypeScript into CSS" },
      { id: "C", text: "Installing npm packages" },
      { id: "D", text: "Removing source files" }
    ],
    correctOptionId: "A",
    explanation: "Source maps allow developer tools to associate generated code with the original TypeScript source.",
    tags: ["sourceMap", "debugging"]
  },

  {
    id: "typescript-configuration-q-022",
    quizId: "quiz_typescript_configuration",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `declaration: true`?",
    options: [
      { id: "A", text: "To generate `.d.ts` declaration files" },
      { id: "B", text: "To generate CSS declarations" },
      { id: "C", text: "To disable declarations" },
      { id: "D", text: "To generate HTML files" }
    ],
    correctOptionId: "A",
    explanation: "The compiler can generate declaration files containing the public type information of the emitted code.",
    tags: ["declaration", "d.ts"]
  },

  {
    id: "typescript-configuration-q-023",
    quizId: "quiz_typescript_configuration",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are `.d.ts` files important when consuming a typed library?",
    options: [
      { id: "A", text: "They provide TypeScript type information about the library's API" },
      { id: "B", text: "They contain only CSS" },
      { id: "C", text: "They are executable JavaScript files" },
      { id: "D", text: "They replace package.json" }
    ],
    correctOptionId: "A",
    explanation: "Declaration files describe types so TypeScript can provide checking and editor support for library APIs.",
    tags: ["declarations", "d.ts", "libraries"]
  },

  {
    id: "typescript-configuration-q-024",
    quizId: "quiz_typescript_configuration",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `esModuleInterop` primarily help with?",
    options: [
      { id: "A", text: "Improving compatibility between CommonJS-style modules and ES module-style imports" },
      { id: "B", text: "Enabling CSS modules" },
      { id: "C", text: "Enabling strictNullChecks" },
      { id: "D", text: "Generating declaration files" }
    ],
    correctOptionId: "A",
    explanation: "`esModuleInterop` changes module interoperability behavior to make certain CommonJS imports easier to use with ES-style syntax.",
    tags: ["esModuleInterop", "modules"]
  },

  {
    id: "typescript-configuration-q-025",
    quizId: "quiz_typescript_configuration",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `allowJs` permit?",
    options: [
      { id: "A", text: "JavaScript files to be included in the TypeScript project" },
      { id: "B", text: "JavaScript to replace TypeScript" },
      { id: "C", text: "TypeScript to be disabled" },
      { id: "D", text: "Only JSX files to compile" }
    ],
    correctOptionId: "A",
    explanation: "`allowJs` allows JavaScript files to participate in the TypeScript project.",
    tags: ["allowJs", "migration"]
  },

  {
    id: "typescript-configuration-q-026",
    quizId: "quiz_typescript_configuration",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `checkJs` do when JavaScript files are allowed?",
    options: [
      { id: "A", text: "Enables type checking of JavaScript files" },
      { id: "B", text: "Converts JavaScript to TypeScript automatically" },
      { id: "C", text: "Deletes JavaScript files" },
      { id: "D", text: "Prevents JavaScript imports" }
    ],
    correctOptionId: "A",
    explanation: "`checkJs` enables TypeScript's checking for JavaScript files included in the project.",
    tags: ["checkJs", "allowJs", "migration"]
  },

  {
    id: "typescript-configuration-q-027",
    quizId: "quiz_typescript_configuration",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which option is useful when gradually migrating a JavaScript project to TypeScript?",
    options: [
      { id: "A", text: "allowJs" },
      { id: "B", text: "noEmit" },
      { id: "C", text: "outDir only" },
      { id: "D", text: "declarationMap only" }
    ],
    correctOptionId: "A",
    explanation: "`allowJs` permits JavaScript and TypeScript files to coexist in a project during migration.",
    tags: ["allowJs", "migration"]
  },

  {
    id: "typescript-configuration-q-028",
    quizId: "quiz_typescript_configuration",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `moduleResolution` influence?",
    options: [
      { id: "A", text: "How TypeScript resolves imported modules and their type information" },
      { id: "B", text: "How CSS is resolved by the browser" },
      { id: "C", text: "How Git resolves merge conflicts" },
      { id: "D", text: "How npm chooses a package version" }
    ],
    correctOptionId: "A",
    explanation: "`moduleResolution` determines the strategy TypeScript uses to locate imported modules and declarations.",
    tags: ["moduleResolution", "modules"]
  },

  {
    id: "typescript-configuration-q-029",
    quizId: "quiz_typescript_configuration",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should `module` and `moduleResolution` generally be chosen consistently with the project's runtime or bundler?",
    options: [
      { id: "A", text: "Because imports must be resolved and emitted in a way compatible with the project's module environment" },
      { id: "B", text: "Because TypeScript requires every project to use CommonJS" },
      { id: "C", text: "Because moduleResolution controls CSS" },
      { id: "D", text: "Because it determines the project's Git strategy" }
    ],
    correctOptionId: "A",
    explanation: "The module system used by the project affects both how imports are understood and how code is emitted or interpreted.",
    tags: ["module", "moduleResolution", "build"]
  },

  {
    id: "typescript-configuration-q-030",
    quizId: "quiz_typescript_configuration",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main purpose of `lib` in TypeScript configuration?",
    options: [
      { id: "A", text: "To specify which built-in library declaration files are available during type checking" },
      { id: "B", text: "To specify npm dependencies" },
      { id: "C", text: "To choose the output directory" },
      { id: "D", text: "To configure Git libraries" }
    ],
    correctOptionId: "A",
    explanation: "`lib` controls the declaration libraries TypeScript includes for APIs such as DOM and ECMAScript features.",
    tags: ["lib", "type-checking"]
  },

  {
    id: "typescript-configuration-q-031",
    quizId: "quiz_typescript_configuration",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "If a browser application needs DOM APIs such as `document`, which library declaration is relevant?",
    options: [
      { id: "A", text: "DOM" },
      { id: "B", text: "NodeFS" },
      { id: "C", text: "BrowserCSS" },
      { id: "D", text: "WebRuntimeOnly" }
    ],
    correctOptionId: "A",
    explanation: "The DOM library provides TypeScript declarations for browser DOM APIs.",
    tags: ["lib", "DOM"]
  },

  {
    id: "typescript-configuration-q-032",
    quizId: "quiz_typescript_configuration",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is `types` in `tsconfig.json` commonly used for?",
    options: [
      { id: "A", text: "Controlling which type declaration packages are included in the global scope" },
      { id: "B", text: "Defining all application interfaces" },
      { id: "C", text: "Declaring database tables" },
      { id: "D", text: "Choosing primitive TypeScript types" }
    ],
    correctOptionId: "A",
    explanation: "The `types` option can restrict which installed declaration packages contribute global types.",
    tags: ["types", "declarations"]
  },

  {
    id: "typescript-configuration-q-033",
    quizId: "quiz_typescript_configuration",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `skipLibCheck` do?",
    options: [
      { id: "A", text: "Skips type checking of declaration files such as `.d.ts` files" },
      { id: "B", text: "Skips checking all application source files" },
      { id: "C", text: "Skips JavaScript compilation" },
      { id: "D", text: "Skips npm installation" }
    ],
    correctOptionId: "A",
    explanation: "`skipLibCheck` skips type checking of declaration files, which can reduce build time or avoid unrelated declaration conflicts.",
    tags: ["skipLibCheck", "performance"]
  },

  {
    id: "typescript-configuration-q-034",
    quizId: "quiz_typescript_configuration",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential tradeoff of enabling `skipLibCheck`?",
    options: [
      { id: "A", text: "Some errors inside declaration files may not be reported" },
      { id: "B", text: "Your own TypeScript source is never checked" },
      { id: "C", text: "JavaScript can no longer be emitted" },
      { id: "D", text: "All strict checks are disabled" }
    ],
    correctOptionId: "A",
    explanation: "Skipping declaration-file checking can improve build performance but means those files receive less checking.",
    tags: ["skipLibCheck", "tradeoffs"]
  },

  {
    id: "typescript-configuration-q-035",
    quizId: "quiz_typescript_configuration",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `forceConsistentCasingInFileNames` help prevent?",
    options: [
      { id: "A", text: "Import path casing mismatches that can behave differently across file systems" },
      { id: "B", text: "Incorrect variable types" },
      { id: "C", text: "Missing npm packages" },
      { id: "D", text: "Invalid CSS class names" }
    ],
    correctOptionId: "A",
    explanation: "The option helps ensure file-name casing is used consistently in imports.",
    tags: ["file-names", "cross-platform"]
  },

  {
    id: "typescript-configuration-q-036",
    quizId: "quiz_typescript_configuration",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `incremental: true` allow TypeScript to do?",
    options: [
      { id: "A", text: "Reuse information from previous compilations to speed up subsequent builds" },
      { id: "B", text: "Compile TypeScript one character at a time" },
      { id: "C", text: "Automatically upgrade TypeScript" },
      { id: "D", text: "Disable type checking after the first build" }
    ],
    correctOptionId: "A",
    explanation: "Incremental compilation stores build information so later compilations can avoid unnecessary work.",
    tags: ["incremental", "build", "performance"]
  },

  {
    id: "typescript-configuration-q-037",
    quizId: "quiz_typescript_configuration",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of project references in TypeScript?",
    options: [
      { id: "A", text: "To structure large TypeScript codebases into separately buildable projects" },
      { id: "B", text: "To reference GitHub repositories from CSS" },
      { id: "C", text: "To replace npm dependencies" },
      { id: "D", text: "To create browser bookmarks" }
    ],
    correctOptionId: "A",
    explanation: "Project references allow large codebases to be divided into smaller TypeScript projects with explicit relationships.",
    tags: ["project-references", "large-projects"]
  },

  {
    id: "typescript-configuration-q-038",
    quizId: "quiz_typescript_configuration",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which compiler option is required when using TypeScript project references with build mode?",
    options: [
      { id: "A", text: "composite" },
      { id: "B", text: "browser" },
      { id: "C", text: "referenceMode" },
      { id: "D", text: "projectBuild" }
    ],
    correctOptionId: "A",
    explanation: "Referenced projects generally need `composite: true` so TypeScript can enforce the requirements necessary for project references.",
    tags: ["project-references", "composite"]
  },

  {
    id: "typescript-configuration-q-039",
    quizId: "quiz_typescript_configuration",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `tsc --noEmit` commonly do in a CI pipeline?",
    options: [
      { id: "A", text: "Checks the project for TypeScript errors without producing JavaScript files" },
      { id: "B", text: "Deletes the build output" },
      { id: "C", text: "Installs TypeScript" },
      { id: "D", text: "Runs unit tests automatically" }
    ],
    correctOptionId: "A",
    explanation: "A no-emit type-checking step is useful when a separate bundler handles production output.",
    tags: ["tsc", "noEmit", "CI"]
  },

  {
    id: "typescript-configuration-q-040",
    quizId: "quiz_typescript_configuration",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the difference between TypeScript type checking and bundling?",
    options: [
      { id: "A", text: "Type checking verifies types, while bundling combines and transforms application modules for delivery" },
      { id: "B", text: "They are always exactly the same process" },
      { id: "C", text: "Bundling only checks TypeScript types" },
      { id: "D", text: "Type checking only creates CSS" }
    ],
    correctOptionId: "A",
    explanation: "Modern toolchains often separate TypeScript's type checking from the bundler's responsibility for application output.",
    tags: ["build", "bundlers", "type-checking"]
  },

  {
    id: "typescript-configuration-q-041",
    quizId: "quiz_typescript_configuration",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "A project uses Vite for production builds and wants TypeScript errors to fail CI. Which approach is reasonable?",
    options: [
      { id: "A", text: "Run `tsc --noEmit` separately as a type-checking step" },
      { id: "B", text: "Remove TypeScript from the project" },
      { id: "C", text: "Use only `npm install`" },
      { id: "D", text: "Disable strict mode in CI" }
    ],
    correctOptionId: "A",
    explanation: "A dedicated `tsc --noEmit` step provides explicit TypeScript type checking without requiring TypeScript to produce the final bundled assets.",
    tags: ["vite", "tsc", "CI"]
  },

  {
    id: "typescript-configuration-q-042",
    quizId: "quiz_typescript_configuration",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should generated `dist` files generally not be treated as TypeScript source input?",
    options: [
      { id: "A", text: "They are build artifacts and checking them as source can create unnecessary duplication or conflicts" },
      { id: "B", text: "TypeScript cannot generate JavaScript" },
      { id: "C", text: "dist files are always CSS" },
      { id: "D", text: "The compiler only accepts files from node_modules" }
    ],
    correctOptionId: "A",
    explanation: "Build output should normally be separated from source input to keep the project clean and avoid processing generated files as source.",
    tags: ["dist", "build", "exclude"]
  },

  {
    id: "typescript-configuration-q-043",
    quizId: "quiz_typescript_configuration",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does the `extends` field in `tsconfig.json` allow?",
    options: [
      { id: "A", text: "A configuration to inherit settings from another configuration file" },
      { id: "B", text: "A class to inherit from another class" },
      { id: "C", text: "An npm package to inherit JavaScript code" },
      { id: "D", text: "A TypeScript interface to inherit runtime behavior" }
    ],
    correctOptionId: "A",
    explanation: "A tsconfig can extend another configuration, allowing shared compiler settings to be centralized.",
    tags: ["tsconfig", "extends", "configuration"]
  },

  {
    id: "typescript-configuration-q-044",
    quizId: "quiz_typescript_configuration",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can a team use a shared base tsconfig?",
    options: [
      { id: "A", text: "To keep common compiler settings consistent across multiple projects" },
      { id: "B", text: "To share runtime database connections" },
      { id: "C", text: "To replace Git configuration" },
      { id: "D", text: "To avoid using TypeScript files" }
    ],
    correctOptionId: "A",
    explanation: "Shared configurations reduce duplication and help multiple packages or applications follow consistent TypeScript rules.",
    tags: ["tsconfig", "extends", "monorepo"]
  },

  {
    id: "typescript-configuration-q-045",
    quizId: "quiz_typescript_configuration",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `resolveJsonModule` allow in a TypeScript project?",
    options: [
      { id: "A", text: "Importing JSON files as modules with type information" },
      { id: "B", text: "Compiling JSON into CSS" },
      { id: "C", text: "Using JSON instead of package.json" },
      { id: "D", text: "Converting every object into JSON automatically" }
    ],
    correctOptionId: "A",
    explanation: "`resolveJsonModule` enables TypeScript to resolve JSON imports and infer their types.",
    tags: ["resolveJsonModule", "json"]
  },

  {
    id: "typescript-configuration-q-046",
    quizId: "quiz_typescript_configuration",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A TypeScript project compiles successfully locally but fails on Linux because an import uses the wrong filename casing. Which setting helps catch this earlier?",
    options: [
      { id: "A", text: "strictNullChecks" },
      { id: "B", text: "forceConsistentCasingInFileNames" },
      { id: "C", text: "noEmit" },
      { id: "D", text: "declaration" }
    ],
    correctOptionId: "B",
    explanation: "Consistent file-name casing prevents cross-platform import problems caused by case-sensitive versus case-insensitive file systems.",
    tags: ["file-names", "cross-platform", "configuration"]
  },

  {
    id: "typescript-configuration-q-047",
    quizId: "quiz_typescript_configuration",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A library author wants consumers to receive TypeScript types without shipping the original `.ts` source as the primary API artifact. Which compiler option is especially relevant?",
    options: [
      { id: "A", text: "declaration" },
      { id: "B", text: "noEmit" },
      { id: "C", text: "allowJs" },
      { id: "D", text: "checkJs" }
    ],
    correctOptionId: "A",
    explanation: "`declaration: true` generates `.d.ts` files describing the library's public types.",
    tags: ["declaration", "libraries", "d.ts"]
  },

  {
    id: "typescript-configuration-q-048",
    quizId: "quiz_typescript_configuration",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which configuration best represents a strict application where TypeScript checks source but another build tool generates the final JavaScript?",
    options: [
      { id: "A", text: "{ \"compilerOptions\": { \"strict\": true, \"noEmit\": true } }" },
      { id: "B", text: "{ \"compilerOptions\": { \"strict\": false, \"noEmit\": false } }" },
      { id: "C", text: "{ \"compilerOptions\": { \"allowJs\": true, \"checkJs\": false } }" },
      { id: "D", text: "{ \"compilerOptions\": { \"declaration\": false, \"target\": \"none\" } }" }
    ],
    correctOptionId: "A",
    explanation: "`strict` enables strong type checking while `noEmit` lets another tool own the final build output.",
    tags: ["strict", "noEmit", "build"]
  },

  {
    id: "typescript-configuration-q-049",
    quizId: "quiz_typescript_configuration",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A large monorepo contains multiple TypeScript packages that depend on one another. Which TypeScript feature is specifically designed to improve project organization and incremental builds across package boundaries?",
    options: [
      { id: "A", text: "Project references" },
      { id: "B", text: "Literal types" },
      { id: "C", text: "Enums" },
      { id: "D", text: "Function overloads" }
    ],
    correctOptionId: "A",
    explanation: "Project references allow TypeScript projects to reference and build other TypeScript projects in a structured way.",
    tags: ["project-references", "monorepo", "build"]
  },

  {
    id: "typescript-configuration-q-050",
    quizId: "quiz_typescript_configuration",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A production TypeScript application needs strong type safety, browser APIs, clean separation between `src` and `dist`, and source-map debugging. Which combination is most appropriate?",
    options: [
      { id: "A", text: "`strict: true`, appropriate `lib` including DOM, `rootDir: \"src\"`, `outDir: \"dist\"`, and `sourceMap: true`" },
      { id: "B", text: "`strict: false`, `rootDir: \"dist\"`, and no source maps" },
      { id: "C", text: "`noEmit: true`, `rootDir: \"dist\"`, and no DOM library" },
      { id: "D", text: "`allowJs: true`, `checkJs: false`, and `outDir: \"src\"`" }
    ],
    correctOptionId: "A",
    explanation: "This configuration combines strong checking, browser API declarations, clear source/output separation, and useful debugging information.",
    tags: ["tsconfig", "strict", "lib", "rootDir", "outDir", "sourceMap"]
  }
];

export default typescriptConfigurationQuestions;