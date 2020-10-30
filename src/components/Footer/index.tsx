import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer id="footer">
      <div className="footer__container">
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <FontAwesomeIcon icon={faAngleUp} />
          </Link>
        </span>
        <div className="social__links">
          <a href="https://www.linkedin.com/in/vynmetropolia/">
            <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
          </a>
          <a href="https://github.com/vynmetropolia">
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
          </a>
        </div>
        <hr className="footer__hr"/>
        <div className="footer__text">© 2020 - Created by Vy Nguyen</div>
      </div>
    </footer>
  )
}

export default Footer
