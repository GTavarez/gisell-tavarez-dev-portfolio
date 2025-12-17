import "./Volunteer.css";

export default function Volunteer() {
  return (
    <section className="volunteer-section" id="volunteer" data-aos="fade-up">
      <h2 className="volunteer-title">Volunteer Experience</h2>

      <div className="volunteer-card">
        <h3 className="vol-role">
          Full‑Stack Engineer — Murphy Foundation (Uganda)
        </h3>
        <p className="vol-date">2024 – Present • Remote Volunteer Role</p>

        <ul className="vol-list">
          <li>
            Supported the development of digital tools used in educational
            programs.
          </li>
          <li>
            Improved UI flows for non‑technical users in underserved
            communities.
          </li>
          <li>
            Collaborated with international teams on backend and frontend tasks.
          </li>
          <li>
            Contributed to scalable system improvements and documentation.
          </li>
        </ul>
      </div>
    </section>
  );
}
