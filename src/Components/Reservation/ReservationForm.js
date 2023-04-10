import React from 'react';
import './ReservationForm.css';

export default function ReservationForm() {
    return (
        <div>
            <div>
                <h1>RESERVATION</h1>
            </div>
            <div>
                <form>
                    <h2>STEP 1</h2>
                    <label for='res-date'>Reservation Date</label>
                    <p>(We close on every Monday)</p>
                    <input type='date' id='res-date' required></input>
                    <label for='res-time'>Reservation Time</label>
                    <p>(We open from 11AM - 10PM)</p>
                    <input id='res-time' required type='time' />
                    <label for="guests">Number of guests</label>
                    <p>(If you booki for more than 10 guests, you must give us a week's notice)</p>
                    <input type="number" placeholder="1" min="1" max="50" id="guests" required />
                    <label for="occasion">Occasion</label>
                    <select id="occasion">
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select>
                    <label for='special-req'>Special Requirement</label>
                    <p>(Allergies, Vegan Food, Smoking Area Seat,...)</p>
                    <textarea name='special-req' id='special-req' rows='5' cols='50' />
                    <h2>STEP 2</h2>
                    <label for='name'>Name *</label>
                    <input type='text' id='name' required></input>
                    <label for='phonenumber'>Phone Number *</label>
                    <input type='number' id='phonenumber' required></input>
                    <label for='email'>Email *</label>
                    <input type='email' id='email' required></input>
                    <input type="submit" value="Make Your reservation"></input>
                </form>
            </div>
        </div>
    )
}
