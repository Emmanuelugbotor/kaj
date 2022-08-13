import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import SocialsM from "./components/social";
import Partner from "./pages/Partner";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/partners" element={<Partner />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
