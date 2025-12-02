import "./Hero.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../Utils/Motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero__content"
        variants={fadeInUp}
        initial="hidden"
        animate="show"
      >
        <p className="hero__tag">Portfolio 2025</p>
        <h1 className="hero__title">
          Hi, I’m <span className="hero__title--highlight">Gisell</span>.
          <br />I build thoughtful, real-world applications.
        </h1>

        <p className="hero__subtitle">
          Full-stack developer focused on clear UX, modern engineering, and
          real-world impact.
        </p>

        <motion.div
          className="hero__actions"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <button className="hero__btn hero__btn--primary">
            View Projects
          </button>
          <button className="hero__btn hero__btn--outline">Contact Me</button>
        </motion.div>
      </motion.div>
    </section>
  );
}
