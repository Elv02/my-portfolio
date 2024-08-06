import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vngsfxb", // Replace with your EmailJS service ID
        "template_ojge3we", // Replace with your EmailJS template ID
        e.target,
        "-rFgg2370rbs0GLkX" // Replace with your EmailJS public key
      )
      .then(
        (_result) => {
          alert("Message sent successfully!");
        },
        (_error) => {
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <h1>Contact Me</h1>
        <p>
          You can reach me via the form below or through the following
          platforms:
        </p>
        <div className="contact__icons">
          <a
            href="https://github.com/Elv02"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__icon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/lauren-hoeft"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:laurenhoeft42@gmail.com" className="contact__icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="contact__form-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
