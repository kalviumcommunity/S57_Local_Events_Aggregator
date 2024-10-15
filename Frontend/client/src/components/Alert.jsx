// src/components/Alert.js
import React from "react";

const Alert = ({ message, type }) => {
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  return (
    <div
      className={`flex items-center justify-between p-4 mb-4 border rounded-md ${alertStyles[type]}`}
      role="alert"
    >
      <span>{message}</span>
      <button
        className="text-gray-600 hover:text-gray-900"
        onClick={() => window.location.reload()}
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
