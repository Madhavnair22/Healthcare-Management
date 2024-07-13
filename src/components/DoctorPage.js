import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Checkmark } from "react-checkmark";
import { Link } from "react-router-dom";
import {
  AiFillAccountBook,
  AiFillEye,
  AiFillMedicineBox,
  AiFillCheckCircle,
} from "react-icons/ai";
import "../css/DoctorPage.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import axios from "axios";

const DoctorPage = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: "DR.NIDHARSHANA NAIR (MBBS, MD - General Medicine, DNB - Neurologist,General Physician)",
    specialty: "LEAD CONSULTANT - Neurologist",
    phoneNumber: "+91 923647927",
    email: "dr.nidharshana@gmail.com",
    rating: 4.5, // Doctor's rating
    patientStories: 204, // Number of patient stories
    experience: 9, // Years of experience
    hospital: "APOLLO HOSPITAL",
  });

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5100/api/bookings/")
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, [doctorInfo.name]);
  const handleCancelAppointment = (id) => {
    axios
      .put(`http://localhost:5100/api/bookings/${id}`, { status: "rejected" })
      .then((res) => {
        setAppointments(
          appointments.map((appointment) =>
            appointment._id === id
              ? { ...appointment, status: "rejected" }
              : appointment
          )
        );
        alert(`Appointment ${id} rejected`);
      })
      .catch((error) => {
        console.error("Error updating appointment status:", error);
      });
  };

  const handleAcceptAppointment = (id) => {
    axios
      .put(`http://localhost:5100/api/bookings/${id}`, { status: "accepted" })

      .then((res) => {
        setAppointments(
          appointments.map((appointment) =>
            appointment._id === id
              ? { ...appointment, status: "accepted" }
              : appointment
          )
        );
        alert(`Appointment ${id} accepted`);
      })
      .catch((error) => {
        console.error("Error updating appointment status:", error);
      });
  };

  const renderStars = () => {
    const fullStars = Math.floor(doctorInfo.rating);
    const halfStar = doctorInfo.rating % 1 !== 0;
    return (
      <>
        {Array(fullStars).fill(<FaStar color="gold" />)}
        {halfStar && <FaStarHalfAlt color="gold" />}
      </>
    );
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
              <Link to="/about">
                <AiFillEye /> ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiFillAccountBook /> SIGNOUT
              </Link>
            </li>
          </ul>
        </Container>
      </nav>

      <Container className="main-content">
        <div className="doctor-info">
          <h2>
            {" "}
            <AiFillCheckCircle className="checkmark-icon" /> Doctor Information
          </h2>
          <p>
            <p className="hospital-info">
              <strong>HOSPITAL :</strong>{" "}
              <span className="hospital-name">{doctorInfo.hospital}</span>
            </p>
            <strong>NAME : </strong> {doctorInfo.name}
          </p>
          <p>
            <strong>SPECIALTY :</strong> {doctorInfo.specialty}
          </p>
          <p>
            <strong>CONTACT :</strong> {doctorInfo.phoneNumber}
          </p>
          <p>
            <strong>EMAIL:</strong> {doctorInfo.email}
          </p>
          <p>
            <strong>RATING :</strong> {renderStars()}
          </p>
          <p>
            <strong>PATIENT STORIES :</strong>{" "}
            <Link to="/patient-stories" className="patient-stories-link">
              {doctorInfo.patientStories} patient stories
            </Link>
          </p>
          <p>
            <strong>EXPERIENCE :</strong>{" "}
            <Button variant="info" className="experience-button">
              {doctorInfo.experience} years
            </Button>
          </p>
        </div>

        <h2>Your Appointments</h2>
        <Table>
          <thead>
            <tr>
              <th>Patient's Name</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Appointment Date</th>
              <th>Symptoms</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.name}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.dob}</td>
                <td>{appointment.gender}</td>
                <td>{appointment.appointment_date}</td>
                <td>{appointment.symptoms}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.status}</td>
                <td>
                  <Button
                    className="cancel-button"
                    onClick={() => handleCancelAppointment(appointment._id)}
                    // disabled={appointment.status !== 'pending'}
                  >
                    Cancel
                  </Button>{" "}
                  <Button
                    className="accept-button"
                    onClick={() => handleAcceptAppointment(appointment._id)}
                    // disabled={appointment.status !== 'pending'}
                  >
                    Accept
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <footer className="footer">
        <Container>
          <div className="footer-content">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:doctcare@gmail.com">doctcare@gmail.com</a></p>
              <p>Phone: +91 9632458960</p>
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
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
          <p>&copy; 2024 DOCT-CARE</p>
        </Container>
      </footer>

    </>
  );
};

export default DoctorPage;
