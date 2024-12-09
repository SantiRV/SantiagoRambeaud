import React from 'react';
import '../styles/Contact.css';

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
      </div>
    </section>
  );
};

export default Contact;
