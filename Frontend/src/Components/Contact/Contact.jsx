import "./Contact.css";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <p className="contact__tagline">Let’s Connect</p>
        <h2 className="contact__title">Contact Me</h2>

        {/* ⭐ ONLY ONE FORM HERE */}
        <motion.form
          onSubmit={handleSubmit}
          className="contact__form"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact__submit">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
