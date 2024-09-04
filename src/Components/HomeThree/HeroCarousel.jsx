import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import './HeroCarousel.css';
import bannerImage3 from '../../assets/img/herocarusel/Aspahlt-Shingle-Roof-Services.png';
import bannerImage from '../../assets/img/herocarusel/cooper-services.png';
import bannerImage1 from '../../assets/img/herocarusel/roof-services.png';
import bannerImage2 from '../../assets/img/herocarusel/siding-services.png';
import bannerGif from '../../assets/img/herocarusel/getquote1.gif';
import bannerImage4 from '../../assets/img/herocarusel/Financing-Services.png';

const slidesData = [
    {
        id: uuidv4(),
        gif: bannerGif,
        title: <>Get Your <span className="keyword-highlight">Instant Roof Quote</span></>,
        subtitle: <>Enter Your Address for an <span className="keyword-highlight"> Instant Estimate </span></>,
        text: <>Simply enter your address to receive an instant quote on the cost of replacing your roof. Our easy-to-use tool provides accurate estimates based on your location and roof size.</>,
        buttonText: 'Get Instant Roof Quote!',
        url: 'https://app.gorillaroofleads.com/home?dealer_unique_id=35051070e572e47d2c26c241ab88307f',
        duration: 7000, // Duración del gif en milisegundos (7 segundos)
        textPosition: 'right' // Posición del texto
    },
    {
        id: uuidv4(),
        image: bannerImage1,
        title: <><span className="keyword-highlight">Roofing</span> Services</>,
        subtitle: <>Quality Roof Installations</>,
        text: <>Our team provides top-notch roofing services to ensure <br />your home is protected. Whether you're dealing with <br /> roof leaks, storm damage, or need a new roof, we offer <br />reliable and affordable solutions.</>,
        buttonText: 'Learn More About Roofing',
        url: '/services/roofing-services',
        duration: 7000, // Duración de los otros slides en milisegundos
        textPosition: 'right' // Posición del texto
    },
    {
        id: uuidv4(),
        image: bannerImage2,
        title: <><span className="keyword-highlight">Siding</span> Services</>,
        subtitle: <>Enhance Your Home's Exterior</>,
        text: <>Upgrade your home with our professional <span className="keyword-highlight">siding services</span>. Improve your home's curb appeal and <span className="keyword-highlight">energy efficiency</span> <br /> with durable and attractive <span className="keyword-highlight">siding options</span>.</>,
        buttonText: 'Explore Siding Options',
        url: '/services/siding-services',
        duration: 7000,
        textPosition: 'right' // Posición del texto
    },
    {
        id: uuidv4(),
        image: bannerImage,
        title: <><span className="keyword-highlight">Copper Services</span> </>,
        subtitle: <>Enhance Your Home's Exterior</>,
        text: <><span className="keyword-highlight">Copper Services</span> offers premium <span className="keyword-highlight">roofing</span>, siding, <br />and home renovations. Our high-quality <span className="keyword-highlight"><br />copper materials</span> add beauty and durability to your <br /> home. </>,
        buttonText: 'Explore Copper Services',
        url: '/services/copper-services',
        duration: 7000,
        textPosition: 'left' // Posición del texto    
    },
    {
        id: uuidv4(),
        image: bannerImage4,
        title: <><span className="keyword-highlight">Financing</span> Services</>,
        subtitle: <>Make Your Dream Home a Reality</>,
        text: <>Our <span className="keyword-highlight">Financing Services</span> make it easier for you to <br /> afford the home improvements you need. <br />Whether it’s a new roof, siding, or other renovations, <br />we offer flexible financing options to fit your budget <br />and help you achieve your goals.</>,
        buttonText: 'Learn More About Financing',
        url: '/financing',
        duration: 7000,
        textPosition: 'left' // Posición del texto
    },
    
    {
        id: uuidv4(),
        image: bannerImage3,
        title: <>Asphalt Shingle Roof Services</>,
        subtitle: <>Reliable Installation for Your Home</>,
        text: <>Trust our expert team to install durable <span className="keyword-highlight">asphalt shingles</span> <br />that enhance your home’s protection and appearance. Choose from a variety of styles to suit your needs.</>,
        buttonText: 'Explore Asphalt Shingle Options',
        url: '/services/asphalt-shingle-roof-services',
        duration: 7000,
        textPosition: 'left' // Posición del texto
    }
    
    
    
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, // Desactivar el autoplay para manejarlo manualmente
        beforeChange: () => {
            setIsPlaying(false);
        },
        afterChange: (current) => {
            setCurrentSlide(current);
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                sliderRef.current.slickNext();
            }, slidesData[currentSlide].duration);
            return () => clearTimeout(timer); // Limpieza del timeout
        }
        return undefined; // Siempre devuelve algo
    }, [currentSlide, isPlaying]);

    const openCenteredWindow = (url) => {
        const width = 600;
        const height = 600;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);
        const options = `width=${width},height=${height},top=${top},left=${left},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`;
        window.open(url, '_blank', options);
    };

    const handleButtonClick = (url) => {
        if (url === slidesData[0].url) {
            openCenteredWindow(url);
        } else {
            window.location.href = url;
        }
    };

    return (
        <div className="hero-carousel">
            <Slider ref={sliderRef} {...settings}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className="hero-carousel-slide">
                        {slide.gif ? (
                            <img 
                                src={slide.gif} 
                                className="banner-gif" 
                                alt="banner gif"
                            />
                        ) : (
                            <img src={slide.image} alt={slide.title} className="banner-image" />
                        )}
                        <div className={`text-container ${slide.textPosition}`}>
                            <h2 className="main-phrase">{slide.title}</h2>
                            <h3 className="sub-phrase">{slide.subtitle}</h3>
                            <p>{slide.text}</p>
                            <button 
                                type="button" 
                                className="cta-button" 
                                onClick={() => handleButtonClick(slide.url)}
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default HeroCarousel;
