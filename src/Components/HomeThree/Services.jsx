import React from "react";

function Services() {
  return (
    <div
      className="area-bg-three"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/area_bg03.jpg")})`,
      }}
    >
      <section className="services-area-two pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title white-title text-center mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  Discover Our Company
                </span>
                <h2 className="title tg-element-title">
                  See Our Roofing Services Details
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="services-item-two">
                <div className="services-thumb-two">
                  <a href="/services/services-details">
                    <img
                      src={require(`../../assets/img/services/h3_services_img01.jpg`)}
                      alt=""
                    />
                  </a>
                </div>
                <div className="services-content-two">
                  <div className="icon">
                    <img
                      src={
                        require(`../../assets/img/icon/services_icon01.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h2 className="title">
                      <a href="/services/services-details">Quality Materials</a>
                    </h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-item-two">
                <div className="services-thumb-two">
                  <a href="/services/services-details">
                    <img
                      src={require(`../../assets/img/services/h3_services_img02.jpg`)}
                      alt=""
                    />
                  </a>
                </div>
                <div className="services-content-two">
                  <div className="icon">
                    <img
                      src={
                        require(`../../assets/img/icon/services_icon02.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h2 className="title">
                      <a href="/services/services-details">
                        Install Metal Roofing
                      </a>
                    </h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
            </div>



            
          </div>
        </div>
      </section>

      <div className="counter-area-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item-three">
                <div className="counter-content">
                  <span className="count odometer" data-count="">
                    1500
                  </span>
                  <p>Project Complete</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item-three">
                <div className="counter-content">
                  <span className="count odometer" data-count="">
                    8562
                  </span>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item-three">
                <div className="counter-content">
                  <span className="count odometer" data-count="">
                    450
                  </span>
                  <p>Experienced Staff</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item-three">
                <div className="counter-content">
                  <span className="count odometer" data-count="">
                    38
                  </span>
                  <p>Awards Win</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
