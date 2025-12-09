// src/components/Navbar/Navbar.jsx
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

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

  const scrollToSection = (id) => {
    const scrollAction = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    // If not on homepage → navigate THEN scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollAction, 250);
    } else {
      scrollAction();
    }
  };

  return (
    <header className="navbar">
      <nav className="navbar__container">
        {/* Logo scrolls to top */}
        <div
          className="navbar__logo"
          onClick={() => scrollToSection("hero")}
          style={{ cursor: "pointer" }}
        >
          GT
        </div>

        <ul className="navbar__menu">
          {/* MAIN NAV ITEMS → Always Scroll */}
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

          {/* Resume goes to its own page */}
          <Link to="/resume-download" className="navbar__link">
            Resume
          </Link>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </ul>
      </nav>
    </header>
  );
}
