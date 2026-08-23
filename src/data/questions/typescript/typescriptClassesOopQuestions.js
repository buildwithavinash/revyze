const typescriptClassesOopQuestions = [
  {
    id: "typescript-classes-oop-q-001",
    quizId: "quiz_typescript_classes_oop",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a class in TypeScript primarily used for?",
    options: [
      { id: "A", text: "Grouping data and behavior into reusable blueprints for objects" },
      { id: "B", text: "Replacing all functions in a project" },
      { id: "C", text: "Making TypeScript run in the browser" },
      { id: "D", text: "Turning every property into a global variable" }
    ],
    correctOptionId: "A",
    explanation: "Classes help organize object-oriented code by combining data and methods into a reusable blueprint.",
    tags: ["classes", "oop", "fundamentals"]
  },
  {
    id: "typescript-classes-oop-q-002",
    quizId: "quiz_typescript_classes_oop",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of a constructor?",
    options: [
      { id: "A", text: "To define CSS styles for a class" },
      { id: "B", text: "To initialize a new instance when the class is instantiated" },
      { id: "C", text: "To make a class abstract automatically" },
      { id: "D", text: "To prevent methods from being called" }
    ],
    correctOptionId: "B",
    explanation: "A constructor runs when a new instance is created and is commonly used to set up initial property values.",
    tags: ["constructor", "classes", "initialization"]
  },
  {
    id: "typescript-classes-oop-q-003",
    quizId: "quiz_typescript_classes_oop",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which access modifier makes a class member available from anywhere?",
    options: [
      { id: "A", text: "private" },
      { id: "B", text: "protected" },
      { id: "C", text: "public" },
      { id: "D", text: "internal" }
    ],
    correctOptionId: "C",
    explanation: "public members can be accessed from outside the class, whereas private and protected are more restrictive.",
    tags: ["access-modifiers", "public", "classes"]
  },
  {
    id: "typescript-classes-oop-q-004",
    quizId: "quiz_typescript_classes_oop",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does private mean in TypeScript class members?",
    options: [
      { id: "A", text: "Accessible from any subclass and anywhere else" },
      { id: "B", text: "Accessible only from HTML" },
      { id: "C", text: "Automatically readonly" },
      { id: "D", text: "Accessible only inside the class that defines it" }
    ],
    correctOptionId: "D",
    explanation: "private members are only intended for use inside the class itself.",
    tags: ["private", "access-modifiers", "encapsulation"]
  },
  {
    id: "typescript-classes-oop-q-005",
    quizId: "quiz_typescript_classes_oop",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does protected mean in TypeScript class members?",
    options: [
      { id: "A", text: "Accessible only in the class and its subclasses" },
      { id: "B", text: "Accessible from anywhere in the program" },
      { id: "C", text: "Accessible only in interfaces" },
      { id: "D", text: "Accessible only through JSON" }
    ],
    correctOptionId: "A",
    explanation: "protected members can be used inside the class and by derived classes, but not from unrelated code outside the class hierarchy.",
    tags: ["protected", "access-modifiers", "inheritance"]
  },
  {
    id: "typescript-classes-oop-q-006",
    quizId: "quiz_typescript_classes_oop",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the readonly modifier do on a class property?",
    options: [
      { id: "A", text: "Makes the property impossible to access" },
      { id: "B", text: "Prevents reassignment through the type after initialization" },
      { id: "C", text: "Makes the property private" },
      { id: "D", text: "Turns the property into a function" }
    ],
    correctOptionId: "B",
    explanation: "readonly helps prevent later reassignment through the TypeScript type system after the property is initialized.",
    tags: ["readonly", "classes", "encapsulation"]
  },
  {
    id: "typescript-classes-oop-q-007",
    quizId: "quiz_typescript_classes_oop",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is inheritance in object-oriented programming?",
    options: [
      { id: "A", text: "A class can only use interfaces" },
      { id: "B", text: "A class can never contain methods" },
      { id: "C", text: "A class can extend another class and reuse or customize its behavior" },
      { id: "D", text: "A class automatically becomes a module" }
    ],
    correctOptionId: "C",
    explanation: "Inheritance allows a derived class to build on the behavior of a base class, often adding or overriding functionality.",
    tags: ["inheritance", "classes", "oop"]
  },
  {
    id: "typescript-classes-oop-q-008",
    quizId: "quiz_typescript_classes_oop",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is super used in a derived class constructor?",
    options: [
      { id: "A", text: "To import a module" },
      { id: "B", text: "To create a new type alias" },
      { id: "C", text: "To make a method private" },
      { id: "D", text: "To call the parent class constructor or access parent behavior" }
    ],
    correctOptionId: "D",
    explanation: "super lets a subclass invoke the base class constructor before using this, which is required when extending a class.",
    tags: ["super", "inheritance", "constructors"]
  },
  {
    id: "typescript-classes-oop-q-009",
    quizId: "quiz_typescript_classes_oop",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an abstract class?",
    options: [
      { id: "A", text: "A class meant to be extended and may contain abstract members that subclasses must implement" },
      { id: "B", text: "A class that cannot declare methods" },
      { id: "C", text: "A class that can only be used in JavaScript, not TypeScript" },
      { id: "D", text: "A class that can be instantiated directly but not extended" }
    ],
    correctOptionId: "A",
    explanation: "Abstract classes are useful as base classes that define shared behavior and require subclasses to fill in specific details.",
    tags: ["abstract-classes", "inheritance", "oop"]
  },
  {
    id: "typescript-classes-oop-q-010",
    quizId: "quiz_typescript_classes_oop",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does implements do in TypeScript classes?",
    options: [
      { id: "A", text: "It tells the class to extend another class" },
      { id: "B", text: "It declares that the class must satisfy the shape of an interface" },
      { id: "C", text: "It makes the class abstract" },
      { id: "D", text: "It converts the class into a type alias" }
    ],
    correctOptionId: "B",
    explanation: "implements checks that the class provides the members required by the interface.",
    tags: ["interfaces", "implements", "classes"]
  },
  {
    id: "typescript-classes-oop-q-011",
    quizId: "quiz_typescript_classes_oop",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax declares a public property and initializes it in the constructor?",
    options: [
      { id: "A", text: "constructor(name public: string) {}" },
      { id: "B", text: "constructor(name: public string) {}" },
      { id: "C", text: "constructor(public name: string) {}" },
      { id: "D", text: "constructor(public = name: string) {}" }
    ],
    correctOptionId: "C",
    explanation: "Parameter properties let you declare and initialize a class property directly in the constructor parameter list.",
    tags: ["parameter-properties", "constructor", "classes"]
  },
  {
    id: "typescript-classes-oop-q-012",
    quizId: "quiz_typescript_classes_oop",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a getter?",
    options: [
      { id: "A", text: "To prevent an object from being created" },
      { id: "B", text: "To create a new class" },
      { id: "C", text: "To make a property optional" },
      { id: "D", text: "To run code when a property is read" }
    ],
    correctOptionId: "D",
    explanation: "Getters let you compute or adapt a value when a property is accessed.",
    tags: ["getters", "classes", "encapsulation"]
  },
  {
    id: "typescript-classes-oop-q-013",
    quizId: "quiz_typescript_classes_oop",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a setter?",
    options: [
      { id: "A", text: "To run code when a property is assigned" },
      { id: "B", text: "To define a component state update" },
      { id: "C", text: "To convert a class into an interface" },
      { id: "D", text: "To make a method static" }
    ],
    correctOptionId: "A",
    explanation: "Setters allow you to validate or transform a value when code assigns to a property.",
    tags: ["setters", "classes", "encapsulation"]
  },
  {
    id: "typescript-classes-oop-q-014",
    quizId: "quiz_typescript_classes_oop",
    order: 14,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nclass Counter {\n  count = 0;\n  increment() {\n    this.count += 1;\n    return this.count;\n  }\n}\n\nconst counter = new Counter();\nconsole.log(counter.increment());",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "undefined" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "B",
    explanation: "The method increments count from 0 to 1 and returns the new value.",
    tags: ["classes", "methods", "code-reading"]
  },
  {
    id: "typescript-classes-oop-q-015",
    quizId: "quiz_typescript_classes_oop",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is method overriding?",
    options: [
      { id: "A", text: "A subclass deletes all inherited methods" },
      { id: "B", text: "A subclass cannot use the same method name" },
      { id: "C", text: "A subclass provides its own implementation of a method inherited from a base class" },
      { id: "D", text: "A class must become abstract first" }
    ],
    correctOptionId: "C",
    explanation: "Overriding lets a derived class change or extend the behavior of a method defined in the parent class.",
    tags: ["overriding", "inheritance", "methods"]
  },
  {
    id: "typescript-classes-oop-q-016",
    quizId: "quiz_typescript_classes_oop",
    order: 16,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a static member?",
    options: [
      { id: "A", text: "A member that can only be used in HTML" },
      { id: "B", text: "A member that cannot be typed" },
      { id: "C", text: "A member that is always private" },
      { id: "D", text: "A member that belongs to the class itself rather than to each instance" }
    ],
    correctOptionId: "D",
    explanation: "Static members are accessed on the class, not on instances created from that class.",
    tags: ["static", "classes", "oop"]
  },
  {
    id: "typescript-classes-oop-q-017",
    quizId: "quiz_typescript_classes_oop",
    order: 17,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about interfaces and classes is correct?",
    options: [
      { id: "A", text: "A class can implement multiple interfaces" },
      { id: "B", text: "Interfaces are runtime objects that automatically create methods" },
      { id: "C", text: "A class can only implement one interface" },
      { id: "D", text: "Interfaces can extend classes only at runtime" }
    ],
    correctOptionId: "A",
    explanation: "A class can implement more than one interface, as long as it satisfies the members required by each one.",
    tags: ["interfaces", "implements", "oop"]
  },
  {
    id: "typescript-classes-oop-q-018",
    quizId: "quiz_typescript_classes_oop",
    order: 18,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does instanceof check?",
    options: [
      { id: "A", text: "Whether a value is assignable to a type alias" },
      { id: "B", text: "Whether a value is an instance of a particular constructor or class at runtime" },
      { id: "C", text: "Whether a class has a private field" },
      { id: "D", text: "Whether a property is readonly" }
    ],
    correctOptionId: "B",
    explanation: "instanceof is a runtime JavaScript check that tests whether an object's prototype chain includes a given constructor's prototype.",
    tags: ["instanceof", "runtime", "oop"]
  },
  {
    id: "typescript-classes-oop-q-019",
    quizId: "quiz_typescript_classes_oop",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main benefit of using composition alongside classes?",
    options: [
      { id: "A", text: "It prevents TypeScript from checking types" },
      { id: "B", text: "It removes the need for any objects" },
      { id: "C", text: "It can keep classes smaller by delegating behavior to reusable objects or helpers" },
      { id: "D", text: "It always makes inheritance simpler" }
    ],
    correctOptionId: "C",
    explanation: "Composition often makes code easier to maintain than deep inheritance hierarchies because responsibilities can be split into focused pieces.",
    tags: ["composition", "oop", "design"]
  },
  {
    id: "typescript-classes-oop-q-020",
    quizId: "quiz_typescript_classes_oop",
    order: 20,
    type: "code",
    difficulty: "Advanced",
    question: "What is the output?\n\nclass Animal {\n  speak() {\n    return \"sound\";\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return \"bark\";\n  }\n}\n\nconst pet = new Dog();\nconsole.log(pet.speak());",
    options: [
      { id: "A", text: "sound" },
      { id: "B", text: "undefined" },
      { id: "C", text: "Animal" },
      { id: "D", text: "bark" }
    ],
    correctOptionId: "D",
    explanation: "Dog overrides speak, so calling it on a Dog instance returns bark.",
    tags: ["inheritance", "overriding", "code-reading"]
  }
];

export default typescriptClassesOopQuestions;
