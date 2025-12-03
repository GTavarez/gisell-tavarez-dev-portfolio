import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import HuskiesHub from "../../Pages/HuskiesHub/HuskiesHub";
import SmartBudgetPlanner from "../../Pages/SmartBudgetPlanner/SmartBudgetPlanner";
import Resume from "../../Pages/Resume/Resume";


import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* MAIN PORTFOLIO HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* CASE STUDIES */}
        <Route path="/huskieshub" element={<HuskiesHub />} />
        <Route path="/smart-budget-planner" element={<SmartBudgetPlanner />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
