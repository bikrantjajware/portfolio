import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Header = () => {
  return (
    <div>
      <h3 className="text-4xl font-palanquin py-3"> I'm Bikrant</h3>
      <h3 className="text-2xl font-montserrat py-1 pb-3 ">
        your friendly remote
        <span className="text-orange-700 font-medium"> Software Developer</span>
      </h3>
      <div className="flex flex-row gap-5 border-red-100 rounded-lg">
        <FaLinkedin size="35" />
        <FaGithubSquare size="35" />
        <FaSquareXTwitter size="35" />
      </div>
      <div className="py-3 md:w-[70%] ">
        <h3 className="py-3 text-4xl font-palanquin"> A little about me</h3>
        <p className="font-montserrat text-xl ">
          I'm a CS graduate with <strong>4+</strong> years experience of working in software space.
          I've experience working on <span className="text-orange-700 font-medium"> MERN</span>{' '}
          stack, and <span className="text-orange-700 font-medium"> AWS serverless </span>
          stack.
        </p>
      </div>
    </div>
  );
};

export default Header;
