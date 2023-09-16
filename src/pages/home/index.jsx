import React from 'react';
import TechnicalSkills from '../../components/technical-skills';
import Projects from '../projects';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Project from '../../components/ProjectCard';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div className="main-content ">
      <div className="px-10">
        <h3 className="text-8xl font-palanquin py-3"> I'm Bikrant</h3>
        <h3 className="text-2xl font-montserrat py-1 pb-3 text-slate-600">
          your friendly remote
          <span className="text-orange-700 font-medium"> Software Developer</span>
        </h3>
        <div className="flex flex-row gap-5 border-red-100 rounded-lg">
          <FaLinkedin size="35" />
          <FaGithubSquare size="35" />
          <FaSquareXTwitter size="35" />
        </div>
        <div className="py-3 w-[60%] ">
          <h3 className="py-3 text-4xl font-medium"> A little about me</h3>
          <p className="font-montserrat text-xl text-slate-800">
            I'm a CS graduate with <strong>4+</strong> years experience of working in software
            space. I've experience working on{' '}
            <span className="text-orange-700 font-medium"> MERN</span> stack, and{' '}
            <span className="text-orange-700 font-medium"> AWS serverless </span>
            stack.
          </p>
        </div>
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
