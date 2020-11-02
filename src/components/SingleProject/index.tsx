import React from 'react'

type Project = {
  id: string
  imgs: string[]
  title: string
  info: string
  infor2?: string
  url?: string
  repo: string
}
type SingleProjectProps = {
  project: Project
}
function SingleProject(props: SingleProjectProps) {
  const { project } = props
  return (
    <div className="project__container">
      <div className="project__info__container">
        <h3 className="project__info__title">{project.title}</h3>
        <p>{project.info}</p>
        <div className="project__btn__container">
          {project.url && (
            <a
              href={project.url}
              rel="noreferrer"
              target="_blank"
              className="project__btn__live"
            >
              see live
            </a>
          )}
          <a
            href={project.repo}
            rel="noreferrer"
            target="_blank"
            className="project__btn__scode"
          >
            source code
          </a>
        </div>
      </div>
      <div className="project__img__container">
        <img
          src={project.imgs[0]}
          alt="project-demo-img"
          className="project__img__item"
        />
      </div>
    </div>
  )
}

export default SingleProject
