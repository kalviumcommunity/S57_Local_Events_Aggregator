import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventCard = ({ event, onClick }) => (
  <motion.div
  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.2 }}
  >
   
    <img  
      src={event.imageUrl}
      alt={event.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        {event.title}
      </h2>
      <p className="text-gray-600 mb-4 text-sm">
        {event.description.substring(0, 80)}...
      </p>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{new Date(event.date).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Clock className="w-4 h-4 mr-2" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-2" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Clock className="w-4 h-4 mr-2" />
        <span>{event.time}</span>
      </div>
      <button
        onClick={() => onClick(event)}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        View-Details
      </button>
    </div>
  </motion.div>
);

export default EventCard;
