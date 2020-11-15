import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills__container">
        <h2 className="skills__title">skills</h2>
        <ul>
          <li>
            <span className="skills__set">Frontend:</span> Accessibility, CSS,
            HTML, JavaScript, Material-UI, React.js, Redux, SCSS, TypeScript.
          </li>
          <li>
            <span className="skills__set">Backend:</span> Express.js, GraphQL,
            Node.js, REST API.
          </li>
          <li>
            <span className="skills__set">Database:</span> Firebase, MariaDB,
            MongoDB, MySQL, PostgreSQL.
          </li>
          <li>
            <span className="skills__set">Testing:</span> Jest.
          </li>
          <li>
            <span className="skills__set">DevOps / Cloud:</span> GitHub Actions,
            GitHub Pages, Netlify.
          </li>
          <li>
            <span className="skills__set">Mobile:</span> Android, NativeBase,
            React Native.
          </li>
          <li>
            <span className="skills__set">Others:</span> Git, GitHub, Jira.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
