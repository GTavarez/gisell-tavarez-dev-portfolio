const { buildSimpleResume } = require("../../utils/pdfGenerator");

exports.downloadSimpleResume = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Simple_Resume.pdf"
  );
  //---------------------------------------------
  // PARAMEDIC → SOFTWARE ENGINEER TRANSITION (Simple)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(18).text("Paramedic → Software Engineer");
  doc.moveDown(1);

  doc
    .fontSize(12)
    .text(
      "Bringing years of experience as a paramedic, I apply calm problem-solving, teamwork, and clear communication to every software project."
    );
  doc.moveDown(0.7);

  doc
    .fontSize(12)
    .text(
      "Used to working under pressure, analyzing situations quickly, and delivering reliable solutions—skills that strengthen my engineering approach."
    );
  doc.moveDown(1);

  //---------------------------------------------
  // SOFTWARE ENGINEERING SECTION (Simple)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(20).text("Software Engineering");
  doc.moveDown(1);

  doc.fontSize(14).text("Technical Skills");
  doc
    .fontSize(11)
    .text(
      "JavaScript, React, Node.js, Express, MongoDB, REST APIs, Git, JSON, CSS"
    );
  doc.moveDown(0.6);

  doc.fontSize(14).text("Frontend");
  doc
    .fontSize(11)
    .text(
      "React components, responsive layouts, API integration, form handling."
    );
  doc.moveDown(0.6);

  doc.fontSize(14).text("Backend");
  doc
    .fontSize(11)
    .text("Routing, controllers, CRUD APIs, authentication, database schemas.");
  doc.moveDown(0.6);

  doc.fontSize(14).text("Teamwork");
  doc
    .fontSize(11)
    .text(
      "Clear communicator, strong problem-solver, comfortable in cross-functional teams."
    );
  doc.moveDown(1);
  //---------------------------------------------
// SOFTWARE ENGINEERING EXPERIENCE (Simple)
//---------------------------------------------
doc.fontSize(18).text("Software Engineering Experience");
doc.moveDown(0.7);

doc.fontSize(12).list([
  "Full-stack development with JavaScript, React, Node.js.",
  "Created responsive UIs, APIs, and reusable components.",
  "Experience with Express, routing, REST APIs, MongoDB.",
  "Strong debugging, communication, and teamwork skills."
]);
doc.moveDown(1);
//---------------------------------------------
// PROJECTS (Simple)
//---------------------------------------------
doc.fontSize(18).text("Projects");
doc.moveDown(0.7);

doc.fontSize(12).list([
  "Homeland Project | github.com/GTavarez/homeland-project",
  "WTWR React App | github.com/GTavarez/se_project_react",
  "WTWR Backend | github.com/GTavarez/se_project_express",
  "Decluttr | github.com/RyBCreates/decluttr",
  "Decluttr Backend | github.com/RyBCreates/decluttr-backend"
]);
doc.moveDown(1);
//---------------------------------------------
// PARAMEDIC EXPERIENCE (Simple)
//---------------------------------------------
doc.fontSize(18).text("Paramedic Experience");
doc.moveDown(0.7);

doc.fontSize(12).list([
  "Delivered emergency medical care under pressure.",
  "Strong communication and teamwork skills.",
  "Accurate documentation and rapid problem-solving."
]);
doc.moveDown(1);
//---------------------------------------------
// SKILLS (Simple)
//---------------------------------------------
doc.fontSize(18).text("Skills");
doc.fontSize(12).list([
  "JavaScript, React, Node.js, Express",
  "MongoDB, REST APIs, Git/GitHub",
  "HTML, CSS, UI/UX basics"
]);
doc.moveDown(1);
//---------------------------------------------
// EDUCATION (Simple)
//---------------------------------------------
doc.fontSize(18).text("Education");
doc.fontSize(12).text("TripleTen Software Engineering Program — 2024");
doc.text("NYC EMS Academy — Paramedic Certification");
doc.moveDown(1);

  buildSimpleResume(res);
};
