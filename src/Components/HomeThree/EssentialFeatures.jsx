// EssentialFeatures.jsx
import React from 'react';
import './EssentialFeatures.css';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa componentes de Swiper
import { features } from './featuresData'; // Importa los datos de servicios
import 'swiper/css'; // Importa los estilos de Swiper
import 'swiper/css/navigation'; // Estilos adicionales si usas navegación
import 'swiper/css/pagination'; // Estilos adicionales si usas paginación

const EssentialFeatures = () => (
    <section className="essential-features">
      <h2 className="features-title">Our Essential Features</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          // Responsiveness settings
          640: {
            slidesPerView: 2, // Número de slides visibles en pantallas medianas
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // Número de slides visibles en pantallas grandes
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4, // Número de slides visibles en pantallas muy grandes
            spaceBetween: 40,
          },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {features.map((feature) => (
          <SwiperSlide key={feature.id}>
            <div className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              {feature.title === 'More Services' ? (
                <button
                  className="feature-button"
                  type="button"
                  onClick={() => (window.location.href = feature.link)}
                >
                  {feature.buttonText}
                </button>
              ) : (
                <a href={feature.link} className="feature-button" role="button">
                  {feature.buttonText}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );

export default EssentialFeatures;
