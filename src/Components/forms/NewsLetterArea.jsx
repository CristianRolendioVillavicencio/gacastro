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
        <h2 className="title">Sign up for our newsletter</h2>
        <p className="description">
          Join many others and subscribe to get product updates, market insights, tips & tricks to selling software, and more.
        </p>
      </div>
      <div className="newsletter-form">
        <form onSubmit={handleSubmit}>
          <div className="form-grp">
            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-grp">
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
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
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Subscribe"}
          </button>
        </form>
        <p className="privacy-text">
          We care about the protection of your data. Read our <a href="#">Privacy Policy</a>.
        </p>
        <ToastContainer />
      </div>
    </section>
  );
}

export default NewsLetterArea;
