import "./Capabilities.css";

export default function Capabilities() {
  return (
    <section className="capabilities">
      <h2>What I Do</h2>

      <div className="cap-grid">
        <div className="cap-card">
          <h3>Frontend Development</h3>
          <p>
            React, modern UI design, responsive layouts, animations, and clean
            UX flow.
          </p>
        </div>

        <div className="cap-card">
          <h3>Backend Engineering</h3>
          <p>
            Node.js, Express, REST APIs, authentication, database design, and
            logic architecture.
          </p>
        </div>

        <div className="cap-card">
          <h3>Cloud Deployment</h3>
          <p>
            Google Cloud Run, Docker, Firebase Hosting, SendGrid integrations,
            CI/CD.
          </p>
        </div>
      </div>
    </section>
  );
}
