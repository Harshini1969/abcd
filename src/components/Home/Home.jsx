import React from 'react'
import './Home.css'

import About from '../Details/About'
import Skills from '../Resume/Skills'
import Project from '../Project/Project'
import Contact from '../Details/Contact'

function Home() {
  return (
    <>
      {/* HOME SECTION */}
      <section id="home">
        <div className="home">
          <div className="home-content">
            <h1 className="home-title">Hello, I am Harshini Narahari</h1>
            <h4 className="home-role">MERN Stack Developer</h4>
            <p className="home-description">
              Passionate about building full-stack web applications with modern technologies.
            </p>

            <a href="#about" className="home-button">
              About Me
            </a>
          </div>

          <div className="home-image-container">
            <img src="/Photo.jpg.jpeg" className="home-image" alt="Harshiniimg" />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about">
        <About />
      </section>

      {/* SKILLS SECTION */}
      <section id="skills">
        <Skills />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <Project />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default Home
