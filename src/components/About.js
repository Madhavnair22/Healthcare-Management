import React, { useState, useEffect } from "react";
import Doctor from "../image/doctor-group.png";
import TeamMember1 from "../image/doctor-picture.png"; 
import TeamMember2 from "../image/profile-2.png";
import TeamMember3 from "../image/profile-3.png";
import "../css/About.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaHome, FaUser, FaUserMd } from "react-icons/fa";
import {
  AiFillAccountBook,
  AiFillEye,
  AiFillMedicineBox,
} from "react-icons/ai";

const contents = [
  {
    title: "Choose a Specialist",
    description:
      "Find your perfect specialist and book with ease at Health Plus. Expert doctors prioritize your health, offering tailored care.",
    id: "choose-specialist",
    icon: "🔍",
  },
  {
    title: "Make a Schedule",
    description:
      "Choose the date and time that suits you best, and let our dedicated team of medical professionals ensure your well-being with personalized care.",
    id: "make-schedule",
    icon: "📅",
  },
  {
    title: "Get Your Solutions",
    description:
      "Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health.",
    id: "get-solutions",
    icon: "💡",
  },
  {
    title: "24/7 Support",
    description:
      "Our team is available around the clock to assist you with any healthcare needs and queries you may have.",
    id: "support",
    icon: "🕒",
  },
  {
    title: "Virtual Consultations",
    description:
      "Consult with our healthcare professionals from the comfort of your home through our secure online platform.",
    id: "virtual-consultations",
    icon: "💻",
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "Receive treatment plans that are tailored to your unique health needs and goals, ensuring optimal care.",
    id: "treatment-plans",
    icon: "📋",
  },
  {
    title: "Health Monitoring",
    description:
      "Keep track of your health with our comprehensive monitoring services, designed to provide you with accurate and timely information.",
    id: "health-monitoring",
    icon: "📈",
  },
  {
    title: "Pharmacy Services",
    description:
      "Get your prescriptions filled quickly and efficiently through our reliable pharmacy services.",
    id: "pharmacy-services",
    icon: "💊",
  },
  {
    title: "Health Tips & Advice",
    description:
      "Stay informed with the latest health tips and advice from our expert doctors and health professionals.",
    id: "health-tips",
    icon: "📝",
  },
  {
    title: "Nutritional Guidance",
    description:
      "Receive personalized nutritional guidance to help you maintain a healthy and balanced diet.",
    id: "nutritional-guidance",
    icon: "🥗",
  },
  {
    title: "Fitness Programs",
    description:
      "Join our fitness programs designed to keep you active and healthy, tailored to your fitness level and goals.",
    id: "fitness-programs",
    icon: "🏋️‍♂️",
  },
  {
    title: "Mental Health Support",
    description:
      "Access mental health resources and support to ensure your overall well-being.",
    id: "mental-health-support",
    icon: "🧠",
  },
  {
    title: "Chronic Disease Management",
    description:
      "Manage chronic conditions with the help of our specialized care plans and support services.",
    id: "chronic-disease-management",
    icon: "🏥",
  },
  {
    title: "Pediatric Care",
    description:
      "Ensure your child's health and well-being with our comprehensive pediatric care services.",
    id: "pediatric-care",
    icon: "👶",
  },
  {
    title: "Women's Health",
    description:
      "Receive specialized care for women’s health issues, from reproductive health to menopause management.",
    id: "womens-health",
    icon: "👩",
  },
  {
    title: "Men's Health",
    description:
      "Access tailored healthcare services that address men's unique health needs and concerns.",
    id: "mens-health",
    icon: "👨",
  },
  {
    title: "Senior Care",
    description:
      "Our senior care services are designed to provide compassionate and comprehensive care for older adults.",
    id: "senior-care",
    icon: "👴",
  },
  {
    title: "Emergency Care",
    description:
      "Get immediate assistance and care for medical emergencies with our emergency care services.",
    id: "emergency-care",
    icon: "🚑",
  },
  {
    title: "Rehabilitation Services",
    description:
      "Recover effectively with our rehabilitation services, including physical therapy and occupational therapy.",
    id: "rehabilitation-services",
    icon: "🔄",
  },
  {
    title: "Home Health Services",
    description:
      "Receive healthcare in the comfort of your home with our professional home health services.",
    id: "home-health-services",
    icon: "🏠",
  },
  {
    title: "Vaccination Programs",
    description:
      "Stay protected with our comprehensive vaccination programs for all ages.",
    id: "vaccination-programs",
    icon: "💉",
  },
];

