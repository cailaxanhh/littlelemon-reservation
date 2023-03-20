import React from 'react';
import res from '../../assets/restaurant.jpg';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div id='heroSection'>
      <div id="heroText">
        <h1>Little Lemon Restaurant</h1>
        <h4>Chicago</h4>
        <p>Little Lemon is a charming neighborhood bistro that 
          serves simple food and classic cocktails in a lively 
          but sasual environment. The restaurant features a 
          locally-sourced menu with daily specials.</p>
        <button id='reservation'>RESERVATION</button>
      </div>
      <img src={res} alt="restaurantpic"></img>
    </div>
  )
}
