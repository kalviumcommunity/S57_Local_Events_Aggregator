import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Navbar from "../Navbar";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

const Event = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Filter and Search State
  const [filters, setFilters] = useState({
    category: "",
    date: "",
    location: "",
    popularity: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchEvents();
  }, [filters, searchQuery]);

  const fetchEvents = async () => {
    const params = {
      ...(filters.category && { category: filters.category }),
      ...(filters.date && { date: filters.date }),
      ...(filters.location && { location: filters.location }),
      ...(filters.popularity && { popularity: filters.popularity }),
      ...(searchQuery && { title: searchQuery }),
    };

    try {
      const response = await axios.get("http://localhost:3000/api/events", {
        params,
      });
      const events = response.data;
      setAllEvents(events);
      setFeaturedEvents(events.slice(0, 4)); // Only show 4 events initially
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Show all events when the user clicks "Explore All"
  const handleShowAll = () => {
    setShowAll(true);
  };

  const filteredEvents = allEvents.filter((event) => {
    let shouldInclude = true;

    if (
      searchQuery &&
      !event.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      shouldInclude = false;
    }

    if (filters.category && event.category !== filters.category) {
      shouldInclude = false;
    }

    if (filters.date && new Date(event.date) > new Date(filters.date)) {
      shouldInclude = false;
    }

    if (
      filters.location &&
      !event.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      shouldInclude = false;
    }

    if (
      filters.popularity &&
      parseInt(event.popularity) < parseInt(filters.popularity)
    ) {
      shouldInclude = false;
    }

    return shouldInclude;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Featured Events
        </h1>

        {/* Filter Section */}
        <div className="mb-8 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search events by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-md p-2"
          />
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className="border rounded-md p-2"
          >
            <option value="">All Categories</option>
            <option value="Music">Music</option>
            <option value="Art">Art</option>
            <option value="Food">Food</option>
            <option value="Sports">Sports</option>
            <option value="Technology">Technology</option>
          </select>

          <input
            type="date"
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}
            className="border rounded-md p-2"
          />

          <input
            type="text"
            placeholder="Location"
            value={filters.location}
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
            className="border rounded-md p-2"
          />

          <button
            onClick={() =>
              setFilters({
                category: "",
                date: "",
                location: "",
                popularity: "",
              })
            }
            className="bg-red-600 text-white px-3 py-2 rounded-md"
          >
            Clear Filters
          </button>
        </div>

        {/* Event Display Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {!showAll
            ? featuredEvents.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))
            : filteredEvents.map((event) => (
                <EventCard
                  key={event._id}
                  event={event}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
        </div>

        {/* Button to show all events */}
        <div className="text-center mt-12">
          {!showAll && (
            <button
              onClick={handleShowAll}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Explore All Events
            </button>
          )}
        </div>
      </main>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Event;
