import "./SmartBudgetPlanner.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motion";
import { useState } from "react";
import Lightbox from "../../Components/Lightbox/Lightbox";
import dashboard from "../../assets/sbp1.jpg";
import chart from "../../assets/sbp4.jpg";
import monthly from "../../assets/sbp3.jpg";
import display from "../../assets/sbp2.jpg";

export default function SmartBudgetPlanner() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const images = [
    { src: dashboard, alt: "Smart Budget Planner Dashboard" },
    { src: chart, alt: "Category Breakdown Chart" },
    { src: monthly, alt: "Monthly Spending Overview" },
    { src: display, alt: "Dashboard Display" },
  ];

  return (
    <section data-aos="fade-up" className="case case--sbp">
      {/* HEADER */}
      <div className="case__header">
        <motion.h1
          className="case__title"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          Smart Budget Planner
        </motion.h1>
        <p className="case__subtitle">
          A data-informed budgeting platform with dashboards, benchmark
          comparisons, and location-aware insights.
        </p>
      </div>

      {/* OVERVIEW */}
      <div className="case__section">
        <h2 className="case__section-title">Overview</h2>
        <p className="case__text">
          Smart Budget Planner helps users understand and optimize their
          spending using interactive dashboards, category breakdowns, and
          country-specific benchmark data. The interface is intentionally clean
          and intuitive, focusing on visualization and actionable insight.
        </p>
      </div>

      {/* FEATURES */}
      <div className="case__section">
        <h2 className="case__section-title">Key Features</h2>

        <ul className="case__list">
          <li className="case__list-item">
            📊 <strong>Interactive dashboards</strong> for visual spending
            insights
          </li>
          <li className="case__list-item">
            🌍 <strong>GeoIP-based country detection</strong> automatically
            adjusts benchmarks based on region
          </li>
          <li className="case__list-item">
            📈 <strong>Category and monthly breakdown charts</strong> using
            Chart.js
          </li>
          <li className="case__list-item">
            🧾 <strong>Transaction logging</strong> with notes, categories, and
            filters
          </li>
          <li className="case__list-item">
            🧠 <strong>Benchmark comparison engine</strong> using a configurable
            JSON dataset
          </li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="case__section">
        <h2 className="case__section-title">Tech Stack</h2>

        <div className="case__tags">
          <span className="case__tag">React</span>
          <span className="case__tag">Vite</span>
          <span className="case__tag">Express</span>
          <span className="case__tag">MongoDB</span>
          <span className="case__tag">Chart.js</span>
          <span className="case__tag">GeoIP API</span>
          <span className="case__tag">REST APIs</span>
        </div>
      </div>

      {/* CHALLENGES */}
      <div className="case__section">
        <h2 className="case__section-title">Challenges & Solutions</h2>

        <div className="case__grid">
          <div className="case__card">
            <h3 className="case__card-title">
              Challenge: Clear Financial Visualization
            </h3>
            <p className="case__card-text">
              Budget apps can easily overwhelm users with too much data.
            </p>
            <p className="case__card-text">
              <strong>Solution:</strong> I designed a card-based layout with
              prioritized sections, simplified color coding, and minimalist
              charts to guide the user’s attention.
            </p>
          </div>

          <div className="case__card">
            <h3 className="case__card-title">
              Challenge: International Benchmarking
            </h3>
            <p className="case__card-text">
              Different countries follow different spending patterns, so a
              global benchmark is not accurate.
            </p>
            <p className="case__card-text">
              <strong>Solution:</strong> The app performs GeoIP lookup to detect
              the user’s location, loads a matching benchmark JSON file, and
              adjusts its comparisons accordingly.
            </p>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="case__section">
        <h2 className="case__section-title">Gallery</h2>

        <div className="case__gallery">
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="case__img case__img--clickable"
              onClick={() => setLightboxSrc(img.src)}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        src={lightboxSrc}
        alt="Smart Budget Planner Expanded View"
        onClose={() => setLightboxSrc(null)}
      />

      {/* LINKS */}
      <div className="case__section case__section--center">
        <a
          href="https://github.com/GTavarez/SmartBudgetPlanner"
          className="case__btn"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub →
        </a>
        <a
          href="#"
          className="case__btn case__btn--outline"
          target="_blank"
          rel="noreferrer"
        >
          View Live Demo →
        </a>
      </div>
    </section>
  );
}
