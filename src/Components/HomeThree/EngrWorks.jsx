import React, { useEffect } from "react";
import SliderCom from "../Helpers/SliderCom";

function EngrWorks({ videoHandler }) {
  const sliderSettings = {
    centerMode: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    dots: true,
    centerPadding: "0",
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0",
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0",
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
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
    <section className="engineer-area pt-115 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">
                Meet Our Engineers
              </span>
              <h2 className="title tg-element-title">How Our Engineers Work</h2>
            </div>
          </div>
        </div>
        <div className="engineer-active">
          <SliderCom settings={sliderSettings}>
            <div>
              <div className="engineer-item">
                <div className="engineer-thumb">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/images/engineer_img01.jpg`)}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=PFkXoK5x5KE"
                    className="play-btn popup-video"
                    onClick={(e) => videoHandler(e)}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="engineer-info-wrap">
                  <div className="thumb">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/images/engineer_info01.png`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">
                      <a href="/team-details">Mr.Karikoka Ahli</a>
                    </h2>
                    <span>Roof Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="engineer-item">
                <div className="engineer-thumb">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/images/engineer_img02.jpg`)}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=PFkXoK5x5KE"
                    className="play-btn popup-video"
                    onClick={(e) => videoHandler(e)}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="engineer-info-wrap">
                  <div className="thumb">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/images/engineer_info02.png`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">
                      <a href="/team-details">Mr.Karikoka Ahli</a>
                    </h2>
                    <span>Roof Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="engineer-item">
                <div className="engineer-thumb">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/images/engineer_img03.jpg`)}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=PFkXoK5x5KE"
                    className="play-btn popup-video"
                    onClick={(e) => videoHandler(e)}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="engineer-info-wrap">
                  <div className="thumb">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/images/engineer_info03.png`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">
                      <a href="/team-details">Mr.Darikoka Ahli</a>
                    </h2>
                    <span>Roof Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="engineer-item">
                <div className="engineer-thumb">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/images/engineer_img02.jpg`)}
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=PFkXoK5x5KE"
                    className="play-btn popup-video"
                    onClick={(e) => videoHandler(e)}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="engineer-info-wrap">
                  <div className="thumb">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/images/engineer_info02.png`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h2 className="title">
                      <a href="/team-details">Mr.Karikoka Ahli</a>
                    </h2>
                    <span>Roof Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </SliderCom>
        </div>
      </div>
    </section>
  );
}

export default EngrWorks;
