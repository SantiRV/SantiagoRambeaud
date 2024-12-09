import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/HeroSection.css';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setShowContent(false); // Esconde el contenido antes de la transición
    setTimeout(() => {
      navigate('/main'); // Redirige después de 2 segundos
    }, 2000); 
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000); // Aparece después de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section">
      <div className={`hero-title ${showContent ? 'hide' : 'show'}`}>
        Portfolio Santiago Rambeaud Vazquez
      </div>

      {showContent && (
        <div className="hero-content">
          <h1>Hello, I'm Santiago Rambeaud Vazquez</h1>
          <p>Full Stack Developer focused on innovative solutions.</p>
          <button onClick={handleClick}>Enter</button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
