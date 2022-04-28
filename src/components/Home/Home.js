import React from "react";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  return (
    <main className="main-section">
      <section className="social-medias">
        <div className="social-medias-links">
          <a href="/">
            <FiGithub size={20} /> 
          </a>
        </div>
        <div className="social-medias-links">
          <a href="/">
            <FiInstagram size={20} />
          </a>
        </div>
        <div className="social-medias-links">
          <a href="/">
            <FiTwitter size={20} />
          </a>
        </div>
        <div className="social-medias-links">
          <a href="/">
            <FiLinkedin size={20} />
          </a>
        </div>
      </section>
      <section className="about-me">
        <h1> About Me </h1>
      </section>
    </main>
  );
};

export default Home;
