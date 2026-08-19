const htmlMediaEmbeddingQuestions = [
  {
    id: "html-media-embedding-q-001",
    quizId: "quiz_html_media_embedding",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which HTML element is used to display an image?",
    options: [
      { id: "A", text: "<img>" },
      { id: "B", text: "<image>" },
      { id: "C", text: "<picture-img>" },
      { id: "D", text: "<src>" }
    ],
    correctOptionId: "A",
    explanation: "The <img> element embeds an image resource into a document.",
    tags: ["images", "img", "html"]
  },

  {
    id: "html-media-embedding-q-002",
    quizId: "quiz_html_media_embedding",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute specifies the image resource that should be loaded?",
    options: [
      { id: "A", text: "src" },
      { id: "B", text: "href" },
      { id: "C", text: "url" },
      { id: "D", text: "source" }
    ],
    correctOptionId: "A",
    explanation: "The src attribute specifies the URL or path of the image resource.",
    tags: ["img", "src", "images"]
  },

  {
    id: "html-media-embedding-q-003",
    quizId: "quiz_html_media_embedding",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of the alt attribute on an image?",
    options: [
      { id: "A", text: "To provide alternative text describing the image's purpose or content" },
      { id: "B", text: "To specify the image file location" },
      { id: "C", text: "To control image dimensions" },
      { id: "D", text: "To preload the image" }
    ],
    correctOptionId: "A",
    explanation: "alt provides a text alternative for the image. This is especially important when the image conveys information that users need.",
    tags: ["img", "alt", "accessibility"]
  },

  {
    id: "html-media-embedding-q-004",
    quizId: "quiz_html_media_embedding",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute can specify the intrinsic width of an image in HTML?",
    options: [
      { id: "A", text: "width" },
      { id: "B", text: "size" },
      { id: "C", text: "image-width" },
      { id: "D", text: "dimension" }
    ],
    correctOptionId: "A",
    explanation: "The width attribute can specify the rendered width of an image. CSS is often used for responsive sizing and presentation.",
    tags: ["img", "width", "images"]
  },

  {
    id: "html-media-embedding-q-005",
    quizId: "quiz_html_media_embedding",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used to embed audio content?",
    options: [
      { id: "A", text: "<audio>" },
      { id: "B", text: "<sound>" },
      { id: "C", text: "<music>" },
      { id: "D", text: "<media-audio>" }
    ],
    correctOptionId: "A",
    explanation: "The <audio> element provides a native way to embed sound content in an HTML document.",
    tags: ["audio", "media", "html"]
  },

  {
    id: "html-media-embedding-q-006",
    quizId: "quiz_html_media_embedding",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is used to embed video content?",
    options: [
      { id: "A", text: "<video>" },
      { id: "B", text: "<movie>" },
      { id: "C", text: "<media-video>" },
      { id: "D", text: "<film>" }
    ],
    correctOptionId: "A",
    explanation: "The <video> element provides native HTML support for embedding video content.",
    tags: ["video", "media", "html"]
  },

  {
    id: "html-media-embedding-q-007",
    quizId: "quiz_html_media_embedding",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the controls attribute do on an <audio> or <video> element?",
    options: [
      { id: "A", text: "It asks the browser to display native media controls" },
      { id: "B", text: "It automatically downloads the media" },
      { id: "C", text: "It converts the media format" },
      { id: "D", text: "It makes the media autoplay" }
    ],
    correctOptionId: "A",
    explanation: "The controls attribute enables the browser's native user interface for controlling playback.",
    tags: ["audio", "video", "controls"]
  },

  {
    id: "html-media-embedding-q-008",
    quizId: "quiz_html_media_embedding",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which attribute causes a video to begin playing automatically when permitted by the browser?",
    options: [
      { id: "A", text: "autoplay" },
      { id: "B", text: "start" },
      { id: "C", text: "automatic" },
      { id: "D", text: "play-on-load" }
    ],
    correctOptionId: "A",
    explanation: "The autoplay attribute requests automatic playback. Browsers may restrict autoplay, especially when media has audible sound.",
    tags: ["video", "autoplay", "media"]
  },

  {
    id: "html-media-embedding-q-009",
    quizId: "quiz_html_media_embedding",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the muted attribute do on a video?",
    options: [
      { id: "A", text: "It causes the video's audio output to start muted" },
      { id: "B", text: "It removes the audio track permanently" },
      { id: "C", text: "It prevents the video from playing" },
      { id: "D", text: "It hides the video controls" }
    ],
    correctOptionId: "A",
    explanation: "muted sets the video's default muted state. Muted autoplay is commonly used for background or preview videos because browsers are more likely to permit it.",
    tags: ["video", "muted", "autoplay"]
  },

  {
    id: "html-media-embedding-q-010",
    quizId: "quiz_html_media_embedding",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the loop attribute do for audio or video?",
    options: [
      { id: "A", text: "It requests that playback restart automatically after reaching the end" },
      { id: "B", text: "It downloads the media repeatedly" },
      { id: "C", text: "It plays the media at double speed" },
      { id: "D", text: "It prevents the media from loading" }
    ],
    correctOptionId: "A",
    explanation: "The loop attribute causes the media to repeat when playback reaches its end.",
    tags: ["audio", "video", "loop"]
  },

  {
    id: "html-media-embedding-q-011",
    quizId: "quiz_html_media_embedding",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the poster attribute on a <video> element?",
    options: [
      { id: "A", text: "It specifies an image to display before the video starts playing" },
      { id: "B", text: "It specifies the video's file format" },
      { id: "C", text: "It adds subtitles automatically" },
      { id: "D", text: "It controls playback speed" }
    ],
    correctOptionId: "A",
    explanation: "poster specifies an image that can be displayed as a preview before video playback begins.",
    tags: ["video", "poster", "media"]
  },

  {
    id: "html-media-embedding-q-012",
    quizId: "quiz_html_media_embedding",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element allows multiple media sources to be provided for an <audio> or <video> element?",
    options: [
      { id: "A", text: "<source>" },
      { id: "B", text: "<media-source>" },
      { id: "C", text: "<option>" },
      { id: "D", text: "<file>" }
    ],
    correctOptionId: "A",
    explanation: "The <source> element allows authors to provide multiple media resources, giving the browser alternatives to choose from.",
    tags: ["source", "audio", "video"]
  },

  {
    id: "html-media-embedding-q-013",
    quizId: "quiz_html_media_embedding",
    order: 13,
    type: "code",
    difficulty: "Beginner",
    question: "Which markup correctly provides multiple video formats?",
    options: [
      {
        id: "A",
        text: "<video controls><source src=\"movie.mp4\" type=\"video/mp4\"><source src=\"movie.webm\" type=\"video/webm\"></video>"
      },
      {
        id: "B",
        text: "<video><format src=\"movie.mp4\"><format src=\"movie.webm\"></video>"
      },
      {
        id: "C",
        text: "<video sources=\"movie.mp4,movie.webm\"></video>"
      },
      {
        id: "D",
        text: "<video><option src=\"movie.mp4\"><option src=\"movie.webm\"></video>"
      }
    ],
    correctOptionId: "A",
    explanation: "Multiple <source> elements allow the browser to choose a compatible media resource.",
    tags: ["video", "source", "formats"]
  },

  {
    id: "html-media-embedding-q-014",
    quizId: "quiz_html_media_embedding",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the type attribute on a <source> element?",
    options: [
      { id: "A", text: "It identifies the media type of the referenced resource" },
      { id: "B", text: "It sets the CSS type of the player" },
      { id: "C", text: "It sets the playback speed" },
      { id: "D", text: "It identifies the user who uploaded the file" }
    ],
    correctOptionId: "A",
    explanation: "The type attribute provides the MIME type of the resource, helping the browser determine whether it can use that source.",
    tags: ["source", "mime-types", "media"]
  },

  {
    id: "html-media-embedding-q-015",
    quizId: "quiz_html_media_embedding",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which HTML element is commonly used to embed another webpage or external browsing context?",
    options: [
      { id: "A", text: "<iframe>" },
      { id: "B", text: "<embed-page>" },
      { id: "C", text: "<frame-page>" },
      { id: "D", text: "<webview>" }
    ],
    correctOptionId: "A",
    explanation: "The <iframe> element embeds another HTML document within the current document.",
    tags: ["iframe", "embedding", "html"]
  },

  {
    id: "html-media-embedding-q-016",
    quizId: "quiz_html_media_embedding",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which iframe attribute specifies the URL of the embedded document?",
    options: [
      { id: "A", text: "src" },
      { id: "B", text: "href" },
      { id: "C", text: "url" },
      { id: "D", text: "target" }
    ],
    correctOptionId: "A",
    explanation: "The src attribute specifies the resource to load inside the iframe.",
    tags: ["iframe", "src", "embedding"]
  },

  {
    id: "html-media-embedding-q-017",
    quizId: "quiz_html_media_embedding",
    order: 17,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which iframe attribute can provide an accessible name describing the embedded content?",
    options: [
      { id: "A", text: "title" },
      { id: "B", text: "label" },
      { id: "C", text: "description" },
      { id: "D", text: "name-text" }
    ],
    correctOptionId: "A",
    explanation: "The title attribute provides a textual description of the iframe, which is important for users of assistive technologies.",
    tags: ["iframe", "title", "accessibility"]
  },

  {
    id: "html-media-embedding-q-018",
    quizId: "quiz_html_media_embedding",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why should an iframe generally have a meaningful title?",
    options: [
      { id: "A", text: "It helps users of assistive technologies understand what the embedded browsing context contains" },
      { id: "B", text: "It makes the iframe load faster" },
      { id: "C", text: "It changes the iframe's URL" },
      { id: "D", text: "It enables JavaScript execution" }
    ],
    correctOptionId: "A",
    explanation: "An iframe creates a separate browsing context. A meaningful title helps users identify its purpose when navigating through page content.",
    tags: ["iframe", "accessibility", "title"]
  },

  {
    id: "html-media-embedding-q-019",
    quizId: "quiz_html_media_embedding",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the loading=\"lazy\" attribute generally request for an iframe or image?",
    options: [
      { id: "A", text: "Delay loading the resource until it is closer to the user's viewport" },
      { id: "B", text: "Never load the resource" },
      { id: "C", text: "Load the resource twice" },
      { id: "D", text: "Compress the resource before loading" }
    ],
    correctOptionId: "A",
    explanation: "loading=\"lazy\" allows the browser to defer loading resources that are not immediately needed, potentially reducing initial page work.",
    tags: ["lazy-loading", "iframe", "images", "performance"]
  },

  {
    id: "html-media-embedding-q-020",
    quizId: "quiz_html_media_embedding",
    order: 20,
    type: "code",
    difficulty: "Intermediate",
    question: "Which is the best example of lazily loading a below-the-fold image?",
    options: [
      { id: "A", text: "<img src=\"gallery.jpg\" alt=\"Gallery\" loading=\"lazy\">" },
      { id: "B", text: "<img src=\"gallery.jpg\" alt=\"Gallery\" loading=\"never\">" },
      { id: "C", text: "<img src=\"gallery.jpg\" alt=\"Gallery\" lazy=\"true\">" },
      { id: "D", text: "<img src=\"gallery.jpg\" alt=\"Gallery\" defer=\"lazy\">" }
    ],
    correctOptionId: "A",
    explanation: "loading=\"lazy\" is the standard HTML mechanism for requesting deferred loading of an image.",
    tags: ["img", "lazy-loading", "performance"]
  },

  {
    id: "html-media-embedding-q-021",
    quizId: "quiz_html_media_embedding",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the <picture> element?",
    options: [
      { id: "A", text: "To provide different image resources or presentations depending on conditions such as viewport or format support" },
      { id: "B", text: "To create a photo gallery automatically" },
      { id: "C", text: "To replace CSS completely" },
      { id: "D", text: "To embed video content" }
    ],
    correctOptionId: "A",
    explanation: "The <picture> element allows authors to provide multiple image sources, often using media or type conditions, with an img fallback.",
    tags: ["picture", "responsive-images", "images"]
  },

  {
    id: "html-media-embedding-q-022",
    quizId: "quiz_html_media_embedding",
    order: 22,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup correctly uses <picture> for responsive image selection?",
    options: [
      {
        id: "A",
        text: "<picture><source media=\"(min-width: 800px)\" srcset=\"large.jpg\"><img src=\"small.jpg\" alt=\"Landscape\"></picture>"
      },
      {
        id: "B",
        text: "<picture><img media=\"(min-width: 800px)\" src=\"large.jpg\" fallback=\"small.jpg\"></picture>"
      },
      {
        id: "C",
        text: "<picture><responsive src=\"large.jpg\"><image src=\"small.jpg\"></picture>"
      },
      {
        id: "D",
        text: "<picture srcset=\"large.jpg\" fallback=\"small.jpg\"></picture>"
      }
    ],
    correctOptionId: "A",
    explanation: "A <source> inside <picture> can provide conditional resources, while the nested <img> acts as the fallback and actual image element.",
    tags: ["picture", "source", "srcset", "responsive-images"]
  },

  {
    id: "html-media-embedding-q-023",
    quizId: "quiz_html_media_embedding",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of srcset on an <img> element?",
    options: [
      { id: "A", text: "To provide multiple image candidates so the browser can choose an appropriate resource" },
      { id: "B", text: "To provide multiple alt texts" },
      { id: "C", text: "To specify multiple CSS classes" },
      { id: "D", text: "To define multiple image captions" }
    ],
    correctOptionId: "A",
    explanation: "srcset provides a set of image candidates, allowing the browser to select an appropriate resource based on factors such as display characteristics and device conditions.",
    tags: ["srcset", "responsive-images", "images"]
  },

  {
    id: "html-media-embedding-q-024",
    quizId: "quiz_html_media_embedding",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the primary purpose of the sizes attribute when used with a responsive image srcset?",
    options: [
      { id: "A", text: "It tells the browser the expected rendered width of the image under different viewport conditions" },
      { id: "B", text: "It changes the image file's physical dimensions" },
      { id: "C", text: "It changes the image's alt text" },
      { id: "D", text: "It defines the image's file format" }
    ],
    correctOptionId: "A",
    explanation: "sizes provides information about the image's expected display size, helping the browser choose an appropriate candidate from srcset.",
    tags: ["sizes", "srcset", "responsive-images"]
  },

  {
    id: "html-media-embedding-q-025",
    quizId: "quiz_html_media_embedding",
    order: 25,
    type: "code",
    difficulty: "Intermediate",
    question: "Which implementation provides responsive image candidates with a fallback?",
    options: [
      {
        id: "A",
        text: "<img src=\"small.jpg\" srcset=\"small.jpg 480w, medium.jpg 800w, large.jpg 1200w\" sizes=\"(max-width: 600px) 480px, 800px\" alt=\"City skyline\">"
      },
      {
        id: "B",
        text: "<img sources=\"small.jpg,medium.jpg,large.jpg\" alt=\"City skyline\">"
      },
      {
        id: "C",
        text: "<img responsive=\"small.jpg medium.jpg large.jpg\" alt=\"City skyline\">"
      },
      {
        id: "D",
        text: "<img srcset=\"small.jpg,medium.jpg,large.jpg\" dimensions=\"responsive\" alt=\"City skyline\">"
      }
    ],
    correctOptionId: "A",
    explanation: "The srcset candidates use width descriptors and sizes describes the expected display width. The src attribute provides a fallback/default source.",
    tags: ["srcset", "sizes", "responsive-images"]
  },

  {
    id: "html-media-embedding-q-026",
    quizId: "quiz_html_media_embedding",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is used to provide captions or subtitles for HTML video?",
    options: [
      { id: "A", text: "<track>" },
      { id: "B", text: "<caption>" },
      { id: "C", text: "<subtitle>" },
      { id: "D", text: "<text-track>" }
    ],
    correctOptionId: "A",
    explanation: "The <track> element provides timed text tracks such as subtitles, captions, descriptions, and chapters for audio and video.",
    tags: ["track", "video", "captions", "accessibility"]
  },

  {
    id: "html-media-embedding-q-027",
    quizId: "quiz_html_media_embedding",
    order: 27,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup correctly adds an English caption track to a video?",
    options: [
      {
        id: "A",
        text: "<video controls><source src=\"lecture.mp4\" type=\"video/mp4\"><track kind=\"captions\" src=\"captions-en.vtt\" srclang=\"en\" label=\"English\"></video>"
      },
      {
        id: "B",
        text: "<video captions=\"captions-en.vtt\" language=\"en\"></video>"
      },
      {
        id: "C",
        text: "<video><caption src=\"captions-en.vtt\" lang=\"en\"></caption></video>"
      },
      {
        id: "D",
        text: "<video><subtitle file=\"captions-en.vtt\" language=\"en\"></subtitle></video>"
      }
    ],
    correctOptionId: "A",
    explanation: "The <track> element with kind=\"captions\", a VTT source, language metadata, and a label is the standard approach for video captions.",
    tags: ["track", "captions", "video", "vtt"]
  },

  {
    id: "html-media-embedding-q-028",
    quizId: "quiz_html_media_embedding",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What file format is commonly used for WebVTT subtitle and caption tracks?",
    options: [
      { id: "A", text: ".vtt" },
      { id: "B", text: ".subhtml" },
      { id: "C", text: ".caption" },
      { id: "D", text: ".track" }
    ],
    correctOptionId: "A",
    explanation: "WebVTT files use the .vtt extension and are designed for timed text tracks on the web.",
    tags: ["webvtt", "captions", "video"]
  },

  {
    id: "html-media-embedding-q-029",
    quizId: "quiz_html_media_embedding",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which <track> kind is specifically intended for captions for users who are deaf or hard of hearing?",
    options: [
      { id: "A", text: "captions" },
      { id: "B", text: "subtitle-only" },
      { id: "C", text: "audio-text" },
      { id: "D", text: "hearing" }
    ],
    correctOptionId: "A",
    explanation: "The captions kind is intended for captions that can include dialogue and relevant audio information.",
    tags: ["track", "captions", "accessibility"]
  },

  {
    id: "html-media-embedding-q-030",
    quizId: "quiz_html_media_embedding",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one important accessibility consideration when embedding video?",
    options: [
      { id: "A", text: "Provide captions when the video's audio contains meaningful spoken or relevant audible information" },
      { id: "B", text: "Always autoplay the video with sound" },
      { id: "C", text: "Remove all controls" },
      { id: "D", text: "Use only visual cues" }
    ],
    correctOptionId: "A",
    explanation: "Captions make spoken dialogue and relevant audio information accessible to users who cannot hear the audio.",
    tags: ["video", "captions", "accessibility"]
  },

  {
    id: "html-media-embedding-q-031",
    quizId: "quiz_html_media_embedding",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the preload attribute on audio or video?",
    options: [
      { id: "A", text: "It provides a hint about how much media data the browser should preload" },
      { id: "B", text: "It guarantees that the entire file downloads before rendering" },
      { id: "C", text: "It forces autoplay" },
      { id: "D", text: "It compresses the media" }
    ],
    correctOptionId: "A",
    explanation: "preload provides a hint to the browser about whether and how much media should be fetched before playback.",
    tags: ["preload", "audio", "video", "performance"]
  },

  {
    id: "html-media-embedding-q-032",
    quizId: "quiz_html_media_embedding",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which preload value indicates that the browser should avoid preloading media unless necessary?",
    options: [
      { id: "A", text: "none" },
      { id: "B", text: "never" },
      { id: "C", text: "off" },
      { id: "D", text: "disabled" }
    ],
    correctOptionId: "A",
    explanation: "preload=\"none\" indicates that the author does not expect the media to need preloading.",
    tags: ["preload", "media", "performance"]
  },

  {
    id: "html-media-embedding-q-033",
    quizId: "quiz_html_media_embedding",
    order: 33,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is one reason to avoid unnecessary autoplaying media with sound?",
    options: [
      { id: "A", text: "Unexpected audio can disrupt users and create accessibility and usability problems" },
      { id: "B", text: "Browsers cannot display video with audio" },
      { id: "C", text: "Audio always prevents CSS from loading" },
      { id: "D", text: "Autoplay deletes the media file" }
    ],
    correctOptionId: "A",
    explanation: "Unexpected sound can be disruptive, particularly for screen-reader users and people in shared or quiet environments. Browsers also commonly restrict audible autoplay.",
    tags: ["autoplay", "accessibility", "usability"]
  },

  {
    id: "html-media-embedding-q-034",
    quizId: "quiz_html_media_embedding",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element can be used to embed content such as an SVG or other external resource, depending on the resource type?",
    options: [
      { id: "A", text: "<object>" },
      { id: "B", text: "<resource>" },
      { id: "C", text: "<external>" },
      { id: "D", text: "<content>" }
    ],
    correctOptionId: "A",
    explanation: "The <object> element represents an external resource, although modern applications often use more specialized elements such as <img>, <iframe>, or native media elements when appropriate.",
    tags: ["object", "embedding", "external-content"]
  },

  {
    id: "html-media-embedding-q-035",
    quizId: "quiz_html_semantic_accessibility",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is specifically designed for embedding external content in a separate browsing context?",
    options: [
      { id: "A", text: "<iframe>" },
      { id: "B", text: "<object>" },
      { id: "C", text: "<img>" },
      { id: "D", text: "<source>" }
    ],
    correctOptionId: "A",
    explanation: "An iframe embeds another HTML document in a nested browsing context. This is different from simply embedding an image or media resource.",
    tags: ["iframe", "embedding", "browsing-context"]
  },

  {
    id: "html-media-embedding-q-036",
    quizId: "quiz_html_media_embedding",
    order: 36,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the sandbox attribute on an iframe?",
    options: [
      { id: "A", text: "It applies restrictions to the behavior and capabilities of the embedded document" },
      { id: "B", text: "It compresses the iframe content" },
      { id: "C", text: "It automatically makes the iframe responsive" },
      { id: "D", text: "It hides the iframe from all users" }
    ],
    correctOptionId: "A",
    explanation: "The sandbox attribute applies a set of restrictions to the embedded document. Specific capabilities can be selectively enabled with sandbox tokens.",
    tags: ["iframe", "sandbox", "security"]
  },

  {
    id: "html-media-embedding-q-037",
    quizId: "quiz_html_media_embedding",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "What does sandbox=\"allow-scripts\" generally permit inside an iframe?",
    options: [
      { id: "A", text: "It permits scripts to execute while the other sandbox restrictions remain in effect" },
      { id: "B", text: "It removes every sandbox restriction" },
      { id: "C", text: "It permits unrestricted navigation to every website" },
      { id: "D", text: "It disables JavaScript in the parent page" }
    ],
    correctOptionId: "A",
    explanation: "allow-scripts enables script execution inside the sandboxed iframe but does not automatically remove all other sandbox restrictions.",
    tags: ["iframe", "sandbox", "security", "allow-scripts"]
  },

  {
    id: "html-media-embedding-q-038",
    quizId: "quiz_html_media_embedding",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of the iframe allow attribute?",
    options: [
      { id: "A", text: "It can delegate specific browser capabilities or permissions to the embedded document" },
      { id: "B", text: "It specifies the iframe's URL" },
      { id: "C", text: "It changes the iframe's width" },
      { id: "D", text: "It automatically disables JavaScript" }
    ],
    correctOptionId: "A",
    explanation: "The allow attribute is used for Permissions Policy-related delegation to an embedded browsing context, such as allowing particular features when appropriate.",
    tags: ["iframe", "allow", "permissions-policy", "security"]
  },

  {
    id: "html-media-embedding-q-039",
    quizId: "quiz_html_media_embedding",
    order: 39,
    type: "code",
    difficulty: "Advanced",
    question: "Which iframe implementation demonstrates a useful security restriction for untrusted embedded content?",
    options: [
      { id: "A", text: "<iframe src=\"https://example.com/widget\" sandbox title=\"Example widget\"></iframe>" },
      { id: "B", text: "<iframe src=\"https://example.com/widget\" security=\"maximum\"></iframe>" },
      { id: "C", text: "<iframe src=\"https://example.com/widget\" safe=\"true\"></iframe>" },
      { id: "D", text: "<iframe src=\"https://example.com/widget\" secure=\"yes\"></iframe>" }
    ],
    correctOptionId: "A",
    explanation: "The sandbox attribute is a real browser security mechanism for restricting iframe capabilities. A meaningful title also improves accessibility.",
    tags: ["iframe", "sandbox", "security", "accessibility"]
  },

  {
    id: "html-media-embedding-q-040",
    quizId: "quiz_html_media_embedding",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can embedding third-party content have privacy or security implications?",
    options: [
      { id: "A", text: "The embedded resource can introduce additional scripts, network requests, permissions, or tracking behavior depending on how it is configured" },
      { id: "B", text: "Iframes always have access to every parent-page variable" },
      { id: "C", text: "All third-party content automatically becomes part of the same origin" },
      { id: "D", text: "External resources cannot make network requests" }
    ],
    correctOptionId: "A",
    explanation: "Third-party embeds introduce another origin and potentially additional code and requests. Security controls such as sandboxing and appropriate permissions policies can reduce unnecessary capabilities.",
    tags: ["iframe", "security", "third-party", "privacy"]
  },

  {
    id: "html-media-embedding-q-041",
    quizId: "quiz_html_media_embedding",
    order: 41,
    type: "code",
    difficulty: "Advanced",
    question: "Which approach is most appropriate for a decorative background video that should silently loop?",
    options: [
      { id: "A", text: "<video autoplay muted loop playsinline aria-hidden=\"true\">...</video>" },
      { id: "B", text: "<video autoplay loop>...</video>" },
      { id: "C", text: "<video autoplay sound=\"on\" loop>...</video>" },
      { id: "D", text: "<video play=\"background\">...</video>" }
    ],
    correctOptionId: "A",
    explanation: "For genuinely decorative video, autoplay, muted, loop, and playsinline are commonly used together. If the video is purely decorative and adds no useful information, aria-hidden can prevent redundant accessibility exposure.",
    tags: ["video", "autoplay", "muted", "loop", "accessibility"]
  },

  {
    id: "html-media-embedding-q-042",
    quizId: "quiz_html_media_embedding",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the purpose of playsinline on video?",
    options: [
      { id: "A", text: "It requests that video play inline rather than automatically switching to a separate fullscreen-style playback mode on supported mobile environments" },
      { id: "B", text: "It forces video playback to start" },
      { id: "C", text: "It disables all video controls" },
      { id: "D", text: "It makes the video responsive automatically" }
    ],
    correctOptionId: "A",
    explanation: "playsinline is particularly useful for mobile experiences where video should remain within the page rather than being automatically presented through a separate playback mode.",
    tags: ["video", "playsinline", "mobile"]
  },

  {
    id: "html-media-embedding-q-043",
    quizId: "quiz_html_media_embedding",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "A product page contains a large hero image that is visible immediately. Which approach is generally more appropriate than lazy-loading it?",
    options: [
      { id: "A", text: "Load it normally because it is immediately needed for the initial viewport" },
      { id: "B", text: "Always use loading=\"lazy\" for every image" },
      { id: "C", text: "Hide it until the user scrolls" },
      { id: "D", text: "Load it only after a click" }
    ],
    correctOptionId: "A",
    explanation: "Lazy loading is most useful for resources that are not immediately needed. Deferring an important above-the-fold image can delay visible content.",
    tags: ["images", "lazy-loading", "performance", "hero-image"]
  },

  {
    id: "html-media-embedding-q-044",
    quizId: "quiz_html_media_embedding",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can specifying image dimensions in HTML or otherwise reserving the correct aspect ratio improve page stability?",
    options: [
      { id: "A", text: "The browser can reserve space for the image before it finishes loading, reducing layout shifts" },
      { id: "B", text: "It makes the image file smaller" },
      { id: "C", text: "It prevents the image from downloading" },
      { id: "D", text: "It converts JPEG files into WebP" }
    ],
    correctOptionId: "A",
    explanation: "Knowing an image's dimensions or aspect ratio lets the browser allocate space before the image loads, helping reduce unexpected movement of surrounding content.",
    tags: ["images", "dimensions", "layout-shift", "performance"]
  },

  {
    id: "html-media-embedding-q-045",
    quizId: "quiz_html_media_embedding",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "Which image markup best communicates the dimensions of a 1200×800 image?",
    options: [
      { id: "A", text: "<img src=\"photo.jpg\" width=\"1200\" height=\"800\" alt=\"Mountain landscape\">" },
      { id: "B", text: "<img src=\"photo.jpg\" size=\"1200x800\" alt=\"Mountain landscape\">" },
      { id: "C", text: "<img src=\"photo.jpg\" dimensions=\"1200,800\" alt=\"Mountain landscape\">" },
      { id: "D", text: "<img src=\"photo.jpg\" ratio=\"1200/800\" alt=\"Mountain landscape\">" }
    ],
    correctOptionId: "A",
    explanation: "The width and height attributes provide the image's intrinsic dimensions, allowing the browser to reserve appropriate space before the image loads.",
    tags: ["img", "width", "height", "layout-shift"]
  },

  {
    id: "html-media-embedding-q-046",
    quizId: "quiz_html_media_embedding",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "A video contains important spoken instructions but has no captions. What is the biggest accessibility issue?",
    options: [
      { id: "A", text: "Users who cannot hear the audio may miss essential information" },
      { id: "B", text: "The video will always fail to load" },
      { id: "C", text: "The video cannot be paused" },
      { id: "D", text: "The video cannot have a poster image" }
    ],
    correctOptionId: "A",
    explanation: "If spoken information is essential, captions provide an equivalent text representation for users who cannot access the audio.",
    tags: ["video", "captions", "accessibility"]
  },

  {
    id: "html-media-embedding-q-047",
    quizId: "quiz_html_media_embedding",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "Which implementation is the strongest general-purpose video setup for a normal user-controlled instructional video?",
    options: [
      {
        id: "A",
        text: "<video controls preload=\"metadata\" poster=\"preview.jpg\"><source src=\"lesson.mp4\" type=\"video/mp4\"><track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\"></video>"
      },
      {
        id: "B",
        text: "<video autoplay loop muted><source src=\"lesson.mp4\"></video>"
      },
      {
        id: "C",
        text: "<div video=\"lesson.mp4\"></div>"
      },
      {
        id: "D",
        text: "<video src=\"lesson.mp4\" autoplay sound=\"on\"></video>"
      }
    ],
    correctOptionId: "A",
    explanation: "The setup gives users native controls, avoids unnecessarily downloading the entire video immediately, provides a preview image, and includes an English caption track.",
    tags: ["video", "controls", "captions", "preload", "accessibility"]
  },

  {
    id: "html-media-embedding-q-048",
    quizId: "quiz_html_media_embedding",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "Which iframe markup is the strongest basic implementation for an embedded map?",
    options: [
      {
        id: "A",
        text: "<iframe src=\"https://maps.example.com/embed\" title=\"Office location map\" loading=\"lazy\"></iframe>"
      },
      {
        id: "B",
        text: "<iframe url=\"https://maps.example.com/embed\" name=\"map\"></iframe>"
      },
      {
        id: "C",
        text: "<div iframe=\"https://maps.example.com/embed\"></div>"
      },
      {
        id: "D",
        text: "<iframe src=\"https://maps.example.com/embed\" title=\"map\"></iframe>"
      }
    ],
    correctOptionId: "A",
    explanation: "The iframe uses src for the embedded resource, a meaningful title for accessibility, and lazy loading when the map is not immediately needed.",
    tags: ["iframe", "title", "lazy-loading", "accessibility"]
  },

  {
    id: "html-media-embedding-q-049",
    quizId: "quiz_html_media_embedding",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer embeds a third-party video player using an iframe. Which consideration is most appropriate?",
    options: [
      { id: "A", text: "Only grant the embedded player the capabilities it actually needs and provide a meaningful iframe title" },
      { id: "B", text: "Always grant every available browser permission" },
      { id: "C", text: "Remove the iframe title because the video already has a title" },
      { id: "D", text: "Disable all browser security features" }
    ],
    correctOptionId: "A",
    explanation: "Third-party embeds should be given only the permissions they require. The iframe itself should also have an accessible title describing the embedded content.",
    tags: ["iframe", "security", "permissions", "accessibility"]
  },

  {
    id: "html-media-embedding-q-050",
    quizId: "quiz_html_media_embedding",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "You are building a production article page containing a hero image, an instructional video, and a third-party map below the fold. Which approach demonstrates the strongest overall implementation?",
    options: [
      {
        id: "A",
        text: "<img src=\"hero.jpg\" width=\"1200\" height=\"700\" alt=\"Team working together\"><video controls preload=\"metadata\" poster=\"lesson.jpg\"><source src=\"lesson.mp4\" type=\"video/mp4\"><track kind=\"captions\" src=\"lesson-en.vtt\" srclang=\"en\" label=\"English\"></video><iframe src=\"https://maps.example.com/embed\" title=\"Office location map\" loading=\"lazy\" sandbox></iframe>"
      },
      {
        id: "B",
        text: "<img src=\"hero.jpg\" loading=\"lazy\"><video autoplay loop><source src=\"lesson.mp4\"></video><iframe src=\"https://maps.example.com/embed\"></iframe>"
      },
      {
        id: "C",
        text: "<div><img src=\"hero.jpg\"><div video=\"lesson.mp4\"></div><div map=\"https://maps.example.com/embed\"></div></div>"
      },
      {
        id: "D",
        text: "<img src=\"hero.jpg\" alt=\"image\"><video autoplay muted loop><source src=\"lesson.mp4\"></video><iframe src=\"https://maps.example.com/embed\" allow=\"*\" title=\"map\"></iframe>"
      }
    ],
    correctOptionId: "A",
    explanation: "The first implementation treats each resource according to its role: the immediately visible hero image has dimensions reserved, the instructional video has controls, a poster, metadata preload, and captions, and the below-the-fold third-party iframe has a meaningful title, lazy loading, and sandbox restrictions. It avoids unnecessary autoplay and excessive permissions.",
    tags: ["images", "video", "iframe", "captions", "lazy-loading", "sandbox", "accessibility", "performance"]
  }
];

export default htmlMediaEmbeddingQuestions;