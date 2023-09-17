import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <div>
      <h3 className="py-3 text-4xl font-medium"> Projects</h3>
      <div className="grid grid-cols-2 gap-3 w-[70%] mx-auto">
        {PROJECTS.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
