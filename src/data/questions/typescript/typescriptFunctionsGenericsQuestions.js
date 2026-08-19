const typescriptFunctionsGenericsQuestions = [
  {
    id: "typescript-functions-generics-q-001",
    quizId: "quiz_typescript_functions_generics",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which function correctly declares that it accepts a string and returns a number?",
    options: [
      { id: "A", text: "function length(value: string): number { return value.length; }" },
      { id: "B", text: "function length(value: number): string { return value.length; }" },
      { id: "C", text: "function length(value: string) -> number { return value.length; }" },
      { id: "D", text: "function length(value: string): string { return value.length; }" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript uses `parameter: Type` for parameters and `: ReturnType` after the parameter list for the return type.",
    tags: ["functions", "return-types", "parameters"]
  },

  {
    id: "typescript-functions-generics-q-002",
    quizId: "quiz_typescript_functions_generics",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `void` return type indicate for a function?",
    options: [
      { id: "A", text: "The function can never execute" },
      { id: "B", text: "The function does not produce a useful return value" },
      { id: "C", text: "The function always returns null" },
      { id: "D", text: "The function must return undefined explicitly" }
    ],
    correctOptionId: "B",
    explanation: "`void` is commonly used for functions whose return value should not be used, such as functions that perform side effects.",
    tags: ["functions", "void"]
  },

  {
    id: "typescript-functions-generics-q-003",
    quizId: "quiz_typescript_functions_generics",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which function parameter is optional?",
    options: [
      { id: "A", text: "function greet(name: string) {}" },
      { id: "B", text: "function greet(name?: string) {}" },
      { id: "C", text: "function greet(?name: string) {}" },
      { id: "D", text: "function greet(optional name: string) {}" }
    ],
    correctOptionId: "B",
    explanation: "The `?` after a parameter name makes that parameter optional.",
    tags: ["functions", "optional-parameters"]
  },

  {
    id: "typescript-functions-generics-q-004",
    quizId: "quiz_typescript_functions_generics",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which function correctly uses a default parameter?",
    options: [
      { id: "A", text: "function greet(name: string = \"Guest\") { return name; }" },
      { id: "B", text: "function greet(name =: string \"Guest\") { return name; }" },
      { id: "C", text: "function greet(default name: string) { return name; }" },
      { id: "D", text: "function greet(name: string default \"Guest\") { return name; }" }
    ],
    correctOptionId: "A",
    explanation: "A default parameter can also be type annotated: `name: string = \"Guest\"`.",
    tags: ["functions", "default-parameters"]
  },

  {
    id: "typescript-functions-generics-q-005",
    quizId: "quiz_typescript_functions_generics",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does TypeScript infer for the return type of this function?\n\n`function add(a: number, b: number) { return a + b; }`",
    options: [
      { id: "A", text: "string" },
      { id: "B", text: "boolean" },
      { id: "C", text: "number" },
      { id: "D", text: "any" }
    ],
    correctOptionId: "C",
    explanation: "TypeScript can infer the return type from the returned expression. Since both operands are numbers, the return type is `number`.",
    tags: ["functions", "type-inference"]
  },

  {
    id: "typescript-functions-generics-q-006",
    quizId: "quiz_typescript_functions_generics",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly types an arrow function that accepts a number and returns a string?",
    options: [
      { id: "A", text: "const format = (value: number): string => String(value);" },
      { id: "B", text: "const format: (value: number) => string = String(value);" },
      { id: "C", text: "const format = (value number): string => String(value);" },
      { id: "D", text: "const format = (number value): string => String(value);" }
    ],
    correctOptionId: "A",
    explanation: "Arrow function parameters are annotated with `parameter: type`, followed by the return type before the arrow.",
    tags: ["functions", "arrow-functions"]
  },

  {
    id: "typescript-functions-generics-q-007",
    quizId: "quiz_typescript_functions_generics",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which type describes a function that accepts two numbers and returns a number?",
    options: [
      { id: "A", text: "(a: number, b: number) => number" },
      { id: "B", text: "number => (a: number, b: number)" },
      { id: "C", text: "(a, b): number -> number" },
      { id: "D", text: "function<number>(a, b)" }
    ],
    correctOptionId: "A",
    explanation: "Function types use `(parameters) => returnType` syntax.",
    tags: ["functions", "function-types"]
  },

  {
    id: "typescript-functions-generics-q-008",
    quizId: "quiz_typescript_functions_generics",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which function signature allows any number of string arguments?",
    options: [
      { id: "A", text: "function join(...items: string[]): string" },
      { id: "B", text: "function join(items...: string): string" },
      { id: "C", text: "function join(...items: string): string" },
      { id: "D", text: "function join(items: ...string[]): string" }
    ],
    correctOptionId: "A",
    explanation: "Rest parameters use `...name: Type[]` to collect an arbitrary number of arguments.",
    tags: ["functions", "rest-parameters"]
  },

  {
    id: "typescript-functions-generics-q-009",
    quizId: "quiz_typescript_functions_generics",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of a function overload signature?",
    options: [
      { id: "A", text: "To provide multiple valid call signatures for one implementation" },
      { id: "B", text: "To execute two function bodies simultaneously" },
      { id: "C", text: "To make a function run asynchronously" },
      { id: "D", text: "To disable return type checking" }
    ],
    correctOptionId: "A",
    explanation: "Function overloads allow callers to see multiple supported signatures while the implementation provides the actual runtime behavior.",
    tags: ["functions", "overloads"]
  },

  {
    id: "typescript-functions-generics-q-010",
    quizId: "quiz_typescript_functions_generics",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which overload declaration is valid?",
    options: [
      { id: "A", text: "function parse(value: string): number;\nfunction parse(value: number): string;\nfunction parse(value: string | number) { return value; }" },
      { id: "B", text: "function parse(value: string): number {}\nfunction parse(value: number): string {}" },
      { id: "C", text: "function parse(value: string): number => value;" },
      { id: "D", text: "overload function parse(value: string): number;" }
    ],
    correctOptionId: "A",
    explanation: "Overload signatures end with semicolons and are followed by one implementation signature/body.",
    tags: ["functions", "overloads"]
  },

  {
    id: "typescript-functions-generics-q-011",
    quizId: "quiz_typescript_functions_generics",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main problem with using `any` for a function that should preserve the input type?",
    options: [
      { id: "A", text: "It prevents the function from being called" },
      { id: "B", text: "It loses useful type information" },
      { id: "C", text: "It automatically converts values to strings" },
      { id: "D", text: "It makes the function generic" }
    ],
    correctOptionId: "B",
    explanation: "`any` removes much of TypeScript's static checking. A generic can preserve the relationship between input and output types.",
    tags: ["functions", "any", "type-safety"]
  },

  {
    id: "typescript-functions-generics-q-012",
    quizId: "quiz_typescript_functions_generics",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this generic function preserve?\n\n`function identity<T>(value: T): T { return value; }`",
    options: [
      { id: "A", text: "The input and output must both be strings" },
      { id: "B", text: "The specific input type is preserved as the output type" },
      { id: "C", text: "The input is always converted to any" },
      { id: "D", text: "The output is always unknown" }
    ],
    correctOptionId: "B",
    explanation: "The same type parameter `T` appears in both the parameter and return type, preserving their relationship.",
    tags: ["generics", "type-relationships"]
  },

  {
    id: "typescript-functions-generics-q-013",
    quizId: "quiz_typescript_functions_generics",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What type is inferred for `result`?\n\n`const result = identity(42);`",
    options: [
      { id: "A", text: "string" },
      { id: "B", text: "boolean" },
      { id: "C", text: "number" },
      { id: "D", text: "unknown" }
    ],
    correctOptionId: "C",
    explanation: "TypeScript infers `T` as `number` from the argument `42`, so `result` is a number.",
    tags: ["generics", "inference"]
  },

  {
    id: "typescript-functions-generics-q-014",
    quizId: "quiz_typescript_functions_generics",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When might you explicitly provide a generic type argument?",
    options: [
      { id: "A", text: "When TypeScript cannot infer the intended type or when you want to make the intended type explicit" },
      { id: "B", text: "Only when using JavaScript" },
      { id: "C", text: "To make a function execute at runtime" },
      { id: "D", text: "To disable inference permanently" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript often infers generic arguments automatically, but explicit type arguments can clarify or constrain the intended usage.",
    tags: ["generics", "inference"]
  },

  {
    id: "typescript-functions-generics-q-015",
    quizId: "quiz_typescript_functions_generics",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which call explicitly supplies `string` as the generic type argument?",
    options: [
      { id: "A", text: "identity<string>(\"hello\")" },
      { id: "B", text: "identity<string>(number, \"hello\")" },
      { id: "C", text: "identity(string)<\"hello\">" },
      { id: "D", text: "identity<T = string>(\"hello\")" }
    ],
    correctOptionId: "A",
    explanation: "Generic type arguments are supplied using angle brackets after the function name.",
    tags: ["generics", "type-arguments"]
  },

  {
    id: "typescript-functions-generics-q-016",
    quizId: "quiz_typescript_functions_generics",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this constraint mean?\n\n`function getId<T extends { id: number }>(item: T): number { return item.id; }`",
    options: [
      { id: "A", text: "T must be exactly `{ id: number }`" },
      { id: "B", text: "T must have at least an `id` property compatible with number" },
      { id: "C", text: "T must be a number" },
      { id: "D", text: "T cannot have additional properties" }
    ],
    correctOptionId: "B",
    explanation: "A generic constraint specifies the minimum structure T must satisfy. T can contain additional properties.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-017",
    quizId: "quiz_typescript_functions_generics",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is `T extends { length: number }` useful?",
    options: [
      { id: "A", text: "It allows the function to safely access `length` on T" },
      { id: "B", text: "It forces T to be an array only" },
      { id: "C", text: "It converts T into an object" },
      { id: "D", text: "It makes length optional" }
    ],
    correctOptionId: "A",
    explanation: "The constraint guarantees that values of T have a numeric `length` property, allowing the function to use it safely.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-018",
    quizId: "quiz_typescript_functions_generics",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which generic constraint allows a function to accept only objects that have a `name` string property?",
    options: [
      { id: "A", text: "T extends { name: string }" },
      { id: "B", text: "T implements { name: string }" },
      { id: "C", text: "T = { name: string }" },
      { id: "D", text: "T requires { name: string }" }
    ],
    correctOptionId: "A",
    explanation: "Generic constraints use `extends` followed by the required type structure.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-019",
    quizId: "quiz_typescript_functions_generics",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which function safely returns the first element of an array while preserving its element type?",
    options: [
      { id: "A", text: "function first<T>(items: T[]): T { return items[0]; }" },
      { id: "B", text: "function first(items: any[]): string { return items[0]; }" },
      { id: "C", text: "function first<T>(items: T[]): any[] { return items[0]; }" },
      { id: "D", text: "function first(items: object[]): object[] { return items[0]; }" }
    ],
    correctOptionId: "A",
    explanation: "The generic parameter represents the array's element type and is also used as the return type.",
    tags: ["generics", "arrays", "type-relationships"]
  },

  {
    id: "typescript-functions-generics-q-020",
    quizId: "quiz_typescript_functions_generics",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the inferred return type of `first([\"a\", \"b\"])` for the generic function `first<T>(items: T[]): T`?",
    options: [
      { id: "A", text: "number" },
      { id: "B", text: "string" },
      { id: "C", text: "string[]" },
      { id: "D", text: "unknown[]" }
    ],
    correctOptionId: "B",
    explanation: "The array contains strings, so T is inferred as `string` and the function returns a `string`.",
    tags: ["generics", "inference", "arrays"]
  },

  {
    id: "typescript-functions-generics-q-021",
    quizId: "quiz_typescript_functions_generics",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which generic function correctly accepts two values of the same type?",
    options: [
      { id: "A", text: "function pair<T>(a: T, b: T): [T, T] { return [a, b]; }" },
      { id: "B", text: "function pair<T>(a: T, b: number): [T, T] { return [a, b]; }" },
      { id: "C", text: "function pair<T>(a: T): [T, T] { return [a, a]; }" },
      { id: "D", text: "function pair<T>(a: any, b: any): T[] { return [a, b]; }" }
    ],
    correctOptionId: "A",
    explanation: "Using T for both parameters establishes that both arguments should share the same inferred type.",
    tags: ["generics", "tuples", "type-relationships"]
  },

  {
    id: "typescript-functions-generics-q-022",
    quizId: "quiz_typescript_functions_generics",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a function use two generic parameters such as `<K, V>`?",
    options: [
      { id: "A", text: "To represent two potentially different but related types" },
      { id: "B", text: "To make both types become any" },
      { id: "C", text: "Because TypeScript requires exactly two parameters" },
      { id: "D", text: "To create two runtime classes" }
    ],
    correctOptionId: "A",
    explanation: "Multiple generic parameters allow a function to model relationships between multiple independently typed values.",
    tags: ["generics", "multiple-type-parameters"]
  },

  {
    id: "typescript-functions-generics-q-023",
    quizId: "quiz_typescript_functions_generics",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which function correctly models a key-value pair with independent key and value types?",
    options: [
      { id: "A", text: "function makePair<K, V>(key: K, value: V): [K, V] { return [key, value]; }" },
      { id: "B", text: "function makePair<K>(key: K, value: K): [K, K] { return [key, value]; }" },
      { id: "C", text: "function makePair<V>(key: K, value: V): [K, V] { return [key, value]; }" },
      { id: "D", text: "function makePair(key: K, value: V): [K, V] { return [key, value]; }" }
    ],
    correctOptionId: "A",
    explanation: "K and V independently represent the key and value types.",
    tags: ["generics", "multiple-type-parameters", "tuples"]
  },

  {
    id: "typescript-functions-generics-q-024",
    quizId: "quiz_typescript_functions_generics",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `keyof` in a generic constraint such as `K extends keyof T`?",
    options: [
      { id: "A", text: "It restricts K to keys that exist on T" },
      { id: "B", text: "It converts K into a value" },
      { id: "C", text: "It makes every property of T optional" },
      { id: "D", text: "It restricts T to strings only" }
    ],
    correctOptionId: "A",
    explanation: "`keyof T` produces a union of the known property keys of T, allowing K to be constrained to valid keys.",
    tags: ["generics", "keyof", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-025",
    quizId: "quiz_typescript_functions_generics",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this function provide?\n\n`function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }`",
    options: [
      { id: "A", text: "A type-safe way to access a property while preserving its specific property type" },
      { id: "B", text: "A way to access only numeric properties" },
      { id: "C", text: "A way to turn every property into string" },
      { id: "D", text: "A runtime reflection API" }
    ],
    correctOptionId: "A",
    explanation: "K is restricted to valid keys of T, and `T[K]` represents the type of the selected property.",
    tags: ["generics", "keyof", "indexed-access"]
  },

  {
    id: "typescript-functions-generics-q-026",
    quizId: "quiz_typescript_functions_generics",
    order: 26,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is `K extends keyof T` safer than using `key: string` in a generic property accessor?",
    options: [
      { id: "A", text: "It prevents callers from passing keys that are not known to exist on T" },
      { id: "B", text: "It makes every property readonly" },
      { id: "C", text: "It forces all property values to be strings" },
      { id: "D", text: "It removes generic inference" }
    ],
    correctOptionId: "A",
    explanation: "The constraint ties the key type directly to the object's known keys, allowing invalid property names to be rejected at compile time.",
    tags: ["generics", "keyof", "type-safety"]
  },

  {
    id: "typescript-functions-generics-q-027",
    quizId: "quiz_typescript_functions_generics",
    order: 27,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a generic constraint primarily used for?",
    options: [
      { id: "A", text: "To specify requirements that a generic type argument must satisfy" },
      { id: "B", text: "To prevent all generic inference" },
      { id: "C", text: "To make a type parameter runtime-visible" },
      { id: "D", text: "To force every generic type to be identical" }
    ],
    correctOptionId: "A",
    explanation: "Constraints limit which types may be supplied while allowing the generic to remain reusable.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-028",
    quizId: "quiz_typescript_functions_generics",
    order: 28,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which constraint allows a generic function to call `.toUpperCase()` safely?",
    options: [
      { id: "A", text: "T extends string" },
      { id: "B", text: "T extends number" },
      { id: "C", text: "T extends boolean" },
      { id: "D", text: "T extends object" }
    ],
    correctOptionId: "A",
    explanation: "Only a constraint compatible with string guarantees that `.toUpperCase()` exists.",
    tags: ["generics", "constraints", "strings"]
  },

  {
    id: "typescript-functions-generics-q-029",
    quizId: "quiz_typescript_functions_generics",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which function correctly constrains its generic parameter to objects containing an `id`?",
    options: [
      { id: "A", text: "function save<T extends { id: number }>(item: T): T { return item; }" },
      { id: "B", text: "function save<T implements { id: number }>(item: T): T { return item; }" },
      { id: "C", text: "function save<T requires { id: number }>(item: T): T { return item; }" },
      { id: "D", text: "function save<T = { id: number }>(item: T): T { return item; }" }
    ],
    correctOptionId: "A",
    explanation: "Generic constraints use `extends`, and the structural constraint guarantees the required `id` property.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-030",
    quizId: "quiz_typescript_functions_generics",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the key difference between a generic and a union parameter in a function?",
    options: [
      { id: "A", text: "A generic can preserve relationships between input and output types, while a simple union often loses that specific relationship" },
      { id: "B", text: "Unions always provide more specific information than generics" },
      { id: "C", text: "Generics only work with objects" },
      { id: "D", text: "Unions are runtime features but generics are not" }
    ],
    correctOptionId: "A",
    explanation: "Generics can capture a specific type and reuse it across multiple positions in a signature, preserving relationships between values and results.",
    tags: ["generics", "unions", "type-relationships"]
  },

  {
    id: "typescript-functions-generics-q-031",
    quizId: "quiz_typescript_functions_generics",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider `function wrap<T>(value: T): T[] { return [value]; }`. What is the return type of `wrap({ id: 1 })`?",
    options: [
      { id: "A", text: "{ id: number }[]" },
      { id: "B", text: "object" },
      { id: "C", text: "number[]" },
      { id: "D", text: "any[]" }
    ],
    correctOptionId: "A",
    explanation: "T is inferred from the object argument, so the function returns an array containing that same object shape.",
    tags: ["generics", "inference", "arrays"]
  },

  {
    id: "typescript-functions-generics-q-032",
    quizId: "quiz_typescript_functions_generics",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which generic signature best represents a function that transforms a value of type T into a value of type U?",
    options: [
      { id: "A", text: "function mapValue<T, U>(value: T, transform: (value: T) => U): U" },
      { id: "B", text: "function mapValue<T>(value: T, transform: string): T" },
      { id: "C", text: "function mapValue<U>(value: T, transform: U): T" },
      { id: "D", text: "function mapValue<T, U>(value: T): T { return value; }" }
    ],
    correctOptionId: "A",
    explanation: "T represents the input type and U represents the transformed output type.",
    tags: ["generics", "higher-order-functions", "type-relationships"]
  },

  {
    id: "typescript-functions-generics-q-033",
    quizId: "quiz_typescript_functions_generics",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can a generic callback type be more precise than `(value: any) => any`?",
    options: [
      { id: "A", text: "It preserves relationships between the callback input and output types" },
      { id: "B", text: "It automatically validates data at runtime" },
      { id: "C", text: "It prevents callbacks from being called" },
      { id: "D", text: "It removes all type inference" }
    ],
    correctOptionId: "A",
    explanation: "Generics allow callback signatures to express how one type relates to another without abandoning static type information.",
    tags: ["generics", "callbacks", "type-safety"]
  },

  {
    id: "typescript-functions-generics-q-034",
    quizId: "quiz_typescript_functions_generics",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about generic type parameters is correct?",
    options: [
      { id: "A", text: "A generic parameter exists only for TypeScript's type system and normally has no runtime value" },
      { id: "B", text: "Every generic parameter becomes a JavaScript variable" },
      { id: "C", text: "Generic parameters are automatically stored in objects" },
      { id: "D", text: "Generic parameters are JavaScript constructors" }
    ],
    correctOptionId: "A",
    explanation: "Type parameters are compile-time constructs and are erased from normal emitted JavaScript.",
    tags: ["generics", "runtime", "type-erasure"]
  },

  {
    id: "typescript-functions-generics-q-035",
    quizId: "quiz_typescript_functions_generics",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does this constraint allow?\n\n`function logLength<T extends { length: number }>(value: T): number { return value.length; }`",
    options: [
      { id: "A", text: "Only arrays can be passed" },
      { id: "B", text: "Any type with a compatible numeric length property can be passed" },
      { id: "C", text: "Only strings can be passed" },
      { id: "D", text: "Only objects with exactly one property can be passed" }
    ],
    correctOptionId: "B",
    explanation: "The constraint describes a required structure rather than a specific concrete type, so strings, arrays, and custom objects with numeric length can satisfy it.",
    tags: ["generics", "constraints", "structural-typing"]
  },

  {
    id: "typescript-functions-generics-q-036",
    quizId: "quiz_typescript_functions_generics",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which generic constraint allows indexing an object using a key parameter?",
    options: [
      { id: "A", text: "K extends keyof T" },
      { id: "B", text: "K extends typeof T" },
      { id: "C", text: "K extends valueof T" },
      { id: "D", text: "K extends properties T" }
    ],
    correctOptionId: "A",
    explanation: "`keyof T` produces the keys of T, and constraining K with it ensures the key is valid for that object type.",
    tags: ["generics", "keyof", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-037",
    quizId: "quiz_typescript_functions_generics",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `T[K]` represent when `K extends keyof T`?",
    options: [
      { id: "A", text: "The runtime value of K" },
      { id: "B", text: "The type of the property selected by K on T" },
      { id: "C", text: "All keys of T" },
      { id: "D", text: "A boolean indicating whether K exists" }
    ],
    correctOptionId: "B",
    explanation: "`T[K]` is an indexed access type that retrieves the type associated with property key K in T.",
    tags: ["generics", "indexed-access", "keyof"]
  },

  {
    id: "typescript-functions-generics-q-038",
    quizId: "quiz_typescript_functions_generics",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which generic function returns a property value while retaining its exact property type?",
    options: [
      { id: "A", text: "function read<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }" },
      { id: "B", text: "function read<T>(obj: T, key: string): any { return obj[key]; }" },
      { id: "C", text: "function read<T>(obj: T, key: keyof T): T { return obj[key]; }" },
      { id: "D", text: "function read(obj: object, key: string): object { return obj[key]; }" }
    ],
    correctOptionId: "A",
    explanation: "The relationship between K and T is preserved, allowing the return type to be the exact property type `T[K]`.",
    tags: ["generics", "keyof", "indexed-access"]
  },

  {
    id: "typescript-functions-generics-q-039",
    quizId: "quiz_typescript_functions_generics",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What problem does this constraint solve?\n\n`function sortBy<T, K extends keyof T>(items: T[], key: K)`",
    options: [
      { id: "A", text: "It prevents callers from specifying a property that does not exist on T" },
      { id: "B", text: "It forces all T properties to be numbers" },
      { id: "C", text: "It converts K into a runtime string" },
      { id: "D", text: "It prevents arrays from being passed" }
    ],
    correctOptionId: "A",
    explanation: "K can only be one of T's known keys, so invalid property names are rejected by the type system.",
    tags: ["generics", "keyof", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-040",
    quizId: "quiz_typescript_functions_generics",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about generic constraints is false?",
    options: [
      { id: "A", text: "A constraint can require certain properties" },
      { id: "B", text: "A constraint can use another type parameter" },
      { id: "C", text: "A constrained type parameter can still represent many concrete types" },
      { id: "D", text: "A constraint means T must be exactly equal to the constraint type" }
    ],
    correctOptionId: "D",
    explanation: "A constraint specifies a minimum requirement. T may be a more specific subtype that satisfies the constraint.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-functions-generics-q-041",
    quizId: "quiz_typescript_functions_generics",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which function signature correctly models a callback that receives T and returns U?",
    options: [
      { id: "A", text: "function transform<T, U>(value: T, callback: (input: T) => U): U" },
      { id: "B", text: "function transform<T, U>(value: T, callback: U): T" },
      { id: "C", text: "function transform<T>(value: T, callback: U): U" },
      { id: "D", text: "function transform<T, U>(value: U, callback: (input: T) => T): T" }
    ],
    correctOptionId: "A",
    explanation: "The callback consumes T and produces U, so the overall function also returns U.",
    tags: ["generics", "callbacks", "type-relationships"]
  },

  {
    id: "typescript-functions-generics-q-042",
    quizId: "quiz_typescript_functions_generics",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of a default generic type parameter such as `<T = string>`?",
    options: [
      { id: "A", text: "It provides a fallback type when the caller does not specify or infer T" },
      { id: "B", text: "It prevents T from ever being changed" },
      { id: "C", text: "It forces every call to use string" },
      { id: "D", text: "It creates a runtime default value" }
    ],
    correctOptionId: "A",
    explanation: "A default generic parameter supplies a default type when no other type argument is provided.",
    tags: ["generics", "default-type-parameters"]
  },

  {
    id: "typescript-functions-generics-q-043",
    quizId: "quiz_typescript_functions_generics",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which declaration uses a default generic type parameter correctly?",
    options: [
      { id: "A", text: "function createBox<T = string>(value: T): T { return value; }" },
      { id: "B", text: "function createBox<T: string>(value: T): T { return value; }" },
      { id: "C", text: "function createBox<T default string>(value: T): T { return value; }" },
      { id: "D", text: "function createBox<T == string>(value: T): T { return value; }" }
    ],
    correctOptionId: "A",
    explanation: "Generic defaults use the `=` syntax: `<T = string>`.",
    tags: ["generics", "default-type-parameters"]
  },

  {
    id: "typescript-functions-generics-q-044",
    quizId: "quiz_typescript_functions_generics",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might a developer choose a generic over several overloads for a simple identity-like function?",
    options: [
      { id: "A", text: "A generic can express the relationship once without listing every possible concrete type" },
      { id: "B", text: "Generics are always shorter than every function" },
      { id: "C", text: "Overloads cannot return values" },
      { id: "D", text: "Generics execute faster at runtime" }
    ],
    correctOptionId: "A",
    explanation: "Generics can capture a reusable relationship between input and output types without enumerating every possible type.",
    tags: ["generics", "overloads", "design"]
  },

  {
    id: "typescript-functions-generics-q-045",
    quizId: "quiz_typescript_functions_generics",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a major advantage of generic constraints over using `any` when a function needs specific members?",
    options: [
      { id: "A", text: "Constraints preserve type safety while guaranteeing the members the implementation needs" },
      { id: "B", text: "Constraints disable all checking" },
      { id: "C", text: "Constraints create runtime validation automatically" },
      { id: "D", text: "Constraints make every argument a string" }
    ],
    correctOptionId: "A",
    explanation: "A constraint tells TypeScript what the generic must support, allowing safe member access without abandoning the specific type.",
    tags: ["generics", "constraints", "any", "type-safety"]
  },

  {
    id: "typescript-functions-generics-q-046",
    quizId: "quiz_typescript_functions_generics",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A function should accept any array but return the same array element type. Which signature is best?",
    options: [
      { id: "A", text: "function copy<T>(items: T[]): T[] { return [...items]; }" },
      { id: "B", text: "function copy(items: any[]): object[] { return [...items]; }" },
      { id: "C", text: "function copy(items: unknown[]): any[] { return [...items]; }" },
      { id: "D", text: "function copy<T>(items: T[]): unknown[] { return [...items]; }" }
    ],
    correctOptionId: "A",
    explanation: "The generic parameter preserves the element type from the input array to the output array.",
    tags: ["generics", "arrays", "type-relationships"]
  },

  {
    id: "typescript-functions-generics-q-047",
    quizId: "quiz_typescript_functions_generics",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design best represents a function that accepts an object and a valid property key, then returns that property's value?",
    options: [
      { id: "A", text: "function pick<T, K extends keyof T>(obj: T, key: K): T[K]" },
      { id: "B", text: "function pick<T>(obj: T, key: string): T" },
      { id: "C", text: "function pick<T>(obj: object, key: any): object" },
      { id: "D", text: "function pick<K>(obj: K, key: K): K[]" }
    ],
    correctOptionId: "A",
    explanation: "This pattern combines generics, `keyof`, and indexed access to preserve the exact relationship between the object, key, and returned property type.",
    tags: ["generics", "keyof", "indexed-access"]
  },

  {
    id: "typescript-functions-generics-q-048",
    quizId: "quiz_typescript_functions_generics",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes generic inference?",
    options: [
      { id: "A", text: "TypeScript can often determine generic type arguments from the function's arguments" },
      { id: "B", text: "Generic arguments must always be manually specified" },
      { id: "C", text: "Generic inference happens only at runtime" },
      { id: "D", text: "Generic inference always produces any" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript frequently infers generic parameters from the values passed to a function.",
    tags: ["generics", "inference"]
  },

  {
    id: "typescript-functions-generics-q-049",
    quizId: "quiz_typescript_functions_generics",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the strongest reason to avoid unnecessarily using `any` in generic utility functions?",
    options: [
      { id: "A", text: "It can erase relationships and guarantees that generics can preserve" },
      { id: "B", text: "It makes JavaScript syntax invalid" },
      { id: "C", text: "It prevents functions from accepting objects" },
      { id: "D", text: "It always causes a runtime exception" }
    ],
    correctOptionId: "A",
    explanation: "Generics allow utilities to remain flexible while preserving useful type relationships. `any` often discards that information.",
    tags: ["generics", "any", "type-safety"]
  },

  {
    id: "typescript-functions-generics-q-050",
    quizId: "quiz_typescript_functions_generics",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A reusable API helper should accept different response types while preserving the exact response type for the caller. Which design is most appropriate?",
    options: [
      { id: "A", text: "function request<T>(url: string): Promise<T>" },
      { id: "B", text: "function request(url: string): Promise<any>" },
      { id: "C", text: "function request(url: string): Promise<object>" },
      { id: "D", text: "function request(url: string): Promise<unknown[]> for every response" }
    ],
    correctOptionId: "A",
    explanation: "A generic response type lets callers specify or infer the expected response shape while preserving that type through the Promise.",
    tags: ["generics", "api", "promises", "type-relationships"]
  }
];

export default typescriptFunctionsGenericsQuestions;