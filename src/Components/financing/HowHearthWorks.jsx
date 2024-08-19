import React from "react";
import './hero.css'; // Importa el archivo CSS general

const HowHearthWorks = () => (
  <div className="how-hearth-works-section">
    <div className="container">
      <div className="banner">
        <a href="https://app.gethearth.com/partners/ga-castro-construction-llc?utm_campaign=42562&utm_content=zero_percent&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110" target="_blank" rel="noopener noreferrer">
          <img src="https://app.gethearth.com/contractor_images/ga-castro-construction-llc/banner.jpg?color=zero_percent&size_id=700x110" alt="Hearth 700x110" className="hearth-banner" />
        </a>
      </div>
      <h2 className="section-title">How Hearth Financing Works</h2>
      <p className="section-subtitle">
        Follow these simple steps to secure financing for your project with GA Castro Construction. Our partnership with Hearth allows you to find the best financing options quickly and easily.
      </p>
      <div className="row align-items-center">
        <div className="col-lg-6 left-half">
          <div className="hearth-image">
            <img src={require("../../assets/img/hearth-financing.png")} alt="How Hearth Financing Works" title="How Hearth Financing Works" />
          </div>
        </div>
        <div className="col-lg-6 right-half">
          <div className="hearth-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Pre-Qualify</h3>
                <p>Complete a short online financing request and get immediately pre-qualified by up to 13 lending partners without affecting your credit score.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Pick Payment Plan</h3>
                <p>Find customized payment plans for your needs. Financing options are available before an on-site visit, in the home, or as a follow-up.</p>
                <p>For qualified homeowners, there are 0% introductory APR credit card options. Terms range from 6-18 months.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Get Funded</h3>
                <p>Apply for your preferred payment option and, if approved, receive funds in as few as 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowHearthWorks;
