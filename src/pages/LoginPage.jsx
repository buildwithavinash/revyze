import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import Container from "../components/ui/Container";
import Header from "../components/common/Header";
import { useToast } from "../context/ToastContext";
import { signIn } from "../services/authService";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const from = location.state?.from || "/profile";

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setIsSubmitting(true);

      await signIn(email.trim(), password);

      showToast("Welcome back.", "success");
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Failed to sign in:", error);

      setError(
        error?.message || "Unable to sign in. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen py-10">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-text">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-text-secondary">
                Sign in to sync your Revyze activity across devices.
              </p>
            </div>

            <div className="mt-6 border border-border rounded-card bg-surface p-5 sm:p-6">
              <form onSubmit={handleSubmit}>
                {error && (
                  <div
                    role="alert"
                    className="mb-5 rounded-button border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300"
                  >
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    autoComplete="email"
                    placeholder="you@example.com"
                    disabled={isSubmitting}
                    className="mt-2 w-full px-3 py-2.5 rounded-button border border-border bg-background text-text placeholder:text-text-secondary/70 outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-text"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    disabled={isSubmitting}
                    className="mt-2 w-full px-3 py-2.5 rounded-button border border-border bg-background text-text placeholder:text-text-secondary/70 outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 w-full px-4 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm">
                <span className="text-text-secondary">
                  Don't have an account?{" "}
                </span>

                <Link
                  to="/signup"
                  className="text-primary font-medium hover:underline"
                >
                  Create one
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default LoginPage;