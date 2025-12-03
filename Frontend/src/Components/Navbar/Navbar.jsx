import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* LOGO / NAME */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Gisell Tavarez
        </Link>

        {/* HAMBURGER ICON (mobile) */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </button>

        {/* NAV LINKS */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-item" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/huskieshub" className="nav-item" onClick={closeMenu}>
            HuskiesHub
          </NavLink>

          <NavLink
            to="/smart-budget-planner"
            className="nav-item"
            onClick={closeMenu}
          >
            Smart Budget Planner
          </NavLink>

          <NavLink to="/resume" className="nav-item" onClick={closeMenu}>
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
