import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Asegúrate de importar los estilos de Swiper
import './EssentialFeatures.css'; // Importa los estilos CSS personalizados
import { slidesData } from './featuresData.ts'; // Importa los datos desde tu archivo TS/JS

const BlogSlider = () => (
    <div className="blog-slider">
      <Swiper
        spaceBetween={30}
        effect="fade"
        loop
        pagination={{ clickable: true }}
        className="swiper-wrapper"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id} className="blog-slider__item">
            <div className="blog-slider__img">
              <img src={slide.img} alt={slide.title} />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">{slide.date}</span>
              <div className="blog-slider__title">{slide.title}</div>
              <div className="blog-slider__text">{slide.text}</div>
              <a href="#" className="blog-slider__button">READ MORE</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

export default BlogSlider;
