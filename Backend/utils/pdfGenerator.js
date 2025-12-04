const PDFDocument = require("pdfkit");

// -----------------------------------------------------
// 🎨 GLOBAL STYLES
// -----------------------------------------------------
const COLORS = {
  primary: "#6B4EFF",
  textDark: "#111",
  text: "#333",
  subtle: "#666",
  line: "#CCCCCC",
};

// Draws a subtle divider line
function divider(doc, space = 12) {
  doc.moveDown(0.3);
  doc
    .strokeColor(COLORS.line)
    .lineWidth(1)
    .moveTo(40, doc.y)
    .lineTo(570, doc.y)
    .stroke();
  doc.moveDown(space / 12);
}

// Section Header (Consistent Style)
function sectionHeader(doc, title) {
  doc.moveDown(1);
  doc
    .fontSize(14)
    .fillColor(COLORS.primary)
    .text(title.toUpperCase(), { underline: false });
  doc.moveDown(0.4);
}

// Job Formatting Helper
function addJob(doc, company, role, dates, bullets = []) {
  doc
    .fontSize(12)
    .fillColor(COLORS.textDark)
    .text(role, { continued: true })
    .font("Helvetica-Oblique")
    .text(` — ${company}`);
  doc.font("Helvetica").fontSize(10).fillColor(COLORS.subtle).text(dates);

  bullets.forEach((b) => {
    doc.fontSize(10).fillColor(COLORS.text).text(`• ${b}`);
  });
  doc.moveDown();
}

// ATS Job Formatting
function addJobATS(doc, title, dates, bullets = []) {
  doc.fontSize(11).fillColor(COLORS.textDark).text(title);
  doc.fontSize(9).fillColor(COLORS.subtle).text(dates);
  bullets.forEach((b) => doc.fontSize(9).fillColor(COLORS.text).text(`• ${b}`));
  doc.moveDown();
}

