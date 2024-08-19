import React from "react";
import './hero.css'; // Importa el archivo CSS general

const Hero = () => (
  <div className="financing-hero-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12">
          <div className="financing-hero-content">
            <h1>Finance Your Project with <span>GA Castro Construction</span></h1>
            <p>
              We work with Hearth to provide financing options for our clients. Using their services, you can get the funds you need for your project. Click "Get started" to learn more and apply for financing.
            </p>
            <div className="financing-hero-buttons">
              <a href="https://app.gethearth.com/partners/ga-castro-construction-llc/jeison/apply" className="btn btn-primary">Get started</a>
              <a href="mailto:g.a.castroconstructionllc@gmail.com" className="btn btn-secondary">Email us</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="financing-hero-image">
            <img src={require("../../assets/img/financing.jpg")} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
