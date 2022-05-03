import React from "react";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import "./Home.css";

const Home = () => {
  return (
    <main className="main-section">
      <section className="social-medias">
        <div className="social-medias-links">
          <a className="social-medias-link" href="https://github.com/Ntwali-Josue">
            <FiGithub size={20} /> 
          </a>
          <a className="social-medias-link" href="https://www.instagram.com/joshn_250/">
            <FiInstagram size={20} />
          </a>
          <a className="social-medias-link" href="https://twitter.com/JosueNtwali">
            <FiTwitter size={20} />
          </a>
          <a className="social-medias-link" href="https://www.linkedin.com/in/karangwa/">
            <FiLinkedin size={20} />
          </a>
        </div>
      </section>
      <section className="email-section">
        <div className="email">
        <a href="mailto:kntwalijos@gmail.com"> kntwalijos@gmail.com</a>
        </div>
      </section>
      
    </main>
  );
};

export default Home;
