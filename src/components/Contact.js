import React from "react";
import "./ContactUs.css"; // Import your CSS file for styling
import contactpic from "../images/contact.png";
import Footer from "./Footer";
const ContactUs = () => {
  return (
    <>
      <section className="contact-us-section">
        <div className="contact-image">
          <img src={contactpic} alt="Contact Us" />
        </div>
        <div className="contact-form">
          <h2>STAY IN TOUCH WITH US</h2>
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Type Message here</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
