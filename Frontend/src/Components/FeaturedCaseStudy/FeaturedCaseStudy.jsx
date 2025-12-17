import "./FeaturedCaseStudy.css";
import hero from "../../assets/teams.png";

export default function FeaturedCaseStudy() {
  return (
    <section data-aos="fade-up" className="featured-case">
      <h2>Featured Case Study</h2>

      <div className="featured-card">
        <img src={hero} alt="HuskiesHub Preview" />

        <div className="featured-info">
          <h3>HuskiesHub — Sports Management Platform</h3>
          <p>
            A clean, intuitive UI designed for coaches, players, and families to
            manage teams, schedules, and player details with ease.
          </p>

          <ul>
            <li>Modern card‑based team layout</li>
            <li>Player profile designs</li>
            <li>Integrated schedule & map features</li>
          </ul>

          <a href="/case-studies/huskieshub" className="case-btn">
            View Case Study →
          </a>
        </div>
      </div>
    </section>
  );
}
