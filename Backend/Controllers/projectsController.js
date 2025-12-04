const path = require("path");
const fs = require("fs");
const projects = require("../data/projects.json");

exports.getProjects = (req, res) => {
  res.status(200).json({ success: true, data: projects });
};


const getProjects = (req, res) => {
  const projectsPath = path.join(__dirname, "..", "data", "projects.json");

  fs.readFile(projectsPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading projects.json:", err);
      return res.status(500).json({ message: "Error loading projects" });
    }

    try {
      const projects = JSON.parse(data);
      res.json(projects);
    } catch (parseErr) {
      console.error("Error parsing projects.json:", parseErr);
      res.status(500).json({ message: "Error parsing projects data" });
    }
  });
};

module.exports = {
  getProjects,
};
