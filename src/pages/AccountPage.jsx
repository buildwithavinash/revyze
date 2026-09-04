import { useState } from "react";
import { Link, useNavigate } from "react-router";

import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { signOut } from "../services/authService";

import Container from "../components/ui/Container";
import Header from "../components/common/Header";
import ConfirmModal from "../components/common/ConfirmModal";

const AccountPage = () => {
  const { user, isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [showSignOutModal, setShowSignOutModal] =
    useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      showToast("You've been signed out.", "success");
      navigate("/");
    } catch (error) {
      console.error("Failed to sign out:", error);
      showToast("Unable to sign out. Please try again.", "error");
    } finally {
      setShowSignOutModal(false);
    }
  };

  return (
    <>
      <Header />

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
                      are synced across all your devices.
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setShowSignOutModal(true)
                    }
                    className="mt-6 w-full px-4 py-2.5 rounded-button border border-border text-sm font-medium text-text hover:bg-surface-hover transition-colors cursor-pointer"
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
                      className="flex-1 text-center px-4 py-2.5 rounded-button bg-primary text-white text-sm font-medium hover:opacity-90"
                    >
                      Sign in
                    </Link>

                    <Link
                      to="/signup"
                      className="flex-1 text-center px-4 py-2.5 rounded-button border border-border text-text text-sm font-medium hover:bg-surface-hover"
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

      <ConfirmModal
        isOpen={showSignOutModal}
        title="Sign out of Revyze?"
        message="Your synced quiz history and progress will remain safely stored in your account. You'll still be able to sign in again anytime."
        confirmText="Sign out"
        cancelText="Cancel"
        confirmVariant="danger"
        onConfirm={handleSignOut}
        onCancel={() => setShowSignOutModal(false)}
      />
    </>
  );
};

export default AccountPage;