import React from "react";
// import image from '../../assets/images/logo.png';
import { HashLink as Link } from "react-router-hash-link";
import { FiMoon, FiCode, FiMenu } from "react-icons/fi";
import "./Header.css";

const Header = () => (
  <div className="header">
    <div className="float-left">
      <Link to="/">
        <FiCode size={30} className="code-icon" />
      </Link>
    </div>
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
      <FiMoon className="moon-icon" size={20} />
    </div>
    <FiMenu className="menu-icon" size={30} />
  </div>
);

export default Header;
