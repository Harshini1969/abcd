import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/Details/About';
import Contact from './components/Details/Contact';
import Project from './components/Project/Project';
import Resume from './components/Resume/Resume';
import Skills from './components/Resume/Skills';
import Education from './components/Resume/Education';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/resume" element={<Resume/>} />
        {/* <Route path="/footer" element={<Footer/>} /> */}
      </Routes>

     
    </BrowserRouter>
  )
} 

export default App
