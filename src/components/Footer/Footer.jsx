import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3 className="footer-title">Vetri Selvan Karunanithi</h3>
            <p className="footer-description">
              Aspiring Software Developer with a strong focus on Python Full Stack Development, specializing in Web Development and UI/UX Design.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact Info</h4>
            <ul>
              <li>📞 +91 7358651204</li>
              <li>✉️ ivetri21@gmail.com</li>
              <li>📍 Chennai, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Vetri Selvan. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/vetriselvank/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/vetrikarunanithi" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.facebook.com/vetriselvan.karunanithi.5" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
