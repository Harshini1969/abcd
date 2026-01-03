import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project">
      <h4 className="project-subtitle">Projects</h4>
      <h1 className="project-title">My Recent Works</h1>

      <div className="project-list">
               {/* Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built using React to showcase my skills,
            projects, and resume.
          </p>
          <p className="project-tech">React, CSS</p>
        </div>

            {/* Project 2 */}
        <div className="project-card">
          <h3>Hospital Management System</h3>
          <p>
            A full-stack web application for managing hospital records with CRUD
            operations.
          </p>
          <p className="project-tech">React, CSS</p>
        </div>

              {/* Project 3 */}
        <div className="project-card">
          <h3>Car Rental App</h3>
          <p>
            A full-stack web application for renting the car with some operation
          </p>
          <p className="project-tech">React, CSS</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
