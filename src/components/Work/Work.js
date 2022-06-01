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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://work-spaces.netlify.app/"
              >
                <img src={space} alt="book space" width="450" />
              </a>
            </div>
            <div className="project-description">
              <span className="featured">Feature project</span>
              <h3 className="project-title">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://work-spaces.netlify.app/"
                >
                  Book Office Space
                </a>
              </h3>
              <p>
                Book Space is a single page web application that uses token
                Authentication technique to authorize the client side to access
                the respective resources. Authorization is managed based on the
                user role. The main concept behind the project is to allow
                service provider to let its clients make online reservation of
                the offices spaces around the world.
              </p>
              <div className="project-links">
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Rails</li>
                  <li>Node.js</li>
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
              <h3 className="project-title">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://s-travelers-hub.netlify.app/"
                >
                  Space traveller's Hub
                </a>
              </h3>
              <p>
                Space Traveler's Hub is designed to allow clients to get the
                latest information about the space rockets and missions
                available at SpaceX. The app allows users to reserve one or
                several rockets as well as join one or several space missions.
                All reservations and missions can be canceled by pressing the
                respective buttons. All reserved rockets and joined missions can
                also be monitored in a Profile section.
              </p>
              <div className="project-links">
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>SQL</li>
                  <li>API</li>
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://s-travelers-hub.netlify.app/"
              >
                <img src={falcon} alt="Space traveller's Hub" width="450" />
              </a>
            </div>
          </div>
          <div className="work-item">
            <div className="project-image">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://ntwali-josue.github.io/zero-thirsty/"
              >
                <img src={zero} alt="zero thirst" width="450" />
              </a>
            </div>
            <div className="project-description">
              <span className="featured">Feature project</span>
              <h3 className="project-title">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ntwali-josue.github.io/zero-thirsty/"
                >
                  Zero thirst
                </a>
              </h3>
              <p>
                Zero thirst is a web app that fetches different kinds of
                cocktail drinks and displays them to the users. The users can
                like, and comment on one or more drinks as they wishes.
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
              <h3 className="project-title">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Ntwali-Josue/leaderboard"
                >
                  Leaderboard App
                </a>
              </h3>
              <p>
                The leaderboard website displays scores submitted by different
                players. It also allows you to submit your score.
              </p>
              <div className="project-links">
                <ul>
                  <li>Javascript</li>
                  <li>Node.js</li>
                  <li>Api</li>
                  <li>Postgresql</li>
                </ul>
              </div>
              <div className="project-details">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-github"
                  href="https://github.com/Ntwali-Josue/leaderboard"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="project-details-external"
                  href="https://ntwali-josue.github.io/leaderboard/"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="project-image">
              <a
                target="_blank"
                rel="noreferrer"
                className="project-details-external"
                href="https://ntwali-josue.github.io/leaderboard/"
              >
                <img src={budget} alt="book space" width="450" />
              </a>
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
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Ntwali-Josue/Budget-App"
                    >
                      <FiGithub size={25} className="project-external-link" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://radiant-mesa-62154.herokuapp.com"
                    >
                      <FiExternalLink
                        size={25}
                        className="project-external-link"
                      />
                    </a>
                  </div>
                </div>
                <h3 className="project-card-title">Budget App</h3>
                <div className="project-card-description">
                  <p>
                    A web app, where users can manage their budget, with a list
                    of transactions to see how much money is spent.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Rails</span>
                  <span>RSpec</span>
                  <span>Postgresql</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Ntwali-Josue/tronald-trump"
                    >
                      <FiGithub size={25} className="project-external-link" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://ntwali-josue.github.io/tronald-trump/"
                    >
                      <FiExternalLink
                        size={25}
                        className="project-external-link"
                      />
                    </a>
                  </div>
                </div>
                <h3 className="project-card-title">Tronald Trump</h3>
                <div className="project-card-description">
                  <p>
                    A mobile web app that helps the user to navigate through
                    Donald Trump's quotes related to a chosen or filtered topic.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Redux</span>
                  <span>Node.js</span>
                  <span>API</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div>
                  <div className="project-card-top">
                    <FiFolder size={25} className="folder" />
                    <div>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/Ntwali-Josue/Math-Magician"
                      >
                        <FiGithub size={25} className="project-external-link" />
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://ntwali-josue.github.io/Math-Magician/"
                      >
                        <FiExternalLink
                          size={25}
                          className="project-external-link"
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className="project-card-title">Math Magician</h3>
                  <div className="project-card-description">
                    <p>
                      A website application for all the fans of mathematics that
                      allow users to make calculations and get random
                      mathematics quotes.
                    </p>
                  </div>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Html</span>
                  <span>webpack</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Ntwali-Josue/RecipeApp"
                    >
                      <FiGithub size={25} className="project-external-link" />
                    </a>
                  </div>
                </div>
                <h3 className="project-card-title">Recipe App</h3>
                <div className="project-card-description">
                  <p>
                    Recipe App is a web application that allows users to create,
                    and delete recipes, foods, and ingredients.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>React</span>
                  <span>Rails</span>
                  <span>Postgresql</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Ntwali-Josue/Blog-app"
                    >
                      <FiGithub size={25} className="project-external-link" />
                    </a>
                  </div>
                </div>
                <h3 className="project-card-title">Blog App</h3>
                <div className="project-card-description">
                  <p>
                    Blog App is a CRUD web application that is built with MVC
                    architecture, to allows users to manage their posts.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>Rails</span>
                  <span>RSpec</span>
                  <span>Postgresql</span>
                </div>
              </div>
            </li>
            <li className="project-card">
              <div className="project-card-content">
                <div className="project-card-top">
                  <FiFolder size={25} className="folder" />
                  <div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/Ntwali-Josue/School-Library"
                    >
                      <FiGithub size={25} className="project-external-link" />
                    </a>
                  </div>
                </div>
                <h3 className="project-card-title">School library</h3>
                <div className="project-card-description">
                  <p>
                    Simple UI console app built for allowing Users to manage
                    library for adding books, students or teachers, rentals for
                    any book.
                  </p>
                </div>
                <div className="project-card-stacks">
                  <span>Ruby</span>
                  <span>RSpec</span>
                  <span>Postgresql</span>
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
