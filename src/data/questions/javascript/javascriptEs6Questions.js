const javascriptEs6Questions = [
  {
    id: "javascript-es6-q-001",
    quizId: "quiz_javascript_es6",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which feature allows you to extract values from an array directly into variables?",
    options: [
      { id: "A", text: "Array destructuring" },
      { id: "B", text: "Array casting" },
      { id: "C", text: "Array binding" },
      { id: "D", text: "Array projection" }
    ],
    correctOptionId: "A",
    explanation: "Array destructuring allows values from an array to be assigned directly to variables based on their positions.",
    tags: ["es6", "destructuring", "arrays"]
  },

  {
    id: "javascript-es6-q-002",
    quizId: "quiz_javascript_es6",
    order: 2,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst colors = [\"red\", \"green\", \"blue\"];\nconst [first, second, third] = colors;\nconsole.log(second);",
    options: [
      { id: "A", text: "green" },
      { id: "B", text: "red" },
      { id: "C", text: "blue" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Array destructuring assigns values according to position. `second` receives the value at index 1, which is `green`.",
    tags: ["es6", "destructuring", "arrays"]
  },

  {
    id: "javascript-es6-q-003",
    quizId: "quiz_javascript_es6",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [10, 20, 30];\nconst [first, , third] = numbers;\nconsole.log(third);",
    options: [
      { id: "A", text: "30" },
      { id: "B", text: "20" },
      { id: "C", text: "10" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The empty slot skips the second element. `third` receives the value at index 2, which is 30.",
    tags: ["es6", "array-destructuring", "skipping-values"]
  },

  {
    id: "javascript-es6-q-004",
    quizId: "quiz_javascript_es6",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [10];\nconst [first, second = 20] = numbers;\nconsole.log(second);",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "undefined" },
      { id: "C", text: "10" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "A destructuring default value is used when the corresponding array element is `undefined`.",
    tags: ["es6", "destructuring", "default-values"]
  },

  {
    id: "javascript-es6-q-005",
    quizId: "quiz_javascript_es6",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconst { name, age } = user;\nconsole.log(name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "name" },
      { id: "C", text: "23" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Object destructuring extracts properties by their property names. The `name` variable receives `user.name`.",
    tags: ["es6", "object-destructuring", "objects"]
  },

  {
    id: "javascript-es6-q-006",
    quizId: "quiz_javascript_es6",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconst { name: username } = user;\nconsole.log(username);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "username" },
      { id: "C", text: "undefined" },
      { id: "D", text: "name" }
    ],
    correctOptionId: "A",
    explanation: "Object destructuring supports renaming. `name: username` means read the `name` property and store it in a variable called `username`.",
    tags: ["es6", "object-destructuring", "renaming"]
  },

  {
    id: "javascript-es6-q-007",
    quizId: "quiz_javascript_es6",
    order: 7,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\" };\nconst { name, age = 23 } = user;\nconsole.log(age);",
    options: [
      { id: "A", text: "23" },
      { id: "B", text: "undefined" },
      { id: "C", text: "null" },
      { id: "D", text: "0" }
    ],
    correctOptionId: "A",
    explanation: "The `age` property is missing, so its destructuring default value of 23 is used.",
    tags: ["es6", "object-destructuring", "default-values"]
  },

  {
    id: "javascript-es6-q-008",
    quizId: "quiz_javascript_es6",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between array and object destructuring?",
    options: [
      { id: "A", text: "Array destructuring is position-based, while object destructuring is property-name-based." },
      { id: "B", text: "Array destructuring only works with strings." },
      { id: "C", text: "Object destructuring always requires numeric indexes." },
      { id: "D", text: "There is no difference." }
    ],
    correctOptionId: "A",
    explanation: "Array destructuring maps values based on position, whereas object destructuring normally maps values based on property names.",
    tags: ["es6", "destructuring", "arrays", "objects"]
  },

  {
    id: "javascript-es6-q-009",
    quizId: "quiz_javascript_es6",
    order: 9,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  address: {\n    city: \"Asansol\"\n  }\n};\n\nconst {\n  address: { city }\n} = user;\n\nconsole.log(city);",
    options: [
      { id: "A", text: "Asansol" },
      { id: "B", text: "address" },
      { id: "C", text: "undefined" },
      { id: "D", text: "{ city: \"Asansol\" }" }
    ],
    correctOptionId: "A",
    explanation: "Nested destructuring can extract properties from nested objects. The `city` variable receives `user.address.city`.",
    tags: ["es6", "nested-destructuring", "objects"]
  },

  {
    id: "javascript-es6-q-010",
    quizId: "quiz_javascript_es6",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the rest element in array destructuring do?",
    options: [
      { id: "A", text: "Collects remaining elements into a new array." },
      { id: "B", text: "Deletes remaining elements." },
      { id: "C", text: "Copies only the first element." },
      { id: "D", text: "Converts the array into an object." }
    ],
    correctOptionId: "A",
    explanation: "The rest element, written with `...`, collects all remaining array elements into a new array.",
    tags: ["es6", "rest", "destructuring"]
  },

  {
    id: "javascript-es6-q-011",
    quizId: "quiz_javascript_es6",
    order: 11,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [1, 2, 3, 4, 5];\nconst [first, second, ...rest] = numbers;\nconsole.log(rest);",
    options: [
      { id: "A", text: "[3, 4, 5]" },
      { id: "B", text: "[1, 2]" },
      { id: "C", text: "3" },
      { id: "D", text: "[1, 2, 3, 4, 5]" }
    ],
    correctOptionId: "A",
    explanation: "The first two elements are assigned to `first` and `second`; the rest are collected into the `rest` array.",
    tags: ["es6", "rest", "array-destructuring"]
  },

  {
    id: "javascript-es6-q-012",
    quizId: "quiz_javascript_es6",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Where must a rest element appear in an array destructuring pattern?",
    options: [
      { id: "A", text: "At the end" },
      { id: "B", text: "At the beginning" },
      { id: "C", text: "Anywhere" },
      { id: "D", text: "Only in the middle" }
    ],
    correctOptionId: "A",
    explanation: "A rest element must be the final element in an array or object destructuring pattern because it collects all remaining values.",
    tags: ["es6", "rest", "destructuring", "syntax"]
  },

  {
    id: "javascript-es6-q-013",
    quizId: "quiz_javascript_es6",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the spread syntax (`...`) do when used with an array literal?",
    options: [
      { id: "A", text: "Expands the array's elements into the surrounding array." },
      { id: "B", text: "Nests the entire array as one element." },
      { id: "C", text: "Deletes duplicate values." },
      { id: "D", text: "Sorts the array." }
    ],
    correctOptionId: "A",
    explanation: "Spread syntax expands an iterable's elements into the surrounding expression.",
    tags: ["es6", "spread", "arrays"]
  },

  {
    id: "javascript-es6-q-014",
    quizId: "quiz_javascript_es6",
    order: 14,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst a = [1, 2];\nconst b = [3, 4];\nconst result = [...a, ...b];\n\nconsole.log(result);",
    options: [
      { id: "A", text: "[1, 2, 3, 4]" },
      { id: "B", text: "[[1, 2], [3, 4]]" },
      { id: "C", text: "[1, 2, [3, 4]]" },
      { id: "D", text: "[3, 4, 1, 2]" }
    ],
    correctOptionId: "A",
    explanation: "Both arrays are expanded into the new array, producing `[1, 2, 3, 4]`.",
    tags: ["es6", "spread", "arrays"]
  },

  {
    id: "javascript-es6-q-015",
    quizId: "quiz_javascript_es6",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst original = [1, 2, 3];\nconst copy = [...original];\n\nconsole.log(copy === original);",
    options: [
      { id: "A", text: "false" },
      { id: "B", text: "true" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Array spread creates a new array. The contents are copied, but the new array has a different reference.",
    tags: ["es6", "spread", "arrays", "references"]
  },

  {
    id: "javascript-es6-q-016",
    quizId: "quiz_javascript_es6",
    order: 16,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\nconst updated = { ...user, age: 24 };\n\nconsole.log(updated.age);",
    options: [
      { id: "A", text: "24" },
      { id: "B", text: "23" },
      { id: "C", text: "undefined" },
      { id: "D", text: "25" }
    ],
    correctOptionId: "A",
    explanation: "Object spread copies the properties of `user`, and the later `age: 24` property overwrites the earlier copied `age` value.",
    tags: ["es6", "spread", "objects", "property-overwrite"]
  },

  {
    id: "javascript-es6-q-017",
    quizId: "quiz_javascript_es6",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When spreading an object, what happens if multiple objects contain the same property?",
    options: [
      { id: "A", text: "The property from the later object overwrites the earlier one." },
      { id: "B", text: "JavaScript throws an error." },
      { id: "C", text: "The first object's property always wins." },
      { id: "D", text: "Both values are automatically stored in an array." }
    ],
    correctOptionId: "A",
    explanation: "Object properties are processed from left to right. Later properties overwrite earlier properties with the same key.",
    tags: ["es6", "spread", "objects", "overwriting"]
  },

  {
    id: "javascript-es6-q-018",
    quizId: "quiz_javascript_es6",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst defaults = { theme: \"light\", language: \"en\" };\nconst settings = { ...defaults, theme: \"dark\" };\n\nconsole.log(settings.theme);",
    options: [
      { id: "A", text: "dark" },
      { id: "B", text: "light" },
      { id: "C", text: "undefined" },
      { id: "D", text: "lightdark" }
    ],
    correctOptionId: "A",
    explanation: "The spread copies the defaults first. The later `theme: \"dark\"` overrides the copied `theme` property.",
    tags: ["es6", "spread", "objects", "configuration"]
  },

  {
    id: "javascript-es6-q-019",
    quizId: "quiz_javascript_es6",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary difference between rest parameters and spread syntax?",
    options: [
      { id: "A", text: "Rest collects multiple values into one structure, while spread expands a structure into individual values." },
      { id: "B", text: "Rest is used only for objects and spread only for arrays." },
      { id: "C", text: "Rest modifies the original array while spread does not." },
      { id: "D", text: "They are completely unrelated syntax features." }
    ],
    correctOptionId: "A",
    explanation: "Rest gathers values, while spread performs the opposite operation by expanding an iterable or object into another expression.",
    tags: ["es6", "rest", "spread"]
  },

  {
    id: "javascript-es6-q-020",
    quizId: "quiz_javascript_es6",
    order: 20,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\n\nconsole.log(sum(1, 2, 3));",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "123" },
      { id: "C", text: "[1, 2, 3]" },
      { id: "D", text: "3" }
    ],
    correctOptionId: "A",
    explanation: "The rest parameter collects the arguments into `[1, 2, 3]`. `reduce()` then adds them to produce 6.",
    tags: ["es6", "rest-parameters", "functions", "reduce"]
  },

  {
    id: "javascript-es6-q-021",
    quizId: "quiz_javascript_es6",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a default parameter?",
    options: [
      { id: "A", text: "A fallback value assigned to a parameter when no value or undefined is passed." },
      { id: "B", text: "A parameter that cannot be changed." },
      { id: "C", text: "A parameter that is automatically an object." },
      { id: "D", text: "A parameter that only accepts strings." }
    ],
    correctOptionId: "A",
    explanation: "Default parameters provide fallback values when the corresponding argument is `undefined` or omitted.",
    tags: ["es6", "default-parameters", "functions"]
  },

  {
    id: "javascript-es6-q-022",
    quizId: "quiz_javascript_es6",
    order: 22,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfunction greet(name = \"Guest\") {\n  return `Hello ${name}`;\n}\n\nconsole.log(greet());",
    options: [
      { id: "A", text: "Hello Guest" },
      { id: "B", text: "Hello undefined" },
      { id: "C", text: "Guest" },
      { id: "D", text: "Hello null" }
    ],
    correctOptionId: "A",
    explanation: "Because no argument is supplied, the default parameter value `Guest` is used.",
    tags: ["es6", "default-parameters", "functions"]
  },

  {
    id: "javascript-es6-q-023",
    quizId: "quiz_javascript_es6",
    order: 23,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction greet(name = \"Guest\") {\n  return name;\n}\n\nconsole.log(greet(undefined));",
    options: [
      { id: "A", text: "Guest" },
      { id: "B", text: "undefined" },
      { id: "C", text: "null" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Passing `undefined` triggers the default parameter value, so `name` becomes `Guest`.",
    tags: ["es6", "default-parameters", "undefined"]
  },

  {
    id: "javascript-es6-q-024",
    quizId: "quiz_javascript_es6",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfunction greet(name = \"Guest\") {\n  return name;\n}\n\nconsole.log(greet(null));",
    options: [
      { id: "A", text: "null" },
      { id: "B", text: "Guest" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Default parameters are used for `undefined`, not for `null`. Therefore `null` is preserved.",
    tags: ["es6", "default-parameters", "null", "undefined"]
  },

  {
    id: "javascript-es6-q-025",
    quizId: "quiz_javascript_es6",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax creates an arrow function that returns the expression `a + b` implicitly?",
    options: [
      { id: "A", text: "const add = (a, b) => a + b;" },
      { id: "B", text: "const add = (a, b) => { a + b };" },
      { id: "C", text: "const add = (a, b) -> a + b;" },
      { id: "D", text: "const add = (a, b) := a + b;" }
    ],
    correctOptionId: "A",
    explanation: "Arrow functions can use an expression body without braces. That expression is returned implicitly.",
    tags: ["es6", "arrow-functions", "implicit-return"]
  },

  {
    id: "javascript-es6-q-026",
    quizId: "quiz_javascript_es6",
    order: 26,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst double = n => n * 2;\nconsole.log(double(5));",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "25" },
      { id: "C", text: "5" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The arrow function receives 5 and implicitly returns `5 * 2`, which is 10.",
    tags: ["es6", "arrow-functions", "implicit-return"]
  },

  {
    id: "javascript-es6-q-027",
    quizId: "quiz_javascript_es6",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst double = n => {\n  n * 2;\n};\n\nconsole.log(double(5));",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "10" },
      { id: "C", text: "5" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "An arrow function with a block body requires an explicit `return`. The expression `n * 2` is evaluated but not returned.",
    tags: ["es6", "arrow-functions", "return"]
  },

  {
    id: "javascript-es6-q-028",
    quizId: "quiz_javascript_es6",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a key behavioral difference between arrow functions and regular functions regarding `this`?",
    options: [
      { id: "A", text: "Arrow functions do not have their own this; they capture it lexically." },
      { id: "B", text: "Arrow functions always bind this to the global object." },
      { id: "C", text: "Arrow functions always bind this to the function itself." },
      { id: "D", text: "Arrow functions cannot access this." }
    ],
    correctOptionId: "A",
    explanation: "Arrow functions do not create their own `this` binding. They use the `this` value from their surrounding lexical scope.",
    tags: ["es6", "arrow-functions", "this", "lexical-this"]
  },

  {
    id: "javascript-es6-q-029",
    quizId: "quiz_javascript_es6",
    order: 29,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  greet() {\n    const message = () => `Hello ${this.name}`;\n    return message();\n  }\n};\n\nconsole.log(user.greet());",
    options: [
      { id: "A", text: "Hello Avi" },
      { id: "B", text: "Hello undefined" },
      { id: "C", text: "Hello this.name" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "The regular `greet()` method gets `this` from the object call. The nested arrow function lexically captures that `this`, so it accesses `user.name`.",
    tags: ["es6", "arrow-functions", "this", "lexical-scope"]
  },

  {
    id: "javascript-es6-q-030",
    quizId: "quiz_javascript_es6",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax creates a multiline string without explicitly using newline escape sequences?",
    options: [
      { id: "A", text: "Template literals using backticks" },
      { id: "B", text: "Single-quoted strings only" },
      { id: "C", text: "Double-quoted strings only" },
      { id: "D", text: "Regular expressions" }
    ],
    correctOptionId: "A",
    explanation: "Template literals can span multiple lines directly because line breaks inside backticks are preserved.",
    tags: ["es6", "template-literals", "multiline"]
  },

  {
    id: "javascript-es6-q-031",
    quizId: "quiz_javascript_es6",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst name = \"Avi\";\nconst age = 23;\nconst result = `${name} is ${age} years old`;\n\nconsole.log(result);",
    options: [
      { id: "A", text: "Avi is 23 years old" },
      { id: "B", text: "${name} is ${age} years old" },
      { id: "C", text: "Avi is age years old" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Expressions inside `${}` are evaluated and interpolated into the template literal.",
    tags: ["es6", "template-literals", "interpolation"]
  },

  {
    id: "javascript-es6-q-032",
    quizId: "quiz_javascript_es6",
    order: 32,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration creates a block-scoped variable that can be reassigned?",
    options: [
      { id: "A", text: "let" },
      { id: "B", text: "const" },
      { id: "C", text: "class" },
      { id: "D", text: "import" }
    ],
    correctOptionId: "A",
    explanation: "`let` creates a block-scoped binding that can later be assigned a different value.",
    tags: ["es6", "let", "block-scope"]
  },

  {
    id: "javascript-es6-q-033",
    quizId: "quiz_javascript_es6",
    order: 33,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration creates a block-scoped binding that cannot be reassigned?",
    options: [
      { id: "A", text: "const" },
      { id: "B", text: "let" },
      { id: "C", text: "var" },
      { id: "D", text: "static" }
    ],
    correctOptionId: "A",
    explanation: "`const` creates a block-scoped binding that cannot be reassigned after initialization.",
    tags: ["es6", "const", "block-scope"]
  },

  {
    id: "javascript-es6-q-034",
    quizId: "quiz_javascript_es6",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\" };\nuser.name = \"Alex\";\n\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Alex" },
      { id: "B", text: "Avi" },
      { id: "C", text: "TypeError" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`const` prevents reassignment of the variable binding, but it does not make the referenced object immutable. Its properties can still be changed.",
    tags: ["es6", "const", "objects", "immutability"]
  },

  {
    id: "javascript-es6-q-035",
    quizId: "quiz_javascript_es6",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when a `let` variable is accessed before its declaration within the same block?",
    options: [
      { id: "A", text: "A ReferenceError occurs because of the temporal dead zone." },
      { id: "B", text: "It returns undefined." },
      { id: "C", text: "It returns null." },
      { id: "D", text: "It automatically creates a global variable." }
    ],
    correctOptionId: "A",
    explanation: "`let` and `const` declarations are hoisted but remain inaccessible in the temporal dead zone until execution reaches their declaration.",
    tags: ["es6", "let", "const", "temporal-dead-zone"]
  },

  {
    id: "javascript-es6-q-036",
    quizId: "quiz_javascript_es6",
    order: 36,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\n\nconsole.log(doubled);",
    options: [
      { id: "A", text: "[2, 4, 6]" },
      { id: "B", text: "[1, 2, 3]" },
      { id: "C", text: "6" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The arrow function transforms each element, producing a new array containing 2, 4, and 6.",
    tags: ["es6", "arrow-functions", "map", "arrays"]
  },

  {
    id: "javascript-es6-q-037",
    quizId: "quiz_javascript_es6",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which syntax is valid shorthand for an object method?",
    options: [
      { id: "A", text: "const user = { greet() {} };" },
      { id: "B", text: "const user = { method -> {} };" },
      { id: "C", text: "const user = { function greet() {} };" },
      { id: "D", text: "const user = { :greet() {} };" }
    ],
    correctOptionId: "A",
    explanation: "ES6 introduced concise method syntax, allowing `greet() {}` instead of `greet: function() {}`.",
    tags: ["es6", "object-methods", "shorthand"]
  },

  {
    id: "javascript-es6-q-038",
    quizId: "quiz_javascript_es6",
    order: 38,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst name = \"Avi\";\nconst age = 23;\n\nconst user = { name, age };\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "name" },
      { id: "C", text: "undefined" },
      { id: "D", text: "23" }
    ],
    correctOptionId: "A",
    explanation: "Property shorthand allows `{ name, age }` to mean `{ name: name, age: age }` when variable and property names match.",
    tags: ["es6", "object-shorthand", "objects"]
  },

  {
    id: "javascript-es6-q-039",
    quizId: "quiz_javascript_es6",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does computed property syntax allow you to do in an object literal?",
    options: [
      { id: "A", text: "Use an expression to determine a property key." },
      { id: "B", text: "Automatically clone the object." },
      { id: "C", text: "Convert every property into a method." },
      { id: "D", text: "Make every property private." }
    ],
    correctOptionId: "A",
    explanation: "Square brackets in an object literal allow an expression to be evaluated and used as the property key.",
    tags: ["es6", "computed-properties", "objects"]
  },

  {
    id: "javascript-es6-q-040",
    quizId: "quiz_javascript_es6",
    order: 40,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst key = \"username\";\nconst value = \"avi\";\n\nconst user = {\n  [key]: value\n};\n\nconsole.log(user.username);",
    options: [
      { id: "A", text: "avi" },
      { id: "B", text: "username" },
      { id: "C", text: "undefined" },
      { id: "D", text: "[key]" }
    ],
    correctOptionId: "A",
    explanation: "The expression `[key]` evaluates to `username`, creating the property `username` with the value `avi`.",
    tags: ["es6", "computed-properties", "objects"]
  },

  {
    id: "javascript-es6-q-041",
    quizId: "quiz_javascript_es6",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the `for...of` loop iterate over?",
    options: [
      { id: "A", text: "Values produced by an iterable." },
      { id: "B", text: "Only object property names." },
      { id: "C", text: "Only array indexes." },
      { id: "D", text: "Function parameters." }
    ],
    correctOptionId: "A",
    explanation: "`for...of` iterates over values from iterable objects such as arrays, strings, Maps, and Sets.",
    tags: ["es6", "for-of", "iterables"]
  },

  {
    id: "javascript-es6-q-042",
    quizId: "quiz_javascript_es6",
    order: 42,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [10, 20, 30];\n\nfor (const number of numbers) {\n  console.log(number);\n}",
    options: [
      { id: "A", text: "10, then 20, then 30" },
      { id: "B", text: "0, then 1, then 2" },
      { id: "C", text: "[10, 20, 30] as one value" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "`for...of` iterates over the array's values, so the loop receives 10, 20, and 30.",
    tags: ["es6", "for-of", "arrays"]
  },

  {
    id: "javascript-es6-q-043",
    quizId: "quiz_javascript_es6",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about `for...in` and `for...of` is correct?",
    options: [
      { id: "A", text: "`for...in` iterates enumerable property keys, while `for...of` iterates iterable values." },
      { id: "B", text: "`for...in` always gives values and `for...of` always gives indexes." },
      { id: "C", text: "They are interchangeable for all data structures." },
      { id: "D", text: "`for...of` only works with objects." }
    ],
    correctOptionId: "A",
    explanation: "`for...in` is designed for enumerable property keys, while `for...of` consumes an object's iterator to obtain values.",
    tags: ["es6", "for-in", "for-of", "iteration"]
  },

  {
    id: "javascript-es6-q-044",
    quizId: "quiz_javascript_es6",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst numbers = [1, 2, 3];\nconst result = ((...values) => values)(...numbers);\n\nconsole.log(result);",
    options: [
      { id: "A", text: "[1, 2, 3]" },
      { id: "B", text: "[[1, 2, 3]]" },
      { id: "C", text: "123" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The spread syntax expands `numbers` into separate arguments. The rest parameter then collects those arguments back into an array.",
    tags: ["es6", "spread", "rest", "functions"]
  },

  {
    id: "javascript-es6-q-045",
    quizId: "quiz_javascript_es6",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  role: \"developer\"\n};\n\nconst { name, ...details } = user;\nconsole.log(details);",
    options: [
      { id: "A", text: "{ role: \"developer\" }" },
      { id: "B", text: "{ name: \"Avi\" }" },
      { id: "C", text: "[\"developer\"]" },
      { id: "D", text: "developer" }
    ],
    correctOptionId: "A",
    explanation: "Object rest collects all properties not already extracted. Since `name` was extracted, `details` contains only `role`.",
    tags: ["es6", "object-rest", "destructuring"]
  },

  {
    id: "javascript-es6-q-046",
    quizId: "quiz_javascript_es6",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfunction createUser(name, options = {}) {\n  const { role = \"user\", active = true } = options;\n  return { name, role, active };\n}\n\nconsole.log(createUser(\"Avi\", { role: \"admin\" }));",
    options: [
      { id: "A", text: "{ name: \"Avi\", role: \"admin\", active: true }" },
      { id: "B", text: "{ name: \"Avi\", role: \"user\", active: false }" },
      { id: "C", text: "{ name: \"Avi\", role: \"admin\", active: false }" },
      { id: "D", text: "{ name: \"Avi\" }" }
    ],
    correctOptionId: "A",
    explanation: "The supplied `role` overrides its default, while `active` is missing and therefore uses the default value `true`.",
    tags: ["es6", "default-parameters", "destructuring", "defaults"]
  },

  {
    id: "javascript-es6-q-047",
    quizId: "quiz_javascript_es6",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst base = {\n  settings: {\n    theme: \"light\"\n  }\n};\n\nconst copy = { ...base };\ncopy.settings.theme = \"dark\";\n\nconsole.log(base.settings.theme);",
    options: [
      { id: "A", text: "dark" },
      { id: "B", text: "light" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Object spread creates a shallow copy. The nested `settings` object is still shared between `base` and `copy`, so changing it affects both references.",
    tags: ["es6", "spread", "shallow-copy", "references"]
  },

  {
    id: "javascript-es6-q-048",
    quizId: "quiz_javascript_es6",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst user = {\n  name: \"Avi\",\n  address: {\n    city: \"Asansol\"\n  }\n};\n\nconst updatedUser = {\n  ...user,\n  address: {\n    ...user.address,\n    city: \"Kolkata\"\n  }\n};\n\nconsole.log(user.address.city);\nconsole.log(updatedUser.address.city);",
    options: [
      { id: "A", text: "Asansol, then Kolkata" },
      { id: "B", text: "Kolkata, then Kolkata" },
      { id: "C", text: "Asansol, then Asansol" },
      { id: "D", text: "Kolkata, then Asansol" }
    ],
    correctOptionId: "A",
    explanation: "The nested object is also spread into a new object before changing `city`, so the original nested object remains unchanged.",
    tags: ["es6", "spread", "nested-objects", "immutability"]
  },

  {
    id: "javascript-es6-q-049",
    quizId: "quiz_javascript_es6",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst getMessage = (name = \"Guest\", ...roles) => {\n  return `${name}: ${roles.join(\", \")}`;\n};\n\nconsole.log(getMessage(\"Avi\", \"developer\", \"admin\"));",
    options: [
      { id: "A", text: "Avi: developer, admin" },
      { id: "B", text: "Avi: [\"developer\", \"admin\"]" },
      { id: "C", text: "Guest: developer, admin" },
      { id: "D", text: "Avi: developeradmin" }
    ],
    correctOptionId: "A",
    explanation: "`name` receives `Avi`, while the rest parameter collects the remaining arguments into an array. `join(\", \")` formats that array as the requested string.",
    tags: ["es6", "rest-parameters", "default-parameters", "template-literals"]
  },

  {
    id: "javascript-es6-q-050",
    quizId: "quiz_javascript_es6",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst users = [\n  { name: \"Avi\", role: \"developer\" },\n  { name: \"Sam\", role: \"designer\" }\n];\n\nconst result = users.map(({ name, role }) => `${name} - ${role}`);\n\nconsole.log(result);",
    options: [
      { id: "A", text: "[\"Avi - developer\", \"Sam - designer\"]" },
      { id: "B", text: "[\"name - role\", \"name - role\"]" },
      { id: "C", text: "[\"Avi\", \"Sam\"]" },
      { id: "D", text: "[\"developer\", \"designer\"]" }
    ],
    correctOptionId: "A",
    explanation: "The arrow function destructures `name` and `role` directly from each object. The template literal then combines those values into a formatted string.",
    tags: ["es6", "destructuring", "arrow-functions", "map", "template-literals"]
  }
];

export default javascriptEs6Questions;