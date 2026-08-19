const cssGridQuestions = [
  {
    id: "css-grid-q-001",
    quizId: "quiz_css_grid",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration creates a CSS Grid container?",
    options: [
      { id: "A", text: "display: grid;" },
      { id: "B", text: "display: css-grid;" },
      { id: "C", text: "grid: container;" },
      { id: "D", text: "layout: grid;" }
    ],
    correctOptionId: "A",
    explanation: "display: grid establishes a grid formatting context for the element and its grid items.",
    tags: ["grid", "grid-container"]
  },

  {
    id: "css-grid-q-002",
    quizId: "quiz_css_grid",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which elements become grid items?",
    options: [
      { id: "A", text: "All descendants of the grid container" },
      { id: "B", text: "The direct children of the grid container" },
      { id: "C", text: "Only elements with display: block" },
      { id: "D", text: "Only elements explicitly assigned grid-column" }
    ],
    correctOptionId: "B",
    explanation: "The direct children of a grid container become grid items.",
    tags: ["grid-items", "grid-container"]
  },

  {
    id: "css-grid-q-003",
    quizId: "quiz_css_grid",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property defines the columns of a CSS Grid?",
    options: [
      { id: "A", text: "grid-columns" },
      { id: "B", text: "grid-template-columns" },
      { id: "C", text: "grid-column-layout" },
      { id: "D", text: "columns-template" }
    ],
    correctOptionId: "B",
    explanation: "grid-template-columns defines the explicit column tracks of a grid.",
    tags: ["grid-template-columns", "tracks"]
  },

  {
    id: "css-grid-q-004",
    quizId: "quiz_css_grid",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property defines the rows of a CSS Grid?",
    options: [
      { id: "A", text: "grid-template-rows" },
      { id: "B", text: "grid-rows" },
      { id: "C", text: "rows-template" },
      { id: "D", text: "grid-row-layout" }
    ],
    correctOptionId: "A",
    explanation: "grid-template-rows defines the explicit row tracks.",
    tags: ["grid-template-rows", "tracks"]
  },

  {
    id: "css-grid-q-005",
    quizId: "quiz_css_grid",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What does this declaration create?\n\ngrid-template-columns: 200px 1fr 1fr;",
    options: [
      { id: "A", text: "Three columns: one 200px column and two equal flexible columns" },
      { id: "B", text: "Two columns, each 200px" },
      { id: "C", text: "One 200px row and two flexible rows" },
      { id: "D", text: "Three columns, each exactly 1fr wide" }
    ],
    correctOptionId: "A",
    explanation: "The first track is fixed at 200px. The remaining available space is divided between the two 1fr tracks.",
    tags: ["grid-template-columns", "fr", "tracks"]
  },

  {
    id: "css-grid-q-006",
    quizId: "quiz_css_grid",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the fr unit represent in CSS Grid?",
    options: [
      { id: "A", text: "A fraction of the available grid space" },
      { id: "B", text: "A fixed number of pixels" },
      { id: "C", text: "A percentage of the viewport" },
      { id: "D", text: "A font-relative unit" }
    ],
    correctOptionId: "A",
    explanation: "fr represents a fraction of the available space in the grid container after other relevant track sizing is accounted for.",
    tags: ["fr", "grid-tracks"]
  },

  {
    id: "css-grid-q-007",
    quizId: "quiz_css_grid",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "What does this create?\n\ngrid-template-columns: repeat(3, 1fr);",
    options: [
      { id: "A", text: "Three equal-width columns" },
      { id: "B", text: "Three equal-height rows" },
      { id: "C", text: "One column repeated three times vertically" },
      { id: "D", text: "Three 1px columns" }
    ],
    correctOptionId: "A",
    explanation: "repeat(3, 1fr) creates three equal flexible column tracks.",
    tags: ["repeat", "fr", "columns"]
  },

  {
    id: "css-grid-q-008",
    quizId: "quiz_css_grid",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the repeat() function in CSS Grid?",
    options: [
      { id: "A", text: "To repeat a track-size pattern multiple times" },
      { id: "B", text: "To repeat an animation" },
      { id: "C", text: "To duplicate HTML elements" },
      { id: "D", text: "To repeat only grid areas" }
    ],
    correctOptionId: "A",
    explanation: "repeat() provides a concise way to specify repeated grid track sizes.",
    tags: ["repeat", "grid"]
  },

  {
    id: "css-grid-q-009",
    quizId: "quiz_css_grid",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the gap property do in a grid?",
    options: [
      { id: "A", text: "Creates gutters between grid rows and columns" },
      { id: "B", text: "Adds margin around the grid container" },
      { id: "C", text: "Changes the width of every grid item" },
      { id: "D", text: "Creates additional grid tracks" }
    ],
    correctOptionId: "A",
    explanation: "gap controls the spacing between grid tracks.",
    tags: ["gap", "grid"]
  },

  {
    id: "css-grid-q-010",
    quizId: "quiz_css_grid",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "What does this declaration do?\n\ngap: 20px;",
    options: [
      { id: "A", text: "Creates a 20px gap between grid rows and columns" },
      { id: "B", text: "Adds 20px margin around every grid item" },
      { id: "C", text: "Adds 20px padding to the container" },
      { id: "D", text: "Sets all grid tracks to 20px" }
    ],
    correctOptionId: "A",
    explanation: "A single gap value applies the same gutter size between both rows and columns.",
    tags: ["gap", "spacing"]
  },

  {
    id: "css-grid-q-011",
    quizId: "quiz_css_grid",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a grid line?",
    options: [
      { id: "A", text: "A line separating grid tracks that can be used for positioning items" },
      { id: "B", text: "A visible border automatically drawn around every grid item" },
      { id: "C", text: "A CSS file containing grid rules" },
      { id: "D", text: "A line of JavaScript controlling the grid" }
    ],
    correctOptionId: "A",
    explanation: "Grid lines form the boundaries between rows and columns and provide reference points for placing grid items.",
    tags: ["grid-lines", "grid"]
  },

  {
    id: "css-grid-q-012",
    quizId: "quiz_css_grid",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "In a grid with three columns, how many vertical grid lines are normally present?",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "3" },
      { id: "C", text: "4" },
      { id: "D", text: "6" }
    ],
    correctOptionId: "C",
    explanation: "Three columns require four vertical grid lines: one at each outer edge and two between the columns.",
    tags: ["grid-lines", "columns"]
  },

  {
    id: "css-grid-q-013",
    quizId: "quiz_css_grid",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls where a grid item starts and ends across columns?",
    options: [
      { id: "A", text: "grid-column" },
      { id: "B", text: "grid-columns" },
      { id: "C", text: "column-position" },
      { id: "D", text: "grid-x" }
    ],
    correctOptionId: "A",
    explanation: "grid-column is the shorthand used to specify a grid item's column start and end lines.",
    tags: ["grid-column", "placement"]
  },

  {
    id: "css-grid-q-014",
    quizId: "quiz_css_grid",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls where a grid item starts and ends across rows?",
    options: [
      { id: "A", text: "grid-row" },
      { id: "B", text: "grid-rows" },
      { id: "C", text: "row-position" },
      { id: "D", text: "grid-y" }
    ],
    correctOptionId: "A",
    explanation: "grid-row is the shorthand for specifying a grid item's row start and end lines.",
    tags: ["grid-row", "placement"]
  },

  {
    id: "css-grid-q-015",
    quizId: "quiz_css_grid",
    order: 15,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\ngrid-column: 1 / 3;",
    options: [
      { id: "A", text: "Places the item from column line 1 through column line 3, spanning two columns" },
      { id: "B", text: "Places the item only in column 3" },
      { id: "C", text: "Creates three new columns" },
      { id: "D", text: "Spans three columns exactly" }
    ],
    correctOptionId: "A",
    explanation: "Grid placement uses lines. From line 1 to line 3 covers the track between those lines, which is two columns.",
    tags: ["grid-column", "grid-lines", "span"]
  },

  {
    id: "css-grid-q-016",
    quizId: "quiz_css_grid",
    order: 16,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\ngrid-column: 1 / span 2;",
    options: [
      { id: "A", text: "Starts at column line 1 and spans two columns" },
      { id: "B", text: "Starts at column 2 and ends at line 1" },
      { id: "C", text: "Creates two columns before the item" },
      { id: "D", text: "Spans two rows" }
    ],
    correctOptionId: "A",
    explanation: "span 2 means the item should cover two column tracks starting from the specified line.",
    tags: ["grid-column", "span"]
  },

  {
    id: "css-grid-q-017",
    quizId: "quiz_css_grid",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property can be used to name grid areas?",
    options: [
      { id: "A", text: "grid-template-areas" },
      { id: "B", text: "grid-names" },
      { id: "C", text: "grid-area-template" },
      { id: "D", text: "grid-layout-names" }
    ],
    correctOptionId: "A",
    explanation: "grid-template-areas defines named areas using a textual representation of the grid.",
    tags: ["grid-template-areas", "grid-areas"]
  },

  {
    id: "css-grid-q-018",
    quizId: "quiz_css_grid",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "Which declaration correctly defines three named areas in a row?",
    options: [
      { id: "A", text: "grid-template-areas: \"header header header\";" },
      { id: "B", text: "grid-areas: header header header;" },
      { id: "C", text: "grid-template: header header header;" },
      { id: "D", text: "grid-names: \"header header header\";" }
    ],
    correctOptionId: "A",
    explanation: "grid-template-areas uses quoted strings to describe the arrangement of named grid areas.",
    tags: ["grid-template-areas", "named-areas"]
  },

  {
    id: "css-grid-q-019",
    quizId: "quiz_css_grid",
    order: 19,
    type: "code",
    difficulty: "Intermediate",
    question: "Given:\n\ngrid-template-areas:\n  \"header header\"\n  \"sidebar main\";\n\nWhich value assigns an item to the main area?",
    options: [
      { id: "A", text: "grid-area: main;" },
      { id: "B", text: "grid-name: main;" },
      { id: "C", text: "grid-column: main;" },
      { id: "D", text: "area: main;" }
    ],
    correctOptionId: "A",
    explanation: "A grid item can be assigned to a named area using grid-area with the area's name.",
    tags: ["grid-area", "named-areas"]
  },

  {
    id: "css-grid-q-020",
    quizId: "quiz_css_grid",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a dot (.) represent inside grid-template-areas?",
    options: [
      { id: "A", text: "An empty grid cell" },
      { id: "B", text: "A wildcard area" },
      { id: "C", text: "A hidden grid item" },
      { id: "D", text: "A column separator" }
    ],
    correctOptionId: "A",
    explanation: "A period represents an intentionally empty grid cell in a grid-template-areas declaration.",
    tags: ["grid-template-areas", "empty-cell"]
  },

  {
    id: "css-grid-q-021",
    quizId: "quiz_css_grid",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property controls alignment of grid items inside their individual grid areas along the inline axis?",
    options: [
      { id: "A", text: "justify-items" },
      { id: "B", text: "align-items" },
      { id: "C", text: "justify-content" },
      { id: "D", text: "grid-align" }
    ],
    correctOptionId: "A",
    explanation: "justify-items controls the inline-axis alignment of grid items within their grid areas.",
    tags: ["justify-items", "alignment"]
  },

  {
    id: "css-grid-q-022",
    quizId: "quiz_css_grid",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property controls alignment of grid items inside their individual grid areas along the block axis?",
    options: [
      { id: "A", text: "align-items" },
      { id: "B", text: "justify-items" },
      { id: "C", text: "align-grid" },
      { id: "D", text: "grid-items-align" }
    ],
    correctOptionId: "A",
    explanation: "align-items controls the block-axis alignment of grid items within their grid areas.",
    tags: ["align-items", "alignment"]
  },

  {
    id: "css-grid-q-023",
    quizId: "quiz_css_grid",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property aligns the entire grid inside its container along the inline axis when extra space exists?",
    options: [
      { id: "A", text: "justify-content" },
      { id: "B", text: "justify-items" },
      { id: "C", text: "align-items" },
      { id: "D", text: "grid-content-x" }
    ],
    correctOptionId: "A",
    explanation: "justify-content controls distribution of the grid tracks within the grid container along the inline axis.",
    tags: ["justify-content", "grid-alignment"]
  },

  {
    id: "css-grid-q-024",
    quizId: "quiz_css_grid",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property aligns the entire grid inside its container along the block axis when extra space exists?",
    options: [
      { id: "A", text: "align-content" },
      { id: "B", text: "align-items" },
      { id: "C", text: "justify-items" },
      { id: "D", text: "grid-content-y" }
    ],
    correctOptionId: "A",
    explanation: "align-content controls distribution of grid tracks within the grid container along the block axis.",
    tags: ["align-content", "grid-alignment"]
  },

  {
    id: "css-grid-q-025",
    quizId: "quiz_css_grid",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between justify-items and justify-content in Grid?",
    options: [
      { id: "A", text: "justify-items aligns items within their cells, while justify-content distributes the grid tracks within the container" },
      { id: "B", text: "They always perform exactly the same operation" },
      { id: "C", text: "justify-content aligns text and justify-items changes columns" },
      { id: "D", text: "justify-items only works with Flexbox" }
    ],
    correctOptionId: "A",
    explanation: "The items-versus-content distinction is important: items are aligned within their grid areas, while content refers to the grid tracks as a whole.",
    tags: ["justify-items", "justify-content", "alignment"]
  },

  {
    id: "css-grid-q-026",
    quizId: "quiz_css_grid",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does align-self do for a grid item?",
    options: [
      { id: "A", text: "Overrides the container's align-items value for that individual grid item" },
      { id: "B", text: "Changes the grid's row count" },
      { id: "C", text: "Changes the item's grid area name" },
      { id: "D", text: "Changes the grid container into Flexbox" }
    ],
    correctOptionId: "A",
    explanation: "align-self controls an individual grid item's block-axis alignment within its grid area.",
    tags: ["align-self", "grid-items"]
  },

  {
    id: "css-grid-q-027",
    quizId: "quiz_css_grid",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does justify-self do for a grid item?",
    options: [
      { id: "A", text: "Overrides justify-items for that individual grid item" },
      { id: "B", text: "Changes the grid's number of columns" },
      { id: "C", text: "Changes the item's row span" },
      { id: "D", text: "Controls grid auto-placement" }
    ],
    correctOptionId: "A",
    explanation: "justify-self controls the individual grid item's inline-axis alignment within its grid area.",
    tags: ["justify-self", "grid-items"]
  },

  {
    id: "css-grid-q-028",
    quizId: "quiz_css_grid",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does grid-auto-rows control?",
    options: [
      { id: "A", text: "The size of automatically created rows" },
      { id: "B", text: "The size of all explicitly declared rows" },
      { id: "C", text: "The number of grid columns" },
      { id: "D", text: "The spacing between rows" }
    ],
    correctOptionId: "A",
    explanation: "grid-auto-rows defines the size of implicit rows created when items require rows beyond the explicit grid.",
    tags: ["grid-auto-rows", "implicit-grid"]
  },

  {
    id: "css-grid-q-029",
    quizId: "quiz_css_grid",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does grid-auto-columns control?",
    options: [
      { id: "A", text: "The size of automatically created columns" },
      { id: "B", text: "The size of all explicit columns" },
      { id: "C", text: "The number of columns" },
      { id: "D", text: "The column gap" }
    ],
    correctOptionId: "A",
    explanation: "grid-auto-columns defines the size of implicit columns created by the grid.",
    tags: ["grid-auto-columns", "implicit-grid"]
  },

  {
    id: "css-grid-q-030",
    quizId: "quiz_css_grid",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between an explicit and implicit grid?",
    options: [
      { id: "A", text: "The explicit grid is defined by grid-template properties, while the implicit grid is created automatically as needed" },
      { id: "B", text: "The explicit grid uses Flexbox and the implicit grid uses Grid" },
      { id: "C", text: "The implicit grid is always smaller" },
      { id: "D", text: "There is no difference" }
    ],
    correctOptionId: "A",
    explanation: "Explicit tracks are declared by the author. Implicit tracks are generated when the layout requires tracks outside the explicit grid.",
    tags: ["explicit-grid", "implicit-grid"]
  },

  {
    id: "css-grid-q-031",
    quizId: "quiz_css_grid",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this declaration do?\n\ngrid-auto-flow: column;",
    options: [
      { id: "A", text: "Makes auto-placement fill columns instead of the default row direction" },
      { id: "B", text: "Changes all explicit columns to 1fr" },
      { id: "C", text: "Creates a single column" },
      { id: "D", text: "Forces every item to span a column" }
    ],
    correctOptionId: "A",
    explanation: "grid-auto-flow controls how automatically placed items are flowed. column causes auto-placement to fill columns rather than rows.",
    tags: ["grid-auto-flow", "auto-placement"]
  },

  {
    id: "css-grid-q-032",
    quizId: "quiz_css_grid",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the default value of grid-auto-flow?",
    options: [
      { id: "A", text: "row" },
      { id: "B", text: "column" },
      { id: "C", text: "dense" },
      { id: "D", text: "none" }
    ],
    correctOptionId: "A",
    explanation: "Grid auto-placement defaults to row, meaning items are generally placed by filling each row before moving to the next.",
    tags: ["grid-auto-flow", "defaults"]
  },

  {
    id: "css-grid-q-033",
    quizId: "quiz_css_grid",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does grid-auto-flow: dense attempt to do?",
    options: [
      { id: "A", text: "Fill earlier available gaps with later auto-placed items when possible" },
      { id: "B", text: "Make every grid track smaller" },
      { id: "C", text: "Increase the grid gap" },
      { id: "D", text: "Force all items into one row" }
    ],
    correctOptionId: "A",
    explanation: "The dense packing algorithm can backfill earlier holes in the grid with later items when their placement allows it.",
    tags: ["grid-auto-flow", "dense", "auto-placement"]
  },

  {
    id: "css-grid-q-034",
    quizId: "quiz_css_grid",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does minmax() do in CSS Grid?",
    options: [
      { id: "A", text: "Defines a minimum and maximum size for a grid track" },
      { id: "B", text: "Defines the minimum and maximum number of grid items" },
      { id: "C", text: "Sets the minimum and maximum gap" },
      { id: "D", text: "Creates two grid containers" }
    ],
    correctOptionId: "A",
    explanation: "minmax(min, max) allows a track to have a lower and upper size constraint.",
    tags: ["minmax", "grid-tracks"]
  },

  {
    id: "css-grid-q-035",
    quizId: "quiz_css_grid",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "Which declaration is commonly used to create responsive columns with a minimum width of 200px?",
    options: [
      { id: "A", text: "grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));" },
      { id: "B", text: "grid-template-columns: auto-fit(200px);" },
      { id: "C", text: "grid-columns: repeat(200px, auto);" },
      { id: "D", text: "grid-template-columns: min(200px, auto-fit);" }
    ],
    correctOptionId: "A",
    explanation: "repeat(auto-fit, minmax(200px, 1fr)) is a common responsive Grid pattern that adapts the number of columns to available space while maintaining a minimum track size.",
    tags: ["minmax", "auto-fit", "responsive-grid"]
  },

  {
    id: "css-grid-q-036",
    quizId: "quiz_css_grid",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between auto-fit and auto-fill in repeated Grid tracks?",
    options: [
      { id: "A", text: "auto-fit can collapse empty repeated tracks, while auto-fill preserves the available track slots" },
      { id: "B", text: "auto-fit only works vertically" },
      { id: "C", text: "auto-fill cannot be used with minmax()" },
      { id: "D", text: "They are completely unrelated to repeated tracks" }
    ],
    correctOptionId: "A",
    explanation: "With repeated tracks, auto-fill creates as many tracks as fit while retaining empty tracks; auto-fit collapses empty tracks when possible, allowing existing items to expand.",
    tags: ["auto-fit", "auto-fill", "responsive-grid"]
  },

  {
    id: "css-grid-q-037",
    quizId: "quiz_css_grid",
    order: 37,
    type: "code",
    difficulty: "Intermediate",
    question: "Which declaration creates two equal rows?",
    options: [
      { id: "A", text: "grid-template-rows: repeat(2, 1fr);" },
      { id: "B", text: "grid-template-columns: repeat(2, 1fr);" },
      { id: "C", text: "grid-rows: 2fr;" },
      { id: "D", text: "rows: repeat(2, equal);" }
    ],
    correctOptionId: "A",
    explanation: "grid-template-rows defines row tracks, and repeat(2, 1fr) creates two equal flexible rows.",
    tags: ["grid-template-rows", "repeat", "fr"]
  },

  {
    id: "css-grid-q-038",
    quizId: "quiz_css_grid",
    order: 38,
    type: "code",
    difficulty: "Intermediate",
    question: "A grid has 4 columns. Which declaration makes an item span all four columns?",
    options: [
      { id: "A", text: "grid-column: 1 / -1;" },
      { id: "B", text: "grid-column: 4 / 1;" },
      { id: "C", text: "grid-column: span 4 / 1;" },
      { id: "D", text: "grid-column: all;" }
    ],
    correctOptionId: "A",
    explanation: "The -1 line refers to the last explicit grid line, so 1 / -1 spans the entire explicit column range.",
    tags: ["grid-column", "grid-lines", "span"]
  },

  {
    id: "css-grid-q-039",
    quizId: "quiz_css_grid",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does grid-area represent when used as a shorthand with four line values?",
    options: [
      { id: "A", text: "grid-row-start / grid-column-start / grid-row-end / grid-column-end" },
      { id: "B", text: "grid-column-start / grid-column-end / grid-row-start / grid-row-end" },
      { id: "C", text: "top / right / bottom / left" },
      { id: "D", text: "row / column / width / height" }
    ],
    correctOptionId: "A",
    explanation: "The four-value grid-area shorthand follows row-start, column-start, row-end, column-end.",
    tags: ["grid-area", "shorthand"]
  },

  {
    id: "css-grid-q-040",
    quizId: "quiz_css_grid",
    order: 40,
    type: "code",
    difficulty: "Intermediate",
    question: "Which declaration places an item in row 2 through row 4 and column 1 through column 3?",
    options: [
      { id: "A", text: "grid-area: 2 / 1 / 4 / 3;" },
      { id: "B", text: "grid-area: 1 / 2 / 3 / 4;" },
      { id: "C", text: "grid-area: 2 / 4 / 1 / 3;" },
      { id: "D", text: "grid-area: 2 1 4 3;" }
    ],
    correctOptionId: "A",
    explanation: "The shorthand is row-start / column-start / row-end / column-end.",
    tags: ["grid-area", "placement"]
  },

  {
    id: "css-grid-q-041",
    quizId: "quiz_css_grid",
    order: 41,
    type: "advanced",
    difficulty: "Intermediate",
    question: "Why can minmax(0, 1fr) sometimes be useful for grid columns containing long content?",
    options: [
      { id: "A", text: "It allows the track's minimum size to shrink to zero instead of being constrained by its automatic minimum" },
      { id: "B", text: "It forces the column to be exactly 0px" },
      { id: "C", text: "It disables text wrapping" },
      { id: "D", text: "It converts the grid to Flexbox" }
    ],
    correctOptionId: "A",
    explanation: "A minimum of 0 can prevent automatic minimum sizing from causing a flexible track to refuse to shrink enough, which is useful for preventing overflow in certain layouts.",
    tags: ["minmax", "overflow", "grid-sizing"]
  },

  {
    id: "css-grid-q-042",
    quizId: "quiz_css_grid",
    order: 42,
    type: "advanced",
    difficulty: "Intermediate",
    question: "A grid item contains a very long unbroken string and causes its column to become wider than expected. Which is a useful Grid-specific technique to investigate?",
    options: [
      { id: "A", text: "Consider using minmax(0, 1fr) for the flexible track and appropriate overflow or text-wrapping rules" },
      { id: "B", text: "Set z-index to -9999" },
      { id: "C", text: "Use justify-content: fixed" },
      { id: "D", text: "Set grid-template-columns to auto for every column" }
    ],
    correctOptionId: "A",
    explanation: "Grid tracks can be affected by intrinsic minimum sizes. minmax(0, 1fr), together with suitable content wrapping/overflow rules, can prevent unexpected expansion.",
    tags: ["grid-sizing", "minmax", "overflow"]
  },

  {
    id: "css-grid-q-043",
    quizId: "quiz_css_grid",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "What is the likely effect of this layout?\n\ngrid-template-columns: 1fr 1fr;\ngrid-template-rows: auto 1fr auto;",
    options: [
      { id: "A", text: "Two equal columns and three rows where the middle row can consume remaining space" },
      { id: "B", text: "Three columns and two rows" },
      { id: "C", text: "Two rows of equal height only" },
      { id: "D", text: "One flexible column and two fixed columns" }
    ],
    correctOptionId: "A",
    explanation: "The declaration defines two equal columns and three rows: auto, flexible 1fr, and auto.",
    tags: ["grid-template", "fr", "layout"]
  },

  {
    id: "css-grid-q-044",
    quizId: "quiz_css_grid",
    order: 44,
    type: "advanced",
    difficulty: "Intermediate",
    question: "Which Grid feature is especially useful for describing a page structure such as header, sidebar, main content, and footer?",
    options: [
      { id: "A", text: "Named grid areas with grid-template-areas" },
      { id: "B", text: "Only grid-auto-flow: dense" },
      { id: "C", text: "Only grid-column-gap" },
      { id: "D", text: "Only grid-auto-columns" }
    ],
    correctOptionId: "A",
    explanation: "Named areas make large page layouts easier to read and reason about by giving regions meaningful names.",
    tags: ["grid-template-areas", "layout"]
  },

  {
    id: "css-grid-q-045",
    quizId: "quiz_css_grid",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "Which layout correctly represents a common dashboard structure?\n\nheader header\nsidebar main\nfooter footer",
    options: [
      {
        id: "A",
        text: "grid-template-areas: \"header header\" \"sidebar main\" \"footer footer\";"
      },
      {
        id: "B",
        text: "grid-template-areas: \"header sidebar\" \"header main\" \"footer footer\";"
      },
      {
        id: "C",
        text: "grid-template-areas: header header sidebar main footer footer;"
      },
      {
        id: "D",
        text: "grid-areas: \"header header\" \"sidebar main\" \"footer footer\";"
      }
    ],
    correctOptionId: "A",
    explanation: "Each quoted string represents a grid row. The repeated names cause header and footer to span both columns.",
    tags: ["grid-template-areas", "dashboard", "layout"]
  },

  {
    id: "css-grid-q-046",
    quizId: "quiz_css_grid",
    order: 46,
    type: "advanced",
    difficulty: "Intermediate",
    question: "Which statement best describes Grid's auto-placement algorithm?",
    options: [
      { id: "A", text: "It automatically places grid items into available cells when explicit placement is not provided" },
      { id: "B", text: "It always places every item in the first cell" },
      { id: "C", text: "It only works when grid-template-areas is used" },
      { id: "D", text: "It requires every item to have grid-column and grid-row" }
    ],
    correctOptionId: "A",
    explanation: "Grid can automatically place items that have not been explicitly positioned according to the grid's auto-placement rules.",
    tags: ["auto-placement", "grid"]
  },

  {
    id: "css-grid-q-047",
    quizId: "quiz_css_grid",
    order: 47,
    type: "advanced",
    difficulty: "Intermediate",
    question: "A developer needs a responsive card gallery where cards should be at least 250px wide and use as many columns as fit. Which is the strongest approach?",
    options: [
      {
        id: "A",
        text: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"
      },
      {
        id: "B",
        text: "grid-template-columns: repeat(250px, auto-fit);"
      },
      {
        id: "C",
        text: "grid-template-columns: 250px;"
      },
      {
        id: "D",
        text: "grid-auto-flow: fixed;"
      }
    ],
    correctOptionId: "A",
    explanation: "auto-fit determines how many tracks can fit, while minmax(250px, 1fr) keeps each track at least 250px wide and lets it expand.",
    tags: ["auto-fit", "minmax", "responsive-grid"]
  },

  {
    id: "css-grid-q-048",
    quizId: "quiz_css_grid",
    order: 48,
    type: "advanced",
    difficulty: "Intermediate",
    question: "When would Grid generally be a stronger choice than Flexbox?",
    options: [
      { id: "A", text: "When the layout needs coordinated control over both rows and columns" },
      { id: "B", text: "Only when there is one element" },
      { id: "C", text: "Only for text alignment" },
      { id: "D", text: "Only for animations" }
    ],
    correctOptionId: "A",
    explanation: "Grid is designed for two-dimensional layouts where rows and columns need to be coordinated.",
    tags: ["grid-vs-flexbox", "layout"]
  },

  {
    id: "css-grid-q-049",
    quizId: "quiz_css_grid",
    order: 49,
    type: "advanced",
    difficulty: "Advanced",
    question: "A grid item is overflowing its column even though the column uses 1fr. What is an important concept to understand?",
    options: [
      { id: "A", text: "A flexible track can still be affected by the item's intrinsic minimum size" },
      { id: "B", text: "1fr always means exactly 33.33%" },
      { id: "C", text: "Grid ignores content size completely" },
      { id: "D", text: "fr units cannot shrink" }
    ],
    correctOptionId: "A",
    explanation: "The minimum size contribution of grid items can affect flexible tracks. Techniques such as minmax(0, 1fr) and appropriate content constraints can help.",
    tags: ["fr", "intrinsic-sizing", "minmax", "overflow"]
  },

  {
    id: "css-grid-q-050",
    quizId: "quiz_css_grid",
    order: 50,
    type: "advanced",
    difficulty: "Advanced",
    question: "Which approach demonstrates the strongest overall understanding of CSS Grid for a production responsive layout?",
    options: [
      {
        id: "A",
        text: "Use explicit tracks or named areas where structure matters, auto-placement where appropriate, minmax()/fr for flexible sizing, gap for gutters, and deliberate item/track alignment"
      },
      {
        id: "B",
        text: "Use absolute positioning for every grid item and manually calculate every coordinate"
      },
      {
        id: "C",
        text: "Use only fixed pixel columns so the layout cannot change"
      },
      {
        id: "D",
        text: "Create a separate grid container for every individual element"
      }
    ],
    correctOptionId: "A",
    explanation: "Production Grid layouts benefit from using Grid's actual strengths: tracks, areas, flexible sizing, automatic placement, consistent gaps, and deliberate alignment rather than recreating positioning manually.",
    tags: ["grid", "layout", "responsive-design", "best-practices"]
  }
];

export default cssGridQuestions;