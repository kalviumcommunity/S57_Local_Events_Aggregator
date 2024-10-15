import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  X,
  Tag,
  User,
  Users,
  Link as LinkIcon,
} from "lucide-react";

const EventModal = ({ event, onClose }) => {
  const [timeRemaining, setTimeRemaining] = useState("");

  // Countdown timer for the event
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventDate = new Date(event.date);
      const diff = eventDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      setTimeRemaining(`${days} days, ${hours} hours, ${minutes} minutes`);
    }, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-80 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header with Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {event.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {event.description}
          </p>

          {/* Event Countdown */}
          <div className="text-red-500 font-medium mb-4">
            Event starts in: {timeRemaining}
          </div>

          {/* Event Date & Time */}
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">
              {event.time}
            </span>
          </div>

          {/* Event Category, Organizer, and Participants */}
          <div className="flex items-center mb-2">
            <Tag className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">
              {event.category}
            </span>
          </div>

          <div className="flex items-center mb-2">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">
              {event.organizer}
            </span>
          </div>

          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">
              {event.capacity} participants
            </span>
          </div>

          {/* Event Website */}
          <div className="flex items-center mb-4">
            <LinkIcon className="w-5 h-5 text-gray-500 mr-2" />
            <a
              href={event.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 underline"
            >
              {event.websiteLink}
            </a>
          </div>
        </div>

        {/* Modal Footer with Buttons */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Close
          </button>
          <a
            href={event.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Go to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
