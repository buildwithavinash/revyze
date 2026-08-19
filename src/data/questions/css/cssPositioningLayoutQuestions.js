const cssPositioningLayoutQuestions = [
  {
    id: "css-positioning-layout-q-001",
    quizId: "quiz_css_positioning_layout",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the default value of the CSS position property?",
    options: [
      { id: "A", text: "relative" },
      { id: "B", text: "static" },
      { id: "C", text: "absolute" },
      { id: "D", text: "fixed" }
    ],
    correctOptionId: "B",
    explanation: "The default position value is static. The element participates in normal document flow and top, right, bottom, and left do not reposition it.",
    tags: ["position", "static", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-002",
    quizId: "quiz_css_positioning_layout",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens when an element has position: relative?",
    options: [
      { id: "A", text: "It is removed completely from normal flow" },
      { id: "B", text: "It becomes fixed to the viewport" },
      { id: "C", text: "It remains in normal flow but can be visually offset" },
      { id: "D", text: "It behaves exactly like position: absolute" }
    ],
    correctOptionId: "C",
    explanation: "A relatively positioned element keeps its original space in the document flow while its visual position can be adjusted using offsets.",
    tags: ["relative", "position", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-003",
    quizId: "quiz_css_positioning_layout",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which position value removes an element from normal document flow and positions it relative to a containing block?",
    options: [
      { id: "A", text: "absolute" },
      { id: "B", text: "relative" },
      { id: "C", text: "static" },
      { id: "D", text: "inherit" }
    ],
    correctOptionId: "A",
    explanation: "An absolutely positioned element is removed from normal flow and positioned relative to its containing block.",
    tags: ["absolute", "position", "containing-block"]
  },

  {
    id: "css-positioning-layout-q-004",
    quizId: "quiz_css_positioning_layout",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which position value normally keeps an element attached to the viewport while scrolling?",
    options: [
      { id: "A", text: "sticky" },
      { id: "B", text: "absolute" },
      { id: "C", text: "relative" },
      { id: "D", text: "fixed" }
    ],
    correctOptionId: "D",
    explanation: "A fixed-positioned element is taken out of normal flow and is positioned relative to the viewport in the usual case.",
    tags: ["fixed", "viewport", "position"]
  },

  {
    id: "css-positioning-layout-q-005",
    quizId: "quiz_css_positioning_layout",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which position value can behave like relative positioning until a scrolling threshold is reached?",
    options: [
      { id: "A", text: "sticky" },
      { id: "B", text: "absolute" },
      { id: "C", text: "fixed" },
      { id: "D", text: "static" }
    ],
    correctOptionId: "A",
    explanation: "position: sticky behaves like a relatively positioned element until its specified offset threshold is reached, after which it sticks within its scrolling context.",
    tags: ["sticky", "scrolling", "position"]
  },

  {
    id: "css-positioning-layout-q-006",
    quizId: "quiz_css_positioning_layout",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "What is the result of this CSS?\n\n.box {\n  position: relative;\n  top: 20px;\n}",
    options: [
      { id: "A", text: "The element moves 20px upward and loses its original space" },
      { id: "B", text: "The element moves 20px downward while retaining its original layout space" },
      { id: "C", text: "The element becomes fixed to the viewport" },
      { id: "D", text: "The element moves 20px downward and is removed from normal flow" }
    ],
    correctOptionId: "B",
    explanation: "With relative positioning, top: 20px shifts the element downward from its normal position while its original space remains reserved.",
    tags: ["relative", "top", "offset"]
  },

  {
    id: "css-positioning-layout-q-007",
    quizId: "quiz_css_positioning_layout",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What do top, right, bottom, and left represent for a positioned element?",
    options: [
      { id: "A", text: "They define the element's border thickness" },
      { id: "B", text: "They only work with static elements" },
      { id: "C", text: "They specify offsets used to position the element" },
      { id: "D", text: "They automatically create margins" }
    ],
    correctOptionId: "C",
    explanation: "These inset properties modify the position of positioned elements, with their exact behavior depending on the position value.",
    tags: ["offsets", "top", "right", "bottom", "left"]
  },

  {
    id: "css-positioning-layout-q-008",
    quizId: "quiz_css_positioning_layout",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about position: static is correct?",
    options: [
      { id: "A", text: "top and left reposition the element normally" },
      { id: "B", text: "The element is removed from normal flow" },
      { id: "C", text: "The element is attached to the viewport" },
      { id: "D", text: "The element participates in normal flow and offsets do not reposition it" }
    ],
    correctOptionId: "D",
    explanation: "Static positioning is the normal default layout behavior. The inset properties do not reposition a statically positioned element.",
    tags: ["static", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-009",
    quizId: "quiz_css_positioning_layout",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What happens to the space originally occupied by an absolutely positioned element?",
    options: [
      { id: "A", text: "It remains reserved permanently" },
      { id: "B", text: "The element is removed from normal flow, so its original space is not reserved" },
      { id: "C", text: "The browser automatically replaces it with margin" },
      { id: "D", text: "The space becomes padding" }
    ],
    correctOptionId: "B",
    explanation: "Absolute positioning removes the element from normal flow, allowing surrounding content to lay out as though the element were not there.",
    tags: ["absolute", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-010",
    quizId: "quiz_css_positioning_layout",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which position value generally keeps an element in normal document flow?",
    options: [
      { id: "A", text: "absolute" },
      { id: "B", text: "fixed" },
      { id: "C", text: "relative" },
      { id: "D", text: "sticky" }
    ],
    correctOptionId: "C",
    explanation: "Relative positioning keeps the element's original space in normal flow. Sticky also participates in flow, but has additional scrolling behavior.",
    tags: ["relative", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-011",
    quizId: "quiz_css_positioning_layout",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property is commonly used to control the stacking order of positioned elements?",
    options: [
      { id: "A", text: "z-index" },
      { id: "B", text: "stack-order" },
      { id: "C", text: "layer-index" },
      { id: "D", text: "position-index" }
    ],
    correctOptionId: "A",
    explanation: "z-index controls stacking order within the relevant stacking context.",
    tags: ["z-index", "stacking"]
  },

  {
    id: "css-positioning-layout-q-012",
    quizId: "quiz_css_positioning_layout",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "If two overlapping positioned elements are in the same stacking context and have z-index values of 1 and 5, which generally appears on top?",
    options: [
      { id: "A", text: "The element with z-index: 1" },
      { id: "B", text: "Both always appear equally" },
      { id: "C", text: "The element with z-index: 5" },
      { id: "D", text: "The element that appears first in HTML regardless of z-index" }
    ],
    correctOptionId: "C",
    explanation: "Within the same stacking context, a higher stack level generally paints above a lower one.",
    tags: ["z-index", "stacking-context"]
  },

  {
    id: "css-positioning-layout-q-013",
    quizId: "quiz_css_positioning_layout",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of setting position: relative on a parent before absolutely positioning a child?",
    options: [
      { id: "A", text: "It guarantees the child becomes fixed" },
      { id: "B", text: "It creates a useful positioning reference for the absolutely positioned child" },
      { id: "C", text: "It removes the parent from normal flow" },
      { id: "D", text: "It disables z-index" }
    ],
    correctOptionId: "B",
    explanation: "A positioned ancestor can establish the containing block used by an absolutely positioned descendant.",
    tags: ["relative", "absolute", "containing-block"]
  },

  {
    id: "css-positioning-layout-q-014",
    quizId: "quiz_css_positioning_layout",
    order: 14,
    type: "code",
    difficulty: "Intermediate",
    question: "Given:\n\n.parent { position: relative; }\n.child { position: absolute; top: 0; right: 0; }\n\nWhat is the intended effect?",
    options: [
      { id: "A", text: "The child is placed near the parent's top-right positioning area" },
      { id: "B", text: "The child is fixed to the browser viewport" },
      { id: "C", text: "The parent is moved to the top-right" },
      { id: "D", text: "The child remains in normal flow" }
    ],
    correctOptionId: "A",
    explanation: "The positioned parent establishes the reference for the absolutely positioned child, allowing top/right placement within that context.",
    tags: ["absolute", "relative", "top-right"]
  },

  {
    id: "css-positioning-layout-q-015",
    quizId: "quiz_css_positioning_layout",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "If an absolutely positioned element has no suitable positioned ancestor, what containing block does it generally fall back to?",
    options: [
      { id: "A", text: "The nearest sibling" },
      { id: "B", text: "The first flex item" },
      { id: "C", text: "The initial containing block" },
      { id: "D", text: "The body text node" }
    ],
    correctOptionId: "C",
    explanation: "If no ancestor establishes the appropriate containing block, an absolutely positioned element generally uses the initial containing block.",
    tags: ["absolute", "containing-block"]
  },

  {
    id: "css-positioning-layout-q-016",
    quizId: "quiz_css_positioning_layout",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is the most common reference for position: fixed?",
    options: [
      { id: "A", text: "The nearest paragraph" },
      { id: "B", text: "The viewport" },
      { id: "C", text: "The previous sibling" },
      { id: "D", text: "The nearest static ancestor" }
    ],
    correctOptionId: "B",
    explanation: "Fixed positioning is generally relative to the viewport, although certain ancestor properties can affect the containing block in modern CSS.",
    tags: ["fixed", "viewport"]
  },

  {
    id: "css-positioning-layout-q-017",
    quizId: "quiz_css_positioning_layout",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes position: sticky?",
    options: [
      { id: "A", text: "It always behaves exactly like fixed" },
      { id: "B", text: "It is permanently removed from normal flow" },
      { id: "C", text: "It behaves like relative positioning until a threshold is reached" },
      { id: "D", text: "It cannot respond to scrolling" }
    ],
    correctOptionId: "C",
    explanation: "Sticky positioning participates in layout like a relatively positioned element and then sticks according to its inset threshold within its scrolling context.",
    tags: ["sticky", "scrolling"]
  },

  {
    id: "css-positioning-layout-q-018",
    quizId: "quiz_css_positioning_layout",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "Which declaration is required for a typical sticky header to know when to stick to the top?",
    options: [
      { id: "A", text: "top: 0;" },
      { id: "B", text: "z-index: sticky;" },
      { id: "C", text: "position: fixed;" },
      { id: "D", text: "sticky-top: true;" }
    ],
    correctOptionId: "A",
    explanation: "A sticky element needs an inset threshold such as top: 0 to define where it should stick.",
    tags: ["sticky", "top"]
  },

  {
    id: "css-positioning-layout-q-019",
    quizId: "quiz_css_positioning_layout",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is normal document flow?",
    options: [
      { id: "A", text: "The browser's default layout process where elements occupy space according to their normal formatting rules" },
      { id: "B", text: "A special mode created only by position: absolute" },
      { id: "C", text: "The process of assigning z-index values" },
      { id: "D", text: "A JavaScript animation technique" }
    ],
    correctOptionId: "A",
    explanation: "Normal flow is the browser's default layout behavior where elements participate in the normal formatting structure and affect the placement of surrounding content.",
    tags: ["normal-flow", "layout"]
  },

  {
    id: "css-positioning-layout-q-020",
    quizId: "quiz_css_positioning_layout",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which positioning modes remove an element from normal flow?",
    options: [
      { id: "A", text: "relative and sticky" },
      { id: "B", text: "absolute and fixed" },
      { id: "C", text: "static and relative" },
      { id: "D", text: "sticky and relative" }
    ],
    correctOptionId: "B",
    explanation: "Absolute and fixed positioned elements are taken out of normal document flow.",
    tags: ["absolute", "fixed", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-021",
    quizId: "quiz_css_positioning_layout",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a stacking context?",
    options: [
      { id: "A", text: "A group of elements that share an independent stacking environment" },
      { id: "B", text: "A container that automatically uses Flexbox" },
      { id: "C", text: "A CSS animation timeline" },
      { id: "D", text: "A list of all elements in the DOM" }
    ],
    correctOptionId: "A",
    explanation: "A stacking context is an independent three-dimensional stacking environment in which descendants are ordered relative to each other.",
    tags: ["stacking-context", "z-index"]
  },

  {
    id: "css-positioning-layout-q-022",
    quizId: "quiz_css_positioning_layout",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which combination can create a stacking context?",
    options: [
      { id: "A", text: "position: relative with z-index: 1" },
      { id: "B", text: "margin: 10px" },
      { id: "C", text: "display: block alone" },
      { id: "D", text: "padding: 20px" }
    ],
    correctOptionId: "A",
    explanation: "A positioned element such as relative or absolute with a z-index other than auto can establish a stacking context.",
    tags: ["stacking-context", "z-index", "position"]
  },

  {
    id: "css-positioning-layout-q-023",
    quizId: "quiz_css_positioning_layout",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property value can create a stacking context when opacity is used?",
    options: [
      { id: "A", text: "opacity: 1" },
      { id: "B", text: "opacity: 2" },
      { id: "C", text: "opacity: 0.5" },
      { id: "D", text: "opacity: auto" }
    ],
    correctOptionId: "C",
    explanation: "An opacity value less than 1 creates a stacking context.",
    tags: ["opacity", "stacking-context"]
  },

  {
    id: "css-positioning-layout-q-024",
    quizId: "quiz_css_positioning_layout",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property can create a stacking context even without using position?",
    options: [
      { id: "A", text: "transform" },
      { id: "B", text: "margin" },
      { id: "C", text: "line-height" },
      { id: "D", text: "font-size" }
    ],
    correctOptionId: "A",
    explanation: "A transform value other than none can establish a stacking context.",
    tags: ["transform", "stacking-context"]
  },

  {
    id: "css-positioning-layout-q-025",
    quizId: "quiz_css_positioning_layout",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\n.box {\n  position: relative;\n  z-index: 10;\n}",
    options: [
      { id: "A", text: "Creates a new HTML element" },
      { id: "B", text: "Moves the element 10px vertically" },
      { id: "C", text: "Creates a stacking context and gives the element a positive stack level" },
      { id: "D", text: "Makes the element fixed" }
    ],
    correctOptionId: "C",
    explanation: "A positioned element with a z-index other than auto can establish a stacking context, and 10 gives it a positive stack level within the relevant context.",
    tags: ["z-index", "stacking-context"]
  },

  {
    id: "css-positioning-layout-q-026",
    quizId: "quiz_css_positioning_layout",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why might z-index: 9999 fail to place an element above another element?",
    options: [
      { id: "A", text: "z-index only accepts values below 100" },
      { id: "B", text: "The element may belong to a different stacking context whose parent is below the other context" },
      { id: "C", text: "z-index only works on static elements" },
      { id: "D", text: "Large z-index values are automatically ignored" }
    ],
    correctOptionId: "B",
    explanation: "z-index values are interpreted within stacking contexts. A descendant with a huge z-index cannot escape its ancestor's stacking context and necessarily appear above another sibling stacking context.",
    tags: ["z-index", "stacking-context", "debugging"]
  },

  {
    id: "css-positioning-layout-q-027",
    quizId: "quiz_css_positioning_layout",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does float: left do?",
    options: [
      { id: "A", text: "Moves an element to the left and allows surrounding inline content to wrap around it" },
      { id: "B", text: "Fixes an element to the viewport" },
      { id: "C", text: "Creates a CSS Grid" },
      { id: "D", text: "Makes the element absolutely positioned" }
    ],
    correctOptionId: "A",
    explanation: "A floated element is shifted to the specified side and surrounding content can flow around it.",
    tags: ["float", "layout"]
  },

  {
    id: "css-positioning-layout-q-028",
    quizId: "quiz_css_positioning_layout",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property is traditionally used to prevent an element from sitting beside floated elements?",
    options: [
      { id: "A", text: "float" },
      { id: "B", text: "clear" },
      { id: "C", text: "stack" },
      { id: "D", text: "reset" }
    ],
    correctOptionId: "B",
    explanation: "The clear property controls whether an element can sit beside floated elements.",
    tags: ["float", "clear"]
  },

  {
    id: "css-positioning-layout-q-029",
    quizId: "quiz_css_positioning_layout",
    order: 29,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\n.footer {\n  clear: both;\n}",
    options: [
      { id: "A", text: "Removes all margins from the footer" },
      { id: "B", text: "Prevents the footer from sitting alongside left or right floated elements" },
      { id: "C", text: "Makes the footer fixed" },
      { id: "D", text: "Moves the footer to the right" }
    ],
    correctOptionId: "B",
    explanation: "clear: both prevents the element from being positioned alongside either left- or right-floated elements.",
    tags: ["clear", "float"]
  },

  {
    id: "css-positioning-layout-q-030",
    quizId: "quiz_css_positioning_layout",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can a parent containing only floated children appear to have no height?",
    options: [
      { id: "A", text: "Floated children are removed from normal flow, so the parent's normal-flow height calculation may not include them" },
      { id: "B", text: "Floats always have zero height" },
      { id: "C", text: "The parent becomes fixed" },
      { id: "D", text: "The browser ignores all children of a floated element" }
    ],
    correctOptionId: "A",
    explanation: "Floats are taken out of normal flow, which can cause a parent containing only floats to collapse unless the layout establishes a suitable block formatting context or clearing strategy.",
    tags: ["float", "normal-flow", "clearfix"]
  },

  {
    id: "css-positioning-layout-q-031",
    quizId: "quiz_css_positioning_layout",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which modern layout systems are generally preferred over floats for creating application layouts?",
    options: [
      { id: "A", text: "Only tables" },
      { id: "B", text: "Flexbox and Grid" },
      { id: "C", text: "Only absolute positioning" },
      { id: "D", text: "Only inline elements" }
    ],
    correctOptionId: "B",
    explanation: "Flexbox and Grid are purpose-built modern layout systems. Floats remain useful in specific situations, such as wrapping text around content.",
    tags: ["float", "flexbox", "grid", "layout"]
  },

  {
    id: "css-positioning-layout-q-032",
    quizId: "quiz_css_positioning_layout",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which position value is most appropriate for a small badge positioned in the corner of a card?",
    options: [
      { id: "A", text: "absolute" },
      { id: "B", text: "static" },
      { id: "C", text: "relative" },
      { id: "D", text: "inherit" }
    ],
    correctOptionId: "A",
    explanation: "An absolutely positioned badge can be placed precisely within a positioned card, commonly using position: relative on the card.",
    tags: ["absolute", "badge", "ui-layout"]
  },

  {
    id: "css-positioning-layout-q-033",
    quizId: "quiz_css_positioning_layout",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "Which CSS is a common pattern for placing a badge in the top-right corner of a card?",
    options: [
      { id: "A", text: ".card { position: absolute; } .badge { position: static; }" },
      { id: "B", text: ".card { position: relative; } .badge { position: absolute; top: 0; right: 0; }" },
      { id: "C", text: ".card { display: fixed; } .badge { top-right: 0; }" },
      { id: "D", text: ".card { float: right; } .badge { z-index: top; }" }
    ],
    correctOptionId: "B",
    explanation: "The card establishes the positioning context, while the badge is absolutely positioned at the top-right.",
    tags: ["relative", "absolute", "badge"]
  },

  {
    id: "css-positioning-layout-q-034",
    quizId: "quiz_css_positioning_layout",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common use case for position: fixed?",
    options: [
      { id: "A", text: "A permanently visible floating action button" },
      { id: "B", text: "A normal paragraph in document flow" },
      { id: "C", text: "A card that should move with its parent" },
      { id: "D", text: "A normal inline word" }
    ],
    correctOptionId: "A",
    explanation: "Fixed positioning is useful for UI elements that should remain attached to the viewport, such as floating buttons or certain navigation controls.",
    tags: ["fixed", "ui-layout"]
  },

  {
    id: "css-positioning-layout-q-035",
    quizId: "quiz_css_positioning_layout",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is a common use case for position: sticky?",
    options: [
      { id: "A", text: "A heading that should disappear immediately when scrolling" },
      { id: "B", text: "A sidebar or header that should stick within a scrolling area" },
      { id: "C", text: "An element that must always be centered using JavaScript" },
      { id: "D", text: "An element that should always be removed from layout" }
    ],
    correctOptionId: "B",
    explanation: "Sticky positioning is commonly used for headers, table headings, and sidebars that should remain visible after reaching a scroll threshold.",
    tags: ["sticky", "sidebar", "header"]
  },

  {
    id: "css-positioning-layout-q-036",
    quizId: "quiz_css_positioning_layout",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about z-index is most accurate?",
    options: [
      { id: "A", text: "It changes the physical x/y position of an element" },
      { id: "B", text: "It controls the stacking order of elements within the relevant stacking context" },
      { id: "C", text: "It changes the element's width" },
      { id: "D", text: "It automatically creates a Grid layout" }
    ],
    correctOptionId: "B",
    explanation: "z-index affects the element's stacking order along the conceptual z-axis within the relevant stacking context.",
    tags: ["z-index", "stacking"]
  },

  {
    id: "css-positioning-layout-q-037",
    quizId: "quiz_css_positioning_layout",
    order: 37,
    type: "code",
    difficulty: "Intermediate",
    question: "Consider:\n\n.a { position: relative; z-index: 2; }\n.b { position: relative; z-index: 5; }\n\nIf both are in the same stacking context and overlap, which is painted above?",
    options: [
      { id: "A", text: ".a" },
      { id: "B", text: "Neither; z-index is ignored" },
      { id: "C", text: ".b" },
      { id: "D", text: "The one with the shorter class name" }
    ],
    correctOptionId: "C",
    explanation: "Within the same stacking context, the higher z-index value generally places the element above the lower value.",
    tags: ["z-index", "stacking-context"]
  },

  {
    id: "css-positioning-layout-q-038",
    quizId: "quiz_css_positioning_layout",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does z-index: -1 generally do?",
    options: [
      { id: "A", text: "Places the element at a lower stack level within its stacking context" },
      { id: "B", text: "Moves the element 1px left" },
      { id: "C", text: "Disables positioning" },
      { id: "D", text: "Makes the element invisible in every situation" }
    ],
    correctOptionId: "A",
    explanation: "A negative z-index places the element at a lower stack level relative to other content in the applicable stacking context. Its final visibility also depends on the surrounding stacking context and painting order.",
    tags: ["z-index", "negative-z-index"]
  },

  {
    id: "css-positioning-layout-q-039",
    quizId: "quiz_css_positioning_layout",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Two children have z-index values of 100 and 200, but they belong to different stacking contexts. What should you remember?",
    options: [
      { id: "A", text: "The child with 200 must always appear above the child with 100" },
      { id: "B", text: "z-index values are compared globally across the entire document" },
      { id: "C", text: "The stacking order of their parent contexts can determine which child context appears above the other" },
      { id: "D", text: "The browser randomly chooses one" }
    ],
    correctOptionId: "C",
    explanation: "A child's z-index only has meaning within its own stacking context. The ancestor stacking contexts determine how those groups are stacked relative to each other.",
    tags: ["stacking-context", "z-index", "advanced"]
  },

  {
    id: "css-positioning-layout-q-040",
    quizId: "quiz_css_positioning_layout",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which property value can create a stacking context even when the element is not positioned?",
    options: [
      { id: "A", text: "opacity: 0.8" },
      { id: "B", text: "margin: 0" },
      { id: "C", text: "padding: 0" },
      { id: "D", text: "font-weight: 400" }
    ],
    correctOptionId: "A",
    explanation: "An opacity value less than 1 creates a stacking context.",
    tags: ["opacity", "stacking-context"]
  },

  {
    id: "css-positioning-layout-q-041",
    quizId: "quiz_css_positioning_layout",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about stacking contexts is correct?",
    options: [
      { id: "A", text: "Every z-index value is compared against every element on the page" },
      { id: "B", text: "A stacking context is treated as an independent stacking unit within its parent context" },
      { id: "C", text: "Stacking contexts only exist when position: absolute is used" },
      { id: "D", text: "Stacking contexts have no relationship to rendering order" }
    ],
    correctOptionId: "B",
    explanation: "A stacking context is self-contained. Its descendants are stacked within it, and the entire context participates as a unit in its parent stacking context.",
    tags: ["stacking-context", "rendering"]
  },

  {
    id: "css-positioning-layout-q-042",
    quizId: "quiz_css_positioning_layout",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a major difference between relative and absolute positioning?",
    options: [
      { id: "A", text: "Relative keeps its layout space while absolute is removed from normal flow" },
      { id: "B", text: "Absolute keeps its layout space while relative removes it" },
      { id: "C", text: "Both always remove the element from normal flow" },
      { id: "D", text: "Neither can use top or left" }
    ],
    correctOptionId: "A",
    explanation: "Relative positioning preserves the element's original space in normal flow, while absolute positioning removes the element from normal flow.",
    tags: ["relative", "absolute", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-043",
    quizId: "quiz_css_positioning_layout",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "Why might this sticky element fail to behave as expected?\n\n.sidebar {\n  position: sticky;\n  top: 20px;\n}\n\nAssume an ancestor creates an unexpected scrolling context.",
    options: [
      { id: "A", text: "Sticky positioning can be affected by the scrolling/containing context created by ancestors" },
      { id: "B", text: "top cannot be used with sticky" },
      { id: "C", text: "sticky only works with position: absolute" },
      { id: "D", text: "sticky requires z-index: 99999" }
    ],
    correctOptionId: "A",
    explanation: "Sticky positioning is tied to a scrolling mechanism and containing context. Ancestor overflow/scrolling behavior can therefore affect its behavior.",
    tags: ["sticky", "scrolling-context", "debugging"]
  },

  {
    id: "css-positioning-layout-q-044",
    quizId: "quiz_css_positioning_layout",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which layout approach is generally best for a two-dimensional application layout instead of manually positioning every element?",
    options: [
      { id: "A", text: "Absolute positioning for every element" },
      { id: "B", text: "CSS Grid" },
      { id: "C", text: "Using top/left on every element" },
      { id: "D", text: "Using floats for every component" }
    ],
    correctOptionId: "B",
    explanation: "CSS Grid is designed for two-dimensional layouts and is generally preferable to manually positioning each element.",
    tags: ["grid", "layout", "best-practices"]
  },

  {
    id: "css-positioning-layout-q-045",
    quizId: "quiz_css_positioning_layout",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "When is absolute positioning most appropriate?",
    options: [
      { id: "A", text: "For every major page section" },
      { id: "B", text: "For normal paragraphs that should determine document flow" },
      { id: "C", text: "For UI elements that need precise positioning relative to a containing block" },
      { id: "D", text: "For replacing all Grid layouts" }
    ],
    correctOptionId: "C",
    explanation: "Absolute positioning is useful for overlays, badges, icons, tooltips, and similar UI pieces that need precise placement relative to a containing block.",
    tags: ["absolute", "ui", "best-practices"]
  },

  {
    id: "css-positioning-layout-q-046",
    quizId: "quiz_css_positioning_layout",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "What happens when an element is positioned absolutely but no ancestor establishes the expected containing block?",
    options: [
      { id: "A", text: "It automatically becomes a flex item" },
      { id: "B", text: "Its containing block generally falls back to the initial containing block" },
      { id: "C", text: "It is automatically centered" },
      { id: "D", text: "The browser disables absolute positioning" }
    ],
    correctOptionId: "B",
    explanation: "When no appropriate positioned ancestor establishes the containing block, the initial containing block is generally used.",
    tags: ["absolute", "containing-block"]
  },

  {
    id: "css-positioning-layout-q-047",
    quizId: "quiz_css_positioning_layout",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes the relationship between document flow and absolute positioning?",
    options: [
      { id: "A", text: "Absolutely positioned elements continue determining the normal placement of following elements" },
      { id: "B", text: "Absolute positioning removes the element from normal flow, so surrounding layout does not reserve its normal space" },
      { id: "C", text: "Absolute positioning only changes color" },
      { id: "D", text: "Absolute positioning behaves exactly like relative positioning" }
    ],
    correctOptionId: "B",
    explanation: "An absolutely positioned element does not participate in normal flow, so other content is laid out without reserving its original position.",
    tags: ["absolute", "normal-flow"]
  },

  {
    id: "css-positioning-layout-q-048",
    quizId: "quiz_css_positioning_layout",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer uses z-index: 999999 on a dropdown, but it still appears behind another component. What should they investigate first?",
    options: [
      { id: "A", text: "Whether the dropdown has enough margin" },
      { id: "B", text: "Whether the dropdown is inside a stacking context that is below the other component's stacking context" },
      { id: "C", text: "Whether the dropdown uses font-size: 16px" },
      { id: "D", text: "Whether the HTML document has enough paragraphs" }
    ],
    correctOptionId: "B",
    explanation: "A huge z-index cannot escape an ancestor stacking context. Debugging the stacking-context hierarchy is often more important than increasing the number.",
    tags: ["z-index", "stacking-context", "debugging"]
  },

  {
    id: "css-positioning-layout-q-049",
    quizId: "quiz_css_positioning_layout",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about floats is most accurate for modern CSS development?",
    options: [
      { id: "A", text: "Floats are the preferred replacement for CSS Grid" },
      { id: "B", text: "Floats are obsolete and can never be used" },
      { id: "C", text: "Floats are still useful for certain content-wrapping scenarios, but Flexbox and Grid are generally better for application layouts" },
      { id: "D", text: "Floats always behave exactly like Flexbox" }
    ],
    correctOptionId: "C",
    explanation: "Floats remain useful for cases such as wrapping text around an image, while modern page/application layouts are generally better served by Flexbox or Grid.",
    tags: ["float", "flexbox", "grid", "best-practices"]
  },

  {
    id: "css-positioning-layout-q-050",
    quizId: "quiz_css_positioning_layout",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A production dashboard has a normal content layout, a sticky sidebar, dropdown overlays, and a fixed notification button. Which approach demonstrates the strongest understanding of CSS positioning?",
    options: [
      { id: "A", text: "Use absolute positioning for every dashboard element" },
      { id: "B", text: "Use Grid/Flexbox for the primary layout, sticky for the sidebar, absolute positioning for local overlays, and fixed positioning for viewport-level UI" },
      { id: "C", text: "Use float for every component and z-index for layout" },
      { id: "D", text: "Use fixed positioning for the entire dashboard" }
    ],
    correctOptionId: "B",
    explanation: "Different layout tools solve different problems. Grid/Flexbox should handle primary structure, while positioning modes should be used intentionally for overlays, sticky elements, and viewport-level UI.",
    tags: ["positioning", "grid", "flexbox", "sticky", "absolute", "fixed", "best-practices"]
  }
];

export default cssPositioningLayoutQuestions;