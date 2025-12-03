import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <h2 className="section__title">About</h2>
      <p className="section__subtitle">
        Full-Stack Developer with a paramedic background.
      </p>

      <div className="about__grid">
        <div className="card about__card">
          <h3>Who I am</h3>
          <p>
            I’m a Full-Stack Developer and practicing Paramedic who recently
            completed the TripleTen Software Engineering bootcamp. I&apos;m
            comfortable making decisions under pressure and translating complex
            real-world workflows into intuitive digital tools.
          </p>
        </div>

        <div className="card about__card">
          <h3>How I work</h3>
          <p>
            I love building end-to-end experiences: from REST APIs and data
            models to responsive UIs and small UX details. I care about clean
            architecture, readable code, and products that actually solve
            people&apos;s problems.
          </p>
        </div>
      </div>
    </section>
  );
}
