import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Music, Phone, Zap, Calendar, User } from "lucide-react";
import UserMenu from "./Service/UserMenu"; // Import the UserMenu component

const NavItem = ({ to, icon, children }) => (
  <li className="flex">
    <Link
      to={to}
      className="flex items-center text-white text-base font-medium hover:text-teal-400 transition-all"
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
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || null);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    alert("You have been logged out.");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/signin");
  };

  const handleContinue = () => {
    navigate("/MainPage");
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">
            Vibes
          </span>
          <span className="ml-1 text-teal-400">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 items-center">
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

          {/* Display username or Sign In */}
          {username ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center text-white text-base font-medium hover:text-teal-400"
              >
                <User />
                <span className="ml-2">{username}</span>
              </button>
              <UserMenu
                username={username}
                onLogout={handleLogout}
                onContinue={handleContinue}
                show={showUserMenu}
                toggleShow={() => setShowUserMenu(!showUserMenu)}
              />
            </div>
          ) : (
            <NavItem to="/signin" icon={<User />}>
              Sign In
            </NavItem>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-black text-white text-base space-y-3 py-4 sm:hidden">
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

          {/* Display username or Sign In for Mobile Menu */}
          {username ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center text-white text-base font-medium hover:text-teal-400"
              >
                <User />
                <span className="ml-2">{username}</span>
              </button>
              <UserMenu
                username={username}
                onLogout={handleLogout}
                onContinue={handleContinue}
                show={showUserMenu}
                toggleShow={() => setShowUserMenu(!showUserMenu)}
              />
            </div>
          ) : (
            <NavItem to="/signin" icon={<User />}>
              Sign In
            </NavItem>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
