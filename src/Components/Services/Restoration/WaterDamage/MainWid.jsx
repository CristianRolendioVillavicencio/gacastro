import React from "react";

function WaterDamageService() {
  return (
    <section className="services-details-area pt-120 pb-120" aria-labelledby="water-damage-services-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/water-damage-01.jpg`)}
                  alt="Water damage repair services in Stamford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title" id="water-damage-services-title">
                  Professional Water Damage Repair Services in Stamford and Guilford, CT
                </h2>
                <p>
                  GA Castro Construction offers expert water damage repair services in Stamford, Guilford, New Haven County, and Fairfield County, CT. Our team specializes in restoring properties affected by water damage, ensuring your home is safe and protected.
                </p>
                <div className="services-process-wrap" aria-labelledby="water-damage-process">
                  <h2 className="title" id="water-damage-process">Our Water Damage Repair Process</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/water-damage-02.jpg`)}
                          alt="Inspecting water damage in Guilford, CT"
                        />
                        <img
                          src={require(`../../../../assets/img/services/water-damage-03.jpg`)}
                          alt="Restoring water-damaged areas in Stamford, CT"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item" aria-labelledby="water-damage-inspection">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for water damage inspection"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="water-damage-inspection">Inspection & Assessment</h4>
                                <p>
                                  Our experts conduct a thorough inspection to assess the extent of water damage and determine the necessary repairs.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="water-damage-repair">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Icon for water damage repair"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="water-damage-repair">Repair & Restoration</h4>
                                <p>
                                  Our skilled technicians repair and restore water-damaged areas, ensuring your property is safe and secure.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="water-damage-prevention">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for water damage prevention"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="water-damage-prevention">Prevention & Maintenance</h4>
                                <p>
                                  We offer solutions to prevent future water damage and maintain the integrity of your property.
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
                  Protect Your Home with Our Water Damage Repair Services
                </h2>
                <p>
                  If your property has been affected by water damage, GA Castro Construction offers reliable repair services in Stamford, Guilford, New Haven County, and Fairfield County, CT. Contact us today for a free consultation and ensure your home is protected.
                </p>
                <div className="service-benefits-wrap" aria-labelledby="water-damage-benefits">
                  <h2 className="title" id="water-damage-benefits">Why Choose Our Water Damage Repair Services?</h2>
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/water-damage-04.jpg`)}
                          alt="High-quality water damage repair project"
                        />
                        <img
                          src={require(`../../../../assets/img/services/water-damage-05.jpg`)}
                          alt="Restoration of water-damaged property"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <p>
                          Our team provides comprehensive water damage repair services, using the best materials and techniques to restore your property. We guarantee customer satisfaction with every project.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Experienced Water Damage Specialists
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>High-Quality, Durable Repairs
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Comprehensive Damage Assessment & Repair
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
              <h4 className="widget-title" id="sidebar-title">Featured Services</h4>
              <div className="services-widget">
                <div className="our-services-list">
                  <ul className="list-wrap">
                    <li><a href="/services/roofing-services" aria-label="Link to roofing services">Roofing Services<i className="fas fa-arrow-right"></i></a></li>
                    <li>
                      <a href="/services/siding-services" aria-label="Link to siding services">
                        Siding Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li><a href="/services/copper-services" aria-label="Link to copper services">Copper Services<i className="fas fa-arrow-right"></i></a></li>
                    <li><a href="/services/wind-damage-services" aria-label="Link to wind damage services">Wind Damage Services<i className="fas fa-arrow-right"></i></a></li>
                    
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
                <form action="#" className="sidebar-form" aria-label="Contact form">
                  <div className="form-grp">
                    <input id="name" type="text" placeholder="Your Name" aria-label="Enter your name" />
                  </div>
                  <div className="form-grp">
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email Address"
                      aria-label="Enter your email address"
                    />
                  </div>
                  <div className="form-grp">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                      aria-label="Enter your phone number"
                    />
                  </div>
                  <div className="form-grp">
                    <input
                      id="address"
                      type="text"
                      placeholder="Your Address"
                      aria-label="Enter your address"
                    />
                  </div>
                  <div className="form-grp">
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      aria-label="Enter your message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-two" aria-label="Submit contact form">
                    Contact Us
                  </button>
                </form>
              </div>
              <div className="services-widget">
                <h4 className="widget-title" id="brochure-title">Download Our Brochures</h4>
                <div className="download-wrap">
                  <a
                    href="../../../assets/img/services/water-damage-services-brochure.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Water Damage Services Brochure"
                  >
                    <i className="fas fa-cloud-download-alt"></i>Water Damage Services Brochure
                  </a>
                  <a
                    href="../../../assets/img/services/water-damage-guide.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Complete Water Damage Guide"
                  >
                    <i className="fas fa-file-pdf"></i>Complete Water Damage Guide
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaterDamageService;
