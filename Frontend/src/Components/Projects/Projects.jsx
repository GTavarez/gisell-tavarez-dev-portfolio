import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  const projectData = [
    {
      title: "HuskiesHub (Full-Stack App)",
      description:
        "A real-world sports management platform with schedules, player profiles, dynamic APIs, Google Calendar integration, and full backend deployment.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Cloud Run"],
      github: "https://github.com/GTavarez/homeland-project",
      caseStudy: "/huskieshub",
    },
    {
      title: "Smart Budget Planner",
      description:
        "A finance dashboard that detects user location, converts currency, analyzes spending habits, and generates category-based insights.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      caseStudy: "/smart-budget-planner",
    },
    {
      title: "WTWR — Frontend",
      description:
        "A weather-based clothing recommendation app with user auth, profile management, modals, and dynamic UI.",
      stack: ["React", "API Integration", "CSS Modules"],
      github: "https://github.com/GTavarez/se_project_react",
    },
    {
      title: "WTWR — Backend",
      description:
        "Fully structured Express backend with JWT auth, controllers, middleware, and RESTful APIs.",
      stack: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/GTavarez/se_project_express",
    },
    {
      title: "Decluttr — Full-Stack App",
      description:
        "Collaborative MERN application for category-based item management, fully styled UI, and optimized reusable components.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/RyBCreates/decluttr",
    },
    {
      title: "Decluttr — Backend",
      description:
        "Robust Express backend with CRUD routes, controllers, validation, and authentication.",
      stack: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/RyBCreates/decluttr-backend",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3>{project.title}</h3>
            <p className="proj-desc">{project.description}</p>

            <div className="stack-tags">
              {project.stack.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="proj-buttons">
              {project.caseStudy && (
                <Link to={project.caseStudy} className="btn case-btn">
                  View Case Study
                </Link>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn git-btn"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
