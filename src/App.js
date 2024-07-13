import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import './css/Login.css'; 
import '../src/css/signup.css';
import Doctors from './components/Doctors';
import WelcomePage from './components/WelcomePage';
import BookingPage from './components/BookingPage';
import MyBookingPage from './components/MybookingPage';
import About from './components/About';
import DoctorPage from './components/DoctorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/doctbook" element={<BookingPage />} />
        <Route path="/mybook" element={<MyBookingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctpage" element={<DoctorPage />} />

      </Routes>
    </Router>
  );
}

export default App;
