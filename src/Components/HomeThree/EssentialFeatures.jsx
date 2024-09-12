// ServicesCards.jsx
import React from 'react';
import './EssentialFeatures.css'; // Asegúrate de crear y vincular este archivo CSS para los estilos.

const services = [
  {
    id: 1,
    icon: '🏠', // Cambia este icono a uno relevante para roofing
    title: 'Roofing Services',
    description:
      'Ensure the durability and safety of your home with our expert roofing services. We offer installation, repair, and maintenance to keep your roof in top condition.',
    link: '/services/roofing-services',
  },
  {
    id: 2,
    icon: '🛠️', // Cambia este icono a uno relevante para siding
    title: 'Siding Services',
    description:
      'Enhance the look and protection of your home with our siding services. We provide high-quality siding installation and repair to suit your style and budget.',
    link: '/services/siding-services',
  },
  {
    id: 3,
    icon: '🔩', // Cambia este icono a uno relevante para copper services
    title: 'Copper Services',
    description:
      'We specialize in copper roofing and guttering solutions. Our copper services add elegance and longevity to your property, ensuring superior weather resistance.',
    link: '/services/copper-services',
  },
  {
    id: 4,
    icon: '🌪️', // Cambia este icono a uno relevante para wind damage
    title: 'Wind Damage Services',
    description:
      'Protect your home from severe weather. Our wind damage services include assessment, repair, and reinforcement to keep your home safe and secure.',
    link: '/services/wind-damage-services',
  },
  {
    id: 5,
    icon: '💧', // Cambia este icono a uno relevante para water damage
    title: 'Water Damage Services',
    description:
      'Address water damage promptly with our specialized services. We provide comprehensive water damage assessment, repair, and prevention solutions.',
    link: '/services/water-damage-services',
  },
  {
    id: 6,
    icon: '🌳', // Cambia este icono a uno relevante para tree damage
    title: 'Tree Damage Services',
    description:
      'Our tree damage services help you recover from fallen or damaged trees. We offer removal, repair, and preventive measures to protect your property.',
    link: '/services/tree-damage-services',
  },
];

const ServicesCards = () => (
    <section className="services-section" style={{ background: '#fff', padding: '50px 0' }}>
      <h2 className="section-title">Our Services</h2>
      <div className="services-cards-container">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">
              <a href={service.link}>{service.title}</a>
            </h3>
            <p className="service-description">{service.description}</p>
            <a href={service.link} className="read-more">
              Read More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );

export default ServicesCards;
