import React from "react";
import "./ResumeDownload.css";

function ResumeDownload() {
  const backend = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

  const resumes = [
    {
      title: "Portfolio Resume (Modern)",
      endpoint: "/api/resume/portfolio",
      description: "Designed for portfolio websites and tech recruiters.",
      color: "#6B4EFF",
    },
    {
      title: "ATS Resume",
      endpoint: "/api/resume/ats",
      description: "Optimized for Applicant Tracking Systems.",
      color: "#1E90FF",
    },
    {
      title: "Simple Resume",
      endpoint: "/api/resume/simple",
      description: "A clean, minimalist one-page resume.",
      color: "#00C49A",
    },
  ];

  const download = (endpoint) => {
    window.open(`${backend}${endpoint}`, "_blank");
  };

  return (
    <div className="resume-page">
      <h1 className="resume-title">Download My Resume</h1>
      <p className="resume-subtitle">
        Choose the version that best fits your needs.
      </p>

      <div className="resume-card-container">
        {resumes.map((r, i) => (
          <div key={i} className="resume-card">
            <h2 style={{ color: r.color }}>{r.title}</h2>
            <p>{r.description}</p>
            <button
              className="resume-btn"
              style={{ backgroundColor: r.color }}
              onClick={() => download(r.endpoint)}
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeDownload;
