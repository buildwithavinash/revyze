const sqlAggregationGroupingQuestions = [
  {
    id: "sql-aggregation-grouping-q-001",
    quizId: "quiz_sql_aggregation_grouping",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of SQL aggregate functions?",
    options: [
      { id: "A", text: "To combine multiple values into a summarized result" },
      { id: "B", text: "To create database users" },
      { id: "C", text: "To rename tables" },
      { id: "D", text: "To sort columns alphabetically" }
    ],
    correctOptionId: "A",
    explanation: "Aggregate functions calculate a single summarized value from multiple rows, such as a count, sum, or average.",
    tags: ["aggregation", "fundamentals"]
  },

  {
    id: "sql-aggregation-grouping-q-002",
    quizId: "quiz_sql_aggregation_grouping",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which function counts rows?",
    options: [
      { id: "A", text: "SUM()" },
      { id: "B", text: "COUNT()" },
      { id: "C", text: "TOTAL()" },
      { id: "D", text: "NUMBER()" }
    ],
    correctOptionId: "B",
    explanation: "COUNT() counts rows or non-NULL values depending on the expression being counted.",
    tags: ["count", "aggregation"]
  },

  {
    id: "sql-aggregation-grouping-q-003",
    quizId: "quiz_sql_aggregation_grouping",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does SUM(salary) calculate?",
    options: [
      { id: "A", text: "The average salary" },
      { id: "B", text: "The highest salary" },
      { id: "C", text: "The total of the salary values" },
      { id: "D", text: "The number of salaries" }
    ],
    correctOptionId: "C",
    explanation: "SUM() adds together the numeric values supplied to it.",
    tags: ["sum", "aggregation"]
  },

  {
    id: "sql-aggregation-grouping-q-004",
    quizId: "quiz_sql_aggregation_grouping",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which aggregate function calculates an average?",
    options: [
      { id: "A", text: "MEAN()" },
      { id: "B", text: "MID()" },
      { id: "C", text: "AVG()" },
      { id: "D", text: "AVERAGE()" }
    ],
    correctOptionId: "C",
    explanation: "AVG() calculates the arithmetic average of the supplied numeric values.",
    tags: ["avg", "aggregation"]
  },

  {
    id: "sql-aggregation-grouping-q-005",
    quizId: "quiz_sql_aggregation_grouping",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which functions return the smallest and largest values respectively?",
    options: [
      { id: "A", text: "LOW() and HIGH()" },
      { id: "B", text: "MIN() and MAX()" },
      { id: "C", text: "SMALLEST() and LARGEST()" },
      { id: "D", text: "BOTTOM() and TOP()" }
    ],
    correctOptionId: "B",
    explanation: "MIN() returns the smallest value and MAX() returns the largest value in the selected values.",
    tags: ["min", "max", "aggregation"]
  },

  {
    id: "sql-aggregation-grouping-q-006",
    quizId: "quiz_sql_aggregation_grouping",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is GROUP BY primarily used for?",
    options: [
      { id: "A", text: "Deleting duplicate rows" },
      { id: "B", text: "Sorting all rows" },
      { id: "C", text: "Filtering individual rows before a query" },
      { id: "D", text: "Creating groups of rows so aggregate calculations can be performed per group" }
    ],
    correctOptionId: "D",
    explanation: "GROUP BY divides rows into groups based on one or more columns, allowing aggregates to be calculated for each group.",
    tags: ["group-by", "aggregation"]
  },

  {
    id: "sql-aggregation-grouping-q-007",
    quizId: "quiz_sql_aggregation_grouping",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does this query produce?\n\n```sql\nSELECT department, COUNT(*)\nFROM employees\nGROUP BY department;\n```",
    options: [
      { id: "A", text: "The number of employees in each department" },
      { id: "B", text: "The total number of departments only" },
      { id: "C", text: "One employee from each department" },
      { id: "D", text: "All employees sorted by department" }
    ],
    correctOptionId: "A",
    explanation: "GROUP BY creates one group per department, and COUNT(*) counts the rows within each group.",
    tags: ["group-by", "count"]
  },

  {
    id: "sql-aggregation-grouping-q-008",
    quizId: "quiz_sql_aggregation_grouping",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which clause is used to filter grouped/aggregated results?",
    options: [
      { id: "A", text: "WHERE" },
      { id: "B", text: "FILTER BY" },
      { id: "C", text: "HAVING" },
      { id: "D", text: "GROUP WHERE" }
    ],
    correctOptionId: "C",
    explanation: "HAVING filters groups after GROUP BY and is commonly used with aggregate expressions.",
    tags: ["having", "group-by"]
  },

  {
    id: "sql-aggregation-grouping-q-009",
    quizId: "quiz_sql_aggregation_grouping",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which query finds departments with more than 10 employees?",
    options: [
      { id: "A", text: "SELECT department FROM employees WHERE COUNT(*) > 10 GROUP BY department;" },
      { id: "B", text: "SELECT department FROM employees GROUP BY department HAVING COUNT(*) > 10;" },
      { id: "C", text: "SELECT department FROM employees HAVING COUNT(*) > 10;" },
      { id: "D", text: "SELECT department FROM employees GROUP BY COUNT(*) > 10;" }
    ],
    correctOptionId: "B",
    explanation: "COUNT(*) is calculated per department, and HAVING filters those groups based on the aggregate result.",
    tags: ["group-by", "having", "count"]
  },

  {
    id: "sql-aggregation-grouping-q-010",
    quizId: "quiz_sql_aggregation_grouping",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the key difference between WHERE and HAVING?",
    options: [
      { id: "A", text: "WHERE sorts rows while HAVING joins tables" },
      { id: "B", text: "WHERE works only with DELETE" },
      { id: "C", text: "WHERE filters rows before grouping, while HAVING filters groups after aggregation" },
      { id: "D", text: "HAVING cannot use aggregate functions" }
    ],
    correctOptionId: "C",
    explanation: "WHERE operates on rows before grouping. HAVING operates on grouped results and can filter based on aggregate calculations.",
    tags: ["where", "having"]
  },

  {
    id: "sql-aggregation-grouping-q-011",
    quizId: "quiz_sql_aggregation_grouping",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does COUNT(column_name) generally count?",
    options: [
      { id: "A", text: "All rows including rows where the column is NULL" },
      { id: "B", text: "Only rows where that column is not NULL" },
      { id: "C", text: "The number of columns in the table" },
      { id: "D", text: "Only rows containing zero" }
    ],
    correctOptionId: "B",
    explanation: "COUNT(column_name) counts non-NULL values in that column, unlike COUNT(*), which counts rows.",
    tags: ["count", "null"]
  },

  {
    id: "sql-aggregation-grouping-q-012",
    quizId: "quiz_sql_aggregation_grouping",
    order: 12,
    type: "mcq",
    difficulty: "Advanced",
    question: "Suppose a table has salaries: 1000, 2000, NULL, 3000. What does AVG(salary) generally calculate?",
    options: [
      { id: "A", text: "1500" },
      { id: "B", text: "2000" },
      { id: "C", text: "3000" },
      { id: "D", text: "NULL" }
    ],
    correctOptionId: "B",
    explanation: "Aggregate functions such as AVG generally ignore NULL values. The average is (1000 + 2000 + 3000) / 3 = 2000.",
    tags: ["avg", "null", "aggregation"]
  },

  {
    id: "sql-aggregation-grouping-q-013",
    quizId: "quiz_sql_aggregation_grouping",
    order: 13,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which query calculates the average salary for each department?",
    options: [
      { id: "A", text: "SELECT department, AVG(salary) FROM employees GROUP BY department;" },
      { id: "B", text: "SELECT AVG(department, salary) FROM employees;" },
      { id: "C", text: "SELECT department FROM employees AVG(salary);" },
      { id: "D", text: "SELECT department, salary FROM employees GROUP AVG(salary);" }
    ],
    correctOptionId: "A",
    explanation: "The department is the grouping column and AVG(salary) calculates the aggregate for each department.",
    tags: ["avg", "group-by"]
  },

  {
    id: "sql-aggregation-grouping-q-014",
    quizId: "quiz_sql_aggregation_grouping",
    order: 14,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common mistake when using GROUP BY?",
    options: [
      { id: "A", text: "Using aggregate functions" },
      { id: "B", text: "Grouping by a column used in the SELECT list" },
      { id: "C", text: "Selecting non-aggregated columns that are neither grouped nor otherwise valid for the SQL dialect" },
      { id: "D", text: "Using COUNT(*)" }
    ],
    correctOptionId: "C",
    explanation: "When grouping, selected expressions generally need to be grouped or aggregated according to the SQL dialect's rules.",
    tags: ["group-by", "common-mistakes"]
  },

  {
    id: "sql-aggregation-grouping-q-015",
    quizId: "quiz_sql_aggregation_grouping",
    order: 15,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which query finds the department with an average salary greater than 50,000?",
    options: [
      { id: "A", text: "SELECT department FROM employees WHERE AVG(salary) > 50000 GROUP BY department;" },
      { id: "B", text: "SELECT department FROM employees GROUP BY department HAVING AVG(salary) > 50000;" },
      { id: "C", text: "SELECT department FROM employees HAVING salary > 50000;" },
      { id: "D", text: "SELECT department, AVG(salary) FROM employees WHERE AVG(salary) > 50000;" }
    ],
    correctOptionId: "B",
    explanation: "AVG(salary) is calculated per department, so the aggregate condition belongs in HAVING.",
    tags: ["avg", "group-by", "having"]
  }
];

export default sqlAggregationGroupingQuestions;