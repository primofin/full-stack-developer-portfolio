import React from 'react'

import SingleProject from '../SingleProject/index'

const ProjectList = () => {
  return (
    <section id="project-list">
      <div className="project-list__container">
        <h2 className="project-list__title">projects</h2>
        <div className="project-list__content__wrapper">
          <SingleProject />
        </div>
      </div>
    </section>
  )
}

export default ProjectList
