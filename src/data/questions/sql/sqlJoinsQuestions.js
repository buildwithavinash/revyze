const sqlJoinsQuestions = [
  {
    id: "sql-joins-q-001",
    quizId: "quiz_sql_joins",
    order: 1,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of a JOIN in SQL?",
    options: [
      { id: "A", text: "To sort rows alphabetically" },
      { id: "B", text: "To delete duplicate records" },
      { id: "C", text: "To combine related data from multiple tables" },
      { id: "D", text: "To create a new database" }
    ],
    correctOptionId: "C",
    explanation:
      "JOIN is used to combine rows from two or more related tables using a matching condition.",
    tags: ["joins", "fundamentals"]
  },

  {
    id: "sql-joins-q-002",
    quizId: "quiz_sql_joins",
    order: 2,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which JOIN returns only rows that have matching values in both tables?",
    options: [
      { id: "A", text: "INNER JOIN" },
      { id: "B", text: "LEFT JOIN" },
      { id: "C", text: "RIGHT JOIN" },
      { id: "D", text: "FULL JOIN" }
    ],
    correctOptionId: "A",
    explanation:
      "INNER JOIN returns only records where the join condition matches in both tables.",
    tags: ["inner-join"]
  },

  {
    id: "sql-joins-q-003",
    quizId: "quiz_sql_joins",
    order: 3,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which JOIN keeps every row from the left table even if no matching row exists in the right table?",
    options: [
      { id: "A", text: "RIGHT JOIN" },
      { id: "B", text: "INNER JOIN" },
      { id: "C", text: "CROSS JOIN" },
      { id: "D", text: "LEFT JOIN" }
    ],
    correctOptionId: "D",
    explanation:
      "LEFT JOIN preserves every row from the left table and fills unmatched right-side values with NULL.",
    tags: ["left-join"]
  },

  {
    id: "sql-joins-q-004",
    quizId: "quiz_sql_joins",
    order: 4,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "Suppose `employees` is the left table and `departments` is the right table. Which JOIN keeps all employees even if some employees have no department?",
    options: [
      { id: "A", text: "INNER JOIN" },
      { id: "B", text: "LEFT JOIN" },
      { id: "C", text: "RIGHT JOIN" },
      { id: "D", text: "FULL JOIN" }
    ],
    correctOptionId: "B",
    explanation:
      "Because employees is the left table, LEFT JOIN ensures every employee appears in the result.",
    tags: ["left-join", "relationships"]
  },

  {
    id: "sql-joins-q-005",
    quizId: "quiz_sql_joins",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a RIGHT JOIN primarily preserve?",
    options: [
      { id: "A", text: "Only matching rows" },
      { id: "B", text: "Only unmatched rows from both tables" },
      { id: "C", text: "Every row from the right table" },
      { id: "D", text: "Every row from the left table" }
    ],
    correctOptionId: "C",
    explanation:
      "RIGHT JOIN preserves all rows from the right table and matches rows from the left when possible.",
    tags: ["right-join"]
  },

  {
    id: "sql-joins-q-006",
    quizId: "quiz_sql_joins",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "Which JOIN returns all matching rows plus unmatched rows from both tables?",
    options: [
      { id: "A", text: "FULL OUTER JOIN" },
      { id: "B", text: "INNER JOIN" },
      { id: "C", text: "LEFT JOIN" },
      { id: "D", text: "CROSS JOIN" }
    ],
    correctOptionId: "A",
    explanation:
      "FULL OUTER JOIN includes matching rows and unmatched rows from both tables.",
    tags: ["full-join"]
  },

  {
    id: "sql-joins-q-007",
    quizId: "quiz_sql_joins",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "What is usually written inside the ON clause of a JOIN?",
    options: [
      { id: "A", text: "The columns to sort" },
      { id: "B", text: "The aggregate function" },
      { id: "C", text: "The database name" },
      { id: "D", text: "The matching condition between related columns" }
    ],
    correctOptionId: "D",
    explanation:
      "The ON clause defines how rows from one table relate to rows in another table.",
    tags: ["join-condition", "on"]
  },

  {
    id: "sql-joins-q-008",
    quizId: "quiz_sql_joins",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "Consider these tables:\n\n`users(id, name)`\n`orders(id, user_id, total)`\n\nWhich condition correctly joins orders with users?",
    options: [
      { id: "A", text: "users.name = orders.total" },
      { id: "B", text: "users.id = orders.user_id" },
      { id: "C", text: "users.id = orders.id" },
      { id: "D", text: "users.name = orders.user_id" }
    ],
    correctOptionId: "B",
    explanation:
      "The foreign key `orders.user_id` references `users.id`, making this the correct relationship.",
    tags: ["foreign-key", "join-condition"]
  },

  {
    id: "sql-joins-q-009",
    quizId: "quiz_sql_joins",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "What does an INNER JOIN return when there are no matching rows between two tables?",
    options: [
      { id: "A", text: "All rows from the left table" },
      { id: "B", text: "All rows from the right table" },
      { id: "C", text: "An empty result for those unmatched rows" },
      { id: "D", text: "Rows filled with zero values" }
    ],
    correctOptionId: "C",
    explanation:
      "INNER JOIN excludes unmatched rows entirely, so only successful matches appear.",
    tags: ["inner-join"]
  },

  {
    id: "sql-joins-q-010",
    quizId: "quiz_sql_joins",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "Which JOIN is most appropriate if you want to list every customer, including those who have never placed an order?",
    options: [
      { id: "A", text: "INNER JOIN customers → orders" },
      { id: "B", text: "RIGHT JOIN orders → customers" },
      { id: "C", text: "CROSS JOIN customers → orders" },
      { id: "D", text: "LEFT JOIN customers → orders" }
    ],
    correctOptionId: "D",
    explanation:
      "LEFT JOIN from customers to orders keeps every customer, including customers without matching orders.",
    tags: ["left-join", "real-world"]
  },

  {
    id: "sql-joins-q-011",
    quizId: "quiz_sql_joins",
    order: 11,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a CROSS JOIN used for?",
    options: [
      { id: "A", text: "Producing every possible combination of rows between two tables" },
      { id: "B", text: "Returning only duplicate rows" },
      { id: "C", text: "Filtering NULL values" },
      { id: "D", text: "Grouping related records" }
    ],
    correctOptionId: "A",
    explanation:
      "CROSS JOIN creates the Cartesian product of two tables, producing every possible row combination.",
    tags: ["cross-join", "advanced"]
  },

  {
    id: "sql-joins-q-012",
    quizId: "quiz_sql_joins",
    order: 12,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "A LEFT JOIN returns NULL for columns from the right table. What does that usually indicate?",
    options: [
      { id: "A", text: "The left row was deleted" },
      { id: "B", text: "No matching row existed in the right table" },
      { id: "C", text: "The query contains a syntax error" },
      { id: "D", text: "The primary key is duplicated" }
    ],
    correctOptionId: "B",
    explanation:
      "NULL values on the right side usually mean the left row had no matching related record.",
    tags: ["left-join", "null"]
  },

  {
    id: "sql-joins-q-013",
    quizId: "quiz_sql_joins",
    order: 13,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "Which query correctly joins employees with departments using department_id?",
    options: [
      {
        id: "A",
        text: "SELECT * FROM employees JOIN departments;"
      },
      {
        id: "B",
        text: "SELECT * FROM employees INNER JOIN departments WHERE employees.department_id = departments.id;"
      },
      {
        id: "C",
        text: "SELECT * FROM employees INNER JOIN departments ON employees.department_id = departments.id;"
      },
      {
        id: "D",
        text: "SELECT * FROM employees GROUP JOIN departments ON department_id;"
      }
    ],
    correctOptionId: "C",
    explanation:
      "JOIN relationships belong in the ON clause, which defines the matching columns between the tables.",
    tags: ["inner-join", "on", "syntax"]
  },

  {
    id: "sql-joins-q-014",
    quizId: "quiz_sql_joins",
    order: 14,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "Why can joining tables sometimes produce duplicate-looking rows?",
    options: [
      { id: "A", text: "JOIN automatically duplicates every table" },
      { id: "B", text: "SQL always repeats primary keys" },
      { id: "C", text: "Indexes create duplicate rows" },
      { id: "D", text: "One row can legitimately match multiple related rows in another table" }
    ],
    correctOptionId: "D",
    explanation:
      "In one-to-many relationships, a single row from one table may match several rows in another, creating multiple result rows.",
    tags: ["joins", "one-to-many", "relationships"]
  },

  {
    id: "sql-joins-q-015",
    quizId: "quiz_sql_joins",
    order: 15,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "You want to find customers who have never placed an order. Which approach is commonly used?",
    options: [
      {
        id: "A",
        text: "INNER JOIN customers and orders, then filter"
      },
      {
        id: "B",
        text: "LEFT JOIN customers to orders and filter WHERE orders.id IS NULL"
      },
      {
        id: "C",
        text: "RIGHT JOIN orders to customers and filter WHERE customers.id IS NOT NULL"
      },
      {
        id: "D",
        text: "CROSS JOIN both tables and count rows"
      }
    ],
    correctOptionId: "B",
    explanation:
      "A LEFT JOIN followed by checking for NULL on the right table is a common pattern for finding records with no related match.",
    tags: ["left-join", "null", "interview"]
  }
];

export default sqlJoinsQuestions;