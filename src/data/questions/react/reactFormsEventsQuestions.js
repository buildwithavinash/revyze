const reactFormsEventsQuestions = [
  {
    id: "react-forms-events-q-001",
    quizId: "quiz_react_forms_events",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a controlled input in React?",
    options: [
      {
        id: "A",
        text: "An input whose current value is controlled by React state."
      },
      {
        id: "B",
        text: "An input that cannot be changed by the user."
      },
      {
        id: "C",
        text: "An input controlled only by CSS."
      },
      {
        id: "D",
        text: "An input whose value is stored automatically in localStorage."
      }
    ],
    correctOptionId: "A",
    explanation: "A controlled input gets its current value from React state and normally updates that state through an event handler such as onChange.",
    tags: ["forms", "controlled-inputs", "state"]
  },

  {
    id: "react-forms-events-q-002",
    quizId: "quiz_react_forms_events",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which code creates a controlled text input?",
    options: [
      {
        id: "A",
        text: "<input value={name} onChange={e => setName(e.target.value)} />"
      },
      {
        id: "B",
        text: "<input value={name} />"
      },
      {
        id: "C",
        text: "<input state={name} onChange={setName} />"
      },
      {
        id: "D",
        text: "<input controlled={name} />"
      }
    ],
    correctOptionId: "A",
    explanation: "The value prop makes React state the source of truth, while onChange updates that state whenever the user edits the input.",
    tags: ["forms", "controlled-inputs", "onChange"]
  },

  {
    id: "react-forms-events-q-003",
    quizId: "quiz_react_forms_events",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does event.target.value usually provide for a text input's onChange event?",
    options: [
      {
        id: "A",
        text: "The input's current text value."
      },
      {
        id: "B",
        text: "The input's React state setter."
      },
      {
        id: "C",
        text: "The component's props object."
      },
      {
        id: "D",
        text: "The browser's current URL."
      }
    ],
    correctOptionId: "A",
    explanation: "For a text input event, event.target refers to the input element and its value property contains the current text entered by the user.",
    tags: ["events", "onChange", "input-value"]
  },

  {
    id: "react-forms-events-q-004",
    quizId: "quiz_react_forms_events",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which React event prop handles changes to an input?",
    options: [
      {
        id: "A",
        text: "onChange"
      },
      {
        id: "B",
        text: "onInputChange"
      },
      {
        id: "C",
        text: "changeHandler"
      },
      {
        id: "D",
        text: "onValueChangeOnly"
      }
    ],
    correctOptionId: "A",
    explanation: "React provides the onChange event prop for responding to changes in form controls.",
    tags: ["forms", "events", "onChange"]
  },

  {
    id: "react-forms-events-q-005",
    quizId: "quiz_react_forms_events",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of onSubmit on a React form?",
    options: [
      {
        id: "A",
        text: "To handle the form's submission event."
      },
      {
        id: "B",
        text: "To update every input automatically."
      },
      {
        id: "C",
        text: "To validate CSS."
      },
      {
        id: "D",
        text: "To create a new React component."
      }
    ],
    correctOptionId: "A",
    explanation: "The onSubmit prop lets a React component respond when the form is submitted, whether submission is triggered by a submit button or an appropriate keyboard action.",
    tags: ["forms", "onSubmit", "events"]
  },

  {
    id: "react-forms-events-q-006",
    quizId: "quiz_react_forms_events",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is event.preventDefault() commonly called inside a React form submit handler?",
    options: [
      {
        id: "A",
        text: "To prevent the browser's default form submission behavior."
      },
      {
        id: "B",
        text: "To prevent React from rendering the form."
      },
      {
        id: "C",
        text: "To clear every form field."
      },
      {
        id: "D",
        text: "To stop the submit handler from running."
      }
    ],
    correctOptionId: "A",
    explanation: "A browser form normally performs its default submission behavior. Calling preventDefault lets the React application handle the submission itself instead.",
    tags: ["forms", "onSubmit", "preventDefault"]
  },

  {
    id: "react-forms-events-q-007",
    quizId: "quiz_react_forms_events",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which is the correct way to attach a React click handler?",
    options: [
      {
        id: "A",
        text: "<button onClick={handleClick}>Save</button>"
      },
      {
        id: "B",
        text: "<button click={handleClick}>Save</button>"
      },
      {
        id: "C",
        text: "<button on-click={handleClick}>Save</button>"
      },
      {
        id: "D",
        text: "<button event={handleClick}>Save</button>"
      }
    ],
    correctOptionId: "A",
    explanation: "React event props use names such as onClick and receive a function that React can call when the event occurs.",
    tags: ["events", "onClick", "jsx"]
  },

  {
    id: "react-forms-events-q-008",
    quizId: "quiz_react_forms_events",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is this usually incorrect?\n\n<button onClick={handleSave()}>Save</button>",
    options: [
      {
        id: "A",
        text: "handleSave is called while rendering instead of when the button is clicked."
      },
      {
        id: "B",
        text: "React does not allow functions as event handlers."
      },
      {
        id: "C",
        text: "Buttons cannot have click events in React."
      },
      {
        id: "D",
        text: "Parentheses are invalid in JSX."
      }
    ],
    correctOptionId: "A",
    explanation: "The parentheses invoke handleSave immediately. To run it when the event occurs, pass the function itself or wrap the call in another function.",
    tags: ["events", "onClick", "common-mistakes"]
  },

  {
    id: "react-forms-events-q-009",
    quizId: "quiz_react_forms_events",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which code correctly passes an ID to a click handler?",
    options: [
      {
        id: "A",
        text: "<button onClick={() => deleteItem(item.id)}>Delete</button>"
      },
      {
        id: "B",
        text: "<button onClick={deleteItem(item.id)}>Delete</button>"
      },
      {
        id: "C",
        text: "<button onClick={item.id}>Delete</button>"
      },
      {
        id: "D",
        text: "<button click={() => deleteItem(item.id)}>Delete</button>"
      }
    ],
    correctOptionId: "A",
    explanation: "The arrow function delays the call until the click happens and then supplies item.id to deleteItem.",
    tags: ["events", "callbacks", "onClick"]
  },

  {
    id: "react-forms-events-q-010",
    quizId: "quiz_react_forms_events",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does onChange do in this controlled input?\n\n<input value={email} onChange={e => setEmail(e.target.value)} />",
    options: [
      {
        id: "A",
        text: "It synchronizes the React state with the user's current input."
      },
      {
        id: "B",
        text: "It submits the form automatically."
      },
      {
        id: "C",
        text: "It prevents all keyboard input."
      },
      {
        id: "D",
        text: "It changes the input's CSS."
      }
    ],
    correctOptionId: "A",
    explanation: "Every change produces an event, and the handler reads the new value and stores it in React state. The state then controls the input's value.",
    tags: ["controlled-inputs", "onChange", "state"]
  },

  {
    id: "react-forms-events-q-011",
    quizId: "quiz_react_forms_events",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main advantage of controlled inputs?",
    options: [
      {
        id: "A",
        text: "React state becomes the source of truth for the input value."
      },
      {
        id: "B",
        text: "The browser can no longer change the input."
      },
      {
        id: "C",
        text: "The input no longer needs an event handler."
      },
      {
        id: "D",
        text: "The input is automatically stored on the server."
      }
    ],
    correctOptionId: "A",
    explanation: "Controlled inputs make the current form value explicit in React state, which makes validation, conditional UI, and submission logic easier to coordinate.",
    tags: ["controlled-inputs", "forms", "state"]
  },

  {
    id: "react-forms-events-q-012",
    quizId: "quiz_react_forms_events",
    order: 12,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What happens if an input has value={name} but no onChange handler, while name is a state value?",
    options: [
      {
        id: "A",
        text: "The input is effectively read-only because React keeps assigning the state value."
      },
      {
        id: "B",
        text: "The input automatically updates the state."
      },
      {
        id: "C",
        text: "React converts the input into an uncontrolled input."
      },
      {
        id: "D",
        text: "The value prop is ignored."
      }
    ],
    correctOptionId: "A",
    explanation: "When React controls an input through value, the displayed value comes from React. Without logic that updates that value, user edits cannot change the controlled value.",
    tags: ["controlled-inputs", "value", "common-mistakes"]
  },

  {
    id: "react-forms-events-q-013",
    quizId: "quiz_react_forms_events",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute should normally be used to connect a label to an input in JSX?",
    options: [
      {
        id: "A",
        text: "htmlFor"
      },
      {
        id: "B",
        text: "forInput"
      },
      {
        id: "C",
        text: "labelFor"
      },
      {
        id: "D",
        text: "inputFor"
      }
    ],
    correctOptionId: "A",
    explanation: "JSX uses htmlFor for the HTML label for attribute. The value should match the input's id.",
    tags: ["forms", "labels", "accessibility"]
  },

  {
    id: "react-forms-events-q-014",
    quizId: "quiz_react_forms_events",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which markup correctly associates a label with an input?",
    options: [
      {
        id: "A",
        text: "<label htmlFor=\"email\">Email</label><input id=\"email\" />"
      },
      {
        id: "B",
        text: "<label forInput=\"email\">Email</label><input name=\"email\" />"
      },
      {
        id: "C",
        text: "<label id=\"email\">Email</label><input label=\"email\" />"
      },
      {
        id: "D",
        text: "<label input=\"email\">Email</label><input id=\"other\" />"
      }
    ],
    correctOptionId: "A",
    explanation: "The label's htmlFor value matches the input's id, creating the correct association for accessibility and label interaction.",
    tags: ["forms", "labels", "accessibility"]
  },

  {
    id: "react-forms-events-q-015",
    quizId: "quiz_react_forms_events",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which input type is appropriate for an email address?",
    options: [
      {
        id: "A",
        text: "email"
      },
      {
        id: "B",
        text: "mailbox"
      },
      {
        id: "C",
        text: "text-email"
      },
      {
        id: "D",
        text: "address"
      }
    ],
    correctOptionId: "A",
    explanation: "The email input type communicates that the field is intended for an email address and enables relevant browser behavior and validation.",
    tags: ["forms", "input-types", "email"]
  },

  {
    id: "react-forms-events-q-016",
    quizId: "quiz_react_forms_events",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which input type is appropriate for selecting a boolean choice such as 'Accept terms'?",
    options: [
      {
        id: "A",
        text: "checkbox"
      },
      {
        id: "B",
        text: "boolean"
      },
      {
        id: "C",
        text: "toggle"
      },
      {
        id: "D",
        text: "choice"
      }
    ],
    correctOptionId: "A",
    explanation: "Checkboxes represent independent boolean choices and expose their checked state through the checked property.",
    tags: ["forms", "checkbox", "input-types"]
  },

  {
    id: "react-forms-events-q-017",
    quizId: "quiz_react_forms_events",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "For a controlled checkbox, which property should normally be controlled?",
    options: [
      {
        id: "A",
        text: "checked"
      },
      {
        id: "B",
        text: "valueText"
      },
      {
        id: "C",
        text: "selectedValue"
      },
      {
        id: "D",
        text: "active"
      }
    ],
    correctOptionId: "A",
    explanation: "Checkboxes represent a checked/unchecked state, so the checked prop is used to control that state.",
    tags: ["forms", "checkbox", "controlled-inputs"]
  },

  {
    id: "react-forms-events-q-018",
    quizId: "quiz_react_forms_events",
    order: 18,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which expression reads the checked state of a checkbox event?",
    options: [
      {
        id: "A",
        text: "event.target.checked"
      },
      {
        id: "B",
        text: "event.target.valueChecked"
      },
      {
        id: "C",
        text: "event.checked.target"
      },
      {
        id: "D",
        text: "event.value.checked"
      }
    ],
    correctOptionId: "A",
    explanation: "The checkbox DOM element exposes its boolean checked state through target.checked.",
    tags: ["forms", "checkbox", "events"]
  },

  {
    id: "react-forms-events-q-019",
    quizId: "quiz_react_forms_events",
    order: 19,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main difference between a checkbox's value and checked properties?",
    options: [
      {
        id: "A",
        text: "checked represents whether it is selected, while value represents its associated value."
      },
      {
        id: "B",
        text: "checked always contains the user's name."
      },
      {
        id: "C",
        text: "value is always a boolean and checked is always a string."
      },
      {
        id: "D",
        text: "They are interchangeable."
      }
    ],
    correctOptionId: "A",
    explanation: "For checkboxes, checked describes whether the control is selected, while value represents the control's value attribute.",
    tags: ["forms", "checkbox", "events"]
  },

  {
    id: "react-forms-events-q-020",
    quizId: "quiz_react_forms_events",
    order: 20,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does a select element's value represent in a controlled React form?",
    options: [
      {
        id: "A",
        text: "The currently selected option's value."
      },
      {
        id: "B",
        text: "The number of options in the dropdown."
      },
      {
        id: "C",
        text: "The text of every option combined."
      },
      {
        id: "D",
        text: "The React component's state object."
      }
    ],
    correctOptionId: "A",
    explanation: "A controlled select uses its value prop to determine which option is selected.",
    tags: ["forms", "select", "controlled-inputs"]
  },

  {
    id: "react-forms-events-q-021",
    quizId: "quiz_react_forms_events",
    order: 21,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which is a valid controlled select pattern?",
    options: [
      {
        id: "A",
        text: "<select value={role} onChange={e => setRole(e.target.value)}>...</select>"
      },
      {
        id: "B",
        text: "<select selected={role} onChange={setRole}>...</select>"
      },
      {
        id: "C",
        text: "<select state={role}>...</select>"
      },
      {
        id: "D",
        text: "<select valueState={role}>...</select>"
      }
    ],
    correctOptionId: "A",
    explanation: "The select's value is controlled by role, and onChange reads the newly selected option's value and updates state.",
    tags: ["forms", "select", "onChange"]
  },

  {
    id: "react-forms-events-q-022",
    quizId: "quiz_react_forms_events",
    order: 22,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the name attribute on a form control?",
    options: [
      {
        id: "A",
        text: "It identifies the control's field name in form data and can also be used by browser form behavior."
      },
      {
        id: "B",
        text: "It automatically creates React state."
      },
      {
        id: "C",
        text: "It makes the input required."
      },
      {
        id: "D",
        text: "It assigns a CSS class."
      }
    ],
    correctOptionId: "A",
    explanation: "The name attribute identifies a form field, particularly when form data is serialized or submitted using standard form mechanisms.",
    tags: ["forms", "name", "form-data"]
  },

  {
    id: "react-forms-events-q-023",
    quizId: "quiz_react_forms_events",
    order: 23,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the required attribute communicate for a form input?",
    options: [
      {
        id: "A",
        text: "The browser should require a value before allowing normal form submission."
      },
      {
        id: "B",
        text: "React will automatically create a state variable."
      },
      {
        id: "C",
        text: "The field will always contain a value."
      },
      {
        id: "D",
        text: "The field becomes read-only."
      }
    ],
    correctOptionId: "A",
    explanation: "required participates in the browser's built-in constraint validation and indicates that the control must have a value before normal submission.",
    tags: ["forms", "validation", "required"]
  },

  {
    id: "react-forms-events-q-024",
    quizId: "quiz_react_forms_events",
    order: 24,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does type=\"submit\" generally do when used on a button inside a form?",
    options: [
      {
        id: "A",
        text: "It makes the button a submit control for the form."
      },
      {
        id: "B",
        text: "It automatically sends data to a React state variable."
      },
      {
        id: "C",
        text: "It prevents form submission."
      },
      {
        id: "D",
        text: "It turns the button into a checkbox."
      }
    ],
    correctOptionId: "A",
    explanation: "A submit button participates in form submission, causing the form's submit event to occur when the button is activated.",
    tags: ["forms", "submit", "buttons"]
  },

  {
    id: "react-forms-events-q-025",
    quizId: "quiz_react_forms_events",
    order: 25,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a common reason to place form logic on the form's onSubmit rather than only on a submit button's onClick?",
    options: [
      {
        id: "A",
        text: "The form's submit event also handles submission triggered through keyboard interaction."
      },
      {
        id: "B",
        text: "onSubmit only works with mouse clicks."
      },
      {
        id: "C",
        text: "Buttons cannot have onClick handlers."
      },
      {
        id: "D",
        text: "React does not support form-level events."
      }
    ],
    correctOptionId: "A",
    explanation: "Handling the form's submit event centralizes submission behavior and covers normal form submission mechanisms, including appropriate keyboard submission.",
    tags: ["forms", "onSubmit", "accessibility"]
  },

  {
    id: "react-forms-events-q-026",
    quizId: "quiz_react_forms_events",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What will this submit handler do?\n\nfunction handleSubmit(e) {\n  e.preventDefault();\n  console.log(\"submitted\");\n}",
    options: [
      {
        id: "A",
        text: "It prevents the default browser submission and logs submitted."
      },
      {
        id: "B",
        text: "It prevents the handler from running."
      },
      {
        id: "C",
        text: "It reloads the page before logging."
      },
      {
        id: "D",
        text: "It clears every input automatically."
      }
    ],
    correctOptionId: "A",
    explanation: "preventDefault stops the default action, while the following console.log still executes normally.",
    tags: ["forms", "preventDefault", "event-handling"]
  },

  {
    id: "react-forms-events-q-027",
    quizId: "quiz_react_forms_events",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A form contains a controlled input whose state is named email. Which code correctly handles submission and accesses the current email?",
    options: [
      {
        id: "A",
        text: "function handleSubmit(e) { e.preventDefault(); console.log(email); }"
      },
      {
        id: "B",
        text: "function handleSubmit(e) { e.preventDefault(); console.log(e.email); }"
      },
      {
        id: "C",
        text: "function handleSubmit(e) { console.log(e.state.email); }"
      },
      {
        id: "D",
        text: "function handleSubmit(e) { console.log(form.email.state); }"
      }
    ],
    correctOptionId: "A",
    explanation: "Because email is controlled by React state, the current value is already available through the email state variable when the submit handler runs.",
    tags: ["forms", "controlled-inputs", "onSubmit"]
  },

  {
    id: "react-forms-events-q-028",
    quizId: "quiz_react_forms_events",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is generally appropriate for validating a controlled email field before submitting application data?",
    options: [
      {
        id: "A",
        text: "Read the current state value, validate it, and submit only when it satisfies the required rules."
      },
      {
        id: "B",
        text: "Modify the input's DOM value directly and ignore state."
      },
      {
        id: "C",
        text: "Always submit first and validate later."
      },
      {
        id: "D",
        text: "Disable React rendering while validation runs."
      }
    ],
    correctOptionId: "A",
    explanation: "Controlled forms make the current values available in React state, allowing validation to happen before the application sends or processes the data.",
    tags: ["forms", "validation", "controlled-inputs"]
  },

  {
    id: "react-forms-events-q-029",
    quizId: "quiz_react_forms_events",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a common way to display a validation error for a controlled field?",
    options: [
      {
        id: "A",
        text: "Keep validation information in state or derive it from the current input state and render an error message conditionally."
      },
      {
        id: "B",
        text: "Throw a JavaScript exception for every invalid keystroke."
      },
      {
        id: "C",
        text: "Modify the browser's DOM manually after every render."
      },
      {
        id: "D",
        text: "Store the error only in a CSS selector."
      }
    ],
    correctOptionId: "A",
    explanation: "React can render validation feedback based on current form state, keeping the UI synchronized with the form's validation status.",
    tags: ["forms", "validation", "state"]
  },

  {
    id: "react-forms-events-q-030",
    quizId: "quiz_react_forms_events",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should form validation usually happen on the server as well as in the client when data is submitted to a backend?",
    options: [
      {
        id: "A",
        text: "Client-side validation can be bypassed, so the server must enforce its own rules."
      },
      {
        id: "B",
        text: "React validation is never executed."
      },
      {
        id: "C",
        text: "Browsers cannot validate strings."
      },
      {
        id: "D",
        text: "Server validation is only needed for CSS."
      }
    ],
    correctOptionId: "A",
    explanation: "Client-side validation improves user experience but cannot be trusted as a security boundary because clients can be modified or bypassed. The server must validate incoming data independently.",
    tags: ["forms", "validation", "security"]
  },

  {
    id: "react-forms-events-q-031",
    quizId: "quiz_react_forms_events",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is React's event object commonly called in modern React event handlers?",
    options: [
      {
        id: "A",
        text: "A SyntheticEvent"
      },
      {
        id: "B",
        text: "A ReactStateEvent"
      },
      {
        id: "C",
        text: "A ComponentEventOnly"
      },
      {
        id: "D",
        text: "A BrowserStateObject"
      }
    ],
    correctOptionId: "A",
    explanation: "React provides a cross-browser event interface commonly referred to as SyntheticEvent, exposing familiar event properties and methods.",
    tags: ["events", "SyntheticEvent", "react"]
  },

  {
    id: "react-forms-events-q-032",
    quizId: "quiz_react_forms_events",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes React's SyntheticEvent system?",
    options: [
      {
        id: "A",
        text: "It provides a consistent event interface for React event handlers."
      },
      {
        id: "B",
        text: "It replaces JavaScript event handling entirely."
      },
      {
        id: "C",
        text: "It only works for keyboard events."
      },
      {
        id: "D",
        text: "It prevents events from reaching the browser."
      }
    ],
    correctOptionId: "A",
    explanation: "React's event system provides a consistent interface around browser events so event handlers can work with a React-defined event object.",
    tags: ["SyntheticEvent", "events", "react"]
  },

  {
    id: "react-forms-events-q-033",
    quizId: "quiz_react_forms_events",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does event.currentTarget generally refer to inside a React event handler?",
    options: [
      {
        id: "A",
        text: "The element on which the current event handler is registered."
      },
      {
        id: "B",
        text: "Always the deepest element that initiated the event."
      },
      {
        id: "C",
        text: "The React component function."
      },
      {
        id: "D",
        text: "The current state object."
      }
    ],
    correctOptionId: "A",
    explanation: "currentTarget refers to the element whose event listener is currently handling the event, while target refers to the original event target.",
    tags: ["events", "currentTarget", "target"]
  },

  {
    id: "react-forms-events-q-034",
    quizId: "quiz_react_forms_events",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the key distinction between event.target and event.currentTarget?",
    options: [
      {
        id: "A",
        text: "target is the original event target, while currentTarget is the element currently handling the event."
      },
      {
        id: "B",
        text: "target always refers to React state, while currentTarget refers to props."
      },
      {
        id: "C",
        text: "They always refer to different elements."
      },
      {
        id: "D",
        text: "currentTarget only exists for form events."
      }
    ],
    correctOptionId: "A",
    explanation: "The two properties are especially useful when events involve nested elements or bubbling. target identifies the original target, while currentTarget identifies the element whose handler is executing.",
    tags: ["events", "target", "currentTarget", "event-bubbling"]
  },

  {
    id: "react-forms-events-q-035",
    quizId: "quiz_react_forms_events",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does event.stopPropagation() do?",
    options: [
      {
        id: "A",
        text: "It prevents the event from continuing through the propagation path."
      },
      {
        id: "B",
        text: "It prevents the browser's default action."
      },
      {
        id: "C",
        text: "It clears React state."
      },
      {
        id: "D",
        text: "It stops the event handler itself from executing."
      }
    ],
    correctOptionId: "A",
    explanation: "stopPropagation controls event propagation. It is different from preventDefault, which controls the browser's default action.",
    tags: ["events", "stopPropagation", "event-bubbling"]
  },

  {
    id: "react-forms-events-q-036",
    quizId: "quiz_react_forms_events",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between preventDefault() and stopPropagation()?",
    options: [
      {
        id: "A",
        text: "preventDefault stops the default browser action, while stopPropagation controls event propagation."
      },
      {
        id: "B",
        text: "They always do exactly the same thing."
      },
      {
        id: "C",
        text: "preventDefault changes React state, while stopPropagation changes props."
      },
      {
        id: "D",
        text: "stopPropagation submits the form while preventDefault cancels it."
      }
    ],
    correctOptionId: "A",
    explanation: "These methods solve different problems: preventDefault affects the browser's default behavior, while stopPropagation affects how the event travels through the event propagation path.",
    tags: ["events", "preventDefault", "stopPropagation"]
  },

  {
    id: "react-forms-events-q-037",
    quizId: "quiz_react_forms_events",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What generally happens when a child button is clicked and the parent also has an onClick handler?",
    options: [
      {
        id: "A",
        text: "The click can bubble from the button to the parent."
      },
      {
        id: "B",
        text: "Only the parent handler can ever run."
      },
      {
        id: "C",
        text: "React automatically stops propagation for every click."
      },
      {
        id: "D",
        text: "The browser reloads the page."
      }
    ],
    correctOptionId: "A",
    explanation: "Events generally bubble through the DOM hierarchy. React's event system supports this propagation behavior unless propagation is stopped.",
    tags: ["events", "event-bubbling", "onClick"]
  },

  {
    id: "react-forms-events-q-038",
    quizId: "quiz_react_forms_events",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "A form has an onSubmit handler. Why might pressing Enter inside a text input trigger that handler?",
    options: [
      {
        id: "A",
        text: "Pressing Enter can submit a form when the form has an appropriate submit mechanism."
      },
      {
        id: "B",
        text: "Enter always calls every JavaScript function on the page."
      },
      {
        id: "C",
        text: "React treats Enter as a mouse click."
      },
      {
        id: "D",
        text: "Text inputs cannot receive keyboard events."
      }
    ],
    correctOptionId: "A",
    explanation: "HTML forms have built-in submission behavior, and keyboard interaction such as Enter can activate form submission in appropriate circumstances.",
    tags: ["forms", "onSubmit", "keyboard-events"]
  },

  {
    id: "react-forms-events-q-039",
    quizId: "quiz_react_forms_events",
    order: 39,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which event prop handles keyboard input in React?",
    options: [
      {
        id: "A",
        text: "onKeyDown"
      },
      {
        id: "B",
        text: "onKeyboard"
      },
      {
        id: "C",
        text: "keyboardEvent"
      },
      {
        id: "D",
        text: "onKeyPressOnly"
      }
    ],
    correctOptionId: "A",
    explanation: "onKeyDown is a standard React keyboard event prop that fires when a key is pressed down.",
    tags: ["events", "keyboard", "onKeyDown"]
  },

  {
    id: "react-forms-events-q-040",
    quizId: "quiz_react_forms_events",
    order: 40,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does event.key commonly provide in a keyboard event?",
    options: [
      {
        id: "A",
        text: "The key value associated with the keyboard event, such as Enter or Escape."
      },
      {
        id: "B",
        text: "The React state setter."
      },
      {
        id: "C",
        text: "The input's CSS class."
      },
      {
        id: "D",
        text: "The form's validation result."
      }
    ],
    correctOptionId: "A",
    explanation: "The key property identifies the logical key involved in the event, allowing code to respond to keys such as Enter or Escape.",
    tags: ["events", "keyboard", "event.key"]
  },

  {
    id: "react-forms-events-q-041",
    quizId: "quiz_react_forms_events",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "A controlled input displays a value from state, but the onChange handler stores a transformed value. What determines what the user ultimately sees in the input?",
    options: [
      {
        id: "A",
        text: "The value supplied to the input from the latest React state."
      },
      {
        id: "B",
        text: "The browser permanently stores the user's raw input."
      },
      {
        id: "C",
        text: "The onChange event's original value is always displayed."
      },
      {
        id: "D",
        text: "React ignores the value prop after the first render."
      }
    ],
    correctOptionId: "A",
    explanation: "In a controlled input, React state is the source of truth. If the handler transforms the input before updating state, the next render displays the transformed state value.",
    tags: ["controlled-inputs", "state", "onChange"]
  },

  {
    id: "react-forms-events-q-042",
    quizId: "quiz_react_forms_events",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\nconst [name, setName] = useState(\"\");\n\n<input\n  value={name.toUpperCase()}\n  onChange={e => setName(e.target.value)}\n/>\n\nWhat is a likely user experience issue with this implementation?",
    options: [
      {
        id: "A",
        text: "The displayed value is transformed to uppercase on each render, which may make normal typing behavior surprising."
      },
      {
        id: "B",
        text: "React cannot render uppercase strings."
      },
      {
        id: "C",
        text: "onChange cannot update state."
      },
      {
        id: "D",
        text: "The input automatically becomes uncontrolled."
      }
    ],
    correctOptionId: "A",
    explanation: "Because the rendered value is always name.toUpperCase(), React replaces the displayed value with the transformed version after updates. Transformations in controlled inputs should be designed deliberately to preserve a good editing experience.",
    tags: ["controlled-inputs", "state", "input-formatting"]
  },

  {
    id: "react-forms-events-q-043",
    quizId: "quiz_react_forms_events",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is storing multiple related form fields in one object state often useful?",
    options: [
      {
        id: "A",
        text: "It can group related form data into one logical state value."
      },
      {
        id: "B",
        text: "React requires all form fields to share one state object."
      },
      {
        id: "C",
        text: "It prevents every input from needing an onChange handler."
      },
      {
        id: "D",
        text: "It automatically validates all fields."
      }
    ],
    correctOptionId: "A",
    explanation: "An object can represent the complete form model, making it convenient to read and submit related fields together. It still needs immutable updates when individual properties change.",
    tags: ["forms", "state", "objects"]
  },

  {
    id: "react-forms-events-q-044",
    quizId: "quiz_react_forms_events",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which handler correctly updates one field in an object-based form state?",
    options: [
      {
        id: "A",
        text: "setForm(prev => ({ ...prev, email: e.target.value }))"
      },
      {
        id: "B",
        text: "setForm(form.email = e.target.value)"
      },
      {
        id: "C",
        text: "form.email = e.target.value"
      },
      {
        id: "D",
        text: "setForm({ email: e.target.value })"
      }
    ],
    correctOptionId: "A",
    explanation: "The functional updater creates a new object, preserves the other fields with the spread operator, and replaces only email.",
    tags: ["forms", "state", "immutability", "objects"]
  },

  {
    id: "react-forms-events-q-045",
    quizId: "quiz_react_forms_events",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can this update be problematic for a multi-field form?\n\nsetForm({ email: e.target.value });",
    options: [
      {
        id: "A",
        text: "It replaces the entire form state object and can discard other fields."
      },
      {
        id: "B",
        text: "React cannot store strings in objects."
      },
      {
        id: "C",
        text: "setForm only accepts functions."
      },
      {
        id: "D",
        text: "The email value will always become undefined."
      }
    ],
    correctOptionId: "A",
    explanation: "When replacing object state, the new object contains only the properties provided. If other fields are not copied, they are removed from the state object.",
    tags: ["forms", "state", "immutability", "common-mistakes"]
  },

  {
    id: "react-forms-events-q-046",
    quizId: "quiz_react_forms_events",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A form contains name and email inputs. Which strategy best avoids duplicating separate change-handler functions for every field?",
    options: [
      {
        id: "A",
        text: "Use the input's name attribute and a shared change handler that updates the corresponding state property."
      },
      {
        id: "B",
        text: "Store all fields in localStorage on every keystroke."
      },
      {
        id: "C",
        text: "Use one state variable for every character."
      },
      {
        id: "D",
        text: "Remove the name attributes."
      }
    ],
    correctOptionId: "A",
    explanation: "A shared handler can read event.target.name and event.target.value, then update the matching property in an object-based form state.",
    tags: ["forms", "onChange", "name", "state"]
  },

  {
    id: "react-forms-events-q-047",
    quizId: "quiz_react_forms_events",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which shared form handler correctly handles text inputs and checkboxes stored in one object?",
    options: [
      {
        id: "A",
        text: "const { name, type, value, checked } = e.target; setForm(prev => ({ ...prev, [name]: type === \"checkbox\" ? checked : value }));"
      },
      {
        id: "B",
        text: "setForm(prev => ({ [e.target.name]: e.target.value }));"
      },
      {
        id: "C",
        text: "setForm(e.target.checked);"
      },
      {
        id: "D",
        text: "setForm(prev => ({ ...prev, value: checked }));"
      }
    ],
    correctOptionId: "A",
    explanation: "Text-like controls use value while checkboxes represent their boolean state through checked. The handler chooses the appropriate property based on the input type and preserves the remaining form fields.",
    tags: ["forms", "checkbox", "onChange", "state"]
  },

  {
    id: "react-forms-events-q-048",
    quizId: "quiz_react_forms_events",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is one reason to keep form submission logic in a single onSubmit handler?",
    options: [
      {
        id: "A",
        text: "It provides one place to validate, prevent default behavior, and process the form data."
      },
      {
        id: "B",
        text: "It prevents inputs from receiving changes."
      },
      {
        id: "C",
        text: "It automatically sends the data to every API."
      },
      {
        id: "D",
        text: "It makes all form fields uncontrolled."
      }
    ],
    correctOptionId: "A",
    explanation: "Centralizing submission logic makes the form's submission flow easier to reason about: prevent default behavior, validate data, process or send it, and handle success or failure.",
    tags: ["forms", "onSubmit", "validation", "architecture"]
  },

  {
    id: "react-forms-events-q-049",
    quizId: "quiz_react_forms_events",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A form submits data to an API. Which sequence is generally the most appropriate?",
    options: [
      {
        id: "A",
        text: "Prevent default submission, validate the current data, submit valid data, then handle the result."
      },
      {
        id: "B",
        text: "Reload the page, then read the React state."
      },
      {
        id: "C",
        text: "Submit invalid data first and validate it afterward."
      },
      {
        id: "D",
        text: "Ignore the submit event and rely only on button styling."
      }
    ],
    correctOptionId: "A",
    explanation: "For a React-managed form, the submit handler can prevent the browser's default navigation, validate current state, send acceptable data to the API, and then respond to success or failure.",
    tags: ["forms", "onSubmit", "validation", "api"]
  },

  {
    id: "react-forms-events-q-050",
    quizId: "quiz_react_forms_events",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "A login form has controlled email and password fields. The user clicks Submit, but the page reloads and the API request never completes. Which issue is the most likely cause if the handler is attached correctly?",
    options: [
      {
        id: "A",
        text: "The submit handler did not call event.preventDefault(), so the browser performed its default form submission."
      },
      {
        id: "B",
        text: "Controlled inputs cannot be submitted."
      },
      {
        id: "C",
        text: "React does not support password inputs."
      },
      {
        id: "D",
        text: "onSubmit only works with checkboxes."
      }
    ],
    correctOptionId: "A",
    explanation: "Without preventDefault(), a normal browser form submission can navigate or reload the page before the application's asynchronous submission flow completes.",
    tags: ["forms", "onSubmit", "preventDefault", "debugging"]
  }
];

export default reactFormsEventsQuestions;