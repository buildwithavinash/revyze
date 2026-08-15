const javascriptStringsQuestions = [
  {
    id: "javascript-strings-q-001",
    quizId: "quiz_javascript_strings",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of the following is a valid JavaScript string?",
    options: [
      { id: "A", text: "\"Hello\"" },
      { id: "B", text: "{Hello}" },
      { id: "C", text: "[Hello]" },
      { id: "D", text: "<Hello>" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript strings can be created using single quotes, double quotes, or backticks.",
    tags: ["strings", "syntax"]
  },

  {
    id: "javascript-strings-q-002",
    quizId: "quiz_javascript_strings",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which three delimiters can be used to create JavaScript strings?",
    options: [
      { id: "A", text: "Single quotes, double quotes, and backticks" },
      { id: "B", text: "Parentheses, brackets, and braces" },
      { id: "C", text: "Only double quotes" },
      { id: "D", text: "Only single quotes and parentheses" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript supports `'...'`, `\"...\"`, and template literals using backticks: `` `...` ``.",
    tags: ["strings", "syntax"]
  },

  {
    id: "javascript-strings-q-003",
    quizId: "quiz_javascript_strings",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst message = \"Hello World\";\nconsole.log(message);",
    options: [
      { id: "A", text: "Hello World" },
      { id: "B", text: "\"message\"" },
      { id: "C", text: "undefined" },
      { id: "D", text: "HelloWorld" }
    ],
    correctOptionId: "A",
    explanation: "The variable `message` contains the string `Hello World`, which is printed by `console.log`.",
    tags: ["strings", "variables"]
  },

  {
    id: "javascript-strings-q-004",
    quizId: "quiz_javascript_strings",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst first = \"Hello\";\nconst second = \"World\";\nconsole.log(first + \" \" + second);",
    options: [
      { id: "A", text: "Hello World" },
      { id: "B", text: "HelloWorld" },
      { id: "C", text: "Hello + World" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The `+` operator concatenates strings. The explicit `\" \"` adds a space between the two strings.",
    tags: ["strings", "concatenation"]
  },

  {
    id: "javascript-strings-q-005",
    quizId: "quiz_javascript_strings",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What is the value of `result`?\n\nconst result = \"Java\" + \"Script\";",
    options: [
      { id: "A", text: "JavaScript" },
      { id: "B", text: "Java Script" },
      { id: "C", text: "Java+Script" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "String concatenation joins the two strings directly, producing `JavaScript`.",
    tags: ["strings", "concatenation"]
  },

  {
    id: "javascript-strings-q-006",
    quizId: "quiz_javascript_strings",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the `length` property of a string represent?",
    options: [
      { id: "A", text: "The number of UTF-16 code units in the string." },
      { id: "B", text: "The number of words in the string." },
      { id: "C", text: "The number of spaces in the string." },
      { id: "D", text: "The number of methods available on the string." }
    ],
    correctOptionId: "A",
    explanation: "JavaScript's string `length` property reports the number of UTF-16 code units, which is usually the same as the number of visible characters for simple text.",
    tags: ["strings", "length"]
  },

  {
    id: "javascript-strings-q-007",
    quizId: "quiz_javascript_strings",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"JavaScript\";\nconsole.log(text.length);",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "9" },
      { id: "C", text: "11" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`JavaScript` contains 10 characters, so its length is 10.",
    tags: ["strings", "length"]
  },

  {
    id: "javascript-strings-q-008",
    quizId: "quiz_javascript_strings",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"Hello\";\nconsole.log(text[0]);",
    options: [
      { id: "A", text: "H" },
      { id: "B", text: "e" },
      { id: "C", text: "Hello" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "String indexing starts at 0, so index 0 contains `H`.",
    tags: ["strings", "indexing"]
  },

  {
    id: "javascript-strings-q-009",
    quizId: "quiz_javascript_strings",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"Hello\";\nconsole.log(text[4]);",
    options: [
      { id: "A", text: "o" },
      { id: "B", text: "l" },
      { id: "C", text: "H" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The indexes are H=0, e=1, l=2, l=3, o=4.",
    tags: ["strings", "indexing"]
  },

  {
    id: "javascript-strings-q-010",
    quizId: "quiz_javascript_strings",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "What happens here?\n\nconst text = \"Hello\";\ntext[0] = \"Y\";\nconsole.log(text);",
    options: [
      { id: "A", text: "Hello" },
      { id: "B", text: "Yello" },
      { id: "C", text: "Y" },
      { id: "D", text: "TypeError" }
    ],
    correctOptionId: "A",
    explanation: "JavaScript strings are immutable. Individual characters cannot be changed by assigning to an index.",
    tags: ["strings", "immutability"]
  },

  {
    id: "javascript-strings-q-011",
    quizId: "quiz_javascript_strings",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method converts a string to uppercase?",
    options: [
      { id: "A", text: "toUpperCase()" },
      { id: "B", text: "upper()" },
      { id: "C", text: "uppercase()" },
      { id: "D", text: "makeUpper()" }
    ],
    correctOptionId: "A",
    explanation: "`toUpperCase()` returns a new string with lowercase letters converted to uppercase.",
    tags: ["strings", "toUpperCase"]
  },

  {
    id: "javascript-strings-q-012",
    quizId: "quiz_javascript_strings",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"hello world\";\nconsole.log(text.toUpperCase());",
    options: [
      { id: "A", text: "HELLO WORLD" },
      { id: "B", text: "Hello World" },
      { id: "C", text: "hello world" },
      { id: "D", text: "Hello world" }
    ],
    correctOptionId: "A",
    explanation: "`toUpperCase()` converts all applicable letters to uppercase.",
    tags: ["strings", "toUpperCase"]
  },

  {
    id: "javascript-strings-q-013",
    quizId: "quiz_javascript_strings",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method converts a string to lowercase?",
    options: [
      { id: "A", text: "toLowerCase()" },
      { id: "B", text: "lower()" },
      { id: "C", text: "lowercase()" },
      { id: "D", text: "makeLower()" }
    ],
    correctOptionId: "A",
    explanation: "`toLowerCase()` returns a lowercase version of the string.",
    tags: ["strings", "toLowerCase"]
  },

  {
    id: "javascript-strings-q-014",
    quizId: "quiz_javascript_strings",
    order: 14,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"JAVASCRIPT\";\nconsole.log(text.toLowerCase());",
    options: [
      { id: "A", text: "javascript" },
      { id: "B", text: "JAVASCRIPT" },
      { id: "C", text: "Javascript" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "`toLowerCase()` converts the uppercase letters to lowercase.",
    tags: ["strings", "toLowerCase"]
  },

  {
    id: "javascript-strings-q-015",
    quizId: "quiz_javascript_strings",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method removes whitespace from both the beginning and end of a string?",
    options: [
      { id: "A", text: "trim()" },
      { id: "B", text: "removeSpaces()" },
      { id: "C", text: "clean()" },
      { id: "D", text: "stripAll()" }
    ],
    correctOptionId: "A",
    explanation: "`trim()` removes whitespace from both ends of a string.",
    tags: ["strings", "trim", "whitespace"]
  },

  {
    id: "javascript-strings-q-016",
    quizId: "quiz_javascript_strings",
    order: 16,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst username = \"   avi   \";\nconsole.log(username.trim());",
    options: [
      { id: "A", text: "avi" },
      { id: "B", text: "   avi   " },
      { id: "C", text: "avi   " },
      { id: "D", text: "   avi" }
    ],
    correctOptionId: "A",
    explanation: "`trim()` removes the leading and trailing whitespace while preserving the text itself.",
    tags: ["strings", "trim", "whitespace"]
  },

  {
    id: "javascript-strings-q-017",
    quizId: "quiz_javascript_strings",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method checks whether a string contains a specified substring?",
    options: [
      { id: "A", text: "includes()" },
      { id: "B", text: "contains()" },
      { id: "C", text: "hasText()" },
      { id: "D", text: "exists()" }
    ],
    correctOptionId: "A",
    explanation: "`includes()` returns true when the specified substring occurs within the string.",
    tags: ["strings", "includes"]
  },

  {
    id: "javascript-strings-q-018",
    quizId: "quiz_javascript_strings",
    order: 18,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst email = \"avi@example.com\";\nconsole.log(email.includes(\"@\"));",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "\"@\"" },
      { id: "D", text: "1" }
    ],
    correctOptionId: "A",
    explanation: "The `@` character exists in the string, so `includes()` returns true.",
    tags: ["strings", "includes", "validation"]
  },

  {
    id: "javascript-strings-q-019",
    quizId: "quiz_javascript_strings",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `startsWith()` check?",
    options: [
      { id: "A", text: "Whether a string begins with a specified substring." },
      { id: "B", text: "Whether a string ends with a specified substring." },
      { id: "C", text: "Whether a string contains a substring anywhere." },
      { id: "D", text: "Whether a string has a particular length." }
    ],
    correctOptionId: "A",
    explanation: "`startsWith()` checks whether the string begins with the specified characters.",
    tags: ["strings", "startsWith"]
  },

  {
    id: "javascript-strings-q-020",
    quizId: "quiz_javascript_strings",
    order: 20,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst url = \"https://example.com\";\nconsole.log(url.startsWith(\"https\"));",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "\"https\"" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The string begins with `https`, so `startsWith()` returns true.",
    tags: ["strings", "startsWith", "validation"]
  },

  {
    id: "javascript-strings-q-021",
    quizId: "quiz_javascript_strings",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `endsWith()` check?",
    options: [
      { id: "A", text: "Whether a string ends with a specified substring." },
      { id: "B", text: "Whether a string begins with a specified substring." },
      { id: "C", text: "Whether a string contains only numbers." },
      { id: "D", text: "Whether the string is empty." }
    ],
    correctOptionId: "A",
    explanation: "`endsWith()` checks whether the string ends with the specified sequence of characters.",
    tags: ["strings", "endsWith"]
  },

  {
    id: "javascript-strings-q-022",
    quizId: "quiz_javascript_strings",
    order: 22,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst file = \"photo.png\";\nconsole.log(file.endsWith(\".png\"));",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "\".png\"" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "The filename ends with `.png`, so the method returns true.",
    tags: ["strings", "endsWith", "validation"]
  },

  {
    id: "javascript-strings-q-023",
    quizId: "quiz_javascript_strings",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `indexOf()` return when a substring is not found?",
    options: [
      { id: "A", text: "-1" },
      { id: "B", text: "0" },
      { id: "C", text: "undefined" },
      { id: "D", text: "null" }
    ],
    correctOptionId: "A",
    explanation: "For strings, `indexOf()` returns -1 when the specified substring cannot be found.",
    tags: ["strings", "indexOf", "search"]
  },

  {
    id: "javascript-strings-q-024",
    quizId: "quiz_javascript_strings",
    order: 24,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"JavaScript\";\nconsole.log(text.indexOf(\"Script\"));",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "5" },
      { id: "C", text: "-1" },
      { id: "D", text: "0" }
    ],
    correctOptionId: "A",
    explanation: "`Script` begins at index 4: J=0, a=1, v=2, a=3, S=4.",
    tags: ["strings", "indexOf"]
  },

  {
    id: "javascript-strings-q-025",
    quizId: "quiz_javascript_strings",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method returns the last occurrence of a substring?",
    options: [
      { id: "A", text: "lastIndexOf()" },
      { id: "B", text: "lastFind()" },
      { id: "C", text: "reverseIndex()" },
      { id: "D", text: "endIndexOf()" }
    ],
    correctOptionId: "A",
    explanation: "`lastIndexOf()` searches from the end and returns the index of the last occurrence.",
    tags: ["strings", "lastIndexOf", "search"]
  },

  {
    id: "javascript-strings-q-026",
    quizId: "quiz_javascript_strings",
    order: 26,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst text = \"banana\";\nconsole.log(text.lastIndexOf(\"a\"));",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "3" },
      { id: "C", text: "1" },
      { id: "D", text: "-1" }
    ],
    correctOptionId: "A",
    explanation: "The last `a` in `banana` occurs at index 5.",
    tags: ["strings", "lastIndexOf"]
  },

  {
    id: "javascript-strings-q-027",
    quizId: "quiz_javascript_strings",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `slice(start, end)` do on a string?",
    options: [
      { id: "A", text: "Returns a portion of the string from start up to, but not including, end." },
      { id: "B", text: "Deletes characters from the original string." },
      { id: "C", text: "Replaces the selected characters." },
      { id: "D", text: "Always returns the entire string." }
    ],
    correctOptionId: "A",
    explanation: "`slice()` extracts a portion of a string. The ending index is exclusive, and strings remain unchanged.",
    tags: ["strings", "slice"]
  },

  {
    id: "javascript-strings-q-028",
    quizId: "quiz_javascript_strings",
    order: 28,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"JavaScript\";\nconsole.log(text.slice(0, 4));",
    options: [
      { id: "A", text: "Java" },
      { id: "B", text: "JavaS" },
      { id: "C", text: "Script" },
      { id: "D", text: "Jav" }
    ],
    correctOptionId: "A",
    explanation: "`slice(0, 4)` takes indexes 0 through 3, producing `Java`.",
    tags: ["strings", "slice"]
  },

  {
    id: "javascript-strings-q-029",
    quizId: "quiz_javascript_strings",
    order: 29,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst text = \"JavaScript\";\nconsole.log(text.slice(-6));",
    options: [
      { id: "A", text: "Script" },
      { id: "B", text: "Java" },
      { id: "C", text: "JavaS" },
      { id: "D", text: "ipt" }
    ],
    correctOptionId: "A",
    explanation: "A negative start index counts backward from the end. The final six characters are `Script`.",
    tags: ["strings", "slice", "negative-index"]
  },

  {
    id: "javascript-strings-q-030",
    quizId: "quiz_javascript_strings",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the key difference between `slice()` and `substring()` for strings?",
    options: [
      { id: "A", text: "`slice()` supports negative indexes, while `substring()` treats negative arguments as 0." },
      { id: "B", text: "`substring()` mutates the string while `slice()` does not." },
      { id: "C", text: "`slice()` only works with numbers." },
      { id: "D", text: "They always produce different results." }
    ],
    correctOptionId: "A",
    explanation: "Both can extract portions of strings, but their handling of negative arguments differs.",
    tags: ["strings", "slice", "substring"]
  },

  {
    id: "javascript-strings-q-031",
    quizId: "quiz_javascript_strings",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst text = \"JavaScript\";\nconsole.log(text.substring(4, 10));",
    options: [
      { id: "A", text: "Script" },
      { id: "B", text: "Java" },
      { id: "C", text: "JavaS" },
      { id: "D", text: "ipt" }
    ],
    correctOptionId: "A",
    explanation: "`substring(4, 10)` extracts characters from index 4 through index 9, producing `Script`.",
    tags: ["strings", "substring"]
  },

  {
    id: "javascript-strings-q-032",
    quizId: "quiz_javascript_strings",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `replace()` do when given a plain string as its first argument?",
    options: [
      { id: "A", text: "It replaces the first matching occurrence of that substring." },
      { id: "B", text: "It always replaces every occurrence." },
      { id: "C", text: "It removes the entire string." },
      { id: "D", text: "It mutates the original string." }
    ],
    correctOptionId: "A",
    explanation: "When the search value is a string, `replace()` replaces the first matching occurrence and returns a new string.",
    tags: ["strings", "replace"]
  },

  {
    id: "javascript-strings-q-033",
    quizId: "quiz_javascript_strings",
    order: 33,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"I like cats\";\nconsole.log(text.replace(\"cats\", \"dogs\"));",
    options: [
      { id: "A", text: "I like dogs" },
      { id: "B", text: "I like cats" },
      { id: "C", text: "dogs" },
      { id: "D", text: "I like" }
    ],
    correctOptionId: "A",
    explanation: "`replace()` returns a new string where the first matching `cats` substring is replaced with `dogs`.",
    tags: ["strings", "replace"]
  },

  {
    id: "javascript-strings-q-034",
    quizId: "quiz_javascript_strings",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method splits a string into an array using a specified separator?",
    options: [
      { id: "A", text: "split()" },
      { id: "B", text: "divide()" },
      { id: "C", text: "separate()" },
      { id: "D", text: "explode()" }
    ],
    correctOptionId: "A",
    explanation: "`split()` divides a string according to a separator and returns an array of substrings.",
    tags: ["strings", "split", "arrays"]
  },

  {
    id: "javascript-strings-q-035",
    quizId: "quiz_javascript_strings",
    order: 35,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"red,green,blue\";\nconsole.log(text.split(\",\"));",
    options: [
      { id: "A", text: "[\"red\", \"green\", \"blue\"]" },
      { id: "B", text: "[\"red,green,blue\"]" },
      { id: "C", text: "[\"red\", \"greenblue\"]" },
      { id: "D", text: "red green blue" }
    ],
    correctOptionId: "A",
    explanation: "The comma separator splits the string into three separate array elements.",
    tags: ["strings", "split"]
  },

  {
    id: "javascript-strings-q-036",
    quizId: "quiz_javascript_strings",
    order: 36,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst text = \"hello\";\nconsole.log(text.split(\"\"));",
    options: [
      { id: "A", text: "[\"h\", \"e\", \"l\", \"l\", \"o\"]" },
      { id: "B", text: "[\"hello\"]" },
      { id: "C", text: "hello" },
      { id: "D", text: "[]" }
    ],
    correctOptionId: "A",
    explanation: "Splitting with an empty string separator creates an array containing the string's individual UTF-16 code units.",
    tags: ["strings", "split", "arrays"]
  },

  {
    id: "javascript-strings-q-037",
    quizId: "quiz_javascript_strings",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method repeats a string a specified number of times?",
    options: [
      { id: "A", text: "repeat()" },
      { id: "B", text: "duplicate()" },
      { id: "C", text: "multiply()" },
      { id: "D", text: "copy()" }
    ],
    correctOptionId: "A",
    explanation: "`repeat(count)` returns a new string containing the original string repeated the specified number of times.",
    tags: ["strings", "repeat"]
  },

  {
    id: "javascript-strings-q-038",
    quizId: "quiz_javascript_strings",
    order: 38,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconsole.log(\"ha\".repeat(3));",
    options: [
      { id: "A", text: "hahaha" },
      { id: "B", text: "ha3" },
      { id: "C", text: "ha ha ha" },
      { id: "D", text: "ha" }
    ],
    correctOptionId: "A",
    explanation: "The string `ha` is repeated three times without an automatic separator.",
    tags: ["strings", "repeat"]
  },

  {
    id: "javascript-strings-q-039",
    quizId: "quiz_javascript_strings",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `charAt(index)` return?",
    options: [
      { id: "A", text: "The character at the specified index." },
      { id: "B", text: "The character's Unicode name." },
      { id: "C", text: "The string length." },
      { id: "D", text: "The index of the character." }
    ],
    correctOptionId: "A",
    explanation: "`charAt()` returns the character at the requested UTF-16 index.",
    tags: ["strings", "charAt", "indexing"]
  },

  {
    id: "javascript-strings-q-040",
    quizId: "quiz_javascript_strings",
    order: 40,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst word = \"Developer\";\nconsole.log(word.charAt(3));",
    options: [
      { id: "A", text: "e" },
      { id: "B", text: "v" },
      { id: "C", text: "l" },
      { id: "D", text: "D" }
    ],
    correctOptionId: "A",
    explanation: "The indexes are D=0, e=1, v=2, e=3, so `charAt(3)` returns `e`.",
    tags: ["strings", "charAt"]
  },

  {
    id: "javascript-strings-q-041",
    quizId: "quiz_javascript_strings",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does `charCodeAt()` return?",
    options: [
      { id: "A", text: "The UTF-16 code unit value at the specified index." },
      { id: "B", text: "The number of characters in the string." },
      { id: "C", text: "The index of a character." },
      { id: "D", text: "The string converted to an array." }
    ],
    correctOptionId: "A",
    explanation: "`charCodeAt()` returns the numeric UTF-16 code unit value at the specified index.",
    tags: ["strings", "charCodeAt", "unicode"]
  },

  {
    id: "javascript-strings-q-042",
    quizId: "quiz_javascript_strings",
    order: 42,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconsole.log(\"A\".charCodeAt(0));",
    options: [
      { id: "A", text: "65" },
      { id: "B", text: "97" },
      { id: "C", text: "1" },
      { id: "D", text: "\"A\"" }
    ],
    correctOptionId: "A",
    explanation: "The UTF-16 code unit for uppercase `A` is 65.",
    tags: ["strings", "charCodeAt", "unicode"]
  },

  {
    id: "javascript-strings-q-043",
    quizId: "quiz_javascript_strings",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a template literal?",
    options: [
      { id: "A", text: "A string delimited by backticks that supports interpolation and multiline text." },
      { id: "B", text: "A string that can only contain numbers." },
      { id: "C", text: "A special type of array." },
      { id: "D", text: "A string that cannot contain variables." }
    ],
    correctOptionId: "A",
    explanation: "Template literals use backticks and support `${...}` interpolation as well as multiline strings.",
    tags: ["strings", "template-literals"]
  },

  {
    id: "javascript-strings-q-044",
    quizId: "quiz_javascript_strings",
    order: 44,
    type: "code",
    difficulty: "Beginner",
    question: "What is printed?\n\nconst name = \"Avi\";\nconst message = `Hello, ${name}!`;\nconsole.log(message);",
    options: [
      { id: "A", text: "Hello, Avi!" },
      { id: "B", text: "Hello, ${name}!" },
      { id: "C", text: "Hello, name!" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Template literal interpolation evaluates the expression inside `${}` and inserts its value into the string.",
    tags: ["strings", "template-literals", "interpolation"]
  },

  {
    id: "javascript-strings-q-045",
    quizId: "quiz_javascript_strings",
    order: 45,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst price = 100;\nconst quantity = 3;\n\nconsole.log(`Total: ${price * quantity}`);",
    options: [
      { id: "A", text: "Total: 300" },
      { id: "B", text: "Total: 1003" },
      { id: "C", text: "Total: price * quantity" },
      { id: "D", text: "300" }
    ],
    correctOptionId: "A",
    explanation: "Expressions inside `${}` are evaluated before being inserted. `100 * 3` produces 300.",
    tags: ["strings", "template-literals", "expressions"]
  },

  {
    id: "javascript-strings-q-046",
    quizId: "quiz_javascript_strings",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst name = \"Avi\";\nconst age = 23;\n\nconst profile = `Name: ${name}\nAge: ${age}`;\n\nconsole.log(profile);",
    options: [
      { id: "A", text: "Name: Avi\\nAge: 23" },
      { id: "B", text: "Name: ${name}\\nAge: ${age}" },
      { id: "C", text: "Name: Avi Age: 23" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Template literals preserve line breaks, and both `${name}` and `${age}` are interpolated.",
    tags: ["strings", "template-literals", "multiline"]
  },

  {
    id: "javascript-strings-q-047",
    quizId: "quiz_javascript_strings",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst text = \"  JavaScript Is Powerful  \";\n\nconst result = text\n  .trim()\n  .toLowerCase()\n  .replace(\"powerful\", \"great\");\n\nconsole.log(result);",
    options: [
      { id: "A", text: "javascript is great" },
      { id: "B", text: "JavaScript Is Powerful" },
      { id: "C", text: "javascript is powerful" },
      { id: "D", text: "JavaScript is great" }
    ],
    correctOptionId: "A",
    explanation: "`trim()` removes the surrounding spaces, `toLowerCase()` converts the text to lowercase, and `replace()` changes `powerful` to `great`.",
    tags: ["strings", "method-chaining", "trim", "replace"]
  },

  {
    id: "javascript-strings-q-048",
    quizId: "quiz_javascript_strings",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst input = \"  JavaScript,React,TypeScript  \";\n\nconst technologies = input\n  .trim()\n  .split(\",\")\n  .map(item => item.trim());\n\nconsole.log(technologies);",
    options: [
      { id: "A", text: "[\"JavaScript\", \"React\", \"TypeScript\"]" },
      { id: "B", text: "[\"JavaScript,React,TypeScript\"]" },
      { id: "C", text: "[\"  JavaScript\", \"React\", \"TypeScript  \"]" },
      { id: "D", text: "JavaScript React TypeScript" }
    ],
    correctOptionId: "A",
    explanation: "`trim()` removes the outer spaces, `split()` creates the array, and `map()` removes any whitespace around each individual item.",
    tags: ["strings", "split", "map", "trim", "method-chaining"]
  },

  {
    id: "javascript-strings-q-049",
    quizId: "quiz_javascript_strings",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed?\n\nconst sentence = \"JavaScript makes web development powerful\";\n\nconst words = sentence.split(\" \");\nconst longWords = words.filter(word => word.length > 6);\n\nconsole.log(longWords);",
    options: [
      { id: "A", text: "[\"JavaScript\", \"development\", \"powerful\"]" },
      { id: "B", text: "[\"JavaScript\", \"makes\", \"development\", \"powerful\"]" },
      { id: "C", text: "[\"development\", \"powerful\"]" },
      { id: "D", text: "[\"JavaScript\"]" }
    ],
    correctOptionId: "A",
    explanation: "After splitting the sentence into words, `filter()` keeps words whose length is greater than 6: JavaScript, development, and powerful.",
    tags: ["strings", "split", "filter", "arrays"]
  },

  {
    id: "javascript-strings-q-050",
    quizId: "quiz_javascript_strings",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are validating a user-entered username. Which approach is generally most appropriate before checking whether it starts with a required prefix?",
    options: [
      {
        id: "A",
        text: "Normalize the input appropriately, such as trimming surrounding whitespace, then use startsWith() for the prefix check."
      },
      {
        id: "B",
        text: "Use split() because startsWith() only works on arrays."
      },
      {
        id: "C",
        text: "Use replace() without specifying what should be replaced."
      },
      {
        id: "D",
        text: "Compare the string's length instead of examining its contents."
      }
    ],
    correctOptionId: "A",
    explanation: "String validation often involves normalizing expected input first, such as removing accidental surrounding whitespace, and then using an appropriate predicate such as `startsWith()`.",
    tags: ["strings", "validation", "trim", "startsWith", "best-practices"]
  }
];

export default javascriptStringsQuestions;