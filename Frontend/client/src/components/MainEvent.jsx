import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MainEvent.css";
<<<<<<< HEAD
import para from "../images/para.png";
=======
>>>>>>> e50642e73a96d1aa7d64208da68a570d1bbda60c

const MainEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
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
    <div className="scrollable-container">
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
=======
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

  // Interleave odd and even events
  const interleavedEvents = [];
  const maxLength = Math.max(oddIndexEvents.length, evenIndexEvents.length);

  for (let i = 0; i < maxLength; i++) {
    if (evenIndexEvents[i])
      interleavedEvents.push({ ...evenIndexEvents[i], type: "even" });
    if (oddIndexEvents[i])
      interleavedEvents.push({ ...oddIndexEvents[i], type: "odd" });
  }

  return (
    <div className="event-container">
      <div className="events">
        {interleavedEvents.map((event, index) => (
          <div key={index} className="event">
            <div className="image">
              <img
                src={event.ImageUrl}
                className={event.type === "odd" ? "event-img" : "event-img-two"}
                alt=""
              />
            </div>
            <div className={event.type === "odd" ? "details" : "details-two"}>
              <h5>About</h5>
              <h1>{event.Title}</h1>
              <p>{event.Description}</p>
              <div className={event.type === "odd" ? "para" : "para-two"}>
                <img src={event.k} alt="" />
>>>>>>> e50642e73a96d1aa7d64208da68a570d1bbda60c
                <h2>{event.Date}</h2>
                <h3>{event.Month}</h3>
              </div>
            </div>
<<<<<<< HEAD
          </React.Fragment>
        ))}
        <Link to="/" className="home-btn">
          Back To Home
        </Link>
      </div>
=======
          </div>
        ))}
      </div>
      <Link to="/" className="home-btn">
        Back To Home
      </Link>
>>>>>>> e50642e73a96d1aa7d64208da68a570d1bbda60c
    </div>
  );
};

export default MainEvent;
