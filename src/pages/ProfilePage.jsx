import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Award,
  BarChart3,
  CalendarDays,
  ChevronRight,
  CircleUserRound,
  Cloud,
  History,
  Trophy,
} from "lucide-react";

import Container from "../components/ui/Container";
import Header from "../components/common/Header";
import { useAuth } from "../context/AuthContext";
import { getAllQuizAttempts } from "../services/storageService";

const ProfilePage = () => {
  const { user, isAuthenticated, isSyncing } = useAuth();

  const [attempts, setAttempts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const data = await getAllQuizAttempts();
        setAttempts(data);
      } catch (error) {
        console.error("Failed to load profile data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfileData();
  }, []);

  const totalAttempts = attempts.length;

  const bestAccuracy =
    attempts.length > 0
      ? Math.max(
          ...attempts.map((attempt) => attempt.results?.accuracy ?? 0),
        )
      : 0;

  const averageAccuracy =
    attempts.length > 0
      ? Math.round(
          attempts.reduce(
            (total, attempt) =>
              total + (attempt.results?.accuracy ?? 0),
            0,
          ) / attempts.length,
        )
      : 0;

  const uniqueQuizzes = new Set(
    attempts.map((attempt) => attempt.quizId),
  ).size;

  const recentAttempts = attempts.slice(0, 5);

  const formatDate = (timestamp) => {
    if (!timestamp) return "Unknown date";

    return new Intl.DateTimeFormat("en", {
      dateStyle: "medium",
    }).format(new Date(timestamp));
  };

  if (!isAuthenticated) {
    return (
      <>
        <Header />

        <main className="min-h-screen py-10">
          <Container>
            <div className="max-w-xl mx-auto text-center">
              <CircleUserRound className="w-12 h-12 mx-auto text-text-secondary" />

              <h1 className="mt-4 text-2xl font-semibold text-text">
                Your profile
              </h1>

              <p className="mt-2 text-text-secondary">
                Sign in to view your profile and synced quiz
                activity.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  to="/login"
                  className="flex-1 px-4 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Sign in
                </Link>

                <Link
                  to="/signup"
                  className="flex-1 px-4 py-2.5 rounded-button border border-border text-text text-sm font-medium hover:bg-surface-hover transition-colors"
                >
                  Create account
                </Link>
              </div>
            </div>
          </Container>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen py-8 sm:py-10">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Profile header */}
            <section className="border border-border rounded-card bg-surface p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <CircleUserRound className="w-8 h-8 text-primary" />
                </div>

                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl font-semibold text-text">
                    Your profile
                  </h1>

                  <p className="mt-1 text-sm text-text-secondary break-all">
                    {user?.email}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm">
                <Cloud className="w-4 h-4 text-primary" />

                <span className="text-text-secondary">
                  {isSyncing
                    ? "Syncing your data..."
                    : "Your data is synced"}
                </span>
              </div>
            </section>

            {/* Statistics */}
            <section className="mt-6">
              <h2 className="text-lg font-semibold text-text">
                Your activity
              </h2>

              {isLoading ? (
                <div className="mt-4 text-sm text-text-secondary">
                  Loading your activity...
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  <div className="border border-border rounded-card bg-surface p-4">
                    <History className="w-5 h-5 text-primary" />

                    <p className="mt-3 text-2xl font-semibold text-text">
                      {totalAttempts}
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      Attempts
                    </p>
                  </div>

                  <div className="border border-border rounded-card bg-surface p-4">
                    <Trophy className="w-5 h-5 text-primary" />

                    <p className="mt-3 text-2xl font-semibold text-text">
                      {bestAccuracy}%
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      Best accuracy
                    </p>
                  </div>

                  <div className="border border-border rounded-card bg-surface p-4">
                    <BarChart3 className="w-5 h-5 text-primary" />

                    <p className="mt-3 text-2xl font-semibold text-text">
                      {averageAccuracy}%
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      Average accuracy
                    </p>
                  </div>

                  <div className="border border-border rounded-card bg-surface p-4">
                    <Award className="w-5 h-5 text-primary" />

                    <p className="mt-3 text-2xl font-semibold text-text">
                      {uniqueQuizzes}
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      Quizzes practiced
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Recent activity */}
            <section className="mt-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-text">
                  Recent activity
                </h2>

                {attempts.length > 0 && (
                  <Link
                    to="/history"
                    className="text-sm text-primary hover:underline"
                  >
                    View all
                  </Link>
                )}
              </div>

              <div className="mt-4 border border-border rounded-card bg-surface overflow-hidden">
                {recentAttempts.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-text">
                      No quiz attempts yet.
                    </p>

                    <p className="mt-1 text-sm text-text-secondary">
                      Complete your first quiz to see your activity
                      here.
                    </p>

                    <Link
                      to="/categories"
                      className="inline-block mt-4 px-4 py-2 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                      Explore quizzes
                    </Link>
                  </div>
                ) : (
                  recentAttempts.map((attempt) => (
                    <Link
                      key={attempt.id}
                      to={`/history/${attempt.id}`}
                      className="flex items-center justify-between gap-4 p-4 border-b border-border last:border-b-0 hover:bg-surface-hover transition-colors"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-text truncate">
                          {attempt.quizId}
                        </p>

                        <div className="flex items-center gap-2 mt-1 text-xs text-text-secondary">
                          <CalendarDays className="w-3.5 h-3.5" />

                          <span>
                            {formatDate(attempt.completedAt)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-sm font-semibold text-text">
                          {attempt.results?.accuracy ?? 0}%
                        </span>

                        <ChevronRight className="w-4 h-4 text-text-secondary" />
                      </div>
                    </Link>
                  ))
                )}
              </div>
            </section>

            {/* Account management */}
            <section className="mt-8">
              <h2 className="text-lg font-semibold text-text">
                Account
              </h2>

              <div className="mt-4 border border-border rounded-card bg-surface overflow-hidden">
                <Link
                  to="/account"
                  className="flex items-center justify-between p-4 hover:bg-surface-hover transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-text">
                      Account settings
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      Manage your account and sign out.
                    </p>
                  </div>

                  <ChevronRight className="w-4 h-4 text-text-secondary" />
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </>
  );
};

export default ProfilePage;