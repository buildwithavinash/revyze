const sqlConstraintsRelationshipsQuestions = [
  {
    id: "sql-constraints-relationships-q-001",
    quizId: "quiz_sql_constraints_relationships",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a database constraint?",
    options: [
      { id: "A", text: "A rule enforced by the database to restrict or validate stored data" },
      { id: "B", text: "A command that always creates an index" },
      { id: "C", text: "A temporary query result" },
      { id: "D", text: "A database backup mechanism" }
    ],
    correctOptionId: "A",
    explanation: "Constraints enforce rules that help maintain data integrity.",
    tags: ["constraints", "fundamentals"]
  },

  {
    id: "sql-constraints-relationships-q-002",
    quizId: "quiz_sql_constraints_relationships",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main purpose of a primary key?",
    options: [
      { id: "A", text: "To store multiple values in one column" },
      { id: "B", text: "To uniquely identify each row in a table" },
      { id: "C", text: "To automatically encrypt records" },
      { id: "D", text: "To connect every table in a database" }
    ],
    correctOptionId: "B",
    explanation: "A primary key provides a unique identifier for each row.",
    tags: ["primary-key", "constraints"]
  },

  {
    id: "sql-constraints-relationships-q-003",
    quizId: "quiz_sql_constraints_relationships",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property is normally required of a primary key?",
    options: [
      { id: "A", text: "It must contain duplicate values" },
      { id: "B", text: "It must contain only text" },
      { id: "C", text: "It must uniquely identify rows and cannot contain NULL values" },
      { id: "D", text: "It must always be a foreign key" }
    ],
    correctOptionId: "C",
    explanation: "A primary key must uniquely identify each row and cannot be NULL.",
    tags: ["primary-key"]
  },

  {
    id: "sql-constraints-relationships-q-004",
    quizId: "quiz_sql_constraints_relationships",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a FOREIGN KEY constraint primarily enforce?",
    options: [
      { id: "A", text: "A relationship between rows in related tables" },
      { id: "B", text: "A maximum table size" },
      { id: "C", text: "Alphabetical ordering" },
      { id: "D", text: "Automatic encryption" }
    ],
    correctOptionId: "A",
    explanation: "A foreign key references a key in another table and helps enforce referential integrity.",
    tags: ["foreign-key", "relationships"]
  },

  {
    id: "sql-constraints-relationships-q-005",
    quizId: "quiz_sql_constraints_relationships",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a UNIQUE constraint generally guarantee?",
    options: [
      { id: "A", text: "Every row must have the same value" },
      { id: "B", text: "Values within the constrained key must not duplicate according to the database's uniqueness rules" },
      { id: "C", text: "The column cannot contain NULL under every database system" },
      { id: "D", text: "The column automatically becomes a primary key" }
    ],
    correctOptionId: "B",
    explanation: "UNIQUE prevents duplicate constrained values. NULL handling can vary by database system.",
    tags: ["unique", "constraints"]
  },

  {
    id: "sql-constraints-relationships-q-006",
    quizId: "quiz_sql_constraints_relationships",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does NOT NULL enforce?",
    options: [
      { id: "A", text: "The column must contain a value rather than NULL" },
      { id: "B", text: "The value must be unique" },
      { id: "C", text: "The column must be numeric" },
      { id: "D", text: "The column must be indexed" }
    ],
    correctOptionId: "A",
    explanation: "NOT NULL prevents NULL from being stored in the constrained column.",
    tags: ["not-null", "constraints"]
  },

  {
    id: "sql-constraints-relationships-q-007",
    quizId: "quiz_sql_constraints_relationships",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of a CHECK constraint?",
    options: [
      { id: "A", text: "To create a foreign key automatically" },
      { id: "B", text: "To require a condition to be satisfied by inserted or updated values" },
      { id: "C", text: "To sort a table" },
      { id: "D", text: "To remove duplicate rows" }
    ],
    correctOptionId: "B",
    explanation: "CHECK constraints enforce conditions on data values.",
    tags: ["check", "constraints"]
  },

  {
    id: "sql-constraints-relationships-q-008",
    quizId: "quiz_sql_constraints_relationships",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which constraint is most appropriate for ensuring an employee's salary cannot be negative?",
    options: [
      { id: "A", text: "FOREIGN KEY" },
      { id: "B", text: "UNIQUE" },
      { id: "C", text: "CHECK (salary >= 0)" },
      { id: "D", text: "PRIMARY KEY" }
    ],
    correctOptionId: "C",
    explanation: "A CHECK condition can enforce that salary is zero or greater.",
    tags: ["check", "data-integrity"]
  },

  {
    id: "sql-constraints-relationships-q-009",
    quizId: "quiz_sql_constraints_relationships",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "A customer can place many orders, while each order belongs to one customer. What relationship is this?",
    options: [
      { id: "A", text: "Many-to-many" },
      { id: "B", text: "One-to-one" },
      { id: "C", text: "One-to-many" },
      { id: "D", text: "Many-to-zero" }
    ],
    correctOptionId: "C",
    explanation: "One customer can have many orders, making this a one-to-many relationship.",
    tags: ["relationships", "one-to-many"]
  },

  {
    id: "sql-constraints-relationships-q-010",
    quizId: "quiz_sql_constraints_relationships",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "How is a many-to-many relationship commonly modeled in a relational database?",
    options: [
      { id: "A", text: "With a junction table containing references to both entities" },
      { id: "B", text: "By storing comma-separated IDs in one column" },
      { id: "C", text: "By removing both primary keys" },
      { id: "D", text: "By putting every entity into one table" }
    ],
    correctOptionId: "A",
    explanation: "A junction table converts a many-to-many relationship into two one-to-many relationships.",
    tags: ["many-to-many", "junction-table"]
  },

  {
    id: "sql-constraints-relationships-q-011",
    quizId: "quiz_sql_constraints_relationships",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "In an `orders` table, what would `customer_id` typically be?",
    options: [
      { id: "A", text: "A foreign key referencing the customer table" },
      { id: "B", text: "A CHECK constraint" },
      { id: "C", text: "A database name" },
      { id: "D", text: "An index type" }
    ],
    correctOptionId: "A",
    explanation: "customer_id can reference the primary key of the customers table.",
    tags: ["foreign-key", "relationships"]
  },

  {
    id: "sql-constraints-relationships-q-012",
    quizId: "quiz_sql_constraints_relationships",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is referential integrity?",
    options: [
      { id: "A", text: "Ensuring references between related tables remain valid according to their constraints" },
      { id: "B", text: "Ensuring every table has exactly 10 rows" },
      { id: "C", text: "Ensuring all values are strings" },
      { id: "D", text: "Ensuring every query uses an index" }
    ],
    correctOptionId: "A",
    explanation: "Referential integrity prevents invalid relationships such as a child row referencing a nonexistent parent.",
    tags: ["referential-integrity", "foreign-key"]
  },

  {
    id: "sql-constraints-relationships-q-013",
    quizId: "quiz_sql_constraints_relationships",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What can happen if you insert a foreign-key value that does not exist in the referenced parent table?",
    options: [
      { id: "A", text: "The database generally rejects the operation when the foreign-key constraint is enforced" },
      { id: "B", text: "The parent row is automatically created in every database" },
      { id: "C", text: "The foreign key becomes a primary key" },
      { id: "D", text: "The invalid value is always converted to zero" }
    ],
    correctOptionId: "A",
    explanation: "A foreign-key constraint generally prevents references to nonexistent parent keys.",
    tags: ["foreign-key", "referential-integrity"]
  },

  {
    id: "sql-constraints-relationships-q-014",
    quizId: "quiz_sql_constraints_relationships",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does ON DELETE CASCADE generally do?",
    options: [
      { id: "A", text: "Prevents every DELETE statement" },
      { id: "B", text: "Automatically deletes related child rows when the referenced parent row is deleted" },
      { id: "C", text: "Copies the parent into another table" },
      { id: "D", text: "Turns the foreign key into a UNIQUE constraint" }
    ],
    correctOptionId: "B",
    explanation: "CASCADE defines a referential action that propagates deletion from the referenced parent to related child rows.",
    tags: ["foreign-key", "cascade"]
  },

  {
    id: "sql-constraints-relationships-q-015",
    quizId: "quiz_sql_constraints_relationships",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one potential danger of ON DELETE CASCADE?",
    options: [
      { id: "A", text: "It can cause more related rows to be deleted than someone expected" },
      { id: "B", text: "It prevents foreign keys from working" },
      { id: "C", text: "It always creates duplicate rows" },
      { id: "D", text: "It disables transactions" }
    ],
    correctOptionId: "A",
    explanation: "Cascading deletion can propagate through relationships, so it should be designed carefully.",
    tags: ["cascade", "delete", "relationships"]
  },

  {
    id: "sql-constraints-relationships-q-016",
    quizId: "quiz_sql_constraints_relationships",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a composite primary key?",
    options: [
      { id: "A", text: "A primary key made from multiple columns together" },
      { id: "B", text: "A primary key stored in two databases" },
      { id: "C", text: "Two unrelated primary keys on the same row" },
      { id: "D", text: "A primary key that allows duplicates" }
    ],
    correctOptionId: "A",
    explanation: "A composite primary key uses a combination of columns to uniquely identify a row.",
    tags: ["composite-key", "primary-key"]
  },

  {
    id: "sql-constraints-relationships-q-017",
    quizId: "quiz_sql_constraints_relationships",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which scenario is a common use case for a composite primary key?",
    options: [
      { id: "A", text: "A junction table representing a student-course relationship" },
      { id: "B", text: "A table storing one database password" },
      { id: "C", text: "A table with no rows" },
      { id: "D", text: "A configuration file" }
    ],
    correctOptionId: "A",
    explanation: "A junction table can use `(student_id, course_id)` as a composite key to prevent duplicate relationships.",
    tags: ["composite-key", "many-to-many"]
  },

  {
    id: "sql-constraints-relationships-q-018",
    quizId: "quiz_sql_constraints_relationships",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a surrogate key?",
    options: [
      { id: "A", text: "A generated identifier that has no direct business meaning" },
      { id: "B", text: "A foreign key copied from another table" },
      { id: "C", text: "A duplicate natural key" },
      { id: "D", text: "A CHECK constraint" }
    ],
    correctOptionId: "A",
    explanation: "IDs such as auto-increment integers or generated UUIDs are common surrogate keys.",
    tags: ["surrogate-key", "keys"]
  },

  {
    id: "sql-constraints-relationships-q-019",
    quizId: "quiz_sql_constraints_relationships",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a natural key?",
    options: [
      { id: "A", text: "A key based on data that already has meaningful business identity" },
      { id: "B", text: "A randomly generated database password" },
      { id: "C", text: "A temporary transaction ID" },
      { id: "D", text: "An automatically created index" }
    ],
    correctOptionId: "A",
    explanation: "A natural key uses meaningful domain data, such as a government-issued identifier where appropriate.",
    tags: ["natural-key", "keys"]
  },

  {
    id: "sql-constraints-relationships-q-020",
    quizId: "quiz_sql_constraints_relationships",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might a surrogate key be preferred over a natural key?",
    options: [
      { id: "A", text: "It can provide a stable identifier independent of changing business attributes" },
      { id: "B", text: "It guarantees every query is faster" },
      { id: "C", text: "It eliminates all foreign keys" },
      { id: "D", text: "It makes normalization unnecessary" }
    ],
    correctOptionId: "A",
    explanation: "Business attributes can change, while a surrogate identifier can remain stable as the record's identity.",
    tags: ["surrogate-key", "database-design"]
  },

  {
    id: "sql-constraints-relationships-q-021",
    quizId: "quiz_sql_constraints_relationships",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is normalization primarily intended to reduce?",
    options: [
      { id: "A", text: "Data redundancy and modification anomalies" },
      { id: "B", text: "The number of valid users" },
      { id: "C", text: "The number of SQL statements supported" },
      { id: "D", text: "The need for primary keys" }
    ],
    correctOptionId: "A",
    explanation: "Normalization structures data to reduce unnecessary duplication and anomalies.",
    tags: ["normalization"]
  },

  {
    id: "sql-constraints-relationships-q-022",
    quizId: "quiz_sql_constraints_relationships",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does First Normal Form (1NF) generally require?",
    options: [
      { id: "A", text: "Each field contains an atomic value rather than an unstructured list of values" },
      { id: "B", text: "Every table contains exactly one row" },
      { id: "C", text: "Every table has two primary keys" },
      { id: "D", text: "Every column is indexed" }
    ],
    correctOptionId: "A",
    explanation: "1NF generally requires atomic values and avoids repeating groups or multi-valued fields within a single cell.",
    tags: ["1nf", "normalization"]
  },

  {
    id: "sql-constraints-relationships-q-023",
    quizId: "quiz_sql_constraints_relationships",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which design most clearly violates the atomic-value principle?",
    options: [
      { id: "A", text: "One phone number per row" },
      { id: "B", text: "A `phone_numbers` column containing `9876, 1234, 5555` as one text value" },
      { id: "C", text: "A single email address in an email column" },
      { id: "D", text: "A single date in a date column" }
    ],
    correctOptionId: "B",
    explanation: "Multiple independent phone numbers stored as one delimited string are not atomic values.",
    tags: ["1nf", "normalization"]
  },

  {
    id: "sql-constraints-relationships-q-024",
    quizId: "quiz_sql_constraints_relationships",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What problem can occur when customer information is duplicated in every order row?",
    options: [
      { id: "A", text: "Update anomalies and unnecessary redundancy" },
      { id: "B", text: "Foreign keys become impossible" },
      { id: "C", text: "SQL SELECT stops working" },
      { id: "D", text: "Primary keys automatically disappear" }
    ],
    correctOptionId: "A",
    explanation: "Repeated customer data can become inconsistent when one copy is updated and others are not.",
    tags: ["normalization", "redundancy"]
  },

  {
    id: "sql-constraints-relationships-q-025",
    quizId: "quiz_sql_constraints_relationships",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an update anomaly?",
    options: [
      { id: "A", text: "A situation where duplicated information must be updated in multiple places and can become inconsistent" },
      { id: "B", text: "A query that uses UPDATE correctly" },
      { id: "C", text: "A failed SELECT statement" },
      { id: "D", text: "A database backup problem" }
    ],
    correctOptionId: "A",
    explanation: "Update anomalies arise when the same fact is duplicated and changes are not consistently applied everywhere.",
    tags: ["normalization", "update-anomaly"]
  },

  {
    id: "sql-constraints-relationships-q-026",
    quizId: "quiz_sql_constraints_relationships",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an insertion anomaly?",
    options: [
      { id: "A", text: "A design problem where a fact cannot be inserted without also supplying unrelated information" },
      { id: "B", text: "A syntax error in INSERT" },
      { id: "C", text: "An index becoming fragmented" },
      { id: "D", text: "A transaction being committed" }
    ],
    correctOptionId: "A",
    explanation: "Poorly structured tables can force unrelated data to be present before a new independent fact can be stored.",
    tags: ["normalization", "insert-anomaly"]
  },

  {
    id: "sql-constraints-relationships-q-027",
    quizId: "quiz_sql_constraints_relationships",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a deletion anomaly?",
    options: [
      { id: "A", text: "Deleting one fact unintentionally removes another fact that should have been preserved" },
      { id: "B", text: "A DELETE syntax error" },
      { id: "C", text: "A failed database connection" },
      { id: "D", text: "An index being created" }
    ],
    correctOptionId: "A",
    explanation: "Deletion anomalies result from storing independent facts together so that deleting one can remove the other.",
    tags: ["normalization", "delete-anomaly"]
  },

  {
    id: "sql-constraints-relationships-q-028",
    quizId: "quiz_sql_constraints_relationships",
    order: 28,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main concern addressed by Second Normal Form (2NF)?",
    options: [
      { id: "A", text: "Removing partial dependencies on part of a composite key" },
      { id: "B", text: "Removing all foreign keys" },
      { id: "C", text: "Removing every NULL value" },
      { id: "D", text: "Adding an index to every column" }
    ],
    correctOptionId: "A",
    explanation: "2NF addresses non-key attributes that depend on only part of a composite candidate key.",
    tags: ["2nf", "normalization"]
  },

  {
    id: "sql-constraints-relationships-q-029",
    quizId: "quiz_sql_constraints_relationships",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a partial dependency?",
    options: [
      { id: "A", text: "A non-key attribute depends on only part of a composite candidate key" },
      { id: "B", text: "A foreign key contains NULL" },
      { id: "C", text: "A table contains only one row" },
      { id: "D", text: "A query has a partial WHERE clause" }
    ],
    correctOptionId: "A",
    explanation: "Partial dependency is relevant when a candidate key contains multiple attributes and a non-key attribute depends on only a subset.",
    tags: ["2nf", "dependencies"]
  },

  {
    id: "sql-constraints-relationships-q-030",
    quizId: "quiz_sql_constraints_relationships",
    order: 30,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does Third Normal Form (3NF) generally aim to eliminate?",
    options: [
      { id: "A", text: "Transitive dependencies of non-key attributes" },
      { id: "B", text: "Primary keys" },
      { id: "C", text: "All foreign keys" },
      { id: "D", text: "All indexes" }
    ],
    correctOptionId: "A",
    explanation: "3NF generally requires non-key attributes to depend on the key rather than on other non-key attributes.",
    tags: ["3nf", "normalization"]
  },

  {
    id: "sql-constraints-relationships-q-031",
    quizId: "quiz_sql_constraints_relationships",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider `employees(employee_id, department_id, department_name)`. If department_name depends on department_id rather than employee_id, what design issue exists?",
    options: [
      { id: "A", text: "A transitive dependency" },
      { id: "B", text: "A missing SELECT statement" },
      { id: "C", text: "A many-to-many relationship" },
      { id: "D", text: "A composite index" }
    ],
    correctOptionId: "A",
    explanation: "department_name depends on department_id, which itself is associated with the employee key, creating a transitive dependency.",
    tags: ["3nf", "normalization"]
  },

  {
    id: "sql-constraints-relationships-q-032",
    quizId: "quiz_sql_constraints_relationships",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design is generally more normalized?",
    options: [
      { id: "A", text: "A users table containing department_name repeatedly for every user" },
      { id: "B", text: "A users table referencing a separate departments table through department_id" },
      { id: "C", text: "A users table storing all departments as comma-separated text" },
      { id: "D", text: "One table containing every entity and repeated attributes" }
    ],
    correctOptionId: "B",
    explanation: "Separating department data and referencing it avoids unnecessary duplication.",
    tags: ["normalization", "foreign-key"]
  },

  {
    id: "sql-constraints-relationships-q-033",
    quizId: "quiz_sql_constraints_relationships",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "When might denormalization be deliberately introduced?",
    options: [
      { id: "A", text: "When controlled redundancy can improve read performance or simplify frequently used queries" },
      { id: "B", text: "Whenever foreign keys are required" },
      { id: "C", text: "To guarantee zero storage usage" },
      { id: "D", text: "To remove all integrity rules" }
    ],
    correctOptionId: "A",
    explanation: "Denormalization can be a deliberate performance trade-off, particularly in read-heavy workloads.",
    tags: ["denormalization", "performance"]
  },

  {
    id: "sql-constraints-relationships-q-034",
    quizId: "quiz_sql_constraints_relationships",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main trade-off of denormalization?",
    options: [
      { id: "A", text: "Potentially faster reads at the cost of additional redundancy and consistency complexity" },
      { id: "B", text: "Faster writes with zero additional storage" },
      { id: "C", text: "Elimination of all joins and all constraints without consequences" },
      { id: "D", text: "Guaranteed removal of duplicate data" }
    ],
    correctOptionId: "A",
    explanation: "Denormalization can improve read efficiency but creates more duplicated data that must remain consistent.",
    tags: ["denormalization", "tradeoffs"]
  },

  {
    id: "sql-constraints-relationships-q-035",
    quizId: "quiz_sql_constraints_relationships",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "A `users` table has a UNIQUE constraint on `email`. What rule does this represent?",
    options: [
      { id: "A", text: "Two users cannot have the same email value under the constraint's uniqueness rules" },
      { id: "B", text: "Every user must have two emails" },
      { id: "C", text: "Email becomes the foreign key automatically" },
      { id: "D", text: "Email values can never be NULL in every database" }
    ],
    correctOptionId: "A",
    explanation: "A UNIQUE constraint prevents duplicate constrained values. Handling of NULL can differ across database systems.",
    tags: ["unique", "constraints"]
  },

  {
    id: "sql-constraints-relationships-q-036",
    quizId: "quiz_sql_constraints_relationships",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "Can a table have multiple UNIQUE constraints?",
    options: [
      { id: "A", text: "No, only one UNIQUE constraint is allowed" },
      { id: "B", text: "Yes, a table can have multiple unique constraints" },
      { id: "C", text: "Only if it has no primary key" },
      { id: "D", text: "Only when all columns are numeric" }
    ],
    correctOptionId: "B",
    explanation: "A table can have multiple unique constraints on different columns or combinations of columns.",
    tags: ["unique", "constraints"]
  },

  {
    id: "sql-constraints-relationships-q-037",
    quizId: "quiz_sql_constraints_relationships",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a candidate key?",
    options: [
      { id: "A", text: "A minimal set of attributes capable of uniquely identifying a row" },
      { id: "B", text: "Any column containing NULL" },
      { id: "C", text: "A foreign key that points nowhere" },
      { id: "D", text: "A temporary index" }
    ],
    correctOptionId: "A",
    explanation: "A candidate key is a minimal unique identifier. One candidate key is chosen as the primary key.",
    tags: ["candidate-key", "keys"]
  },

  {
    id: "sql-constraints-relationships-q-038",
    quizId: "quiz_sql_constraints_relationships",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is an alternate key?",
    options: [
      { id: "A", text: "A candidate key that was not selected as the primary key" },
      { id: "B", text: "A foreign key without a parent" },
      { id: "C", text: "A duplicate primary key" },
      { id: "D", text: "A key used only for sorting" }
    ],
    correctOptionId: "A",
    explanation: "When multiple candidate keys exist, the ones not chosen as the primary key are often called alternate keys.",
    tags: ["candidate-key", "alternate-key"]
  },

  {
    id: "sql-constraints-relationships-q-039",
    quizId: "quiz_sql_constraints_relationships",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the difference between a primary key and a foreign key?",
    options: [
      { id: "A", text: "A primary key identifies rows in its own table, while a foreign key references a key in another table" },
      { id: "B", text: "A primary key always references another table" },
      { id: "C", text: "A foreign key must uniquely identify every row in its own table" },
      { id: "D", text: "They are always identical constraints" }
    ],
    correctOptionId: "A",
    explanation: "Primary keys identify records; foreign keys establish references between tables.",
    tags: ["primary-key", "foreign-key"]
  },

  {
    id: "sql-constraints-relationships-q-040",
    quizId: "quiz_sql_constraints_relationships",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Can a foreign key contain duplicate values?",
    options: [
      { id: "A", text: "No, foreign keys must always be unique" },
      { id: "B", text: "Yes, unless another constraint prevents duplicates" },
      { id: "C", text: "Only if the parent table has no primary key" },
      { id: "D", text: "Only for numeric values" }
    ],
    correctOptionId: "B",
    explanation: "Many child rows can reference the same parent, so foreign-key values commonly repeat.",
    tags: ["foreign-key", "one-to-many"]
  },

  {
    id: "sql-constraints-relationships-q-041",
    quizId: "quiz_sql_constraints_relationships",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does a one-to-one relationship mean?",
    options: [
      { id: "A", text: "Each entity instance is associated with at most one corresponding instance on the other side, according to the model" },
      { id: "B", text: "Every row references every other row" },
      { id: "C", text: "One parent must have thousands of children" },
      { id: "D", text: "No foreign keys are required" }
    ],
    correctOptionId: "A",
    explanation: "A one-to-one relationship associates each entity with at most one related entity, subject to the constraints defined.",
    tags: ["one-to-one", "relationships"]
  },

  {
    id: "sql-constraints-relationships-q-042",
    quizId: "quiz_sql_constraints_relationships",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "How can a one-to-one relationship commonly be enforced?",
    options: [
      { id: "A", text: "By making the foreign-key column UNIQUE in the referencing table" },
      { id: "B", text: "By removing all keys" },
      { id: "C", text: "By allowing unlimited duplicate foreign keys without restriction" },
      { id: "D", text: "By storing related IDs as comma-separated text" }
    ],
    correctOptionId: "A",
    explanation: "A UNIQUE constraint on the foreign key prevents multiple child rows from referencing the same parent.",
    tags: ["one-to-one", "unique", "foreign-key"]
  },

  {
    id: "sql-constraints-relationships-q-043",
    quizId: "quiz_sql_constraints_relationships",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design is preferable for storing products belonging to multiple categories?",
    options: [
      { id: "A", text: "A junction table such as product_categories(product_id, category_id)" },
      { id: "B", text: "A comma-separated category list in products" },
      { id: "C", text: "A separate database for every category" },
      { id: "D", text: "A single category column containing all categories" }
    ],
    correctOptionId: "A",
    explanation: "Products and categories form a many-to-many relationship, which is naturally represented using a junction table.",
    tags: ["many-to-many", "junction-table"]
  },

  {
    id: "sql-constraints-relationships-q-044",
    quizId: "quiz_sql_constraints_relationships",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might a junction table use `(product_id, category_id)` as a composite primary key?",
    options: [
      { id: "A", text: "To prevent the same product-category relationship from being inserted twice" },
      { id: "B", text: "To allow unlimited duplicate relationships" },
      { id: "C", text: "To remove both foreign keys" },
      { id: "D", text: "To store product names automatically" }
    ],
    correctOptionId: "A",
    explanation: "The composite key uniquely identifies each relationship pair.",
    tags: ["junction-table", "composite-key"]
  },

  {
    id: "sql-constraints-relationships-q-045",
    quizId: "quiz_sql_constraints_relationships",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a self-referencing foreign key?",
    options: [
      { id: "A", text: "A foreign key in a table that references a key in the same table" },
      { id: "B", text: "A foreign key with no constraint" },
      { id: "C", text: "A foreign key referencing a different database server only" },
      { id: "D", text: "A primary key with duplicate values" }
    ],
    correctOptionId: "A",
    explanation: "A self-referencing foreign key is useful for hierarchical structures such as employees and managers.",
    tags: ["self-reference", "foreign-key"]
  },

  {
    id: "sql-constraints-relationships-q-046",
    quizId: "quiz_sql_constraints_relationships",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which schema is a reasonable model for employees and managers when each employee can have one manager?",
    options: [
      { id: "A", text: "employees(id, name, manager_id), where manager_id references employees(id)" },
      { id: "B", text: "employees(id, name, manager_names_csv)" },
      { id: "C", text: "managers stored as a comma-separated field in every employee row" },
      { id: "D", text: "A separate table for every manager" }
    ],
    correctOptionId: "A",
    explanation: "A self-referencing foreign key naturally represents an employee-manager hierarchy.",
    tags: ["self-reference", "relationships"]
  },

  {
    id: "sql-constraints-relationships-q-047",
    quizId: "quiz_sql_constraints_relationships",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should business rules be enforced with database constraints when appropriate rather than relying only on application validation?",
    options: [
      { id: "A", text: "Constraints provide a database-level integrity boundary that can protect data from multiple clients or code paths" },
      { id: "B", text: "Application validation can never work" },
      { id: "C", text: "Constraints automatically replace authentication" },
      { id: "D", text: "Constraints make indexes unnecessary" }
    ],
    correctOptionId: "A",
    explanation: "Database constraints provide centralized protection even when data can be modified by different applications, scripts, or services.",
    tags: ["constraints", "data-integrity"]
  },

  {
    id: "sql-constraints-relationships-q-048",
    quizId: "quiz_sql_constraints_relationships",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design best represents a normalized customer/order system?",
    options: [
      { id: "A", text: "customers(id, name) and orders(id, customer_id, total), with customer_id referencing customers(id)" },
      { id: "B", text: "orders(id, customer_name, customer_email, customer_address, total) with customer data duplicated for every order" },
      { id: "C", text: "A single comma-separated customer/order field" },
      { id: "D", text: "A table with no keys and no relationships" }
    ],
    correctOptionId: "A",
    explanation: "Separating customers from orders and connecting them through customer_id reduces duplicated customer information.",
    tags: ["normalization", "foreign-key", "database-design"]
  },

  {
    id: "sql-constraints-relationships-q-049",
    quizId: "quiz_sql_constraints_relationships",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is generally the best approach when deciding whether to normalize or denormalize a schema?",
    options: [
      { id: "A", text: "Always denormalize everything" },
      { id: "B", text: "Always normalize to the maximum possible level regardless of workload" },
      { id: "C", text: "Start with sound normalized relationships and introduce deliberate denormalization only when justified by requirements and measurements" },
      { id: "D", text: "Avoid constraints so either approach works automatically" }
    ],
    correctOptionId: "C",
    explanation: "A well-structured normalized model is usually a strong starting point. Performance-driven denormalization should be deliberate and backed by actual workload requirements.",
    tags: ["normalization", "denormalization", "architecture"]
  },

  {
    id: "sql-constraints-relationships-q-050",
    quizId: "quiz_sql_constraints_relationships",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which combination provides the strongest foundation for relational data integrity?",
    options: [
      { id: "A", text: "Comma-separated relationships and application comments" },
      { id: "B", text: "Primary keys, appropriate foreign keys, relevant UNIQUE/NOT NULL/CHECK constraints, and a well-designed normalized schema" },
      { id: "C", text: "Only indexes with no constraints" },
      { id: "D", text: "One giant table containing all application data" }
    ],
    correctOptionId: "B",
    explanation: "Keys, constraints, relationships, and appropriate normalization work together to maintain consistent relational data.",
    tags: ["constraints", "relationships", "normalization", "database-design"]
  }
];

export default sqlConstraintsRelationshipsQuestions;