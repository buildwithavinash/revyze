const htmlMetadataSeoQuestions = [
  {
    id: "html-metadata-seo-q-001",
    quizId: "quiz_html_metadata_seo",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of the <head> element in an HTML document?",
    options: [
      { id: "A", text: "To contain metadata and resources describing or supporting the document" },
      { id: "B", text: "To contain all visible page content" },
      { id: "C", text: "To contain only the website navigation" },
      { id: "D", text: "To contain the page footer" }
    ],
    correctOptionId: "A",
    explanation: "The <head> contains metadata and supporting resources such as the title, character encoding, stylesheets, icons, and other document information.",
    tags: ["head", "metadata", "html"]
  },

  {
    id: "html-metadata-seo-q-002",
    quizId: "quiz_html_metadata_seo",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element defines the title of an HTML document?",
    options: [
      { id: "A", text: "<title>" },
      { id: "B", text: "<meta-title>" },
      { id: "C", text: "<h1>" },
      { id: "D", text: "<document-title>" }
    ],
    correctOptionId: "A",
    explanation: "The <title> element defines the document's title and is typically displayed in the browser tab.",
    tags: ["title", "head", "metadata"]
  },

  {
    id: "html-metadata-seo-q-003",
    quizId: "quiz_html_metadata_seo",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "Where should the <title> element normally be placed?",
    options: [
      { id: "A", text: "Inside <head>" },
      { id: "B", text: "Inside <body>" },
      { id: "C", text: "Inside <footer>" },
      { id: "D", text: "Inside <main>" }
    ],
    correctOptionId: "A",
    explanation: "The title is document metadata, so it belongs inside the <head> element.",
    tags: ["title", "head", "document-structure"]
  },

  {
    id: "html-metadata-seo-q-004",
    quizId: "quiz_html_metadata_seo",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which element is commonly used to provide metadata about an HTML document?",
    options: [
      { id: "A", text: "<meta>" },
      { id: "B", text: "<metadata>" },
      { id: "C", text: "<info>" },
      { id: "D", text: "<data>" }
    ],
    correctOptionId: "A",
    explanation: "The <meta> element represents metadata that cannot be represented by other head elements.",
    tags: ["meta", "metadata", "head"]
  },

  {
    id: "html-metadata-seo-q-005",
    quizId: "quiz_html_metadata_seo",
    order: 5,
    type: "code",
    difficulty: "Beginner",
    question: "What does this tag specify?\n\n<meta charset=\"UTF-8\">",
    options: [
      { id: "A", text: "The character encoding used by the document" },
      { id: "B", text: "The page's default font" },
      { id: "C", text: "The page's language" },
      { id: "D", text: "The page's URL" }
    ],
    correctOptionId: "A",
    explanation: "The charset declaration specifies the character encoding. UTF-8 is the standard choice for modern web documents.",
    tags: ["meta", "charset", "utf-8"]
  },

  {
    id: "html-metadata-seo-q-006",
    quizId: "quiz_html_metadata_seo",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Why is UTF-8 commonly used for web documents?",
    options: [
      { id: "A", text: "It supports a very large range of characters and symbols" },
      { id: "B", text: "It makes every website load instantly" },
      { id: "C", text: "It automatically translates content" },
      { id: "D", text: "It replaces CSS encoding" }
    ],
    correctOptionId: "A",
    explanation: "UTF-8 can represent characters from a very broad range of writing systems and symbols, making it a suitable default encoding for modern websites.",
    tags: ["utf-8", "charset", "metadata"]
  },

  {
    id: "html-metadata-seo-q-007",
    quizId: "quiz_html_metadata_seo",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which meta tag is commonly used to control the viewport on mobile devices?",
    options: [
      { id: "A", text: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" },
      { id: "B", text: "<meta name=\"mobile\" content=\"true\">" },
      { id: "C", text: "<meta viewport=\"responsive\">" },
      { id: "D", text: "<meta name=\"screen\" content=\"mobile\">" }
    ],
    correctOptionId: "A",
    explanation: "The viewport meta tag gives browsers instructions about the viewport's dimensions and initial scaling, which is important for responsive layouts.",
    tags: ["viewport", "responsive-design", "meta"]
  },

  {
    id: "html-metadata-seo-q-008",
    quizId: "quiz_html_metadata_seo",
    order: 8,
    type: "code",
    difficulty: "Beginner",
    question: "What does width=device-width mean in the viewport meta tag?",
    options: [
      { id: "A", text: "Use the device's viewport width as the layout viewport width" },
      { id: "B", text: "Set every element's width to the device width" },
      { id: "C", text: "Make images exactly as wide as the device" },
      { id: "D", text: "Force desktop mode on mobile" }
    ],
    correctOptionId: "A",
    explanation: "width=device-width tells the browser to use the device's viewport width as the page's layout viewport width.",
    tags: ["viewport", "responsive", "mobile"]
  },

  {
    id: "html-metadata-seo-q-009",
    quizId: "quiz_html_metadata_seo",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of the meta description?",
    options: [
      { id: "A", text: "To provide a concise description of the page that search engines may use in search results" },
      { id: "B", text: "To force the page to rank first" },
      { id: "C", text: "To replace the page's visible content" },
      { id: "D", text: "To define the browser's character encoding" }
    ],
    correctOptionId: "A",
    explanation: "A meta description summarizes the page. Search engines may use it as the search-result snippet, although they can choose different text.",
    tags: ["meta-description", "seo", "search"]
  },

  {
    id: "html-metadata-seo-q-010",
    quizId: "quiz_html_metadata_seo",
    order: 10,
    type: "code",
    difficulty: "Beginner",
    question: "Which is a correctly structured meta description?",
    options: [
      { id: "A", text: "<meta name=\"description\" content=\"Learn modern JavaScript fundamentals with practical examples.\">" },
      { id: "B", text: "<meta description=\"Learn JavaScript fundamentals\">" },
      { id: "C", text: "<description meta=\"Learn JavaScript fundamentals\">" },
      { id: "D", text: "<meta name=\"seo\" text=\"Learn JavaScript fundamentals\">" }
    ],
    correctOptionId: "A",
    explanation: "The standard form uses name=\"description\" and places the description itself in the content attribute.",
    tags: ["meta-description", "meta", "seo"]
  },

  {
    id: "html-metadata-seo-q-011",
    quizId: "quiz_html_metadata_seo",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Does a meta description directly guarantee higher search rankings?",
    options: [
      { id: "A", text: "No; it can help describe the page and influence search-result presentation, but it is not a guaranteed ranking boost" },
      { id: "B", text: "Yes, every meta description increases ranking" },
      { id: "C", text: "Yes, provided it contains at least five keywords" },
      { id: "D", text: "Yes, provided it is exactly 160 characters" }
    ],
    correctOptionId: "A",
    explanation: "A meta description is useful for communicating page content and can affect how a result is presented, but it is not a guaranteed direct ranking factor.",
    tags: ["seo", "meta-description", "search"]
  },

  {
    id: "html-metadata-seo-q-012",
    quizId: "quiz_html_metadata_seo",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the main SEO purpose of a page's <title>?",
    options: [
      { id: "A", text: "It identifies the page and helps search engines and users understand what the page is about" },
      { id: "B", text: "It hides the page from search engines" },
      { id: "C", text: "It automatically creates backlinks" },
      { id: "D", text: "It replaces all headings on the page" }
    ],
    correctOptionId: "A",
    explanation: "A clear, descriptive title helps communicate the page's topic and is commonly displayed as the title of a search result.",
    tags: ["title", "seo", "search"]
  },

  {
    id: "html-metadata-seo-q-013",
    quizId: "quiz_html_metadata_seo",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which is generally the strongest title for an article about React performance optimization?",
    options: [
      { id: "A", text: "React Performance Optimization: Practical Techniques" },
      { id: "B", text: "Home" },
      { id: "C", text: "Page 17" },
      { id: "D", text: "React React React React React" }
    ],
    correctOptionId: "A",
    explanation: "A useful title should be descriptive, concise, and aligned with the actual content rather than relying on vague or repetitive wording.",
    tags: ["title", "seo", "content"]
  },

  {
    id: "html-metadata-seo-q-014",
    quizId: "quiz_html_metadata_seo",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the robots meta tag generally control?",
    options: [
      { id: "A", text: "Instructions about how search engine crawlers may handle the page" },
      { id: "B", text: "The browser's JavaScript engine" },
      { id: "C", text: "The page's CSS reset" },
      { id: "D", text: "The server's database permissions" }
    ],
    correctOptionId: "A",
    explanation: "The robots meta tag can provide crawler directives such as whether a page should be indexed or its links followed.",
    tags: ["robots", "seo", "crawlers"]
  },

  {
    id: "html-metadata-seo-q-015",
    quizId: "quiz_html_metadata_seo",
    order: 15,
    type: "code",
    difficulty: "Beginner",
    question: "What does this tag request?\n\n<meta name=\"robots\" content=\"noindex, nofollow\">",
    options: [
      { id: "A", text: "That compliant crawlers should not index the page and should not follow its links" },
      { id: "B", text: "That the page should always rank first" },
      { id: "C", text: "That users cannot navigate the page" },
      { id: "D", text: "That the browser should hide all links" }
    ],
    correctOptionId: "A",
    explanation: "noindex requests that the page not be included in the search index, while nofollow requests that crawlers not follow links on the page.",
    tags: ["robots", "noindex", "nofollow", "seo"]
  },

  {
    id: "html-metadata-seo-q-016",
    quizId: "quiz_html_metadata_seo",
    order: 16,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which HTML attribute is used to specify the language of the document?",
    options: [
      { id: "A", text: "lang" },
      { id: "B", text: "language" },
      { id: "C", text: "locale" },
      { id: "D", text: "doc-lang" }
    ],
    correctOptionId: "A",
    explanation: "The lang attribute on the html element identifies the primary language of the document.",
    tags: ["lang", "accessibility", "seo"]
  },

  {
    id: "html-metadata-seo-q-017",
    quizId: "quiz_html_metadata_seo",
    order: 17,
    type: "code",
    difficulty: "Beginner",
    question: "Which is the correct way to declare that a page is primarily in English?",
    options: [
      { id: "A", text: "<html lang=\"en\">" },
      { id: "B", text: "<html language=\"English\">" },
      { id: "C", text: "<html locale=\"en\">" },
      { id: "D", text: "<html lang=\"English-US\">" }
    ],
    correctOptionId: "A",
    explanation: "lang=\"en\" uses the standard language tag for English. More specific tags such as en-US can be used when regional distinction matters.",
    tags: ["lang", "html", "accessibility"]
  },

  {
    id: "html-metadata-seo-q-018",
    quizId: "quiz_html_metadata_seo",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why is the lang attribute important beyond SEO?",
    options: [
      { id: "A", text: "It helps assistive technologies and browsers determine how the document's language should be interpreted" },
      { id: "B", text: "It automatically translates the page" },
      { id: "C", text: "It changes the page's URL" },
      { id: "D", text: "It selects the website's hosting server" }
    ],
    correctOptionId: "A",
    explanation: "Language metadata can affect pronunciation and language-specific behavior in assistive technologies and other user agents.",
    tags: ["lang", "accessibility", "metadata"]
  },

  {
    id: "html-metadata-seo-q-019",
    quizId: "quiz_html_metadata_seo",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a canonical URL?",
    options: [
      { id: "A", text: "The preferred URL representing a page when multiple URLs can expose substantially similar content" },
      { id: "B", text: "The URL of the site's homepage only" },
      { id: "C", text: "A URL that can never contain query parameters" },
      { id: "D", text: "A private URL accessible only to search engines" }
    ],
    correctOptionId: "A",
    explanation: "A canonical URL communicates the preferred version of a page when duplicate or near-duplicate URLs exist.",
    tags: ["canonical", "seo", "urls"]
  },

  {
    id: "html-metadata-seo-q-020",
    quizId: "quiz_html_metadata_seo",
    order: 20,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup declares a canonical URL?",
    options: [
      { id: "A", text: "<link rel=\"canonical\" href=\"https://example.com/products/widget\">" },
      { id: "B", text: "<meta canonical=\"https://example.com/products/widget\">" },
      { id: "C", text: "<link canonical=\"true\" src=\"https://example.com/products/widget\">" },
      { id: "D", text: "<canonical href=\"https://example.com/products/widget\">" }
    ],
    correctOptionId: "A",
    explanation: "The canonical URL is specified using a link element with rel=\"canonical\" and an href containing the preferred URL.",
    tags: ["canonical", "link", "seo"]
  },

  {
    id: "html-metadata-seo-q-021",
    quizId: "quiz_html_metadata_seo",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Why can canonical URLs be useful for SEO?",
    options: [
      { id: "A", text: "They help search engines understand which URL should be treated as the preferred version of similar content" },
      { id: "B", text: "They guarantee that duplicate pages disappear immediately" },
      { id: "C", text: "They create backlinks automatically" },
      { id: "D", text: "They force every visitor to use HTTPS" }
    ],
    correctOptionId: "A",
    explanation: "Canonicalization helps search engines consolidate signals and identify the preferred URL among similar versions.",
    tags: ["canonical", "seo", "duplicate-content"]
  },

  {
    id: "html-metadata-seo-q-022",
    quizId: "quiz_html_metadata_seo",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of rel=\"alternate\" in appropriate link relationships?",
    options: [
      { id: "A", text: "It can identify an alternative representation or version of the current resource depending on the associated attributes" },
      { id: "B", text: "It always means the page should not be indexed" },
      { id: "C", text: "It replaces rel=\"canonical\"" },
      { id: "D", text: "It disables all stylesheets" }
    ],
    correctOptionId: "A",
    explanation: "rel=\"alternate\" indicates an alternative representation or relationship. Its meaning becomes more specific when combined with attributes such as hreflang or type.",
    tags: ["link", "alternate", "metadata"]
  },

  {
    id: "html-metadata-seo-q-023",
    quizId: "quiz_html_metadata_seo",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is hreflang primarily used for?",
    options: [
      { id: "A", text: "To indicate language and regional alternatives of a page" },
      { id: "B", text: "To specify the page's CSS language" },
      { id: "C", text: "To translate page content automatically" },
      { id: "D", text: "To define the site's programming language" }
    ],
    correctOptionId: "A",
    explanation: "hreflang annotations help search engines understand which localized versions of a page are intended for particular languages or regions.",
    tags: ["hreflang", "international-seo", "metadata"]
  },

  {
    id: "html-metadata-seo-q-024",
    quizId: "quiz_html_metadata_seo",
    order: 24,
    type: "code",
    difficulty: "Intermediate",
    question: "Which link correctly indicates an English version of a page?",
    options: [
      { id: "A", text: "<link rel=\"alternate\" hreflang=\"en\" href=\"https://example.com/en/page\">" },
      { id: "B", text: "<link language=\"en\" src=\"https://example.com/en/page\">" },
      { id: "C", text: "<link rel=\"language\" href=\"https://example.com/en/page\">" },
      { id: "D", text: "<meta hreflang=\"en\" url=\"https://example.com/en/page\">" }
    ],
    correctOptionId: "A",
    explanation: "hreflang annotations use a link element with rel=\"alternate\", a language/region value, and the URL of the corresponding version.",
    tags: ["hreflang", "link", "international-seo"]
  },

  {
    id: "html-metadata-seo-q-025",
    quizId: "quiz_html_metadata_seo",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What are Open Graph meta tags primarily used for?",
    options: [
      { id: "A", text: "Controlling how a page is represented when shared on platforms that support Open Graph metadata" },
      { id: "B", text: "Controlling browser JavaScript execution" },
      { id: "C", text: "Replacing all SEO metadata" },
      { id: "D", text: "Defining database indexes" }
    ],
    correctOptionId: "A",
    explanation: "Open Graph metadata provides information such as a shared page title, description, URL, and image for supported social sharing systems.",
    tags: ["open-graph", "social-sharing", "metadata"]
  },

  {
    id: "html-metadata-seo-q-026",
    quizId: "quiz_html_metadata_seo",
    order: 26,
    type: "code",
    difficulty: "Intermediate",
    question: "Which is a valid Open Graph title tag?",
    options: [
      { id: "A", text: "<meta property=\"og:title\" content=\"Learn React Hooks\">" },
      { id: "B", text: "<meta name=\"og-title\" value=\"Learn React Hooks\">" },
      { id: "C", text: "<meta og:title=\"Learn React Hooks\">" },
      { id: "D", text: "<og title=\"Learn React Hooks\">" }
    ],
    correctOptionId: "A",
    explanation: "Open Graph properties are conventionally declared using meta elements with a property attribute such as og:title and a content attribute.",
    tags: ["open-graph", "og:title", "social-sharing"]
  },

  {
    id: "html-metadata-seo-q-027",
    quizId: "quiz_html_metadata_seo",
    order: 27,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which Open Graph property identifies the preferred URL of the shared object?",
    options: [
      { id: "A", text: "og:url" },
      { id: "B", text: "og:link" },
      { id: "C", text: "og:canonical" },
      { id: "D", text: "og:href" }
    ],
    correctOptionId: "A",
    explanation: "og:url identifies the canonical URL of the object within Open Graph metadata.",
    tags: ["open-graph", "og:url", "social-sharing"]
  },

  {
    id: "html-metadata-seo-q-028",
    quizId: "quiz_html_metadata_seo",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which Open Graph property specifies the image associated with shared content?",
    options: [
      { id: "A", text: "og:image" },
      { id: "B", text: "og:photo" },
      { id: "C", text: "og:thumbnail" },
      { id: "D", text: "og:picture" }
    ],
    correctOptionId: "A",
    explanation: "og:image specifies the image URL that can be used when the page is shared through Open Graph-aware systems.",
    tags: ["open-graph", "og:image", "social-sharing"]
  },

  {
    id: "html-metadata-seo-q-029",
    quizId: "quiz_html_metadata_seo",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What are Twitter/X Card meta tags used for?",
    options: [
      { id: "A", text: "To provide metadata that can influence how URLs are presented when shared on X and compatible systems" },
      { id: "B", text: "To control Twitter/X account permissions" },
      { id: "C", text: "To authenticate API requests" },
      { id: "D", text: "To hide pages from search engines" }
    ],
    correctOptionId: "A",
    explanation: "Card metadata describes how shared URLs should be represented, such as the card type, title, description, and image.",
    tags: ["twitter-cards", "social-sharing", "metadata"]
  },

  {
    id: "html-metadata-seo-q-030",
    quizId: "quiz_html_metadata_seo",
    order: 30,
    type: "code",
    difficulty: "Intermediate",
    question: "Which tag specifies a large summary card with an image for supported X/Twitter card processing?",
    options: [
      { id: "A", text: "<meta name=\"twitter:card\" content=\"summary_large_image\">" },
      { id: "B", text: "<meta property=\"twitter:image-card\" content=\"large\">" },
      { id: "C", text: "<meta name=\"x:card\" content=\"large\">" },
      { id: "D", text: "<twitter card=\"summary_large_image\">" }
    ],
    correctOptionId: "A",
    explanation: "twitter:card identifies the card type. summary_large_image is the common card type for a large preview image.",
    tags: ["twitter-card", "social-sharing", "metadata"]
  },

  {
    id: "html-metadata-seo-q-031",
    quizId: "quiz_html_metadata_seo",
    order: 31,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is structured data in the context of SEO?",
    options: [
      { id: "A", text: "Machine-readable information that describes entities and content using a defined vocabulary or format" },
      { id: "B", text: "A CSS layout technique" },
      { id: "C", text: "A database backup format" },
      { id: "D", text: "A JavaScript bundling strategy" }
    ],
    correctOptionId: "A",
    explanation: "Structured data gives machines explicit information about content, often using vocabularies such as Schema.org.",
    tags: ["structured-data", "seo", "schema"]
  },

  {
    id: "html-metadata-seo-q-032",
    quizId: "quiz_html_metadata_seo",
    order: 32,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which format is commonly used to add Schema.org structured data to HTML?",
    options: [
      { id: "A", text: "JSON-LD" },
      { id: "B", text: "JSON-CSS" },
      { id: "C", text: "XML-HTML" },
      { id: "D", text: "SEO-LD" }
    ],
    correctOptionId: "A",
    explanation: "JSON-LD is a widely used format for embedding Schema.org structured data in web pages.",
    tags: ["json-ld", "schema", "structured-data"]
  },

  {
    id: "html-metadata-seo-q-033",
    quizId: "quiz_html_metadata_seo",
    order: 33,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup correctly begins a JSON-LD structured-data block?",
    options: [
      { id: "A", text: "<script type=\"application/ld+json\">{ \"@context\": \"https://schema.org\", \"@type\": \"Article\" }</script>" },
      { id: "B", text: "<jsonld type=\"schema\">{ \"type\": \"Article\" }</jsonld>" },
      { id: "C", text: "<meta type=\"application/ld+json\">Article</meta>" },
      { id: "D", text: "<script type=\"application/schema\">Article</script>" }
    ],
    correctOptionId: "A",
    explanation: "JSON-LD is commonly embedded in a script element using type=\"application/ld+json\".",
    tags: ["json-ld", "schema", "structured-data"]
  },

  {
    id: "html-metadata-seo-q-034",
    quizId: "quiz_html_metadata_seo",
    order: 34,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the @type property in Schema.org JSON-LD?",
    options: [
      { id: "A", text: "It identifies the type of entity being described" },
      { id: "B", text: "It specifies the JSON file extension" },
      { id: "C", text: "It sets the browser's content type" },
      { id: "D", text: "It specifies the page's CSS type" }
    ],
    correctOptionId: "A",
    explanation: "@type identifies what kind of Schema.org entity is being described, such as Article, Product, Organization, or Person.",
    tags: ["schema", "json-ld", "structured-data"]
  },

  {
    id: "html-metadata-seo-q-035",
    quizId: "quiz_html_metadata_seo",
    order: 35,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which element is commonly used to link an external favicon or site icon?",
    options: [
      { id: "A", text: "<link>" },
      { id: "B", text: "<icon>" },
      { id: "C", text: "<favicon>" },
      { id: "D", text: "<meta-icon>" }
    ],
    correctOptionId: "A",
    explanation: "A link element with an appropriate rel value can associate an icon with the document.",
    tags: ["favicon", "link", "head"]
  },

  {
    id: "html-metadata-seo-q-036",
    quizId: "quiz_html_metadata_seo",
    order: 36,
    type: "code",
    difficulty: "Intermediate",
    question: "Which markup correctly links a favicon?",
    options: [
      { id: "A", text: "<link rel=\"icon\" href=\"/favicon.ico\">" },
      { id: "B", text: "<icon src=\"/favicon.ico\">" },
      { id: "C", text: "<meta name=\"favicon\" content=\"/favicon.ico\">" },
      { id: "D", text: "<favicon href=\"/favicon.ico\"></favicon>" }
    ],
    correctOptionId: "A",
    explanation: "The standard approach is a link element with rel=\"icon\" and an href pointing to the icon resource.",
    tags: ["favicon", "link", "metadata"]
  },

  {
    id: "html-metadata-seo-q-037",
    quizId: "quiz_html_metadata_seo",
    order: 37,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does rel=\"stylesheet\" on a <link> element indicate?",
    options: [
      { id: "A", text: "The linked resource is a stylesheet for the document" },
      { id: "B", text: "The linked resource is the canonical URL" },
      { id: "C", text: "The linked resource is a sitemap" },
      { id: "D", text: "The linked resource is a favicon" }
    ],
    correctOptionId: "A",
    explanation: "rel=\"stylesheet\" establishes a relationship indicating that the linked resource contains CSS styles for the document.",
    tags: ["link", "stylesheet", "head"]
  },

  {
    id: "html-metadata-seo-q-038",
    quizId: "quiz_html_metadata_seo",
    order: 38,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which relationship is commonly used to establish an early connection to another origin?",
    options: [
      { id: "A", text: "preconnect" },
      { id: "B", text: "early-connect" },
      { id: "C", text: "connect" },
      { id: "D", text: "origin-link" }
    ],
    correctOptionId: "A",
    explanation: "rel=\"preconnect\" allows the browser to perform connection setup to an origin early when that connection is expected to be needed.",
    tags: ["preconnect", "performance", "link"]
  },

  {
    id: "html-metadata-seo-q-039",
    quizId: "quiz_html_metadata_seo",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main purpose of rel=\"preload\"?",
    options: [
      { id: "A", text: "To tell the browser that a resource is important and should be fetched early for the current navigation" },
      { id: "B", text: "To make every resource load before HTML" },
      { id: "C", text: "To permanently cache a resource" },
      { id: "D", text: "To prevent the resource from being used" }
    ],
    correctOptionId: "A",
    explanation: "preload is a performance hint used to request important resources early. It should be used selectively because unnecessary preloads can waste bandwidth.",
    tags: ["preload", "performance", "link"]
  },

  {
    id: "html-metadata-seo-q-040",
    quizId: "quiz_html_metadata_seo",
    order: 40,
    type: "code",
    difficulty: "Advanced",
    question: "Which preload declaration correctly identifies a font resource?",
    options: [
      { id: "A", text: "<link rel=\"preload\" href=\"/fonts/inter.woff2\" as=\"font\" type=\"font/woff2\" crossorigin>" },
      { id: "B", text: "<link preload=\"font\" src=\"/fonts/inter.woff2\">" },
      { id: "C", text: "<font rel=\"preload\" href=\"/fonts/inter.woff2\">" },
      { id: "D", text: "<meta rel=\"preload\" href=\"/fonts/inter.woff2\" type=\"font\">" }
    ],
    correctOptionId: "A",
    explanation: "A font preload uses rel=\"preload\", identifies the destination with as=\"font\", supplies the appropriate MIME type, and commonly uses crossorigin for font fetching.",
    tags: ["preload", "fonts", "performance"]
  },

  {
    id: "html-metadata-seo-q-041",
    quizId: "quiz_html_metadata_seo",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the main purpose of a sitemap.xml file?",
    options: [
      { id: "A", text: "To provide search engines with information about URLs that are available for crawling" },
      { id: "B", text: "To define the site's CSS architecture" },
      { id: "C", text: "To store user login credentials" },
      { id: "D", text: "To replace HTML navigation" }
    ],
    correctOptionId: "A",
    explanation: "An XML sitemap provides crawlers with a list of URLs and optional metadata about those URLs. It can help discovery, especially on larger or more complex sites.",
    tags: ["sitemap", "seo", "crawling"]
  },

  {
    id: "html-metadata-seo-q-042",
    quizId: "quiz_html_metadata_seo",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "Where is robots.txt normally located?",
    options: [
      { id: "A", text: "At the root of the site's origin, such as https://example.com/robots.txt" },
      { id: "B", text: "Inside every HTML document's <head>" },
      { id: "C", text: "Inside the site's CSS folder" },
      { id: "D", text: "Inside the browser cache" }
    ],
    correctOptionId: "A",
    explanation: "The robots.txt file is conventionally served from the root path of an origin. It provides crawler access directives and can also reference a sitemap.",
    tags: ["robots.txt", "seo", "crawling"]
  },

  {
    id: "html-metadata-seo-q-043",
    quizId: "quiz_html_metadata_seo",
    order: 43,
    type: "code",
    difficulty: "Advanced",
    question: "Which robots.txt rule requests that all crawlers avoid the /private/ path?",
    options: [
      { id: "A", text: "User-agent: *\nDisallow: /private/" },
      { id: "B", text: "Crawler: all\nBlock: /private/" },
      { id: "C", text: "User-agent: all\nNoindex: /private/" },
      { id: "D", text: "Robots: *\nDeny: /private/" }
    ],
    correctOptionId: "A",
    explanation: "The standard robots.txt syntax uses User-agent to identify crawlers and Disallow to specify paths they should not crawl.",
    tags: ["robots.txt", "seo", "crawling"]
  },

  {
    id: "html-metadata-seo-q-044",
    quizId: "quiz_html_metadata_seo",
    order: 44,
    type: "code",
    difficulty: "Advanced",
    question: "Which page has the strongest basic metadata foundation for an SEO-focused article?",
    options: [
      {
        id: "A",
        text: "<html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>JavaScript Closures Explained</title><meta name=\"description\" content=\"Understand JavaScript closures with practical examples and mental models.\"><link rel=\"canonical\" href=\"https://example.com/javascript-closures\"></head>"
      },
      {
        id: "B",
        text: "<head><title>Page</title><meta name=\"keywords\" content=\"javascript javascript javascript javascript\"></head>"
      },
      {
        id: "C",
        text: "<head><meta name=\"description\" content=\"Buy now!!!\"><title>Untitled</title></head>"
      },
      {
        id: "D",
        text: "<head><h1>JavaScript Closures Explained</h1><p>Learn closures</p></head>"
      }
    ],
    correctOptionId: "A",
    explanation: "The first option establishes language metadata, character encoding, responsive viewport behavior, a descriptive title, a useful description, and a canonical URL.",
    tags: ["metadata", "seo", "title", "description", "canonical"]
  },

  {
    id: "html-metadata-seo-q-045",
    quizId: "quiz_html_metadata_seo",
    order: 45,
    type: "code",
    difficulty: "Advanced",
    question: "A developer wants a product page to have a useful social preview and basic SEO metadata. Which implementation is strongest?",
    options: [
      {
        id: "A",
        text: "<title>Mechanical Keyboard | Example Store</title><meta name=\"description\" content=\"Shop the Example Store mechanical keyboard with hot-swappable switches and RGB lighting.\"><meta property=\"og:title\" content=\"Mechanical Keyboard | Example Store\"><meta property=\"og:description\" content=\"Hot-swappable mechanical keyboard with RGB lighting.\"><meta property=\"og:image\" content=\"https://example.com/images/keyboard.jpg\"><meta property=\"og:url\" content=\"https://example.com/products/keyboard\">"
      },
      {
        id: "B",
        text: "<title>Keyboard</title><meta name=\"keywords\" content=\"keyboard keyboard keyboard\"><meta property=\"image\" content=\"keyboard.jpg\">"
      },
      {
        id: "C",
        text: "<meta social=\"keyboard\"><title>Product</title><meta description=\"Buy keyboard\">"
      },
      {
        id: "D",
        text: "<h1>Mechanical Keyboard</h1><meta social-preview=\"keyboard.jpg\">"
      }
    ],
    correctOptionId: "A",
    explanation: "The first option combines a descriptive document title and meta description with the key Open Graph properties used to describe the shared page.",
    tags: ["seo", "open-graph", "social-sharing", "metadata"]
  },

  {
    id: "html-metadata-seo-q-046",
    quizId: "quiz_html_metadata_seo",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about the meta keywords tag is most accurate for modern SEO?",
    options: [
      { id: "A", text: "Major modern search engines generally do not use meta keywords as a meaningful ranking signal" },
      { id: "B", text: "Adding hundreds of keywords guarantees high rankings" },
      { id: "C", text: "Meta keywords are required for every HTML page" },
      { id: "D", text: "Meta keywords replace the page title" }
    ],
    correctOptionId: "A",
    explanation: "The old practice of stuffing keywords into a meta keywords tag is not a useful modern SEO strategy. Search engines evaluate the actual content and many other signals.",
    tags: ["meta-keywords", "seo", "common-mistakes"]
  },

  {
    id: "html-metadata-seo-q-047",
    quizId: "quiz_html_metadata_seo",
    order: 47,
    type: "code",
    difficulty: "Advanced",
    question: "A developer has several URLs for the same product:\n\n/products/keyboard\n/products/keyboard?ref=home\n/products/keyboard?campaign=sale\n\nIf these URLs expose the same primary content, which metadata can help identify the preferred URL?",
    options: [
      { id: "A", text: "<link rel=\"canonical\" href=\"https://example.com/products/keyboard\">" },
      { id: "B", text: "<meta name=\"duplicate\" content=\"true\">" },
      { id: "C", text: "<meta name=\"seo\" content=\"canonical\">" },
      { id: "D", text: "<link rel=\"primary\" href=\"/products/keyboard\">" }
    ],
    correctOptionId: "A",
    explanation: "A canonical link element communicates the preferred URL among substantially similar versions of a page.",
    tags: ["canonical", "duplicate-content", "seo"]
  },

  {
    id: "html-metadata-seo-q-048",
    quizId: "quiz_html_metadata_seo",
    order: 48,
    type: "code",
    difficulty: "Advanced",
    question: "A multilingual website has English and Hindi versions of the same article. Which approach is appropriate for helping search engines understand the relationship between the localized URLs?",
    options: [
      {
        id: "A",
        text: "<link rel=\"alternate\" hreflang=\"en\" href=\"https://example.com/en/article\"><link rel=\"alternate\" hreflang=\"hi\" href=\"https://example.com/hi/article\">"
      },
      {
        id: "B",
        text: "<meta language=\"en,hi\" content=\"same-page\">"
      },
      {
        id: "C",
        text: "<link rel=\"translation\" href=\"https://example.com/hi/article\">"
      },
      {
        id: "D",
        text: "<meta name=\"languages\" content=\"en,hi\">"
      }
    ],
    correctOptionId: "A",
    explanation: "hreflang annotations identify alternate localized versions and their intended language or region.",
    tags: ["hreflang", "international-seo", "metadata"]
  },

  {
    id: "html-metadata-seo-q-049",
    quizId: "quiz_html_metadata_seo",
    order: 49,
    type: "code",
    difficulty: "Advanced",
    question: "Which setup is most appropriate for a production article page that needs strong basic metadata and structured data?",
    options: [
      {
        id: "A",
        text: "<html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>React Hooks Guide | Example</title><meta name=\"description\" content=\"A practical guide to React Hooks with examples of useState and useEffect.\"><link rel=\"canonical\" href=\"https://example.com/react-hooks\"><meta property=\"og:title\" content=\"React Hooks Guide | Example\"><meta property=\"og:description\" content=\"Learn React Hooks with practical examples.\"><meta property=\"og:image\" content=\"https://example.com/react-hooks.jpg\"><script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"React Hooks Guide\"}</script></head>"
      },
      {
        id: "B",
        text: "<head><title>React React React</title><meta name=\"keywords\" content=\"react,react,react,react\"><script>SEO=true</script></head>"
      },
      {
        id: "C",
        text: "<head><meta description=\"React Hooks\"><meta seo=\"article\"><title>Guide</title></head>"
      },
      {
        id: "D",
        text: "<head><h1>React Hooks Guide</h1><meta social=\"true\"></head>"
      }
    ],
    correctOptionId: "A",
    explanation: "The first implementation provides the major pieces of a strong basic metadata foundation: language, encoding, viewport, descriptive title, meta description, canonical URL, social metadata, and JSON-LD structured data.",
    tags: ["metadata", "seo", "structured-data", "open-graph", "canonical"]
  },

  {
    id: "html-metadata-seo-q-050",
    quizId: "quiz_html_metadata_seo",
    order: 50,
    type: "code",
    difficulty: "Advanced",
    question: "You are reviewing a production website's <head>. Which approach demonstrates the strongest overall understanding of metadata and basic on-page SEO?",
    options: [
      {
        id: "A",
        text: "<html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Frontend Development Roadmap | Example</title><meta name=\"description\" content=\"A practical frontend development roadmap covering HTML, CSS, JavaScript, React, testing, and deployment.\"><link rel=\"canonical\" href=\"https://example.com/frontend-roadmap\"><meta property=\"og:title\" content=\"Frontend Development Roadmap | Example\"><meta property=\"og:description\" content=\"A practical roadmap for becoming a frontend developer.\"><meta property=\"og:image\" content=\"https://example.com/images/frontend-roadmap.jpg\"><meta property=\"og:url\" content=\"https://example.com/frontend-roadmap\"><script type=\"application/ld+json\">{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Frontend Development Roadmap\"}</script></head>"
      },
      {
        id: "B",
        text: "<html><head><meta name=\"keywords\" content=\"frontend,developer,html,css,javascript,react,frontend,developer\"><title>Frontend Frontend Frontend</title><meta description=\"Best frontend website\"></head>"
      },
      {
        id: "C",
        text: "<html><head><h1>Frontend Development Roadmap</h1><meta seo=\"true\"><meta ranking=\"high\"></head>"
      },
      {
        id: "D",
        text: "<html><head><title>Home</title><meta name=\"description\" content=\"Click here now!!!\"><meta name=\"keywords\" content=\"best,number1,cheap,amazing\"></head>"
      }
    ],
    correctOptionId: "A",
    explanation: "The first implementation combines core document metadata, responsive viewport configuration, a descriptive title and description, canonicalization, social sharing metadata, and structured data. It focuses on accurately describing the page rather than relying on outdated keyword stuffing or imaginary ranking attributes.",
    tags: ["seo", "metadata", "structured-data", "canonical", "open-graph", "head"]
  }
];

export default htmlMetadataSeoQuestions;