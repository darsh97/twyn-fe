import React from 'react';

const Footer = () => {
  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">TWYNETIC ORBIT</h3>
          <p className="footer-text">AI-accelerated physics simulation for the future of engineering.</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Technology</h4>
          <p className="footer-link">Neural Operators</p>
          <p className="footer-link">Digital Twins</p>
          <p className="footer-link">CFD Simulation</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Industries</h4>
          <p className="footer-link">Automotive</p>
          <p className="footer-link">Aerospace</p>
          <p className="footer-link">Energy</p>
        </div>
        <div className="footer-section">
          <h4 className="footer-subtitle">Company</h4>
          <p className="footer-link">About Us</p>
          <p className="footer-link">Careers</p>
          <p className="footer-link">Contact</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 Twynetic Orbit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;