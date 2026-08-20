const sqlIndexingPerformanceQuestions = [
  {
    id: "sql-indexing-performance-q-001",
    quizId: "quiz_sql_indexing_performance",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of a database index?",
    options: [
      { id: "A", text: "To reduce the size of every table" },
      { id: "B", text: "To help the database find matching rows more efficiently" },
      { id: "C", text: "To replace primary keys" },
      { id: "D", text: "To permanently sort the table's stored rows" }
    ],
    correctOptionId: "B",
    explanation: "An index provides an additional data structure that can help the database locate relevant rows without scanning every row of the table.",
    tags: ["indexes", "fundamentals"]
  },

  {
    id: "sql-indexing-performance-q-002",
    quizId: "quiz_sql_indexing_performance",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which column is often a good candidate for an index?",
    options: [
      { id: "A", text: "A column frequently used to filter or join rows" },
      { id: "B", text: "A column that is never queried" },
      { id: "C", text: "A column containing only one repeated value" },
      { id: "D", text: "Every column regardless of workload" }
    ],
    correctOptionId: "A",
    explanation: "Columns frequently used in WHERE, JOIN, ORDER BY, or related operations can be good indexing candidates depending on the workload.",
    tags: ["indexes", "index-design"]
  },

  {
    id: "sql-indexing-performance-q-003",
    quizId: "quiz_sql_indexing_performance",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a common downside of having too many indexes?",
    options: [
      { id: "A", text: "Indexes prevent SELECT queries from running" },
      { id: "B", text: "Indexes make all columns NULL" },
      { id: "C", text: "They consume storage and can make INSERT, UPDATE, and DELETE operations more expensive" },
      { id: "D", text: "They remove primary keys automatically" }
    ],
    correctOptionId: "C",
    explanation: "Indexes require storage and must generally be maintained as indexed data changes, creating write overhead.",
    tags: ["indexes", "tradeoffs"]
  },

  {
    id: "sql-indexing-performance-q-004",
    quizId: "quiz_sql_indexing_performance",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a full table scan mean?",
    options: [
      { id: "A", text: "The database examines rows across the table to find qualifying records" },
      { id: "B", text: "The database deletes the table" },
      { id: "C", text: "The database creates an index on every column" },
      { id: "D", text: "The query returns only the first row" }
    ],
    correctOptionId: "A",
    explanation: "A full table scan reads through the table's rows to evaluate the query, which can be expensive for large tables.",
    tags: ["table-scan", "performance"]
  },

  {
    id: "sql-indexing-performance-q-005",
    quizId: "quiz_sql_indexing_performance",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which SQL feature is commonly used to inspect how a database plans to execute a query?",
    options: [
      { id: "A", text: "DESCRIBE DATA ONLY" },
      { id: "B", text: "EXPLAIN" },
      { id: "C", text: "SHOW PERFORMANCE" },
      { id: "D", text: "PROFILE TABLE" }
    ],
    correctOptionId: "B",
    explanation: "EXPLAIN is commonly used to inspect a query's execution plan, although exact syntax and output vary by database.",
    tags: ["explain", "execution-plans"]
  },

  {
    id: "sql-indexing-performance-q-006",
    quizId: "quiz_sql_indexing_performance",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an execution plan?",
    options: [
      { id: "A", text: "A backup schedule for the database" },
      { id: "B", text: "A list of all users allowed to access the database" },
      { id: "C", text: "A description of how the database intends to execute a query" },
      { id: "D", text: "A list of table creation commands" }
    ],
    correctOptionId: "C",
    explanation: "An execution plan describes operations such as scans, joins, sorts, and index access that the optimizer chooses for a query.",
    tags: ["execution-plans", "optimization"]
  },

  {
    id: "sql-indexing-performance-q-007",
    quizId: "quiz_sql_indexing_performance",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can an index make a selective WHERE query faster?",
    options: [
      { id: "A", text: "It can allow the database to locate a relatively small set of matching rows without examining the entire table" },
      { id: "B", text: "It automatically caches every query result forever" },
      { id: "C", text: "It removes the WHERE condition" },
      { id: "D", text: "It converts the query into an INSERT" }
    ],
    correctOptionId: "A",
    explanation: "When a predicate is selective, an appropriate index can greatly reduce the amount of table data that must be examined.",
    tags: ["indexes", "selectivity"]
  },

  {
    id: "sql-indexing-performance-q-008",
    quizId: "quiz_sql_indexing_performance",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does index selectivity describe conceptually?",
    options: [
      { id: "A", text: "How many indexes exist in the database" },
      { id: "B", text: "How well a column or condition distinguishes a relatively small set of rows from the overall data" },
      { id: "C", text: "How quickly an INSERT statement completes" },
      { id: "D", text: "How many tables have foreign keys" }
    ],
    correctOptionId: "B",
    explanation: "Highly selective predicates identify a small fraction of rows and can often benefit more from an index than low-selectivity predicates.",
    tags: ["selectivity", "indexes"]
  },

  {
    id: "sql-indexing-performance-q-009",
    quizId: "quiz_sql_indexing_performance",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might an index on a boolean column provide limited benefit for some queries?",
    options: [
      { id: "A", text: "Boolean columns cannot be indexed" },
      { id: "B", text: "Boolean values cannot be used in WHERE clauses" },
      { id: "C", text: "The column may have low selectivity if a large proportion of rows share the same value" },
      { id: "D", text: "Indexes work only on numeric columns" }
    ],
    correctOptionId: "C",
    explanation: "If most rows have the same boolean value, an index may not narrow the search enough to justify index access.",
    tags: ["selectivity", "indexes"]
  },

  {
    id: "sql-indexing-performance-q-010",
    quizId: "quiz_sql_indexing_performance",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a composite index?",
    options: [
      { id: "A", text: "An index built across multiple columns" },
      { id: "B", text: "An index stored in multiple databases" },
      { id: "C", text: "An index containing only duplicate values" },
      { id: "D", text: "An index that automatically creates foreign keys" }
    ],
    correctOptionId: "A",
    explanation: "A composite or multi-column index contains more than one indexed column.",
    tags: ["composite-index", "indexes"]
  },

  {
    id: "sql-indexing-performance-q-011",
    quizId: "quiz_sql_indexing_performance",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why does the order of columns matter in a composite index?",
    options: [
      { id: "A", text: "The first indexed column can influence which query predicates can efficiently use the index" },
      { id: "B", text: "Column order only affects the table name" },
      { id: "C", text: "The database ignores all columns after the first one" },
      { id: "D", text: "Column order changes the data types" }
    ],
    correctOptionId: "A",
    explanation: "Composite indexes are ordered structures, so the leading column(s) matter for which access patterns can efficiently use the index.",
    tags: ["composite-index", "index-order"]
  },

  {
    id: "sql-indexing-performance-q-012",
    quizId: "quiz_sql_indexing_performance",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Suppose you frequently query `WHERE country = ? AND city = ?`. Which index could be useful?",
    options: [
      { id: "A", text: "INDEX(city, country) is the only possible solution" },
      { id: "B", text: "INDEX(country, city) can be a candidate based on the workload" },
      { id: "C", text: "An index on an unrelated column" },
      { id: "D", text: "No index can ever help a two-column condition" }
    ],
    correctOptionId: "B",
    explanation: "A composite index on country and city can support this access pattern, subject to the database and broader workload.",
    tags: ["composite-index", "where"]
  },

  {
    id: "sql-indexing-performance-q-013",
    quizId: "quiz_sql_indexing_performance",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the 'leftmost prefix' idea associated with many composite indexes?",
    options: [
      { id: "A", text: "Queries can often use the leading portion of a multi-column index for suitable predicates" },
      { id: "B", text: "Only the last indexed column can be queried" },
      { id: "C", text: "Indexes always begin with the alphabetically first column" },
      { id: "D", text: "The table must be stored from left to right" }
    ],
    correctOptionId: "A",
    explanation: "For many traditional B-tree composite indexes, predicates involving the leading indexed columns can use the index effectively.",
    tags: ["composite-index", "leftmost-prefix"]
  },

  {
    id: "sql-indexing-performance-q-014",
    quizId: "quiz_sql_indexing_performance",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a covering index conceptually?",
    options: [
      { id: "A", text: "An index that contains enough information for a query to be answered without fetching the base table rows in some cases" },
      { id: "B", text: "An index that covers the entire database" },
      { id: "C", text: "An index that automatically encrypts all columns" },
      { id: "D", text: "An index that prevents DELETE statements" }
    ],
    correctOptionId: "A",
    explanation: "A covering index contains the indexed and/or included data needed for a query, potentially avoiding additional table lookups.",
    tags: ["covering-index", "optimization"]
  },

  {
    id: "sql-indexing-performance-q-015",
    quizId: "quiz_sql_indexing_performance",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can `SELECT *` sometimes be less efficient than selecting only required columns?",
    options: [
      { id: "A", text: "SELECT * always disables indexes" },
      { id: "B", text: "It may require more data to be read and transferred than necessary" },
      { id: "C", text: "SELECT * is invalid in production databases" },
      { id: "D", text: "It automatically performs a DELETE" }
    ],
    correctOptionId: "B",
    explanation: "Requesting unnecessary columns can increase I/O, memory use, network transfer, and make covering-index opportunities less likely.",
    tags: ["select", "performance"]
  },

  {
    id: "sql-indexing-performance-q-016",
    quizId: "quiz_sql_indexing_performance",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one reason functions applied directly to an indexed column can hurt index usage?",
    options: [
      { id: "A", text: "The expression may prevent the optimizer from using a simple index lookup on the original column" },
      { id: "B", text: "Functions always delete the index" },
      { id: "C", text: "SQL functions cannot be used in WHERE" },
      { id: "D", text: "Indexes only support SELECT *" }
    ],
    correctOptionId: "A",
    explanation: "Expressions such as applying a function to an indexed column can make a normal index lookup less straightforward, depending on the database and available expression indexes.",
    tags: ["indexes", "sargability"]
  },

  {
    id: "sql-indexing-performance-q-017",
    quizId: "quiz_sql_indexing_performance",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which predicate is generally more index-friendly for an indexed `created_at` column?",
    options: [
      { id: "A", text: "WHERE YEAR(created_at) = 2026" },
      { id: "B", text: "WHERE created_at >= '2026-01-01' AND created_at < '2027-01-01'" },
      { id: "C", text: "WHERE FORMAT(created_at) = '2026'" },
      { id: "D", text: "WHERE CAST(created_at AS TEXT) LIKE '2026%'" }
    ],
    correctOptionId: "B",
    explanation: "A direct range condition on the indexed column is commonly more index-friendly than applying a function to the column.",
    tags: ["indexes", "sargability", "date"]
  },

  {
    id: "sql-indexing-performance-q-018",
    quizId: "quiz_sql_indexing_performance",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does query selectivity affect?",
    options: [
      { id: "A", text: "The usefulness of certain access paths such as indexes" },
      { id: "B", text: "Only the spelling of table names" },
      { id: "C", text: "Whether SQL supports transactions" },
      { id: "D", text: "Whether primary keys can exist" }
    ],
    correctOptionId: "A",
    explanation: "The fraction of rows expected to match a predicate influences whether an index scan or another access path is likely to be efficient.",
    tags: ["selectivity", "execution-plans"]
  },

  {
    id: "sql-indexing-performance-q-019",
    quizId: "quiz_sql_indexing_performance",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a database choose a sequential/full table scan even when an index exists?",
    options: [
      { id: "A", text: "The index is never allowed for SELECT queries" },
      { id: "B", text: "The optimizer may estimate that scanning the table is cheaper for the particular query" },
      { id: "C", text: "Indexes are only used after DELETE" },
      { id: "D", text: "The table must have no primary key" }
    ],
    correctOptionId: "B",
    explanation: "The optimizer chooses an access path based on estimated cost. For low-selectivity queries or small tables, a table scan can be cheaper.",
    tags: ["execution-plans", "optimization"]
  },

  {
    id: "sql-indexing-performance-q-020",
    quizId: "quiz_sql_indexing_performance",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is query optimization primarily concerned with?",
    options: [
      { id: "A", text: "Making queries execute efficiently while producing the required result" },
      { id: "B", text: "Changing the meaning of business data" },
      { id: "C", text: "Removing all constraints" },
      { id: "D", text: "Replacing SQL with application code" }
    ],
    correctOptionId: "A",
    explanation: "Query optimization seeks efficient execution through appropriate access paths, joins, indexes, filtering, and other techniques.",
    tags: ["optimization", "performance"]
  },

  {
    id: "sql-indexing-performance-q-021",
    quizId: "quiz_sql_indexing_performance",
    order: 21,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of database statistics?",
    options: [
      { id: "A", text: "To help the optimizer estimate data distribution and choose execution plans" },
      { id: "B", text: "To replace all indexes" },
      { id: "C", text: "To store application passwords" },
      { id: "D", text: "To permanently record every SELECT result" }
    ],
    correctOptionId: "A",
    explanation: "Statistics provide information about data distribution and cardinality that query optimizers use for cost estimation.",
    tags: ["statistics", "optimizer"]
  },

  {
    id: "sql-indexing-performance-q-022",
    quizId: "quiz_sql_indexing_performance",
    order: 22,
    type: "mcq",
    difficulty: "Advanced",
    question: "What can stale statistics cause?",
    options: [
      { id: "A", text: "The database schema is always deleted" },
      { id: "B", text: "The optimizer may make poor cardinality or cost estimates" },
      { id: "C", text: "Primary keys become nullable" },
      { id: "D", text: "All queries become syntactically invalid" }
    ],
    correctOptionId: "B",
    explanation: "If statistics no longer reflect current data distribution, the optimizer may choose a less efficient execution plan.",
    tags: ["statistics", "optimization"]
  },

  {
    id: "sql-indexing-performance-q-023",
    quizId: "quiz_sql_indexing_performance",
    order: 23,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does cardinality refer to in query optimization contexts?",
    options: [
      { id: "A", text: "The estimated or actual number of rows in a relation or intermediate result" },
      { id: "B", text: "The number of database servers" },
      { id: "C", text: "The number of SQL keywords" },
      { id: "D", text: "The number of indexes in the schema" }
    ],
    correctOptionId: "A",
    explanation: "Cardinality commonly refers to the number of rows in a table or intermediate result, and estimates of it are important to query planning.",
    tags: ["cardinality", "execution-plans"]
  },

  {
    id: "sql-indexing-performance-q-024",
    quizId: "quiz_sql_indexing_performance",
    order: 24,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which execution-plan operator generally indicates that the database is retrieving rows through an index?",
    options: [
      { id: "A", text: "Index scan or index seek, depending on the database engine" },
      { id: "B", text: "DROP TABLE" },
      { id: "C", text: "COMMIT TRANSACTION" },
      { id: "D", text: "CREATE USER" }
    ],
    correctOptionId: "A",
    explanation: "Execution-plan terminology varies, but index scans/seeks or equivalent operators indicate index-based access.",
    tags: ["execution-plans", "indexes"]
  },

  {
    id: "sql-indexing-performance-q-025",
    quizId: "quiz_sql_indexing_performance",
    order: 25,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does an index seek generally represent in systems that use that terminology?",
    options: [
      { id: "A", text: "A targeted lookup into an index to locate qualifying entries" },
      { id: "B", text: "A full scan of every table in the database" },
      { id: "C", text: "Deletion of an index" },
      { id: "D", text: "A database backup" }
    ],
    correctOptionId: "A",
    explanation: "An index seek generally describes targeted navigation within an index to locate relevant rows.",
    tags: ["index-seek", "execution-plans"]
  },

  {
    id: "sql-indexing-performance-q-026",
    quizId: "quiz_sql_indexing_performance",
    order: 26,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can sorting a very large result set be expensive?",
    options: [
      { id: "A", text: "Sorting may require substantial CPU, memory, and possibly disk-based work" },
      { id: "B", text: "ORDER BY automatically deletes indexes" },
      { id: "C", text: "Sorting is always performed by the client browser" },
      { id: "D", text: "SQL cannot sort more than 100 rows" }
    ],
    correctOptionId: "A",
    explanation: "Large sorts can consume CPU and memory and may spill to temporary storage depending on the engine and available resources.",
    tags: ["sorting", "performance"]
  },

  {
    id: "sql-indexing-performance-q-027",
    quizId: "quiz_sql_indexing_performance",
    order: 27,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can an index sometimes help an ORDER BY query?",
    options: [
      { id: "A", text: "If the index provides rows in a useful order, the database may avoid or reduce an explicit sort" },
      { id: "B", text: "Indexes disable ORDER BY" },
      { id: "C", text: "Indexes guarantee the final result is random" },
      { id: "D", text: "ORDER BY cannot use indexes under any circumstances" }
    ],
    correctOptionId: "A",
    explanation: "An appropriately ordered index can sometimes provide the requested ordering directly or reduce sorting work.",
    tags: ["indexes", "order-by"]
  },

  {
    id: "sql-indexing-performance-q-028",
    quizId: "quiz_sql_indexing_performance",
    order: 28,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is an index scan generally different from an index seek?",
    options: [
      { id: "A", text: "A scan generally examines a broader portion of the index, while a seek targets a more specific range or location" },
      { id: "B", text: "A scan always deletes the index" },
      { id: "C", text: "A seek reads the entire database" },
      { id: "D", text: "There is never any difference" }
    ],
    correctOptionId: "A",
    explanation: "In systems using these terms, a seek targets a narrower index range, while a scan reads a larger portion of the index.",
    tags: ["index-scan", "index-seek"]
  },

  {
    id: "sql-indexing-performance-q-029",
    quizId: "quiz_sql_indexing_performance",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can a query returning a large percentage of a table be better served by a table scan than an index lookup?",
    options: [
      { id: "A", text: "Fetching a large fraction of rows through an index can involve many random/base-table accesses, making a scan cheaper" },
      { id: "B", text: "Indexes can only return one row" },
      { id: "C", text: "Table scans are always faster regardless of query" },
      { id: "D", text: "The optimizer ignores the number of matching rows" }
    ],
    correctOptionId: "A",
    explanation: "For low-selectivity queries, scanning the table can be more efficient than using an index and repeatedly fetching many rows.",
    tags: ["selectivity", "execution-plans"]
  },

  {
    id: "sql-indexing-performance-q-030",
    quizId: "quiz_sql_indexing_performance",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does query plan cost represent?",
    options: [
      { id: "A", text: "An optimizer's estimate of the relative resource cost of an execution strategy" },
      { id: "B", text: "The exact number of milliseconds a query will always take" },
      { id: "C", text: "The price charged by the database vendor" },
      { id: "D", text: "The number of rows permanently stored" }
    ],
    correctOptionId: "A",
    explanation: "Cost is typically an optimizer estimate used to compare possible execution plans; it is not necessarily actual elapsed time.",
    tags: ["execution-plans", "cost"]
  },

  {
    id: "sql-indexing-performance-q-031",
    quizId: "quiz_sql_indexing_performance",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is an index-only or covering access path useful for?",
    options: [
      { id: "A", text: "Potentially answering a query from index data without accessing the base table for every row" },
      { id: "B", text: "Deleting all non-indexed columns" },
      { id: "C", text: "Preventing INSERT statements" },
      { id: "D", text: "Replacing the database schema" }
    ],
    correctOptionId: "A",
    explanation: "If an index contains all information required by the query, the engine may avoid additional table lookups.",
    tags: ["covering-index", "optimization"]
  },

  {
    id: "sql-indexing-performance-q-032",
    quizId: "quiz_sql_indexing_performance",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a partial or filtered index conceptually?",
    options: [
      { id: "A", text: "An index that covers only rows satisfying a specified condition, where supported" },
      { id: "B", text: "An index containing half of every value" },
      { id: "C", text: "An index that can only be used for DELETE" },
      { id: "D", text: "An index that automatically filters users" }
    ],
    correctOptionId: "A",
    explanation: "Some database systems support indexes restricted to rows matching a predicate, which can reduce index size and maintenance cost for suitable workloads.",
    tags: ["filtered-index", "partial-index"]
  },

  {
    id: "sql-indexing-performance-q-033",
    quizId: "quiz_sql_indexing_performance",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is an expression or functional index?",
    options: [
      { id: "A", text: "An index built on the result of an expression or function, where supported" },
      { id: "B", text: "An index that stores only SQL keywords" },
      { id: "C", text: "An index that cannot be queried" },
      { id: "D", text: "An index created automatically by every SELECT" }
    ],
    correctOptionId: "A",
    explanation: "Some databases support indexing expressions such as lower(email), allowing queries using that expression to benefit from an index.",
    tags: ["functional-index", "expression-index"]
  },

  {
    id: "sql-indexing-performance-q-034",
    quizId: "quiz_sql_indexing_performance",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which query pattern is often more index-friendly for case-insensitive email lookup when a normal index exists on email?",
    options: [
      { id: "A", text: "WHERE LOWER(email) = LOWER(?)" },
      { id: "B", text: "WHERE email = ?" },
      { id: "C", text: "WHERE CAST(email AS TEXT) = ?" },
      { id: "D", text: "WHERE FORMAT(email) = ?" }
    ],
    correctOptionId: "B",
    explanation: "A direct equality predicate on the indexed column is generally easier to use with a normal index. Case-insensitive behavior may instead require appropriate collation or an expression index depending on the database.",
    tags: ["indexes", "sargability", "email"]
  },

  {
    id: "sql-indexing-performance-q-035",
    quizId: "quiz_sql_indexing_performance",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should you benchmark an index change instead of assuming it improves performance?",
    options: [
      { id: "A", text: "Index usefulness depends on data distribution, query patterns, workload, and the optimizer" },
      { id: "B", text: "Indexes never affect performance" },
      { id: "C", text: "Every index always makes writes faster" },
      { id: "D", text: "Execution plans are unrelated to indexes" }
    ],
    correctOptionId: "A",
    explanation: "An index can help one query while hurting writes or providing little benefit to another, so real workload measurements matter.",
    tags: ["indexes", "benchmarking"]
  },

  {
    id: "sql-indexing-performance-q-036",
    quizId: "quiz_sql_indexing_performance",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is index fragmentation broadly related to?",
    options: [
      { id: "A", text: "How index pages become less optimally organized as data changes, depending on the storage engine" },
      { id: "B", text: "The number of SQL keywords in a query" },
      { id: "C", text: "The number of users logged into the application" },
      { id: "D", text: "Whether a table has a primary key" }
    ],
    correctOptionId: "A",
    explanation: "Some storage engines can experience page-level fragmentation from ongoing inserts, updates, and deletes, potentially affecting I/O efficiency.",
    tags: ["index-fragmentation", "maintenance"]
  },

  {
    id: "sql-indexing-performance-q-037",
    quizId: "quiz_sql_indexing_performance",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a sensible first step when investigating a slow SQL query?",
    options: [
      { id: "A", text: "Add an index to every column immediately" },
      { id: "B", text: "Measure the query and inspect its execution plan" },
      { id: "C", text: "Delete the table" },
      { id: "D", text: "Disable all constraints" }
    ],
    correctOptionId: "B",
    explanation: "Performance work should begin with evidence. Query timing, execution plans, row counts, and workload information help identify the actual bottleneck.",
    tags: ["debugging", "execution-plans", "optimization"]
  },

  {
    id: "sql-indexing-performance-q-038",
    quizId: "quiz_sql_indexing_performance",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "A query joins `orders.customer_id` to `customers.id`. Which index is often worth considering if `customers.id` is already the primary key?",
    options: [
      { id: "A", text: "An index on orders.customer_id, depending on the workload" },
      { id: "B", text: "An index on a completely unrelated timestamp" },
      { id: "C", text: "An index on the database name" },
      { id: "D", text: "No index can ever help a JOIN" }
    ],
    correctOptionId: "A",
    explanation: "Indexing the foreign-key side can help locate matching orders efficiently, especially for joins and queries filtering by customer.",
    tags: ["indexes", "joins", "foreign-key"]
  },

  {
    id: "sql-indexing-performance-q-039",
    quizId: "quiz_sql_indexing_performance",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can indexes on foreign-key columns be useful?",
    options: [
      { id: "A", text: "They can improve joins and can help certain parent/child lookup or modification operations" },
      { id: "B", text: "They automatically enforce all business rules" },
      { id: "C", text: "They replace the foreign-key constraint" },
      { id: "D", text: "They guarantee zero deadlocks" }
    ],
    correctOptionId: "A",
    explanation: "Indexes can make relationship lookups more efficient and can be helpful for operations involving referenced and referencing rows.",
    tags: ["foreign-key", "indexes"]
  },

  {
    id: "sql-indexing-performance-q-040",
    quizId: "quiz_sql_indexing_performance",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a key reason not to create an index for every WHERE clause you see?",
    options: [
      { id: "A", text: "Indexes have storage and write-maintenance costs and may not improve every query" },
      { id: "B", text: "WHERE clauses cannot use indexes" },
      { id: "C", text: "Only primary keys can be indexed" },
      { id: "D", text: "Every index makes reads slower" }
    ],
    correctOptionId: "A",
    explanation: "Indexing is a workload-specific trade-off. Unnecessary indexes increase maintenance cost and storage without providing meaningful benefits.",
    tags: ["indexes", "tradeoffs"]
  },

  {
    id: "sql-indexing-performance-q-041",
    quizId: "quiz_sql_indexing_performance",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is query plan regression?",
    options: [
      { id: "A", text: "A previously efficient query begins using a significantly worse execution plan" },
      { id: "B", text: "A query becomes syntactically shorter" },
      { id: "C", text: "A table gains a primary key" },
      { id: "D", text: "An INSERT adds fewer rows than expected" }
    ],
    correctOptionId: "A",
    explanation: "A plan regression occurs when the optimizer or environment causes a query to use a less efficient plan than before.",
    tags: ["execution-plans", "regression"]
  },

  {
    id: "sql-indexing-performance-q-042",
    quizId: "quiz_sql_indexing_performance",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which factor can cause an execution plan to change over time?",
    options: [
      { id: "A", text: "Changes in data distribution, statistics, indexes, database version, or optimizer decisions" },
      { id: "B", text: "Only the spelling of SELECT" },
      { id: "C", text: "The table's display name in an application UI" },
      { id: "D", text: "The number of comments in SQL source code" }
    ],
    correctOptionId: "A",
    explanation: "Query plans depend on database metadata, statistics, available indexes, optimizer behavior, and data characteristics.",
    tags: ["execution-plans", "optimizer"]
  },

  {
    id: "sql-indexing-performance-q-043",
    quizId: "quiz_sql_indexing_performance",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does query pagination with LIMIT/OFFSET potentially become problematic for at very large offsets?",
    options: [
      { id: "A", text: "The database may still need to process or skip many preceding rows before returning the requested page" },
      { id: "B", text: "LIMIT automatically deletes old rows" },
      { id: "C", text: "OFFSET prevents indexes from existing" },
      { id: "D", text: "Pagination always returns duplicate rows" }
    ],
    correctOptionId: "A",
    explanation: "Large OFFSET values can require the engine to walk past many rows. Keyset/cursor pagination can be more efficient for suitable workloads.",
    tags: ["pagination", "performance"]
  },

  {
    id: "sql-indexing-performance-q-044",
    quizId: "quiz_sql_indexing_performance",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is keyset pagination?",
    options: [
      { id: "A", text: "Pagination based on a stable ordering key and a boundary from the previous page" },
      { id: "B", text: "Pagination that always uses OFFSET 0" },
      { id: "C", text: "Pagination that deletes previous pages" },
      { id: "D", text: "Pagination without ORDER BY or any stable ordering" }
    ],
    correctOptionId: "A",
    explanation: "Keyset pagination uses values from the last row of the previous page as the next query's boundary, which can avoid large OFFSET scans.",
    tags: ["pagination", "keyset"]
  },

  {
    id: "sql-indexing-performance-q-045",
    quizId: "quiz_sql_indexing_performance",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is a stable ORDER BY important for pagination?",
    options: [
      { id: "A", text: "It helps define a predictable sequence of rows between pages" },
      { id: "B", text: "It automatically creates an index" },
      { id: "C", text: "It prevents all concurrent writes" },
      { id: "D", text: "It guarantees identical query execution times" }
    ],
    correctOptionId: "A",
    explanation: "Pagination requires a deterministic ordering. Adding a unique tie-breaker can help avoid ambiguous ordering when values are equal.",
    tags: ["pagination", "order-by"]
  },

  {
    id: "sql-indexing-performance-q-046",
    quizId: "quiz_sql_indexing_performance",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A query filters by `status` and sorts by `created_at`. What might you investigate when designing an index?",
    options: [
      { id: "A", text: "Whether a composite index involving status and created_at matches the actual workload" },
      { id: "B", text: "Whether to index the database password" },
      { id: "C", text: "Whether to remove the WHERE clause" },
      { id: "D", text: "Whether to replace SQL with HTML" }
    ],
    correctOptionId: "A",
    explanation: "A composite index may support both filtering and ordering, but the correct column order depends on selectivity, query patterns, and the database optimizer.",
    tags: ["composite-index", "order-by", "where"]
  },

  {
    id: "sql-indexing-performance-q-047",
    quizId: "quiz_sql_indexing_performance",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the best general approach when an index appears unused?",
    options: [
      { id: "A", text: "Delete it immediately without checking anything" },
      { id: "B", text: "Examine actual workload, execution plans, usage statistics where available, and write overhead before deciding" },
      { id: "C", text: "Create five more indexes on the same columns" },
      { id: "D", text: "Disable every other index" }
    ],
    correctOptionId: "B",
    explanation: "An index may be valuable for occasional critical queries even if it is not frequently used, so removal should be based on workload evidence and trade-offs.",
    tags: ["indexes", "maintenance", "optimization"]
  },

  {
    id: "sql-indexing-performance-q-048",
    quizId: "quiz_sql_indexing_performance",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which practice is generally preferable when optimizing a slow query?",
    options: [
      { id: "A", text: "Change multiple things at once without measuring" },
      { id: "B", text: "Guess which index is needed and deploy immediately" },
      { id: "C", text: "Measure, inspect the plan, make a targeted change, and measure again" },
      { id: "D", text: "Always rewrite the query using SELECT *" }
    ],
    correctOptionId: "C",
    explanation: "A measurement-driven approach makes it easier to identify the actual bottleneck and verify whether an optimization helped.",
    tags: ["optimization", "benchmarking"]
  },

  {
    id: "sql-indexing-performance-q-049",
    quizId: "quiz_sql_indexing_performance",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A query is slow because it returns 2 million rows to an application that displays only 20. Which improvement should you investigate first?",
    options: [
      { id: "A", text: "Remove every index" },
      { id: "B", text: "Return only the required rows and columns, using appropriate filtering and pagination" },
      { id: "C", text: "Add a second database connection for the same query" },
      { id: "D", text: "Use SELECT * and process all rows in JavaScript" }
    ],
    correctOptionId: "B",
    explanation: "Reducing unnecessary rows and columns can dramatically reduce database, network, and application work before more specialized optimization.",
    tags: ["optimization", "pagination", "select"]
  },

  {
    id: "sql-indexing-performance-q-050",
    quizId: "quiz_sql_indexing_performance",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which workflow is the strongest general strategy for diagnosing and improving a slow production query?",
    options: [
      { id: "A", text: "Add indexes to every column and hope the query improves" },
      { id: "B", text: "Rewrite the entire database schema immediately" },
      { id: "C", text: "Measure the real query, inspect its execution plan and data characteristics, identify the bottleneck, make a targeted change, then benchmark and monitor the result" },
      { id: "D", text: "Disable constraints and force the query to run faster" }
    ],
    correctOptionId: "C",
    explanation: "Effective SQL optimization is evidence-driven: measure first, inspect the plan and workload, make a targeted optimization, validate it with measurements, and monitor the production impact.",
    tags: ["optimization", "execution-plans", "indexes", "production"]
  }
];

export default sqlIndexingPerformanceQuestions;