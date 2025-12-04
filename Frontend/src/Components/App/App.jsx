import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Home Page Sections (called directly inside App)
import Hero from "../Hero/Hero";
/* import About from "../About/About"; */
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ResumeDownload from "../../Pages/ResumeDownload/ResumeDownload";

// Case Study Pages
import HuskiesHub from "../../Pages/HuskiesHub/HuskiesHub";
import SmartBudgetPlanner from "../../Pages/SmartBudgetPlanner/SmartBudgetPlanner";

// Global layout components
import Navbar from "../Navbar/Navbar";
/* import Footer from "../Footer/Footer"; */

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* 🔵 MAIN PORTFOLIO PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <About /> */}
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        {/* 🔵 RESUME DOWNLOAD PAGE */}
        <Route path="/resume-download" element={<ResumeDownload />} />

        {/* 🔵 CASE STUDIES */}
        <Route path="/huskieshub" element={<HuskiesHub />} />
        <Route path="/smart-budget-planner" element={<SmartBudgetPlanner />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
