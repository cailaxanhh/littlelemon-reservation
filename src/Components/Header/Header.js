import React from 'react';
import logo from '../../assets/Logo.svg';
import './Header.css';
import basket from '../../assets/Basket.svg';
import hammenu from '../../assets/icon_hamburger_menu.svg';
import close from '../../assets/close.png';

export default function Header() {
  var x = document.getElementById("nav");

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
          <li><a className='nav-item' href='/'>HOME</a></li>
          <li><a className='nav-item' href='/about'>ABOUT</a></li>
          <li><a className='nav-item' href='/menu'>MENU</a></li>
          <li><a className='nav-item' href='/reservation'>RESERVATION</a></li>
          <li><a className='nav-item' href='/order-online'>ORDER ONLINE</a></li>
          <li><a className='nav-item' href='/login'>LOGIN</a></li>
        </ul>
      </nav>
    </div>
  )
};
