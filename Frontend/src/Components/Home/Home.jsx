// src/Pages/Home/Home.jsx
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motion";

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* HERO SECTION */}
      <section className="home-container">
        <motion.div 
          className="home-content"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="home-title">
            Hi, I’m <span>Gisell Tavarez</span>
          </h1>

          <p className="home-subtitle">
            Full-Stack Developer • Paramedic • Problem Solver
          </p>

          <div className="home-buttons">
            <Link to="/resume" className="home-btn primary">View Résumé</Link>
            <Link to="/projects" className="home-btn secondary">Projects</Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <motion.div 
          className="about-content"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I’m a Full-Stack Developer with a background as a Paramedic. My experience 
            in emergency medicine refined my ability to solve problems under pressure, 
            adapt quickly, and build solutions that genuinely help people.  
            I bring that same mindset into software development—creating reliable, 
            intuitive, meaningful applications.
          </p>
        </motion.div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="tech-section">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Vite</span>
          <span>JWT Auth</span>
          <span>Google APIs</span>
          <span>Framer Motion</span>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="projects-section">
        <h2>Featured Projects</h2>

        <div className="project-cards">
          <Link to="/huskieshub" className="project-card">
            <h3>HuskiesHub</h3>
            <p>A full-stack platform for the Empire State Huskies softball organization.</p>
          </Link>

          <Link to="/smartbudgetplanner" className="project-card">
            <h3>Smart Budget Planner</h3>
            <p>A location-aware financial planner with analytics and spending insights.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
