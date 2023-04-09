import React from 'react';
import './AboutSection.css';
import chef from '../../assets/restaurant chef B.jpg'

export default function AboutSection() {
  return (
    <div id="About">
      <div id="ll-details">
        <h2>ABOUT US</h2>
        <p>Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day. Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
      </div>
      <div id='chef'>
        <img alt='chefcooking' src={chef}></img>
      </div>
    </div>
  )
}
