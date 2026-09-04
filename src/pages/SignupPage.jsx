import { useState } from "react";
import { Link, useNavigate } from "react-router";

import Container from "../components/ui/Container";
import Header from "../components/common/Header";
import { signUp } from "../services/authService";

const SignupPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);

      const data = await signUp(email.trim(), password);

      /*
       * Supabase can either:
       * 1. Create an active session immediately, or
       * 2. Require email confirmation first.
       *
       * We handle both cases.
       */
      if (data.session) {
        navigate("/profile", { replace: true });
      } else {
        setIsSignupComplete(true);
      }
    } catch (error) {
      console.error("Failed to create account:", error);

      setError(
        error?.message ||
          "Unable to create your account. Please try again.",
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
            {!isSignupComplete ? (
              <>
                <div className="text-center">
                  <h1 className="text-2xl font-semibold text-text">
                    Create your account
                  </h1>

                  <p className="mt-2 text-sm text-text-secondary">
                    Save your quiz progress and sync your activity
                    across devices.
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
                        autoComplete="new-password"
                        placeholder="Create a password"
                        disabled={isSubmitting}
                        className="mt-2 w-full px-3 py-2.5 rounded-button border border-border bg-background text-text placeholder:text-text-secondary/70 outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
                      />
                    </div>

                    <div className="mt-5">
                      <label
                        htmlFor="confirmPassword"
                        className="block text-sm font-medium text-text"
                      >
                        Confirm password
                      </label>

                      <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(event) =>
                          setConfirmPassword(event.target.value)
                        }
                        autoComplete="new-password"
                        placeholder="Enter your password again"
                        disabled={isSubmitting}
                        className="mt-2 w-full px-3 py-2.5 rounded-button border border-border bg-background text-text placeholder:text-text-secondary/70 outline-none focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 w-full px-4 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting
                        ? "Creating account..."
                        : "Create account"}
                    </button>
                  </form>

                  <div className="mt-6 text-center text-sm">
                    <span className="text-text-secondary">
                      Already have an account?{" "}
                    </span>

                    <Link
                      to="/login"
                      className="text-primary font-medium hover:underline"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center border border-border rounded-card bg-surface p-6">
                <h1 className="text-2xl font-semibold text-text">
                  Check your email
                </h1>

                <p className="mt-3 text-sm text-text-secondary">
                  We've sent a confirmation link to:
                </p>

                <p className="mt-2 font-medium text-text break-all">
                  {email}
                </p>

                <p className="mt-4 text-sm text-text-secondary">
                  Confirm your email address, then sign in to
                  continue using Revyze.
                </p>

                <Link
                  to="/login"
                  className="inline-block mt-6 px-4 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Go to sign in
                </Link>
              </div>
            )}
          </div>
        </Container>
      </main>
    </>
  );
};

export default SignupPage;