const cssResponsiveDesignQuestions = [
  {
    id: "css-responsive-design-q-001",
    quizId: "quiz_css_responsive_design",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary goal of responsive web design?",
    options: [
      { id: "A", text: "To make every website use the same fixed width" },
      { id: "B", text: "To make websites adapt their layout and content to different screen sizes and devices" },
      { id: "C", text: "To eliminate CSS media queries" },
      { id: "D", text: "To make every element use absolute positioning" }
    ],
    correctOptionId: "B",
    explanation: "Responsive design allows a website to adapt its layout, sizing, spacing, and sometimes content presentation to different viewport sizes and device capabilities.",
    tags: ["responsive-design", "fundamentals"]
  },

  {
    id: "css-responsive-design-q-002",
    quizId: "quiz_css_responsive_design",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which CSS feature is primarily used to apply different styles at different viewport conditions?",
    options: [
      { id: "A", text: "CSS variables" },
      { id: "B", text: "Pseudo-elements" },
      { id: "C", text: "Media queries" },
      { id: "D", text: "Float" }
    ],
    correctOptionId: "C",
    explanation: "Media queries allow CSS rules to conditionally apply based on conditions such as viewport width, height, orientation, and user preferences.",
    tags: ["media-queries", "responsive-design"]
  },

  {
    id: "css-responsive-design-q-003",
    quizId: "quiz_css_responsive_design",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "What does this media query do?\n\n@media (max-width: 768px) {\n  .nav { display: none; }\n}",
    options: [
      { id: "A", text: "Hides .nav when the viewport is 768px wide or narrower" },
      { id: "B", text: "Hides .nav only when the viewport is wider than 768px" },
      { id: "C", text: "Makes .nav exactly 768px wide" },
      { id: "D", text: "Hides .nav on screens larger than 768px only" }
    ],
    correctOptionId: "A",
    explanation: "max-width: 768px matches viewports whose width is 768px or less.",
    tags: ["media-queries", "max-width"]
  },

  {
    id: "css-responsive-design-q-004",
    quizId: "quiz_css_responsive_design",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does min-width: 768px mean inside a media query?",
    options: [
      { id: "A", text: "The styles apply only below 768px" },
      { id: "B", text: "The styles apply only at exactly 768px" },
      { id: "C", text: "The styles apply when the viewport is at least 768px wide" },
      { id: "D", text: "The element must have a width of 768px" }
    ],
    correctOptionId: "C",
    explanation: "A min-width condition matches when the viewport width is greater than or equal to the specified value.",
    tags: ["media-queries", "min-width"]
  },

  {
    id: "css-responsive-design-q-005",
    quizId: "quiz_css_responsive_design",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a mobile-first CSS strategy?",
    options: [
      { id: "A", text: "Designing only for mobile devices and ignoring larger screens" },
      { id: "B", text: "Starting with the small-screen layout and progressively enhancing it for larger screens" },
      { id: "C", text: "Using JavaScript to detect every mobile device" },
      { id: "D", text: "Using only fixed pixel units" }
    ],
    correctOptionId: "B",
    explanation: "Mobile-first development starts with a simple small-screen baseline and adds enhancements through min-width media queries as more space becomes available.",
    tags: ["mobile-first", "responsive-design"]
  },

  {
    id: "css-responsive-design-q-006",
    quizId: "quiz_css_responsive_design",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "Which approach represents a typical mobile-first pattern?",
    options: [
      { id: "A", text: "Base styles for mobile, then @media (min-width: ...) for larger screens" },
      { id: "B", text: "Base styles for desktop, then only max-width queries for mobile" },
      { id: "C", text: "Use JavaScript for every breakpoint" },
      { id: "D", text: "Use only fixed-width containers" }
    ],
    correctOptionId: "A",
    explanation: "Mobile-first CSS usually establishes the smallest layout as the default and uses min-width breakpoints to progressively enhance it.",
    tags: ["mobile-first", "min-width"]
  },

  {
    id: "css-responsive-design-q-007",
    quizId: "quiz_css_responsive_design",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does 1rem represent by default in most browsers?",
    options: [
      { id: "A", text: "1% of the viewport width" },
      { id: "B", text: "The font size of the root element" },
      { id: "C", text: "The width of the parent element" },
      { id: "D", text: "Exactly 10px" }
    ],
    correctOptionId: "B",
    explanation: "rem is relative to the font size of the root HTML element. In a typical browser default, that is commonly 16px, but it can be changed.",
    tags: ["rem", "units", "responsive-design"]
  },

  {
    id: "css-responsive-design-q-008",
    quizId: "quiz_css_responsive_design",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does 1em represent when used for an element's font-size?",
    options: [
      { id: "A", text: "1% of the viewport height" },
      { id: "B", text: "The font size of the root element only" },
      { id: "C", text: "The element's inherited or otherwise applicable font size" },
      { id: "D", text: "Exactly 16px in every situation" }
    ],
    correctOptionId: "C",
    explanation: "For font-size, em is relative to the inherited font size of the element. For other properties, em is generally relative to the element's own font size.",
    tags: ["em", "units"]
  },

  {
    id: "css-responsive-design-q-009",
    quizId: "quiz_css_responsive_design",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does 100vw represent?",
    options: [
      { id: "A", text: "100% of the viewport width" },
      { id: "B", text: "100% of the parent width" },
      { id: "C", text: "100px" },
      { id: "D", text: "100% of the viewport height" }
    ],
    correctOptionId: "A",
    explanation: "vw is a viewport-width unit. 1vw represents 1% of the viewport's width, so 100vw represents the viewport width.",
    tags: ["vw", "viewport-units"]
  },

  {
    id: "css-responsive-design-q-010",
    quizId: "quiz_css_responsive_design",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does 100vh represent?",
    options: [
      { id: "A", text: "100% of the parent height" },
      { id: "B", text: "100px" },
      { id: "C", text: "100% of the viewport width" },
      { id: "D", text: "100% of the viewport height" }
    ],
    correctOptionId: "D",
    explanation: "vh is a viewport-height unit. 1vh represents 1% of the viewport height.",
    tags: ["vh", "viewport-units"]
  },

  {
    id: "css-responsive-design-q-011",
    quizId: "quiz_css_responsive_design",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which unit is directly relative to the viewport width?",
    options: [
      { id: "A", text: "rem" },
      { id: "B", text: "em" },
      { id: "C", text: "vw" },
      { id: "D", text: "ch" }
    ],
    correctOptionId: "C",
    explanation: "vw is based on the viewport width.",
    tags: ["vw", "units"]
  },

  {
    id: "css-responsive-design-q-012",
    quizId: "quiz_css_responsive_design",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which unit is directly relative to the viewport height?",
    options: [
      { id: "A", text: "vh" },
      { id: "B", text: "rem" },
      { id: "C", text: "em" },
      { id: "D", text: "%" }
    ],
    correctOptionId: "A",
    explanation: "vh represents a percentage of the viewport height.",
    tags: ["vh", "units"]
  },

  {
    id: "css-responsive-design-q-013",
    quizId: "quiz_css_responsive_design",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between rem and em?",
    options: [
      { id: "A", text: "rem is viewport-based while em is pixel-based" },
      { id: "B", text: "rem is relative to the root font size, while em can be relative to the element's applicable font size" },
      { id: "C", text: "em only works in media queries" },
      { id: "D", text: "rem and em always behave identically" }
    ],
    correctOptionId: "B",
    explanation: "rem is tied to the root element's font size, while em is context-dependent and can compound through nested elements.",
    tags: ["rem", "em", "units"]
  },

  {
    id: "css-responsive-design-q-014",
    quizId: "quiz_css_responsive_design",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which function is useful for allowing a CSS value to stay within a minimum and maximum range?",
    options: [
      { id: "A", text: "limit()" },
      { id: "B", text: "range()" },
      { id: "C", text: "clamp()" },
      { id: "D", text: "bound()" }
    ],
    correctOptionId: "C",
    explanation: "clamp(min, preferred, max) allows a value to scale while remaining within specified minimum and maximum limits.",
    tags: ["clamp", "responsive-units"]
  },

  {
    id: "css-responsive-design-q-015",
    quizId: "quiz_css_responsive_design",
    order: 15,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\nfont-size: clamp(1rem, 2vw, 2rem);",
    options: [
      { id: "A", text: "Always makes the font exactly 2vw" },
      { id: "B", text: "Makes the font responsive while keeping it between 1rem and 2rem" },
      { id: "C", text: "Makes the font responsive without any upper limit" },
      { id: "D", text: "Makes the font exactly 1rem on every device" }
    ],
    correctOptionId: "B",
    explanation: "The preferred value is 2vw, but the resulting font size cannot go below 1rem or above 2rem.",
    tags: ["clamp", "typography", "responsive"]
  },

  {
    id: "css-responsive-design-q-016",
    quizId: "quiz_css_responsive_design",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why are relative units often useful in responsive design?",
    options: [
      { id: "A", text: "They can allow dimensions and typography to adapt to context instead of remaining completely fixed" },
      { id: "B", text: "They prevent all elements from resizing" },
      { id: "C", text: "They only work on desktop" },
      { id: "D", text: "They eliminate the need for HTML" }
    ],
    correctOptionId: "A",
    explanation: "Relative units such as %, rem, em, vw, and vh can create layouts that respond naturally to parent sizes, typography, or viewport dimensions.",
    tags: ["responsive-units", "units"]
  },

  {
    id: "css-responsive-design-q-017",
    quizId: "quiz_css_responsive_design",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a breakpoint in responsive design?",
    options: [
      { id: "A", text: "A JavaScript error in mobile browsers" },
      { id: "B", text: "A viewport condition where the layout or styles change" },
      { id: "C", text: "A fixed height assigned to every component" },
      { id: "D", text: "A CSS animation frame" }
    ],
    correctOptionId: "B",
    explanation: "A breakpoint is a condition—commonly a viewport width—at which the design changes to better suit the available space.",
    tags: ["breakpoints", "responsive-design"]
  },

  {
    id: "css-responsive-design-q-018",
    quizId: "quiz_css_responsive_design",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is generally a better way to choose responsive breakpoints?",
    options: [
      { id: "A", text: "Use only famous device widths such as iPhone and iPad sizes" },
      { id: "B", text: "Choose breakpoints based on where the content or layout actually needs to change" },
      { id: "C", text: "Always create exactly 10 breakpoints" },
      { id: "D", text: "Use a breakpoint for every 10px of width" }
    ],
    correctOptionId: "B",
    explanation: "Content-driven breakpoints are usually more robust than designing specifically around individual device models.",
    tags: ["breakpoints", "responsive-design", "best-practices"]
  },

  {
    id: "css-responsive-design-q-019",
    quizId: "quiz_css_responsive_design",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which media query targets a viewport that is at least 768px wide?",
    options: [
      { id: "A", text: "@media (max-width: 768px)" },
      { id: "B", text: "@media (width: 768px)" },
      { id: "C", text: "@media (min-width: 768px)" },
      { id: "D", text: "@media (viewport: 768px)" }
    ],
    correctOptionId: "C",
    explanation: "min-width: 768px matches viewport widths of 768px and above.",
    tags: ["media-queries", "min-width"]
  },

  {
    id: "css-responsive-design-q-020",
    quizId: "quiz_css_responsive_design",
    order: 20,
    type: "code",
    difficulty: "Intermediate",
    question: "Which CSS is a typical mobile-first pattern for changing a single-column layout into two columns on larger screens?",
    options: [
      { id: "A", text: ".cards { display: grid; grid-template-columns: 1fr; } @media (min-width: 768px) { .cards { grid-template-columns: 1fr 1fr; } }" },
      { id: "B", text: ".cards { display: fixed; }" },
      { id: "C", text: ".cards { grid-template-columns: 1fr 1fr; } @media (max-width: 768px) { .cards { grid-template-columns: 1fr 1fr 1fr; } }" },
      { id: "D", text: ".cards { width: 768px; }" }
    ],
    correctOptionId: "A",
    explanation: "The base rule establishes one column for smaller screens, and the min-width query enhances it to two columns when more space is available.",
    tags: ["mobile-first", "grid", "media-queries"]
  },

  {
    id: "css-responsive-design-q-021",
    quizId: "quiz_css_responsive_design",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which CSS property is particularly useful for preventing an image from overflowing its container horizontally?",
    options: [
      { id: "A", text: "max-width: 100%;" },
      { id: "B", text: "min-width: 100vw;" },
      { id: "C", text: "width: 1000px;" },
      { id: "D", text: "position: fixed;" }
    ],
    correctOptionId: "A",
    explanation: "max-width: 100% allows the image to shrink to fit within its containing block while still being smaller when its intrinsic size is smaller.",
    tags: ["images", "responsive", "max-width"]
  },

  {
    id: "css-responsive-design-q-022",
    quizId: "quiz_css_responsive_design",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this rule accomplish?\n\nimg {\n  max-width: 100%;\n  height: auto;\n}",
    options: [
      { id: "A", text: "It forces every image to be exactly the viewport width" },
      { id: "B", text: "It allows images to shrink within their container while preserving their aspect ratio" },
      { id: "C", text: "It crops every image" },
      { id: "D", text: "It makes images fixed to the viewport" }
    ],
    correctOptionId: "B",
    explanation: "max-width: 100% prevents horizontal overflow, while height: auto preserves the image's intrinsic aspect ratio as its width changes.",
    tags: ["images", "responsive", "aspect-ratio"]
  },

  {
    id: "css-responsive-design-q-023",
    quizId: "quiz_css_responsive_design",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the viewport meta tag commonly used in responsive websites?",
    options: [
      { id: "A", text: "To control JavaScript execution speed" },
      { id: "B", text: "To tell mobile browsers how to size and scale the page viewport" },
      { id: "C", text: "To define CSS colors" },
      { id: "D", text: "To enable CSS Grid" }
    ],
    correctOptionId: "B",
    explanation: "The viewport meta tag helps mobile browsers use the device's viewport width appropriately instead of treating the page as a wider desktop-style layout.",
    tags: ["viewport", "mobile", "responsive"]
  },

  {
    id: "css-responsive-design-q-024",
    quizId: "quiz_css_responsive_design",
    order: 24,
    type: "code",
    difficulty: "Beginner",
    question: "Which viewport declaration is commonly used for responsive websites?",
    options: [
      { id: "A", text: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" },
      { id: "B", text: "<meta responsive=\"true\">" },
      { id: "C", text: "<viewport width=\"mobile\">" },
      { id: "D", text: "<meta name=\"screen\" content=\"responsive\">" }
    ],
    correctOptionId: "A",
    explanation: "This is the standard viewport declaration used to establish the viewport width as the device width and set the initial scale.",
    tags: ["viewport", "meta", "mobile"]
  },

  {
    id: "css-responsive-design-q-025",
    quizId: "quiz_css_responsive_design",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can using width: 100vw sometimes create unexpected horizontal scrolling?",
    options: [
      { id: "A", text: "vw is always calculated from the parent width" },
      { id: "B", text: "100vw can include the viewport's scrollbar area in environments where scrollbars consume layout space" },
      { id: "C", text: "100vw always means 100px" },
      { id: "D", text: "vw cannot be used on block elements" }
    ],
    correctOptionId: "B",
    explanation: "In some desktop environments, viewport units can account for the scrollbar area, causing 100vw to be slightly wider than the available content area.",
    tags: ["vw", "overflow", "responsive"]
  },

  {
    id: "css-responsive-design-q-026",
    quizId: "quiz_css_responsive_design",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is generally preferable for a content container on large screens?",
    options: [
      { id: "A", text: "An unlimited width with no constraints" },
      { id: "B", text: "A reasonable max-width combined with responsive horizontal sizing" },
      { id: "C", text: "A fixed width of exactly 1200px on every device" },
      { id: "D", text: "Absolute positioning" }
    ],
    correctOptionId: "B",
    explanation: "A max-width can prevent content lines from becoming excessively wide while allowing the container to shrink on smaller screens.",
    tags: ["max-width", "containers", "responsive"]
  },

  {
    id: "css-responsive-design-q-027",
    quizId: "quiz_css_responsive_design",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "Which pattern is commonly used for a centered responsive content container?",
    options: [
      { id: "A", text: ".container { width: 100%; max-width: 1200px; margin-inline: auto; }" },
      { id: "B", text: ".container { width: 1200px; position: fixed; }" },
      { id: "C", text: ".container { min-width: 1200px; }" },
      { id: "D", text: ".container { width: 100vw; margin-left: 1200px; }" }
    ],
    correctOptionId: "A",
    explanation: "width: 100% allows the container to shrink, max-width limits it on larger screens, and auto inline margins center it when there is extra space.",
    tags: ["container", "max-width", "responsive"]
  },

  {
    id: "css-responsive-design-q-028",
    quizId: "quiz_css_responsive_design",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the benefit of using CSS Grid's minmax() and auto-fit for responsive cards?",
    options: [
      { id: "A", text: "The layout can adapt the number and size of columns based on available space without requiring many breakpoints" },
      { id: "B", text: "It forces every device to use exactly four columns" },
      { id: "C", text: "It disables wrapping" },
      { id: "D", text: "It requires JavaScript viewport detection" }
    ],
    correctOptionId: "A",
    explanation: "Patterns such as repeat(auto-fit, minmax(...)) allow the grid to automatically fit as many suitable columns as available space permits.",
    tags: ["grid", "minmax", "auto-fit", "responsive"]
  },

  {
    id: "css-responsive-design-q-029",
    quizId: "quiz_css_responsive_design",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the CSS media feature prefers-reduced-motion allow developers to detect?",
    options: [
      { id: "A", text: "Whether the user prefers reduced motion effects" },
      { id: "B", text: "Whether the device has a high-resolution camera" },
      { id: "C", text: "Whether the viewport is exactly 768px wide" },
      { id: "D", text: "Whether the user prefers dark-colored text only" }
    ],
    correctOptionId: "A",
    explanation: "prefers-reduced-motion allows websites to adapt animations and transitions for users who have requested reduced motion at the operating-system or browser level.",
    tags: ["media-queries", "accessibility", "prefers-reduced-motion"]
  },

  {
    id: "css-responsive-design-q-030",
    quizId: "quiz_css_responsive_design",
    order: 30,
    type: "code",
    difficulty: "Intermediate",
    question: "Which is an appropriate way to reduce animation for users who prefer less motion?",
    options: [
      { id: "A", text: "@media (prefers-reduced-motion: reduce) { * { animation: none; transition: none; } }" },
      { id: "B", text: "@media (motion: none) { * { display: none; } }" },
      { id: "C", text: "@media (reduced: true) { * { position: static; } }" },
      { id: "D", text: "@media (animation: reduce) { * { transform: fixed; } }" }
    ],
    correctOptionId: "A",
    explanation: "The prefers-reduced-motion media feature is designed specifically for adapting motion-heavy UI to user preferences.",
    tags: ["prefers-reduced-motion", "accessibility"]
  },

  {
    id: "css-responsive-design-q-031",
    quizId: "quiz_css_responsive_design",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does orientation: landscape represent in a media query?",
    options: [
      { id: "A", text: "The device has a horizontal scrolling layout" },
      { id: "B", text: "The viewport is wider than it is tall" },
      { id: "C", text: "The screen has exactly 16:9 dimensions" },
      { id: "D", text: "The browser is running on a laptop" }
    ],
    correctOptionId: "B",
    explanation: "Landscape orientation means the viewport's width is greater than its height.",
    tags: ["media-queries", "orientation"]
  },

  {
    id: "css-responsive-design-q-032",
    quizId: "quiz_css_responsive_design",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which media query targets portrait orientation?",
    options: [
      { id: "A", text: "@media (orientation: portrait)" },
      { id: "B", text: "@media (screen: vertical)" },
      { id: "C", text: "@media (height > width)" },
      { id: "D", text: "@media (orientation: vertical-screen)" }
    ],
    correctOptionId: "A",
    explanation: "The orientation media feature accepts portrait and landscape values.",
    tags: ["orientation", "media-queries"]
  },

  {
    id: "css-responsive-design-q-033",
    quizId: "quiz_css_responsive_design",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should responsive designs not rely exclusively on exact device names?",
    options: [
      { id: "A", text: "Because device dimensions and viewport sizes vary widely, including across browser windows and orientations" },
      { id: "B", text: "Because CSS cannot detect width" },
      { id: "C", text: "Because media queries only work on desktop" },
      { id: "D", text: "Because responsive websites cannot use breakpoints" }
    ],
    correctOptionId: "A",
    explanation: "Responsive layouts should respond to available space and content needs rather than assuming a small fixed set of device dimensions.",
    tags: ["breakpoints", "responsive-design"]
  },

  {
    id: "css-responsive-design-q-034",
    quizId: "quiz_css_responsive_design",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach generally produces more maintainable responsive CSS?",
    options: [
      { id: "A", text: "Hundreds of device-specific breakpoints" },
      { id: "B", text: "Content-driven breakpoints and a simple base layout enhanced progressively" },
      { id: "C", text: "JavaScript-based width checks for every element" },
      { id: "D", text: "Fixed widths everywhere" }
    ],
    correctOptionId: "B",
    explanation: "A small set of meaningful, content-driven breakpoints is generally easier to maintain than device-specific CSS for every possible screen.",
    tags: ["responsive-design", "maintainability", "breakpoints"]
  },

  {
    id: "css-responsive-design-q-035",
    quizId: "quiz_css_responsive_design",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the likely problem with this CSS?\n\n.container {\n  width: 1200px;\n}",
    options: [
      { id: "A", text: "It guarantees perfect responsiveness" },
      { id: "B", text: "It can overflow or require horizontal scrolling on viewports narrower than 1200px" },
      { id: "C", text: "It makes the container automatically shrink" },
      { id: "D", text: "It converts the container into Grid" }
    ],
    correctOptionId: "B",
    explanation: "A fixed width larger than the viewport can cause horizontal overflow on smaller screens.",
    tags: ["fixed-width", "overflow", "responsive"]
  },

  {
    id: "css-responsive-design-q-036",
    quizId: "quiz_css_responsive_design",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property is useful when you want an element to grow with available space but never exceed a limit?",
    options: [
      { id: "A", text: "max-width" },
      { id: "B", text: "position" },
      { id: "C", text: "z-index" },
      { id: "D", text: "float" }
    ],
    correctOptionId: "A",
    explanation: "max-width provides an upper limit while allowing the element to remain flexible below that limit.",
    tags: ["max-width", "responsive"]
  },

  {
    id: "css-responsive-design-q-037",
    quizId: "quiz_css_responsive_design",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the advantage of using min() or max() in responsive CSS?",
    options: [
      { id: "A", text: "They allow a CSS value to choose between responsive constraints without necessarily requiring a media query" },
      { id: "B", text: "They only work for colors" },
      { id: "C", text: "They create HTML elements" },
      { id: "D", text: "They disable responsive behavior" }
    ],
    correctOptionId: "A",
    explanation: "CSS min() and max() functions can express responsive sizing constraints directly in a property value.",
    tags: ["min", "max", "responsive-units"]
  },

  {
    id: "css-responsive-design-q-038",
    quizId: "quiz_css_responsive_design",
    order: 38,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\nwidth: min(90%, 1200px);",
    options: [
      { id: "A", text: "The width becomes whichever is smaller: 90% of the containing context or 1200px" },
      { id: "B", text: "The width is always 1200px" },
      { id: "C", text: "The width is always 90px" },
      { id: "D", text: "The width becomes whichever is larger" }
    ],
    correctOptionId: "A",
    explanation: "min() selects the smallest computed value, allowing the element to remain responsive while being capped at 1200px.",
    tags: ["min", "responsive", "max-width"]
  },

  {
    id: "css-responsive_design-q-039",
    quizId: "quiz_css_responsive_design",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main advantage of CSS Container Queries compared with traditional viewport media queries?",
    options: [
      { id: "A", text: "They allow components to respond to the size of their containing element rather than only the viewport" },
      { id: "B", text: "They replace all HTML" },
      { id: "C", text: "They only work for page-level navigation" },
      { id: "D", text: "They make every component fixed-width" }
    ],
    correctOptionId: "A",
    explanation: "Container queries allow component styles to adapt based on the size of a relevant container, which is useful for reusable components placed in different layouts.",
    tags: ["container-queries", "responsive-design", "advanced"]
  },

  {
    id: "css-responsive-design-q-040",
    quizId: "quiz_css_responsive_design",
    order: 40,
    type: "code",
    difficulty: "Advanced",
    question: "Which CSS establishes a container query context?",
    options: [
      { id: "A", text: ".card { responsive: true; }" },
      { id: "B", text: ".card { container-type: inline-size; }" },
      { id: "C", text: ".card { query-size: width; }" },
      { id: "D", text: ".card { display: container; }" }
    ],
    correctOptionId: "B",
    explanation: "container-type: inline-size establishes a query container whose inline size can be used by container queries.",
    tags: ["container-queries", "container-type"]
  },

  {
    id: "css-responsive-design-q-041",
    quizId: "quiz_css_responsive_design",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "Which is a valid container query pattern?",
    options: [
      { id: "A", text: "@container (min-width: 500px) { .card { display: grid; } }" },
      { id: "B", text: "@viewport-container 500px { .card { display: grid; } }" },
      { id: "C", text: "@media-container width > 500px { .card { display: grid; } }" },
      { id: "D", text: "@query (container: 500px) { .card { display: grid; } }" }
    ],
    correctOptionId: "A",
    explanation: "The @container at-rule applies styles based on the size of an eligible query container.",
    tags: ["container-queries", "responsive-design"]
  },

  {
    id: "css-responsive-design-q-042",
    quizId: "quiz_css_responsive_design",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can container queries be particularly valuable for reusable UI components?",
    options: [
      { id: "A", text: "A component can adapt to its available container space even when placed in different parts of an application" },
      { id: "B", text: "They force every component to have the same layout" },
      { id: "C", text: "They eliminate CSS inheritance" },
      { id: "D", text: "They only work on full-screen pages" }
    ],
    correctOptionId: "A",
    explanation: "A reusable card might appear in a sidebar, main content area, or modal. Container queries allow it to adapt to its actual available space rather than assuming the viewport width tells the whole story.",
    tags: ["container-queries", "components", "responsive"]
  },

  {
    id: "css-responsive-design-q-043",
    quizId: "quiz_css_responsive_design",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes the difference between viewport media queries and container queries?",
    options: [
      { id: "A", text: "Media queries can respond to viewport conditions, while container queries can respond to an eligible ancestor container's size" },
      { id: "B", text: "They are identical and always respond to the viewport" },
      { id: "C", text: "Container queries only work with JavaScript" },
      { id: "D", text: "Media queries only work on images" }
    ],
    correctOptionId: "A",
    explanation: "Viewport media queries are useful for page-level responsive behavior, while container queries enable components to respond to their local layout context.",
    tags: ["media-queries", "container-queries"]
  },

  {
    id: "css-responsive-design-q-044",
    quizId: "quiz_css_responsive_design",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer creates breakpoints at 320px, 375px, 390px, 414px, 430px, 768px, 820px, 834px, 1024px, 1280px, and many more. What is the biggest concern?",
    options: [
      { id: "A", text: "The CSS becomes unnecessarily device-specific and harder to maintain" },
      { id: "B", text: "More breakpoints always improve performance" },
      { id: "C", text: "CSS allows only five breakpoints" },
      { id: "D", text: "Media queries stop working after ten breakpoints" }
    ],
    correctOptionId: "A",
    explanation: "A large number of device-specific breakpoints can make responsive CSS brittle. Breakpoints should generally be driven by content and layout needs.",
    tags: ["breakpoints", "maintainability", "responsive-design"]
  },

  {
    id: "css-responsive-design-q-045",
    quizId: "quiz_css_responsive_design",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "Which approach is most appropriate for responsive typography that scales smoothly but stays within reasonable limits?",
    options: [
      { id: "A", text: "font-size: 72px;" },
      { id: "B", text: "font-size: clamp(1.5rem, 4vw, 3rem);" },
      { id: "C", text: "font-size: 100vw;" },
      { id: "D", text: "font-size: fixed(1rem, 3rem);" }
    ],
    correctOptionId: "B",
    explanation: "clamp() provides a minimum, preferred responsive value, and maximum, making it useful for fluid typography.",
    tags: ["clamp", "fluid-typography"]
  },

  {
    id: "css-responsive-design-q-046",
    quizId: "quiz_css_responsive_design",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is mobile-first CSS often considered beneficial for performance and maintainability?",
    options: [
      { id: "A", text: "It starts with a simpler baseline and progressively adds complexity where larger screens need it" },
      { id: "B", text: "It prevents desktop users from downloading CSS" },
      { id: "C", text: "It eliminates all media queries" },
      { id: "D", text: "It requires every component to use mobile-only HTML" }
    ],
    correctOptionId: "A",
    explanation: "Mobile-first encourages a simple baseline and progressive enhancement, which can reduce unnecessary overrides and make the cascade easier to reason about.",
    tags: ["mobile-first", "maintainability", "performance"]
  },

  {
    id: "css-responsive-design-q-047",
    quizId: "quiz_css_responsive_design",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "A card layout works perfectly at 1440px but causes horizontal scrolling at 390px. Which is the most sensible first debugging step?",
    options: [
      { id: "A", text: "Inspect fixed widths, min-width values, large margins, viewport units, and overflowing content" },
      { id: "B", text: "Add z-index: 999999 to every card" },
      { id: "C", text: "Set every element to position: fixed" },
      { id: "D", text: "Add 20 more media queries immediately" }
    ],
    correctOptionId: "A",
    explanation: "Unexpected horizontal overflow commonly comes from fixed/minimum widths, large spacing, viewport-width calculations, or content that cannot shrink.",
    tags: ["responsive-debugging", "overflow"]
  },

  {
    id: "css-responsive-design-q-048",
    quizId: "quiz_css_responsive_design",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is most appropriate for a responsive dashboard with a sidebar that becomes a top navigation on small screens?",
    options: [
      { id: "A", text: "Use a desktop-only fixed width and allow mobile browsers to scroll horizontally" },
      { id: "B", text: "Use a responsive layout system and change the layout at a content-driven breakpoint" },
      { id: "C", text: "Use absolute positioning for every dashboard component" },
      { id: "D", text: "Create a separate HTML document for every screen size" }
    ],
    correctOptionId: "B",
    explanation: "Responsive layout systems such as Grid or Flexbox can restructure the dashboard, with a meaningful breakpoint switching the sidebar into a mobile-friendly navigation pattern.",
    tags: ["responsive-layout", "dashboard", "breakpoints"]
  },

  {
    id: "css-responsive-design-q-049",
    quizId: "quiz_css_responsive_design",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best reflects a strong responsive-design mindset?",
    options: [
      { id: "A", text: "Build around content and available space rather than around a fixed list of devices" },
      { id: "B", text: "Every device needs its own exact breakpoint" },
      { id: "C", text: "Desktop layouts should always be designed first" },
      { id: "D", text: "Responsive design means simply making everything 100% wide" }
    ],
    correctOptionId: "A",
    explanation: "Good responsive design focuses on how content and components behave as available space changes, rather than targeting only a handful of named devices.",
    tags: ["responsive-design", "best-practices"]
  },

  {
    id: "css-responsive-design-q-050",
    quizId: "quiz_css_responsive_design",
    order: 50,
    type: "advanced",
    difficulty: "Advanced",
    question: "A production React application contains reusable cards, dashboards, forms, and navigation. Which responsive strategy demonstrates the strongest overall approach?",
    options: [
      { id: "A", text: "Use fixed pixel dimensions everywhere and add JavaScript device detection" },
      { id: "B", text: "Use a mobile-first baseline, flexible units and sizing functions, content-driven breakpoints, responsive Grid/Flexbox layouts, and container queries where component-level responsiveness is useful" },
      { id: "C", text: "Create a separate CSS file for every phone model" },
      { id: "D", text: "Use viewport width as the width of every component" }
    ],
    correctOptionId: "B",
    explanation: "A production-quality responsive system combines several techniques: mobile-first defaults, flexible sizing, meaningful media queries, modern layout systems, and container queries where local component context matters.",
    tags: ["responsive-design", "mobile-first", "media-queries", "container-queries", "best-practices"]
  }
];

export default cssResponsiveDesignQuestions;