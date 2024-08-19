import React, { useEffect, useState } from "react";
import logo from "../../../assets/img/logo/logo.png";
import logo2 from "../../../assets/img/logo/logo_02.png";

function HeaderOne({ className }) {
  const [drawer, setDrawer] = useState(false);
  useEffect(() => {
    if (drawer) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  }, [drawer]);
  return (
    <header>
      <div
        id="sticky-header"
        className={`menu-area transparent-header ${className || ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                onClick={() => setDrawer(!drawer)}
                className="mobile-nav-toggler"
              >
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo different-logo">
                    <a href="/">
                      <img src={logo} alt="Logo" />
                    </a>
                  </div>
                  <div className="logo d-none">
                    <a href="/">
                      <img src={logo2} alt="Logo" />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      <li className="active menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li className="active">
                            <a href="/">Home One</a>
                          </li>
                          <li>
                            <a href="home-two">Home Two</a>
                          </li>
                          <li>
                            <a href="/home-three">Home Three</a>
                          </li>
                          <li>
                            <a href="/home-four">Home Four</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/about">About us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/services">Services Page</a>
                          </li>
                          <li>
                            <a href="/services/services-details">
                              Services Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/project">Project Page</a>
                          </li>
                          <li>
                            <a href="/project-details">Project Details</a>
                          </li>
                          <li>
                            <a href="/team">Our Team</a>
                          </li>
                          <li>
                            <a href="/team-details">Team Details</a>
                          </li>
                          <li>
                            <a href="/error">404 Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/blogs">Our Blog</a>
                          </li>
                          <li>
                            <a href="/blogs/blog">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <a href="/contact" className="btn">
                          Get a Quoute
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu">
                <nav className="menu-box">
                  <div onClick={() => setDrawer(!drawer)} className="close-btn">
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <a href="/">
                      <img src={logo2} alt="Logo" />
                    </a>
                  </div>
                  <div className="menu-outer">
                    <ul className="navigation">
                      <li className="active menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li className="active">
                            <a href="/">Home One</a>
                          </li>
                          <li>
                            <a href="/home-two">Home Two</a>
                          </li>
                          <li>
                            <a href="/home-three">Home Three</a>
                          </li>
                          <li>
                            <a href="/home-four">Home Four</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li>
                        <a href="/about">About us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/services">Services Page</a>
                          </li>
                          <li>
                            <a href="/services/services-details">
                              Services Details
                            </a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/project">Project Page</a>
                          </li>
                          <li>
                            <a href="/project-details">Project Details</a>
                          </li>
                          <li>
                            <a href="/team">Our Team</a>
                          </li>
                          <li>
                            <a href="/team-details">Team Details</a>
                          </li>
                          <li>
                            <a href="/error">404 Error</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="/blogs">Our Blog</a>
                          </li>
                          <li>
                            <a href="/blogs/blog">Blog Details</a>
                          </li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
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
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderOne;
