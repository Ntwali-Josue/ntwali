import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FiCode } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState("nav-links-sect");
  const [toggleIcon, setToggleIcon] = useState("menu-icon");

  const navToggle = () => {
    active === "nav-links-sect"
      ? setActive("nav-links-sect nav-active")
      : setActive("nav-links-sect");

    toggleIcon === "menu-icon"
      ? setToggleIcon("menu-icon toggle")
      : setToggleIcon("menu-icon");
  };
  return (
    <div className="header">
      <div className="float-left">
        <Link to="/#">
          <FiCode size={30} className="code-icon" />
        </Link>
      </div>
      <div className="nav-links-section">
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className={active}>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
