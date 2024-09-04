import React from "react";
import FreeQuoteForm from '../../../forms/FreeQuoteForm'; // Importa el componente de formulario

function SidingService() {
  return (
    <section className="services-details-area pt-120 pb-120" aria-labelledby="siding-services-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/siding-services-01.jpg`)}
                  alt="Siding installation on a home in Stamford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title" id="siding-services-title">
                  Professional Siding Services in Stamford, Fairfield County, and New Haven County, CT
                </h2>
                <p>
                  At GA Castro Construction, we provide expert siding services to enhance the curb appeal and energy efficiency of your home. Whether you are in Stamford, Fairfield County, or New Haven County, CT, our team is dedicated to delivering high-quality siding installation and repair services.
                </p>
                <div className="services-process-wrap" aria-labelledby="siding-process">
                  <h2 className="title" id="siding-process">Our Siding Process</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/siding-services-02.jpg`)}
                          alt="Home exterior before siding installation"
                        />
                        <img
                          src={require(`../../../../assets/img/services/siding-services-03.jpg`)}
                          alt="New siding installation in progress"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item" aria-labelledby="siding-inspection">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for siding inspection"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="siding-inspection">Initial Inspection</h4>
                                <p>
                                  Our process begins with a thorough inspection of your home's exterior to assess the condition and recommend the best siding options.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="siding-design">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Icon for siding design"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="siding-design">Design and Planning</h4>
                                <p>
                                  We work with you to select the right materials and colors, ensuring the new siding complements your home's architecture.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="siding-installation">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for siding installation"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="siding-installation">Installation and Completion</h4>
                                <p>
                                  Our experienced team installs your new siding efficiently and professionally, ensuring a flawless finish that enhances your home's appearance.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="title-two">
                  Enhance Your Home with Expert Siding Services
                </h2>
                <p>
                  Whether you need new siding installation or repairs, GA Castro Construction offers top-quality services to homeowners in Stamford, Fairfield County, and New Haven County, CT. Contact us today to learn more and schedule a consultation.
                </p>
                <div className="service-benefits-wrap" aria-labelledby="siding-benefits">
                  <h2 className="title" id="siding-benefits">Why Choose Our Siding Services?</h2>
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/siding-services-04.jpg`)}
                          alt="Completed siding project showing modern home exterior"
                        />
                        <img
                          src={require(`../../../../assets/img/services/siding-services-05.jpg`)}
                          alt="High-quality siding materials"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <p>
                          Our team of professionals is committed to delivering exceptional siding services, using only the highest quality materials. We ensure that your new siding will not only enhance the appearance of your home but also improve its energy efficiency and durability.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Experienced Siding Professionals
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>High-Quality, Durable Materials
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Comprehensive Siding Solutions
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Customer Satisfaction Guaranteed
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <aside className="services-sidebar" aria-labelledby="sidebar-title">
              <h4 className="widget-title" id="sidebar-title">Our Services</h4>
              <div className="services-widget">
                <div className="our-services-list">
                  <ul className="list-wrap">
                    <li><a href="/services/roofing-services" aria-label="Link to roofing services">Roofing Services<i className="fas fa-arrow-right"></i></a></li>
                    <li><a href="/services/copper-services" aria-label="Link to copper services">Copper Services<i className="fas fa-arrow-right"></i></a></li>
                    <li><a href="/services/wind-damage-services" aria-label="Link to wind damage services">Wind Damage Services<i className="fas fa-arrow-right"></i></a></li>
                    <li><a href="/services/water-damage-services" aria-label="Link to water damage services">Water Damage Services<i className="fas fa-arrow-right"></i></a></li>
                    <li><a href="/services/carpentry-services" aria-label="Link to carpentry services">Carpentry Services<i className="fas fa-arrow-right"></i></a></li>
                  </ul>
                </div>
              </div>
              <div
                className="services-widget widget-bg"
                data-background="assets/img/services/sw_bg.jpg"
                aria-labelledby="get-quote-title"
              >
                <h4 className="widget-title" id="get-quote-title">Get a Free Quote</h4>
                <FreeQuoteForm subject="New Quote Request for Siding" /> {/* Inserta el componente de formulario con el subject para Siding */}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidingService;
