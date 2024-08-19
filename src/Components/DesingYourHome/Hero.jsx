// src/Components/DesignYourHome.jsx
import React from "react";
import './DesignYourHome.css'; // Asegúrate de definir los estilos necesarios en este archivo CSS

const DesignYourHome = () => (
  <div className="design-your-home-container">
    <div className="design-your-home-content">
      <h1>Welcome to Your Roof & Home Design Studio</h1>
      <h2>Design your Home</h2>
      <p>
        Get <strong>QuickView</strong> to instantly see what the shingles you want to install on your home will look like, with all the brands we currently install. Explore the various tools we offer to visualize the perfect exterior for your home.
      </p>
      <div className="button-wrapper">
        <a href="#brands-section" className="btn-cta">Get Started</a>
      </div>
    </div>
    <div className="design-your-home-image">
      <img src="https://iili.io/dxZeX5J.webp" alt="Visualizing home design with tools" />
    </div>
  </div>
);

export default DesignYourHome;
