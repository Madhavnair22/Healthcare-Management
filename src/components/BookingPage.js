import React, { useState } from "react";
import "../css/BookingPage.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  FaUserMd,
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaVenusMars,
  FaNotesMedical,
  FaStethoscope,
  FaHome,
} from "react-icons/fa";
import {
  AiFillAccountBook,
  AiFillEye,
  AiFillMedicineBox,
} from "react-icons/ai";

const url = "http://localhost:5100/api/bookings";

const BookingPage = () => {
  const [User, setUser] = useState('');
  const [Phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [Symptoms, setSymptoms] = useState('');
  const [Doctor, setDoctor] = useState('');
  const [Status, setStatus] = useState("pending");

  const onBooking = async (e) => {
    e.preventDefault();
    const values = {
      name: User,
      phone: Phone,
      dob: dob,
      gender: gender,
      appointment_date: appointmentDate,
      symptoms: Symptoms,
      doctor: Doctor,
      status: Status,
    };

    Axios.post(url, values)
      .then(() => {
        alert("Appointment booked successfully");
      })
      .catch((err) => {
        alert("Booking unsuccessful, try again later");
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="logo">
          <Link to="/">DOCT-CARE</Link>
        </h1>
      </header>

      <nav className="navigation">
        <Container>
          <ul>
            <li>
              <Link to="/welcome">
                <FaHome /> WELCOME
              </Link>
            </li>
            <li>
              <Link to="/doctors">
                <FaUserMd /> DOCTORS
              </Link>
            </li>
            <li>
              <Link to="/about">
                <AiFillEye /> ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillAccountBook /> SIGNOUT
              </Link>
            </li>
            <li>
              <Link to="/mybook">
                <AiFillMedicineBox /> MY BOOKINGS
              </Link>
            </li>
          </ul>
        </Container>
      </nav>

      <div className="booking-container">
        <div className="booking-content">
          <h2 className="booking-title">Book an Appointment</h2>
          <form onSubmit={onBooking}>
            <div className="form-group">
              <label htmlFor="name">
                <FaUser /> YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={User}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                <FaPhone /> PHONE NUMBER
              </label>
              <input
                type="text"
                id="phone"
                className="form-control"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">
                <FaCalendarAlt /> DATE OF BIRTH
              </label>
              <input
                type="date"
                id="dob"
                className="form-control"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">
                <FaVenusMars /> GENDER
              </label>
              <select
                id="gender"
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="appointment">
                <FaCalendarAlt /> APPOINTMENT DATE
              </label>
              <input
                type="date"
                id="appointment"
                className="form-control"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="symptoms">
                <FaNotesMedical /> Symptoms
              </label>
              <textarea
                id="symptoms"
                className="form-control"
                value={Symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="Describe your symptoms"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="doctor">
                <FaStethoscope /> Select Doctor
              </label>
              <select
                id="doctor"
                className="form-control"
                value={Doctor}
                onChange={(e) => setDoctor(e.target.value)}
                required
              >
                <option value="">Select a doctor</option>
                <option value="Dr.Samyuktha">Dr.Samyuktha</option>
                <option value="Dr.Aananth">Dr.Aananth</option>
                <option value="Dr.Nisha Mittal">Dr.Nisha Mittal</option>
                <option value="Dr.Anjana Nair">Dr.Anjana Nair</option>
                <option value="Dr.Nidharshana Nair">Dr.Nidharshana Nair</option>
                <option value="Dr.Emin">Dr.Emin</option>
                <option value="Dr.Deepak">Dr.Deepak</option>
                <option value="Dr.Olivia Martinez">Dr. Olivia Martinez</option>
                <option value="Dr.Ramkumar">Dr.Ramkumar</option>
                <option value="Dr.Santhosh">Dr.Santhosh</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>

      <div className="booking-sidebar">
        <div className="sidebar-item">
          <h3>Why Choose Us?</h3>
          <p>
            Our team of experienced doctors provides personalized care and
            treatment for all your healthcare needs.
          </p>
        </div>
        <div className="sidebar-item">
          <h3>Health Tips</h3>
          <p>
            Stay healthy by following these simple tips: eat a balanced diet,
            exercise regularly, get enough sleep, and manage stress.
          </p>
        </div>
        <footer className="footer">
          <Container>
            <div className="footer-content">
              <div className="map">
                <h3>Google Maps</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31063.615111489577!2d77.51599812759903!3d13.290945987960367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1de38e96323a3%3A0xbf906b32e5d81163!2sDoddaballapura%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716268036445!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="contact-info">
                <h3>Contact Us</h3>
                <p>
                  Email:{" "}
                  <a href="mailto:doctcare@gmail.com">doctcare@gmail.com</a>
                </p>
                <p>Phone: +1 (123) 456-7890</p>
              </div>
              <div className="feedback-form">
                <h3>Send Us Feedback</h3>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <p>&copy; 2024 DOCT-CARE</p>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default BookingPage;
