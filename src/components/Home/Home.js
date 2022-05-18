import React from "react";
import { FiGithub, FiLinkedin, FiArrowDown, FiMail } from "react-icons/fi";
import { SiAngellist } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import TypeAnimation from "react-type-animation";
import "./Home.css";
import Header from "../header/Header";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="app">
      <Header />
      <div className="home" id="#">
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
              href="https://angel.co/u/ntwali-josue"
            >
              <SiAngellist size={20} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="social-medias-link"
              href="https://medium.com/@kntwalijos"
            >
              <BsMedium size={20} />
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
              <p>
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    `A Full Stack Developer.`,
                    2000,
                    "An Open Source enthusiast.",
                    2000,
                    "UI & UX Designer.",
                    2000,
                  ]}
                  speed={100}
                  wrapper="a"
                  repeat={Infinity}
                  className="intro-description-text"
                />{" "}
              </p>
              <p>
                I have a passion for building digital applications. I have a
                strong background in both front-end and back-end development. I
                am currently freelancing and looking for a new opportunities.
              </p>
            </div>
            <div className="intro-resume">
              <a
                href="mailto:kntwalijos@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail size={20} className="file" />
                GET IN TOUCH WITH ME
              </a>
            </div>
            <div className="clear"></div>
            <div className="down-arrow">
              <a href="#about">
                <FiArrowDown size={60} />
              </a>
            </div>
          </section>
        </main>
      </div>
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
