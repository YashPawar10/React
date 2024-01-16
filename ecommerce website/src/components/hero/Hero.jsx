import React from 'react'
import './Hero.css'
import hand from '../assets/waving-hand.png';
import arrow from '../assets/right-icon.png';
import girl from '../assets/girl.png';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={girl} alt="" />
      </div>
    </div>
  );
}

export default Hero