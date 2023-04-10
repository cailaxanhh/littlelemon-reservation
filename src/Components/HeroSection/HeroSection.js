import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import res from '../../assets/restaurant.jpg';
import Reservation from '../../Router/Reservation';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();

  const navigateToReservation = () => {
    navigate('/reservation');
  };

  return (
    <div id='heroSection'>
      <div id="heroText">
        <h1>Little Lemon Restaurant</h1>
        <h4>Chicago</h4>
        <p>Little Lemon is a charming neighborhood bistro that 
          serves simple food and classic cocktails in a lively 
          but sasual environment. The restaurant features a 
          locally-sourced menu with daily specials.</p>
        <button onClick={navigateToReservation} id='reservation'>RESERVATION</button>

        <Routes>
          <Route path="/reservation-" element={<Reservation />} />
        </Routes>
      </div>
      <img src={res} alt="restaurantpic"></img>
    </div>
  )
}
