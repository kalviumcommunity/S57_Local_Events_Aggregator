import React from "react";
import Navbar from "./Navbar";
import MySwiper from "./Swiper";
import Event from "./Event";
import ContactForm from "./Contact";
import "./MainPage.css";
function HomeComponent() {
  return (
    <div>
      <Navbar />
      <div className="container-bg"></div>
      <MySwiper />
      <Event />
      <ContactForm />
      <p>
        Welcome to Local Event Aggregator your go-to platform for discovering
        local events!
      </p>
    </div>
  );
}
export default HomeComponent;
