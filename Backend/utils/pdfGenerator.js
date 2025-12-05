// Backend/utils/pdfGenerator.js
const PDFDocument = require("pdfkit");

/**
 * Draw sidebar section heading
 */
function sidebarHeading(doc, text) {
  doc
    .fontSize(12)
    .fillColor("#FFFFFF")
    .font("Helvetica-Bold")
    .text(text.toUpperCase(), { align: "left" });

  doc.moveDown(0.3);
}

/**
 * Draw main heading
 */
function mainHeading(doc, text) {
  doc.fontSize(20).fillColor("#6B4EFF").font("Helvetica-Bold").text(text);

  doc.moveDown(0.8);
}

/**
 * Main function that builds the Portfolio Resume
 */
exports.buildPortfolioResume = (res) => {
  const doc = new PDFDocument({
    margin: 0,
    size: "LETTER",
  });

  doc.pipe(res);

  // --- SIDEBAR ---
  const sidebarWidth = 170;
  doc.rect(0, 0, sidebarWidth, 792).fill("#6B4EFF");

  doc.fillColor("#FFF").font("Helvetica");

  doc.x = 20;
  doc.y = 40;

  // Name in sidebar
  doc.fontSize(22).font("Helvetica-Bold").text("Gisell Tavarez");
  doc.moveDown(0.5);

  doc
    .fontSize(11)
    .font("Helvetica")
    .text("Full-Stack Software Engineer", { width: sidebarWidth - 40 });
  doc.moveDown(1.2);

  // --- SIDEBAR: SKILLS ---
  sidebarHeading(doc, "Skills");
  doc
    .fontSize(10)
    .fillColor("#FFFFFF")
    .text(
      "JavaScript (ES6+)\nReact • Node.js • Express\nMongoDB • REST APIs\nGit & GitHub\nResponsive Design\nPDFKit\nCloud Run"
    );
  doc.moveDown(1);

  // --- SIDEBAR: Tools ---
  sidebarHeading(doc, "Tools");
  doc
    .fontSize(10)
    .fillColor("#FFFFFF")
    .text("VS Code\nPostman\nMongoDB Compass\nFigma");
  doc.moveDown(1);

  // --- SIDEBAR: Contact ---
  sidebarHeading(doc, "Contact");
  doc.fontSize(10).fillColor("#FFF").text("New York, NY");
  doc.text("Email: tavarezgisell@gmail.com");
  doc.text("GitHub: github.com/GTavarez");
  doc.moveDown(1);

  // --- SIDEBAR: Links ---
  sidebarHeading(doc, "Links");
  doc
    .fontSize(10)
    .fillColor("#FFF")
    .text("Portfolio: https://your-portfolio.com");
  doc.moveDown(2);

  // RESET for main content
  doc.x = sidebarWidth + 40;
  doc.y = 40;
  doc.fillColor("#000");

  // --- MAIN: Transition Section ---
  mainHeading(doc, "Paramedic → Software Engineer Transition");

  doc
    .fontSize(11)
    .fillColor("#333")
    .text(
      "With seven years as a paramedic, I bring rapid problem-solving, calm execution, and precise decision-making into software engineering. " +
        "Emergency medicine taught me to assess, diagnose, and solve complex problems quickly — a mindset that directly supports API development, debugging, and clean architecture."
    );
  doc.moveDown(1);

  doc
    .fontSize(11)
    .text(
      "My engineering approach mirrors emergency care: assess, stabilize, solve, and communicate. " +
        "This mindset makes me effective in API integrations, system design, and collaborative development."
    );
  doc.moveDown(1.5);

  // --- MAIN: Software Engineering Section ---
  mainHeading(doc, "Software Engineering");

  doc.fontSize(12).fillColor("#6B4EFF").text("Technical Skills");
  doc
    .fontSize(11)
    .fillColor("#333")
    .text(
      "JavaScript (ES6+), React, Node.js, Express, MongoDB, Git, REST APIs, JWT, Axios, Zustand, CSS Modules"
    );
  doc.moveDown(1);

  doc.fontSize(12).fillColor("#6B4EFF").text("Frontend Engineering");
  doc
    .fontSize(11)
    .fillColor("#333")
    .text(
      "Experienced in building responsive UIs, modular React components, state management, and modern UX patterns."
    );
  doc.moveDown(1);

  doc.fontSize(12).fillColor("#6B4EFF").text("Backend Engineering");
  doc
    .fontSize(11)
    .fillColor("#333")
    .text(
      "Skilled in REST API architecture, controller-service structure, secure authentication, MongoDB schemas, and validation."
    );
  doc.moveDown(1);

  // --- MAIN: Projects ---
  mainHeading(doc, "Featured Projects");

  const projects = [
    {
      title: "Homeland Project",
      link: "github.com/GTavarez/homeland-project",
      desc: "Full-stack app with modern UI, secure routing, and REST architecture.",
    },
    {
      title: "WTWR Frontend",
      link: "github.com/GTavarez/se_project_react",
      desc: "React app with user profiles, weather-based recommendations, and full UI system.",
    },
    {
      title: "WTWR Backend",
      link: "github.com/GTavarez/se_project_express",
      desc: "Express backend with authentication, validation, and routing.",
    },
    {
      title: "Decluttr Full-Stack",
      link: "github.com/RyBCreates/decluttr",
      desc: "MERN app for item organization with reusable components.",
    },
    {
      title: "Decluttr Backend",
      link: "github.com/RyBCreates/decluttr-backend",
      desc: "Express API with CRUD, authentication, and clean data modeling.",
    },
  ];

  projects.forEach((p) => {
    doc.fontSize(13).fillColor("#333").text(p.title);
    doc.fontSize(10).fillColor("#6B4EFF").text(p.link);
    doc.moveDown(0.3);
    doc.fontSize(11).fillColor("#222").text(p.desc);
    doc.moveDown(1);
  });

  // --- MAIN: Paramedic Experience ---
  doc.addPage();
  doc.x = sidebarWidth + 40;
  doc.y = 40;

  mainHeading(doc, "Paramedic Experience");

  doc
    .fontSize(11)
    .fillColor("#000")
    .list([
      "Delivered emergency medical care in time-critical environments.",
      "Performed rapid assessment, diagnosis, and stabilization.",
      "Collaborated with multi-disciplinary teams.",
      "Documented complex medical events with precision.",
      "Applied strong decision-making, empathy, leadership.",
    ]);
  doc.moveDown(1.5);

  // EDUCATION
  mainHeading(doc, "Education");

  doc
    .fontSize(12)
    .fillColor("#333")
    .text("TripleTen Software Engineering Program — 2024");
  doc
    .fontSize(10)
    .text("Full-stack program focused on modern JavaScript technologies.");
  doc.moveDown(1);

  doc
    .fontSize(12)
    .fillColor("#333")
    .text("NYC EMS Academy — Paramedic Certification");

  // CERTIFICATIONS
  mainHeading(doc, "Certifications");
  doc
    .fontSize(11)
    .list([
      "State-Certified Paramedic",
      "CPR / AED / BLS",
      "ITLS Trauma Life Support",
      "Emergency Vehicle Operations",
    ]);

  doc.end();
  /**
   * Build ATS-Optimized Resume (no colors, no columns)
   */
  exports.buildATSResume = (res) => {
    const doc = new PDFDocument({
      margin: 50,
      size: "LETTER",
    });

    doc.pipe(res);

    // ---- NAME HEADER ----
    doc
      .font("Helvetica-Bold")
      .fontSize(24)
      .fillColor("#000")
      .text("Gisell Tavarez");

    doc
      .font("Helvetica")
      .fontSize(12)
      .text("Full-Stack Software Engineer | Paramedic", { lineGap: 2 });

    doc
      .fontSize(10)
      .text("New York, NY • tavarezgisell@gmail.com • github.com/GTavarez", {
        lineGap: 2,
      });

    doc.moveDown(1.2);

    // ---- SUMMARY ----
    doc.font("Helvetica-Bold").fontSize(14).text("Summary");
    doc.moveDown(0.4);

    doc
      .font("Helvetica")
      .fontSize(11)
      .text(
        "Full-stack software engineer with a paramedic background, specializing in JavaScript, React, Node.js, Express, and MongoDB. Skilled in building production-ready APIs, UI components, and full-stack applications. Known for calm problem-solving, rapid learning, and disciplined execution."
      );

    doc.moveDown(1.2);

    // ---- SKILLS ----
    doc.font("Helvetica-Bold").fontSize(14).text("Technical Skills");
    doc.moveDown(0.4);

    doc
      .font("Helvetica")
      .fontSize(11)
      .text(
        "Languages: JavaScript (ES6+)\n" +
          "Frontend: React, Zustand, Axios, CSS Modules, Responsive UI\n" +
          "Backend: Node.js, Express, REST APIs, JWT Auth, MongoDB\n" +
          "Tools: Git, GitHub, Postman, Cloud Run, PDFKit, Figma"
      );

    doc.moveDown(1.2);

    // ---- SOFTWARE PROJECTS ----
    doc.font("Helvetica-Bold").fontSize(14).text("Software Projects");
    doc.moveDown(0.4);

    const projects = [
      {
        title: "Homeland Project",
        link: "github.com/GTavarez/homeland-project",
        desc: "Full-stack MERN application featuring modern UI, secure routing, and RESTful architecture.",
      },
      {
        title: "WTWR — React Application",
        link: "github.com/GTavarez/se_project_react",
        desc: "Built dynamic UI components, user profiles, and weather-based recommendation features.",
      },
      {
        title: "WTWR Backend (Express)",
        link: "github.com/GTavarez/se_project_express",
        desc: "Developed authentication, routing, validation, and database modeling.",
      },
      {
        title: "Decluttr (Frontend)",
        link: "github.com/RyBCreates/decluttr",
        desc: "Collaborative MERN app with reusable components and global state management.",
      },
      {
        title: "Decluttr Backend",
        link: "github.com/RyBCreates/decluttr-backend",
        desc: "CRUD routes, controllers, authentication, and clean API structure.",
      },
    ];

    projects.forEach((p) => {
      doc.font("Helvetica-Bold").fontSize(12).text(p.title);
      doc.font("Helvetica").fontSize(10).text(p.link);
      doc.moveDown(0.3);
      doc.font("Helvetica").fontSize(11).text(p.desc);
      doc.moveDown(0.9);
    });

    // ---- WORK EXPERIENCE ----
    doc.font("Helvetica-Bold").fontSize(14).text("Paramedic Experience");
    doc.moveDown(0.4);

    doc.font("Helvetica").fontSize(12).text("Paramedic — 2018–Present");
    doc.moveDown(0.3);

    doc
      .font("Helvetica")
      .fontSize(11)
      .list([
        "Delivered emergency medical care in high-pressure environments.",
        "Performed rapid assessment, diagnosis, and stabilization.",
        "Collaborated with multi-disciplinary teams.",
        "Documented complex medical events with accuracy and clarity.",
        "Strong communication, problem-solving, and leadership skills.",
      ]);

    doc.moveDown(1.2);

    // ---- EDUCATION ----
    doc.font("Helvetica-Bold").fontSize(14).text("Education");
    doc.moveDown(0.4);

    doc
      .font("Helvetica")
      .fontSize(12)
      .text("TripleTen Software Engineering Program (2024)");
    doc.fontSize(11).text("Full-stack JavaScript development specialization.");
    doc.moveDown(0.6);

    doc
      .font("Helvetica")
      .fontSize(12)
      .text("NYC EMS Academy — Paramedic Certification");

    doc.end();
  };
};
