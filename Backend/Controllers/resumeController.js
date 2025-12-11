const path = require("path");
const fs = require("fs");

exports.getResumePDF = (req, res) => {
  const filePath = path.join(__dirname, "../data/resume.pdf");

  res.download(filePath, "Gisell_Tavarez_Resume.pdf", (err) => {
    if (err) {
      console.error("PDF error:", err);
      res.status(500).json({ success: false, message: "Unable to download PDF" });
    }
  });
};


const getResume = (req, res) => {
  const resumePath = path.join(__dirname, "..", "data", "resume.json");

  fs.readFile(resumePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading resume.json:", err);
      return res.status(500).json({ message: "Error loading resume" });
    }

    try {
      const resume = JSON.parse(data);
      res.json(resume);
    } catch (parseErr) {
      console.error("Error parsing resume.json:", parseErr);
      res.status(500).json({ message: "Error parsing resume data" });
    }
  });
};

module.exports = {
  getResume,
};
