import React from "react";
import { Power } from "lucide-react";
import "./herosection.css";
import woman from "../../assets/woman.png"
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to</h1>
        <h2>Brain Stone </h2>
        <p className="hero-text">
          Empowers teams and individuals to seamlessly orchestrate, prioritize,
          and monitor the flow of their tasks and projects with precision and
          ease.{" "}
        </p>
        <div className="hero-buttons">
          <button className="btn primary">
            <Power size={16} /> Get Started
          </button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={woman} alt="Website mockup" />
      </div>
    </section>
  );
};

export default HeroSection;
