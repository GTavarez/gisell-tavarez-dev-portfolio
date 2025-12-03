import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const PROJECTS = [
  {
    id: 1,
    title: "HuskiesHub",
    subtitle:
      "Full-stack platform for a travel softball organization: schedules, clinics, players, and college commits.",
    tags: ["React", "Node", "Express", "MongoDB"],
    image: "/images/huskieshub-cover.png", // put any image in public/images
    link: "/huskieshub",
  },
  {
    id: 2,
    title: "Smart Budget Planner",
    subtitle:
      "Personal finance dashboard with location-aware benchmarks and visualizations for spending habits.",
    tags: ["React", "Data Viz", "APIs"],
    image: "/images/sbp-cover.png",
    link: "/smart-budget-planner",
  },
  {
    id: 3,
    title: "Paramedic Tools (In Progress)",
    subtitle:
      "Concept tools to help EMS teams log events, triage patients, and share critical info in real time.",
    tags: ["Concept", "UX", "Healthcare"],
    image: "/images/placeholder-project.png",
    link: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>
      <p className="section__subtitle">
        A mix of production work, bootcamp projects, and ideas I&apos;m
        actively exploring.
      </p>

      <div className="projects__grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
