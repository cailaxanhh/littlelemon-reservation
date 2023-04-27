import React from 'react';
import './Submitted.css';

export default function Submitted() {
  return (
    <div>
      <div className='form-heading'>
        <h1>RESERVATION</h1>
      </div>
      <div className='message-section'>
        <div className='bookinginfo'>
          <p>Name Under The Reservation</p>
          <p>Phone Number   email@example.com</p>
          <p>- guests  00/00/0000   00:00</p>
        </div>
        <div className='tymessage'>
          <h1>THANK YOU FOR YOUR RESERVATION</h1>
          <p>(We only hold your reservation for 15 minutes after the booking time)</p>
        </div>
        <div className='confirmation'>
          <p>You will be received an email once the reservation is approved.</p>
        </div>
      </div>
    </div>
  )
}
