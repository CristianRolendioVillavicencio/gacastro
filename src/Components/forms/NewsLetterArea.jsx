import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function NewsLetterArea() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    fetch('/api/sendEmail', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (response.ok) {
          toast.success("Your message has been sent successfully!");
        } else {
          toast.error("Failed to send your message.");
        }
      })
      .catch(() => {
        toast.error("An error occurred. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="newsletter-bg">
      <div className="section-title white-title-two">
        <span className="sub-title">Stay Updated</span>
        <h2 className="title">Subscribe to Our Newsletter</h2>
      </div>
      <div className="newsletter-form">
        <form onSubmit={handleSubmit}>
          <div className="form-grp">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-grp">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-grp">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Subscribe Now"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
}

export default NewsLetterArea;
