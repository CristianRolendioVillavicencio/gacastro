import React, { useEffect } from "react";
import SliderCom from "../Helpers/SliderCom";

function Hero() {
  const sliderSettins = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
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
  useEffect(() => {
    const getAllTooltip = document.querySelectorAll(".tooltip-item");
    getAllTooltip.forEach((item) => {
      item.querySelector(".tooltip-btn").addEventListener("click", () => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
        } else {
          item.classList.add("active");
        }
      });
    });
  });
  return (
    <section className="banner-area">
      <div
        className="banner-shape"
        style={{
          background: `url(${require(`../../assets/img/banner/banner_shape.jpg`)})`,
        }}
      ></div>
      <div
        className="banner-bg"
        style={{
          background: `url(${require(`../../assets/img/banner/banner_bg.jpg`)})`,
        }}
      >
        <div className="banner-content">
          <h2 className="title wow fadeInDown" data-wow-delay=".2s">
            Best Roofing Services and Consulting
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".2s">
            There are many variations of passages of Lorem as Ipsumoff
            available, but the majority have suffered alt.
          </p>
          <a href="/project" className="btn wow fadeInUp" data-wow-delay=".4s">
            Discover More
          </a>
        </div>
        <div className="banner-tooltip-wrap">
          <div className="tooltip-item top">
            <div className="tooltip-btn pulse">
              <i className="fas fa-plus"></i>
            </div>
            <div className="tooltip-content">
              <h2 className="title">Combustion Roof Vent</h2>
              <p>
                Suffered alteration in some a goody form, by injected humor, or
                into the randomized word.
              </p>
            </div>
          </div>
          <div className="tooltip-item">
            <div className="tooltip-btn pulse">
              <i className="fas fa-plus"></i>
            </div>
            <div className="tooltip-content">
              <h2 className="title">Combustion Roof Vent</h2>
              <p>
                Suffered alteration in some a goody form, by injected humor, or
                into the randomized word.
              </p>
            </div>
          </div>
          <div className="tooltip-item">
            <div className="tooltip-btn pulse">
              <i className="fas fa-plus"></i>
            </div>
            <div className="tooltip-content">
              <h2 className="title">Combustion Roof Vent</h2>
              <p>
                Suffered alteration in some a goody form, by injected humor, or
                into the randomized word.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-area">
        <div className="container">
          <div className="brand-inner">
            <div className="brand-active row position-relative">
              <SliderCom settings={sliderSettins}>
                <div className="col-12">
                  <div className="brand-item">
                    <img
                      src={require(`../../assets/img/brand/brand_img01.png`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img
                      src={require(`../../assets/img/brand/brand_img02.png`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img
                      src={require(`../../assets/img/brand/brand_img03.png`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img
                      src={require(`../../assets/img/brand/brand_img04.png`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img
                      src={require(`../../assets/img/brand/brand_img05.png`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img
                      src={require(`../../assets/img/brand/brand_img06.png`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="brand-item">
                    <img
                      src={require(`../../assets/img/brand/brand_img03.png`)}
                      alt=""
                    />
                  </div>
                </div>
              </SliderCom>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
