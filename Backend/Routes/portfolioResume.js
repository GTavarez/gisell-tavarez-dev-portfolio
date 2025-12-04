const express = require("express");
const router = express.Router();

const {
  downloadPortfolioResume,
} = require("../Controllers/Resume/portfolioResume");

const { downloadATSResume } = require("../Controllers/Resume/atsResume");

const { downloadSimpleResume } = require("../Controllers/Resume/simpleResume");

router.get("/portfolio", downloadPortfolioResume);
router.get("/ats", downloadATSResume);
router.get("/simple", downloadSimpleResume);

module.exports = router;
