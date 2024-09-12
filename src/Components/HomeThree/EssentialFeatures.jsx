// EssentialFeatures.jsx
import React from 'react';
import './EssentialFeatures.css';
import { features } from './featuresData.ts'; // Importa el array de características desde featuresData.ts

const EssentialFeatures = () => (
    <section className="essential-features">
      <h2 className="features-title">Our Essential Features</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <button className="feature-button" type="button">
              {feature.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );

export default EssentialFeatures;
