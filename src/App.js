import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import NPKForecast from "./components/NPKForecast";
import QAProjects from "./components/QAProjects";
import QAOrangeHRMManual from "./components/QA/QAOrangeHRMManual";
import QABugReporting from "./components/QA/QABugReporting";
import QAReqresPostman from "./components/QA/QAReqresPostman";
import QAReqresCypress from "./components/QA/QAReqresCypress";
import QAOrangeHRMFinal from "./components/QA/QAOrangeHRMFinal";
import QASauceDemoKatalon from "./components/QASauceDemoKatalon";
import rakamin from "./components/rakamin";
import NuriPpt from "./components/NuriPpt";
import Eatzy from "./components/Eatzy";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ScrollToTop from "./components/ScrollToTop";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/npk-forecast" element={<NPKForecast />} />
          <Route path="/eatzy" element={<Eatzy />} />
          <Route path="/nuri-ppt" element={<NuriPpt />} />
          <Route path="/qa-projects" element={<QAProjects />} />
          <Route path="/qa/orangehrm-manual" element={<QAOrangeHRMManual />} />
          <Route path="/qa/bug-reporting" element={<QABugReporting />} />
          <Route path="/qa/reqres-postman" element={<QAReqresPostman />} />
          <Route path="/qa/reqres-cypress" element={<QAReqresCypress />} />
          <Route path="/qa/orangehrm-final" element={<QAOrangeHRMFinal />} />
          <Route path="/saucedemo-katalon" element={<QASauceDemoKatalon />} />
          <Route path="/raka-min" element={<rakamin />} />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
