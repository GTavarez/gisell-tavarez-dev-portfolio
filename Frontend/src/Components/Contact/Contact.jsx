import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <p className="contact__tag">Contact</p>
        <h2 className="contact__title">Let’s Work Together</h2>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__field">
            <label className="contact__label">Name</label>
            <input name="name" required className="contact__input" />
          </div>

          <div className="contact__field">
            <label className="contact__label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="contact__input"
            />
          </div>

          <div className="contact__field">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="contact__textarea"
            ></textarea>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="contact__form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ...
          </motion.form>

          <motion.button className="contact__button" whileTap={{ scale: 0.96 }}>
            Send Message
          </motion.button>

          {status === "success" && (
            <p className="contact__status contact__status--success">
              Message sent!
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--error">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
