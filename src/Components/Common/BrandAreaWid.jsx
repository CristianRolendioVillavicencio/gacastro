import React, { useEffect, useRef } from 'react';
import SliderCom from "../Helpers/SliderCom";

function BrandAreaWid({ className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Tu lógica aquí, por ejemplo, manejar el cambio de tamaño del contenedor
      console.log('El contenedor ha cambiado de tamaño.');
    };

    // Crear una instancia de ResizeObserver y observar los cambios en el tamaño del contenedor
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Limpiar la observación al desmontar el componente
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section
      className={`inner-brand-area pt-80 pb-80 ${className || ""}`}
      ref={containerRef}
    >
      <div className="container">
        <header className="section-header text-center Blak-title mb-80">
        <h2 className="section-title">We Work with the Best</h2>
<p className="section-description">
  At GA Castro Construction, we only partner with the top brands to guarantee the highest quality in every project. 
  Here are some of the trusted brands that back us up and we proudly collaborate with.
</p>

        </header>
        <div className="row brand-active-three">
          <SliderCom settings={settings}>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.gaf.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/gaf.png`)}
                    alt="GAF Roofing"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.owenscorning.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/owens_corning.png`)}
                    alt="Owens Corning Roofing"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.malarkeyroofing.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/malarkey_roofing.webp`)}
                    alt="Malarkey Roofing"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.davinciroofscapes.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/davinci_roofing.webp`)}
                    alt="DaVinci Roofing"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.iko.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/iko.webp`)}
                    alt="IKO Roofing"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.certapro.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/certapro_painters.png`)}
                    alt="CertaPro Painters"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.benjaminmoore.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/benjamin_moore.png`)}
                    alt="Benjamin Moore"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.sherwin-williams.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/sherwin_williams.png`)}
                    alt="Sherwin-Williams"
                  />
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="brand-item">
                <a href="https://www.sherwin-williams.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src={require(`../../assets/img/brand/certainteed.png`)}
                    alt="CertainTeed"
                  />
                </a>
              </div>
            </div>
          </SliderCom>
        </div>
      </div>
    </section>
  );
}

export default BrandAreaWid;
