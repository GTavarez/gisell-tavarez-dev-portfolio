import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <p className="hero__tag">Portfolio 2025</p>
        <h1 className="hero__title">
          Hi, I’m <span className="hero__title--highlight">Gisell</span>.
          <br />I build thoughtful, real-world applications.
        </h1>

        <p className="hero__subtitle">
          Full-stack developer focused on clear UX, modern engineering, and
          real-world impact.
        </p>

        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </button>

          <button
            className="hero__btn hero__btn--outline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
