import React from "react";
import SliderCom from "../Helpers/SliderCom";

function MultipleAreaTwo() {
  const sliderOneSettings = {
    centerMode: true,
    autoplay: false,
    infinite: true,
    dots: true,
    speed: 1500,
    arrows: false,
    centerPadding: "0",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0",
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0",
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
          slidesToScroll: 1,
          arrows: false,
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
  const sliderTwoSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  return (
    <div
      className="area-bg-two"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/area_bg02.jpg")})`,
      }}
    >
      <section className="project-area-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Latest Projects</span>
                <h2 className="title">Explore Our Latest Projects</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-md-8">
              <div className=" project-active position-relative g-0">
                <SliderCom settings={sliderOneSettings}>
                  <div>
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <a href="/project-details">
                          <img
                            src={require(`../../assets/img/project/h2_project_img01.jpg`)}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="project-content-two">
                        <span>Product Design</span>
                        <h2 className="title">
                          <a href="/project-details">Web Application</a>
                        </h2>
                        <a href="/project-details" className="link-btn">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <a href="/project-details">
                          <img
                            src={require(`../../assets/img/project/h2_project_img02.jpg`)}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="project-content-two">
                        <span>Product Design</span>
                        <h2 className="title">
                          <a href="/project-details">Web Application</a>
                        </h2>
                        <a href="/project-details" className="link-btn">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <a href="/project-details">
                          <img
                            src={require(`../../assets/img/project/h2_project_img03.jpg`)}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="project-content-two">
                        <span>Product Design</span>
                        <h2 className="title">
                          <a href="/project-details">Web Application</a>
                        </h2>
                        <a href="/project-details" className="link-btn">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <a href="/project-details">
                          <img
                            src={require(`../../assets/img/project/h2_project_img04.jpg`)}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="project-content-two">
                        <span>Product Design</span>
                        <h2 className="title">
                          <a href="/project-details">Web Application</a>
                        </h2>
                        <a href="/project-details" className="link-btn">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="project-item-two">
                      <div className="project-thumb-two">
                        <a href="/project-details">
                          <img
                            src={require(`../../assets/img/project/h2_project_img02.jpg`)}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="project-content-two">
                        <span>Product Design</span>
                        <h2 className="title">
                          <a href="/project-details">Web Application</a>
                        </h2>
                        <a href="/project-details" className="link-btn">
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </SliderCom>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-area-two pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Our Testimonial</span>
                <h2 className="title">What Our Client Feedback</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="testimonial-inner">
                <div className="testimonial-active-two">
                  <SliderCom settings={sliderTwoSettings}>
                    <div className="testimonial-item-two">
                      <div className="testimonial-avatar-two">
                        <img
                          src={require(`../../assets/img/images/h2_testi_avatar01.png`)}
                          alt=""
                        />
                      </div>
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          There are many varation of paissages of Lorem as the
                          Ipum available but our majority have sufferied
                          alterations in some form, by our by injected hsumour
                          randomised worids which don't looks even slightly
                          there as believable. If you going to use a passage of
                          Lorem Ipsum.
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Darrell Steward</h4>
                          <span>Roofing Expert</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item-two">
                      <div className="testimonial-avatar-two">
                        <img
                          src={require(`../../assets/img/images/h2_testi_avatar02.png`)}
                          alt=""
                        />
                      </div>
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum are many varation of paissages of Lorem as
                          the Ipum available but our majority have sufferied
                          alterations in some form, by our by injected hsumour
                          randomised worids which don't looks even slightly
                          there as believable. If you going to use a passage of
                          Lorem Ipsum.
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Robert C. Simmons</h4>
                          <span>Roofing Expert</span>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-item-two">
                      <div className="testimonial-avatar-two">
                        <img
                          src={require(`../../assets/img/images/h2_testi_avatar03.png`)}
                          alt=""
                        />
                      </div>
                      <div className="testimonial-content-two">
                        <div className="content-top">
                          <div className="icon">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p>
                          Lorem Ipsum are many varation of paissages of Lorem as
                          the Ipum available but our majority have sufferied
                          alterations in some form, by our by injected hsumour
                          randomised worids which don't looks even slightly
                          there as believable. If you going to use a passage of
                          Lorem Ipsum.
                        </p>
                        <div className="content-bottom">
                          <h4 className="title">Karikoka Ahli</h4>
                          <span>Executive Manager</span>
                        </div>
                      </div>
                    </div>
                  </SliderCom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MultipleAreaTwo;
