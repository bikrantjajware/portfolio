import React from 'react';
import { useState } from 'react';

const ProjectCard = ({ title, imgUrl, description, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg ${
        isHovered
          ? 'bg-opacity-80 border-4 border-red-400'
          : 'bg-opacity-100 border-4 border-violet-300'
      }`}>
      <img src={imgUrl} className="object-cover" alt={title} />
      {isHovered && (
        <div className="absolute inset-0  flex-col items-center justify-center p-4 text-slate-200 bg-black bg-opacity-80">
          <h3 className="text-4xl font-palanquin text-white">{title}</h3>
          <p className="mt-2 text-lg text-white font-extralight">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 hover:text-green-400 text-green-500 hover:underline">
            View Project
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
