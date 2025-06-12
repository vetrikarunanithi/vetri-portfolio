import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I'm <span>Vetri Selvan</span>
          </h1>
          <h2 className="hero-subtitle">Aspiring Software Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences with modern technologies and 
            clean, efficient code.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-btn hero-btn-primary">View My Work</a>
            <a href="#contact" className="hero-btn hero-btn-outline">Contact Me</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-glow"></div>
            <img src="/images/Vetri.jpeg" alt="Vetri Selvan" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
