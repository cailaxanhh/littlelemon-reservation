import React from 'react';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import './Header.css';
import basket from '../../assets/Basket.svg';
import hammenu from '../../assets/icon_hamburger_menu.svg';
import close from '../../assets/close.png';
import Reservation from '../../Router/Reservation';
import ResSubmitted from '../../Router/ResSubmitted';

export default function Header() {
  const x = document.getElementById("nav");

  function mobile() {
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }

  function closemenu () {
    if (x.style.display === "block") {
      x.style.display = "none";
    }
  }

  const navigate = useNavigate();

  const navigateToReservation = () => {
    navigate('/reservation');
  }

  return (
    <div className='Header'>
      <div className='menu'>
        <img src={hammenu} alt='hamburger-menu' onClick={mobile}></img>
      </div>
      <img id='header-logo' src={logo} alt="logo"></img>
      <div className='basket'>
        <img src={basket} alt='basket'></img>
      </div>
      <nav id="nav">
        <img alt='close-menu' id='close-icon' src={close} onClick={closemenu}></img>
        <ul>
          <li><Link className='nav-item' to='/'>HOME</Link></li>
          <li><Link className='nav-item' to='/about'>ABOUT</Link></li>
          <li><Link className='nav-item' to='/menu'>MENU</Link></li>
          <li><Link className='nav-item' onClick={navigateToReservation} to='/reservation'>RESERVATION</Link></li>
          <li><Link className='nav-item' to='/order-online'>ORDER ONLINE</Link></li>
          <li><Link className='nav-item' to='/login'>LOGIN</Link></li>
        </ul>
      </nav>
    </div>
  )
};
