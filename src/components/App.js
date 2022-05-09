import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import Resume from "./Resume/Resume";

const App = () => (
    <BrowserRouter>
  <div className="app">
      <Header />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
  </div>
      <Routes>
        <Route element={<Resume />} path="/resume.pdf" />
      </Routes>
    </BrowserRouter>
);

export default App;
