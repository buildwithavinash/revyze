const typescriptFundamentalsQuestions = [
  {
    id: "typescript-fundamentals-q-001",
    quizId: "quiz_typescript_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which keyword is commonly used to declare a variable whose type should not be reassigned?",
    options: [
      { id: "A", text: "var" },
      { id: "B", text: "let" },
      { id: "C", text: "const" },
      { id: "D", text: "static" }
    ],
    correctOptionId: "C",
    explanation: "`const` prevents reassignment of the variable binding. TypeScript can also infer the variable's type from its initializer.",
    tags: ["variables", "const"]
  },

  {
    id: "typescript-fundamentals-q-002",
    quizId: "quiz_typescript_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which annotation correctly declares `username` as a string?",
    options: [
      { id: "A", text: "let username: string;" },
      { id: "B", text: "let username -> string;" },
      { id: "C", text: "let username = string;" },
      { id: "D", text: "string username;" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript annotations use a colon followed by the type, such as `let username: string;`.",
    tags: ["type-annotations", "string"]
  },

  {
    id: "typescript-fundamentals-q-003",
    quizId: "quiz_typescript_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which TypeScript type represents numeric values?",
    options: [
      { id: "A", text: "integer" },
      { id: "B", text: "number" },
      { id: "C", text: "numeric" },
      { id: "D", text: "float" }
    ],
    correctOptionId: "B",
    explanation: "TypeScript uses the `number` type for JavaScript numbers, including integers and floating-point values.",
    tags: ["primitive-types", "number"]
  },

  {
    id: "typescript-fundamentals-q-004",
    quizId: "quiz_typescript_fundamentals",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which type represents a boolean value?",
    options: [
      { id: "A", text: "bool" },
      { id: "B", text: "BooleanValue" },
      { id: "C", text: "boolean" },
      { id: "D", text: "logical" }
    ],
    correctOptionId: "C",
    explanation: "The primitive TypeScript type for `true` and `false` is `boolean`.",
    tags: ["primitive-types", "boolean"]
  },

  {
    id: "typescript-fundamentals-q-005",
    quizId: "quiz_typescript_fundamentals",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What type does TypeScript normally infer for `const score = 95`?",
    options: [
      { id: "A", text: "number" },
      { id: "B", text: "string" },
      { id: "C", text: "any" },
      { id: "D", text: "unknown" }
    ],
    correctOptionId: "A",
    explanation: "Because `95` is a numeric value, TypeScript infers `score` as a number type.",
    tags: ["type-inference", "number"]
  },

  {
    id: "typescript-fundamentals-q-006",
    quizId: "quiz_typescript_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about TypeScript type annotations is correct?",
    options: [
      { id: "A", text: "They always change the JavaScript value at runtime" },
      { id: "B", text: "They tell the compiler what type a value is expected to have" },
      { id: "C", text: "They are required for every variable" },
      { id: "D", text: "They can only be used with functions" }
    ],
    correctOptionId: "B",
    explanation: "Type annotations provide static type information to TypeScript. They do not perform runtime conversion.",
    tags: ["type-annotations", "fundamentals"]
  },

  {
    id: "typescript-fundamentals-q-007",
    quizId: "quiz_typescript_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens here?\n\n`let age: number = \"23\";`",
    options: [
      { id: "A", text: "TypeScript reports a type error" },
      { id: "B", text: "TypeScript automatically converts the string to a number" },
      { id: "C", text: "The variable becomes type any" },
      { id: "D", text: "The code is always valid" }
    ],
    correctOptionId: "A",
    explanation: "A string value cannot be assigned to a variable explicitly typed as `number` without an appropriate conversion.",
    tags: ["type-errors", "type-annotations"]
  },

  {
    id: "typescript-fundamentals-q-008",
    quizId: "quiz_typescript_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly declares an array of strings?",
    options: [
      { id: "A", text: "string{}" },
      { id: "B", text: "string[]" },
      { id: "C", text: "array<string>" },
      { id: "D", text: "strings[]" }
    ],
    correctOptionId: "B",
    explanation: "`string[]` is the standard shorthand syntax for an array whose elements are strings.",
    tags: ["arrays", "type-annotations"]
  },

  {
    id: "typescript-fundamentals-q-009",
    quizId: "quiz_typescript_fundamentals",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which alternative is equivalent to `number[]`?",
    options: [
      { id: "A", text: "Numbers<number>" },
      { id: "B", text: "List(number)" },
      { id: "C", text: "Array<number>" },
      { id: "D", text: "number<Array>" }
    ],
    correctOptionId: "C",
    explanation: "`Array<number>` and `number[]` both describe arrays whose elements are numbers.",
    tags: ["arrays", "generics"]
  },

  {
    id: "typescript-fundamentals-q-010",
    quizId: "quiz_typescript_fundamentals",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What type should normally be used for a function that returns no useful value?",
    options: [
      { id: "A", text: "empty" },
      { id: "B", text: "undefined" },
      { id: "C", text: "void" },
      { id: "D", text: "none" }
    ],
    correctOptionId: "C",
    explanation: "`void` is commonly used to describe functions whose return value is not intended to be used.",
    tags: ["functions", "void"]
  },

  {
    id: "typescript-fundamentals-q-011",
    quizId: "quiz_typescript_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which function declaration correctly types both its parameter and return value?",
    options: [
      { id: "A", text: "function add(a: number, b: number): number { return a + b; }" },
      { id: "B", text: "function add(a number, b number) number { return a + b; }" },
      { id: "C", text: "function add(number a, number b): number { return a + b; }" },
      { id: "D", text: "function add(a -> number, b -> number): number { return a + b; }" }
    ],
    correctOptionId: "A",
    explanation: "Parameters are annotated with `: type`, and the return type is placed after the closing parameter list.",
    tags: ["functions", "type-annotations"]
  },

  {
    id: "typescript-fundamentals-q-012",
    quizId: "quiz_typescript_fundamentals",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "If TypeScript can infer a function's return type accurately, is an explicit return annotation always required?",
    options: [
      { id: "A", text: "Yes, every function must have one" },
      { id: "B", text: "Only arrow functions require one" },
      { id: "C", text: "No, TypeScript can often infer the return type" },
      { id: "D", text: "Only functions returning strings require one" }
    ],
    correctOptionId: "C",
    explanation: "TypeScript can infer function return types from the implementation, although explicit annotations can improve clarity and enforce intended APIs.",
    tags: ["functions", "type-inference"]
  },

  {
    id: "typescript-fundamentals-q-013",
    quizId: "quiz_typescript_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main benefit of type inference?",
    options: [
      { id: "A", text: "It removes JavaScript from the project" },
      { id: "B", text: "It reduces unnecessary annotations while still providing static type information" },
      { id: "C", text: "It disables compiler errors" },
      { id: "D", text: "It makes all values immutable" }
    ],
    correctOptionId: "B",
    explanation: "Inference allows TypeScript to determine types automatically, keeping code concise without giving up static checking.",
    tags: ["type-inference", "fundamentals"]
  },

  {
    id: "typescript-fundamentals-q-014",
    quizId: "quiz_typescript_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which type represents a value that may be either a string or a number?",
    options: [
      { id: "A", text: "string & number" },
      { id: "B", text: "string + number" },
      { id: "C", text: "string | number" },
      { id: "D", text: "string / number" }
    ],
    correctOptionId: "C",
    explanation: "The `|` operator creates a union type, meaning the value can be one of the specified types.",
    tags: ["union-types", "types"]
  },

  {
    id: "typescript-fundamentals-q-015",
    quizId: "quiz_typescript_fundamentals",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is `unknown` safer than `any`?",
    options: [
      { id: "A", text: "unknown prevents all values from being stored" },
      { id: "B", text: "unknown requires appropriate narrowing before most operations" },
      { id: "C", text: "unknown automatically validates external data" },
      { id: "D", text: "unknown converts values to strings" }
    ],
    correctOptionId: "B",
    explanation: "`unknown` can contain any value, but TypeScript requires you to establish a more specific type before performing many operations.",
    tags: ["unknown", "any", "type-safety"]
  },

  {
    id: "typescript-fundamentals-q-016",
    quizId: "quiz_typescript_fundamentals",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which type should generally be avoided when you want strong static checking?",
    options: [
      { id: "A", text: "string" },
      { id: "B", text: "unknown" },
      { id: "C", text: "number" },
      { id: "D", text: "any" }
    ],
    correctOptionId: "D",
    explanation: "`any` disables many of TypeScript's checks for the value, so excessive use can undermine the benefits of static typing.",
    tags: ["any", "type-safety"]
  },

  {
    id: "typescript-fundamentals-q-017",
    quizId: "quiz_typescript_fundamentals",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `null` represent in TypeScript?",
    options: [
      { id: "A", text: "The absence of an intentional object or value" },
      { id: "B", text: "An automatically generated error" },
      { id: "C", text: "A number equal to zero" },
      { id: "D", text: "An empty array" }
    ],
    correctOptionId: "A",
    explanation: "`null` represents an intentional absence of a value. How it interacts with other types depends on compiler settings such as `strictNullChecks`.",
    tags: ["null", "strict-null-checks"]
  },

  {
    id: "typescript-fundamentals-q-018",
    quizId: "quiz_typescript_fundamentals",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `undefined` commonly represent?",
    options: [
      { id: "A", text: "A value that has not been assigned or is absent" },
      { id: "B", text: "A value that must always be zero" },
      { id: "C", text: "A failed TypeScript compilation" },
      { id: "D", text: "An empty object" }
    ],
    correctOptionId: "A",
    explanation: "`undefined` is commonly used when a value is absent or has not been assigned.",
    tags: ["undefined", "primitive-types"]
  },

  {
    id: "typescript-fundamentals-q-019",
    quizId: "quiz_typescript_fundamentals",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `let value: string | null` allow?",
    options: [
      { id: "A", text: "Only strings" },
      { id: "B", text: "Only null" },
      { id: "C", text: "Either a string or null" },
      { id: "D", text: "Any JavaScript value" }
    ],
    correctOptionId: "C",
    explanation: "The union explicitly allows two possibilities: a string value or `null`.",
    tags: ["union-types", "null"]
  },

  {
    id: "typescript-fundamentals-q-020",
    quizId: "quiz_typescript_fundamentals",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement best describes TypeScript's primitive `string` type?",
    options: [
      { id: "A", text: "It represents only strings created with the String constructor" },
      { id: "B", text: "It represents JavaScript primitive string values" },
      { id: "C", text: "It represents arrays of characters only" },
      { id: "D", text: "It represents both strings and numbers" }
    ],
    correctOptionId: "B",
    explanation: "The lowercase `string` type describes JavaScript primitive string values.",
    tags: ["string", "primitive-types"]
  },

  {
    id: "typescript-fundamentals-q-021",
    quizId: "quiz_typescript_fundamentals",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when you assign a boolean to a variable inferred as number?",
    options: [
      { id: "A", text: "TypeScript reports a type error" },
      { id: "B", text: "TypeScript silently changes the variable to boolean" },
      { id: "C", text: "The variable becomes any" },
      { id: "D", text: "The boolean is automatically converted to 1 or 0" }
    ],
    correctOptionId: "A",
    explanation: "Once TypeScript has inferred a variable as `number`, assigning a boolean violates that inferred type.",
    tags: ["type-inference", "type-errors"]
  },

  {
    id: "typescript-fundamentals-q-022",
    quizId: "quiz_typescript_fundamentals",
    order: 22,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about TypeScript is correct?",
    options: [
      { id: "A", text: "TypeScript types are primarily checked at compile time" },
      { id: "B", text: "TypeScript types automatically validate every API response at runtime" },
      { id: "C", text: "TypeScript replaces JavaScript's runtime engine" },
      { id: "D", text: "TypeScript prevents all runtime errors" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript provides static analysis during development and compilation. It does not automatically provide runtime validation.",
    tags: ["compile-time", "runtime", "fundamentals"]
  },

  {
    id: "typescript-fundamentals-q-023",
    quizId: "quiz_typescript_fundamentals",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax creates a tuple containing a string followed by a number?",
    options: [
      { id: "A", text: "string[number]" },
      { id: "B", text: "[string, number]" },
      { id: "C", text: "(string, number)" },
      { id: "D", text: "tuple<string, number>" }
    ],
    correctOptionId: "B",
    explanation: "`[string, number]` describes a tuple with a string at position 0 and a number at position 1.",
    tags: ["tuples", "arrays"]
  },

  {
    id: "typescript-fundamentals-q-024",
    quizId: "quiz_typescript_fundamentals",
    order: 24,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the type `object` generally describe?",
    options: [
      { id: "A", text: "Only plain objects created with `{}`" },
      { id: "B", text: "Non-primitive values" },
      { id: "C", text: "Only arrays" },
      { id: "D", text: "Only functions" }
    ],
    correctOptionId: "B",
    explanation: "The TypeScript `object` type represents non-primitive values, including arrays and functions.",
    tags: ["object-type", "primitive-types"]
  },

  {
    id: "typescript-fundamentals-q-025",
    quizId: "quiz_typescript_fundamentals",
    order: 25,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is using `Object` with a capital O generally discouraged as a TypeScript type?",
    options: [
      { id: "A", text: "It is not valid TypeScript" },
      { id: "B", text: "It describes a broad boxed-object type and is usually less precise than more specific types" },
      { id: "C", text: "It only represents numbers" },
      { id: "D", text: "It prevents object creation" }
    ],
    correctOptionId: "B",
    explanation: "The capitalized `Object` type is usually too broad and can accept values that developers may not intend. More precise types are preferable.",
    tags: ["object-type", "best-practices"]
  },

  {
    id: "typescript-fundamentals-q-026",
    quizId: "quiz_typescript_fundamentals",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `never` type indicate in a basic sense?",
    options: [
      { id: "A", text: "A value can be any type" },
      { id: "B", text: "A value can be undefined" },
      { id: "C", text: "A value represents a state that should never occur" },
      { id: "D", text: "A value must be null" }
    ],
    correctOptionId: "C",
    explanation: "`never` represents impossible states or code paths that cannot produce a normal value.",
    tags: ["never", "types"]
  },

  {
    id: "typescript-fundamentals-q-027",
    quizId: "quiz_typescript_fundamentals",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which return type is appropriate for a function that always throws an error?",
    options: [
      { id: "A", text: "never" },
      { id: "B", text: "void" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "A function that always throws and therefore never completes normally can have the return type `never`.",
    tags: ["never", "functions"]
  },

  {
    id: "typescript-fundamentals-q-028",
    quizId: "quiz_typescript_fundamentals",
    order: 28,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which type is used for a function that does not return a useful result?",
    options: [
      { id: "A", text: "never" },
      { id: "B", text: "void" },
      { id: "C", text: "empty" },
      { id: "D", text: "none" }
    ],
    correctOptionId: "B",
    explanation: "`void` is commonly used when a function executes an action but its returned value is not useful to the caller.",
    tags: ["void", "functions"]
  },

  {
    id: "typescript-fundamentals-q-029",
    quizId: "quiz_typescript_fundamentals",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a union type allow?",
    options: [
      { id: "A", text: "A value to satisfy multiple types simultaneously" },
      { id: "B", text: "A value to be one of several possible types" },
      { id: "C", text: "A value to skip type checking" },
      { id: "D", text: "A value to become immutable" }
    ],
    correctOptionId: "B",
    explanation: "Union types express alternatives, such as `string | number`.",
    tags: ["union-types"]
  },

  {
    id: "typescript-fundamentals-q-030",
    quizId: "quiz_typescript_fundamentals",
    order: 30,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which operator is used to create a union type?",
    options: [
      { id: "A", text: "&" },
      { id: "B", text: "?" },
      { id: "C", text: "|" },
      { id: "D", text: ":" }
    ],
    correctOptionId: "C",
    explanation: "The vertical bar `|` combines types into a union.",
    tags: ["union-types", "syntax"]
  },

  {
    id: "typescript-fundamentals-q-031",
    quizId: "quiz_typescript_fundamentals",
    order: 31,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a type annotation on a function parameter primarily accomplish?",
    options: [
      { id: "A", text: "It tells TypeScript what type of argument the function expects" },
      { id: "B", text: "It converts the argument at runtime" },
      { id: "C", text: "It makes the argument constant" },
      { id: "D", text: "It automatically validates API input" }
    ],
    correctOptionId: "A",
    explanation: "Parameter annotations provide compile-time information about what values a function is intended to accept.",
    tags: ["functions", "parameters"]
  },

  {
    id: "typescript-fundamentals-q-032",
    quizId: "quiz_typescript_fundamentals",
    order: 32,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration correctly describes an optional function parameter?",
    options: [
      { id: "A", text: "function greet(name: string optional)" },
      { id: "B", text: "function greet(name?: string)" },
      { id: "C", text: "function greet(optional name: string)" },
      { id: "D", text: "function greet(name: optional<string>)" }
    ],
    correctOptionId: "B",
    explanation: "A `?` after the parameter name marks it as optional.",
    tags: ["functions", "optional-parameters"]
  },

  {
    id: "typescript-fundamentals-q-033",
    quizId: "quiz_typescript_fundamentals",
    order: 33,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does an optional parameter generally mean?",
    options: [
      { id: "A", text: "The caller may omit the argument" },
      { id: "B", text: "The parameter can only contain null" },
      { id: "C", text: "The function can never receive that argument" },
      { id: "D", text: "The parameter becomes any" }
    ],
    correctOptionId: "A",
    explanation: "An optional parameter does not have to be supplied by the caller, so the implementation should account for its possible absence.",
    tags: ["functions", "optional-parameters"]
  },

  {
    id: "typescript-fundamentals-q-034",
    quizId: "quiz_typescript_fundamentals",
    order: 34,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly types an object with `name` and `age`?",
    options: [
      { id: "A", text: "let user: { name: string; age: number };" },
      { id: "B", text: "let user: object(name: string, age: number);" },
      { id: "C", text: "let user: [name: string, age: number];" },
      { id: "D", text: "let user: <name: string, age: number>;" }
    ],
    correctOptionId: "A",
    explanation: "An inline object type uses braces with property names and their types.",
    tags: ["object-types", "type-annotations"]
  },

  {
    id: "typescript-fundamentals-q-035",
    quizId: "quiz_typescript_fundamentals",
    order: 35,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `readonly` communicate in a TypeScript property declaration?",
    options: [
      { id: "A", text: "The property cannot be read" },
      { id: "B", text: "The property cannot be assigned through that type after initialization" },
      { id: "C", text: "The property is hidden from JavaScript" },
      { id: "D", text: "The property is automatically private" }
    ],
    correctOptionId: "B",
    explanation: "`readonly` prevents assignments through the TypeScript type system after initialization; it does not make the property runtime-private or deeply immutable.",
    tags: ["readonly", "object-types"]
  },

  {
    id: "typescript-fundamentals-q-036",
    quizId: "quiz_typescript_fundamentals",
    order: 36,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `any` type allow?",
    options: [
      { id: "A", text: "Only strings and numbers" },
      { id: "B", text: "A value to bypass many TypeScript type checks" },
      { id: "C", text: "Only null and undefined" },
      { id: "D", text: "Only object values" }
    ],
    correctOptionId: "B",
    explanation: "`any` opts a value out of much of TypeScript's static type checking.",
    tags: ["any", "type-safety"]
  },

  {
    id: "typescript-fundamentals-q-037",
    quizId: "quiz_typescript_fundamentals",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between `unknown` and `any`?",
    options: [
      { id: "A", text: "unknown is only for strings" },
      { id: "B", text: "any cannot store objects" },
      { id: "C", text: "unknown requires narrowing before unsafe operations, while any generally does not" },
      { id: "D", text: "They are exactly the same" }
    ],
    correctOptionId: "C",
    explanation: "`unknown` preserves type safety by requiring the value to be narrowed before most operations, whereas `any` largely bypasses those checks.",
    tags: ["unknown", "any", "narrowing"]
  },

  {
    id: "typescript-fundamentals-q-038",
    quizId: "quiz_typescript_fundamentals",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does TypeScript infer for `let items = [1, 2, 3]`?",
    options: [
      { id: "A", text: "string[]" },
      { id: "B", text: "number[]" },
      { id: "C", text: "any[]" },
      { id: "D", text: "[number, number, number]" }
    ],
    correctOptionId: "B",
    explanation: "Because all elements are numeric, TypeScript normally infers the array as `number[]` rather than a fixed-length tuple.",
    tags: ["type-inference", "arrays"]
  },

  {
    id: "typescript-fundamentals-q-039",
    quizId: "quiz_typescript_fundamentals",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does TypeScript infer for `const user = { name: \"Avi\", age: 23 }`?",
    options: [
      { id: "A", text: "{ name: string; age: number }" },
      { id: "B", text: "string" },
      { id: "C", text: "any" },
      { id: "D", text: "unknown" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript infers the object's property types from their values, producing an object shape with `name: string` and `age: number`.",
    tags: ["type-inference", "objects"]
  },

  {
    id: "typescript-fundamentals-q-040",
    quizId: "quiz_typescript_fundamentals",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about `const` and literal inference is most accurate?",
    options: [
      { id: "A", text: "Every const variable is always inferred as a literal type" },
      { id: "B", text: "const has no effect on inference" },
      { id: "C", text: "A const primitive may retain a literal type, but object properties can still be widened" },
      { id: "D", text: "const automatically makes every nested property readonly" }
    ],
    correctOptionId: "C",
    explanation: "TypeScript often gives `const` primitive variables narrower literal types, while mutable object properties are generally widened unless additional measures such as `as const` are used.",
    tags: ["type-inference", "const", "literal-types"]
  },

  {
    id: "typescript-fundamentals-q-041",
    quizId: "quiz_typescript_fundamentals",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `as const` generally do?",
    options: [
      { id: "A", text: "Converts the value to a JavaScript constant at runtime" },
      { id: "B", text: "Narrows literal values and applies readonly semantics to the resulting structure" },
      { id: "C", text: "Converts every value to a string" },
      { id: "D", text: "Turns the value into any" }
    ],
    correctOptionId: "B",
    explanation: "`as const` gives the expression the narrowest literal types and makes object properties and tuple elements readonly in the type system.",
    tags: ["as-const", "literal-types"]
  },

  {
    id: "typescript-fundamentals-q-042",
    quizId: "quiz_typescript_fundamentals",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which compiler option is especially important for strict handling of null and undefined?",
    options: [
      { id: "A", text: "noEmit" },
      { id: "B", text: "strictNullChecks" },
      { id: "C", text: "removeComments" },
      { id: "D", text: "sourceMap" }
    ],
    correctOptionId: "B",
    explanation: "`strictNullChecks` treats `null` and `undefined` as distinct types that must be handled explicitly where appropriate.",
    tags: ["strict-null-checks", "compiler-options"]
  },

  {
    id: "typescript-fundamentals-q-043",
    quizId: "quiz_typescript_fundamentals",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the benefit of enabling `strict` mode in a TypeScript project?",
    options: [
      { id: "A", text: "It enables a collection of stronger type-checking rules" },
      { id: "B", text: "It disables all compiler errors" },
      { id: "C", text: "It automatically validates API responses" },
      { id: "D", text: "It prevents JavaScript from executing" }
    ],
    correctOptionId: "A",
    explanation: "`strict` enables a broad family of strictness checks designed to catch more potential type errors.",
    tags: ["strict-mode", "compiler-options"]
  },

  {
    id: "typescript-fundamentals-q-044",
    quizId: "quiz_typescript_fundamentals",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `noImplicitAny` help detect?",
    options: [
      { id: "A", text: "Every explicit use of unknown" },
      { id: "B", text: "Cases where TypeScript would otherwise assign an implicit any" },
      { id: "C", text: "All runtime JavaScript errors" },
      { id: "D", text: "Every nullable value" }
    ],
    correctOptionId: "B",
    explanation: "`noImplicitAny` reports locations where TypeScript would otherwise infer an implicit `any` type.",
    tags: ["noImplicitAny", "compiler-options"]
  },

  {
    id: "typescript-fundamentals-q-045",
    quizId: "quiz_typescript_fundamentals",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which example demonstrates type inference rather than explicit annotation?",
    options: [
      { id: "A", text: "let name: string = \"Avi\";" },
      { id: "B", text: "let name = \"Avi\";" },
      { id: "C", text: "let name: unknown = \"Avi\";" },
      { id: "D", text: "let name: any = \"Avi\";" }
    ],
    correctOptionId: "B",
    explanation: "In `let name = \"Avi\"`, TypeScript determines the type from the initializer without an explicit type annotation.",
    tags: ["type-inference", "type-annotations"]
  },

  {
    id: "typescript-fundamentals-q-046",
    quizId: "quiz_typescript_fundamentals",
    order: 46,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes TypeScript's type system?",
    options: [
      { id: "A", text: "It is primarily a static type system used during development and compilation" },
      { id: "B", text: "It replaces JavaScript's runtime type system" },
      { id: "C", text: "It guarantees that no runtime errors can occur" },
      { id: "D", text: "It automatically validates all data received from users" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript analyzes types statically. Runtime behavior remains JavaScript behavior, so runtime errors and untrusted data still require appropriate handling.",
    tags: ["type-system", "runtime", "compile-time"]
  },

  {
    id: "typescript-fundamentals-q-047",
    quizId: "quiz_typescript_fundamentals",
    order: 47,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Suppose `let value: string | number`. Why can't TypeScript always allow `value.toUpperCase()` immediately?",
    options: [
      { id: "A", text: "Because TypeScript does not support strings" },
      { id: "B", text: "Because number may not have the `toUpperCase` method" },
      { id: "C", text: "Because union types cannot contain strings" },
      { id: "D", text: "Because methods cannot be called in TypeScript" }
    ],
    correctOptionId: "B",
    explanation: "The variable could currently be a number, and numbers do not have `toUpperCase`. The value must first be narrowed to string.",
    tags: ["union-types", "narrowing", "methods"]
  },

  {
    id: "typescript-fundamentals-q-048",
    quizId: "quiz_typescript_fundamentals",
    order: 48,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which check can narrow a `string | number` value to a string?",
    options: [
      { id: "A", text: "if (typeof value === \"string\")" },
      { id: "B", text: "if (value === number)" },
      { id: "C", text: "if (value.type === string)" },
      { id: "D", text: "if (typeof string === value)" }
    ],
    correctOptionId: "A",
    explanation: "The `typeof` check is a standard narrowing mechanism for primitive unions.",
    tags: ["narrowing", "typeof", "union-types"]
  },

  {
    id: "typescript-fundamentals-q-049",
    quizId: "quiz_typescript_fundamentals",
    order: 49,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is generally better when TypeScript already has enough information to infer a variable's type?",
    options: [
      { id: "A", text: "Always add redundant annotations to every variable" },
      { id: "B", text: "Prefer inference when it keeps the code clear, while using annotations where they improve intent or API contracts" },
      { id: "C", text: "Convert the variable to any" },
      { id: "D", text: "Disable type checking" }
    ],
    correctOptionId: "B",
    explanation: "Good TypeScript code balances inference and explicit annotations. Annotations are especially valuable at public boundaries, function contracts, and places where intent would otherwise be unclear.",
    tags: ["type-inference", "best-practices"]
  },

  {
    id: "typescript-fundamentals-q-050",
    quizId: "quiz_typescript_fundamentals",
    order: 50,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A function receives data from an API and the data's shape is not trusted. Which approach best follows TypeScript fundamentals?",
    options: [
      { id: "A", text: "Type the response as any and access properties freely" },
      { id: "B", text: "Assume the API always matches the expected interface" },
      { id: "C", text: "Treat the external value as unknown, validate or narrow it, then use a specific type" },
      { id: "D", text: "Disable strict type checking for the API module" }
    ],
    correctOptionId: "C",
    explanation: "TypeScript types alone do not validate runtime data. Treating untrusted data as `unknown` and validating it before use preserves a stronger type-safety boundary.",
    tags: ["unknown", "api", "runtime-validation", "type-safety"]
  }
];

export default typescriptFundamentalsQuestions;