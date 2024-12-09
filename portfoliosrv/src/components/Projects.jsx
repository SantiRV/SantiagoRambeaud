import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of the project',
    link: 'https://linktotheproject.com',
    image: 'image1.jpg',  // Si decides usar imágenes
  },
  {
    title: 'Project 2',
    description: 'Description of the project',
    link: 'https://linktotheproject.com',
    image: 'image2.jpg',  // Si decides usar imágenes
  },
  // Más proyectos...
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.image && <img src={project.image} alt={project.title} />}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
