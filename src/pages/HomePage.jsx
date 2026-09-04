import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Clock3 } from "lucide-react";

import CategoryCard from "../components/common/CategoryCard";
import Header from "../components/common/Header";
import HeroSection from "../components/common/HeroSection";
import Container from "../components/ui/Container";
import LoadingState from "../components/common/LoadingState";
import ErrorState from "../components/common/ErrorState";

import categories from "../data/categories";
import { getQuizzesByCategory, getQuizById } from "../services/quizService";
import { getAllQuizProgress } from "../services/storageService";

const TEASER_COUNT = 8;
const MAX_CONTINUE_QUIZZES = 3;

const HomePage = () => {
  const [progress, setProgress] = useState([]);
  const [isLoadingProgress, setIsLoadingProgress] = useState(true);
  const [progressError, setProgressError] = useState(null);

  const teaserCategories = [...categories]
    .sort(
      (a, b) =>
        getQuizzesByCategory(b.id).length -
        getQuizzesByCategory(a.id).length,
    )
    .slice(0, TEASER_COUNT);

  const loadProgress = async () => {
    try {
      setIsLoadingProgress(true);
      setProgressError(null);

      const savedProgress = await getAllQuizProgress();

      const unfinishedProgress = savedProgress
        .filter((item) => {
          const quiz = getQuizById(item.quizId);

          if (!quiz) return false;

          const questionCount = quiz.totalQuestions ?? 0;

          return (
            questionCount > 0 &&
            item.currentQuestionIndex < questionCount
          );
        })
        .sort(
          (a, b) =>
            (b.updatedAt ?? 0) - (a.updatedAt ?? 0),
        )
        .slice(0, MAX_CONTINUE_QUIZZES);

      setProgress(unfinishedProgress);
    } catch (error) {
      console.error("Failed to load quiz progress:", error);
      setProgressError("Unable to load your unfinished quizzes.");
    } finally {
      setIsLoadingProgress(false);
    }
  };

  useEffect(() => {
    loadProgress();
  }, []);

  const getProgressPercentage = (item) => {
    const quiz = getQuizById(item.quizId);

    if (!quiz?.totalQuestions) return 0;

    const completedQuestions = Math.min(
      item.currentQuestionIndex ?? 0,
      quiz.totalQuestions,
    );

    return Math.round(
      (completedQuestions / quiz.totalQuestions) * 100,
    );
  };

  const getQuestionProgress = (item) => {
    const quiz = getQuizById(item.quizId);

    if (!quiz) return "";

    const currentQuestion = Math.min(
      (item.currentQuestionIndex ?? 0) + 1,
      quiz.totalQuestions,
    );

    return `${currentQuestion} / ${quiz.totalQuestions} questions`;
  };

  const formatUpdatedDate = (timestamp) => {
    if (!timestamp) return "";

    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
    }).format(new Date(timestamp));
  };

  const hasContinueQuizzes = progress.length > 0;

  return (
    <div className="pb-16 md:pb-24">
      <Header />

      <HeroSection />

      <hr className="text-primary opacity-5" />

      <Container>
        {/* Continue learning */}
        {isLoadingProgress ? (
          <section className="mt-8">
            <LoadingState message="Checking your unfinished quizzes..." />
          </section>
        ) : progressError ? (
          <section className="mt-8">
            <ErrorState
              title="Unable to load your progress"
              message={progressError}
              onRetry={loadProgress}
            />
          </section>
        ) : hasContinueQuizzes ? (
          <section className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-text">
                Continue learning
              </h3>
            </div>

            <div className="flex gap-4 overflow-y-scroll scrollbar-none">
              {progress.map((item) => {
                const quiz = getQuizById(item.quizId);

                if (!quiz) return null;

                const percentage = getProgressPercentage(item);

                return (
                  <Link
                    key={item.quizId}
                    to={`/quiz/${quiz.slug}`}
                    className="group border border-border rounded-card bg-surface p-5 hover:bg-surface-hover transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h4 className="font-semibold text-text truncate">
                          {quiz.title}
                        </h4>

                        <p className="mt-1 text-sm text-text-secondary">
                          {getQuestionProgress(item)}
                        </p>
                      </div>

                      <ArrowRight
                        className="w-5 h-5 text-text-secondary shrink-0 group-hover:text-primary group-hover:translate-x-0.5 transition-all"
                        strokeWidth={1.75}
                      />
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-text-secondary">
                          {percentage}% complete
                        </span>

                        {item.updatedAt && (
                          <span className="flex items-center gap-1 text-text-secondary">
                            <Clock3 className="w-3.5 h-3.5" />

                            {formatUpdatedDate(item.updatedAt)}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 h-2 w-full rounded-full bg-surface-hover overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-4 text-sm font-medium text-primary">
                      Continue quiz →
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        {/* Categories */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text">
              Categories
            </h3>

            <Link
              to="/categories"
              className="px-4 py-2 rounded-button bg-primary text-background text-sm font-medium hover:bg-primary-hover transition-all duration-200"
            >
              Browse all →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teaserCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HomePage;