import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Event.css";
import para from "../images/para.png";
import designrights from "../images/ego.png";
import designleft from "../images/egoleft.png";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/events")
      .then((response) => {
        setEvents(response.data.slice(0, 2)); // Only take the first 2 events
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const firstEvent = events[0];
  const secondEvent = events[1];

  return (
<<<<<<< HEAD
    <div className="event">
      <h1 className="event-heading">Available Events</h1>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div className="image">
            <img src={event.ImageUrl} className="event-img" alt="" />
=======
    <div>
      <div className="event">
        <div className="image">
          <img src={eventimage} className="event-img" alt="" />
        </div>
        <div className="details">
          <h5>About</h5>
          <h1>{firstEvent && firstEvent.Title}</h1>
          <p>{firstEvent && firstEvent.Description}</p>
          <div className="para">
            <img src={para} alt="" />
            <h2>{firstEvent && firstEvent.Date}</h2>
            <h3>{firstEvent && firstEvent.Month}</h3>
>>>>>>> e50642e73a96d1aa7d64208da68a570d1bbda60c
          </div>
        </div>
      </div>
      <div className="event">
        <div className="image">
          <img src={kiteimage} className="event-img-two" alt="" />
        </div>
        <div className="details-two">
          <h5>About</h5>
          <h1>{secondEvent && secondEvent.Title}</h1>
          <p>{secondEvent && secondEvent.Description}</p>
          <div className="para">
            <img src={para} alt="" />
            <h2>{secondEvent && secondEvent.Date}</h2>
            <h3>{secondEvent && secondEvent.Month}</h3>
          </div>
        </div>
        <img className="design-left" src={designleft} alt="" />
        <img className="design-rights" src={designrights} alt="" />
        <div className="frame">
          <Link to={`/Mainevent`} className="custom-btn btn-5">
            <span>To Know More About Event Click me!</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
