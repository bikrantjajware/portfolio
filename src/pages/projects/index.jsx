import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <section class="bg-red-100 rounded-lg p-2 hover:bg-red-200 my-2">
      <div class="dark:text-slate-300">
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
