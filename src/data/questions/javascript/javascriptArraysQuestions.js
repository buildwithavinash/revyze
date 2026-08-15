const javascriptArraysQuestions = [
  {
    id: "javascript-arrays-q-001",
    quizId: "quiz_javascript_arrays",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which syntax correctly creates an empty JavaScript array?",
    options: [
      { id: "A", text: "const items = [];" },
      { id: "B", text: "const items = {};" },
      { id: "C", text: "const items = ();" },
      { id: "D", text: "const items = < >;" }
    ],
    correctOptionId: "A",
    explanation: "Square brackets create an array literal. `[]` creates an empty array.",
    tags: ["arrays", "creation"]
  },

  {
    id: "javascript-arrays-q-002",
    quizId: "quiz_javascript_arrays",
    order: 2,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst fruits = [\"apple\", \"banana\", \"mango\"];\nconsole.log(fruits.length);",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "2" },
      { id: "C", text: "4" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The array contains three elements, so its `length` is 3.",
    tags: ["arrays", "length"]
  },

  {
    id: "javascript-arrays-q-003",
    quizId: "quiz_javascript_arrays",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the index of the first element in a JavaScript array?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "-1" },
      { id: "D", text: "It depends on the array." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript arrays are zero-indexed, so the first element is at index 0.",
    tags: ["arrays", "indexing"]
  },

  {
    id: "javascript-arrays-q-004",
    quizId: "quiz_javascript_arrays",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst colors = [\"red\", \"blue\", \"green\"];\nconsole.log(colors[1]);",
    options: [
      { id: "A", text: "blue" },
      { id: "B", text: "red" },
      { id: "C", text: "green" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Index 0 is `red`, index 1 is `blue`, and index 2 is `green`.",
    tags: ["arrays", "indexing"]
  },

  {
    id: "javascript-arrays-q-005",
    quizId: "quiz_javascript_arrays",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [10, 20, 30];\nnumbers[1] = 99;\nconsole.log(numbers);",
    options: [
      { id: "A", text: "[10, 99, 30]" },
      { id: "B", text: "[99, 20, 30]" },
      { id: "C", text: "[10, 20, 99]" },
      { id: "D", text: "[10, 20, 30, 99]" }
    ],
    correctOptionId: "A",
    explanation: "Assigning to index 1 replaces the existing value at that position.",
    tags: ["arrays", "mutation", "indexing"]
  },

  {
    id: "javascript-arrays-q-006",
    quizId: "quiz_javascript_arrays",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method adds one or more elements to the end of an array?",
    options: [
      { id: "A", text: "push()" },
      { id: "B", text: "pop()" },
      { id: "C", text: "shift()" },
      { id: "D", text: "unshift()" }
    ],
    correctOptionId: "A",
    explanation: "`push()` adds elements to the end of an array.",
    tags: ["push", "arrays", "mutation"]
  },

  {
    id: "javascript-arrays-q-007",
    quizId: "quiz_javascript_arrays",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [1, 2];\nnumbers.push(3);\nconsole.log(numbers);",
    options: [
      { id: "A", text: "[1, 2, 3]" },
      { id: "B", text: "[3, 1, 2]" },
      { id: "C", text: "[1, 2]" },
      { id: "D", text: "[1, 3, 2]" }
    ],
    correctOptionId: "A",
    explanation: "`push(3)` appends 3 to the end of the array.",
    tags: ["push", "arrays"]
  },

  {
    id: "javascript-arrays-q-008",
    quizId: "quiz_javascript_arrays",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method removes and returns the last element of an array?",
    options: [
      { id: "A", text: "pop()" },
      { id: "B", text: "push()" },
      { id: "C", text: "shift()" },
      { id: "D", text: "slice()" }
    ],
    correctOptionId: "A",
    explanation: "`pop()` removes the last element and returns that removed value.",
    tags: ["pop", "arrays", "mutation"]
  },

  {
    id: "javascript-arrays-q-009",
    quizId: "quiz_javascript_arrays",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [10, 20, 30];\nconst removed = numbers.pop();\nconsole.log(removed);",
    options: [
      { id: "A", text: "30" },
      { id: "B", text: "10" },
      { id: "C", text: "20" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`pop()` removes the final element, which is 30, and returns it.",
    tags: ["pop", "arrays"]
  },

  {
    id: "javascript-arrays-q-010",
    quizId: "quiz_javascript_arrays",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method adds elements to the beginning of an array?",
    options: [
      { id: "A", text: "unshift()" },
      { id: "B", text: "push()" },
      { id: "C", text: "shift()" },
      { id: "D", text: "prepend()" }
    ],
    correctOptionId: "A",
    explanation: "`unshift()` adds one or more elements to the beginning of an array.",
    tags: ["unshift", "arrays"]
  },

  {
    id: "javascript-arrays-q-011",
    quizId: "quiz_javascript_arrays",
    order: 11,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [2, 3];\nnumbers.unshift(1);\nconsole.log(numbers);",
    options: [
      { id: "A", text: "[1, 2, 3]" },
      { id: "B", text: "[2, 3, 1]" },
      { id: "C", text: "[2, 1, 3]" },
      { id: "D", text: "[1]" }
    ],
    correctOptionId: "A",
    explanation: "`unshift(1)` inserts 1 at index 0 and moves the existing elements to the right.",
    tags: ["unshift", "arrays"]
  },

  {
    id: "javascript-arrays-q-012",
    quizId: "quiz_javascript_arrays",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method removes and returns the first element of an array?",
    options: [
      { id: "A", text: "shift()" },
      { id: "B", text: "unshift()" },
      { id: "C", text: "pop()" },
      { id: "D", text: "slice()" }
    ],
    correctOptionId: "A",
    explanation: "`shift()` removes the first element and returns the removed value.",
    tags: ["shift", "arrays"]
  },

  {
    id: "javascript-arrays-q-013",
    quizId: "quiz_javascript_arrays",
    order: 13,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst items = [\"a\", \"b\", \"c\"];\nitems.shift();\nconsole.log(items);",
    options: [
      { id: "A", text: "[\"b\", \"c\"]" },
      { id: "B", text: "[\"a\", \"b\"]" },
      { id: "C", text: "[\"a\", \"c\"]" },
      { id: "D", text: "[]" }
    ],
    correctOptionId: "A",
    explanation: "`shift()` removes the first element, `a`, leaving `b` and `c`.",
    tags: ["shift", "arrays", "mutation"]
  },

  {
    id: "javascript-arrays-q-014",
    quizId: "quiz_javascript_arrays",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method creates a new array containing a portion of an existing array without modifying the original array?",
    options: [
      { id: "A", text: "slice()" },
      { id: "B", text: "splice()" },
      { id: "C", text: "pop()" },
      { id: "D", text: "shift()" }
    ],
    correctOptionId: "A",
    explanation: "`slice()` returns a shallow copy of a selected portion of an array and does not mutate the original array.",
    tags: ["slice", "arrays", "non-mutating"]
  },

  {
    id: "javascript-arrays-q-015",
    quizId: "quiz_javascript_arrays",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [10, 20, 30, 40];\nconsole.log(numbers.slice(1, 3));",
    options: [
      { id: "A", text: "[20, 30]" },
      { id: "B", text: "[20, 30, 40]" },
      { id: "C", text: "[10, 20]" },
      { id: "D", text: "[10, 20, 30]" }
    ],
    correctOptionId: "A",
    explanation: "`slice(1, 3)` starts at index 1 and stops before index 3, selecting 20 and 30.",
    tags: ["slice", "arrays", "indexing"]
  },

  {
    id: "javascript-arrays-q-016",
    quizId: "quiz_javascript_arrays",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method can remove, replace, or insert elements at any position and mutates the original array?",
    options: [
      { id: "A", text: "splice()" },
      { id: "B", text: "slice()" },
      { id: "C", text: "map()" },
      { id: "D", text: "filter()" }
    ],
    correctOptionId: "A",
    explanation: "`splice()` modifies the original array and can delete, insert, or replace elements.",
    tags: ["splice", "arrays", "mutation"]
  },

  {
    id: "javascript-arrays-q-017",
    quizId: "quiz_javascript_arrays",
    order: 17,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [1, 2, 3, 4];\nnumbers.splice(1, 2);\nconsole.log(numbers);",
    options: [
      { id: "A", text: "[1, 4]" },
      { id: "B", text: "[2, 3]" },
      { id: "C", text: "[1, 2, 4]" },
      { id: "D", text: "[1, 3, 4]" }
    ],
    correctOptionId: "A",
    explanation: "`splice(1, 2)` starts at index 1 and removes two elements: 2 and 3.",
    tags: ["splice", "arrays"]
  },

  {
    id: "javascript-arrays-q-018",
    quizId: "quiz_javascript_arrays",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [1, 2, 4];\nnumbers.splice(2, 0, 3);\nconsole.log(numbers);",
    options: [
      { id: "A", text: "[1, 2, 3, 4]" },
      { id: "B", text: "[1, 2, 4, 3]" },
      { id: "C", text: "[1, 3, 2, 4]" },
      { id: "D", text: "[3, 1, 2, 4]" }
    ],
    correctOptionId: "A",
    explanation: "Starting at index 2, `splice` removes zero elements and inserts 3 before the existing 4.",
    tags: ["splice", "arrays", "insertion"]
  },

  {
    id: "javascript-arrays-q-019",
    quizId: "quiz_javascript_arrays",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method checks whether an array contains a particular value?",
    options: [
      { id: "A", text: "includes()" },
      { id: "B", text: "contains()" },
      { id: "C", text: "hasValue()" },
      { id: "D", text: "exists()" }
    ],
    correctOptionId: "A",
    explanation: "`includes()` returns a boolean indicating whether the array contains the specified value.",
    tags: ["includes", "arrays"]
  },

  {
    id: "javascript-arrays-q-020",
    quizId: "quiz_javascript_arrays",
    order: 20,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst fruits = [\"apple\", \"banana\", \"mango\"];\nconsole.log(fruits.includes(\"banana\"));",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "\"banana\"" },
      { id: "D", text: "1" }
    ],
    correctOptionId: "A",
    explanation: "`banana` exists in the array, so `includes()` returns true.",
    tags: ["includes", "arrays"]
  },

  {
    id: "javascript-arrays-q-021",
    quizId: "quiz_javascript_arrays",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method returns the index of the first matching element?",
    options: [
      { id: "A", text: "indexOf()" },
      { id: "B", text: "findIndexOf()" },
      { id: "C", text: "position()" },
      { id: "D", text: "findPosition()" }
    ],
    correctOptionId: "A",
    explanation: "`indexOf()` returns the index of the first occurrence of a specified value, or -1 if it is not found.",
    tags: ["indexOf", "arrays"]
  },

  {
    id: "javascript-arrays-q-022",
    quizId: "quiz_javascript_arrays",
    order: 22,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [5, 10, 15, 10];\nconsole.log(numbers.indexOf(10));",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "3" },
      { id: "C", text: "0" },
      { id: "D", text: "-1" }
    ],
    correctOptionId: "A",
    explanation: "The first occurrence of 10 is at index 1, so `indexOf(10)` returns 1.",
    tags: ["indexOf", "arrays"]
  },

  {
    id: "javascript-arrays-q-023",
    quizId: "quiz_javascript_arrays",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `for...of` provide when iterating over an array?",
    options: [
      { id: "A", text: "The array's values." },
      { id: "B", text: "The array's indexes only." },
      { id: "C", text: "The array's length only." },
      { id: "D", text: "The array object itself." }
    ],
    correctOptionId: "A",
    explanation: "`for...of` iterates over the values produced by an iterable such as an array.",
    tags: ["for-of", "iteration", "arrays"]
  },

  {
    id: "javascript-arrays-q-024",
    quizId: "quiz_javascript_arrays",
    order: 24,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [2, 4, 6];\n\nfor (const number of numbers) {\n  console.log(number);\n}",
    options: [
      { id: "A", text: "2 4 6" },
      { id: "B", text: "0 1 2" },
      { id: "C", text: "1 2 3" },
      { id: "D", text: "numbers" }
    ],
    correctOptionId: "A",
    explanation: "`for...of` directly provides each array value: 2, then 4, then 6.",
    tags: ["for-of", "iteration"]
  },

  {
    id: "javascript-arrays-q-025",
    quizId: "quiz_javascript_arrays",
    order: 25,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which array method executes a callback once for every element and is commonly used when you simply want to perform an action for each item?",
    options: [
      { id: "A", text: "forEach()" },
      { id: "B", text: "map()" },
      { id: "C", text: "reduce()" },
      { id: "D", text: "filter()" }
    ],
    correctOptionId: "A",
    explanation: "`forEach()` invokes a callback for each element. It is intended for side effects rather than producing a transformed array.",
    tags: ["forEach", "iteration"]
  },

  {
    id: "javascript-arrays-q-026",
    quizId: "quiz_javascript_arrays",
    order: 26,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [1, 2, 3];\n\nnumbers.forEach(number => {\n  console.log(number * 2);\n});",
    options: [
      { id: "A", text: "2 4 6" },
      { id: "B", text: "1 2 3" },
      { id: "C", text: "[2, 4, 6]" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The callback runs once for each value and logs twice that value.",
    tags: ["forEach", "arrays", "callbacks"]
  },

  {
    id: "javascript-arrays-q-027",
    quizId: "quiz_javascript_arrays",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of `map()`?",
    options: [
      { id: "A", text: "To create a new array by transforming each element." },
      { id: "B", text: "To remove the first element." },
      { id: "C", text: "To sort the original array." },
      { id: "D", text: "To stop iteration early." }
    ],
    correctOptionId: "A",
    explanation: "`map()` calls a callback for every element and builds a new array from the callback's returned values.",
    tags: ["map", "arrays", "transformation"]
  },

  {
    id: "javascript-arrays-q-028",
    quizId: "quiz_javascript_arrays",
    order: 28,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(number => number * 2);\nconsole.log(doubled);",
    options: [
      { id: "A", text: "[2, 4, 6]" },
      { id: "B", text: "[1, 2, 3]" },
      { id: "C", text: "[2, 3, 4]" },
      { id: "D", text: "6" }
    ],
    correctOptionId: "A",
    explanation: "`map()` transforms each element using `number * 2` and returns a new array.",
    tags: ["map", "arrays"]
  },

  {
    id: "javascript-arrays-q-029",
    quizId: "quiz_javascript_arrays",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Does `map()` normally mutate the original array when its callback only returns transformed values?",
    options: [
      { id: "A", text: "No, `map()` creates a new array." },
      { id: "B", text: "Yes, it always changes every original element." },
      { id: "C", text: "Yes, it removes the original array." },
      { id: "D", text: "Only when the array has numbers." }
    ],
    correctOptionId: "A",
    explanation: "`map()` returns a new array. The original array itself is not changed by the method, although callback code can independently cause mutations.",
    tags: ["map", "immutability", "arrays"]
  },

  {
    id: "javascript-arrays-q-030",
    quizId: "quiz_javascript_arrays",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of `filter()`?",
    options: [
      { id: "A", text: "To create a new array containing elements that pass a condition." },
      { id: "B", text: "To transform every element into a different value." },
      { id: "C", text: "To combine all elements into one value." },
      { id: "D", text: "To sort the array." }
    ],
    correctOptionId: "A",
    explanation: "`filter()` keeps elements for which the callback returns a truthy value.",
    tags: ["filter", "arrays"]
  },

  {
    id: "javascript-arrays-q-031",
    quizId: "quiz_javascript_arrays",
    order: 31,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [1, 2, 3, 4, 5];\nconst result = numbers.filter(number => number % 2 === 0);\nconsole.log(result);",
    options: [
      { id: "A", text: "[2, 4]" },
      { id: "B", text: "[1, 3, 5]" },
      { id: "C", text: "[2, 3, 4]" },
      { id: "D", text: "6" }
    ],
    correctOptionId: "A",
    explanation: "Only 2 and 4 satisfy the even-number condition.",
    tags: ["filter", "arrays", "conditions"]
  },

  {
    id: "javascript-arrays-q-032",
    quizId: "quiz_javascript_arrays",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `reduce()` primarily do?",
    options: [
      { id: "A", text: "It processes array elements to produce a single accumulated result." },
      { id: "B", text: "It always removes elements from the original array." },
      { id: "C", text: "It sorts elements alphabetically." },
      { id: "D", text: "It returns only the first matching element." }
    ],
    correctOptionId: "A",
    explanation: "`reduce()` uses an accumulator to combine array elements into a single result, such as a sum, object, or other value.",
    tags: ["reduce", "arrays", "accumulator"]
  },

  {
    id: "javascript-arrays-q-033",
    quizId: "quiz_javascript_arrays",
    order: 33,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst numbers = [1, 2, 3, 4];\nconst total = numbers.reduce((sum, number) => sum + number, 0);\nconsole.log(total);",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "4" },
      { id: "C", text: "24" },
      { id: "D", text: "0" }
    ],
    correctOptionId: "A",
    explanation: "Starting with 0, reduce accumulates 1 + 2 + 3 + 4, producing 10.",
    tags: ["reduce", "arrays", "sum"]
  },

  {
    id: "javascript-arrays-q-034",
    quizId: "quiz_javascript_arrays",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the second argument passed to `reduce()`?",
    options: [
      { id: "A", text: "It provides the initial accumulator value." },
      { id: "B", text: "It specifies the final array index." },
      { id: "C", text: "It determines the number of callback executions." },
      { id: "D", text: "It sorts the array." }
    ],
    correctOptionId: "A",
    explanation: "The second argument to `reduce()` is used as the initial value of the accumulator.",
    tags: ["reduce", "accumulator"]
  },

  {
    id: "javascript-arrays-q-035",
    quizId: "quiz_javascript_arrays",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst words = [\"a\", \"bb\", \"ccc\"];\nconst total = words.reduce((sum, word) => sum + word.length, 0);\nconsole.log(total);",
    options: [
      { id: "A", text: "6" },
      { id: "B", text: "3" },
      { id: "C", text: "5" },
      { id: "D", text: "\"abbccc\"" }
    ],
    correctOptionId: "A",
    explanation: "The callback adds the lengths: 1 + 2 + 3 = 6.",
    tags: ["reduce", "arrays", "accumulator"]
  },

  {
    id: "javascript-arrays-q-036",
    quizId: "quiz_javascript_arrays",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of `find()`?",
    options: [
      { id: "A", text: "To return the first element that satisfies a condition." },
      { id: "B", text: "To return all matching elements." },
      { id: "C", text: "To return the index of every element." },
      { id: "D", text: "To modify every matching element." }
    ],
    correctOptionId: "A",
    explanation: "`find()` returns the first element for which the callback returns a truthy value.",
    tags: ["find", "arrays"]
  },

  {
    id: "javascript-arrays-q-037",
    quizId: "quiz_javascript_arrays",
    order: 37,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst users = [\n  { name: \"Avi\", age: 23 },\n  { name: \"Sam\", age: 17 },\n  { name: \"John\", age: 30 }\n];\n\nconst user = users.find(user => user.age >= 18);\nconsole.log(user.name);",
    options: [
      { id: "A", text: "Avi" },
      { id: "B", text: "John" },
      { id: "C", text: "Sam" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Avi is the first user whose age is at least 18, so `find()` returns that object.",
    tags: ["find", "arrays", "objects"]
  },

  {
    id: "javascript-arrays-q-038",
    quizId: "quiz_javascript_arrays",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `findIndex()` return?",
    options: [
      { id: "A", text: "The index of the first element that satisfies the condition, or -1 if none does." },
      { id: "B", text: "The matching element itself." },
      { id: "C", text: "An array of all matching indexes." },
      { id: "D", text: "The array length." }
    ],
    correctOptionId: "A",
    explanation: "`findIndex()` searches using a callback and returns the first matching element's index, or -1 if there is no match.",
    tags: ["findIndex", "arrays"]
  },

  {
    id: "javascript-arrays-q-039",
    quizId: "quiz_javascript_arrays",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `some()` return?",
    options: [
      { id: "A", text: "true if at least one element satisfies the condition." },
      { id: "B", text: "true only if every element satisfies the condition." },
      { id: "C", text: "The first matching element." },
      { id: "D", text: "An array of matching elements." }
    ],
    correctOptionId: "A",
    explanation: "`some()` checks whether at least one element passes the callback condition.",
    tags: ["some", "arrays"]
  },

  {
    id: "javascript-arrays-q-040",
    quizId: "quiz_javascript_arrays",
    order: 40,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [1, 3, 5, 8];\nconsole.log(numbers.some(number => number % 2 === 0));",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "8" },
      { id: "D", text: "[8]" }
    ],
    correctOptionId: "A",
    explanation: "8 is even, so at least one element satisfies the condition and `some()` returns true.",
    tags: ["some", "arrays", "conditions"]
  },

  {
    id: "javascript-arrays-q-041",
    quizId: "quiz_javascript_arrays",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `every()` return?",
    options: [
      { id: "A", text: "true only if every element satisfies the condition." },
      { id: "B", text: "true if at least one element satisfies the condition." },
      { id: "C", text: "The first matching element." },
      { id: "D", text: "An array of matching elements." }
    ],
    correctOptionId: "A",
    explanation: "`every()` returns true only when the callback returns a truthy value for every element.",
    tags: ["every", "arrays"]
  },

  {
    id: "javascript-arrays-q-042",
    quizId: "quiz_javascript_arrays",
    order: 42,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [2, 4, 6, 8];\nconsole.log(numbers.every(number => number % 2 === 0));",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "2" },
      { id: "D", text: "[2, 4, 6, 8]" }
    ],
    correctOptionId: "A",
    explanation: "Every element is even, so the condition succeeds for all elements.",
    tags: ["every", "arrays", "conditions"]
  },

  {
    id: "javascript-arrays-q-043",
    quizId: "quiz_javascript_arrays",
    order: 43,
    type: "Intermediate",
    difficulty: "Intermediate",
    question: "Which statement about `sort()` is correct?",
    options: [
      { id: "A", text: "It sorts the array in place and, by default, compares elements as strings." },
      { id: "B", text: "It always returns a new sorted array without modifying the original." },
      { id: "C", text: "It always sorts numbers numerically without a callback." },
      { id: "D", text: "It can only sort strings." }
    ],
    correctOptionId: "A",
    explanation: "`sort()` mutates the array. Without a compare function, elements are generally sorted according to their string representations.",
    tags: ["sort", "arrays", "mutation"]
  },

  {
    id: "javascript-arrays-q-044",
    quizId: "quiz_javascript_arrays",
    order: 44,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [10, 2, 30, 4];\nnumbers.sort();\nconsole.log(numbers);",
    options: [
      { id: "A", text: "[10, 2, 30, 4]" },
      { id: "B", text: "[2, 4, 10, 30]" },
      { id: "C", text: "[30, 10, 4, 2]" },
      { id: "D", text: "[2, 10, 30, 4]" }
    ],
    correctOptionId: "A",
    explanation: "Default `sort()` compares elements as strings, so the lexical order is `\"10\"`, `\"2\"`, `\"30\"`, `\"4\"`.",
    tags: ["sort", "arrays", "strings"]
  },

  {
    id: "javascript-arrays-q-045",
    quizId: "quiz_javascript_arrays",
    order: 45,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst numbers = [10, 2, 30, 4];\nnumbers.sort((a, b) => a - b);\nconsole.log(numbers);",
    options: [
      { id: "A", text: "[2, 4, 10, 30]" },
      { id: "B", text: "[10, 2, 30, 4]" },
      { id: "C", text: "[30, 10, 4, 2]" },
      { id: "D", text: "[4, 30, 2, 10]" }
    ],
    correctOptionId: "A",
    explanation: "The compare function `a - b` sorts numbers in ascending numeric order.",
    tags: ["sort", "arrays", "compare-function"]
  },

  {
    id: "javascript-arrays-q-046",
    quizId: "quiz_javascript_arrays",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst numbers = [1, 2, 3, 4, 5];\n\nconst result = numbers\n  .filter(number => number % 2 !== 0)\n  .map(number => number * 10);\n\nconsole.log(result);",
    options: [
      { id: "A", text: "[10, 30, 50]" },
      { id: "B", text: "[20, 40]" },
      { id: "C", text: "[1, 3, 5]" },
      { id: "D", text: "[10, 20, 30, 40, 50]" }
    ],
    correctOptionId: "A",
    explanation: "`filter()` first keeps 1, 3, and 5. `map()` then transforms them into 10, 30, and 50.",
    tags: ["filter", "map", "method-chaining"]
  },

  {
    id: "javascript-arrays-q-047",
    quizId: "quiz_javascript_arrays",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst products = [\n  { name: \"A\", price: 10 },\n  { name: \"B\", price: 25 },\n  { name: \"C\", price: 15 }\n];\n\nconst total = products\n  .filter(product => product.price >= 15)\n  .reduce((sum, product) => sum + product.price, 0);\n\nconsole.log(total);",
    options: [
      { id: "A", text: "40" },
      { id: "B", text: "50" },
      { id: "C", text: "25" },
      { id: "D", text: "15" }
    ],
    correctOptionId: "A",
    explanation: "`filter()` keeps B and C. Their prices are 25 and 15, which `reduce()` adds to produce 40.",
    tags: ["filter", "reduce", "arrays", "objects"]
  },

  {
    id: "javascript-arrays-q-048",
    quizId: "quiz_javascript_arrays",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst numbers = [1, 2, 3];\n\nconst result = numbers.reduce((acc, number) => {\n  acc.push(number * 2);\n  return acc;\n}, []);\n\nconsole.log(result);",
    options: [
      { id: "A", text: "[2, 4, 6]" },
      { id: "B", text: "[1, 2, 3]" },
      { id: "C", text: "6" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The accumulator starts as an empty array. Each iteration pushes the doubled value into it, producing `[2, 4, 6]`.",
    tags: ["reduce", "arrays", "accumulator"]
  },

  {
    id: "javascript-arrays-q-049",
    quizId: "quiz_javascript_arrays",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst numbers = [1, 2, 3, 4];\n\nconst result = numbers\n  .map(number => number * 2)\n  .filter(number => number > 4);\n\nconsole.log(result);",
    options: [
      { id: "A", text: "[6, 8]" },
      { id: "B", text: "[2, 4]" },
      { id: "C", text: "[1, 2, 3, 4]" },
      { id: "D", text: "[4, 6, 8]" }
    ],
    correctOptionId: "A",
    explanation: "`map()` produces `[2, 4, 6, 8]`. `filter()` then keeps values greater than 4: 6 and 8.",
    tags: ["map", "filter", "method-chaining"]
  },

  {
    id: "javascript-arrays-q-050",
    quizId: "quiz_javascript_arrays",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is generally best when processing an array to produce transformed data without unnecessarily changing the original array?",
    options: [
      {
        id: "A",
        text: "Use non-mutating methods such as map, filter, slice, or reduce as appropriate."
      },
      {
        id: "B",
        text: "Always use splice and sort because they are faster."
      },
      {
        id: "C",
        text: "Always modify the original array directly."
      },
      {
        id: "D",
        text: "Convert the array to a string before every operation."
      }
    ],
    correctOptionId: "A",
    explanation: "Methods such as `map`, `filter`, `slice`, and `reduce` are useful for producing derived results without directly mutating the source array. This is especially valuable when predictable state management and immutability matter.",
    tags: ["arrays", "immutability", "map", "filter", "reduce", "best-practices"]
  }
];

export default javascriptArraysQuestions;