/* eslint-disable no-return-assign */
import React, { useState } from "react";
import SliderCom from "../Helpers/SliderCom";

function Hero() {
  const [sl1, setSl1] = useState();
  const [sl2, setSl2] = useState();
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 4000,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
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
  const slider2Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
  };
  const prevHandler = () => {
    sl1.slickPrev();
  };
  const nextHandler = () => {
    sl1.slickNext();
  };
  const slider3Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="slider-area">
      <div
        className="slider-shape"
        style={{
          backgroundImage: `url(${require("../../assets/img/slider/slider_shape.png")})`,
        }}
      ></div>
      <div className="slider-img-wrap">
        <div className="sliderNav-active position-relative">
          <SliderCom
            selector={(slider1) => setSl1(slider1)}
            asNavFor={sl2}
            settings={sliderSettings}
          >
            <div>
              <div
                className="slider-img-item"
                style={{
                  backgroundImage: `url(${require("../../assets/img/slider/slider_img01.jpg")})`,
                }}
              ></div>
            </div>
            <div>
              <div
                className="slider-img-item"
                style={{
                  backgroundImage: `url(${require("../../assets/img/slider/slider_img02.jpg")})`,
                }}
              ></div>
            </div>
          </SliderCom>
        </div>
      </div>
      <div className="slider-content-wrap">
        <div className="sliderContent-active position-relative">
          <SliderCom
            selector={(slider2) => setSl2(slider2)}
            asNavFor={sl1}
            settings={slider2Settings}
          >
            <div className="slider-content">
              <h1 className="overly-text">
                Roofing <br /> Services
              </h1>
              <span
                className="sub-title"
                data-animation-in="fadeInUp"
                data-delay-in=".2"
                data-duration-in=".6"
              >
                Smart Solutions
              </span>
              <h2
                className="title"
                data-animation-in="fadeInUp"
                data-delay-in=".4"
                data-duration-in=".6"
              >
                Roofing Services and Consulting
              </h2>
              <p
                data-animation-in="fadeInUp"
                data-delay-in=".6"
                data-duration-in=".6"
              >
                Roofing mbrace change are thriving, building bigger,
                better,faster, and products than ever Roofing mbrace.
              </p>
              <a
                href="/project"
                className="btn"
                data-animation-in="fadeInUp"
                data-delay-in=".8"
                data-duration-in=".6"
              >
                Discover More
              </a>
            </div>
            <div className="slider-content">
              <h1 className="overly-text">
                Roofing <br /> Services
              </h1>
              <span
                className="sub-title"
                data-animation-in="fadeInUp"
                data-delay-in=".2"
                data-duration-in=".6"
              >
                Smart Solutions
              </span>
              <h2
                className="title"
                data-animation-in="fadeInUp"
                data-delay-in=".4"
                data-duration-in=".6"
              >
                Best Roofing Services and Consulting
              </h2>
              <p
                data-animation-in="fadeInUp"
                data-delay-in=".6"
                data-duration-in=".6"
              >
                Roofing mbrace change are thriving, building bigger,
                better,faster, and products than ever Roofing mbrace.
              </p>
              <a
                href="/project"
                className="btn"
                data-animation-in="fadeInUp"
                data-delay-in=".8"
                data-duration-in=".6"
              >
                Discover More
              </a>
            </div>
          </SliderCom>
        </div>
      </div>
      <div className="banner-nav">
        <button
          onClick={() => prevHandler()}
          type="button"
          className="slick-prev slick-arrow"
        >
          <img
            src={require(`../../assets/img/icon/left_arrow.svg`).default}
            alt=""
          />
        </button>
        <button
          onClick={() => nextHandler()}
          type="button"
          className="slick-next slick-arrow"
        >
          <img
            src={require(`../../assets/img/icon/right_arrow.svg`).default}
            alt=""
          />
        </button>
      </div>
      <div className="brand-area-two">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <h6 className="brand-title">Trusted by big brands</h6>
              <div className="row brand-active-two position-relative">
                <SliderCom settings={slider3Settings}>
                  <div className="col-12">
                    <div className="brand-item">
                      <img
                        src={require(`../../assets/img/brand/h2_brand_img01.png`)}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="brand-item">
                      <img
                        src={require(`../../assets/img/brand/h2_brand_img02.png`)}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="brand-item">
                      <img
                        src={require(`../../assets/img/brand/h2_brand_img03.png`)}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="brand-item">
                      <img
                        src={require(`../../assets/img/brand/h2_brand_img02.png`)}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="brand-item">
                      <img
                        src={require(`../../assets/img/brand/h2_brand_img03.png`)}
                        alt=""
                      />
                    </div>
                  </div>
                </SliderCom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
