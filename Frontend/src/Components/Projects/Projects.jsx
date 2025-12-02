import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../Data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <p className="projects__tag">Projects</p>
        <h2 className="projects__title">Selected Work</h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
