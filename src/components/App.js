import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";

const App = () => (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Resume />} path="/resume.pdf" />
      </Routes>
    </BrowserRouter>
);

export default App;
