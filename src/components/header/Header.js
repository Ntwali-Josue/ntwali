import React from "react";
import image from '../../assets/images/logo.png';
import { HashLink as Link } from "react-router-hash-link";
import './Header.css';

const Header = () => (
  <div className="header">
    <Link to="/">
      <img src={image} alt="header logo" className="nav-logo" />
    </Link>
    <div className="nav-links-section">
      <Link className="nav-links" to="#about">
        <span className="links-counter">01.</span> About
      </Link>
      <Link className="nav-links" to="#experience">
      <span className="links-counter">02.</span> Experience
      </Link>
      <Link className="nav-links" to="#work">
      <span className="links-counter">03.</span> Work
      </Link>
      <Link className="nav-links" to="#contact">
      <span className="links-counter">04.</span> Contact
      </Link>
      <Link className="nav-links resume-btn" to="#resume">
        Resume
      </Link>
    </div>
  </div>
);

export default Header;
