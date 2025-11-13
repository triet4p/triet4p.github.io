
import type { Project } from '../types';
import React from 'react';
// fix: Removed 'LinkIcon' from import as it is not exported from './Icons' and was not being used.
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 group">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-slate-100">{project.title}</h3>
        <p className="text-slate-400 mb-4 h-20 overflow-hidden">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
        >
          View Project
          <GithubIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
