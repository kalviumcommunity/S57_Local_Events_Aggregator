import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./components/LandingPage/HomePage";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage/MainPage";
import MySwiper from "./components/Swiper";
import MainEvent from "./components/MainEvent";
import Event from "./components/Event";
import ScrollTop from "./components/ScrollTop";
import SignInSignupWithLocalStorage from "./components/Authentication/SignInout";
import "./App.css";
import ReactGA from "react-ga";

const trackingId = "G-SSM973B738"; // Replace with your actual tracking ID

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

function App() {
  useEffect(() => {
    ReactGA.initialize(trackingId); // Initialize GA
    ReactGA.pageview(window.location.pathname + window.location.search); // Track initial page view
  }, []);

  usePageViews();

  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/MySwiper" element={<MySwiper />} />
        <Route path="/MainEvent" element={<MainEvent />} />
        {/* Add more routes as needed */}
      </Routes>
      <SignInSignupWithLocalStorage />
    </div>
  );
}

export default App;
