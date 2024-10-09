import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventCard = ({ event, onClick }) => (
  <motion.div
    className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-300 transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded-full shadow-md">
        Featured
      </div>
    </div>
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 leading-tight tracking-tight hover:text-blue-600 transition-colors duration-300">
        {event.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
        {event.description.substring(0, 80)}...
      </p>
      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 space-x-2">
        <Calendar className="w-5 h-5 text-blue-600" />
        <span>{new Date(event.date).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-3 space-x-2">
        <Clock className="w-5 h-5 text-blue-600" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4 space-x-2">
        <MapPin className="w-5 h-5 text-blue-600" />
        <span>{event.location}</span>
      </div>
      <button
        onClick={() => onClick(event)}
        className="w-full py-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
      >
        View Details
      </button>
    </div>
  </motion.div>
);

export default EventCard;
