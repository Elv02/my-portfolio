import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        "-rFgg2370rbs0GLkX" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="contact__container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
