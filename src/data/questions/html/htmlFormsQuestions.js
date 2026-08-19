const htmlFormsQuestions = [
  {
    id: "html-forms-q-001",
    quizId: "quiz_html_forms",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of the <form> element?",
    options: [
      { id: "A", text: "To group controls used to collect and submit user input" },
      { id: "B", text: "To style form controls" },
      { id: "C", text: "To create a database table" },
      { id: "D", text: "To automatically validate every input" }
    ],
    correctOptionId: "A",
    explanation: "The `<form>` element groups interactive controls and provides the structure for submitting user-provided data.",
    tags: ["forms", "form", "fundamentals"]
  },

  {
    id: "html-forms-q-002",
    quizId: "quiz_html_forms",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is commonly used for a single-line text input?",
    options: [
      { id: "A", text: "<input>" },
      { id: "B", text: "<text>" },
      { id: "C", text: "<textbox>" },
      { id: "D", text: "<field>" }
    ],
    correctOptionId: "A",
    explanation: "The `<input>` element represents many types of form controls, including single-line text inputs.",
    tags: ["input", "forms", "text-input"]
  },

  {
    id: "html-forms-q-003",
    quizId: "quiz_html_forms",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which input type is appropriate for a user's password?",
    options: [
      { id: "A", text: "password" },
      { id: "B", text: "secret" },
      { id: "C", text: "hidden-text" },
      { id: "D", text: "private" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"password\"` creates a control that obscures the entered characters visually.",
    tags: ["input", "password", "forms"]
  },

  {
    id: "html-forms-q-004",
    quizId: "quiz_html_forms",
    order: 4,
    type: "code",
    difficulty: "Beginner",
    question: "What does this input create?\n\n<input type=\"email\">",
    options: [
      { id: "A", text: "An email-oriented input control" },
      { id: "B", text: "A password field" },
      { id: "C", text: "A file upload control" },
      { id: "D", text: "A multiline text field" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"email\"` identifies the field as an email input and enables browser-level email-oriented validation and appropriate input behavior.",
    tags: ["input", "email", "validation"]
  },

  {
    id: "html-forms-q-005",
    quizId: "quiz_html_forms",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which input type is designed for numeric values?",
    options: [
      { id: "A", text: "number" },
      { id: "B", text: "numeric" },
      { id: "C", text: "integer" },
      { id: "D", text: "decimal" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"number\"` represents a numeric input and can support attributes such as `min`, `max`, and `step`.",
    tags: ["input", "number", "validation"]
  },

  {
    id: "html-forms-q-006",
    quizId: "quiz_html_forms",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which input type creates a checkbox?",
    options: [
      { id: "A", text: "checkbox" },
      { id: "B", text: "check" },
      { id: "C", text: "boolean" },
      { id: "D", text: "toggle" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"checkbox\"` creates a control that can independently be checked or unchecked.",
    tags: ["input", "checkbox", "forms"]
  },

  {
    id: "html-forms-q-007",
    quizId: "quiz_html_forms",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which input type is normally used when the user should select one option from a group?",
    options: [
      { id: "A", text: "radio" },
      { id: "B", text: "single" },
      { id: "C", text: "option" },
      { id: "D", text: "select-one" }
    ],
    correctOptionId: "A",
    explanation: "Radio buttons are designed for mutually exclusive choices when related radio inputs share the same `name`.",
    tags: ["input", "radio", "forms"]
  },

  {
    id: "html-forms-q-008",
    quizId: "quiz_html_forms",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "Which group correctly allows the user to choose one payment method?",
    options: [
      {
        id: "A",
        text: "<input type=\"radio\" name=\"payment\" value=\"card\"><input type=\"radio\" name=\"payment\" value=\"cash\">"
      },
      {
        id: "B",
        text: "<input type=\"radio\" name=\"card\"><input type=\"radio\" name=\"cash\">"
      },
      {
        id: "C",
        text: "<input type=\"checkbox\" name=\"payment\" value=\"card\"><input type=\"checkbox\" name=\"payment\" value=\"cash\">"
      },
      {
        id: "D",
        text: "<input type=\"radio\" value=\"card\"><input type=\"radio\" value=\"cash\">"
      }
    ],
    correctOptionId: "A",
    explanation: "Radio inputs with the same `name` form a group, allowing the user to select one option from that group.",
    tags: ["radio", "name", "forms"]
  },

  {
    id: "html-forms-q-009",
    quizId: "quiz_html_forms",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which input type allows the user to upload a file?",
    options: [
      { id: "A", text: "file" },
      { id: "B", text: "upload" },
      { id: "C", text: "attachment" },
      { id: "D", text: "document" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"file\"` creates a file-selection control that allows the user to select files from their device.",
    tags: ["input", "file", "forms"]
  },

  {
    id: "html-forms-q-010",
    quizId: "quiz_html_forms",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is designed specifically for multiline text?",
    options: [
      { id: "A", text: "<textarea>" },
      { id: "B", text: "<input type=\"multiline\">" },
      { id: "C", text: "<multiline>" },
      { id: "D", text: "<text-area-input>" }
    ],
    correctOptionId: "A",
    explanation: "`<textarea>` is used when users need to enter multiple lines of text, such as messages or comments.",
    tags: ["textarea", "forms", "text-input"]
  },

  {
    id: "html-forms-q-011",
    quizId: "quiz_html_forms",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the name attribute of a form control primarily provide?",
    options: [
      { id: "A", text: "The key under which its submitted value is identified" },
      { id: "B", text: "The visible label of the control" },
      { id: "C", text: "The CSS class of the control" },
      { id: "D", text: "The browser tab title" }
    ],
    correctOptionId: "A",
    explanation: "When form data is submitted, the control's `name` identifies the field/value pair sent to the server.",
    tags: ["name", "form-submission", "forms"]
  },

  {
    id: "html-forms-q-012",
    quizId: "quiz_html_forms",
    order: 12,
    type: "code",
    difficulty: "Beginner",
    question: "What key/value pair is conceptually submitted for this control?\n\n<input name=\"username\" value=\"avi\">",
    options: [
      { id: "A", text: "username=avi" },
      { id: "B", text: "input=avi" },
      { id: "C", text: "name=username" },
      { id: "D", text: "value=username" }
    ],
    correctOptionId: "A",
    explanation: "The `name` becomes the field name and the current value becomes its submitted value, producing the conceptual pair `username=avi`.",
    tags: ["name", "value", "form-submission"]
  },

  {
    id: "html-forms-q-013",
    quizId: "quiz_html_forms",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the placeholder attribute provide?",
    options: [
      { id: "A", text: "A temporary hint displayed inside an empty control" },
      { id: "B", text: "The value permanently submitted to the server" },
      { id: "C", text: "A replacement for the label" },
      { id: "D", text: "A validation rule" }
    ],
    correctOptionId: "A",
    explanation: "`placeholder` provides a short hint about the expected input. It is not a replacement for a proper `<label>`.",
    tags: ["placeholder", "forms", "labels"]
  },

  {
    id: "html-forms-q-014",
    quizId: "quiz_html_forms",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute makes a form control mandatory?",
    options: [
      { id: "A", text: "required" },
      { id: "B", text: "mandatory" },
      { id: "C", text: "must-fill" },
      { id: "D", text: "validate" }
    ],
    correctOptionId: "A",
    explanation: "The boolean `required` attribute tells the browser that a value must be provided before the form can successfully pass native constraint validation.",
    tags: ["required", "validation", "forms"]
  },

  {
    id: "html-forms-q-015",
    quizId: "quiz_html_forms",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What happens when a required empty input is submitted?",
    options: [
      { id: "A", text: "The browser's native constraint validation can prevent submission" },
      { id: "B", text: "The browser automatically sends an empty value without validation" },
      { id: "C", text: "The input is automatically removed" },
      { id: "D", text: "The browser crashes" }
    ],
    correctOptionId: "A",
    explanation: "A required control fails native constraint validation when it has no acceptable value, so normal form submission is prevented until the constraint is satisfied.",
    tags: ["required", "validation", "form-submission"]
  },

  {
    id: "html-forms-q-016",
    quizId: "quiz_html_forms",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute can constrain the minimum number of characters in a text input?",
    options: [
      { id: "A", text: "minlength" },
      { id: "B", text: "minchars" },
      { id: "C", text: "characters-min" },
      { id: "D", text: "length-min" }
    ],
    correctOptionId: "A",
    explanation: "`minlength` defines the minimum number of UTF-16 code units required for the control's value.",
    tags: ["minlength", "validation", "text-input"]
  },

  {
    id: "html-forms-q-017",
    quizId: "quiz_html_forms",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute constrains the maximum length of a text input?",
    options: [
      { id: "A", text: "maxlength" },
      { id: "B", text: "maxchars" },
      { id: "C", text: "length-max" },
      { id: "D", text: "characters" }
    ],
    correctOptionId: "A",
    explanation: "`maxlength` specifies the maximum permitted length for applicable text controls.",
    tags: ["maxlength", "validation", "text-input"]
  },

  {
    id: "html-forms-q-018",
    quizId: "quiz_html_forms",
    order: 18,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup requires a username to contain at least 3 characters?",
    options: [
      { id: "A", text: "<input name=\"username\" minlength=\"3\">" },
      { id: "B", text: "<input name=\"username\" minchars=\"3\">" },
      { id: "C", text: "<input name=\"username\" min=\"3\">" },
      { id: "D", text: "<input name=\"username\" length=\"3\">" }
    ],
    correctOptionId: "A",
    explanation: "`minlength=\"3\"` establishes a minimum text length constraint. The `min` attribute is intended for applicable numeric/date-like controls rather than ordinary text length.",
    tags: ["minlength", "validation", "attributes"]
  },

  {
    id: "html-forms-q-019",
    quizId: "quiz_html_forms",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which attribute specifies the minimum numeric value allowed by a number input?",
    options: [
      { id: "A", text: "min" },
      { id: "B", text: "minimum" },
      { id: "C", text: "minvalue" },
      { id: "D", text: "lowest" }
    ],
    correctOptionId: "A",
    explanation: "For applicable numeric controls, `min` specifies the minimum permitted value.",
    tags: ["number", "min", "validation"]
  },

  {
    id: "html-forms-q-020",
    quizId: "quiz_html_forms",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which attribute specifies the maximum numeric value allowed?",
    options: [
      { id: "A", text: "max" },
      { id: "B", text: "maximum" },
      { id: "C", text: "maxvalue" },
      { id: "D", text: "highest" }
    ],
    correctOptionId: "A",
    explanation: "`max` defines the maximum permitted value for applicable input types.",
    tags: ["number", "max", "validation"]
  },

  {
    id: "html-forms-q-021",
    quizId: "quiz_html_forms",
    order: 21,
    type: "code",
    difficulty: "Intermediate",
    question: "What constraint does this input express?\n\n<input type=\"number\" min=\"18\" max=\"100\">",
    options: [
      { id: "A", text: "The value should be between 18 and 100 inclusive" },
      { id: "B", text: "The input must contain 18 to 100 characters" },
      { id: "C", text: "The user must enter exactly 100" },
      { id: "D", text: "The input accepts only negative numbers" }
    ],
    correctOptionId: "A",
    explanation: "`min` and `max` define the numeric range accepted by the control's constraint validation.",
    tags: ["number", "min", "max", "validation"]
  },

  {
    id: "html-forms-q-022",
    quizId: "quiz_html_forms",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the step attribute control on an applicable numeric input?",
    options: [
      { id: "A", text: "The allowed increment between valid values" },
      { id: "B", text: "The number of characters allowed" },
      { id: "C", text: "The number of times the form submits" },
      { id: "D", text: "The width of the input" }
    ],
    correctOptionId: "A",
    explanation: "`step` defines the permitted granularity or increment for applicable controls, such as a number input.",
    tags: ["step", "number", "validation"]
  },

  {
    id: "html-forms-q-023",
    quizId: "quiz_html_forms",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which attribute allows a developer to provide a custom pattern that an input value should match?",
    options: [
      { id: "A", text: "pattern" },
      { id: "B", text: "regex" },
      { id: "C", text: "match" },
      { id: "D", text: "format" }
    ],
    correctOptionId: "A",
    explanation: "The `pattern` attribute specifies a regular-expression-based constraint for applicable text-like inputs.",
    tags: ["pattern", "regex", "validation"]
  },

  {
    id: "html-forms-q-024",
    quizId: "quiz_html_forms",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the purpose of this pattern?\n\n<input pattern=\"[A-Za-z]+\">",
    options: [
      { id: "A", text: "It constrains the value to letters according to the specified pattern" },
      { id: "B", text: "It forces the value to contain exactly one letter" },
      { id: "C", text: "It automatically converts the input to uppercase" },
      { id: "D", text: "It makes the field required" }
    ],
    correctOptionId: "A",
    explanation: "The pattern expresses a regular-expression constraint requiring the value to conform to the specified sequence of alphabetic characters.",
    tags: ["pattern", "regex", "validation"]
  },

  {
    id: "html-forms-q-025",
    quizId: "quiz_html_forms",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which attribute controls where form data is submitted?",
    options: [
      { id: "A", text: "action" },
      { id: "B", text: "target-url" },
      { id: "C", text: "submit-to" },
      { id: "D", text: "endpoint" }
    ],
    correctOptionId: "A",
    explanation: "The form's `action` attribute specifies the URL to which the form submission is directed.",
    tags: ["form", "action", "form-submission"]
  },

  {
    id: "html-forms-q-026",
    quizId: "quiz_html_forms",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which form attribute specifies the HTTP method used for submission?",
    options: [
      { id: "A", text: "method" },
      { id: "B", text: "http-method" },
      { id: "C", text: "request" },
      { id: "D", text: "verb" }
    ],
    correctOptionId: "A",
    explanation: "The `method` attribute specifies the submission method, commonly `get` or `post`.",
    tags: ["form", "method", "http"]
  },

  {
    id: "html-forms-q-027",
    quizId: "quiz_html_forms",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the main difference between GET and POST in typical HTML form submission?",
    options: [
      { id: "A", text: "GET commonly encodes submitted data into the URL, while POST sends it in the request body" },
      { id: "B", text: "GET can only submit passwords and POST can only submit usernames" },
      { id: "C", text: "POST always encrypts submitted data" },
      { id: "D", text: "GET is used only for file uploads" }
    ],
    correctOptionId: "A",
    explanation: "With a typical GET form submission, successful controls are encoded into the request URL. POST places the form data in the request body. POST itself does not automatically provide encryption.",
    tags: ["get", "post", "http", "form-submission"]
  },

  {
    id: "html-forms-q-028",
    quizId: "quiz_html_forms",
    order: 28,
    type: "code",
    difficulty: "Intermediate",
    question: "What URL structure would commonly result from submitting this GET form?\n\n<form action=\"/search\" method=\"get\">\n  <input name=\"q\" value=\"react\">\n</form>",
    options: [
      { id: "A", text: "/search?q=react" },
      { id: "B", text: "/search/react" },
      { id: "C", text: "/search#q=react" },
      { id: "D", text: "/search?value=react" }
    ],
    correctOptionId: "A",
    explanation: "GET form controls are commonly serialized into the query string. Since the control's name is `q` and its value is `react`, the query becomes `?q=react`.",
    tags: ["get", "query-string", "form-submission"]
  },

  {
    id: "html-forms-q-029",
    quizId: "quiz_html_forms",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the default type of a <button> when it is associated with a form and no type attribute is specified?",
    options: [
      { id: "A", text: "submit" },
      { id: "B", text: "button" },
      { id: "C", text: "reset" },
      { id: "D", text: "action" }
    ],
    correctOptionId: "A",
    explanation: "A `<button>` inside a form defaults to `type=\"submit\"` when no type is specified. Explicitly setting the type avoids accidental submissions when a button is intended only for another action.",
    tags: ["button", "submit", "forms"]
  },

  {
    id: "html-forms-q-030",
    quizId: "quiz_html_forms",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which button type is intended to submit a form?",
    options: [
      { id: "A", text: "submit" },
      { id: "B", text: "send" },
      { id: "C", text: "form-submit" },
      { id: "D", text: "post" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"submit\"` makes the button a form submission control.",
    tags: ["button", "submit", "forms"]
  },

  {
    id: "html-forms-q-031",
    quizId: "quiz_html_forms",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which button type does not submit the form by itself?",
    options: [
      { id: "A", text: "button" },
      { id: "B", text: "submit" },
      { id: "C", text: "send" },
      { id: "D", text: "form" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"button\"` creates a generic button with no default form-submission behavior, making it useful for client-side actions.",
    tags: ["button", "forms", "javascript"]
  },

  {
    id: "html-forms-q-032",
    quizId: "quiz_html_forms",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does <button type=\"reset\"> do in a form?",
    options: [
      { id: "A", text: "Resets form controls to their initial values" },
      { id: "B", text: "Deletes the form from the page" },
      { id: "C", text: "Sends the form using POST" },
      { id: "D", text: "Reloads the browser" }
    ],
    correctOptionId: "A",
    explanation: "A reset button restores the form controls to their initial values rather than submitting the form.",
    tags: ["button", "reset", "forms"]
  },

  {
    id: "html-forms-q-033",
    quizId: "quiz_html_forms",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is commonly used to provide a predefined set of choices for an input?",
    options: [
      { id: "A", text: "<datalist>" },
      { id: "B", text: "<choices>" },
      { id: "C", text: "<options-list>" },
      { id: "D", text: "<suggestions>" }
    ],
    correctOptionId: "A",
    explanation: "`<datalist>` provides a set of suggested options that can be associated with an input using the input's `list` attribute.",
    tags: ["datalist", "input", "forms"]
  },

  {
    id: "html-forms-q-034",
    quizId: "quiz_html_forms",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup correctly connects an input to a datalist?",
    options: [
      {
        id: "A",
        text: "<input list=\"languages\"><datalist id=\"languages\"><option value=\"JavaScript\"><option value=\"Python\"></datalist>"
      },
      {
        id: "B",
        text: "<input datalist=\"languages\"><list id=\"languages\"><option>JavaScript</option></list>"
      },
      {
        id: "C",
        text: "<input options=\"languages\"><datalist name=\"languages\"></datalist>"
      },
      {
        id: "D",
        text: "<input list=\"languages\"><datalist name=\"languages\"></datalist>"
      }
    ],
    correctOptionId: "A",
    explanation: "The input's `list` attribute must match the `id` of the `<datalist>` element. The datalist then contains `<option>` suggestions.",
    tags: ["datalist", "list", "id", "forms"]
  },

  {
    id: "html-forms-q-035",
    quizId: "quiz_html_forms",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element creates a dropdown selection control?",
    options: [
      { id: "A", text: "<select>" },
      { id: "B", text: "<dropdown>" },
      { id: "C", text: "<menu-select>" },
      { id: "D", text: "<choices>" }
    ],
    correctOptionId: "A",
    explanation: "The `<select>` element represents a selection control, with individual choices typically represented by `<option>` elements.",
    tags: ["select", "option", "forms"]
  },

  {
    id: "html-forms-q-036",
    quizId: "quiz_html_forms",
    order: 36,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup correctly creates a country dropdown?",
    options: [
      {
        id: "A",
        text: "<select name=\"country\"><option value=\"in\">India</option><option value=\"us\">USA</option></select>"
      },
      {
        id: "B",
        text: "<dropdown name=\"country\"><item value=\"in\">India</item><item value=\"us\">USA</item></dropdown>"
      },
      {
        id: "C",
        text: "<select name=\"country\"><choice>India</choice><choice>USA</choice></select>"
      },
      {
        id: "D",
        text: "<option name=\"country\">India</option><option name=\"country\">USA</option>"
      }
    ],
    correctOptionId: "A",
    explanation: "A `<select>` contains `<option>` elements. Each option can provide a `value` that represents the submitted value.",
    tags: ["select", "option", "forms"]
  },

  {
    id: "html-forms-q-037",
    quizId: "quiz_html_forms",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the selected attribute on an <option> indicate?",
    options: [
      { id: "A", text: "That the option is selected by default" },
      { id: "B", text: "That the option cannot be selected" },
      { id: "C", text: "That the option is hidden" },
      { id: "D", text: "That the option is required" }
    ],
    correctOptionId: "A",
    explanation: "The boolean `selected` attribute indicates that an option should be initially selected.",
    tags: ["select", "option", "selected"]
  },

  {
    id: "html-forms-q-038",
    quizId: "quiz_html_forms",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the disabled attribute do to a form control?",
    options: [
      { id: "A", text: "Prevents the control from being interacted with and generally excludes it from form submission" },
      { id: "B", text: "Makes the control required" },
      { id: "C", text: "Hides the control permanently" },
      { id: "D", text: "Automatically fills the control" }
    ],
    correctOptionId: "A",
    explanation: "A disabled form control is generally not interactive and is not included in the form's successful controls during submission.",
    tags: ["disabled", "forms", "form-submission"]
  },

  {
    id: "html-forms-q-039",
    quizId: "quiz_html_forms",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "How is readonly different from disabled for a text input?",
    options: [
      { id: "A", text: "A readonly value cannot normally be edited but can still participate in form submission, while a disabled control generally cannot" },
      { id: "B", text: "Readonly hides the input while disabled only changes its color" },
      { id: "C", text: "Readonly makes an input required" },
      { id: "D", text: "There is no difference" }
    ],
    correctOptionId: "A",
    explanation: "A readonly text control remains part of the form data in normal submission, while a disabled control is generally excluded from submission and cannot be interacted with.",
    tags: ["readonly", "disabled", "form-submission"]
  },

  {
    id: "html-forms-q-040",
    quizId: "quiz_html_forms",
    order: 40,
    type: "code",
    difficulty: "Intermediate",
    question: "Which control will normally be included when its form is submitted?",
    options: [
      { id: "A", text: "<input name=\"email\" value=\"a@example.com\" readonly>" },
      { id: "B", text: "<input name=\"email\" value=\"a@example.com\" disabled>" },
      { id: "C", text: "<input value=\"a@example.com\" disabled>" },
      { id: "D", text: "<input disabled>" }
    ],
    correctOptionId: "A",
    explanation: "A readonly input can still be submitted when it has a name and value. Disabled controls are generally excluded from form submission.",
    tags: ["readonly", "disabled", "form-submission"]
  },

  {
    id: "html-forms-q-041",
    quizId: "quiz_html_forms",
    order: 41,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of autocomplete on a form control?",
    options: [
      { id: "A", text: "It controls whether the browser may offer previously entered or known values" },
      { id: "B", text: "It automatically submits the form" },
      { id: "C", text: "It validates the input using a regular expression" },
      { id: "D", text: "It encrypts the submitted value" }
    ],
    correctOptionId: "A",
    explanation: "The `autocomplete` attribute provides guidance about whether and how the browser may offer stored or predicted values for a field.",
    tags: ["autocomplete", "forms", "user-experience"]
  },

  {
    id: "html-forms-q-042",
    quizId: "quiz_html_forms",
    order: 42,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which input type is appropriate for selecting a date?",
    options: [
      { id: "A", text: "date" },
      { id: "B", text: "calendar" },
      { id: "C", text: "datetime-only" },
      { id: "D", text: "day" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"date\"` represents a date input and allows browsers to provide an appropriate date-selection interface.",
    tags: ["input", "date", "forms"]
  },

  {
    id: "html-forms-q-043",
    quizId: "quiz_html_forms",
    order: 43,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which input type is intended for a telephone number?",
    options: [
      { id: "A", text: "tel" },
      { id: "B", text: "phone" },
      { id: "C", text: "telephone-number" },
      { id: "D", text: "mobile" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"tel\"` identifies the field as a telephone-number input and can help browsers provide an appropriate virtual keyboard.",
    tags: ["input", "tel", "mobile"]
  },

  {
    id: "html-forms-q-044",
    quizId: "quiz_html_forms",
    order: 44,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which input type is intended for a URL?",
    options: [
      { id: "A", text: "url" },
      { id: "B", text: "link" },
      { id: "C", text: "website" },
      { id: "D", text: "href" }
    ],
    correctOptionId: "A",
    explanation: "`type=\"url\"` identifies an input as a URL and enables browser-level URL-oriented constraint validation.",
    tags: ["input", "url", "validation"]
  },

  {
    id: "html-forms-q-045",
    quizId: "quiz_html_forms",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "A login form contains an email input without a name attribute. What is the major problem if the form relies on normal HTML form submission?",
    options: [
      { id: "A", text: "Its value will not have a field name and therefore is generally not included as a successful form data entry" },
      { id: "B", text: "The browser automatically treats it as a password" },
      { id: "C", text: "The form cannot contain an email input" },
      { id: "D", text: "The email is automatically sent to the browser vendor" }
    ],
    correctOptionId: "A",
    explanation: "The `name` attribute is important for normal form serialization. A form control without a name generally does not contribute a named value to the submitted form data.",
    tags: ["name", "form-submission", "forms"]
  },

  {
    id: "html-forms-q-046",
    quizId: "quiz_html_forms",
    order: 46,
    type: "code",
    difficulty: "Advanced",
    question: "A developer wants a newsletter signup with a required email field and a submit button. Which implementation is the most appropriate?",
    options: [
      {
        id: "A",
        text: "<form><label for=\"email\">Email</label><input id=\"email\" name=\"email\" type=\"email\" required><button type=\"submit\">Subscribe</button></form>"
      },
      {
        id: "B",
        text: "<form><input type=\"email\" placeholder=\"Email\"><button type=\"button\">Subscribe</button></form>"
      },
      {
        id: "C",
        text: "<div><label>Email</label><input type=\"text\"><button>Subscribe</button></div>"
      },
      {
        id: "D",
        text: "<form><input id=\"email\" required><button type=\"button\">Subscribe</button></form>"
      }
    ],
    correctOptionId: "A",
    explanation: "The first option combines a form, explicit label association, semantic email input, required validation, a name for submission, and an explicit submit button.",
    tags: ["forms", "email", "required", "label", "submit"]
  },

  {
    id: "html-forms-q-047",
    quizId: "quiz_html_forms",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "A form has two radio buttons: `name=\"plan\" value=\"basic\"` and `name=\"plan\" value=\"pro\"`. If the user chooses Pro, what value is submitted for the group?",
    options: [
      { id: "A", text: "plan=pro" },
      { id: "B", text: "plan=basic&plan=pro" },
      { id: "C", text: "radio=pro" },
      { id: "D", text: "value=plan" }
    ],
    correctOptionId: "A",
    explanation: "Because both controls share the same `name`, they form one radio group. Only the selected radio contributes its name/value pair, so the result is `plan=pro`.",
    tags: ["radio", "name", "value", "form-submission"]
  },

  {
    id: "html-forms-q-048",
    quizId: "quiz_html_forms",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "A developer has a button inside a form that opens a client-side modal instead of submitting the form. Which choice is safest if the button should not submit the form?",
    options: [
      { id: "A", text: "<button type=\"button\">Open Modal</button>" },
      { id: "B", text: "<button>Open Modal</button>" },
      { id: "C", text: "<button type=\"submit\">Open Modal</button>" },
      { id: "D", text: "<submit type=\"button\">Open Modal</submit>" }
    ],
    correctOptionId: "A",
    explanation: "A button inside a form defaults to submit behavior when its type is omitted. Explicitly using `type=\"button\"` prevents accidental form submission.",
    tags: ["button", "submit", "forms", "javascript"]
  },

  {
    id: "html-forms-q-049",
    quizId: "quiz_html_forms",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation provides the strongest basic accessibility relationship for a username field?",
    options: [
      {
        id: "A",
        text: "<label for=\"username\">Username</label><input id=\"username\" name=\"username\" type=\"text\">"
      },
      {
        id: "B",
        text: "<span>Username</span><input name=\"username\" type=\"text\">"
      },
      {
        id: "C",
        text: "<input placeholder=\"Username\" name=\"username\" type=\"text\">"
      },
      {
        id: "D",
        text: "<label>Username</label><input name=\"username\" type=\"text\">"
      }
    ],
    correctOptionId: "A",
    explanation: "The label's `for` value explicitly matches the input's `id`, creating a clear programmatic association. A placeholder alone is not a substitute for a label.",
    tags: ["label", "id", "accessibility", "forms"]
  },

  {
    id: "html-forms-q-050",
    quizId: "quiz_html_forms",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "A developer is building a registration form. Which implementation demonstrates the strongest use of native HTML form features?",
    options: [
      {
        id: "A",
        text: "<form action=\"/register\" method=\"post\"><label for=\"email\">Email</label><input id=\"email\" name=\"email\" type=\"email\" required autocomplete=\"email\"><label for=\"age\">Age</label><input id=\"age\" name=\"age\" type=\"number\" min=\"13\" max=\"120\" required><button type=\"submit\">Create Account</button></form>"
      },
      {
        id: "B",
        text: "<div><input placeholder=\"Email\"><input placeholder=\"Age\"><div onclick=\"submit()\">Create Account</div></div>"
      },
      {
        id: "C",
        text: "<form><input type=\"text\"><button type=\"button\">Create Account</button></form>"
      },
      {
        id: "D",
        text: "<form action=\"/register\"><input type=\"email\"><input type=\"number\"><button>Register</button></form>"
      }
    ],
    correctOptionId: "A",
    explanation: "The first implementation uses semantic form structure, explicit labels, meaningful names, appropriate input types, native validation constraints, autocomplete guidance, an explicit HTTP method, and a real submit button. It uses the browser's built-in form capabilities instead of relying entirely on custom JavaScript.",
    tags: ["forms", "validation", "accessibility", "form-submission", "input-types"]
  }
];

export default htmlFormsQuestions;