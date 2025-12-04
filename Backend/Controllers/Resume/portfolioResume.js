const { buildPortfolioResume } = require("../../utils/pdfGenerator");

exports.downloadPortfolioResume = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Portfolio_Resume.pdf"
  );
  //---------------------------------------------
  // PARAMEDIC → SOFTWARE ENGINEER TRANSITION (Portfolio)
  //---------------------------------------------
  doc.moveDown(2);
  doc
    .fontSize(20)
    .fillColor("#6B4EFF")
    .text("Paramedic → Software Engineer Transition");
  doc.moveDown(1);

  doc
    .fontSize(12)
    .fillColor("#333")
    .text(
      "With seven years of paramedic experience, I bring a unique blend of composure, rapid problem-solving, and disciplined execution into software engineering. " +
        "My background in emergency medicine trained me to diagnose problems quickly, communicate clearly, and deliver precise solutions under pressure—skills that translate directly into writing clean, reliable, and maintainable code."
    );
  doc.moveDown(0.8);

  doc
    .fontSize(12)
    .fillColor("#333")
    .text(
      "I approach engineering with the same mindset I used in the field: assess, stabilize, solve, and communicate. " +
        "This enables me to excel in debugging, API integrations, system architecture, and collaborative development workflows."
    );
  doc.moveDown(1.5);

  //---------------------------------------------
  // SOFTWARE ENGINEERING SECTION (Portfolio)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(22).fillColor("#6B4EFF").text("Software Engineering");
  doc.moveDown();

  doc.fontSize(14).fillColor("#6B4EFF").text("Technical Skills");
  doc
    .fontSize(12)
    .fillColor("#333")
    .text(
      "JavaScript (ES6+), React, Node.js, Express, MongoDB, Git, REST APIs, JSON, JWT, Axios, Zustand, CSS Modules, HTML5, Responsive Design"
    );
  doc.moveDown(0.8);

  doc.fontSize(14).fillColor("#6B4EFF").text("Frontend Engineering");
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Experienced in building responsive interfaces, modular React components, API-driven UIs, global state management, and modern UX patterns."
    );
  doc.moveDown(0.8);

  doc.fontSize(14).fillColor("#6B4EFF").text("Backend Engineering");
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Skilled in developing REST APIs, controller-service architecture, secure authentication, MongoDB schemas, validation, and error-safe routing."
    );
  doc.moveDown(0.8);

  doc.fontSize(14).fillColor("#6B4EFF").text("Version Control & DevOps");
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Git, branching workflows, GitHub collaboration, CI-ready project structure, and cloud deployments (Cloud Run)."
    );
  doc.moveDown(0.8);

  doc.fontSize(14).fillColor("#6B4EFF").text("Collaboration");
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Works well in team environments, pairing with designers and backend engineers, writing organized code and clean documentation."
    );
  doc.moveDown(1);
  //---------------------------------------------
  // FEATURED PROJECTS (Portfolio)
  //---------------------------------------------
  doc.moveDown(2);
  doc.fontSize(20).fillColor("#6B4EFF").text("Featured Projects");
  doc.moveDown(1);

  doc.fontSize(14).fillColor("#333").text("Homeland Project");
  doc
    .fontSize(10)
    .fillColor("#6B4EFF")
    .text("github.com/GTavarez/homeland-project");
  doc.moveDown(0.5);
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Full-stack application with secure routing, modern UI, RESTful API architecture, and optimized component performance."
    );
  doc.moveDown(1);

  doc.fontSize(14).fillColor("#333").text("WTWR (What to Wear?) — Frontend");
  doc
    .fontSize(10)
    .fillColor("#6B4EFF")
    .text("github.com/GTavarez/se_project_react");
  doc.moveDown(0.5);
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "React application with user profiles, weather-based recommendations, and dynamic interfaces."
    );
  doc.moveDown(1);

  doc.fontSize(14).fillColor("#333").text("WTWR Backend");
  doc
    .fontSize(10)
    .fillColor("#6B4EFF")
    .text("github.com/GTavarez/se_project_express");
  doc.moveDown(0.5);
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Robust Express backend with authentication, validation, routing, and database models."
    );
  doc.moveDown(1);

  doc.fontSize(14).fillColor("#333").text("Decluttr Full-Stack App");
  doc.fontSize(10).fillColor("#6B4EFF").text("github.com/RyBCreates/decluttr");
  doc.moveDown(0.5);
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Collaborative MERN application for item organization and management using reusable UI components."
    );
  doc.moveDown(1);

  doc.fontSize(14).fillColor("#333").text("Decluttr Backend");
  doc
    .fontSize(10)
    .fillColor("#6B4EFF")
    .text("github.com/RyBCreates/decluttr-backend");
  doc.moveDown(0.5);
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Express API with CRUD routes, controllers, data modeling, and authentication flows."
    );
  //---------------------------------------------
  // PARAMEDIC EXPERIENCE (Portfolio)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(20).fillColor("#6B4EFF").text("Paramedic Experience");
  doc.moveDown(1);

  doc
    .fontSize(14)
    .fillColor("#333")
    .text("Paramedic — Field Operations • 2018–Present");
  doc.moveDown(0.5);

  doc
    .fontSize(12)
    .fillColor("#000")
    .list([
      "Delivered emergency medical care in high-pressure, time-critical environments.",
      "Performed rapid assessment, diagnosis, and stabilization for diverse patient populations.",
      "Collaborated seamlessly with multi-disciplinary teams to coordinate treatment plans.",
      "Documented complex medical events with precision and clarity.",
      "Applied strong decision-making, empathy, communication, and leadership.",
    ]);
  //---------------------------------------------
  // SKILLS (Portfolio)
  //---------------------------------------------
  doc.moveDown(2);
  doc.fontSize(20).fillColor("#6B4EFF").text("Technical Skills");
  doc.moveDown(1);

  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "JavaScript • React • Node.js • Express • MongoDB • REST APIs • Git/GitHub • " +
        "HTML • CSS • Responsive Design • UI/UX • PDFKit • Authentication • Deployment"
    );
  //---------------------------------------------
  // EDUCATION (Portfolio)
  //---------------------------------------------
  doc.moveDown(2);
  doc.fontSize(20).fillColor("#6B4EFF").text("Education");
  doc.moveDown(1);

  doc
    .fontSize(14)
    .fillColor("#333")
    .text("TripleTen Software Engineering Program — 2024");
  doc
    .fontSize(12)
    .fillColor("#000")
    .text(
      "Full-stack web development program specializing in modern JavaScript technologies."
    );
  doc.moveDown(1);

  doc
    .fontSize(14)
    .fillColor("#333")
    .text("Paramedic Certification — NYC EMS Academy");
  //---------------------------------------------
  // CERTIFICATIONS (Portfolio)
  //---------------------------------------------
  doc.moveDown(2);
  doc.fontSize(20).fillColor("#6B4EFF").text("Certifications");
  doc.moveDown(1);

  doc
    .fontSize(12)
    .fillColor("#000")
    .list([
      "State-Certified Paramedic",
      "CPR / AED / BLS",
      "Trauma Life Support (ITLS)",
      "Emergency Vehicle Operations",
    ]);

  buildPortfolioResume(res);
};
