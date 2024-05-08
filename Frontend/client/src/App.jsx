import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import MySwiper from "./components/Swiper";
import Event from "./components/Event";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/ok" element={<swiper-section />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
