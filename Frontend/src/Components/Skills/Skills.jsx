import "./Skills.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../Utils/Motion";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Vite",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "JWT Auth"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel"],
  },
  {
    category: "Design & UX",
    items: [
      "Figma",
      "Wireframing",
      "Component Systems",
      "Accessibility Basics",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <p className="skills__tag">Skills & Tools</p>
        <h2 className="skills__title">What I Use</h2>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              className="skills__card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="skills__card-title">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
