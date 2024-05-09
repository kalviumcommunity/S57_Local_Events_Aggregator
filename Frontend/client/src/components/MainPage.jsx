import React from "react";
import Navbar from "./Navbar";
import MySwiper from "./Swiper";
import Event from "./Event";
import "./MainPage.css";
function HomeComponent() {
  return (
    <div>
      <Navbar />
      <div className="container-bg"></div>
      <MySwiper />
      <Event />
    </div>
  );
}
export default HomeComponent;
