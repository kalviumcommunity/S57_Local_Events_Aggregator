import React from "react";
import Navbar from "../Navbar";
import MySwiper from "../Swiper";
import Event from "../Event/Event";
import ContactForm from "../Contact";
import "../MainPage/MainPage.css";

function HomeComponent() {
  return (
    <div className="scrollable-container">
      <Navbar />
      <div className="container-bg"></div>
      <MySwiper />
      <Event />
      <ContactForm />
    </div>
  );
}

export default HomeComponent;
