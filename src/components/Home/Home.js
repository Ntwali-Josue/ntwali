import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiArrowDown,
  FiFileText,
} from "react-icons/fi";
import TypeAnimation from "react-type-animation";
import "./Home.css";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <section className="social-medias">
        <div className="social-medias-links">
          <a
            target="_blank"
            rel="noreferrer"
            className="social-medias-link"
            href="https://github.com/Ntwali-Josue"
          >
            <FiGithub size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-medias-link"
            href="https://www.instagram.com/joshn_250/"
          >
            <FiInstagram size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-medias-link"
            href="https://twitter.com/JosueNtwali"
          >
            <FiTwitter size={20} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="social-medias-link"
            href="https://www.linkedin.com/in/karangwa/"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </section>
      <section className="email-section">
        <div className="email">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:kntwalijos@gmail.com"
          >
            kntwalijos@gmail.com
          </a>
        </div>
      </section>
      <main className="main-section">
        <section className="intro-section">
          <div className="intro">
            <h1>Hi, my name is</h1>
          </div>
          <div className="intro-name">
            <span>Karangwa Ntwali Josue</span>
          </div>
          <div className="intro-description">
            <p>I am a
            {" "}
            <TypeAnimation
              cursor={true}
              sequence={[
                `Full Stack developer`,
                2000,
                "Open Source enthusiast",
                2000,
                "Student ",
                2000,
              ]}
              speed={100}
              wrapper="a"
              repeat={Infinity}  
              className="intro-description-text"            
            />

              {" "}
              with a passion for building digital applications. I have a strong
              background in both front-end and backend development. I am
              currently freelancing and looking for a new challenge.
            </p>
          </div>
          <div className="intro-resume">
            <a href="/" target="_blank" rel="noreferrer">
              <FiFileText size={20} className="file" />
              GET MY RESUME
            </a>
          </div>
          <div className="down-arrow">
            <a href="#about">
              <FiArrowDown size={60} />
            </a>
          </div>
        </section>
      </main>
      <About />

    </div>
  );
};

export default Home;
