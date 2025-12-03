import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">Contact</h2>
      <p className="section__subtitle">
        Open to full-stack roles, frontend-leaning roles, and projects that
        blend healthcare and technology.
      </p>

      <div className="card contact__card">
        <p className="contact__text">
          The fastest way to reach me is by email or LinkedIn. Send a short
          note about what you&apos;re working on, and I&apos;ll get back as
          soon as possible.
        </p>

        <div className="contact__links">
          <a
            href="mailto:giselltavarez58@gmail.com"
            className="contact__btn contact__btn--primary"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/gisell-tavarez"
            target="_blank"
            rel="noreferrer"
            className="contact__btn"
          >
            View LinkedIn
          </a>
          <a
            href="https://github.com/GTavarez"
            target="_blank"
            rel="noreferrer"
            className="contact__btn"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
