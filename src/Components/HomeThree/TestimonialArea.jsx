import React from "react";
import SliderCom from "../Helpers/SliderCom";

function TestimonialArea({ className }) {
  const settings = {
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
    <section
      className={`inner-testimonial-area parallax pb-120 ${className || ""}`}
    >
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
              <div className="testimonial-active-two position-relative">
                <SliderCom settings={settings}>
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
                        randomised worids which don't looks even slightly there
                        as believable. If you going to use a passage of Lorem
                        Ipsum.
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
                        randomised worids which don't looks even slightly there
                        as believable. If you going to use a passage of Lorem
                        Ipsum.
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
                        randomised worids which don't looks even slightly there
                        as believable. If you going to use a passage of Lorem
                        Ipsum.
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
        <div className="testimonial-avatar-wrap">
          <ul className="list-wrap">
            <li>
              <img
                src={require(`../../assets/img/images/h4_testi_avatar01.png`)}
                className="layer"
                data-depth="0.1"
                alt=""
              />
            </li>
            <li>
              <img
                src={require(`../../assets/img/images/h4_testi_avatar02.png`)}
                className="layer"
                data-depth="0.2"
                alt=""
              />
            </li>
            <li>
              <img
                src={require(`../../assets/img/images/h4_testi_avatar03.png`)}
                className="layer"
                data-depth="0.05"
                alt=""
              />
            </li>
            <li>
              <img
                src={require(`../../assets/img/images/h4_testi_avatar03.png`)}
                className="layer"
                data-depth="0.2"
                alt=""
              />
            </li>
            <li>
              <img
                src={require(`../../assets/img/images/h4_testi_avatar02.png`)}
                className="layer"
                data-depth="0.05"
                alt=""
              />
            </li>
            <li>
              <img
                src={require(`../../assets/img/images/h4_testi_avatar01.png`)}
                className="layer"
                data-depth="0.1"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TestimonialArea;
