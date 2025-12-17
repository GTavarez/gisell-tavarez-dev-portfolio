const express = require("express");
const {
  getResumeData,
  generateResumePDF,
} = require("../Controllers/resumeController");

const router = express.Router();

/* JSON resume data */
router.get("/resume-data", getResumeData);

/* PDF resume download */
router.get("/resume/download", generateResumePDF);

module.exports = router;
