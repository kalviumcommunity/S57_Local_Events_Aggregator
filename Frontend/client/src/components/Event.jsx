import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Event.css";
import eventimage from "../images/Event.jpg";
import kiteimage from "../images/Kite.jpg";
import para from "../images/para.png";
import designrights from "../images/ego.png";
import designleft from "../images/egoleft.png";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="event">
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div className="image">
            <img
              src={index % 2 === 0 ? eventimage : kiteimage}
              className="event-img"
              alt=""
            />
          </div>
          <div className="details">
            <h5>About</h5>
            <h1>{event.Title}</h1>
            <p>{event.Description}</p>
            <div className="para">
              <img src={para} alt="" />
              <h2>{event.Date}</h2>
              <h3>{event.Month}</h3>
            </div>
          </div>
        </React.Fragment>
      ))}
      <img className="design-left" src={designleft} alt="" />
      <img className="design-rights" src={designrights} alt="" />
      <div className="frame">
        <Link to="/Mainevent" className="custom-btn btn-5">
          <span>To Know More About Event Click me!</span>
        </Link>
      </div>
    </div>
  );
};

export default Event;
