// src/Components/App/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

// Main pages
import Home from "../Home/Home";
import Resume from "../../Pages/Resume/Resume";

// Case studies
import HuskiesHub from "../../Pages/HuskiesHub/HuskiesHub";
import SmartBudgetPlanner from "../../Pages/SmartBudgetPlanner/SmartBudgetPlanner";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* RESUME PAGE */}
        <Route path="/resume" element={<Resume />} />

        {/* CASE STUDIES */}
        <Route path="/huskieshub" element={<HuskiesHub />} />
        <Route path="/smartbudgetplanner" element={<SmartBudgetPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
