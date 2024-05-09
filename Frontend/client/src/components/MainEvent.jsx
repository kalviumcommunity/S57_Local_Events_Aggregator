import React from "react";
import eventimage from "../images/Event.jpg";
import kiteimage from "../images/Kite.jpg";
import para from "../images/para.png";
import clean from "../images/Clean.jpg";
import plant from "../images/Plant.jpg";
import cricket from "../images/cricket.jpg";
import kabaddi from "../images/kbd.jpg";
import "./MainEvent.css";
import { Link } from "react-router-dom";
const MainEvent = () => {
  return (
    <div id="ivent" className="event">
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
      <div id="cont" className="image">
        <img src={clean} className="event-img" alt="" />
      </div>
      <div className="details">
        <h5>About</h5>
        <h1>Community Cleanup Day</h1>
        <p>
          Join us for a day of community service as we come together to clean up
          our neighborhood parks and streets. Volunteers of all ages are
          welcome. Gloves, trash bags, and refreshments will be provided.
        </p>
        <div className="para">
          <img src={para} alt="" />
          <h2>15</h2>
          <h3>Apr</h3>
        </div>
      </div>
      <div className="image">
        <img src={plant} className="event-img-two" alt="" />
      </div>
      <div className="details-two">
        <h5>About</h5>
        <h1>Community Tree Planting Day</h1>
        <p>
          Join us for a day of environmental stewardship and community
          beautification at our Community Tree Planting Day! Together, we'll
          plant native trees and shrubs to enhance our local ecosystem, improve
          air quality, and create green spaces for future generations to enjoy.
          All ages and skill levels welcome. Tools, gloves, and refreshments
          will be provided.
          <br />
          Ticket Price: Free admission
        </p>
        <div className="para-two">
          <img src={para} alt="" />
          <h2>10</h2>
          <h3>Feb</h3>
        </div>
      </div>
      <div id="cont" className="image">
        <img src={cricket} className="event-img" alt="" />
      </div>
      <div className="details">
        <h5>About</h5>
        <h1> India vs Australia Cricket Match</h1>
        <p>
          Witness the excitement and intensity of international cricket as two
          cricketing giants, India and Australia, face off in a thrilling match!
          Prepare for a showdown of bat and ball as top players from both teams
          showcase their skills and compete for victory in this highly
          anticipated cricket encounter.
        </p>
        <div className="para">
          <img src={para} alt="" />
          <h2>02</h2>
          <h3>Dec</h3>
        </div>
      </div>
      <div className="image">
        <img src={kabaddi} className="event-img-two" alt="" />
      </div>
      <div className="details-two">
        <h5>About</h5>
        <h1>Kabaddi TT VS HS</h1>
        <p>
          Brace yourself for an exhilarating clash of strength, strategy, and
          skill as traditional rivals India and Pakistan compete in an intense
          Kabaddi match! Experience the raw energy and excitement of this
          ancient sport as players demonstrate agility, endurance, and teamwork
          in their quest for victory.
          <br />
          Ticket Price: Free admission
        </p>
        <div className="para-two">
          <img src={para} alt="" />
          <h2>10</h2>
          <h3>Feb</h3>
        </div>
      </div>
      <Link to="/" className="home-btn">
        Back To Home
      </Link>
    </div>
  );
};

export default MainEvent;
