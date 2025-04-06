import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            Empowering IT professionals with cutting-edge learning and
            compliance solutions. Your career, upskilled.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/personalizedlearning">Personalized Learning</a></li>
            <li><a href="/corporatetraning">Corporate Training</a></li>
            <li><a href="/upskill">Upskill</a></li>
            <li><a href="/compliance">Compliance</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@lmsplatform.com</p>
          <p>Phone: +91 000011223</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LMS Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
