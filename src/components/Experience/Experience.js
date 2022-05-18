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
              <Tab selected={true}>Keetela</Tab>
              <Tab>Andela</Tab>
              <Tab>Lifestore Pharmacy</Tab>
            </TabList>
            <div>
              <TabPanel>
                <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer ~
                      <a
                        href="https://keetela.com/"
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="company"
                      >
                        Keetela
                      </a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> July,2020 – July,2021
                    </span>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Develop a mobile application for Keetela tutors to access
                      easiy the progress of their students.
                    </p>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Develop backend API for the official Keetela tutoring
                      platform.
                    </p>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Worked with a team of three designers to build a marketing
                      website and e-commerce platform.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer ~
                      <a
                        href="https://rwanda.andela.com/"
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="company"
                      >
                        {" "}
                        Andela
                      </a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> April 2020 – June 2021
                    </span>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Work with a variety of different languages, frameworks,
                      and content management systems such as JavaScript,
                      TypeScript, React, Node.js, Express.js, etc.
                    </p>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Write modern, performant, and robust code for a diverse
                      array of client and internal projects.
                    </p>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Integrated and tested the codebase using Jest, Enzyme,
                      Travis CI, and Mocha/Chai.
                    </p>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer ~
                      <a
                        href="https://lifestoreshealthcare.com/"
                        target="_blank"
                        rel="noreferrer noopenner"
                        className="company"
                      >
                        Lifestore Pharmacy
                      </a>
                    </h3>
                    <span className="date">
                      <BiCalendar size={15} /> Jan 2021 -April 2021
                    </span>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Developed and shipped highly interactive web applications
                      for PharmIQ using Django.
                    </p>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Interfaced with user experience designers and other
                      developers to ensure thoughtful and coherent user
                      experiences across lifestyle health pharmacy’s web
                      layouts.
                    </p>
                  </div>
                  <div className="experience-details">
                    <p>
                      <GiDiamonds size={10} className="diamond" />
                    </p>
                    <p>
                      Communicate and collaborate with multi-disciplinary teams
                      of engineers, designers, pharmacists, clients, and
                      stakeholders on a daily basis.
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
