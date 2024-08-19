import React from "react";
import SliderCom from "../Helpers/SliderCom";

function TestimonialArea() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
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
    <section className="testimonial-area pt-115 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
            <div className="testimonial-img">
              <img
                src={require(`../../assets/img/images/testimonial_img.jpg`)}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testimonial-content">
              <div className="section-title mb-45 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Our Testimonial
                </span>
                <h2 className="title tg-element-title">
                  Some of Our Respected Happy Clients Says
                </h2>
              </div>
              <SliderCom
                className="testimonial-active"
                settings={sliderSettings}
              >
                <div className="testimonial-item">
                  <div className="testimonial-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      There are many varation of paissages of Lorem as the Ipum
                      available but our majority have sufferied alterations in
                      some form, by our by injected hsumour randomised worids
                      which don't looks even slightly there as believable. If
                      you going to use a passage of Lorem Ipsum.
                    </p>
                  </div>
                  <div className="testimonial-avatar">
                    <div className="avatar-thumb">
                      <img
                        src={require(`../../assets/img/images/testi_avatar01.png`)}
                        alt=""
                      />
                    </div>
                    <div className="avatar-content">
                      <h6 className="title">Darrell Steward</h6>
                      <p>Roofing Expert</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      There are many varation of paissages of Lorem as the Ipum
                      available but our majority have sufferied alterations in
                      some form, by our by injected hsumour randomised worids
                      which don't looks even slightly there as believable. If
                      you going to use a passage of Lorem Ipsum.
                    </p>
                  </div>
                  <div className="testimonial-avatar">
                    <div className="avatar-thumb">
                      <img
                        src={require(`../../assets/img/images/testi_avatar01.png`)}
                        alt=""
                      />
                    </div>
                    <div className="avatar-content">
                      <h6 className="title">Darrell Steward</h6>
                      <p>Roofing Expert</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-icon">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      There are many varation of paissages of Lorem as the Ipum
                      available but our majority have sufferied alterations in
                      some form, by our by injected hsumour randomised worids
                      which don't looks even slightly there as believable. If
                      you going to use a passage of Lorem Ipsum.
                    </p>
                  </div>
                  <div className="testimonial-avatar">
                    <div className="avatar-thumb">
                      <img
                        src={require(`../../assets/img/images/testi_avatar01.png`)}
                        alt=""
                      />
                    </div>
                    <div className="avatar-content">
                      <h6 className="title">Darrell Steward</h6>
                      <p>Roofing Expert</p>
                    </div>
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

export default TestimonialArea;
