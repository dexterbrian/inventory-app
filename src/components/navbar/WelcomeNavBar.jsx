import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import "./NavBar.css";

function WelcomeNavBar() {

  const history = useHistory();

  return (
    <nav className="navbar" id='navbar'>
      <div className='navbar-container'>
        <h1 className="logo">Invento</h1>
    
        <ul className="nav-links">
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