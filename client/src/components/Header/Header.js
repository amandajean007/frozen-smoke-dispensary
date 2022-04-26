import React from 'react';
import './Header.css';

import smoke from "../Entry/vecteezy_indoor-shot-of-controlled-smoke-controlled-smoke-creating-heavy-clouds-from-left-to-right-on-dark-background-ideal-for-your-effects-in-your-projects-or-mystical-topics-in-your-footage-4k-4096-x_1787527.mp4"


const Header = () => {
  return (
    <div className="header">
      <video src={smoke} autoPlay muted loop id="myOtherVideo"></video>
      <div className="content headercontent">
        <h1 id="name">Frozen Smoke Dispensary</h1>
        <h4>Gunnison, Colorado</h4>
      </div>
    </div>
  );
};

export default Header;