import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { contentUrl } from '../../constants/urlConstants'

const About = () => {
  const [info, setInfo] = useState<any>('')
  let avaUrl =
    'https://images.unsplash.com/photo-1511963211013-83bba110595d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  if (info) {
    avaUrl = 'https:' + info.includes.Asset[0].fields.file.url
  }
  // fetch data from Contentful
  const fetchInfo = async () => {
    const contentType = 'devInfo'
    const result = await axios(`${contentUrl}${contentType}`)
    setInfo(result.data)
  }
  useEffect(() => {
    fetchInfo()
  }, [])
  return (
    <section id="about">
      <div className="about__container">
        <h2 className="about__title">About me</h2>
        <div className="about__content-wrapper">
          <img
            src={avaUrl}
            alt="personal_img"
            className="about__content__img"
          />
          {info && (
            <div>
              {info.items[0].fields.personalInfo}
              <span className="about__content__tech-stack">
                &nbsp;{info.items[0].fields.techStack}
              </span>
              &nbsp;and much more.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
