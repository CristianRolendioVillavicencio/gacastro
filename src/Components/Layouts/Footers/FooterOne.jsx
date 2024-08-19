import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faTiktok, faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

// Añadir iconos a la biblioteca
library.add(faFacebook, faTwitter, faYoutube, faTiktok, faYelp, faGoogle, faHouse);

function FooterOne() {
  return (
    <footer>
      <div
        className="footer-area footer-bg"
        style={{
          backgroundImage: `url(${require("../../../assets/img/bg/footer_bg.jpg")})`,
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-7">
                <div className="footer-widget">
                  <h2 className="fw-title">About Us</h2>
                  <div className="footer-content">
                    <p>
                      GA Castro Construction is your trusted local expert for roofing, siding, and gutters in New Haven and Fairfield County. 
                      With a commitment to quality and professional service, we handle all your exterior needs.
                    </p>
                    <div className="footer-newsletter">
                      <h4 className="title">Subscribe to Our Newsletter</h4>
                      <form action="#">
                        <input type="text" placeholder="Enter your email" />
                        <button type="submit" className="btn btn-two">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Our Services</h2>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li><a href="/services/roofing-services"><i className="fas fa-angle-double-right"></i>Roofing Services</a></li>
                      <li><a href="/services/siding-services"><i className="fas fa-angle-double-right"></i>Siding Services</a></li>
                      <li><a href="/services/copper-services"><i className="fas fa-angle-double-right"></i>Copper Services</a></li>
                      <li><a href="/services/painting-services"><i className="fas fa-angle-double-right"></i>Painting Services</a></li>
                      <li><a href="/services/wind-damage-services"><i className="fas fa-angle-double-right"></i>Wind Damage</a></li>
                      <li><a href="/services/water-damage-services"><i className="fas fa-angle-double-right"></i>Water Damage</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Quick Links</h2>
                  <div className="footer-link">
                    <ul className="list-wrap">
                      <li>
                        <a href="/design-your-home">
                          <i className="fas fa-angle-double-right"></i>Roof Designer
                        </a>
                      </li>
                      <li>
                        <a href="/gallery">
                          <i className="fas fa-angle-double-right"></i>Gallery
                        </a>
                      </li>
                      <li>
                        <a href="/about">
                          <i className="fas fa-angle-double-right"></i>About Us
                        </a>
                      </li>
                      <li>
                        <a href="/areas-of-service">
                          <i className="fas fa-angle-double-right"></i>Services Area
                        </a>
                      </li>
                      <li>
                        <a href="/project-details">
                          <i className="fas fa-angle-double-right"></i>Our Process
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          <i className="fas fa-angle-double-right"></i>Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div className="footer-widget">
                  <h2 className="fw-title">Instagram Posts</h2>
                  <div className="footer-instagram">
                    <ul className="list-wrap">
                      <li>
                        <a href="#">
                          <img
                            src={require(`../../../assets/img/instagram/f_insta_img01.jpg`)}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require(`../../../assets/img/instagram/f_insta_img02.jpg`)}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require(`../../../assets/img/instagram/f_insta_img03.jpg`)}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require(`../../../assets/img/instagram/f_insta_img04.jpg`)}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require(`../../../assets/img/instagram/f_insta_img05.jpg`)}
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            src={require(`../../../assets/img/instagram/f_insta_img06.jpg`)}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-logo-area">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="logo">
                    <a href="/">
                      <img
                        src={require(`../../../assets/img/logo/w_logo.png`)}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="footer-contact">
                    <div className="icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="content">
                      <span>Phone No</span>
                      <a href="tel:+18008388186">+1 (800) 838-8186</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="footer-social">
                    <h2 className="title">Follow Us:</h2>
                    <ul className="list-wrap">
                      <li><a href="https://www.facebook.com/roofinggcastro/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                      <li><a href="https://business.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'google']} /></a></li>
                      <li><a href="https://nextdoor.com/pages/ga-castro-construction-llc-stamford-ct/?init_source=org_pages&utm_source=share&utm_campaign=1706717190771" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'house']} /></a></li>
                      <li><a href="https://www.tiktok.com/@ga.castroconstruction" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'tiktok']} /></a></li>
                      <li><a href="https://www.youtube.com/@CASTROCONSTRUCTIONLLC" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a></li>
                      <li><a href="https://www.yelp.com/biz/ga-castro-construction-stamford-2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'yelp']} /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright-text">
                  <p>© Copyright 2023. All Right Reserved</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-bootom-menu">
                  <ul className="list-wrap">
                    <li>
                      <a href="/contact">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/contact">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterOne;
