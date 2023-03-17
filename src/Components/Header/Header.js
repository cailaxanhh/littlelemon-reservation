import React from 'react';
import logo from '../../assets/Logo.svg';


export default function Header() {
  return (
    <div className='Header'>
      <img id='header-logo' src={logo} alt="logo"></img>
      <nav className="nav">
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
