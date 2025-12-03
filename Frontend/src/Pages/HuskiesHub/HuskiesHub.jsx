import "./HuskiesHub.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motion";
import { useState } from "react";
import Lightbox from "../../Components/Lightbox/Lightbox"; // <-- updated import path

export default function HuskiesHub() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const images = [
    {
      src: "/images/huskieshub/dashboard.png",
      alt: "HuskiesHub Dashboard",
    },
    {
      src: "/images/huskieshub/schedule.png",
      alt: "Team Schedule",
    },
    {
      src: "/images/huskieshub/players.png",
      alt: "Players Page",
    },
    {
      src: "/images/huskieshub/clinics.png",
      alt: "Clinics Page",
    },
  ];

  return (
    <section className="case">
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

      {/* Overview Section */}
      <div className="case__section">
        <h2 className="case__section-title">Overview</h2>
        <p className="case__text">
          HuskiesHub is a full-stack application designed to centralize team
          communication and provide a modern digital space for players, coaches,
          and colleges. It includes real-time scheduling, Google Calendar
          integration, profile management, and image hosting through GridFS.
        </p>
      </div>

      {/* Features Section */}
      <div className="case__section">
        <h2 className="case__section-title">Key Features</h2>

        <ul className="case__list">
          <li className="case__list-item">
            🗓️ Real-time schedule synced with Google Calendar
          </li>
          <li className="case__list-item">
            🧑‍🤝‍🧑 Player profiles with images, stats, and career notes
          </li>
          <li className="case__list-item">
            🗺️ Field and facility map integration with Google Maps
          </li>
          <li className="case__list-item">
            📸 Image hosting using MongoDB GridFS
          </li>
          <li className="case__list-item">
            🔒 Admin login with JWT authentication
          </li>
          <li className="case__list-item">
            🏫 College commits & showcase pages
          </li>
        </ul>
      </div>

      {/* Tech Stack Section */}
      <div className="case__section">
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
      </div>

      {/* Interactive Gallery Section */}
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

      {/* Lightbox Modal */}
      <Lightbox
        src={lightboxSrc}
        alt="HuskiesHub Expanded View"
        onClose={() => setLightboxSrc(null)}
      />

      {/* Live Links */}
      <div className="case__section case__section--center">
        <a
          href="https://github.com/GTavarez/HuskiesHub-Frontend"
          className="case__btn"
          target="_blank"
        >
          View GitHub →
        </a>
        <a href="#" className="case__btn case__btn--outline" target="_blank">
          View Live Site →
        </a>
      </div>
    </section>
  );
}
