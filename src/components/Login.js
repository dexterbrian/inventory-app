import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login({ onCancel, setLoggedIn, setNotification }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = (e) => {
    e.preventDefault();

    // Set log in to true if the password and username are correct
    if (username === "admin" && password === "123456") {
      setLoggedIn(true);
      history.push("/");
    } else {
      setNotification("Wrong username and password");
    }

    console.log("Username:", username);
    console.log("Password:", password);
  };

  const onCancelClick = () => {
    onCancel();
  };

  return (
    <div className="login-container">
      <form onSubmit={onLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onUsernameChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onPasswordChange}
        />
        <div className="login-buttons">
          <input type="submit" value="Login" />
          <button type="button" onClick={onCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

