import React from 'react'

export default function AvailableTimes(props) {
    const times = [
        "11:00 AM", "11:30 AM", "12:00 AM", "12:30 AM", "1:00 PM", "1:30 PM",
        "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
        "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
    ];

    return (
        <>
            {times.map((time) => <option>{time}</option>)}
        </>
    )
}
