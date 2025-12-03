import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, subtitle, tags, image, link }) {
  return (
    <article className="card project">
      <div className="project__image-wrap">
        <img src={image} alt={title} className="project__image" />
      </div>

      <div className="project__content">
        <h3 className="project__title">{title}</h3>
        <p className="project__subtitle">{subtitle}</p>

        <div className="project__tags">
          {tags.map((tag) => (
            <span className="project__tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <Link to={link} className="project__link">
            View case study →
          </Link>
        )}
      </div>
    </article>
  );
}
