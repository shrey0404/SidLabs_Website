// src/components/Footer.js

import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2>SidLabs</h2>
          <p>
            Join us on this extraordinary journey as we redefine the limits of
            human potential. Together, we are forging a brighter future—one
            innovation at a time.
          </p>
        </div>
        <div className="footer-middle">
          <div className="footer-address">
            <h3>Address</h3>
            <p>SidLabs, Asaf Ali Road, New Delhi-110002</p>
          </div>
          <div className="footer-contact">
            <h3>Email</h3>
            <p>info@sidlabs.net</p>
          </div>
          <div className="footer-chat">
            <h3>Chat with us!</h3>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>
          Copyright © 2023 SidLabs. All rights reserved. Terms of Use & Privacy
          Policy
        </p>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/sidlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/sidlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.twitter.com/sidlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/sidlabs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
