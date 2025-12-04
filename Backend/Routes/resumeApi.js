const express = require("express");
const { getResume } = require("../Controllers/resumeController");

const router = express.Router();
const resumeData = require("../data/resume.json");

exports.getResumeData = (req, res) => {
  res.status(200).json({
    success: true,
    data: resumeData,
  });
};

router.get("/resume-data", getResume);

module.exports = router;
