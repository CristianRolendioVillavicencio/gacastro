// EssentialFeatures.jsx
import React from 'react';
import './EssentialFeatures.css'; // Asegúrate de tener un archivo CSS para los estilos
import { v4 as uuidv4 } from 'uuid'; // Instala uuid con 'npm install uuid'

const features = [
  {
    id: uuidv4(),
    icon: '📄',
    title: 'Online Documentation',
    description: 'Rapidiously incentivize professional e-tailers and interactive web-readiness',
    buttonText: 'READ MORE',
  },
  {
    id: uuidv4(),
    icon: '🎥',
    title: 'Watch Video Tutorial',
    description: 'Rapidiously incentivize professional e-tailers and interactive web-readiness',
    buttonText: 'READ MORE',
  },
  {
    id: uuidv4(),
    icon: '💬',
    title: 'Dedicated Supports',
    description: 'Rapidiously incentivize professional e-tailers and interactive web-readiness',
    buttonText: 'READ MORE',
  },
];

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
