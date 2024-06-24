import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Header = () => {
  const sectionStyle = 'rounded-lg p-2 my-6 hover:text-slate-800 dark:hover:text-slate-300';
  const glassStyle =
    'h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-300 shadow-xl dark:bg-opacity-5 dark:hover:bg-opacity-10 dark:hover:text-slate-600';
  return (
    <div class="text-xl dark:my-dark-bg">
      <section class={` bg-orange-100 hover:bg-opacity-50  ${sectionStyle} ${glassStyle}`}>
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
      </section>

      {/* a little about me  section */}
      <section class={`bg-blue-100 hover:bg-opacity-50  ${sectionStyle} ${glassStyle}`}>
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
      </section>
    </div>
  );
};

export default Header;
