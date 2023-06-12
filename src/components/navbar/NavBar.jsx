import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar" id='navbar'>
        <div className='navbar-container'>
                <h1 className="logo">INVENTO</h1>
            
                <ul className="nav-links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/services"><li>Services</li></Link>
                    <Link to="/footer"><li>Contact Us</li></Link>
                </ul>
            
                <button className="login-button">Login</button>
                </div>
    </nav>
  );
};

export default NavBar;
