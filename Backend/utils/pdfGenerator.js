const PDFDocument = require("pdfkit");
const QRCode = require("qrcode");

function sidebarHeading(doc, text) {
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor("#FFFFFF")
    .text(text.toUpperCase(), { align: "left" });
  doc.moveDown(0.3);
}

function mainHeading(doc, text) {
  doc
    .font("Helvetica-Bold")
    .fontSize(18)
    .fillColor("#6B4EFF")
    .text(text, { align: "left" });
  doc.moveDown(0.6);
}

function subHeading(doc, text) {
  doc
    .font("Helvetica-Bold")
    .fontSize(13)
    .fillColor("#333333")
    .text(text, { align: "left" });
  doc.moveDown(0.2);
}

/**
 * PORTFOLIO RESUME
 * Modern, sidebar layout with color
 */
exports.buildPortfolioResume = (res) => {
  const doc = new PDFDocument({ margin: 0, size: "LETTER" });

  doc.pipe(res);

  const sidebarWidth = 180;
  const pageHeight = doc.page.height;

  // --- Sidebar background ---
  doc.rect(0, 0, sidebarWidth, pageHeight).fill("#6B4EFF");

  // Move cursor into sidebar padding
  doc.fillColor("#FFFFFF").font("Helvetica");
  doc.x = 22;
  doc.y = 40;

  // Name & title
  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .text("Gisell Tavarez", { width: sidebarWidth - 40 });
  doc.moveDown(0.3);

  doc
    .font("Helvetica")
    .fontSize(11)
    .text("Full-Stack Software Engineer | Paramedic", {
      width: sidebarWidth - 40,
    });
  doc.moveDown(1.1);

  // Contact
  sidebarHeading(doc, "Contact");
  doc
    .font("Helvetica")
    .fontSize(10)
    .text("West Milford, NJ")
    .text("📞 862-346-4913")
    .text("✉️  giselltavarez@gmail.com")
    .text("GitHub: github.com/GTavarez", {
      link: "https://github.com/GTavarez",
      underline: false,
    })
    .text("LinkedIn: /in/gisell-tavarez-21288b247/", {
      link: "https://www.linkedin.com/in/gisell-tavarez-21288b247/",
      underline: false,
    });
  doc.moveDown(1);

  // Skills
  sidebarHeading(doc, "Technical");
  doc
    .fontSize(10)
    .text(
      "JavaScript (ES6+)\n" +
        "React • Node.js • Express\n" +
        "MongoDB / Mongoose\n" +
        "REST APIs • JWT Auth\n" +
        "CSS Modules • Responsive UI\n" +
        "Chart.js • PDFKit"
    );
  doc.moveDown(1);

  // Tools
  sidebarHeading(doc, "Tools");
  doc
    .fontSize(10)
    .text(
      "Git & GitHub\n" +
        "Postman\n" +
        "VS Code\n" +
        "MongoDB Compass\n" +
        "Figma\n" +
        "Cloud Run"
    );
  doc.moveDown(1);

  // Education
  sidebarHeading(doc, "Education");
  doc
    .fontSize(10)
    .text("TripleTen Software Engineering Program (2025)")
    .moveDown(0.3)
    .text("Bergen Community College — Paramedic Certification");
  doc.moveDown(1);

  // Certifications
  sidebarHeading(doc, "Certifications");
  doc
    .fontSize(10)
    .text("State-Certified Paramedic")
    .text("BLS, ACLS, PALS")
    .text("ITLS Trauma Life Support");

  // --- Main column on right ---
  doc.fillColor("#000000");
  doc.x = sidebarWidth + 40;
  doc.y = 40;

  // Summary / Transition
  mainHeading(doc, "Paramedic → Software Engineer Transition");
  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor("#333333")
    .text(
      "Full-stack software engineer with seven years of paramedic experience, bringing calm execution, rapid assessment, and clear communication into engineering. " +
        "Comfortable diagnosing complex problems, collaborating across disciplines, and delivering reliable solutions under pressure."
    );
  doc.moveDown(0.6);
  doc.text(
    "In medicine I learned to assess, stabilize, solve, and communicate — the same mindset I apply to building APIs, debugging systems, and shipping user-facing features."
  );
  doc.moveDown(1.0);

  // Software Engineering section
  mainHeading(doc, "Software Engineering");

  subHeading(doc, "Technical Skills");
  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor("#333333")
    .text(
      "JavaScript (ES6+), React, Node.js, Express, MongoDB, REST APIs, JWT authentication, Axios, Zustand, CSS Modules, Responsive Design, Google Calendar API, Google Maps API, Chart.js, PDFKit, Git & GitHub."
    );
  doc.moveDown(0.8);

  subHeading(doc, "Frontend Engineering");
  doc
    .fontSize(11)
    .text(
      "Builds responsive, component-based UIs in React with clean state management, reusable patterns, and attention to accessibility and UX. " +
        "Comfortable working from Figma mockups, implementing animations, and integrating data-driven dashboards."
    );
  doc.moveDown(0.6);

  subHeading(doc, "Backend Engineering");
  doc
    .fontSize(11)
    .text(
      "Designs and implements RESTful APIs using Node.js and Express with controller/service structure, validation, authentication, and MongoDB data modeling. " +
        "Experienced with error handling, logging, and API integration with third-party services."
    );
  doc.moveDown(0.6);

  // Projects
  mainHeading(doc, "Featured Projects");

  const projects = [
    {
      title: "HuskiesHub — Full-Stack Sports Management Platform",
      tech: "React, Node.js, Express, MongoDB, Google Calendar API, Google Maps API, GridFS",
      bullets: [
        "Built a platform for the Empire State Huskies softball organization with player profiles, schedules, clinics, and college commits.",
        "Integrated Google Calendar API for real-time schedule syncing and Google Maps API for field and facility locations.",
        "Implemented image hosting using MongoDB GridFS with secure Express routes and custom controllers.",
      ],
      link: "https://github.com/GTavarez/HuskiesHub-Frontend",
    },
    {
      title: "Smart Budget Planner — Data-Informed Budgeting Web App",
      tech: "React, Node.js, Express, Chart.js, GeoIP API",
      bullets: [
        "Developed interactive dashboards with category and monthly breakdown charts using Chart.js.",
        "Implemented GeoIP-based country detection to adjust spending benchmarks by region.",
        "Designed a clean, card-based UI focused on clarity, accessibility, and responsive layout.",
      ],
      link: "https://github.com/GTavarez/SmartBudgetPlanner",
    },
    {
      title: "Homeland Project — MERN Full-Stack Application",
      tech: "React, Node.js, Express, MongoDB",
      bullets: [
        "Built a full-stack app with modern UI, secure routing, and RESTful API architecture.",
        "Structured frontend into reusable components with clear separation of concerns.",
      ],
      link: "https://github.com/GTavarez/homeland-project",
    },
    {
      title: "WTWR (What To Wear?) — React Frontend",
      tech: "React, REST APIs",
      bullets: [
        "Implemented weather-based outfit recommendations, dynamic components, and user profile screens.",
        "Handled API-driven UI flows, routing, and state updates in a modular React architecture.",
      ],
      link: "https://github.com/GTavarez/se_project_react",
    },
    {
      title: "WTWR — Express Backend",
      tech: "Node.js, Express, MongoDB",
      bullets: [
        "Developed backend with authentication, validation, and routing for user and clothing item resources.",
        "Implemented robust error handling and data modeling using Mongoose.",
      ],
      link: "https://github.com/GTavarez/se_project_express",
    },
    {
      title: "Decluttr — Collaborative MERN Application (Frontend & Backend)",
      tech: "React, Node.js, Express, MongoDB",
      bullets: [
        "Worked on a team to build a decluttering and item-organization platform using the MERN stack.",
        "Implemented reusable UI components, CRUD flows, and authentication on the backend.",
      ],
      link: "https://github.com/RyBCreates/decluttr",
    },
  ];

  projects.forEach((p) => {
    subHeading(doc, p.title);
    doc
      .font("Helvetica-Oblique")
      .fontSize(10)
      .fillColor("#555555")
      .text(p.tech);
    if (p.link) {
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor("#6B4EFF")
        .text(p.link, {
          link: `https://${p.link.replace(/^https?:\/\//, "")}`,
        });
    }
    doc.moveDown(0.2);
    doc
      .font("Helvetica")
      .fontSize(11)
      .fillColor("#333333")
      .list(p.bullets, { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 });
    doc.moveDown(0.6);

    // If near bottom, add new page and reset x/y
    if (doc.y > pageHeight - 120) {
      doc.addPage();
      doc.x = sidebarWidth + 40;
      doc.y = 40;
    }
  });

  // New page for Paramedic experience if needed
  if (doc.y > pageHeight - 160) {
    doc.addPage();
    doc.x = sidebarWidth + 40;
    doc.y = 40;
  }
  // Volunteer Experience
  mainHeading(doc, "Volunteer Experience");

  subHeading(doc, "Full-Stack Engineer — Murphy Foundation (Uganda)");
  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor("#333333")
    .list(
      [
        "Contributed to the development of digital learning and community support tools for underserved regions.",
        "Collaborated remotely with global engineering teams to build and refine full‑stack features.",
        "Improved UI/UX accessibility for non-technical users across multiple modules.",
        "Enhanced backend documentation, structure, and maintainability.",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );
  doc.moveDown(1);

  mainHeading(doc, "Paramedic Experience");
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .fillColor("#333333")
    .text("Paramedic — 2018–Present");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor("#333333")
    .list(
      [
        "Delivered high-acuity emergency medical care across diverse patient populations in time-critical environments.",
        "Performed rapid assessment, diagnosis, and stabilization under pressure while communicating clearly with patients and families.",
        "Collaborated with multi-disciplinary teams including nurses, physicians, firefighters, and law enforcement.",
        "Documented complex medical events with precise, structured reporting and attention to detail.",
        "Developed strong leadership, empathy, and problem-solving skills in unpredictable situations.",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );
  // --- QR Code (Portfolio Link) ---
  QRCode.toDataURL("https://giselltavarez.dev", { margin: 1 }, (err, url) => {
    if (!err) {
      const qr = url.replace(/^data:image\/png;base64,/, "");
      const buffer = Buffer.from(qr, "base64");

      doc.addPage();
      doc.x = 40;
      doc.y = 60;

      doc
        .font("Helvetica-Bold")
        .fontSize(18)
        .fillColor("#6B4EFF")
        .text("View My Portfolio", { align: "left" });

      doc.moveDown(0.5);

      doc
        .font("Helvetica")
        .fontSize(12)
        .fillColor("#333")
        .text(
          "Scan this QR code to explore my full projects, resume, contact, and more.",
          { align: "left", width: 350 }
        );

      doc.image(buffer, 40, doc.y + 10, { width: 140 });
    }

    doc.end();
  });

  doc.end();
};

/**
 * ATS-OPTIMIZED RESUME
 * Single column, B&W, keyword rich
 */
exports.buildATSResume = (res) => {
  const doc = new PDFDocument({ margin: 50, size: "LETTER" });
  doc.pipe(res);

  // Header
  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .fillColor("#000000")
    .text("Gisell Tavarez");
  doc
    .font("Helvetica")
    .fontSize(11)
    .text("Full-Stack Software Engineer | Paramedic");
  doc
    .fontSize(10)
    .text("West Milford, NJ | 862-346-4913 | giselltavarez@gmail.com");
  doc.text(
    "GitHub: github.com/GTavarez | LinkedIn: linkedin.com/in/gisell-tavarez-21288b247/"
  );
  doc.moveDown(1);

  // Summary
  doc.font("Helvetica-Bold").fontSize(13).text("Summary");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor("#000000")
    .text(
      "Full-stack software engineer with a paramedic background specializing in JavaScript, React, Node.js, Express, and MongoDB. " +
        "Experienced in building REST APIs, UI components, and full-stack applications. Known for calm problem-solving, rapid learning, and disciplined execution in high-pressure environments."
    );
  doc.moveDown(0.8);

  // Skills
  doc.font("Helvetica-Bold").fontSize(13).text("Technical Skills");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .text(
      "Languages: JavaScript (ES6+)\n" +
        "Frontend: React, Axios, Zustand, CSS Modules, Responsive UI, Chart.js\n" +
        "Backend: Node.js, Express, REST APIs, JWT authentication, MongoDB / Mongoose\n" +
        "Tools & Platforms: Git, GitHub, Postman, Cloud Run, PDFKit, Figma\n" +
        "APIs: Google Calendar API, Google Maps API, GeoIP APIs"
    );
  doc.moveDown(0.8);

  // Software Projects
  doc.font("Helvetica-Bold").fontSize(13).text("Software Projects");
  doc.moveDown(0.2);

  const atsProjects = [
    {
      title: "HuskiesHub — Full-Stack Sports Management Platform",
      stack:
        "React, Node.js, Express, MongoDB, Google Calendar API, Google Maps API, GridFS",
      bullets: [
        "Built a platform for a softball organization with player profiles, schedules, clinics, and admin tools.",
        "Integrated Google Calendar API and Google Maps API for real-time events and locations.",
        "Implemented image hosting using MongoDB GridFS and secure Express routes.",
      ],
    },
    {
      title: "Smart Budget Planner — Financial Tracking Web App",
      stack: "React, Node.js, Express, Chart.js, GeoIP API",
      bullets: [
        "Developed dashboards with spending visualizations and category breakdown charts.",
        "Implemented GeoIP-based country detection and region-specific budget benchmarks.",
        "Designed a responsive, minimalist UI focused on clarity and quick scanning.",
      ],
    },
    {
      title: "Homeland Project — MERN Full-Stack Application",
      stack: "React, Node.js, Express, MongoDB",
      bullets: [
        "Implemented a full-stack MERN app with modern UI, protected routes, and RESTful APIs.",
        "Structured backend controllers and routes with clear separation of concerns.",
      ],
    },
    {
      title: "WTWR — React Frontend & Express Backend",
      stack: "React, Node.js, Express, MongoDB",
      bullets: [
        "Frontend: Built weather-driven clothing recommendation UI and user profile features.",
        "Backend: Implemented authentication, CRUD routes, validation, and data modeling.",
      ],
    },
    {
      title: "Decluttr — MERN Application",
      stack: "React, Node.js, Express, MongoDB",
      bullets: [
        "Collaborated on a full-stack decluttering app with reusable React components and global state.",
        "Implemented backend CRUD endpoints and authentication for user and item management.",
      ],
    },
  ];

  atsProjects.forEach((p) => {
    doc.font("Helvetica-Bold").fontSize(12).text(p.title);
    doc.font("Helvetica-Oblique").fontSize(10).text(p.stack);
    doc.moveDown(0.2);
    doc
      .font("Helvetica")
      .fontSize(11)
      .list(p.bullets, { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 });
    doc.moveDown(0.6);
  });
  // Volunteer Experience
  doc.font("Helvetica-Bold").fontSize(13).text("Volunteer Experience");
  doc.moveDown(0.2);

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .text("Full-Stack Engineer — Murphy Foundation (Uganda)");
  doc
    .font("Helvetica")
    .fontSize(11)
    .list(
      [
        "Support development of digital tools for underserved communities in Uganda.",
        "Contribute to full‑stack feature development using React, Node, Express, and MongoDB.",
        "Improve UX accessibility and workflow clarity for non‑technical users.",
        "Enhance backend reliability, organization, and documentation.",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );
  doc.moveDown(1);

  // Experience
  doc.font("Helvetica-Bold").fontSize(13).text("Professional Experience");
  doc.moveDown(0.2);
  doc.font("Helvetica-Bold").fontSize(12).text("Paramedic — 2018–Present");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .list(
      [
        "Deliver emergency medical care in high-pressure, time-sensitive environments.",
        "Perform rapid assessment, diagnosis, and stabilization while maintaining clear communication.",
        "Collaborate with multi-disciplinary healthcare and public safety teams.",
        "Document cases with precise, structured reports and strong attention to detail.",
        "Apply calm, data-informed decision-making and empathy to complex situations.",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );
  doc.moveDown(0.8);

  // Education & Certifications
  doc.font("Helvetica-Bold").fontSize(13).text("Education");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .text(
      "TripleTen Software Engineering Program (2024) — Full-Stack JavaScript"
    );
  doc.fontSize(11).text("NYC EMS Academy — Paramedic Certification");
  doc.moveDown(0.6);

  doc.font("Helvetica-Bold").fontSize(13).text("Certifications");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .list(
      [
        "State-Certified Paramedic",
        "Basic Life Support (BLS)",
        "Advanced Cardiac Life Support (ACLS)",
        "Pediatric Advanced Life Support (PALS)",
        "ITLS Trauma Life Support",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );

  doc.end();
};

/**
 * SIMPLE RESUME
 * Clean, minimal layout
 */
exports.buildSimpleResume = (res) => {
  const doc = new PDFDocument({ margin: 50, size: "LETTER" });
  doc.pipe(res);

  // Header
  doc
    .font("Helvetica-Bold")
    .fontSize(22)
    .fillColor("#000000")
    .text("Gisell Tavarez");
  doc
    .font("Helvetica")
    .fontSize(11)
    .text("Full-Stack Software Engineer | Paramedic");
  doc
    .fontSize(10)
    .text("West Milford, NJ • 862-346-4913 • giselltavarez@gmail.com");
  doc.text(
    "GitHub: github.com/GTavarez • LinkedIn: linkedin.com/in/gisell-tavarez-21288b247/"
  );
  doc.moveDown(1);

  // Summary
  doc.font("Helvetica-Bold").fontSize(13).text("Professional Summary");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .text(
      "Full-stack software engineer skilled in JavaScript, React, Node.js, Express, and MongoDB with a background as a paramedic. " +
        "Experienced in building user-friendly UIs, REST APIs, and full-stack applications. " +
        "Brings strong communication, teamwork, and problem-solving from emergency medicine into engineering."
    );
  doc.moveDown(0.8);

  // Skills
  doc.font("Helvetica-Bold").fontSize(13).text("Technical Skills");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .text(
      "JavaScript (ES6+), React, Node.js, Express, MongoDB, REST APIs, JWT authentication, Axios, Zustand, CSS Modules, Responsive Design, Chart.js, PDFKit, Git & GitHub, Google Calendar API, Google Maps API"
    );
  doc.moveDown(0.8);

  // Projects (simplified)
  doc.font("Helvetica-Bold").fontSize(13).text("Projects");
  doc.moveDown(0.2);

  const simpleProjects = [
    {
      title: "HuskiesHub — Full-Stack Sports Management Platform",
      desc: "Platform for a softball organization with schedules, player profiles, clinics, and admin tools using React, Node.js, Express, MongoDB, and Google APIs.",
    },
    {
      title: "Smart Budget Planner — Financial Tracking Web App",
      desc: "Budgeting app with charts, category tracking, and GeoIP-based country benchmarks using React, Node.js, Express, and Chart.js.",
    },
    {
      title: "Homeland Project — MERN Application",
      desc: "Full-stack MERN app with secure routing, modern UI, and REST APIs.",
    },
    {
      title: "WTWR — React & Express",
      desc: "Frontend and backend for a clothing recommendation app using weather data, with authentication, CRUD, and dynamic UI.",
    },
    {
      title: "Decluttr — MERN Application",
      desc: "Collaborative app for organizing items, built with React, Node.js, Express, and MongoDB.",
    },
  ];

  simpleProjects.forEach((p) => {
    doc.font("Helvetica-Bold").fontSize(12).text(p.title);
    doc.font("Helvetica").fontSize(11).text(p.desc, { indent: 10 });
    doc.moveDown(0.6);
  });
  // Volunteer Experience
  doc.font("Helvetica-Bold").fontSize(13).text("Volunteer Experience");
  doc.moveDown(0.2);

  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .text("Full-Stack Engineer — Murphy Foundation (Uganda)");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .list(
      [
        "Contribute to digital learning tools for underserved communities.",
        "Build and refine full‑stack features with React, Node, and MongoDB.",
        "Improve user interface accessibility and usability.",
        "Support documentation and backend structure improvements.",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );
  doc.moveDown(1);

  // Experience
  doc.font("Helvetica-Bold").fontSize(13).text("Professional Experience");
  doc.moveDown(0.2);
  doc.font("Helvetica-Bold").fontSize(12).text("Paramedic — 2018–Present");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .list(
      [
        "Provide emergency medical care in high-pressure situations.",
        "Perform rapid assessment and stabilization using established protocols.",
        "Communicate clearly with patients, families, and care teams.",
        "Document care with precision and structured reporting.",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );
  doc.moveDown(0.8);

  // Education
  doc.font("Helvetica-Bold").fontSize(13).text("Education");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .text(
      "TripleTen Software Engineering Program (2024) — Full-Stack Web Development"
    );
  doc.fontSize(11).text("NYC EMS Academy — Paramedic Certification");
  doc.moveDown(0.6);

  // Certifications
  doc.font("Helvetica-Bold").fontSize(13).text("Certifications");
  doc.moveDown(0.2);
  doc
    .font("Helvetica")
    .fontSize(11)
    .list(
      [
        "State-Certified Paramedic",
        "Basic Life Support (BLS)",
        "Advanced Cardiac Life Support (ACLS)",
        "Pediatric Advanced Life Support (PALS)",
        "ITLS Trauma Life Support",
      ],
      { bulletRadius: 1.5, textIndent: 10, bulletIndent: 5 }
    );

  doc.end();
};
