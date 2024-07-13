import React, { useState } from "react";
import "../css/signup.css";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap"; // Added Container import
import { FaHome, FaUserMd } from "react-icons/fa";
import { AiFillAccountBook, AiFillEye, AiFillMedicineBox } from "react-icons/ai";

const url = 'http://localhost:5100/api/users/signup';

const Signup = () => {
  const [User, setUser] = useState('');
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');

  const onFinishSignup = async (e) => {
    //e.preventDefault();
    const values = {
      name: User,
      email: Email,
      password: Pass
    };
    axios.post(url, values)
      .then(() => {
        alert("Signup Successful");
      })
      .catch((err) => {
        alert('Signup Unsuccessful');
      });
  };

  return (
    <div className="background">
    {/* Header */}
    <header className="header">
        <h1 className="logo">
          <Link to="/">DOCT-CARE</Link>
        </h1>
      </header>

      {/* Navigation */}
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
          </ul>
        </Container>
      </nav>
    <div className="form-container">
        <Form
          layout="vertical"
          className="register-form"
          onFinish={onFinishSignup} 
        >
          <h3 className="text-center">SIGNUP FORM</h3>

          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name' }]}>
            <Input type="text" value={User} onChange={(e) => setUser(e.target.value)} required />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email' }]}>
            <Input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Item>
          
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password' }]}>
            <Input type="password" value={Pass} onChange={(e) => setPass(e.target.value)} required />
          </Form.Item>

          <Link to="/login" className="m-2">
            Already user? Login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
       {/* Footer */}
    <footer className="footer">
        <Container>
          <div className="footer-content">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>Email: <a href="mailto:doctcare@gmail.com">doctcare@gmail.com</a></p>
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

export default Signup;
