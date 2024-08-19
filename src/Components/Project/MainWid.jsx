import React from "react";

function MainWid() {
  return (
    <section className="inner-project-area pt-115 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our Projects</span>
              <h2 className="title">Our Latest Projects</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img01.jpg`)}
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
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img02.jpg`)}
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
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img03.jpg`)}
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
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img04.jpg`)}
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
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img05.jpg`)}
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
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="project-item-two">
              <div className="project-thumb-two">
                <a href="/project-details">
                  <img
                    src={require(`../../assets/img/project/h3_project_img06.jpg`)}
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
        </div>
      </div>
    </section>
  );
}

export default MainWid;
