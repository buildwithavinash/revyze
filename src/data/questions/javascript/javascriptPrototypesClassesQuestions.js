const javascriptPrototypesClassesQuestions = [
  {
    id: "javascript-prototypes-classes-q-001",
    quizId: "quiz_javascript_prototypes_classes",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a prototype in JavaScript?",
    options: [
      { id: "A", text: "An object that another object can inherit properties and methods from" },
      { id: "B", text: "A special variable that can only store strings" },
      { id: "C", text: "A function that automatically creates DOM elements" },
      { id: "D", text: "A module used to import JavaScript files" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript uses prototype-based inheritance. Objects can delegate property and method lookups to another object through their prototype.",
    tags: ["prototypes", "inheritance", "fundamentals"]
  },

  {
    id: "javascript-prototypes-classes-q-002",
    quizId: "quiz_javascript_prototypes_classes",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the prototype chain?",
    options: [
      { id: "A", text: "The sequence of objects JavaScript searches when looking up a property or method" },
      { id: "B", text: "The order in which classes are declared in a file" },
      { id: "C", text: "A chain of constructors that always execute simultaneously" },
      { id: "D", text: "A list containing only an object's own properties" }
    ],
    correctOptionId: "A",
    explanation: "If a property is not found directly on an object, JavaScript follows its prototype and continues through the prototype chain until the property is found or the chain ends.",
    tags: ["prototype-chain", "property-lookup", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-003",
    quizId: "quiz_javascript_prototypes_classes",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What does this expression access?\n\nconst user = {};\nuser.__proto__",
    options: [
      { id: "A", text: "The object's prototype" },
      { id: "B", text: "The object's constructor function's source code" },
      { id: "C", text: "The object's own enumerable properties" },
      { id: "D", text: "The object's memory address" }
    ],
    correctOptionId: "A",
    explanation: "`__proto__` provides access to an object's prototype through a legacy accessor. For modern code, `Object.getPrototypeOf()` and `Object.setPrototypeOf()` are generally preferred.",
    tags: ["__proto__", "prototypes", "Object.getPrototypeOf"]
  },

  {
    id: "javascript-prototypes-classes-q-004",
    quizId: "quiz_javascript_prototypes_classes",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What does Object.getPrototypeOf(obj) return?",
    options: [
      { id: "A", text: "The prototype of obj" },
      { id: "B", text: "All properties inherited by obj as an array" },
      { id: "C", text: "The constructor source code" },
      { id: "D", text: "A copy of obj" }
    ],
    correctOptionId: "A",
    explanation: "`Object.getPrototypeOf()` directly returns the internal prototype object associated with the supplied object.",
    tags: ["Object.getPrototypeOf", "prototypes"]
  },

  {
    id: "javascript-prototypes-classes-q-005",
    quizId: "quiz_javascript_prototypes_classes",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What is true about this object?\n\nconst user = {\n  name: \"Avi\"\n};",
    options: [
      { id: "A", text: "It normally inherits from Object.prototype" },
      { id: "B", text: "It has no prototype" },
      { id: "C", text: "Its prototype is Array.prototype" },
      { id: "D", text: "Its prototype is Function.prototype" }
    ],
    correctOptionId: "A",
    explanation: "Objects created with an object literal normally have `Object.prototype` as their prototype.",
    tags: ["Object.prototype", "object-literals", "prototypes"]
  },

  {
    id: "javascript-prototypes-classes-q-006",
    quizId: "quiz_javascript_prototypes_classes",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "What does this expression normally evaluate to?\n\nObject.getPrototypeOf({}) === Object.prototype",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "It throws a TypeError" }
    ],
    correctOptionId: "A",
    explanation: "An object literal normally receives `Object.prototype` as its immediate prototype.",
    tags: ["Object.prototype", "Object.getPrototypeOf", "prototypes"]
  },

  {
    id: "javascript-prototypes-classes-q-007",
    quizId: "quiz_javascript_prototypes_classes",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Where are methods defined on a constructor's prototype typically shared?",
    options: [
      { id: "A", text: "Among instances whose prototype points to that constructor's prototype" },
      { id: "B", text: "Only inside the constructor's local scope" },
      { id: "C", text: "Inside every instance as a separate copied function" },
      { id: "D", text: "Only inside Object.prototype" }
    ],
    correctOptionId: "A",
    explanation: "Instances delegate method lookup to their shared prototype object, so prototype methods can be shared rather than recreated separately for every instance.",
    tags: ["prototype-methods", "instances", "memory"]
  },

  {
    id: "javascript-prototypes-classes-q-008",
    quizId: "quiz_javascript_prototypes_classes",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged?\n\nfunction User() {}\nUser.prototype.sayHi = function () {\n  return \"Hi\";\n};\n\nconst user = new User();\nconsole.log(user.sayHi());",
    options: [
      { id: "A", text: "Hi" },
      { id: "B", text: "undefined" },
      { id: "C", text: "TypeError because sayHi is not on user" },
      { id: "D", text: "User" }
    ],
    correctOptionId: "A",
    explanation: "The method is found on `User.prototype`. The instance `user` delegates property lookup to that prototype.",
    tags: ["constructor-functions", "prototype-methods", "property-lookup"]
  },

  {
    id: "javascript-prototypes-classes-q-009",
    quizId: "quiz_javascript_prototypes_classes",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the new operator do in a simplified model when used with a constructor function?",
    options: [
      { id: "A", text: "Creates an object, links it to the constructor's prototype, calls the constructor with that object as this, and returns the resulting object when appropriate" },
      { id: "B", text: "Only copies the constructor's source code" },
      { id: "C", text: "Creates a completely unrelated object with no prototype" },
      { id: "D", text: "Converts the constructor into a class" }
    ],
    correctOptionId: "A",
    explanation: "`new` establishes the new object's prototype relationship, invokes the constructor with the new object as `this`, and returns the object unless the constructor explicitly returns an appropriate object.",
    tags: ["new", "constructors", "prototype-chain"]
  },

  {
    id: "javascript-prototypes-classes-q-010",
    quizId: "quiz_javascript_prototypes_classes",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "What is logged?\n\nfunction User(name) {\n  this.name = name;\n}\n\nconst user = new User(\"Avi\");\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "User" },
      { id: "C", text: "undefined" },
      { id: "D", text: "name" }
    ],
    correctOptionId: "A",
    explanation: "`new User(\"Avi\")` creates an instance and calls `User` with that instance as `this`, so `this.name` becomes `\"Avi\"`.",
    tags: ["new", "constructor-functions", "this"]
  },

  {
    id: "javascript-prototypes-classes-q-011",
    quizId: "quiz_javascript_prototypes_classes",
    order: 11,
    type: "code",
    difficulty: "Beginner",
    question: "Which statement correctly describes the relationship between an instance and its constructor's prototype?",
    options: [
      { id: "A", text: "The instance's prototype normally points to Constructor.prototype" },
      { id: "B", text: "Constructor.prototype points to every instance" },
      { id: "C", text: "The instance copies every prototype property into itself" },
      { id: "D", text: "There is no relationship between them" }
    ],
    correctOptionId: "A",
    explanation: "Objects created with `new Constructor()` normally have `Constructor.prototype` as their immediate prototype.",
    tags: ["new", "prototype-chain", "constructor-functions"]
  },

  {
    id: "javascript-prototypes-classes-q-012",
    quizId: "quiz_javascript_prototypes_classes",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "What does this evaluate to?\n\nfunction User() {}\nconst user = new User();\nuser.__proto__ === User.prototype",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "It throws because instances cannot have prototypes" }
    ],
    correctOptionId: "A",
    explanation: "An object created with `new User()` normally has `User.prototype` as its immediate prototype.",
    tags: ["__proto__", "new", "prototype-chain"]
  },

  {
    id: "javascript-prototypes-classes-q-013",
    quizId: "quiz_javascript_prototypes_classes",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is Object.prototype?",
    options: [
      { id: "A", text: "The common prototype object from which ordinary JavaScript objects ultimately inherit" },
      { id: "B", text: "The constructor for every function" },
      { id: "C", text: "A copy of every object in the program" },
      { id: "D", text: "A special array containing all objects" }
    ],
    correctOptionId: "A",
    explanation: "Ordinary objects commonly inherit from `Object.prototype`, which provides methods such as `toString()` and `hasOwnProperty()`.",
    tags: ["Object.prototype", "prototypes", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-014",
    quizId: "quiz_javascript_prototypes_classes",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the difference between an object's prototype and the prototype property of a constructor function?",
    options: [
      { id: "A", text: "An object's prototype is its internal prototype link, while a constructor function's prototype property is the object used as the prototype for instances created with new" },
      { id: "B", text: "They are always exactly the same concept and exist only on objects" },
      { id: "C", text: "An object's prototype is always null" },
      { id: "D", text: "A constructor's prototype property contains the constructor's source code" }
    ],
    correctOptionId: "A",
    explanation: "This distinction is fundamental: `Object.getPrototypeOf(instance)` retrieves the instance's prototype, while `Constructor.prototype` is the object that `new Constructor()` normally links instances to.",
    tags: ["prototypes", "constructor-functions", "prototype-property"]
  },

  {
    id: "javascript-prototypes-classes-q-015",
    quizId: "quiz_javascript_prototypes_classes",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an ES6 class in JavaScript best described as?",
    options: [
      { id: "A", text: "Syntax that provides a clearer way to work with JavaScript's prototype-based inheritance" },
      { id: "B", text: "A completely separate inheritance system unrelated to prototypes" },
      { id: "C", text: "A special JSON object" },
      { id: "D", text: "A function that can only contain static properties" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript classes provide class-oriented syntax, but instances still use prototypes and inheritance remains prototype-based underneath.",
    tags: ["classes", "prototypes", "ES6"]
  },

  {
    id: "javascript-prototypes-classes-q-016",
    quizId: "quiz_javascript_prototypes_classes",
    order: 16,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nconst user = new User(\"Avi\");\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "User" },
      { id: "C", text: "undefined" },
      { id: "D", text: "constructor" }
    ],
    correctOptionId: "A",
    explanation: "The class constructor runs when `new User(\"Avi\")` is called and assigns the supplied value to the instance's `name` property.",
    tags: ["classes", "constructor", "instances"]
  },

  {
    id: "javascript-prototypes-classes-q-017",
    quizId: "quiz_javascript_prototypes_classes",
    order: 17,
    type: "code",
    difficulty: "Intermediate",
    question: "Where is a normal class method such as this stored?\n\nclass User {\n  sayHi() {\n    return \"Hi\";\n  }\n}",
    options: [
      { id: "A", text: "On User.prototype" },
      { id: "B", text: "As a new function copied into every instance" },
      { id: "C", text: "On Object.prototype directly" },
      { id: "D", text: "Only inside the constructor" }
    ],
    correctOptionId: "A",
    explanation: "Instance methods declared in class syntax are placed on the class's prototype, allowing instances to share the method through prototype lookup.",
    tags: ["classes", "prototype-methods", "memory"]
  },

  {
    id: "javascript-prototypes-classes-q-018",
    quizId: "quiz_javascript_prototypes_classes",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this evaluate to?\n\nclass User {\n  sayHi() {}\n}\n\nconst a = new User();\nconst b = new User();\na.sayHi === b.sayHi",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "It throws a TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Both instances find `sayHi` on the same `User.prototype` object, so they reference the same method function.",
    tags: ["classes", "prototype-methods", "instances"]
  },

  {
    id: "javascript-prototypes-classes-q-019",
    quizId: "quiz_javascript_prototypes_classes",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the constructor method inside a class define?",
    options: [
      { id: "A", text: "Initialization logic that runs when an instance is created with new" },
      { id: "B", text: "A method that can only be called statically" },
      { id: "C", text: "The class's prototype chain manually" },
      { id: "D", text: "A method that runs when the class is imported" }
    ],
    correctOptionId: "A",
    explanation: "The `constructor()` method is invoked when a class instance is created with `new` and is commonly used to initialize instance state.",
    tags: ["classes", "constructor", "initialization"]
  },

  {
    id: "javascript-prototypes-classes-q-020",
    quizId: "quiz_javascript_prototypes_classes",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens if a derived class constructor does not call super() before accessing this?",
    options: [
      { id: "A", text: "It causes a ReferenceError when this is accessed before super()" },
      { id: "B", text: "It automatically creates the parent instance" },
      { id: "C", text: "It silently skips the parent constructor" },
      { id: "D", text: "It converts the derived class into a static class" }
    ],
    correctOptionId: "A",
    explanation: "Derived class constructors must call `super()` before using `this`, because the derived instance is not initialized until the parent constructor has been invoked.",
    tags: ["classes", "inheritance", "super", "derived-classes"]
  },

  {
    id: "javascript-prototypes-classes-q-021",
    quizId: "quiz_javascript_prototypes_classes",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the extends keyword do in a class declaration?",
    options: [
      { id: "A", text: "Establishes inheritance from another class" },
      { id: "B", text: "Copies every property into the subclass instance" },
      { id: "C", text: "Makes all methods static" },
      { id: "D", text: "Prevents the subclass from having a prototype" }
    ],
    correctOptionId: "A",
    explanation: "`extends` creates a derived class relationship, allowing instances of the subclass to inherit behavior from the parent class.",
    tags: ["extends", "inheritance", "classes"]
  },

  {
    id: "javascript-prototypes-classes-q-022",
    quizId: "quiz_javascript_prototypes_classes",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass Animal {\n  speak() {\n    return \"sound\";\n  }\n}\n\nclass Dog extends Animal {}\n\nconst dog = new Dog();\nconsole.log(dog.speak());",
    options: [
      { id: "A", text: "sound" },
      { id: "B", text: "undefined" },
      { id: "C", text: "Dog" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Dog instances inherit from `Dog.prototype`, whose prototype is `Animal.prototype`, so `speak()` is found through the prototype chain.",
    tags: ["extends", "inheritance", "prototype-chain"]
  },

  {
    id: "javascript-prototypes-classes-q-023",
    quizId: "quiz_javascript_prototypes_classes",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is super() used for inside a derived class constructor?",
    options: [
      { id: "A", text: "To call the parent class constructor" },
      { id: "B", text: "To create a new unrelated object" },
      { id: "C", text: "To make the subclass static" },
      { id: "D", text: "To access Object.prototype only" }
    ],
    correctOptionId: "A",
    explanation: "`super()` invokes the parent constructor and initializes the derived instance so that `this` can be used.",
    tags: ["super", "extends", "constructor", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-024",
    quizId: "quiz_javascript_prototypes_classes",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass Animal {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name) {\n    super(name);\n    this.type = \"dog\";\n  }\n}\n\nconst dog = new Dog(\"Max\");\nconsole.log(dog.name, dog.type);",
    options: [
      { id: "A", text: "Max dog" },
      { id: "B", text: "undefined dog" },
      { id: "C", text: "Max undefined" },
      { id: "D", text: "dog Max" }
    ],
    correctOptionId: "A",
    explanation: "`super(name)` runs the parent constructor and initializes `name`. The derived constructor then assigns `type`.",
    tags: ["super", "inheritance", "constructor"]
  },

  {
    id: "javascript-prototypes-classes-q-025",
    quizId: "quiz_javascript_prototypes_classes",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass Animal {\n  speak() {\n    return \"animal\";\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return \"dog\";\n  }\n}\n\nconsole.log(new Dog().speak());",
    options: [
      { id: "A", text: "dog" },
      { id: "B", text: "animal" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "The subclass defines its own `speak()` method, so property lookup finds `Dog.prototype.speak` before reaching `Animal.prototype.speak`.",
    tags: ["method-overriding", "inheritance", "classes"]
  },

  {
    id: "javascript-prototypes-classes-q-026",
    quizId: "quiz_javascript_prototypes_classes",
    order: 26,
    type: "code",
    difficulty: "Intermediate",
    question: "Inside an overridden subclass method, what does super.speak() refer to?",
    options: [
      { id: "A", text: "The parent class's speak method" },
      { id: "B", text: "The subclass's speak method recursively" },
      { id: "C", text: "Object.prototype.speak" },
      { id: "D", text: "A static method named speak" }
    ],
    correctOptionId: "A",
    explanation: "Within a derived class method, `super.method()` accesses the corresponding method from the parent prototype.",
    tags: ["super", "method-overriding", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-027",
    quizId: "quiz_javascript_prototypes_classes",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass Animal {\n  speak() {\n    return \"animal\";\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return super.speak() + \" dog\";\n  }\n}\n\nconsole.log(new Dog().speak());",
    options: [
      { id: "A", text: "animal dog" },
      { id: "B", text: "dog animal" },
      { id: "C", text: "dog dog" },
      { id: "D", text: "animal" }
    ],
    correctOptionId: "A",
    explanation: "`super.speak()` invokes the parent implementation, returning `animal`, after which the subclass adds ` dog`.",
    tags: ["super", "method-overriding", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-028",
    quizId: "quiz_javascript_prototypes_classes",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about class methods is correct?",
    options: [
      { id: "A", text: "Normal instance methods are non-enumerable properties of the class prototype" },
      { id: "B", text: "Every method is copied onto every instance as an own property" },
      { id: "C", text: "Every method is automatically static" },
      { id: "D", text: "Methods are stored on Object.prototype" }
    ],
    correctOptionId: "A",
    explanation: "Methods defined using class method syntax are placed on the prototype and are non-enumerable by default.",
    tags: ["classes", "prototype-methods", "enumerability"]
  },

  {
    id: "javascript-prototypes-classes-q-029",
    quizId: "quiz_javascript_prototypes_classes",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a static method?",
    options: [
      { id: "A", text: "To define behavior accessed on the class itself rather than on instances" },
      { id: "B", text: "To define a method that every instance must override" },
      { id: "C", text: "To prevent inheritance" },
      { id: "D", text: "To store data inside Object.prototype" }
    ],
    correctOptionId: "A",
    explanation: "Static methods belong to the class constructor itself. They are called with `ClassName.method()` rather than `instance.method()`.",
    tags: ["static", "classes", "methods"]
  },

  {
    id: "javascript-prototypes-classes-q-030",
    quizId: "quiz_javascript_prototypes_classes",
    order: 30,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass MathUtil {\n  static add(a, b) {\n    return a + b;\n  }\n}\n\nconsole.log(MathUtil.add(2, 3));",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "undefined" },
      { id: "C", text: "TypeError" },
      { id: "D", text: "MathUtil" }
    ],
    correctOptionId: "A",
    explanation: "`add` is static, so it belongs to the `MathUtil` constructor and can be called as `MathUtil.add()`.",
    tags: ["static", "classes", "methods"]
  },

  {
    id: "javascript-prototypes-classes-q-031",
    quizId: "quiz_javascript_prototypes_classes",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens here?\n\nclass MathUtil {\n  static add(a, b) {\n    return a + b;\n  }\n}\n\nconst util = new MathUtil();\nconsole.log(util.add(2, 3));",
    options: [
      { id: "A", text: "TypeError because add is static and is not an instance method" },
      { id: "B", text: "5" },
      { id: "C", text: "undefined" },
      { id: "D", text: "MathUtil" }
    ],
    correctOptionId: "A",
    explanation: "Static methods are properties of the class constructor, not of its prototype. Therefore instances do not inherit them as normal instance methods.",
    tags: ["static", "instance-methods", "classes"]
  },

  {
    id: "javascript-prototypes-classes-q-032",
    quizId: "quiz_javascript_prototypes_classes",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the instanceof operator test?",
    options: [
      { id: "A", text: "Whether a constructor's prototype occurs in an object's prototype chain" },
      { id: "B", text: "Whether two objects have identical properties" },
      { id: "C", text: "Whether an object was created from JSON" },
      { id: "D", text: "Whether two classes have the same source code" }
    ],
    correctOptionId: "A",
    explanation: "`instanceof` checks whether the prototype property of a constructor appears somewhere in the prototype chain of the tested object.",
    tags: ["instanceof", "prototype-chain", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-033",
    quizId: "quiz_javascript_prototypes_classes",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nclass Animal {}\nclass Dog extends Animal {}\n\nconst dog = new Dog();\nconsole.log(dog instanceof Dog, dog instanceof Animal);",
    options: [
      { id: "A", text: "true true" },
      { id: "B", text: "true false" },
      { id: "C", text: "false true" },
      { id: "D", text: "false false" }
    ],
    correctOptionId: "A",
    explanation: "The Dog instance has `Dog.prototype` in its chain and, through inheritance, `Animal.prototype` as well. Therefore both checks are true.",
    tags: ["instanceof", "extends", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-034",
    quizId: "quiz_javascript_prototypes_classes",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between hasOwnProperty() and the in operator?",
    options: [
      { id: "A", text: "hasOwnProperty checks own properties, while in also considers inherited properties" },
      { id: "B", text: "in checks only own properties, while hasOwnProperty checks prototypes" },
      { id: "C", text: "They always behave identically" },
      { id: "D", text: "Neither can inspect object properties" }
    ],
    correctOptionId: "A",
    explanation: "`hasOwnProperty()` checks whether a property belongs directly to the object. The `in` operator checks the object and its prototype chain.",
    tags: ["prototype-chain", "hasOwnProperty", "in"]
  },

  {
    id: "javascript-prototypes-classes-q-035",
    quizId: "quiz_javascript_prototypes_classes",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What is logged?\n\nconst parent = { role: \"admin\" };\nconst child = Object.create(parent);\n\nconsole.log(\"role\" in child, child.hasOwnProperty(\"role\"));",
    options: [
      { id: "A", text: "true false" },
      { id: "B", text: "false true" },
      { id: "C", text: "true true" },
      { id: "D", text: "false false" }
    ],
    correctOptionId: "A",
    explanation: "`role` is inherited from `parent`, so `in` returns true. It is not an own property of `child`, so `hasOwnProperty` returns false.",
    tags: ["Object.create", "in", "hasOwnProperty", "prototype-chain"]
  },

  {
    id: "javascript-prototypes-classes-q-036",
    quizId: "quiz_javascript_prototypes_classes",
    order: 36,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nconst parent = { value: 10 };\nconst child = Object.create(parent);\n\nchild.value = 20;\nconsole.log(parent.value, child.value);",
    options: [
      { id: "A", text: "10 20" },
      { id: "B", text: "20 20" },
      { id: "C", text: "10 10" },
      { id: "D", text: "20 10" }
    ],
    correctOptionId: "A",
    explanation: "Assigning `child.value` creates or updates an own property on `child`; it does not change the inherited `parent.value` in this case.",
    tags: ["prototype-chain", "property-shadowing", "Object.create"]
  },

  {
    id: "javascript-prototypes-classes-q-037",
    quizId: "quiz_javascript_prototypes_classes",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is property shadowing in a prototype chain?",
    options: [
      { id: "A", text: "When an object has its own property with the same name as an inherited property" },
      { id: "B", text: "When a prototype is deleted from memory" },
      { id: "C", text: "When two constructors have different names" },
      { id: "D", text: "When a class has no constructor" }
    ],
    correctOptionId: "A",
    explanation: "An own property takes precedence over a property with the same key found farther up the prototype chain. The inherited property is effectively shadowed.",
    tags: ["property-shadowing", "prototype-chain", "property-lookup"]
  },

  {
    id: "javascript-prototypes-classes-q-038",
    quizId: "quiz_javascript_prototypes_classes",
    order: 38,
    type: "code",
    difficulty: "Advanced",
    question: "What happens when JavaScript looks up obj.name and obj does not have its own name property?",
    options: [
      { id: "A", text: "JavaScript searches the object's prototype and continues up the prototype chain if necessary" },
      { id: "B", text: "JavaScript immediately returns null" },
      { id: "C", text: "JavaScript always searches Object.prototype first" },
      { id: "D", text: "JavaScript creates the property automatically" }
    ],
    correctOptionId: "A",
    explanation: "Property lookup starts on the object itself. If the property is not found, JavaScript follows the prototype chain until it finds the property or reaches null.",
    tags: ["property-lookup", "prototype-chain"]
  },

  {
    id: "javascript-prototypes-classes-q-039",
    quizId: "quiz_javascript_prototypes_classes",
    order: 39,
    type: "code",
    difficulty: "Advanced",
    question: "What does this evaluate to?\n\nconst obj = Object.create(null);\nObject.getPrototypeOf(obj) === null",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "It throws a TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`Object.create(null)` creates an object with no prototype. Such objects do not inherit methods from `Object.prototype`.",
    tags: ["Object.create", "null-prototype", "prototype-chain"]
  },

  {
    id: "javascript-prototypes-classes-q-040",
    quizId: "quiz_javascript_prototypes_classes",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might Object.create(null) be useful?",
    options: [
      { id: "A", text: "It creates a dictionary-like object without inherited Object.prototype properties" },
      { id: "B", text: "It creates an object that cannot contain properties" },
      { id: "C", text: "It automatically freezes the object" },
      { id: "D", text: "It makes the object an instance of Array" }
    ],
    correctOptionId: "A",
    explanation: "A null-prototype object avoids inherited names such as `toString` and `constructor`, which can be useful for dictionary-like structures.",
    tags: ["Object.create", "null-prototype", "objects"]
  },

  {
    id: "javascript-prototypes-classes-q-041",
    quizId: "quiz_javascript_prototypes_classes",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "What is the prototype relationship in this inheritance chain?\n\nclass Animal {}\nclass Dog extends Animal {}\nconst dog = new Dog();",
    options: [
      { id: "A", text: "dog → Dog.prototype → Animal.prototype → Object.prototype → null" },
      { id: "B", text: "dog → Animal.prototype → Dog.prototype → null" },
      { id: "C", text: "dog → Object.prototype → Dog.prototype → Animal.prototype" },
      { id: "D", text: "dog has no prototype because it is created by a class" }
    ],
    correctOptionId: "A",
    explanation: "A Dog instance first delegates to `Dog.prototype`, whose prototype is `Animal.prototype`. The chain eventually reaches `Object.prototype` and then null.",
    tags: ["prototype-chain", "extends", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-042",
    quizId: "quiz_javascript_prototypes_classes",
    order: 42,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nclass Animal {}\nclass Dog extends Animal {}\n\nconsole.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`extends Animal` establishes `Dog.prototype` as a descendant of `Animal.prototype`, making `Animal.prototype` its immediate prototype.",
    tags: ["extends", "prototype-chain", "Object.getPrototypeOf"]
  },

  {
    id: "javascript-prototypes-classes-q-043",
    quizId: "quiz_javascript_prototypes_classes",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the difference between a class's instance methods and static methods?",
    options: [
      { id: "A", text: "Instance methods are available through instances, while static methods are available through the class constructor" },
      { id: "B", text: "Static methods are copied to every instance while instance methods belong to the constructor" },
      { id: "C", text: "Both are always accessed through instances" },
      { id: "D", text: "Instance methods cannot use this" }
    ],
    correctOptionId: "A",
    explanation: "Normal class methods live on the prototype and are reached through instances. Static methods are properties of the class constructor itself.",
    tags: ["static", "instance-methods", "classes"]
  },

  {
    id: "javascript-prototypes-classes-q-044",
    quizId: "quiz_javascript_prototypes_classes",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "What does this evaluate to?\n\nclass User {\n  static role = \"admin\";\n}\n\nconst user = new User();\nconsole.log(user.role);",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "admin" },
      { id: "C", text: "User" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "The field is static, so it belongs to the `User` class itself rather than to instances. It can be accessed as `User.role`.",
    tags: ["static", "class-fields", "instances"]
  },

  {
    id: "javascript-prototypes-classes-q-045",
    quizId: "quiz_javascript_prototypes_classes",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What are private class fields written with # intended to provide?",
    options: [
      { id: "A", text: "Class-level fields that cannot be directly accessed outside the class body" },
      { id: "B", text: "Public fields that are automatically inherited by every object" },
      { id: "C", text: "Prototype methods that are always static" },
      { id: "D", text: "Variables available globally" }
    ],
    correctOptionId: "A",
    explanation: "Private fields such as `#balance` are enforced by the language and can only be accessed from code belonging to the class that declares them.",
    tags: ["private-fields", "classes", "encapsulation"]
  },

  {
    id: "javascript-prototypes-classes-q-046",
    quizId: "quiz_javascript_prototypes_classes",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What happens here?\n\nclass BankAccount {\n  #balance = 100;\n}\n\nconst account = new BankAccount();\nconsole.log(account.#balance);",
    options: [
      { id: "A", text: "It is invalid because a private field cannot be accessed from outside the class" },
      { id: "B", text: "100" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "The `#balance` field is private. Direct access from outside the class is not allowed.",
    tags: ["private-fields", "encapsulation", "classes"]
  },

  {
    id: "javascript-prototypes-classes-q-047",
    quizId: "quiz_javascript_prototypes_classes",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Which statement correctly explains why class syntax does not eliminate prototypes?",
    options: [
      { id: "A", text: "Class instances still delegate method lookup through prototype objects" },
      { id: "B", text: "Classes replace every object with a Java-style object" },
      { id: "C", text: "Classes store all methods directly on each instance" },
      { id: "D", text: "Classes have no relationship with Object.prototype" }
    ],
    correctOptionId: "A",
    explanation: "Class syntax is an abstraction over JavaScript's existing prototype-based object model. Instance methods still live on prototypes and inheritance still uses prototype relationships.",
    tags: ["classes", "prototypes", "inheritance", "ES6"]
  },

  {
    id: "javascript-prototypes-classes-q-048",
    quizId: "quiz_javascript_prototypes_classes",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is logged?\n\nfunction User() {}\nUser.prototype.sayHi = function () {\n  return \"hello\";\n};\n\nconst user = new User();\nconsole.log(user.hasOwnProperty(\"sayHi\"));",
    options: [
      { id: "A", text: "false" },
      { id: "B", text: "true" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`sayHi` is defined on `User.prototype`, not directly on `user`. Therefore it is inherited rather than an own property.",
    tags: ["prototype-methods", "hasOwnProperty", "inheritance"]
  },

  {
    id: "javascript-prototypes-classes-q-049",
    quizId: "quiz_javascript_prototypes_classes",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A developer writes:\n\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n\n  greet() {\n    return `Hi ${this.name}`;\n  }\n}\n\nconst a = new User(\"A\");\nconst b = new User(\"B\");\n\nconsole.log(a.greet === b.greet);",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`greet` is a normal class method stored on `User.prototype`, so both instances resolve the same function through the prototype chain. The `this` value differs when each instance calls it.",
    tags: ["classes", "prototype-methods", "this", "memory"]
  },

  {
    id: "javascript-prototypes-classes-q-050",
    quizId: "quiz_javascript_prototypes_classes",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "A developer needs a reusable User model with shared methods, subclassing for AdminUser, and a class-level method for validating usernames. Which design best matches JavaScript's class/prototype model?",
    options: [
      {
        id: "A",
        text: "Use instance fields for per-user state, normal class methods for shared behavior, extends/super for inheritance, and static methods for class-level utilities"
      },
      {
        id: "B",
        text: "Copy every method into each instance and use static methods for instance state"
      },
      {
        id: "C",
        text: "Store all user methods directly on Object.prototype"
      },
      {
        id: "D",
        text: "Avoid prototypes entirely by creating a new function for every instance method"
      }
    ],
    correctOptionId: "A",
    explanation: "This design aligns with JavaScript's object model: instance state belongs to each object, normal methods are shared through the prototype, `extends` and `super` establish inheritance, and static methods belong to the class itself.",
    tags: ["classes", "prototypes", "inheritance", "static", "architecture"]
  }
];

export default javascriptPrototypesClassesQuestions;