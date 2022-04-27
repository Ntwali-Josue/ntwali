import React from "react";
import './Home.css';

const Home = () => {
  return (
    <main className="main-section">
      <section className="social-medias">
          <div> Github </div>
          <div> Linkedin </div>
          <div> Twitter </div>
          <div> Instagram</div>
          <div className="border-right"></div>
      </section>
      <section className="about-me">
        <h1> About Me </h1>
      </section>
      <section className="email-section">
        <h1>kntwalijos@gmail.com</h1>
      </section>
    </main>
  );
};

export default Home;
