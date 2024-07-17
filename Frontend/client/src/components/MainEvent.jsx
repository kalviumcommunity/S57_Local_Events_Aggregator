import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MainEvent.css";
import para from "../images/para.png";

const MainEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/events") // Adjust the URL as per your API endpoint
      .then((response) => {
        setEvents(response.data); // Set all events from API response
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="event">
      <h1 className="event-heading">Events</h1>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <div className="image">
            <img src={event.ImageUrl} className="event-img-main" alt="" />
          </div>
          <div className="details-main">
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
      <Link to="/" className="home-btn">
        Back To Home
      </Link>
    </div>
  );
};

export default MainEvent;
