import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div className="about-container" id="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I'm <strong>Gisell Tavarez</strong> — a Full-Stack Software Engineer with a 
          seven-year background as a Paramedic. My experience in emergency medicine 
          trained me to solve complex problems quickly, communicate clearly, and remain 
          calm under pressure — skills that now shape how I build clean, reliable, and 
          user-focused applications.
        </p>

        <p className="about-text">
          I specialize in <strong>React, Node.js, Express, and MongoDB</strong>, and
          I love turning ideas into fully functional products. My engineering style 
          blends technical precision with empathy, clarity, and mission-driven execution.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🩺 Paramedic → Engineer</h3>
            <p>
              High-stakes decision-making, composure, and rapid diagnostics — now
              applied to debugging, architecture, and system design.
            </p>
          </div>

          <div className="about-card">
            <h3>💻 Technical Focus</h3>
            <p>
              JavaScript, React, Node, Express, MongoDB, REST APIs, Git, 
              authentication, cloud deployments.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 What I Love Building</h3>
            <p>
              Real-world apps, dashboards, APIs, full-stack systems, and anything
              that improves people’s lives through technology.
            </p>
          </div>

          <div className="about-card">
            <h3>🤝 Collaboration</h3>
            <p>
              I work great in cross-functional teams — communicating clearly,
              documenting well, and helping projects ship on time.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
