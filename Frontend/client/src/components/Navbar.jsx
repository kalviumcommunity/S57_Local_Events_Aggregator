import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart from "../images/1.png";
import search from "../images/2.png";

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link className="logo" to="/Title">
            Vibes Hub
          </Link>
        </li>

        <li>
          <Link className="bar" to="/">
            <div id="btn" class="button">
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
            <div class="button">
              <div className="box">T</div>
              <div className="box">R</div>
              <div className="box">E</div>
              <div className="box">N</div>
              <div className="box">D</div>
            </div>
          </Link>
        </li>
        <li>
          <Link className="bar" to="/news">
            <div class="button">
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
            <img src={search} alt="Search" className="searchicon" />
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>
        </li>
        <li>
          <Link className="bar" to="/contact">
            <div class="button">
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
            <div class="button">
              <div className="box">C</div>
              <div className="box">O</div>
              <div className="box">N</div>
              <div className="box">T</div>
              <div className="box">A</div>
              <div className="box">C</div>
              <div className="box">T</div>
              <div className="box">S</div>
            </div>
          </Link>
        </li>
        <li>
          <img src={cart} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
