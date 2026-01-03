import React from 'react'
import { useNavigate } from 'react-router-dom'
import './About.css'

function About() {
  let navigate = useNavigate()

  return (
    <div className="about">
      <div className="about-content">
            <h4 className="about-subtitle">About Me</h4>     
      <h1 className="about-title">
        I Can Build Modern Full-Stack Web Applications
      </h1>

      <p className="about-text">
        Hello! I&apos;m Harshini Narahari, a MERN Stack Developer who is
        passionate about building scalable and user-friendly web applications.
      </p>

      <p className="about-text">
        I specialize in MongoDB, Express, React, and Node.js, and I enjoy working on
        both frontend and backend development.
      </p>

      <button
        className="about-button"
        onClick={() => navigate('/contact')}
      >
        Hire Me
       </button>
      </div>
      
       <div className="about-image">
        <img src="/Photo.jpg.jpeg"  />
      </div>

    </div>
  )
}

export default About
