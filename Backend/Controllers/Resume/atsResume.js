const { buildATSResume } = require("../../utils/pdfGenerator");

exports.downloadATSResume = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=ATS_Resume.pdf");
  //---------------------------------------------
  // PARAMEDIC → SOFTWARE ENGINEER TRANSITION (ATS)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(18).text("Paramedic to Software Engineer Transition");
  doc.moveDown(0.7);

  doc
    .fontSize(11)
    .text(
      "Seven years of paramedic experience developed strong problem-solving, critical thinking, communication, and high-pressure decision-making—core skills that transfer directly into software engineering."
    );
  doc.moveDown(0.5);

  doc
    .fontSize(11)
    .text(
      "Accustomed to diagnosing issues rapidly, following structured protocols, documenting findings, and collaborating with cross-functional teams. These abilities enhance debugging, API integration, teamwork, and system design."
    );
  doc.moveDown(1);

  //---------------------------------------------
  // SOFTWARE ENGINEERING SECTION (ATS)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(18).text("Software Engineering");
  doc.moveDown(0.7);

  doc.fontSize(14).text("Technical Skills:");
  doc
    .fontSize(11)
    .text(
      "JavaScript, ES6, React, React Hooks, Node.js, Express, MongoDB, REST API Development, Git, GitHub, JWT Authentication, JSON, Zustand, Axios, CSS, HTML"
    );
  doc.moveDown(0.5);

  doc.fontSize(14).text("Frontend Engineering:");
  doc
    .fontSize(11)
    .text(
      "Developed responsive interfaces, reusable component architecture, API integrations, form handling, global state management, and routing."
    );
  doc.moveDown(0.5);

  doc.fontSize(14).text("Backend Engineering:");
  doc
    .fontSize(11)
    .text(
      "Built REST endpoints, middleware, controller structures, Express routing, schema validation, and MongoDB data modeling."
    );
  doc.moveDown(0.5);

  doc.fontSize(14).text("Tools and Workflows:");
  doc
    .fontSize(11)
    .text(
      "Git workflows, version control branching, debugging, environment variables, API documentation, and deployment familiarity."
    );
  doc.moveDown(0.5);

  doc.fontSize(14).text("Soft Skills:");
  doc
    .fontSize(11)
    .text(
      "Strong communication, teamwork, adaptability, problem-solving, and leadership gained through paramedic experience."
    );
  doc.moveDown(1);
  //---------------------------------------------
  // SOFTWARE ENGINEERING EXPERIENCE (ATS)
  //---------------------------------------------
  doc.fontSize(16).text("Software Engineering Experience");
  doc.moveDown(0.5);

  doc
    .fontSize(12)
    .list([
      "Full-stack development using JavaScript, React, Node.js, Express, MongoDB.",
      "Built responsive UI, API integrations, reusable components, and optimized logic.",
      "Experienced with authentication, JWT, routing, controllers, and REST architecture.",
      "Proficient in Git, GitHub workflows, debugging, and Agile collaboration.",
    ]);
  doc.moveDown(1);
  //---------------------------------------------
  // PROJECTS (ATS)
  //---------------------------------------------
  doc.fontSize(16).text("Projects");
  doc.moveDown(0.5);

  doc
    .fontSize(12)
    .list([
      "Homeland Project — Full-stack app | github.com/GTavarez/homeland-project",
      "WTWR React App — Frontend | github.com/GTavarez/se_project_react",
      "WTWR Backend — Express API | github.com/GTavarez/se_project_express",
      "Decluttr — MERN app | github.com/RyBCreates/decluttr",
      "Decluttr Backend — API | github.com/RyBCreates/decluttr-backend",
    ]);
  doc.moveDown(1);
  //---------------------------------------------
  // PARAMEDIC EXPERIENCE (ATS)
  //---------------------------------------------
  doc.fontSize(16).text("Paramedic Experience");
  doc.moveDown(0.5);

  doc
    .fontSize(12)
    .list([
      "Emergency medical care in high-pressure environments.",
      "Rapid problem-solving, assessment, and decision-making.",
      "Clear communication with multi-disciplinary teams.",
      "Strong documentation accuracy and situational leadership.",
    ]);
  doc.moveDown(1);
  //---------------------------------------------
  // SKILLS (ATS)
  //---------------------------------------------
  doc.fontSize(16).text("Technical Skills");
  doc
    .fontSize(12)
    .list([
      "JavaScript, HTML, CSS, React, Node.js, Express",
      "MongoDB, REST APIs, Git, GitHub",
      "Responsive UI, PDFKit, Debugging, Deployment",
    ]);
  doc.moveDown(1);
  //---------------------------------------------
  // EDUCATION (ATS)
  //---------------------------------------------
  doc.fontSize(16).text("Education");
  doc.fontSize(12).text("TripleTen Software Engineering Program — 2024");
  doc.moveDown(0.5);
  doc.text("NYC EMS Academy — Paramedic Certification");

  doc.moveDown(1);

  //---------------------------------------------
  // CERTIFICATIONS (ATS)
  //---------------------------------------------
  doc.fontSize(16).text("Certifications");
  doc
    .fontSize(12)
    .list([
      "Paramedic License",
      "BLS / CPR / AED",
      "ITLS / Trauma Life Support",
    ]);
  doc.moveDown(1);

  buildATSResume(res);
};
