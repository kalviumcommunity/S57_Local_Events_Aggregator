import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Music } from "lucide-react";
import Navbar from "../Navbar"; // Ensure the correct path to your Navbar component

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Added Navbar */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Vibe Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your ultimate destination for local events and unforgettable
            experiences
          </p>
          <Link to="/events">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Explore Events
            </button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CalendarDays className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Discover Events</h2>
            <p className="text-gray-600">
              Find exciting local events tailored to your interests
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Local Experiences</h2>
            <p className="text-gray-600">
              Explore unique experiences in your area
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Music className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Connect with Others</h2>
            <p className="text-gray-600">
              Meet like-minded people and create lasting memories
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to start your journey?
          </h2>
          <Link to="/signup">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
