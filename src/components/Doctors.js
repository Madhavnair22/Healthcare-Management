import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUserMd, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import '../css/Doctors.css'; 
import { AiFillAccountBook, AiFillEye, AiFillMedicineBox } from 'react-icons/ai';

const Doctors = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/doctbook');
  };

  const dataSource = [
    {
      key: '1',
      name: 'Dr.Samyuktha',
      specialist: 'Cardiologist',
      experience: '10 years',
      amount: '₹2000',
    },
    {
      key: '2',
      name: 'Dr.Aananth',
      specialist: 'Dermatologist',
      experience: '8 years',
      amount: '₹1200',
    },
    {
      key: '3',
      name: 'Dr.Nisha Mittal',
      specialist: 'Orthopedic Surgeon',
      experience: '15 years',
      amount: '₹3500',
    },
    {
      key: '4',
      name: 'Dr.Anjana Nair',
      specialist: 'Pediatrician',
      experience: '12 years',
      amount: '₹2500',
    },
    {
      key: '5',
      name: 'Dr.Nidharshana Nair',
      specialist: 'Neurologist',
      experience: '9 years',
      amount: '₹1800',
    },
    {
      key: '6',
      name: 'Dr.Emin',
      specialist: 'Psychiatrist',
      experience: '11 years',
      amount: '₹1100',
    },
    {
      key: '7',
      name: 'Dr.Deepak',
      specialist: 'Oncologist',
      experience: '13 years',
      amount: '₹2900',
    },
    {
      key: '8',
      name: 'Dr.Hariharan',
      specialist: 'Gynecologist',
      experience: '7 years',
      amount: '₹1600',
    },
    {
      key: '9',
      name: 'Dr.Ramkumar',
      specialist: 'Urologist',
      experience: '14 years',
      amount: '₹3200',
    },
    {
      key: '10',
      name: 'Dr.Santhosh',
      specialist: 'Endocrinologist',
      experience: '10 years',
      amount: '₹2500',
    },
  ];

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
          <li><Link to="/welcome"><FaHome /> WELCOME</Link></li>
          <li><Link to="/doctors"><FaUserMd /> DOCTORS </Link></li>
            <li><Link to="/about"><AiFillEye />  ABOUT US</Link></li>
            <li><Link to="/mybook"><AiFillMedicineBox />  MY BOOKINGS</Link></li>
            <li><Link to="/"><AiFillAccountBook /> SIGNOUT</Link></li>


          </ul>
        </Container>
      </nav>

      
      <Container className="main-content">
       
        <div className="doctors-container">
          <div className="doctors-list">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Doctor's Name</th>
                  <th>Specialist</th>
                  <th>Experience</th>
                  <th>Estimated Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataSource.map((doctor) => (
                  <tr key={doctor.key}>
                    <td>{doctor.name}</td>
                    <td>{doctor.specialist}</td>
                    <td>{doctor.experience}</td>
                    <td>{doctor.amount}</td>
                    <td>
                      <Button type="primary" className="book-appointment-btn" onClick={handleBooking}>
                        Book Appointment
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
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
              <p>Email: <a href="mailto:doctcare@gmail.com">doctcare@gmail.com</a></p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div className="feedback-form">
              <h3>Send Us Feedback</h3>
              <form>
                <div className="form-group1">
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
    </div>
  );
};

export default Doctors;
