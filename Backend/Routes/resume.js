const express = require("express");
const router = express.Router();
const { generateResumePDF } = require("../controllers/resume");

router.get("/", generateResumePDF);

module.exports = router;
