import React, { useState } from 'react';
import { projects } from '../../assets/data';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="project-section">
      <div className="project-container">
        <div className="project-header">
          <h2 className="project-title">My Projects</h2>
          <p className="project-subtitle">Some of my recent work</p>
        </div>

        <div className="project-filters">
          {['all', 'web', 'design', 'fullstack'].map(filter => (
            <button
              key={filter}
              className={`project-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.live || '#'} className="project-link" target="_blank" rel="noreferrer">
                    <i className="fas fa-eye"></i>
                  </a>
                  <a href={project.github || '#'} className="project-link" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map(tech => (
                    <span key={tech} className="project-tag">{tech}</span>
                  ))}
                </div>
                <a
                  href={project.live || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="project-view-btn"
                >
                  <i className="fas fa-eye" style={{ marginRight: '8px' }}></i>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
