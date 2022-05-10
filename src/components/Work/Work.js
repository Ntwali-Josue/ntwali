import React from "react";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";
import space from "../../assets/images/book-space.PNG";
import budget from "../../assets/images/budget-app.JPG";
import zero from "../../assets/images/zero-thirsty.JPG";
import falcon from "../../assets/images/falcon.JPG";
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
                Book Space is a single page web application that uses token
                Authentication technique to authorize the client side to access
                the respective resources, Authorization is managed based on the
                user role. The main concept behind the project is to allow
                service provider to let its clients make online reservation of
                the offices spaces around the world.
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
                  href="https://github.com/Ntwali-Josue/book-appointment-front-end"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://work-spaces.netlify.app/"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="work-item left">
            <div className="project-description-left">
              <span className="featured">Feature project</span>
              <h3 className="project-title">Budget App</h3>
              <p>
                Budget App is a mobile web application, where a user can manage
                your budget. A user can have a list of transactions associated
                with a category, to see how much money spent.
              </p>
              <div className="project-links">
                <ul>
                  <li>React</li>
                  <li>Ruby On Rails</li>
                  <li>RSpec</li>
                  <li>Postgresql</li>
                  <li>Heroku</li>
                </ul>
              </div>
              <div className="project-details">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-github"
                  href="https://github.com/Ntwali-Josue/Budget-App"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://radiant-mesa-62154.herokuapp.com"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src={budget} alt="book space" width="450" />
            </div>
          </div>
          <div className="work-item">
            <div className="project-image">
              <img src={zero} alt="zero thirst" width="450" />
            </div>
            <div className="project-description">
              <span className="featured">Feature project</span>
              <h3 className="project-title">Zero thirst</h3>
              <p>
                Zer0 thirst is a web app that fetches different kinds of
                cocktail drinks and displays them to the user. The user can
                like, comment on one or more drinks as he/she wishes.
              </p>
              <div className="project-links">
                <ul>
                  <li>Javascript</li>
                  <li>webpack</li>
                  <li>API</li>
                  <li>Jest</li>
                </ul>
              </div>
              <div className="project-details">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-github"
                  href="https://github.com/Ntwali-Josue/zero-thirsty"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://ntwali-josue.github.io/zero-thirsty/"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="work-item left">
            <div className="project-description-left">
              <span className="featured">Feature project</span>
              <h3 className="project-title">Space traveller's Hub</h3>
              <p>
              Space Traveler' Hub is designed to allow cliant to get latest information about the space 
              rockets and missions availiabele at SpaceX.
              The app allows user to reserve one or several rockets as well as join one or several space missions.
              All reservations and missions can be canceled by pressing the respective buttons.
              All reserved rockets and joined missions can also be monitored in a Profile section.
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
                  href="https://github.com/Ntwali-Josue/space-travelers-hub-app"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://s-travelers-hub.netlify.app/"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-image">
              <img src={falcon} alt="Space traveller's Hub" width="450" />
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
                    <FiGithub size={25} className="project-external-link" />
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
                    <FiGithub size={25} className="project-external-link" />
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
                    <FiGithub size={25} className="project-external-link" />
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
                    <FiGithub size={25} className="project-external-link" />
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
                    <FiGithub size={25} className="project-external-link" />
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
                      <FiGithub size={25} className="project-external-link" />
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
