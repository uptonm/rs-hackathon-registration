import React from "react";
import logo from "../assets/leologo-web.png";

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank you for signing in <br />
          Good luck at <code>HackWITus2018</code>
        </p>
      </header>
    </div>
  );
};
