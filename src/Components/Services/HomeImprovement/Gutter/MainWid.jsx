import React from "react";

function GutterAndDownspoutService() {
  return (
    <section className="services-details-area pt-120 pb-120" aria-labelledby="gutter-services-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/gutter-services-01.jpg`)}
                  alt="Gutter and downspout installation in Stamford and Guilford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title" id="gutter-services-title">
                  Expert Gutter and Downspout Services in Stamford and Guilford, CT
                </h2>
                <p>
                  GA Castro Construction provides professional gutter and downspout services in Stamford, Guilford, New Haven County, and Fairfield County, CT. Our team specializes in the installation, repair, and maintenance of gutters and downspouts to protect your home from water damage and improve its exterior appeal.
                </p>
                <div className="services-process-wrap" aria-labelledby="gutter-process">
                  <h2 className="title" id="gutter-process">Our Gutter Service Process</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/gutter-services-02.jpg`)}
                          alt="Inspecting gutter system in Stamford, CT"
                        />
                        <img
                          src={require(`../../../../assets/img/services/gutter-services-03.jpg`)}
                          alt="Installing new downspouts in Guilford, CT"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item" aria-labelledby="gutter-inspection">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for gutter inspection"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="gutter-inspection">Gutter Inspection</h4>
                                <p>
                                  We begin with a comprehensive inspection of your existing gutter and downspout system to assess any issues and recommend solutions.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="gutter-design">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Icon for gutter design"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="gutter-design">Design & Planning</h4>
                                <p>
                                  We design a custom gutter and downspout solution tailored to your home's specific needs, ensuring optimal water flow and protection.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="gutter-installation">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for gutter installation"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="gutter-installation">Installation & Maintenance</h4>
                                <p>
                                  Our team expertly installs and maintains your new gutters and downspouts, using high-quality materials to ensure durability and efficiency.
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
                  Enhance Your Home with Quality Gutter and Downspout Solutions
                </h2>
                <p>
                  Protect your home from water damage with our comprehensive gutter and downspout services. Serving Stamford, Guilford, New Haven County, and Fairfield County, GA Castro Construction provides expert installation, repair, and maintenance. Contact us today for a free consultation.
                </p>
                <div className="service-benefits-wrap" aria-labelledby="gutter-benefits">
                  <h2 className="title" id="gutter-benefits">Why Choose Our Gutter Services?</h2>
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/gutter-services-04.jpg`)}
                          alt="High-quality gutter installation project"
                        />
                        <img
                          src={require(`../../../../assets/img/services/gutter-services-05.jpg`)}
                          alt="Durable downspout installation in CT"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <p>
                          Our professional team provides top-notch gutter and downspout services, using only the best materials to ensure your home's protection and aesthetic appeal. We guarantee customer satisfaction with every project.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Experienced Gutter Specialists
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>High-Quality, Durable Materials
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Comprehensive Gutter Solutions
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
                    <li>
                      <a href="/services/roofing-services" aria-label="Link to roofing services">
                        Roofing Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/copper-services" aria-label="Link to copper services">
                        Copper Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/wind-damage-services" aria-label="Link to wind damage services">
                        Wind Damage Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/water-damage-services" aria-label="Link to water damage services">
                        Water Damage Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/carpentry-services" aria-label="Link to carpentry services">
                        Carpentry Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
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
                    href="../../../assets/img/services/gutter-services-brochure.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Gutter Services Brochure"
                  >
                    <i className="fas fa-cloud-download-alt"></i>Gutter Services Brochure
                  </a>
                  <a
                    href="../../../assets/img/services/gutter-guide.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Complete Gutter Guide"
                  >
                    <i className="fas fa-file-pdf"></i>Complete Gutter Guide
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

export default GutterAndDownspoutService;
