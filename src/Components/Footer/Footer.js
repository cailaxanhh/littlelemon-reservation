import React from 'react';
import './Footer.css';
import fb from '../../assets/icon-facebook.svg';
import insta from '../../assets/icon-instagram.svg';
import twt from '../../assets/icon-twitter.svg';
import ytb from '../../assets/icon-youtube.svg';
import logo from '../../assets/Ui kit (1).png';

export default function Footer() {
  return (
    <div id='footer'>
      <div id="footer-mainpart">
        <div id='left-footer'>
          <img src={logo} id='footer-logo' alt='logo'></img>
          <div id='socialmedia'>
            <a href='https://www.facebook.com/'><img src={fb} alt='fb' className='socialmedia'></img></a>
            <a href='https://www.instagram.com/'><img src={insta} alt='insta' className='socialmedia'></img></a>
            <a href='https://www.twitter.com/'><img src={twt} alt='twt' className='socialmedia'></img></a>
            <a href='https://www.youtube.com/'><img src={ytb} alt='ytb' className='socialmedia'></img></a>
          </div>
        </div>
        <div id='footer-nav'>
          <ul id='nav-left' className='nav-list'>
            <li className='nav-item'><a href='/'>Home</a></li>
            <li className='nav-item'><a href='/about'>About</a></li>
            <li className='nav-item'><a href='/menu'>Menu</a></li>
            <li className='nav-item'><a href='/reservation'>Reservation</a></li>
            <li className='nav-item'><a href='/order-online'>Order Online</a></li>
          </ul>
          <ul id='-nav-right' className='nav-list'>
            <li className='nav-item'><a href='/site-map'>Site Map</a></li>
            <li className='nav-item'><a href='/fqas'>FAQS</a></li>
            <li className='nav-item'><a href='/privacy-policy'>Privacy Policy</a></li>
            <li className='nav-item'><a href='/terms-conditions'>Terms & Conditions</a></li>
            <li className='nav-item'><a href='/help-support'>Help & Support</a></li>
          </ul>
        </div>
        <div id='res-details'>
          <p>
            Address: 392 W Grand Ave, Chicago, IL 60622, USA. <br />
            Phone Number: +1 312-836-5151 <br />
            Email: little-lemon-restaurant@gmail.com
          </p>
        </div>
      </div>
      <p>&copy; 2023 Little Lemon Restaurant. All right reserved.</p>
    </div>
  )
}