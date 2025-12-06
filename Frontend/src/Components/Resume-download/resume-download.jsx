import React from "react";
import "./ResumeDownload.css";
import { FaFilePdf } from "react-icons/fa";
import { useEffect } from "react";


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
     // SEO & Page Title
  useEffect(() => {
    document.title = "Download Resume | Gisell Tavarez";

    // Meta description
    const description =
      "Download ATS-friendly, portfolio, and simple resume versions for Gisell Tavarez — Software Engineer & Paramedic.";

    const metaDescTag = document.querySelector('meta[name="description"]');
    if (metaDescTag) {
      metaDescTag.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // OpenGraph (social sharing preview)
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "Download Resume | Gisell Tavarez";
    document.head.appendChild(ogTitle);

    const ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    ogDesc.content = description;
    document.head.appendChild(ogDesc);

    // Scroll user to top of the page
    window.scrollTo(0, 0);
  }, []);

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
