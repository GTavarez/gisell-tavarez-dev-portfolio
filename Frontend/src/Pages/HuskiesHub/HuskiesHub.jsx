import "./HuskiesHub.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motion";
import { useState } from "react";
import Lightbox from "../../Components/Lightbox/Lightbox";
import hero from "../../assets/hero.png"
import teams from "../../assets/teams.png"
import player from "../../assets/profile.png"
import maps from "../../assets/maps.png"
export default function HuskiesHub() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const images = [
    { src: hero, alt: "HuskiesHub Dashboard" },
    { src: teams, alt: "Teams Page" },
    { src: player, alt: "Player Profile Page" },
    { src: maps, alt: "Game Location Map" },
  ];

  const getAlt = () =>
    images.find((img) => img.src === lightboxSrc)?.alt || "Preview Image";

  return (
    <section className="case case--huskies">
      <div className="case__container">
        {/* HEADER */}
        <div className="case__header">
          <motion.h1
            className="case__title"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            HuskiesHub
          </motion.h1>
          <p className="case__subtitle">
            A softball platform for the Empire State Huskies: Player Profiles,
            Schedules, Clinics, College Commits, and more.
          </p>
        </div>

        {/* OVERVIEW */}
        <motion.div
          className="case__section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="case__section-title">Overview</h2>
          <p className="case__text">
            HuskiesHub is a full-stack application designed to centralize team
            communication and provide a modern digital space for players,
            coaches, and colleges. It includes real-time scheduling, Google
            Calendar integration, profile management, and image hosting through
            GridFS.
          </p>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          className="case__section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="case__section-title">Key Features</h2>
          <ul className="case__list">
            <li>🗓️ Real-time schedule synced with Google Calendar</li>
            <li>🧑‍🤝‍🧑 Player profiles with images, stats, and notes</li>
            <li>🗺️ Field and facility map integration</li>
            <li>📸 Image hosting via MongoDB GridFS</li>
            <li>🔒 Admin login with JWT authentication</li>
            <li>🏫 College commits & showcase pages</li>
          </ul>
        </motion.div>

        {/* TECH STACK */}
        <motion.div
          className="case__section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="case__section-title">Tech Stack</h2>
          <div className="case__tags">
            <span className="case__tag">React</span>
            <span className="case__tag">Express</span>
            <span className="case__tag">Node</span>
            <span className="case__tag">MongoDB</span>
            <span className="case__tag">GridFS</span>
            <span className="case__tag">Google Calendar API</span>
            <span className="case__tag">Google Maps API</span>
          </div>
        </motion.div>

        {/* GALLERY */}
        <motion.div
          className="case__section"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="case__section-title">Gallery</h2>

          <div className="case__gallery">
            {images.map((img) => (
              <motion.img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="case__img case__img--clickable"
                onClick={() => setLightboxSrc(img.src)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              />
            ))}
          </div>
        </motion.div>

        {/* LIGHTBOX */}
        <Lightbox
          src={lightboxSrc}
          alt={getAlt()}
          onClose={() => setLightboxSrc(null)}
        />

        {/* LINKS */}
        <div className="case__section case__section--center">
          <a
            href="https://github.com/GTavarez/HuskiesHub"
            className="case__btn"
            target="_blank"
          >
            View GitHub →
          </a>
          <a
            href="https://www.eshuskiesyoffee.com"
            className="case__btn case__btn--outline"
            target="_blank"
          >
            View Live Site →
          </a>
        </div>
      </div>
    </section>
  );
}
