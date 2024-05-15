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
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492875466!2d77.30126945310806!3d12.954459531495921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715772448157!5m2!1sen!2sin"
          width="800"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>{" "}
      </div>
      <ContactForm />
    </div>
  );
}
export default HomeComponent;
