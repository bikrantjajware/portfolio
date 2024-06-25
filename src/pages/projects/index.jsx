import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { PROJECTS } from '../../constants';

const Projects = () => {
  const sectionStyle = 'rounded-lg p-2 my-6 hover:text-slate-800 dark:hover:text-slate-200';
  const glassStyle =
    'h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-300 shadow-xl dark:bg-opacity-5 dark:hover:bg-opacity-10';

  return (
    <section className={`bg-red-100 hover:bg-opacity-50 ${sectionStyle} ${glassStyle}`}>
      <div>
        <h3 className="py-3 text-4xl font-palanquin"> Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
