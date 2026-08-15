const categories = [
  {
    id: 'cat_react',
    title: "React",
    slug: "react",
    description: "Practice React fundamentals and advanced concepts.",
    icon: new URL('../assets/category_icons/cat_react.svg', import.meta.url).href,
  },
  {
    id: "cat_javascript",
    title: "JavaScript",
    slug: "javascript",
    description: "Strengthen your JavaScript fundamentals and ES6+ knowledge.",
    icon: new URL('../assets/category_icons/cat_javascript.svg', import.meta.url).href,
  },
  {
    id: "cat_html",
    title: "HTML",
    slug: "html",
    description: "Revise semantic HTML, forms, accessibility, and structure.",   
    icon: new URL('../assets/category_icons/cat_html.svg', import.meta.url).href,
  },
  {
    id: "cat_css",
    title: "CSS",
    slug: "css",
    description:
      "Master layouts, Flexbox, Grid, animations, and responsive design.",   
    icon: new URL('../assets/category_icons/cat_css.svg', import.meta.url).href,
  },
  {
    id: "cat_git",
    title: "Git & GitHub",
    slug: "git-github",
    description:
      "Practice version control, branching, merging, and collaboration.",
    icon: new URL('../assets/category_icons/cat_git.svg', import.meta.url).href,
  },
  {
    id: "cat_typescript",
    title: "TypeScript",
    slug: "typescript",
    description:
      "Improve your understanding of types, interfaces, and generics.", 
    icon: new URL('../assets/category_icons/cat_typescript.svg', import.meta.url).href,
  },
  {
    id: "cat_nodejs",
    title: "Node.js",
    slug: "nodejs",
    description:
      "Revise backend fundamentals, APIs, and asynchronous programming.", 
    icon: new URL('../assets/category_icons/cat_nodejs.svg', import.meta.url).href,
  },
  {
    id: "cat_sql",
    title: "SQL",
    slug: "sql",
    description:
      "Practice database queries, joins, relationships, and indexing.",
    icon: new URL('../assets/category_icons/cat_sql.svg', import.meta.url).href,
  },
];

export default categories;
