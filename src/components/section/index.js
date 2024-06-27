import React from 'react';

const Section = ({ children, className }) => {
  const sectionStyle =
    'hover:bg-opacity-50 rounded-lg p-2 my-6 hover:text-slate-800 dark:hover:text-slate-200';
  const glassStyle =
    'h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-300 shadow-xl dark:bg-opacity-5 dark:hover:bg-opacity-10';
  return <section className={`${sectionStyle} ${glassStyle} ${className}`}>{children}</section>;
};

export default Section;
