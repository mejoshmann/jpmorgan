import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "./App.scss";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/AboutPage";
import Marine from "./pages/Marine";
import Projects from "./components/projects/Projects";
import ContactPage from "./pages/ContactPage";
import React from "react";

function App() {
 

  return (
    <BrowserRouter>
      <div className="App">

      <Helmet>
      <title>JP Morgan Construction - Expert Construction Services in Vancouver, BC</title>
      </Helmet>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Marine" element={<Marine />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
