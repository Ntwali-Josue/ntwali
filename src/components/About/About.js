import React from "react";
import profile from "../../assets/images/profile.jpeg";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-me">
          <h2>
            <span className="counter">01.</span>About me
          </h2>
        </div>
        <div className="flex">
          <img src={profile} alt="profile" width="300px" className="profile-image-mobile"/>
          <div className="about-me-description">
            <p>
              I am an enthusiastic Software developer with a year and half of experience in web design and development across diverse industries,  includes programming, debugging, and wireframes.
              I am always striving to contribute to problem-solving activities using my programming skills. I enjoy being in a tech community, and passionate about building first-class web applications I am currently looking for a role as full-stack web developer. Below are a summarized list of technologies I mostly use
            </p>
          </div>
            <img src={profile} alt="profile" width="350px" className="profile-image"/>
        </div>
        <div className="about-me-skills">
          <ul>
            <li className="list-title">Languages</li>
            <li className="skills">JavaScript</li>
            <li className="skills">Ruby</li>
            <li className="skills">Python</li>
            <li className="skills">Html</li>
          </ul>
          <ul className="frameworks-list">
            <li className="list-title">Frameworks</li>
            <li className="skills">React.js</li>
            <li className="skills">Node.js</li>
            <li className="skills">Ruby on Rails</li>
            <li className="skills">Django</li>
          </ul>
          <ul className="skills-list">
            <li className="list-title">Skills</li>
            <li className="skills">Git</li>
            <li className="skills">SQL</li>
            <li className="skills">Docker</li>
            <li className="skills">Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
