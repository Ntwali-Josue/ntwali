import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BiCalendar } from "react-icons/bi";
import { GiDiamonds } from "react-icons/gi";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-content">
        <div className="title-section">
          <h2>
            <span className="counter">02.</span>Experience
          </h2>
        </div>
        <div className="experience-list">
          <Tabs defaultIndex={0}>
            <TabList>
              <Tab selected={true}>Microverse</Tab>
              <Tab>Andela</Tab>
              <Tab>Keetela</Tab>
              <Tab>Lifestore Pharmacy</Tab>
              <Tab>Trusella</Tab>
            </TabList>
            <div>
              <TabPanel>
                <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer ~ {" "}
                      <a href="https://microverse.org" className="company">Microverse</a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> January 2020 - Present
                    </span>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Mentored junior web developers, provided technical support through code reviews.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Proposed improvements to code organization to improve code quality and overall performance.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Provided advice and tips on how to maintain motivation to maintain longevity in the program.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer ~
                      <a href="https://microverse.org" className="company"> Andela</a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> January 2020 - Present
                    </span>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Created REST APIs using Javascript, mainly with Node.js and Express.js.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Installed and configured virtualized environments like Docker.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Run different Databases using MongoDB, firebase, and PostgreSQL.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Integrated and tested the codebase using Jest, Enzyme, Travis CI, and Mocha/Chai.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer
                      <a href="https://microverse.org" className="company">~ Keetela</a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> January 2020 - Present
                    </span>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Develop a mobile application for Keetela tutors to access easiy the progress of their students.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Develop backend API for the official Keetela tutoring platform.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Build multi-store eCommerce as a full-stack engineer as DevOps engineer
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer
                      <a href="https://microverse.org" className="company">~ Lifestore Health Pharmacy</a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> January 2020 - Present
                    </span>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Run backend apps using Python Django framework to deliver solutions and meet clients’ needs.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Implemented and improved pharmIQ UI as suggested by the Product Manager.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                    Created and interacted with GraphQL queries, to make order queries from the backend database.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer
                      <a href="https://microverse.org" className="company">~ Trusella</a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> January 2020 - Present
                    </span>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                      I worked as a software engineer at Microverse, a startup
                      that provides a platform for students to learn
                      programming. I spearheaded the development of the
                      application's front-end and backend.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                      I worked as a software engineer at Microverse, a startup
                      that provides a platform for students to learn
                      programming. I spearheaded the development of the
                      application's front-end and backend.
                    </p>
                  </div>
                  <div className="flex experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond"/>
                    </p>
                    <p>
                      I worked as a software engineer at Microverse, a startup
                      that provides a platform for students to learn
                      programming. I spearheaded the development of the
                      application's front-end and backend.
                    </p>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
