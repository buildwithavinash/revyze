const htmlSemanticAccessibilityQuestions = [
  {
    id: "html-semantic-accessibility-q-001",
    quizId: "quiz_html_semantic_accessibility",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of semantic HTML?",
    options: [
      { id: "A", text: "To communicate the meaning and structural role of content" },
      { id: "B", text: "To automatically style every element" },
      { id: "C", text: "To replace JavaScript functionality" },
      { id: "D", text: "To make every page load instantly" }
    ],
    correctOptionId: "A",
    explanation: "Semantic HTML uses elements whose names communicate their purpose, such as <nav>, <main>, <article>, and <button>. This gives browsers, assistive technologies, search engines, and developers meaningful structural information.",
    tags: ["semantic-html", "accessibility", "html"]
  },

  {
    id: "html-semantic-accessibility-q-002",
    quizId: "quiz_html_semantic_accessibility",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is most appropriate for the primary navigation of a website?",
    options: [
      { id: "A", text: "<nav>" },
      { id: "B", text: "<navigation>" },
      { id: "C", text: "<links>" },
      { id: "D", text: "<menu-bar>" }
    ],
    correctOptionId: "A",
    explanation: "The <nav> element identifies a section containing navigation links.",
    tags: ["nav", "semantic-html", "navigation"]
  },

  {
    id: "html-semantic-accessibility-q-003",
    quizId: "quiz_html_semantic_accessibility",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element identifies the dominant content of a document?",
    options: [
      { id: "A", text: "<main>" },
      { id: "B", text: "<content>" },
      { id: "C", text: "<primary>" },
      { id: "D", text: "<body-content>" }
    ],
    correctOptionId: "A",
    explanation: "The <main> element represents the dominant content of the document. Content repeated across pages, such as site-wide navigation, generally does not belong inside it.",
    tags: ["main", "semantic-html", "landmarks"]
  },

  {
    id: "html-semantic-accessibility-q-004",
    quizId: "quiz_html_semantic_accessibility",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is appropriate for a self-contained blog post?",
    options: [
      { id: "A", text: "<article>" },
      { id: "B", text: "<post>" },
      { id: "C", text: "<content>" },
      { id: "D", text: "<blog-entry>" }
    ],
    correctOptionId: "A",
    explanation: "<article> represents a self-contained composition that could potentially be distributed or understood independently, such as a blog post or news article.",
    tags: ["article", "semantic-html", "content"]
  },

  {
    id: "html-semantic-accessibility-q-005",
    quizId: "quiz_html_semantic_accessibility",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is generally appropriate for supplementary content related to the surrounding content?",
    options: [
      { id: "A", text: "<aside>" },
      { id: "B", text: "<sidebar>" },
      { id: "C", text: "<secondary>" },
      { id: "D", text: "<extra>" }
    ],
    correctOptionId: "A",
    explanation: "<aside> represents content that is tangentially related to the content around it, such as a sidebar, related links, or supplementary information.",
    tags: ["aside", "semantic-html", "landmarks"]
  },

  {
    id: "html-semantic-accessibility-q-006",
    quizId: "quiz_html_semantic_accessibility",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is intended for introductory content for a page or section?",
    options: [
      { id: "A", text: "<header>" },
      { id: "B", text: "<intro>" },
      { id: "C", text: "<top>" },
      { id: "D", text: "<heading-area>" }
    ],
    correctOptionId: "A",
    explanation: "<header> represents introductory or navigational content for its nearest sectioning context. It is not limited to the top of the entire page.",
    tags: ["header", "semantic-html", "sections"]
  },

  {
    id: "html-semantic-accessibility-q-007",
    quizId: "quiz_html_semantic_accessibility",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about <footer> is correct?",
    options: [
      { id: "A", text: "It can represent footer information for the page or a particular section" },
      { id: "B", text: "It can only appear once in an HTML document" },
      { id: "C", text: "It must always be the last element in <body>" },
      { id: "D", text: "It is only used for copyright text" }
    ],
    correctOptionId: "A",
    explanation: "A <footer> can belong to the overall page or to a sectioning element such as an article. Multiple footer elements can therefore exist in a document.",
    tags: ["footer", "semantic-html", "sections"]
  },

  {
    id: "html-semantic-accessibility-q-008",
    quizId: "quiz_html_semantic_accessibility",
    order: 8,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main semantic difference between <section> and <div>?",
    options: [
      { id: "A", text: "<section> represents a thematic grouping, while <div> has no inherent semantic meaning" },
      { id: "B", text: "<div> is semantic but <section> is not" },
      { id: "C", text: "<section> can only contain text" },
      { id: "D", text: "<div> automatically creates a landmark" }
    ],
    correctOptionId: "A",
    explanation: "<section> communicates a thematic grouping of content. <div> is a generic container and should generally be used when no more meaningful semantic element fits.",
    tags: ["section", "div", "semantic-html"]
  },

  {
    id: "html-semantic-accessibility-q-009",
    quizId: "quiz_html_semantic_accessibility",
    order: 9,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is generally the best reason to prefer a native <button> over a clickable <div>?",
    options: [
      { id: "A", text: "A native button already provides appropriate semantics, keyboard interaction, focus behavior, and activation behavior" },
      { id: "B", text: "A div cannot be styled" },
      { id: "C", text: "Buttons cannot contain JavaScript" },
      { id: "D", text: "Div elements cannot contain text" }
    ],
    correctOptionId: "A",
    explanation: "Native interactive controls come with built-in browser behavior and accessibility semantics. Recreating a button using a div requires developers to implement much more behavior correctly.",
    tags: ["button", "semantic-html", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-010",
    quizId: "quiz_html_semantic_accessibility",
    order: 10,
    type: "code",
    difficulty: "Intermediate",
    question: "Which implementation is the most semantically appropriate for a button that opens a settings panel?",
    options: [
      { id: "A", text: "<button type=\"button\">Settings</button>" },
      { id: "B", text: "<div onclick=\"openSettings()\">Settings</div>" },
      { id: "C", text: "<span onclick=\"openSettings()\">Settings</span>" },
      { id: "D", text: "<p onclick=\"openSettings()\">Settings</p>" }
    ],
    correctOptionId: "A",
    explanation: "A control that performs an action should use the native button element whenever possible. It provides the appropriate interaction model without requiring developers to recreate keyboard and accessibility behavior.",
    tags: ["button", "interaction", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-011",
    quizId: "quiz_html_semantic_accessibility",
    order: 11,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does ARIA stand for?",
    options: [
      { id: "A", text: "Accessible Rich Internet Applications" },
      { id: "B", text: "Advanced Responsive Internet Architecture" },
      { id: "C", text: "Accessible Responsive Interface API" },
      { id: "D", text: "Application Role Interaction Architecture" }
    ],
    correctOptionId: "A",
    explanation: "ARIA stands for Accessible Rich Internet Applications. It provides attributes that can communicate roles, states, properties, and relationships to assistive technologies.",
    tags: ["aria", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-012",
    quizId: "quiz_html_semantic_accessibility",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the preferred general approach when native HTML already provides the required semantics?",
    options: [
      { id: "A", text: "Prefer the native HTML element instead of adding unnecessary ARIA" },
      { id: "B", text: "Always add a matching ARIA role anyway" },
      { id: "C", text: "Replace native HTML with div elements and ARIA" },
      { id: "D", text: "Avoid semantic HTML entirely" }
    ],
    correctOptionId: "A",
    explanation: "Native HTML elements generally provide reliable semantics and built-in behavior. ARIA should supplement native HTML when needed rather than unnecessarily replacing it.",
    tags: ["aria", "semantic-html", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-013",
    quizId: "quiz_html_semantic_accessibility",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the role attribute communicate?",
    options: [
      { id: "A", text: "The semantic role an element should expose to accessibility APIs" },
      { id: "B", text: "The CSS position of an element" },
      { id: "C", text: "The element's JavaScript event handler" },
      { id: "D", text: "The element's visual color" }
    ],
    correctOptionId: "A",
    explanation: "ARIA roles communicate what kind of UI component or structural object an element represents to assistive technologies.",
    tags: ["aria", "role", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-014",
    quizId: "quiz_html_semantic_accessibility",
    order: 14,
    type: "code",
    difficulty: "Intermediate",
    question: "Which ARIA role can communicate that a generic element is intended to behave as a button?",
    options: [
      { id: "A", text: "role=\"button\"" },
      { id: "B", text: "role=\"clickable\"" },
      { id: "C", text: "role=\"action\"" },
      { id: "D", text: "role=\"control\"" }
    ],
    correctOptionId: "A",
    explanation: "role=\"button\" communicates the intended button semantics. However, a native <button> is generally preferable because the native element also supplies the expected interaction behavior.",
    tags: ["aria", "role", "button"]
  },

  {
    id: "html-semantic-accessibility-q-015",
    quizId: "quiz_html_semantic_accessibility",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why does role=\"button\" on a <div> not automatically make it equivalent to a native <button>?",
    options: [
      { id: "A", text: "The developer may still need to implement keyboard interaction, focus behavior, and activation correctly" },
      { id: "B", text: "ARIA roles only affect CSS" },
      { id: "C", text: "A div can never receive focus" },
      { id: "D", text: "role=\"button\" is ignored by every browser" }
    ],
    correctOptionId: "A",
    explanation: "ARIA primarily communicates semantics; it does not automatically recreate every behavior of a native control. A custom button needs appropriate focus and keyboard interaction handling as well.",
    tags: ["aria", "button", "keyboard-accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-016",
    quizId: "quiz_html_semantic_accessibility",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does aria-label provide?",
    options: [
      { id: "A", text: "An accessible name supplied directly through an ARIA attribute" },
      { id: "B", text: "A visible CSS label" },
      { id: "C", text: "A browser tooltip only" },
      { id: "D", text: "A form submission value" }
    ],
    correctOptionId: "A",
    explanation: "aria-label can provide an accessible name when appropriate. It should not be used to unnecessarily replace visible, meaningful text.",
    tags: ["aria-label", "accessible-name", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-017",
    quizId: "quiz_html_semantic_accessibility",
    order: 17,
    type: "code",
    difficulty: "Intermediate",
    question: "Which implementation gives an icon-only button an accessible name?",
    options: [
      { id: "A", text: "<button type=\"button\" aria-label=\"Close\"><svg aria-hidden=\"true\">...</svg></button>" },
      { id: "B", text: "<div title=\"Close\"><svg>...</svg></div>" },
      { id: "C", text: "<button><svg></svg></button>" },
      { id: "D", text: "<span aria-label=\"Close\"><svg>...</svg></span>" }
    ],
    correctOptionId: "A",
    explanation: "The native button supplies the interactive semantics, while aria-label supplies the accessible name. Marking a purely decorative icon as hidden prevents it from unnecessarily contributing its own semantics.",
    tags: ["aria-label", "button", "svg", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-018",
    quizId: "quiz_html_semantic_accessibility",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of aria-labelledby?",
    options: [
      { id: "A", text: "To use the accessible text of another element as the current element's accessible name" },
      { id: "B", text: "To create a CSS selector" },
      { id: "C", text: "To associate a form value with a server endpoint" },
      { id: "D", text: "To hide an element visually" }
    ],
    correctOptionId: "A",
    explanation: "aria-labelledby references one or more element IDs whose accessible text provides the accessible name for the current element.",
    tags: ["aria-labelledby", "accessible-name", "aria"]
  },

  {
    id: "html-semantic-accessibility-q-019",
    quizId: "quiz_html_semantic_accessibility",
    order: 19,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup correctly associates a dialog with its visible heading as its accessible name?",
    options: [
      { id: "A", text: "<div role=\"dialog\" aria-labelledby=\"dialog-title\"><h2 id=\"dialog-title\">Delete account?</h2></div>" },
      { id: "B", text: "<div role=\"dialog\" label=\"dialog-title\"><h2 id=\"dialog-title\">Delete account?</h2></div>" },
      { id: "C", text: "<div role=\"dialog\" for=\"dialog-title\"><h2 id=\"dialog-title\">Delete account?</h2></div>" },
      { id: "D", text: "<div role=\"dialog\" heading=\"dialog-title\"><h2 id=\"dialog-title\">Delete account?</h2></div>" }
    ],
    correctOptionId: "A",
    explanation: "aria-labelledby references the ID of the visible heading, allowing that heading to provide the dialog's accessible name.",
    tags: ["dialog", "aria-labelledby", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-020",
    quizId: "quiz_html_semantic_accessibility",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does aria-describedby primarily communicate?",
    options: [
      { id: "A", text: "Additional descriptive text associated with an element" },
      { id: "B", text: "The element's CSS class" },
      { id: "C", text: "The element's URL" },
      { id: "D", text: "The element's keyboard shortcut" }
    ],
    correctOptionId: "A",
    explanation: "aria-describedby associates an element with one or more other elements that provide additional descriptive information.",
    tags: ["aria-describedby", "aria", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-021",
    quizId: "quiz_html_semantic_accessibility",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does aria-expanded communicate?",
    options: [
      { id: "A", text: "Whether a related expandable interface is currently expanded or collapsed" },
      { id: "B", text: "Whether an element is visually large" },
      { id: "C", text: "Whether a form has been submitted" },
      { id: "D", text: "Whether an image has loaded" }
    ],
    correctOptionId: "A",
    explanation: "aria-expanded communicates the expanded/collapsed state of a control that manages expandable content.",
    tags: ["aria-expanded", "aria", "disclosure"]
  },

  {
    id: "html-semantic-accessibility-q-022",
    quizId: "quiz_html_semantic_accessibility",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "Which button state correctly communicates that its associated menu is currently open?",
    options: [
      { id: "A", text: "<button aria-expanded=\"true\">Menu</button>" },
      { id: "B", text: "<button aria-open=\"true\">Menu</button>" },
      { id: "C", text: "<button expanded=\"true\">Menu</button>" },
      { id: "D", text: "<button state=\"open\">Menu</button>" }
    ],
    correctOptionId: "A",
    explanation: "aria-expanded=\"true\" communicates that the controlled expandable content is currently expanded.",
    tags: ["aria-expanded", "menu", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-023",
    quizId: "quiz_html_semantic_accessibility",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does aria-hidden=\"true\" generally communicate?",
    options: [
      { id: "A", text: "The element should be excluded from the accessibility tree" },
      { id: "B", text: "The element should become display:none in CSS" },
      { id: "C", text: "The element should be invisible to everyone" },
      { id: "D", text: "The element should be removed from the DOM" }
    ],
    correctOptionId: "A",
    explanation: "aria-hidden=\"true\" hides an element from the accessibility tree. It does not automatically remove the element visually, from the DOM, or from all forms of interaction.",
    tags: ["aria-hidden", "aria", "accessibility-tree"]
  },

  {
    id: "html-semantic-accessibility-q-024",
    quizId: "quiz_html_semantic_accessibility",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "Which is the most appropriate use of aria-hidden=\"true\"?",
    options: [
      { id: "A", text: "A decorative icon that conveys no information beyond adjacent text" },
      { id: "B", text: "A form field that the user must complete" },
      { id: "C", text: "A button whose only accessible name is its icon" },
      { id: "D", text: "A heading that identifies the current page" }
    ],
    correctOptionId: "A",
    explanation: "Decorative content that adds no useful information can often be hidden from assistive technologies so it does not create redundant or confusing output.",
    tags: ["aria-hidden", "decorative-content", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-025",
    quizId: "quiz_html_semantic_accessibility",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is meaningful visible text usually preferable to using aria-label on every element?",
    options: [
      { id: "A", text: "Visible text benefits a wider range of users and can provide both visual and accessible context" },
      { id: "B", text: "aria-label only works on images" },
      { id: "C", text: "Visible text cannot be read by screen readers" },
      { id: "D", text: "ARIA labels disable keyboard navigation" }
    ],
    correctOptionId: "A",
    explanation: "Visible labels communicate information to sighted users and can also contribute to accessible names. ARIA should not unnecessarily replace useful visible content.",
    tags: ["aria-label", "visible-text", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-026",
    quizId: "quiz_html_semantic_accessibility",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is heading hierarchy important for accessibility?",
    options: [
      { id: "A", text: "Assistive technology users can use headings to understand and navigate the structure of a page" },
      { id: "B", text: "Screen readers only read h1 elements" },
      { id: "C", text: "Browsers refuse to display skipped heading levels" },
      { id: "D", text: "Heading levels determine CSS specificity" }
    ],
    correctOptionId: "A",
    explanation: "Headings communicate content hierarchy. Users of screen readers can navigate between headings, so heading structure should reflect the actual organization of the content.",
    tags: ["headings", "accessibility", "document-structure"]
  },

  {
    id: "html-semantic-accessibility-q-027",
    quizId: "quiz_html_semantic_accessibility",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "A developer chooses <h4> because it visually matches the desired font size, even though the section is actually a direct subsection of an <h2>. What is the main concern?",
    options: [
      { id: "A", text: "The heading level no longer accurately represents the content hierarchy" },
      { id: "B", text: "h4 elements cannot be styled with CSS" },
      { id: "C", text: "h4 elements are invisible to browsers" },
      { id: "D", text: "Only h1 elements can contain text" }
    ],
    correctOptionId: "A",
    explanation: "Heading levels should communicate hierarchy rather than be selected purely for visual sizing. CSS should be used to control presentation.",
    tags: ["headings", "semantic-html", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-028",
    quizId: "quiz_html_semantic_accessibility",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an accessibility landmark?",
    options: [
      { id: "A", text: "A semantic region that helps users identify and navigate major areas of a page" },
      { id: "B", text: "A visual border around a component" },
      { id: "C", text: "A CSS positioning technique" },
      { id: "D", text: "A browser bookmark" }
    ],
    correctOptionId: "A",
    explanation: "Landmarks expose meaningful regions such as navigation, main content, banners, and complementary content, helping assistive technology users navigate large pages.",
    tags: ["landmarks", "accessibility", "semantic-html"]
  },

  {
    id: "html-semantic-accessibility-q-029",
    quizId: "quiz_html_semantic_accessibility",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which native element typically exposes a navigation landmark?",
    options: [
      { id: "A", text: "<nav>" },
      { id: "B", text: "<div>" },
      { id: "C", text: "<span>" },
      { id: "D", text: "<section>" }
    ],
    correctOptionId: "A",
    explanation: "The <nav> element has native navigation semantics, allowing assistive technologies to recognize it as a navigation region.",
    tags: ["landmarks", "nav", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-030",
    quizId: "quiz_html_semantic_accessibility",
    order: 30,
    type: "code",
    difficulty: "Intermediate",
    question: "Which page structure provides the clearest semantic landmarks?",
    options: [
      {
        id: "A",
        text: "<header>Site header</header><nav>Navigation</nav><main>Main content</main><aside>Related content</aside><footer>Footer</footer>"
      },
      {
        id: "B",
        text: "<div>Site header</div><div>Navigation</div><div>Main content</div><div>Related content</div><div>Footer</div>"
      },
      {
        id: "C",
        text: "<span>Site header</span><span>Navigation</span><span>Main content</span>"
      },
      {
        id: "D",
        text: "<p>Site header</p><p>Navigation</p><p>Main content</p>"
      }
    ],
    correctOptionId: "A",
    explanation: "The semantic elements communicate the role of each major region directly, making the structure easier for browsers, assistive technologies, and developers to understand.",
    tags: ["landmarks", "semantic-html", "page-structure"]
  },

  {
    id: "html-semantic-accessibility-q-031",
    quizId: "quiz_html_semantic_accessibility",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should a form input generally have a proper <label> rather than relying only on placeholder text?",
    options: [
      { id: "A", text: "A label provides a persistent semantic association, while placeholder text can disappear when the user enters a value" },
      { id: "B", text: "Placeholder text cannot be displayed in modern browsers" },
      { id: "C", text: "Labels only exist for CSS styling" },
      { id: "D", text: "Inputs cannot contain placeholders" }
    ],
    correctOptionId: "A",
    explanation: "A proper label identifies the control persistently and programmatically. Placeholder text is intended as a hint and should not replace a label.",
    tags: ["forms", "label", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-032",
    quizId: "quiz_html_semantic_accessibility",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup provides an explicit accessible relationship between the label and input?",
    options: [
      { id: "A", text: "<label for=\"email\">Email</label><input id=\"email\" type=\"email\">" },
      { id: "B", text: "<label href=\"email\">Email</label><input id=\"email\" type=\"email\">" },
      { id: "C", text: "<label target=\"email\">Email</label><input name=\"email\" type=\"email\">" },
      { id: "D", text: "<label id=\"email\">Email</label><input for=\"email\" type=\"email\">" }
    ],
    correctOptionId: "A",
    explanation: "The label's `for` attribute references the input's `id`, establishing an explicit programmatic association.",
    tags: ["label", "forms", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-033",
    quizId: "quiz_html_semantic_accessibility",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is meaningful alt text important for informative images?",
    options: [
      { id: "A", text: "It provides a text alternative for users who cannot perceive the image" },
      { id: "B", text: "It changes the image's resolution" },
      { id: "C", text: "It prevents all image loading errors" },
      { id: "D", text: "It automatically generates captions" }
    ],
    correctOptionId: "A",
    explanation: "Alternative text communicates the relevant information or purpose of an informative image when the image itself cannot be perceived.",
    tags: ["images", "alt", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-034",
    quizId: "quiz_html_semantic_accessibility",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "Which alt text is most appropriate for a decorative divider image?",
    options: [
      { id: "A", text: "alt=\"\"" },
      { id: "B", text: "alt=\"Decorative divider image separating content\"" },
      { id: "C", text: "alt=\"Image\"" },
      { id: "D", text: "alt=\"Divider important\"" }
    ],
    correctOptionId: "A",
    explanation: "When an image is purely decorative and adds no meaningful information, an empty alt attribute allows assistive technologies to skip it.",
    tags: ["alt", "decorative-images", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-035",
    quizId: "quiz_html_semantic_accessibility",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is generally preferable for navigation instead of a generic div containing links?",
    options: [
      { id: "A", text: "<nav>" },
      { id: "B", text: "<div role=\"box\">" },
      { id: "C", text: "<span>" },
      { id: "D", text: "<p>" }
    ],
    correctOptionId: "A",
    explanation: "The native <nav> element already communicates the semantic purpose of the region and exposes appropriate navigation semantics.",
    tags: ["nav", "semantic-html", "landmarks"]
  },

  {
    id: "html-semantic-accessibility-q-036",
    quizId: "quiz_html_semantic_accessibility",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the tabindex attribute?",
    options: [
      { id: "A", text: "It influences an element's focusability and keyboard focus order" },
      { id: "B", text: "It changes the visual stacking order" },
      { id: "C", text: "It changes the heading level" },
      { id: "D", text: "It defines the element's ARIA role" }
    ],
    correctOptionId: "A",
    explanation: "tabindex controls aspects of keyboard focus behavior. Positive tabindex values should generally be avoided because they can create a confusing custom focus order.",
    tags: ["tabindex", "keyboard", "focus", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-037",
    quizId: "quiz_html_semantic_accessibility",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is tabindex=\"1\" generally discouraged on ordinary interactive elements?",
    options: [
      { id: "A", text: "Positive tabindex values can create a custom focus order that is difficult to maintain and confusing for keyboard users" },
      { id: "B", text: "tabindex values must always be negative" },
      { id: "C", text: "tabindex=\"1\" disables keyboard navigation" },
      { id: "D", text: "tabindex only works on images" }
    ],
    correctOptionId: "A",
    explanation: "Positive tabindex values cause elements to receive focus before elements in the normal document order, potentially producing an unnatural and fragile keyboard sequence.",
    tags: ["tabindex", "keyboard", "focus", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-038",
    quizId: "quiz_html_semantic_accessibility",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does tabindex=\"0\" generally do?",
    options: [
      { id: "A", text: "It places an otherwise focusable-capable element into the normal sequential keyboard focus order" },
      { id: "B", text: "It removes the element from keyboard navigation" },
      { id: "C", text: "It forces the element to receive focus immediately" },
      { id: "D", text: "It gives the element the highest focus priority" }
    ],
    correctOptionId: "A",
    explanation: "tabindex=\"0\" allows an element that is not natively sequentially focusable to participate in the normal tab order. It does not make the element automatically behave like a native button or link.",
    tags: ["tabindex", "focus", "keyboard"]
  },

  {
    id: "html-semantic-accessibility-q-039",
    quizId: "quiz_html_semantic_accessibility",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does tabindex=\"-1\" generally allow?",
    options: [
      { id: "A", text: "The element can be focused programmatically but is excluded from normal sequential Tab navigation" },
      { id: "B", text: "The element becomes permanently disabled" },
      { id: "C", text: "The element becomes the first Tab stop" },
      { id: "D", text: "The element becomes hidden from assistive technology" }
    ],
    correctOptionId: "A",
    explanation: "tabindex=\"-1\" removes an element from sequential keyboard navigation while still allowing focus to be moved to it programmatically.",
    tags: ["tabindex", "focus", "keyboard"]
  },

  {
    id: "html-semantic-accessibility-q-040",
    quizId: "quiz_html_semantic_accessibility",
    order: 40,
    type: "code",
    difficulty: "Advanced",
    question: "A custom modal opens. Which behavior is most important for keyboard accessibility?",
    options: [
      { id: "A", text: "Manage focus so keyboard users can meaningfully interact with the dialog and return focus appropriately when it closes" },
      { id: "B", text: "Remove all headings from the modal" },
      { id: "C", text: "Disable the Tab key globally" },
      { id: "D", text: "Automatically scroll the entire page to the top" }
    ],
    correctOptionId: "A",
    explanation: "Dialogs require deliberate focus management. When opened, focus should move appropriately into the dialog, keyboard interaction should remain usable, and focus should be restored appropriately when the dialog closes.",
    tags: ["dialog", "focus-management", "keyboard", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-041",
    quizId: "quiz_html_semantic_accessibility",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes the relationship between semantic HTML and ARIA?",
    options: [
      { id: "A", text: "Semantic HTML should generally be the foundation, while ARIA can supplement semantics when native HTML is insufficient" },
      { id: "B", text: "ARIA completely replaces semantic HTML" },
      { id: "C", text: "ARIA is only for changing colors" },
      { id: "D", text: "Semantic HTML should never be used with ARIA" }
    ],
    correctOptionId: "A",
    explanation: "Native semantic HTML provides strong built-in accessibility semantics and behavior. ARIA is useful when additional roles, states, or relationships are needed, especially for custom widgets.",
    tags: ["aria", "semantic-html", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-042",
    quizId: "quiz_html_semantic_accessibility",
    order: 42,
    type: "code",
    difficulty: "Advanced",
    question: "A developer creates a custom toggle using a div:\n\n<div role=\"switch\" aria-checked=\"false\">Dark mode</div>\n\nWhat is still missing for a robust accessible interactive control?",
    options: [
      { id: "A", text: "Appropriate keyboard interaction, focus management, and state updates when the user toggles it" },
      { id: "B", text: "A second role attribute" },
      { id: "C", text: "A CSS display property" },
      { id: "D", text: "A second div containing the word switch" }
    ],
    correctOptionId: "A",
    explanation: "ARIA communicates semantics and state, but it does not automatically implement the interaction model. A custom switch must support appropriate focus and keyboard interaction and keep aria-checked synchronized with its actual state.",
    tags: ["aria", "switch", "keyboard", "state"]
  },

  {
    id: "html-semantic-accessibility-q-043",
    quizId: "quiz_html_semantic_accessibility",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can adding an ARIA role that contradicts an element's native meaning be harmful?",
    options: [
      { id: "A", text: "It can expose misleading semantics to assistive technologies and create an inconsistent interaction model" },
      { id: "B", text: "ARIA roles only affect visual styling" },
      { id: "C", text: "Browsers automatically delete conflicting elements" },
      { id: "D", text: "All ARIA roles are purely decorative" }
    ],
    correctOptionId: "A",
    explanation: "Accessibility APIs depend on accurate semantics. Incorrect or contradictory roles can cause assistive technologies to interpret a control differently from how it actually behaves.",
    tags: ["aria", "roles", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-044",
    quizId: "quiz_html_semantic_accessibility",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation is preferable for a collapsible FAQ item when the control is simply showing or hiding content?",
    options: [
      { id: "A", text: "<button type=\"button\" aria-expanded=\"false\">What is HTML?</button>" },
      { id: "B", text: "<div role=\"button\" aria-expanded=\"false\">What is HTML?</div>" },
      { id: "C", text: "<span onclick=\"toggle()\">What is HTML?</span>" },
      { id: "D", text: "<p onclick=\"toggle()\">What is HTML?</p>" }
    ],
    correctOptionId: "A",
    explanation: "The native button provides the correct interactive semantics and keyboard behavior. aria-expanded can communicate the state of the associated expandable content.",
    tags: ["button", "aria-expanded", "faq", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-045",
    quizId: "quiz_html_semantic_accessibility",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the accessible name of a control?",
    options: [
      { id: "A", text: "The name exposed to assistive technologies that identifies what the control is or does" },
      { id: "B", text: "The CSS class assigned to the control" },
      { id: "C", text: "The browser's internal variable name" },
      { id: "D", text: "The URL of the control" }
    ],
    correctOptionId: "A",
    explanation: "An accessible name identifies a UI element to assistive technologies. It can come from sources such as visible text, labels, or appropriate ARIA naming mechanisms.",
    tags: ["accessible-name", "accessibility", "aria"]
  },

  {
    id: "html-semantic-accessibility-q-046",
    quizId: "quiz_html_semantic_accessibility",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation gives a search input a clear accessible label?",
    options: [
      { id: "A", text: "<label for=\"site-search\">Search</label><input id=\"site-search\" type=\"search\" name=\"q\">" },
      { id: "B", text: "<input type=\"search\" placeholder=\"Search\">" },
      { id: "C", text: "<span>Search</span><input type=\"search\">" },
      { id: "D", text: "<input type=\"search\" title=\"Search field\" name=\"q\">" }
    ],
    correctOptionId: "A",
    explanation: "The explicit label-to-input association provides a robust accessible name and also gives users a visible description of the field.",
    tags: ["label", "search", "accessible-name"]
  },

  {
    id: "html-semantic-accessibility-q-047",
    quizId: "quiz_html_semantic_accessibility",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "A developer has this structure:\n\n<div class=\"header\">...</div>\n<div class=\"nav\">...</div>\n<div class=\"content\">...</div>\n<div class=\"footer\">...</div>\n\nWhat is the strongest semantic improvement?",
    options: [
      { id: "A", text: "Replace the generic containers with appropriate semantic elements such as <header>, <nav>, <main>, and <footer>" },
      { id: "B", text: "Add more CSS classes to each div" },
      { id: "C", text: "Add role=\"container\" to every div" },
      { id: "D", text: "Replace every div with a span" }
    ],
    correctOptionId: "A",
    explanation: "The content already has identifiable structural roles. Native semantic elements communicate those roles directly and avoid unnecessary custom ARIA or generic containers.",
    tags: ["semantic-html", "landmarks", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-048",
    quizId: "quiz_html_semantic_accessibility",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation best represents a navigation menu containing three links?",
    options: [
      {
        id: "A",
        text: "<nav aria-label=\"Main navigation\"><ul><li><a href=\"/\">Home</a></li><li><a href=\"/projects\">Projects</a></li><li><a href=\"/contact\">Contact</a></li></ul></nav>"
      },
      {
        id: "B",
        text: "<div role=\"navigation\"><span onclick=\"goHome()\">Home</span><span onclick=\"goProjects()\">Projects</span><span onclick=\"goContact()\">Contact</span></div>"
      },
      {
        id: "C",
        text: "<nav><div>Home</div><div>Projects</div><div>Contact</div></nav>"
      },
      {
        id: "D",
        text: "<section><button>Home</button><button>Projects</button><button>Contact</button></section>"
      }
    ],
    correctOptionId: "A",
    explanation: "The native nav landmark communicates the region's purpose, aria-label distinguishes this navigation when needed, list semantics represent the collection, and anchors provide native navigation behavior.",
    tags: ["nav", "aria-label", "links", "lists", "landmarks"]
  },

  {
    id: "html-semantic-accessibility-q-049",
    quizId: "quiz_html_semantic_accessibility",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A developer creates an icon-only delete control using <div>. Which change provides the strongest improvement?",
    options: [
      { id: "A", text: "Use a native <button>, provide an accessible name such as aria-label=\"Delete\", and ensure the icon is decorative" },
      { id: "B", text: "Add cursor:pointer to the div" },
      { id: "C", text: "Add a title attribute and keep the div" },
      { id: "D", text: "Make the div visually larger" }
    ],
    correctOptionId: "A",
    explanation: "The native button supplies correct interaction semantics and keyboard behavior. An accessible name communicates the action, while a decorative icon should not create redundant accessible content.",
    tags: ["button", "aria-label", "icons", "accessibility"]
  },

  {
    id: "html-semantic-accessibility-q-050",
    quizId: "quiz_html_semantic_accessibility",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "You are reviewing a production dashboard. Which implementation demonstrates the strongest overall semantic and accessibility approach?",
    options: [
      {
        id: "A",
        text: "<header><h1>Analytics Dashboard</h1><nav aria-label=\"Dashboard navigation\"><a href=\"/overview\">Overview</a><a href=\"/reports\">Reports</a></nav></header><main><section aria-labelledby=\"sales-title\"><h2 id=\"sales-title\">Sales</h2><p>Monthly sales increased by 12%.</p><button type=\"button\" aria-expanded=\"false\">Show details</button></section></main><footer><p>Last updated today</p></footer>"
      },
      {
        id: "B",
        text: "<div class=\"header\"><div class=\"title\">Analytics Dashboard</div><div onclick=\"navigate()\">Overview</div><div onclick=\"navigate()\">Reports</div></div><div class=\"content\"><div class=\"title\">Sales</div><div>Monthly sales increased by 12%.</div><div onclick=\"showDetails()\">Show details</div></div>"
      },
      {
        id: "C",
        text: "<header><h1>Analytics Dashboard</h1><div role=\"button\">Overview</div><div role=\"button\">Reports</div></header><div><span>Sales</span><div>Monthly sales increased by 12%.</div></div>"
      },
      {
        id: "D",
        text: "<div><h1>Analytics Dashboard</h1><span>Overview</span><span>Reports</span><h4>Sales</h4><p>Monthly sales increased by 12%.</p><div>Show details</div></div>"
      }
    ],
    correctOptionId: "A",
    explanation: "The first implementation uses native semantic landmarks, a logical heading hierarchy, real navigation links, a labeled navigation region, a main content region, a section with an explicit relationship to its heading, and a native button with state information. It communicates structure and interaction without unnecessarily recreating native HTML behavior.",
    tags: ["semantic-html", "accessibility", "aria", "landmarks", "headings", "navigation"]
  }
];

export default htmlSemanticAccessibilityQuestions;