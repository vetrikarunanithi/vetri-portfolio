import React from 'react';
import './About.css';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/Vetri.jpeg" alt="Vetri Selvan" className="about-img" />
          </div>
          <div className="about-info">
            <h3 className="about-heading">Who am I?</h3>
            <p className="about-text">
              I'm Vetri Selvan, an aspiring web developer currently pursuing my BSc in Computer Science 
              with specialization in AI at Sathyabama University. I have a passion for creating beautiful, 
              functional websites and applications.
            </p>
            <p className="about-text">
              My journey in web development started when I was in school, and since then I've been 
              constantly learning and improving my skills. I specialize in frontend development with 
              React and have experience in UI/UX design using Figma.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <span className="about-label">Name:</span>
                <span className="about-value">Vetri Selvan K</span>
              </div>
              <div className="about-detail">
                <span className="about-label">Email:</span>
                <span className="about-value">ivetri21@gmail.com</span>
              </div>
              <div className="about-detail">
                <span className="about-label">From:</span>
                <span className="about-value">Chennai, India</span>
              </div>
              <div className="about-detail">
                <span className="about-label">Phone:</span>
                <span className="about-value">+91 7358651204</span>
              </div>
            </div>

            <div className="about-btn-group">
              <a href="#contact" className="about-btn">Contact Me</a>
              <a href="/Vetri_Resume.pdf" download className="about-btn download-btn">
                <FaDownload className="download-icon" />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