const testimonials = [
  {
    name: "DR.ANJANA NAIR",
    feedback:
      "Excellent service and friendly staff! I felt cared for and supported.",
    image: TeamMember1,
  },
  {
    name: "DR.DEEPAK",
    feedback:
      "The doctors are very knowledgeable and the online consultations are so convenient.",
    image: TeamMember2,
  },
  {
    name: "DR.NISHA MITTAL",
    feedback:
      "Great experience! The personalized treatment plans really made a difference.",
    image: TeamMember3,
  },
];

const statistics = [
  { label: "Annual R&D & product investment spend in 2021", value: "~$1B" },
  { label: "Installed base equipment", value: "4M+" },
  { label: "Patients served annually", value: "1B+" },
  { label: "Imaging software applications", value: "200+" },
];

function About() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const top = aboutSection.getBoundingClientRect().top;
      const height = window.innerHeight;
      if (top <= height * 0.75) {
        aboutSection.classList.add("fadeIn");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                <FaUserMd /> DOCTORS{" "}
              </Link>
            </li>
            <li>
              <Link to="/about">
                <AiFillEye /> ABOUT US
              </Link>
            </li>
            <li>
             
              <Link to="/mybook">
                <AiFillMedicineBox /> MY BOOKINGS
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
      <div className="about-section" id="about">
        <div className="about-image-content">
          <img src={Doctor} alt="Doctor Group" className="about-image1" />
        </div>

        <div className="about-text-content">
          <h3 className="about-title">
            <span>About Us</span>
          </h3>
          <p className="about-description">
            Welcome to Doct-Care, your trusted partner for accessible and
            personalized healthcare. Our expert doctors offer online
            consultations and specialized services, prioritizing your
            well-being. Join us on this journey towards a healthier you.
          </p>

          <h4 className="about-text-title">Our Vision</h4>
          <div className="about-vision">
            <p>
              At GE HealthCare, we see possibilities through innovation. We’re
              partnering with our customers to fulfill healthcare’s greatest
              potential through groundbreaking medical technology, intelligent
              devices, and care solutions. Better tools enabling better patient
              care. Together, we are not only building a healthier future but
              living our purpose to create a world where healthcare has no
              limits.
            </p>
          </div>

          <h4 className="about-text-title">Our Services</h4>
          <div className="about-solutions">
            {contents.map((content, index) => (
              <div
                key={index}
                className={`solution-card ${
                  activeSection === content.id ? "active" : ""
                }`}
                onClick={() => setActiveSection(content.id)}
              >
                <div className="solution-icon">{content.icon}</div>
                <h5>{content.title}</h5>
                <p>{content.description}</p>
              </div>
            ))}
          </div>

          <h4 className="about-text-title">Our Impact</h4>
          <div className="about-statistics">
            {statistics.map((stat, index) => (
              <div key={index} className="statistic-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <h4 className="about-text-title">Testimonials</h4>
          <div className="about-testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h5>{testimonial.name}</h5>
                <p>"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>

          <h4 className="about-text-title">Our Team</h4>
          <div className="about-team">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="team-member-card">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="team-member-image"
                />
                <h5>{testimonial.name}</h5>
                <p>{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
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
    </>
  );
}

export default About;
