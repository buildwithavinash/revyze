const javascriptDomEventsQuestions = [
  {
    id: "javascript-dom-events-q-001",
    quizId: "quiz_javascript_dom_events",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the DOM represent?",
    options: [
      { id: "A", text: "A programming interface representing an HTML document as a tree of objects" },
      { id: "B", text: "A database containing website files" },
      { id: "C", text: "A CSS compiler" },
      { id: "D", text: "A JavaScript package manager" }
    ],
    correctOptionId: "A",
    explanation: "The Document Object Model represents an HTML document as a tree of objects that JavaScript can inspect and manipulate.",
    tags: ["dom", "document", "fundamentals"]
  },

  {
    id: "javascript-dom-events-q-002",
    quizId: "quiz_javascript_dom_events",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which object represents the currently loaded HTML document?",
    options: [
      { id: "A", text: "document" },
      { id: "B", text: "window.documentHTML" },
      { id: "C", text: "html" },
      { id: "D", text: "page" }
    ],
    correctOptionId: "A",
    explanation: "The global `document` object represents the currently loaded HTML document and provides APIs for querying and manipulating it.",
    tags: ["dom", "document", "browser"]
  },

  {
    id: "javascript-dom-events-q-003",
    quizId: "quiz_javascript_dom_events",
    order: 3,
    type: "code",
    difficulty: "Beginner",
    question: "Given `<h1 id=\"title\">Hello</h1>`, what does this return?\n\nconst title = document.getElementById(\"title\");",
    options: [
      { id: "A", text: "The h1 Element object" },
      { id: "B", text: "The text \"Hello\"" },
      { id: "C", text: "An array containing the h1" },
      { id: "D", text: "The string \"title\"" }
    ],
    correctOptionId: "A",
    explanation: "`getElementById()` searches the document for an element whose `id` matches the supplied string and returns that Element object.",
    tags: ["dom", "getElementById", "selection"]
  },

  {
    id: "javascript-dom-events-q-004",
    quizId: "quiz_javascript_dom_events",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What happens if `document.getElementById(\"missing\")` cannot find an element?",
    options: [
      { id: "A", text: "It returns null" },
      { id: "B", text: "It returns undefined" },
      { id: "C", text: "It throws a SyntaxError" },
      { id: "D", text: "It creates the element automatically" }
    ],
    correctOptionId: "A",
    explanation: "`getElementById()` returns `null` when no matching element exists.",
    tags: ["dom", "getElementById", "null"]
  },

  {
    id: "javascript-dom-events-q-005",
    quizId: "quiz_javascript_dom_events",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method selects the first element matching a CSS selector?",
    options: [
      { id: "A", text: "querySelector()" },
      { id: "B", text: "queryAll()" },
      { id: "C", text: "selectFirst()" },
      { id: "D", text: "getSelector()" }
    ],
    correctOptionId: "A",
    explanation: "`querySelector()` accepts a CSS selector and returns the first matching Element, or `null` if there is no match.",
    tags: ["dom", "querySelector", "selection"]
  },

  {
    id: "javascript-dom-events-q-006",
    quizId: "quiz_javascript_dom_events",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method returns all elements matching a CSS selector?",
    options: [
      { id: "A", text: "querySelectorAll()" },
      { id: "B", text: "querySelector()" },
      { id: "C", text: "getElements()" },
      { id: "D", text: "selectAll()" }
    ],
    correctOptionId: "A",
    explanation: "`querySelectorAll()` returns a static NodeList containing all elements matching the supplied CSS selector.",
    tags: ["dom", "querySelectorAll", "selection"]
  },

  {
    id: "javascript-dom-events-q-007",
    quizId: "quiz_javascript_dom_events",
    order: 7,
    type: "code",
    difficulty: "Beginner",
    question: "Given `<p class=\"item\">A</p><p class=\"item\">B</p>`, what is the length of this result?\n\nconst items = document.querySelectorAll(\".item\");",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "1" },
      { id: "C", text: "0" },
      { id: "D", text: "undefined" }
    ],
    correctOptionId: "A",
    explanation: "Both paragraphs match `.item`, so the returned NodeList contains two elements.",
    tags: ["dom", "querySelectorAll", "css-selectors"]
  },

  {
    id: "javascript-dom-events-q-008",
    quizId: "quiz_javascript_dom_events",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property is commonly used to read or replace an element's HTML content?",
    options: [
      { id: "A", text: "innerHTML" },
      { id: "B", text: "htmlContent" },
      { id: "C", text: "contentHTML" },
      { id: "D", text: "elementHTML" }
    ],
    correctOptionId: "A",
    explanation: "`innerHTML` gets or sets the HTML markup contained inside an element.",
    tags: ["dom", "innerHTML", "content"]
  },

  {
    id: "javascript-dom-events-q-009",
    quizId: "quiz_javascript_dom_events",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "Given `<p id=\"message\">Hello</p>`, what does this do?\n\nmessage.textContent = \"Welcome\";",
    options: [
      { id: "A", text: "Changes the visible text to \"Welcome\"" },
      { id: "B", text: "Adds a CSS class named Welcome" },
      { id: "C", text: "Creates a new paragraph" },
      { id: "D", text: "Removes the paragraph" }
    ],
    correctOptionId: "A",
    explanation: "`textContent` replaces the element's text content. Unlike `innerHTML`, it treats the assigned value as text rather than HTML markup.",
    tags: ["dom", "textContent", "content"]
  },

  {
    id: "javascript-dom-events-q-010",
    quizId: "quiz_javascript_dom_events",
    order: 10,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an important difference between textContent and innerHTML?",
    options: [
      { id: "A", text: "innerHTML parses HTML markup, while textContent treats the value as text" },
      { id: "B", text: "textContent can execute JavaScript while innerHTML cannot" },
      { id: "C", text: "They are always identical" },
      { id: "D", text: "innerHTML only works with input elements" }
    ],
    correctOptionId: "A",
    explanation: "`innerHTML` interprets markup, whereas `textContent` inserts literal text. This distinction is especially important when handling untrusted user input.",
    tags: ["dom", "innerHTML", "textContent", "security"]
  },

  {
    id: "javascript-dom-events-q-011",
    quizId: "quiz_javascript_dom_events",
    order: 11,
    type: "code",
    difficulty: "Intermediate",
    question: "What is printed?\n\nconst div = document.createElement(\"div\");\ndiv.textContent = \"Hello\";\nconsole.log(div.parentElement);",
    options: [
      { id: "A", text: "null" },
      { id: "B", text: "document" },
      { id: "C", text: "undefined" },
      { id: "D", text: "The body element" }
    ],
    correctOptionId: "A",
    explanation: "The element was created but has not been inserted into the document, so it has no parent element and `parentElement` is `null`.",
    tags: ["dom", "createElement", "parentElement"]
  },

  {
    id: "javascript-dom-events-q-012",
    quizId: "quiz_javascript_dom_events",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "Which method creates a new DOM element?",
    options: [
      { id: "A", text: "document.createElement()" },
      { id: "B", text: "document.newElement()" },
      { id: "C", text: "document.makeElement()" },
      { id: "D", text: "document.createNodeElement()" }
    ],
    correctOptionId: "A",
    explanation: "`document.createElement()` creates a new Element node of the specified tag name.",
    tags: ["dom", "createElement", "creation"]
  },

  {
    id: "javascript-dom-events-q-013",
    quizId: "quiz_javascript_dom_events",
    order: 13,
    type: "code",
    difficulty: "Beginner",
    question: "What does this accomplish?\n\nconst li = document.createElement(\"li\");\nli.textContent = \"Learn JavaScript\";\ndocument.querySelector(\"ul\").append(li);",
    options: [
      { id: "A", text: "Creates a list item and appends it to the first ul" },
      { id: "B", text: "Deletes the first ul" },
      { id: "C", text: "Replaces the ul with a li" },
      { id: "D", text: "Only creates the li without adding it" }
    ],
    correctOptionId: "A",
    explanation: "`createElement()` creates the element, `textContent` gives it text, and `append()` inserts it as a child of the selected `ul`.",
    tags: ["dom", "createElement", "append", "manipulation"]
  },

  {
    id: "javascript-dom-events-q-014",
    quizId: "quiz_javascript_dom_events",
    order: 14,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of appendChild()?",
    options: [
      { id: "A", text: "To add a Node as the last child of another Node" },
      { id: "B", text: "To remove a child" },
      { id: "C", text: "To clone the entire document" },
      { id: "D", text: "To change an element's CSS" }
    ],
    correctOptionId: "A",
    explanation: "`appendChild()` inserts a Node as the last child of the target parent.",
    tags: ["dom", "appendChild", "manipulation"]
  },

  {
    id: "javascript-dom-events-q-015",
    quizId: "quiz_javascript_dom_events",
    order: 15,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens when an existing DOM element is passed to appendChild()?",
    options: [
      { id: "A", text: "The existing element is moved to the new parent" },
      { id: "B", text: "The element is automatically cloned" },
      { id: "C", text: "An error is always thrown" },
      { id: "D", text: "Nothing happens" }
    ],
    correctOptionId: "A",
    explanation: "DOM nodes can have only one parent. Appending an existing node moves it from its current location rather than automatically cloning it.",
    tags: ["dom", "appendChild", "nodes", "moving-elements"]
  },

  {
    id: "javascript-dom-events-q-016",
    quizId: "quiz_javascript_dom_events",
    order: 16,
    type: "code",
    difficulty: "Intermediate",
    question: "Which method removes an element from the DOM?",
    options: [
      { id: "A", text: "element.remove()" },
      { id: "B", text: "element.delete()" },
      { id: "C", text: "element.destroy()" },
      { id: "D", text: "element.erase()" }
    ],
    correctOptionId: "A",
    explanation: "Modern DOM elements provide the `remove()` method to remove themselves from their parent.",
    tags: ["dom", "remove", "manipulation"]
  },

  {
    id: "javascript-dom-events-q-017",
    quizId: "quiz_javascript_dom_events",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property provides the parent Element of an element?",
    options: [
      { id: "A", text: "parentElement" },
      { id: "B", text: "parentNodeElement" },
      { id: "C", text: "parent" },
      { id: "D", text: "ancestor" }
    ],
    correctOptionId: "A",
    explanation: "`parentElement` returns the parent Element, or `null` when the element has no parent element.",
    tags: ["dom", "parentElement", "traversal"]
  },

  {
    id: "javascript-dom-events-q-018",
    quizId: "quiz_javascript_dom_events",
    order: 18,
    type: "code",
    difficulty: "Intermediate",
    question: "Given `<div><p id=\"child\">Hello</p></div>`, what does this select?\n\nconst child = document.querySelector(\"#child\");\nconsole.log(child.parentElement.tagName);",
    options: [
      { id: "A", text: "DIV" },
      { id: "B", text: "P" },
      { id: "C", text: "BODY" },
      { id: "D", text: "HTML" }
    ],
    correctOptionId: "A",
    explanation: "The parent of the `<p>` is the `<div>`, whose `tagName` is `DIV`.",
    tags: ["dom", "parentElement", "tagName", "traversal"]
  },

  {
    id: "javascript-dom-events-q-019",
    quizId: "quiz_javascript_dom_events",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property returns the element's first child node?",
    options: [
      { id: "A", text: "firstChild" },
      { id: "B", text: "firstElement" },
      { id: "C", text: "childFirst" },
      { id: "D", text: "firstNodeElement" }
    ],
    correctOptionId: "A",
    explanation: "`firstChild` returns the first child Node, which can include text nodes such as whitespace.",
    tags: ["dom", "firstChild", "traversal"]
  },

  {
    id: "javascript-dom-events-q-020",
    quizId: "quiz_javascript_dom_events",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between firstChild and firstElementChild?",
    options: [
      { id: "A", text: "firstChild may return a text node, while firstElementChild returns the first Element" },
      { id: "B", text: "firstChild only returns elements while firstElementChild returns text" },
      { id: "C", text: "They always return the same type" },
      { id: "D", text: "firstElementChild only works on forms" }
    ],
    correctOptionId: "A",
    explanation: "A Node can be an element, text, comment, or other node type. `firstElementChild` specifically skips non-element nodes.",
    tags: ["dom", "firstChild", "firstElementChild", "traversal"]
  },

  {
    id: "javascript-dom-events-q-021",
    quizId: "quiz_javascript_dom_events",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property gives an element's child Elements as a live collection?",
    options: [
      { id: "A", text: "children" },
      { id: "B", text: "childElements" },
      { id: "C", text: "elements" },
      { id: "D", text: "elementChildren" }
    ],
    correctOptionId: "A",
    explanation: "`children` returns an HTMLCollection containing the element's child Elements. Unlike a NodeList from `querySelectorAll()`, it is live.",
    tags: ["dom", "children", "HTMLCollection", "traversal"]
  },

  {
    id: "javascript-dom-events-q-022",
    quizId: "quiz_javascript_dom_events",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which API is generally preferred for changing a CSS class on an element?",
    options: [
      { id: "A", text: "classList" },
      { id: "B", text: "cssClass" },
      { id: "C", text: "classNamesOnly" },
      { id: "D", text: "styleClass" }
    ],
    correctOptionId: "A",
    explanation: "`classList` provides methods such as `add()`, `remove()`, `toggle()`, and `contains()` for managing classes.",
    tags: ["dom", "classList", "css"]
  },

  {
    id: "javascript-dom-events-q-023",
    quizId: "quiz_javascript_dom_events",
    order: 23,
    type: "code",
    difficulty: "Beginner",
    question: "What does this do?\n\nbutton.classList.toggle(\"active\");",
    options: [
      { id: "A", text: "Adds active if absent and removes it if present" },
      { id: "B", text: "Always adds active" },
      { id: "C", text: "Always removes active" },
      { id: "D", text: "Changes the button text" }
    ],
    correctOptionId: "A",
    explanation: "`toggle()` switches the presence of the specified class.",
    tags: ["dom", "classList", "toggle"]
  },

  {
    id: "javascript-dom-events-q-024",
    quizId: "quiz_javascript_dom_events",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "Which property is useful for reading or setting inline CSS styles?",
    options: [
      { id: "A", text: "style" },
      { id: "B", text: "css" },
      { id: "C", text: "stylesheets" },
      { id: "D", text: "inlineCSS" }
    ],
    correctOptionId: "A",
    explanation: "The `style` property provides access to an element's inline CSS declarations.",
    tags: ["dom", "style", "css"]
  },

  {
    id: "javascript-dom-events-q-025",
    quizId: "quiz_javascript_dom_events",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens here?\n\nbox.style.backgroundColor = \"red\";",
    options: [
      { id: "A", text: "The element's inline background color becomes red" },
      { id: "B", text: "A CSS class called red is added" },
      { id: "C", text: "The element is removed" },
      { id: "D", text: "The entire stylesheet changes" }
    ],
    correctOptionId: "A",
    explanation: "`style.backgroundColor` modifies the element's inline `background-color` declaration.",
    tags: ["dom", "style", "backgroundColor"]
  },

  {
    id: "javascript-dom-events-q-026",
    quizId: "quiz_javascript_dom_events",
    order: 26,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is an event in the browser?",
    options: [
      { id: "A", text: "A signal representing something that happened, such as a click or key press" },
      { id: "B", text: "A CSS selector" },
      { id: "C", text: "A DOM element" },
      { id: "D", text: "A JavaScript variable declaration" }
    ],
    correctOptionId: "A",
    explanation: "Browser events represent occurrences such as clicks, keyboard input, form submissions, pointer movement, and page loading.",
    tags: ["events", "dom", "fundamentals"]
  },

  {
    id: "javascript-dom-events-q-027",
    quizId: "quiz_javascript_dom_events",
    order: 27,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which method is the modern standard for registering an event listener?",
    options: [
      { id: "A", text: "addEventListener()" },
      { id: "B", text: "listenEvent()" },
      { id: "C", text: "onEvent()" },
      { id: "D", text: "registerEvent()" }
    ],
    correctOptionId: "A",
    explanation: "`addEventListener()` attaches a function to be called when a specified event occurs.",
    tags: ["events", "addEventListener", "event-listeners"]
  },

  {
    id: "javascript-dom-events-q-028",
    quizId: "quiz_javascript_dom_events",
    order: 28,
    type: "code",
    difficulty: "Beginner",
    question: "What happens when the button is clicked?\n\nbutton.addEventListener(\"click\", () => {\n  console.log(\"Clicked\");\n});",
    options: [
      { id: "A", text: "\"Clicked\" is logged" },
      { id: "B", text: "The button is deleted" },
      { id: "C", text: "The event listener runs immediately before any click" },
      { id: "D", text: "Nothing happens because click is invalid" }
    ],
    correctOptionId: "A",
    explanation: "The callback is registered for the `click` event and runs whenever the button is clicked.",
    tags: ["events", "click", "addEventListener"]
  },

  {
    id: "javascript-dom-events-q-029",
    quizId: "quiz_javascript_dom_events",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is a named function useful when you need to remove an event listener later?",
    options: [
      { id: "A", text: "removeEventListener() requires the same function reference" },
      { id: "B", text: "Anonymous functions cannot handle events" },
      { id: "C", text: "Named functions execute faster in every case" },
      { id: "D", text: "Only named functions can be passed to addEventListener()" }
    ],
    correctOptionId: "A",
    explanation: "To remove a listener, you must provide the same event type and the same function object that was originally registered.",
    tags: ["events", "removeEventListener", "function-references"]
  },

  {
    id: "javascript-dom-events-q-030",
    quizId: "quiz_javascript_dom_events",
    order: 30,
    type: "code",
    difficulty: "Intermediate",
    question: "Which code correctly removes the listener?\n\nfunction handleClick() {\n  console.log(\"clicked\");\n}\n\nbutton.addEventListener(\"click\", handleClick);",
    options: [
      { id: "A", text: "button.removeEventListener(\"click\", handleClick);" },
      { id: "B", text: "button.removeEventListener(\"click\");" },
      { id: "C", text: "button.removeEvent(\"click\", handleClick);" },
      { id: "D", text: "button.deleteEventListener(handleClick);" }
    ],
    correctOptionId: "A",
    explanation: "`removeEventListener()` needs the same event type and the same function reference used during registration.",
    tags: ["events", "removeEventListener", "event-lifecycle"]
  },

  {
    id: "javascript-dom-events-q-031",
    quizId: "quiz_javascript_dom_events",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What does the event parameter represent?\n\nbutton.addEventListener(\"click\", event => {\n  console.log(event);\n});",
    options: [
      { id: "A", text: "An Event object describing the occurrence" },
      { id: "B", text: "The button's CSS class" },
      { id: "C", text: "The event listener function itself" },
      { id: "D", text: "The browser's URL" }
    ],
    correctOptionId: "A",
    explanation: "The browser passes an Event object to the listener. It contains information about the event and provides methods for controlling its behavior.",
    tags: ["events", "Event", "event-object"]
  },

  {
    id: "javascript-dom-events-q-032",
    quizId: "quiz_javascript_dom_events",
    order: 32,
    type: "code",
    difficulty: "Intermediate",
    question: "What does event.target usually represent?",
    options: [
      { id: "A", text: "The element on which the event originally occurred" },
      { id: "B", text: "The element where the listener was registered, always" },
      { id: "C", text: "The document body" },
      { id: "D", text: "The window object" }
    ],
    correctOptionId: "A",
    explanation: "`event.target` identifies the original target of the event, which can differ from the element whose listener is currently executing.",
    tags: ["events", "target", "event-object"]
  },

  {
    id: "javascript-dom-events-q-033",
    quizId: "quiz_javascript_dom_events",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "A click listener is attached to a parent div. The user clicks a button inside it. What does event.currentTarget refer to inside the div's listener?",
    options: [
      { id: "A", text: "The parent div where the listener is registered" },
      { id: "B", text: "The button that was clicked" },
      { id: "C", text: "The document" },
      { id: "D", text: "The window" }
    ],
    correctOptionId: "A",
    explanation: "`currentTarget` refers to the element whose listener is currently handling the event. `target` would refer to the original clicked button.",
    tags: ["events", "currentTarget", "target"]
  },

  {
    id: "javascript-dom-events-q-034",
    quizId: "quiz_javascript_dom_events",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is event bubbling?",
    options: [
      { id: "A", text: "An event propagating from a target element upward through its ancestors" },
      { id: "B", text: "An event being converted into a Promise" },
      { id: "C", text: "An event being delayed by the browser" },
      { id: "D", text: "An event being removed automatically" }
    ],
    correctOptionId: "A",
    explanation: "During bubbling, an event that occurs on a descendant propagates upward through ancestor elements after reaching its target.",
    tags: ["events", "bubbling", "event-propagation"]
  },

  {
    id: "javascript-dom-events-q-035",
    quizId: "quiz_javascript_dom_events",
    order: 35,
    type: "code",
    difficulty: "Intermediate",
    question: "What happens when the button is clicked?\n\nparent.addEventListener(\"click\", () => console.log(\"parent\"));\nbutton.addEventListener(\"click\", () => console.log(\"button\"));",
    options: [
      { id: "A", text: "\"button\" is logged, then \"parent\" due to bubbling" },
      { id: "B", text: "Only \"parent\" is logged" },
      { id: "C", text: "Only \"button\" is logged" },
      { id: "D", text: "\"parent\" is always logged first" }
    ],
    correctOptionId: "A",
    explanation: "The event reaches the button first, so the button listener runs. The event then bubbles to the parent, where its listener runs.",
    tags: ["events", "bubbling", "event-order"]
  },

  {
    id: "javascript-dom-events-q-036",
    quizId: "quiz_javascript_dom_events",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which method prevents an event from continuing to propagate through the DOM?",
    options: [
      { id: "A", text: "stopPropagation()" },
      { id: "B", text: "stopEvent()" },
      { id: "C", text: "preventPropagation()" },
      { id: "D", text: "cancelBubbleEvent()" }
    ],
    correctOptionId: "A",
    explanation: "`stopPropagation()` prevents the event from continuing to propagate to other elements during its propagation path.",
    tags: ["events", "stopPropagation", "bubbling"]
  },

  {
    id: "javascript-dom-events-q-037",
    quizId: "quiz_javascript_dom_events",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does event.preventDefault() do?",
    options: [
      { id: "A", text: "Prevents the browser's default action for the event when cancelable" },
      { id: "B", text: "Stops all event propagation" },
      { id: "C", text: "Removes the event listener" },
      { id: "D", text: "Deletes the target element" }
    ],
    correctOptionId: "A",
    explanation: "`preventDefault()` cancels the browser's default action, such as following a link or submitting a form, when that event is cancelable.",
    tags: ["events", "preventDefault", "default-action"]
  },

  {
    id: "javascript-dom-events-q-038",
    quizId: "quiz_javascript_dom_events",
    order: 38,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the purpose of this code?\n\nform.addEventListener(\"submit\", event => {\n  event.preventDefault();\n});",
    options: [
      { id: "A", text: "It prevents the form's default submission behavior" },
      { id: "B", text: "It permanently disables the form" },
      { id: "C", text: "It removes all form inputs" },
      { id: "D", text: "It stops JavaScript execution" }
    ],
    correctOptionId: "A",
    explanation: "Calling `preventDefault()` on a cancelable submit event prevents the browser's normal form submission behavior, allowing JavaScript to handle the submission instead.",
    tags: ["events", "forms", "submit", "preventDefault"]
  },

  {
    id: "javascript-dom-events-q-039",
    quizId: "quiz_javascript_dom_events",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is event delegation?",
    options: [
      { id: "A", text: "Handling events for multiple descendants by placing a listener on a common ancestor" },
      { id: "B", text: "Copying one event listener to every element manually" },
      { id: "C", text: "Preventing every event on a page" },
      { id: "D", text: "Converting DOM events into CSS animations" }
    ],
    correctOptionId: "A",
    explanation: "Event delegation takes advantage of bubbling by placing one listener on a parent and determining which descendant triggered the event.",
    tags: ["events", "event-delegation", "bubbling"]
  },

  {
    id: "javascript-dom-events-q-040",
    quizId: "quiz_javascript_dom_events",
    order: 40,
    type: "code",
    difficulty: "Advanced",
    question: "Why is this useful for a dynamically changing list?\n\nlist.addEventListener(\"click\", event => {\n  const button = event.target.closest(\"button\");\n  if (!button) return;\n\n  console.log(button.dataset.id);\n});",
    options: [
      { id: "A", text: "One parent listener can handle clicks from current and newly added buttons" },
      { id: "B", text: "It prevents all button clicks" },
      { id: "C", text: "It automatically creates buttons" },
      { id: "D", text: "It disables event bubbling" }
    ],
    correctOptionId: "A",
    explanation: "Because the listener is attached to the list, dynamically added buttons can also be handled through event bubbling without registering separate listeners for each button.",
    tags: ["events", "event-delegation", "closest", "dynamic-dom"]
  },

  {
    id: "javascript-dom-events-q-041",
    quizId: "quiz_javascript_dom_events",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does event capturing describe?",
    options: [
      { id: "A", text: "The phase where an event travels from the outer ancestors toward the target" },
      { id: "B", text: "The phase where an event is permanently stored" },
      { id: "C", text: "The phase where the browser cancels the event" },
      { id: "D", text: "The phase after the page is unloaded" }
    ],
    correctOptionId: "A",
    explanation: "Event propagation has a capturing phase where the event travels down the DOM hierarchy toward the target before reaching the target and later bubbling back up.",
    tags: ["events", "capturing", "event-propagation"]
  },

  {
    id: "javascript-dom-events-q-042",
    quizId: "quiz_javascript_dom_events",
    order: 42,
    type: "code",
    difficulty: "Advanced",
    question: "Which listener is registered for the capturing phase?\n\nbox.addEventListener(\"click\", handler, ???);",
    options: [
      { id: "A", text: "true" },
      { id: "B", text: "false" },
      { id: "C", text: "\"capture\"" },
      { id: "D", text: "\"capturing\"" }
    ],
    correctOptionId: "A",
    explanation: "The third argument can be a boolean where `true` enables capture. An options object such as `{ capture: true }` is also supported.",
    tags: ["events", "capturing", "addEventListener"]
  },

  {
    id: "javascript-dom-events-q-043",
    quizId: "quiz_javascript_dom_events",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "What does this listener option accomplish?\n\nbutton.addEventListener(\"click\", handler, { once: true });",
    options: [
      { id: "A", text: "The listener automatically removes itself after the first invocation" },
      { id: "B", text: "The listener runs only when the button is double-clicked" },
      { id: "C", text: "The listener cannot be removed" },
      { id: "D", text: "The listener is delayed once" }
    ],
    correctOptionId: "A",
    explanation: "The `once` option tells the browser to automatically remove the listener after it has been invoked once.",
    tags: ["events", "addEventListener", "once"]
  },

  {
    id: "javascript-dom-events-q-044",
    quizId: "quiz_javascript_dom_events",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "What is the main problem with this code when `render()` is called repeatedly?\n\nfunction render() {\n  button.addEventListener(\"click\", handleClick);\n}",
    options: [
      { id: "A", text: "Repeated calls can register the same listener repeatedly, causing multiple executions" },
      { id: "B", text: "addEventListener can only be called once in JavaScript" },
      { id: "C", text: "The button will automatically be removed" },
      { id: "D", text: "The click event becomes asynchronous" }
    ],
    correctOptionId: "A",
    explanation: "Repeatedly registering listeners can cause multiple callbacks to run for one event. Application code should manage listener lifecycle appropriately.",
    tags: ["events", "addEventListener", "event-lifecycle", "common-pitfalls"]
  },

  {
    id: "javascript-dom-events-q-045",
    quizId: "quiz_javascript_dom_events",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "Given:\n\nconst input = document.querySelector(\"input\");\n\ninput.addEventListener(\"input\", event => {\n  console.log(event.target.value);\n});\n\nWhat does this primarily do?",
    options: [
      { id: "A", text: "Logs the input's current value as the user changes it" },
      { id: "B", text: "Logs only the initial value" },
      { id: "C", text: "Submits the form automatically" },
      { id: "D", text: "Prevents typing" }
    ],
    correctOptionId: "A",
    explanation: "The `input` event fires when the value of a form control changes through user interaction, and `event.target.value` reads the current value.",
    tags: ["events", "input", "forms", "value"]
  },

  {
    id: "javascript-dom-events-q-046",
    quizId: "quiz_javascript_dom_events",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "What is printed when the inner button is clicked?\n\nouter.addEventListener(\"click\", () => console.log(\"outer\"));\ninner.addEventListener(\"click\", event => {\n  console.log(\"inner\");\n  event.stopPropagation();\n});",
    options: [
      { id: "A", text: "\"inner\" only" },
      { id: "B", text: "\"outer\" only" },
      { id: "C", text: "\"inner\", then \"outer\"" },
      { id: "D", text: "Nothing" }
    ],
    correctOptionId: "A",
    explanation: "The inner listener runs first. `stopPropagation()` prevents the event from bubbling to the outer element.",
    tags: ["events", "stopPropagation", "bubbling"]
  },

  {
    id: "javascript-dom-events-q-047",
    quizId: "quiz_javascript_dom_events",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Which approach is safest when displaying untrusted user-provided text?",
    options: [
      { id: "A", text: "Use textContent instead of inserting the value as HTML" },
      { id: "B", text: "Always use innerHTML" },
      { id: "C", text: "Use eval() on the input first" },
      { id: "D", text: "Convert the input to a CSS selector" }
    ],
    correctOptionId: "A",
    explanation: "`textContent` treats the supplied value as literal text instead of parsing it as HTML. This helps avoid accidentally interpreting user input as markup.",
    tags: ["dom", "textContent", "innerHTML", "security"]
  },

  {
    id: "javascript-dom-events-q-048",
    quizId: "quiz_javascript_dom_events",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "What does this return?\n\nconst button = document.querySelector(\"button\");\nconst form = button.closest(\"form\");",
    options: [
      { id: "A", text: "The nearest ancestor form containing the button, or null" },
      { id: "B", text: "Every form on the page" },
      { id: "C", text: "The button itself" },
      { id: "D", text: "The document object" }
    ],
    correctOptionId: "A",
    explanation: "`closest()` checks the element itself and then walks up its ancestors until it finds an element matching the selector.",
    tags: ["dom", "closest", "traversal", "event-delegation"]
  },

  {
    id: "javascript-dom-events-q-049",
    quizId: "quiz_javascript_dom_events",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "A page contains 1,000 list items. Each item needs the same click behavior, and items may be dynamically added. Which approach is generally more scalable?",
    options: [
      { id: "A", text: "Attach one delegated click listener to the list container" },
      { id: "B", text: "Attach five click listeners to every item" },
      { id: "C", text: "Create a new global listener for every item" },
      { id: "D", text: "Use setInterval() to detect clicks" }
    ],
    correctOptionId: "A",
    explanation: "Event delegation uses one listener on the common ancestor and relies on bubbling, reducing listener management and naturally supporting dynamically added descendants.",
    tags: ["events", "event-delegation", "performance", "dynamic-dom"]
  },

  {
    id: "javascript-dom-events-q-050",
    quizId: "quiz_javascript_dom_events",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "A todo list contains dynamically created delete buttons. Which implementation correctly handles all current and future delete buttons using event delegation?\n\nconst list = document.querySelector(\"#todos\");\n\nlist.addEventListener(\"click\", event => {\n  const button = event.target.closest(\".delete-btn\");\n  if (!button || !list.contains(button)) return;\n\n  const todo = button.closest(\".todo\");\n  if (todo) todo.remove();\n});",
    options: [
      { id: "A", text: "It uses bubbling and closest() to identify the clicked delete button, then removes its todo" },
      { id: "B", text: "It only works for buttons existing when the page initially loads" },
      { id: "C", text: "It disables event bubbling before removing the todo" },
      { id: "D", text: "It creates a separate event listener every time a todo is added" }
    ],
    correctOptionId: "A",
    explanation: "The listener is attached once to the list. Because clicks bubble, it can detect a matching `.delete-btn` even when that button was dynamically added. `closest()` finds the relevant todo container, which is then removed.",
    tags: ["dom", "events", "event-delegation", "closest", "dynamic-dom", "remove"]
  }
];

export default javascriptDomEventsQuestions;