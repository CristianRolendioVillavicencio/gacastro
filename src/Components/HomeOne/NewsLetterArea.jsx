import React, { useState } from "react";

function NewsLetterArea() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!isPhoneValid || !phone || !fullName || !email || !address) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      setIsLoading(true);

      // Preparar datos del formulario para enviar al backend
      const formData = {
        fullName,
        email,
        phone,
        address,
        message: "Request from NewsLetter Form",
        subject: "New Subscription Request from Website",
      };

      fetch("/api/sendEmail", {
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
            setFullName("");
            setEmail("");
            setPhone("");
            setAddress("");
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

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const phoneRegex = /^[0-9\b]+$/; // Solo números
    if (value === "" || phoneRegex.test(value)) {
      setPhone(value);
      setIsPhoneValid(value.length >= 10); // Al menos 10 dígitos para ser válido
    }
  };

  return (
    <section
      className="newsletter-area jarallax newsletter-bg"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/newsletter_bg.jpg")})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className="newsletter-content">
              <div className="section-title white-title-two tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Quality Roofing Contact Form
                </span>
                <h2 className="title tg-element-title">
                  Need Roofing Any Services?
                </h2>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="newsletter-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-grp">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-grp">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-grp">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone*"
                    value={phone}
                    onChange={handlePhoneChange}
                    required
                  />
                  {!isPhoneValid && (
                    <p style={{ color: "red" }}>
                      * Please enter a valid phone number with at least 10 digits.
                    </p>
                  )}
                </div>
                <div className="form-grp">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address*"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                {showWarning && (
                  <p style={{ color: "red" }}>* Please fill all fields correctly.</p>
                )}
                <button type="submit" className="btn btn-two" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Submit Now"}
                </button>
              </form>
              {isLoading && (
                <p style={{ color: "blue", marginTop: "10px" }}>
                  Please wait while we send your message...
                </p>
              )}
              {formStatus === "success" && (
                <p style={{ color: "green", marginTop: "10px" }}>
                  Your message has been sent successfully!
                </p>
              )}
              {formStatus === "error" && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  There was an error sending your message. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterArea;