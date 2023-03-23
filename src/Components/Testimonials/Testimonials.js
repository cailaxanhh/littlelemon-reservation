import React from 'react';
import kevin from '../../assets/kevin.jpg';
import maria from '../../assets/maria.jpg';
import emilio from '../../assets/emilio.jpg';
import star from '../../assets/star.png';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <div id='feedback'>
      <h1>WHAT OUR CUSTOMERS SAID</h1>
      <div id='fb-container'>
        <div className='fb'>
          <img src={maria} alt=""></img>
          <h3>Isabel Maria</h3>
          <div className='rating'>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
          </div>
          <p className='comment'></p>
        </div>
        <div className='fb'>
          <img src={emilio} alt=""></img>
          <h3>Emilio Williams</h3>
          <div className='rating'>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
          </div>
          <p className='comment'></p>
        </div>
        <div className='fb'>
          <img src={kevin} alt=""></img>
          <h3>Kevin Nguyen</h3>
          <div className='rating'>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
            <img className='star' src={star}></img>
          </div>
          <p className='comment'></p>
        </div>
      </div>
    </div>
  )
}
