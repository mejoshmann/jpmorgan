import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.scss";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Marine from "./pages/Marine";
// import Projects from "./components/projects/Projects";
import ContactPage from "./pages/ContactPage";
import React from "react";
import Slider from "./components/Slider/Projectslide";
// import Spa from "./pages/Spa";
// import Wedo from "./components/wedo/Wedo";
// import Weabout from "./components/wedo/Weabout";
// import Weexpect from "./components/wedo/Weexpect";
// import Weprojects from "./components/wedo/Weprojects";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <title>
            JP Morgan Construction - Expert Construction Services in Vancouver,
            BC
          </title>
          <meta
            name="description"
            content="Discover excellence in residential and commercial construction with JP Morgan Construction, your trusted partner in Vancouver, BC. Specializing in new builds, renovations, and commercial carpentry. our skilled team brings artistry and precision to every project. From revitalizing history to innovating for the present, we craft unique experiences that stand the test of time. Contact us today to turn your construction dreams into reality in the heart of Vancouver."
          />
          <meta
            name="keywords"
            content="Vancouver construction, BC builders, new builds, carpentry, framing, residential framing, residential carpentry, commercial carpentry, commercial framing, renovations, construction services, Vancouver contractors, building contractors, residential construction, commercial construction, Vancouver construction company, construction projects, expert builders, construction management, design-build, construction consulting, Vancouver construction services"
          />{" "}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4M9TQY4H73"
          ></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4M9TQY4H73');
              `}
          </script>
        </Helmet>
        <Header />
        <Routes>
           <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
           <Route path="/Projects" element={<Slider />} />
           <Route path="/Marine" element={<Marine />} />
           <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
