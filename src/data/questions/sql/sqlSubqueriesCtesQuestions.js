const sqlSubqueriesCtesQuestions = [
  {
    id: "sql-subqueries-ctes-q-001",
    quizId: "quiz_sql_subqueries_ctes",
    order: 1,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a subquery?",
    options: [
      { id: "A", text: "A query nested inside another SQL query" },
      { id: "B", text: "A database backup" },
      { id: "C", text: "A query that can only contain SELECT *" },
      { id: "D", text: "A temporary database server" }
    ],
    correctOptionId: "A",
    explanation:
      "A subquery is a query embedded inside another SQL statement and can be used in places such as WHERE, FROM, or SELECT.",
    tags: ["subquery", "fundamentals"]
  },

  {
    id: "sql-subqueries-ctes-q-002",
    quizId: "quiz_sql_subqueries_ctes",
    order: 2,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Where can a subquery commonly appear?",
    options: [
      { id: "A", text: "Only inside ORDER BY" },
      { id: "B", text: "Only inside INSERT" },
      { id: "C", text: "In places such as WHERE, FROM, and SELECT depending on the query" },
      { id: "D", text: "Only inside CREATE TABLE" }
    ],
    correctOptionId: "C",
    explanation:
      "Subqueries can be used in several parts of SQL statements depending on their purpose and the SQL dialect.",
    tags: ["subquery", "syntax"]
  },

  {
    id: "sql-subqueries-ctes-q-003",
    quizId: "quiz_sql_subqueries_ctes",
    order: 3,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "What does this query attempt to find?\n\n```sql\nSELECT name\nFROM employees\nWHERE salary > (\n  SELECT AVG(salary)\n  FROM employees\n);\n```",
    options: [
      { id: "A", text: "Employees earning exactly the average salary" },
      { id: "B", text: "Employees earning more than the overall average salary" },
      { id: "C", text: "The employee with the lowest salary" },
      { id: "D", text: "The average salary of each department" }
    ],
    correctOptionId: "B",
    explanation:
      "The subquery calculates the overall average salary, and the outer query returns employees whose salary is greater than that value.",
    tags: ["subquery", "avg"]
  },

  {
    id: "sql-subqueries-ctes-q-004",
    quizId: "quiz_sql_subqueries_ctes",
    order: 4,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a scalar subquery?",
    options: [
      { id: "A", text: "A subquery that returns exactly one value" },
      { id: "B", text: "A subquery that must return an entire table" },
      { id: "C", text: "A query containing only numeric columns" },
      { id: "D", text: "A query that cannot be nested" }
    ],
    correctOptionId: "A",
    explanation:
      "A scalar subquery returns a single value and can often be used where a single expression is expected.",
    tags: ["subquery", "scalar"]
  },

  {
    id: "sql-subqueries-ctes-q-005",
    quizId: "quiz_sql_subqueries_ctes",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which operator is commonly used when a subquery returns multiple possible values?",
    options: [
      { id: "A", text: "EQUALS ONLY" },
      { id: "B", text: "IN" },
      { id: "C", text: "SINGLE" },
      { id: "D", text: "MATCH ONE" }
    ],
    correctOptionId: "B",
    explanation:
      "IN checks whether a value matches any value returned by a subquery or listed set.",
    tags: ["subquery", "in"]
  },

  {
    id: "sql-subqueries-ctes-q-006",
    quizId: "quiz_sql_subqueries_ctes",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "What does EXISTS check?",
    options: [
      { id: "A", text: "Whether a database contains any tables" },
      { id: "B", text: "Whether a subquery returns at least one row" },
      { id: "C", text: "Whether a column is numeric" },
      { id: "D", text: "Whether every row is unique" }
    ],
    correctOptionId: "B",
    explanation:
      "EXISTS evaluates whether its subquery produces at least one row.",
    tags: ["exists", "subquery"]
  },

  {
    id: "sql-subqueries-ctes-q-007",
    quizId: "quiz_sql_subqueries_ctes",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a correlated subquery?",
    options: [
      { id: "A", text: "A subquery that references a column from the outer query" },
      { id: "B", text: "A subquery that cannot contain WHERE" },
      { id: "C", text: "A subquery that always returns one row" },
      { id: "D", text: "A subquery that creates a new database" }
    ],
    correctOptionId: "A",
    explanation:
      "A correlated subquery references values from the outer query, meaning its result can depend on the current outer row.",
    tags: ["correlated-subquery", "subquery"]
  },

  {
    id: "sql-subqueries-ctes-q-008",
    quizId: "quiz_sql_subqueries_ctes",
    order: 8,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "Why can correlated subqueries sometimes be expensive?",
    options: [
      { id: "A", text: "They always create duplicate databases" },
      { id: "B", text: "They cannot use indexes" },
      { id: "C", text: "The inner operation may need to be evaluated in relation to many outer rows" },
      { id: "D", text: "They disable SQL transactions" }
    ],
    correctOptionId: "C",
    explanation:
      "Depending on the optimizer and query structure, a correlated subquery may perform work repeatedly for outer rows and become expensive.",
    tags: ["correlated-subquery", "performance"]
  },

  {
    id: "sql-subqueries-ctes-q-009",
    quizId: "quiz_sql_subqueries_ctes",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does CTE stand for?",
    options: [
      { id: "A", text: "Common Table Expression" },
      { id: "B", text: "Computed Table Engine" },
      { id: "C", text: "Central Transaction Expression" },
      { id: "D", text: "Common Transaction Endpoint" }
    ],
    correctOptionId: "A",
    explanation:
      "CTE stands for Common Table Expression and is introduced using the WITH clause.",
    tags: ["cte", "with"]
  },

  {
    id: "sql-subqueries-ctes-q-010",
    quizId: "quiz_sql_subqueries_ctes",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which keyword is used to define a CTE?",
    options: [
      { id: "A", text: "TEMP" },
      { id: "B", text: "WITH" },
      { id: "C", text: "DEFINE" },
      { id: "D", text: "CTE" }
    ],
    correctOptionId: "B",
    explanation:
      "A CTE is introduced with the WITH keyword before the main query.",
    tags: ["cte", "with"]
  },

  {
    id: "sql-subqueries-ctes-q-011",
    quizId: "quiz_sql_subqueries_ctes",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "Which query correctly defines and uses a CTE?",
    options: [
      {
        id: "A",
        text: "WITH active_users AS (SELECT * FROM users WHERE active = true) SELECT * FROM active_users;"
      },
      {
        id: "B",
        text: "CTE active_users = SELECT * FROM users;"
      },
      {
        id: "C",
        text: "CREATE CTE active_users FROM users;"
      },
      {
        id: "D",
        text: "SELECT WITH active_users FROM users;"
      }
    ],
    correctOptionId: "A",
    explanation:
      "The WITH clause defines the CTE, which can then be referenced by the main query.",
    tags: ["cte", "syntax"]
  },

  {
    id: "sql-subqueries-ctes-q-012",
    quizId: "quiz_sql_subqueries_ctes",
    order: 12,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a major benefit of CTEs?",
    options: [
      { id: "A", text: "They guarantee every query will execute faster" },
      { id: "B", text: "They replace all indexes" },
      { id: "C", text: "They can make complex queries easier to organize and read" },
      { id: "D", text: "They permanently store query results in the database" }
    ],
    correctOptionId: "C",
    explanation:
      "CTEs can break complex logic into named intermediate query steps, improving readability and maintainability.",
    tags: ["cte", "readability"]
  },

  {
    id: "sql-subqueries-ctes-q-013",
    quizId: "quiz_sql_subqueries_ctes",
    order: 13,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "Which statement about CTE performance is safest?",
    options: [
      { id: "A", text: "Every CTE is always materialized" },
      { id: "B", text: "Every CTE is always faster than a subquery" },
      { id: "C", text: "CTEs always create permanent temporary tables" },
      { id: "D", text: "Performance depends on the database engine, query, optimizer, and how the CTE is used" }
    ],
    correctOptionId: "D",
    explanation:
      "CTEs are primarily a query-structuring feature, and their execution behavior can vary by database engine and query plan.",
    tags: ["cte", "performance", "query-planning"]
  },

  {
    id: "sql-subqueries-ctes-q-014",
    quizId: "quiz_sql_subqueries_ctes",
    order: 14,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "What type of CTE is particularly useful for hierarchical data such as organizational reporting structures?",
    options: [
      { id: "A", text: "Recursive CTE" },
      { id: "B", text: "Scalar CTE" },
      { id: "C", text: "Sorted CTE" },
      { id: "D", text: "Indexed CTE" }
    ],
    correctOptionId: "A",
    explanation:
      "Recursive CTEs can repeatedly reference their own result to traverse hierarchical or graph-like relationships.",
    tags: ["cte", "recursive", "hierarchical-data"]
  },

  {
    id: "sql-subqueries-ctes-q-015",
    quizId: "quiz_sql_subqueries_ctes",
    order: 15,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "What is a common mistake when using a scalar subquery with an operator such as `=`?",
    options: [
      { id: "A", text: "The subquery returns more than one row when only one value is expected" },
      { id: "B", text: "The subquery contains a SELECT statement" },
      { id: "C", text: "The subquery uses a WHERE clause" },
      { id: "D", text: "The outer query contains a table name" }
    ],
    correctOptionId: "A",
    explanation:
      "A scalar subquery used with `=` must produce a single value. If it returns multiple rows, the query can fail depending on the database system.",
    tags: ["subquery", "scalar", "common-mistakes"]
  }
];

export default sqlSubqueriesCtesQuestions;