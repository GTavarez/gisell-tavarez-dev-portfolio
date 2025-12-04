import React, { useState } from "react";
import "./ResumeDownload.css";

function ResumeDownload() {
  const [loading, setLoading] = useState(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

  const downloadResume = async (type) => {
    try {
      setLoading(true);

      const response = await fetch(`${backendURL}/resume/${type}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download =
        type === "portfolio"
          ? "Gisell_Tavarez_Portfolio_Resume.pdf"
          : type === "ats"
          ? "Gisell_Tavarez_ATS_Resume.pdf"
          : "Gisell_Tavarez_Simple_Resume.pdf";

      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Error downloading resume. Try again.");
    }
  };

  return (
    <div className="resumeDownload__wrapper">
      <h1 className="resumeDownload__title">Download My Resume</h1>
      <p className="resumeDownload__subtitle">
        Choose a resume format that fits your needs.
      </p>

      <div className="resumeDownload__buttons">
        <button
          disabled={loading}
          onClick={() => downloadResume("portfolio")}
          className="resumeBtn purple"
        >
          Portfolio Resume
        </button>

        <button
          disabled={loading}
          onClick={() => downloadResume("ats")}
          className="resumeBtn black"
        >
          ATS-Optimized Resume
        </button>

        <button
          disabled={loading}
          onClick={() => downloadResume("simple")}
          className="resumeBtn white"
        >
          Simple Clean Resume
        </button>
      </div>

      {loading && <div className="resumeDownload__loading">Downloading…</div>}
    </div>
  );
}

export default ResumeDownload;
