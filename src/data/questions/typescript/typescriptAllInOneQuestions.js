const typescriptAllInOneQuestions = [
  {
    id: "typescript-all-in-one-q-001",
    quizId: "quiz_typescript_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of TypeScript?",
    options: [
      { id: "A", text: "To replace JavaScript with a completely different runtime" },
      { id: "B", text: "To add static type checking and other developer tooling on top of JavaScript" },
      { id: "C", text: "To make JavaScript run only in browsers" },
      { id: "D", text: "To prevent JavaScript from using objects" }
    ],
    correctOptionId: "B",
    explanation: "TypeScript extends JavaScript with a type system and tooling that can catch many problems during development before the code runs.",
    tags: ["typescript", "types", "fundamentals"]
  },

  {
    id: "typescript-all-in-one-q-002",
    quizId: "quiz_typescript_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is type inference in TypeScript?",
    options: [
      { id: "A", text: "TypeScript automatically determines a type from available code information" },
      { id: "B", text: "TypeScript converts every value to string" },
      { id: "C", text: "TypeScript requires every variable to have an explicit annotation" },
      { id: "D", text: "TypeScript removes all types during compilation" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript can often infer a variable's type from its initializer or surrounding context, reducing the need for explicit annotations.",
    tags: ["type-inference", "fundamentals"]
  },

  {
    id: "typescript-all-in-one-q-003",
    quizId: "quiz_typescript_all_in_one",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What type does TypeScript infer for `age`?",
    options: [
      { id: "A", text: "string" },
      { id: "B", text: "any" },
      { id: "C", text: "number" },
      { id: "D", text: "unknown" }
    ],
    correctOptionId: "C",
    explanation: "The numeric literal `23` causes TypeScript to infer `age` as a number.",
    tags: ["type-inference", "primitive-types"]
  },

  {
    id: "typescript-all-in-one-q-004",
    quizId: "quiz_typescript_all_in_one",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which TypeScript type represents a JavaScript string value?",
    options: [
      { id: "A", text: "String" },
      { id: "B", text: "text" },
      { id: "C", text: "str" },
      { id: "D", text: "string" }
    ],
    correctOptionId: "D",
    explanation: "The primitive TypeScript type for JavaScript strings is lowercase `string`.",
    tags: ["primitive-types", "string"]
  },

  {
    id: "typescript-all-in-one-q-005",
    quizId: "quiz_typescript_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which type is generally preferable to `any` when you receive a value whose type is not yet known?",
    options: [
      { id: "A", text: "unknown" },
      { id: "B", text: "never" },
      { id: "C", text: "void" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`unknown` can hold any value but requires appropriate type narrowing before most operations, making it safer than `any`.",
    tags: ["unknown", "any", "type-safety"]
  },

  {
    id: "typescript-all-in-one-q-006",
    quizId: "quiz_typescript_all_in_one",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why can `any` reduce TypeScript's safety?",
    options: [
      { id: "A", text: "It makes values immutable" },
      { id: "B", text: "It disables many type-checking restrictions for the value" },
      { id: "C", text: "It prevents functions from being called" },
      { id: "D", text: "It only allows numbers" }
    ],
    correctOptionId: "B",
    explanation: "Once a value is typed as `any`, TypeScript generally allows operations that would otherwise require type checking.",
    tags: ["any", "type-safety"]
  },

  {
    id: "typescript-all-in-one-q-007",
    quizId: "quiz_typescript_all_in_one",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the union type `string | number` mean?",
    options: [
      { id: "A", text: "The value must simultaneously be both a string and a number" },
      { id: "B", text: "The value can be either a string or a number" },
      { id: "C", text: "The value can only be null" },
      { id: "D", text: "The value is automatically converted between both types" }
    ],
    correctOptionId: "B",
    explanation: "A union type allows a value to belong to one of several specified types.",
    tags: ["union-types", "type-system"]
  },

  {
    id: "typescript-all-in-one-q-008",
    quizId: "quiz_typescript_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of type narrowing?",
    options: [
      { id: "A", text: "To reduce the number of files in a project" },
      { id: "B", text: "To remove all union types from the source code" },
      { id: "C", text: "To allow TypeScript to determine a more specific type within a particular code path" },
      { id: "D", text: "To convert TypeScript into JavaScript manually" }
    ],
    correctOptionId: "C",
    explanation: "Narrowing uses control-flow information such as `typeof`, equality checks, or custom type guards to determine a more specific type.",
    tags: ["narrowing", "union-types"]
  },

  {
    id: "typescript-all-in-one-q-009",
    quizId: "quiz_typescript_all_in_one",
    order: 9,
    type: "code",
    difficulty: "Intermediate",
    question: "What does TypeScript know about `value` inside the `if` block?",
    options: [
      { id: "A", text: "It is narrowed to string" },
      { id: "B", text: "It is narrowed to boolean" },
      { id: "C", text: "It is narrowed to number" },
      { id: "D", text: "It remains exactly `string | number`" }
    ],
    correctOptionId: "A",
    explanation: "The `typeof value === \"string\"` check narrows the union to `string` inside that branch.",
    tags: ["narrowing", "typeof"]
  },

  {
    id: "typescript-all-in-one-q-010",
    quizId: "quiz_typescript_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between `interface` and `type` in TypeScript?",
    options: [
      { id: "A", text: "Interfaces can only describe primitive values" },
      { id: "B", text: "Type aliases can only describe functions" },
      { id: "C", text: "They are completely unrelated features" },
      { id: "D", text: "Both can describe object shapes, while type aliases additionally support constructs such as unions and intersections" }
    ],
    correctOptionId: "D",
    explanation: "Both interfaces and type aliases can model object shapes, while type aliases have broader capabilities such as directly expressing unions and intersections.",
    tags: ["interfaces", "type-aliases"]
  },

  {
    id: "typescript-all-in-one-q-011",
    quizId: "quiz_typescript_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax correctly defines an object type using an interface?",
    options: [
      { id: "A", text: "interface User { name: string; age: number }" },
      { id: "B", text: "interface User = { name: string; age: number }" },
      { id: "C", text: "object User { name: string; age: number }" },
      { id: "D", text: "User interface { name: string; age: number }" }
    ],
    correctOptionId: "A",
    explanation: "An interface declaration uses the form `interface Name { ... }`.",
    tags: ["interfaces", "object-types"]
  },

  {
    id: "typescript-all-in-one-q-012",
    quizId: "quiz_typescript_all_in_one",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the optional property syntax `name?: string` mean?",
    options: [
      { id: "A", text: "The property must always be a string" },
      { id: "B", text: "The property may be omitted" },
      { id: "C", text: "The property can only be assigned once" },
      { id: "D", text: "The property is private" }
    ],
    correctOptionId: "B",
    explanation: "The `?` marks a property as optional, meaning an object does not have to provide that property.",
    tags: ["interfaces", "optional-properties"]
  },

  {
    id: "typescript-all-in-one-q-013",
    quizId: "quiz_typescript_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `readonly` modifier do on a property?",
    options: [
      { id: "A", text: "It makes the property inaccessible everywhere" },
      { id: "B", text: "It makes the property optional" },
      { id: "C", text: "It prevents assignment to the property through the TypeScript type after initialization" },
      { id: "D", text: "It converts the property into a constant at runtime" }
    ],
    correctOptionId: "C",
    explanation: "`readonly` is a compile-time restriction preventing assignment to the property after its initial assignment through the type system. It does not itself freeze the object at runtime.",
    tags: ["readonly", "interfaces"]
  },

  {
    id: "typescript-all-in-one-q-014",
    quizId: "quiz_typescript_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an intersection type such as `A & B` represent?",
    options: [
      { id: "A", text: "A value that must satisfy both type A and type B" },
      { id: "B", text: "A value that satisfies either A or B" },
      { id: "C", text: "A value that must be null" },
      { id: "D", text: "A type that can never contain properties" }
    ],
    correctOptionId: "A",
    explanation: "An intersection combines multiple types, requiring the resulting value to satisfy the members of all intersected types.",
    tags: ["intersection-types", "type-aliases"]
  },

  {
    id: "typescript-all-in-one-q-015",
    quizId: "quiz_typescript_all_in_one",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What problem do generics primarily solve?",
    options: [
      { id: "A", text: "They eliminate the need for JavaScript" },
      { id: "B", text: "They allow reusable code to work with different types while preserving type information" },
      { id: "C", text: "They make every value type `any`" },
      { id: "D", text: "They only work with classes" }
    ],
    correctOptionId: "B",
    explanation: "Generics allow reusable functions, types, classes, and other constructs to operate over different types while maintaining relationships between those types.",
    tags: ["generics", "type-safety"]
  },

  {
    id: "typescript-all-in-one-q-016",
    quizId: "quiz_typescript_all_in_one",
    order: 16,
    type: "code",
    difficulty: "Intermediate",
    question: "What type does `result` have when calling `identity(42)`?",
    options: [
      { id: "A", text: "string" },
      { id: "B", text: "any" },
      { id: "C", text: "unknown" },
      { id: "D", text: "number" }
    ],
    correctOptionId: "D",
    explanation: "The generic type parameter is inferred from the argument, so `T` becomes `number` and the result is typed as `number`.",
    tags: ["generics", "inference"]
  },

  {
    id: "git-advanced-workflows-q-017",
    quizId: "quiz_typescript_all_in_one",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `keyof User` produce conceptually?",
    options: [
      { id: "A", text: "A union of the property keys of User" },
      { id: "B", text: "An array containing every User object" },
      { id: "C", text: "The runtime values of User" },
      { id: "D", text: "A new interface named User" }
    ],
    correctOptionId: "A",
    explanation: "`keyof` produces a union of the known property keys of a type.",
    tags: ["keyof", "generics", "type-operators"]
  },

  {
    id: "typescript-all-in-one-q-018",
    quizId: "quiz_typescript_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `typeof` do in a TypeScript type position?",
    options: [
      { id: "A", text: "It always performs JavaScript runtime type checking" },
      { id: "B", text: "It can obtain the type of an existing value for use in a type expression" },
      { id: "C", text: "It converts a value into a string" },
      { id: "D", text: "It creates a new interface" }
    ],
    correctOptionId: "B",
    explanation: "In a type context, `typeof` can derive a type from an existing value, such as `typeof config`.",
    tags: ["typeof", "type-operators"]
  },

  {
    id: "typescript-all-in-one-q-019",
    quizId: "quiz_typescript_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a type assertion?",
    options: [
      { id: "A", text: "A runtime conversion that changes the underlying JavaScript value" },
      { id: "B", text: "A way to tell TypeScript how you want a value to be treated when you have more specific type knowledge" },
      { id: "C", text: "A way to make every value immutable" },
      { id: "D", text: "A replacement for interfaces" }
    ],
    correctOptionId: "B",
    explanation: "A type assertion affects TypeScript's understanding of a value but does not perform runtime conversion.",
    tags: ["type-assertions", "type-system"]
  },

  {
    id: "typescript-all-in-one-q-020",
    quizId: "quiz_typescript_all_in_one",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax is a valid TypeScript type assertion?",
    options: [
      { id: "A", text: "value as string" },
      { id: "B", text: "assert value string" },
      { id: "C", text: "value => string" },
      { id: "D", text: "value type string" }
    ],
    correctOptionId: "A",
    explanation: "The `as` syntax is commonly used for TypeScript type assertions.",
    tags: ["type-assertions"]
  },

  {
    id: "typescript-all-in-one-q-021",
    quizId: "quiz_typescript_all_in_one",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a tuple in TypeScript?",
    options: [
      { id: "A", text: "An object with no properties" },
      { id: "B", text: "An array type with a known number and types of elements at specific positions" },
      { id: "C", text: "A union of every primitive type" },
      { id: "D", text: "A function with multiple return values" }
    ],
    correctOptionId: "B",
    explanation: "Tuples describe arrays with a fixed positional structure, such as `[string, number]`.",
    tags: ["tuples", "arrays"]
  },

  {
    id: "typescript-all-in-one-q-022",
    quizId: "quiz_typescript_all_in_one",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which type represents an array of numbers?",
    options: [
      { id: "A", text: "number{}" },
      { id: "B", text: "Array<number>" },
      { id: "C", text: "number()" },
      { id: "D", text: "numbers[]" }
    ],
    correctOptionId: "B",
    explanation: "`Array<number>` is the generic array syntax for an array whose elements are numbers. `number[]` is an equivalent shorthand.",
    tags: ["arrays", "generics"]
  },

  {
    id: "typescript-all-in-one-q-023",
    quizId: "quiz_typescript_all_in_one",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `never` type generally represent?",
    options: [
      { id: "A", text: "A value that can be any type" },
      { id: "B", text: "A value that is always undefined" },
      { id: "C", text: "A value that never occurs, often seen in functions that never successfully return" },
      { id: "D", text: "A nullable value" }
    ],
    correctOptionId: "C",
    explanation: "`never` represents impossible values or code paths that cannot complete normally, such as a function that always throws.",
    tags: ["never", "advanced-types"]
  },

  {
    id: "typescript-all-in-one-q-024",
    quizId: "quiz_typescript_all_in_one",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `void` return type commonly indicate?",
    options: [
      { id: "A", text: "The function is guaranteed to throw" },
      { id: "B", text: "The function does not provide a useful return value" },
      { id: "C", text: "The function returns any type" },
      { id: "D", text: "The function must return null" }
    ],
    correctOptionId: "B",
    explanation: "`void` is commonly used for functions whose return value is not intended to be used.",
    tags: ["void", "functions"]
  },

  {
    id: "typescript-all-in-one-q-025",
    quizId: "quiz_typescript_all_in_one",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an enum in TypeScript?",
    options: [
      { id: "A", text: "A construct for defining a set of named constants" },
      { id: "B", text: "A replacement for every interface" },
      { id: "C", text: "A special kind of generic function" },
      { id: "D", text: "A JavaScript module loader" }
    ],
    correctOptionId: "A",
    explanation: "Enums provide a way to define named constants, though many modern TypeScript codebases also use unions of literal types for similar modeling needs.",
    tags: ["enums", "literal-types"]
  },

  {
    id: "typescript-all-in-one-q-026",
    quizId: "quiz_typescript_all_in_one",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a string literal type?",
    options: [
      { id: "A", text: "A string that can contain any value" },
      { id: "B", text: "A type representing one or more specific string values" },
      { id: "C", text: "A runtime string object" },
      { id: "D", text: "A string that cannot be changed at runtime" }
    ],
    correctOptionId: "B",
    explanation: "Literal types restrict a value to specific literal values, such as `'admin' | 'user'`.",
    tags: ["literal-types", "unions"]
  },

  {
    id: "typescript-all-in-one-q-027",
    quizId: "quiz_typescript_all_in_one",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a discriminated union?",
    options: [
      { id: "A", text: "A union whose members share a common property that can be used to distinguish between them" },
      { id: "B", text: "A union that only contains numbers" },
      { id: "C", text: "A union created only with interfaces that have no properties" },
      { id: "D", text: "A runtime JavaScript feature" }
    ],
    correctOptionId: "A",
    explanation: "A discriminated union uses a common literal property, often called a discriminant, to identify which member of the union is currently present.",
    tags: ["discriminated-unions", "narrowing"]
  },

  {
    id: "typescript-all-in-one-q-028",
    quizId: "quiz_typescript_all_in_one",
    order: 28,
    type: "code",
    difficulty: "Intermediate",
    question: "Why is the `default` branch useful in this discriminated-union example when combined with `never`?",
    options: [
      { id: "A", text: "It forces JavaScript to execute faster" },
      { id: "B", text: "It can help detect when a new union member has not been handled" },
      { id: "C", text: "It converts the union to an enum" },
      { id: "D", text: "It makes every property optional" }
    ],
    correctOptionId: "B",
    explanation: "Assigning the remaining value to `never` can make the compiler report an error when a new union member is added but not handled.",
    tags: ["discriminated-unions", "never", "exhaustiveness"]
  },

  {
    id: "typescript-all-in-one-q-029",
    quizId: "quiz_typescript_all_in_one",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an index signature describe?",
    options: [
      { id: "A", text: "A type that allows properties accessed through a specified key type" },
      { id: "B", text: "A database index" },
      { id: "C", text: "A function's call stack" },
      { id: "D", text: "A TypeScript compiler option" }
    ],
    correctOptionId: "A",
    explanation: "Index signatures describe objects where property names are not known ahead of time but follow a specified key/value type relationship.",
    tags: ["index-signatures", "object-types"]
  },

  {
    id: "typescript-all-in-one-q-030",
    quizId: "quiz_typescript_all_in_one",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Partial<T>` do?",
    options: [
      { id: "A", text: "Makes all properties of T required" },
      { id: "B", text: "Makes all properties of T optional" },
      { id: "C", text: "Removes every property from T" },
      { id: "D", text: "Converts T into a union" }
    ],
    correctOptionId: "B",
    explanation: "`Partial<T>` is a mapped utility type that makes each property of `T` optional.",
    tags: ["utility-types", "partial"]
  },

  {
    id: "typescript-all-in-one-q-031",
    quizId: "quiz_typescript_all_in_one",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Required<T>` do?",
    options: [
      { id: "A", text: "Makes all properties of T required" },
      { id: "B", text: "Makes all properties readonly" },
      { id: "C", text: "Converts T into any" },
      { id: "D", text: "Removes optional properties completely" }
    ],
    correctOptionId: "A",
    explanation: "`Required<T>` removes optional modifiers from the properties of `T`.",
    tags: ["utility-types", "required"]
  },

  {
    id: "typescript-all-in-one-q-032",
    quizId: "quiz_typescript_all_in_one",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Pick<T, K>` produce?",
    options: [
      { id: "A", text: "A type containing only the selected properties K from T" },
      { id: "B", text: "A type containing every property except K" },
      { id: "C", text: "A tuple containing values from T" },
      { id: "D", text: "A runtime copy of T" }
    ],
    correctOptionId: "A",
    explanation: "`Pick` constructs a type by selecting a subset of properties from another type.",
    tags: ["utility-types", "pick"]
  },

  {
    id: "typescript-all-in-one-q-033",
    quizId: "quiz_typescript_all_in_one",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Omit<T, K>` do?",
    options: [
      { id: "A", text: "Selects only K from T" },
      { id: "B", text: "Removes the specified properties K from T" },
      { id: "C", text: "Makes every property nullable" },
      { id: "D", text: "Converts T to any" }
    ],
    correctOptionId: "B",
    explanation: "`Omit<T, K>` creates a type by removing the specified keys from `T`.",
    tags: ["utility-types", "omit"]
  },

  {
    id: "typescript-all-in-one-q-034",
    quizId: "quiz_typescript_all_in_one",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Record<K, T>` commonly represent?",
    options: [
      { id: "A", text: "An object type whose keys are K and whose values are T" },
      { id: "B", text: "A tuple containing K and T" },
      { id: "C", text: "A function returning K" },
      { id: "D", text: "A readonly array" }
    ],
    correctOptionId: "A",
    explanation: "`Record<K, T>` constructs an object type with keys from `K` and values of type `T`.",
    tags: ["utility-types", "record"]
  },

  {
    id: "typescript-all-in-one-q-035",
    quizId: "quiz_typescript_all_in_one",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a conditional type?",
    options: [
      { id: "A", text: "A type expression that chooses one type based on whether a type relationship is satisfied" },
      { id: "B", text: "A runtime if statement" },
      { id: "C", text: "A replacement for generics" },
      { id: "D", text: "A compiler configuration file" }
    ],
    correctOptionId: "A",
    explanation: "Conditional types use syntax such as `T extends U ? X : Y` to choose a type based on a compile-time relationship.",
    tags: ["conditional-types", "advanced-types"]
  },

  {
    id: "typescript-all-in-one-q-036",
    quizId: "quiz_typescript_all_in_one",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does the `infer` keyword allow inside certain conditional types?",
    options: [
      { id: "A", text: "It allows TypeScript to infer and capture part of a type for use in the conditional branch" },
      { id: "B", text: "It forces a runtime conversion" },
      { id: "C", text: "It disables type inference" },
      { id: "D", text: "It makes all properties readonly" }
    ],
    correctOptionId: "A",
    explanation: "`infer` introduces a type variable that TypeScript can infer from a matched type structure.",
    tags: ["infer", "conditional-types"]
  },

  {
    id: "typescript-all-in-one-q-037",
    quizId: "quiz_typescript_all_in_one",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a mapped type?",
    options: [
      { id: "A", text: "A type that transforms properties of another type by iterating over its keys" },
      { id: "B", text: "A runtime object mapper" },
      { id: "C", text: "A JavaScript array method" },
      { id: "D", text: "A TypeScript module resolver" }
    ],
    correctOptionId: "A",
    explanation: "Mapped types create new types by iterating over keys, allowing modifiers and property types to be transformed systematically.",
    tags: ["mapped-types", "advanced-types"]
  },

  {
    id: "typescript-all-in-one-q-038",
    quizId: "quiz_typescript_all_in_one",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does a generic constraint such as `T extends { id: number }` mean?",
    options: [
      { id: "A", text: "T must be exactly the object `{ id: number }`" },
      { id: "B", text: "T must have at least the required structure described by `{ id: number }`" },
      { id: "C", text: "T cannot contain additional properties" },
      { id: "D", text: "T must be a primitive number" }
    ],
    correctOptionId: "B",
    explanation: "A generic constraint restricts what types can be supplied. `T` must be assignable to the constraint but can contain additional properties.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-all-in-one-q-039",
    quizId: "quiz_typescript_all_in_one",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why are generic constraints useful?",
    options: [
      { id: "A", text: "They allow generic code to safely rely on specific capabilities of T" },
      { id: "B", text: "They eliminate all type checking" },
      { id: "C", text: "They force T to become any" },
      { id: "D", text: "They prevent type inference" }
    ],
    correctOptionId: "A",
    explanation: "A constraint gives generic code guaranteed properties or operations that it can safely use.",
    tags: ["generics", "constraints"]
  },

  {
    id: "typescript-all-in-one-q-040",
    quizId: "quiz_typescript_all_in_one",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `T extends keyof U` communicate in a generic type?",
    options: [
      { id: "A", text: "T must be a key that exists in U" },
      { id: "B", text: "T must be an object containing U" },
      { id: "C", text: "U must be a string" },
      { id: "D", text: "T must equal U" }
    ],
    correctOptionId: "A",
    explanation: "The constraint means the supplied type for `T` must be assignable to the union of keys produced by `keyof U`.",
    tags: ["generics", "keyof", "constraints"]
  },

  {
    id: "typescript-all-in-one-q-041",
    quizId: "quiz_typescript_all_in_one",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is structural typing in TypeScript?",
    options: [
      { id: "A", text: "Compatibility is primarily determined by the structure and members of types rather than their declared names" },
      { id: "B", text: "Only class names determine compatibility" },
      { id: "C", text: "Every type must explicitly extend another type" },
      { id: "D", text: "Types are checked only at runtime" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript uses structural typing: if a value has the required compatible members, it can generally be assignable even when the types have different names.",
    tags: ["structural-typing", "type-system"]
  },

  {
    id: "typescript-all-in-one-q-042",
    quizId: "quiz_typescript_all_in_one",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `satisfies` provide when used with an expression?",
    options: [
      { id: "A", text: "It checks that an expression conforms to a type while generally preserving the expression's more specific inferred type" },
      { id: "B", text: "It converts the expression to the target type at runtime" },
      { id: "C", text: "It disables excess property checking" },
      { id: "D", text: "It makes every property optional" }
    ],
    correctOptionId: "A",
    explanation: "`satisfies` validates compatibility with a type without simply replacing the expression's inferred type in the way a traditional annotation can.",
    tags: ["satisfies", "type-inference", "advanced-types"]
  },

  {
    id: "typescript-all-in-one-q-043",
    quizId: "quiz_typescript_all_in_one",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is function overload resolution used for?",
    options: [
      { id: "A", text: "To allow a function to expose multiple valid call signatures while providing one implementation" },
      { id: "B", text: "To create multiple JavaScript runtimes" },
      { id: "C", text: "To execute every function twice" },
      { id: "D", text: "To make functions automatically generic" }
    ],
    correctOptionId: "A",
    explanation: "Function overloads let callers see multiple permitted signatures while TypeScript checks the implementation against the overloads.",
    tags: ["function-overloads", "functions"]
  },

  {
    id: "typescript-all-in-one-q-044",
    quizId: "quiz_typescript_all_in_one",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about overload implementations is correct?",
    options: [
      { id: "A", text: "The implementation signature is directly exposed as another overload to callers" },
      { id: "B", text: "The implementation must be compatible with the declared overload signatures" },
      { id: "C", text: "Overloads require a separate function body for every signature" },
      { id: "D", text: "Overloads only work with classes" }
    ],
    correctOptionId: "B",
    explanation: "The implementation must be compatible with all overload signatures, while callers generally see only the overload signatures.",
    tags: ["function-overloads", "functions"]
  },

  {
    id: "typescript-all-in-one-q-045",
    quizId: "quiz_typescript_all_in_one",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `strictNullChecks` primarily change?",
    options: [
      { id: "A", text: "It makes null and undefined distinct types that must be handled appropriately" },
      { id: "B", text: "It disables all strict compiler options" },
      { id: "C", text: "It converts null into an empty string" },
      { id: "D", text: "It removes undefined from JavaScript" }
    ],
    correctOptionId: "A",
    explanation: "With `strictNullChecks`, `null` and `undefined` are not freely assignable to unrelated types and often need explicit handling.",
    tags: ["strict-null-checks", "strict-mode"]
  },

  {
    id: "typescript-all-in-one-q-046",
    quizId: "quiz_typescript_all_in_one",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of the `noImplicitAny` compiler option?",
    options: [
      { id: "A", text: "It reports errors when TypeScript would otherwise infer an implicit any in certain locations" },
      { id: "B", text: "It converts every explicit any into unknown" },
      { id: "C", text: "It prevents all JavaScript files from compiling" },
      { id: "D", text: "It disables type inference" }
    ],
    correctOptionId: "A",
    explanation: "`noImplicitAny` helps prevent unintended implicit `any` types by reporting them where TypeScript cannot infer a safer type.",
    tags: ["compiler-options", "any", "strict-mode"]
  },

  {
    id: "typescript-all-in-one-q-047",
    quizId: "quiz_typescript_all_in_one",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is `unknown` generally safer than `any` for external data such as API responses?",
    options: [
      { id: "A", text: "unknown forces you to validate or narrow the value before performing type-specific operations" },
      { id: "B", text: "unknown automatically validates JSON at runtime" },
      { id: "C", text: "unknown guarantees the API is trustworthy" },
      { id: "D", text: "unknown converts all values to strings" }
    ],
    correctOptionId: "A",
    explanation: "`unknown` represents an uncertain value while preventing unsafe operations until the value has been narrowed or asserted appropriately.",
    tags: ["unknown", "api", "type-safety"]
  },

  {
    id: "typescript-all-in-one-q-048",
    quizId: "quiz_typescript_all_in_one",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes TypeScript's type system at runtime?",
    options: [
      { id: "A", text: "TypeScript types generally do not exist at runtime after compilation to JavaScript" },
      { id: "B", text: "Every TypeScript type becomes a JavaScript object at runtime" },
      { id: "C", text: "TypeScript automatically validates all runtime values" },
      { id: "D", text: "Interfaces are automatically available as runtime constructors" }
    ],
    correctOptionId: "A",
    explanation: "Most TypeScript type information is erased during compilation. Runtime validation must be implemented separately when needed.",
    tags: ["type-erasure", "runtime", "fundamentals"]
  },

  {
    id: "typescript-all-in-one-q-049",
    quizId: "quiz_typescript_all_in_one",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is most appropriate when receiving untrusted JSON and wanting strong TypeScript guarantees?",
    options: [
      { id: "A", text: "Use a type assertion and assume the JSON is correct" },
      { id: "B", text: "Use runtime validation and then expose the validated result with an appropriate TypeScript type" },
      { id: "C", text: "Convert the JSON to any immediately" },
      { id: "D", text: "Disable strict type checking" }
    ],
    correctOptionId: "B",
    explanation: "TypeScript alone does not validate runtime JSON. Runtime validation should establish that the data actually matches the expected shape before treating it as trusted.",
    tags: ["runtime-validation", "api", "type-safety"]
  },

  {
    id: "typescript-all-in-one-q-050",
    quizId: "quiz_typescript_all_in_one",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A React API function receives unknown data, needs to return only objects containing `id` and `name`, and should remain reusable for different object types. Which TypeScript concepts are most directly useful?",
    options: [
      { id: "A", text: "any, enum, and type assertions only" },
      { id: "B", text: "Generics, constraints, and type-safe narrowing or validation" },
      { id: "C", text: "Only readonly properties" },
      { id: "D", text: "Only tuples and enums" }
    ],
    correctOptionId: "B",
    explanation: "Generics can preserve the relationship between input and output types, constraints can require fields such as `id` and `name`, and narrowing or runtime validation can establish what the unknown data actually contains.",
    tags: ["generics", "constraints", "unknown", "api", "react"]
  }
];

export default typescriptAllInOneQuestions;