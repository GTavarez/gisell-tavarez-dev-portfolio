// src/components/Navbar/Navbar.jsx
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useContext, useState } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const action = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(action, 250);
    } else {
      action();
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => scrollToSection("hero")}>
          GT
        </div>

        {/* DESKTOP MENU */}
        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar__item">
              <button
                className="navbar__link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}

          <Link to="/resume-download" className="navbar__link">
            Resume
          </Link>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </ul>

        {/* HAMBURGER (shown only on tablet/mobile via CSS) */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU BELOW NAVBAR */}
      <div className={`mobile-menu-wrapper ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="mobile-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}

          <li>
            <Link
              to="/resume-download"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
          </li>

          <li>
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="mobile-link"
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
