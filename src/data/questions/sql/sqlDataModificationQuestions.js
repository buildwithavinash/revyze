const sqlDataModificationQuestions = [
  {
    id: "sql-data-modification-q-001",
    quizId: "quiz_sql_data_modification",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which SQL statement is used to add new rows to an existing table?",
    options: [
      { id: "A", text: "ADD" },
      { id: "B", text: "INSERT" },
      { id: "C", text: "CREATE" },
      { id: "D", text: "APPEND ROW" }
    ],
    correctOptionId: "B",
    explanation: "INSERT is used to add new records to an existing table.",
    tags: ["insert", "dml"]
  },

  {
    id: "sql-data-modification-q-002",
    quizId: "quiz_sql_data_modification",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement correctly inserts a user with an explicit name and email?",
    options: [
      { id: "A", text: "INSERT users (name, email) VALUES ('Ava', 'ava@example.com');" },
      { id: "B", text: "ADD INTO users (name, email) VALUES ('Ava', 'ava@example.com');" },
      { id: "C", text: "INSERT INTO users (name, email) VALUES ('Ava', 'ava@example.com');" },
      { id: "D", text: "CREATE ROW users (name, email) VALUES ('Ava', 'ava@example.com');" }
    ],
    correctOptionId: "C",
    explanation: "The standard syntax is INSERT INTO table (columns) VALUES (values).",
    tags: ["insert", "syntax"]
  },

  {
    id: "sql-data-modification-q-003",
    quizId: "quiz_sql_data_modification",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is specifying column names in an INSERT often recommended?",
    options: [
      { id: "A", text: "It makes the insert independent of column order and makes the intended values clearer" },
      { id: "B", text: "It automatically creates indexes" },
      { id: "C", text: "It prevents all constraint violations" },
      { id: "D", text: "It makes the database skip validation" }
    ],
    correctOptionId: "A",
    explanation: "Explicit column lists make the mapping between values and columns clear and reduce dependence on the table's column order.",
    tags: ["insert", "best-practices"]
  },

  {
    id: "sql-data-modification-q-004",
    quizId: "quiz_sql_data_modification",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which SQL statement changes existing rows?",
    options: [
      { id: "A", text: "MODIFY ROW" },
      { id: "B", text: "CHANGE" },
      { id: "C", text: "UPDATE" },
      { id: "D", text: "ALTER DATA" }
    ],
    correctOptionId: "C",
    explanation: "UPDATE modifies values in existing rows.",
    tags: ["update", "dml"]
  },

  {
    id: "sql-data-modification-q-005",
    quizId: "quiz_sql_data_modification",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the WHERE clause in an UPDATE statement?",
    options: [
      { id: "A", text: "To determine which rows should be modified" },
      { id: "B", text: "To rename the updated column" },
      { id: "C", text: "To commit the transaction" },
      { id: "D", text: "To create a backup" }
    ],
    correctOptionId: "A",
    explanation: "WHERE restricts the UPDATE to rows satisfying the specified condition.",
    tags: ["update", "where"]
  },

  {
    id: "sql-data-modification-q-006",
    quizId: "quiz_sql_data_modification",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a major risk of running UPDATE without a WHERE clause?",
    options: [
      { id: "A", text: "The table is automatically dropped" },
      { id: "B", text: "Every row may be updated" },
      { id: "C", text: "Only the first row is updated" },
      { id: "D", text: "The database always rejects the statement" }
    ],
    correctOptionId: "B",
    explanation: "Without WHERE, UPDATE normally applies to every row in the target table.",
    tags: ["update", "where", "safety"]
  },

  {
    id: "sql-data-modification-q-007",
    quizId: "quiz_sql_data_modification",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement removes rows from a table?",
    options: [
      { id: "A", text: "REMOVE ROWS" },
      { id: "B", text: "ERASE" },
      { id: "C", text: "DELETE" },
      { id: "D", text: "DROP ROWS" }
    ],
    correctOptionId: "C",
    explanation: "DELETE removes rows from a table.",
    tags: ["delete", "dml"]
  },

  {
    id: "sql-data-modification-q-008",
    quizId: "quiz_sql_data_modification",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens with this statement?\n\n```sql\nDELETE FROM users WHERE id = 42;\n```",
    options: [
      { id: "A", text: "The entire users table is deleted" },
      { id: "B", text: "The user with id 42 is targeted for deletion" },
      { id: "C", text: "A new user with id 42 is created" },
      { id: "D", text: "All users except id 42 are deleted" }
    ],
    correctOptionId: "B",
    explanation: "The WHERE condition limits the DELETE operation to rows whose id equals 42.",
    tags: ["delete", "where"]
  },

  {
    id: "sql-data-modification-q-009",
    quizId: "quiz_sql_data_modification",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main danger of DELETE without a WHERE clause?",
    options: [
      { id: "A", text: "It may delete every row in the table" },
      { id: "B", text: "It changes only the primary key" },
      { id: "C", text: "It automatically rolls back" },
      { id: "D", text: "It deletes only duplicate rows" }
    ],
    correctOptionId: "A",
    explanation: "DELETE without WHERE targets all rows in the table.",
    tags: ["delete", "where", "safety"]
  },

  {
    id: "sql-data-modification-q-010",
    quizId: "quiz_sql_data_modification",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement is generally used to remove all rows while keeping the table structure?",
    options: [
      { id: "A", text: "DROP TABLE" },
      { id: "B", text: "DELETE TABLE" },
      { id: "C", text: "TRUNCATE TABLE" },
      { id: "D", text: "REMOVE TABLE DATA" }
    ],
    correctOptionId: "C",
    explanation: "TRUNCATE TABLE removes all rows while retaining the table itself. Exact transactional behavior can vary by database system.",
    tags: ["truncate", "delete"]
  },

  {
    id: "sql-data-modification-q-011",
    quizId: "quiz_sql_data_modification",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement changes the email of user 15?",
    options: [
      { id: "A", text: "UPDATE users SET email = 'new@example.com' WHERE id = 15;" },
      { id: "B", text: "CHANGE users email TO 'new@example.com' WHERE id = 15;" },
      { id: "C", text: "MODIFY users email = 'new@example.com' FOR id = 15;" },
      { id: "D", text: "SET users.email = 'new@example.com' WHERE id = 15;" }
    ],
    correctOptionId: "A",
    explanation: "UPDATE table SET column = value WHERE condition is the standard pattern.",
    tags: ["update", "syntax"]
  },

  {
    id: "sql-data-modification-q-012",
    quizId: "quiz_sql_data_modification",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does an INSERT statement do when a required NOT NULL column is omitted and has no default value?",
    options: [
      { id: "A", text: "It always inserts an empty string" },
      { id: "B", text: "It may fail because the required value is missing" },
      { id: "C", text: "It automatically generates a random value" },
      { id: "D", text: "It ignores the constraint" }
    ],
    correctOptionId: "B",
    explanation: "A NOT NULL column without a default generally requires a value during insertion.",
    tags: ["insert", "constraints"]
  },

  {
    id: "sql-data-modification-q-013",
    quizId: "quiz_sql_data_modification",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a transaction allow you to do?",
    options: [
      { id: "A", text: "Group related database operations into a unit of work" },
      { id: "B", text: "Create unlimited databases automatically" },
      { id: "C", text: "Avoid all database constraints" },
      { id: "D", text: "Make every SELECT query faster" }
    ],
    correctOptionId: "A",
    explanation: "Transactions group related operations so they can be committed or rolled back as a unit.",
    tags: ["transactions", "acid"]
  },

  {
    id: "sql-data-modification-q-014",
    quizId: "quiz_sql_data_modification",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which command permanently commits the changes made in the current transaction?",
    options: [
      { id: "A", text: "SAVE" },
      { id: "B", text: "APPLY" },
      { id: "C", text: "COMMIT" },
      { id: "D", text: "CONFIRM" }
    ],
    correctOptionId: "C",
    explanation: "COMMIT makes the transaction's changes permanent according to the database's transaction semantics.",
    tags: ["commit", "transactions"]
  },

  {
    id: "sql-data-modification-q-015",
    quizId: "quiz_sql_data_modification",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does ROLLBACK generally do?",
    options: [
      { id: "A", text: "Creates a new transaction" },
      { id: "B", text: "Undoes uncommitted changes in the current transaction" },
      { id: "C", text: "Deletes the database schema" },
      { id: "D", text: "Commits all previous transactions" }
    ],
    correctOptionId: "B",
    explanation: "ROLLBACK generally reverses changes made within the current transaction that have not been committed.",
    tags: ["rollback", "transactions"]
  },

  {
    id: "sql-data-modification-q-016",
    quizId: "quiz_sql_data_modification",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which sequence correctly represents a simple transaction?",
    options: [
      { id: "A", text: "COMMIT → UPDATE → BEGIN" },
      { id: "B", text: "BEGIN → UPDATE → COMMIT" },
      { id: "C", text: "ROLLBACK → UPDATE → BEGIN" },
      { id: "D", text: "UPDATE → DROP → COMMIT" }
    ],
    correctOptionId: "B",
    explanation: "A typical explicit transaction begins, performs changes, and then commits if everything succeeds.",
    tags: ["transactions", "commit"]
  },

  {
    id: "sql-data-modification-q-017",
    quizId: "quiz_sql_data_modification",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are transactions important when transferring money between two accounts?",
    options: [
      { id: "A", text: "They guarantee that both accounts use the same password" },
      { id: "B", text: "They prevent the database from storing numeric values" },
      { id: "C", text: "They can ensure the debit and credit operations are treated as one unit of work" },
      { id: "D", text: "They automatically increase the account balance" }
    ],
    correctOptionId: "C",
    explanation: "A transfer typically requires multiple related changes. A transaction helps ensure they succeed or fail together.",
    tags: ["transactions", "real-world"]
  },

  {
    id: "sql-data-modification-q-018",
    quizId: "quiz_sql_data_modification",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "If an error occurs after one UPDATE in a transaction but before COMMIT, what can ROLLBACK generally do?",
    options: [
      { id: "A", text: "Reverse the uncommitted changes in that transaction" },
      { id: "B", text: "Restore every database backup ever created" },
      { id: "C", text: "Commit the failed operation" },
      { id: "D", text: "Delete the transaction log" }
    ],
    correctOptionId: "A",
    explanation: "ROLLBACK can undo changes made within the current uncommitted transaction.",
    tags: ["rollback", "transactions"]
  },

  {
    id: "sql-data-modification-q-019",
    quizId: "quiz_sql_data_modification",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is atomicity in the context of transactions?",
    options: [
      { id: "A", text: "Every query must use an index" },
      { id: "B", text: "A transaction's operations are treated as an all-or-nothing unit" },
      { id: "C", text: "Every table must have one column" },
      { id: "D", text: "Only numeric values can be stored" }
    ],
    correctOptionId: "B",
    explanation: "Atomicity means the transaction is treated as a unit: its changes are committed together or rolled back according to transaction semantics.",
    tags: ["acid", "atomicity"]
  },

  {
    id: "sql-data-modification-q-020",
    quizId: "quiz_sql_data_modification",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does consistency in ACID primarily refer to?",
    options: [
      { id: "A", text: "Every query returns rows in alphabetical order" },
      { id: "B", text: "The database moves between valid states according to its defined rules and constraints" },
      { id: "C", text: "Every transaction takes exactly one second" },
      { id: "D", text: "All tables must have identical schemas" }
    ],
    correctOptionId: "B",
    explanation: "Consistency means a successful transaction preserves the database's defined integrity rules and constraints.",
    tags: ["acid", "consistency"]
  },

  {
    id: "sql-data-modification-q-021",
    quizId: "quiz_sql_data_modification",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does isolation aim to provide?",
    options: [
      { id: "A", text: "A way to prevent tables from ever being joined" },
      { id: "B", text: "A guarantee that every query is read-only" },
      { id: "C", text: "Control over how concurrent transactions interact with each other's changes" },
      { id: "D", text: "Automatic deletion of concurrent sessions" }
    ],
    correctOptionId: "C",
    explanation: "Isolation controls the visibility and interaction of concurrent transaction operations, according to the database's isolation level.",
    tags: ["acid", "isolation"]
  },

  {
    id: "sql-data-modification-q-022",
    quizId: "quiz_sql_data_modification",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does durability mean after a transaction has been successfully committed?",
    options: [
      { id: "A", text: "The committed changes are intended to survive subsequent failures according to the database's durability guarantees" },
      { id: "B", text: "The transaction can always be rolled back from any future session" },
      { id: "C", text: "The changes are automatically copied into every database worldwide" },
      { id: "D", text: "The database stops accepting writes" }
    ],
    correctOptionId: "A",
    explanation: "Durability means committed changes are persisted so they survive failures within the guarantees of the database system.",
    tags: ["acid", "durability"]
  },

  {
    id: "sql-data-modification-q-023",
    quizId: "quiz_sql_data_modification",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which operation changes the value of a column but does not normally change the table's schema?",
    options: [
      { id: "A", text: "ALTER TABLE" },
      { id: "B", text: "UPDATE" },
      { id: "C", text: "CREATE TABLE" },
      { id: "D", text: "DROP TABLE" }
    ],
    correctOptionId: "B",
    explanation: "UPDATE changes stored row values. ALTER TABLE is used for schema changes.",
    tags: ["update", "dml", "ddl"]
  },

  {
    id: "sql-data-modification-q-024",
    quizId: "quiz_sql_data_modification",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement can insert multiple rows in one statement?",
    options: [
      { id: "A", text: "INSERT INTO users (name) VALUES ('A'), ('B'), ('C');" },
      { id: "B", text: "INSERT MANY users ('A', 'B', 'C');" },
      { id: "C", text: "MULTIINSERT users VALUES ('A', 'B', 'C');" },
      { id: "D", text: "ADD ROWS users ('A'), ('B'), ('C');" }
    ],
    correctOptionId: "A",
    explanation: "Many SQL dialects support multiple VALUES tuples in one INSERT statement.",
    tags: ["insert", "bulk-insert"]
  },

  {
    id: "sql-data-modification-q-025",
    quizId: "quiz_sql_data_modification",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a bulk INSERT be preferable to issuing hundreds of individual INSERT statements?",
    options: [
      { id: "A", text: "It always bypasses constraints" },
      { id: "B", text: "It can reduce statement and network overhead" },
      { id: "C", text: "It guarantees zero disk usage" },
      { id: "D", text: "It prevents transactions from being used" }
    ],
    correctOptionId: "B",
    explanation: "Batching multiple rows can reduce per-statement overhead and improve insertion efficiency, depending on the database and workload.",
    tags: ["insert", "performance"]
  },

  {
    id: "sql-data-modification-q-026",
    quizId: "quiz_sql_data_modification",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What should you generally do before executing a potentially dangerous UPDATE in production?",
    options: [
      { id: "A", text: "Remove all constraints" },
      { id: "B", text: "Verify the target rows with a SELECT using the same condition" },
      { id: "C", text: "Delete the table first" },
      { id: "D", text: "Disable the transaction system" }
    ],
    correctOptionId: "B",
    explanation: "A SELECT using the intended WHERE condition lets you inspect which rows will be affected before modifying them.",
    tags: ["update", "safety", "best-practices"]
  },

  {
    id: "sql-data-modification-q-027",
    quizId: "quiz_sql_data_modification",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the safest interpretation of a DELETE query that has no WHERE clause?",
    options: [
      { id: "A", text: "It deletes only the oldest row" },
      { id: "B", text: "It deletes all rows from the target table" },
      { id: "C", text: "It does nothing" },
      { id: "D", text: "It deletes only rows containing NULL" }
    ],
    correctOptionId: "B",
    explanation: "DELETE FROM table without WHERE targets every row in that table.",
    tags: ["delete", "safety"]
  },

  {
    id: "sql-data-modification-q-028",
    quizId: "quiz_sql_data_modification",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement can be used to update several columns in the same row?",
    options: [
      { id: "A", text: "UPDATE users SET name = 'Mia', age = 25 WHERE id = 7;" },
      { id: "B", text: "UPDATE users CHANGE name = 'Mia' AND age = 25 WHERE id = 7;" },
      { id: "C", text: "MODIFY users name = 'Mia', age = 25;" },
      { id: "D", text: "UPDATE users COLUMNS name, age VALUES ('Mia', 25);" }
    ],
    correctOptionId: "A",
    explanation: "Multiple column assignments can be separated by commas in the SET clause.",
    tags: ["update", "syntax"]
  },

  {
    id: "sql-data-modification-q-029",
    quizId: "quiz_sql_data_modification",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a SAVEPOINT within a transaction?",
    options: [
      { id: "A", text: "To create a permanent backup of the entire database" },
      { id: "B", text: "To mark a point that can be rolled back to without necessarily undoing the entire transaction" },
      { id: "C", text: "To commit the transaction automatically" },
      { id: "D", text: "To create a new table" }
    ],
    correctOptionId: "B",
    explanation: "SAVEPOINT creates an intermediate point within a transaction that can be targeted by a partial rollback.",
    tags: ["savepoint", "transactions"]
  },

  {
    id: "sql-data-modification-q-030",
    quizId: "quiz_sql_data_modification",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the conceptual difference between ROLLBACK and ROLLBACK TO SAVEPOINT?",
    options: [
      { id: "A", text: "They are always identical" },
      { id: "B", text: "ROLLBACK TO SAVEPOINT can undo work back to a specified point while keeping the transaction active" },
      { id: "C", text: "ROLLBACK commits the transaction while SAVEPOINT deletes it" },
      { id: "D", text: "ROLLBACK TO SAVEPOINT can only be used outside transactions" }
    ],
    correctOptionId: "B",
    explanation: "A rollback to a savepoint reverses changes made after that savepoint while allowing the surrounding transaction to continue.",
    tags: ["savepoint", "rollback", "transactions"]
  },

  {
    id: "sql-data-modification-q-031",
    quizId: "quiz_sql_data_modification",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "Suppose a transaction transfers ₹500: first it subtracts ₹500 from account A, then adds ₹500 to account B. Why should these operations belong to one transaction?",
    options: [
      { id: "A", text: "So the database can change both account IDs" },
      { id: "B", text: "So the transfer is not partially applied if one operation fails" },
      { id: "C", text: "So indexes are automatically removed" },
      { id: "D", text: "So both accounts can have duplicate primary keys" }
    ],
    correctOptionId: "B",
    explanation: "The two operations represent one logical business action. A transaction helps preserve atomicity if one operation fails.",
    tags: ["transactions", "atomicity", "real-world"]
  },

  {
    id: "sql-data-modification-q-032",
    quizId: "quiz_sql_data_modification",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "What can happen if two concurrent transactions update the same row under weak concurrency control?",
    options: [
      { id: "A", text: "Concurrency-related anomalies may occur depending on the database and isolation level" },
      { id: "B", text: "The database always creates two primary keys" },
      { id: "C", text: "The table is automatically deleted" },
      { id: "D", text: "Both transactions are guaranteed to see identical results" }
    ],
    correctOptionId: "A",
    explanation: "Concurrent modifications can produce anomalies depending on locking, MVCC, isolation levels, and the database engine.",
    tags: ["transactions", "concurrency", "isolation"]
  },

  {
    id: "sql-data-modification-q-033",
    quizId: "quiz_sql_data_modification",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can an UPDATE statement fail even when its SQL syntax is valid?",
    options: [
      { id: "A", text: "The SQL engine cannot execute UPDATE statements" },
      { id: "B", text: "The affected data may violate constraints such as UNIQUE, NOT NULL, or foreign-key rules" },
      { id: "C", text: "UPDATE never accepts strings" },
      { id: "D", text: "WHERE conditions are always invalid in UPDATE" }
    ],
    correctOptionId: "B",
    explanation: "A syntactically valid UPDATE can still violate integrity constraints and therefore fail.",
    tags: ["update", "constraints"]
  },

  {
    id: "sql-data-modification-q-034",
    quizId: "quiz_sql_data_modification",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens if an UPDATE attempts to assign a duplicate value to a column protected by a UNIQUE constraint?",
    options: [
      { id: "A", text: "The database generally rejects the violating change" },
      { id: "B", text: "The database silently removes the existing duplicate" },
      { id: "C", text: "The UNIQUE constraint is automatically disabled" },
      { id: "D", text: "The row is converted into NULL" }
    ],
    correctOptionId: "A",
    explanation: "A UNIQUE constraint prevents duplicate values within its defined scope, so the violating modification generally fails.",
    tags: ["update", "unique", "constraints"]
  },

  {
    id: "sql-data-modification-q-035",
    quizId: "quiz_sql_data_modification",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might DELETE of a parent row fail when child rows reference it through a foreign key?",
    options: [
      { id: "A", text: "DELETE cannot remove rows with numeric IDs" },
      { id: "B", text: "The foreign-key constraint may prevent creating orphaned child records" },
      { id: "C", text: "Foreign keys apply only to SELECT queries" },
      { id: "D", text: "The child table must always be empty" }
    ],
    correctOptionId: "B",
    explanation: "A foreign key may prevent deleting a referenced parent unless the relationship's configured action permits it, such as CASCADE.",
    tags: ["delete", "foreign-key", "constraints"]
  },

  {
    id: "sql-data-modification-q-036",
    quizId: "quiz_sql_data_modification",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does ON DELETE CASCADE generally mean?",
    options: [
      { id: "A", text: "Deleting a referenced parent can automatically delete related child rows" },
      { id: "B", text: "Deleting a child creates a new parent" },
      { id: "C", text: "All DELETE statements are permanently disabled" },
      { id: "D", text: "The foreign key is converted into a primary key" }
    ],
    correctOptionId: "A",
    explanation: "ON DELETE CASCADE defines a referential action where deleting a referenced row can cascade to related rows.",
    tags: ["foreign-key", "cascade", "delete"]
  },

  {
    id: "sql-data-modification-q-037",
    quizId: "quiz_sql_data_modification",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should application code generally use parameterized queries for INSERT, UPDATE, and DELETE values?",
    options: [
      { id: "A", text: "To prevent SQL injection and properly handle parameter values" },
      { id: "B", text: "To remove the need for database constraints" },
      { id: "C", text: "To guarantee every query uses an index" },
      { id: "D", text: "To automatically commit every transaction" }
    ],
    correctOptionId: "A",
    explanation: "Parameterized queries separate SQL structure from user-supplied values and are a fundamental defense against SQL injection.",
    tags: ["security", "parameterized-queries"]
  },

  {
    id: "sql-data-modification-q-038",
    quizId: "quiz_sql_data_modification",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a useful technique before executing a large DELETE in production?",
    options: [
      { id: "A", text: "Remove the WHERE clause" },
      { id: "B", text: "Use a SELECT with the same filtering condition to verify the intended rows" },
      { id: "C", text: "Disable all foreign keys permanently" },
      { id: "D", text: "Replace DELETE with DROP DATABASE" }
    ],
    correctOptionId: "B",
    explanation: "Previewing the target set with SELECT helps verify that the DELETE condition identifies exactly the intended records.",
    tags: ["delete", "safety", "production"]
  },

  {
    id: "sql-data-modification-q-039",
    quizId: "quiz_sql_data_modification",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is one reason to update records in smaller batches rather than one enormous UPDATE?",
    options: [
      { id: "A", text: "It can reduce transaction size, lock duration, and resource pressure depending on the workload" },
      { id: "B", text: "It guarantees no rows will ever be changed" },
      { id: "C", text: "It disables indexes automatically" },
      { id: "D", text: "It makes constraints unnecessary" }
    ],
    correctOptionId: "A",
    explanation: "Large modifications can consume substantial resources and hold locks for longer. Batching can make operational impact easier to manage.",
    tags: ["update", "performance", "production"]
  },

  {
    id: "sql-data-modification-q-040",
    quizId: "quiz_sql_data_modification",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes the difference between DELETE and DROP TABLE?",
    options: [
      { id: "A", text: "DELETE removes rows, while DROP TABLE removes the table object itself" },
      { id: "B", text: "DELETE removes the database, while DROP removes rows" },
      { id: "C", text: "They always have exactly the same effect" },
      { id: "D", text: "DROP TABLE only changes one row" }
    ],
    correctOptionId: "A",
    explanation: "DELETE operates on table rows, whereas DROP TABLE removes the table definition and its data.",
    tags: ["delete", "drop", "ddl-dml"]
  },

  {
    id: "sql-data-modification-q-041",
    quizId: "quiz_sql_data_modification",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes TRUNCATE compared with DELETE?",
    options: [
      { id: "A", text: "TRUNCATE always updates every row individually" },
      { id: "B", text: "TRUNCATE is generally intended to remove all rows efficiently while retaining the table structure" },
      { id: "C", text: "TRUNCATE changes one selected row" },
      { id: "D", text: "TRUNCATE creates a new table with the same data" }
    ],
    correctOptionId: "B",
    explanation: "TRUNCATE is designed for removing all rows efficiently while preserving the table object, though exact logging and transaction behavior varies by database.",
    tags: ["truncate", "delete"]
  },

  {
    id: "sql-data-modification-q-042",
    quizId: "quiz_sql_data_modification",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can a transaction be especially important when updating multiple related tables?",
    options: [
      { id: "A", text: "It can help ensure the related changes are committed consistently as one logical operation" },
      { id: "B", text: "It guarantees every table has the same number of rows" },
      { id: "C", text: "It prevents all SELECT statements" },
      { id: "D", text: "It eliminates the need for foreign keys" }
    ],
    correctOptionId: "A",
    explanation: "A transaction can group related changes so a failure does not leave only part of the logical operation committed.",
    tags: ["transactions", "consistency"]
  },

  {
    id: "sql-data-modification-q-043",
    quizId: "quiz_sql_data_modification",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a lost update?",
    options: [
      { id: "A", text: "A database table disappearing after SELECT" },
      { id: "B", text: "A situation where one concurrent update overwrites another update unintentionally" },
      { id: "C", text: "A failed INSERT caused by a missing column" },
      { id: "D", text: "A deleted database backup" }
    ],
    correctOptionId: "B",
    explanation: "A lost update can occur when concurrent transactions read and modify the same data and one change unintentionally overwrites another.",
    tags: ["transactions", "concurrency", "lost-update"]
  },

  {
    id: "sql-data_modification-q-044",
    quizId: "quiz_sql_data_modification",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach can help avoid accidentally updating every row when changing one user?",
    options: [
      { id: "A", text: "Use a precise WHERE condition based on a unique identifier" },
      { id: "B", text: "Always omit WHERE" },
      { id: "C", text: "Use ORDER BY instead of WHERE" },
      { id: "D", text: "Drop the primary key first" }
    ],
    correctOptionId: "A",
    explanation: "Filtering by a unique identifier such as a primary key sharply limits the target set.",
    tags: ["update", "where", "safety"]
  },

  {
    id: "sql-data-modification-q-045",
    quizId: "quiz_sql_data_modification",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of checking the affected-row count after an UPDATE or DELETE?",
    options: [
      { id: "A", text: "To verify that the number of affected records matches expectations" },
      { id: "B", text: "To create a new primary key" },
      { id: "C", text: "To disable transactions" },
      { id: "D", text: "To convert DELETE into SELECT" }
    ],
    correctOptionId: "A",
    explanation: "An unexpected affected-row count can indicate that a condition was too broad or too narrow.",
    tags: ["update", "delete", "safety"]
  },

  {
    id: "sql-data_modification-q-046",
    quizId: "quiz_sql_data_modification",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "An application needs to create an order and several order-item rows. Why is a transaction appropriate?",
    options: [
      { id: "A", text: "It allows the application to ensure the order and its required items are treated as one logical operation" },
      { id: "B", text: "It automatically creates product records" },
      { id: "C", text: "It removes all foreign-key constraints" },
      { id: "D", text: "It guarantees every item has the same price" }
    ],
    correctOptionId: "A",
    explanation: "Creating the parent order and its dependent items is one logical operation. A transaction helps prevent incomplete persistence when a step fails.",
    tags: ["transactions", "insert", "relationships"]
  },

  {
    id: "sql-data_modification-q-047",
    quizId: "quiz_sql_data_modification",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is generally true about a committed transaction?",
    options: [
      { id: "A", text: "Its changes are no longer treated as uncommitted work that can be reversed by a normal rollback of that transaction" },
      { id: "B", text: "Its changes are guaranteed to disappear after the connection closes" },
      { id: "C", text: "Its changes can always be undone with ROLLBACK in a new transaction" },
      { id: "D", text: "It automatically deletes the transaction log" }
    ],
    correctOptionId: "A",
    explanation: "COMMIT ends the transaction and makes its changes durable according to the database system's guarantees. A later ordinary rollback cannot undo that already-committed transaction.",
    tags: ["commit", "rollback", "transactions"]
  },

  {
    id: "sql-data_modification-q-048",
    quizId: "quiz_sql_data_modification",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should a long-running transaction generally be avoided when possible?",
    options: [
      { id: "A", text: "It can hold locks or transactional resources longer and increase contention" },
      { id: "B", text: "It makes SELECT syntax invalid" },
      { id: "C", text: "It automatically drops unused tables" },
      { id: "D", text: "It prevents all indexes from existing" }
    ],
    correctOptionId: "A",
    explanation: "Long transactions can retain locks, snapshots, or other resources and may increase contention or cleanup pressure depending on the database.",
    tags: ["transactions", "performance", "concurrency"]
  },

  {
    id: "sql-data_modification-q-049",
    quizId: "quiz_sql_data_modification",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "An UPDATE changes 10,000 rows when only 10 were expected. What is the best immediate response?",
    options: [
      { id: "A", text: "Continue because the database already accepted the query" },
      { id: "B", text: "Investigate the condition and, if still uncommitted, consider rolling back the transaction" },
      { id: "C", text: "Drop the table immediately" },
      { id: "D", text: "Run the same UPDATE again" }
    ],
    correctOptionId: "B",
    explanation: "An unexpected affected-row count is a warning sign. If the change is still inside a transaction, rollback may allow the unintended modification to be reversed.",
    tags: ["update", "rollback", "production", "debugging"]
  },

  {
    id: "sql-data_modification-q-050",
    quizId: "quiz_sql_data_modification",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which workflow is the safest general pattern for a high-impact data modification?",
    options: [
      { id: "A", text: "Run DELETE immediately, then inspect what changed" },
      { id: "B", text: "Disable constraints, modify everything, and restart the database" },
      { id: "C", text: "Identify and preview the target rows, use a precise condition, perform the change in an appropriate transaction, verify the result, then commit" },
      { id: "D", text: "Always use DROP TABLE instead of UPDATE or DELETE" }
    ],
    correctOptionId: "C",
    explanation: "For high-impact changes, careful targeting, previewing, transactional control, verification, and an intentional commit provide a safer workflow.",
    tags: ["transactions", "update", "delete", "production", "best-practices"]
  }
];

export default sqlDataModificationQuestions;