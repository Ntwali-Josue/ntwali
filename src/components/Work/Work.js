import React from "react";
import space from '../../assets/images/book-space.PNG';
import "./Work.css";

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-content">
        <div className="work-me">
          <h2>
            <span className="counter">03.</span>Work
          </h2>
        </div>
        <div className="work-list">
          <div className="work-item">
            <div className="project-image">
              <img src={space} alt="book space" width="450" />
            </div>
            <div className="project-description">
              <span className="featured">Feature project</span>
              <h3 className="project-title">Book Office Space</h3>
              <p>
                Book Space is a web application that allows users to search for
                books and create a list of books they want to read.
              </p>
              <div className="project-links">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
