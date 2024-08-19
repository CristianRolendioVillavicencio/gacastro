import React from "react";

function RoofingServices() {
  return (
    <section className="services-details-area pt-120 pb-120" aria-labelledby="roofing-services-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/roofing-services01.jpg`)}
                  alt="Professional roofing services offered in Stamford and Guilford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title" id="roofing-services-title">
                  Professional Roofing Services in Stamford and Guilford, CT
                </h2>
                <p>
                  At GA Castro Construction, we offer comprehensive roofing services to ensure your home is protected. From roof repairs to complete roof replacements, our experienced team in Stamford and Guilford, CT, provides high-quality workmanship and reliable service.
                </p>
                <div className="services-process-wrap" aria-labelledby="roofing-process">
                  <h2 className="title" id="roofing-process">Our Roofing Process</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/roofing-services02.jpg`)}
                          alt="Inspection and assessment of roof condition"
                        />
                        <img
                          src={require(`../../../../assets/img/services/roofing-services03.jpg`)}
                          alt="Professional roof repair services"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item" aria-labelledby="roof-inspection">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon representing thorough roof inspection"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="roof-inspection">Roof Inspection</h4>
                                <p>
                                  We start with a thorough inspection to assess the condition of your roof and identify any issues.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="roof-repair">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Icon representing roof repair services"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="roof-repair">Roof Repair</h4>
                                <p>
                                  Our team provides expert repairs to fix any damage and extend the life of your roof.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="roof-replacement">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon representing roof replacement services"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="roof-replacement">Roof Replacement</h4>
                                <p>
                                  If needed, we offer full roof replacement services, using quality materials to ensure durability and longevity.
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
                  Reliable Roofing Solutions for Your Home
                </h2>
                <p>
                  Protect your home with our reliable roofing solutions. GA Castro Construction offers comprehensive services to meet all your roofing needs. Contact us today for a free estimate and consultation.
                </p>
                <div className="service-benefits-wrap" aria-labelledby="roofing-benefits">
                  <h2 className="title" id="roofing-benefits">Why Choose Our Roofing Services?</h2>
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/roofing-services04.jpg`)}
                          alt="High-quality roofing services provided by experienced professionals"
                        />
                        <img
                          src={require(`../../../../assets/img/services/roofing-services05.jpg`)}
                          alt="Roofing team working on a roof"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <p>
                          Our experienced team provides quality workmanship, reliable service, and a commitment to customer satisfaction. We use only the best materials to ensure your roof is strong and durable.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Experienced Roofing Professionals
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>High-Quality Materials
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Comprehensive Roofing Solutions
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
                    <li><a href="/services/siding-services" aria-label="Link to siding services">Siding Services<i className="fas fa-arrow-right"></i></a></li>
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
                    href="../../../assets/img/services/roofing-services-brochure.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Roofing Services Brochure"
                  >
                    <i className="fas fa-cloud-download-alt"></i>Roofing Services Brochure
                  </a>
                  <a
                    href="../../../assets/img/services/roofing-guide.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Complete Roofing Guide"
                  >
                    <i className="fas fa-file-pdf"></i>Complete Roofing Guide
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

export default RoofingServices;
