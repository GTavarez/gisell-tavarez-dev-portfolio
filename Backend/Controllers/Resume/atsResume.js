const { buildATSResume } = require("../../utils/pdfGenerator");

exports.generatePDF = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=ATS_Resume.pdf"
  );

  buildATSResume(res);
};

