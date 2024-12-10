import React from 'react';
import '../styles/About.css';
import Logo from "../assets/SRVlogo.webp";


const About = () => {
  return (
    <section className="about-section">
      <div className="logo-container">
      <img src={Logo} alt="Logo" className="logo" />
    </div>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Hello! My name is Santiago Rambeaud Vazquez, a passionate Full Stack Developer with experience in creating dynamic and innovative web solutions.
          I am constantly looking for opportunities to challenge myself and grow, combining technical expertise with creative problem-solving.
        </p>
        <p className="about-text">
          I specialize in modern technologies, including React, Node.js, and PostgreSQL. Whether it’s front-end interfaces or back-end systems, I love bringing ideas to life with clean and efficient code.
        </p>
      </div>
    </section>
  );
};

export default About;
