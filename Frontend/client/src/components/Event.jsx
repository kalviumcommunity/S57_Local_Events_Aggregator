import React from "react";
import "./Event.css";
import eventimage from "../images/Event.jpg";
import para from "../images/para.png";
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
    </div>
  );
};

export default Event;
