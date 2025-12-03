const PDFDocument = require("pdfkit");

const generateResumePDF = (req, res) => {
  try {
    const doc = new PDFDocument({ margin: 40 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=Gisell_Tavarez_Resume.pdf");

    doc.pipe(res);

    // HEADER
    doc
      .font("Helvetica-Bold")
      .fontSize(24)
      .text("Gisell Tavarez", { align: "left" })
      .moveDown(0.5);

    doc
      .font("Helvetica")
      .fontSize(12)
      .fillColor("#555")
      .text("Full-Stack Developer / Software Engineer")
      .moveDown(1);

    // SECTION: SUMMARY
    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .fillColor("#000")
      .text("Summary")
      .moveDown(0.2);

    doc
      .font("Helvetica")
      .fontSize(11)
      .fillColor("#333")
      .text(
        "Full-stack developer experienced in React, Node, Express, MongoDB, UI design, API development, and building full production-ready applications like HuskiesHub and Smart Budget Planner."
      )
      .moveDown(1);

    // SECTION: SKILLS
    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .text("Skills")
      .moveDown(0.2);

    doc
      .font("Helvetica")
      .fontSize(11)
      .text("• JavaScript, React, Node.js, Express")
      .text("• MongoDB, GridFS, Mongoose")
      .text("• HTML, CSS, Tailwind/BEM, Responsive Design")
      .text("• APIs: Google Calendar, Google Maps, GeoIP")
      .moveDown(1);

    // SECTION: PROJECTS
    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .text("Projects")
      .moveDown(0.3);

    doc
      .font("Helvetica-Bold")
      .fontSize(12)
      .text("HuskiesHub — Full-Stack Web Application")
      .font("Helvetica")
      .fontSize(11)
      .text(
        "Softball platform with schedules, player profiles, clinics, maps, and admin tools. Uses React, Express, MongoDB, Google Calendar, GridFS."
      )
      .moveDown(0.7);

    doc
      .font("Helvetica-Bold")
      .fontSize(12)
      .text("Smart Budget Planner — Financial Dashboard")
      .font("Helvetica")
      .fontSize(11)
      .text(
        "Budgeting tool with expenses, category insights, GeoIP detection, and charts. Built with React, Vite, Chart.js, Express."
      )
      .moveDown(1);

    // SECTION: EDUCATION
    doc
      .font("Helvetica-Bold")
      .fontSize(14)
      .text("Education")
      .moveDown(0.2);

    doc
      .font("Helvetica")
      .fontSize(11)
      .text("Full-Stack Web Development — TripleTen")
      .moveDown(1);

    doc.end();
  } catch (err) {
    console.error("PDF generation error:", err);
    res.status(500).send("Error generating resume");
  }
};

module.exports = { generateResumePDF };
