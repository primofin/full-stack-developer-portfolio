import React from 'react'

import SingleProject from '../SingleProject/index'
import { projectData } from '../../data'
// import { projectUrl } from '../../constants/urlConstants'

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
        <a
          href="https://github.com/vynmetropolia"
          rel="noreferrer"
          target="_blank"
          className="project-list__see-more"
        >
          See more
        </a>
      </div>
    </section>
  )
}

export default ProjectList
