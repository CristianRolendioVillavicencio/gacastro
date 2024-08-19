import React from "react";

function FeatureArea() {
  return (
    <>
      <section className="features-area pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".2s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">Quality Materials</h4>
                    <p>
                      There are many variatons of passag of Lorem Ipsum
                      available, but the a jority have suffered.
                    </p>
                    <a href="/services/services-details" className="link-btn">
                      <i className="fas fa-arrow-right"></i> Read More
                    </a>
                  </div>
                  <div className="features-icon">
                    <img
                      src={
                        require(`../../assets/img/icon/features_icon01.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".4s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">Expert Engineer</h4>
                    <p>
                      There are many variatons of passag of Lorem Ipsum
                      available, but the a jority have suffered.
                    </p>
                    <a href="/services/services-details" className="link-btn">
                      <i className="fas fa-arrow-right"></i> Read More
                    </a>
                  </div>
                  <div className="features-icon">
                    <img
                      src={
                        require(`../../assets/img/icon/features_icon02.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="features-item wow fadeInUp" data-wow-delay=".6s">
                <div className="features-item-inner">
                  <div className="features-content">
                    <h4 className="title">Quality Maintenance</h4>
                    <p>
                      There are many variatons of passag of Lorem Ipsum
                      available, but the a jority have suffered.
                    </p>
                    <a href="/services/services-details" className="link-btn">
                      <i className="fas fa-arrow-right"></i> Read More
                    </a>
                  </div>
                  <div className="features-icon">
                    <img
                      src={
                        require(`../../assets/img/icon/features_icon03.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureArea;
