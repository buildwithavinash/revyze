const htmlFundamentalsQuestions = [
  {
    id: "html-fundamentals-q-001",
    quizId: "quiz_html_fundamentals",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does HTML stand for?",
    options: [
      { id: "A", text: "HyperText Markup Language" },
      { id: "B", text: "HighText Machine Language" },
      { id: "C", text: "Hyperlink Text Management Language" },
      { id: "D", text: "Home Tool Markup Language" }
    ],
    correctOptionId: "A",
    explanation: "HTML stands for HyperText Markup Language. It is the markup language used to structure content on the web.",
    tags: ["html", "fundamentals", "syntax"]
  },

  {
    id: "html-fundamentals-q-002",
    quizId: "quiz_html_fundamentals",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of HTML?",
    options: [
      { id: "A", text: "To style every element with colors and animations" },
      { id: "B", text: "To structure and describe the content of a web document" },
      { id: "C", text: "To create database tables" },
      { id: "D", text: "To execute server-side JavaScript" }
    ],
    correctOptionId: "B",
    explanation: "HTML provides the structure and meaning of web content. CSS is primarily responsible for presentation, while JavaScript provides behavior and interactivity.",
    tags: ["html", "structure", "fundamentals"]
  },

  {
    id: "html-fundamentals-q-003",
    quizId: "quiz_html_fundamentals",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which declaration is normally placed at the beginning of a modern HTML document?",
    options: [
      { id: "A", text: "<DOCTYPE HTML5>" },
      { id: "B", text: "<html version=\"5\">" },
      { id: "C", text: "<!DOCTYPE html>" },
      { id: "D", text: "<meta doctype=\"html\">" }
    ],
    correctOptionId: "C",
    explanation: "`<!DOCTYPE html>` is the HTML5 doctype declaration. It tells the browser to interpret the document using standards mode.",
    tags: ["doctype", "html5", "document-structure"]
  },

  {
    id: "html-fundamentals-q-004",
    quizId: "quiz_html_fundamentals",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is the root element of an HTML document?",
    options: [
      { id: "A", text: "<body>" },
      { id: "B", text: "<document>" },
      { id: "C", text: "<root>" },
      { id: "D", text: "<html>" }
    ],
    correctOptionId: "D",
    explanation: "The `<html>` element is the root of the document and contains the `<head>` and `<body>` elements.",
    tags: ["html", "root-element", "document-structure"]
  },

  {
    id: "html-fundamentals-q-005",
    quizId: "quiz_html_fundamentals",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which two elements are the primary children of the <html> element?",
    options: [
      { id: "A", text: "<head> and <body>" },
      { id: "B", text: "<header> and <footer>" },
      { id: "C", text: "<main> and <section>" },
      { id: "D", text: "<title> and <p>" }
    ],
    correctOptionId: "A",
    explanation: "An HTML document normally contains a `<head>` for metadata and resources and a `<body>` for the document's visible/content-oriented content.",
    tags: ["html", "head", "body", "document-structure"]
  },

  {
    id: "html-fundamentals-q-006",
    quizId: "quiz_html_fundamentals",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the <head> element?",
    options: [
      { id: "A", text: "To contain all visible page content" },
      { id: "B", text: "To contain document metadata and linked resources" },
      { id: "C", text: "To contain only the website header" },
      { id: "D", text: "To contain JavaScript variables" }
    ],
    correctOptionId: "B",
    explanation: "The `<head>` contains metadata and resources such as the document title, character encoding, stylesheets, and other information about the document.",
    tags: ["head", "metadata", "document-structure"]
  },

  {
    id: "html-fundamentals-q-007",
    quizId: "quiz_html_fundamentals",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the <body> element?",
    options: [
      { id: "A", text: "To define only the browser tab title" },
      { id: "B", text: "To store HTTP request headers" },
      { id: "C", text: "To contain the document's main content presented to the user" },
      { id: "D", text: "To define the HTML version" }
    ],
    correctOptionId: "C",
    explanation: "The `<body>` contains the content of the HTML document, including headings, paragraphs, images, links, forms, and other page content.",
    tags: ["body", "document-structure", "html"]
  },

  {
    id: "html-fundamentals-q-008",
    quizId: "quiz_html_fundamentals",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element defines the title of the HTML document?",
    options: [
      { id: "A", text: "<h1>" },
      { id: "B", text: "<heading>" },
      { id: "C", text: "<document-title>" },
      { id: "D", text: "<title>" }
    ],
    correctOptionId: "D",
    explanation: "The `<title>` element defines the document title, which browsers commonly display in the browser tab or window title.",
    tags: ["title", "head", "metadata"]
  },

  {
    id: "html-fundamentals-q-009",
    quizId: "quiz_html_fundamentals",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "Where should the <title> element normally be placed?",
    options: [
      { id: "A", text: "Inside <head>" },
      { id: "B", text: "Inside <body>" },
      { id: "C", text: "Inside <footer>" },
      { id: "D", text: "Inside <main>" }
    ],
    correctOptionId: "A",
    explanation: "The document title is metadata, so the `<title>` element belongs inside the `<head>` element.",
    tags: ["title", "head", "metadata"]
  },

  {
    id: "html-fundamentals-q-010",
    quizId: "quiz_html_fundamentals",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element creates the largest heading level in HTML?",
    options: [
      { id: "A", text: "<h6>" },
      { id: "B", text: "<h1>" },
      { id: "C", text: "<heading>" },
      { id: "D", text: "<h0>" }
    ],
    correctOptionId: "B",
    explanation: "HTML provides heading elements from `<h1>` through `<h6>`, with `<h1>` representing the highest heading level.",
    tags: ["headings", "h1", "html-elements"]
  },

  {
    id: "html-fundamentals-q-011",
    quizId: "quiz_html_fundamentals",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents a paragraph?",
    options: [
      { id: "A", text: "<paragraph>" },
      { id: "B", text: "<text>" },
      { id: "C", text: "<p>" },
      { id: "D", text: "<para>" }
    ],
    correctOptionId: "C",
    explanation: "The `<p>` element represents a paragraph of text.",
    tags: ["paragraphs", "p", "text"]
  },

  {
    id: "html-fundamentals-q-012",
    quizId: "quiz_html_fundamentals",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "What will the browser interpret this as?\n\n<h1>Welcome</h1>\n<p>Hello, developer!</p>",
    options: [
      { id: "A", text: "Two paragraphs" },
      { id: "B", text: "One heading containing a paragraph" },
      { id: "C", text: "Invalid HTML because headings cannot contain text" },
      { id: "D", text: "A heading followed by a paragraph" }
    ],
    correctOptionId: "D",
    explanation: "The `<h1>` creates a heading and the `<p>` creates a separate paragraph. Both are valid elements inside the document body.",
    tags: ["headings", "paragraphs", "html-structure"]
  },

  {
    id: "html-fundamentals-q-013",
    quizId: "quiz_html_fundamentals",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an HTML element?",
    options: [
      { id: "A", text: "A complete piece of markup such as <p>Hello</p>" },
      { id: "B", text: "Only the opening tag" },
      { id: "C", text: "Only the text inside a tag" },
      { id: "D", text: "Only an HTML attribute" }
    ],
    correctOptionId: "A",
    explanation: "An element generally consists of an opening tag, content where applicable, and a closing tag. Some elements are void elements and do not have closing tags.",
    tags: ["elements", "tags", "syntax"]
  },

  {
    id: "html-fundamentals-q-014",
    quizId: "quiz_html_fundamentals",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an HTML attribute?",
    options: [
      { id: "A", text: "The visible text between two tags" },
      { id: "B", text: "Additional information specified on an element's opening tag" },
      { id: "C", text: "A replacement for the element itself" },
      { id: "D", text: "A CSS declaration" }
    ],
    correctOptionId: "B",
    explanation: "Attributes provide additional information or configuration for an element, such as `id`, `class`, `href`, and `src`.",
    tags: ["attributes", "syntax", "html-elements"]
  },

  {
    id: "html-fundamentals-q-015",
    quizId: "quiz_html_fundamentals",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "In this markup, what is `href`?\n\n<a href=\"/about\">About</a>",
    options: [
      { id: "A", text: "An element" },
      { id: "B", text: "The tag name" },
      { id: "C", text: "An attribute" },
      { id: "D", text: "Text content" }
    ],
    correctOptionId: "C",
    explanation: "`href` is an attribute of the `<a>` element. It specifies the destination of the hyperlink.",
    tags: ["attributes", "anchor", "href"]
  },

  {
    id: "html-fundamentals-q-016",
    quizId: "quiz_html_fundamentals",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element creates a hyperlink?",
    options: [
      { id: "A", text: "<link>" },
      { id: "B", text: "<href>" },
      { id: "C", text: "<url>" },
      { id: "D", text: "<a>" }
    ],
    correctOptionId: "D",
    explanation: "The `<a>` element creates hyperlinks. The `href` attribute specifies where the link points.",
    tags: ["links", "anchor", "href"]
  },

  {
    id: "html-fundamentals-q-017",
    quizId: "quiz_html_fundamentals",
    order: 17,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup correctly links to an About page?",
    options: [
      { id: "A", text: "<a href=\"/about\">About</a>" },
      { id: "B", text: "<link href=\"/about\">About</link>" },
      { id: "C", text: "<a src=\"/about\">About</a>" },
      { id: "D", text: "<href=\"/about\">About</href>" }
    ],
    correctOptionId: "A",
    explanation: "The anchor element uses `href` to specify its destination. The text between the tags is the link's content.",
    tags: ["links", "anchor", "href"]
  },

  {
    id: "html-fundamentals-q-018",
    quizId: "quiz_html_fundamentals",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used to display an image?",
    options: [
      { id: "A", text: "<image>" },
      { id: "B", text: "<img>" },
      { id: "C", text: "<picture-image>" },
      { id: "D", text: "<photo>" }
    ],
    correctOptionId: "B",
    explanation: "The `<img>` element embeds an image resource into the document.",
    tags: ["images", "img", "media"]
  },

  {
    id: "html-fundamentals-q-019",
    quizId: "quiz_html_fundamentals",
    order: 19,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup correctly displays an image located at /images/logo.png?",
    options: [
      { id: "A", text: "<image href=\"/images/logo.png\">Logo</image>" },
      { id: "B", text: "<img href=\"/images/logo.png\">Logo</img>" },
      { id: "C", text: "<img src=\"/images/logo.png\" alt=\"Logo\">" },
      { id: "D", text: "<photo src=\"/images/logo.png\"></photo>" }
    ],
    correctOptionId: "C",
    explanation: "The `src` attribute specifies the image resource, while `alt` provides a text alternative.",
    tags: ["images", "img", "src", "alt"]
  },

  {
    id: "html-fundamentals-q-020",
    quizId: "quiz_html_fundamentals",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the src attribute on an <img> element?",
    options: [
      { id: "A", text: "It specifies the image's alternative text" },
      { id: "B", text: "It specifies the image's CSS class" },
      { id: "C", text: "It specifies the image's heading" },
      { id: "D", text: "It specifies the image resource to load" }
    ],
    correctOptionId: "D",
    explanation: "`src` stands for source and specifies the URL or path from which the browser should load the image.",
    tags: ["images", "src", "attributes"]
  },

  {
    id: "html-fundamentals-q-021",
    quizId: "quiz_html_fundamentals",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the alt attribute on an image?",
    options: [
      { id: "A", text: "To provide a text alternative describing the image's purpose" },
      { id: "B", text: "To change the image's width" },
      { id: "C", text: "To specify the image file path" },
      { id: "D", text: "To make the image load faster" }
    ],
    correctOptionId: "A",
    explanation: "The `alt` attribute provides alternative text for an image and is important when the image cannot be perceived, including for users of assistive technologies.",
    tags: ["images", "alt", "accessibility"]
  },

  {
    id: "html-fundamentals-q-022",
    quizId: "quiz_html_fundamentals",
    order: 22,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element creates an unordered list?",
    options: [
      { id: "A", text: "<ol>" },
      { id: "B", text: "<ul>" },
      { id: "C", text: "<list>" },
      { id: "D", text: "<unordered>" }
    ],
    correctOptionId: "B",
    explanation: "`<ul>` represents an unordered list. Individual items are normally represented using `<li>`.",
    tags: ["lists", "ul", "li"]
  },

  {
    id: "html-fundamentals-q-023",
    quizId: "quiz_html_fundamentals",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element creates an ordered list?",
    options: [
      { id: "A", text: "<ul>" },
      { id: "B", text: "<ordered>" },
      { id: "C", text: "<ol>" },
      { id: "D", text: "<sequence>" }
    ],
    correctOptionId: "C",
    explanation: "`<ol>` represents an ordered list where the sequence of items has meaning.",
    tags: ["lists", "ol", "li"]
  },

  {
    id: "html-fundamentals-q-024",
    quizId: "quiz_html_fundamentals",
    order: 24,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup correctly creates a list containing two items?",
    options: [
      { id: "A", text: "<list><item>HTML</item><item>CSS</item></list>" },
      { id: "B", text: "<ul><item>HTML</item><item>CSS</item></ul>" },
      { id: "C", text: "<ol><ul>HTML</ul><ul>CSS</ul></ol>" },
      { id: "D", text: "<ul><li>HTML</li><li>CSS</li></ul>" }
    ],
    correctOptionId: "D",
    explanation: "A `<ul>` contains `<li>` elements, with each `<li>` representing one list item.",
    tags: ["lists", "ul", "li", "html-structure"]
  },

  {
    id: "html-fundamentals-q-025",
    quizId: "quiz_html_fundamentals",
    order: 25,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents a generic block-level container with no specific semantic meaning?",
    options: [
      { id: "A", text: "<div>" },
      { id: "B", text: "<block>" },
      { id: "C", text: "<container>" },
      { id: "D", text: "<box>" }
    ],
    correctOptionId: "A",
    explanation: "`<div>` is a generic container with no inherent semantic meaning. It is often used when no more appropriate semantic element exists.",
    tags: ["div", "containers", "html-elements"]
  },

  {
    id: "html-fundamentals-q-026",
    quizId: "quiz_html_fundamentals",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is a generic inline container with no inherent semantic meaning?",
    options: [
      { id: "A", text: "<inline>" },
      { id: "B", text: "<span>" },
      { id: "C", text: "<text-container>" },
      { id: "D", text: "<inline-box>" }
    ],
    correctOptionId: "B",
    explanation: "`<span>` is a generic inline container commonly used when a piece of text or inline content needs styling or scripting hooks.",
    tags: ["span", "inline", "containers"]
  },

  {
    id: "html-fundamentals-q-027",
    quizId: "quiz_html_fundamentals",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used to create a table?",
    options: [
      { id: "A", text: "<tab>" },
      { id: "B", text: "<data-table>" },
      { id: "C", text: "<table>" },
      { id: "D", text: "<grid>" }
    ],
    correctOptionId: "C",
    explanation: "The `<table>` element represents tabular data. Rows and cells are created using elements such as `<tr>`, `<td>`, and `<th>`.",
    tags: ["tables", "table", "html-elements"]
  },

  {
    id: "html-fundamentals-q-028",
    quizId: "quiz_html_fundamentals",
    order: 28,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents a table row?",
    options: [
      { id: "A", text: "<row>" },
      { id: "B", text: "<table-row>" },
      { id: "C", text: "<r>" },
      { id: "D", text: "<tr>" }
    ],
    correctOptionId: "D",
    explanation: "`<tr>` stands for table row and contains table cells such as `<td>` or `<th>`.",
    tags: ["tables", "tr", "rows"]
  },

  {
    id: "html-fundamentals-q-029",
    quizId: "quiz_html_fundamentals",
    order: 29,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents a normal data cell in a table?",
    options: [
      { id: "A", text: "<td>" },
      { id: "B", text: "<cell>" },
      { id: "C", text: "<data>" },
      { id: "D", text: "<tc>" }
    ],
    correctOptionId: "A",
    explanation: "`<td>` represents a table data cell.",
    tags: ["tables", "td", "cells"]
  },

  {
    id: "html-fundamentals-q-030",
    quizId: "quiz_html_fundamentals",
    order: 30,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element represents a table header cell?",
    options: [
      { id: "A", text: "<thead-cell>" },
      { id: "B", text: "<th>" },
      { id: "C", text: "<header>" },
      { id: "D", text: "<tc>" }
    ],
    correctOptionId: "B",
    explanation: "`<th>` represents a header cell in a table and communicates that the cell provides header information.",
    tags: ["tables", "th", "headers"]
  },

  {
    id: "html-fundamentals-q-031",
    quizId: "quiz_html_fundamentals",
    order: 31,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used to create a form?",
    options: [
      { id: "A", text: "<input-form>" },
      { id: "B", text: "<fields>" },
      { id: "C", text: "<form>" },
      { id: "D", text: "<form-container>" }
    ],
    correctOptionId: "C",
    explanation: "The `<form>` element groups controls used to collect and submit user-provided information.",
    tags: ["forms", "form", "user-input"]
  },

  {
    id: "html-fundamentals-q-032",
    quizId: "quiz_html_fundamentals",
    order: 32,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used for a basic single-line form control?",
    options: [
      { id: "A", text: "<field>" },
      { id: "B", text: "<textbox>" },
      { id: "C", text: "<control>" },
      { id: "D", text: "<input>" }
    ],
    correctOptionId: "D",
    explanation: "The `<input>` element represents a form control. Its `type` attribute determines what kind of input it provides.",
    tags: ["forms", "input", "controls"]
  },

  {
    id: "html-fundamentals-q-033",
    quizId: "quiz_html_fundamentals",
    order: 33,
    type: "code",
    difficulty: "Beginner",
    question: "What type of input does this create?\n\n<input type=\"text\">",
    options: [
      { id: "A", text: "A single-line text input" },
      { id: "B", text: "A password input" },
      { id: "C", text: "A checkbox" },
      { id: "D", text: "A submit button" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"text\"` creates a single-line text input control.",
    tags: ["forms", "input", "text"]
  },

  {
    id: "html-fundamentals-q-034",
    quizId: "quiz_html_fundamentals",
    order: 34,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element provides a visible label for a form control?",
    options: [
      { id: "A", text: "<caption>" },
      { id: "B", text: "<label>" },
      { id: "C", text: "<name>" },
      { id: "D", text: "<form-label>" }
    ],
    correctOptionId: "B",
    explanation: "The `<label>` element identifies a form control and improves usability and accessibility.",
    tags: ["forms", "label", "accessibility"]
  },

  {
    id: "html-fundamentals-q-035",
    quizId: "quiz_html_fundamentals",
    order: 35,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup correctly associates the label with the input?",
    options: [
      { id: "A", text: "<label id=\"name\">Name</label><input for=\"name\" type=\"text\">" },
      { id: "B", text: "<label href=\"name\">Name</label><input id=\"name\" type=\"text\">" },
      { id: "C", text: "<label for=\"name\">Name</label><input id=\"name\" type=\"text\">" },
      { id: "D", text: "<label target=\"name\">Name</label><input name=\"name\" type=\"text\">" }
    ],
    correctOptionId: "C",
    explanation: "The label's `for` attribute is matched with the input's `id`, creating an explicit association between them.",
    tags: ["forms", "label", "id", "accessibility"]
  },

  {
    id: "html-fundamentals-q-036",
    quizId: "quiz_html_fundamentals",
    order: 36,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element creates a button?",
    options: [
      { id: "A", text: "<btn>" },
      { id: "B", text: "<control-button>" },
      { id: "C", text: "<click>" },
      { id: "D", text: "<button>" }
    ],
    correctOptionId: "D",
    explanation: "The `<button>` element represents a clickable button and can be used for actions or form submission.",
    tags: ["buttons", "forms", "html-elements"]
  },

  {
    id: "html-fundamentals-q-037",
    quizId: "quiz_html_fundamentals",
    order: 37,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used for multiline text input?",
    options: [
      { id: "A", text: "<textarea>" },
      { id: "B", text: "<input type=\"multiline\">" },
      { id: "C", text: "<multiline>" },
      { id: "D", text: "<text-box>" }
    ],
    correctOptionId: "A",
    explanation: "`<textarea>` is designed for entering multiple lines of text, such as comments or messages.",
    tags: ["forms", "textarea", "input"]
  },

  {
    id: "html-fundamentals-q-038",
    quizId: "quiz_html_fundamentals",
    order: 38,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element provides a line break within text?",
    options: [
      { id: "A", text: "<break>" },
      { id: "B", text: "<br>" },
      { id: "C", text: "<lb>" },
      { id: "D", text: "<newline>" }
    ],
    correctOptionId: "B",
    explanation: "`<br>` represents a line break. It is a void element and does not require a closing tag.",
    tags: ["br", "text", "void-elements"]
  },

  {
    id: "html-fundamentals-q-039",
    quizId: "quiz_html_fundamentals",
    order: 39,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which statement about <br> is correct?",
    options: [
      { id: "A", text: "It must always contain text" },
      { id: "B", text: "It creates a new paragraph semantically" },
      { id: "C", text: "It is a void element and does not have a closing tag" },
      { id: "D", text: "It can only be used inside forms" }
    ],
    correctOptionId: "C",
    explanation: "`<br>` is a void element. It creates a line break but does not represent a new paragraph.",
    tags: ["br", "void-elements", "paragraphs"]
  },

  {
    id: "html-fundamentals-q-040",
    quizId: "quiz_html_fundamentals",
    order: 40,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used to add a horizontal thematic break?",
    options: [
      { id: "A", text: "<line>" },
      { id: "B", text: "<horizontal>" },
      { id: "C", text: "<break-line>" },
      { id: "D", text: "<hr>" }
    ],
    correctOptionId: "D",
    explanation: "`<hr>` represents a thematic break between sections of content. Its default visual appearance can be changed with CSS.",
    tags: ["hr", "semantic-html", "void-elements"]
  },

  {
    id: "html-fundamentals-q-041",
    quizId: "quiz_html_fundamentals",
    order: 41,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute gives an element a unique identifier within a document?",
    options: [
      { id: "A", text: "id" },
      { id: "B", text: "unique" },
      { id: "C", text: "identifier" },
      { id: "D", text: "key" }
    ],
    correctOptionId: "A",
    explanation: "The `id` attribute identifies an element uniquely within the document and can be used by CSS, JavaScript, fragment links, and labels.",
    tags: ["id", "attributes", "html"]
  },

  {
    id: "html-fundamentals-q-042",
    quizId: "quiz_html_fundamentals",
    order: 42,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of the class attribute?",
    options: [
      { id: "A", text: "To give every element a unique identifier" },
      { id: "B", text: "To assign one or more reusable class names to an element" },
      { id: "C", text: "To define the element's HTML tag" },
      { id: "D", text: "To specify an element's URL" }
    ],
    correctOptionId: "B",
    explanation: "The `class` attribute assigns one or more class names that can be used by CSS and JavaScript. Unlike `id`, class names can be shared by many elements.",
    tags: ["class", "attributes", "css-hooks"]
  },

  {
    id: "html-fundamentals-q-043",
    quizId: "quiz_html_fundamentals",
    order: 43,
    type: "code",
    difficulty: "Intermediate",
    question: "What is wrong with this markup if the developer intends to give two elements the same class?\n\n<p class=\"card\">One</p>\n<p class=\"card\">Two</p>",
    options: [
      { id: "A", text: "The class must be unique like an id" },
      { id: "B", text: "Only one element can have a class attribute" },
      { id: "C", text: "Nothing; using the same class on multiple elements is valid" },
      { id: "D", text: "Class names must contain numbers" }
    ],
    correctOptionId: "C",
    explanation: "Classes are intentionally reusable. Multiple elements can share the same class name, which is commonly used for applying shared styles or behavior.",
    tags: ["class", "attributes", "css-hooks"]
  },

  {
    id: "html-fundamentals-q-044",
    quizId: "quiz_html_fundamentals",
    order: 44,
    type: "code",
    difficulty: "Intermediate",
    question: "Which structure is correctly nested?",
    options: [
      { id: "A", text: "<div><p>Hello</div></p>" },
      { id: "B", text: "<p><div>Hello</p></div>" },
      { id: "C", text: "<section><h1>Title</section></h1>" },
      { id: "D", text: "<div><p>Hello</p></div>" }
    ],
    correctOptionId: "D",
    explanation: "HTML elements should be properly nested so that an element opened inside another element is closed before the parent element closes.",
    tags: ["nesting", "syntax", "html-structure"]
  },

  {
    id: "html-fundamentals-q-045",
    quizId: "quiz_html_fundamentals",
    order: 45,
    type: "code",
    difficulty: "Intermediate",
    question: "Which document is structurally the most appropriate?",
    options: [
      { id: "A", text: "<!DOCTYPE html><html><head><title>My Page</title></head><body><h1>Hello</h1></body></html>" },
      { id: "B", text: "<!DOCTYPE html><head><body><title>My Page</title><h1>Hello</h1></body></head>" },
      { id: "C", text: "<html><body><head><h1>Hello</h1></head></body></html>" },
      { id: "D", text: "<html><title>My Page</title><head></head><h1>Hello</h1></html>" }
    ],
    correctOptionId: "A",
    explanation: "The first option follows the basic document structure: doctype, root `<html>`, `<head>` containing metadata such as `<title>`, and `<body>` containing page content.",
    tags: ["document-structure", "doctype", "head", "body"]
  },

  {
    id: "html-fundamentals-q-046",
    quizId: "quiz_html_fundamentals",
    order: 46,
    type: "code",
    difficulty: "Intermediate",
    question: "A developer wants a clickable link that opens /contact. Which option is correct?",
    options: [
      { id: "A", text: "<button href=\"/contact\">Contact</button>" },
      { id: "B", text: "<a href=\"/contact\">Contact</a>" },
      { id: "C", text: "<link src=\"/contact\">Contact</link>" },
      { id: "D", text: "<a src=\"/contact\">Contact</a>" }
    ],
    correctOptionId: "B",
    explanation: "Navigation to another URL is the purpose of an anchor element. The `href` attribute specifies the destination.",
    tags: ["links", "anchor", "href", "navigation"]
  },

  {
    id: "html-fundamentals-q-047",
    quizId: "quiz_html_fundamentals",
    order: 47,
    type: "code",
    difficulty: "Intermediate",
    question: "A developer wants to display a profile picture. Which markup is the best basic choice?",
    options: [
      { id: "A", text: "<image href=\"profile.jpg\">Profile picture</image>" },
      { id: "B", text: "<picture src=\"profile.jpg\">Profile picture</picture>" },
      { id: "C", text: "<img src=\"profile.jpg\" alt=\"Profile picture\">" },
      { id: "D", text: "<img href=\"profile.jpg\">Profile picture</img>" }
    ],
    correctOptionId: "C",
    explanation: "`<img>` uses `src` for the image resource and `alt` for its text alternative. This gives both the browser and assistive technologies the appropriate information.",
    tags: ["images", "img", "src", "alt", "accessibility"]
  },

  {
    id: "html-fundamentals-q-048",
    quizId: "quiz_html_fundamentals",
    order: 48,
    type: "code",
    difficulty: "Intermediate",
    question: "A developer wants three navigation links displayed as a list. Which HTML structure best represents the content?",
    options: [
      { id: "A", text: "<nav><div><link href=\"/\">Home</link><link href=\"/about\">About</link><link href=\"/contact\">Contact</link></div></nav>" },
      { id: "B", text: "<links><item>Home</item><item>About</item><item>Contact</item></links>" },
      { id: "C", text: "<nav><p href=\"/\">Home</p><p href=\"/about\">About</p><p href=\"/contact\">Contact</p></nav>" },
      { id: "D", text: "<nav><ul><li><a href=\"/\">Home</a></li><li><a href=\"/about\">About</a></li><li><a href=\"/contact\">Contact</a></li></ul></nav>" }
    ],
    correctOptionId: "D",
    explanation: "The first structure uses semantic navigation, a list to represent the collection of links, list items for each entry, and anchors for the actual destinations.",
    tags: ["navigation", "nav", "lists", "links", "semantic-html"]
  },

  {
    id: "html-fundamentals-q-049",
    quizId: "quiz_html_fundamentals",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A developer writes:\n\n<h1>My Website</h1>\n<p>This is my introduction.</p>\n<h2>Projects</h2>\n<p>Here are my projects.</p>\n\nWhat is the main structural relationship represented here?",
    options: [
      { id: "A", text: "Projects is a subsection under the main page heading" },
      { id: "B", text: "The h2 is always visually larger than the h1" },
      { id: "C", text: "The paragraphs automatically become headings" },
      { id: "D", text: "The h1 and h2 have no semantic relationship" }
    ],
    correctOptionId: "A",
    explanation: "Heading levels communicate hierarchy. An `<h2>` commonly represents a subsection of the preceding `<h1>`-level topic, creating a logical document outline.",
    tags: ["headings", "hierarchy", "semantic-html"]
  },

  {
    id: "html-fundamentals-q-050",
    quizId: "quiz_html_fundamentals",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "You are creating a simple personal portfolio page. Which structure gives the strongest basic HTML foundation?",
    options: [
      { id: "A", text: "<html><body><div>Avinash</div><div>Projects</div><div>Frontend developer</div></body></html>" },
      { id: "B", text: "<!DOCTYPE html><html><head><title>Avinash Portfolio</title></head><body><header><h1>Avinash</h1><nav><a href=\"/projects\">Projects</a></nav></header><main><section><h2>About Me</h2><p>Frontend developer.</p></section></main><footer><p>Copyright</p></footer></body></html>" },
      { id: "C", text: "<!DOCTYPE html><head><h1>Avinash</h1><p>Frontend developer</p></head><body><title>Portfolio</title></body>" },
      { id: "D", text: "<html><header><title>Portfolio</title></header><footer><h1>Avinash</h1></footer></html>" }
    ],
    correctOptionId: "B",
    explanation: "The first structure establishes the correct document foundation and uses semantic elements to communicate the purpose of different regions: metadata in `head`, introductory/navigation content in `header`, primary content in `main`, a subsection with `section`, and closing information in `footer`.",
    tags: ["document-structure", "semantic-html", "headings", "navigation", "main", "html-fundamentals"]
  }
];

export default htmlFundamentalsQuestions;