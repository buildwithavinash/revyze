import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "History", href: "/history" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="py-4 relative z-50">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <h2 className="text-2xl font-bold text-primary">Revyze</h2>
          </Link>

          {/* desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 items-center text-sm text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-text transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button className="px-4 py-1.5 rounded-button border border-border text-sm text-text hover:bg-surface-hover transition-all duration-200 cursor-pointer">
              Login
            </button>
          </div>

          {/* mobile hamburger trigger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden p-2 -mr-2 rounded-button hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
          >
            <Menu className="w-6 h-6 text-text" strokeWidth={1.75} />
          </button>
        </div>
      </Container>

      {/* mobile menu overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* mobile menu panel — slides in from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-background border-l border-border z-50 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-semibold text-text">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 -mr-2 rounded-button hover:bg-surface-hover transition-colors duration-200 cursor-pointer"
          >
            <X className="w-5 h-5 text-text" strokeWidth={1.75} />
          </button>
        </div>

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
        </ul>

        <div className="px-3 mt-2">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="w-full px-4 py-2.5 rounded-button border border-border text-sm text-text hover:bg-surface-hover transition-all duration-200 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;