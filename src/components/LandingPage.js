import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaHome, FaUserMd, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import "../css/LandingPage.css";
import img1 from "../image/doctor-book-appointment.png";
import img2 from "../image/doctor-group.png";
import img4 from "../image/profile-3.png";
import videoBg from "../image/videoBg.mp4";
import { AiFillEye } from "react-icons/ai";

function LandingPage() {
  return (
    <div>
      <header className="header">
        <h1 className="logo">
          <Link to="/">DOCT-CARE</Link>
        </h1>
      </header>

      <nav className="navigation">
        <Container>
          <ul>
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
              <Link to="/login">
                <FaSignInAlt /> LOGIN
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <FaUserPlus /> SIGNUP
              </Link>
            </li>
          </ul>
        </Container>
      </nav>

      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>
            <i>WELCOME TO DOCT-CARE</i>
          </h1>
          <div className="para">
            <p>
              DOCT-CARE is your premier destination for managing healthcare
              services efficiently. Our platform connects patients with doctors
              and streamlines the entire healthcare process.
            </p>
          </div>
        </div>
      </div>

      <Container className="main-content">
       
        <section className="section side-images">
          <img
            src={img1}
            alt="Doctor Book Appointment"
            className="side-image"
          />
          <img src={img2} alt="Doctor Group" className="side1-image" />
          <img src={img4} alt="Profile" className="side3-image" />
        </section>

        <section className="section features">
          <div className="feature-box">
            <h3>Find the Right Doctor</h3>
            <p>
              Search and discover experienced doctors in various specialties to
              meet your healthcare needs.
            </p>
          </div>
          <div className="feature-box">
            <h3>Manage Your Appointments</h3>
            <p>
              Schedule appointments with ease and manage your medical
              appointments conveniently.
            </p>
          </div>
          <div className="feature-box">
            <h3>Access Your Medical Records</h3>
            <p>
              Keep track of your medical records securely and access them
              anytime, anywhere.
            </p>
          </div>
        </section>

        <section className="section cta">
          <h2>Get Started Today</h2>
          <p>
            Sign up now to experience the convenience of managing your
            healthcare online.
          </p>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </section>

        <section className="section testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial">
            <p>
              "DOCT-CARE has made my life so much easier. I can easily schedule
              appointments and access my medical records whenever I need them."
            </p>
            <p className="author">- John Doe</p>
          </div>
          <div className="testimonial">
            <p>
              "I highly recommend DOCT-CARE to anyone looking for a reliable
              healthcare management platform. It's user-friendly and efficient."
            </p>
            <p className="author">- Jane Smith</p>
          </div>
        </section>
      </Container>

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
  );
}

export default LandingPage;
