import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="about__container">
        <h2 className="about__title">About me</h2>
        <div className="about__content-wrapper">
          <img
            src="https://images.unsplash.com/photo-1511963211013-83bba110595d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="personal_img"
            className="about__content__img"
          />
          <div>
            Hi there! My name is Vy Nguyen Thanh. I am based in Helsinki,
            Finland and working as a full-stack developer at Integrify. <br />
            At Integrify Academy experienced developers boost their careers by
            upgrading their skills with the newest technologies and development
            methodologies. During the 5 -month program we focus on working in
            full-stack development projects with Integrify Academy Tech Stack:
            <span className="about__content__tech-stack">
              JavaScript/TypeScript, React, Node.js, PostgreSQL/MongoDB, Docker,
              AWS
            </span>
            , and much more.
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
