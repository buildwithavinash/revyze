const sqlFundamentalsQuestions = [
  {
    id: "sql-fundamentals-q-001",
    quizId: "quiz_sql_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which SQL keyword is used to retrieve data from a table?",
    options: [
      { id: "A", text: "GET" },
      { id: "B", text: "FETCH" },
      { id: "C", text: "SELECT" },
      { id: "D", text: "READ" }
    ],
    correctOptionId: "C",
    explanation: "SELECT is used to retrieve data from one or more database tables.",
    tags: ["select", "basics"]
  },

  {
    id: "sql-fundamentals-q-002",
    quizId: "quiz_sql_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which query correctly retrieves every column from a `users` table?",
    options: [
      { id: "A", text: "SELECT * FROM users;" },
      { id: "B", text: "GET ALL FROM users;" },
      { id: "C", text: "SELECT ALL users;" },
      { id: "D", text: "READ * FROM users;" }
    ],
    correctOptionId: "A",
    explanation: "The `*` wildcard in SELECT means all columns, so `SELECT * FROM users` returns every column.",
    tags: ["select", "wildcard"]
  },

  {
    id: "sql-fundamentals-q-003",
    quizId: "quiz_sql_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this query return?\n\n```sql\nSELECT name, email FROM users;\n```",
    options: [
      { id: "A", text: "Only the email column" },
      { id: "B", text: "The name and email columns for all rows" },
      { id: "C", text: "Only users whose name is not NULL" },
      { id: "D", text: "The entire users table including hidden columns" }
    ],
    correctOptionId: "B",
    explanation: "The query explicitly selects the `name` and `email` columns for every row because there is no WHERE condition.",
    tags: ["select", "columns"]
  },

  {
    id: "sql-fundamentals-q-004",
    quizId: "quiz_sql_fundamentals",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which clause is used to filter rows based on a condition?",
    options: [
      { id: "A", text: "FILTER" },
      { id: "B", text: "HAVING" },
      { id: "C", text: "ORDER BY" },
      { id: "D", text: "WHERE" }
    ],
    correctOptionId: "D",
    explanation: "WHERE specifies conditions that individual rows must satisfy to appear in the result.",
    tags: ["where", "filtering"]
  },

  {
    id: "sql-fundamentals-q-005",
    quizId: "quiz_sql_fundamentals",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this query return?\n\n```sql\nSELECT *\nFROM users\nWHERE age >= 18;\n```",
    options: [
      { id: "A", text: "Users younger than 18" },
      { id: "B", text: "Only users exactly 18 years old" },
      { id: "C", text: "Users who are 18 or older" },
      { id: "D", text: "All users regardless of age" }
    ],
    correctOptionId: "C",
    explanation: "The `>=` operator means greater than or equal to, so users aged 18 or older are returned.",
    tags: ["where", "comparison"]
  },

  {
    id: "sql-fundamentals-q-006",
    quizId: "quiz_sql_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which operator means 'not equal to' in standard SQL?",
    options: [
      { id: "A", text: "!=" },
      { id: "B", text: "<>" },
      { id: "C", text: "NOT=" },
      { id: "D", text: "><" }
    ],
    correctOptionId: "B",
    explanation: "`<>` is the standard SQL not-equal comparison operator. Many SQL systems also support `!=`.",
    tags: ["where", "operators"]
  },

  {
    id: "sql-fundamentals-q-007",
    quizId: "quiz_sql_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which query finds users whose age is between 18 and 25, inclusive?",
    options: [
      { id: "A", text: "SELECT * FROM users WHERE age BETWEEN 18 AND 25;" },
      { id: "B", text: "SELECT * FROM users WHERE age FROM 18 TO 25;" },
      { id: "C", text: "SELECT * FROM users WHERE age RANGE 18, 25;" },
      { id: "D", text: "SELECT * FROM users WHERE age IN 18 TO 25;" }
    ],
    correctOptionId: "A",
    explanation: "BETWEEN is inclusive of both boundary values in standard SQL.",
    tags: ["where", "between"]
  },

  {
    id: "sql-fundamentals-q-008",
    quizId: "quiz_sql_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which operator is commonly used to match a value against a pattern?",
    options: [
      { id: "A", text: "MATCHES" },
      { id: "B", text: "PATTERN" },
      { id: "C", text: "LIKE" },
      { id: "D", text: "SEARCH" }
    ],
    correctOptionId: "C",
    explanation: "LIKE is used for pattern matching, commonly with `%` and `_` wildcards.",
    tags: ["where", "like", "pattern-matching"]
  },

  {
    id: "sql-fundamentals-q-009",
    quizId: "quiz_sql_fundamentals",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "In a SQL LIKE pattern, what does `%` generally represent?",
    options: [
      { id: "A", text: "Exactly one character" },
      { id: "B", text: "One numeric value" },
      { id: "C", text: "A NULL value" },
      { id: "D", text: "Zero or more characters" }
    ],
    correctOptionId: "D",
    explanation: "The `%` wildcard matches zero or more characters in a LIKE pattern.",
    tags: ["like", "wildcards"]
  },

  {
    id: "sql-fundamentals-q-010",
    quizId: "quiz_sql_fundamentals",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which clause sorts the result of a SELECT query?",
    options: [
      { id: "A", text: "SORT" },
      { id: "B", text: "ORDER BY" },
      { id: "C", text: "GROUP BY" },
      { id: "D", text: "ARRANGE" }
    ],
    correctOptionId: "B",
    explanation: "ORDER BY sorts query results using one or more specified expressions or columns.",
    tags: ["order-by", "sorting"]
  },

  {
    id: "sql-fundamentals-q-011",
    quizId: "quiz_sql_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `ORDER BY name ASC` do?",
    options: [
      { id: "A", text: "Sorts names in ascending order" },
      { id: "B", text: "Sorts names in descending order" },
      { id: "C", text: "Filters names alphabetically" },
      { id: "D", text: "Groups identical names together and removes duplicates" }
    ],
    correctOptionId: "A",
    explanation: "ASC means ascending order. For typical text values, this generally means alphabetical order.",
    tags: ["order-by", "asc"]
  },

  {
    id: "sql-fundamentals-q-012",
    quizId: "quiz_sql_fundamentals",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the default sort direction for ORDER BY in standard SQL?",
    options: [
      { id: "A", text: "DESC" },
      { id: "B", text: "RANDOM" },
      { id: "C", text: "ASC" },
      { id: "D", text: "UNSORTED" }
    ],
    correctOptionId: "C",
    explanation: "If no direction is specified, ORDER BY generally uses ascending order.",
    tags: ["order-by", "asc"]
  },

  {
    id: "sql-fundamentals-q-013",
    quizId: "quiz_sql_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which query returns users sorted from oldest to youngest?",
    options: [
      { id: "A", text: "SELECT * FROM users ORDER BY age ASC;" },
      { id: "B", text: "SELECT * FROM users SORT age DESC;" },
      { id: "C", text: "SELECT * FROM users ORDER age ASC;" },
      { id: "D", text: "SELECT * FROM users ORDER BY age DESC;" }
    ],
    correctOptionId: "D",
    explanation: "Older users have larger age values, so DESC places the largest ages first.",
    tags: ["order-by", "desc"]
  },

  {
    id: "sql-fundamentals-q-014",
    quizId: "quiz_sql_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which query correctly combines filtering and sorting?",
    options: [
      { id: "A", text: "SELECT * FROM users ORDER BY age DESC WHERE age >= 18;" },
      { id: "B", text: "SELECT * FROM users WHERE age >= 18 ORDER BY age DESC;" },
      { id: "C", text: "SELECT * FROM users WHERE age >= 18 SORT age DESC;" },
      { id: "D", text: "SELECT * FROM users ORDER age DESC FILTER age >= 18;" }
    ],
    correctOptionId: "B",
    explanation: "The correct order is SELECT, FROM, WHERE, then ORDER BY.",
    tags: ["select", "where", "order-by"]
  },

  {
    id: "sql-fundamentals-q-015",
    quizId: "quiz_sql_fundamentals",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a common mistake when writing a WHERE condition for NULL values?",
    options: [
      { id: "A", text: "Using `IS NULL`" },
      { id: "B", text: "Using `IS NOT NULL`" },
      { id: "C", text: "Using `= NULL` instead of `IS NULL`" },
      { id: "D", text: "Checking whether a column contains NULL" }
    ],
    correctOptionId: "C",
    explanation: "NULL represents an unknown/missing value and is tested using `IS NULL` or `IS NOT NULL`, not ordinary equality.",
    tags: ["where", "null", "common-mistakes"]
  }
];

export default sqlFundamentalsQuestions;