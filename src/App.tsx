import React from 'react'

import Hero from './components/Hero/index'
import About from './components/About/index'
import ProjectList from './components/ProjectList/index'
import Skills from './components/Skills/index'
import Experience from './components/Experience/index'
import Contact from './components/Contact/index'
import Footer from './components/Footer/index'
import './style/app.scss'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <ProjectList />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
