import React from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import space from "../../assets/images/book-space.PNG";
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
                books and create a list of books they want to read. Book Space
                is a web application that allows users to search for books and
                create a list of books they want to read.
              </p>
              <div className="project-links">
                <ul>
                  <li>React</li>
                  <li>Ruby On Rails</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="project-details">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-github"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="work-item left">
            <div className="project-description-left">
              <span className="featured">Feature project</span>
              <h3 className="project-title">Book Office Space</h3>
              <p>
                Book Space is a web application that allows users to search for
                books and create a list of books they want to read. Book Space
                is a web application that allows users to search for books and
                create a list of books they want to read.
              </p>
              <div className="project-links">
                <ul>
                  <li>React</li>
                  <li>Ruby On Rails</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="project-details">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-github"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src={space} alt="book space" width="450" />
            </div>
          </div>
          <div className="work-item">
            <div className="project-image">
              <img src={space} alt="book space" width="450" />
            </div>
            <div className="project-description">
              <span className="featured">Feature project</span>
              <h3 className="project-title">Book Office Space</h3>
              <p>
                Book Space is a web application that allows users to search for
                books and create a list of books they want to read. Book Space
                is a web application that allows users to search for books and
                create a list of books they want to read.
              </p>
              <div className="project-links">
                <ul>
                  <li>React</li>
                  <li>Ruby On Rails</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="project-details">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-github"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="work-item left">
            <div className="project-description-left">
              <span className="featured">Feature project</span>
              <h3 className="project-title">Book Office Space</h3>
              <p>
                Book Space is a web application that allows users to search for
                books and create a list of books they want to read. Book Space
                is a web application that allows users to search for books and
                create a list of books they want to read.
              </p>
              <div className="project-links">
                <ul>
                  <li>React</li>
                  <li>Ruby On Rails</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="project-details">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-github"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://github.com/Ntwali-Josue"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src={space} alt="book space" width="450" />
            </div>
          </div>
        </div>
        <div className="more-projects">
          <h2 className="more-projects-title">Other noteworthy projects</h2>
          <ul className="projects-section">
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <FiGithub size={25} className="project-external-link"/>
                    <FiExternalLink
                      size={25}
                      className="project-external-link"
                    />
                  </div>
                </div>
                <h3 className="project-card-title">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Book Office Space
                  </a>
                </h3>
                <div className="project-card-description">
                  <p>
                    Book Space is a web application that allows users to search
                    for books and create a list of books they want to read.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Ruby On Rails</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <FiGithub size={25} className="project-external-link"/>
                    <FiExternalLink
                      size={25}
                      className="project-external-link"
                    />
                  </div>
                </div>
                <h3 className="project-card-title">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Book Office Space
                  </a>
                </h3>
                <div className="project-card-description">
                  <p>
                    Book Space is a web application that allows users to search
                    for books and create a list of books they want to read.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Ruby On Rails</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <FiGithub size={25} className="project-external-link"/>
                    <FiExternalLink
                      size={25}
                      className="project-external-link"
                    />
                  </div>
                </div>
                <h3 className="project-card-title">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Book Office Space
                  </a>
                </h3>
                <div className="project-card-description">
                  <p>
                    Book Space is a web application that allows users to search
                    for books and create a list of books they want to read.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Ruby On Rails</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <FiGithub size={25} className="project-external-link"/>
                    <FiExternalLink
                      size={25}
                      className="project-external-link"
                    />
                  </div>
                </div>
                <h3 className="project-card-title">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Book Office Space
                  </a>
                </h3>
                <div className="project-card-description">
                  <p>
                    Book Space is a web application that allows users to search
                    for books and create a list of books they want to read.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Ruby On Rails</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <FiGithub size={25} className="project-external-link"/>
                    <FiExternalLink
                      size={25}
                      className="project-external-link"
                    />
                  </div>
                </div>
                <h3 className="project-card-title">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    Book Office Space
                  </a>
                </h3>
                <div className="project-card-description">
                  <p>
                    Book Space is a web application that allows users to search
                    for books and create a list of books they want to read.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Ruby On Rails</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div>
                  <div className="project-card-top">
                    <FiFolder size={25} className="folder" />
                    <div>
                      <FiGithub size={25} className="project-external-link"/>
                      <FiExternalLink
                        size={25}
                        className="project-external-link"
                      />
                    </div>
                  </div>
                  <h3 className="project-card-title">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      Book Office Space
                    </a>
                  </h3>
                  <div className="project-card-description">
                    <p>
                      Book Space is a web application that allows users to
                      search for books and create a list of books they want to
                      read.
                    </p>
                  </div>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Ruby On Rails</span>
                  <span>Python</span>
                  <span>SQL</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Work;
