import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import login from "../images/3.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <ul className="nav-links">
        <li>
          <Link className="logo" to="/">
            Vibes Hub
          </Link>
        </li>

        <li>
          <Link className="bar" to="/">
            <div id="btn" className="button">
              <div id="btn" className="box">
                H
              </div>
              <div id="btn" className="box">
                O
              </div>
              <div id="btn" className="box">
                M
              </div>
              <div id="btn" className="box">
                E
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="bar" to="/">
            <div className="button">
              <div className="box">T</div>
              <div className="box">R</div>
              <div className="box">E</div>
              <div className="box">N</div>
              <div className="box">D</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="bar" to="/Event">
            <div className="button">
              <div className="box">E</div>
              <div className="box">V</div>
              <div className="box">E</div>
              <div className="box">N</div>
              <div className="box">T</div>
            </div>
          </Link>
        </li>
        <li>
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
        </li>
        <li>
          <Link to="/MySwiper#swiper-section" className="bar">
            <div className="button">
              <div className="box">U</div>
              <div className="box">P</div>
              <div className="box">C</div>
              <div className="box">O</div>
              <div className="box">M</div>
              <div className="box">I</div>
              <div className="box">N</div>
              <div className="box">G</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="bar" to="/contact">
            <div className="button">
              <div className="box">L</div>
              <div className="box">O</div>
              <div className="box">G</div>
              <div className="box">I</div>
              <div className="box">N</div>=
            </div>
          </Link>
        </li>
        <li>
          <img src={login} alt="Login" className="login-icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
