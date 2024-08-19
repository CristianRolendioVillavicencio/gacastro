import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Número de diapositivas visibles
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Velocidad de transición de 1 segundo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <section className="team-area-three pt-1 pb-200">
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
            <div className="col-lg-12">
              <Slider {...settings}>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/2.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                      <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">German Castro A</a>
                    </h2>
                    <span>Founder</span>
                  </div>
                </div>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/3.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">Jeison Castro</a>
                    </h2>
                    <span> CEO </span>
                  </div>
                </div>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/4.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">Deivis Castro</a>
                    </h2>
                    <span>Sales Manager</span>
                  </div>
                </div>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/5.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">Diana Castro</a>
                    </h2>
                    <span>Office Coordinator</span>
                  </div>
                </div>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/7.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">Cristian Villavicencio</a>
                    </h2>
                    <span>Advertisement</span>
                  </div>
                </div>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/6.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">Jonathan Aquino</a>
                    </h2>
                    <span>Sales Representative</span>
                  </div>
                </div>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/1.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">Nayeli Sierra</a>
                    </h2>
                    <span>Sales Representative</span>
                  </div>
                </div>
                <div className="team-item-three">
                  <div className="team-thumb-three">
                    <a href="/team-details">
                      <img
                        src={require(`../../assets/img/team/8.png`)}
                        alt=""
                      />
                    </a>
                    <div className="team-social-three">
                    <ul className="list-wrap">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content-three">
                    <h2 className="title">
                      <a href="/team-details">Juan Villavicencio</a>
                    </h2>
                    <span>Project Manager</span>
                  </div>
                </div>


              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
