const sqlFundamentalsQuestions = [
  {
    id: "sql-fundamentals-q-001",
    quizId: "quiz_sql_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which SQL keyword is used to retrieve data from a table?",
    options: [
      { id: "A", text: "SELECT" },
      { id: "B", text: "GET" },
      { id: "C", text: "FETCH" },
      { id: "D", text: "READ" }
    ],
    correctOptionId: "A",
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
      { id: "A", text: "GET ALL FROM users;" },
      { id: "B", text: "SELECT * FROM users;" },
      { id: "C", text: "SELECT ALL users;" },
      { id: "D", text: "READ * FROM users;" }
    ],
    correctOptionId: "B",
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
      { id: "B", text: "Only users whose name is not NULL" },
      { id: "C", text: "The name and email columns for all rows" },
      { id: "D", text: "The entire users table including hidden columns" }
    ],
    correctOptionId: "C",
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
      { id: "A", text: "Users who are 18 or older" },
      { id: "B", text: "Users younger than 18" },
      { id: "C", text: "Only users exactly 18 years old" },
      { id: "D", text: "All users regardless of age" }
    ],
    correctOptionId: "A",
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
      { id: "A", text: "SELECT * FROM users WHERE age FROM 18 TO 25;" },
      { id: "B", text: "SELECT * FROM users WHERE age RANGE 18, 25;" },
      { id: "C", text: "SELECT * FROM users WHERE age BETWEEN 18 AND 25;" },
      { id: "D", text: "SELECT * FROM users WHERE age IN 18 TO 25;" }
    ],
    correctOptionId: "C",
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
      { id: "C", text: "SEARCH" },
      { id: "D", text: "LIKE" }
    ],
    correctOptionId: "D",
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
      { id: "A", text: "Zero or more characters" },
      { id: "B", text: "Exactly one character" },
      { id: "C", text: "One numeric value" },
      { id: "D", text: "A NULL value" }
    ],
    correctOptionId: "A",
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
      { id: "A", text: "Sorts names in descending order" },
      { id: "B", text: "Filters names alphabetically" },
      { id: "C", text: "Sorts names in ascending order" },
      { id: "D", text: "Groups identical names together and removes duplicates" }
    ],
    correctOptionId: "C",
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
      { id: "C", text: "UNSORTED" },
      { id: "D", text: "ASC" }
    ],
    correctOptionId: "D",
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
      { id: "A", text: "SELECT * FROM users ORDER BY age DESC;" },
      { id: "B", text: "SELECT * FROM users ORDER BY age ASC;" },
      { id: "C", text: "SELECT * FROM users SORT age DESC;" },
      { id: "D", text: "SELECT * FROM users ORDER age ASC;" }
    ],
    correctOptionId: "A",
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
  },
  { id: "sql-fundamentals-q-016", quizId: "quiz_sql_fundamentals", order: 16, type: "mcq", difficulty: "Beginner", question: "Which keyword removes duplicate rows from a SELECT result?", options: [{ id: "A", text: "DISTINCT" }, { id: "B", text: "UNIQUE ROWS" }, { id: "C", text: "DEDUP" }, { id: "D", text: "ONLY" }], correctOptionId: "A", explanation: "DISTINCT removes duplicate combinations of the selected expressions from the result.", tags: ["select", "distinct"] },
  { id: "sql-fundamentals-q-017", quizId: "quiz_sql_fundamentals", order: 17, type: "mcq", difficulty: "Beginner", question: "Which expression gives a column a temporary output name?", options: [{ id: "A", text: "RENAME name" }, { id: "B", text: "AS name" }, { id: "C", text: "LABEL name" }, { id: "D", text: "TITLE name" }], correctOptionId: "B", explanation: "AS assigns an alias to a selected column or table for the query result.", tags: ["select", "aliases"] },
  { id: "sql-fundamentals-q-018", quizId: "quiz_sql_fundamentals", order: 18, type: "mcq", difficulty: "Beginner", question: "Which query selects users whose status is either 'active' or 'trial'?", options: [{ id: "A", text: "WHERE status HAS ('active', 'trial')" }, { id: "B", text: "WHERE status BETWEEN 'active' AND 'trial'" }, { id: "C", text: "WHERE status IN ('active', 'trial')" }, { id: "D", text: "WHERE status MATCH ('active', 'trial')" }], correctOptionId: "C", explanation: "IN tests whether an expression equals one of the values in a specified list.", tags: ["where", "in"] },
  { id: "sql-fundamentals-q-019", quizId: "quiz_sql_fundamentals", order: 19, type: "mcq", difficulty: "Beginner", question: "Which pattern finds names that start with 'Al'?", options: [{ id: "A", text: "name LIKE '%Al'" }, { id: "B", text: "name LIKE '_Al'" }, { id: "C", text: "name LIKE 'Al_'" }, { id: "D", text: "name LIKE 'Al%'" }], correctOptionId: "D", explanation: "A percent wildcard after Al allows any sequence of characters to follow that prefix.", tags: ["like", "wildcards"] },
  { id: "sql-fundamentals-q-020", quizId: "quiz_sql_fundamentals", order: 20, type: "mcq", difficulty: "Beginner", question: "Which operator combines two conditions when both must be true?", options: [{ id: "A", text: "AND" }, { id: "B", text: "BOTH" }, { id: "C", text: "WITH" }, { id: "D", text: "ALL" }], correctOptionId: "A", explanation: "AND requires both Boolean conditions to evaluate to true.", tags: ["where", "boolean"] },
  { id: "sql-fundamentals-q-021", quizId: "quiz_sql_fundamentals", order: 21, type: "mcq", difficulty: "Beginner", question: "What does `OR` do in a WHERE clause?", options: [{ id: "A", text: "Requires every condition to be true" }, { id: "B", text: "Matches rows when at least one condition is true" }, { id: "C", text: "Sorts rows into two groups" }, { id: "D", text: "Reverses the entire query" }], correctOptionId: "B", explanation: "OR accepts a row when one or more of its conditions evaluate to true.", tags: ["where", "boolean"] },
  { id: "sql-fundamentals-q-022", quizId: "quiz_sql_fundamentals", order: 22, type: "mcq", difficulty: "Beginner", question: "Which keyword negates a condition?", options: [{ id: "A", text: "WITHOUT" }, { id: "B", text: "EXCEPT" }, { id: "C", text: "NOT" }, { id: "D", text: "NEGATE" }], correctOptionId: "C", explanation: "NOT reverses the truth value of a Boolean condition, such as NOT IN or NOT LIKE.", tags: ["where", "boolean"] },
  { id: "sql-fundamentals-q-023", quizId: "quiz_sql_fundamentals", order: 23, type: "mcq", difficulty: "Beginner", question: "Why are parentheses useful when combining AND and OR?", options: [{ id: "A", text: "They make the intended logical grouping explicit" }, { id: "B", text: "They convert text to numbers" }, { id: "C", text: "They force an index to be used" }, { id: "D", text: "They remove NULL values" }], correctOptionId: "A", explanation: "Parentheses make condition precedence explicit and prevent unexpected Boolean evaluation.", tags: ["where", "boolean", "precedence"] },
  { id: "sql-fundamentals-q-024", quizId: "quiz_sql_fundamentals", order: 24, type: "mcq", difficulty: "Beginner", question: "Which test correctly finds rows where `deleted_at` has no value?", options: [{ id: "A", text: "deleted_at = EMPTY" }, { id: "B", text: "deleted_at IS NULL" }, { id: "C", text: "deleted_at == NULL" }, { id: "D", text: "deleted_at HAS NULL" }], correctOptionId: "B", explanation: "IS NULL is the SQL predicate for testing a missing or unknown NULL value.", tags: ["null", "where"] },
  { id: "sql-fundamentals-q-025", quizId: "quiz_sql_fundamentals", order: 25, type: "mcq", difficulty: "Beginner", question: "What does `IS NOT NULL` select?", options: [{ id: "A", text: "Rows where the column is zero" }, { id: "B", text: "Rows with an empty string only" }, { id: "C", text: "Rows where the column contains a value other than NULL" }, { id: "D", text: "Rows with duplicate values" }], correctOptionId: "C", explanation: "IS NOT NULL keeps rows whose expression is not the SQL NULL marker.", tags: ["null", "where"] },
  { id: "sql-fundamentals-q-026", quizId: "quiz_sql_fundamentals", order: 26, type: "mcq", difficulty: "Intermediate", question: "What does `COALESCE(a, b)` return when `a` is NULL?", options: [{ id: "A", text: "NULL regardless of b" }, { id: "B", text: "The larger of a and b" }, { id: "C", text: "The value of b, if it is the first non-NULL expression" }, { id: "D", text: "An error in every SQL dialect" }], correctOptionId: "C", explanation: "COALESCE returns the first non-NULL expression in its argument list.", tags: ["null", "coalesce"] },
  { id: "sql-fundamentals-q-027", quizId: "quiz_sql_fundamentals", order: 27, type: "mcq", difficulty: "Intermediate", question: "Which function commonly converts text to uppercase?", options: [{ id: "A", text: "UPPER()" }, { id: "B", text: "CAPITALIZE()" }, { id: "C", text: "TOCAPS()" }, { id: "D", text: "CASEUP()" }], correctOptionId: "A", explanation: "UPPER returns a character expression converted to uppercase in common SQL dialects.", tags: ["strings", "functions"] },
  { id: "sql-fundamentals-q-028", quizId: "quiz_sql_fundamentals", order: 28, type: "mcq", difficulty: "Intermediate", question: "Which function commonly returns the number of characters in a string?", options: [{ id: "A", text: "SIZEOF()" }, { id: "B", text: "LENGTH()" }, { id: "C", text: "CHARCOUNT()" }, { id: "D", text: "COUNTCHARS()" }], correctOptionId: "B", explanation: "LENGTH is widely used for string length, although exact character or byte semantics vary by database.", tags: ["strings", "functions"] },
  { id: "sql-fundamentals-q-029", quizId: "quiz_sql_fundamentals", order: 29, type: "mcq", difficulty: "Intermediate", question: "What does `ROUND(price, 2)` generally do?", options: [{ id: "A", text: "Removes the price column" }, { id: "B", text: "Converts price to text" }, { id: "C", text: "Rounds price to two decimal places" }, { id: "D", text: "Adds two rows" }], correctOptionId: "C", explanation: "ROUND commonly rounds a numeric expression to the requested number of decimal places.", tags: ["numeric-functions", "round"] },
  { id: "sql-fundamentals-q-030", quizId: "quiz_sql_fundamentals", order: 30, type: "mcq", difficulty: "Intermediate", question: "Which keyword limits the number of returned rows in PostgreSQL and MySQL?", options: [{ id: "A", text: "TOP" }, { id: "B", text: "LIMIT" }, { id: "C", text: "FIRST" }, { id: "D", text: "CAP" }], correctOptionId: "B", explanation: "LIMIT restricts the number of rows returned in PostgreSQL, MySQL, and several other systems.", tags: ["limit", "pagination"] },
  { id: "sql-fundamentals-q-031", quizId: "quiz_sql_fundamentals", order: 31, type: "mcq", difficulty: "Intermediate", question: "What does `OFFSET 20` commonly do with LIMIT?", options: [{ id: "A", text: "Skips the first 20 qualifying rows" }, { id: "B", text: "Returns exactly 20 rows" }, { id: "C", text: "Sorts by column 20" }, { id: "D", text: "Updates 20 rows" }], correctOptionId: "A", explanation: "OFFSET skips a specified number of rows before returning the limited result page.", tags: ["offset", "pagination"] },
  { id: "sql-fundamentals-q-032", quizId: "quiz_sql_fundamentals", order: 32, type: "mcq", difficulty: "Intermediate", question: "Why should pagination usually include a deterministic ORDER BY?", options: [{ id: "A", text: "ORDER BY creates a transaction" }, { id: "B", text: "Without it, page membership can be unstable" }, { id: "C", text: "It prevents all NULLs" }, { id: "D", text: "It is required for SELECT syntax" }], correctOptionId: "B", explanation: "Without an explicit order, SQL does not promise a stable row order between executions.", tags: ["order-by", "pagination"] },
  { id: "sql-fundamentals-q-033", quizId: "quiz_sql_fundamentals", order: 33, type: "mcq", difficulty: "Intermediate", question: "What is the purpose of `CAST(value AS INTEGER)`?", options: [{ id: "A", text: "Joins two tables" }, { id: "B", text: "Filters duplicate rows" }, { id: "C", text: "Converts an expression to an integer type" }, { id: "D", text: "Creates an integer index" }], correctOptionId: "C", explanation: "CAST explicitly converts an expression to a target data type when the conversion is supported.", tags: ["data-types", "cast"] },
  { id: "sql-fundamentals-q-034", quizId: "quiz_sql_fundamentals", order: 34, type: "mcq", difficulty: "Intermediate", question: "What does `UNION` do between compatible SELECT statements?", options: [{ id: "A", text: "Combines their rows and removes duplicate result rows" }, { id: "B", text: "Combines columns with no row changes" }, { id: "C", text: "Updates both source tables" }, { id: "D", text: "Creates a foreign key" }], correctOptionId: "A", explanation: "UNION concatenates compatible result sets and removes duplicate rows; UNION ALL preserves them.", tags: ["set-operations", "union"] },
  { id: "sql-fundamentals-q-035", quizId: "quiz_sql_fundamentals", order: 35, type: "mcq", difficulty: "Intermediate", question: "What is the key difference between UNION and UNION ALL?", options: [{ id: "A", text: "UNION ALL sorts every column" }, { id: "B", text: "UNION removes duplicate rows, while UNION ALL keeps them" }, { id: "C", text: "UNION can only combine tables" }, { id: "D", text: "UNION ALL cannot return NULL" }], correctOptionId: "B", explanation: "UNION performs duplicate elimination, while UNION ALL appends all rows and is often cheaper.", tags: ["set-operations", "union-all"] }
  ,{ id: "sql-fundamentals-q-036", quizId: "quiz_sql_fundamentals", order: 36, type: "mcq", difficulty: "Intermediate", question: "Which clause can limit groups after GROUP BY?", options: [{ id: "A", text: "HAVING" }, { id: "B", text: "WHERE" }, { id: "C", text: "ORDER BY" }, { id: "D", text: "LIMIT BY" }], correctOptionId: "A", explanation: "HAVING filters grouped results after aggregate calculations.", tags: ["having", "group-by"] }
  ,{ id: "sql-fundamentals-q-037", quizId: "quiz_sql_fundamentals", order: 37, type: "mcq", difficulty: "Intermediate", question: "Which expression counts every row, including rows containing NULL values?", options: [{ id: "A", text: "COUNT(column_name)" }, { id: "B", text: "COUNT(*)" }, { id: "C", text: "COUNT(NULL)" }, { id: "D", text: "ROWS()" }], correctOptionId: "B", explanation: "COUNT(*) counts rows, whereas COUNT(column_name) ignores NULL values in that column.", tags: ["count", "null"] }
  ,{ id: "sql-fundamentals-q-038", quizId: "quiz_sql_fundamentals", order: 38, type: "mcq", difficulty: "Intermediate", question: "What does a column alias change?", options: [{ id: "A", text: "The stored column name" }, { id: "B", text: "The table schema permanently" }, { id: "C", text: "The label displayed for the expression in the result" }, { id: "D", text: "The column data type" }], correctOptionId: "C", explanation: "An alias changes the query result label without renaming the stored schema column.", tags: ["aliases", "select"] }
  ,{ id: "sql-fundamentals-q-039", quizId: "quiz_sql_fundamentals", order: 39, type: "mcq", difficulty: "Intermediate", question: "Which set operator keeps duplicate rows from both result sets?", options: [{ id: "A", text: "UNION" }, { id: "B", text: "INTERSECT" }, { id: "C", text: "EXCEPT" }, { id: "D", text: "UNION ALL" }], correctOptionId: "D", explanation: "UNION ALL concatenates compatible results without duplicate elimination.", tags: ["set-operations", "union-all"] }
  ,{ id: "sql-fundamentals-q-040", quizId: "quiz_sql_fundamentals", order: 40, type: "mcq", difficulty: "Intermediate", question: "What does INTERSECT return?", options: [{ id: "A", text: "Rows common to both compatible result sets" }, { id: "B", text: "Every row from the first result only" }, { id: "C", text: "All columns from both tables" }, { id: "D", text: "Rows that appear in neither result" }], correctOptionId: "A", explanation: "INTERSECT returns rows present in both compatible query results.", tags: ["set-operations", "intersect"] }
  ,{ id: "sql-fundamentals-q-041", quizId: "quiz_sql_fundamentals", order: 41, type: "mcq", difficulty: "Intermediate", question: "What does EXCEPT return in common SQL dialects?", options: [{ id: "A", text: "The intersection of two results" }, { id: "B", text: "Rows from the first result that are absent from the second" }, { id: "C", text: "All rows including duplicates from both" }, { id: "D", text: "Only NULL rows" }], correctOptionId: "B", explanation: "EXCEPT subtracts rows found in the second compatible result from the first.", tags: ["set-operations", "except"] }
  ,{ id: "sql-fundamentals-q-042", quizId: "quiz_sql_fundamentals", order: 42, type: "mcq", difficulty: "Intermediate", question: "What must two SELECT statements generally have for UNION?", options: [{ id: "A", text: "The same table name" }, { id: "B", text: "The same indexes" }, { id: "C", text: "Compatible column counts and data types by position" }, { id: "D", text: "Identical WHERE clauses" }], correctOptionId: "C", explanation: "Set operations align columns by position, so their counts and types must be compatible.", tags: ["set-operations", "union"] }
  ,{ id: "sql-fundamentals-q-043", quizId: "quiz_sql_fundamentals", order: 43, type: "mcq", difficulty: "Intermediate", question: "Which expression extracts the year from a date in many SQL dialects?", options: [{ id: "A", text: "YEAR(date_column)" }, { id: "B", text: "GETYEAR date_column" }, { id: "C", text: "DATEPARTYEARONLY" }, { id: "D", text: "DATE_TO_YEAR" }], correctOptionId: "A", explanation: "YEAR is a common date function, though exact date-function syntax varies by database.", tags: ["dates", "functions"] }
  ,{ id: "sql-fundamentals-q-044", quizId: "quiz_sql_fundamentals", order: 44, type: "mcq", difficulty: "Intermediate", question: "What is the purpose of a date range condition such as `created_at >= start AND created_at < end`?", options: [{ id: "A", text: "It selects a half-open time interval" }, { id: "B", text: "It rounds every timestamp" }, { id: "C", text: "It deletes old dates" }, { id: "D", text: "It converts dates to strings" }], correctOptionId: "A", explanation: "The inclusive start and exclusive end boundaries avoid overlap when adjacent time windows are queried.", tags: ["dates", "where"] }
  ,{ id: "sql-fundamentals-q-045", quizId: "quiz_sql_fundamentals", order: 45, type: "mcq", difficulty: "Intermediate", question: "Which keyword checks whether a subquery returns at least one row?", options: [{ id: "A", text: "PRESENT" }, { id: "B", text: "EXISTS" }, { id: "C", text: "FOUND" }, { id: "D", text: "HAS ROW" }], correctOptionId: "B", explanation: "EXISTS evaluates to true when its subquery produces at least one row.", tags: ["exists", "subqueries"] }
  ,{ id: "sql-fundamentals-q-046", quizId: "quiz_sql_fundamentals", order: 46, type: "mcq", difficulty: "Intermediate", question: "What does a CASE expression do?", options: [{ id: "A", text: "Adds a table constraint" }, { id: "B", text: "Creates an index" }, { id: "C", text: "Performs conditional logic and returns a value" }, { id: "D", text: "Starts a transaction" }], correctOptionId: "C", explanation: "CASE evaluates conditions in order and returns the result for the first matching branch.", tags: ["case", "conditional-logic"] }
  ,{ id: "sql-fundamentals-q-047", quizId: "quiz_sql_fundamentals", order: 47, type: "mcq", difficulty: "Intermediate", question: "What happens when no WHEN branch matches and CASE has no ELSE?", options: [{ id: "A", text: "It returns NULL" }, { id: "B", text: "It always returns zero" }, { id: "C", text: "It returns the first column" }, { id: "D", text: "It deletes the row" }], correctOptionId: "A", explanation: "A CASE expression without a matching WHEN and without ELSE generally evaluates to NULL.", tags: ["case", "null"] }
  ,{ id: "sql-fundamentals-q-048", quizId: "quiz_sql_fundamentals", order: 48, type: "mcq", difficulty: "Intermediate", question: "Which statement creates a view in standard SQL?", options: [{ id: "A", text: "MAKE VIEW" }, { id: "B", text: "CREATE VIEW" }, { id: "C", text: "BUILD QUERY" }, { id: "D", text: "SAVE SELECT" }], correctOptionId: "B", explanation: "CREATE VIEW defines a named query whose result can be queried like a virtual table.", tags: ["views", "ddl"] }
  ,{ id: "sql-fundamentals-q-049", quizId: "quiz_sql_fundamentals", order: 49, type: "mcq", difficulty: "Intermediate", question: "What is a view?", options: [{ id: "A", text: "A stored virtual query result definition" }, { id: "B", text: "A duplicate physical database server" }, { id: "C", text: "A required primary key" }, { id: "D", text: "A transaction log only" }], correctOptionId: "A", explanation: "A view stores a query definition and exposes its result through a named relation.", tags: ["views", "database-objects"] }
  ,{ id: "sql-fundamentals-q-050", quizId: "quiz_sql_fundamentals", order: 50, type: "mcq", difficulty: "Intermediate", question: "Which statement removes a view definition?", options: [{ id: "A", text: "DELETE VIEW" }, { id: "B", text: "REMOVE QUERY" }, { id: "C", text: "DROP VIEW" }, { id: "D", text: "TRUNCATE VIEW" }], correctOptionId: "C", explanation: "DROP VIEW removes the view object; it does not directly delete the underlying table rows.", tags: ["views", "ddl"] }
];

export default sqlFundamentalsQuestions;