// -----------------------------------------------------
// 🎨 PORTFOLIO RESUME (MODERN, STYLED)
// -----------------------------------------------------
exports.buildPortfolioResume = (res) => {
  const doc = new PDFDocument({ margin: 40 });

  // ===== HEADER =====
  doc
    .fontSize(28)
    .fillColor(COLORS.primary)
    .text("GISELL TAVAREZ", { align: "center" });
  doc.moveDown(0.2);
  doc
    .fontSize(14)
    .fillColor(COLORS.textDark)
    .text("Full-Stack Software Engineer • Paramedic", { align: "center" });

  doc
    .fontSize(11)
    .fillColor(COLORS.subtle)
    .text("Elmwood Park, NJ • 347-296-7424 • Giselltavarez@gmail.com", {
      align: "center",
    });
  divider(doc);

  // ===== SUMMARY =====
  sectionHeader(doc, "Summary");
  doc
    .fontSize(11)
    .fillColor(COLORS.text)
    .text(
      `Excellent communication, organizational, and multitasking skills. Strong background in healthcare, emergency medical response, bilingual communication, and software engineering.`
    );

  divider(doc);

  // ===== EXPERIENCE =====
  sectionHeader(doc, "Professional Experience");

  addJob(
    doc,
    "Hackensack Meridian Health – Hackensack, NJ",
    "Paramedic",
    "Jan 2022 – Present",
    [
      "Provide advanced pre-hospital and intra-hospital emergency care.",
      "Assess patient conditions and determine critical medical interventions.",
      "Communicate treatment needs and patient updates to hospital staff.",
      "Stabilize and transport patients using advanced life support protocols.",
    ]
  );

  addJob(
    doc,
    "Pulse Medical Transportation – Woodland Park, NJ",
    "Emergency Medical Technician",
    "Jun 2019 – Jan 2022",
    [
      "Responded to emergency calls and conducted patient assessments.",
      "Identified critical issues through physical examinations.",
      "Monitored conditions and communicated changes effectively.",
      "Ensured emergency vehicles were stocked and operational.",
    ]
  );

  addJob(
    doc,
    "Kearny EMS – Kearny, NJ",
    "Emergency Medical Technician",
    "Sep 2017 – Jan 2018",
    [
      "Performed emergency patient assessments.",
      "Identified urgent medical conditions quickly.",
      "Ensured readiness of medical equipment and ambulance units.",
    ]
  );

  addJob(
    doc,
    "Aero Ambulance Services LLC – Hackensack, NJ",
    "Emergency Medical Technician",
    "May 2017 – Nov 2019",
    [
      "Conducted emergency patient assessments and revised care plans.",
      "Observed changes in patient conditions and communicated findings.",
      "Maintained and stocked emergency equipment.",
    ]
  );

  addJob(
    doc,
    "Integrated Translation Services LLC – Union, NJ",
    "Medical Interpreter",
    "Jan 2017 – Aug 2017",
    [
      "Provided accurate English-Spanish interpretation for medical cases.",
      "Prepared and translated documents confidentially.",
      "Maintained quality service following ethical guidelines.",
    ]
  );

  divider(doc);

  // ===== EDUCATION =====
  sectionHeader(doc, "Education");
  doc
    .fontSize(11)
    .text("• A.S. Science — Borough Manhattan Community College (2013–2015)");
  doc.text("• A.S. Medical Assistant — Kaplan University (2016–2018)");
  doc.text(
    "• Paramedic Science Program — Bergen Community College (2020–2021)"
  );
  doc.text("• B.S. Biochemistry — Montclair State University (2021–Present)");

  divider(doc);

  // ===== CERTIFICATIONS =====
  sectionHeader(doc, "Certifications");
  doc.fontSize(11).text("ACLS • ASLS • CEVO • PHTLS • PALS");
  divider(doc);
  sectionHeader(doc, "Projects");

  addProject(
    doc,
    "Homeland Project",
    "https://github.com/GTavarez/homeland-project",
    "Full-stack apartment listing platform with real-estate style UI, filtering, and secure backend.",
    "React, Node.js, Express, MongoDB, JWT",
    [
      "Built secure backend API with JWT authentication.",
      "Implemented responsive UI and reusable components.",
      "Designed MongoDB schemas for housing listings and users.",
      "Added dynamic filters for bedrooms, prices, and location.",
    ]
  );

  addProject(
    doc,
    "SE Project React",
    "https://github.com/GTavarez/se_project_react",
    "Responsive React front-end with modular components and integrated REST API calls.",
    "React, Context API, Hooks, CSS Modules",
    [
      "Implemented login flow with validation.",
      "Built reusable components for maintainability.",
      "Integrated API calls with error handling.",
    ]
  );

  addProject(
    doc,
    "SE Project Express",
    "https://github.com/GTavarez/se_project_express",
    "Backend Express API supporting authentication and CRUD operations.",
    "Node.js, Express, MongoDB",
    [
      "Created RESTful routes for user and item management.",
      "Added middleware for validation and error handling.",
      "Wrote modular controllers for scalability.",
    ]
  );

  addProject(
    doc,
    "Decluttr (Frontend)",
    "https://github.com/RyBCreates/decluttr",
    "Front-end UI for productivity/organization app with category and task management.",
    "React, JavaScript",
    [
      "Designed intuitive UI and layout.",
      "Integrated API calls with loading/error states.",
      "Built reusable UI components.",
    ]
  );

  addProject(
    doc,
    "Decluttr Backend",
    "https://github.com/RyBCreates/decluttr-backend",
    "Node.js API powering task and category logic for Decluttr app.",
    "Node.js, Express, MongoDB",
    [
      "Created CRUD endpoints for items and categories.",
      "Added validation and security middleware.",
      "Designed scalable server architecture.",
    ]
  );

  doc.pipe(res);
  doc.end();
};

