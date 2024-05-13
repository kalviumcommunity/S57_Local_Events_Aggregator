import React, { useState } from "react";
import "./Contact.css";
import call from "../images/Icon.png";

const ContactForm = () => {
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
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="additional-contact-details">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Events</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="call-container">
          <img src={call} alt="" />
          <p>
            123-456-7890 <br />
            5gJ0K@example.com
            <br />
            123 Main Street, Anytown USA
          </p>
          <div className="copyright">
            <p>© Vibe Fest. All Rights Reserved.</p>
            <h6>Privacy Policy  |  Terms of Service</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
