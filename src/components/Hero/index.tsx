import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section className="hero__container">
      <div>
        <Fade direction="left" duration={1000} delay={500}>
          <h1>
            Hi, my name is <span>Vy Nguyen Thanh</span>
            <br />
            I'm a full stack developer
          </h1>
        </Fade>
        <Fade direction="left" duration={1000} delay={1000}>
          <Link to="about" smooth duration={1000}>
            <button>know more</button>
          </Link>
        </Fade>
      </div>
    </section>
  )
}

export default Hero