const sqlWindowFunctionsQuestions = [
  {
    id: "sql-window-functions-q-001",
    quizId: "quiz_sql_window_functions",
    order: 1,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main characteristic of a SQL window function?",
    options: [
      { id: "A", text: "It permanently modifies the table" },
      { id: "B", text: "It performs a calculation across related rows while generally preserving individual rows in the result" },
      { id: "C", text: "It can only be used with GROUP BY" },
      { id: "D", text: "It always removes duplicate rows" }
    ],
    correctOptionId: "B",
    explanation: "Unlike GROUP BY, window functions calculate values across related rows without collapsing those rows into a single result row.",
    tags: ["window-functions", "fundamentals"]
  },

  {
    id: "sql-window-functions-q-002",
    quizId: "quiz_sql_window_functions",
    order: 2,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which keyword is commonly required to define the window for a window function?",
    options: [
      { id: "A", text: "OVER" },
      { id: "B", text: "WINDOWED" },
      { id: "C", text: "RANGE BY" },
      { id: "D", text: "WITHIN" }
    ],
    correctOptionId: "A",
    explanation: "The OVER clause defines the window over which the function operates.",
    tags: ["over", "window-functions"]
  },

  {
    id: "sql-window-functions-q-003",
    quizId: "quiz_sql_window_functions",
    order: 3,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does PARTITION BY do inside an OVER clause?",
    options: [
      { id: "A", text: "Deletes rows from each partition" },
      { id: "B", text: "Sorts the entire final result set" },
      { id: "C", text: "Divides rows into groups for the window calculation without collapsing them" },
      { id: "D", text: "Creates permanent database partitions" }
    ],
    correctOptionId: "C",
    explanation: "PARTITION BY divides the rows into independent groups for the window calculation while preserving the individual result rows.",
    tags: ["partition-by", "over"]
  },

  {
    id: "sql-window-functions-q-004",
    quizId: "quiz_sql_window_functions",
    order: 4,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does ORDER BY inside OVER() primarily control?",
    options: [
      { id: "A", text: "The physical storage order of the table" },
      { id: "B", text: "The ordering used by the window calculation" },
      { id: "C", text: "The database server's operating system" },
      { id: "D", text: "The order in which columns are created" }
    ],
    correctOptionId: "B",
    explanation: "ORDER BY within OVER() determines the logical order in which the window function evaluates rows.",
    tags: ["over", "order-by"]
  },

  {
    id: "sql-window-functions-q-005",
    quizId: "quiz_sql_window_functions",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does ROW_NUMBER() return?",
    options: [
      { id: "A", text: "The total number of rows in the table" },
      { id: "B", text: "The number of columns in a table" },
      { id: "C", text: "The number of duplicate values" },
      { id: "D", text: "A unique sequential number for each row within the window" }
    ],
    correctOptionId: "D",
    explanation: "ROW_NUMBER() assigns sequential numbers to rows according to the ordering specified in the window.",
    tags: ["row-number", "ranking"]
  },

  {
    id: "sql-window_functions-q-006",
    quizId: "quiz_sql_window_functions",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when ROW_NUMBER() is used with PARTITION BY department?",
    options: [
      { id: "A", text: "Numbering restarts for each department" },
      { id: "B", text: "All departments receive the same row number" },
      { id: "C", text: "Departments are permanently separated into tables" },
      { id: "D", text: "The department column is removed" }
    ],
    correctOptionId: "A",
    explanation: "PARTITION BY creates independent windows, so ROW_NUMBER() starts again from 1 within each department.",
    tags: ["row-number", "partition-by"]
  },

  {
    id: "sql-window-functions-q-007",
    quizId: "quiz_sql_window_functions",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an important difference between RANK() and ROW_NUMBER()?",
    options: [
      { id: "A", text: "RANK() cannot use ORDER BY" },
      { id: "B", text: "ROW_NUMBER() only works with text" },
      { id: "C", text: "RANK() can assign the same rank to tied rows, while ROW_NUMBER() assigns distinct row numbers" },
      { id: "D", text: "They are always identical" }
    ],
    correctOptionId: "C",
    explanation: "RANK() gives tied rows the same rank and leaves gaps after ties, while ROW_NUMBER() always assigns a different sequential number to each row.",
    tags: ["rank", "row-number"]
  },

  {
    id: "sql-window-functions-q-008",
    quizId: "quiz_sql_window_functions",
    order: 8,
    type: "mcq",
    difficulty: "Advanced",
    question: "How does DENSE_RANK() differ from RANK()?",
    options: [
      { id: "A", text: "DENSE_RANK() cannot handle ties" },
      { id: "B", text: "DENSE_RANK() does not leave gaps after tied rankings" },
      { id: "C", text: "DENSE_RANK() always returns random numbers" },
      { id: "D", text: "DENSE_RANK() can only rank text values" }
    ],
    correctOptionId: "B",
    explanation: "RANK() may skip numbers after ties, while DENSE_RANK() continues with the next consecutive rank.",
    tags: ["dense-rank", "rank"]
  },

  {
    id: "sql-window-functions-q-009",
    quizId: "quiz_sql_window_functions",
    order: 9,
    type: "mcq",
    difficulty: "Advanced",
    question: "Suppose salaries are 100, 100, 90. What ranks would RANK() generally assign when ordering salary DESC?",
    options: [
      { id: "A", text: "1, 2, 3" },
      { id: "B", text: "1, 1, 3" },
      { id: "C", text: "1, 1, 2" },
      { id: "D", text: "2, 2, 1" }
    ],
    correctOptionId: "B",
    explanation: "The two salaries of 100 tie at rank 1. Because two rows occupy that rank, the next rank is 3.",
    tags: ["rank", "ties"]
  },

  {
    id: "sql-window-functions-q-010",
    quizId: "quiz_sql_window_functions",
    order: 10,
    type: "mcq",
    difficulty: "Advanced",
    question: "What ranks would DENSE_RANK() generally assign to salaries 100, 100, 90 when ordering DESC?",
    options: [
      { id: "A", text: "1, 2, 3" },
      { id: "B", text: "1, 1, 3" },
      { id: "C", text: "2, 2, 1" },
      { id: "D", text: "1, 1, 2" }
    ],
    correctOptionId: "D",
    explanation: "The tied 100 values receive rank 1, and 90 receives the next consecutive rank, 2.",
    tags: ["dense-rank", "ties"]
  },

  {
    id: "sql-window-functions-q-011",
    quizId: "quiz_sql_window_functions",
    order: 11,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which query pattern can be used to calculate a running total?",
    options: [
      { id: "A", text: "SUM(amount) OVER (ORDER BY date)" },
      { id: "B", text: "SUM(amount) GROUP ONLY BY date" },
      { id: "C", text: "RUNNING_SUM(amount) WITHOUT OVER()" },
      { id: "D", text: "TOTAL(amount) ORDER BY date" }
    ],
    correctOptionId: "A",
    explanation: "SUM() used as a window function with an appropriate ORDER BY can calculate a cumulative/running total.",
    tags: ["running-total", "sum", "over"]
  },

  {
    id: "sql-window-functions-q-012",
    quizId: "quiz_sql_window_functions",
    order: 12,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might a window function be preferred over GROUP BY for ranking employees?",
    options: [
      { id: "A", text: "GROUP BY cannot process numeric values" },
      { id: "B", text: "Window functions can calculate the rank while retaining each employee row" },
      { id: "C", text: "Window functions permanently store ranks in the database" },
      { id: "D", text: "GROUP BY always deletes employee records" }
    ],
    correctOptionId: "B",
    explanation: "GROUP BY collapses rows into groups, while window functions can calculate ranking information while retaining the underlying rows.",
    tags: ["window-functions", "group-by", "ranking"]
  },

  {
    id: "sql-window-functions-q-013",
    quizId: "quiz_sql_window_functions",
    order: 13,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which query finds the highest-paid employee in each department using ROW_NUMBER()?",
    options: [
      {
        id: "A",
        text: "SELECT * FROM employees WHERE ROW_NUMBER() = 1;"
      },
      {
        id: "B",
        text: "SELECT *, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn FROM employees;"
      },
      {
        id: "C",
        text: "SELECT department, MAX(salary) OVER () FROM employees;"
      },
      {
        id: "D",
        text: "SELECT * FROM employees GROUP BY ROW_NUMBER(department);"
      }
    ],
    correctOptionId: "B",
    explanation: "The window expression assigns row numbers within each department. An outer query can then filter for rn = 1.",
    tags: ["row-number", "partition-by", "top-n"]
  },

  {
    id: "sql-window-functions-q-014",
    quizId: "quiz_sql_window_functions",
    order: 14,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can't you generally use a window function directly in a WHERE clause of the same SELECT level?",
    options: [
      { id: "A", text: "Window functions only work on strings" },
      { id: "B", text: "WHERE runs after window functions" },
      { id: "C", text: "Window functions are evaluated at a later logical stage than WHERE" },
      { id: "D", text: "WHERE cannot contain aliases" }
    ],
    correctOptionId: "C",
    explanation: "Window functions are evaluated after the WHERE filtering stage. A subquery or CTE is commonly used when you need to filter based on a window-function result.",
    tags: ["window-functions", "where", "query-order"]
  },

  {
    id: "sql-window-functions-q-015",
    quizId: "quiz_sql_window_functions",
    order: 15,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common mistake when using ROW_NUMBER() to find the top employee in each department?",
    options: [
      { id: "A", text: "Using PARTITION BY department" },
      { id: "B", text: "Ordering salary in descending order" },
      { id: "C", text: "Filtering the generated row number in an outer query" },
      { id: "D", text: "Using an outer query or CTE to filter the window result" }
    ],
    correctOptionId: "C",
    explanation: "The key mistake is trying to filter ROW_NUMBER() directly in the same WHERE clause where it is created. The window result normally needs to be produced first and filtered by an outer query or CTE.",
    tags: ["row-number", "common-mistakes", "top-n"]
  }
];

export default sqlWindowFunctionsQuestions;