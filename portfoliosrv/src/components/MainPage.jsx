import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Projects from './Projects';
import CVSection from './CvSection';
import Technologies from './Technologies';

const MainPage = () => {
  return (
    <div>
      <About />
      <Services />
      <Technologies />
      <Projects />
      <CVSection />
      <Contact />
      
    </div>
  );
};

export default MainPage;
