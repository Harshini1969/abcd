import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaRegEnvelope,
  FaRegCommentDots,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h4 className="contact-subtitle">Contact Me</h4>
      <h1 className="contact-title">I Want To Hear From You</h1>

      <p className="contact-description">
        Please fill out the form in this section to contact me.
        Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday.
      </p>

      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Address</h3>
              <p>Somewhere in world</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>narahariharshini09@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 xxxxxxxxxx</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-group">
            <FaRegEnvelope className="input-icon" />
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="input-group">
            <FaPhoneAlt className="input-icon" />
            <input type="text" placeholder="Your Phone" />
          </div>

          <div className="input-group">
            <FaRegCommentDots className="input-icon" />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea placeholder="Write your message here" />
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
