import React from 'react';
import './Experience.css';
import { experiences } from '../../assets/data';

const Experience = () => {
  return (
    <section id="experience" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <h3 className="experience-role">{exp.role}</h3>
              <h4 className="experience-company">{exp.company}</h4>
              <p className="experience-duration"><strong>{exp.duration}</strong></p>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
