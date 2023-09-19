import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <div>
      <h3 className="py-3 text-4xl font-medium"> Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
        {PROJECTS.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
