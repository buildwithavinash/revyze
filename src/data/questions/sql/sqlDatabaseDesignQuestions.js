const sqlDatabaseDesignQuestions = [
  {
    id: "sql-database-design-q-001",
    quizId: "quiz_sql_database_design",
    order: 1,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary goal of database normalization?",
    options: [
      { id: "A", text: "To make every table contain as many columns as possible" },
      { id: "B", text: "To reduce unnecessary data redundancy and improve data integrity" },
      { id: "C", text: "To eliminate all relationships between tables" },
      { id: "D", text: "To make every query use SELECT *" }
    ],
    correctOptionId: "B",
    explanation:
      "Normalization organizes data into related tables to reduce unnecessary duplication and prevent update, insertion, and deletion anomalies.",
    tags: ["normalization", "database-design"]
  },

  {
    id: "sql-database-design-q-002",
    quizId: "quiz_sql_database_design",
    order: 2,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does First Normal Form (1NF) generally require?",
    options: [
      { id: "A", text: "Every table must have exactly one column" },
      { id: "B", text: "Every table must have a foreign key" },
      { id: "C", text: "Values should be atomic rather than storing repeating groups in a single field" },
      { id: "D", text: "Every table must contain exactly two indexes" }
    ],
    correctOptionId: "C",
    explanation:
      "1NF generally requires each field to contain atomic values and avoids repeating groups or multi-valued fields within a single column.",
    tags: ["1nf", "normalization"]
  },

  {
    id: "sql-database-design-q-003",
    quizId: "quiz_sql_database_design",
    order: 3,
    type: "mcq",
    difficulty: "Intermediate",
    question:
      "Which design is generally a violation of the atomic-value idea of 1NF?",
    options: [
      { id: "A", text: "A users table with one email per row" },
      { id: "B", text: "An orders table with one order total per row" },
      { id: "C", text: "A products table with one product name per row" },
      { id: "D", text: "A users table storing multiple phone numbers as comma-separated text in one column" }
    ],
    correctOptionId: "D",
    explanation:
      "Storing multiple independent values in one field makes querying and maintaining those values harder and violates the usual atomic-value principle of 1NF.",
    tags: ["1nf", "atomic-values"]
  },

  {
    id: "sql-database-design-q-004",
    quizId: "quiz_sql_database_design",
    order: 4,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a primary key provide?",
    options: [
      { id: "A", text: "A unique way to identify each row in a table" },
      { id: "B", text: "A way to duplicate every row" },
      { id: "C", text: "Automatic encryption of the table" },
      { id: "D", text: "A replacement for all foreign keys" }
    ],
    correctOptionId: "A",
    explanation:
      "A primary key uniquely identifies each record and provides a stable reference for relationships and constraints.",
    tags: ["primary-key", "keys"]
  },

  {
    id: "sql-database-design-q-005",
    quizId: "quiz_sql_database_design",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the role of a foreign key?",
    options: [
      { id: "A", text: "To sort rows automatically" },
      { id: "B", text: "To reference a key in another table and enforce a relationship" },
      { id: "C", text: "To encrypt sensitive columns" },
      { id: "D", text: "To guarantee that every query is fast" }
    ],
    correctOptionId: "B",
    explanation:
      "A foreign key establishes a relationship between tables by referencing a candidate/primary key in another table.",
    tags: ["foreign-key", "relationships"]
  },

  {
    id: "sql-database-design-q-006",
    quizId: "quiz_sql_database_design",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which relationship describes one customer having many orders?",
    options: [
      { id: "A", text: "One-to-one" },
      { id: "B", text: "Many-to-many" },
      { id: "C", text: "One-to-many" },
      { id: "D", text: "Zero-to-zero" }
    ],
    correctOptionId: "C",
    explanation:
      "One customer can be associated with multiple orders, while each order belongs to one customer in this simplified model.",
    tags: ["relationships", "one-to-many"]
  },

  {
    id: "sql-database-design-q-007",
    quizId: "quiz_sql_database_design",
    order: 7,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How is a many-to-many relationship commonly represented relationally?",
    options: [
      { id: "A", text: "By storing all related IDs as comma-separated text" },
      { id: "B", text: "By creating a junction/link table containing foreign keys to the related entities" },
      { id: "C", text: "By removing primary keys" },
      { id: "D", text: "By putting every entity in one giant table" }
    ],
    correctOptionId: "B",
    explanation:
      "A junction table breaks a many-to-many relationship into two one-to-many relationships using foreign keys.",
    tags: ["many-to-many", "junction-table"]
  },

  {
    id: "sql-database-design-q-008",
    quizId: "quiz_sql_database_design",
    order: 8,
    type: "mcq",
    difficulty: "Advanced",
    question: "What problem does normalization help prevent?",
    options: [
      { id: "A", text: "Update anomalies caused by duplicated information" },
      { id: "B", text: "All network failures" },
      { id: "C", text: "Every type of SQL syntax error" },
      { id: "D", text: "The need for indexes" }
    ],
    correctOptionId: "A",
    explanation:
      "Duplicated data can cause inconsistent values when one copy is updated but another is not. Normalization helps reduce this problem.",
    tags: ["normalization", "update-anomaly"]
  },

  {
    id: "sql-database-design-q-009",
    quizId: "quiz_sql_database_design",
    order: 9,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a deletion anomaly?",
    options: [
      { id: "A", text: "A query syntax error caused by DELETE" },
      { id: "B", text: "A situation where deleting one piece of data unintentionally removes other important information" },
      { id: "C", text: "A database refusing to delete any record" },
      { id: "D", text: "Deleting a table index automatically" }
    ],
    correctOptionId: "B",
    explanation:
      "A deletion anomaly can occur in poorly designed schemas when removing one fact also removes another fact that should have been stored independently.",
    tags: ["normalization", "deletion-anomaly"]
  },

  {
    id: "sql-database-design-q-010",
    quizId: "quiz_sql_database_design",
    order: 10,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the central idea behind Second Normal Form (2NF)?",
    options: [
      { id: "A", text: "Every table must contain exactly two columns" },
      { id: "B", text: "The table must have no indexes" },
      { id: "C", text: "The table must contain no foreign keys" },
      { id: "D", text: "Non-key attributes should depend on the whole candidate key rather than only part of a composite key" }
    ],
    correctOptionId: "D",
    explanation:
      "2NF addresses partial dependencies: a non-key attribute should not depend on only part of a composite candidate key.",
    tags: ["2nf", "normalization"]
  },

  {
    id: "sql-database-design-q-011",
    quizId: "quiz_sql_database_design",
    order: 11,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does Third Normal Form (3NF) generally aim to eliminate?",
    options: [
      { id: "A", text: "All primary keys" },
      { id: "B", text: "All foreign keys" },
      { id: "C", text: "Unnecessary transitive dependencies among non-key attributes" },
      { id: "D", text: "All nullable columns" }
    ],
    correctOptionId: "C",
    explanation:
      "3NF generally aims to ensure non-key attributes depend on the key rather than on other non-key attributes.",
    tags: ["3nf", "normalization"]
  },

  {
    id: "sql-database-design-q-012",
    quizId: "quiz_sql_database_design",
    order: 12,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is denormalization?",
    options: [
      { id: "A", text: "Deliberately introducing some redundancy to improve performance or simplify reads" },
      { id: "B", text: "Deleting every foreign key" },
      { id: "C", text: "Converting SQL into NoSQL automatically" },
      { id: "D", text: "Removing all data from a database" }
    ],
    correctOptionId: "A",
    explanation:
      "Denormalization intentionally duplicates or combines data in controlled ways, often to reduce expensive joins or improve read performance.",
    tags: ["denormalization", "performance"]
  },

  {
    id: "sql-database-design-q-013",
    quizId: "quiz_sql_database_design",
    order: 13,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might a production system intentionally use some denormalization?",
    options: [
      { id: "A", text: "To guarantee zero storage usage" },
      { id: "B", text: "To reduce the number of reads required for frequently accessed data" },
      { id: "C", text: "To eliminate all consistency concerns" },
      { id: "D", text: "To prevent transactions from working" }
    ],
    correctOptionId: "B",
    explanation:
      "Controlled redundancy can reduce joins or repeated computation for read-heavy workloads, although it introduces consistency trade-offs.",
    tags: ["denormalization", "performance", "tradeoffs"]
  },

  {
    id: "sql-database-design-q-014",
    quizId: "quiz_sql_database_design",
    order: 14,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "A `users` table stores `department_id`, while department details are stored in a separate `departments` table. What design principle does this represent?",
    options: [
      { id: "A", text: "Storing every department detail repeatedly for every user" },
      { id: "B", text: "Using a foreign key to represent a relationship between entities" },
      { id: "C", text: "Removing normalization" },
      { id: "D", text: "Creating a many-to-many relationship automatically" }
    ],
    correctOptionId: "B",
    explanation:
      "The department_id can reference the departments table, allowing department information to be stored once while users reference it.",
    tags: ["foreign-key", "normalization", "relationships"]
  },

  {
    id: "sql-database-design-q-015",
    quizId: "quiz_sql_database_design",
    order: 15,
    type: "mcq",
    difficulty: "Advanced",
    question:
      "Which is generally the best approach when designing a relational schema for a new application?",
    options: [
      { id: "A", text: "Put all application data into one table to avoid joins" },
      { id: "B", text: "Normalize everything without considering workload or performance" },
      { id: "C", text: "Start with clear entities and relationships, enforce integrity, then introduce justified optimizations when needed" },
      { id: "D", text: "Avoid primary and foreign keys so the schema stays flexible" }
    ],
    correctOptionId: "C",
    explanation:
      "Good schema design starts with clear entities, relationships, constraints, and appropriate normalization. Performance-driven denormalization can then be introduced deliberately when justified by real workload requirements.",
    tags: ["database-design", "normalization", "architecture"]
  }
];

export default sqlDatabaseDesignQuestions;