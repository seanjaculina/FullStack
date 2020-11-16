import React from 'react';

import Fade from 'react-reveal/Fade'; // fade in effect

// Projects JSON file
import ProjectList from '../projects.json';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <Fade>
      <div className="section_container">
        <div className="projects">
          <h1 className="section__heading">Projects</h1>
          {
            ProjectList.map(project => {
              return <ProjectItem data={project} key={Math.floor(Math.random() * 10000)}/>
            })
          }
        </div>s
      </div>
    </Fade>
  )
}

export default Projects;
