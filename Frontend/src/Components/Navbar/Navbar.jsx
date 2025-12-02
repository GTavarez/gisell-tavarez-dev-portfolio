import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <div className="navbar__logo">
          <img src="/logo.svg" alt="GT Logo" />
        </div>

        {/* Hamburger */}
        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${open ? "navbar__menu--open" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="navbar__item">
              <button
                className="navbar__link"
                onClick={() => scrollTo(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
