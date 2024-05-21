import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MainEvent.css";

const MainEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    axios
      .get("http://localhost:3000/api/events")
      .then((response) => {
        setEvents(response.data); // Assuming the API response contains an array of event objects
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  // Separate odd and even index events
  const oddIndexEvents = events.filter((event, index) => index % 2 !== 0);
  const evenIndexEvents = events.filter((event, index) => index % 2 === 0);

  return (
    <div className="event-container">
      <div className="odd-events">
        <h2>Odd Events</h2>
        {oddIndexEvents.map((event) => (
          <div key={event.Title} className="event">
            <div className="image">
              <img src={event.ImageUrl} className="event-img" alt="" />
            </div>
            <div className="details">
              <h5>About</h5>
              <h1>{event.Title}</h1>
              <p>{event.Description}</p>
              <div className="para">
                <img src={event.k} alt="" />
                <h2>{event.Date}</h2>
                <h3>{event.Month}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="even-events">
        <h2>Even Events</h2>
        {evenIndexEvents.map((event) => (
          <div key={event.Title} className="event">
            <div className="image">
              <img src={event.ImageUrl} className="event-img-two" alt="" />
            </div>
            <div className="details-two">
              <h5>About</h5>
              <h1>{event.Title}</h1>
              <p>{event.Description}</p>
              <div className="para-two">
                <img src={event.k} alt="" />
                <h2>{event.Date}</h2>
                <h3>{event.Month}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="home-btn">
        Back To Home
      </Link>
    </div>
  );
};

export default MainEvent;
