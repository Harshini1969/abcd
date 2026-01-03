import React from "react";
import { FaGraduationCap, FaUniversity, FaCalendarAlt } from "react-icons/fa";
import "./Education.css";

function Education() {
  return (
    <div className="education-container">
      <div className="education-content">
         <h1>Education</h1>

      <div className="education-item">
        <h3>
          <FaGraduationCap className="edu-icon" />
          Bachelor of Technology (B.Tech)
        </h3>
        <p>
          <FaUniversity className="edu-icon" />
          Computer Science Engineering, QIS Institute of Technology
        </p>
        <p>
          <FaCalendarAlt className="edu-icon" />
          2019 - 2023
        </p>
      </div>

      <div className="education-item">
        <h3>
          <FaGraduationCap className="edu-icon" />
          Intermediate (MPC)
        </h3>
        <p>
          <FaUniversity className="edu-icon" />
          Sri Chaitanya Junior College
        </p>
        <p>
          <FaCalendarAlt className="edu-icon" />
          2017 - 2019
        </p>
      </div>

      <div className="education-item">
        <h3>
          <FaGraduationCap className="edu-icon" />
          Secondary School
        </h3>
        <p>
          <FaUniversity className="edu-icon" />
          Narayana Public School
        </p>
        <p>
          <FaCalendarAlt className="edu-icon" />
          2016 - 2017
        </p>
      </div>

      </div>
     
       <div className="education-image">
        <img src="/Edu.jpg"  />
      </div>

    </div>
  );
}

export default Education;
