import React from 'react';
import TechnicalSkills from '../../sections/technical-skills';
import Projects from '../../sections/projects';
import Footer from '../../components/Footer';
import Header from '../../sections/Header';

const Home = () => {
  return (
    <div className="main-content ">
      <div className="px-4 md:px-10">
        <Header />
        <TechnicalSkills />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
