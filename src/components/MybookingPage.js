import React, { useState, useEffect } from 'react';
import '../css/MybookingPage.css'; 
import axios from 'axios';

const MyBookingPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5100/api/bookings";
    axios.get(url)
      .then((res) => {
        setBookingDetails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  const handleCancelBooking = (bookingId) => {
    axios.delete(`http://localhost:5100/api/bookings/${bookingId}`)
      .then((res) => {
        console.log(res.data.msg); // Log success message
        // After successful deletion, fetch updated booking list
        alert("Booking was deleted successfully!");
        axios.get("http://localhost:5100/api/bookings")
          .then((res) => {
            setBookingDetails(res.data);
          })
          .catch((error) => {
            console.error('Error fetching bookings after deletion:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };

  if (!bookingDetails) {
    return (
      <>
      <div className="my-booking-container">
        <h2 className="my-booking-title">My Bookings</h2>
        <div className="booking-list">
          <p>No bookings found</p>
        </div>
        <div className="booking-details">
          <h3>Booking Details</h3>
          <p>Here you can view the details of your appointments, including the doctor's name, appointment date, and status.</p>
          <p>If you need to make any changes to your appointments, please contact us.</p>
        </div>
      </div>
      
      </>
     
    );
  }

  return (
    <>
   
  <div className="my-booking-container">
    <h2 className="my-booking-title">MY BOOKINGS</h2>
    <div className="booking-list">
      {bookingDetails.map((booking, index) => (
        <div className="booking-item" key={index}>
          <h3>Booking ID: {booking._id}</h3>
          <p>Name: {booking.name}</p>
          <p>Phone: {booking.phone}</p>
          <p>Date of birth: {booking.dob}</p>
          <p>Gender:{booking.gender}</p>
          <p>appointment_date:{booking.appointment_date}</p>
          <p>Symptoms: {booking.symptoms}</p>
          <p>Doctor: {booking.doctor}</p>
          <p>Status: {booking.status}</p>
          <button className='booking-cncl' onClick={() => handleCancelBooking(booking._id)}>Cancel My Booking</button>
        </div>
      ))}
    </div>
    <div className="booking-details">
      <h3>Booking Details</h3>
      <p>Here you can view the details of your appointments, including the doctor's name, appointment date, and status.</p>
      <p>If you need to make any changes to your appointments, please contact us.</p>
    </div>
  </div>


  </>
  );
};

export default MyBookingPage;
