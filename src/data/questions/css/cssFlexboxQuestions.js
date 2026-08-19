const cssFlexboxQuestions = [
  {
    id: "css-flexbox-q-001",
    quizId: "quiz_css_flexbox",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration turns an element into a flex container?",
    options: [
      { id: "A", text: "display: flex" },
      { id: "B", text: "display: flexbox" },
      { id: "C", text: "flex: container" },
      { id: "D", text: "position: flex" }
    ],
    correctOptionId: "A",
    explanation: "display: flex establishes a flex formatting context for the element's children.",
    tags: ["flexbox", "flex-container"]
  },

  {
    id: "css-flexbox-q-002",
    quizId: "quiz_css_flexbox",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "In a flex container, which elements become flex items?",
    options: [
      { id: "A", text: "Only elements with display: block" },
      { id: "B", text: "The container's direct children" },
      { id: "C", text: "All descendants at every level" },
      { id: "D", text: "Only elements with a flex class" }
    ],
    correctOptionId: "B",
    explanation: "The direct children of a flex container become flex items.",
    tags: ["flex-container", "flex-items"]
  },

  {
    id: "css-flexbox-q-003",
    quizId: "quiz_css_flexbox",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the default value of flex-direction?",
    options: [
      { id: "A", text: "column" },
      { id: "B", text: "row" },
      { id: "C", text: "row-reverse" },
      { id: "D", text: "column-reverse" }
    ],
    correctOptionId: "B",
    explanation: "Flex containers default to flex-direction: row, so items are laid out horizontally.",
    tags: ["flex-direction", "flexbox"]
  },

  {
    id: "css-flexbox-q-004",
    quizId: "quiz_css_flexbox",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property changes the main-axis direction of a flex container?",
    options: [
      { id: "A", text: "align-direction" },
      { id: "B", text: "flex-direction" },
      { id: "C", text: "main-direction" },
      { id: "D", text: "justify-direction" }
    ],
    correctOptionId: "B",
    explanation: "flex-direction determines whether the main axis runs as a row, row-reverse, column, or column-reverse.",
    tags: ["flex-direction", "main-axis"]
  },

  {
    id: "css-flexbox-q-005",
    quizId: "quiz_css_flexbox",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "With flex-direction: column, what is the main axis?",
    options: [
      { id: "A", text: "Horizontal" },
      { id: "B", text: "Vertical" },
      { id: "C", text: "Diagonal" },
      { id: "D", text: "There is no main axis" }
    ],
    correctOptionId: "B",
    explanation: "With column direction, the main axis runs vertically from top to bottom.",
    tags: ["flex-direction", "main-axis"]
  },

  {
    id: "css-flexbox-q-006",
    quizId: "quiz_css_flexbox",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "With flex-direction: row, what is the cross axis?",
    options: [
      { id: "A", text: "Horizontal" },
      { id: "B", text: "Vertical" },
      { id: "C", text: "The same as the main axis" },
      { id: "D", text: "Undefined" }
    ],
    correctOptionId: "B",
    explanation: "For a normal row, the main axis is horizontal and the cross axis is vertical.",
    tags: ["cross-axis", "main-axis"]
  },

  {
    id: "css-flexbox-q-007",
    quizId: "quiz_css_flexbox",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls alignment along the main axis?",
    options: [
      { id: "A", text: "align-items" },
      { id: "B", text: "justify-content" },
      { id: "C", text: "align-content" },
      { id: "D", text: "justify-items" }
    ],
    correctOptionId: "B",
    explanation: "justify-content distributes flex items along the main axis.",
    tags: ["justify-content", "main-axis"]
  },

  {
    id: "css-flexbox-q-008",
    quizId: "quiz_css_flexbox",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property normally controls alignment along the cross axis for flex items?",
    options: [
      { id: "A", text: "justify-content" },
      { id: "B", text: "align-items" },
      { id: "C", text: "flex-align" },
      { id: "D", text: "cross-align" }
    ],
    correctOptionId: "B",
    explanation: "align-items controls how flex items are aligned on the cross axis.",
    tags: ["align-items", "cross-axis"]
  },

  {
    id: "css-flexbox-q-009",
    quizId: "quiz_css_flexbox",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value of justify-content places items at the start of the main axis?",
    options: [
      { id: "A", text: "start" },
      { id: "B", text: "center" },
      { id: "C", text: "space-around" },
      { id: "D", text: "stretch" }
    ],
    correctOptionId: "A",
    explanation: "justify-content: start positions the flex items at the start of the main axis.",
    tags: ["justify-content", "alignment"]
  },

  {
    id: "css-flexbox-q-010",
    quizId: "quiz_css_flexbox",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does justify-content: center do in a single-line flex container?",
    options: [
      { id: "A", text: "Centers items along the main axis" },
      { id: "B", text: "Centers items along the cross axis" },
      { id: "C", text: "Makes all items the same size" },
      { id: "D", text: "Centers text inside each item" }
    ],
    correctOptionId: "A",
    explanation: "justify-content controls main-axis distribution, so center centers the flex items along that axis.",
    tags: ["justify-content", "center"]
  },

  {
    id: "css-flexbox-q-011",
    quizId: "quiz_css_flexbox",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does align-items: center do in a row flex container?",
    options: [
      { id: "A", text: "Centers items vertically along the cross axis" },
      { id: "B", text: "Centers items horizontally along the main axis" },
      { id: "C", text: "Centers the text inside each item" },
      { id: "D", text: "Centers the flex container itself" }
    ],
    correctOptionId: "A",
    explanation: "In a row flex container, the cross axis is vertical, so align-items: center centers items vertically.",
    tags: ["align-items", "cross-axis", "center"]
  },

  {
    id: "css-flexbox-q-012",
    quizId: "quiz_css_flexbox",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration is commonly used to center an item both horizontally and vertically in a row flex container?",
    options: [
      { id: "A", text: "justify-content: center; align-items: center;" },
      { id: "B", text: "justify-items: center; align-content: center;" },
      { id: "C", text: "text-align: center; vertical-align: center;" },
      { id: "D", text: "align-self: center; position: center;" }
    ],
    correctOptionId: "A",
    explanation: "justify-content centers on the main axis and align-items centers on the cross axis.",
    tags: ["centering", "justify-content", "align-items"]
  },

  {
    id: "css-flexbox-q-013",
    quizId: "quiz_css_flexbox",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does justify-content: space-between do?",
    options: [
      { id: "A", text: "Adds equal space before and after every item" },
      { id: "B", text: "Places equal space between items, with no distributed space at the outer edges" },
      { id: "C", text: "Centers all items together" },
      { id: "D", text: "Makes every item the same width" }
    ],
    correctOptionId: "B",
    explanation: "space-between distributes the available free space between adjacent items, leaving no extra space at the two outer edges.",
    tags: ["justify-content", "space-between"]
  },

  {
    id: "css-flexbox-q-014",
    quizId: "quiz_css_flexbox",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "How does space-around differ from space-between?",
    options: [
      { id: "A", text: "space-around also distributes space around the outer edges" },
      { id: "B", text: "space-around removes all spacing" },
      { id: "C", text: "space-around only works vertically" },
      { id: "D", text: "There is no difference" }
    ],
    correctOptionId: "A",
    explanation: "space-around gives each item equal space around it, resulting in half-sized spaces at the outer edges compared with the spaces between items.",
    tags: ["justify-content", "space-around"]
  },

  {
    id: "css-flexbox-q-015",
    quizId: "quiz_css_flexbox",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does justify-content: space-evenly do?",
    options: [
      { id: "A", text: "Creates equal-sized gaps between items and the container's edges" },
      { id: "B", text: "Creates no gap between items" },
      { id: "C", text: "Only centers the first item" },
      { id: "D", text: "Makes items equal in width" }
    ],
    correctOptionId: "A",
    explanation: "space-evenly distributes free space so the gaps between items and the outer edges are equal.",
    tags: ["justify-content", "space-evenly"]
  },

  {
    id: "css-flexbox-q-016",
    quizId: "quiz_css_flexbox",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the default value of flex-wrap?",
    options: [
      { id: "A", text: "wrap" },
      { id: "B", text: "nowrap" },
      { id: "C", text: "wrap-reverse" },
      { id: "D", text: "auto" }
    ],
    correctOptionId: "B",
    explanation: "Flex containers default to flex-wrap: nowrap, meaning items remain on one flex line unless other constraints cause different behavior.",
    tags: ["flex-wrap"]
  },

  {
    id: "css-flexbox-q-017",
    quizId: "quiz_css_flexbox",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does flex-wrap: wrap allow?",
    options: [
      { id: "A", text: "Flex items to move onto additional flex lines when necessary" },
      { id: "B", text: "Flex items to become absolutely positioned" },
      { id: "C", text: "Flex items to rotate" },
      { id: "D", text: "The container to become a grid" }
    ],
    correctOptionId: "A",
    explanation: "When wrapping is enabled, items can form multiple flex lines when there is insufficient space on one line.",
    tags: ["flex-wrap", "flex-lines"]
  },

  {
    id: "css-flexbox-q-018",
    quizId: "quiz_css_flexbox",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which shorthand combines flex-direction and flex-wrap?",
    options: [
      { id: "A", text: "flex-flow" },
      { id: "B", text: "flex-layout" },
      { id: "C", text: "flex-direction-wrap" },
      { id: "D", text: "flow-flex" }
    ],
    correctOptionId: "A",
    explanation: "flex-flow is shorthand for flex-direction and flex-wrap.",
    tags: ["flex-flow", "flex-direction", "flex-wrap"]
  },

  {
    id: "css-flexbox-q-019",
    quizId: "quiz_css_flexbox",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration creates a wrapping horizontal flex layout?",
    options: [
      { id: "A", text: "flex-flow: row wrap;" },
      { id: "B", text: "flex-flow: wrap row-only;" },
      { id: "C", text: "flex: row wrap;" },
      { id: "D", text: "display: row wrap;" }
    ],
    correctOptionId: "A",
    explanation: "flex-flow accepts the flex-direction followed by flex-wrap, so row wrap creates a horizontal wrapping layout.",
    tags: ["flex-flow", "flex-wrap"]
  },

  {
    id: "css-flexbox-q-020",
    quizId: "quiz_css_flexbox",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the default value of align-items?",
    options: [
      { id: "A", text: "center" },
      { id: "B", text: "stretch" },
      { id: "C", text: "flex-start" },
      { id: "D", text: "baseline" }
    ],
    correctOptionId: "B",
    explanation: "align-items defaults to stretch, subject to the item's cross-size constraints.",
    tags: ["align-items", "defaults"]
  },

  {
    id: "css-flexbox-q-021",
    quizId: "quiz_css_flexbox",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does align-items: stretch generally do?",
    options: [
      { id: "A", text: "Stretches flex items across the cross axis when their cross size is auto" },
      { id: "B", text: "Makes items infinitely large" },
      { id: "C", text: "Stretches items only along the main axis" },
      { id: "D", text: "Changes the item's width to 100vw" }
    ],
    correctOptionId: "A",
    explanation: "stretch causes auto cross-size flex items to fill the available cross-axis size, subject to constraints.",
    tags: ["align-items", "stretch"]
  },

  {
    id: "css-flexbox-q-022",
    quizId: "quiz_css_flexbox",
    order: 22,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property allows one flex item to override the container's align-items value for itself?",
    options: [
      { id: "A", text: "align-self" },
      { id: "B", text: "self-align" },
      { id: "C", text: "item-align" },
      { id: "D", text: "justify-self" }
    ],
    correctOptionId: "A",
    explanation: "align-self controls the cross-axis alignment of an individual flex item.",
    tags: ["align-self", "flex-items"]
  },

  {
    id: "css-flexbox-q-023",
    quizId: "quiz_css_flexbox",
    order: 23,
    type: "code",
    difficulty: "Beginner",
    question: "A flex container has align-items: center. One item has align-self: flex-start. What happens?",
    options: [
      { id: "A", text: "That item is aligned at the start of the cross axis while the others remain centered" },
      { id: "B", text: "The entire container changes to flex-start" },
      { id: "C", text: "The item is removed from the flex layout" },
      { id: "D", text: "align-self is ignored on flex items" }
    ],
    correctOptionId: "A",
    explanation: "align-self overrides align-items for an individual flex item.",
    tags: ["align-self", "align-items"]
  },

  {
    id: "css-flexbox-q-024",
    quizId: "quiz_css_flexbox",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the order property control on a flex item?",
    options: [
      { id: "A", text: "Its visual ordering within the flex container" },
      { id: "B", text: "Its DOM position" },
      { id: "C", text: "Its z-index" },
      { id: "D", text: "Its animation duration" }
    ],
    correctOptionId: "A",
    explanation: "order changes the visual order of flex items without changing their DOM order.",
    tags: ["order", "flex-items"]
  },

  {
    id: "css-flexbox-q-025",
    quizId: "quiz_css_flexbox",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "Three flex items have order values 0, 2, and 1 respectively. In what visual order will they appear?",
    options: [
      { id: "A", text: "0, 1, 2" },
      { id: "B", text: "2, 1, 0" },
      { id: "C", text: "1, 0, 2" },
      { id: "D", text: "The original DOM order always wins" }
    ],
    correctOptionId: "A",
    explanation: "Flex items are sorted by their order value, with lower values appearing first.",
    tags: ["order", "flex-items"]
  },

  {
    id: "css-flexbox-q-026",
    quizId: "quiz_css_flexbox",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the default order value of flex items?",
    options: [
      { id: "A", text: "-1" },
      { id: "B", text: "0" },
      { id: "C", text: "1" },
      { id: "D", text: "auto" }
    ],
    correctOptionId: "B",
    explanation: "The order property defaults to 0.",
    tags: ["order", "defaults"]
  },

  {
    id: "css-flexbox-q-027",
    quizId: "quiz_css_flexbox",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls how much a flex item can grow when extra space is available?",
    options: [
      { id: "A", text: "flex-grow" },
      { id: "B", text: "flex-expand" },
      { id: "C", text: "grow-factor" },
      { id: "D", text: "flex-size" }
    ],
    correctOptionId: "A",
    explanation: "flex-grow defines the item's grow factor when positive free space is distributed.",
    tags: ["flex-grow", "flex-items"]
  },

  {
    id: "css-flexbox-q-028",
    quizId: "quiz_css_flexbox",
    order: 28,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the default value of flex-grow?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "auto" },
      { id: "D", text: "-1" }
    ],
    correctOptionId: "A",
    explanation: "flex-grow defaults to 0, so flex items do not grow to consume positive free space unless configured to do so.",
    tags: ["flex-grow", "defaults"]
  },

  {
    id: "css-flexbox-q-029",
    quizId: "quiz_css_flexbox",
    order: 29,
    type: "code",
    difficulty: "Intermediate",
    question: "Two flex items have flex-grow values of 1 and 2, with positive free space available. Which item receives more of that free space?",
    options: [
      { id: "A", text: "The first item" },
      { id: "B", text: "The second item" },
      { id: "C", text: "Both always receive exactly the same amount" },
      { id: "D", text: "Neither can grow" }
    ],
    correctOptionId: "B",
    explanation: "The grow factors determine the proportional distribution of positive free space. A factor of 2 receives twice the share of a factor of 1, subject to other sizing constraints.",
    tags: ["flex-grow", "free-space"]
  },

  {
    id: "css-flexbox-q-030",
    quizId: "quiz_css_flexbox",
    order: 30,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls how a flex item shrinks when there is insufficient space?",
    options: [
      { id: "A", text: "flex-shrink" },
      { id: "B", text: "flex-compress" },
      { id: "C", text: "shrink-factor" },
      { id: "D", text: "flex-reduce" }
    ],
    correctOptionId: "A",
    explanation: "flex-shrink controls the shrink factor used when negative free space needs to be distributed.",
    tags: ["flex-shrink", "flex-items"]
  },

  {
    id: "css-flexbox-q-031",
    quizId: "quiz_css_flexbox",
    order: 31,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the default value of flex-shrink?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "1" },
      { id: "C", text: "2" },
      { id: "D", text: "auto" }
    ],
    correctOptionId: "B",
    explanation: "flex-shrink defaults to 1, allowing flex items to shrink when necessary.",
    tags: ["flex-shrink", "defaults"]
  },

  {
    id: "css-flexbox-q-032",
    quizId: "quiz_css_flexbox",
    order: 32,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does flex-basis define?",
    options: [
      { id: "A", text: "The initial main-size contribution of a flex item before free-space distribution" },
      { id: "B", text: "The item's final height only" },
      { id: "C", text: "The item's z-index" },
      { id: "D", text: "The cross-axis alignment" }
    ],
    correctOptionId: "A",
    explanation: "flex-basis establishes the initial main size used when calculating the flex layout before growing or shrinking.",
    tags: ["flex-basis", "main-size"]
  },

  {
    id: "css-flexbox-q-033",
    quizId: "quiz_css_flexbox",
    order: 33,
    type: "mcq",
    difficulty: "Beginner",
    question: "For a row flex container, which dimension does flex-basis primarily control?",
    options: [
      { id: "A", text: "Horizontal main size" },
      { id: "B", text: "Vertical cross size" },
      { id: "C", text: "Both dimensions equally" },
      { id: "D", text: "Only margin" }
    ],
    correctOptionId: "A",
    explanation: "In a row flex container, the main axis is horizontal, so flex-basis primarily determines the item's initial main size along that axis.",
    tags: ["flex-basis", "row", "main-axis"]
  },

  {
    id: "css-flexbox-q-034",
    quizId: "quiz_css_flexbox",
    order: 34,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the flex shorthand represent?",
    options: [
      { id: "A", text: "flex-grow, flex-shrink, and flex-basis" },
      { id: "B", text: "flex-direction, flex-wrap, and order" },
      { id: "C", text: "justify-content, align-items, and gap" },
      { id: "D", text: "width, height, and margin" }
    ],
    correctOptionId: "A",
    explanation: "The flex shorthand represents flex-grow, flex-shrink, and flex-basis.",
    tags: ["flex", "shorthand"]
  },

  {
    id: "css-flexbox-q-035",
    quizId: "quiz_css_flexbox",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What does flex: 1 commonly communicate in a simple flex layout?",
    options: [
      { id: "A", text: "The item can grow and shrink and has a zero flex basis in the shorthand expansion" },
      { id: "B", text: "The item can never shrink" },
      { id: "C", text: "The item is exactly 1px wide" },
      { id: "D", text: "The item receives order 1" }
    ],
    correctOptionId: "A",
    explanation: "A single number in the flex shorthand is interpreted as flex-grow. The resulting shorthand behavior commonly corresponds to flex: 1 1 0%, allowing the item to grow and shrink from a zero flex basis.",
    tags: ["flex", "flex-grow", "shorthand"]
  },

  {
    id: "css-flexbox-q-036",
    quizId: "quiz_css_flexbox",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property creates a consistent gap between flex items without requiring margins on each item?",
    options: [
      { id: "A", text: "gap" },
      { id: "B", text: "item-spacing" },
      { id: "C", text: "flex-gap-only" },
      { id: "D", text: "spacing" }
    ],
    correctOptionId: "A",
    explanation: "The gap property controls spacing between items in flex and other layout contexts.",
    tags: ["gap", "spacing"]
  },

  {
    id: "css-flexbox-q-037",
    quizId: "quiz_css_flexbox",
    order: 37,
    type: "code",
    difficulty: "Beginner",
    question: "Which CSS is best for creating a navigation row with 16px spacing between items?",
    options: [
      { id: "A", text: ".nav { display: flex; gap: 16px; }" },
      { id: "B", text: ".nav { display: inline; spacing: 16px; }" },
      { id: "C", text: ".nav { flex-gap: 16px; }" },
      { id: "D", text: ".nav { margin-items: 16px; }" }
    ],
    correctOptionId: "A",
    explanation: "display: flex establishes the flex layout and gap: 16px creates the spacing between flex items.",
    tags: ["gap", "flexbox", "navigation"]
  },

  {
    id: "css-flexbox-q-038",
    quizId: "quiz_css_flexbox",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does align-content control in a multi-line flex container?",
    options: [
      { id: "A", text: "Distribution of flex lines along the cross axis" },
      { id: "B", text: "Alignment of one item along the main axis" },
      { id: "C", text: "The order of individual items" },
      { id: "D", text: "The width of every flex item" }
    ],
    correctOptionId: "A",
    explanation: "align-content distributes multiple flex lines along the cross axis when there is extra cross-axis space.",
    tags: ["align-content", "flex-lines"]
  },

  {
    id: "css-flexbox-q-039",
    quizId: "quiz_css_flexbox",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "When is align-content relevant in Flexbox?",
    options: [
      { id: "A", text: "Primarily when the flex container has multiple lines" },
      { id: "B", text: "Only when there is exactly one item" },
      { id: "C", text: "Only for inline elements" },
      { id: "D", text: "Only when flex-direction is column" }
    ],
    correctOptionId: "A",
    explanation: "align-content affects the distribution of multiple flex lines. It does not perform the same role as align-items for individual items.",
    tags: ["align-content", "flex-wrap"]
  },

  {
    id: "css-flexbox-q-040",
    quizId: "quiz_css_flexbox",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement correctly distinguishes align-items from align-content?",
    options: [
      { id: "A", text: "align-items aligns items within a line; align-content distributes multiple lines" },
      { id: "B", text: "align-items controls main-axis order; align-content controls item width" },
      { id: "C", text: "They always do exactly the same thing" },
      { id: "D", text: "align-content works only with grid" }
    ],
    correctOptionId: "A",
    explanation: "align-items handles cross-axis alignment of items, while align-content handles distribution of multiple flex lines.",
    tags: ["align-items", "align-content"]
  },

  {
    id: "css-flexbox-q-041",
    quizId: "quiz_css_flexbox",
    order: 41,
    type: "code",
    difficulty: "Intermediate",
    question: "A flex container has flex-direction: column. Which property would you use to center its items horizontally?",
    options: [
      { id: "A", text: "justify-content: center" },
      { id: "B", text: "align-items: center" },
      { id: "C", text: "flex-center: horizontal" },
      { id: "D", text: "justify-items: center" }
    ],
    correctOptionId: "B",
    explanation: "With column direction, the main axis is vertical and the cross axis is horizontal. align-items controls the cross axis.",
    tags: ["flex-direction", "align-items", "cross-axis"]
  },

  {
    id: "css-flexbox-q-042",
    quizId: "quiz_css_flexbox",
    order: 42,
    type: "code",
    difficulty: "Intermediate",
    question: "A flex container has flex-direction: column. Which property centers its items vertically along the main axis?",
    options: [
      { id: "A", text: "align-items: center" },
      { id: "B", text: "justify-content: center" },
      { id: "C", text: "align-content: center" },
      { id: "D", text: "vertical-align: center" }
    ],
    correctOptionId: "B",
    explanation: "With column direction, the main axis is vertical, so justify-content controls vertical positioning.",
    tags: ["flex-direction", "justify-content", "main-axis"]
  },

  {
    id: "css-flexbox-q-043",
    quizId: "quiz_css_flexbox",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when flex-direction is changed from row to column?",
    options: [
      { id: "A", text: "The main and cross axes change orientation" },
      { id: "B", text: "Flexbox stops working" },
      { id: "C", text: "All flex items become absolute" },
      { id: "D", text: "justify-content becomes invalid" }
    ],
    correctOptionId: "A",
    explanation: "Changing flex-direction changes the orientation of the main axis, which also changes the orientation of the cross axis.",
    tags: ["flex-direction", "axes"]
  },

  {
    id: "css-flexbox-q-044",
    quizId: "quiz_css_flexbox",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does flex-direction: row-reverse do?",
    options: [
      { id: "A", text: "Lays items along the row main axis in the reverse direction" },
      { id: "B", text: "Moves items into a column" },
      { id: "C", text: "Reverses the DOM order" },
      { id: "D", text: "Reverses the cross axis only" }
    ],
    correctOptionId: "A",
    explanation: "row-reverse reverses the direction of the row's main axis for flex layout.",
    tags: ["flex-direction", "row-reverse"]
  },

  {
    id: "css-flexbox-q-045",
    quizId: "quiz_css_flexbox",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about order is important for accessibility?",
    options: [
      { id: "A", text: "Changing visual order does not necessarily change the DOM or reading/navigation order" },
      { id: "B", text: "Changing order automatically changes the HTML source" },
      { id: "C", text: "order always changes screen reader reading order" },
      { id: "D", text: "order can only be used on images" }
    ],
    correctOptionId: "A",
    explanation: "The order property changes visual presentation but does not reorder the DOM. Excessive visual reordering can therefore create accessibility and logical-order problems.",
    tags: ["order", "accessibility"]
  },

  {
    id: "css-flexbox-q-046",
    quizId: "quiz_css_flexbox",
    order: 46,
    type: "code",
    difficulty: "Intermediate",
    question: "You want three cards to share available horizontal space equally. Which approach is most appropriate?",
    options: [
      { id: "A", text: "Give each card flex: 1" },
      { id: "B", text: "Give each card position: absolute" },
      { id: "C", text: "Give each card order: 1" },
      { id: "D", text: "Give the container text-align: justify" }
    ],
    correctOptionId: "A",
    explanation: "flex: 1 is a common pattern for making sibling flex items share available space.",
    tags: ["flex", "flex-grow", "layout"]
  },

  {
    id: "css-flexbox-q-047",
    quizId: "quiz_css_flexbox",
    order: 47,
    type: "code",
    difficulty: "Intermediate",
    question: "Which layout is appropriate for placing a logo on the left and navigation links on the right of a header?",
    options: [
      { id: "A", text: "display: flex with justify-content: space-between" },
      { id: "B", text: "display: block with justify-content: space-between" },
      { id: "C", text: "display: grid with flex-direction: row" },
      { id: "D", text: "position: space-between" }
    ],
    correctOptionId: "A",
    explanation: "A flex container with space-between places the first item at the start and the last item at the end, distributing remaining space between them.",
    tags: ["flexbox", "justify-content", "layout-patterns"]
  },

  {
    id: "css-flexbox-q-048",
    quizId: "quiz_css_flexbox",
    order: 48,
    type: "code",
    difficulty: "Intermediate",
    question: "A button inside a flex container should be pushed to the far end of the main axis while preceding content stays at the start. Which technique is commonly useful?",
    options: [
      { id: "A", text: "margin-inline-start: auto on the button" },
      { id: "B", text: "padding-inline-start: auto on the button" },
      { id: "C", text: "align-items: auto on the button" },
      { id: "D", text: "order: auto-end on the button" }
    ],
    correctOptionId: "A",
    explanation: "An auto margin on the main-axis side can absorb available free space and push the item toward the opposite end.",
    tags: ["auto-margin", "flexbox", "layout-patterns"]
  },

  {
    id: "css-flexbox-q-049",
    quizId: "quiz_css_flexbox",
    order: 49,
    type: "advanced",
    difficulty: "Intermediate",
    question: "A flex item has flex-grow: 1, but it does not appear to grow. Which is a reasonable first thing to investigate?",
    options: [
      { id: "A", text: "Whether there is actually positive free space available along the main axis" },
      { id: "B", text: "Whether the item has a hover state" },
      { id: "C", text: "Whether the item has border-radius" },
      { id: "D", text: "Whether the page uses semantic HTML" }
    ],
    correctOptionId: "A",
    explanation: "flex-grow distributes positive free space. If there is no positive free space, the grow factor has nothing to distribute.",
    tags: ["flex-grow", "debugging", "free-space"]
  },

  {
    id: "css-flexbox-q-050",
    quizId: "quiz_css_flexbox",
    order: 50,
    type: "advanced",
    difficulty: "Intermediate",
    question: "A developer uses justify-content: center expecting an item to be vertically centered, but the container uses flex-direction: column. What should they understand?",
    options: [
      { id: "A", text: "With column direction, the main axis is vertical, so justify-content: center actually performs vertical main-axis centering" },
      { id: "B", text: "justify-content always controls horizontal alignment regardless of direction" },
      { id: "C", text: "justify-content never works with column layouts" },
      { id: "D", text: "They must use position: absolute" }
    ],
    correctOptionId: "A",
    explanation: "Flexbox alignment properties are relative to the flex axes. In a column layout, the main axis is vertical, so justify-content controls vertical distribution.",
    tags: ["justify-content", "flex-direction", "axes", "debugging"]
  }
];

export default cssFlexboxQuestions;