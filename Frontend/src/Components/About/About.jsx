import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motion";

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="about__container"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="about__tag">About</p>
        <h2 className="about__title">Developer with real-world roots.</h2>
        <p className="about__text">
          I’m a paramedic-turned-engineer...
        </p>
      </motion.div>
    </section>
  );
}
