import React from 'react';
import logo from '../assets/RocketBuildLogo.png';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank you for signing in <br />
          Good luck at <code>Rocket.Build Community</code>
        </p>
      </header>
    </div>
  );
};
