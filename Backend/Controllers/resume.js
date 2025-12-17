const resumeData = require("../data/resume.json");
const { buildPortfolioResume } = require("../utils/pdfGenerator");

/* ---------- JSON resume (frontend) ---------- */
exports.getResumeData = (req, res) => {
  res.status(200).json({
    success: true,
    data: resumeData,
  });
};

/* ---------- PDF resume (download + tracking) ---------- */
exports.generateResumePDF = (req, res) => {
  try {
    const ip =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

    const userAgent = req.headers["user-agent"] || "unknown";

    console.log("📄 RESUME DOWNLOAD", {
      time: new Date().toISOString(),
      ip,
      userAgent,
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Gisell_Tavarez_Resume.pdf"'
    );

    buildPortfolioResume(res);
  } catch (error) {
    console.error("PDF Generation Error:", error);
    res.status(500).send("Error generating PDF");
  }
};