// -----------------------------------------------------
// ⚙️ ATS RESUME (Optimized for Applicant Tracking Systems)
// -----------------------------------------------------
exports.buildATSResume = (res) => {
  const doc = new PDFDocument({ margin: 40 });

  doc.fontSize(22).fillColor(COLORS.textDark).text("GISELL TAVAREZ");
  doc
    .fontSize(10)
    .fillColor(COLORS.text)
    .text("Elmwood Park, NJ | 347-296-7424 | Giselltavarez@gmail.com");
  divider(doc);

  sectionHeader(doc, "Summary");
  doc
    .fontSize(10)
    .fillColor(COLORS.text)
    .text(
      "Paramedic and Software Engineer with proven experience in emergency medical response, patient assessment, critical care, bilingual communication, multitasking, and technical problem solving."
    );

  divider(doc);

  sectionHeader(doc, "Skills");
  doc.fontSize(10).text(
    `Emergency Medical Response, BLS, ACLS, PALS, Patient Assessment,
Medical Documentation, Critical Care Communication, Microsoft Office,
React, Node.js, MongoDB, REST APIs`
  );
  divider(doc);

  sectionHeader(doc, "Experience");

  addJobATS(doc, "Paramedic — Hackensack Meridian Health", "2022 – Present", [
    "Provide advanced life support (ALS) and emergency treatment.",
    "Perform rapid assessments and document patient conditions.",
    "Coordinate care and communication with hospital teams.",
  ]);

  addJobATS(
    doc,
    "Emergency Medical Technician — Pulse Medical Transportation",
    "2019 – 2022",
    [
      "Responded to emergency calls and provided basic life support.",
      "Conducted patient assessments and documented findings.",
      "Maintained readiness of medical equipment and vehicles.",
    ]
  );

  addJobATS(doc, "EMT — Aero Ambulance Services & Kearny EMS", "2017 – 2019", [
    "Assessed and transported patients safely.",
    "Observed and communicated changes in patient conditions.",
    "Prepared emergency units and equipment for deployment.",
  ]);

  divider(doc);

  sectionHeader(doc, "Education");
  doc.fontSize(10).text("A.S. Science — Borough Manhattan Community College");
  doc.text("A.S. Medical Assistant — Kaplan University");
  doc.text("Paramedic Science — Bergen Community College");
  doc.text("B.S. Biochemistry — Montclair State University");

  divider(doc);

  sectionHeader(doc, "Certifications");
  doc.fontSize(10).text("ACLS, ASLS, CEVO, PHTLS, PALS");
  //---------------------------------------------
  // PROJECTS SECTION (ATS Resume)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(18).text("Projects");
  doc.moveDown(0.7);

  // Helper for ATS format
  function atsProject(title, link, stack, bullets) {
    doc.fontSize(14).text(title);
    doc.fontSize(10).text(link);
    doc.fontSize(11).text(`Tech: ${stack}`);
    bullets.forEach((b) => doc.fontSize(11).text(`• ${b}`));
    doc.moveDown(0.7);
  }

  // ---------------- PROJECTS -----------------

  atsProject(
    "Homeland Project",
    "https://github.com/GTavarez/homeland-project",
    "React, Node.js, Express, MongoDB, JWT, REST API",
    [
      "Built full-stack apartment listing platform with authentication.",
      "Developed Express REST API with CRUD operations.",
      "Integrated MongoDB schemas and optimized query performance.",
      "Designed responsive UI in React with reusable components.",
    ]
  );

  atsProject(
    "se_project_react",
    "https://github.com/GTavarez/se_project_react",
    "React, REST API, JSX, CSS Modules",
    [
      "Developed reusable React components and modular pages.",
      "Implemented API calls with async request handling.",
      "Improved UI/UX with modern layout and clean styling.",
    ]
  );

  atsProject(
    "se_project_express",
    "https://github.com/GTavarez/se_project_express",
    "Node.js, Express, MongoDB, API Design",
    [
      "Engineered backend API with controllers and routes.",
      "Implemented schema validation and error handling.",
      "Designed secure data storage using MongoDB models.",
    ]
  );

  atsProject(
    "Decluttr Frontend",
    "https://github.com/RyBCreates/decluttr",
    "React, Zustand, REST API",
    [
      "Implemented global state management with Zustand.",
      "Integrated backend API for data-driven UI.",
      "Created responsive UI components and workflows.",
    ]
  );

  atsProject(
    "Decluttr Backend",
    "https://github.com/RyBCreates/decluttr-backend",
    "Node.js, Express, MongoDB",
    [
      "Developed REST API powering task and user operations.",
      "Created secure schema models with validation.",
      "Implemented structured controllers with async safety.",
    ]
  );

  doc.pipe(res);
  doc.end();
};

