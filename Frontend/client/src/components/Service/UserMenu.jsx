import React from "react";

const UserMenu = ({ username, onLogout, onContinue, show, toggleShow }) => {
  return (
    <div className="relative">
      <button
        onClick={toggleShow}
        className="flex items-center text-white text-lg font-medium hover:text-teal-400 transition-all"
      >
        <span className="ml-2">{username}</span>
      </button>

      {show && (
        <div className="absolute right-0 bg-gray-800 text-white rounded shadow-lg mt-2">
          <div className="flex flex-col p-2">
            <button
              onClick={() => {
                toggleShow(); // Close the menu
                onContinue(); // Call continue function
              }}
              className="py-2 px-4 hover:bg-gray-700 transition-all text-left"
            >
              Continue
            </button>
            <button
              onClick={() => {
                toggleShow(); // Close the menu
                onLogout(); // Call logout function
              }}
              className="py-2 px-4 hover:bg-gray-700 transition-all text-left"
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
