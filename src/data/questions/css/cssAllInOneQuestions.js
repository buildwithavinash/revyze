const cssAllInOneQuestions = [
  {
    id: "css-all-in-one-q-001",
    quizId: "quiz_css_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which CSS property is used to change the text color of an element?",
    options: [
      { id: "A", text: "color" },
      { id: "B", text: "text-color" },
      { id: "C", text: "font-color" },
      { id: "D", text: "foreground-color" }
    ],
    correctOptionId: "A",
    explanation: "The color property controls the foreground color of text.",
    tags: ["color", "fundamentals"]
  },

  {
    id: "css-all-in-one-q-002",
    quizId: "quiz_css_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which CSS property changes the background color of an element?",
    options: [
      { id: "A", text: "background-color" },
      { id: "B", text: "color-background" },
      { id: "C", text: "bg-color" },
      { id: "D", text: "background-fill" }
    ],
    correctOptionId: "A",
    explanation: "background-color sets the background color of an element.",
    tags: ["background", "color"]
  },

  {
    id: "css-all-in-one-q-003",
    quizId: "quiz_css_all_in_one",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector targets every <p> element?",
    options: [
      { id: "A", text: ".p" },
      { id: "B", text: "#p" },
      { id: "C", text: "p" },
      { id: "D", text: "*" }
    ],
    correctOptionId: "C",
    explanation: "A type selector using p targets all paragraph elements.",
    tags: ["selectors", "type-selector"]
  },

  {
    id: "css-all-in-one-q-004",
    quizId: "quiz_css_all_in_one",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector targets an element with class=\"card\"?",
    options: [
      { id: "A", text: "#card" },
      { id: "B", text: ".card" },
      { id: "C", text: "card" },
      { id: "D", text: "*card" }
    ],
    correctOptionId: "B",
    explanation: "A period followed by the class name creates a class selector.",
    tags: ["selectors", "classes"]
  },

  {
    id: "css-all-in-one-q-005",
    quizId: "quiz_css_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector targets an element with id=\"header\"?",
    options: [
      { id: "A", text: ".header" },
      { id: "B", text: "header" },
      { id: "C", text: "#header" },
      { id: "D", text: "*header" }
    ],
    correctOptionId: "C",
    explanation: "The # prefix is used for an ID selector.",
    tags: ["selectors", "id"]
  },

  {
    id: "css-all-in-one-q-006",
    quizId: "quiz_css_all_in_one",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the universal selector (*) target?",
    options: [
      { id: "A", text: "Only elements with an ID" },
      { id: "B", text: "All elements in the matching scope" },
      { id: "C", text: "Only direct children" },
      { id: "D", text: "Only elements with classes" }
    ],
    correctOptionId: "B",
    explanation: "The universal selector matches every element in its applicable scope.",
    tags: ["selectors", "universal-selector"]
  },

  {
    id: "css-all-in-one-q-007",
    quizId: "quiz_css_all_in_one",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls the font size of text?",
    options: [
      { id: "A", text: "text-size" },
      { id: "B", text: "font-size" },
      { id: "C", text: "font-scale" },
      { id: "D", text: "size" }
    ],
    correctOptionId: "B",
    explanation: "font-size controls the size of text.",
    tags: ["typography", "font-size"]
  },

  {
    id: "css-all-in-one-q-008",
    quizId: "quiz_css_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls the space between the content and an element's border?",
    options: [
      { id: "A", text: "margin" },
      { id: "B", text: "padding" },
      { id: "C", text: "gap" },
      { id: "D", text: "spacing" }
    ],
    correctOptionId: "B",
    explanation: "Padding creates space inside the element, between its content and border.",
    tags: ["box-model", "padding"]
  },

  {
    id: "css-all-in-one-q-009",
    quizId: "quiz_css_all_in_one",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property creates space outside an element's border?",
    options: [
      { id: "A", text: "padding" },
      { id: "B", text: "margin" },
      { id: "C", text: "gap" },
      { id: "D", text: "outside-space" }
    ],
    correctOptionId: "B",
    explanation: "Margin creates space outside an element's border.",
    tags: ["box-model", "margin"]
  },

  {
    id: "css-all-in-one-q-010",
    quizId: "quiz_css_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which parts make up the traditional CSS box model?",
    options: [
      { id: "A", text: "Content, padding, border, and margin" },
      { id: "B", text: "Content, grid, flex, and margin" },
      { id: "C", text: "Width, height, display, and position" },
      { id: "D", text: "Text, background, shadow, and border" }
    ],
    correctOptionId: "A",
    explanation: "The CSS box model consists of content, padding, border, and margin.",
    tags: ["box-model", "layout"]
  },

  {
    id: "css-all-in-one-q-011",
    quizId: "quiz_css_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does box-sizing: border-box do?",
    options: [
      { id: "A", text: "Includes padding and border within the declared width and height" },
      { id: "B", text: "Removes the border" },
      { id: "C", text: "Makes margin part of the width" },
      { id: "D", text: "Makes every element inline" }
    ],
    correctOptionId: "A",
    explanation: "With border-box, the declared width and height include the content, padding, and border.",
    tags: ["box-sizing", "box-model"]
  },

  {
    id: "css-all-in-one-q-012",
    quizId: "quiz_css_all_in_one",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "Given box-sizing: border-box; width: 200px; padding: 20px; border: 5px solid; what is the total outer width of the element, ignoring margin?",
    options: [
      { id: "A", text: "150px" },
      { id: "B", text: "200px" },
      { id: "C", text: "230px" },
      { id: "D", text: "250px" }
    ],
    correctOptionId: "B",
    explanation: "With border-box, the declared width already includes the 20px padding on both sides and 5px border on both sides.",
    tags: ["box-sizing", "box-model", "width"]
  },

  {
    id: "css-all-in-one-q-013",
    quizId: "quiz_css_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which display value makes an element participate as a block-level box?",
    options: [
      { id: "A", text: "block" },
      { id: "B", text: "inline-block-only" },
      { id: "C", text: "box" },
      { id: "D", text: "flow" }
    ],
    correctOptionId: "A",
    explanation: "display: block makes the element generate a block-level box.",
    tags: ["display", "block"]
  },

  {
    id: "css-all-in-one-q-014",
    quizId: "quiz_css_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a key difference between inline and block elements?",
    options: [
      { id: "A", text: "Block elements normally start on a new line, while inline elements participate in the surrounding inline flow" },
      { id: "B", text: "Inline elements can never contain text" },
      { id: "C", text: "Block elements cannot have padding" },
      { id: "D", text: "Inline elements always occupy the full viewport width" }
    ],
    correctOptionId: "A",
    explanation: "Block-level boxes generally start on a new line and can take available width, while inline boxes flow alongside surrounding inline content.",
    tags: ["display", "inline", "block"]
  },

  {
    id: "css-all-in-one-q-015",
    quizId: "quiz_css_all_in_one",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does display: none do?",
    options: [
      { id: "A", text: "Makes the element transparent but keeps its layout space" },
      { id: "B", text: "Removes the element from the layout" },
      { id: "C", text: "Moves the element behind other elements" },
      { id: "D", text: "Makes the element inline" }
    ],
    correctOptionId: "B",
    explanation: "display: none causes the element to generate no box, so it does not occupy layout space.",
    tags: ["display", "none"]
  },

  {
    id: "css-all-in-one-q-016",
    quizId: "quiz_css_all_in_one",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration creates a flex container?",
    options: [
      { id: "A", text: "display: flex;" },
      { id: "B", text: "position: flex;" },
      { id: "C", text: "layout: flex;" },
      { id: "D", text: "flex: container;" }
    ],
    correctOptionId: "A",
    explanation: "display: flex establishes a flex formatting context for the element's children.",
    tags: ["flexbox", "display"]
  },

  {
    id: "css-all-in-one-q-017",
    quizId: "quiz_css_all_in_one",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "In a flex container with flex-direction: row, what is the main axis?",
    options: [
      { id: "A", text: "The horizontal row axis" },
      { id: "B", text: "The vertical column axis" },
      { id: "C", text: "The z-axis" },
      { id: "D", text: "There is no main axis" }
    ],
    correctOptionId: "A",
    explanation: "With flex-direction: row, the main axis runs horizontally in the inline direction by default.",
    tags: ["flexbox", "main-axis"]
  },

  {
    id: "css-all-in-one-q-018",
    quizId: "quiz_css_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which flexbox property controls alignment along the main axis?",
    options: [
      { id: "A", text: "align-items" },
      { id: "B", text: "justify-content" },
      { id: "C", text: "align-content" },
      { id: "D", text: "main-align" }
    ],
    correctOptionId: "B",
    explanation: "justify-content controls distribution of flex items along the main axis.",
    tags: ["flexbox", "justify-content"]
  },

  {
    id: "css-all-in-one-q-019",
    quizId: "quiz_css_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which flexbox property controls alignment along the cross axis for a single-line flex container?",
    options: [
      { id: "A", text: "justify-content" },
      { id: "B", text: "align-items" },
      { id: "C", text: "cross-content" },
      { id: "D", text: "item-position" }
    ],
    correctOptionId: "B",
    explanation: "align-items controls the cross-axis alignment of flex items.",
    tags: ["flexbox", "align-items"]
  },

  {
    id: "css-all-in-one-q-020",
    quizId: "quiz_css_all_in_one",
    order: 20,
    type: "code",
    difficulty: "Beginner",
    question: "Which combination is commonly used to center an item horizontally and vertically inside a flex container?",
    options: [
      { id: "A", text: "justify-content: center; align-items: center;" },
      { id: "B", text: "text-align: center; vertical-align: center;" },
      { id: "C", text: "margin: center; padding: center;" },
      { id: "D", text: "position: center; display: block;" }
    ],
    correctOptionId: "A",
    explanation: "For a default row-direction flex container, justify-content centers along the main axis and align-items centers along the cross axis.",
    tags: ["flexbox", "alignment", "centering"]
  },

  {
    id: "css-all-in-one-q-021",
    quizId: "quiz_css_all_in_one",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which declaration creates a CSS Grid container?",
    options: [
      { id: "A", text: "display: grid;" },
      { id: "B", text: "layout: grid;" },
      { id: "C", text: "grid: container;" },
      { id: "D", text: "display: columns;" }
    ],
    correctOptionId: "A",
    explanation: "display: grid establishes a grid formatting context.",
    tags: ["grid", "display"]
  },

  {
    id: "css-all-in-one-q-022",
    quizId: "quiz_css_all_in_one",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this declaration create?\n\ngrid-template-columns: repeat(3, 1fr);",
    options: [
      { id: "A", text: "Three equal-width grid columns" },
      { id: "B", text: "Three rows of fixed height" },
      { id: "C", text: "One column spanning three rows" },
      { id: "D", text: "Three flex containers" }
    ],
    correctOptionId: "A",
    explanation: "repeat(3, 1fr) creates three tracks, each taking one equal fraction of the available grid space.",
    tags: ["grid", "columns", "fr"]
  },

  {
    id: "css-all-in-one-q-023",
    quizId: "quiz_css_all_in_one",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the fr unit represent in CSS Grid?",
    options: [
      { id: "A", text: "A fraction of the available grid space" },
      { id: "B", text: "A fixed number of pixels" },
      { id: "C", text: "A percentage of the viewport only" },
      { id: "D", text: "A font-relative unit" }
    ],
    correctOptionId: "A",
    explanation: "The fr unit represents a fraction of the available space in the grid container.",
    tags: ["grid", "fr", "layout"]
  },

  {
    id: "css-all-in-one-q-024",
    quizId: "quiz_css_all_in_one",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property creates space between grid or flex items?",
    options: [
      { id: "A", text: "gap" },
      { id: "B", text: "spacing" },
      { id: "C", text: "item-gap-only" },
      { id: "D", text: "space-between" }
    ],
    correctOptionId: "A",
    explanation: "The gap property controls gutters between rows and columns in grid and flex layouts.",
    tags: ["grid", "flexbox", "gap"]
  },

  {
    id: "css-all-in-one-q-025",
    quizId: "quiz_css_all_in_one",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does position: relative do when no offsets are specified?",
    options: [
      { id: "A", text: "It keeps the element in normal flow while establishing a positioned element for descendants and enabling offsets" },
      { id: "B", text: "It removes the element from normal flow" },
      { id: "C", text: "It makes the element fixed to the viewport" },
      { id: "D", text: "It automatically centers the element" }
    ],
    correctOptionId: "A",
    explanation: "A relatively positioned element remains in normal flow. It also establishes a positioning reference for absolutely positioned descendants.",
    tags: ["position", "relative", "layout"]
  },

  {
    id: "css-all-in-one-q-026",
    quizId: "quiz_css_all_in_one",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a key characteristic of position: absolute?",
    options: [
      { id: "A", text: "The element is removed from normal flow and positioned relative to an appropriate containing block" },
      { id: "B", text: "The element always stays in normal flow" },
      { id: "C", text: "The element is always positioned relative to the viewport" },
      { id: "D", text: "The element cannot use top, right, bottom, or left" }
    ],
    correctOptionId: "A",
    explanation: "Absolutely positioned elements are removed from normal flow and positioned relative to their containing block.",
    tags: ["position", "absolute", "layout"]
  },

  {
    id: "css-all-in-one-q-027",
    quizId: "quiz_css_all_in_one",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "An absolutely positioned element is commonly positioned relative to which ancestor when one establishes the appropriate containing block?",
    options: [
      { id: "A", text: "A positioned ancestor" },
      { id: "B", text: "The nearest sibling" },
      { id: "C", text: "The first text node" },
      { id: "D", text: "The browser's CSS file" }
    ],
    correctOptionId: "A",
    explanation: "A positioned ancestor can establish the containing block used for an absolutely positioned descendant.",
    tags: ["position", "absolute", "containing-block"]
  },

  {
    id: "css-all-in-one-q-028",
    quizId: "quiz_css_all_in_one",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does position: fixed generally do?",
    options: [
      { id: "A", text: "Positions the element relative to the viewport and keeps it fixed during scrolling, subject to relevant containing-block behavior" },
      { id: "B", text: "Keeps the element in normal document flow" },
      { id: "C", text: "Makes the element relative to its previous sibling" },
      { id: "D", text: "Automatically places the element at the center" }
    ],
    correctOptionId: "A",
    explanation: "Fixed positioning generally removes the element from normal flow and anchors it to the viewport, although certain properties can establish a different containing block.",
    tags: ["position", "fixed"]
  },

  {
    id: "css-all-in-one-q-029",
    quizId: "quiz_css_all_in_one",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is special about position: sticky?",
    options: [
      { id: "A", text: "The element behaves relatively until a scrolling threshold is reached, after which it can stick within its scroll container" },
      { id: "B", text: "It always behaves exactly like fixed positioning" },
      { id: "C", text: "It removes the element from the document immediately" },
      { id: "D", text: "It disables scrolling" }
    ],
    correctOptionId: "A",
    explanation: "Sticky positioning combines relative-like behavior with a threshold-based sticking behavior within its relevant scroll container.",
    tags: ["position", "sticky", "scrolling"]
  },

  {
    id: "css-all-in-one-q-030",
    quizId: "quiz_css_all_in_one",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of z-index?",
    options: [
      { id: "A", text: "To influence the stacking order of positioned or stacking-context elements" },
      { id: "B", text: "To control horizontal width" },
      { id: "C", text: "To control font size" },
      { id: "D", text: "To change the DOM order" }
    ],
    correctOptionId: "A",
    explanation: "z-index participates in determining stacking order within the relevant stacking contexts. It does not change DOM order.",
    tags: ["z-index", "stacking-context", "position"]
  },

  {
    id: "css-all-in-one-q-031",
    quizId: "quiz_css_all_in_one",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which CSS unit is relative to the root element's font size?",
    options: [
      { id: "A", text: "em" },
      { id: "B", text: "rem" },
      { id: "C", text: "vh" },
      { id: "D", text: "vw" }
    ],
    correctOptionId: "B",
    explanation: "rem is relative to the root element's font size, typically the html element's computed font size.",
    tags: ["units", "rem", "typography"]
  },

  {
    id: "css-all-in-one-q-032",
    quizId: "quiz_css_all_in_one",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is em generally relative to when used for font-size?",
    options: [
      { id: "A", text: "The element's inherited or computed font-size context" },
      { id: "B", text: "Always the viewport width" },
      { id: "C", text: "Always the root font size" },
      { id: "D", text: "The screen resolution" }
    ],
    correctOptionId: "A",
    explanation: "The em unit is relative to the relevant font-size. For font-size itself, its relative calculation is based on the parent's font size.",
    tags: ["units", "em", "typography"]
  },

  {
    id: "css-all-in-one-q-033",
    quizId: "quiz_css_all_in_one",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does 100vh traditionally represent?",
    options: [
      { id: "A", text: "100% of the relevant viewport height unit" },
      { id: "B", text: "100 pixels" },
      { id: "C", text: "100% of the parent width" },
      { id: "D", text: "100% of the root font size" }
    ],
    correctOptionId: "A",
    explanation: "vh is a viewport-height unit. Modern browsers also provide newer viewport units such as svh, lvh, and dvh for more precise mobile viewport behavior.",
    tags: ["units", "vh", "viewport"]
  },

  {
    id: "css-all-in-one-q-034",
    quizId: "quiz_css_all_in_one",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which CSS feature is primarily used to apply styles based on viewport or device conditions?",
    options: [
      { id: "A", text: "Media queries" },
      { id: "B", text: "Pseudo-elements" },
      { id: "C", text: "CSS variables" },
      { id: "D", text: "Keyframes" }
    ],
    correctOptionId: "A",
    explanation: "Media queries allow CSS rules to be conditionally applied based on characteristics such as viewport width, orientation, and user preferences.",
    tags: ["responsive-design", "media-queries"]
  },

  {
    id: "css-all-in-one-q-035",
    quizId: "quiz_css_all_in_one",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this media query do?\n\n@media (max-width: 768px) { ... }",
    options: [
      { id: "A", text: "Applies the enclosed styles when the viewport matches a maximum width of 768px" },
      { id: "B", text: "Applies the styles only when the viewport is wider than 768px" },
      { id: "C", text: "Sets every element to 768px wide" },
      { id: "D", text: "Creates a 768px margin" }
    ],
    correctOptionId: "A",
    explanation: "The max-width condition matches viewports at or below the specified threshold, subject to media-query evaluation.",
    tags: ["media-queries", "responsive-design"]
  },

  {
    id: "css-all-in-one-q-036",
    quizId: "quiz_css_all_in_one",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is CSS specificity used for?",
    options: [
      { id: "A", text: "Determining which competing CSS declarations have priority" },
      { id: "B", text: "Determining the number of HTML elements" },
      { id: "C", text: "Determining browser screen resolution" },
      { id: "D", text: "Determining file size" }
    ],
    correctOptionId: "A",
    explanation: "Specificity is one part of the cascade that determines which declaration wins when multiple declarations apply to the same element and property.",
    tags: ["specificity", "cascade", "selectors"]
  },

  {
    id: "css-all-in-one-q-037",
    quizId: "quiz_css_all_in_one",
    order: 37,
    type: "code",
    difficulty: "Intermediate",
    question: "Which selector generally has greater specificity?",
    options: [
      { id: "A", text: ".card" },
      { id: "B", text: "#card" },
      { id: "C", text: "div" },
      { id: "D", text: "*" }
    ],
    correctOptionId: "B",
    explanation: "An ID selector has greater specificity than a class selector, type selector, or universal selector.",
    tags: ["specificity", "selectors", "id"]
  },

  {
    id: "css-all-in-one-q-038",
    quizId: "quiz_css_all_in_one",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does CSS inheritance mean?",
    options: [
      { id: "A", text: "Some property values can be inherited by descendants from their ancestors" },
      { id: "B", text: "Every CSS property automatically inherits" },
      { id: "C", text: "Child elements always override parent styles" },
      { id: "D", text: "Inheritance only applies to CSS variables" }
    ],
    correctOptionId: "A",
    explanation: "Certain CSS properties inherit by default, while others do not. The inherit keyword can explicitly request inheritance.",
    tags: ["inheritance", "cascade"]
  },

  {
    id: "css-all-in-one-q-039",
    quizId: "quiz_css_all_in_one",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the CSS cascade determine?",
    options: [
      { id: "A", text: "Which applicable declarations win based on origin, importance, specificity, scope, and source order" },
      { id: "B", text: "How HTML elements are parsed into the DOM only" },
      { id: "C", text: "How JavaScript functions execute" },
      { id: "D", text: "How images are compressed" }
    ],
    correctOptionId: "A",
    explanation: "The cascade is the algorithm that resolves competing CSS declarations using several factors, including origin, importance, specificity, scope, and order.",
    tags: ["cascade", "specificity", "css"]
  },

  {
    id: "css-all-in-one-q-040",
    quizId: "quiz_css_all_in_one",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does a CSS custom property allow developers to do?",
    options: [
      { id: "A", text: "Store reusable CSS values that can be referenced with var()" },
      { id: "B", text: "Create JavaScript variables automatically" },
      { id: "C", text: "Create new HTML elements" },
      { id: "D", text: "Replace media queries" }
    ],
    correctOptionId: "A",
    explanation: "Custom properties such as --primary-color can store reusable values and be consumed with var(--primary-color).",
    tags: ["css-variables", "custom-properties"]
  },

  {
    id: "css-all-in-one-q-041",
    quizId: "quiz_css_all_in_one",
    order: 41,
    type: "code",
    difficulty: "Intermediate",
    question: "What will var(--primary-color) do in this declaration?\n\n:root { --primary-color: #2563eb; }\nbutton { color: var(--primary-color); }",
    options: [
      { id: "A", text: "Use the value stored in the --primary-color custom property" },
      { id: "B", text: "Create a JavaScript variable named primary-color" },
      { id: "C", text: "Select an element with ID primary-color" },
      { id: "D", text: "Automatically generate a random color" }
    ],
    correctOptionId: "A",
    explanation: "var() references a CSS custom property and substitutes its computed value.",
    tags: ["css-variables", "var"]
  },

  {
    id: "css-all-in-one-q-042",
    quizId: "quiz_css_all_in_one",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a pseudo-class?",
    options: [
      { id: "A", text: "A selector keyword that targets an element based on a state or condition" },
      { id: "B", text: "A CSS variable" },
      { id: "C", text: "A replacement for an HTML element" },
      { id: "D", text: "A JavaScript class" }
    ],
    correctOptionId: "A",
    explanation: "Pseudo-classes such as :hover, :focus, and :checked select elements based on state or structural conditions.",
    tags: ["pseudo-classes", "selectors"]
  },

  {
    id: "css-all-in-one-q-043",
    quizId: "quiz_css_all_in_one",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a pseudo-element?",
    options: [
      { id: "A", text: "A selector that represents a conceptual part of an element, such as ::before or ::after" },
      { id: "B", text: "A real HTML element automatically inserted into the DOM" },
      { id: "C", text: "A JavaScript-generated component" },
      { id: "D", text: "A CSS media query" }
    ],
    correctOptionId: "A",
    explanation: "Pseudo-elements represent conceptual portions of elements and can be styled with selectors such as ::before and ::after.",
    tags: ["pseudo-elements", "selectors"]
  },

  {
    id: "css-all-in-one-q-044",
    quizId: "quiz_css_all_in_one",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property controls the transparency of an entire element, including its descendants?",
    options: [
      { id: "A", text: "opacity" },
      { id: "B", text: "alpha-only" },
      { id: "C", text: "transparent" },
      { id: "D", text: "visibility-alpha" }
    ],
    correctOptionId: "A",
    explanation: "opacity controls the opacity of the element and its rendered descendants as a whole.",
    tags: ["opacity", "visual-effects"]
  },

  {
    id: "css-all-in-one-q-045",
    quizId: "quiz_css_all_in_one",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does overflow: hidden generally do?",
    options: [
      { id: "A", text: "Clips content that extends outside the element's overflow area" },
      { id: "B", text: "Deletes overflowing DOM nodes" },
      { id: "C", text: "Makes the element position: fixed" },
      { id: "D", text: "Makes the element transparent" }
    ],
    correctOptionId: "A",
    explanation: "overflow: hidden clips overflowing content instead of displaying it outside the element's overflow area.",
    tags: ["overflow", "layout"]
  },

  {
    id: "css-all-in-one-q-046",
    quizId: "quiz_css_all_in_one",
    order: 46,
    type: "advanced",
    difficulty: "Advanced",
    question: "Which situation can create a new stacking context?",
    options: [
      { id: "A", text: "An element with certain properties such as opacity less than 1 or transform applied" },
      { id: "B", text: "Every element with margin: 0" },
      { id: "C", text: "Every paragraph element" },
      { id: "D", text: "Any element with color set" }
    ],
    correctOptionId: "A",
    explanation: "Several CSS features can establish stacking contexts, including opacity below 1 and transform values other than none. Stacking contexts affect how z-index is resolved.",
    tags: ["stacking-context", "z-index", "advanced-css"]
  },

  {
    id: "css-all-in-one-q-047",
    quizId: "quiz_css_all_in_one",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Why might z-index: 9999 fail to place an element above another element with z-index: 10?",
    options: [
      { id: "A", text: "The elements may belong to different stacking contexts, so the numbers are not compared globally" },
      { id: "B", text: "z-index only accepts values below 100" },
      { id: "C", text: "z-index only works with Grid" },
      { id: "D", text: "Large z-index values are automatically ignored" }
    ],
    correctOptionId: "A",
    explanation: "z-index values are resolved within stacking contexts. A child with a huge z-index cannot escape its parent's stacking context to outrank an unrelated stacking context.",
    tags: ["z-index", "stacking-context", "advanced-css"]
  },

  {
    id: "css-all-in-one-q-048",
    quizId: "quiz_css_all_in_one",
    order: 48,
    type: "advanced",
    difficulty: "Advanced",
    question: "Which approach is generally most appropriate for a responsive card grid that should automatically adapt to available width?",
    options: [
      { id: "A", text: "CSS Grid with repeat(auto-fit, minmax(...))" },
      { id: "B", text: "A fixed width for every card with no media queries or flexible layout" },
      { id: "C", text: "Absolute positioning every card using pixel coordinates" },
      { id: "D", text: "Using <br> elements to create columns" }
    ],
    correctOptionId: "A",
    explanation: "Grid's auto-fit combined with minmax() can create responsive tracks that adapt to the available container width without requiring a breakpoint for every possible size.",
    tags: ["grid", "responsive-design", "minmax", "auto-fit"]
  },

  {
    id: "css-all-in-one-q-049",
    quizId: "quiz_css_all_in_one",
    order: 49,
    type: "advanced",
    difficulty: "Advanced",
    question: "Which CSS strategy is generally the most maintainable for a responsive page layout?",
    options: [
      { id: "A", text: "Use flexible layout systems such as Flexbox/Grid, relative units, constraints, and media queries where needed" },
      { id: "B", text: "Position every element with absolute pixel coordinates" },
      { id: "C", text: "Use hundreds of <br> elements for spacing" },
      { id: "D", text: "Give every element a fixed width equal to one desktop viewport" }
    ],
    correctOptionId: "A",
    explanation: "Responsive layouts are generally more robust when built around flexible layout primitives, adaptable sizing, and targeted media queries instead of hard-coded coordinates.",
    tags: ["responsive-design", "layout", "flexbox", "grid"]
  },

  {
    id: "css-all-in-one-q-050",
    quizId: "quiz_css_all_in_one",
    order: 50,
    type: "advanced",
    difficulty: "Advanced",
    question: "A developer is building a responsive dashboard. Which architecture demonstrates the strongest overall CSS understanding?",
    options: [
      {
        id: "A",
        text: "Use Grid/Flexbox for layout, box-sizing: border-box, semantic class-based selectors, CSS custom properties for reusable values, responsive units and media queries where appropriate, and controlled stacking contexts"
      },
      {
        id: "B",
        text: "Use absolute positioning for every component and fixed pixel dimensions for every screen size"
      },
      {
        id: "C",
        text: "Use IDs for every element, !important everywhere, and hundreds of arbitrary z-index values"
      },
      {
        id: "D",
        text: "Use inline styles and <br> elements for layout and spacing"
      }
    ],
    correctOptionId: "A",
    explanation: "A maintainable responsive CSS architecture uses the platform's layout systems, predictable box sizing, reusable custom properties, appropriate selectors, responsive sizing, and deliberate stacking behavior rather than relying on brittle positioning and specificity hacks.",
    tags: ["css-architecture", "responsive-design", "grid", "flexbox", "maintainability"]
  }
];

export default cssAllInOneQuestions;