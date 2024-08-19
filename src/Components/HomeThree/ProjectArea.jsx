import React from "react";

function ProjectArea() {
  return (
    <section className="project-area-three">
      <div
        className="project-bg-two"
        style={{
          backgroundImage: `url(${require("../../assets/img/bg/area_bg03.jpg")})`,
        }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center white-title mb-60 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">Our Projects</span>
              <h2 className="title tg-element-title">Our Latest Projects</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img01.png`)}
                    alt="Asphalt Shingle Roof in Stamford, CT - Roofing Project"
                  />
                </a>
              </div>
              <div className="project-content-two">
                <span>Roofing</span>
                <h2 className="title">
                  <a href="/project-details">Asphalt Shingle Roof in Stamford, CT</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img02.png`)}
                    alt="Wood Shake Roof in Darien, CT - Roofing Project"
                  />
                </a>
              </div>
              <div className="project-content-two">
                <span>Roofing</span>
                <h2 className="title">
                  <a href="/project-details">Wood Shake Roof in Darien, CT</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img03.png`)}
                    alt="Flat Roof in Hartford, CT - Roofing Project"
                  />
                </a>
              </div>
              <div className="project-content-two">
                <span>Roofing</span>
                <h2 className="title">
                  <a href="/project-details">Flat Roof in Hartford, CT</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img04.png`)}
                    alt="Metal Roof in Stamford, CT - Roofing Project"
                  />
                </a>
              </div>
              <div className="project-content-two">
                <span>Roofing</span>
                <h2 className="title">
                  <a href="/project-details">Metal Roof in Stamford, CT</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img05.png`)}
                    alt="Slate Roof in Redding, CT - Roofing Project"
                  />
                </a>
              </div>
              <div className="project-content-two">
                <span>Roofing</span>
                <h2 className="title">
                  <a href="/project-details">Copper Roof in Redding, CT</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img06.png`)}
                    alt="Asphalt Shingle Roof in Bridgeport, CT - Roofing Project"
                  />
                </a>
              </div>
              <div className="project-content-two">
                <span>Roofing</span>
                <h2 className="title">
                  <a href="/project-details">Asphalt Shingle Roof in Bridgeport, CT</a>
                </h2>
                <a href="/project-details" className="link-btn">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="learn-more-btn text-center mt-25">
          <a href="/project" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectArea;
