import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import logoImage from "../../images/logo2.png"

function NavBar() {
    return (
      <nav className="navbar" id="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src={logoImage} alt="Invento Logo" className="logo-image" />
            <span className="logo-text">INVENTO</span>
          </div>
  
          <ul className="nav-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/footer">
              <li>Contact Us</li>
            </Link>
          </ul>
  
          <button className="login-button">Login</button>
        </div>
      </nav>
    );
  }

export default NavBar;
