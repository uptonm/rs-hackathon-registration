import React from "react";
import logo from "../assets/leologo-web.png";

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>HackWITus2018</code> login below
        </p>
        <a
          className="App-link"
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login to Register
        </a>
      </header>
    </div>
  );
};