// -----------------------------------------------------
// 🟦 SIMPLE RESUME (Clean + Readable)
// -----------------------------------------------------
exports.buildSimpleResume = (res) => {
  const doc = new PDFDocument({ margin: 40 });

  doc.fontSize(24).text("GISELL TAVAREZ");
  doc
    .fontSize(11)
    .text("Elmwood Park, NJ • 347-296-7424 • Giselltavarez@gmail.com");
  divider(doc);

  sectionHeader(doc, "Summary");
  doc
    .fontSize(11)
    .text(
      "Dedicated Paramedic and Software Engineer with strong communication skills and emergency medical training."
    );

  divider(doc);

  sectionHeader(doc, "Experience");
  doc
    .fontSize(11)
    .text("• Paramedic — Hackensack Meridian Health (2022–Present)");
  doc.text("• EMT — Pulse Medical Transportation (2019–2022)");
  doc.text("• EMT — Aero Ambulance Services (2017–2019)");
  doc.text("• EMT — Kearny EMS (2017–2018)");
  doc.text("• Interpreter — Integrated Translation Services (2017)");
  divider(doc);

  sectionHeader(doc, "Education");
  doc.text("• A.S. Science — Borough Manhattan Community College");
  doc.text("• A.S. Medical Assistant — Kaplan University");
  doc.text("• Paramedic Science — Bergen Community College");
  doc.text("• B.S. Biochemistry — Montclair State University");
  divider(doc);

  sectionHeader(doc, "Certifications");
  doc.text("ACLS • ASLS • CEVO • PHTLS • PALS");
  //---------------------------------------------
  // PROJECTS SECTION (Simple Resume)
  //---------------------------------------------
  doc.addPage();
  doc.fontSize(20).text("Projects");
  doc.moveDown(1);

  function project(title, stack, bullets) {
    doc.fontSize(14).text(title);
    doc.fontSize(11).text(`Tech: ${stack}`);
    bullets.forEach((b) => doc.fontSize(11).text(`• ${b}`));
    doc.moveDown(0.8);
  }

  // ---------------- PROJECTS -----------------

  project("Homeland Project", "React, Node.js, Express, MongoDB", [
    "Built full-stack listing platform with filters and login.",
    "Created backend API and data models.",
    "Designed responsive React UI.",
  ]);

  project("se_project_react", "React, REST API", [
    "Developed modular components and UI screens.",
    "Integrated API and state management.",
    "Improved responsiveness and UX.",
  ]);

  project("se_project_express", "Node.js, Express, MongoDB", [
    "Engineered backend CRUD API.",
    "Set up routing, controllers, and validation.",
    "Built MongoDB models for structured data.",
  ]);

  project("Decluttr Frontend", "React, Zustand", [
    "Implemented global state for tasks.",
    "Integrated backend API calls.",
    "Improved UI flows.",
  ]);

  project("Decluttr Backend", "Node.js, Express", [
    "Built task + user API.",
    "Implemented secure schemas.",
    "Added error-safe routes.",
  ]);

  doc.pipe(res);
  doc.end();
};
