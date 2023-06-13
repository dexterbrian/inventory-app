import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../images/logo2.png";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "none",
  color: "black",
  fontWeight: "bolder",
};

const logoStyles = {
  display: "inline-flex",
  alignItems: "center",
};

const logoTextStyles = {
  marginLeft: "6px",
  fontSize: "40px",
  fontWeight: "bolder",
};

function NavBar({ setLoggedIn }) {
  return (
    <div>
      <div style={logoStyles}>
        <img src={logoImage} alt="Logo" width="100" height="auto" />
        <span style={logoTextStyles}>INVENTO</span>
      </div>
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
  );
}

export default NavBar;
