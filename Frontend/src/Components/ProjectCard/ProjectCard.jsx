import "./ProjectCard.css";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <h3 className="project-card__title">{project.name}</h3>

      <p className="project-card__role">
        {project.role} · {project.period}
      </p>

      <p className="project-card__description">{project.description}</p>

      {/* Tech tags */}
      <div className="project-card__tags">
        {project.tech.map((tag) => (
          <span key={tag} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* LINKS */}
      <div className="project-card__links">
        {/* Case Study */}
        {project.links?.caseStudy && (
          <a
            href={project.links.caseStudy}
            className="project-card__link project-card__link--case"
          >
            Case Study →
          </a>
        )}

        {/* Live Demo */}
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--live"
          >
            Live →
          </a>
        )}

        {/* GitHub */}
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--github"
          >
            GitHub →
          </a>
        )}
      </div>
    </motion.article>
  );
}
