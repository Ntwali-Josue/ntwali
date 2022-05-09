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
            <li className="skills">JavaScript</li>
            <li className="skills">Ruby</li>
            <li className="skills">Html</li>
            <li className="skills">Css</li>
          </ul>
          <ul className="frameworks-list">
            <li className="list-title">Frameworks</li>
            <li className="skills">Boostrap</li>
            <li className="skills">Ruby on Rails</li>
            <li className="skills">RSPev</li>
            <li className="skills">CapyBara</li>
          </ul>
          <ul className="skills-list">
            <li className="list-title">Skills</li>
            <li className="skills">Codekit</li>
            <li className="skills">Github</li>
            <li className="skills">Codepen</li>
            <li className="skills">Gitlab</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
