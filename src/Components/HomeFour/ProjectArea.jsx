import React from "react";
import SliderCom from "../Helpers/SliderCom";

function ProjectArea() {
  const settingSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
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
      className="area-bg-four"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/area_bg04.jpg")})`,
      }}
    >
      <section className="project-area-four">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Latest Projects</span>
                <h2 className="title">Explore Our Latest Projects</h2>
              </div>
            </div>
          </div>
          <div className="row project-active-two">
            <SliderCom settings={settingSlider}>
              <div className="col-lg-4">
                <div className="project-item-four">
                  <div className="project-thumb-four">
                    <a href="/project-details">
                      <img
                        src={require(`../../assets/img/project/h4_project_img01.jpg`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="project-content-four">
                    <div className="content-left">
                      <h2 className="title">
                        <a href="/project-details">Replacement of Roof</a>
                      </h2>
                      <ul className="list-wrap">
                        <li>
                          <a href="/project-details">Roof</a>
                        </li>
                        <li>
                          <a href="/project-details">Ideas</a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <a href="/project-details" className="link-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-item-four">
                  <div className="project-thumb-four">
                    <a href="/project-details">
                      <img
                        src={require(`../../assets/img/project/h4_project_img02.jpg`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="project-content-four">
                    <div className="content-left">
                      <h2 className="title">
                        <a href="/project-details">Fixing of Roof Damage</a>
                      </h2>
                      <ul className="list-wrap">
                        <li>
                          <a href="/project-details">Roof</a>
                        </li>
                        <li>
                          <a href="/project-details">Ideas</a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <a href="/project-details" className="link-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-item-four">
                  <div className="project-thumb-four">
                    <a href="/project-details">
                      <img
                        src={require(`../../assets/img/project/h4_project_img03.jpg`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="project-content-four">
                    <div className="content-left">
                      <h2 className="title">
                        <a href="/project-details">Modern Roofing Style</a>
                      </h2>
                      <ul className="list-wrap">
                        <li>
                          <a href="/project-details">Roof</a>
                        </li>
                        <li>
                          <a href="/project-details">Ideas</a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <a href="/project-details" className="link-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-item-four">
                  <div className="project-thumb-four">
                    <a href="/project-details">
                      <img
                        src={require(`../../assets/img/project/h4_project_img02.jpg`)}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="project-content-four">
                    <div className="content-left">
                      <h2 className="title">
                        <a href="/project-details">Fixing of Roof Damage</a>
                      </h2>
                      <ul className="list-wrap">
                        <li>
                          <a href="/project-details">Roof</a>
                        </li>
                        <li>
                          <a href="/project-details">Ideas</a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-right">
                      <a href="/project-details" className="link-btn">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SliderCom>
          </div>
        </div>
      </section>

      <section className="team-area-three pt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50">
                <span className="sub-title">Our Creative Team</span>
                <h2 className="title">Our Professional Team</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-three">
                <div className="team-thumb-three">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/team/h4_team_img01.jpg`)}
                      alt=""
                    />
                  </a>
                  <div className="team-social-three">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content-three">
                  <h2 className="title">
                    <a href="/team-details">Robert C. Simmons</a>
                  </h2>
                  <span>Roof Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-three">
                <div className="team-thumb-three">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/team/h4_team_img02.jpg`)}
                      alt=""
                    />
                  </a>
                  <div className="team-social-three">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content-three">
                  <h2 className="title">
                    <a href="/team-details">Christopher Jhon</a>
                  </h2>
                  <span>Roof Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-three">
                <div className="team-thumb-three">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/team/h4_team_img03.jpg`)}
                      alt=""
                    />
                  </a>
                  <div className="team-social-three">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content-three">
                  <h2 className="title">
                    <a href="/team-details">Karikoka Ahli</a>
                  </h2>
                  <span>Roof Engineer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="team-item-three">
                <div className="team-thumb-three">
                  <a href="/team-details">
                    <img
                      src={require(`../../assets/img/team/h4_team_img04.jpg`)}
                      alt=""
                    />
                  </a>
                  <div className="team-social-three">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content-three">
                  <h2 className="title">
                    <a href="/team-details">Dickerson MH</a>
                  </h2>
                  <span>Roof Engineer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectArea;
