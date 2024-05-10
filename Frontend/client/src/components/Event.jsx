import React from "react";
import "./Event.css";
import eventimage from "../images/Event.jpg";
import kiteimage from "../images/Kite.jpg";
import para from "../images/para.png";
import designrights from "../images/ego.png";
import designleft from "../images/egoleft.png";
import { Link } from "react-router-dom";
const Event = () => {
  return (
    <div className="event">
      <div className="image">
        <img src={eventimage} className="event-img" alt="" />
      </div>
      <div className="details">
        <h5>About</h5>
        <h1>Summer Music Festival</h1>
        <p>
          Join us for an evening of live music featuring local bands and
          musicians.
          <br />
          Enjoy a variety of genres including rock, pop, jazz, and more. Food
          trucks <br />
          will be onsite offering delicious snacks and beverages. Bring your
          friends <br />
          and family for a fun-filled summer night under the stars!
          <br />
          Ticket Price: Free admission
        </p>
        <div className="para">
          <img src={para} alt="" />
          <h2>02</h2>
          <h3>Dec</h3>
        </div>
      </div>
      <div className="image">
        <img src={kiteimage} className="event-img-two" alt="" />
      </div>
      <div className="details-two">
        <h5>About</h5>
        <h1>Kite Festival</h1>
        <p>
          Experience the thrill of colorful kites filling the sky at our annual
          Kite Festival!Join us for a day of kite flying, family activities, and
          delicious food. Whether you're an experienced kite enthusiast or a
          first-time flyer, there's something for everyone. Bring your own kite
          or purchase one at the festival, and don't forget to enjoy the live
          entertainment and performances.
          <br />
          Ticket Price: Free admission
        </p>
        <div className="para-two">
          <img src={para} alt="" />
          <h2>10</h2>
          <h3>Feb</h3>
        </div>
      </div>
      <img className="design-left" src={designleft} alt="" />
      <img className="design-rights" src={designrights} alt="" />
      <div className="frame">
        <div
          onClick={() => (window.location.href = "/Mainevent")}
          className="custom-btn btn-5"
        >
          <span>To Know More About Event Click me!</span>
        </div>
      </div>
    </div>
  );
};

export default Event;
