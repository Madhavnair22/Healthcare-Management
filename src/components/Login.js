import React from 'react';
import { Form, Input, message } from "antd";
import { useState } from 'react';
import axios from 'axios';
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
//import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { FaUser, FaUserMd } from 'react-icons/fa';
import { AiFillAccountBook, AiFillEye, AiFillMedicineBox } from 'react-icons/ai';


const Login = () => {
  const [Email, setEmail] = useState([]);
  const [pass, setpass] = useState([]);
  const nav = useNavigate();


  const log = () => {
    const url = "http://localhost:5100/api/users?email=" + Email;
    axios.get(url).then((res) => {
      const userdata = res.data;
      let userLoginSuccess = false; 
      let docLoginSuccess = false;
  
      userdata.forEach((user) => {
        if (user.email === "dr.nidharshana@gmail.com" && user.password === "nidhar") {
          docLoginSuccess = true;
        } else if (user.email === Email && user.password === pass) {
          userLoginSuccess = true;
        }
      });
  
      if (userLoginSuccess) {
        alert("Login Successful");
        nav("/welcome"); // Navigate to welcome page for regular user
      } else if (docLoginSuccess) {
        alert("Doctor Login Successful");
        nav("/doctpage"); // Navigate to doctor page for admin
      } else {
        alert("Login Failed");
      }
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

            <li><Link to="/doctors"><FaUserMd /> DOCTORS </Link></li>
            <li><Link to="/about"><AiFillEye />  ABOUT US</Link></li>
    


          </ul>
        </Container>
      </nav>
      <div className="form-container ">
        <Form
          layout="vertical"
          className="register-form">
          <h3 className="text-center">LOGIN FORM</h3>

          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email' }]}>
            <Input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password' }]}>
            <Input type="password" value={pass} onChange={(e) => setpass(e.target.value)} required />
          </Form.Item>
          <Link to="/signup" className="m-2">
            Not a user Register here
          </Link>
          <button className="btn btn-primary" type="submit" onClick={log}>
            LOGIN
          </button>
        </Form>
      </div>
    
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

export default Login;