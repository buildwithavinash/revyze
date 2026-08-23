const htmlAllInOneQuestions = [
  {
    id: "html-all-in-one-q-001",
    quizId: "quiz_html_all_in_one",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration tells the browser that the document uses HTML5?",
    options: [
      { id: "A", text: "<html5>" },
      { id: "B", text: "<doctype HTML5>" },
      { id: "C", text: "<!DOCTYPE html>" },
      { id: "D", text: "<meta html=\"5\">" }
    ],
    correctOptionId: "C",
    explanation: "`<!DOCTYPE html>` is the HTML5 doctype declaration. It tells the browser to use standards mode when interpreting the document.",
    tags: ["html", "doctype", "document-structure"]
  },

  {
    id: "html-all-in-one-q-002",
    quizId: "quiz_html_all_in_one",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is the root element of an HTML document?",
    options: [
      { id: "A", text: "<body>" },
      { id: "B", text: "<main>" },
      { id: "C", text: "<document>" },
      { id: "D", text: "<html>" }
    ],
    correctOptionId: "D",
    explanation: "The `<html>` element is the root element containing the document's `<head>` and `<body>` sections.",
    tags: ["html", "document-structure", "root-element"]
  },

  {
    id: "html-all-in-one-q-003",
    quizId: "quiz_html_all_in_one",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element contains metadata such as the document title and linked stylesheets?",
    options: [
      { id: "A", text: "<head>" },
      { id: "B", text: "<header>" },
      { id: "C", text: "<meta>" },
      { id: "D", text: "<top>" }
    ],
    correctOptionId: "A",
    explanation: "The `<head>` contains document metadata and resources such as `<title>`, `<meta>`, `<link>`, and scripts that belong there.",
    tags: ["head", "metadata", "document-structure"]
  },

  {
    id: "html-all-in-one-q-004",
    quizId: "quiz_html_all_in_one",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element defines the title shown in the browser tab?",
    options: [
      { id: "A", text: "<heading>" },
      { id: "B", text: "<title>" },
      { id: "C", text: "<h1>" },
      { id: "D", text: "<meta-title>" }
    ],
    correctOptionId: "B",
    explanation: "The `<title>` element provides the document title displayed by browsers and is also important for search results and accessibility.",
    tags: ["title", "metadata", "seo"]
  },

  {
    id: "html-all-in-one-q-005",
    quizId: "quiz_html_all_in_one",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents the primary content of a document?",
    options: [
      { id: "A", text: "<content>" },
      { id: "B", text: "<primary>" },
      { id: "C", text: "<main>" },
      { id: "D", text: "<section-main>" }
    ],
    correctOptionId: "C",
    explanation: "The `<main>` element identifies the dominant content of the document. It should not normally contain repeated site-wide content such as navigation or footers.",
    tags: ["semantic-html", "main", "document-structure"]
  },

  {
    id: "html-all-in-one-q-006",
    quizId: "quiz_html_all_in_one",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which semantic element is most appropriate for a website's primary navigation links?",
    options: [
      { id: "A", text: "<navigate>" },
      { id: "B", text: "<links>" },
      { id: "C", text: "<menu-bar>" },
      { id: "D", text: "<nav>" }
    ],
    correctOptionId: "D",
    explanation: "The `<nav>` element represents a section containing navigation links.",
    tags: ["semantic-html", "nav", "navigation"]
  },

  {
    id: "html-all-in-one-q-007",
    quizId: "quiz_html_all_in_one",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is intended for a self-contained piece of content that could potentially be distributed independently?",
    options: [
      { id: "A", text: "<article>" },
      { id: "B", text: "<section>" },
      { id: "C", text: "<content>" },
      { id: "D", text: "<aside-content>" }
    ],
    correctOptionId: "A",
    explanation: "An `<article>` represents a self-contained composition such as a blog post, news article, forum post, or similar independently meaningful content.",
    tags: ["semantic-html", "article", "content-structure"]
  },

  {
    id: "html-all-in-one-q-008",
    quizId: "quiz_html_all_in_one",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is generally appropriate for a thematic grouping of related content?",
    options: [
      { id: "A", text: "<group>" },
      { id: "B", text: "<section>" },
      { id: "C", text: "<content-group>" },
      { id: "D", text: "<theme>" }
    ],
    correctOptionId: "B",
    explanation: "`<section>` represents a thematic grouping of content. Sections commonly have a heading describing their topic.",
    tags: ["semantic-html", "section", "content-structure"]
  },

  {
    id: "html-all-in-one-q-009",
    quizId: "quiz_html_all_in_one",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is intended for content that is related to the surrounding content but not part of its main flow?",
    options: [
      { id: "A", text: "<side>" },
      { id: "B", text: "<secondary>" },
      { id: "C", text: "<aside>" },
      { id: "D", text: "<related>" }
    ],
    correctOptionId: "C",
    explanation: "`<aside>` represents tangentially related content, such as a sidebar, related links, or supplementary information.",
    tags: ["semantic-html", "aside", "content-structure"]
  },

  {
    id: "html-all-in-one-q-010",
    quizId: "quiz_html_all_in_one",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is appropriate for introductory content for a page or section?",
    options: [
      { id: "A", text: "<intro>" },
      { id: "B", text: "<top>" },
      { id: "C", text: "<heading-area>" },
      { id: "D", text: "<header>" }
    ],
    correctOptionId: "D",
    explanation: "A `<header>` represents introductory or navigational content for its nearest sectioning context. It can contain headings, logos, navigation, and related introductory material.",
    tags: ["semantic-html", "header", "sections"]
  },

  {
    id: "html-all-in-one-q-011",
    quizId: "quiz_html_all_in_one",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used for footer information belonging to a page or section?",
    options: [
      { id: "A", text: "<footer>" },
      { id: "B", text: "<bottom>" },
      { id: "C", text: "<page-footer>" },
      { id: "D", text: "<end>" }
    ],
    correctOptionId: "A",
    explanation: "The `<footer>` represents footer information for its nearest sectioning context, such as author information, copyright details, or related links.",
    tags: ["semantic-html", "footer", "sections"]
  },

  {
    id: "html-all-in-one-q-012",
    quizId: "quiz_html_all_in_one",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which heading represents the highest-level heading in normal HTML heading structure?",
    options: [
      { id: "A", text: "<h6>" },
      { id: "B", text: "<h1>" },
      { id: "C", text: "<heading1>" },
      { id: "D", text: "<head>" }
    ],
    correctOptionId: "B",
    explanation: "`<h1>` is the highest-level heading element, while `<h6>` is the lowest level in the HTML heading hierarchy.",
    tags: ["headings", "semantic-html", "document-structure"]
  },

  {
    id: "html-all-in-one-q-013",
    quizId: "quiz_html_all_in_one",
    order: 13,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main reason headings should represent the logical structure of content rather than simply being chosen for their visual size?",
    options: [
      { id: "A", text: "Browsers refuse to display headings with incorrect visual sizes" },
      { id: "B", text: "CSS cannot style headings" },
      { id: "C", text: "Assistive technologies and users rely on heading structure to understand and navigate content" },
      { id: "D", text: "Search engines only index h6 elements" }
    ],
    correctOptionId: "C",
    explanation: "Heading elements communicate document structure. Screen-reader users can navigate by headings, so choosing heading levels based only on visual appearance can damage the semantic structure.",
    tags: ["headings", "accessibility", "semantic-html"]
  },

  {
    id: "html-all-in-one-q-014",
    quizId: "quiz_html_all_in_one",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element creates a hyperlink to another resource?",
    options: [
      { id: "A", text: "<link>" },
      { id: "B", text: "<href>" },
      { id: "C", text: "<url>" },
      { id: "D", text: "<a>" }
    ],
    correctOptionId: "D",
    explanation: "The `<a>` element creates hyperlinks. Its `href` attribute specifies the destination.",
    tags: ["links", "anchor", "href"]
  },

  {
    id: "html-all-in-one-q-015",
    quizId: "quiz_html_all_in_one",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup correctly creates a link to example.com?",
    options: [
      { id: "A", text: "<a href=\"https://example.com\">Visit</a>" },
      { id: "B", text: "<link src=\"https://example.com\">Visit</link>" },
      { id: "C", text: "<a src=\"https://example.com\">Visit</a>" },
      { id: "D", text: "<href=\"https://example.com\">Visit</href>" }
    ],
    correctOptionId: "A",
    explanation: "The anchor element uses the `href` attribute for its destination, and the text between the opening and closing tags becomes the link's accessible name.",
    tags: ["links", "anchor", "href"]
  },

  {
    id: "html-all-in-one-q-016",
    quizId: "quiz_html_all_in_one",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is descriptive anchor text generally better than a link labeled only 'Click here'?",
    options: [
      { id: "A", text: "Browsers do not support the text 'Click here'" },
      { id: "B", text: "It communicates the destination or purpose of the link more clearly, including to assistive-technology users" },
      { id: "C", text: "Search engines reject short links" },
      { id: "D", text: "Links must always contain at least five words" }
    ],
    correctOptionId: "B",
    explanation: "Descriptive link text provides useful context about where the link leads or what action it performs. This is especially useful when links are encountered outside their surrounding paragraph.",
    tags: ["links", "accessibility", "anchor-text"]
  },

  {
    id: "html-all-in-one-q-017",
    quizId: "quiz_html_all_in_one",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which attribute provides alternative text for an image?",
    options: [
      { id: "A", text: "alternative" },
      { id: "B", text: "description" },
      { id: "C", text: "alt" },
      { id: "D", text: "caption" }
    ],
    correctOptionId: "C",
    explanation: "The `alt` attribute provides a text alternative for an image. It is important for accessibility and can communicate the image's purpose when it cannot be perceived.",
    tags: ["images", "alt", "accessibility"]
  },

  {
    id: "html-all-in-one-q-018",
    quizId: "quiz_html_all_in_one",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What should alt=\"\" generally communicate for a purely decorative image?",
    options: [
      { id: "A", text: "That the image failed to load" },
      { id: "B", text: "That the image should be hidden visually" },
      { id: "C", text: "That the image is the most important content" },
      { id: "D", text: "That the image is decorative and does not add meaningful information" }
    ],
    correctOptionId: "D",
    explanation: "An empty `alt` attribute marks a decorative image as having no useful text alternative, allowing assistive technologies to avoid announcing unnecessary content.",
    tags: ["images", "alt", "accessibility", "decorative-content"]
  },

  {
    id: "html-all-in-one-q-019",
    quizId: "quiz_html_all_in_one",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element can associate an image with a visible caption?",
    options: [
      { id: "A", text: "<figure> with <figcaption>" },
      { id: "B", text: "<image> with <caption>" },
      { id: "C", text: "<img> with <description>" },
      { id: "D", text: "<media> with <label>" }
    ],
    correctOptionId: "A",
    explanation: "`<figure>` represents self-contained content such as an image, and `<figcaption>` provides its associated caption.",
    tags: ["images", "figure", "figcaption", "semantics"]
  },

  {
    id: "html-all-in-one-q-020",
    quizId: "quiz_html_all_in_one",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used to collect user input that can be submitted?",
    options: [
      { id: "A", text: "<input-form>" },
      { id: "B", text: "<form>" },
      { id: "C", text: "<submit>" },
      { id: "D", text: "<data-form>" }
    ],
    correctOptionId: "B",
    explanation: "The `<form>` element groups controls used for submitting user-provided data and can define how and where that data is submitted.",
    tags: ["forms", "form", "user-input"]
  },

  {
    id: "html-all-in-one-q-021",
    quizId: "quiz_html_all_in_one",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element should normally be associated with a form control to provide its visible label?",
    options: [
      { id: "A", text: "<caption>" },
      { id: "B", text: "<name>" },
      { id: "C", text: "<label>" },
      { id: "D", text: "<description>" }
    ],
    correctOptionId: "C",
    explanation: "The `<label>` element provides a label for a form control and can be associated explicitly using `for` and the control's `id`.",
    tags: ["forms", "label", "accessibility"]
  },

  {
    id: "html-all-in-one-q-022",
    quizId: "quiz_html_all_in_one",
    order: 22,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup correctly associates the label with the input?",
    options: [
      { id: "A", text: "<label id=\"email\">Email</label><input for=\"email\" type=\"email\">" },
      { id: "B", text: "<label target=\"email\">Email</label><input name=\"email\" type=\"email\">" },
      { id: "C", text: "<label href=\"email\">Email</label><input id=\"email\" type=\"email\">" },
      { id: "D", text: "<label for=\"email\">Email</label><input id=\"email\" type=\"email\">" }
    ],
    correctOptionId: "D",
    explanation: "The label's `for` attribute must match the input's `id`. This explicitly associates the two elements and improves usability and accessibility.",
    tags: ["forms", "label", "input", "accessibility"]
  },

  {
    id: "html-all-in-one-q-023",
    quizId: "quiz_html_all_in_one",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which input type is specifically intended for email addresses?",
    options: [
      { id: "A", text: "email" },
      { id: "B", text: "mail" },
      { id: "C", text: "address" },
      { id: "D", text: "text-email" }
    ],
    correctOptionId: "A",
    explanation: "The `email` input type communicates that the control expects an email address and enables appropriate browser validation and input behavior.",
    tags: ["forms", "input", "validation"]
  },

  {
    id: "html-all-in-one-q-024",
    quizId: "quiz_html_all_in_one",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which attribute makes a form control mandatory before successful form submission?",
    options: [
      { id: "A", text: "mandatory" },
      { id: "B", text: "required" },
      { id: "C", text: "must-fill" },
      { id: "D", text: "validate-required" }
    ],
    correctOptionId: "B",
    explanation: "The boolean `required` attribute participates in the browser's built-in constraint validation and prevents submission when the required control is invalid or empty.",
    tags: ["forms", "validation", "required"]
  },

  {
    id: "html-all-in-one-q-025",
    quizId: "quiz_html_all_in_one",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the name attribute on a successful form control?",
    options: [
      { id: "A", text: "It determines the CSS class of the control" },
      { id: "B", text: "It replaces the label automatically" },
      { id: "C", text: "It provides the field name used when constructing submitted form data" },
      { id: "D", text: "It determines the browser tab title" }
    ],
    correctOptionId: "C",
    explanation: "The `name` identifies the form field when its value is included in the form submission data. An input without a relevant `name` generally does not contribute its value to submitted form data.",
    tags: ["forms", "name", "form-submission"]
  },

  {
    id: "html-all-in-one-q-026",
    quizId: "quiz_html_all_in_one",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element creates a multiline text input?",
    options: [
      { id: "A", text: "<input type=\"multiline\">" },
      { id: "B", text: "<text-area-input>" },
      { id: "C", text: "<multiline>" },
      { id: "D", text: "<textarea>" }
    ],
    correctOptionId: "D",
    explanation: "`<textarea>` is designed for multiline user-entered text.",
    tags: ["forms", "textarea", "input"]
  },

  {
    id: "html-all-in-one-q-027",
    quizId: "quiz_html_all_in_one",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the default type of a <button> element when it is inside a form?",
    options: [
      { id: "A", text: "submit" },
      { id: "B", text: "button" },
      { id: "C", text: "reset" },
      { id: "D", text: "action" }
    ],
    correctOptionId: "A",
    explanation: "A `<button>` inside a form defaults to `type=\"submit\"` unless another type is specified. Developers often explicitly use `type=\"button\"` for buttons that should not submit the form.",
    tags: ["forms", "button", "submission"]
  },

  {
    id: "html-all-in-one-q-028",
    quizId: "quiz_html_all_in_one",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which button type should be used for a button inside a form that should perform an action without submitting the form?",
    options: [
      { id: "A", text: "action" },
      { id: "B", text: "button" },
      { id: "C", text: "none" },
      { id: "D", text: "cancel-submit" }
    ],
    correctOptionId: "B",
    explanation: "`type=\"button\"` creates a button with no automatic form-submission behavior. This is useful for actions such as opening a picker or adding an item dynamically.",
    tags: ["forms", "button", "submission"]
  },

  {
    id: "html-all-in-one-q-029",
    quizId: "quiz_html_all_in_one",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents an unordered list?",
    options: [
      { id: "A", text: "<ol>" },
      { id: "B", text: "<list>" },
      { id: "C", text: "<ul>" },
      { id: "D", text: "<items>" }
    ],
    correctOptionId: "C",
    explanation: "`<ul>` represents a list where item order is not inherently meaningful. Individual items are represented using `<li>`.",
    tags: ["lists", "ul", "li"]
  },

  {
    id: "html-all-in-one-q-030",
    quizId: "quiz_html_all_in_one",
    order: 30,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents an ordered list?",
    options: [
      { id: "A", text: "<ul>" },
      { id: "B", text: "<ordered>" },
      { id: "C", text: "<sequence>" },
      { id: "D", text: "<ol>" }
    ],
    correctOptionId: "D",
    explanation: "`<ol>` represents a list where the order of items is meaningful, such as a sequence of steps.",
    tags: ["lists", "ol", "li"]
  },

  {
    id: "html-all-in-one-q-031",
    quizId: "quiz_html_all_in_one",
    order: 31,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents an individual item in an ordered or unordered list?",
    options: [
      { id: "A", text: "<li>" },
      { id: "B", text: "<item>" },
      { id: "C", text: "<list-item>" },
      { id: "D", text: "<entry>" }
    ],
    correctOptionId: "A",
    explanation: "`<li>` represents an individual list item and is normally used inside `<ul>`, `<ol>`, or certain menu-related contexts.",
    tags: ["lists", "li", "semantic-html"]
  },

  {
    id: "html-all-in-one-q-032",
    quizId: "quiz_html_all_in_one",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is used to create a table row?",
    options: [
      { id: "A", text: "<row>" },
      { id: "B", text: "<tr>" },
      { id: "C", text: "<td-row>" },
      { id: "D", text: "<table-row>" }
    ],
    correctOptionId: "B",
    explanation: "`<tr>` represents a table row. Cells inside the row are generally represented using `<td>` or `<th>`.",
    tags: ["tables", "tr", "table-structure"]
  },

  {
    id: "html-all-in-one-q-033",
    quizId: "quiz_html_all_in_one",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element represents a header cell in a table?",
    options: [
      { id: "A", text: "<thead-cell>" },
      { id: "B", text: "<header-cell>" },
      { id: "C", text: "<th>" },
      { id: "D", text: "<tc>" }
    ],
    correctOptionId: "C",
    explanation: "`<th>` represents a table header cell. It provides semantic information about the column or row represented by that cell.",
    tags: ["tables", "th", "accessibility"]
  },

  {
    id: "html-all-in-one-q-034",
    quizId: "quiz_html_all_in_one",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should <th> be used instead of making a normal <td> visually bold for table headers?",
    options: [
      { id: "A", text: "<td> cannot contain text" },
      { id: "B", text: "CSS cannot style <td>" },
      { id: "C", text: "Browsers only display <th> cells" },
      { id: "D", text: "<th> provides semantic header information that assistive technologies can use" }
    ],
    correctOptionId: "D",
    explanation: "Visual styling alone does not communicate table relationships. `<th>` provides semantic information that helps users understand which data cells are associated with which headers.",
    tags: ["tables", "th", "accessibility", "semantics"]
  },

  {
    id: "html-all-in-one-q-035",
    quizId: "quiz_html_all_in_one",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element provides a caption for a table?",
    options: [
      { id: "A", text: "<caption>" },
      { id: "B", text: "<table-caption>" },
      { id: "C", text: "<title>" },
      { id: "D", text: "<label>" }
    ],
    correctOptionId: "A",
    explanation: "The `<caption>` element provides a title or description for a table and helps users understand what the table represents.",
    tags: ["tables", "caption", "accessibility"]
  },

  {
    id: "html-all-in-one-q-036",
    quizId: "quiz_html_all_in_one",
    order: 36,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element embeds video content?",
    options: [
      { id: "A", text: "<movie>" },
      { id: "B", text: "<video>" },
      { id: "C", text: "<media-video>" },
      { id: "D", text: "<film>" }
    ],
    correctOptionId: "B",
    explanation: "The `<video>` element provides native HTML support for embedding video content.",
    tags: ["media", "video", "html5"]
  },

  {
    id: "html-all-in-one-q-037",
    quizId: "quiz_html_all_in_one",
    order: 37,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element embeds audio content?",
    options: [
      { id: "A", text: "<sound>" },
      { id: "B", text: "<music>" },
      { id: "C", text: "<audio>" },
      { id: "D", text: "<audio-player>" }
    ],
    correctOptionId: "C",
    explanation: "The `<audio>` element provides native HTML support for embedding audio resources.",
    tags: ["media", "audio", "html5"]
  },

  {
    id: "html-all-in-one-q-038",
    quizId: "quiz_html_all_in_one",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the controls attribute on <video> or <audio>?",
    options: [
      { id: "A", text: "It automatically downloads the entire media file" },
      { id: "B", text: "It converts the media to another format" },
      { id: "C", text: "It prevents the media from playing" },
      { id: "D", text: "It asks the browser to display native playback controls" }
    ],
    correctOptionId: "D",
    explanation: "The boolean `controls` attribute instructs the browser to provide its native user interface for controlling playback.",
    tags: ["media", "audio", "video", "controls"]
  },

  {
    id: "html-all-in-one-q-039",
    quizId: "quiz_html_all_in_one",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is commonly used to embed another HTML document or external page?",
    options: [
      { id: "A", text: "<iframe>" },
      { id: "B", text: "<embed-page>" },
      { id: "C", text: "<frame-page>" },
      { id: "D", text: "<external>" }
    ],
    correctOptionId: "A",
    explanation: "The `<iframe>` element embeds another browsing context, commonly used for maps, videos, documents, or other external content.",
    tags: ["embedding", "iframe", "external-content"]
  },

  {
    id: "html-all-in-one-q-040",
    quizId: "quiz_html_all_in_one",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which meta element is commonly used to declare the document's character encoding?",
    options: [
      { id: "A", text: "<meta encoding=\"UTF-8\">" },
      { id: "B", text: "<meta charset=\"UTF-8\">" },
      { id: "C", text: "<charset value=\"UTF-8\">" },
      { id: "D", text: "<meta type=\"UTF-8\">" }
    ],
    correctOptionId: "B",
    explanation: "The `charset` attribute on `<meta>` declares the character encoding. UTF-8 is the standard encoding commonly used for modern HTML documents.",
    tags: ["metadata", "charset", "html"]
  },

  {
    id: "html-all-in-one-q-041",
    quizId: "quiz_html_all_in_one",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the viewport meta tag commonly used on responsive websites?",
    options: [
      { id: "A", text: "It changes the browser's default font permanently" },
      { id: "B", text: "It automatically makes every element responsive" },
      { id: "C", text: "It helps control the viewport's layout and scaling behavior on mobile devices" },
      { id: "D", text: "It enables JavaScript execution" }
    ],
    correctOptionId: "C",
    explanation: "The viewport meta tag communicates how the page should be sized and scaled within the device viewport, which is important for responsive layouts.",
    tags: ["metadata", "viewport", "responsive-design"]
  },

  {
    id: "html-all-in-one-q-042",
    quizId: "quiz_html_all_in_one",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which attribute provides a short description of an input's expected value and can disappear when the user types?",
    options: [
      { id: "A", text: "hint" },
      { id: "B", text: "description" },
      { id: "C", text: "input-help" },
      { id: "D", text: "placeholder" }
    ],
    correctOptionId: "D",
    explanation: "`placeholder` provides a hint about expected input. It should not replace a proper `<label>` because placeholder text disappears and is not an adequate persistent label.",
    tags: ["forms", "placeholder", "accessibility"]
  },

  {
    id: "html-all-in-one-q-043",
    quizId: "quiz_html_all_in_one",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "When should ARIA generally be used?",
    options: [
      { id: "A", text: "When native HTML semantics cannot adequately express the required accessibility information or behavior" },
      { id: "B", text: "On every HTML element regardless of need" },
      { id: "C", text: "Instead of using semantic HTML whenever possible" },
      { id: "D", text: "Only to change the visual appearance of elements" }
    ],
    correctOptionId: "A",
    explanation: "Native HTML semantics should generally be preferred. ARIA can supplement or provide semantics when native HTML cannot adequately describe a custom widget or state.",
    tags: ["accessibility", "aria", "semantic-html"]
  },

  {
    id: "html-all-in-one-q-044",
    quizId: "quiz_html_all_in_one",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is replacing a native <button> with a <div> plus role=\"button\" often a poor choice?",
    options: [
      { id: "A", text: "ARIA roles cannot be used on div elements" },
      { id: "B", text: "A native button already provides built-in semantics, keyboard behavior, and interaction support" },
      { id: "C", text: "div elements cannot receive CSS" },
      { id: "D", text: "Buttons cannot contain text" }
    ],
    correctOptionId: "B",
    explanation: "Native controls provide built-in accessibility behavior. Recreating that behavior with a generic element requires additional keyboard handling, focus management, states, and interaction logic.",
    tags: ["accessibility", "aria", "button", "semantic-html"]
  },

  {
    id: "html-all-in-one-q-045",
    quizId: "quiz_html_all_in_one",
    order: 45,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which HTML element is most appropriate for marking up emphasized text semantically?",
    options: [
      { id: "A", text: "<italic>" },
      { id: "B", text: "<i-text>" },
      { id: "C", text: "<em>" },
      { id: "D", text: "<emphasis-style>" }
    ],
    correctOptionId: "C",
    explanation: "`<em>` represents stress emphasis semantically. Its default visual presentation is often italic, but its meaning is more important than its default styling.",
    tags: ["semantic-html", "text", "emphasis"]
  },

  {
    id: "html-all-in-one-q-046",
    quizId: "quiz_html_all_in_one",
    order: 46,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element represents strong importance rather than merely bold visual styling?",
    options: [
      { id: "A", text: "<bold>" },
      { id: "B", text: "<important>" },
      { id: "C", text: "<b-strong>" },
      { id: "D", text: "<strong>" }
    ],
    correctOptionId: "D",
    explanation: "`<strong>` communicates strong importance semantically. Its default appearance is typically bold, but the semantic meaning is the important part.",
    tags: ["semantic-html", "text", "strong"]
  },

  {
    id: "html-all-in-one-q-047",
    quizId: "quiz_html_all_in_one",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is generally best for a page's SEO-friendly structure?",
    options: [
      { id: "A", text: "Use meaningful titles, logical headings, descriptive links, semantic HTML, and useful page content" },
      { id: "B", text: "Add as many keywords as possible to hidden elements" },
      { id: "C", text: "Use only div elements and place keywords in class names" },
      { id: "D", text: "Repeat the same heading dozens of times" }
    ],
    correctOptionId: "A",
    explanation: "Search engines can better understand useful, well-structured content when the HTML communicates document meaning clearly. Semantic structure, descriptive titles and links, and valuable content are more useful than keyword stuffing or hidden text.",
    tags: ["seo", "semantic-html", "headings", "links"]
  },

  {
    id: "html-all-in-one-q-048",
    quizId: "quiz_html_all_in_one",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "A developer creates an image link like this:\n\n<a href=\"/products\">\n  <img src=\"products.png\" alt=\"Products\">\n</a>\n\nWhy is this generally accessible?",
    options: [
      { id: "A", text: "Images automatically receive the text 'Products' as a heading" },
      { id: "B", text: "The image's alt text can provide the accessible name for the link" },
      { id: "C", text: "The browser converts every image into a button" },
      { id: "D", text: "The href attribute automatically creates alt text" }
    ],
    correctOptionId: "B",
    explanation: "When an image is the content of a link, its alternative text can serve as the accessible name of that link. Here, 'Products' communicates the destination's purpose.",
    tags: ["accessibility", "images", "alt", "links"]
  },

  {
    id: "html-all-in-one-q-049",
    quizId: "quiz_html_all_in_one",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A developer writes:\n\n<form>\n  <input type=\"text\" placeholder=\"Enter your name\">\n  <button>Save</button>\n</form>\n\nWhat is the biggest accessibility issue with this markup?",
    options: [
      { id: "A", text: "Forms cannot contain buttons" },
      { id: "B", text: "Text inputs cannot use placeholder attributes" },
      { id: "C", text: "The input has no proper persistent label" },
      { id: "D", text: "Buttons cannot be placed after inputs" }
    ],
    correctOptionId: "C",
    explanation: "A placeholder is only a temporary hint and disappears when the user enters text. A proper `<label>` should identify the field persistently and accessibly.",
    tags: ["forms", "accessibility", "label", "placeholder"]
  },

  {
    id: "html-all-in-one-q-050",
    quizId: "quiz_html_all_in_one",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "You are building a blog article page. Which structure is the most semantically appropriate?",
    options: [
      { id: "A", text: "<div><div>site header</div><div><span>Post title</span><div>Post content</div></div><div>site footer</div></div>" },
      { id: "B", text: "<header><footer>Post title</footer></header><main><div>Post content</div></main>" },
      { id: "C", text: "<nav><h1>Post title</h1></nav><aside><p>Post content</p></aside>" },
      { id: "D", text: "<header>site header/navigation</header><main><article><h1>Post title</h1><p>Post content</p></article></main><footer>site footer</footer>" }
    ],
    correctOptionId: "D",
    explanation: "The first structure communicates the document hierarchy clearly: site-level introductory/navigation content in `header`, the primary content in `main`, the self-contained post in `article`, and site-level closing information in `footer`. Semantic HTML provides useful structure for users, assistive technologies, and other consumers of the document.",
    tags: ["semantic-html", "article", "main", "header", "footer", "accessibility", "seo"]
  }
];

export default htmlAllInOneQuestions;