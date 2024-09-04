import React, { useEffect, useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faTiktok, faYelp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

// Añadir iconos a la biblioteca
library.add(faFacebook, faTwitter, faYoutube, faTiktok, faYelp, faGoogle, faHouse);

function HeaderThree({ className = "menu-area-three" }) {
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
      {/* Código de header-top-wrap */}
      <div className="header-top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9">
              <div className="header-top-left">
                <ul className="list-wrap">
                  <li>Registration HIC: #. 0667465 </li>
                  <li>
                    <i className="fas fa-phone-alt"></i>
                    <a href="tel:018008388186">+1 (800) 838-8186</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:g.a.castroconstructionllc@gmail.com">g.a.castroconstructionllc@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-3">
              <div className="header-top-right">
                
                <div className="header-social">
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

      {/* El resto del contenido original del header */}
      <div id="header-fixed-height"></div>
      <div id="sticky-header" className={`menu-area  ${className || ""}`}>
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
                  <div className="logo">
                    <a href="/">
                      <img
                        src={require(`../../../assets/img/logo/logo_02.png`)}
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="navbar-wrap main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {/* Enlaces del menú */}
                      <li><a href="/home-three">Home</a></li>
                      <li className="menu-item-has-children services-menu">
                        <a href="/services">Services</a>
                        <ul className="sub-menu two-columns">
                          <div className="column">
                            <li className="sub-menu-header group-title">Home Improvement</li>
                            <li><a href="/services/roofing-services">Roofing Services</a></li>
                            <li><a href="/services/siding-services">Siding Services</a></li>
                            <li><a href="/services/copper-services">Copper Services</a></li>
                            <li><a href="/services/gutter-services">Gutter Services</a></li>
                            <li><a href="/services/carpentry-services">Carpentry Services</a></li>
                            <li><a href="/services/painting-services">Painting Services</a></li>
                          </div>
                          <div className="column">
                            <li className="sub-menu-header group-title">Restoration</li>
                            <li><a href="/services/wind-damage-services">Wind Damage Services</a></li>
                            <li><a href="/services/water-damage-services">Water Damage Services</a></li>
                            <li><a href="/services/tree-damage-services">Tree Damage Services</a></li>
                          </div>
                        </ul>
                      </li>
                      <li><a href="/financing">Financing</a></li>
                      <li><a href="/gallery">Gallery</a></li> {/* Enlace al componente GalleryPage */}
                      <li><a href="/design-your-home">Roof Designer</a></li>
                      <li className="menu-item-has-children help-menu">
                        <a href="#">Help</a>
                        <ul className="sub-menu">
                          <li><a href="/Faqs">Frequently Asked Questions</a></li>
                          <li><a href="/areas-of-service">Service Areas</a></li>
                          <li><a href="/contact">Contact</a></li>
                          <li><a href="/about">About us</a></li>
                        </ul>
                      </li>
                      <li >
                        <a href="/blogs">Blog</a>
                        
                      </li>
                    </ul>
                  </div>
                  <div className="header-action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <a href="/contact" className="btn">Get a Quote</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Mobile Menu */}
              <div className={`mobile-menu ${drawer ? 'open' : ''}`}>
                <nav className="menu-box">
                  <div onClick={() => setDrawer(!drawer)} className="close-btn">
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <a href="/">
                      <img
                        src={require(`../../../assets/img/logo/logo_02.png`)}
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="menu-outer">
                    <ul className="navigation">
                      <li><a href="/home-three">Home</a></li>
                      <li className="menu-item-has-children services-menu">
                        <a href="/services">Services</a>
                        <ul className="sub-menu two-columns">
                          <div className="column">
                            <li className="sub-menu-header group-title">Home Improvement</li>
                            <li><a href="/services/roofing-services">Roofing Services</a></li>
                            <li><a href="/services/siding-services">Siding Services</a></li>
                            <li><a href="/services/copper-services">Copper Services</a></li>
                            <li><a href="/services/gutter-services">Gutter Services</a></li>
                            <li><a href="/services/carpentry-services">Carpentry Services</a></li>
                            <li><a href="/services/painting-services">Painting Services</a></li>
                          </div>
                          <div className="column">
                            <li className="sub-menu-header group-title">Restoration</li>
                            <li><a href="/services/wind-damage-services">Wind Damage Services</a></li>
                            <li><a href="/services/water-damage-services">Water Damage Services</a></li>
                            <li><a href="/services/tree-damage-services">Tree Damage Services</a></li>
                          </div>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li><a href="/financing">Financing</a></li>
                      <li><a href="/gallery">Gallery</a></li> {/* Enlace al componente GalleryPage */}
                      <li><a href="/design-your-home">Roof Designer</a></li>
                      <li className="menu-item-has-children help-menu">
                        <a href="#">Help</a>
                        <ul className="sub-menu">
                          <li><a href="/Faqs">Frequently Asked Questions</a></li>
                          <li><a href="/areas-of-service">Service Areas</a></li>
                          <li><a href="/contact">Contact</a></li>
                          <li><a href="/about">About us</a></li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li className="menu-item-has-children blog-menu">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li><a href="/blogs">Our Blog</a></li>
                          <li><a href="/blogs/blog">Blog Details</a></li>
                        </ul>
                        <div className="dropdown-btn">
                          <span className="fas fa-angle-down"></span>
                        </div>
                      </li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li><a href="https://www.facebook.com/roofinggcastro/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                      <li><a href="https://business.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'google']} /></a></li>
                      <li><a href="https://nextdoor.com/pages/ga-castro-construction-llc-stamford-ct/?init_source=org_pages&utm_source=share&utm_campaign=1706717190771" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fas', 'house']} /></a></li>
                      <li><a href="https://www.tiktok.com/@ga.castroconstruction" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'tiktok']} /></a></li>
                      <li><a href="https://www.youtube.com/@CASTROCONSTRUCTIONLLC" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a></li>
                      <li><a href="https://www.yelp.com/biz/ga-castro-construction-stamford-2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'yelp']} /></a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop" onClick={() => setDrawer(!drawer)}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderThree;
