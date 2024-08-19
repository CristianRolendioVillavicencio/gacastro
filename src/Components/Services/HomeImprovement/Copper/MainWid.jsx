import React from "react";

function CopperServices() {
  return (
    <section className="services-details-area pt-120 pb-120" aria-labelledby="copper-services-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/copper-services-01.jpg`)}
                  alt="Copper roofing and chimney services in Guilford and Stamford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title" id="copper-services-title">
                  Expert Copper Roofing and Chimney Services in Guilford and Stamford, CT
                </h2>
                <p>
                  GA Castro Construction offers professional copper roofing and chimney services throughout Guilford, Stamford, New Haven County, and Fairfield County, CT. Our team specializes in the installation, maintenance, and repair of copper elements to enhance the durability and aesthetic appeal of your home.
                </p>
                <div className="services-process-wrap" aria-labelledby="copper-process">
                  <h2 className="title" id="copper-process">Our Copper Service Process</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/copper-services-02.jpg`)}
                          alt="Inspecting copper roofing in Stamford, CT"
                        />
                        <img
                          src={require(`../../../../assets/img/services/copper-services-03.jpg`)}
                          alt="Installing new copper chimney cap in Guilford, CT"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item" aria-labelledby="copper-inspection">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for copper inspection"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="copper-inspection">Copper Inspection</h4>
                                <p>
                                  Our experts begin with a thorough inspection of your copper roofing and chimney components to assess their condition and identify any necessary repairs.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="copper-design">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Icon for copper design"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="copper-design">Design & Planning</h4>
                                <p>
                                  We work closely with you to design and plan the best copper solutions for your home's roofing and chimney, ensuring a perfect match with your home's aesthetic.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="copper-installation">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for copper installation"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="copper-installation">Installation & Maintenance</h4>
                                <p>
                                  Our skilled technicians handle all aspects of copper installation and maintenance, ensuring long-lasting durability and exceptional craftsmanship.
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
                  Enhance Your Home with Premium Copper Solutions
                </h2>
                <p>
                  Whether you need copper roofing, chimney caps, or flashing, GA Castro Construction offers high-quality services to homeowners in Guilford, Stamford, New Haven County, and Fairfield County, CT. Contact us today to schedule a consultation and discover how we can enhance your home's curb appeal and functionality with copper.
                </p>
                <div className="service-benefits-wrap" aria-labelledby="copper-benefits">
                  <h2 className="title" id="copper-benefits">Why Choose Our Copper Services?</h2>
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/copper-services-04.jpg`)}
                          alt="Completed copper roofing project"
                        />
                        <img
                          src={require(`../../../../assets/img/services/copper-services-05.jpg`)}
                          alt="High-quality copper chimney cap installation"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <p>
                          Our team of professionals provides top-notch copper services, using only the best materials to ensure your home benefits from the durability and elegance of copper. We guarantee customer satisfaction with every project.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Experienced Copper Specialists
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>High-Quality, Long-Lasting Materials
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Comprehensive Copper Solutions
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
                      <a href="/services/siding-services" aria-label="Link to siding services">
                        Siding Services
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
                    href="../../../assets/img/services/copper-services-brochure.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Copper Services Brochure"
                  >
                    <i className="fas fa-cloud-download-alt"></i>Copper Services Brochure
                  </a>
                  <a
                    href="../../../assets/img/services/copper-guide.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Complete Copper Guide"
                  >
                    <i className="fas fa-file-pdf"></i>Complete Copper Guide
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

export default CopperServices;
