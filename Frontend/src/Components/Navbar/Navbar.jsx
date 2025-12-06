import "./Navbar.css";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "resume-download", label: "Resume" },
];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <div className="navbar__logo">GT</div>

        <ul className="navbar__menu">
          {navItems.map((item) => (
            <li key={item.id} className="navbar__item">
              <button
                className="navbar__link"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
          <Link to="/resume-download" className="active-link">
            Resume
          </Link>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </ul>
      </nav>
    </header>
  );
}
