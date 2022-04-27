import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";

const App = () => (
  <Router>
    <Header />
    <Home />
  </Router>
)

export default App;
