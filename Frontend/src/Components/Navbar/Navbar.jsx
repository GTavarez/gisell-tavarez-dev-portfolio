import "./Navbar.css";
import { Link } from "react-router-dom";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
          <Link to="/resume-download">Resume</Link>
        </ul>
      </nav>
    </header>
  );
}
