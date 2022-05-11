import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";

const App = () => (
    <HashRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Resume />} path="/resume.pdf" />
      </Routes>
    </HashRouter>
);

export default App;
