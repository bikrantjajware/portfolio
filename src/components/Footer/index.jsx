import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="h-40 mt-6 relative">
      <p className=" font-palanquin text-center absolute bottom-0 left-[50%] translate-x-[-50%]">
        made with ♥️ by
        <span>
          <Link
            class="underline"
            target="_blank"
            rel="noopener noreferrer"
            to={'https://www.linkedin.com/in/bikrant-jajware/'}>
            bikrant jajware
          </Link>
        </span>
      </p>
    </div>
  );
};

export default Footer;
