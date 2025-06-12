import React from 'react';
import { education } from '../../assets/data';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="edu-section">
      <div className="edu-container">
        <div className="edu-header">
          <h2 className="edu-title">Education</h2>
          <p className="edu-subtitle">My academic journey</p>
        </div>

        <div className="edu-vertical-timeline">
          {education.map((item) => (
            <div key={item.id} className="edu-card">
              <div className="edu-dot"></div>
              <div className="edu-line"></div>
              <div className="edu-content">
                <span className="edu-year">{item.year}</span>
                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-institution">{item.institution}</h4>
                <p className="edu-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
