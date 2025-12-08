import ResumeDownload from "../ResumeDownload/ResumeDownload";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-page">
      {/* HEADER SECTION */}
      <header className="resume-header">
        <h1 className="resume-name">Gisell Tavarez</h1>
        <p className="resume-title">Full-Stack Developer | Paramedic</p>

        <div className="resume-links">
          <a href="tel:8623464913">📞 862-346-4913</a>
          <a
            href="https://www.linkedin.com/in/gisell-tavarez"
            target="_blank"
            rel="noreferrer"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/GTavarez"
            target="_blank"
            rel="noreferrer"
          >
            💻 GitHub
          </a>
        </div>

        {/* DOWNLOAD */}
        <ResumeDownload />
      </header>

      {/* SUMMARY */}
      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          Full-stack software engineer with a strong background in emergency
          medicine, problem-solving under pressure, leadership, and
          cross-functional teamwork. Recently completed TripleTen’s Software
          Engineering program, where I built real-world full-stack applications
          using React, Node, Express, and MongoDB. Passionate about building
          tech that improves people’s lives.
        </p>
      </section>

      {/* SKILLS */}
      <section className="resume-section">
        <h2>Technical Skills</h2>
        <ul className="skills-grid">
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>REST APIs</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>Frontend UI/UX</li>
          <li>Responsive Design</li>
          <li>Google APIs</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="resume-section">
        <h2>Projects</h2>

        <div className="project">
          <h3>HuskiesHub – Full-Stack Sports Management Platform</h3>
          <p>
            A full platform for the Empire State Huskies softball organization,
            including player profiles, schedules, maps, clinics, and admin
            tools. Integrates Google Calendar API, Google Maps API, and GridFS
            for image hosting.
          </p>
          <ul>
            <li>React + Node + Express + MongoDB</li>
            <li>Custom components, routing, and animation</li>
            <li>Dynamic scheduling + map locations</li>
          </ul>
        </div>

        <div className="project">
          <h3>Smart Budget Planner – Financial Tracking Web App</h3>
          <p>
            A location-aware budget planner using IP geolocation, spending
            analytics, and personalized insights. Includes charts, category
            management, and responsive UI.
          </p>
          <ul>
            <li>React + Node + Chart.js</li>
            <li>Currency auto-detection + financial benchmarks</li>
            <li>Sleek UI with animations</li>
          </ul>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>TripleTen Software Engineering Bootcamp</li>
          <li>Paramedic Certification – State of New Jersey</li>
          <li>Advanced Cardiac Life Support (ACLS)</li>
          <li>Pediatric Advanced Life Support (PALS)</li>
          <li>Basic Life Support (BLS)</li>
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section className="resume-section">
        <h2>Professional Experience</h2>

        <div className="job">
          <h3>Paramedic — 2018–Present</h3>
          <p>
            Delivered high-acuity emergency care across diverse patient
            populations. Applied critical problem-solving, rapid
            decision-making, and leadership in high-pressure environments.
          </p>

          <ul>
            <li>
              Led patient care during emergencies with calm, structured
              decision-making
            </li>
            <li>Collaborated with multi-disciplinary teams</li>
            <li>Documented assessments & treatments with extreme accuracy</li>
            <li>Used data-driven protocols to improve patient outcomes</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
