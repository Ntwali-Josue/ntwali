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
              <TabPanel>
              <div className="experience-description">
                  <div className="experience-title">
                    <h3>
                      Full stack developer
                      <a href="https://microverse.org" className="company">~ Andela</a>
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
