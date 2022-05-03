import React from "react";
import image from '../../assets/images/logo.png';
import { HashLink as Link } from "react-router-hash-link";
import { FiMoon } from 'react-icons/fi'
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
      <FiMoon className="moon-icon" size={20}/>
    </div>
  </div>
);

export default Header;
