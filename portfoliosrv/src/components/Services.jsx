import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building responsive and dynamic websites tailored to your needs using the latest technologies.",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connecting systems and applications to improve efficiency and user experience.",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually appealing designs for an engaging user experience.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
