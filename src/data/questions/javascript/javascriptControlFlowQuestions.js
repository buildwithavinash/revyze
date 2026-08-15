const javascriptControlFlowQuestions = [
  {
    id: "javascript-control-flow-q-001",
    quizId: "quiz_javascript_control_flow",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement is primarily used to execute code only when a condition is truthy?",
    options: [
      { id: "A", text: "if" },
      { id: "B", text: "switch" },
      { id: "C", text: "for" },
      { id: "D", text: "continue" }
    ],
    correctOptionId: "A",
    explanation: "An `if` statement conditionally executes a block when its condition evaluates to a truthy value.",
    tags: ["if", "conditionals"]
  },

  {
    id: "javascript-control-flow-q-002",
    quizId: "quiz_javascript_control_flow",
    order: 2,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nif (true) {\n  console.log(\"yes\");\n}",
    options: [
      { id: "A", text: "yes" },
      { id: "B", text: "true" },
      { id: "C", text: "undefined" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The condition is `true`, so the body of the `if` statement executes.",
    tags: ["if", "conditionals"]
  },

  {
    id: "javascript-control-flow-q-003",
    quizId: "quiz_javascript_control_flow",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of an `else` block?",
    options: [
      { id: "A", text: "To execute alternative code when the preceding if condition is falsy." },
      { id: "B", text: "To repeat an if statement." },
      { id: "C", text: "To terminate the JavaScript program." },
      { id: "D", text: "To create a loop." }
    ],
    correctOptionId: "A",
    explanation: "An `else` block provides the alternative branch when its associated `if` condition is falsy.",
    tags: ["if", "else", "conditionals"]
  },

  {
    id: "javascript-control-flow-q-004",
    quizId: "quiz_javascript_control_flow",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst age = 20;\n\nif (age >= 18) {\n  console.log(\"adult\");\n} else {\n  console.log(\"minor\");\n}",
    options: [
      { id: "A", text: "adult" },
      { id: "B", text: "minor" },
      { id: "C", text: "20" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "20 satisfies `age >= 18`, so the first branch executes.",
    tags: ["if-else", "comparison"]
  },

  {
    id: "javascript-control-flow-q-005",
    quizId: "quiz_javascript_control_flow",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst score = 45;\n\nif (score >= 50) {\n  console.log(\"pass\");\n} else {\n  console.log(\"fail\");\n}",
    options: [
      { id: "A", text: "fail" },
      { id: "B", text: "pass" },
      { id: "C", text: "45" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "45 is not greater than or equal to 50, so the `else` branch runs.",
    tags: ["if-else", "comparisons"]
  },

  {
    id: "javascript-control-flow-q-006",
    quizId: "quiz_javascript_control_flow",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which keyword allows multiple conditions to be checked sequentially after an initial `if`?",
    options: [
      { id: "A", text: "else if" },
      { id: "B", text: "otherwise if" },
      { id: "C", text: "elif" },
      { id: "D", text: "next if" }
    ],
    correctOptionId: "A",
    explanation: "`else if` allows another condition to be tested when the previous condition was falsy.",
    tags: ["else-if", "conditionals"]
  },

  {
    id: "javascript-control-flow-q-007",
    quizId: "quiz_javascript_control_flow",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst score = 75;\n\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 70) {\n  console.log(\"B\");\n} else {\n  console.log(\"C\");\n}",
    options: [
      { id: "A", text: "B" },
      { id: "B", text: "A" },
      { id: "C", text: "C" },
      { id: "D", text: "A B" }
    ],
    correctOptionId: "A",
    explanation: "75 does not satisfy the first condition but does satisfy `score >= 70`, so `B` is printed.",
    tags: ["else-if", "conditionals"]
  },

  {
    id: "javascript-control-flow-q-008",
    quizId: "quiz_javascript_control_flow",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "When an `if` / `else if` chain finds its first truthy condition, what happens to the remaining branches?",
    options: [
      { id: "A", text: "They are skipped." },
      { id: "B", text: "They all execute." },
      { id: "C", text: "Only the final else executes." },
      { id: "D", text: "They are evaluated again." }
    ],
    correctOptionId: "A",
    explanation: "Once a branch in the chain is selected, the remaining branches are skipped.",
    tags: ["else-if", "control-flow"]
  },

  {
    id: "javascript-control-flow-q-009",
    quizId: "quiz_javascript_control_flow",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst value = 0;\n\nif (value) {\n  console.log(\"A\");\n} else {\n  console.log(\"B\");\n}",
    options: [
      { id: "A", text: "B" },
      { id: "B", text: "A" },
      { id: "C", text: "0" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "0 is falsy, so the `else` branch executes.",
    tags: ["truthy", "falsy", "if"]
  },

  {
    id: "javascript-control-flow-q-010",
    quizId: "quiz_javascript_control_flow",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which operator is commonly used to combine two conditions where both must be truthy?",
    options: [
      { id: "A", text: "&&" },
      { id: "B", text: "||" },
      { id: "C", text: "??" },
      { id: "D", text: "!" }
    ],
    correctOptionId: "A",
    explanation: "The logical AND operator `&&` requires both operands to be truthy for the combined condition to be truthy.",
    tags: ["logical-operators", "conditions"]
  },

  {
    id: "javascript-control-flow-q-011",
    quizId: "quiz_javascript_control_flow",
    order: 11,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst age = 25;\nconst hasID = true;\n\nif (age >= 18 && hasID) {\n  console.log(\"allowed\");\n} else {\n  console.log(\"denied\");\n}",
    options: [
      { id: "A", text: "allowed" },
      { id: "B", text: "denied" },
      { id: "C", text: "true" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "Both conditions are truthy, so the combined `&&` expression is truthy.",
    tags: ["logical-and", "conditions"]
  },

  {
    id: "javascript-control_flow-q-012",
    quizId: "quiz_javascript_control_flow",
    order: 12,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst isAdmin = false;\nconst isOwner = true;\n\nif (isAdmin || isOwner) {\n  console.log(\"access\");\n}",
    options: [
      { id: "A", text: "access" },
      { id: "B", text: "Nothing" },
      { id: "C", text: "false" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "With `||`, only one operand needs to be truthy. `isOwner` is true, so the condition succeeds.",
    tags: ["logical-or", "conditions"]
  },

  {
    id: "javascript-control-flow-q-013",
    quizId: "quiz_javascript_control_flow",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of a `switch` statement?",
    options: [
      { id: "A", text: "To select among multiple branches based on a value." },
      { id: "B", text: "To declare variables." },
      { id: "C", text: "To create asynchronous operations." },
      { id: "D", text: "To iterate over object properties only." }
    ],
    correctOptionId: "A",
    explanation: "`switch` provides a structured way to select a branch based on matching a value against `case` clauses.",
    tags: ["switch", "conditionals"]
  },

  {
    id: "javascript-control-flow-q-014",
    quizId: "quiz_javascript_control_flow",
    order: 14,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst day = \"Monday\";\n\nswitch (day) {\n  case \"Monday\":\n    console.log(\"start\");\n    break;\n  case \"Friday\":\n    console.log(\"end\");\n    break;\n  default:\n    console.log(\"other\");\n}",
    options: [
      { id: "A", text: "start" },
      { id: "B", text: "end" },
      { id: "C", text: "other" },
      { id: "D", text: "start end" }
    ],
    correctOptionId: "A",
    explanation: "The value matches the `Monday` case, which executes and then stops at `break`.",
    tags: ["switch", "case", "break"]
  },

  {
    id: "javascript-control_flow-q-015",
    quizId: "quiz_javascript_control_flow",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of `break` inside a `switch` case?",
    options: [
      { id: "A", text: "To exit the switch statement." },
      { id: "B", text: "To restart the switch." },
      { id: "C", text: "To skip only the current expression." },
      { id: "D", text: "To execute the default case." }
    ],
    correctOptionId: "A",
    explanation: "`break` exits the current `switch` statement and prevents execution from falling through to later cases.",
    tags: ["switch", "break"]
  },

  {
    id: "javascript-control_flow-q-016",
    quizId: "quiz_javascript_control_flow",
    order: 16,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst value = 2;\n\nswitch (value) {\n  case 1:\n    console.log(\"one\");\n  case 2:\n    console.log(\"two\");\n  case 3:\n    console.log(\"three\");\n}",
    options: [
      { id: "A", text: "two three" },
      { id: "B", text: "two" },
      { id: "C", text: "three" },
      { id: "D", text: "one two three" }
    ],
    correctOptionId: "A",
    explanation: "Without `break`, execution falls through from the matching `case 2` into `case 3`.",
    tags: ["switch", "fall-through", "break"]
  },

  {
    id: "javascript-control_flow-q-017",
    quizId: "quiz_javascript_control_flow",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When does the `default` branch of a switch execute?",
    options: [
      { id: "A", text: "When none of the case values match." },
      { id: "B", text: "Every time after a case." },
      { id: "C", text: "Only when the value is undefined." },
      { id: "D", text: "Only when break is missing." }
    ],
    correctOptionId: "A",
    explanation: "`default` acts as the fallback branch when no `case` matches the switch expression.",
    tags: ["switch", "default"]
  },

  {
    id: "javascript-control_flow-q-018",
    quizId: "quiz_javascript_control_flow",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst status = \"unknown\";\n\nswitch (status) {\n  case \"active\":\n    console.log(\"A\");\n    break;\n  default:\n    console.log(\"fallback\");\n}",
    options: [
      { id: "A", text: "fallback" },
      { id: "B", text: "A" },
      { id: "C", text: "unknown" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "No case matches `\"unknown\"`, so the `default` branch executes.",
    tags: ["switch", "default"]
  },

  {
    id: "javascript-control_flow-q-019",
    quizId: "quiz_javascript_control_flow",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How does a switch case compare its value with the switch expression?",
    options: [
      { id: "A", text: "Using strict equality semantics." },
      { id: "B", text: "Using loose equality with automatic conversion." },
      { id: "C", text: "By converting both values to strings." },
      { id: "D", text: "By comparing object references only." }
    ],
    correctOptionId: "A",
    explanation: "Switch matching uses strict comparison semantics, so type differences matter.",
    tags: ["switch", "strict-equality"]
  },

  {
    id: "javascript-control_flow-q-020",
    quizId: "quiz_javascript_control_flow",
    order: 20,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst value = \"1\";\n\nswitch (value) {\n  case 1:\n    console.log(\"number\");\n    break;\n  case \"1\":\n    console.log(\"string\");\n    break;\n}",
    options: [
      { id: "A", text: "string" },
      { id: "B", text: "number" },
      { id: "C", text: "number string" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The switch value is a string, so it matches `case \"1\"`, not the numeric `case 1`.",
    tags: ["switch", "strict-equality", "types"]
  },

  {
    id: "javascript-control_flow-q-021",
    quizId: "quiz_javascript_control_flow",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which loop is generally appropriate when you know the number of iterations or have a clear initialization, condition, and update?",
    options: [
      { id: "A", text: "for" },
      { id: "B", text: "switch" },
      { id: "C", text: "if" },
      { id: "D", text: "try" }
    ],
    correctOptionId: "A",
    explanation: "A `for` loop places initialization, condition, and update in one compact loop structure.",
    tags: ["for-loop", "loops"]
  },

  {
    id: "javascript-control_flow-q-022",
    quizId: "quiz_javascript_control_flow",
    order: 22,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfor (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    options: [
      { id: "A", text: "0 1 2" },
      { id: "B", text: "1 2 3" },
      { id: "C", text: "0 1 2 3" },
      { id: "D", text: "3" }
    ],
    correctOptionId: "A",
    explanation: "The loop starts at 0 and continues while `i < 3`, producing 0, 1, and 2.",
    tags: ["for-loop", "iteration"]
  },

  {
    id: "javascript-control_flow-q-023",
    quizId: "quiz_javascript_control_flow",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "In a standard `for` loop, which part executes before the first iteration?",
    options: [
      { id: "A", text: "Initialization" },
      { id: "B", text: "Update" },
      { id: "C", text: "Condition body" },
      { id: "D", text: "break" }
    ],
    correctOptionId: "A",
    explanation: "The initialization expression runs once before the loop's first condition check.",
    tags: ["for-loop", "initialization"]
  },

  {
    id: "javascript-control_flow-q-024",
    quizId: "quiz_javascript_control_flow",
    order: 24,
    type: "mcq",
    difficulty: "Beginner",
    question: "In a standard `for` loop, when is the update expression executed?",
    options: [
      { id: "A", text: "After each completed iteration of the loop body." },
      { id: "B", text: "Before initialization." },
      { id: "C", text: "Only when the condition is false." },
      { id: "D", text: "Only once before the loop starts." }
    ],
    correctOptionId: "A",
    explanation: "After the loop body finishes normally, the update expression executes before the next condition check.",
    tags: ["for-loop", "iteration"]
  },

  {
    id: "javascript-control_flow-q-025",
    quizId: "quiz_javascript_control_flow",
    order: 25,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nfor (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
    options: [
      { id: "A", text: "1 2 3" },
      { id: "B", text: "0 1 2" },
      { id: "C", text: "1 2" },
      { id: "D", text: "0 1 2 3" }
    ],
    correctOptionId: "A",
    explanation: "The loop begins at 1 and continues while `i <= 3`, so it prints 1, 2, and 3.",
    tags: ["for-loop", "comparison"]
  },

  {
    id: "javascript-control_flow-q-026",
    quizId: "quiz_javascript_control_flow",
    order: 26,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nlet total = 0;\n\nfor (let i = 1; i <= 4; i++) {\n  total += i;\n}\n\nconsole.log(total);",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "4" },
      { id: "C", text: "6" },
      { id: "D", text: "11" }
    ],
    correctOptionId: "A",
    explanation: "The loop adds 1 + 2 + 3 + 4, resulting in 10.",
    tags: ["for-loop", "accumulator", "iteration"]
  },

  {
    id: "javascript-control_flow-q-027",
    quizId: "quiz_javascript_control_flow",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which loop checks its condition before each iteration, including before the first one?",
    options: [
      { id: "A", text: "while" },
      { id: "B", text: "do...while" },
      { id: "C", text: "switch" },
      { id: "D", text: "for...of only" }
    ],
    correctOptionId: "A",
    explanation: "A `while` loop checks its condition before executing the body, so the body may execute zero times.",
    tags: ["while-loop", "loops"]
  },

  {
    id: "javascript-control_flow-q-028",
    quizId: "quiz_javascript_control_flow",
    order: 28,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nlet count = 0;\n\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}",
    options: [
      { id: "A", text: "0 1 2" },
      { id: "B", text: "1 2 3" },
      { id: "C", text: "0 1 2 3" },
      { id: "D", text: "3" }
    ],
    correctOptionId: "A",
    explanation: "The condition is checked before each iteration. Values 0, 1, and 2 satisfy `count < 3`.",
    tags: ["while-loop", "iteration"]
  },

  {
    id: "javascript-control_flow-q-029",
    quizId: "quiz_javascript_control_flow",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the key difference between `while` and `do...while`?",
    options: [
      { id: "A", text: "`do...while` executes its body at least once before checking the condition." },
      { id: "B", text: "`while` always executes at least once." },
      { id: "C", text: "`do...while` cannot have a condition." },
      { id: "D", text: "There is no difference." }
    ],
    correctOptionId: "A",
    explanation: "A `do...while` loop executes the body first and checks its condition afterward, guaranteeing at least one execution.",
    tags: ["do-while", "while", "loops"]
  },

  {
    id: "javascript-control_flow-q-030",
    quizId: "quiz_javascript_control_flow",
    order: 30,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nlet count = 5;\n\ndo {\n  console.log(count);\n  count++;\n} while (count < 5);",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "Nothing" },
      { id: "C", text: "5 6" },
      { id: "D", text: "Infinite loop" }
    ],
    correctOptionId: "A",
    explanation: "A `do...while` executes once before checking the condition. After printing 5, the condition `6 < 5` is false.",
    tags: ["do-while", "loops"]
  },

  {
    id: "javascript-control_flow-q-031",
    quizId: "quiz_javascript_control_flow",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `break` do inside a loop?",
    options: [
      { id: "A", text: "Immediately exits the loop." },
      { id: "B", text: "Skips only the current iteration." },
      { id: "C", text: "Restarts the loop." },
      { id: "D", text: "Pauses the loop permanently without exiting." }
    ],
    correctOptionId: "A",
    explanation: "`break` terminates the nearest enclosing loop immediately.",
    tags: ["break", "loops"]
  },

  {
    id: "javascript-control_flow-q-032",
    quizId: "quiz_javascript_control_flow",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfor (let i = 0; i < 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}",
    options: [
      { id: "A", text: "0 1 2" },
      { id: "B", text: "0 1 2 3" },
      { id: "C", text: "3 4" },
      { id: "D", text: "0 1 2 3 4" }
    ],
    correctOptionId: "A",
    explanation: "When `i` reaches 3, `break` immediately exits the loop before 3 is logged.",
    tags: ["break", "for-loop"]
  },

  {
    id: "javascript-control_flow-q-033",
    quizId: "quiz_javascript_control_flow",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `continue` do inside a loop?",
    options: [
      { id: "A", text: "Skips the remainder of the current iteration and proceeds with the next iteration." },
      { id: "B", text: "Terminates the entire loop." },
      { id: "C", text: "Restarts the JavaScript runtime." },
      { id: "D", text: "Repeats the current iteration forever." }
    ],
    correctOptionId: "A",
    explanation: "`continue` skips the remaining statements in the current iteration and moves toward the next iteration.",
    tags: ["continue", "loops"]
  },

  {
    id: "javascript-control_flow-q-034",
    quizId: "quiz_javascript_control_flow",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nfor (let i = 0; i < 5; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}",
    options: [
      { id: "A", text: "0 1 3 4" },
      { id: "B", text: "0 1 2 3 4" },
      { id: "C", text: "2" },
      { id: "D", text: "0 1" }
    ],
    correctOptionId: "A",
    explanation: "When `i` is 2, `continue` skips the `console.log` for that iteration. The loop then proceeds to 3 and 4.",
    tags: ["continue", "for-loop"]
  },

  {
    id: "javascript-control_flow-q-035",
    quizId: "quiz_javascript_control_flow",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In a `for` loop, what happens to the update expression after `continue` is executed?",
    options: [
      { id: "A", text: "For a normal for-loop, the update expression still runs before the next condition check." },
      { id: "B", text: "The update expression is permanently skipped." },
      { id: "C", text: "The initialization runs again." },
      { id: "D", text: "The loop terminates." }
    ],
    correctOptionId: "A",
    explanation: "In a traditional `for` loop, `continue` proceeds to the loop's update expression and then the next condition check.",
    tags: ["continue", "for-loop", "iteration"]
  },

  {
    id: "javascript-control_flow-q-036",
    quizId: "quiz_javascript_control_flow",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which loop is designed to iterate directly over the values of an iterable such as an array?",
    options: [
      { id: "A", text: "for...of" },
      { id: "B", text: "for...in" },
      { id: "C", text: "switch" },
      { id: "D", text: "while...in" }
    ],
    correctOptionId: "A",
    explanation: "`for...of` iterates over values produced by an iterable.",
    tags: ["for-of", "iteration", "iterables"]
  },

  {
    id: "javascript-control_flow-q-037",
    quizId: "quiz_javascript_control_flow",
    order: 37,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst colors = [\"red\", \"blue\", \"green\"];\n\nfor (const color of colors) {\n  console.log(color);\n}",
    options: [
      { id: "A", text: "red blue green" },
      { id: "B", text: "0 1 2" },
      { id: "C", text: "colors" },
      { id: "D", text: "undefined undefined undefined" }
    ],
    correctOptionId: "A",
    explanation: "`for...of` gives each array value directly, so the strings are printed.",
    tags: ["for-of", "arrays", "iteration"]
  },

  {
    id: "javascript-control_flow-q-038",
    quizId: "quiz_javascript_control_flow",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `for...in` primarily iterate over for an ordinary object?",
    options: [
      { id: "A", text: "Enumerable property keys." },
      { id: "B", text: "Property values only." },
      { id: "C", text: "Prototype objects only." },
      { id: "D", text: "Function return values." }
    ],
    correctOptionId: "A",
    explanation: "`for...in` iterates over enumerable property keys of an object, including inherited enumerable properties unless they are filtered.",
    tags: ["for-in", "objects", "iteration"]
  },

  {
    id: "javascript-control_flow-q-039",
    quizId: "quiz_javascript_control_flow",
    order: 39,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst user = { name: \"Avi\", age: 23 };\n\nfor (const key in user) {\n  console.log(key);\n}",
    options: [
      { id: "A", text: "name age" },
      { id: "B", text: "Avi 23" },
      { id: "C", text: "0 1" },
      { id: "D", text: "user" }
    ],
    correctOptionId: "A",
    explanation: "`for...in` iterates over the object's enumerable property keys, which are `name` and `age`.",
    tags: ["for-in", "objects"]
  },

  {
    id: "javascript-control_flow-q-040",
    quizId: "quiz_javascript_control_flow",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should `for...of` generally be preferred over `for...in` when you want the values of an array?",
    options: [
      { id: "A", text: "`for...of` directly produces array values, while `for...in` produces enumerable keys." },
      { id: "B", text: "`for...in` cannot run on arrays." },
      { id: "C", text: "`for...of` only works with objects." },
      { id: "D", text: "They always produce exactly the same values." }
    ],
    correctOptionId: "A",
    explanation: "`for...of` is designed for iterable values, whereas `for...in` enumerates property keys.",
    tags: ["for-of", "for-in", "arrays"]
  },

  {
    id: "javascript-control_flow-q-041",
    quizId: "quiz_javascript_control_flow",
    order: 41,
    type: "Intermediate",
    difficulty: "Intermediate",
    question: "Which statement can create an intentional infinite loop?",
    options: [
      { id: "A", text: "while (true) { }" },
      { id: "B", text: "while (false) { }" },
      { id: "C", text: "if (true) { }" },
      { id: "D", text: "switch (true) { }" }
    ],
    correctOptionId: "A",
    explanation: "Because `true` never becomes false, `while (true)` continues indefinitely unless something such as `break`, an exception, or external termination stops it.",
    tags: ["while-loop", "infinite-loop"]
  },

  {
    id: "javascript-control_flow-q-042",
    quizId: "quiz_javascript_control_flow",
    order: 42,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nlet i = 0;\n\nwhile (true) {\n  if (i === 2) break;\n  console.log(i);\n  i++;\n}",
    options: [
      { id: "A", text: "0 1" },
      { id: "B", text: "0 1 2" },
      { id: "C", text: "2" },
      { id: "D", text: "Infinite loop" }
    ],
    correctOptionId: "A",
    explanation: "The loop would otherwise be infinite, but `break` terminates it when `i` reaches 2.",
    tags: ["while-loop", "break", "infinite-loop"]
  },

  {
    id: "javascript-control_flow-q-043",
    quizId: "quiz_javascript_control_flow",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a nested loop?",
    options: [
      { id: "A", text: "A loop placed inside another loop." },
      { id: "B", text: "A loop that never ends." },
      { id: "C", text: "A loop that contains only an if statement." },
      { id: "D", text: "A loop declared with const." }
    ],
    correctOptionId: "A",
    explanation: "A nested loop is simply a loop whose body contains another loop.",
    tags: ["nested-loops", "loops"]
  },

  {
    id: "javascript-control_flow-q-044",
    quizId: "quiz_javascript_control_flow",
    order: 44,
    type: "code",
    difficulty: "Intermediate",
    question: "How many times does `\"x\"` get printed?\n\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 2; j++) {\n    console.log(\"x\");\n  }\n}",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "3" },
      { id: "C", text: "5" },
      { id: "D", text: "2" }
    ],
    correctOptionId: "A",
    explanation: "The outer loop runs 3 times and the inner loop runs 2 times for each outer iteration: 3 × 2 = 6.",
    tags: ["nested-loops", "iteration"]
  },

  {
    id: "javascript-control_flow-q-045",
    quizId: "quiz_javascript_control_flow",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a labeled `break` allow you to do?",
    options: [
      { id: "A", text: "Exit a specific labeled outer statement or loop." },
      { id: "B", text: "Restart a labeled loop." },
      { id: "C", text: "Skip a function call." },
      { id: "D", text: "Create a new variable scope automatically." }
    ],
    correctOptionId: "A",
    explanation: "A labeled `break` can terminate the specified labeled statement, which is useful when exiting an outer loop from inside nested loops.",
    tags: ["break", "labels", "nested-loops"]
  },

  {
    id: "javascript-control_flow-q-046",
    quizId: "quiz_javascript_control_flow",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nouter:\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (i === 1 && j === 1) break outer;\n    console.log(i, j);\n  }\n}",
    options: [
      { id: "A", text: "0 0, 0 1, 0 2, 1 0" },
      { id: "B", text: "0 0, 0 1, 0 2, 1 0, 1 1" },
      { id: "C", text: "0 0, 1 0, 2 0" },
      { id: "D", text: "All nine combinations" }
    ],
    correctOptionId: "A",
    explanation: "When `i === 1` and `j === 1`, `break outer` exits the labeled outer loop entirely. The current `1, 1` pair is not printed.",
    tags: ["labeled-break", "nested-loops"]
  },

  {
    id: "javascript-control_flow-q-047",
    quizId: "quiz_javascript_control_flow",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main risk of modifying the counter incorrectly inside a `while` loop?",
    options: [
      { id: "A", text: "The loop may never reach a falsy condition and become infinite." },
      { id: "B", text: "JavaScript automatically converts the loop to a for loop." },
      { id: "C", text: "The loop always executes exactly once." },
      { id: "D", text: "The condition is automatically deleted." }
    ],
    correctOptionId: "A",
    explanation: "If the loop's state never progresses toward making its condition false, the loop can continue indefinitely.",
    tags: ["while-loop", "infinite-loop", "loop-control"]
  },

  {
    id: "javascript-control_flow-q-048",
    quizId: "quiz_javascript_control_flow",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nfor (let i = 0; i < 5; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i);\n}",
    options: [
      { id: "A", text: "1 3" },
      { id: "B", text: "0 2 4" },
      { id: "C", text: "1 2 3 4" },
      { id: "D", text: "0 1 2 3 4" }
    ],
    correctOptionId: "A",
    explanation: "Even numbers make `i % 2 === 0` true, so those iterations are skipped. Only 1 and 3 are logged.",
    tags: ["continue", "modulo", "loop-filtering"]
  },

  {
    id: "javascript-control_flow-q-049",
    quizId: "quiz_javascript_control_flow",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nlet result = 0;\n\nfor (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  result += i;\n}\n\nconsole.log(result);",
    options: [
      { id: "A", text: "12" },
      { id: "B", text: "15" },
      { id: "C", text: "9" },
      { id: "D", text: "3" }
    ],
    correctOptionId: "A",
    explanation: "The loop would normally sum 1+2+3+4+5 = 15. Since 3 is skipped, the result is 1+2+4+5 = 12.",
    tags: ["continue", "accumulator", "loops"]
  },

  {
    id: "javascript-control_flow-q-050",
    quizId: "quiz_javascript_control_flow",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nlet count = 0;\n\nfor (let i = 0; i < 4; i++) {\n  if (i === 1) continue;\n  count++;\n}\n\nconsole.log(count);",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "1" },
      { id: "D", text: "0" }
    ],
    correctOptionId: "A",
    explanation: "The loop has four iterations, but the iteration where `i === 1` skips `count++`. Therefore the increment happens for 0, 2, and 3: three times.",
    tags: ["continue", "for-loop", "iteration"]
  }
];

export default javascriptControlFlowQuestions;