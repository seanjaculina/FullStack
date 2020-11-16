import React from 'react'

const ProjectItem = ({data}) => {
  return (
    <div className="project-item">
      <h3>{data.title}</h3>
      <img alt={data.title} src={data.image}/>
      <a className="btn" href={data.link} target="_blank" rel="noreferrer">{data.btnText}</a>
    </div>
  )
}

export default ProjectItem;
