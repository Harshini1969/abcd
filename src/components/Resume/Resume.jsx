import React, { useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import "./Resume.css";

function Resume() {
  const [activate, setActivate] = useState(null);

  return (
    <div className="resume">
      <div className="resume-wrapper">
        
        {/* LEFT SIDE */}
        <div className="resume-content">
          <h1 className="resume-title">My Resume</h1>

          <div className="resume-buttons">
            <button
              className={`resume-btn ${activate === "skills" ? "active" : ""}`}
              onClick={() => setActivate("skills")}
            >
              Skills
            </button>

            <button
              className={`resume-btn ${activate === "education" ? "active" : ""}`}
              onClick={() => setActivate("education")}
            >
              Education
            </button>
          </div>

          <div className="resume-content">
            {activate === "skills" && <Skills />}
            {activate === "education" && <Education />}
          </div>

          <button className="resume-download">
            Download Resume
          </button>
        </div>

        {/* RIGHT SIDE IMAGE (ONLY WHEN  BUTTON IS NOT CLICKED) */}
        {activate === null && (
          <div className="resume-image">
            <img src="/download.png"  />
          </div>
        )}

      </div>
    </div>
  );
}

export default Resume;
