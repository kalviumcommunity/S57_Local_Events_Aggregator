import React from "react";
import Navbar from "./Navbar";
import "./MainPage.css";
const events = [
  {
    Title: "Summer Jazz Festival",
    Description: "Join us for a night of smooth jazz under the stars!",
    Location: "Central Park Amphitheater",
    Date: "2024-07-20T00:00:00.000Z",
    StartTime: "19:00",
    EndTime: "22:00",
    ImageUrl:
      "http://jazzforum.com.pl/images/uploads/news/28700/summer_jazz.jpg",
    Category: "concert",
    Organizer: "Central Park Events Committee",
    ContactEmail: "info@centralparkevents.com",
  },
  {
    Title: "Spring Food Truck Festival",
    Description:
      "Experience the best local cuisine with a variety of food trucks serving up delicious eats!",
    Location: "Downtown Square",
    Date: "2024-05-15",
    StartTime: "12:00",
    EndTime: "18:00",
    ImageUrl:
      "https://gray-wtvm-prod.cdn.arcpublishing.com/resizer/DKmbI6NA782ZsiDlXh5FZuSiK2A=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/A3VWGBSGYZGMJLDKZSMXDX5YFA.jpg",
    Category: "festival",
    Organizer: "City of Downtown",
    ContactEmail: "events@downtowncity.gov",
  },
];
function HomeComponent() {
  return (
    <div>
      <Navbar />
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img
              className="event-image"
              src={event.ImageUrl}
              alt={event.Title}
            />
            <div className="event-details">
              <h2>{event.Title}</h2>
              <p>
                <strong>Location:</strong> {event.Location}
              </p>
              <p>
                <strong>Date:</strong> {event.Date}
              </p>
              <p>
                <strong>Start Time:</strong> {event.StartTime}
              </p>
              <p>
                <strong>End Time:</strong> {event.EndTime}
              </p>
              <p>
                <strong>Category:</strong> {event.Category}
              </p>
              <p>
                <strong>Organizer:</strong> {event.Organizer}
              </p>
              <p>
                <strong>Contact Email:</strong> {event.ContactEmail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeComponent;
