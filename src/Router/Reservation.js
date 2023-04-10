import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import ReservationForm from '../Components/Reservation/ReservationForm';

export default function Reservation() {
  return (
    <div className='Reservation'>
        <Header />
        <ReservationForm />
        <Footer />
    </div>
  )
}
