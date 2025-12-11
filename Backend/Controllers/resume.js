const { buildPDF } = require("../utils/pdfGenerator");

exports.generateResumePDF = (req, res) => {
  try {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="Gisell_Tavarez_Resume.pdf"'
    );

    buildPDF(res); // Writes PDF directly to client
  } catch (error) {
    console.error("PDF Generation Error:", error);
    res.status(500).send("Error generating PDF");
  }
};
