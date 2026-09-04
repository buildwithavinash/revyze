import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { signOut } from "../services/authService";
import Container from "../components/ui/Container";

const AccountPage = () => {
  const { user, isAuthenticated } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <main className="min-h-screen py-8 sm:py-10">
      <Container>
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-semibold text-text">
            Account
          </h1>

          <div className="mt-6 border border-border rounded-card bg-surface p-5">
            {isAuthenticated ? (
              <>
                <div>
                  <p className="text-sm text-text-secondary">
                    Signed in as
                  </p>

                  <p className="mt-1 text-text font-medium break-all">
                    {user.email}
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-button bg-surface-hover">
                  <p className="text-sm font-medium text-text">
                    Sync enabled
                  </p>

                  <p className="mt-1 text-sm text-text-secondary">
                    Your quiz history and unfinished quizzes
                    are synced across devices.
                  </p>
                </div>

                <button
                  onClick={handleSignOut}
                  className="mt-6 w-full px-4 py-2.5 rounded-button border border-border text-sm font-medium text-text hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <p className="text-text">
                  You're using Revyze as a guest.
                </p>

                <p className="mt-2 text-sm text-text-secondary">
                  Your quiz data is currently stored only on
                  this device.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Link
                    to="/login"
                    className="flex-1 text-center px-4 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Sign in
                  </Link>

                  <Link
                    to="/signup"
                    className="flex-1 text-center px-4 py-2.5 rounded-button border border-border text-text text-sm font-medium hover:bg-surface-hover transition-colors"
                  >
                    Create account
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default AccountPage;