import React from "react";
import "./ResumeDownload.css";
import { FaFilePdf } from "react-icons/fa";

function ResumeDownload() {
  const backend = "http://localhost:8080"; // update when deploying

  const resumes = [
    {
      title: "Portfolio Resume",
      desc: "Designed for recruiters & hiring managers. Beautiful, modern & storytelling.",
      endpoint: "/api/resume/portfolio",
    },
    {
      title: "ATS Resume",
      desc: "Optimized for Applicant Tracking Systems. Clean, keyword-rich formatting.",
      endpoint: "/api/resume/ats",
    },
    {
      title: "Simple Resume",
      desc: "Minimalistic resume for quick viewing or print-friendly submissions.",
      endpoint: "/api/resume/simple",
    },
  ];

  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>Download My Resume</h1>
        <p>Select the resume format that fits your application needs.</p>
      </div>

      <div className="resume-grid">
        {resumes.map((item, index) => (
          <div className="resume-card" key={index}>
            <FaFilePdf className="resume-icon" />

            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <a
              href={`${backend}${item.endpoint}`}
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeDownload;
