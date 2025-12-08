import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const projectList = [
    {
      title: "HuskiesHub (Full-Stack App)",
      description:
        "A real-world sports management platform with schedules, dynamic APIs, Google Calendar integration, and full backend deployment.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Cloud Run"],
      caseStudy: "/huskieshub",
      github: "https://github.com/GTavarez/HuskiesHub-Frontend",
    },
    {
      title: "Smart Budget Planner",
      description:
        "A finance dashboard that detects user location, converts currency, analyzes habits, and generates category insights.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
      caseStudy: "/smartbudgetplanner",
      github: "https://github.com/GTavarez/sbp",
    },
    {
      title: "WTWR — Frontend",
      description:
        "A weather-based clothing recommendation app with authentication, profile management, modals, and dynamic UI.",
      tags: ["React", "API Integration", "CSS Modules"],
      github: "https://github.com/GTavarez/se_project_react",
    },
    {
      title: "WTWR — Backend",
      description:
        "JWT authentication, controllers, middleware, validations, and RESTful routing.",
      tags: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/GTavarez/se_project_express",
    },
    {
      title: "Decluttr — Frontend",
      description:
        "Category-based item management app with optimized UI and reusable components.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/RyBCreates/decluttr",
    },
    {
      title: "Decluttr — Backend",
      description:
        "CRUD routes, authentication, controllers, and clean API organization.",
      tags: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/RyBCreates/decluttr-backend",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">Featured Projects</h1>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
