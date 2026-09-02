import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import ReviewAnswersPage from "./pages/ReviewAnswersPage";
import UpdatePrompt from "./components/common/UpdatePrompt";
import HistoryPage from "./pages/HistoryPage";
import HistoryAttemptPage from "./pages/HistoryAttemptPage";
import HistoryReviewAnswersPage from "./pages/HistoryReviewAnswersPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getCategoryBySlug, getQuizBySlug } from "./services/quizService";
import { supabase } from "./lib/supabase";
import AuthTestPage from "./pages/AuthTestPage";
import useSync from "./hooks/useSync";

const getPageTitle = (pathname) => {
  if (pathname === "/") return "Learn smarter, remember longer | Revyze";
  if (pathname === "/categories") return "Explore quizzes | Revyze";
  if (pathname === "/history") return "Your quiz history | Revyze";
  if (pathname === "/results") return "Quiz results | Revyze";

  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "category") {
    const category = getCategoryBySlug(segments[1]);
    return category ? `${category.title} quizzes | Revyze` : "Category | Revyze";
  }

  if (segments[0] === "quiz") {
    const quiz = getQuizBySlug(segments[1]);
    const suffix = segments[2] === "review" ? " review" : "";
    return quiz ? `${quiz.title}${suffix} | Revyze` : "Quiz | Revyze";
  }

  if (segments[0] === "history") {
    return segments[2] === "review"
      ? "Review answers | Revyze"
      : "Quiz attempt | Revyze";
  }

  return "Page not found | Revyze";
};

const PageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = getPageTitle(pathname);
  }, [pathname]);

  return null;
};

const App = () => {
  useSync();
  console.log("Supabase client:", supabase);
  return (
    <>
      <UpdatePrompt />
      <PageTitle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/quiz/:slug" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/quiz/:slug/review" element={<ReviewAnswersPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/:attemptId" element={<HistoryAttemptPage />} />
        <Route path="/auth-test" element={<AuthTestPage />} />
        <Route
          path="/history/:attemptId/review"
          element={<HistoryReviewAnswersPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
