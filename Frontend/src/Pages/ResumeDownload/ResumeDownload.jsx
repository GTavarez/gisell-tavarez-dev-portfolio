// src/Pages/ResumeDownload/ResumeDownload.jsx
import "./ResumeDownload.css";
import { motion } from "framer-motion";

export default function ResumeDownload() {
  const downloadResume = async (type) => {
    try {
      const res = await fetch(
        `https://resume-backend-345042402644.us-east1.run.app/api/resume/${type}`
      );

      if (!res.ok) throw new Error("Failed to download");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${type}-resume.pdf`;
      link.click();
    } catch (err) {
      console.error(err);
      alert("Error downloading resume");
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="resume-download-page" data-aos="fade-up">
      {/* Spotlight effect */}
      <div className="spotlight-bg"></div>

      <motion.h1
        className="resume-download-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Download My Resume
      </motion.h1>

      <motion.p
        className="resume-download-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Choose the version that best fits your needs
      </motion.p>

      <div className="resume-download-grid">
        {/* PORTFOLIO RESUME */}
        <motion.div
          className="resume-card glass"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="resume-icon floating">🎨</div>
          <h2>Portfolio Resume</h2>
          <p>
            A visually engaging resume perfect for recruiters, networking, and
            presentations.
          </p>
          <button
            onClick={() => downloadResume("portfolio")}
            className="resume-btn primary"
          >
            Download Portfolio PDF
          </button>
        </motion.div>

        {/* ATS RESUME */}
        <motion.div
          className="resume-card glass"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.15 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="resume-icon floating">🤖</div>
          <h2>ATS-Friendly Resume</h2>
          <p>
            Optimized for Applicant Tracking Systems — clean text, no formatting
            issues.
          </p>
          <button
            onClick={() => downloadResume("ats")}
            className="resume-btn primary"
          >
            Download ATS PDF
          </button>
        </motion.div>

        {/* SIMPLE RESUME */}
        <motion.div
          className="resume-card glass"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <div className="resume-icon floating">📄</div>
          <h2>Simple Resume</h2>
          <p>
            A clean, minimal format ideal for quick applications and
            readability.
          </p>
          <button
            onClick={() => downloadResume("simple")}
            className="resume-btn primary"
          >
            Download Simple PDF
          </button>
        </motion.div>
      </div>
    </section>
  );
}
