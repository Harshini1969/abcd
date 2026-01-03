import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  let navigate = useNavigate()

  return (
    <div className="home">
      
      <div className="home-content">
        <h1 className="home-title">Hello, I am Harshini Narahari</h1>

        <h4 className="home-role">MERN Stack Developer</h4>

        <p className="home-description">
          Passionate about building full-stack web applications with modern technologies.
        </p>

        <button
          className="home-button"
          onClick={() => navigate('/about')}
        >
          About Me
        </button>
      </div>
      <div className="home-image-container">
          <img src="/Photo.jpg.jpeg"  className="home-image" /> 
      </div>

    </div>
  )
}

export default Home
