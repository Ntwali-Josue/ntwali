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
          <div className="about-me-description">
            <p>
              I am a full stack developer with a passion for building
              applications. I have a strong background in both front-end and
              backend development. I am currently freelancing and looking for a
              new challenge.
            </p>
          </div>
            <img src={profile} alt="profile" width="300px" className="profile-image"/>
        </div>
        <div className="about-me-skills">
          <ul>
            <li className="list-title">Languages</li>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Html</li>
            <li>Css</li>
          </ul>
          <ul className="frameworks-list">
            <li className="list-title">Frameworks</li>
            <li>Boostrap</li>
            <li>Ruby on Rails</li>
            <li>RSPev</li>
            <li>CapyBara</li>
          </ul>
          <ul className="skills-list">
            <li className="list-title">Skills</li>
            <li>Codekit</li>
            <li>Github</li>
            <li>Codepen</li>
            <li>Gitlab</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
