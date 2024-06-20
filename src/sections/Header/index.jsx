import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Header = () => {
  return (
    <div class="dark:text-slate-300">
      <section class="bg-orange-100 rounded-lg p-2 hover:bg-orange-200 my-2">
        <h3 className="text-4xl font-palanquin py-2"> I'm Bikrant</h3>
        <h3 className="text-2xl font-montserrat py-1 pb-3 text-slate-600 dark:text-slate-400">
          your friendly remote
          <span className="text-orange-700 font-medium"> Software Developer</span>
        </h3>
        <div className="flex flex-row gap-5 border-red-100 rounded-lg">
          <FaLinkedin size="35" />
          <FaGithubSquare size="35" />
          <FaSquareXTwitter size="35" />
        </div>
      </section>

      <section class="bg-blue-100 rounded-lg p-2 hover:bg-blue-200 my-2">
        <div className="py-3 md:w-[60%]">
          <h3 className="py-3 text-4xl font-palanquin"> A little about me</h3>
          <p className="font-montserrat text-xl text-slate-800 dark:text-slate-400">
            I'm a CS graduate with <strong>4+</strong> years experience of working in software
            space. I've experience working on{' '}
            <span className="text-orange-700 font-medium"> MERN</span> stack, and{' '}
            <span className="text-orange-700 font-medium"> AWS serverless </span>
            stack.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
