// App.jsx

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";
import HomePage from "./components/LandingPage/HomePage";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage/MainPage";
import MySwiper from "./components/Swiper";
import Event from "./components/Event/Event";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/SignUp";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import ContactForm from "./components/Contact";
import { UserProvider } from "./components/Service/UserContext";

import "./App.css";

const trackingId = "G-SSM973B738";
const tagManagerArgs = {
  gtmId: "GTM-5L4T6356",
};
TagManager.initialize(tagManagerArgs);

function usePageViews() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);
}

function App() {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  usePageViews();

  return (
    <UserProvider>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/MySwiper" element={<MySwiper />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
    </UserProvider>
  );
}

export default App;