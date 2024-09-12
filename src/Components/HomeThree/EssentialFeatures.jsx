// EssentialFeatures.jsx
import React from 'react';
import './EssentialFeatures.css';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa los componentes de Swiper
import { features } from './featuresData.ts'; // Asegúrate de que la ruta sea correcta y que el archivo featuresData.ts esté bien ubicado
import 'swiper/css'; // Importa los estilos básicos de Swiper
import 'swiper/css/navigation'; // Importa los estilos para la navegación
import 'swiper/css/pagination'; // Importa los estilos para la paginación

const EssentialFeatures = () => {
  // Función para manejar el click del botón "More Services"
  const handleMoreServicesClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="essential-features">
      <h2 className="features-title">Our Essential Features</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default EssentialFeatures;
