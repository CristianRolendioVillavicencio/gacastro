import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de usar react-router-dom versión 6 o superior
import banners from './bannerConfig';
import './st2.css';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        setFade(true);
      }, 1000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (currentIndex === 0) {
      // Abrir la URL en una ventana emergente
      window.open('https://app.gorillaroofleads.com/home?dealer_unique_id=35051070e572e47d2c26c241ab88307f', 'Gorilla Roof Leads', 'width=800,height=600');
    } else {
      navigate(currentBanner.buttonLink);
    }
  };

  return (
    <div className={`hlbanner-container ${fade ? 'hfade-in' : 'hfade-out'}`} style={{ backgroundImage: `url(${currentBanner.image})` }}>
      <div className="hlbanner-content">
        <h1>{currentBanner.title}</h1>
        <h2>{currentBanner.subtitle}</h2>
        <p>{currentBanner.text}</p>
        <a href={currentBanner.buttonLink} className="hlcta-button" onClick={handleButtonClick}>{currentBanner.buttonText}</a>
      </div>
    </div>
  );
};

export default Banner;
