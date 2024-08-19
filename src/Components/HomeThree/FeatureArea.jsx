import React from "react";

function FeatureArea() {
  return (
    <section
      className="features-area-three features-bg-two"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/features_bg02.jpg")})`,
      }}
      data-background="g"
    >
      <div className="container">
        <div className="features-item-wrap">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="fetures-item-three wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="fetures-thumb-three">
                  <a href="/services/services-details">
                    <img
                      src={require(`../../assets/img/images/h4_features_img01.jpg`)}
                      alt=""
                    />
                  </a>
                </div>
                <div className="fetures-content-three">
                  <div className="fetures-icon-three">
                    <img
                      src={
                        require(`../../assets/img/icon/features_icon01.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <h4 className="title">
                    <a href="/services/services-details">Quality Materials</a>
                  </h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="fetures-item-three wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="fetures-thumb-three">
                  <a href="/services/services-details">
                    <img
                      src={require(`../../assets/img/images/h4_features_img02.jpg`)}
                      alt=""
                    />
                  </a>
                </div>
                <div className="fetures-content-three">
                  <div className="fetures-icon-three">
                    <img
                      src={
                        require(`../../assets/img/icon/features_icon02.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <h4 className="title">
                    <a href="/services/services-details">Expert Engineer</a>
                  </h4>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="fetures-item-three wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="fetures-thumb-three">
                  <a href="/services/services-details">
                    <img
                      src={require(`../../assets/img/images/h4_features_img03.jpg`)}
                      alt=""
                    />
                  </a>
                </div>
                <div className="fetures-content-three">
                  <div className="fetures-icon-three">
                    <img
                      src={
                        require(`../../assets/img/icon/features_icon03.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <h4 className="title">
                    <a href="/services/services-details">Quality Maintenance</a>
                  </h4>
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
  );
}

export default FeatureArea;
