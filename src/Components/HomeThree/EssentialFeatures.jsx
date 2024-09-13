// EssentialFeatures.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Importa Swiper primero
import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import './EssentialFeatures.css';
import { features } from './featuresData.ts'; // Importa el archivo correctamente, asegurando que las mayúsculas coincidan

// Activar módulos de navegación, paginación y autoplay
SwiperCore.use([Navigation, Pagination, Autoplay]);

const EssentialFeatures = () => {
  const handleMoreServicesClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="essential-features">
      <h2 className="features-title">Our Essential Features</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
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
