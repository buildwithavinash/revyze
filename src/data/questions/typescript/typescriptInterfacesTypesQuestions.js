const typescriptInterfacesTypesQuestions = [
  {
    id: "typescript-interfaces-types-q-001",
    quizId: "quiz_typescript_interfaces_types",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly declares an interface named User?",
    options: [
      { id: "A", text: "type User = interface { name: string }" },
      { id: "B", text: "interface User { name: string }" },
      { id: "C", text: "interface = User { name: string }" },
      { id: "D", text: "User interface { name: string }" }
    ],
    correctOptionId: "B",
    explanation: "An interface is declared with `interface Name { ... }`, followed by its properties or members.",
    tags: ["interfaces", "syntax"]
  },

  {
    id: "typescript-interfaces-types-q-002",
    quizId: "quiz_typescript_interfaces_types",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly creates a type alias for an object shape?",
    options: [
      { id: "A", text: "type User = { name: string; age: number }" },
      { id: "B", text: "alias User { name: string; age: number }" },
      { id: "C", text: "type User -> { name: string; age: number }" },
      { id: "D", text: "User type = { name: string; age: number }" }
    ],
    correctOptionId: "A",
    explanation: "Type aliases use `type Name = ...`. The right-hand side can be an object type.",
    tags: ["type-aliases", "syntax"]
  },

  {
    id: "typescript-interfaces-types-q-003",
    quizId: "quiz_typescript_interfaces_types",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of an interface?",
    options: [
      { id: "A", text: "To create a runtime database schema" },
      { id: "B", text: "To convert objects into JSON" },
      { id: "C", text: "To describe the expected structure of values" },
      { id: "D", text: "To replace JavaScript objects at runtime" }
    ],
    correctOptionId: "C",
    explanation: "Interfaces describe the structure and capabilities a value is expected to have. They are primarily compile-time constructs.",
    tags: ["interfaces", "object-shapes"]
  },

  {
    id: "typescript-interfaces-types-q-004",
    quizId: "quiz_typescript_interfaces_types",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `?` modifier mean in an interface property such as `email?: string`?",
    options: [
      { id: "A", text: "The property is readonly" },
      { id: "B", text: "The property must be null" },
      { id: "C", text: "The property is private" },
      { id: "D", text: "The property is optional" }
    ],
    correctOptionId: "D",
    explanation: "An optional property may be omitted from an object. With appropriate compiler settings, reading it may produce a value typed as `string | undefined`.",
    tags: ["interfaces", "optional-properties"]
  },

  {
    id: "typescript-interfaces-types-q-005",
    quizId: "quiz_typescript_interfaces_types",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which object satisfies this interface?\n\n`interface Product { id: number; name: string }`",
    options: [
      { id: "A", text: "{ id: \"101\", name: \"Laptop\" }" },
      { id: "B", text: "{ id: 101 }" },
      { id: "C", text: "{ id: 101, name: \"Laptop\" }" },
      { id: "D", text: "{ name: 101, id: \"101\" }" }
    ],
    correctOptionId: "C",
    explanation: "The object supplies both required properties with the correct types.",
    tags: ["interfaces", "object-shapes"]
  },

  {
    id: "typescript-interfaces-types-q-006",
    quizId: "quiz_typescript_interfaces_types",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `readonly id: number` communicate inside an interface?",
    options: [
      { id: "A", text: "The property cannot be read" },
      { id: "B", text: "The property cannot be assigned through the type after initialization" },
      { id: "C", text: "The property is automatically private at runtime" },
      { id: "D", text: "The property becomes optional" }
    ],
    correctOptionId: "B",
    explanation: "`readonly` prevents assignment to the property through the type system after its initial assignment.",
    tags: ["interfaces", "readonly"]
  },

  {
    id: "typescript-interfaces-types-q-007",
    quizId: "quiz_typescript_interfaces_types",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Can an interface contain a method signature?",
    options: [
      { id: "A", text: "Yes, for example `login(): boolean`" },
      { id: "B", text: "No, interfaces only support primitive properties" },
      { id: "C", text: "Only if the interface is generic" },
      { id: "D", text: "Only inside a class" }
    ],
    correctOptionId: "A",
    explanation: "Interfaces can describe callable members and method signatures as part of an object's expected shape.",
    tags: ["interfaces", "methods"]
  },

  {
    id: "typescript-interfaces-types-q-008",
    quizId: "quiz_typescript_interfaces_types",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does interface extension allow?",
    options: [
      { id: "A", text: "An interface to inherit members from another interface" },
      { id: "B", text: "An interface to execute another interface at runtime" },
      { id: "C", text: "An interface to become a JavaScript class automatically" },
      { id: "D", text: "An interface to remove all inherited properties" }
    ],
    correctOptionId: "A",
    explanation: "An interface can extend one or more other interfaces and inherit their members.",
    tags: ["interfaces", "extends", "inheritance"]
  },

  {
    id: "typescript-interfaces-types-q-009",
    quizId: "quiz_typescript_interfaces_types",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which declaration correctly extends `Person`?",
    options: [
      { id: "A", text: "interface Employee implements Person" },
      { id: "B", text: "interface Employee extends Person" },
      { id: "C", text: "interface Employee inherits Person" },
      { id: "D", text: "interface Employee -> Person" }
    ],
    correctOptionId: "B",
    explanation: "Interfaces use the `extends` keyword to inherit members from another interface.",
    tags: ["interfaces", "extends"]
  },

  {
    id: "typescript-interfaces-types-q-010",
    quizId: "quiz_typescript_interfaces_types",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Can one interface extend multiple interfaces?",
    options: [
      { id: "A", text: "No, interfaces support only single inheritance" },
      { id: "B", text: "Only if they are classes" },
      { id: "C", text: "Yes, using a comma-separated list" },
      { id: "D", text: "Only when all interfaces are empty" }
    ],
    correctOptionId: "C",
    explanation: "TypeScript supports multiple interface inheritance, such as `interface C extends A, B {}`.",
    tags: ["interfaces", "multiple-inheritance"]
  },

  {
    id: "typescript-interfaces-types-q-011",
    quizId: "quiz_typescript_interfaces_types",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is declaration merging in TypeScript?",
    options: [
      { id: "A", text: "Combining compatible declarations with the same name into one resulting declaration" },
      { id: "B", text: "Converting interfaces into JavaScript objects" },
      { id: "C", text: "Merging two runtime objects automatically" },
      { id: "D", text: "Combining every type alias in a project" }
    ],
    correctOptionId: "A",
    explanation: "Certain declarations, especially interfaces, can be declared multiple times and have their members merged by TypeScript.",
    tags: ["interfaces", "declaration-merging"]
  },

  {
    id: "typescript-interfaces-types-q-012",
    quizId: "quiz_typescript_interfaces_types",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when two compatible interface declarations have the same name?",
    options: [
      { id: "A", text: "The second declaration completely replaces the first" },
      { id: "B", text: "TypeScript generally merges their members" },
      { id: "C", text: "Both declarations are ignored" },
      { id: "D", text: "They automatically become a union type" }
    ],
    correctOptionId: "B",
    explanation: "Interfaces support declaration merging, so separate declarations with the same name can contribute members to the resulting interface.",
    tags: ["interfaces", "declaration-merging"]
  },

  {
    id: "typescript-interfaces-types-q-013",
    quizId: "quiz_typescript_interfaces_types",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a key limitation of declaration merging with interfaces?",
    options: [
      { id: "A", text: "Conflicting non-function property declarations generally cause a type error" },
      { id: "B", text: "Interfaces cannot contain methods" },
      { id: "C", text: "Interfaces cannot be imported" },
      { id: "D", text: "Merged interfaces become runtime objects" }
    ],
    correctOptionId: "A",
    explanation: "Merged declarations must remain compatible. For example, a property with the same name generally cannot be declared with incompatible types.",
    tags: ["interfaces", "declaration-merging", "compatibility"]
  },

  {
    id: "typescript-interfaces-types-q-014",
    quizId: "quiz_typescript_interfaces_types",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about type aliases is correct?",
    options: [
      { id: "A", text: "They can only describe objects" },
      { id: "B", text: "They can represent unions, intersections, primitives, tuples, objects, and more" },
      { id: "C", text: "They always create runtime constructors" },
      { id: "D", text: "They cannot be generic" }
    ],
    correctOptionId: "B",
    explanation: "Type aliases can name many kinds of types, including primitive aliases, unions, intersections, tuples, object types, and generic types.",
    tags: ["type-aliases"]
  },

  {
    id: "typescript-interfaces-types-q-015",
    quizId: "quiz_typescript_interfaces_types",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is a valid type alias for a union?",
    options: [
      { id: "A", text: "type Status = \"loading\" | \"success\" | \"error\"" },
      { id: "B", text: "interface Status = \"loading\" | \"success\"" },
      { id: "C", text: "type Status extends \"loading\" | \"success\"" },
      { id: "D", text: "alias Status(\"loading\", \"success\")" }
    ],
    correctOptionId: "A",
    explanation: "Type aliases can directly represent union types, including unions of string literals.",
    tags: ["type-aliases", "unions", "literal-types"]
  },

  {
    id: "typescript-interfaces-types-q-016",
    quizId: "quiz_typescript_interfaces_types",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which feature can a type alias express directly but an interface cannot directly represent as a declaration?",
    options: [
      { id: "A", text: "Object properties" },
      { id: "B", text: "Optional properties" },
      { id: "C", text: "Union types" },
      { id: "D", text: "Method signatures" }
    ],
    correctOptionId: "C",
    explanation: "Type aliases can directly name union types such as `string | number`. Interfaces are primarily used to describe object-like shapes.",
    tags: ["type-aliases", "interfaces", "unions"]
  },

  {
    id: "typescript-interfaces-types-q-017",
    quizId: "quiz_typescript_interfaces_types",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which operator creates an intersection type?",
    options: [
      { id: "A", text: "|" },
      { id: "B", text: "&" },
      { id: "C", text: "+" },
      { id: "D", text: "&&" }
    ],
    correctOptionId: "B",
    explanation: "The `&` operator combines types into an intersection.",
    tags: ["intersections", "type-aliases"]
  },

  {
    id: "typescript-interfaces-types-q-018",
    quizId: "quiz_typescript_interfaces_types",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `type Admin = User & { permissions: string[] }` mean?",
    options: [
      { id: "A", text: "Admin can be either User or the permissions object" },
      { id: "B", text: "Admin contains the members required by User and also has permissions" },
      { id: "C", text: "Admin removes all User properties" },
      { id: "D", text: "Admin is a runtime subclass of User" }
    ],
    correctOptionId: "B",
    explanation: "The intersection requires a value to satisfy both `User` and the additional object type.",
    tags: ["intersections", "type-aliases"]
  },

  {
    id: "typescript-interfaces-types-q-019",
    quizId: "quiz_typescript_interfaces_types",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is generally useful for sharing a common object shape across several interfaces?",
    options: [
      { id: "A", text: "Use interface extension" },
      { id: "B", text: "Use JSON.stringify" },
      { id: "C", text: "Use console.log" },
      { id: "D", text: "Use Object.freeze" }
    ],
    correctOptionId: "A",
    explanation: "Interface extension allows a base interface to define shared members that more specialized interfaces can inherit.",
    tags: ["interfaces", "extends", "reuse"]
  },

  {
    id: "typescript-interfaces-types-q-020",
    quizId: "quiz_typescript_interfaces_types",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which declaration correctly defines a generic interface?",
    options: [
      { id: "A", text: "interface Box<T> { value: T }" },
      { id: "B", text: "interface<T> Box { value: T }" },
      { id: "C", text: "generic interface Box<T> = { value: T }" },
      { id: "D", text: "interface Box = <T> { value: T }" }
    ],
    correctOptionId: "A",
    explanation: "Generic parameters are declared after the interface name: `interface Box<T> { ... }`.",
    tags: ["interfaces", "generics"]
  },

  {
    id: "typescript-interfaces-types-q-021",
    quizId: "quiz_typescript_interfaces_types",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why would you make an interface generic?",
    options: [
      { id: "A", text: "To make the interface work with different types while preserving type relationships" },
      { id: "B", text: "To remove all type checking" },
      { id: "C", text: "To make it a runtime object" },
      { id: "D", text: "To prevent property access" }
    ],
    correctOptionId: "A",
    explanation: "Generics allow reusable interfaces to preserve the specific type supplied by the consumer.",
    tags: ["interfaces", "generics"]
  },

  {
    id: "typescript-interfaces-types-q-022",
    quizId: "quiz_typescript_interfaces_types",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this index signature mean?\n\n`interface Scores { [player: string]: number }`",
    options: [
      { id: "A", text: "Every property must have a string value" },
      { id: "B", text: "String keys are allowed and their corresponding values must be numbers" },
      { id: "C", text: "Only one property named player is allowed" },
      { id: "D", text: "The object must be an array" }
    ],
    correctOptionId: "B",
    explanation: "The index signature describes dynamically named string properties whose values are numbers.",
    tags: ["interfaces", "index-signatures"]
  },

  {
    id: "typescript-interfaces-types-q-023",
    quizId: "quiz_typescript_interfaces_types",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which index signature describes numeric values accessed by numeric keys?",
    options: [
      { id: "A", text: "[key: string]: number" },
      { id: "B", text: "[key: number]: number" },
      { id: "C", text: "{ number: key }" },
      { id: "D", text: "number[key]: number" }
    ],
    correctOptionId: "B",
    explanation: "The syntax `[key: number]: number` describes a numeric index signature with numeric values.",
    tags: ["index-signatures", "interfaces"]
  },

  {
    id: "typescript-interfaces-types-q-024",
    quizId: "quiz_typescript_interfaces_types",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does structural typing mean when assigning an object to an interface?",
    options: [
      { id: "A", text: "The object's class name must exactly match the interface name" },
      { id: "B", text: "The object must have the required compatible structure" },
      { id: "C", text: "The object must explicitly extend the interface" },
      { id: "D", text: "The object must be created with a constructor" }
    ],
    correctOptionId: "B",
    explanation: "TypeScript primarily uses structural typing. A value is generally compatible when it has the required compatible members.",
    tags: ["interfaces", "structural-typing"]
  },

  {
    id: "typescript-interfaces-types-q-025",
    quizId: "quiz_typescript_interfaces_types",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Does a class have to explicitly declare `implements User` to be structurally compatible with the User interface?",
    options: [
      { id: "A", text: "Yes, always" },
      { id: "B", text: "Only if User contains methods" },
      { id: "C", text: "No, structural compatibility can exist without the implements keyword" },
      { id: "D", text: "Only if User is generic" }
    ],
    correctOptionId: "C",
    explanation: "A class can structurally satisfy an interface even without explicitly declaring `implements`. The keyword is useful for having TypeScript check that the class intentionally satisfies the interface.",
    tags: ["interfaces", "structural-typing", "classes"]
  },

  {
    id: "typescript-interfaces-types-q-026",
    quizId: "quiz_typescript_interfaces_types",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `implements` keyword on a class primarily do?",
    options: [
      { id: "A", text: "It makes the interface exist at runtime" },
      { id: "B", text: "It tells TypeScript to check that the class conforms to the interface" },
      { id: "C", text: "It causes JavaScript inheritance from the interface" },
      { id: "D", text: "It copies interface properties into the class at runtime" }
    ],
    correctOptionId: "B",
    explanation: "`implements` is a compile-time check that the class satisfies the interface's requirements.",
    tags: ["interfaces", "implements", "classes"]
  },

  {
    id: "typescript-interfaces-types-q-027",
    quizId: "quiz_typescript_interfaces_types",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about interfaces at runtime is correct?",
    options: [
      { id: "A", text: "Interfaces automatically become JavaScript constructors" },
      { id: "B", text: "Interfaces generally have no runtime representation after TypeScript compilation" },
      { id: "C", text: "Interfaces become frozen objects" },
      { id: "D", text: "Interfaces are stored in JSON metadata" }
    ],
    correctOptionId: "B",
    explanation: "Interfaces are compile-time type constructs and are generally erased from the emitted JavaScript.",
    tags: ["interfaces", "runtime", "type-erasure"]
  },

  {
    id: "typescript-interfaces-types-q-028",
    quizId: "quiz_typescript_interfaces_types",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about type aliases at runtime is correct?",
    options: [
      { id: "A", text: "Type aliases generally have no runtime representation" },
      { id: "B", text: "Every type alias becomes a JavaScript class" },
      { id: "C", text: "Every type alias becomes a runtime object" },
      { id: "D", text: "Type aliases are stored in localStorage" }
    ],
    correctOptionId: "A",
    explanation: "Type aliases are also compile-time constructs and are erased from normal JavaScript output.",
    tags: ["type-aliases", "runtime", "type-erasure"]
  },

  {
    id: "typescript-interfaces-types-q-029",
    quizId: "quiz_typescript_interfaces_types",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which construct is generally more suitable when you specifically want declaration merging?",
    options: [
      { id: "A", text: "Interface" },
      { id: "B", text: "Type alias" },
      { id: "C", text: "Tuple" },
      { id: "D", text: "Union literal" }
    ],
    correctOptionId: "A",
    explanation: "Interfaces support declaration merging, whereas type aliases cannot be redeclared with the same name in the same scope for merging.",
    tags: ["interfaces", "declaration-merging"]
  },

  {
    id: "typescript-interfaces-types-q-030",
    quizId: "quiz_typescript_interfaces_types",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about extending interfaces and intersecting types is most accurate?",
    options: [
      { id: "A", text: "They are completely unrelated and cannot express similar combinations" },
      { id: "B", text: "Both can be used to compose object shapes, although their syntax and type-system behavior differ" },
      { id: "C", text: "Only intersections can describe objects" },
      { id: "D", text: "Only interface extension can combine types" }
    ],
    correctOptionId: "B",
    explanation: "Interface extension and intersection types are both useful composition mechanisms, but they are distinct TypeScript features.",
    tags: ["interfaces", "intersections", "composition"]
  },

  {
    id: "typescript-interfaces-types-q-031",
    quizId: "quiz_typescript_interfaces_types",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is valid for an interface property that can be either a string or number?",
    options: [
      { id: "A", text: "value: string & number" },
      { id: "B", text: "value: string | number" },
      { id: "C", text: "value: string / number" },
      { id: "D", text: "value: union<string, number>" }
    ],
    correctOptionId: "B",
    explanation: "A union uses `|` and allows the property to contain either type.",
    tags: ["interfaces", "unions"]
  },

  {
    id: "typescript-interfaces-types-q-032",
    quizId: "quiz_typescript_interfaces_types",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which declaration uses a function type alias?",
    options: [
      { id: "A", text: "type Formatter = (value: string) => string" },
      { id: "B", text: "type Formatter = function(value: string): string" },
      { id: "C", text: "function Formatter = (value: string) => string" },
      { id: "D", text: "alias Formatter(value: string): string" }
    ],
    correctOptionId: "A",
    explanation: "A type alias can describe a function signature using `(parameters) => returnType` syntax.",
    tags: ["type-aliases", "function-types"]
  },

  {
    id: "typescript-interfaces-types-q-033",
    quizId: "quiz_typescript_interfaces_types",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which interface syntax describes a callable object?",
    options: [
      { id: "A", text: "interface Handler { call: function }" },
      { id: "B", text: "interface Handler { (event: Event): void }" },
      { id: "C", text: "interface Handler => (event: Event): void" },
      { id: "D", text: "interface Handler { function(event: Event): void }" }
    ],
    correctOptionId: "B",
    explanation: "Interfaces can contain call signatures, allowing them to describe callable objects.",
    tags: ["interfaces", "call-signatures"]
  },

  {
    id: "typescript-interfaces-types-q-034",
    quizId: "quiz_typescript_interfaces_types",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an interface with a construct signature useful for?",
    options: [
      { id: "A", text: "Describing values that can be called with `new`" },
      { id: "B", text: "Making an object readonly" },
      { id: "C", text: "Creating union types" },
      { id: "D", text: "Defining an enum" }
    ],
    correctOptionId: "A",
    explanation: "A construct signature such as `new (name: string): User` describes a constructor-like value.",
    tags: ["interfaces", "construct-signatures"]
  },

  {
    id: "typescript-interfaces-types-q-035",
    quizId: "quiz_typescript_interfaces_types",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of an interface's optional property when modeling API data?",
    options: [
      { id: "A", text: "To indicate that the API must always send the property" },
      { id: "B", text: "To represent data that may legitimately omit that property" },
      { id: "C", text: "To make the property private" },
      { id: "D", text: "To convert missing data into an empty string" }
    ],
    correctOptionId: "B",
    explanation: "Optional properties are useful when a valid object may not contain a particular field.",
    tags: ["interfaces", "api", "optional-properties"]
  },

  {
    id: "typescript-interfaces-types-q-036",
    quizId: "quiz_typescript_interfaces_types",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main reason a type alias is often preferred for expressing a discriminated union?",
    options: [
      { id: "A", text: "Type aliases can directly compose union members into a named type" },
      { id: "B", text: "Interfaces cannot contain properties" },
      { id: "C", text: "Type aliases create runtime validation" },
      { id: "D", text: "Interfaces cannot use literal values" }
    ],
    correctOptionId: "A",
    explanation: "A named union is naturally expressed with a type alias, for example `type Result = Success | Failure`.",
    tags: ["type-aliases", "discriminated-unions"]
  },

  {
    id: "typescript-interfaces-types-q-037",
    quizId: "quiz_typescript_interfaces_types",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which pattern best models a user with different roles using a discriminated union?",
    options: [
      { id: "A", text: "type User = { role: string; permissions?: string[] }" },
      { id: "B", text: "type User = Admin | Customer, where each member has a literal `role` property" },
      { id: "C", text: "interface User = Admin | Customer" },
      { id: "D", text: "type User = any" }
    ],
    correctOptionId: "B",
    explanation: "A discriminated union gives each variant a specific literal discriminant, enabling precise narrowing.",
    tags: ["type-aliases", "discriminated-unions", "narrowing"]
  },

  {
    id: "typescript-interfaces-types-q-038",
    quizId: "quiz_typescript_interfaces_types",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `interface ApiResponse<T> { data: T; success: boolean }` provide?",
    options: [
      { id: "A", text: "A reusable interface whose data property can preserve different specific types" },
      { id: "B", text: "An interface that only works with strings" },
      { id: "C", text: "A runtime generic object" },
      { id: "D", text: "A union of every possible API response" }
    ],
    correctOptionId: "A",
    explanation: "The generic parameter allows `ApiResponse<User>`, `ApiResponse<Product>`, and so on while preserving the specific `data` type.",
    tags: ["interfaces", "generics", "api"]
  },

  {
    id: "typescript-interfaces-types-q-039",
    quizId: "quiz_typescript_interfaces_types",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about excess property checking is most accurate?",
    options: [
      { id: "A", text: "It means TypeScript rejects every object containing extra properties in every situation" },
      { id: "B", text: "It is especially relevant when object literals are directly assigned to a target type" },
      { id: "C", text: "It only applies to arrays" },
      { id: "D", text: "It is a runtime validation feature" }
    ],
    correctOptionId: "B",
    explanation: "TypeScript performs stricter checks for fresh object literals assigned to target types, helping catch likely misspelled or unexpected properties.",
    tags: ["interfaces", "excess-property-checking"]
  },

  {
    id: "typescript-interfaces-types-q-040",
    quizId: "quiz_typescript_interfaces_types",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might this work?\n\n`const data = { name: \"Avi\", age: 23, role: \"admin\" };`\n`const user: User = data;`\n\nwhere User only requires `name` and `age`?",
    options: [
      { id: "A", text: "TypeScript ignores all property types" },
      { id: "B", text: "Structural typing allows the source value to have additional compatible properties" },
      { id: "C", text: "The role property is automatically deleted" },
      { id: "D", text: "User becomes any" }
    ],
    correctOptionId: "B",
    explanation: "Structural typing generally allows a value with at least the required compatible members to be assigned to the target type. Excess property checking behaves differently for fresh object literals.",
    tags: ["interfaces", "structural-typing", "excess-property-checking"]
  },

  {
    id: "typescript-interfaces-types-q-041",
    quizId: "quiz_typescript_interfaces_types",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes the difference between an interface and a type alias for object shapes?",
    options: [
      { id: "A", text: "Interfaces can describe objects, while type aliases cannot" },
      { id: "B", text: "They have completely identical capabilities in every TypeScript feature" },
      { id: "C", text: "Both can describe object shapes, but interfaces support declaration merging and type aliases can directly express broader type compositions" },
      { id: "D", text: "Type aliases always generate better runtime code" }
    ],
    correctOptionId: "C",
    explanation: "There is significant overlap, but interfaces support features such as declaration merging, while type aliases can name unions, intersections, and other type expressions directly.",
    tags: ["interfaces", "type-aliases", "comparison"]
  },

  {
    id: "typescript-interfaces-types-q-042",
    quizId: "quiz_typescript_interfaces_types",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which choice is often a good convention for defining a public object contract that may be extended through declaration merging?",
    options: [
      { id: "A", text: "Interface" },
      { id: "B", text: "Tuple" },
      { id: "C", text: "Enum only" },
      { id: "D", text: "Primitive literal" }
    ],
    correctOptionId: "A",
    explanation: "Interfaces are well suited to extensible object contracts and support declaration merging.",
    tags: ["interfaces", "design"]
  },

  {
    id: "typescript-interfaces-types-q-043",
    quizId: "quiz_typescript_interfaces_types",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which type alias correctly combines two object types?",
    options: [
      { id: "A", text: "type Profile = User + Settings" },
      { id: "B", text: "type Profile = User | Settings" },
      { id: "C", text: "type Profile = User & Settings" },
      { id: "D", text: "type Profile = merge(User, Settings)" }
    ],
    correctOptionId: "C",
    explanation: "The intersection operator `&` combines the requirements of both object types.",
    tags: ["type-aliases", "intersections"]
  },

  {
    id: "typescript-interfaces-types-q-044",
    quizId: "quiz_typescript_interfaces_types",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens if two interfaces with the same name declare the same property with incompatible types?",
    options: [
      { id: "A", text: "TypeScript silently chooses the second type" },
      { id: "B", text: "The property is converted to any" },
      { id: "C", text: "The declarations generally produce a type error because they cannot be merged compatibly" },
      { id: "D", text: "The property is removed" }
    ],
    correctOptionId: "C",
    explanation: "Declaration merging requires compatible declarations. Conflicting property types cannot normally be merged.",
    tags: ["interfaces", "declaration-merging", "errors"]
  },

  {
    id: "typescript-interfaces-types-q-045",
    quizId: "quiz_typescript_interfaces_types",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about generic type aliases is correct?",
    options: [
      { id: "A", text: "They cannot have type parameters" },
      { id: "B", text: "They can define reusable parameterized types such as `type Result<T> = { data: T }`" },
      { id: "C", text: "They only support primitive types" },
      { id: "D", text: "They automatically create generic classes" }
    ],
    correctOptionId: "B",
    explanation: "Type aliases can be generic and are useful for reusable type transformations and structures.",
    tags: ["type-aliases", "generics"]
  },

  {
    id: "typescript-interfaces-types-q-046",
    quizId: "quiz_typescript_interfaces_types",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which pattern is best for modeling a component's props when the props have a fixed object shape?",
    options: [
      { id: "A", text: "A typed interface or object type describing the props" },
      { id: "B", text: "Any for every prop" },
      { id: "C", text: "A runtime enum for the entire props object" },
      { id: "D", text: "A tuple regardless of the props structure" }
    ],
    correctOptionId: "A",
    explanation: "Interfaces or object type aliases provide clear reusable contracts for React component props.",
    tags: ["interfaces", "react", "props"]
  },

  {
    id: "typescript-interfaces-types-q-047",
    quizId: "quiz_typescript_interfaces_types",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "You need a reusable object contract that can accept either `User` or `Product` depending on the caller. Which approach is most appropriate?",
    options: [
      { id: "A", text: "interface Data = User | Product" },
      { id: "B", text: "type Data = User | Product" },
      { id: "C", text: "interface Data extends User | Product" },
      { id: "D", text: "type Data implements User, Product" }
    ],
    correctOptionId: "B",
    explanation: "A type alias can directly represent a union such as `User | Product`.",
    tags: ["type-aliases", "unions"]
  },

  {
    id: "typescript-interfaces-types-q-048",
    quizId: "quiz_typescript_interfaces_types",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main advantage of extracting a repeated object shape into an interface or type alias?",
    options: [
      { id: "A", text: "It creates runtime validation automatically" },
      { id: "B", text: "It improves reuse, consistency, readability, and maintainability of the type contract" },
      { id: "C", text: "It makes all objects immutable" },
      { id: "D", text: "It removes the need for JavaScript objects" }
    ],
    correctOptionId: "B",
    explanation: "Named types centralize contracts, making them easier to reuse and update consistently across a codebase.",
    tags: ["interfaces", "type-aliases", "maintainability"]
  },

  {
    id: "typescript-interfaces-types-q-049",
    quizId: "quiz_typescript_interfaces_types",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A team models API responses with many variants. Each variant has a different `status` literal and different data. Which design gives the strongest compile-time modeling?",
    options: [
      { id: "A", text: "Use `any` for the response" },
      { id: "B", text: "Use one interface with every property optional" },
      { id: "C", text: "Use a discriminated union of specific object types" },
      { id: "D", text: "Use a single `object` type" }
    ],
    correctOptionId: "C",
    explanation: "Discriminated unions model mutually exclusive variants precisely and allow TypeScript to narrow based on the discriminant.",
    tags: ["type-aliases", "interfaces", "discriminated-unions", "api"]
  },

  {
    id: "typescript-interfaces-types-q-050",
    quizId: "quiz_typescript_interfaces_types",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A project has a reusable `User` object contract, several specialized user shapes, and a union of API states. Which combination best fits TypeScript's strengths?",
    options: [
      { id: "A", text: "Use interfaces for reusable object contracts and type aliases for unions/intersections where appropriate" },
      { id: "B", text: "Use `any` for all API states and interfaces only for primitive values" },
      { id: "C", text: "Use only enums because interfaces cannot describe objects" },
      { id: "D", text: "Use tuples for every object shape" }
    ],
    correctOptionId: "A",
    explanation: "Interfaces are excellent for reusable object contracts and extension, while type aliases are especially useful for unions, intersections, and other composed types.",
    tags: ["interfaces", "type-aliases", "unions", "intersections", "design"]
  }
];

export default typescriptInterfacesTypesQuestions;