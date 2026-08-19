const cssAnimationsTransitionsQuestions = [
  {
    id: "css-animations-transitions-q-001",
    quizId: "quiz_css_animations_transitions",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of a CSS transition?",
    options: [
      { id: "A", text: "To gradually animate a change between CSS property values" },
      { id: "B", text: "To create a new HTML element" },
      { id: "C", text: "To permanently change the DOM structure" },
      { id: "D", text: "To execute JavaScript code" }
    ],
    correctOptionId: "A",
    explanation: "A transition smoothly interpolates between an element's previous and new values for supported CSS properties.",
    tags: ["transitions", "fundamentals"]
  },

  {
    id: "css-animations-transitions-q-002",
    quizId: "quiz_css_animations_transitions",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which CSS property specifies how long a transition should take?",
    options: [
      { id: "A", text: "transition-delay" },
      { id: "B", text: "transition-duration" },
      { id: "C", text: "animation-duration" },
      { id: "D", text: "transition-speed" }
    ],
    correctOptionId: "B",
    explanation: "transition-duration defines how long the transition takes to complete.",
    tags: ["transition-duration", "transitions"]
  },

  {
    id: "css-animations-transitions-q-003",
    quizId: "quiz_css_animations_transitions",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does transition-property determine?",
    options: [
      { id: "A", text: "Which CSS property or properties should transition" },
      { id: "B", text: "How many keyframes an animation has" },
      { id: "C", text: "The number of elements on the page" },
      { id: "D", text: "The animation's frame rate" }
    ],
    correctOptionId: "A",
    explanation: "transition-property specifies the CSS properties whose value changes should be animated.",
    tags: ["transition-property", "transitions"]
  },

  {
    id: "css-animations-transitions-q-004",
    quizId: "quiz_css_animations_transitions",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value makes a transition begin slowly, speed up, and then slow down?",
    options: [
      { id: "A", text: "linear" },
      { id: "B", text: "steps(1)" },
      { id: "C", text: "ease" },
      { id: "D", text: "none" }
    ],
    correctOptionId: "C",
    explanation: "The default ease timing function starts relatively slowly, accelerates, and slows again toward the end.",
    tags: ["timing-functions", "ease"]
  },

  {
    id: "css-animations-transitions-q-005",
    quizId: "quiz_css_animations_transitions",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does transition-delay do?",
    options: [
      { id: "A", text: "Changes the transition's final value" },
      { id: "B", text: "Delays the start of the transition" },
      { id: "C", text: "Repeats the transition" },
      { id: "D", text: "Changes the transition's direction" }
    ],
    correctOptionId: "B",
    explanation: "transition-delay specifies how long the browser waits before starting the transition.",
    tags: ["transition-delay", "transitions"]
  },

  {
    id: "css-animations-transitions-q-006",
    quizId: "quiz_css_animations_transitions",
    order: 6,
    type: "code",
    difficulty: "Beginner",
    question: "What happens when this CSS is applied?\n\n.button {\n  transition: background-color 300ms ease;\n}\n\n.button:hover {\n  background-color: black;\n}",
    options: [
      { id: "A", text: "The background color changes instantly" },
      { id: "B", text: "The background color transitions over 300ms when the hover state changes" },
      { id: "C", text: "The button becomes invisible after 300ms" },
      { id: "D", text: "The button moves 300px" }
    ],
    correctOptionId: "B",
    explanation: "The transition declaration tells the browser to animate changes to background-color over 300 milliseconds using the ease timing function.",
    tags: ["transition", "hover"]
  },

  {
    id: "css-animations-transitions-q-007",
    quizId: "quiz_css_animations_transitions",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which timing function changes at a constant rate throughout the transition?",
    options: [
      { id: "A", text: "ease-in" },
      { id: "B", text: "ease-out" },
      { id: "C", text: "linear" },
      { id: "D", text: "ease-in-out" }
    ],
    correctOptionId: "C",
    explanation: "linear uses a constant rate of change from start to finish.",
    tags: ["linear", "timing-functions"]
  },

  {
    id: "css-animations-transitions-q-008",
    quizId: "quiz_css_animations_transitions",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is a CSS keyframe animation?",
    options: [
      { id: "A", text: "An animation defined using @keyframes and animation properties" },
      { id: "B", text: "A JavaScript event listener" },
      { id: "C", text: "A transition that only works on links" },
      { id: "D", text: "A method for creating HTML forms" }
    ],
    correctOptionId: "A",
    explanation: "CSS animations use @keyframes to define stages of an animation and animation-* properties to control its execution.",
    tags: ["keyframes", "animations"]
  },

  {
    id: "css-animations-transitions-q-009",
    quizId: "quiz_css_animations_transitions",
    order: 9,
    type: "code",
    difficulty: "Beginner",
    question: "Which syntax correctly defines a keyframe animation?",
    options: [
      { id: "A", text: "@animation fade { ... }" },
      { id: "B", text: "@frames fade { ... }" },
      { id: "C", text: "@keyframes fade { ... }" },
      { id: "D", text: "@animate fade { ... }" }
    ],
    correctOptionId: "C",
    explanation: "CSS keyframe animations are defined using the @keyframes at-rule.",
    tags: ["keyframes", "syntax"]
  },

  {
    id: "css-animations-transitions-q-010",
    quizId: "quiz_css_animations_transitions",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does animation-duration specify?",
    options: [
      { id: "A", text: "How long one animation cycle takes" },
      { id: "B", text: "How many times the animation repeats" },
      { id: "C", text: "Which element receives the animation" },
      { id: "D", text: "How far an element moves" }
    ],
    correctOptionId: "A",
    explanation: "animation-duration specifies the amount of time required for one complete animation cycle.",
    tags: ["animation-duration", "animations"]
  },

  {
    id: "css-animations-transitions-q-011",
    quizId: "quiz_css_animations_transitions",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which property controls how many times a CSS animation repeats?",
    options: [
      { id: "A", text: "animation-count" },
      { id: "B", text: "animation-repeat" },
      { id: "C", text: "animation-iteration-count" },
      { id: "D", text: "animation-loop" }
    ],
    correctOptionId: "C",
    explanation: "animation-iteration-count specifies the number of times an animation should play. It can also be set to infinite.",
    tags: ["animation-iteration-count", "animations"]
  },

  {
    id: "css-animations-transitions-q-012",
    quizId: "quiz_css_animations_transitions",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does animation-name specify?",
    options: [
      { id: "A", text: "The name of the @keyframes animation to use" },
      { id: "B", text: "The HTML class to animate" },
      { id: "C", text: "The animation's duration" },
      { id: "D", text: "The number of animation frames" }
    ],
    correctOptionId: "A",
    explanation: "animation-name connects an element to a named @keyframes rule.",
    tags: ["animation-name", "keyframes"]
  },

  {
    id: "css-animations-transitions-q-013",
    quizId: "quiz_css_animations_transitions",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does animation-delay do?",
    options: [
      { id: "A", text: "Changes the animation's final state" },
      { id: "B", text: "Waits for a specified amount of time before the animation begins" },
      { id: "C", text: "Controls animation repetition" },
      { id: "D", text: "Changes the animation's color" }
    ],
    correctOptionId: "B",
    explanation: "animation-delay specifies a waiting period before an animation starts.",
    tags: ["animation-delay", "animations"]
  },

  {
    id: "css-animations-transitions-q-014",
    quizId: "quiz_css_animations_transitions",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which value makes an animation repeat forever?",
    options: [
      { id: "A", text: "repeat" },
      { id: "B", text: "forever" },
      { id: "C", text: "loop" },
      { id: "D", text: "infinite" }
    ],
    correctOptionId: "D",
    explanation: "animation-iteration-count: infinite makes the animation repeat indefinitely.",
    tags: ["iteration-count", "infinite"]
  },

  {
    id: "css-animations-transitions-q-015",
    quizId: "quiz_css_animations_transitions",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What does this animation do?\n\n@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}",
    options: [
      { id: "A", text: "Moves the element from left to right" },
      { id: "B", text: "Changes the element from transparent to fully opaque" },
      { id: "C", text: "Rotates the element" },
      { id: "D", text: "Changes the element's width" }
    ],
    correctOptionId: "B",
    explanation: "The opacity changes from 0 to 1, creating a fade-in effect when the animation is applied.",
    tags: ["keyframes", "opacity", "fade"]
  },

  {
    id: "css-animations-transitions-q-016",
    quizId: "quiz_css_animations_transitions",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does animation-timing-function control?",
    options: [
      { id: "A", text: "The speed progression of the animation over time" },
      { id: "B", text: "The number of keyframes" },
      { id: "C", text: "Whether the animation exists" },
      { id: "D", text: "The animation's HTML structure" }
    ],
    correctOptionId: "A",
    explanation: "The timing function controls how quickly an animation progresses through its duration.",
    tags: ["animation-timing-function", "animations"]
  },

  {
    id: "css-animations-transitions-q-017",
    quizId: "quiz_css_animations_transitions",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the difference between ease-in and ease-out?",
    options: [
      { id: "A", text: "ease-in accelerates toward the end, while ease-out decelerates toward the end" },
      { id: "B", text: "They are exactly the same" },
      { id: "C", text: "ease-in changes color while ease-out changes position" },
      { id: "D", text: "ease-in repeats the animation while ease-out stops it" }
    ],
    correctOptionId: "A",
    explanation: "ease-in starts relatively slowly and accelerates, while ease-out starts faster and decelerates toward the end.",
    tags: ["ease-in", "ease-out", "timing-functions"]
  },

  {
    id: "css-animations-transitions-q-018",
    quizId: "quiz_css_animations_transitions",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which CSS property controls the direction in which an animation plays?",
    options: [
      { id: "A", text: "animation-direction" },
      { id: "B", text: "animation-flow" },
      { id: "C", text: "animation-order" },
      { id: "D", text: "animation-path" }
    ],
    correctOptionId: "A",
    explanation: "animation-direction controls whether the animation plays normally, in reverse, alternates, or alternates in reverse.",
    tags: ["animation-direction"]
  },

  {
    id: "css-animations-transitions-q-019",
    quizId: "quiz_css_animations_transitions",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does animation-direction: alternate do?",
    options: [
      { id: "A", text: "Runs the animation once and stops" },
      { id: "B", text: "Plays forward, then backward on the next iteration, repeating that pattern" },
      { id: "C", text: "Starts every iteration from the middle" },
      { id: "D", text: "Randomizes the animation direction" }
    ],
    correctOptionId: "B",
    explanation: "alternate makes odd iterations play forward and even iterations play backward.",
    tags: ["animation-direction", "alternate"]
  },

  {
    id: "css-animations-transitions-q-020",
    quizId: "quiz_css_animations_transitions",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does animation-fill-mode: forwards do?",
    options: [
      { id: "A", text: "Keeps the element at the styles defined by the final keyframe after the animation ends" },
      { id: "B", text: "Makes the animation repeat forever" },
      { id: "C", text: "Reverses the animation" },
      { id: "D", text: "Delays the animation" }
    ],
    correctOptionId: "A",
    explanation: "forwards causes the element to retain the computed styles from the final keyframe after the animation completes.",
    tags: ["animation-fill-mode", "forwards"]
  },

  {
    id: "css-animations-transitions-q-021",
    quizId: "quiz_css_animations_transitions",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does animation-fill-mode: backwards do during an animation delay?",
    options: [
      { id: "A", text: "It applies the first relevant keyframe styles during the delay" },
      { id: "B", text: "It permanently reverses the animation" },
      { id: "C", text: "It skips the delay" },
      { id: "D", text: "It doubles the animation duration" }
    ],
    correctOptionId: "A",
    explanation: "backwards applies the appropriate starting keyframe styles during the animation's delay period.",
    tags: ["animation-fill-mode", "backwards"]
  },

  {
    id: "css-animations-transitions-q-022",
    quizId: "quiz_css_animations_transitions",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does animation-play-state control?",
    options: [
      { id: "A", text: "Whether an animation is running or paused" },
      { id: "B", text: "The number of keyframes" },
      { id: "C", text: "The animation's color" },
      { id: "D", text: "The element's display type" }
    ],
    correctOptionId: "A",
    explanation: "animation-play-state accepts values such as running and paused.",
    tags: ["animation-play-state", "paused"]
  },

  {
    id: "css-animations-transitions-q-023",
    quizId: "quiz_css_animations_transitions",
    order: 23,
    type: "code",
    difficulty: "Intermediate",
    question: "Which CSS correctly pauses an animation?",
    options: [
      { id: "A", text: "animation-state: stopped;" },
      { id: "B", text: "animation-play-state: paused;" },
      { id: "C", text: "animation: pause;" },
      { id: "D", text: "animation-status: pause;" }
    ],
    correctOptionId: "B",
    explanation: "animation-play-state: paused pauses a running CSS animation at its current progress.",
    tags: ["animation-play-state", "paused"]
  },

  {
    id: "css-animations-transitions-q-024",
    quizId: "quiz_css_animations_transitions",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement about CSS transitions is correct?",
    options: [
      { id: "A", text: "A transition normally needs a change in the property's value to animate between states" },
      { id: "B", text: "A transition automatically repeats forever" },
      { id: "C", text: "A transition requires @keyframes" },
      { id: "D", text: "A transition can only animate opacity" }
    ],
    correctOptionId: "A",
    explanation: "Transitions interpolate between a property's previous and new computed values when a state or style change occurs.",
    tags: ["transitions", "fundamentals"]
  },

  {
    id: "css-animations-transitions-q-025",
    quizId: "quiz_css_animations_transitions",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which is a key difference between transitions and keyframe animations?",
    options: [
      { id: "A", text: "Keyframe animations can define multiple intermediate stages and run independently of a simple state change" },
      { id: "B", text: "Transitions can only use JavaScript" },
      { id: "C", text: "Keyframes cannot change CSS properties" },
      { id: "D", text: "Transitions always repeat forever" }
    ],
    correctOptionId: "A",
    explanation: "Transitions are generally tied to a change between states, while keyframe animations can define multiple stages and can run automatically according to animation settings.",
    tags: ["transitions", "animations", "keyframes"]
  },

  {
    id: "css-animations-transitions-q-026",
    quizId: "quiz_css_animations_transitions",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property is commonly considered a good candidate for performant animation?",
    options: [
      { id: "A", text: "transform" },
      { id: "B", text: "width" },
      { id: "C", text: "top" },
      { id: "D", text: "margin-left" }
    ],
    correctOptionId: "A",
    explanation: "transform is commonly preferred for movement and scaling animations because it can often be handled efficiently by the browser's rendering pipeline.",
    tags: ["transform", "performance"]
  },

  {
    id: "css-animations-transitions-q-027",
    quizId: "quiz_css_animations_transitions",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which CSS property is commonly used to create a rotation without changing document flow?",
    options: [
      { id: "A", text: "position" },
      { id: "B", text: "transform" },
      { id: "C", text: "float" },
      { id: "D", text: "display" }
    ],
    correctOptionId: "B",
    explanation: "transform: rotate(...) visually rotates an element without changing its normal layout position.",
    tags: ["transform", "rotate"]
  },

  {
    id: "css-animations-transitions-q-028",
    quizId: "quiz_css_animations_transitions",
    order: 28,
    type: "code",
    difficulty: "Intermediate",
    question: "What does this do?\n\ntransform: translateX(20px);",
    options: [
      { id: "A", text: "Moves the element visually 20px along the X axis" },
      { id: "B", text: "Changes its width to 20px" },
      { id: "C", text: "Rotates it by 20 degrees" },
      { id: "D", text: "Moves it 20px along the Y axis" }
    ],
    correctOptionId: "A",
    explanation: "translateX() moves an element along the horizontal X axis.",
    tags: ["transform", "translateX"]
  },

  {
    id: "css-animations-transitions-q-029",
    quizId: "quiz_css_animations_transitions",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does transform: scale(1.2) generally do?",
    options: [
      { id: "A", text: "Rotates the element 1.2 degrees" },
      { id: "B", text: "Scales the element to 120% of its transformed size" },
      { id: "C", text: "Moves the element 1.2px" },
      { id: "D", text: "Changes the element's opacity to 1.2" }
    ],
    correctOptionId: "B",
    explanation: "A scale factor of 1.2 enlarges the rendered element by 20% relative to its original transformed size.",
    tags: ["transform", "scale"]
  },

  {
    id: "css-animations-transitions-q-030",
    quizId: "quiz_css_animations_transitions",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property controls the origin point around which transforms occur?",
    options: [
      { id: "A", text: "transform-origin" },
      { id: "B", text: "transform-point" },
      { id: "C", text: "origin-transform" },
      { id: "D", text: "transform-anchor" }
    ],
    correctOptionId: "A",
    explanation: "transform-origin defines the point around which transformations such as rotation and scaling are applied.",
    tags: ["transform-origin", "transforms"]
  },

  {
    id: "css-animations-transitions-q-031",
    quizId: "quiz_css_animations_transitions",
    order: 31,
    type: "code",
    difficulty: "Intermediate",
    question: "What is the effect of this CSS?\n\n.card {\n  transition: transform 200ms ease;\n}\n.card:hover {\n  transform: scale(1.05);\n}",
    options: [
      { id: "A", text: "The card smoothly grows slightly when hovered" },
      { id: "B", text: "The card disappears on hover" },
      { id: "C", text: "The card moves 200px" },
      { id: "D", text: "The card rotates 200 degrees" }
    ],
    correctOptionId: "A",
    explanation: "The hover state changes the transform scale to 1.05, and the transition smoothly interpolates that change over 200ms.",
    tags: ["hover", "scale", "transition"]
  },

  {
    id: "css-animations-transitions-q-032",
    quizId: "quiz_css_animations_transitions",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is transform often preferred over changing left or top for animations?",
    options: [
      { id: "A", text: "Transforms can often avoid triggering expensive layout calculations for each animation frame" },
      { id: "B", text: "left and top cannot accept pixel values" },
      { id: "C", text: "transform only works on text" },
      { id: "D", text: "left and top are not CSS properties" }
    ],
    correctOptionId: "A",
    explanation: "Animating transform can often be handled more efficiently than animating layout-affecting properties such as top or left.",
    tags: ["transform", "performance", "layout"]
  },

  {
    id: "css-animations-transitions-q-033",
    quizId: "quiz_css_animations_transitions",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which property is commonly animated together with transform for simple fade-and-move effects?",
    options: [
      { id: "A", text: "opacity" },
      { id: "B", text: "content" },
      { id: "C", text: "display" },
      { id: "D", text: "position-type" }
    ],
    correctOptionId: "A",
    explanation: "opacity can be combined with transform to create effects such as fading in while moving upward.",
    tags: ["opacity", "transform", "animations"]
  },

  {
    id: "css-animations-transitions-q-034",
    quizId: "quiz_css_animations_transitions",
    order: 34,
    type: "code",
    difficulty: "Intermediate",
    question: "Which animation correctly moves an element from left to right?",
    options: [
      { id: "A", text: "@keyframes move { from { transform: translateX(0); } to { transform: translateX(100px); } }" },
      { id: "B", text: "@keyframes move { from { color: 0; } to { color: 100px; } }" },
      { id: "C", text: "@keyframes move { from { width: 0deg; } to { width: 100deg; } }" },
      { id: "D", text: "@keyframes move { from { rotateX: 0; } to { rotateX: 100px; } }" }
    ],
    correctOptionId: "A",
    explanation: "translateX() changes the element's horizontal position visually, making it suitable for this animation.",
    tags: ["keyframes", "translateX", "transform"]
  },

  {
    id: "css-animations-transitions-q-035",
    quizId: "quiz_css_animations_transitions",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the transition shorthand represent in this declaration?\n\ntransition: opacity 300ms ease-in 100ms;",
    options: [
      { id: "A", text: "Property, duration, timing function, and delay" },
      { id: "B", text: "Duration, property, delay, and iteration count" },
      { id: "C", text: "Property, iteration count, direction, and delay" },
      { id: "D", text: "Delay, property, duration, and keyframe name" }
    ],
    correctOptionId: "A",
    explanation: "The shorthand specifies the property, duration, timing function, and delay.",
    tags: ["transition-shorthand", "transitions"]
  },

  {
    id: "css-animations-transitions-q-036",
    quizId: "quiz_css_animations_transitions",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does transition: all 300ms ease do?",
    options: [
      { id: "A", text: "Attempts to transition all animatable properties that change over 300ms using ease" },
      { id: "B", text: "Animates every CSS property including non-animatable properties" },
      { id: "C", text: "Creates a keyframe animation automatically" },
      { id: "D", text: "Repeats every property change 300 times" }
    ],
    correctOptionId: "A",
    explanation: "transition-property: all means changes to all animatable properties are eligible for transition. It does not make inherently non-animatable properties animatable.",
    tags: ["transition-all", "transitions"]
  },

  {
    id: "css-animations-transitions-q-037",
    quizId: "quiz_css_animations_transitions",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can transition: all be undesirable in production UI code?",
    options: [
      { id: "A", text: "It can cause unintended properties to animate and make performance or visual behavior harder to control" },
      { id: "B", text: "It disables every transition" },
      { id: "C", text: "It only works in Internet Explorer" },
      { id: "D", text: "It prevents hover states" }
    ],
    correctOptionId: "A",
    explanation: "Explicitly naming the properties you want to animate gives better control and avoids unexpected animations when unrelated properties change.",
    tags: ["transition-all", "best-practices"]
  },

  {
    id: "css-animations-transitions-q-038",
    quizId: "quiz_css_animations_transitions",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which CSS feature can create discrete, step-like timing instead of continuous interpolation?",
    options: [
      { id: "A", text: "steps()" },
      { id: "B", text: "smooth()" },
      { id: "C", text: "frames()" },
      { id: "D", text: "jump()" }
    ],
    correctOptionId: "A",
    explanation: "The steps() timing function divides the animation into a specified number of discrete intervals.",
    tags: ["steps", "timing-functions"]
  },

  {
    id: "css-animations-transitions-q-039",
    quizId: "quiz_css_animations_transitions",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which CSS property can be used to hint that an element is likely to be transformed in the near future?",
    options: [
      { id: "A", text: "will-change" },
      { id: "B", text: "future-transform" },
      { id: "C", text: "prepare" },
      { id: "D", text: "animation-hint" }
    ],
    correctOptionId: "A",
    explanation: "will-change allows a developer to indicate properties that are expected to change, potentially allowing the browser to optimize ahead of time.",
    tags: ["will-change", "performance"]
  },

  {
    id: "css-animations-transitions-q-040",
    quizId: "quiz_css_animations_transitions",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why should will-change generally be used sparingly?",
    options: [
      { id: "A", text: "It can consume additional resources and excessive use can hurt performance" },
      { id: "B", text: "It disables CSS animations" },
      { id: "C", text: "It only works on SVG" },
      { id: "D", text: "It permanently changes the DOM" }
    ],
    correctOptionId: "A",
    explanation: "will-change can encourage resource-intensive optimizations. Applying it broadly or permanently can consume more memory and hurt performance.",
    tags: ["will-change", "performance", "best-practices"]
  },

  {
    id: "css-animations-transitions-q-041",
    quizId: "quiz_css_animations_transitions",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which property is generally not a good choice for smooth interpolation because it is a discrete property?",
    options: [
      { id: "A", text: "opacity" },
      { id: "B", text: "transform" },
      { id: "C", text: "display" },
      { id: "D", text: "background-color" }
    ],
    correctOptionId: "C",
    explanation: "display traditionally switches between discrete states rather than smoothly interpolating like opacity or transform.",
    tags: ["animatable-properties", "display"]
  },

  {
    id: "css-animations-transitions-q-042",
    quizId: "quiz_css_animations_transitions",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a common reason to avoid animating width and height when transform can achieve the same visual effect?",
    options: [
      { id: "A", text: "Changing width or height can trigger layout work, potentially making animations more expensive" },
      { id: "B", text: "width and height cannot be changed with CSS" },
      { id: "C", text: "transform cannot be animated" },
      { id: "D", text: "width only works on text" }
    ],
    correctOptionId: "A",
    explanation: "Layout-affecting properties can cause the browser to recalculate layout. transform can often provide similar visual scaling with less layout work.",
    tags: ["performance", "transform", "layout"]
  },

  {
    id: "css-animations-transitions-q-043",
    quizId: "quiz_css_animations_transitions",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "Which CSS creates an animation that runs for 2 seconds, repeats forever, and alternates direction?",
    options: [
      { id: "A", text: "animation: 2s infinite alternate;" },
      { id: "B", text: "animation: move 2s infinite alternate;" },
      { id: "C", text: "animation: move infinite 2px alternate;" },
      { id: "D", text: "animation: alternate move infinite;" }
    ],
    correctOptionId: "B",
    explanation: "The shorthand includes the keyframe name (move), duration (2s), iteration count (infinite), and direction (alternate).",
    tags: ["animation-shorthand", "alternate", "infinite"]
  },

  {
    id: "css-animations-transitions-q-044",
    quizId: "quiz_css_animations_transitions",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of keyframes such as 0%, 50%, and 100%?",
    options: [
      { id: "A", text: "They define stages of the animation timeline and the styles at those stages" },
      { id: "B", text: "They define viewport breakpoints" },
      { id: "C", text: "They define CSS specificity levels" },
      { id: "D", text: "They define animation colors only" }
    ],
    correctOptionId: "A",
    explanation: "Percentage keyframes represent points through the animation's duration where specific property values can be defined.",
    tags: ["keyframes", "animation-timeline"]
  },

  {
    id: "css-animations-transitions-q-045",
    quizId: "quiz_css_animations_transitions",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "What will this animation do?\n\n@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}",
    options: [
      { id: "A", text: "The element grows slightly halfway through the animation and returns to its original size" },
      { id: "B", text: "The element rotates 360 degrees" },
      { id: "C", text: "The element becomes invisible halfway through" },
      { id: "D", text: "The element permanently grows to 110%" }
    ],
    correctOptionId: "A",
    explanation: "The scale increases to 1.1 at 50% progress and returns to 1 at the end, producing a pulse effect.",
    tags: ["keyframes", "scale", "pulse"]
  },

  {
    id: "css-animations-transitions-q-046",
    quizId: "quiz_css_animations_transitions",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which animation approach is generally better for respecting users who prefer reduced motion?",
    options: [
      { id: "A", text: "Use prefers-reduced-motion to reduce or remove non-essential animations" },
      { id: "B", text: "Force all animations to infinite" },
      { id: "C", text: "Increase animation duration for everyone" },
      { id: "D", text: "Disable all CSS regardless of user preference" }
    ],
    correctOptionId: "A",
    explanation: "The prefers-reduced-motion media feature allows developers to provide a less motion-intensive experience for users who request it.",
    tags: ["accessibility", "prefers-reduced-motion"]
  },

  {
    id: "css-animations-transitions-q-047",
    quizId: "quiz_css_animations_transitions",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation is most appropriate for a hover effect that moves a button upward without affecting surrounding layout?",
    options: [
      { id: "A", text: ".button:hover { transform: translateY(-4px); }" },
      { id: "B", text: ".button:hover { margin-top: -4px; }" },
      { id: "C", text: ".button:hover { top: -4px; position: relative; }" },
      { id: "D", text: ".button:hover { height: calc(100% - 4px); }" }
    ],
    correctOptionId: "A",
    explanation: "transform visually moves the element without changing normal document flow, making it a good fit for this type of hover effect.",
    tags: ["transform", "hover", "performance"]
  },

  {
    id: "css-animations-transitions-q-048",
    quizId: "quiz_css_animations_transitions",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer wants an element to smoothly transition when its background color changes, but nothing happens. Which is the most likely issue?",
    options: [
      { id: "A", text: "The transition property was not applied to the element before the state change" },
      { id: "B", text: "background-color can never be transitioned" },
      { id: "C", text: "Transitions require JavaScript" },
      { id: "D", text: "Hover states cannot trigger transitions" }
    ],
    correctOptionId: "A",
    explanation: "The transition should normally be declared on the base element so it applies when the element enters and leaves the changed state.",
    tags: ["transitions", "hover", "common-mistakes"]
  },

  {
    id: "css-animations-transitions-q-049",
    quizId: "quiz_css_animations_transitions",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about CSS animations and JavaScript is most accurate?",
    options: [
      { id: "A", text: "CSS can handle many visual animations declaratively, while JavaScript is useful when animation behavior depends on application logic or complex interaction" },
      { id: "B", text: "CSS animations always require JavaScript" },
      { id: "C", text: "JavaScript cannot control CSS animations" },
      { id: "D", text: "CSS animations are only possible with React" }
    ],
    correctOptionId: "A",
    explanation: "CSS animations and transitions are powerful for declarative visual effects. JavaScript can complement them when animation needs to respond to complex application state or custom logic.",
    tags: ["css-animations", "javascript", "architecture"]
  },

  {
    id: "css-animations-transitions-q-050",
    quizId: "quiz_css_animations_transitions",
    order: 50,
    type: "advanced",
    difficulty: "Advanced",
    question: "You are building a production React application with hover effects, loading states, modals, and complex visual transitions. Which strategy is strongest?",
    options: [
      { id: "A", text: "Animate every CSS property with transition: all and use infinite animations everywhere" },
      { id: "B", text: "Prefer targeted transitions and transform/opacity for common visual effects, use keyframes for multi-stage animations, respect reduced-motion preferences, and avoid unnecessary performance-heavy animations" },
      { id: "C", text: "Use JavaScript timers for every hover animation" },
      { id: "D", text: "Use width, height, top, and left for every animation because they are always fastest" }
    ],
    correctOptionId: "B",
    explanation: "A production-quality animation strategy uses the right tool for each job: transitions for state changes, keyframes for multi-stage sequences, transform and opacity where appropriate for performance, and reduced-motion handling for accessibility.",
    tags: ["animations", "transitions", "performance", "accessibility", "best-practices"]
  }
];

export default cssAnimationsTransitionsQuestions;