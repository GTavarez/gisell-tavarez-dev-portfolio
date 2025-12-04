const about = require("../data/about.json");

exports.getAbout = (req, res) => {
  res.status(200).json({ success: true, data: about });
};
