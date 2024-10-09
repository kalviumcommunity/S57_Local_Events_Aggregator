import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Music } from "lucide-react";
import Navbar from "../Navbar"; // Ensure the correct path to your Navbar component

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4">
            Welcome to <span className="text-blue-600">Vibe Hub</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your ultimate destination for local events and unforgettable
            experiences.
          </p>
          <div className="flex justify-center mb-10">
            <Link to="/signup">
              <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg shadow-lg transition duration-300 mr-4">
                Get Started
              </button>
            </Link>
            <Link to="/signin">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition duration-300">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition transform hover:shadow-xl">
            <CalendarDays className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Discover Events</h3>
            <p className="text-gray-600">
              Find exciting local events tailored to your interests.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition transform hover:shadow-xl">
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Local Experiences</h3>
            <p className="text-gray-600">
              Explore unique experiences in your area.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition transform hover:shadow-xl">
            <Music className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Connect with Others</h3>
            <p className="text-gray-600">
              Meet like-minded people and create lasting memories.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-center text-gray-600 py-4 border-t mt-16">
          <p>© {new Date().getFullYear()} Vibe Hub. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
