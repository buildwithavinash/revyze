const cssAdvancedQuestions = [
  {
    id: "css-advanced-q-001",
    quizId: "quiz_css_advanced",
    order: 1,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a CSS custom property?",
    options: [
      { id: "A", text: "A JavaScript variable stored inside CSS" },
      { id: "B", text: "A user-defined CSS value declared with a -- prefix" },
      { id: "C", text: "A browser-specific CSS selector" },
      { id: "D", text: "A replacement for HTML attributes" }
    ],
    correctOptionId: "B",
    explanation: "CSS custom properties are user-defined properties whose names begin with -- and whose values can be reused with var().",
    tags: ["custom-properties", "variables"]
  },

  {
    id: "css-advanced-q-002",
    quizId: "quiz_css_advanced",
    order: 2,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this CSS define?\n\n:root {\n  --primary-color: #2563eb;\n}",
    options: [
      { id: "A", text: "A CSS custom property named --primary-color" },
      { id: "B", text: "A JavaScript variable named primary-color" },
      { id: "C", text: "A new CSS selector called primary-color" },
      { id: "D", text: "A browser environment variable" }
    ],
    correctOptionId: "A",
    explanation: "The --primary-color declaration creates a CSS custom property on :root, making it available throughout the document through inheritance.",
    tags: ["custom-properties", "root"]
  },

  {
    id: "css-advanced-q-003",
    quizId: "quiz_css_advanced",
    order: 3,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How do you read a CSS custom property?",
    options: [
      { id: "A", text: "value(--primary-color)" },
      { id: "B", text: "get(--primary-color)" },
      { id: "C", text: "var(--primary-color)" },
      { id: "D", text: "css(--primary-color)" }
    ],
    correctOptionId: "C",
    explanation: "The var() function retrieves the value of a CSS custom property.",
    tags: ["var", "custom-properties"]
  },

  {
    id: "css-advanced-q-004",
    quizId: "quiz_css_advanced",
    order: 4,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this CSS do?\n\n:root {\n  --spacing: 1rem;\n}\n\n.card {\n  padding: var(--spacing);\n}",
    options: [
      { id: "A", text: "It sets the card padding to the value stored in --spacing" },
      { id: "B", text: "It creates a 1px padding" },
      { id: "C", text: "It makes padding responsive to viewport width" },
      { id: "D", text: "It disables padding inheritance" }
    ],
    correctOptionId: "A",
    explanation: "var(--spacing) resolves to the custom property's value, so the card receives 1rem of padding.",
    tags: ["var", "custom-properties"]
  },

  {
    id: "css-advanced-q-005",
    quizId: "quiz_css_advanced",
    order: 5,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are custom properties useful for design systems?",
    options: [
      { id: "A", text: "They allow shared values such as colors, spacing, and typography to be centrally controlled" },
      { id: "B", text: "They automatically generate HTML components" },
      { id: "C", text: "They eliminate the CSS cascade" },
      { id: "D", text: "They replace all CSS selectors" }
    ],
    correctOptionId: "A",
    explanation: "Design tokens can be represented with custom properties, allowing a change to a shared value to propagate throughout the interface.",
    tags: ["design-systems", "custom-properties", "architecture"]
  },

  {
    id: "css-advanced-q-006",
    quizId: "quiz_css_advanced",
    order: 6,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Where are CSS custom properties commonly declared when they should be globally available?",
    options: [
      { id: "A", text: ":root" },
      { id: "B", text: "::global" },
      { id: "C", text: "html-global" },
      { id: "D", text: "@variables" }
    ],
    correctOptionId: "A",
    explanation: ":root is commonly used to define global custom properties because custom properties participate in inheritance.",
    tags: ["root", "custom-properties"]
  },

  {
    id: "css-advanced-q-007",
    quizId: "quiz_css_advanced",
    order: 7,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens here?\n\n:root {\n  --color: blue;\n}\n\n.card {\n  --color: red;\n  color: var(--color);\n}",
    options: [
      { id: "A", text: "The card uses blue because :root always has higher priority" },
      { id: "B", text: "The card uses red because the custom property is overridden on the card itself" },
      { id: "C", text: "The CSS becomes invalid" },
      { id: "D", text: "Both colors are applied simultaneously" }
    ],
    correctOptionId: "B",
    explanation: "Custom properties inherit, but a value declared directly on an element overrides its inherited value.",
    tags: ["custom-properties", "inheritance", "cascade"]
  },

  {
    id: "css-advanced-q-008",
    quizId: "quiz_css_advanced",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of a fallback in var()?",
    options: [
      { id: "A", text: "To provide a value if the referenced custom property is invalid or unavailable" },
      { id: "B", text: "To create a second CSS selector" },
      { id: "C", text: "To force inheritance" },
      { id: "D", text: "To prevent media queries" }
    ],
    correctOptionId: "A",
    explanation: "var(--name, fallback) provides a fallback value if the custom property's value cannot be used.",
    tags: ["var", "fallback", "custom-properties"]
  },

  {
    id: "css-advanced-q-009",
    quizId: "quiz_css_advanced",
    order: 9,
    type: "code",
    difficulty: "Intermediate",
    question: "What value is used if --accent is not defined?\n\ncolor: var(--accent, blue);",
    options: [
      { id: "A", text: "black" },
      { id: "B", text: "transparent" },
      { id: "C", text: "blue" },
      { id: "D", text: "The declaration always becomes invalid" }
    ],
    correctOptionId: "C",
    explanation: "The second argument to var() is the fallback value, so blue is used when --accent cannot provide a valid value.",
    tags: ["var", "fallback"]
  },

  {
    id: "css-advanced-q-010",
    quizId: "quiz_css_advanced",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which CSS function performs arithmetic calculations?",
    options: [
      { id: "A", text: "calc()" },
      { id: "B", text: "math()" },
      { id: "C", text: "compute()" },
      { id: "D", text: "formula()" }
    ],
    correctOptionId: "A",
    explanation: "calc() allows arithmetic expressions involving CSS values and units.",
    tags: ["calc", "css-functions"]
  },

  {
    id: "css-advanced-q-011",
    quizId: "quiz_css_advanced",
    order: 11,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\nwidth: calc(100% - 2rem);",
    options: [
      { id: "A", text: "Makes the element exactly 2rem wide" },
      { id: "B", text: "Makes the width equal to 100% minus 2rem" },
      { id: "C", text: "Subtracts 100% from 2rem" },
      { id: "D", text: "Sets width to 102rem" }
    ],
    correctOptionId: "B",
    explanation: "calc() allows compatible CSS units to participate in arithmetic expressions.",
    tags: ["calc", "css-functions"]
  },

  {
    id: "css-advanced-q-012",
    quizId: "quiz_css_advanced",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does min() return?",
    options: [
      { id: "A", text: "The smallest computed value among its arguments" },
      { id: "B", text: "The largest computed value among its arguments" },
      { id: "C", text: "The average of its arguments" },
      { id: "D", text: "The first argument regardless of value" }
    ],
    correctOptionId: "A",
    explanation: "min() evaluates its arguments and uses the smallest resulting value.",
    tags: ["min", "css-functions"]
  },

  {
    id: "css-advanced-q-013",
    quizId: "quiz_css_advanced",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does max() return?",
    options: [
      { id: "A", text: "The smallest value" },
      { id: "B", text: "The largest computed value among its arguments" },
      { id: "C", text: "The average value" },
      { id: "D", text: "Only the first valid value" }
    ],
    correctOptionId: "B",
    explanation: "max() evaluates its arguments and chooses the largest resulting value.",
    tags: ["max", "css-functions"]
  },

  {
    id: "css-advanced-q-014",
    quizId: "quiz_css_advanced",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of clamp()?",
    options: [
      { id: "A", text: "To constrain a value between a minimum, preferred value, and maximum" },
      { id: "B", text: "To remove all CSS animations" },
      { id: "C", text: "To disable inheritance" },
      { id: "D", text: "To create a media query" }
    ],
    correctOptionId: "A",
    explanation: "clamp(min, preferred, max) provides a bounded responsive value.",
    tags: ["clamp", "css-functions"]
  },

  {
    id: "css-advanced-q-015",
    quizId: "quiz_css_advanced",
    order: 15,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the benefit of this declaration?\n\nfont-size: clamp(1rem, 2vw, 2rem);",
    options: [
      { id: "A", text: "The font can scale with the viewport while remaining between 1rem and 2rem" },
      { id: "B", text: "The font is always exactly 2vw" },
      { id: "C", text: "The font is always 1rem" },
      { id: "D", text: "The font becomes fixed at 2rem" }
    ],
    correctOptionId: "A",
    explanation: "clamp() limits the preferred responsive value between its minimum and maximum.",
    tags: ["clamp", "typography"]
  },

  {
    id: "css-advanced-q-016",
    quizId: "quiz_css_advanced",
    order: 16,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a major difference between CSS custom properties and preprocessor variables such as Sass variables?",
    options: [
      { id: "A", text: "Custom properties exist at runtime in the browser and participate in inheritance, while Sass variables are resolved during preprocessing" },
      { id: "B", text: "Sass variables are runtime values while custom properties only exist before compilation" },
      { id: "C", text: "They are identical in every way" },
      { id: "D", text: "Custom properties cannot be changed after compilation" }
    ],
    correctOptionId: "A",
    explanation: "CSS custom properties remain in the resulting CSS and can be changed dynamically, while Sass variables are processed before the CSS reaches the browser.",
    tags: ["custom-properties", "sass", "architecture"]
  },

  {
    id: "css-advanced-q-017",
    quizId: "quiz_css_advanced",
    order: 17,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can CSS custom properties be changed with JavaScript without recompiling CSS?",
    options: [
      { id: "A", text: "Because custom properties are part of the browser's CSSOM and exist at runtime" },
      { id: "B", text: "Because JavaScript automatically recompiles Sass" },
      { id: "C", text: "Because CSS variables are JavaScript variables" },
      { id: "D", text: "Because browsers ignore CSS declarations" }
    ],
    correctOptionId: "A",
    explanation: "Custom properties are runtime CSS values, so JavaScript can modify them through style APIs.",
    tags: ["custom-properties", "cssom", "javascript"]
  },

  {
    id: "css-advanced-q-018",
    quizId: "quiz_css_advanced",
    order: 18,
    type: "code",
    difficulty: "Advanced",
    question: "Which JavaScript statement correctly changes a CSS custom property on the root element?",
    options: [
      { id: "A", text: "document.documentElement.style.setProperty('--primary', 'red')" },
      { id: "B", text: "document.css.set('--primary', 'red')" },
      { id: "C", text: "document.root.variable('--primary', 'red')" },
      { id: "D", text: "document.documentElement.setCSS('--primary', 'red')" }
    ],
    correctOptionId: "A",
    explanation: "setProperty() can update custom properties through an element's style declaration.",
    tags: ["custom-properties", "javascript", "setProperty"]
  },

  {
    id: "css-advanced-q-019",
    quizId: "quiz_css_advanced",
    order: 19,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does CSS @property provide?",
    options: [
      { id: "A", text: "A way to register a custom property with metadata such as syntax, inheritance, and an initial value" },
      { id: "B", text: "A replacement for CSS selectors" },
      { id: "C", text: "A JavaScript class generator" },
      { id: "D", text: "A method for creating HTML properties" }
    ],
    correctOptionId: "A",
    explanation: "The @property at-rule allows developers to register custom properties and specify how they should behave.",
    tags: ["@property", "custom-properties", "advanced"]
  },

  {
    id: "css-advanced-q-020",
    quizId: "quiz_css_advanced",
    order: 20,
    type: "code",
    difficulty: "Advanced",
    question: "What does this registered custom property specify?\n\n@property --progress {\n  syntax: '<number>';\n  inherits: false;\n  initial-value: 0;\n}",
    options: [
      { id: "A", text: "--progress accepts number values, does not inherit, and defaults to 0" },
      { id: "B", text: "--progress can only contain colors" },
      { id: "C", text: "--progress is automatically an animation" },
      { id: "D", text: "--progress becomes a JavaScript variable" }
    ],
    correctOptionId: "A",
    explanation: "The registration defines the property's expected syntax, inheritance behavior, and initial value.",
    tags: ["@property", "syntax", "inheritance"]
  },

  {
    id: "css-advanced-q-021",
    quizId: "quiz_css_advanced",
    order: 21,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of CSS cascade layers?",
    options: [
      { id: "A", text: "To explicitly organize groups of styles into cascade layers with predictable precedence" },
      { id: "B", text: "To create visual 3D layers" },
      { id: "C", text: "To replace z-index" },
      { id: "D", text: "To make every selector equally specific" }
    ],
    correctOptionId: "A",
    explanation: "Cascade layers provide an explicit ordering mechanism for groups of CSS rules, helping large stylesheets manage precedence.",
    tags: ["cascade-layers", "architecture", "cascade"]
  },

  {
    id: "css-advanced-q-022",
    quizId: "quiz_css_advanced",
    order: 22,
    type: "code",
    difficulty: "Advanced",
    question: "Which syntax declares a cascade layer?",
    options: [
      { id: "A", text: "@layer components { ... }" },
      { id: "B", text: "@cascade components { ... }" },
      { id: "C", text: "@css-layer components { ... }" },
      { id: "D", text: "@style-layer components { ... }" }
    ],
    correctOptionId: "A",
    explanation: "@layer is the CSS at-rule used to define cascade layers.",
    tags: ["@layer", "cascade-layers"]
  },

  {
    id: "css-advanced-q-023",
    quizId: "quiz_css_advanced",
    order: 23,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why are cascade layers useful in large applications?",
    options: [
      { id: "A", text: "They can reduce specificity battles by providing intentional ordering between groups of styles" },
      { id: "B", text: "They remove all inheritance" },
      { id: "C", text: "They make JavaScript unnecessary" },
      { id: "D", text: "They automatically minify CSS" }
    ],
    correctOptionId: "A",
    explanation: "Layers allow teams to establish predictable ordering between reset, base, components, utilities, and other style groups.",
    tags: ["cascade-layers", "specificity", "architecture"]
  },

  {
    id: "css-advanced-q-024",
    quizId: "quiz_css_advanced",
    order: 24,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which architecture generally makes a large CSS codebase easier to maintain?",
    options: [
      { id: "A", text: "Clear organization of tokens, base styles, components, utilities, and responsive rules" },
      { id: "B", text: "One enormous selector containing every possible rule" },
      { id: "C", text: "Random global styles added whenever a component needs a change" },
      { id: "D", text: "Using !important for most declarations" }
    ],
    correctOptionId: "A",
    explanation: "A deliberate architecture creates clear responsibilities and reduces unintended interactions between unrelated styles.",
    tags: ["css-architecture", "maintainability"]
  },

  {
    id: "css-advanced-q-025",
    quizId: "quiz_css_advanced",
    order: 25,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main idea behind a CSS utility class architecture?",
    options: [
      { id: "A", text: "Create small reusable classes that apply focused styling responsibilities" },
      { id: "B", text: "Put all styles into one component selector" },
      { id: "C", text: "Avoid reusable styles" },
      { id: "D", text: "Use JavaScript instead of CSS" }
    ],
    correctOptionId: "A",
    explanation: "Utility-oriented CSS uses small classes with focused responsibilities, which can make composition and reuse easier.",
    tags: ["utilities", "css-architecture"]
  },

  {
    id: "css-advanced-q-026",
    quizId: "quiz_css_advanced",
    order: 26,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common problem with excessive use of !important?",
    options: [
      { id: "A", text: "It makes the cascade harder to reason about and often leads to further specificity conflicts" },
      { id: "B", text: "It disables CSS variables" },
      { id: "C", text: "It makes CSS execute as JavaScript" },
      { id: "D", text: "It always improves maintainability" }
    ],
    correctOptionId: "A",
    explanation: "Overusing !important can create a cycle where developers need even stronger overrides, making the stylesheet difficult to maintain.",
    tags: ["important", "cascade", "architecture"]
  },

  {
    id: "css-advanced-q-027",
    quizId: "quiz_css_advanced",
    order: 27,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of CSS logical properties such as margin-inline?",
    options: [
      { id: "A", text: "They allow layouts to adapt more naturally to different writing directions" },
      { id: "B", text: "They replace CSS variables" },
      { id: "C", text: "They only work in vertical layouts" },
      { id: "D", text: "They disable RTL support" }
    ],
    correctOptionId: "A",
    explanation: "Logical properties describe relationships such as inline and block directions instead of hard-coding left/right or top/bottom.",
    tags: ["logical-properties", "internationalization"]
  },

  {
    id: "css-advanced-q-028",
    quizId: "quiz_css_advanced",
    order: 28,
    type: "code",
    difficulty: "Advanced",
    question: "Why can this be preferable to margin-left?\n\nmargin-inline-start: 1rem;",
    options: [
      { id: "A", text: "It respects the document's writing direction" },
      { id: "B", text: "It always creates a larger margin" },
      { id: "C", text: "It disables margin collapsing" },
      { id: "D", text: "It only works in CSS Grid" }
    ],
    correctOptionId: "A",
    explanation: "margin-inline-start maps to the appropriate inline-start side based on writing direction, making the layout more adaptable to RTL and other writing modes.",
    tags: ["logical-properties", "rtl"]
  },

  {
    id: "css-advanced-q-029",
    quizId: "quiz_css_advanced",
    order: 29,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of the :is() pseudo-class?",
    options: [
      { id: "A", text: "To group multiple selectors while keeping the selector concise" },
      { id: "B", text: "To test JavaScript conditions" },
      { id: "C", text: "To create an animation" },
      { id: "D", text: "To select only IDs" }
    ],
    correctOptionId: "A",
    explanation: ":is() accepts a selector list and matches an element against any selector in that list.",
    tags: ["is", "selectors"]
  },

  {
    id: "css-advanced-q-030",
    quizId: "quiz_css_advanced",
    order: 30,
    type: "code",
    difficulty: "Advanced",
    question: "What does this selector do?\n\n:is(h1, h2, h3) {\n  font-weight: 700;\n}",
    options: [
      { id: "A", text: "Applies the rule to h1, h2, and h3 elements" },
      { id: "B", text: "Applies only to h1" },
      { id: "C", text: "Creates three new elements" },
      { id: "D", text: "Selects only headings with IDs" }
    ],
    correctOptionId: "A",
    explanation: ":is() groups the listed selectors so the same declarations can be applied to all matching elements.",
    tags: ["is", "selectors"]
  },

  {
    id: "css-advanced-q-031",
    quizId: "quiz_css_advanced",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a key characteristic of :where() compared with :is()?",
    options: [
      { id: "A", text: ":where() contributes zero specificity, while :is() takes specificity from its most specific argument" },
      { id: "B", text: ":where() only works on IDs" },
      { id: "C", text: ":is() always has zero specificity" },
      { id: "D", text: "They cannot accept selector lists" }
    ],
    correctOptionId: "A",
    explanation: ":where() is particularly useful for writing reusable styles with intentionally low specificity.",
    tags: ["where", "is", "specificity"]
  },

  {
    id: "css-advanced-q-032",
    quizId: "quiz_css_advanced",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does :has() allow CSS to express?",
    options: [
      { id: "A", text: "A selector can match an element based on a relative selector condition involving its descendants or related elements" },
      { id: "B", text: "Only direct ID selection" },
      { id: "C", text: "JavaScript event handling" },
      { id: "D", text: "CSS variable declarations" }
    ],
    correctOptionId: "A",
    explanation: ":has() is often called a relational pseudo-class because it enables selection based on what exists within or relative to an element.",
    tags: ["has", "relational-selectors"]
  },

  {
    id: "css-advanced-q-033",
    quizId: "quiz_css_advanced",
    order: 33,
    type: "code",
    difficulty: "Advanced",
    question: "What does this selector target?\n\n.card:has(img) { ... }",
    options: [
      { id: "A", text: "Cards that contain a matching img descendant" },
      { id: "B", text: "Every img element inside the card" },
      { id: "C", text: "Only cards with an image ID" },
      { id: "D", text: "Cards that are images themselves" }
    ],
    correctOptionId: "A",
    explanation: ":has(img) matches .card elements for which an img descendant satisfies the relative selector.",
    tags: ["has", "relational-selectors"]
  },

  {
    id: "css-advanced-q-034",
    quizId: "quiz_css_advanced",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main benefit of container queries for component architecture?",
    options: [
      { id: "A", text: "Components can adapt based on their container's available space rather than relying solely on viewport width" },
      { id: "B", text: "They remove the need for CSS classes" },
      { id: "C", text: "They only work for full-page layouts" },
      { id: "D", text: "They replace all media queries" }
    ],
    correctOptionId: "A",
    explanation: "Container queries make components more portable because their responsive behavior can depend on the local container in which they are placed.",
    tags: ["container-queries", "components", "architecture"]
  },

  {
    id: "css-advanced-q-035",
    quizId: "quiz_css_advanced",
    order: 35,
    type: "code",
    difficulty: "Advanced",
    question: "Which CSS establishes a container query based on inline size?",
    options: [
      { id: "A", text: ".wrapper { container-type: inline-size; }" },
      { id: "B", text: ".wrapper { query: width; }" },
      { id: "C", text: ".wrapper { responsive-type: inline; }" },
      { id: "D", text: ".wrapper { container-query: true; }" }
    ],
    correctOptionId: "A",
    explanation: "container-type: inline-size establishes an inline-size query container.",
    tags: ["container-queries", "container-type"]
  },

  {
    id: "css-advanced-q-036",
    quizId: "quiz_css_advanced",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of CSS nesting?",
    options: [
      { id: "A", text: "To express related selectors in a nested structure directly in CSS" },
      { id: "B", text: "To create nested HTML elements automatically" },
      { id: "C", text: "To replace CSS variables" },
      { id: "D", text: "To create JavaScript objects" }
    ],
    correctOptionId: "A",
    explanation: "Native CSS nesting allows related rules to be expressed in a nested form, improving organization in suitable codebases.",
    tags: ["css-nesting", "architecture"]
  },

  {
    id: "css-advanced-q-037",
    quizId: "quiz_css_advanced",
    order: 37,
    type: "code",
    difficulty: "Advanced",
    question: "Which example demonstrates CSS nesting?",
    options: [
      { id: "A", text: ".card { color: black; & .title { font-weight: 700; } }" },
      { id: "B", text: ".card => .title { font-weight: 700; }" },
      { id: "C", text: ".card { nested: .title; }" },
      { id: "D", text: "@nested .card .title { ... }" }
    ],
    correctOptionId: "A",
    explanation: "The nested selector using & expresses the relationship to the parent selector.",
    tags: ["css-nesting", "nesting"]
  },

  {
    id: "css-advanced-q-038",
    quizId: "quiz_css_advanced",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can low-specificity CSS architecture be beneficial?",
    options: [
      { id: "A", text: "It makes styles easier to override intentionally without relying heavily on !important" },
      { id: "B", text: "It prevents inheritance completely" },
      { id: "C", text: "It makes every declaration globally important" },
      { id: "D", text: "It eliminates the cascade" }
    ],
    correctOptionId: "A",
    explanation: "Keeping specificity manageable makes the cascade more predictable and allows later or more appropriate styles to override earlier ones.",
    tags: ["specificity", "architecture", "maintainability"]
  },

  {
    id: "css-advanced-q-039",
    quizId: "quiz_css_advanced",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which naming strategy is commonly associated with BEM?",
    options: [
      { id: "A", text: ".card__title--featured" },
      { id: "B", text: ".card/title/featured" },
      { id: "C", text: "#card > title > featured" },
      { id: "D", text: ".card.title.featured.element" }
    ],
    correctOptionId: "A",
    explanation: "BEM uses Block, Element, and Modifier naming such as block__element--modifier.",
    tags: ["bem", "css-architecture", "naming"]
  },

  {
    id: "css-advanced-q-040",
    quizId: "quiz_css_advanced",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "What problem does a design-token approach solve?",
    options: [
      { id: "A", text: "It creates a shared vocabulary for values such as colors, spacing, typography, and sizing" },
      { id: "B", text: "It removes the need for semantic HTML" },
      { id: "C", text: "It guarantees zero CSS bugs" },
      { id: "D", text: "It replaces all component styles with JavaScript" }
    ],
    correctOptionId: "A",
    explanation: "Design tokens centralize reusable design decisions and make them easier to keep consistent across a product.",
    tags: ["design-tokens", "design-systems"]
  },

  {
    id: "css-advanced-q-041",
    quizId: "quiz_css_advanced",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "Which is a good example of semantic design tokens?",
    options: [
      { id: "A", text: ":root { --color-text-primary: #111; --color-surface: #fff; }" },
      { id: "B", text: ":root { --blue-500-only: 1px; }" },
      { id: "C", text: ":root { --random-a: red; --random-b: 12px; }" },
      { id: "D", text: ":root { --button123: true; }" }
    ],
    correctOptionId: "A",
    explanation: "Semantic tokens describe the role a value plays rather than only its raw value or implementation detail.",
    tags: ["design-tokens", "semantic-tokens"]
  },

  {
    id: "css-advanced-q-042",
    quizId: "quiz_css_advanced",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is separating raw tokens from semantic tokens useful?",
    options: [
      { id: "A", text: "A semantic token can reference a raw value while allowing the design meaning to remain stable if the underlying value changes" },
      { id: "B", text: "It prevents custom properties from inheriting" },
      { id: "C", text: "It makes CSS impossible to override" },
      { id: "D", text: "It eliminates the need for components" }
    ],
    correctOptionId: "A",
    explanation: "For example, --color-blue-500 can be a raw palette value while --color-primary references it. The semantic role can remain stable even if the palette changes.",
    tags: ["design-tokens", "semantic-tokens", "architecture"]
  },

  {
    id: "css-advanced-q-043",
    quizId: "quiz_css_advanced",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "What does this token structure allow?\n\n:root {\n  --blue-600: #2563eb;\n  --color-primary: var(--blue-600);\n}",
    options: [
      { id: "A", text: "The semantic primary color can reference the underlying palette token" },
      { id: "B", text: "It creates two HTML variables" },
      { id: "C", text: "It makes blue-600 inherit from primary" },
      { id: "D", text: "It prevents primary from being overridden" }
    ],
    correctOptionId: "A",
    explanation: "--color-primary is a semantic token whose value references the raw palette token --blue-600.",
    tags: ["design-tokens", "custom-properties"]
  },

  {
    id: "css-advanced-q-044",
    quizId: "quiz_css_advanced",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main purpose of CSS architecture patterns in a large project?",
    options: [
      { id: "A", text: "To establish predictable organization, naming, ownership, and reuse of styles" },
      { id: "B", text: "To make CSS as short as possible regardless of readability" },
      { id: "C", text: "To eliminate components" },
      { id: "D", text: "To prevent responsive design" }
    ],
    correctOptionId: "A",
    explanation: "Architecture gives a large stylesheet or component system predictable conventions so developers can understand and change styles safely.",
    tags: ["css-architecture", "scalability"]
  },

  {
    id: "css-advanced-q-045",
    quizId: "quiz_css_advanced",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which practice is generally better for scalable CSS?",
    options: [
      { id: "A", text: "Keep component styles locally scoped where appropriate and minimize unnecessary global selectors" },
      { id: "B", text: "Make every component depend on global element selectors" },
      { id: "C", text: "Use !important for every component" },
      { id: "D", text: "Use deeply nested selectors everywhere" }
    ],
    correctOptionId: "A",
    explanation: "Reducing unnecessary global coupling helps prevent unrelated components from affecting each other.",
    tags: ["scalable-css", "components", "architecture"]
  },

  {
    id: "css-advanced-q-046",
    quizId: "quiz_css_advanced",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which CSS feature is especially useful for creating a reusable theme without duplicating an entire stylesheet?",
    options: [
      { id: "A", text: "Custom properties" },
      { id: "B", text: "Absolute positioning" },
      { id: "C", text: "Float" },
      { id: "D", text: "Table layout" }
    ],
    correctOptionId: "A",
    explanation: "Themes can override a set of custom properties while components continue referencing the semantic tokens.",
    tags: ["themes", "custom-properties", "design-systems"]
  },

  {
    id: "css-advanced-q-047",
    quizId: "quiz_css_advanced",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Which pattern is appropriate for a dark theme using custom properties?",
    options: [
      { id: "A", text: ":root { --surface: white; } [data-theme='dark'] { --surface: #111; }" },
      { id: "B", text: "[dark-theme] { color: variable(--surface); }" },
      { id: "C", text: "@theme dark { background: --surface; }" },
      { id: "D", text: ":dark { --surface: theme; }" }
    ],
    correctOptionId: "A",
    explanation: "A theme attribute can override custom properties for a subtree or the document root, allowing components to continue using the same semantic variable names.",
    tags: ["themes", "custom-properties", "data-attributes"]
  },

  {
    id: "css-advanced-q-048",
    quizId: "quiz_css_advanced",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a major advantage of CSS functions such as calc(), min(), max(), and clamp()?",
    options: [
      { id: "A", text: "They allow CSS values to express dynamic relationships and constraints directly in styles" },
      { id: "B", text: "They replace all media queries automatically" },
      { id: "C", text: "They only work with colors" },
      { id: "D", text: "They require JavaScript to evaluate" }
    ],
    correctOptionId: "A",
    explanation: "CSS functions can express relationships between units and constraints directly in CSS, reducing the need for hard-coded values.",
    tags: ["css-functions", "calc", "clamp", "responsive"]
  },

  {
    id: "css-advanced-q-049",
    quizId: "quiz_css_advanced",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which combination represents a strong scalable CSS strategy for a large React application?",
    options: [
      { id: "A", text: "Design tokens, custom properties, clear component boundaries, controlled specificity, and a deliberate cascade strategy" },
      { id: "B", text: "Global selectors, !important everywhere, and fixed pixel values" },
      { id: "C", text: "Inline styles for every property and no shared tokens" },
      { id: "D", text: "One massive stylesheet with deeply nested selectors" }
    ],
    correctOptionId: "A",
    explanation: "Scalable CSS depends on predictable ownership and reuse, consistent design tokens, manageable specificity, and deliberate cascade organization.",
    tags: ["architecture", "react", "design-systems", "scalability"]
  },

  {
    id: "css-advanced-q-050",
    quizId: "quiz_css_advanced",
    order: 50,
    type: "advanced",
    difficulty: "Advanced",
    question: "You are designing the CSS architecture for a large production React application. Which approach is the strongest?",
    options: [
      { id: "A", text: "Use global element selectors heavily so every component shares the same styles" },
      { id: "B", text: "Combine semantic design tokens with custom properties, component-oriented styles, low and intentional specificity, cascade layers where useful, modern CSS functions, and clear conventions for responsive and reusable components" },
      { id: "C", text: "Use !important whenever styles conflict and add more specificity when problems appear" },
      { id: "D", text: "Avoid custom properties and duplicate all design values inside every component" }
    ],
    correctOptionId: "B",
    explanation: "A scalable production architecture should make styling predictable and reusable. Design tokens provide consistency, custom properties enable runtime theming, component boundaries reduce coupling, controlled specificity keeps the cascade manageable, and modern CSS features reduce unnecessary duplication.",
    tags: ["css-architecture", "design-systems", "custom-properties", "scalability", "production"]
  }
];

export default cssAdvancedQuestions;