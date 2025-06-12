import React from 'react';
import './Social.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Social = () => {
  const profiles = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/iamvetrioffl"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vetriselvank/"
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://x.com/iamvetri_offl"
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      url: "https://www.instagram.com/vetrikarunanithi/"
    },
    {
      icon: <FaFacebook />,
      label: "Facebook",
      url: "https://www.facebook.com/vetriselvan.karunanithi.5"
    }
  ];

  return (
    <section id="social" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Social Network</h2>
        <div className="social-grid">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <span className="social-icon">{profile.icon}</span>
              <span className="social-label">{profile.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
