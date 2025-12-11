const categories = require("../data/categories.json");
const benchmark = require("../data/benchmarkData.json");

exports.getSBPData = (req, res) => {
  res.status(200).json({
    success: true,
    categories,
    benchmark,
  });
};
