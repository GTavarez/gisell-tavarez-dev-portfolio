import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress, SiHtml5, SiCss3 } from "react-icons/si";

import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-grid">

        {/* FRONTEND */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Frontend</h3>
          <div className="icons">
            <SiJavascript className="icon js" />
            <FaReact className="icon react" />
            <SiHtml5 className="icon html" />
            <SiCss3 className="icon css" />
          </div>
          <p>
            Modern UI development with React, Hooks, component architecture, and responsive design.
          </p>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Backend</h3>
          <div className="icons">
            <FaNodeJs className="icon node" />
            <SiExpress className="icon express" />
            <SiMongodb className="icon mongo" />
          </div>
          <p>
            REST APIs, controllers, routing, authentication, and database modeling.
          </p>
        </motion.div>

        {/* TOOLS */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Tools</h3>
          <div className="icons">
            <FaGitAlt className="icon git" />
          </div>
          <p>
            Git, GitHub, deployments (Cloud Run), debugging workflows, and version control strategies.
          </p>
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div
          className="skill-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Soft Skills</h3>
          <p className="softskills-list">
            • Clear Communication  
            • Problem Solving  
            • Composure Under Pressure  
            • Collaboration  
            • User Empathy  
            • Rapid Learning  
          </p>
        </motion.div>
      </div>
    </section>
  );
}
