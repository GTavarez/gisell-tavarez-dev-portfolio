import React from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToProjects = () => {
    const scroll = () => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    };

    // If not on home page → go home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 300);
    } else {
      scroll();
    }
  };

  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          Hi, I’m <span className="accent">Gisell Tavarez</span>
        </h1>

        <h2 className="hero-subtitle">Paramedic ➜ Software Engineer</h2>

        <p className="hero-text">
          I build clean, modern, user-focused applications with React, Node,
          Express, and MongoDB. My background as a paramedic gives me a unique
          problem-solving mindset—calm, precise, and always mission-focused.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-btn primary"
            onClick={() => navigate("/resume-download")}
          >
            Download Resume
          </button>

          <button className="hero-btn secondary" onClick={goToProjects}>
            View Projects
          </button>
        </div>
      </motion.div>
    </div>
  );
}
