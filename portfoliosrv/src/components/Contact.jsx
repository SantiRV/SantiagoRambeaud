import React from 'react';
import '../styles/Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          I would love to hear about your projects and ideas. Fill out the form below or reach out directly!
        </p>
        {/* Aquí renderizaremos el formulario en un componente separado */}
        <div className="contact-form-container">
          {/* Importarás y agregarás el componente del formulario aquí */}
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/santiago-rambeaud-v%C3%A1zquez-a25646231/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/SantiRV" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a href="mailto:santirambeaudvazquez@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

