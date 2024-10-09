import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Music,
  Phone,
  Zap,
  Calendar,
  User,
} from "lucide-react";

const NavItem = ({ to, icon, children }) => (
  <li className="nav-item">
    <Link
      to={to}
      className="flex items-center text-white text-lg font-medium hover:text-teal-400 transition-all"
    >
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername || null);
    };

    fetchUsername();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 bg-opacity-95 shadow-lg" : "bg-gray-800"
      } ${isOpen ? "h-auto" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">
            Vibes
          </span>
          <span className="ml-1 text-teal-400">Hub</span>
        </Link>

        <ul
          className={`${
            isOpen ? "block" : "hidden sm:flex"
          } space-x-8 text-white text-lg font-medium`}
        >
          <NavItem to="/" icon={<Music />}>
            Trending
          </NavItem>
          <NavItem to="/Event" icon={<Calendar />}>
            Events
          </NavItem>
          <NavItem to="/MySwiper" icon={<Zap />}>
            Upcoming
          </NavItem>
          <NavItem to="/Contact" icon={<Phone />}>
            Contact
          </NavItem>
          <NavItem to="/profile" icon={<User />}>
            Profile
          </NavItem>
          <NavItem to="/signin" icon={<User />}>
            Sign In
          </NavItem>

          {/* Display the username like other nav items if available */}
          {username && (
            <NavItem to="/profile" icon={<User />}>
              {username}
            </NavItem>
          )}
        </ul>

        <button
          className="text-white sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <ul className="sm:hidden flex flex-col items-center bg-gray-800 text-white text-lg space-y-3 py-2">
          <NavItem to="/" icon={<Music />}>
            Trending
          </NavItem>
          <NavItem to="/Event" icon={<Calendar />}>
            Events
          </NavItem>
          <NavItem to="/MySwiper" icon={<Zap />}>
            Upcoming
          </NavItem>
          <NavItem to="/profile" icon={<User />}>
            Profile
          </NavItem>
          <NavItem to="/Contact" icon={<Phone />}>
            Contact
          </NavItem>
          <NavItem to="/signin" icon={<User />}>
            Sign In
          </NavItem>

          {/* Display username in mobile dropdown */}
          {username && (
            <NavItem to="/profile" icon={<User />}>
              {username}
            </NavItem>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
