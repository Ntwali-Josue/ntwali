import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Work from "./Work/Work";

const App = () => (
  <Router>
    <Header />
    <Home />
    <About />
    <Experience />
    <Work />
  </Router>
)

export default App;
