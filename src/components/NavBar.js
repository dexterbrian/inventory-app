import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logo2.png";

const containerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "2px 2px 10px rgba(114, 115, 118, 0.804)",
  padding: "10px",
};

const logoStyles = {
  display: "flex",
  alignItems: "center",
};

const logoImageStyles = {
  width: "100px",
  height: "auto",
};

const logoTextStyles = {
  marginLeft: "6px",
  fontSize: "40px",
  fontWeight: "bolder",
};

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  textDecoration: "none",
  color: "black",
  fontWeight: "bolder",
  marginRight: "30px",
};

function NavBar({ setLoggedIn }) {
  return (
    <div style={containerStyles}>
      <div style={logoStyles}>
        <img src={logoImage} alt="Logo" style={logoImageStyles} />
        <span style={logoTextStyles}>INVENTO</span>
      </div>
      <div>
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            textDecoration: "none"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            textDecoration: "none"
          }}
          onClick={(e) => setLoggedIn(false)}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
