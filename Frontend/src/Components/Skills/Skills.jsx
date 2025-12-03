import "./Skills.css";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Vite", "NPM", "Postman"],
  },
  {
    label: "Mindset",
    items: ["Calm under pressure", "Teamwork", "Rapid learning"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <h2 className="section__title">Skills</h2>
      <p className="section__subtitle">
        A mix of engineering, operations, and emergency-medicine thinking.
      </p>

      <div className="skills__grid">
        {SKILL_GROUPS.map((group) => (
          <div className="card skills__group" key={group.label}>
            <h3 className="skills__group-title">{group.label}</h3>
            <div className="skills__chips">
              {group.items.map((skill) => (
                <span className="skills__chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
