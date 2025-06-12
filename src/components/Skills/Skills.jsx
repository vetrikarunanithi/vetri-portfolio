import React from 'react';
import { skills } from '../../assets/data';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skill-section">
      <div className="skill-container">
        <div className="skill-header">
          <h2 className="skill-title">My Skills</h2>
          <p className="skill-subtitle">Technologies and Tools I Use</p>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-card-name">{skill.name}</span>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
