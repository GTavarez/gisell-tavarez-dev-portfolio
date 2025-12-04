const express = require("express");
const app = express();
const cors = require("cors");

// ROUTES
const contactRoutes = require("./Routes/contact");
const projectsRoutes = require("./Routes/projects");
const resumeRoutes = require("./Routes/portfolioResume"); // UPDATED

app.use(cors());
app.use(express.json());

// USE ROUTES
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/resume", resumeRoutes);

module.exports = app;
