const { buildSimpleResume } = require("../../utils/pdfGenerator");

exports.generatePDF = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Simple_Resume.pdf"
  );

  buildSimpleResume(res);
};

