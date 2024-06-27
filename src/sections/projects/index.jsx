import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { PROJECTS } from '../../constants';
import Section from '../../components/section';

const Projects = () => {
  const sectionStyle = 'rounded-lg p-2 my-6 hover:text-slate-800 dark:hover:text-slate-200';
  const glassStyle =
    'h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-300 shadow-xl dark:bg-opacity-5 dark:hover:bg-opacity-10';

  return (
    <Section className="bg-yellow-100">
      <div>
        <h3 className="py-3 text-4xl font-palanquin"> Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
