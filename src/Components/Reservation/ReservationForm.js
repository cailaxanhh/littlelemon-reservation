import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import './ReservationForm.css';
import AvailableTimes from './AvailableTimes';



export default function ReservationForm() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});

    function ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ReservationForm.email.value)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}))
    }

    const formValid = () => {
        return (
            inputs.Rname.length >= 8 &&
            ValidateEmail(inputs.email)
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/reservation-submitted');
    }

    return (
        <div className='BookingForm'>
            <div className='form-heading'>
                <h1>RESERVATION</h1>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit} action='/formdata.json' method='POST' >
                    <h2 className='form-subheading'>STEP 1</h2>
                    <label for='res-date'>Reservation Date *</label>
                    <input
                        type='date'
                        id='res-date'
                        name='date'
                        value={inputs.date || ""}
                        onChange={handleChange}
                        required></input> <br />
                    <label for='res-time'>Reservation Time *</label>
                    <select
                        value={inputs.time || ""}
                        id="res-time"
                        name='time'
                        required
                        onChange={handleChange}>
                        <AvailableTimes />
                    </select> <br />
                    <label for="guests">Number of guests *</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1" max="50"
                        id="guests"
                        required
                        name='guest'
                        value={inputs.guest || ""}
                        onChange={handleChange}></input> <br />
                    <label for="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name='occasion'
                        value={inputs.occasion || ""}
                        onChange={handleChange}>
                        <option>-</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select> <br />
                    <label for='special-req'>Special Requirement</label>
                    <textarea
                        name='require'
                        id='special-req'
                        rows='5' cols='50'
                        value={inputs.require || ""}
                        onChange={handleChange} />
                    <h2 className='form-subheading'>STEP 2</h2>
                    <label for='name'>Name *</label>
                    <input
                        type='text'
                        id='name'
                        required
                        name='Rname'
                        value={inputs.Rname || ""}
                        onChange={handleChange}></input> <br />
                    <label for='phonenumber'>Phone Number *</label>
                    <input
                        type='number'
                        id='phonenumber'
                        required
                        name='phnb'
                        value={inputs.phnb || ""}
                        onChange={handleChange}></input> <br />
                    <label for='email'>Email *</label>
                    <input
                        type='email'
                        id='email'
                        required
                        name='email'
                        value={inputs.email || ""}
                        onChange={handleChange}></input> <br />
                    <label id='guidelines-heading' for='guidelines-part'>GUIDELINES</label>
                    <ul>
                        <li>You will be received an email once the reservation is approved.</li>
                        <li>You need to follow the COVID-19 guidelines implemented by the local government. </li>
                        <li>You need to follow safety protocols and a clean environment by washing hands, wearing face masks, and social distancing. </li>
                    </ul>
                    <input type='checkbox' onChange={handleChange} required id='guidelines'></input>
                    <label for='guidelines' id="labelforgui">I have read and agree to the guidelines above.</label> <br />
                    <input id="submitbutton" type="submit" disabled={!formValid} value="MAKE YOUR RESERVATION"></input>
                </form>
            </div>
        </div>
    )
}
