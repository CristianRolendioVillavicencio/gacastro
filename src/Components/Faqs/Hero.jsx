import React from "react";
import './faq.css'; // Asegúrate de definir los estilos necesarios en este archivo CSS
import faqqImage from "./faqq.png"; // Importar la imagen

const faq = () => (
  <div className="design-your-home-container">
    <div className="design-your-home-content">
      <h1>Welcome to Our FAQ Section</h1>
      <h2>Frequently Asked Questions</h2>
      <p>
        Find answers to the most commonly asked questions about our roofing, siding, copper, gutter, painting, and restoration services. Explore the FAQs to learn more about how we can help with your home improvement needs.
      </p>
      <div className="button-wrapper">
        <a href="#faq-section" className="btn-cta">Explore FAQs</a>
      </div>
    </div>
    <div className="design-your-home-image">
      <img src={faqqImage} alt="questionIMG" />
    </div>
  </div>
);

export default faq;
