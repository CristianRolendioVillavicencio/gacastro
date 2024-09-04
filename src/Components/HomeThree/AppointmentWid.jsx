import React, { useState } from "react";

function AppointmentWid() {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [consent, setConsent] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
      setIsLoading(true);

      const form = e.target;
      fetch("https://formsubmit.co/ajax/g.a.castroconstructionllc@gmail.com", {
        method: "POST",
        body: new FormData(form),
      })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        if (data.success === "true") {
          setFormStatus("success");
          form.reset();  // Resetea el formulario después de enviarlo
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
    <section className="appointment-area-two pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="appointment-inner-two tg-heading-subheading animation-style3"
              style={{
                backgroundImage: `url(${require("../../assets/img/bg/appointment_bg.jpg")})`,
              }}
            >
              <h2 className="title tg-element-title">Book Your Appointment</h2>
              <form 
                action="https://formsubmit.co/ajax/g.a.castroconstructionllc@gmail.com" 
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <input type="hidden" name="_subject" value="New Appointment From The Web" />
                <input type="hidden" name="_template" value="table" />  {/* Para presentación llamativa en tabla */}
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input type="text" name="phone" placeholder="Phone" required />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-grp">
                      <input type="text" name="location" placeholder="Location" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-grp">
                      <label htmlFor="appointment-date">Select Date:</label>
                      <input type="date" id="appointment-date" name="date" required />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-grp">
                      <label htmlFor="appointment-time">Select Time:</label>
                      <input type="time" id="appointment-time" name="time" required />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-grp">
                      <textarea name="message" placeholder="Message" required></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-grp checkbox-container">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        checked={consent} 
                        onChange={handleConsentChange} 
                        required 
                      />
                      <label htmlFor="consent">I agree that GA Castro Construction LLC contact me by phone or emails.</label>
                    </div>
                    {showWarning && (
                      <p style={{ color: 'red' }}>*You must accept the terms and conditions</p>
                    )}
                    <button type="submit" className="btn" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Book for Inspection"}
                    </button>
                  </div>
                </div>
              </form>
              {isLoading && (
                <p style={{ color: 'blue', marginTop: '10px' }}>Please wait while we send your message...</p>
              )}
              {formStatus === "success" && (
                <p style={{ color: 'green', marginTop: '10px' }}>Your message has been sent successfully!</p>
              )}
              {formStatus === "error" && (
                <p style={{ color: 'red', marginTop: '10px' }}>There was an error sending your message. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentWid;
