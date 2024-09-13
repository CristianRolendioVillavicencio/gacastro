import React from 'react';
import Slider from 'react-slick'; // Importa Slider desde react-slick
import './EssentialFeatures.css'; // Importa tu CSS personalizado
import { slidesData } from './featuresData.ts'; // Asegúrate de ajustar la ruta

// Importa los estilos de Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Puedes desactivar las flechas si no las necesitas
    autoplay: true, // Configura la reproducción automática si deseas
    autoplaySpeed: 3000,
  };

  return (
    <div className="blog-slider">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="blog-slider__item">
            <div className="blog-slider__img">
              <img src={slide.img} alt={slide.title} />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">{slide.date}</span>
              <div className="blog-slider__title">{slide.title}</div>
              <div className="blog-slider__text">{slide.text}</div>
              <a href="#" className="blog-slider__button">READ MORE</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogSlider;
