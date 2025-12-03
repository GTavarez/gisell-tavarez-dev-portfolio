import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Full-Stack Developer & Paramedic
        </h1>
        <p className="hero-subtitle">
          Turning real-world emergency problem-solving into powerful, elegant software.
        </p>

        <a href="#projects" className="hero-button">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
