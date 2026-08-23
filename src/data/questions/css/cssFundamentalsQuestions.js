const cssFundamentalsQuestions = [
  {
    id: "css-fundamentals-q-001",
    quizId: "quiz_css_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is CSS primarily used for?",
    options: [
      { id: "A", text: "Creating database tables" },
      { id: "B", text: "Executing server-side JavaScript" },
      { id: "C", text: "Styling and controlling the presentation of HTML documents" },
      { id: "D", text: "Defining HTTP requests" }
    ],
    correctOptionId: "C",
    explanation: "CSS controls the presentation of HTML, including colors, spacing, typography, layout, and visual appearance.",
    tags: ["css", "fundamentals"]
  },

  {
    id: "css-fundamentals-q-002",
    quizId: "quiz_css_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector targets every <p> element?",
    options: [
      { id: "A", text: ".p" },
      { id: "B", text: "#p" },
      { id: "C", text: "*p" },
      { id: "D", text: "p" }
    ],
    correctOptionId: "D",
    explanation: "p is a type selector and matches all paragraph elements.",
    tags: ["selectors", "type-selector"]
  },

  {
    id: "css-fundamentals-q-003",
    quizId: "quiz_css_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector targets elements with class=\"card\"?",
    options: [
      { id: "A", text: ".card" },
      { id: "B", text: "#card" },
      { id: "C", text: "card" },
      { id: "D", text: "*card" }
    ],
    correctOptionId: "A",
    explanation: "A class selector starts with a period followed by the class name.",
    tags: ["selectors", "class-selector"]
  },

  {
    id: "css-fundamentals-q-004",
    quizId: "quiz_css_fundamentals",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector targets an element with id=\"main\"?",
    options: [
      { id: "A", text: ".main" },
      { id: "B", text: "#main" },
      { id: "C", text: "main" },
      { id: "D", text: "*main" }
    ],
    correctOptionId: "B",
    explanation: "The # symbol creates an ID selector.",
    tags: ["selectors", "id-selector"]
  },

  {
    id: "css-fundamentals-q-005",
    quizId: "quiz_css_fundamentals",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the universal selector (*) match?",
    options: [
      { id: "A", text: "Only elements with classes" },
      { id: "B", text: "Only the body element" },
      { id: "C", text: "All elements within its applicable scope" },
      { id: "D", text: "Only direct children" }
    ],
    correctOptionId: "C",
    explanation: "The universal selector matches every element in the scope where it is applied.",
    tags: ["selectors", "universal-selector"]
  },

  {
    id: "css-fundamentals-q-006",
    quizId: "quiz_css_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector targets all elements with both the card and active classes?",
    options: [
      { id: "A", text: ".card .active" },
      { id: "B", text: ".card, .active" },
      { id: "C", text: "#card.active" },
      { id: "D", text: ".card.active" }
    ],
    correctOptionId: "D",
    explanation: "Combining class selectors without a space targets an element that has both classes.",
    tags: ["selectors", "classes", "compound-selector"]
  },

  {
    id: "css-fundamentals-q-007",
    quizId: "quiz_css_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the selector .card .title target?",
    options: [
      { id: "A", text: "An element with class title that is a descendant of an element with class card" },
      { id: "B", text: "An element with both card and title classes" },
      { id: "C", text: "Only direct children with class title" },
      { id: "D", text: "An element with ID title inside card" }
    ],
    correctOptionId: "A",
    explanation: "The descendant combinator is represented by whitespace. It matches .title elements anywhere inside .card.",
    tags: ["selectors", "descendant-combinator"]
  },

  {
    id: "css-fundamentals-q-008",
    quizId: "quiz_css_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the selector .card > .title target?",
    options: [
      { id: "A", text: "Any .title anywhere inside .card" },
      { id: "B", text: "A .title that is a direct child of .card" },
      { id: "C", text: "A .card that is inside .title" },
      { id: "D", text: "Every .title on the page" }
    ],
    correctOptionId: "B",
    explanation: "The > child combinator matches only direct children.",
    tags: ["selectors", "child-combinator"]
  },

  {
    id: "css-fundamentals-q-009",
    quizId: "quiz_css_fundamentals",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the selector h1, h2, h3 do?",
    options: [
      { id: "A", text: "Targets only h3 elements" },
      { id: "B", text: "Targets h1 elements that contain h2 and h3" },
      { id: "C", text: "Targets all h1, h2, and h3 elements" },
      { id: "D", text: "Creates a heading hierarchy" }
    ],
    correctOptionId: "C",
    explanation: "Commas create a selector list, so each selector independently matches its corresponding elements.",
    tags: ["selectors", "selector-list"]
  },

  {
    id: "css-fundamentals-q-010",
    quizId: "quiz_css_fundamentals",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "Which selector targets an input whose type attribute is \"email\"?",
    options: [
      { id: "A", text: "input.email" },
      { id: "B", text: "input#email" },
      { id: "C", text: "input::email" },
      { id: "D", text: "input[type=\"email\"]" }
    ],
    correctOptionId: "D",
    explanation: "Square brackets create an attribute selector. input[type=\"email\"] matches input elements whose type attribute equals email.",
    tags: ["selectors", "attribute-selector"]
  },

  {
    id: "css-fundamentals-q-011",
    quizId: "quiz_css_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which pseudo-class applies styles when a user points at an element with a pointing device?",
    options: [
      { id: "A", text: ":hover" },
      { id: "B", text: ":active" },
      { id: "C", text: ":focus" },
      { id: "D", text: ":visited" }
    ],
    correctOptionId: "A",
    explanation: ":hover matches an element while the pointing device is over it.",
    tags: ["selectors", "pseudo-class", "hover"]
  },

  {
    id: "css-fundamentals-q-012",
    quizId: "quiz_css_fundamentals",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which pseudo-class represents an element that currently has focus?",
    options: [
      { id: "A", text: ":focused" },
      { id: "B", text: ":focus" },
      { id: "C", text: ":selected" },
      { id: "D", text: ":input" }
    ],
    correctOptionId: "B",
    explanation: ":focus matches an element when it has focus, such as a focused form control.",
    tags: ["selectors", "pseudo-class", "focus"]
  },

  {
    id: "css-fundamentals-q-013",
    quizId: "quiz_css_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is CSS specificity used for?",
    options: [
      { id: "A", text: "Determining the HTML document language" },
      { id: "B", text: "Determining browser width" },
      { id: "C", text: "Determining which competing declarations have priority" },
      { id: "D", text: "Determining how many stylesheets exist" }
    ],
    correctOptionId: "C",
    explanation: "Specificity is one of the mechanisms used by the cascade to resolve competing declarations.",
    tags: ["specificity", "cascade"]
  },

  {
    id: "css-fundamentals-q-014",
    quizId: "quiz_css_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which selector has the highest specificity?",
    options: [
      { id: "A", text: "p" },
      { id: "B", text: ".text" },
      { id: "C", text: "*" },
      { id: "D", text: "#text" }
    ],
    correctOptionId: "D",
    explanation: "An ID selector has greater specificity than a class selector, type selector, or universal selector.",
    tags: ["specificity", "selectors"]
  },

  {
    id: "css-fundamentals-q-015",
    quizId: "quiz_css_fundamentals",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which generally has greater specificity?",
    options: [
      { id: "A", text: ".button" },
      { id: "B", text: "button" },
      { id: "C", text: "*" },
      { id: "D", text: "body" }
    ],
    correctOptionId: "A",
    explanation: "A class selector has greater specificity than a type selector or universal selector.",
    tags: ["specificity", "class-selector"]
  },

  {
    id: "css-fundamentals-q-016",
    quizId: "quiz_css_fundamentals",
    order: 16,
    type: "code",
    difficulty: "Beginner",
    question: "Which declaration wins for the paragraph below?\n\n<p id=\"intro\" class=\"text\">Hello</p>\n\np { color: blue; }\n.text { color: green; }\n#intro { color: red; }",
    options: [
      { id: "A", text: "blue" },
      { id: "B", text: "red" },
      { id: "C", text: "green" },
      { id: "D", text: "The browser ignores all three" }
    ],
    correctOptionId: "B",
    explanation: "The ID selector has greater specificity than the class and type selectors, so red wins.",
    tags: ["specificity", "cascade", "id-selector"]
  },

  {
    id: "css-fundamentals-q-017",
    quizId: "quiz_css_fundamentals",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the CSS cascade?",
    options: [
      { id: "A", text: "A method for creating animations" },
      { id: "B", text: "A way to convert CSS to JavaScript" },
      { id: "C", text: "The process used to determine which applicable CSS declarations win" },
      { id: "D", text: "A browser's HTML parser" }
    ],
    correctOptionId: "C",
    explanation: "The cascade resolves competing CSS declarations by considering factors such as origin, importance, specificity, scope, and order.",
    tags: ["cascade", "specificity"]
  },

  {
    id: "css_fundamentals-q-018",
    quizId: "quiz_css_fundamentals",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "If two declarations have equal specificity and importance, which one normally wins?",
    options: [
      { id: "A", text: "The earlier declaration" },
      { id: "B", text: "The declaration with more characters" },
      { id: "C", text: "The declaration closest to the HTML opening tag" },
      { id: "D", text: "The later declaration in the cascade order" }
    ],
    correctOptionId: "D",
    explanation: "When competing declarations are otherwise equal, the later one in the relevant cascade order generally wins.",
    tags: ["cascade", "source-order"]
  },

  {
    id: "css-fundamentals-q-019",
    quizId: "quiz_css_fundamentals",
    order: 19,
    type: "code",
    difficulty: "Beginner",
    question: "What color will this paragraph have?\n\np { color: blue; }\np { color: red; }",
    options: [
      { id: "A", text: "red" },
      { id: "B", text: "blue" },
      { id: "C", text: "purple" },
      { id: "D", text: "The browser chooses randomly" }
    ],
    correctOptionId: "A",
    explanation: "Both selectors have equal specificity, so the later declaration wins.",
    tags: ["cascade", "source-order"]
  },

  {
    id: "css-fundamentals-q-020",
    quizId: "quiz_css_fundamentals",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the !important annotation do?",
    options: [
      { id: "A", text: "It makes the declaration load faster" },
      { id: "B", text: "It gives the declaration higher importance in the cascade" },
      { id: "C", text: "It increases the element's width" },
      { id: "D", text: "It converts the property into an inherited property" }
    ],
    correctOptionId: "B",
    explanation: "!important changes the declaration's cascade importance. It should be used deliberately because excessive use makes styles harder to maintain.",
    tags: ["cascade", "important"]
  },

  {
    id: "css-fundamentals-q-021",
    quizId: "quiz_css_fundamentals",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which of these is generally the best first choice for resolving an ordinary specificity conflict?",
    options: [
      { id: "A", text: "Use !important everywhere" },
      { id: "B", text: "Add random IDs to elements" },
      { id: "C", text: "Use a clearer selector structure with appropriate specificity" },
      { id: "D", text: "Duplicate the declaration ten times" }
    ],
    correctOptionId: "C",
    explanation: "Maintainable CSS generally benefits from predictable selector specificity rather than escalating every conflict with !important or excessive IDs.",
    tags: ["specificity", "best-practices"]
  },

  {
    id: "css-fundamentals-q-022",
    quizId: "quiz_css_fundamentals",
    order: 22,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does CSS inheritance mean?",
    options: [
      { id: "A", text: "Every CSS property automatically inherits" },
      { id: "B", text: "Child elements always inherit every parent style" },
      { id: "C", text: "Only class selectors inherit" },
      { id: "D", text: "Some property values can pass from an ancestor to descendants" }
    ],
    correctOptionId: "D",
    explanation: "Some CSS properties inherit by default, while others do not. Inheritance can also be explicitly requested with the inherit keyword.",
    tags: ["inheritance", "cascade"]
  },

  {
    id: "css-fundamentals-q-023",
    quizId: "quiz_css_fundamentals",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property is commonly inherited by child elements?",
    options: [
      { id: "A", text: "color" },
      { id: "B", text: "margin" },
      { id: "C", text: "padding" },
      { id: "D", text: "border" }
    ],
    correctOptionId: "A",
    explanation: "color is an inherited property by default. Margin, padding, and border do not normally inherit.",
    tags: ["inheritance", "color"]
  },

  {
    id: "css-fundamentals-q-024",
    quizId: "quiz_css_fundamentals",
    order: 24,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the inherit keyword do?",
    options: [
      { id: "A", text: "Prevents inheritance" },
      { id: "B", text: "Forces the property to use the inherited value from the parent" },
      { id: "C", text: "Resets the property to the browser default" },
      { id: "D", text: "Makes the property !important" }
    ],
    correctOptionId: "B",
    explanation: "inherit explicitly tells the property to use the value inherited from the parent element.",
    tags: ["inheritance", "inherit"]
  },

  {
    id: "css-fundamentals-q-025",
    quizId: "quiz_css_fundamentals",
    order: 25,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value tells a property to use its initial value as defined by CSS?",
    options: [
      { id: "A", text: "inherit" },
      { id: "B", text: "parent" },
      { id: "C", text: "initial" },
      { id: "D", text: "default-parent" }
    ],
    correctOptionId: "C",
    explanation: "The initial keyword resets a property to its initial value defined by the CSS specification.",
    tags: ["inheritance", "initial", "reset"]
  },

  {
    id: "css-fundamentals-q-026",
    quizId: "quiz_css_fundamentals",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the unset keyword generally do?",
    options: [
      { id: "A", text: "It always means initial" },
      { id: "B", text: "It always means inherit" },
      { id: "C", text: "It deletes the HTML element" },
      { id: "D", text: "It acts as inherit for inherited properties and initial for non-inherited properties" }
    ],
    correctOptionId: "D",
    explanation: "unset effectively resets a property according to whether that property naturally inherits.",
    tags: ["inheritance", "unset"]
  },

  {
    id: "css-fundamentals-q-027",
    quizId: "quiz_css_fundamentals",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which four areas make up the traditional CSS box model?",
    options: [
      { id: "A", text: "Content, padding, border, and margin" },
      { id: "B", text: "Width, height, color, and display" },
      { id: "C", text: "Content, flex, grid, and position" },
      { id: "D", text: "Text, image, padding, and shadow" }
    ],
    correctOptionId: "A",
    explanation: "The box model consists of the content box, padding area, border area, and margin area.",
    tags: ["box-model"]
  },

  {
    id: "css-fundamentals-q-028",
    quizId: "quiz_css_fundamentals",
    order: 28,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does padding control?",
    options: [
      { id: "A", text: "Space outside the element's border" },
      { id: "B", text: "Space between an element's content and its border" },
      { id: "C", text: "Space between sibling elements only" },
      { id: "D", text: "The element's font size" }
    ],
    correctOptionId: "B",
    explanation: "Padding is the internal spacing between content and the border.",
    tags: ["box-model", "padding"]
  },

  {
    id: "css-fundamentals-q-029",
    quizId: "quiz_css_fundamentals",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does margin control?",
    options: [
      { id: "A", text: "Space between content and border" },
      { id: "B", text: "The thickness of the border" },
      { id: "C", text: "Space outside an element's border" },
      { id: "D", text: "The element's text color" }
    ],
    correctOptionId: "C",
    explanation: "Margin creates external spacing around an element.",
    tags: ["box-model", "margin"]
  },

  {
    id: "css-fundamentals-q-030",
    quizId: "quiz_css_fundamentals",
    order: 30,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the border represent in the CSS box model?",
    options: [
      { id: "A", text: "The space outside the element" },
      { id: "B", text: "The element's text content" },
      { id: "C", text: "The browser viewport" },
      { id: "D", text: "The area surrounding the padding and content" }
    ],
    correctOptionId: "D",
    explanation: "The border lies between the padding and margin areas.",
    tags: ["box-model", "border"]
  },

  {
    id: "css-fundamentals-q-031",
    quizId: "quiz_css_fundamentals",
    order: 31,
    type: "code",
    difficulty: "Beginner",
    question: "With the default box-sizing: content-box, an element has width: 200px and padding: 20px on both sides. Ignoring borders and margins, what is its outer width?",
    options: [
      { id: "A", text: "240px" },
      { id: "B", text: "200px" },
      { id: "C", text: "220px" },
      { id: "D", text: "260px" }
    ],
    correctOptionId: "A",
    explanation: "With content-box, the declared width applies only to content. 200px + 20px + 20px = 240px.",
    tags: ["box-model", "content-box", "width"]
  },

  {
    id: "css-fundamentals-q-032",
    quizId: "quiz_css_fundamentals",
    order: 32,
    type: "code",
    difficulty: "Beginner",
    question: "With box-sizing: border-box, width: 200px, padding: 20px on both sides, and 5px borders on both sides, what is the outer width?",
    options: [
      { id: "A", text: "150px" },
      { id: "B", text: "200px" },
      { id: "C", text: "240px" },
      { id: "D", text: "250px" }
    ],
    correctOptionId: "B",
    explanation: "With border-box, the declared width includes content, padding, and border, so the outer width remains 200px.",
    tags: ["box-model", "border-box"]
  },

  {
    id: "css-fundamentals-q-033",
    quizId: "quiz_css_fundamentals",
    order: 33,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does box-sizing: border-box change?",
    options: [
      { id: "A", text: "It removes padding" },
      { id: "B", text: "It makes margin part of the declared width" },
      { id: "C", text: "It includes padding and border inside the declared width and height" },
      { id: "D", text: "It makes every element inline" }
    ],
    correctOptionId: "C",
    explanation: "border-box changes the sizing calculation so the declared dimensions include padding and border.",
    tags: ["box-model", "box-sizing"]
  },

  {
    id: "css-fundamentals-q-034",
    quizId: "quiz_css_fundamentals",
    order: 34,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration is commonly used as part of a predictable global box-sizing setup?",
    options: [
      { id: "A", text: "* { sizing: border-box; }" },
      { id: "B", text: "body { box: border-box; }" },
      { id: "C", text: "html { model: border-box; }" },
      { id: "D", text: "* { box-sizing: border-box; }" }
    ],
    correctOptionId: "D",
    explanation: "A universal selector with box-sizing: border-box is a common baseline. Many projects also apply box-sizing to pseudo-elements.",
    tags: ["box-sizing", "box-model", "reset"]
  },

  {
    id: "css-fundamentals-q-035",
    quizId: "quiz_css_fundamentals",
    order: 35,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls an element's content width?",
    options: [
      { id: "A", text: "width" },
      { id: "B", text: "content-width" },
      { id: "C", text: "element-width" },
      { id: "D", text: "size-x" }
    ],
    correctOptionId: "A",
    explanation: "The width property controls the width used by the element's box according to its box-sizing model.",
    tags: ["box-model", "width"]
  },

  {
    id: "css-fundamentals-q-036",
    quizId: "quiz_css_fundamentals",
    order: 36,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls an element's content height?",
    options: [
      { id: "A", text: "content-height" },
      { id: "B", text: "height" },
      { id: "C", text: "element-height" },
      { id: "D", text: "size-y" }
    ],
    correctOptionId: "B",
    explanation: "The height property controls the element's height according to its box-sizing model and layout constraints.",
    tags: ["box-model", "height"]
  },

  {
    id: "css-fundamentals-q-037",
    quizId: "quiz_css_fundamentals",
    order: 37,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property can prevent an element from becoming narrower than a specified size?",
    options: [
      { id: "A", text: "minimum-width" },
      { id: "B", text: "width-min" },
      { id: "C", text: "min-width" },
      { id: "D", text: "lower-width" }
    ],
    correctOptionId: "C",
    explanation: "min-width establishes a minimum used width for an element.",
    tags: ["box-model", "min-width"]
  },

  {
    id: "css-fundamentals-q-038",
    quizId: "quiz_css_fundamentals",
    order: 38,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property can prevent an element from becoming wider than a specified size?",
    options: [
      { id: "A", text: "maximum-width" },
      { id: "B", text: "width-max" },
      { id: "C", text: "upper-width" },
      { id: "D", text: "max-width" }
    ],
    correctOptionId: "D",
    explanation: "max-width establishes a maximum used width.",
    tags: ["box-model", "max-width"]
  },

  {
    id: "css-fundamentals-q-039",
    quizId: "quiz_css_fundamentals",
    order: 39,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls whether content that exceeds an element's box is visible, clipped, or scrollable?",
    options: [
      { id: "A", text: "overflow" },
      { id: "B", text: "content-limit" },
      { id: "C", text: "clip-content-only" },
      { id: "D", text: "box-content" }
    ],
    correctOptionId: "A",
    explanation: "The overflow property controls how overflowing content is handled.",
    tags: ["box-model", "overflow"]
  },

  {
    id: "css-fundamentals-q-040",
    quizId: "quiz_css_fundamentals",
    order: 40,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does overflow: hidden generally do?",
    options: [
      { id: "A", text: "Deletes the overflowing DOM nodes" },
      { id: "B", text: "Clips content that overflows the element's overflow area" },
      { id: "C", text: "Automatically adds a scrollbar" },
      { id: "D", text: "Makes the element transparent" }
    ],
    correctOptionId: "B",
    explanation: "overflow: hidden clips overflowing content rather than displaying it outside the box.",
    tags: ["overflow", "box-model"]
  },

  {
    id: "css-fundamentals-q-041",
    quizId: "quiz_css_fundamentals",
    order: 41,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value makes overflowing content scrollable when needed?",
    options: [
      { id: "A", text: "overflow: scroll-only-when-needed" },
      { id: "B", text: "overflow: dynamic" },
      { id: "C", text: "overflow: auto" },
      { id: "D", text: "overflow: fit" }
    ],
    correctOptionId: "C",
    explanation: "overflow: auto allows the browser to provide scrolling when the content overflows.",
    tags: ["overflow", "scrolling"]
  },

  {
    id: "css-fundamentals-q-042",
    quizId: "quiz_css_fundamentals",
    order: 42,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does margin: 0 auto commonly accomplish on a block with a constrained width?",
    options: [
      { id: "A", text: "It centers the text vertically" },
      { id: "B", text: "It centers every child element" },
      { id: "C", text: "It makes the element position: fixed" },
      { id: "D", text: "It commonly centers the block horizontally within its containing block" }
    ],
    correctOptionId: "D",
    explanation: "When the block has a used width smaller than its containing block, auto horizontal margins can distribute the remaining space equally and center it.",
    tags: ["margin", "box-model", "centering"]
  },

  {
    id: "css-fundamentals-q-043",
    quizId: "quiz_css_fundamentals",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is margin collapsing?",
    options: [
      { id: "A", text: "A layout behavior where certain adjoining vertical margins can combine rather than simply adding together" },
      { id: "B", text: "A behavior where all margins become zero" },
      { id: "C", text: "A feature that combines horizontal margins of flex items" },
      { id: "D", text: "A way to remove margin from the box model" }
    ],
    correctOptionId: "A",
    explanation: "In normal block flow, certain vertical margins can collapse. The resulting margin is not always the sum of both margins.",
    tags: ["margin", "box-model", "margin-collapsing"]
  },

  {
    id: "css-fundamentals-q-044",
    quizId: "quiz_css_fundamentals",
    order: 44,
    type: "code",
    difficulty: "Intermediate",
    question: "Two normal-flow block elements have adjacent vertical margins of 20px and 30px that collapse. What is the resulting collapsed margin?",
    options: [
      { id: "A", text: "10px" },
      { id: "B", text: "30px" },
      { id: "C", text: "20px" },
      { id: "D", text: "50px" }
    ],
    correctOptionId: "B",
    explanation: "When positive vertical margins collapse, the larger margin wins. Therefore max(20px, 30px) = 30px.",
    tags: ["margin-collapsing", "box-model"]
  },

  {
    id: "css-fundamentals-q-045",
    quizId: "quiz_css_fundamentals",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about margin and padding is correct?",
    options: [
      { id: "A", text: "Margin is inside the border; padding is outside" },
      { id: "B", text: "Both are always outside the border" },
      { id: "C", text: "Padding is inside the border; margin is outside the border" },
      { id: "D", text: "Both are always inside the content box" }
    ],
    correctOptionId: "C",
    explanation: "Padding sits between content and border, while margin sits outside the border.",
    tags: ["box-model", "margin", "padding"]
  },

  {
    id: "css-fundamentals-q-046",
    quizId: "quiz_css_fundamentals",
    order: 46,
    type: "code",
    difficulty: "Intermediate",
    question: "Which rule applies red text to elements that are both buttons and disabled?",
    options: [
      { id: "A", text: "button .disabled { color: red; }" },
      { id: "B", text: "button#disabled { color: red; }" },
      { id: "C", text: "button > disabled { color: red; }" },
      { id: "D", text: "button.disabled { color: red; }" }
    ],
    correctOptionId: "D",
    explanation: "button.disabled is a compound selector that matches button elements having the disabled class.",
    tags: ["selectors", "compound-selector", "classes"]
  },

  {
    id: "css-fundamentals-q-047",
    quizId: "quiz_css_fundamentals",
    order: 47,
    type: "code",
    difficulty: "Intermediate",
    question: "Which selector has greater specificity?",
    options: [
      { id: "A", text: "#app .title" },
      { id: "B", text: ".card .title" },
      { id: "C", text: "div.card" },
      { id: "D", text: "section article" }
    ],
    correctOptionId: "A",
    explanation: "#app .title contains one ID selector and one class selector, giving it greater specificity than the alternatives, which contain no ID selector.",
    tags: ["specificity", "selectors"]
  },

  {
    id: "css-fundamentals-q-048",
    quizId: "quiz_css_fundamentals",
    order: 48,
    type: "code",
    difficulty: "Intermediate",
    question: "Which declaration wins?\n\n.card { color: blue; }\n.card { color: red !important; }\n#special { color: green; }",
    options: [
      { id: "A", text: "blue" },
      { id: "B", text: "red" },
      { id: "C", text: "green" },
      { id: "D", text: "The result depends only on source order" }
    ],
    correctOptionId: "B",
    explanation: "The red declaration is marked !important, giving it higher cascade importance than the normal declarations.",
    tags: ["specificity", "cascade", "important"]
  },

  {
    id: "css-fundamentals-q-049",
    quizId: "quiz_css_fundamentals",
    order: 49,
    type: "advanced",
    difficulty: "Intermediate",
    question: "Why can adding more and more specificity to every CSS rule become a maintenance problem?",
    options: [
      { id: "A", text: "It makes CSS invalid" },
      { id: "B", text: "It prevents browsers from parsing HTML" },
      { id: "C", text: "It makes future overrides harder and encourages increasingly complex selectors or !important" },
      { id: "D", text: "It automatically disables inheritance" }
    ],
    correctOptionId: "C",
    explanation: "Specificity escalation creates a cycle where future rules must become even more specific to override earlier rules, making CSS difficult to reason about.",
    tags: ["specificity", "cascade", "maintainability"]
  },

  {
    id: "css-fundamentals-q-050",
    quizId: "quiz_css_fundamentals",
    order: 50,
    type: "advanced",
    difficulty: "Intermediate",
    question: "A developer says, \"My CSS isn't working because I changed the declaration later in the stylesheet.\" The new rule has lower specificity than the old rule. What is the most likely explanation?",
    options: [
      { id: "A", text: "CSS always prefers earlier declarations" },
      { id: "B", text: "CSS ignores all declarations after the first one" },
      { id: "C", text: "The browser automatically prefers shorter selectors" },
      { id: "D", text: "The older declaration wins because it has greater specificity" }
    ],
    correctOptionId: "D",
    explanation: "Source order only resolves conflicts after the declarations are otherwise equal in the relevant cascade steps. A more specific selector can beat a later less-specific selector.",
    tags: ["specificity", "cascade", "debugging"]
  }
];

export default cssFundamentalsQuestions;