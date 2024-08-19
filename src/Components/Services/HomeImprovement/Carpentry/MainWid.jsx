import React from "react";

function CarpentryService() {
  return (
    <section className="services-details-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/carpentry-services.webp`)}
                  alt="Professional Carpentry Services in Stamford and Guilford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title">
                  Professional Carpentry Services in Stamford and Guilford, CT
                </h2>
                <p>
                  At GA Castro Construction, we specialize in custom woodworking and carpentry services tailored to your needs. Whether you're looking for custom cabinets or finish carpentry, our team in Stamford and Guilford, CT, delivers exceptional craftsmanship and quality.
                </p>
                <div className="services-process-wrap">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/Artboard-1.png`)}
                          alt="Detailed Carpentry Process"
                        />
                        <img
                          src={require(`../../../../assets/img/services/Artboard-2.png`)}
                          alt="Custom Woodworking"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <h2 className="title">Our Custom Carpentry Process</h2>
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Creative Design"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title">Creative Design</h4>
                                <p>
                                We start each project with a creative design phase, ensuring all custom woodworking meets your specifications.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Quality Craftsmanship"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title">Quality Craftsmanship</h4>
                                <p>
                                Custom woodworking to fit your specifications.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Timely Completion"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title">Timely Project Completion</h4>
                                <p>
                                Projects finished on time with top standards
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
                  Enhance Your Home with Expert Carpentry Services
                </h2>
                <p>
                  Whether you're updating your home with custom cabinetry or need detailed trim work, our carpentry services in Stamford and Guilford are designed to enhance both the aesthetic and functionality of your space. Contact us today to learn more about our custom woodworking solutions.
                </p>
                <div className="service-benefits-wrap">
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/Artboard-3.png`)}
                          alt="Custom Cabinets"
                        />
                        <img
                          src={require(`../../../../assets/img/services/Artboard-4.png`)}
                          alt="Woodworking Contractor"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <h2 className="title">Why Choose GA Castro Construction?</h2>
                        <p>
                          Our expertise in carpentry and custom woodworking, along with our dedication to customer satisfaction, makes us the preferred choice for homeowners in Stamford and Guilford, CT.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Door and Window Installation
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Wood Flooring Installation
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
            <aside className="services-sidebar">
              <div className="services-widget">
                <h4 className="widget-title">Featured Services</h4>
                <div className="our-services-list">
                  <ul className="list-wrap">
                    <li>
                      <a href="/services/roofing-services">
                        Roofing Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/siding-services">
                        Siding Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/copper-services">
                        Copper Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/wind-damage-services">
                        Wind Damage Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/services/water-damage-services">
                        Water Damage Services
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="services-widget widget-bg"
                data-background="assets/img/services/sw_bg.jpg"
              >
                <h4 className="widget-title">Get a Free Quote</h4>
                <form action="#" className="sidebar-form">
                  <div className="form-grp">
                    <input id="name" type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-grp">
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="form-grp">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="form-grp">
                    <input
                      id="address"
                      type="text"
                      placeholder="Your Address"
                    />
                  </div>
                  <div className="form-grp">
                    <textarea
                      id="message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-two">
                    Contact Us
                  </button>
                </form>
              </div>
              <div className="services-widget">
                <h4 className="widget-title">Our Brochures Download</h4>
                <div className="download-wrap">
                  <a
                    href="../../../assets/img/services/services_details01.jpg"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-cloud-download-alt"></i>Service
                    Details.pdf 65 KB
                  </a>
                  <a
                    href="../../../assets/img/services/services_details01.jpg"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-file-pdf"></i>Carpentry Models.doc 48 KB
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

export default CarpentryService;
