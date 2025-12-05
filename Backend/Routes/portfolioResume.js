const express = require("express");
const router = express.Router();

const portfolioResume = require("../Controllers/Resume/portfolioResume");

if (typeof portfolioResume.generatePDF !== "function") {
  console.error("❌ portfolioResume.generatePDF is NOT a function");
}

router.get("/portfolio", (req, res) => {
  portfolioResume.generatePDF(req, res);
});

module.exports = router;
