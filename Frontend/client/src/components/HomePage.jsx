import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <h1>Local Event Aggregator</h1>
        <p>
          Welcome to Local Event Aggregator, your go-to platform for discovering
          local events!
        </p>
        <Link to="/MainPage" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
