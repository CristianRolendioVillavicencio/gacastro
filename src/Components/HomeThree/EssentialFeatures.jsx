// EssentialFeatures.jsx
import React from 'react';
import './EssentialFeatures.css';
import { features } from './featuresData.ts'; // Asegúrate de importar correctamente desde tu archivo TypeScript

const EssentialFeatures = () => {
  const handleMoreServicesClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="essential-features">
      <h2 className="features-title">Our Essential Features</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            {feature.title === 'More Services' ? (
              <button
                className="feature-button"
                type="button"
                onClick={() => handleMoreServicesClick(feature.link)}
              >
                {feature.buttonText}
              </button>
            ) : (
              <a href={feature.link} className="feature-button" role="button">
                {feature.buttonText}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EssentialFeatures;
