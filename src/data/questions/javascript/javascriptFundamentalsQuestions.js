const javascriptFundamentalsQuestions = [
  {
    id: "javascript-fundamentals-q-001",
    quizId: "quiz_javascript_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which keyword creates a block-scoped variable that can be reassigned?",
    options: [
      { id: "A", text: "let" },
      { id: "B", text: "const" },
      { id: "C", text: "static" },
      { id: "D", text: "define" }
    ],
    correctOptionId: "A",
    explanation: "`let` creates a block-scoped binding whose value can later be reassigned.",
    tags: ["variables", "let", "scope"]
  },

  {
    id: "javascript-fundamentals-q-002",
    quizId: "quiz_javascript_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement correctly describes `const`?",
    options: [
      { id: "A", text: "It prevents reassignment of the binding." },
      { id: "B", text: "It makes every referenced object deeply immutable." },
      { id: "C", text: "It creates a function-scoped variable." },
      { id: "D", text: "It can never refer to an object that changes." }
    ],
    correctOptionId: "A",
    explanation: "`const` prevents reassignment of the variable binding. It does not automatically make referenced objects or arrays immutable.",
    tags: ["variables", "const", "immutability"]
  },

  {
    id: "javascript-fundamentals-q-003",
    quizId: "quiz_javascript_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which keyword is function-scoped rather than block-scoped?",
    options: [
      { id: "A", text: "var" },
      { id: "B", text: "let" },
      { id: "C", text: "const" },
      { id: "D", text: "class" }
    ],
    correctOptionId: "A",
    explanation: "`var` is function-scoped. `let` and `const` are block-scoped.",
    tags: ["variables", "var", "scope"]
  },

  {
    id: "javascript-fundamentals-q-004",
    quizId: "quiz_javascript_fundamentals",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What happens when this code runs?\n\nlet score = 10;\nscore = 20;\nconsole.log(score);",
    options: [
      { id: "A", text: "20 is printed." },
      { id: "B", text: "10 is printed." },
      { id: "C", text: "A TypeError is thrown." },
      { id: "D", text: "undefined is printed." }
    ],
    correctOptionId: "A",
    explanation: "A variable declared with `let` can be reassigned, so `score` becomes 20.",
    tags: ["let", "reassignment", "variables"]
  },

  {
    id: "javascript-fundamentals-q-005",
    quizId: "quiz_javascript_fundamentals",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What happens here?\n\nconst age = 23;\nage = 24;",
    options: [
      { id: "A", text: "A TypeError is thrown." },
      { id: "B", text: "age becomes 24." },
      { id: "C", text: "age becomes undefined." },
      { id: "D", text: "The assignment is silently ignored in every JavaScript mode." }
    ],
    correctOptionId: "A",
    explanation: "A `const` binding cannot be reassigned. Attempting to do so throws a TypeError.",
    tags: ["const", "reassignment", "TypeError"]
  },

  {
    id: "javascript-fundamentals-q-006",
    quizId: "quiz_javascript_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of the following is a JavaScript primitive value?",
    options: [
      { id: "A", text: "string" },
      { id: "B", text: "array" },
      { id: "C", text: "object" },
      { id: "D", text: "function" }
    ],
    correctOptionId: "A",
    explanation: "Strings are primitive values. Arrays, ordinary objects, and functions are objects.",
    tags: ["data-types", "primitives", "strings"]
  },

  {
    id: "javascript-fundamentals-q-007",
    quizId: "quiz_javascript_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which set contains only JavaScript primitive types?",
    options: [
      { id: "A", text: "string, number, boolean, undefined" },
      { id: "B", text: "array, object, function, string" },
      { id: "C", text: "object, array, null, function" },
      { id: "D", text: "Map, Set, number, object" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript primitive types include string, number, bigint, boolean, undefined, symbol, and null.",
    tags: ["data-types", "primitives"]
  },

  {
    id: "javascript-fundamentals-q-008",
    quizId: "quiz_javascript_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which JavaScript primitive represents an intentionally absent value?",
    options: [
      { id: "A", text: "null" },
      { id: "B", text: "undefined" },
      { id: "C", text: "NaN" },
      { id: "D", text: "false" }
    ],
    correctOptionId: "A",
    explanation: "`null` is commonly used to explicitly represent the intentional absence of an object or value.",
    tags: ["null", "primitives", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-009",
    quizId: "quiz_javascript_fundamentals",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value commonly indicates that a variable has not been assigned a value?",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "null" },
      { id: "C", text: "NaN" },
      { id: "D", text: "empty" }
    ],
    correctOptionId: "A",
    explanation: "A declared variable without an assigned value has the value `undefined`.",
    tags: ["undefined", "variables", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-010",
    quizId: "quiz_javascript_fundamentals",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nlet username;\nconsole.log(username);",
    options: [
      { id: "A", text: "undefined" },
      { id: "B", text: "null" },
      { id: "C", text: "\"\"" },
      { id: "D", text: "ReferenceError" }
    ],
    correctOptionId: "A",
    explanation: "The variable is declared but no value is assigned, so its value is `undefined`.",
    tags: ["undefined", "variables"]
  },

  {
    id: "javascript-fundamentals-q-011",
    quizId: "quiz_javascript_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `typeof 42` return?",
    options: [
      { id: "A", text: "\"number\"" },
      { id: "B", text: "\"integer\"" },
      { id: "C", text: "\"numeric\"" },
      { id: "D", text: "\"float\"" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript uses the `number` type for both integer and floating-point numeric values.",
    tags: ["typeof", "number", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-012",
    quizId: "quiz_javascript_fundamentals",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `typeof \"hello\"` return?",
    options: [
      { id: "A", text: "\"string\"" },
      { id: "B", text: "\"text\"" },
      { id: "C", text: "\"char\"" },
      { id: "D", text: "\"StringObject\"" }
    ],
    correctOptionId: "A",
    explanation: "A JavaScript primitive string has the type reported as `\"string\"` by `typeof`.",
    tags: ["typeof", "string", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-013",
    quizId: "quiz_javascript_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `typeof true` return?",
    options: [
      { id: "A", text: "\"boolean\"" },
      { id: "B", text: "\"bool\"" },
      { id: "C", text: "\"true\"" },
      { id: "D", text: "\"logical\"" }
    ],
    correctOptionId: "A",
    explanation: "`true` and `false` are Boolean primitive values, so `typeof` returns `\"boolean\"`.",
    tags: ["typeof", "boolean", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-014",
    quizId: "quiz_javascript_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `typeof undefined` return?",
    options: [
      { id: "A", text: "\"undefined\"" },
      { id: "B", text: "\"null\"" },
      { id: "C", text: "\"empty\"" },
      { id: "D", text: "\"void\"" }
    ],
    correctOptionId: "A",
    explanation: "`typeof` reports the primitive `undefined` using the string `\"undefined\"`.",
    tags: ["typeof", "undefined"]
  },

  {
    id: "javascript-fundamentals-q-015",
    quizId: "quiz_javascript_fundamentals",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `typeof null` return?",
    options: [
      { id: "A", text: "\"object\"" },
      { id: "B", text: "\"null\"" },
      { id: "C", text: "\"undefined\"" },
      { id: "D", text: "\"empty\"" }
    ],
    correctOptionId: "A",
    explanation: "`typeof null` returns `\"object\"`. This is a historical JavaScript quirk rather than an indication that null is actually an object.",
    tags: ["typeof", "null", "JavaScript-quirks"]
  },

  {
    id: "javascript-fundamentals-q-016",
    quizId: "quiz_javascript_fundamentals",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `typeof []` return?",
    options: [
      { id: "A", text: "\"object\"" },
      { id: "B", text: "\"array\"" },
      { id: "C", text: "\"list\"" },
      { id: "D", text: "\"collection\"" }
    ],
    correctOptionId: "A",
    explanation: "Arrays are objects in JavaScript, so `typeof []` returns `\"object\"`. `Array.isArray([])` is the appropriate way to specifically test whether a value is an array.",
    tags: ["typeof", "arrays", "objects"]
  },

  {
    id: "javascript-fundamentals-q-017",
    quizId: "quiz_javascript_fundamentals",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `typeof function () {}` return?",
    options: [
      { id: "A", text: "\"function\"" },
      { id: "B", text: "\"object\"" },
      { id: "C", text: "\"method\"" },
      { id: "D", text: "\"callable\"" }
    ],
    correctOptionId: "A",
    explanation: "Although functions are objects in JavaScript, `typeof` has a special result for callable function values: `\"function\"`.",
    tags: ["typeof", "functions", "objects"]
  },

  {
    id: "javascript-fundamentals-q-018",
    quizId: "quiz_javascript_fundamentals",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value represents a number that is not a valid numeric result?",
    options: [
      { id: "A", text: "NaN" },
      { id: "B", text: "null" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Infinity" }
    ],
    correctOptionId: "A",
    explanation: "`NaN` means Not-a-Number and is used to represent an invalid numeric result. Interestingly, its type is still `number`.",
    tags: ["NaN", "number", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-019",
    quizId: "quiz_javascript_fundamentals",
    order: 19,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconsole.log(typeof NaN);",
    options: [
      { id: "A", text: "\"number\"" },
      { id: "B", text: "\"NaN\"" },
      { id: "C", text: "\"undefined\"" },
      { id: "D", text: "\"invalid\"" }
    ],
    correctOptionId: "A",
    explanation: "`NaN` is a special numeric value, so `typeof NaN` returns `\"number\"`.",
    tags: ["NaN", "typeof", "number"]
  },

  {
    id: "javascript-fundamentals-q-020",
    quizId: "quiz_javascript_fundamentals",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about JavaScript numbers is correct?",
    options: [
      { id: "A", text: "The standard Number type represents both integers and floating-point values." },
      { id: "B", text: "JavaScript has separate primitive types named integer and float." },
      { id: "C", text: "All JavaScript numbers are strings internally." },
      { id: "D", text: "Decimal values require BigInt." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript's standard `Number` type represents both integer and floating-point numeric values.",
    tags: ["number", "data-types", "numeric-values"]
  },

  {
    id: "javascript-fundamentals-q-021",
    quizId: "quiz_javascript_fundamentals",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is type coercion?",
    options: [
      { id: "A", text: "The conversion of a value from one type to another, either implicitly or explicitly." },
      { id: "B", text: "The creation of a new JavaScript variable." },
      { id: "C", text: "The deletion of an object property." },
      { id: "D", text: "The process of freezing an object." }
    ],
    correctOptionId: "A",
    explanation: "Type coercion occurs when JavaScript converts values between types. It can happen automatically during operations or explicitly through functions such as `Number()` or `String()`.",
    tags: ["type-coercion", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-022",
    quizId: "quiz_javascript_fundamentals",
    order: 22,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconsole.log(\"5\" + 2);",
    options: [
      { id: "A", text: "\"52\"" },
      { id: "B", text: "7" },
      { id: "C", text: "\"7\"" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "A",
    explanation: "When `+` involves a string, JavaScript performs string concatenation. The number 2 is converted to a string, producing `\"52\"`.",
    tags: ["type-coercion", "addition", "strings"]
  },

  {
    id: "javascript-fundamentals-q-023",
    quizId: "quiz_javascript_fundamentals",
    order: 23,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconsole.log(\"5\" - 2);",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "\"3\"" },
      { id: "C", text: "\"52\"" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "A",
    explanation: "Unlike `+`, the subtraction operator expects numeric operands, so the string `\"5\"` is coerced to the number 5.",
    tags: ["type-coercion", "subtraction", "operators"]
  },

  {
    id: "javascript-fundamentals-q-024",
    quizId: "quiz_javascript_fundamentals",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(\"10\" * \"2\");",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "\"102\"" },
      { id: "C", text: "1020" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "A",
    explanation: "The multiplication operator coerces both numeric strings into numbers, so the result is 20.",
    tags: ["type-coercion", "multiplication", "operators"]
  },

  {
    id: "javascript-fundamentals-q-025",
    quizId: "quiz_javascript_fundamentals",
    order: 25,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which expression explicitly converts the string `\"42\"` into a number?",
    options: [
      { id: "A", text: "Number(\"42\")" },
      { id: "B", text: "String(\"42\")" },
      { id: "C", text: "Boolean(\"42\")" },
      { id: "D", text: "Object(\"42\")" }
    ],
    correctOptionId: "A",
    explanation: "`Number(\"42\")` explicitly converts the numeric string into the number 42.",
    tags: ["type-conversion", "Number", "strings"]
  },

  {
    id: "javascript-fundamentals-q-026",
    quizId: "quiz_javascript_fundamentals",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `String(123)` produce?",
    options: [
      { id: "A", text: "\"123\"" },
      { id: "B", text: "123" },
      { id: "C", text: "true" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "A",
    explanation: "`String()` explicitly converts its argument into a string, so the number 123 becomes `\"123\"`.",
    tags: ["type-conversion", "String"]
  },

  {
    id: "javascript-fundamentals-q-027",
    quizId: "quiz_javascript_fundamentals",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `Boolean(0)` return?",
    options: [
      { id: "A", text: "false" },
      { id: "B", text: "true" },
      { id: "C", text: "0" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Zero is a falsy value, so explicitly converting it to Boolean produces `false`.",
    tags: ["Boolean", "truthy", "falsy"]
  },

  {
    id: "javascript-fundamentals-q-028",
    quizId: "quiz_javascript_fundamentals",
    order: 28,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value is truthy?",
    options: [
      { id: "A", text: "\"false\"" },
      { id: "B", text: "0" },
      { id: "C", text: "\"\"" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "Any non-empty string is truthy, including the string `\"false\"`. The other options are falsy.",
    tags: ["truthy", "falsy", "boolean"]
  },

  {
    id: "javascript-fundamentals-q-029",
    quizId: "quiz_javascript_fundamentals",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of these is falsy?",
    options: [
      { id: "A", text: "\"\"" },
      { id: "B", text: "\"0\"" },
      { id: "C", text: "[]" },
      { id: "D", text: "{}" }
    ],
    correctOptionId: "A",
    explanation: "The empty string is falsy. Non-empty strings, including `\"0\"`, are truthy, and arrays and objects are also truthy.",
    tags: ["truthy", "falsy", "strings"]
  },

  {
    id: "javascript-fundamentals-q-030",
    quizId: "quiz_javascript_fundamentals",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which group contains JavaScript's commonly encountered falsy values?",
    options: [
      { id: "A", text: "false, 0, \"\", null, undefined, NaN" },
      { id: "B", text: "false, 1, \"0\", [], {}" },
      { id: "C", text: "null, \"null\", [], 1" },
      { id: "D", text: "undefined, \"\", \"false\", {}" }
    ],
    correctOptionId: "A",
    explanation: "The standard falsy values are `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, and `NaN`.",
    tags: ["truthy", "falsy", "boolean"]
  },

  {
    id: "javascript-fundamentals-q-031",
    quizId: "quiz_javascript_fundamentals",
    order: 31,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the difference between `==` and `===`?",
    options: [
      { id: "A", text: "`==` may perform type coercion, while `===` performs strict equality without that coercion." },
      { id: "B", text: "`===` converts both values to strings, while `==` does not." },
      { id: "C", text: "`==` compares only types, while `===` compares only values." },
      { id: "D", text: "There is no difference." }
    ],
    correctOptionId: "A",
    explanation: "Loose equality `==` allows certain type conversions before comparison. Strict equality `===` requires the operands to have compatible types and equal values without such coercion.",
    tags: ["equality", "type-coercion", "operators"]
  },

  {
    id: "javascript-fundamentals-q-032",
    quizId: "quiz_javascript_fundamentals",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(5 == \"5\");",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "\"true\"" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Loose equality allows type coercion, so the string `\"5\"` is compared numerically with 5 and the result is true.",
    tags: ["==", "type-coercion", "equality"]
  },

  {
    id: "javascript-fundamentals-q-033",
    quizId: "quiz_javascript_fundamentals",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(5 === \"5\");",
    options: [
      { id: "A", text: "false" },
      { id: "B", text: "true" },
      { id: "C", text: "\"false\"" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Strict equality does not coerce the string into a number. Since one operand is a number and the other is a string, the comparison is false.",
    tags: ["===", "strict-equality", "type-coercion"]
  },

  {
    id: "javascript-fundamentals-q-034",
    quizId: "quiz_javascript_fundamentals",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(null == undefined);",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "null" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "Under the special rules of loose equality, `null` and `undefined` compare equal to each other.",
    tags: ["null", "undefined", "loose-equality"]
  },

  {
    id: "javascript-fundamentals-q-035",
    quizId: "quiz_javascript_fundamentals",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(null === undefined);",
    options: [
      { id: "A", text: "false" },
      { id: "B", text: "true" },
      { id: "C", text: "undefined" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "`null` and `undefined` are different primitive values and therefore are not strictly equal.",
    tags: ["null", "undefined", "strict-equality"]
  },

  {
    id: "javascript-fundamentals-q-036",
    quizId: "quiz_javascript_fundamentals",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which operator returns the right-hand value only when the left-hand value is null or undefined?",
    options: [
      { id: "A", text: "??" },
      { id: "B", text: "||" },
      { id: "C", text: "&&" },
      { id: "D", text: "??=" + " only" }
    ],
    correctOptionId: "A",
    explanation: "The nullish coalescing operator `??` uses the right-hand operand when the left-hand operand is `null` or `undefined`.",
    tags: ["nullish-coalescing", "operators", "null", "undefined"]
  },

  {
    id: "javascript-fundamentals-q-037",
    quizId: "quiz_javascript_fundamentals",
    order: 37,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(0 ?? 10);",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "10" },
      { id: "C", text: "false" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`??` only treats `null` and `undefined` as missing. Since 0 is a valid value and is not nullish, the result is 0.",
    tags: ["nullish-coalescing", "operators", "falsy"]
  },

  {
    id: "javascript-fundamentals-q-038",
    quizId: "quiz_javascript_fundamentals",
    order: 38,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(null ?? 10);",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "null" },
      { id: "C", text: "0" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Because the left-hand operand is nullish, `??` evaluates to the right-hand operand, 10.",
    tags: ["nullish-coalescing", "null", "operators"]
  },

  {
    id: "javascript-fundamentals-q-039",
    quizId: "quiz_javascript_fundamentals",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How does `||` differ from `??`?",
    options: [
      { id: "A", text: "`||` falls back for any falsy left-hand value, while `??` falls back only for null or undefined." },
      { id: "B", text: "`||` only checks null, while `??` checks every falsy value." },
      { id: "C", text: "They always produce identical results." },
      { id: "D", text: "`??` converts both operands to strings." }
    ],
    correctOptionId: "A",
    explanation: "`||` treats values such as 0, false, and the empty string as falsy. `??` treats only `null` and `undefined` as absent.",
    tags: ["logical-operators", "nullish-coalescing", "falsy"]
  },

  {
    id: "javascript-fundamentals-q-040",
    quizId: "quiz_javascript_fundamentals",
    order: 40,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(0 || 10);",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "0" },
      { id: "C", text: "false" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "0 is falsy, so the `||` operator evaluates to the right-hand operand, 10.",
    tags: ["logical-operators", "OR", "falsy"]
  },

  {
    id: "javascript-fundamentals-q-041",
    quizId: "quiz_javascript_fundamentals",
    order: 41,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the logical NOT operator `!` do?",
    options: [
      { id: "A", text: "Converts a value to Boolean and negates its truthiness." },
      { id: "B", text: "Converts every value into a number." },
      { id: "C", text: "Checks strict equality." },
      { id: "D", text: "Returns the opposite string." }
    ],
    correctOptionId: "A",
    explanation: "The `!` operator converts its operand to a Boolean according to its truthiness and then reverses that Boolean.",
    tags: ["logical-operators", "NOT", "boolean"]
  },

  {
    id: "javascript-fundamentals-q-042",
    quizId: "quiz_javascript_fundamentals",
    order: 42,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconsole.log(!0);",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "0" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "0 is falsy. Applying `!` converts it to false and then negates it, producing true.",
    tags: ["logical-operators", "NOT", "truthy-falsy"]
  },

  {
    id: "javascript-fundamentals-q-043",
    quizId: "quiz_javascript_fundamentals",
    order: 43,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `+` operator do when both operands are numbers?",
    options: [
      { id: "A", text: "Performs numeric addition." },
      { id: "B", text: "Always converts the result to a string." },
      { id: "C", text: "Performs multiplication." },
      { id: "D", text: "Performs strict equality." }
    ],
    correctOptionId: "A",
    explanation: "When both operands are numeric values, `+` performs arithmetic addition.",
    tags: ["operators", "addition", "numbers"]
  },

  {
    id: "javascript-fundamentals-q-044",
    quizId: "quiz_javascript_fundamentals",
    order: 44,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconsole.log(10 / 2);",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "\"5\"" },
      { id: "C", text: "20" },
      { id: "D", text: "NaN" }
    ],
    correctOptionId: "A",
    explanation: "The division operator divides 10 by 2, producing the number 5.",
    tags: ["operators", "division", "numbers"]
  },

  {
    id: "javascript-fundamentals-q-045",
    quizId: "quiz_javascript_fundamentals",
    order: 45,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(10 % 3);",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "3" },
      { id: "C", text: "0" },
      { id: "D", text: "3.33" }
    ],
    correctOptionId: "A",
    explanation: "The remainder operator `%` returns the remainder after division. 10 divided by 3 leaves a remainder of 1.",
    tags: ["operators", "remainder", "modulo"]
  },

  {
    id: "javascript-fundamentals-q-046",
    quizId: "quiz_javascript_fundamentals",
    order: 46,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(2 ** 3);",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "6" },
      { id: "C", text: "9" },
      { id: "D", text: "5" }
    ],
    correctOptionId: "A",
    explanation: "The exponentiation operator `**` raises the left operand to the power of the right operand: 2³ = 8.",
    tags: ["operators", "exponentiation", "numbers"]
  },

  {
    id: "javascript-fundamentals-q-047",
    quizId: "quiz_javascript_fundamentals",
    order: 47,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the increment operator `++` do to a numeric variable?",
    options: [
      { id: "A", text: "Increases its value by 1." },
      { id: "B", text: "Multiplies its value by 2." },
      { id: "C", text: "Converts it to a string." },
      { id: "D", text: "Decreases its value by 1." }
    ],
    correctOptionId: "A",
    explanation: "`++` increments a numeric value by one. Its prefix and postfix forms differ in when the old versus new value is produced by the expression.",
    tags: ["operators", "increment", "numbers"]
  },

  {
    id: "javascript-fundamentals-q-048",
    quizId: "quiz_javascript_fundamentals",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nlet x = 5;\nconst y = x++;\nconsole.log(x, y);",
    options: [
      { id: "A", text: "6 5" },
      { id: "B", text: "5 6" },
      { id: "C", text: "6 6" },
      { id: "D", text: "5 5" }
    ],
    correctOptionId: "A",
    explanation: "The postfix increment returns the original value before incrementing the variable. Therefore `y` receives 5, while `x` becomes 6.",
    tags: ["operators", "postfix-increment", "evaluation"]
  },

  {
    id: "javascript-fundamentals-q-049",
    quizId: "quiz_javascript_fundamentals",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about BigInt is correct?",
    options: [
      { id: "A", text: "It represents integers larger than the safe integer range of Number with arbitrary precision." },
      { id: "B", text: "It is used primarily for decimal floating-point calculations." },
      { id: "C", text: "It is interchangeable with Number in every arithmetic expression." },
      { id: "D", text: "It can represent fractional values exactly." }
    ],
    correctOptionId: "A",
    explanation: "BigInt supports arbitrary-precision integers, making it useful when integer values exceed the safe integer range of the standard Number type. BigInt and Number generally cannot be mixed directly in arithmetic.",
    tags: ["BigInt", "numbers", "data-types"]
  },

  {
    id: "javascript-fundamentals-q-050",
    quizId: "quiz_javascript_fundamentals",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer receives user input as the string `\"0\"` and wants to use it as a numeric value. Which approach is safest for understanding the actual data type?",
    options: [
      { id: "A", text: "Explicitly convert it with Number(input) and then validate whether the result is a valid number." },
      { id: "B", text: "Use Boolean(input) because all numeric strings become numbers automatically." },
      { id: "C", text: "Use input === 0 because strict equality always converts strings to numbers." },
      { id: "D", text: "Use typeof input === \"number\" because strings containing digits are automatically numbers." }
    ],
    correctOptionId: "A",
    explanation: "Values received from forms, URLs, and many APIs often arrive as strings. Explicit conversion with `Number()` makes the intended type clear, after which the result can be validated with an appropriate numeric check such as `Number.isNaN()`.",
    tags: ["type-conversion", "Number", "validation", "user-input"]
  }
];

export default javascriptFundamentalsQuestions;