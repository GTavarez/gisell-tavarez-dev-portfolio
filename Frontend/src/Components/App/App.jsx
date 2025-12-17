import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 700,
  once: true,
});

import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import HuskiesHub from "../../Pages/HuskiesHub/HuskiesHub";
import SmartBudgetPlanner from "../../Pages/SmartBudgetPlanner/SmartBudgetPlanner";
import ResumeDownload from "../../Pages/ResumeDownload/ResumeDownload";
import Loader from "../Loader/Loader";

function App() {
  // Load stored theme or default to dark
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Apply theme to <body> whenever it changes
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Redirect /resume → /resume-download */}
        <Route
          path="/resume"
          element={<Navigate to="/resume-download" replace />}
        />

        <Route path="/resume-download" element={<ResumeDownload />} />
        <Route path="/huskieshub" element={<HuskiesHub />} />
        <Route path="/smartbudgetplanner" element={<SmartBudgetPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
