const projects = require("../data/projects.json");

exports.getProjects = (req, res) => {
  res.status(200).json({ success: true, data: projects });
};
