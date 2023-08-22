import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import About from "./components/about/About"
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <About />
        <Routes> 
          <Route path="/Home" element={<Body />} />
          <Route path="/Projects" element={<Body />} />
          <Route path="/Careers" element={<Body />} />
          <Route path="/Contact" element={<Footer/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
