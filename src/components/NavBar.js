import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  textDecoration: "underline",
  color: "black",
};

function NavBar({ setLoggedIn }) {
  return (
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
        onClick={ (e) => setLoggedIn(false)}
      >
        Logout
      </NavLink>
    </div>
  );
}

export default NavBar;