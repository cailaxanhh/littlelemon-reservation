import React from 'react';
import kevin from '../../assets/kevin.jpg';
import maria from '../../assets/maria.jpg';
import emilio from '../../assets/emilio.jpg';
import star from '../../assets/star.png';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <div id='feedback'>
      <h2>WHAT OUR CUSTOMERS SAID</h2>
      <div id='fb-container'>
        <div className='fb'>
          <img src={maria} className="fbpic" alt=""></img>
          <div className="details">
            <h3>Isabel Maria</h3>
            <div className='rating'>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
            </div>
          </div>
          <p className='comment'>This place is great! Atmosphere is chill and cool but the staff is also really friendly. Food is pretty good, some italian classics and some twists, and for their prices it's 100% worth it.</p>
        </div>
        <div className='fb'>
          <img src={emilio} className="fbpic" alt=""></img>
          <div className="details">
            <h3>Emilio Williams</h3>
            <div className='rating'>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
            </div>
          </div>
          <p className='comment'> It's a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.</p>
        </div>
        <div className='fb'>
          <img src={kevin} className="fbpic" alt=""></img>
          <div className="details">
            <h3>Kevin Nguyen</h3>
            <div className='rating'>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
              <img alt="feedback" className='star' src={star}></img>
            </div>
          </div>
          <p className='comment'>A small local restaurant with great service, food! Definitely a go-to place for bruschetta when you are in Chicago! Variety of bruschetta to choose from & side dishes are delicious as well.</p>
        </div>
      </div>
    </div>
  )
}
