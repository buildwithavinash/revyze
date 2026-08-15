const javascriptObjectsQuestions = [
  {
    id: "javascript-objects-q-001",
    quizId: "quiz_javascript_objects",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly creates a JavaScript object?",
    options: [
      { id: "A", text: "const user = { name: \"Avi\" };" },
      { id: "B", text: "const user = [name: \"Avi\"];" },
      { id: "C", text: "const user = (name: \"Avi\");" },
      { id: "D", text: "const user = <name=\"Avi\">;" }
    ],
    correctOptionId: "A",
    explanation: "Object literals are created using curly braces with key-value pairs.",
    tags: ["objects", "object-literals", "creation"]
  },

  {
    id: "javascript-objects-q-002",
    quizId: "quiz_javascript_objects",
    order: 2,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  age: 23\n};\n\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "name" },
      { id: "C", text: "23" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Dot notation accesses the `name` property of the `user` object.",
    tags: ["objects", "property-access", "dot-notation"]
  },

  {
    id: "javascript-objects-q-003",
    quizId: "quiz_javascript_objects",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax accesses an object property using a variable as the property name?",
    options: [
      { id: "A", text: "user[key]" },
      { id: "B", text: "user.key()" },
      { id: "C", text: "user->key" },
      { id: "D", text: "user.(key)" }
    ],
    correctOptionId: "A",
    explanation: "Bracket notation evaluates the expression inside the brackets, making it useful for dynamic property access.",
    tags: ["objects", "bracket-notation", "property-access"]
  },

  {
    id: "javascript-objects-q-004",
    quizId: "quiz_javascript_objects",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconst key = \"age\";\n\nconsole.log(user[key]);",
    options: [
      { id: "A", text: "23" },
      { id: "B", text: "\"age\"" },
      { id: "C", text: "undefined" },
      { id: "D", text: "user.age" }
    ],
    correctOptionId: "A",
    explanation: "`key` contains the string `\"age\"`, so `user[key]` accesses `user.age`.",
    tags: ["objects", "bracket-notation", "dynamic-properties"]
  },

  {
    id: "javascript-objects-q-005",
    quizId: "quiz_javascript_objects",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\" };\nuser.age = 23;\n\nconsole.log(user.age);",
    options: [
      { id: "A", text: "23" },
      { id: "B", text: "undefined" },
      { id: "C", text: "age" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "Assigning to a new property adds that property to the object.",
    tags: ["objects", "properties", "mutation"]
  },

  {
    id: "javascript-objects-q-006",
    quizId: "quiz_javascript_objects",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "How can you update an existing object's property?",
    options: [
      { id: "A", text: "user.age = 24;" },
      { id: "B", text: "user.update(age, 24);" },
      { id: "C", text: "user.age := 24;" },
      { id: "D", text: "update user.age with 24;" }
    ],
    correctOptionId: "A",
    explanation: "A property can be reassigned using dot or bracket notation.",
    tags: ["objects", "properties", "mutation"]
  },

  {
    id: "javascript-objects-q-007",
    quizId: "quiz_javascript_objects",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nuser.age = 24;\n\nconsole.log(user.age);",
    options: [
      { id: "A", text: "24" },
      { id: "B", text: "23" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "The assignment changes the `age` property's value from 23 to 24.",
    tags: ["objects", "properties", "mutation"]
  },

  {
    id: "javascript-objects-q-008",
    quizId: "quiz_javascript_objects",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which operator can be used to check whether an object contains a property, including inherited properties?",
    options: [
      { id: "A", text: "in" },
      { id: "B", text: "contains" },
      { id: "C", text: "hasProperty" },
      { id: "D", text: "exists" }
    ],
    correctOptionId: "A",
    explanation: "The `in` operator checks whether a property key exists anywhere in the object's property chain.",
    tags: ["objects", "in", "properties"]
  },

  {
    id: "javascript-objects-q-009",
    quizId: "quiz_javascript_objects",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconsole.log(\"age\" in user);",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "\"age\"" },
      { id: "D", text: "23" }
    ],
    correctOptionId: "A",
    explanation: "`age` is a property of the object, so the `in` operator returns true.",
    tags: ["objects", "in", "properties"]
  },

  {
    id: "javascript-objects-q-010",
    quizId: "quiz_javascript_objects",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `delete user.age` do?",
    options: [
      { id: "A", text: "Removes the age property from user." },
      { id: "B", text: "Sets age to 0." },
      { id: "C", text: "Sets age to null." },
      { id: "D", text: "Deletes the entire user object." }
    ],
    correctOptionId: "A",
    explanation: "The `delete` operator removes an object's own configurable property.",
    tags: ["objects", "delete", "properties"]
  },

  {
    id: "javascript-objects-q-011",
    quizId: "quiz_javascript_objects",
    order: 11,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\ndelete user.age;\n\nconsole.log(user);",
    options: [
      { id: "A", text: "{ name: \"Avi\" }" },
      { id: "B", text: "{ name: \"Avi\", age: 23 }" },
      { id: "C", text: "{ age: undefined }" },
      { id: "D", text: "{}" }
    ],
    correctOptionId: "A",
    explanation: "The `age` property is removed, leaving only the `name` property.",
    tags: ["objects", "delete"]
  },

  {
    id: "javascript-objects-q-012",
    quizId: "quiz_javascript_objects",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when you access a property that does not exist on an object?",
    options: [
      { id: "A", text: "The result is undefined." },
      { id: "B", text: "JavaScript throws an error immediately." },
      { id: "C", text: "The result is null." },
      { id: "D", text: "The result is false." }
    ],
    correctOptionId: "A",
    explanation: "Accessing a missing property normally returns `undefined`.",
    tags: ["objects", "undefined", "property-access"]
  },

  {
    id: "javascript-objects-q-013",
    quizId: "quiz_javascript_objects",
    order: 13,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\" };\nconsole.log(user.email);",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "null" },
      { id: "C", text: "false" },
      { id: "D", text: "Error" }
    ],
    correctOptionId: "A",
    explanation: "`email` does not exist on the object, so accessing it returns `undefined`.",
    tags: ["objects", "undefined"]
  },

  {
    id: "javascript-objects-q-014",
    quizId: "quiz_javascript_objects",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly creates a method inside an object?",
    options: [
      { id: "A", text: "greet() { return \"Hello\"; }" },
      { id: "B", text: "method greet => \"Hello\";" },
      { id: "C", text: "function: greet() { }" },
      { id: "D", text: "greet -> function() { }" }
    ],
    correctOptionId: "A",
    explanation: "Modern object method shorthand allows `greet() { ... }` directly inside an object literal.",
    tags: ["objects", "methods", "syntax"]
  },

  {
    id: "javascript-objects-q-015",
    quizId: "quiz_javascript_objects",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  greet() {\n    return `Hello ${this.name}`;\n  }\n};\n\nconsole.log(user.greet());",
    options: [
      { id: "A", text: "Hello Avi" },
      { id: "B", text: "Hello undefined" },
      { id: "C", text: "Avi" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "When called as `user.greet()`, `this` refers to the `user` object, so `this.name` is `Avi`.",
    tags: ["objects", "methods", "this"]
  },

  {
    id: "javascript-objects-q-016",
    quizId: "quiz_javascript_objects",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is object destructuring?",
    options: [
      { id: "A", text: "Extracting properties from an object into variables." },
      { id: "B", text: "Deleting all properties from an object." },
      { id: "C", text: "Converting an object into a class." },
      { id: "D", text: "Sorting an object's properties." }
    ],
    correctOptionId: "A",
    explanation: "Object destructuring provides a concise way to extract property values into variables.",
    tags: ["objects", "destructuring"]
  },

  {
    id: "javascript-objects-q-017",
    quizId: "quiz_javascript_objects",
    order: 17,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconst { name } = user;\n\nconsole.log(name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "name" },
      { id: "C", text: "undefined" },
      { id: "D", text: "{ name: \"Avi\" }" }
    ],
    correctOptionId: "A",
    explanation: "The destructuring declaration extracts the `name` property into a variable called `name`.",
    tags: ["objects", "destructuring"]
  },

  {
    id: "javascript-objects-q-018",
    quizId: "quiz_javascript_objects",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconst { name: userName } = user;\n\nconsole.log(userName);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "userName" },
      { id: "C", text: "undefined" },
      { id: "D", text: "name" }
    ],
    correctOptionId: "A",
    explanation: "The syntax `name: userName` extracts the `name` property and stores its value in the variable `userName`.",
    tags: ["objects", "destructuring", "renaming"]
  },

  {
    id: "javascript-objects-q-019",
    quizId: "quiz_javascript_objects",
    order: 19,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\" };\nconst { age = 18 } = user;\n\nconsole.log(age);",
    options: [
      { id: "A", text: "18" },
      { id: "B", text: "undefined" },
      { id: "C", text: "null" },
      { id: "D", text: "Error" }
    ],
    correctOptionId: "A",
    explanation: "The default value is used because `age` is missing from the object.",
    tags: ["objects", "destructuring", "default-values"]
  },

  {
    id: "javascript-objects-q-020",
    quizId: "quiz_javascript_objects",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement correctly uses object shorthand property syntax?",
    options: [
      { id: "A", text: "const name = \"Avi\"; const user = { name };" },
      { id: "B", text: "const name = \"Avi\"; const user = { name: name() };" },
      { id: "C", text: "const name = \"Avi\"; const user = [name];" },
      { id: "D", text: "const name = \"Avi\"; const user = { : name };" }
    ],
    correctOptionId: "A",
    explanation: "When the variable name and property name are the same, `{ name }` is shorthand for `{ name: name }`.",
    tags: ["objects", "shorthand", "es6"]
  },

  {
    id: "javascript-objects-q-021",
    quizId: "quiz_javascript_objects",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the object spread syntax `{ ...user }` generally do?",
    options: [
      { id: "A", text: "Copies the object's enumerable own properties into a new object." },
      { id: "B", text: "Creates a deep clone of every nested value." },
      { id: "C", text: "Deletes the original object." },
      { id: "D", text: "Converts the object into an array." }
    ],
    correctOptionId: "A",
    explanation: "Object spread copies enumerable own properties into the new object. It performs a shallow copy, not a deep clone.",
    tags: ["objects", "spread", "shallow-copy"]
  },

  {
    id: "javascript-objects-q-022",
    quizId: "quiz_javascript_objects",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconst updatedUser = { ...user, age: 24 };\n\nconsole.log(updatedUser.age);",
    options: [
      { id: "A", text: "24" },
      { id: "B", text: "23" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Error" }
    ],
    correctOptionId: "A",
    explanation: "The later `age: 24` property overwrites the copied `age: 23` property.",
    tags: ["objects", "spread", "overwriting"]
  },

  {
    id: "javascript-objects-q-023",
    quizId: "quiz_javascript_objects",
    order: 23,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst defaults = { theme: \"light\", language: \"en\" };\nconst settings = { ...defaults, theme: \"dark\" };\n\nconsole.log(settings);",
    options: [
      { id: "A", text: "{ theme: \"dark\", language: \"en\" }" },
      { id: "B", text: "{ theme: \"light\", language: \"en\" }" },
      { id: "C", text: "{ theme: \"dark\" }" },
      { id: "D", text: "Error" }
    ],
    correctOptionId: "A",
    explanation: "The spread copies both properties, then the later `theme: \"dark\"` overrides the earlier theme value.",
    tags: ["objects", "spread", "configuration"]
  },

  {
    id: "javascript-objects-q-024",
    quizId: "quiz_javascript_objects",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method returns an array containing an object's own enumerable property names?",
    options: [
      { id: "A", text: "Object.keys()" },
      { id: "B", text: "Object.names()" },
      { id: "C", text: "Object.properties()" },
      { id: "D", text: "Object.entries()" }
    ],
    correctOptionId: "A",
    explanation: "`Object.keys()` returns an array of the object's own enumerable property keys.",
    tags: ["objects", "Object.keys"]
  },

  {
    id: "javascript-objects-q-025",
    quizId: "quiz_javascript_objects",
    order: 25,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  age: 23,\n  city: \"Asansol\"\n};\n\nconsole.log(Object.keys(user));",
    options: [
      { id: "A", text: "[\"name\", \"age\", \"city\"]" },
      { id: "B", text: "[\"Avi\", 23, \"Asansol\"]" },
      { id: "C", text: "3" },
      { id: "D", text: "user" }
    ],
    correctOptionId: "A",
    explanation: "`Object.keys()` returns the object's property names.",
    tags: ["objects", "Object.keys"]
  },

  {
    id: "javascript-objects-q-026",
    quizId: "quiz_javascript_objects",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method returns an array containing an object's own enumerable property values?",
    options: [
      { id: "A", text: "Object.values()" },
      { id: "B", text: "Object.data()" },
      { id: "C", text: "Object.items()" },
      { id: "D", text: "Object.getValues()" }
    ],
    correctOptionId: "A",
    explanation: "`Object.values()` returns the values corresponding to the object's own enumerable properties.",
    tags: ["objects", "Object.values"]
  },

  {
    id: "javascript-objects-q-027",
    quizId: "quiz_javascript_objects",
    order: 27,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconsole.log(Object.values(user));",
    options: [
      { id: "A", text: "[\"Avi\", 23]" },
      { id: "B", text: "[\"name\", \"age\"]" },
      { id: "C", text: "2" },
      { id: "D", text: "{ name: \"Avi\", age: 23 }" }
    ],
    correctOptionId: "A",
    explanation: "`Object.values()` returns the values of the object's enumerable own properties.",
    tags: ["objects", "Object.values"]
  },

  {
    id: "javascript-objects-q-028",
    quizId: "quiz_javascript_objects",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Object.entries()` return?",
    options: [
      { id: "A", text: "An array of [key, value] pairs." },
      { id: "B", text: "An array containing only keys." },
      { id: "C", text: "An array containing only values." },
      { id: "D", text: "A Map object." }
    ],
    correctOptionId: "A",
    explanation: "`Object.entries()` returns an array where each element is a `[key, value]` pair.",
    tags: ["objects", "Object.entries"]
  },

  {
    id: "javascript-objects-q-029",
    quizId: "quiz_javascript_objects",
    order: 29,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconsole.log(Object.entries(user));",
    options: [
      { id: "A", text: "[[\"name\", \"Avi\"], [\"age\", 23]]" },
      { id: "B", text: "[\"name\", \"age\"]" },
      { id: "C", text: "[\"Avi\", 23]" },
      { id: "D", text: "2" }
    ],
    correctOptionId: "A",
    explanation: "Each property becomes a two-element array containing its key and value.",
    tags: ["objects", "Object.entries"]
  },

  {
    id: "javascript-objects-q-030",
    quizId: "quiz_javascript_objects",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method can create an object from an array of [key, value] pairs?",
    options: [
      { id: "A", text: "Object.fromEntries()" },
      { id: "B", text: "Object.fromArray()" },
      { id: "C", text: "Object.createEntries()" },
      { id: "D", text: "Object.toObject()" }
    ],
    correctOptionId: "A",
    explanation: "`Object.fromEntries()` transforms an iterable of key-value pairs into an object.",
    tags: ["objects", "Object.fromEntries"]
  },

  {
    id: "javascript-objects-q-031",
    quizId: "quiz_javascript_objects",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst entries = [\n  [\"name\", \"Avi\"],\n  [\"age\", 23]\n];\n\nconst user = Object.fromEntries(entries);\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "name" },
      { id: "C", text: "undefined" },
      { id: "D", text: "23" }
    ],
    correctOptionId: "A",
    explanation: "`Object.fromEntries()` converts the key-value pairs into an object with `name` and `age` properties.",
    tags: ["objects", "Object.fromEntries"]
  },

  {
    id: "javascript-objects-q-032",
    quizId: "quiz_javascript_objects",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the key difference between `Object.keys(obj)` and `Object.entries(obj)`?",
    options: [
      { id: "A", text: "keys returns keys, while entries returns [key, value] pairs." },
      { id: "B", text: "keys returns values, while entries returns keys." },
      { id: "C", text: "keys mutates the object, while entries deletes it." },
      { id: "D", text: "There is no difference." }
    ],
    correctOptionId: "A",
    explanation: "`Object.keys()` gives property names, while `Object.entries()` gives key-value pairs.",
    tags: ["objects", "Object.keys", "Object.entries"]
  },

  {
    id: "javascript-objects-q-033",
    quizId: "quiz_javascript_objects",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `Object.assign()` do?",
    options: [
      { id: "A", text: "Copies enumerable own properties from source objects into a target object." },
      { id: "B", text: "Creates a deep clone automatically." },
      { id: "C", text: "Converts an object into JSON." },
      { id: "D", text: "Freezes an object." }
    ],
    correctOptionId: "A",
    explanation: "`Object.assign()` copies properties from one or more source objects into a target object and returns the target.",
    tags: ["objects", "Object.assign", "copying"]
  },

  {
    id: "javascript-objects-q-034",
    quizId: "quiz_javascript_objects",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst target = { a: 1 };\nconst source = { b: 2 };\n\nObject.assign(target, source);\nconsole.log(target);",
    options: [
      { id: "A", text: "{ a: 1, b: 2 }" },
      { id: "B", text: "{ b: 2 }" },
      { id: "C", text: "{ a: 1 }" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`Object.assign()` copies `b` from `source` into `target`.",
    tags: ["objects", "Object.assign"]
  },

  {
    id: "javascript-objects-q-035",
    quizId: "quiz_javascript_objects",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main limitation of `{ ...obj }` when copying an object?",
    options: [
      { id: "A", text: "It performs a shallow copy." },
      { id: "B", text: "It cannot copy strings." },
      { id: "C", text: "It only works with arrays." },
      { id: "D", text: "It always mutates the source." }
    ],
    correctOptionId: "A",
    explanation: "Nested objects and arrays remain shared references because object spread performs a shallow copy.",
    tags: ["objects", "spread", "shallow-copy", "references"]
  },

  {
    id: "javascript-objects-q-036",
    quizId: "quiz_javascript_objects",
    order: 36,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  address: {\n    city: \"Asansol\"\n  }\n};\n\nconst copy = { ...user };\ncopy.address.city = \"Kolkata\";\n\nconsole.log(user.address.city);",
    options: [
      { id: "A", text: "Kolkata" },
      { id: "B", text: "Asansol" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Error" }
    ],
    correctOptionId: "A",
    explanation: "The spread copy is shallow. `copy.address` and `user.address` refer to the same nested object.",
    tags: ["objects", "spread", "references", "shallow-copy"]
  },

  {
    id: "javascript-objects-q-037",
    quizId: "quiz_javascript_objects",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about object equality with `===` is correct?",
    options: [
      { id: "A", text: "Two separately created objects with identical properties are not equal by reference." },
      { id: "B", text: "Objects are compared by their property contents." },
      { id: "C", text: "Objects are always equal if their keys match." },
      { id: "D", text: "Object equality ignores references." }
    ],
    correctOptionId: "A",
    explanation: "Objects are reference values. Two different object instances are not strictly equal even when they contain identical data.",
    tags: ["objects", "equality", "references"]
  },

  {
    id: "javascript-objects-q-038",
    quizId: "quiz_javascript_objects",
    order: 38,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst a = { name: \"Avi\" };\nconst b = { name: \"Avi\" };\n\nconsole.log(a === b);",
    options: [
      { id: "A", text: "false" },
      { id: "B", text: "true" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Error" }
    ],
    correctOptionId: "A",
    explanation: "Although the objects contain the same data, they are two separate object references.",
    tags: ["objects", "equality", "references"]
  },

  {
    id: "javascript-objects-q-039",
    quizId: "quiz_javascript_objects",
    order: 39,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst a = { name: \"Avi\" };\nconst b = a;\n\nb.name = \"Sam\";\n\nconsole.log(a.name);",
    options: [
      { id: "A", text: "Sam" },
      { id: "B", text: "Avi" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Error" }
    ],
    correctOptionId: "A",
    explanation: "`a` and `b` reference the same object. Changing the object through `b` is therefore visible through `a`.",
    tags: ["objects", "references", "mutation"]
  },

  {
    id: "javascript-objects-q-040",
    quizId: "quiz_javascript_objects",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax correctly destructures a nested object?",
    options: [
      { id: "A", text: "const { address: { city } } = user;" },
      { id: "B", text: "const { address.city } = user;" },
      { id: "C", text: "const [address.city] = user;" },
      { id: "D", text: "const city = { address } = user;" }
    ],
    correctOptionId: "A",
    explanation: "Nested destructuring mirrors the structure of the object and allows direct extraction of nested properties.",
    tags: ["objects", "destructuring", "nested-objects"]
  },

  {
    id: "javascript-objects-q-041",
    quizId: "quiz_javascript_objects",
    order: 41,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  address: {\n    city: \"Asansol\"\n  }\n};\n\nconst { address: { city } } = user;\nconsole.log(city);",
    options: [
      { id: "A", text: "Asansol" },
      { id: "B", text: "address" },
      { id: "C", text: "undefined" },
      { id: "D", text: "{ city: \"Asansol\" }" }
    ],
    correctOptionId: "A",
    explanation: "The nested destructuring expression extracts `city` from the nested `address` object.",
    tags: ["objects", "destructuring", "nested-objects"]
  },

  {
    id: "javascript-objects-q-042",
    quizId: "quiz_javascript_objects",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a computed property name?",
    options: [
      { id: "A", text: "Using an expression inside square brackets to determine an object's property key." },
      { id: "B", text: "A property that is automatically calculated by JavaScript." },
      { id: "C", text: "A property that can only contain numbers." },
      { id: "D", text: "A property created by Object.keys()." }
    ],
    correctOptionId: "A",
    explanation: "Computed property syntax such as `{ [key]: value }` evaluates `key` to determine the actual property name.",
    tags: ["objects", "computed-properties", "es6"]
  },

  {
    id: "javascript-objects-q-043",
    quizId: "quiz_javascript_objects",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst key = \"username\";\nconst value = \"Avi\";\n\nconst user = {\n  [key]: value\n};\n\nconsole.log(user.username);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "username" },
      { id: "C", text: "undefined" },
      { id: "D", text: "{ key: value }" }
    ],
    correctOptionId: "A",
    explanation: "The computed property `[key]` evaluates to `username`, creating a `username` property with the value `Avi`.",
    tags: ["objects", "computed-properties"]
  },

  {
    id: "javascript-objects-q-044",
    quizId: "quiz_javascript_objects",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement correctly describes `Object.freeze()`?",
    options: [
      { id: "A", text: "It prevents changes to an object's own properties at the top level." },
      { id: "B", text: "It deeply freezes every nested object automatically." },
      { id: "C", text: "It converts the object into a string." },
      { id: "D", text: "It deletes all writable properties." }
    ],
    correctOptionId: "A",
    explanation: "`Object.freeze()` prevents adding, deleting, or changing top-level own properties. It is shallow; nested objects are not automatically frozen.",
    tags: ["objects", "Object.freeze", "immutability"]
  },

  {
    id: "javascript-objects-q-045",
    quizId: "quiz_javascript_objects",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst user = { name: \"Avi\" };\nObject.freeze(user);\n\nuser.name = \"Sam\";\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "Sam" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "A frozen object's properties cannot be changed. In non-strict code, the attempted assignment is ignored.",
    tags: ["objects", "Object.freeze", "immutability"]
  },

  {
    id: "javascript-objects-q-046",
    quizId: "quiz_javascript_objects",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  age: 23\n};\n\nconst { name, ...rest } = user;\nconsole.log(rest);",
    options: [
      { id: "A", text: "{ age: 23 }" },
      { id: "B", text: "{ name: \"Avi\" }" },
      { id: "C", text: "[23]" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Object rest collects the remaining properties after `name` has been extracted.",
    tags: ["objects", "destructuring", "rest"]
  },

  {
    id: "javascript-objects-q-047",
    quizId: "quiz_javascript_objects",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  age: 23,\n  role: \"developer\"\n};\n\nconst updated = {\n  ...user,\n  role: \"frontend developer\",\n  active: true\n};\n\nconsole.log(updated.role);",
    options: [
      { id: "A", text: "frontend developer" },
      { id: "B", text: "developer" },
      { id: "C", text: "undefined" },
      { id: "D", text: "true" }
    ],
    correctOptionId: "A",
    explanation: "The spread copies the existing properties, then the later `role` property overwrites the original value.",
    tags: ["objects", "spread", "immutable-updates"]
  },

  {
    id: "javascript-objects-q-048",
    quizId: "quiz_javascript_objects",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst scores = {\n  math: 90,\n  science: 85,\n  english: 95\n};\n\nconst total = Object.values(scores)\n  .reduce((sum, score) => sum + score, 0);\n\nconsole.log(total);",
    options: [
      { id: "A", text: "270" },
      { id: "B", text: "90" },
      { id: "C", text: "95" },
      { id: "D", text: "[90, 85, 95]" }
    ],
    correctOptionId: "A",
    explanation: "`Object.values()` produces `[90, 85, 95]`, and `reduce()` sums those values to 270.",
    tags: ["objects", "Object.values", "reduce"]
  },

  {
    id: "javascript-objects-q-049",
    quizId: "quiz_javascript_objects",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  age: 23\n};\n\nconst result = Object.entries(user)\n  .map(([key, value]) => `${key}: ${value}`);\n\nconsole.log(result);",
    options: [
      { id: "A", text: "[\"name: Avi\", \"age: 23\"]" },
      { id: "B", text: "[\"name\", \"age\"]" },
      { id: "C", text: "[\"Avi\", 23]" },
      { id: "D", text: "{ name: \"Avi\", age: 23 }" }
    ],
    correctOptionId: "A",
    explanation: "`Object.entries()` produces key-value pairs. Destructuring extracts each pair, and `map()` converts each pair into a formatted string.",
    tags: ["objects", "Object.entries", "map", "destructuring"]
  },

  {
    id: "javascript-objects-q-050",
    quizId: "quiz_javascript_objects",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is generally best when updating an object in state while preserving the original object?",
    options: [
      { id: "A", text: "Create a new object with spread syntax and override the property that changed." },
      { id: "B", text: "Always mutate the existing object directly." },
      { id: "C", text: "Delete the object and recreate every object in the application." },
      { id: "D", text: "Convert the object to JSON before every update." }
    ],
    correctOptionId: "A",
    explanation: "Using `{ ...object, changedProperty: newValue }` creates a new object reference while preserving unchanged properties. This pattern is especially useful for predictable state updates in modern JavaScript and React applications.",
    tags: ["objects", "spread", "immutability", "state-management", "best-practices"]
  }
];

export default javascriptObjectsQuestions;