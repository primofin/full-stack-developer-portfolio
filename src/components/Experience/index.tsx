import React from 'react'

import { experiences } from '../../data'
const Experience = () => {
  return (
    <section id="experience">
      <div className="experience__container">
        <h2 className="experience__title">experience</h2>
        {experiences.map((experience) => (
          <div key={experience.id}>
            <h3 className="experience__item__title">{experience.job_title}</h3>
            <div className="experience__item__sub-info">
              <a
                href={experience.website}
                rel="noreferrer"
                target="_blank"
              >
                {experience.company}
              </a>{' '}
              | {experience.location} | {experience.starting} -{' '}
              {experience.ending}
            </div>
            <ul>
              {experience.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
