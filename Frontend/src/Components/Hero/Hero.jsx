import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
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
          Express, and MongoDB.  
          My background as a paramedic gives me a unique problem-solving
          mindset—calm, precise, and always mission-focused.
        </p>

        <div className="hero-buttons">
          <Link to="/resume-download" className="hero-btn primary">
            Download Resume
          </Link>
          <Link to="/projects" className="hero-btn secondary">
            View Projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
