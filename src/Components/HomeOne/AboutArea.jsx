import React from "react";

function AboutArea({ className }) {
  return (
    <section className={`about-area pb-120 ${className || ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
            <div className="about-img-wrap">
            <img
              src={require(`../../assets/img/images/about_img011.jpg`)}
              alt=""
              className="wow fadeInRight about-img about-img01"
              data-wow-delay=".4s"
            />
            <img
              src={require(`../../assets/img/images/about_img022.jpg`)}
              alt=""
              className="wow fadeInRight about-img about-img02"
              data-wow-delay=".2s"
            />

              <div className="about-experiences-wrap">
                <div className="experiences-item">
                  <div className="icon">
                    <img
                      src={
                        require(`../../assets/img/icon/about_icon01.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">
                      We have more than 25 years of experiences
                    </h6>
                  </div>
                </div>
                <div className="experiences-item">
                  <div className="icon">
                    <img
                      src={
                        require(`../../assets/img/icon/about_icon02.svg`)
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">
                      We use professional and experienced person
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content">
              <div className="section-title mb-25 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">
                  About Our Company
                </span>
                <h2 className="title tg-element-title">
                  We’re Committed to Roofing Excellence
                </h2>
              </div>
              <p>
              We’re committed to excellence in roofing, siding, and gutter services for New Haven and Fairfield County. 
              Trusted by over 5,000 partners, we provide professional and experienced resources for the best roof services.
              </p>
              <div className="about-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check"></i>5k Partners have worked us.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Professional and experienced
                    human resources.
                  </li>
                  <li>
                    <i className="fas fa-check"></i>Provide the best roof
                    services
                  </li>
                </ul>
              </div>
              <a href="/about" className="btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutArea;
