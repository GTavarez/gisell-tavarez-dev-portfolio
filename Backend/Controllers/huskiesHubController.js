const players = require("../data/huskiesPlayers.json");
const clinics = require("../data/huskiesClinics.json");
const schedule = require("../data/huskiesSchedule.json");
const commits = require("../data/huskiesCommits.json");

exports.getHuskiesHubData = (req, res) => {
  res.status(200).json({
    success: true,
    players,
    clinics,
    schedule,
    commits,
  });
};
