import React, { useState } from "react";
import QuoteForm from '../forms/QuoteForm'; // Asegúrate de que la ruta es correcta

function MainWid() {
  const [selectedCity, setSelectedCity] = useState("Stamford");

  const contactInfo = {
    Stamford: {
      email: "stamford@gacastro.com",
      phone: "1 (800) 838-8186 ext 1",
      address: "39 Hubbard Ave, Stamford CT 06905",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6017.056815030704!2d-73.55432682393004!3d41.05744097134363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac10d21f00928c31%3A0x74003c50fb12aae1!2sGA%20CASTRO%20CONSTRUCTION!5e0!3m2!1sen!2sus!4v1721766089432!5m2!1sen!2sus"
    },
    Guilford: {
      email: "guilford@gacastro.com",
      phone: "1 (800) 838-8186 ext 2",
      address: "1300 Boston Post Rd, Guilford, CT 06437",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.9480046471967!2d-72.69580332391844!3d41.28823607131263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e62b50d2f17f47%3A0x34229e7354d53e31!2sGA%20CASTRO%20CONSTRUCTION%20-%20GUILFORD!5e0!3m2!1sen!2sus!4v1721766119529!5m2!1sen!2sus"
    }
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-10">
            <div className="contact-info-wrap">
              <h2 className="title">Select One of Our Offices</h2>
              <div className="office-buttons">
                <button className="btn" type="button" onClick={() => handleCityChange("Stamford")}>
                  Stamford
                </button>
                <button className="btn" type="button" onClick={() => handleCityChange("Guilford")}>
                  Guilford
                </button>
              </div>
              <h2 className="title">Need Any Help?</h2>
              <p>Call us or message and we'll respond as soon as possible</p>
              <ul className="list-wrap">
                <li>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <a href={`tel:${contactInfo[selectedCity].phone}`}>{contactInfo[selectedCity].phone}</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="content">
                      <a href={`mailto:${contactInfo[selectedCity].email}`}>{contactInfo[selectedCity].email}</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <p>{contactInfo[selectedCity].address}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="contact-map">
              <iframe
                title="map"
                src={contactInfo[selectedCity].map}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-xl-6 col-lg-10">
            <div
              className="contact-form-wrap"
              style={{
                backgroundImage: `url(${require("../../assets/img/images/contact_form_bg.jpg")})`,
              }}
            >
              <h2 className="title">Get a FREE Estimate</h2>
              <p>Fill out the form below to have Ga Castro Construction contact you shortly, or call 1-800-838-8186 to contact Ga Castro Construction.</p>
              <QuoteForm /> {/* Integración del nuevo formulario */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainWid;
