import React from 'react';
import { FaReact, FaJsSquare, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaSass, FaBootstrap } from 'react-icons/fa'; // Incluye más íconos
import "../styles/Technologies.css";

const Technologies = () => {
  return (
    <section className="technologies-section">
      <h2>Technologies I Work With</h2>
      <div className="technologies-grid">
        <div className="tech-icon"><FaReact size={50} /></div>
        <div className="tech-icon"><FaJsSquare size={50} /></div>
        <div className="tech-icon"><FaNodeJs size={50} /></div>
        <div className="tech-icon"><FaHtml5 size={50} /></div>
        <div className="tech-icon"><FaCss3Alt size={50} /></div>
        <div className="tech-icon"><FaGitAlt size={50} /></div>
        <div className="tech-icon"><FaSass size={50} /></div>
        <div className="tech-icon"><FaBootstrap size={50} /></div>
      </div>
    </section>
  );
};

export default Technologies;
