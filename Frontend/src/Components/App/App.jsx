// src/Components/App/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";

// Main pages
import Home from "../Home/Home";
import Resume from "../../Pages/Resume/Resume";

// Case studies
import HuskiesHub from "../../Pages/HuskiesHub/HuskiesHub";
import SmartBudgetPlanner from "../../Pages/SmartBudgetPlanner/SmartBudgetPlanner";

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

  return (
    <Router>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/huskieshub" element={<HuskiesHub />} />
        <Route path="/smartbudgetplanner" element={<SmartBudgetPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
