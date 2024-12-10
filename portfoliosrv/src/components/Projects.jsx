import React from 'react';
import '../styles/Projects.css';
import HenryMusic from "../assets/Henrymusic.png";
import WeatherApp from "../assets/weatherapp.png";
import ArgItalia from "../assets/ArgItalia.png";
import TaTeTi from "../assets/tatetiapp.png";
import Count from "../assets/count.png";
import Nutpage from "../assets/nutpage.png";
import PokemonApp from "../assets/pokeproyecto.jpg"; 

const projects = [
  {
    title: 'Henry Music',
    description: 'Description of the project',
    link: 'https://henry-instruments-one.vercel.app/',
    image: HenryMusic,
    code: "https://github.com/SantiRV/ProyectoClaudio" , 
  },
  {
    title: 'Rain Tonic Weather app',
    description: 'Description of the project',
    link: 'https://rain-tonic.vercel.app/',
    image: WeatherApp, 
    code: "https://github.com/SantiRV/RainTonic", 
  },
  {
    title: 'Argitalia Ciudadanias',
    description: 'Description of the project',
    link: 'https://argitaliaciudadanias.vercel.app',
    image: ArgItalia,
    code: "https://github.com/SantiRV/ProyectoClaudio" , 
  },
  {
    title: 'Ta Te Ti app',
    description: 'Description of the project',
    link: 'https://ta-te-ti-react-java-script-53ti.vercel.app/',
    image: TaTeTi,
    code: "https://github.com/SantiRV/TaTeTi-React-JavaScript.git" , 
  },
  {
    title: 'Count app',
    description: 'Description of the project',
    link: 'https://contador-js-gamma.vercel.app/',
    image: Count,
    code: "https://github.com/SantiRV/Contador-js.git" , 
  },
  {
    title: 'Nut Page',
    description: 'Description of the project',
    link: 'https://proyrcto-fsd-html-css.vercel.app/',
    image: Nutpage,
    code: "https://github.com/SantiRV/ProyrctoFSD-HTML-CSS.git" , 
  },
  {
    title: 'Pokemon app',
    description: 'Description of the project',
    link: 'https://www.youtube.com/watch?v=FJBWs9c1RDg&feature=share',
    image: PokemonApp,
    code: "https://github.com/SantiRV/PI-Pokemon" , 
  }, 
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
              <div className="project-buttons">
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={project.code} target="_blank" rel="noopener noreferrer">View Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
