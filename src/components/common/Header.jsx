import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  CircleUserRound,
  Menu,
  MoonStar,
  SunMedium,
  X,
} from "lucide-react";

import Container from "../ui/Container";
import { useAuth } from "../../context/AuthContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "History", href: "/history" },
];

const THEME_STORAGE_KEY = "revyze-theme";

const getPreferredTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const Header = () => {
  const { isAuthenticated } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => getPreferredTheme());

  // Signed-in users go straight to their profile/stats. Guests go to
  // /account, which explains guest mode and offers sign in/sign up —
  // more context than dropping them straight into a login form.
  const accountHref = isAuthenticated ? "/profile" : "/account";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", theme === "dark");

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  };

  return (
    <header className="py-2 md:py-4 relative z-50 border-b border-b-border/50 shadow-xs">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <h2 className="text-2xl font-bold text-primary">
              Revyze
            </h2>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 items-center text-sm text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Account */}
            <Link
              to={accountHref}
              aria-label={
                isAuthenticated
                  ? "Open your profile"
                  : "Manage account"
              }
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border text-text hover:bg-surface-hover transition-colors duration-200"
            >
              <CircleUserRound
                className="w-5 h-5"
                strokeWidth={1.75}
              />
            </Link>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={theme === "dark"}
              className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-button border border-border text-sm text-text hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
            >
              {theme === "dark" ? (
                <>
                  <SunMedium
                    className="w-4 h-4"
                    strokeWidth={2}
                  />
                  Light
                </>
              ) : (
                <>
                  <MoonStar
                    className="w-4 h-4"
                    strokeWidth={2}
                  />
                  Dark
                </>
              )}
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Account */}
            <Link
              to={accountHref}
              onClick={() => setIsMenuOpen(false)}
              aria-label={
                isAuthenticated
                  ? "Open your profile"
                  : "Manage account"
              }
              className="inline-flex items-center justify-center p-2 rounded-button border border-border hover:bg-surface-hover transition-colors duration-200"
            >
              <CircleUserRound
                className="w-5 h-5 text-text"
                strokeWidth={1.75}
              />
            </Link>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={theme === "dark"}
              className="inline-flex items-center justify-center p-2 rounded-button border border-border hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
            >
              {theme === "dark" ? (
                <SunMedium
                  className="w-5 h-5 text-text"
                  strokeWidth={2}
                />
              ) : (
                <MoonStar
                  className="w-5 h-5 text-text"
                  strokeWidth={2}
                />
              )}
            </button>

            {/* Menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="p-2 -mr-2 rounded-button hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
            >
              <Menu
                className="w-6 h-6 text-text"
                strokeWidth={1.75}
              />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-background border-l border-border z-50 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-semibold text-text">
            Menu
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={theme === "dark"}
              className="inline-flex items-center justify-center p-2 rounded-button border border-border hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
            >
              {theme === "dark" ? (
                <SunMedium
                  className="w-4 h-4 text-text"
                  strokeWidth={2}
                />
              ) : (
                <MoonStar
                  className="w-4 h-4 text-text"
                  strokeWidth={2}
                />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2 rounded-button hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
            >
              <X
                className="w-5 h-5 text-text"
                strokeWidth={1.75}
              />
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <ul className="flex flex-col p-3">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 rounded-button text-text hover:bg-surface-hover transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to={accountHref}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-3 rounded-button text-text hover:bg-surface-hover transition-colors duration-200"
            >
              <CircleUserRound
                className="w-5 h-5"
                strokeWidth={1.75}
              />

              {isAuthenticated ? "Profile" : "Account"}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;