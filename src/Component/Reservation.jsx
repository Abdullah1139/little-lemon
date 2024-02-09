import React, { useState } from 'react';
import './reservation.css'; // Import CSS file


const Reservation = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        numberOfPeople: ''
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here (e.g., sending data to backend)
        console.log(formData);
    };

    return (
        <div>
            <center>
            <h2>Table Reservation Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Format: 123-456-7890" value={formData.phone} onChange={handleChange} required />

                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

                <label htmlFor="numberOfPeople">Number of People:</label>
                <input type="number" id="numberOfPeople" name="numberOfPeople" min="1" value={formData.numberOfPeople} onChange={handleChange} required />

                <input type="submit" value="Submit" />
            </form>
            </center>
        </div>
    );
};

export default Reservation;
