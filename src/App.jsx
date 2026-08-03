import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import QuizPage from "./pages/QuizPage"
import ResultsPage from "./pages/ResultsPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/quiz/:slug" element={<QuizPage />} />
      <Route path="/results/:id" element={<ResultsPage />} />
    </Routes>
   
  )
}

export default App