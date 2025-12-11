const express = require("express");
const { getProjects } = require("../Controllers/projectsController");

const router = express.Router();

// GET /api/projects
router.get("/projects", getProjects);

module.exports = router;
