import React from 'react';
import '../styles/CvSection.css';
import CVFile from '../assets/santiago rambeaud v..pdf'; 

const CVSection = () => {
  return (
    <section className="cv-section">
      <h2 className="cv-title">Download My CV</h2>
      <p className="cv-description">
        Interested in learning more about my skills and experience? Click below to download my CV!
      </p>
      <a href={CVFile} download="Santiago_Rambeaud_CV.pdf" className="cv-button">
        Download CV
      </a>
    </section>
  );
};

export default CVSection;

