import "./ProjectCard.css";

export default function ProjectCard({
  title,
  description,
  tags,
  caseStudy,
  github,
}) {
  return (
    <div className="project-card" data-aos="fade-up" data-aos-delay="100">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-buttons">
        {caseStudy && (
          <a
            href={caseStudy}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View Case Study
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
