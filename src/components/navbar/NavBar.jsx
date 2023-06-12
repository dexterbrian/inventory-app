import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">INVENTO</h1>
      </div>
      <div className="navbar-middle">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
