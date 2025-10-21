import React from "react";
import "reactflow/dist/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ChooseAdventure from "./pages/ChooseAdventure";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-minecraft bg-gradient-to-b from-green-800 to-green-900 text-white">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/choose" element={<ChooseAdventure />} />   
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
