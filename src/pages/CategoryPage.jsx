import { Link, useParams } from "react-router";
import Header from "../components/common/Header";
import Container from "../components/ui/Container";
import QuizInfoModal from "../components/quiz/QuizInfoModal";
import { useEffect, useState } from "react";

import {
  getCategoryBySlug,
  getQuizzesByCategory,
} from "../services/quizService";

import { ArrowLeft, Clock, HelpCircle, RotateCcw } from "lucide-react";

import {
  getQuizProgressByIds,
  getQuizAttemptSummariesByIds,
} from "../services/storageService";

const difficultyStyles = {
  Beginner: "bg-success/10 text-success",
  Intermediate: "bg-warning/10 text-warning",
  Advanced: "bg-danger/10 text-danger",
};

const CategoryPage = () => {
  const { slug } = useParams();

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");

  const [quizProgress, setQuizProgress] = useState([]);
  const [quizAttemptSummaries, setQuizAttemptSummaries] = useState({});

  const category = getCategoryBySlug(slug);

  const quizzes = category ? getQuizzesByCategory(category.id) : [];

  // Load progress + attempt history
  useEffect(() => {
    if (!category) return;

    const loadQuizData = async () => {
      if (quizzes.length === 0) {
        setQuizProgress([]);
        setQuizAttemptSummaries({});
        return;
      }

      try {
        const quizIds = quizzes.map((quiz) => quiz.id);

        const [progress, attemptSummaries] = await Promise.all([
          getQuizProgressByIds(quizIds),
          getQuizAttemptSummariesByIds(quizIds),
        ]);

        setQuizProgress(progress);
        setQuizAttemptSummaries(attemptSummaries);
      } catch (error) {
        console.error("Failed to load quiz data:", error);
      }
    };

    loadQuizData();
  }, [category?.id]);

  // Search + difficulty filtering
  const filteredQuizzes = quizzes.filter((quiz) => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      !query ||
      quiz.title.toLowerCase().includes(query) ||
      quiz.description.toLowerCase().includes(query);

    const matchesDifficulty =
      difficulty === "all" ||
      quiz.difficulty.toLowerCase() === difficulty.toLowerCase();

    return matchesSearch && matchesDifficulty;
  });

  // Invalid category
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 text-center px-4">
        <h1 className="text-lg font-semibold text-text">Category not found</h1>

        <Link to="/" className="text-sm text-primary hover:underline">
          Back home
        </Link>
      </div>
    );
  }

  const handleClearFilters = () => {
    setSearchQuery("");
    setDifficulty("all");
  };

  return (
    <div className="md:pb-24 pb-12">
      <Header />

      <Container>
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-secondary mt-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
          Back
        </Link>

        {/* Category info */}
        <div className="mt-5 sm:mt-6">
          <div className="flex gap-2.5 sm:gap-3 items-center">
            <img
              src={category.icon}
              alt=""
              className="h-8 w-8 sm:h-10 sm:w-10"
            />

            <h1 className="font-semibold text-text text-xl sm:text-2xl md:text-3xl">
              {category.title}
            </h1>
          </div>

          <p className="text-sm sm:text-base text-text-secondary mt-2">
            {category.description}
          </p>

          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            {filteredQuizzes.length}{" "}
            {filteredQuizzes.length === 1 ? "quiz" : "quizzes"} found
          </p>
        </div>

        {/* Search + filters */}
        <div className="mt-6 flex items-center gap-2 md:gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search ${category.title} quizzes...`}
            className="border border-border rounded-button px-2 py-1 w-full focus:border focus:border-primary outline-0 transition-all duration-200 text-sm md:px-4 md:py-2 md:text-base"
          />

          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="border border-border rounded-button px-2 py-1 w-full focus:border focus:border-primary outline-0 transition-all duration-200 text-sm md:px-4 md:py-2 md:text-base"
          >
            <option value="all">All difficulties</option>

            <option value="beginner">Beginner</option>

            <option value="intermediate">Intermediate</option>

            <option value="advanced">Advanced</option>
          </select>

          {(searchQuery || difficulty !== "all") && (
            <button
              onClick={handleClearFilters}
              className="text-sm text-primary hover:underline text-nowrap cursor-pointer transition-all duration-200"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Quizzes */}
        <section className="mt-6 sm:mt-8">
          <h2 className="text-text font-semibold text-base sm:text-lg mb-3 sm:mb-4">
            Available quizzes
          </h2>

          {filteredQuizzes.length === 0 ? (
            <div className="border border-border rounded-card bg-surface p-8 text-center">
              <p className="text-sm text-text font-medium">No quizzes found</p>

              <p className="text-xs text-text-secondary mt-1">
                Try changing your search or filters.
              </p>

              {(searchQuery || difficulty !== "all") && (
                <button
                  onClick={handleClearFilters}
                  className="mt-4 text-sm text-primary hover:underline cursor-pointer"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {filteredQuizzes.map((quiz) => {
                // -----------------------------
                // Progress
                // -----------------------------

                const progress = quizProgress.find(
                  (item) => item.quizId === quiz.id,
                );

                const hasProgress = Boolean(progress);

                const answeredQuestions = progress
                  ? Object.keys(progress.answers || {}).length
                  : 0;

                // -----------------------------
                // Attempt history
                // -----------------------------

                const attemptSummary = quizAttemptSummaries[quiz.id];

                const hasCompletedAttempts = Boolean(attemptSummary);

                return (
                  <div
                    key={quiz.id}
                    onClick={() => setSelectedQuiz(quiz)}
                    className="h-full border border-border rounded-card bg-surface p-3.5 sm:p-4 cursor-pointer transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5 flex flex-col"
                  >
                    {/* Title + difficulty */}
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-text font-medium text-sm sm:text-base leading-snug">
                        {quiz.title}
                      </h3>

                      <span
                        className={`shrink-0 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-pill ${difficultyStyles[quiz.difficulty]}`}
                      >
                        {quiz.difficulty}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {quiz.description}
                    </p>

                    {/* In-progress state */}
                    {hasProgress && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="flex items-center gap-1 text-[11px] text-primary">
                            <RotateCcw size={12} />
                            Continue quiz
                          </span>

                          <span className="text-[11px] text-text-secondary">
                            {answeredQuestions} / {quiz.totalQuestions}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-background rounded-pill overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-pill"
                            style={{
                              width: `${Math.min(
                                (answeredQuestions / quiz.totalQuestions) * 100,
                                100,
                              )}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Completed attempts */}
                    {hasCompletedAttempts && (
                      <div className="flex items-center gap-2 mb-3 text-[11px] text-text-secondary">
                        <span>
                          ✓ {attemptSummary.attemptCount}{" "}
                          {attemptSummary.attemptCount === 1
                            ? "attempt"
                            : "attempts"}
                        </span>

                        <span>·</span>

                        <span>Best {attemptSummary.bestAccuracy}%</span>
                      </div>
                    )}

                    {/* Bottom meta */}
                    <div className="mt-auto flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 sm:gap-3 text-text-secondary text-[11px] sm:text-xs">
                        <span className="flex items-center gap-1">
                          <HelpCircle size={13} />
                          {quiz.totalQuestions} Qs
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock size={13} />
                          {quiz.estimatedTime} min
                        </span>
                      </div>

                      {/* Action */}
                      <button className="border border-primary text-primary font-medium hover:bg-primary hover:text-background transition-all duration-200 rounded-button px-3 py-1.5 text-xs sm:text-sm cursor-pointer shrink-0">
                        {hasProgress
                          ? "Continue"
                          : hasCompletedAttempts
                            ? "Start again"
                            : "Start quiz"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Quiz info modal */}
        {selectedQuiz && (
          <QuizInfoModal
            quiz={selectedQuiz}
            onClose={() => setSelectedQuiz(null)}
          />
        )}
      </Container>
    </div>
  );
};

export default CategoryPage;
