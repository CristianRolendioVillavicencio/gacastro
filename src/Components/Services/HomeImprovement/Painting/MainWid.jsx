import React from "react";

function PaintingServices() {
  return (
    <section className="services-details-area pt-120 pb-120" aria-labelledby="painting-services-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/painting-services-01.jpg`)}
                  alt="Exterior painting service in Stamford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title" id="painting-services-title">
                  Professional Interior and Exterior Painting Services in Stamford and Guilford, CT
                </h2>
                <p>
                  GA Castro Construction offers top-notch interior and exterior painting services in Stamford, Guilford, New Haven County, and Fairfield County, CT. Our experienced team specializes in transforming homes with quality paint finishes that enhance both aesthetics and durability.
                </p>
                <div className="services-process-wrap" aria-labelledby="painting-process">
                  <h2 className="title" id="painting-process">Our Painting Service Process</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/painting-services-02.jpg`)}
                          alt="Interior painting preparation in Guilford, CT"
                        />
                        <img
                          src={require(`../../../../assets/img/services/painting-services-03.jpg`)}
                          alt="Exterior house painting in progress"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item" aria-labelledby="painting-inspection">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for painting inspection"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="painting-inspection">Inspection & Preparation</h4>
                                <p>
                                  Our process begins with a thorough inspection and preparation, ensuring surfaces are clean and smooth before painting.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="painting-design">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Icon for painting design"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="painting-design">Color Consultation & Design</h4>
                                <p>
                                  We offer expert color consultations to help you choose the perfect palette for your interior or exterior spaces.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="painting-application">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for painting application"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="painting-application">Application & Cleanup</h4>
                                <p>
                                  Our team applies high-quality paints with precision, followed by a thorough cleanup to leave your space spotless.
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
                  Transform Your Home with Our Expert Painting Services
                </h2>
                <p>
                  Whether you need a fresh coat of paint for your home's interior or exterior, GA Castro Construction offers reliable and professional painting services. Serving Stamford, Guilford, New Haven County, and Fairfield County, CT, we ensure a beautiful and long-lasting finish. Contact us today for a free consultation.
                </p>
                <div className="service-benefits-wrap" aria-labelledby="painting-benefits">
                  <h2 className="title" id="painting-benefits">Why Choose Our Painting Services?</h2>
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/painting-services-04.jpg`)}
                          alt="High-quality exterior painting project"
                        />
                        <img
                          src={require(`../../../../assets/img/services/painting-services-05.jpg`)}
                          alt="Professional interior painting service"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <p>
                          Our team provides exceptional painting services, using premium materials to ensure your home looks its best. We guarantee customer satisfaction with every project.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Experienced Painting Professionals
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>High-Quality, Durable Paints
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Comprehensive Interior & Exterior Solutions
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
                    href="../../../assets/img/services/painting-services-brochure.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Painting Services Brochure"
                  >
                    <i className="fas fa-cloud-download-alt"></i>Painting Services Brochure
                  </a>
                  <a
                    href="../../../assets/img/services/painting-guide.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Complete Painting Guide"
                  >
                    <i className="fas fa-file-pdf"></i>Complete Painting Guide
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

export default PaintingServices;
