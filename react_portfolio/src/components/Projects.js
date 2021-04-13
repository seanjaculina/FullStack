import React from 'react';

// Projects JSON file
import ProjectList from '../projects.json';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className="section_container" id="projects">
      <div className="projects">
        <h1 className="section__heading">Projects</h1>
        {ProjectList.map((project) => {
          return (
            <ProjectItem
              data={project}
              key={Math.floor(Math.random() * 10000)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
