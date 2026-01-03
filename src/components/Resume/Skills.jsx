import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,} from "react-icons/fa";
 import "./Skills.css";

function Skills() {
  let myskills = [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt /> },
    { name: "JavaScript", level: 80, icon: <FaJsSquare /> },
    { name: "React", level: 75, icon: <FaReact /> },
    { name: "Node", level: 70, icon: <FaNodeJs /> },
  ];

  return (
    <div className="container">
      <h1 className="title">My Skills</h1>

      <p className="description">
        Mastering the full spectrum of web technologies, I seamlessly integrate
        front-end and back-end development to create cohesive, high-performing
        applications.
      </p>

      <div className="grid">
        {myskills.map((item, index) => (
          <div className="skill" key={index}>
            <div className="info">
              <h3 className="skill-name">
                <span className="skill-icon">{item.icon}</span>
                {item.name}
              </h3>
              <p>{item.level}%</p>
            </div>

            <div className="a">
              <div
                className={`b ${item.name.toLowerCase()}`}
                style={{ width: `${item.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
