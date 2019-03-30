import React from 'react';
import logo from '../assets/RocketBuildLogo.png';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>Rocket.Build Community</code> login below
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
