import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

const App = () => (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
);

export default App;
