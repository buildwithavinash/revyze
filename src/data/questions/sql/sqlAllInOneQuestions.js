const sqlAllInOneQuestions = [
  {
    id: "sql-all-in-one-q-001",
    quizId: "quiz_sql_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which SQL statement is used to retrieve data from a table?",
    options: [
      { id: "A", text: "FETCH" },
      { id: "B", text: "SELECT" },
      { id: "C", text: "GET" },
      { id: "D", text: "READ" }
    ],
    correctOptionId: "B",
    explanation: "SELECT is the standard SQL statement used to retrieve data from one or more tables.",
    tags: ["select", "fundamentals"]
  },

  {
    id: "sql-all-in-one-q-002",
    quizId: "quiz_sql_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which clause is used to filter rows before they are returned?",
    options: [
      { id: "A", text: "WHERE" },
      { id: "B", text: "ORDER BY" },
      { id: "C", text: "GROUP BY" },
      { id: "D", text: "HAVING" }
    ],
    correctOptionId: "A",
    explanation: "WHERE filters individual rows based on a condition.",
    tags: ["where", "filtering"]
  },

  {
    id: "sql-all-in-one-q-003",
    quizId: "quiz_sql_all_in_one",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does this query return?\n\n```sql\nSELECT name, age\nFROM users\nWHERE age > 18;\n```",
    options: [
      { id: "A", text: "All users regardless of age" },
      { id: "B", text: "Users whose age is exactly 18" },
      { id: "C", text: "The name and age of users older than 18" },
      { id: "D", text: "Only users younger than 18" }
    ],
    correctOptionId: "C",
    explanation: "WHERE age > 18 keeps only rows where age is greater than 18, while SELECT returns name and age.",
    tags: ["select", "where"]
  },

  {
    id: "sql-all-in-one-q-004",
    quizId: "quiz_sql_all_in_one",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which clause is used to sort query results?",
    options: [
      { id: "A", text: "SORT BY" },
      { id: "B", text: "GROUP BY" },
      { id: "C", text: "ORDER BY" },
      { id: "D", text: "ARRANGE BY" }
    ],
    correctOptionId: "C",
    explanation: "ORDER BY sorts the result set according to one or more columns.",
    tags: ["order-by", "sorting"]
  },

  {
    id: "sql-all-in-one-q-005",
    quizId: "quiz_sql_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does `ORDER BY salary DESC` do?",
    options: [
      { id: "A", text: "Sorts salary from highest to lowest" },
      { id: "B", text: "Sorts salary from lowest to highest" },
      { id: "C", text: "Deletes salaries in descending order" },
      { id: "D", text: "Groups employees by salary" }
    ],
    correctOptionId: "A",
    explanation: "DESC sorts values in descending order, so larger salaries appear first.",
    tags: ["order-by", "desc"]
  },

  {
    id: "sql-all-in-one-q-006",
    quizId: "quiz_sql_all_in_one",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which function counts rows?",
    options: [
      { id: "A", text: "TOTAL()" },
      { id: "B", text: "SUM()" },
      { id: "C", text: "COUNT()" },
      { id: "D", text: "ROWS()" }
    ],
    correctOptionId: "C",
    explanation: "COUNT() is an aggregate function used to count rows or non-NULL values depending on its expression.",
    tags: ["aggregate", "count"]
  },

  {
    id: "sql-all-in-one-q-007",
    quizId: "quiz_sql_all_in_one",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which clause groups rows that have the same values in specified columns?",
    options: [
      { id: "A", text: "GROUP BY" },
      { id: "B", text: "PARTITION BY" },
      { id: "C", text: "ORDER BY" },
      { id: "D", text: "COMBINE BY" }
    ],
    correctOptionId: "A",
    explanation: "GROUP BY combines rows into groups so aggregate functions can be calculated per group.",
    tags: ["group-by", "aggregation"]
  },

  {
    id: "sql-all-in-one-q-008",
    quizId: "quiz_sql_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between WHERE and HAVING?",
    options: [
      { id: "A", text: "WHERE sorts rows while HAVING groups rows" },
      { id: "B", text: "WHERE filters rows before grouping, while HAVING filters groups after aggregation" },
      { id: "C", text: "WHERE is only used with DELETE" },
      { id: "D", text: "HAVING cannot be used with aggregate functions" }
    ],
    correctOptionId: "B",
    explanation: "WHERE generally filters individual rows before grouping, while HAVING filters grouped results.",
    tags: ["where", "having", "group-by"]
  },

  {
    id: "sql-all-in-one-q-009",
    quizId: "quiz_sql_all_in_one",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which JOIN returns only rows where matching records exist in both tables?",
    options: [
      { id: "A", text: "LEFT JOIN" },
      { id: "B", text: "FULL JOIN" },
      { id: "C", text: "RIGHT JOIN" },
      { id: "D", text: "INNER JOIN" }
    ],
    correctOptionId: "D",
    explanation: "INNER JOIN returns rows where the join condition matches in both tables.",
    tags: ["joins", "inner-join"]
  },

  {
    id: "sql-all-in-one-q-010",
    quizId: "quiz_sql_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Suppose `users` contains 100 users and only 80 have orders. What does a LEFT JOIN from users to orders guarantee?",
    options: [
      { id: "A", text: "Only the 80 users with orders appear" },
      { id: "B", text: "All 100 users can appear, with NULL values for missing order matches" },
      { id: "C", text: "Only users without orders appear" },
      { id: "D", text: "The query automatically creates orders for the remaining 20 users" }
    ],
    correctOptionId: "B",
    explanation: "A LEFT JOIN preserves all rows from the left table. Missing matches on the right produce NULL values.",
    tags: ["joins", "left-join"]
  },

  {
    id: "sql-all-in-one-q-011",
    quizId: "quiz_sql_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a primary key?",
    options: [
      { id: "A", text: "A column or set of columns that uniquely identifies each row" },
      { id: "B", text: "A column that must always contain duplicate values" },
      { id: "C", text: "A column used only for sorting" },
      { id: "D", text: "A temporary query result" }
    ],
    correctOptionId: "A",
    explanation: "A primary key uniquely identifies records within a table and cannot contain NULL values.",
    tags: ["primary-key", "relationships"]
  },

  {
    id: "sql-all-in-one-q-012",
    quizId: "quiz_sql_all_in_one",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a foreign key primarily represent?",
    options: [
      { id: "A", text: "A column used only for sorting" },
      { id: "B", text: "A reference from one table to a key in another table" },
      { id: "C", text: "A temporary variable" },
      { id: "D", text: "An automatically generated index in every database" }
    ],
    correctOptionId: "B",
    explanation: "A foreign key establishes a relationship by referencing a key, typically a primary key, in another table.",
    tags: ["foreign-key", "relationships"]
  },

  {
    id: "sql-all-in-one-q-013",
    quizId: "quiz_sql_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement adds new rows to a table?",
    options: [
      { id: "A", text: "APPEND" },
      { id: "B", text: "INSERT" },
      { id: "C", text: "ADD ROW" },
      { id: "D", text: "CREATE ROW" }
    ],
    correctOptionId: "B",
    explanation: "INSERT INTO is used to add new records to a table.",
    tags: ["insert", "data-modification"]
  },

  {
    id: "sql-all-in-one-q-014",
    quizId: "quiz_sql_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement modifies existing rows?",
    options: [
      { id: "A", text: "CHANGE" },
      { id: "B", text: "MODIFY" },
      { id: "C", text: "UPDATE" },
      { id: "D", text: "ALTER ROW" }
    ],
    correctOptionId: "C",
    explanation: "UPDATE changes existing records that satisfy its WHERE condition.",
    tags: ["update", "data-modification"]
  },

  {
    id: "sql-all-in-one-q-015",
    quizId: "quiz_sql_all_in_one",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is forgetting the WHERE clause in an UPDATE potentially dangerous?",
    options: [
      { id: "A", text: "It can update every row in the table" },
      { id: "B", text: "It automatically deletes the table" },
      { id: "C", text: "It prevents the query from executing in all databases" },
      { id: "D", text: "It changes the table's primary key automatically" }
    ],
    correctOptionId: "A",
    explanation: "Without a WHERE condition, UPDATE normally applies to every row in the target table.",
    tags: ["update", "where", "common-mistakes"]
  },

  {
    id: "sql-all-in-one-q-016",
    quizId: "quiz_sql_all_in_one",
    order: 16,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main purpose of an index?",
    options: [
      { id: "A", text: "To guarantee that every query becomes faster" },
      { id: "B", text: "To reduce the number of columns in a table" },
      { id: "C", text: "To help the database locate matching rows more efficiently for suitable queries" },
      { id: "D", text: "To replace primary keys" }
    ],
    correctOptionId: "C",
    explanation: "Indexes provide additional data structures that can make certain lookups, filtering, joins, and sorting operations faster.",
    tags: ["indexes", "performance"]
  },

  {
    id: "sql-all-in-one-q-017",
    quizId: "quiz_sql_all_in_one",
    order: 17,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a potential downside of adding too many indexes?",
    options: [
      { id: "A", text: "Indexes can increase storage usage and make INSERT/UPDATE/DELETE operations more expensive" },
      { id: "B", text: "Indexes prevent SELECT queries from working" },
      { id: "C", text: "Indexes always delete duplicate rows" },
      { id: "D", text: "Indexes disable transactions" }
    ],
    correctOptionId: "A",
    explanation: "Indexes consume storage and must be maintained when indexed data changes, so unnecessary indexes can hurt write performance.",
    tags: ["indexes", "performance"]
  },

  {
    id: "sql-all-in-one-q-018",
    quizId: "quiz_sql_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does `COUNT(*)` generally count?",
    options: [
      { id: "A", text: "Only rows where every column is non-NULL" },
      { id: "B", text: "The number of rows in the result set" },
      { id: "C", text: "Only rows containing numeric values" },
      { id: "D", text: "The number of columns" }
    ],
    correctOptionId: "B",
    explanation: "COUNT(*) counts rows produced by the query, including rows containing NULL values.",
    tags: ["count", "aggregation", "null"]
  },

  {
    id: "sql-all-in-one-q-019",
    quizId: "quiz_sql_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which query correctly finds departments having more than 5 employees?",
    options: [
      { id: "A", text: "SELECT department FROM employees WHERE COUNT(*) > 5 GROUP BY department;" },
      { id: "B", text: "SELECT department FROM employees GROUP BY department WHERE COUNT(*) > 5;" },
      { id: "C", text: "SELECT department FROM employees GROUP BY department HAVING COUNT(*) > 5;" },
      { id: "D", text: "SELECT department FROM employees HAVING COUNT(*) > 5;" }
    ],
    correctOptionId: "C",
    explanation: "COUNT() is an aggregate, so the condition belongs in HAVING after GROUP BY.",
    tags: ["group-by", "having", "count"]
  },

  {
    id: "sql-all-in-one-q-020",
    quizId: "quiz_sql_all_in_one",
    order: 20,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is generally the best first step when optimizing a slow SQL query?",
    options: [
      { id: "A", text: "Add indexes to every column immediately" },
      { id: "B", text: "Rewrite the entire database" },
      { id: "C", text: "Remove all WHERE clauses" },
      { id: "D", text: "Inspect the query and its execution plan to identify the actual bottleneck" }
    ],
    correctOptionId: "D",
    explanation: "Query optimization should be evidence-driven. An execution plan can reveal issues such as full table scans, inefficient joins, or missing/unused indexes.",
    tags: ["query-optimization", "indexes", "performance"]
  }
];

export default sqlAllInOneQuestions;