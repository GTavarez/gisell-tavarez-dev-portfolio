const express = require("express");
const router = express.Router();

const atsResume = require("../Controllers/Resume/atsResume");

if (typeof atsResume.generatePDF !== "function") {
  console.error("❌ atsResume.generatePDF is NOT a function");
}

router.get("/ats", (req, res) => {
  atsResume.generatePDF(req, res);
});

module.exports = router;
