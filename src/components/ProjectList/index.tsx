import React from 'react'

import SingleProject from '../SingleProject/index'
import { projectData } from '../../data'

const ProjectList = () => {
  return (
    <section id="project-list">
      <div className="project-list__container">
        <h2 className="project-list__title">projects</h2>
        <div className="project-list__content__wrapper">
          {projectData.map((project) => (
            <SingleProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectList
