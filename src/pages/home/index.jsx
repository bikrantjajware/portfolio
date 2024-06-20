import React from 'react';
// import TechnicalSkills from '../../components/technical-skills';
import Projects from '../projects';
import Footer from '../../components/Footer';
import Header from '../../sections/Header';

const Home = () => {
  return (
    <div className="main-content ">
      <div className="px-4 md:px-10">
        <Header />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
