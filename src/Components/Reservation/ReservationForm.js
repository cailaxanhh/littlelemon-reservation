import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import React from 'react';
import './ReservationForm.css';
import AvailableTimes from './AvailableTimes';
import ResSubmitted from '../../Router/ResSubmitted';


export default function ReservationForm() {

    const navigate = useNavigate();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");
    const [require, setRequire] = useState("");
    const [name, setName] = useState("");
    const [phnb, setPhnb] = useState("");
    const [email, setEmail] = useState("");

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ReservationForm.email.value)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }


    const formValid = () => {
        return (
            name.length >= 8 &&
            ValidateEmail(email)
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/reservation-submitted');
        clearForm();
    }

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuest("");
        setOccasion("");
        setRequire("");
        setName("");
        setPhnb("");
        setEmail("");
    }

    return (
        <div className='BookingForm'>
            <div className='form-heading'>
                <h1>RESERVATION</h1>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2 className='form-subheading'>STEP 1</h2>
                    <label for='res-date'>Reservation Date *</label>
                    <input
                        type='date'
                        id='res-date'
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                        required></input> <br />
                    <label for='res-time'>Reservation Time *</label>
                    <select
                        value={time}
                        id="res-time"
                        required
                        onChange={(e) => {
                            setTime(e.target.value);
                        }}>
                        <AvailableTimes />
                    </select> <br />
                    <label for="guests">Number of guests *</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1" max="50"
                        id="guests"
                        required
                        value={guest}
                        onChange={(e) => {
                            setGuest(e.target.value);
                        }}></input> <br />
                    <label for="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => { setOccasion(e.target.value) }}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select> <br />
                    <label for='special-req'>Special Requirement</label>
                    <textarea
                        name='special-req'
                        id='special-req'
                        rows='5' cols='50'
                        value={require}
                        onChange={(e) => { setRequire(e.target.value) }} />
                    <h2 className='form-subheading'>STEP 2</h2>
                    <label for='name'>Name *</label>
                    <input
                        type='text'
                        id='name'
                        required
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}></input> <br />
                    <label for='phonenumber'>Phone Number *</label>
                    <input
                        type='number'
                        id='phonenumber'
                        required
                        value={phnb}
                        onChange={(e) => {
                            setPhnb(e.target.value);
                        }}></input> <br />
                    <label for='email'>Email *</label>
                    <input
                        type='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input> <br />
                    <label id='guidelines-heading' for='guidelines-part'>GUIDELINES</label>
                    <ul>
                        <li>You will be received an email once the reservation is approved.</li>
                        <li>You need to follow the COVID-19 guidelines implemented by the local government. </li>
                        <li>You need to follow safety protocols and a clean environment by washing hands, wearing face masks, and social distancing. </li>
                    </ul>
                    <input type='checkbox' required id='guidelines'></input>
                    <label for='guidelines' id="labelforgui">I have read and agree to the guidelines above.</label> <br />
                    <input id="submitbutton" type="submit" disabled={!formValid} value="MAKE YOUR RESERVATION"></input>
                </form>
                <Routes>
                    <Route path='/reservation-submitted' element={<ResSubmitted />} />
                </Routes>
            </div>
        </div>
    )
}
