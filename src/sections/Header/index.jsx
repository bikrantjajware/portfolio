import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Section from '../../components/section';

const Header = () => {
  return (
    <div className="text-xl dark:my-dark-bg">
      <Section className="bg-green-200">
        <h3 className="text-4xl font-palanquin py-2"> I'm Bikrant</h3>
        <h3 className="font-montserrat pb-2">
          your friendly remote
          <span className="text-orange-700 font-semibold"> Software Developer</span>
        </h3>
        <div className="flex flex-col gap-2">
          <h4>Connect with me on:</h4>
          <div className="flex flex-row gap-5 border-red-100 rounded-lg">
            <FaLinkedin size="35" />
            <FaGithubSquare size="35" />
            <FaSquareXTwitter size="35" />
          </div>
        </div>
      </Section>

      {/* a little about me  section */}
      <Section className="bg-blue-100">
        <div className="md:w-[60%]">
          <h3 className="text-3xl font-medium font-palanquin py-2"> A Little About Me</h3>
          <p className="font-montserrat">
            I'm a CS graduate with <strong>4+</strong> years experience of working in software
            space. I've experience working on
            <span className="text-orange-700 font-semibold"> MERN</span> stack, and{' '}
            <span className="text-orange-700 font-semibold"> AWS serverless </span>
            stack.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Header;
