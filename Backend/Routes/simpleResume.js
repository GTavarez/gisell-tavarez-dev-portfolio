const express = require("express");
const router = express.Router();

const simpleResume = require("../Controllers/Resume/simpleResume");

if (typeof simpleResume.generatePDF !== "function") {
  console.error("❌ simpleResume.generatePDF is NOT a function");
}

router.get("/simple", (req, res) => {
  simpleResume.generatePDF(req, res);
});

module.exports = router;
