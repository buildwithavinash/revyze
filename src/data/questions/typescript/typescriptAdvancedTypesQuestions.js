const typescriptAdvancedTypesQuestions = [
  {
    id: "typescript-advanced-types-q-001",
    quizId: "quiz_typescript_advanced_types",
    order: 1,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the union type `string | number` mean?",
    options: [
      { id: "A", text: "The value must be both a string and a number" },
      { id: "B", text: "The value can be either a string or a number" },
      { id: "C", text: "The value can only be a string" },
      { id: "D", text: "The value is automatically converted to a number" }
    ],
    correctOptionId: "B",
    explanation: "A union type represents a value that can belong to one of several possible types.",
    tags: ["unions", "advanced-types"]
  },

  {
    id: "typescript-advanced-types-q-002",
    quizId: "quiz_typescript_advanced_types",
    order: 2,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the intersection type `A & B` generally represent?",
    options: [
      { id: "A", text: "A value satisfying both A and B" },
      { id: "B", text: "A value satisfying either A or B" },
      { id: "C", text: "A value that is always null" },
      { id: "D", text: "A value whose type is inferred as any" }
    ],
    correctOptionId: "A",
    explanation: "An intersection combines requirements from multiple types, so a value must satisfy both.",
    tags: ["intersections", "advanced-types"]
  },

  {
    id: "typescript-advanced-types-q-003",
    quizId: "quiz_typescript_advanced_types",
    order: 3,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which type represents a value that must have both `id: number` and `name: string`?",
    options: [
      { id: "A", text: "{ id: number } | { name: string }" },
      { id: "B", text: "{ id: number } & { name: string }" },
      { id: "C", text: "{ id: number, name: string } | never" },
      { id: "D", text: "number & string" }
    ],
    correctOptionId: "B",
    explanation: "The intersection combines the two object requirements into one type.",
    tags: ["intersections", "objects"]
  },

  {
    id: "typescript-advanced-types-q-004",
    quizId: "quiz_typescript_advanced_types",
    order: 4,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a literal type?",
    options: [
      { id: "A", text: "A type that represents a specific literal value" },
      { id: "B", text: "A type that always represents any object" },
      { id: "C", text: "A runtime JavaScript object" },
      { id: "D", text: "A type that disables strict checking" }
    ],
    correctOptionId: "A",
    explanation: "Literal types restrict values to specific literals such as `\"success\"`, `42`, or `true`.",
    tags: ["literal-types"]
  },

  {
    id: "typescript-advanced-types-q-005",
    quizId: "quiz_typescript_advanced_types",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What values are allowed by `type Status = \"loading\" | \"success\" | \"error\"`?",
    options: [
      { id: "A", text: "Any string" },
      { id: "B", text: "Only `loading`, `success`, or `error`" },
      { id: "C", text: "Any object containing status" },
      { id: "D", text: "Only boolean values" }
    ],
    correctOptionId: "B",
    explanation: "This is a union of three string literal types, so no other string value is assignable.",
    tags: ["literal-types", "unions"]
  },

  {
    id: "typescript-advanced-types-q-006",
    quizId: "quiz_typescript_advanced_types",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of discriminated unions?",
    options: [
      { id: "A", text: "To combine unrelated primitive types into any" },
      { id: "B", text: "To model related variants using a shared discriminating property" },
      { id: "C", text: "To make every property optional" },
      { id: "D", text: "To prevent narrowing" }
    ],
    correctOptionId: "B",
    explanation: "A discriminated union uses a common literal property, such as `kind`, to identify which variant is being handled.",
    tags: ["unions", "discriminated-unions", "narrowing"]
  },

  {
    id: "typescript-advanced-types-q-007",
    quizId: "quiz_typescript_advanced_types",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Given `type Result = { kind: \"success\"; data: string } | { kind: \"error\"; message: string }`, what does checking `result.kind === \"success\"` allow TypeScript to do?",
    options: [
      { id: "A", text: "Narrow result to the success variant" },
      { id: "B", text: "Convert result to any" },
      { id: "C", text: "Remove the data property" },
      { id: "D", text: "Make both variants simultaneously available" }
    ],
    correctOptionId: "A",
    explanation: "The literal discriminant `kind` lets TypeScript narrow the union to the matching object variant.",
    tags: ["discriminated-unions", "narrowing"]
  },

  {
    id: "typescript-advanced-types-q-008",
    quizId: "quiz_typescript_advanced_types",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is type narrowing?",
    options: [
      { id: "A", text: "Reducing a broad type to a more specific type based on control-flow checks" },
      { id: "B", text: "Removing all properties from a type" },
      { id: "C", text: "Converting TypeScript into JavaScript" },
      { id: "D", text: "Making a type parameter generic" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript analyzes conditions and control flow to determine when a value can safely be treated as a more specific type.",
    tags: ["narrowing", "control-flow"]
  },

  {
    id: "typescript-advanced-types-q-009",
    quizId: "quiz_typescript_advanced_types",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which check narrows `value: string | number` to `string`?",
    options: [
      { id: "A", text: "if (typeof value === \"string\")" },
      { id: "B", text: "if (value instanceof Number)" },
      { id: "C", text: "if (value === Number)" },
      { id: "D", text: "if (typeof value === \"object\")" }
    ],
    correctOptionId: "A",
    explanation: "`typeof value === \"string\"` is a built-in type guard that narrows the value to string.",
    tags: ["narrowing", "typeof", "type-guards"]
  },

  {
    id: "typescript-advanced-types-q-010",
    quizId: "quiz_typescript_advanced_types",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `instanceof` help TypeScript determine?",
    options: [
      { id: "A", text: "Whether a value is an instance of a particular class or constructor" },
      { id: "B", text: "Whether a value is always a string" },
      { id: "C", text: "Whether a property is optional" },
      { id: "D", text: "Whether a type is generic" }
    ],
    correctOptionId: "A",
    explanation: "`instanceof` can act as a type guard for class instances.",
    tags: ["narrowing", "instanceof", "type-guards"]
  },

  {
    id: "typescript-advanced-types-q-011",
    quizId: "quiz_typescript_advanced_types",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a user-defined type guard?",
    options: [
      { id: "A", text: "A function whose return type uses a type predicate such as `value is User`" },
      { id: "B", text: "A function that always returns any" },
      { id: "C", text: "A class with only private properties" },
      { id: "D", text: "An interface with no members" }
    ],
    correctOptionId: "A",
    explanation: "A type predicate tells TypeScript that when the function returns true, the value can be treated as the specified type.",
    tags: ["type-guards", "narrowing"]
  },

  {
    id: "typescript-advanced-types-q-012",
    quizId: "quiz_typescript_advanced_types",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which return type is a valid type predicate for checking whether `value` is a User?",
    options: [
      { id: "A", text: "value -> User" },
      { id: "B", text: "value is User" },
      { id: "C", text: "value instanceof User" },
      { id: "D", text: "User(value)" }
    ],
    correctOptionId: "B",
    explanation: "TypeScript type predicates use the syntax `parameterName is Type`.",
    tags: ["type-guards", "type-predicates"]
  },

  {
    id: "typescript-advanced_types-q-013",
    quizId: "quiz_typescript_advanced_types",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `in` operator help with when narrowing object unions?",
    options: [
      { id: "A", text: "It can narrow based on whether a property exists" },
      { id: "B", text: "It converts properties into strings" },
      { id: "C", text: "It removes optional properties" },
      { id: "D", text: "It creates an intersection automatically" }
    ],
    correctOptionId: "A",
    explanation: "Checking `\"property\" in value` can narrow a union to members containing that property.",
    tags: ["narrowing", "in-operator"]
  },

  {
    id: "typescript-advanced-types-q-014",
    quizId: "quiz_typescript_advanced_types",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `keyof User` produce?",
    options: [
      { id: "A", text: "The values of User" },
      { id: "B", text: "A union of the known property keys of User" },
      { id: "C", text: "A new User object" },
      { id: "D", text: "The constructor of User" }
    ],
    correctOptionId: "B",
    explanation: "`keyof` produces a union representing the property keys of a type.",
    tags: ["keyof", "advanced-types"]
  },

  {
    id: "typescript-advanced_types-q-015",
    quizId: "quiz_typescript_advanced_types",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Given `type User = { id: number; name: string }`, what is `keyof User`?",
    options: [
      { id: "A", text: "`number | string`" },
      { id: "B", text: "`\"id\" | \"name\"`" },
      { id: "C", text: "`User[]`" },
      { id: "D", text: "`id & name`" }
    ],
    correctOptionId: "B",
    explanation: "The keys are the literal property names `\"id\"` and `\"name\"`.",
    tags: ["keyof", "literal-types"]
  },

  {
    id: "typescript-advanced-types-q-016",
    quizId: "quiz_typescript_advanced_types",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `typeof` do in a type position?",
    options: [
      { id: "A", text: "It can obtain the type of an existing value or variable" },
      { id: "B", text: "It converts a type into a runtime object" },
      { id: "C", text: "It creates a union automatically" },
      { id: "D", text: "It removes literal types" }
    ],
    correctOptionId: "A",
    explanation: "In a type context, `typeof` can derive a type from an existing value.",
    tags: ["typeof", "advanced-types"]
  },

  {
    id: "typescript-advanced-types-q-017",
    quizId: "quiz_typescript_advanced_types",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the type of `typeof config` when `config` is an existing object variable?",
    options: [
      { id: "A", text: "The type shape of the value stored in config" },
      { id: "B", text: "Always `object`" },
      { id: "C", text: "Always `any`" },
      { id: "D", text: "Always `unknown`" }
    ],
    correctOptionId: "A",
    explanation: "TypeScript can derive the static type of the existing variable using `typeof`.",
    tags: ["typeof", "type-inference"]
  },

  {
    id: "typescript-advanced-types-q-018",
    quizId: "quiz_typescript_advanced_types",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an indexed access type such as `User[\"name\"]` represent?",
    options: [
      { id: "A", text: "The type of User's name property" },
      { id: "B", text: "The runtime value of User" },
      { id: "C", text: "All keys of User" },
      { id: "D", text: "A new class called name" }
    ],
    correctOptionId: "A",
    explanation: "Indexed access types retrieve a property type using a key.",
    tags: ["indexed-access", "types"]
  },

  {
    id: "typescript-advanced-types-q-019",
    quizId: "quiz_typescript_advanced_types",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Given `type User = { id: number; name: string }`, what is `User[\"id\"]`?",
    options: [
      { id: "A", text: "`\"id\"`" },
      { id: "B", text: "`number`" },
      { id: "C", text: "`User`" },
      { id: "D", text: "`string`" }
    ],
    correctOptionId: "B",
    explanation: "The `id` property's type is number.",
    tags: ["indexed-access"]
  },

  {
    id: "typescript-advanced-types-q-020",
    quizId: "quiz_typescript_advanced_types",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `User[keyof User]` generally represent?",
    options: [
      { id: "A", text: "The union of all property value types in User" },
      { id: "B", text: "Only the first property's type" },
      { id: "C", text: "The keys of User" },
      { id: "D", text: "The User constructor" }
    ],
    correctOptionId: "A",
    explanation: "Indexing with `keyof User` accesses all known properties, producing a union of their value types.",
    tags: ["indexed-access", "keyof"]
  },

  {
    id: "typescript-advanced-types-q-021",
    quizId: "quiz_typescript_advanced_types",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a mapped type?",
    options: [
      { id: "A", text: "A type that transforms or iterates over the properties of another type" },
      { id: "B", text: "A runtime Map object" },
      { id: "C", text: "A class inheritance mechanism" },
      { id: "D", text: "A type that only works with arrays" }
    ],
    correctOptionId: "A",
    explanation: "Mapped types iterate over keys and create a new type based on those keys.",
    tags: ["mapped-types"]
  },

  {
    id: "typescript-advanced-types-q-022",
    quizId: "quiz_typescript_advanced_types",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this mapped type do?\n\n`type ReadonlyUser<T> = { readonly [K in keyof T]: T[K] }`",
    options: [
      { id: "A", text: "Makes every property readonly" },
      { id: "B", text: "Removes every property" },
      { id: "C", text: "Makes every property optional" },
      { id: "D", text: "Converts every property to string" }
    ],
    correctOptionId: "A",
    explanation: "The mapped type iterates over every key and adds the `readonly` modifier.",
    tags: ["mapped-types", "readonly"]
  },

  {
    id: "typescript-advanced-types-q-023",
    quizId: "quiz_typescript_advanced_types",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax makes every property of T optional using a mapped type?",
    options: [
      { id: "A", text: "{ [K in keyof T]?: T[K] }" },
      { id: "B", text: "{ optional keyof T: T }" },
      { id: "C", text: "{ [K keyof T]: optional T[K] }" },
      { id: "D", text: "{ T?: keyof T }" }
    ],
    correctOptionId: "A",
    explanation: "The `?` modifier in a mapped type makes each mapped property optional.",
    tags: ["mapped-types", "optional-properties"]
  },

  {
    id: "typescript-advanced-types-q-024",
    quizId: "quiz_typescript_advanced_types",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which built-in utility type is conceptually similar to making every property optional?",
    options: [
      { id: "A", text: "Required<T>" },
      { id: "B", text: "Partial<T>" },
      { id: "C", text: "Readonly<T>" },
      { id: "D", text: "Pick<T, K>" }
    ],
    correctOptionId: "B",
    explanation: "`Partial<T>` constructs a type with all properties of T optional.",
    tags: ["utility-types", "mapped-types", "Partial"]
  },

  {
    id: "typescript-advanced-types-q-025",
    quizId: "quiz_typescript_advanced_types",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Required<T>` do?",
    options: [
      { id: "A", text: "Makes all properties of T required" },
      { id: "B", text: "Makes all properties readonly" },
      { id: "C", text: "Removes all properties" },
      { id: "D", text: "Converts T into a union" }
    ],
    correctOptionId: "A",
    explanation: "`Required<T>` removes optional modifiers from the properties of T.",
    tags: ["utility-types", "mapped-types"]
  },

  {
    id: "typescript-advanced-types-q-026",
    quizId: "quiz_typescript_advanced_types",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Pick<User, \"id\" | \"name\">` produce?",
    options: [
      { id: "A", text: "A type containing only the selected id and name properties" },
      { id: "B", text: "A type containing every property except id and name" },
      { id: "C", text: "A tuple of id and name values" },
      { id: "D", text: "A runtime object" }
    ],
    correctOptionId: "A",
    explanation: "`Pick<T, K>` constructs a type by selecting the specified keys from T.",
    tags: ["utility-types", "Pick", "keyof"]
  },

  {
    id: "typescript-advanced-types-q-027",
    quizId: "quiz_typescript_advanced_types",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Omit<User, \"password\">` do?",
    options: [
      { id: "A", text: "Creates a type without the password property" },
      { id: "B", text: "Makes password optional" },
      { id: "C", text: "Makes password readonly" },
      { id: "D", text: "Changes password to boolean" }
    ],
    correctOptionId: "A",
    explanation: "`Omit<T, K>` constructs a type by removing the specified keys.",
    tags: ["utility-types", "Omit"]
  },

  {
    id: "typescript-advanced-types-q-028",
    quizId: "quiz_typescript_advanced_types",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Record<\"admin\" | \"user\", boolean>` represent?",
    options: [
      { id: "A", text: "An object type with admin and user keys whose values are boolean" },
      { id: "B", text: "A tuple containing admin and user" },
      { id: "C", text: "A class named Record" },
      { id: "D", text: "A union of two booleans" }
    ],
    correctOptionId: "A",
    explanation: "`Record<K, V>` creates an object type whose keys are K and whose values are V.",
    tags: ["utility-types", "Record", "mapped-types"]
  },

  {
    id: "typescript-advanced-types-q-029",
    quizId: "quiz_typescript_advanced_types",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a conditional type?",
    options: [
      { id: "A", text: "A type that selects one type or another based on a type relationship" },
      { id: "B", text: "A runtime if statement" },
      { id: "C", text: "A class that requires conditions" },
      { id: "D", text: "A union that only contains strings" }
    ],
    correctOptionId: "A",
    explanation: "Conditional types use syntax similar to a type-level condition: `T extends U ? X : Y`.",
    tags: ["conditional-types"]
  },

  {
    id: "typescript-advanced-types-q-030",
    quizId: "quiz_typescript_advanced_types",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the general syntax of a conditional type?",
    options: [
      { id: "A", text: "T extends U ? X : Y" },
      { id: "B", text: "if T extends U then X else Y" },
      { id: "C", text: "T ? extends U : X | Y" },
      { id: "D", text: "conditional<T, U, X, Y>" }
    ],
    correctOptionId: "A",
    explanation: "Conditional types use the `extends ? :` syntax at the type level.",
    tags: ["conditional-types", "syntax"]
  },

  {
    id: "typescript-advanced-types-q-031",
    quizId: "quiz_typescript_advanced_types",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `type IsString<T> = T extends string ? true : false` produce for `IsString<string>`?",
    options: [
      { id: "A", text: "false" },
      { id: "B", text: "string" },
      { id: "C", text: "true" },
      { id: "D", text: "never" }
    ],
    correctOptionId: "C",
    explanation: "Since `string extends string` is true, the conditional type selects `true`.",
    tags: ["conditional-types"]
  },

  {
    id: "typescript-advanced-types-q-032",
    quizId: "quiz_typescript_advanced_types",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `IsString<number>` produce for `type IsString<T> = T extends string ? true : false`?",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "number" },
      { id: "D", text: "string" }
    ],
    correctOptionId: "B",
    explanation: "`number` does not extend `string`, so the false branch is selected.",
    tags: ["conditional-types"]
  },

  {
    id: "typescript-advanced-types-q-033",
    quizId: "quiz_typescript_advanced_types",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does the `infer` keyword allow inside a conditional type?",
    options: [
      { id: "A", text: "It allows TypeScript to infer a type from part of another type" },
      { id: "B", text: "It creates a runtime variable" },
      { id: "C", text: "It disables generic inference" },
      { id: "D", text: "It makes all properties optional" }
    ],
    correctOptionId: "A",
    explanation: "`infer` introduces a type variable whose type TypeScript can infer from a matched structure.",
    tags: ["conditional-types", "infer"]
  },

  {
    id: "typescript-advanced-types-q-034",
    quizId: "quiz_typescript_advanced_types",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does this type extract?\n\n`type Return<T> = T extends (...args: any[]) => infer R ? R : never`",
    options: [
      { id: "A", text: "The parameter list of a function" },
      { id: "B", text: "The return type of a function" },
      { id: "C", text: "The function name" },
      { id: "D", text: "The number of parameters" }
    ],
    correctOptionId: "B",
    explanation: "`infer R` captures the return type of the function matched by the conditional type.",
    tags: ["conditional-types", "infer", "functions"]
  },

  {
    id: "typescript-advanced-types-q-035",
    quizId: "quiz_typescript_advanced_types",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which built-in utility type extracts the return type of a function?",
    options: [
      { id: "A", text: "Parameters<T>" },
      { id: "B", text: "ReturnType<T>" },
      { id: "C", text: "FunctionType<T>" },
      { id: "D", text: "Result<T>" }
    ],
    correctOptionId: "B",
    explanation: "`ReturnType<T>` is a built-in conditional utility type that extracts a function's return type.",
    tags: ["utility-types", "ReturnType"]
  },

  {
    id: "typescript-advanced_types-q-036",
    quizId: "quiz_typescript_advanced_types",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `Parameters<typeof fn>` extract?",
    options: [
      { id: "A", text: "The function's parameter types as a tuple" },
      { id: "B", text: "The function's return value" },
      { id: "C", text: "The function's property keys" },
      { id: "D", text: "The function's runtime source code" }
    ],
    correctOptionId: "A",
    explanation: "`Parameters<T>` extracts the parameter types of a function type as a tuple.",
    tags: ["utility-types", "Parameters", "typeof"]
  },

  {
    id: "typescript-advanced-types-q-037",
    quizId: "quiz_typescript_advanced_types",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `NonNullable<T>` remove from T?",
    options: [
      { id: "A", text: "string and number" },
      { id: "B", text: "null and undefined" },
      { id: "C", text: "all object properties" },
      { id: "D", text: "all union members" }
    ],
    correctOptionId: "B",
    explanation: "`NonNullable<T>` excludes `null` and `undefined` from a type.",
    tags: ["utility-types", "NonNullable"]
  },

  {
    id: "typescript-advanced-types-q-038",
    quizId: "quiz_typescript_advanced_types",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `Exclude<T, U>` do?",
    options: [
      { id: "A", text: "Removes from T the union members assignable to U" },
      { id: "B", text: "Adds U to T" },
      { id: "C", text: "Converts T into an intersection" },
      { id: "D", text: "Makes all properties of T optional" }
    ],
    correctOptionId: "A",
    explanation: "`Exclude` filters members out of a union based on assignability to U.",
    tags: ["utility-types", "Exclude", "unions"]
  },

  {
    id: "typescript-advanced-types-q-039",
    quizId: "quiz_typescript_advanced_types",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `Extract<T, U>` do?",
    options: [
      { id: "A", text: "Keeps from T the union members assignable to U" },
      { id: "B", text: "Removes every member from T" },
      { id: "C", text: "Converts T into any" },
      { id: "D", text: "Makes T readonly" }
    ],
    correctOptionId: "A",
    explanation: "`Extract<T, U>` is effectively a union filter that keeps members compatible with U.",
    tags: ["utility-types", "Extract", "unions"]
  },

  {
    id: "typescript-advanced-types-q-040",
    quizId: "quiz_typescript_advanced_types",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a distributive conditional type?",
    options: [
      { id: "A", text: "A conditional type that can distribute over each member of a union when given a naked type parameter" },
      { id: "B", text: "A type that always creates an intersection" },
      { id: "C", text: "A type that only works with classes" },
      { id: "D", text: "A runtime conditional statement" }
    ],
    correctOptionId: "A",
    explanation: "Conditional types of the form `T extends U ? X : Y` distribute over union members when T is a naked type parameter.",
    tags: ["conditional-types", "distributive-types", "unions"]
  },

  {
    id: "typescript-advanced-types-q-041",
    quizId: "quiz_typescript_advanced_types",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why would wrapping a type parameter in a tuple, such as `[T] extends [U]`, affect conditional-type distribution?",
    options: [
      { id: "A", text: "It prevents the conditional from distributing over a union in the usual way" },
      { id: "B", text: "It converts the type into a tuple at runtime" },
      { id: "C", text: "It forces T to be string" },
      { id: "D", text: "It makes U optional" }
    ],
    correctOptionId: "A",
    explanation: "Distribution occurs with a naked type parameter. Wrapping the parameter prevents that distributive behavior.",
    tags: ["conditional-types", "distributive-types"]
  },

  {
    id: "typescript-advanced-types-q-042",
    quizId: "quiz_typescript_advanced_types",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which mapped-type syntax removes the readonly modifier from every property?",
    options: [
      { id: "A", text: "{ -readonly [K in keyof T]: T[K] }" },
      { id: "B", text: "{ readonly- [K in keyof T]: T[K] }" },
      { id: "C", text: "{ remove readonly [K in keyof T]: T[K] }" },
      { id: "D", text: "{ !readonly [K in keyof T]: T[K] }" }
    ],
    correctOptionId: "A",
    explanation: "Mapped types use `-readonly` to remove an existing readonly modifier.",
    tags: ["mapped-types", "readonly", "modifiers"]
  },

  {
    id: "typescript-advanced-types-q-043",
    quizId: "quiz_typescript_advanced_types",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which mapped-type syntax removes optional modifiers?",
    options: [
      { id: "A", text: "{ -? [K in keyof T]: T[K] }" },
      { id: "B", text: "{ optional- [K in keyof T]: T[K] }" },
      { id: "C", text: "{ remove? [K in keyof T]: T[K] }" },
      { id: "D", text: "{ required [K in keyof T]: T[K] }" }
    ],
    correctOptionId: "A",
    explanation: "Mapped types use `-?` to remove the optional property modifier.",
    tags: ["mapped-types", "optional-properties", "modifiers"]
  },

  {
    id: "typescript-advanced-types-q-044",
    quizId: "quiz_typescript_advanced_types",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What are key remapping in mapped types and the `as` clause used for?",
    options: [
      { id: "A", text: "To transform or filter the property keys of the resulting type" },
      { id: "B", text: "To execute JavaScript during compilation" },
      { id: "C", text: "To change every property value to any" },
      { id: "D", text: "To create runtime objects" }
    ],
    correctOptionId: "A",
    explanation: "The `as` clause allows mapped types to remap keys and can use `never` to filter keys.",
    tags: ["mapped-types", "key-remapping"]
  },

  {
    id: "typescript-advanced-types-q-045",
    quizId: "quiz_typescript_advanced_types",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens when a mapped type remaps a key to `never`?",
    options: [
      { id: "A", text: "That property is omitted from the resulting type" },
      { id: "B", text: "That property becomes nullable" },
      { id: "C", text: "That property becomes readonly" },
      { id: "D", text: "The entire type becomes never" }
    ],
    correctOptionId: "A",
    explanation: "Mapping a property key to `never` effectively filters that property out.",
    tags: ["mapped-types", "key-remapping", "never"]
  },

  {
    id: "typescript-advanced-types-q-046",
    quizId: "quiz_typescript_advanced_types",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the `never` type commonly used for?",
    options: [
      { id: "A", text: "Representing values that can never occur" },
      { id: "B", text: "Representing every possible value" },
      { id: "C", text: "Representing only strings" },
      { id: "D", text: "Representing an unknown object" }
    ],
    correctOptionId: "A",
    explanation: "`never` represents impossible values, such as a function that never successfully returns or an impossible union branch.",
    tags: ["never", "advanced-types"]
  },

  {
    id: "typescript-advanced-types-q-047",
    quizId: "quiz_typescript_advanced_types",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is `never` useful in exhaustive discriminated-union checks?",
    options: [
      { id: "A", text: "It can expose at compile time that an unhandled union variant remains" },
      { id: "B", text: "It makes every branch optional" },
      { id: "C", text: "It converts all variants to strings" },
      { id: "D", text: "It disables control-flow analysis" }
    ],
    correctOptionId: "A",
    explanation: "Assigning the remaining value to `never` causes TypeScript to report an error if a supposedly exhaustive switch is missing a variant.",
    tags: ["never", "discriminated-unions", "exhaustiveness"]
  },

  {
    id: "typescript-advanced-types-q-048",
    quizId: "quiz_typescript_advanced_types",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the key difference between `unknown` and `any`?",
    options: [
      { id: "A", text: "unknown requires narrowing before most operations, while any largely disables type checking" },
      { id: "B", text: "unknown is always a string" },
      { id: "C", text: "any requires narrowing but unknown does not" },
      { id: "D", text: "They are exactly identical" }
    ],
    correctOptionId: "A",
    explanation: "`unknown` is type-safe because operations generally require narrowing first, whereas `any` opts out of much static checking.",
    tags: ["unknown", "any", "narrowing"]
  },

  {
    id: "typescript-advanced-types-q-049",
    quizId: "quiz_typescript_advanced_types",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design best uses advanced TypeScript types to create a type-safe API response model with multiple variants?",
    options: [
      { id: "A", text: "Use a discriminated union with literal status values and variant-specific properties" },
      { id: "B", text: "Use `any` for every response" },
      { id: "C", text: "Use only `object` for every response" },
      { id: "D", text: "Use one object where every property is optional" }
    ],
    correctOptionId: "A",
    explanation: "Discriminated unions accurately model different valid states and allow TypeScript to narrow each response variant safely.",
    tags: ["discriminated-unions", "api", "narrowing"]
  },

  {
    id: "typescript-advanced-types-q-050",
    quizId: "quiz_typescript_advanced_types",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A reusable utility needs to take an object type, transform every property, preserve its keys, and conditionally change the resulting property types. Which combination of TypeScript features is most appropriate?",
    options: [
      { id: "A", text: "Only a union type" },
      { id: "B", text: "A mapped type combined with conditional types" },
      { id: "C", text: "Only an enum" },
      { id: "D", text: "Only a tuple" }
    ],
    correctOptionId: "B",
    explanation: "Mapped types iterate over and transform properties, while conditional types allow each property's resulting type to depend on its original type.",
    tags: ["mapped-types", "conditional-types", "advanced-types"]
  }
];

export default typescriptAdvancedTypesQuestions;