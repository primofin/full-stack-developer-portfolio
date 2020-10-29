import React from 'react'

import Hero from './components/Hero/index'
import About from './components/About/index'
import ProjectList from './components/ProjectList/index'
import Contact from './components/Contact/index'
import Footer from './components/Footer/index'

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
