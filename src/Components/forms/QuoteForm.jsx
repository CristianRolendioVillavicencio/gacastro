// src/Components/forms/QuoteForm.jsx
import React, { useState } from "react";

function QuoteForm() {
  const [consent, setConsent] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      setIsLoading(true);

      // Preparar datos del formulario para enviar al backend
      const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        city: e.target.city.value,
        address: e.target.address.value,
        message: e.target.message.value,
        subject: "New Quote Request",
      };

      fetch("https://castroconstruction-a6426ebdb470.herokuapp.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          if (data.success) {
            setFormStatus("success");
            e.target.reset(); // Resetea el formulario después de enviarlo
          } else {
            setFormStatus("error");
          }
        })
        .catch(() => {
          setIsLoading(false);
          setFormStatus("error");
        });
    }
  };

  const handleConsentChange = () => {
    setConsent(!consent);
    if (showWarning && !consent) {
      setShowWarning(false);
    }
  };

  return (
    <form
      className="contact-form"
      onSubmit={handleFormSubmit}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="form-grp">
            <input
              id="fullName"
              type="text"
              name="name"
              placeholder="*Full name"
              style={{ height: '50px' }}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-grp">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="*Email address"
              style={{ height: '50px' }}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="*Phone number"
              style={{ height: '50px' }}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input
              id="city"
              type="text"
              name="city"
              placeholder="*Your City"
              style={{ height: '50px' }}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-grp">
            <input
              id="address"
              type="text"
              name="address"
              placeholder="*Address home"
              style={{ height: '50px' }}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-grp">
            <textarea
              id="message"
              name="message"
              placeholder="*Message"
              style={{ minHeight: '100px', maxHeight: '200px', borderRadius: '10px' }}
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div className="form-grp">
        <label>
          <input type="checkbox" id="consent" checked={consent} onChange={handleConsentChange} required />
          I agree that GA Castro Construction LLC contact me by phone or emails.
        </label>
      </div>
      {showWarning && (
        <p style={{ color: 'red' }}>*You must accept the terms and conditions</p>
      )}
      <div className="form-grp">
        <button className="btn centered" type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Information"}
        </button>
      </div>
      {isLoading && (
        <p style={{ color: 'blue', marginTop: '10px' }}>Please wait while we send your message...</p>
      )}
      {formStatus === "success" && (
        <p style={{ color: 'green', marginTop: '10px' }}>Your message has been sent successfully!</p>
      )}
      {formStatus === "error" && (
        <p style={{ color: 'red', marginTop: '10px' }}>There was an error sending your message. Please try again.</p>
      )}
    </form>
  );
}

export default QuoteForm;
