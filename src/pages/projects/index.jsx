import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import { m3mories } from '../../images/projects';

const Projects = () => {
  console.log({ m3mories });
  return (
    <div>
      <h3 className="py-3 text-4xl font-medium"> Projects</h3>
      <div className="grid grid-cols-1 gap-3 w-[70%] mx-auto">
        <ProjectCard
          title="Archives"
          description="a digital diary for your journals"
          link="https://m3mories.netlify.app/"
          imgUrl={m3mories}
        />
      </div>
    </div>
  );
};

export default Projects;
