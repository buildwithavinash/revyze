import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import CategoriesPage from "./pages/CategoriesPage"
import CategoryPage from "./pages/CategoryPage"
import QuizPage from "./pages/QuizPage"
import ResultsPage from "./pages/ResultsPage"
import ReviewAnswersPage from "./pages/ReviewAnswersPage"
import UpdatePrompt from "./components/common/UpdatePrompt"
import HistoryPage from "./pages/HistoryPage"

const App = () => {
  return (
    <>
    <UpdatePrompt/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      <Route path="/quiz/:slug" element={<QuizPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/quiz/:slug/review" element={<ReviewAnswersPage />} />
      <Route path="/history" element={<HistoryPage/>}/>
    </Routes>
    </>
  )
}

export default App