import React from "react";

const UserMenu = ({ username, onLogout, onContinue, show, toggleShow }) => {
  return (
    <div className="relative">
      {/* Username button */}
      <button
        onClick={toggleShow}
        className="flex items-center text-white text-lg font-medium hover:text-teal-400 transition-all"
      ></button>

      {/* Dropdown Menu */}
      {show && (
        <div className="absolute right-0 bg-gray-800 text-white rounded-lg shadow-lg mt-2 w-48 z-50">
          <div className="flex flex-col p-2">
            {/* Continue Button */}
            <button
              onClick={() => {
                toggleShow(); // Close the menu
                onContinue(); // Call continue function
              }}
              className="py-2 px-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all my-1"
            >
              Continue
            </button>
            {/* Logout Button */}
            <button
              onClick={() => {
                toggleShow(); // Close the menu
                onLogout(); // Call logout function
              }}
              className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all my-1"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
