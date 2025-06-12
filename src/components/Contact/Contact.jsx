import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('access_key', '45d87298-fb5c-4ed9-94d1-e76030abd711');
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: form
    });

    const result = await response.json();
    if (result.success) {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">Have a project or question? Let’s talk.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-info-item">
  <div className="contact-info-icon"><FaMapMarkerAlt /></div>
  <div className="contact-info-text"><h3>Location</h3><p>Chennai, India</p></div>
</div>
<div className="contact-info-item">
  <div className="contact-info-icon"><FaEnvelope /></div>
  <div className="contact-info-text"><h3>Email</h3><p>ivetri21@gmail.com</p></div>
</div>
<div className="contact-info-item">
  <div className="contact-info-icon"><FaPhoneAlt /></div>
  <div className="contact-info-text"><h3>Phone</h3><p>+91 7358651204</p></div>
</div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {success && <p className="success-message">Thank you! Your message has been sent.</p>}
            <div className="contact-form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="contact-form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="contact-form-group">
              <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
