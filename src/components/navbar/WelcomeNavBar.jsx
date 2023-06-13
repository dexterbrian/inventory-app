import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import "./NavBar.css";
import logoImage from "../../images/logo2.png"

function WelcomeNavBar() {

  const history = useHistory();

  return (
    <nav className="navbar" id='navbar'>
      <div className='navbar-container'>
          <div className="logo">
            <img src={logoImage} alt="Invento Logo" className="logo-image" />
            <span className="logo-text">INVENTO</span>
          </div>
    
        <ul className="nav-links">
            <a href='#home'><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#services"><li>Services</li></a>
            <a href="#footer"><li>Contact Us</li></a>
        </ul>
    
        <button className="login-button" onClick={ (e) => history.push('/login')}>Login</button>
      </div>
    </nav>
  );
};

export default WelcomeNavBar;