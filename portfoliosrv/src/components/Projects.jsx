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
    description: 'Henry Music is a dynamic e-commerce platform tailored for music enthusiasts and professionals. It provides a comprehensive marketplace to explore and purchase a variety of musical instruments and accessories. The project emphasizes user-friendly navigation, secure transactions, and an engaging visual design.',
    link: 'https://henry-instruments-one.vercel.app/',
    image: HenryMusic,
    code: "https://github.com/SantiRV/henry_instruments/tree/dev/PF-Henry" , 
  },
  {
    title: 'Rain Tonic Weather app',
    description: 'Rain Tonic is a sleek and minimalistic weather application that delivers real-time weather data for any location worldwide. Designed for efficiency and usability, this app ensures users stay updated on current weather conditions with an intuitive interface and fast performance.',
    link: 'https://rain-tonic.vercel.app/',
    image: WeatherApp, 
    code: "https://github.com/SantiRV/RainTonic", 
  },
  {
    title: 'Argitalia Ciudadanias',
    description: 'Argitalia is a dynamic web platform designed to assist individuals seeking Italian citizenship through ancestry. The site offers essential guidance and resources for navigating the complex bureaucratic process with clarity and ease.',
    link: 'https://argitaliaciudadanias.vercel.app',
    image: ArgItalia,
    code: "https://github.com/SantiRV/ProyectoClaudio" , 
  },
  {
    title: 'Ta Te Ti app',
    description: 'Ta Te Ti (Tic Tac Toe) is a classic two-player game brought to life through a clean and interactive web interface. This project demonstrates fundamental JavaScript and React concepts in an engaging and functional manner.',
    link: 'https://ta-te-ti-react-java-script-53ti.vercel.app/',
    image: TaTeTi,
    code: "https://github.com/SantiRV/TaTeTi-React-JavaScript.git" , 
  },
  {
    title: 'Count app',
    description: 'Count App is a simple yet effective tool designed to practice and demonstrate foundational JavaScript skills. It serves as an interactive counter application with an intuitive user interface.',
    link: 'https://contador-js-gamma.vercel.app/',
    image: Count,
    code: "https://github.com/SantiRV/Contador-js.git" , 
  },
  {
    title: 'Nut Page',
    description: 'Nut Page is a landing page project crafted to showcase the fundamentals of web design using HTML and CSS. This project demonstrates proficiency in creating responsive and visually appealing layouts, focusing on accessibility and aesthetics.',
    link: 'https://proyrcto-fsd-html-css.vercel.app/',
    image: Nutpage,
    code: "https://github.com/SantiRV/ProyrctoFSD-HTML-CSS.git" , 
  },
  {
    title: 'Pokemon app',
    description: 'Pokémon App is a dynamic web application built to showcase an extensive database of Pokémon using React and a PostgreSQL backend. This project was developed as part of a comprehensive learning experience to integrate front-end, back-end, and API technologies, resulting in a polished, feature-rich application.',
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
