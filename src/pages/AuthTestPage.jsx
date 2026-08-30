import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { signIn, signUp, signOut } from "../services/authService";
import { getCloudQuizAttempts } from "../services/cloudService";

const AuthTestPage = () => {
  const { user, isLoading, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("signup");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setMessage("");
      setError("");

      if (mode === "signup") {
        const data = await signUp(email, password);

        console.log("Signup response:", data);

        setMessage(
          "Signup successful. Check your email if confirmation is required.",
        );
      } else {
        const data = await signIn(email, password);

        console.log("Login response:", data);

        setMessage("Login successful.");
      }
    } catch (error) {
      console.error(error);
      setError(error.message || "Authentication failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      setError("");
      setMessage("");

      await signOut();

      setMessage("Logged out successfully.");
    } catch (error) {
      console.error(error);
      setError(error.message || "Logout failed.");
    }
  };

  const handleCloudTest = async () => {
  try {
    const attempts = await getCloudQuizAttempts();

    console.log("☁️ Cloud attempts:", attempts);
  } catch (error) {
    console.error("❌ Failed to get cloud attempts:", error);
  }
};

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-text">Auth Test</h1>

        <p className="text-sm text-text-secondary mt-1">
          Temporary authentication testing page.
        </p>

        {isAuthenticated ? (
          <div className="border border-border rounded-card bg-surface p-5 mt-6">
            <p className="text-sm text-text-secondary">Logged in as</p>

            <p className="font-medium text-text mt-1">{user.email}</p>

            <p className="text-xs text-text-secondary mt-3 break-all">
              User ID: {user.id}
            </p>

            <button
              onClick={handleLogout}
              className="mt-5 bg-primary text-background px-4 py-2 rounded-button text-sm font-medium"
            >
              Logout
            </button>

            <button
  onClick={handleCloudTest}
  className="mt-4 border border-border px-4 py-2 rounded-button text-sm"
>
  Test Cloud Attempts
</button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="border border-border rounded-card bg-surface p-5 mt-6"
          >
            <div className="flex gap-2 mb-5">
              <button
                type="button"
                onClick={() => {
                  setMode("signup");
                  setMessage("");
                  setError("");
                }}
                className={`flex-1 px-3 py-2 rounded-button text-sm ${
                  mode === "signup"
                    ? "bg-primary text-background"
                    : "border border-border text-text"
                }`}
              >
                Sign up
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setMessage("");
                  setError("");
                }}
                className={`flex-1 px-3 py-2 rounded-button text-sm ${
                  mode === "login"
                    ? "bg-primary text-background"
                    : "border border-border text-text"
                }`}
              >
                Login
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border border-border rounded-button px-3 py-2 text-sm outline-none focus:border-primary"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                minLength={6}
                className="border border-border rounded-button px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>

            {message && <p className="text-sm text-success mt-4">{message}</p>}

            {error && <p className="text-sm text-danger mt-4">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-5 bg-primary text-background px-4 py-2 rounded-button text-sm font-medium disabled:opacity-50"
            >
              {isSubmitting
                ? "Please wait..."
                : mode === "signup"
                  ? "Create account"
                  : "Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthTestPage;
