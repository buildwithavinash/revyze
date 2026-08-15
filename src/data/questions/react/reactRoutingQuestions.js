const reactRoutingQuestions = [
  {
    id: "react-routing-q-001",
    quizId: "quiz_react_routing",
    order: 1,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the primary purpose of client-side routing in a React application?",
    options: [
      { id: "A", text: "To display different UI views based on the URL without requiring a full browser page reload." },
      { id: "B", text: "To replace React components with HTML files." },
      { id: "C", text: "To automatically create database tables." },
      { id: "D", text: "To prevent the browser from changing the URL." }
    ],
    correctOptionId: "A",
    explanation: "Client-side routing lets a single-page application associate different URLs with different React UI trees while navigating without a traditional full-page document request.",
    tags: ["routing", "spa", "client-side-routing"]
  },

  {
    id: "react-routing-q-002",
    quizId: "quiz_react_routing",
    order: 2,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which library is commonly used for routing in React applications?",
    options: [
      { id: "A", text: "React Router" },
      { id: "B", text: "React Fetcher" },
      { id: "C", text: "React Database" },
      { id: "D", text: "React Compiler Routerless" }
    ],
    correctOptionId: "A",
    explanation: "React Router is a routing library designed for React applications. It provides route matching, navigation, nested routes, URL parameters, loaders/actions, and related routing capabilities.",
    tags: ["react-router", "routing", "libraries"]
  },

  {
    id: "react-routing-q-003",
    quizId: "quiz_react_routing",
    order: 3,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the role of a router in a React application?",
    options: [
      { id: "A", text: "It coordinates the current URL with the UI that should be rendered." },
      { id: "B", text: "It stores every React state variable." },
      { id: "C", text: "It replaces the JavaScript runtime." },
      { id: "D", text: "It converts JSX directly into SQL." }
    ],
    correctOptionId: "A",
    explanation: "A router observes navigation and determines which route configuration matches the current location, allowing the application to render the appropriate UI.",
    tags: ["routing", "router", "url"]
  },

  {
    id: "react-routing-q-004",
    quizId: "quiz_react_routing",
    order: 4,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which component is commonly used to define a browser-based React Router application?",
    options: [
      { id: "A", text: "BrowserRouter" },
      { id: "B", text: "BrowserState" },
      { id: "C", text: "RouteBrowser" },
      { id: "D", text: "URLProviderOnly" }
    ],
    correctOptionId: "A",
    explanation: "BrowserRouter provides routing behavior based on the browser's History API and current URL. It supplies routing context to descendant components.",
    tags: ["react-router", "BrowserRouter", "routing"]
  },

  {
    id: "react-routing-q-005",
    quizId: "quiz_react_routing",
    order: 5,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which component is used to describe a URL pattern and the UI associated with it?",
    options: [
      { id: "A", text: "Route" },
      { id: "B", text: "Link" },
      { id: "C", text: "NavigateButton" },
      { id: "D", text: "Path" }
    ],
    correctOptionId: "A",
    explanation: "A Route associates a path pattern with an element or route configuration. React Router uses the route tree to determine what should render for a location.",
    tags: ["react-router", "Route", "paths"]
  },

  {
    id: "react-routing-q-006",
    quizId: "quiz_react_routing",
    order: 6,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which component provides the route definitions in the declarative React Router API?",
    options: [
      { id: "A", text: "Routes" },
      { id: "B", text: "RouterList" },
      { id: "C", text: "RouteProviderOnly" },
      { id: "D", text: "Paths" }
    ],
    correctOptionId: "A",
    explanation: "The Routes component contains Route elements and selects the best matching branch of the route tree for the current location.",
    tags: ["react-router", "Routes", "route-matching"]
  },

  {
    id: "react-routing-q-007",
    quizId: "quiz_react_routing",
    order: 7,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which code correctly represents a basic React Router setup?",
    options: [
      {
        id: "A",
        text: "<BrowserRouter><Routes><Route path=\"/about\" element={<About />} /></Routes></BrowserRouter>"
      },
      {
        id: "B",
        text: "<Routes><BrowserRouter path=\"/about\"><About /></BrowserRouter></Routes>"
      },
      {
        id: "C",
        text: "<Route path=\"/about\"><BrowserRouter /></Route>"
      },
      {
        id: "D",
        text: "<BrowserRouter path=\"/about\"><RouteList /></BrowserRouter>"
      }
    ],
    correctOptionId: "A",
    explanation: "BrowserRouter provides the routing context, Routes contains the route configuration, and Route maps the /about path to the About element.",
    tags: ["react-router", "BrowserRouter", "Routes", "Route"]
  },

  {
    id: "react-routing-q-008",
    quizId: "quiz_react_routing",
    order: 8,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the purpose of the Link component?",
    options: [
      { id: "A", text: "To navigate between routes using a router-aware link." },
      { id: "B", text: "To create database relationships." },
      { id: "C", text: "To reload the entire page after every click." },
      { id: "D", text: "To define nested route parameters." }
    ],
    correctOptionId: "A",
    explanation: "Link provides navigation within the application's routing system. It lets React Router handle the navigation instead of requiring a normal full-page document navigation.",
    tags: ["Link", "navigation", "react-router"]
  },

  {
    id: "react-routing-q-009",
    quizId: "quiz_react_routing",
    order: 9,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which is generally preferred for internal navigation in a React Router application?",
    options: [
      { id: "A", text: "<Link to=\"/profile\">Profile</Link>" },
      { id: "B", text: "<a href=\"/profile\">Profile</a> for every internal navigation." },
      { id: "C", text: "<button url=\"/profile\">Profile</button>" },
      { id: "D", text: "<Route href=\"/profile\">Profile</Route>" }
    ],
    correctOptionId: "A",
    explanation: "Link integrates navigation with React Router and avoids unnecessary full-page navigation for internal routes.",
    tags: ["Link", "navigation", "spa"]
  },

  {
    id: "react-routing-q-010",
    quizId: "quiz_react_routing",
    order: 10,
    type: "mcq",
    difficulty: "Beginner",
    question: "What does the path \"/users/:id\" represent?",
    options: [
      { id: "A", text: "A route containing a dynamic URL parameter named id." },
      { id: "B", text: "A route that only matches the literal text :id." },
      { id: "C", text: "A route that accepts query parameters only." },
      { id: "D", text: "A route that automatically creates a user." }
    ],
    correctOptionId: "A",
    explanation: "The :id segment is a dynamic route parameter. URLs such as /users/42 and /users/abc can match it, with the actual segment available through route params.",
    tags: ["params", "dynamic-routes", "paths"]
  },

  {
    id: "react-routing-q-011",
    quizId: "quiz_react_routing",
    order: 11,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which Hook is commonly used to read dynamic route parameters?",
    options: [
      { id: "A", text: "useParams" },
      { id: "B", text: "useRouteValue" },
      { id: "C", text: "usePathState" },
      { id: "D", text: "useDynamicURL" }
    ],
    correctOptionId: "A",
    explanation: "useParams reads the dynamic parameters matched by the current route, such as id from /users/:id.",
    tags: ["useParams", "params", "dynamic-routes"]
  },

  {
    id: "react-routing-q-012",
    quizId: "quiz_react_routing",
    order: 12,
    type: "mcq",
    difficulty: "Beginner",
    question: "If the current route is \"/users/:id\" and the URL is \"/users/42\", what does useParams() provide for id?",
    options: [
      { id: "A", text: "\"42\"" },
      { id: "B", text: "42 as a number automatically." },
      { id: "C", text: "\"id\"" },
      { id: "D", text: "undefined because route parameters are not supported." }
    ],
    correctOptionId: "A",
    explanation: "Route parameters are represented as strings. Therefore the id value from /users/42 is \"42\" unless the application explicitly converts it to a number.",
    tags: ["useParams", "params", "type-conversion"]
  },

  {
    id: "react-routing-q-013",
    quizId: "quiz_react_routing",
    order: 13,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which Hook is commonly used for programmatic navigation?",
    options: [
      { id: "A", text: "useNavigate" },
      { id: "B", text: "useRoutePush" },
      { id: "C", text: "useURLChange" },
      { id: "D", text: "useRedirectState" }
    ],
    correctOptionId: "A",
    explanation: "useNavigate provides a navigation function that can be called from application logic, such as after a successful form submission.",
    tags: ["useNavigate", "navigation", "hooks"]
  },

  {
    id: "react-routing-q-014",
    quizId: "quiz_react_routing",
    order: 14,
    type: "mcq",
    difficulty: "Beginner",
    question: "Which situation is a good use case for useNavigate?",
    options: [
      { id: "A", text: "Navigating to a dashboard after a successful login." },
      { id: "B", text: "Defining the component's CSS color." },
      { id: "C", text: "Reading a route parameter from the URL." },
      { id: "D", text: "Creating a React state variable." }
    ],
    correctOptionId: "A",
    explanation: "Programmatic navigation is useful when navigation is triggered by application logic rather than simply by rendering a clickable link.",
    tags: ["useNavigate", "navigation", "authentication"]
  },

  {
    id: "react-routing-q-015",
    quizId: "quiz_react_routing",
    order: 15,
    type: "mcq",
    difficulty: "Beginner",
    question: "What is the difference between a URL path parameter and a query parameter?",
    options: [
      { id: "A", text: "A path parameter is part of the route pattern, while a query parameter appears after ? in the URL." },
      { id: "B", text: "They are exactly the same syntax." },
      { id: "C", text: "Query parameters can only contain numbers." },
      { id: "D", text: "Path parameters cannot change." }
    ],
    correctOptionId: "A",
    explanation: "A path such as /products/:id uses a dynamic path segment, while /products?category=books uses a query string after the ?. They are accessed differently.",
    tags: ["params", "query-parameters", "url"]
  },

  {
    id: "react-routing-q-016",
    quizId: "quiz_react_routing",
    order: 16,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which API is commonly used to read URL query parameters in React Router?",
    options: [
      { id: "A", text: "useSearchParams" },
      { id: "B", text: "useQueryValues" },
      { id: "C", text: "useURLParamsOnly" },
      { id: "D", text: "useQueryRoute" }
    ],
    correctOptionId: "A",
    explanation: "useSearchParams provides access to the URL's search parameters and a way to update them through the router.",
    tags: ["useSearchParams", "query-parameters", "url"]
  },

  {
    id: "react-routing-q-017",
    quizId: "quiz_react_routing",
    order: 17,
    type: "mcq",
    difficulty: "Intermediate",
    question: "For the URL \"/products?category=books&page=2\", which statement is correct?",
    options: [
      { id: "A", text: "category and page are query/search parameters." },
      { id: "B", text: "category and page are path parameters." },
      { id: "C", text: "products is a query parameter." },
      { id: "D", text: "The URL contains no parameters." }
    ],
    correctOptionId: "A",
    explanation: "Everything after the ? is the query string. Here, category=books and page=2 are search parameters.",
    tags: ["query-parameters", "useSearchParams", "url"]
  },

  {
    id: "react-routing-q-018",
    quizId: "quiz_react_routing",
    order: 18,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is nested routing?",
    options: [
      { id: "A", text: "Defining child routes within a parent route hierarchy." },
      { id: "B", text: "Creating multiple React roots on the same page." },
      { id: "C", text: "Putting one browser inside another browser." },
      { id: "D", text: "Using multiple query parameters." }
    ],
    correctOptionId: "A",
    explanation: "Nested routing models UI and URL hierarchy together. A parent route can render shared layout while child routes render inside a designated outlet.",
    tags: ["nested-routes", "routing", "route-hierarchy"]
  },

  {
    id: "react-routing-q-019",
    quizId: "quiz_react_routing",
    order: 19,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which component renders the currently matched child route inside a parent route?",
    options: [
      { id: "A", text: "Outlet" },
      { id: "B", text: "ChildRoute" },
      { id: "C", text: "NestedView" },
      { id: "D", text: "RouteSlotOnly" }
    ],
    correctOptionId: "A",
    explanation: "Outlet is the placeholder where the matching child route element is rendered within a parent route component.",
    tags: ["Outlet", "nested-routes", "layouts"]
  },

  {
    id: "react-routing-q-020",
    quizId: "quiz_react_routing",
    order: 20,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Consider this structure:\n\n<Route path=\"dashboard\" element={<DashboardLayout />}>\n  <Route path=\"settings\" element={<Settings />} />\n</Route>\n\nWhat URL matches Settings?",
    options: [
      { id: "A", text: "/dashboard/settings" },
      { id: "B", text: "/settings/dashboard" },
      { id: "C", text: "/dashboard" },
      { id: "D", text: "/settings" }
    ],
    correctOptionId: "A",
    explanation: "The child route path is relative to the parent route. Combining dashboard and settings produces /dashboard/settings.",
    tags: ["nested-routes", "relative-paths", "routing"]
  },

  {
    id: "react-routing-q-021",
    quizId: "quiz_react_routing",
    order: 21,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What must DashboardLayout generally render if it wants its nested route to appear?",
    options: [
      { id: "A", text: "<Outlet />" },
      { id: "B", text: "<Route />" },
      { id: "C", text: "<BrowserRouter />" },
      { id: "D", text: "<Navigate />" }
    ],
    correctOptionId: "A",
    explanation: "Outlet marks the location inside the parent layout where the matching child route is rendered.",
    tags: ["Outlet", "nested-routes", "layouts"]
  },

  {
    id: "react-routing-q-022",
    quizId: "quiz_react_routing",
    order: 22,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is a layout route useful for?",
    options: [
      { id: "A", text: "Sharing UI such as navigation and sidebars across multiple child routes." },
      { id: "B", text: "Preventing all child routes from rendering." },
      { id: "C", text: "Converting query parameters to JSON automatically." },
      { id: "D", text: "Replacing all React components with server HTML." }
    ],
    correctOptionId: "A",
    explanation: "A layout route lets multiple child routes share persistent UI while the child content changes through Outlet.",
    tags: ["layout-routes", "nested-routes", "Outlet"]
  },

  {
    id: "react-routing-q-023",
    quizId: "quiz_react_routing",
    order: 23,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is an index route?",
    options: [
      { id: "A", text: "A child route that renders at the parent's URL by default." },
      { id: "B", text: "A route that always appears at /index." },
      { id: "C", text: "A route used only for databases." },
      { id: "D", text: "A route that cannot have an element." }
    ],
    correctOptionId: "A",
    explanation: "An index route acts as the default child route for its parent URL. It is useful when a parent layout should display a default child view.",
    tags: ["index-routes", "nested-routes", "routing"]
  },

  {
    id: "react-routing-q-024",
    quizId: "quiz_react_routing",
    order: 24,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Suppose /dashboard has child routes overview and settings. Why might an index route be useful?",
    options: [
      { id: "A", text: "It can render Overview when the user visits /dashboard without explicitly navigating to /dashboard/overview." },
      { id: "B", text: "It forces /dashboard to become /settings."
      },
      { id: "C", text: "It disables nested routing."
      },
      { id: "D", text: "It removes the dashboard layout." }
    ],
    correctOptionId: "A",
    explanation: "An index route is the default child for the parent's URL, making it suitable for a default dashboard view.",
    tags: ["index-routes", "nested-routes", "dashboard"]
  },

  {
    id: "react-routing-q-025",
    quizId: "quiz_react_routing",
    order: 25,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does Navigate provide in React Router?",
    options: [
      { id: "A", text: "Declarative navigation by rendering a navigation instruction." },
      { id: "B", text: "A replacement for BrowserRouter."
      },
      { id: "C", text: "A way to define dynamic route parameters."
      },
      { id: "D", text: "A way to create HTTP servers." }
    ],
    correctOptionId: "A",
    explanation: "Navigate can be rendered when the application should redirect or navigate declaratively, such as redirecting unauthenticated users.",
    tags: ["Navigate", "redirects", "navigation"]
  },

  {
    id: "react-routing-q-026",
    quizId: "quiz_react_routing",
    order: 26,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which approach is appropriate for protecting a dashboard from unauthenticated users in a component-based routing setup?",
    options: [
      { id: "A", text: "Render the dashboard for authenticated users and navigate or redirect unauthenticated users to login."
      },
      { id: "B", text: "Hide the dashboard with CSS only."
      },
      { id: "C", text: "Store the password in the route path."
      },
      { id: "D", text: "Use a query parameter containing the user's password." }
    ],
    correctOptionId: "A",
    explanation: "Routing can control which UI is presented to authenticated users. However, client-side route protection is not a security boundary; the server must still enforce authorization.",
    tags: ["protected-routes", "authentication", "authorization"]
  },

  {
    id: "react-routing-q-027",
    quizId: "quiz_react_routing",
    order: 27,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is client-side route protection alone insufficient for securing private data?",
    options: [
      { id: "A", text: "A user can bypass UI routing and directly call backend APIs, so authorization must also be enforced on the server."
      },
      { id: "B", text: "React Router automatically exposes every database password."
      },
      { id: "C", text: "BrowserRouter disables HTTPS."
      },
      { id: "D", text: "Routes cannot contain private pages." }
    ],
    correctOptionId: "A",
    explanation: "Client-side routing controls the UI, not backend authorization. Sensitive resources must be protected by server-side authentication and authorization checks.",
    tags: ["routing", "security", "authorization", "authentication"]
  },

  {
    id: "react-routing-q-028",
    quizId: "quiz_react_routing",
    order: 28,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What does the navigate(-1) pattern generally accomplish?",
    options: [
      { id: "A", text: "Moves backward one entry in the browser history."
      },
      { id: "B", text: "Moves to route parameter -1."
      },
      { id: "C", text: "Reloads the page exactly once."
      },
      { id: "D", text: "Navigates to /-1." }
    ],
    correctOptionId: "A",
    explanation: "The numeric form of navigate can move through the browser history. -1 means go back one history entry.",
    tags: ["useNavigate", "history", "navigation"]
  },

  {
    id: "react-routing-q-029",
    quizId: "quiz_react_routing",
    order: 29,
    type: "mcq",
    difficulty: "Intermediate",
    question: "What is the purpose of the replace option during navigation?",
    options: [
      { id: "A", text: "To replace the current history entry instead of adding a new one."
      },
      { id: "B", text: "To replace the current React component's source code."
      },
      { id: "C", text: "To replace all route parameters."
      },
      { id: "D", text: "To replace BrowserRouter with HashRouter." }
    ],
    correctOptionId: "A",
    explanation: "Replacing the current history entry is useful when the user should not be able to return to the previous URL through the browser Back button, such as after certain redirects.",
    tags: ["navigation", "history", "replace"]
  },

  {
    id: "react-routing-q-030",
    quizId: "quiz_react_routing",
    order: 30,
    type: "mcq",
    difficulty: "Intermediate",
    question: "Which statement best describes relative navigation?",
    options: [
      { id: "A", text: "The destination can be interpreted relative to the current route hierarchy."
      },
      { id: "B", text: "The destination must always start with https://."
      },
      { id: "C", text: "Relative navigation disables nested routes."
      },
      { id: "D", text: "Relative navigation only works with query parameters." }
    ],
    correctOptionId: "A",
    explanation: "React Router supports relative route navigation, which is particularly useful inside nested route hierarchies.",
    tags: ["navigation", "relative-routes", "nested-routes"]
  },

  {
    id: "react-routing-q-031",
    quizId: "quiz_react_routing",
    order: 31,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why might a developer use NavLink instead of Link for a navigation menu?",
    options: [
      { id: "A", text: "NavLink provides information about whether the link's route is currently active, which can be used for styling."
      },
      { id: "B", text: "NavLink can only navigate to external websites."
      },
      { id: "C", text: "NavLink prevents navigation."
      },
      { id: "D", text: "NavLink replaces Route." }
    ],
    correctOptionId: "A",
    explanation: "NavLink is useful for navigation menus because it exposes active-state information that can be used to apply active styles.",
    tags: ["NavLink", "navigation", "active-route"]
  },

  {
    id: "react-routing-q-032",
    quizId: "quiz_react_routing",
    order: 32,
    type: "mcq",
    difficulty: "Advanced",
    question: "Consider:\n\n<Route path=\"/products/:productId\" element={<Product />} />\n\nInside Product, which code correctly reads productId?",
    options: [
      { id: "A", text: "const { productId } = useParams();"
      },
      { id: "B", text: "const { productId } = useNavigate();"
      },
      { id: "C", text: "const { productId } = useSearchParams();"
      },
      { id: "D", text: "const productId = useLocation('/products/:productId');" }
    ],
    correctOptionId: "A",
    explanation: "useParams returns the dynamic parameters matched by the current route, including productId.",
    tags: ["useParams", "dynamic-routes", "params"]
  },

  {
    id: "react-routing-q-033",
    quizId: "quiz_react_routing",
    order: 33,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is the likely issue with this route?\n\n<Route path=\"users/:id\" element={<User />} />\n\nThe developer expects /users to render User.",
    options: [
      { id: "A", text: "The route requires an id segment, so /users alone does not match it."
      },
      { id: "B", text: "Dynamic parameters always match missing values."
      },
      { id: "C", text: "Route parameters only work with query strings."
      },
      { id: "D", text: "React Router ignores static segments." }
    ],
    correctOptionId: "A",
    explanation: "The :id segment is required for that route pattern. /users/123 can match, while /users does not match that specific pattern.",
    tags: ["params", "route-matching", "debugging"]
  },

  {
    id: "react-routing-q-034",
    quizId: "quiz_react_routing",
    order: 34,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is a catch-all route commonly used for?",
    options: [
      { id: "A", text: "Handling URLs that do not match the application's defined routes."
      },
      { id: "B", text: "Matching only the home page."
      },
      { id: "C", text: "Matching only query parameters."
      },
      { id: "D", text: "Creating database fallbacks." }
    ],
    correctOptionId: "A",
    explanation: "A catch-all route can render a Not Found page or other fallback UI when no more specific route matches the URL.",
    tags: ["routing", "404", "catch-all", "route-matching"]
  },

  {
    id: "react-routing-q-035",
    quizId: "quiz_react_routing",
    order: 35,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which route pattern is commonly used as a catch-all in React Router?",
    options: [
      { id: "A", text: "path=\"*\""
      },
      { id: "B", text: "path=\"all\""
      },
      { id: "C", text: "path=\"404-only\""
      },
      { id: "D", text: "path=\"/**/404\""
      }
    ],
    correctOptionId: "A",
    explanation: "The * splat pattern can match otherwise unmatched paths and is commonly used for fallback or Not Found routes.",
    tags: ["catch-all", "404", "paths"]
  },

  {
    id: "react-routing-q-036",
    quizId: "quiz_react_routing",
    order: 36,
    type: "mcq",
    difficulty: "Advanced",
    question: "A React Router application works when navigating internally but refreshing /dashboard on a production server returns a server 404. What is a likely cause?",
    options: [
      { id: "A", text: "The server is not configured to serve the application's entry document for client-side routes."
      },
      { id: "B", text: "React cannot render dashboard components."
      },
      { id: "C", text: "useParams automatically deleted the route."
      },
      { id: "D", text: "Link disables browser refresh."
      }
    ],
    correctOptionId: "A",
    explanation: "With history-based client routing, the browser requests /dashboard directly when refreshed. The server must be configured to fall back to the SPA entry document for routes that should be handled client-side.",
    tags: ["BrowserRouter", "deployment", "server-config", "404"]
  },

  {
    id: "react-routing-q-037",
    quizId: "quiz_react_routing",
    order: 37,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why does BrowserRouter often require server-side fallback configuration?",
    options: [
      { id: "A", text: "Because the server may receive a deep-link URL directly and must return the application's entry document so React Router can handle it."
      },
      { id: "B", text: "Because BrowserRouter stores routes in a SQL database."
      },
      { id: "C", text: "Because BrowserRouter cannot read the URL."
      },
      { id: "D", text: "Because BrowserRouter only works with POST requests." }
    ],
    correctOptionId: "A",
    explanation: "BrowserRouter uses normal browser URLs. A direct request for /dashboard reaches the server before the client application runs, so the server needs to return the SPA entry document for that route.",
    tags: ["BrowserRouter", "deployment", "server-config"]
  },

  {
    id: "react-routing-q-038",
    quizId: "quiz_react_routing",
    order: 38,
    type: "mcq",
    difficulty: "Advanced",
    question: "What is one reason a developer might choose HashRouter?",
    options: [
      { id: "A", text: "The deployment environment cannot easily configure server fallback behavior for client-side routes."
      },
      { id: "B", text: "It automatically provides backend authorization."
      },
      { id: "C", text: "It makes URLs completely independent of the browser."
      },
      { id: "D", text: "It prevents users from bookmarking pages." }
    ],
    correctOptionId: "A",
    explanation: "Hash-based routing stores the client-side route in the URL fragment, which is not sent to the server. This can simplify deployments where server fallback configuration is unavailable.",
    tags: ["HashRouter", "deployment", "routing"]
  },

  {
    id: "react-routing-q-039",
    quizId: "quiz_react_routing",
    order: 39,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement about a URL hash is correct?",
    options: [
      { id: "A", text: "The fragment after # is not included in the HTTP request sent to the server."
      },
      { id: "B", text: "The fragment is always sent as part of the server request path."
      },
      { id: "C", text: "The fragment can only contain numbers."
      },
      { id: "D", text: "The fragment automatically becomes a route parameter." }
    ],
    correctOptionId: "A",
    explanation: "URL fragments are handled by the browser and are not sent as part of the HTTP request to the server. This is why hash-based routing can avoid server fallback requirements.",
    tags: ["HashRouter", "url", "browser"]
  },

  {
    id: "react-routing-q-040",
    quizId: "quiz_react_routing",
    order: 40,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which approach is best when a route needs both a dynamic product ID and a filter such as category?",
    options: [
      { id: "A", text: "Use a path parameter for the identity and a query parameter for the filter, such as /products/42?category=books."
      },
      { id: "B", text: "Put all information into the React component state and remove it from the URL."
      },
      { id: "C", text: "Use only a query parameter for everything regardless of semantics."
      },
      { id: "D", text: "Put the values inside the route component's JSX." }
    ],
    correctOptionId: "A",
    explanation: "The product ID identifies the resource and fits naturally as a path parameter, while category is a filter and fits naturally in the query string.",
    tags: ["params", "query-parameters", "url-design"]
  },

  {
    id: "react-routing-q-041",
    quizId: "quiz_react_routing",
    order: 41,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why can putting important application state only in component state be problematic for navigation-heavy interfaces?",
    options: [
      { id: "A", text: "The state may not survive refreshes or be shareable/bookmarkable, while URL state can represent navigable application state."
      },
      { id: "B", text: "Component state cannot contain strings."
      },
      { id: "C", text: "React state always changes the server URL."
      },
      { id: "D", text: "URL state cannot be read by browsers." }
    ],
    correctOptionId: "A",
    explanation: "For state such as filters, pagination, tabs, or selected resources that should be shareable or restorable through navigation, encoding it in the URL can provide a better user experience.",
    tags: ["routing", "url-state", "query-parameters", "ux"]
  },

  {
    id: "react-routing-q-042",
    quizId: "quiz_react_routing",
    order: 42,
    type: "mcq",
    difficulty: "Advanced",
    question: "A user is on /products/42 and clicks a Link to /products/43. What should happen to a route parameter named productId?",
    options: [
      { id: "A", text: "It should change from \"42\" to \"43\" and the matching route UI can update."
      },
      { id: "B", text: "It remains permanently 42 because route parameters are immutable."
      },
      { id: "C", text: "It becomes undefined because Link cannot change parameters."
      },
      { id: "D", text: "It becomes the number 43 automatically." }
    ],
    correctOptionId: "A",
    explanation: "The URL now matches the same dynamic route with a different parameter value. The component can receive the new parameter value and update accordingly.",
    tags: ["params", "Link", "navigation", "dynamic-routes"]
  },

  {
    id: "react-routing-q-043",
    quizId: "quiz_react_routing",
    order: 43,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which statement best describes route matching?",
    options: [
      { id: "A", text: "React Router compares the current location against the configured route hierarchy and selects the matching branch."
      },
      { id: "B", text: "React Router renders every Route simultaneously."
      },
      { id: "C", text: "React Router chooses routes randomly."
      },
      { id: "D", text: "Route matching happens only when the browser starts." }
    ],
    correctOptionId: "A",
    explanation: "The router evaluates the current location against the route tree and determines the branch whose patterns best match the URL.",
    tags: ["route-matching", "routing", "route-tree"]
  },

  {
    id: "react-routing-q-044",
    quizId: "quiz_react_routing",
    order: 44,
    type: "mcq",
    difficulty: "Advanced",
    question: "Why is route hierarchy useful for large applications?",
    options: [
      { id: "A", text: "It allows shared layouts, nested UI, route-specific parameters, and organized navigation to be modeled together."
      },
      { id: "B", text: "It eliminates the need for components."
      },
      { id: "C", text: "It forces every page to use one component."
      },
      { id: "D", text: "It prevents URLs from changing." }
    ],
    correctOptionId: "A",
    explanation: "A hierarchical route structure mirrors application structure. Shared layouts can wrap children while nested routes represent progressively deeper parts of the UI.",
    tags: ["route-hierarchy", "nested-routes", "architecture"]
  },

  {
    id: "react-routing-q-045",
    quizId: "quiz_react_routing",
    order: 45,
    type: "mcq",
    difficulty: "Advanced",
    question: "A developer uses <a href=\"/dashboard\">Dashboard</a> for internal navigation in a React Router SPA. What is the main downside compared with Link?",
    options: [
      { id: "A", text: "It can trigger normal browser document navigation and reload the application instead of using router-managed client navigation."
      },
      { id: "B", text: "Anchor elements cannot contain text."
      },
      { id: "C", text: "The URL cannot contain /dashboard."
      },
      { id: "D", text: "React Router automatically converts every anchor into a button." }
    ],
    correctOptionId: "A",
    explanation: "A normal anchor performs browser navigation. Link is designed to integrate with the router and perform client-side navigation for internal routes.",
    tags: ["Link", "anchor", "navigation", "spa"]
  },

  {
    id: "react-routing-q-046",
    quizId: "quiz_react_routing",
    order: 46,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which scenario best demonstrates the value of nested routes?",
    options: [
      { id: "A", text: "An admin layout stays visible while /admin/users, /admin/orders, and /admin/settings replace only the main content area."
      },
      { id: "B", text: "Every page is opened in a separate browser tab."
      },
      { id: "C", text: "Every component has its own database."
      },
      { id: "D", text: "All pages use exactly the same URL." }
    ],
    correctOptionId: "A",
    explanation: "Nested routes allow the admin layout to remain mounted while the child route rendered through Outlet changes.",
    tags: ["nested-routes", "Outlet", "layouts", "admin"]
  },

  {
    id: "react-routing-q-047",
    quizId: "quiz_react_routing",
    order: 47,
    type: "mcq",
    difficulty: "Advanced",
    question: "A product page uses /products/:id and fetches product data whenever id changes. Which dependency relationship is correct?",
    options: [
      { id: "A", text: "The data-fetching synchronization should depend on id."
      },
      { id: "B", text: "The fetch should always have an empty dependency array."
      },
      { id: "C", text: "The fetch should depend only on window.innerWidth."
      },
      { id: "D", text: "The route parameter should never influence data fetching." }
    ],
    correctOptionId: "A",
    explanation: "The requested resource changes when id changes, so the data synchronization should respond to the current route parameter.",
    tags: ["useParams", "useEffect", "data-fetching", "routing"]
  },

  {
    id: "react-routing-q-048",
    quizId: "quiz_react_routing",
    order: 48,
    type: "mcq",
    difficulty: "Advanced",
    question: "Which design is most appropriate for a 404 page in a React Router application?",
    options: [
      { id: "A", text: "Define a fallback route such as path=\"*\" that renders a NotFound component."
      },
      { id: "B", text: "Create a route with path=\"404-only\" and expect every unknown URL to match it automatically."
      },
      { id: "C", text: "Use useParams to force every URL into the 404 component."
      },
      { id: "D", text: "Put the NotFound component inside BrowserRouter without a route." }
    ],
    correctOptionId: "A",
    explanation: "A catch-all route can handle locations that do not match the application's more specific routes and render an appropriate Not Found UI.",
    tags: ["404", "catch-all", "routing", "error-handling"]
  },

  {
    id: "react-routing-q-049",
    quizId: "quiz_react_routing",
    order: 49,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are building a dashboard with /dashboard/users/:userId/settings. The dashboard layout should remain visible and the settings page should know which user is selected. Which routing design is most appropriate?",
    options: [
      { id: "A", text: "Use nested routes for the dashboard layout and a dynamic :userId route parameter for the selected user."
      },
      { id: "B", text: "Store userId only in a local variable and use one route for every page."
      },
      { id: "C", text: "Use a query parameter for the dashboard layout itself and no route hierarchy."
      },
      { id: "D", text: "Create a separate BrowserRouter inside every dashboard component." }
    ],
    correctOptionId: "A",
    explanation: "The dashboard is a natural layout hierarchy, while userId identifies a specific resource and therefore fits naturally as a dynamic route parameter.",
    tags: ["nested-routes", "params", "layouts", "architecture"]
  },

  {
    id: "react-routing-q-050",
    quizId: "quiz_react_routing",
    order: 50,
    type: "mcq",
    difficulty: "Advanced",
    question: "You are designing a production React application with an admin dashboard. It needs a persistent sidebar, nested pages, user-specific URLs, filterable tables, protected UI, and proper 404 handling. Which architecture is the best fit?",
    options: [
      {
        id: "A",
        text: "Use a router with a parent admin layout, nested child routes rendered through Outlet, dynamic params for resource IDs, search params for filters, navigation APIs for redirects, and a catch-all route for unknown URLs."
      },
      {
        id: "B",
        text: "Use one component for the entire application and keep every URL change in local state."
      },
      {
        id: "C",
        text: "Use only query parameters for every route and duplicate the sidebar in every page component."
      },
      {
        id: "D",
        text: "Use normal anchor tags for every internal page and rely on CSS to determine which page is active."
      }
    ],
    correctOptionId: "A",
    explanation: "A route hierarchy maps naturally to the application's UI hierarchy. The admin layout can provide persistent navigation and render children through Outlet; dynamic parameters represent resource identity; search parameters represent filters; navigation APIs handle programmatic redirects; and a catch-all route provides a 404 fallback. Authentication and authorization must still be enforced by the backend for protected data.",
    tags: ["routing", "nested-routes", "Outlet", "params", "search-params", "navigation", "404", "architecture", "security"]
  }
];

export default reactRoutingQuestions;