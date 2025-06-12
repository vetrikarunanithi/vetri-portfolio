import React from 'react';
import './Certification.css';
import { certifications } from '../../assets/data'; 

const Certification = () => {
  return (
    <section id="certification" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certification-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
