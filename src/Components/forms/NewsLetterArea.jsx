import React from 'react';
import './RoofingContactForm.css'; // Asegúrate de tener el CSS correspondiente importado

const RoofingContactForm = () => (
    <div className="roofing-contact-bg">
      <div className="roofing-contact-title">
        <p className="roofing-sub-title">QUALITY ROOFING CONTACT FORM</p>
        <h2 className="roofing-main-title">NEED ROOFING ANY SERVICES?</h2>
      </div>
      <form className="roofing-form">
        <div className="roofing-form-grp">
          <input type="text" placeholder="Full Name*" required />
        </div>
        <div className="roofing-form-grp">
          <input type="email" placeholder="Email*" required />
        </div>
        <div className="roofing-form-grp">
          <input type="text" placeholder="Phone*" required />
        </div>
        <div className="roofing-form-grp">
          <input type="text" placeholder="Address*" required />
        </div>
        <button type="submit" className="roofing-button">
          Submit Now
        </button>
      </form>
    </div>
  );

export default RoofingContactForm;
