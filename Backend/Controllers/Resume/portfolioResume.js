const { buildPortfolioResume } = require("../../utils/pdfGenerator");

exports.generatePDF = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Portfolio_Resume.pdf"
  );

  buildPortfolioResume(res);
};
