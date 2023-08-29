import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Steel from "./components/steel/Steel";
import Projects from "./pages/Projects";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Steel" element={<Steel />} />
          <Route path="/About" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
