import React from "react";
import FreeQuoteForm from '../../../forms/FreeQuoteForm'; // Importa el componente de formulario

function WindDamageService() {
  return (
    <section className="services-details-area pt-120 pb-120" aria-labelledby="wind-damage-services-title">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="services-details-wrap">
              <div className="services-details-thumb">
                <img
                  src={require(`../../../../assets/img/services/wind-damage-services-01.jpg`)}
                  alt="Wind damage repair services in Stamford, CT"
                />
              </div>
              <div className="services-details-content">
                <h2 className="title" id="wind-damage-services-title">
                  Professional Wind Damage Repair Services in Stamford and Guilford, CT
                </h2>
                <p>
                  GA Castro Construction provides expert wind damage repair services in Stamford, Guilford, New Haven County, and Fairfield County, CT. Our team specializes in repairing and restoring properties affected by wind damage, ensuring your home is safe and secure.
                </p>
                <div className="services-process-wrap" aria-labelledby="wind-damage-process">
                  <h2 className="title" id="wind-damage-process">Our Wind Damage Repair Process</h2>
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                      <div className="services-process-img">
                        <img
                          src={require(`../../../../assets/img/services/wind-damage-services-02.jpg`)}
                          alt="Inspecting wind damage on a property in Guilford, CT"
                        />
                        <img
                          src={require(`../../../../assets/img/services/wind-damage-services-03.jpg`)}
                          alt="Repairing wind-damaged roof in Stamford, CT"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="services-process-content">
                        <ul className="list-wrap">
                          <li>
                            <div className="services-process-item" aria-labelledby="wind-damage-inspection">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for wind damage inspection"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="wind-damage-inspection">Inspection & Assessment</h4>
                                <p>
                                  We conduct a thorough inspection to assess the extent of the wind damage and determine the necessary repairs.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="wind-damage-repair">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon02.svg`).default}
                                  alt="Icon for wind damage repair"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="wind-damage-repair">Repair & Restoration</h4>
                                <p>
                                  Our skilled technicians repair and restore wind-damaged areas, ensuring your property is safe and secure.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="services-process-item" aria-labelledby="wind-damage-prevention">
                              <div className="icon">
                                <img
                                  src={require(`../../../../assets/img/icon/sp_icon01.svg`).default}
                                  alt="Icon for wind damage prevention"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title" id="wind-damage-prevention">Prevention & Maintenance</h4>
                                <p>
                                  We offer solutions to prevent future wind damage and maintain the integrity of your property.
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
                  Protect Your Home with Our Wind Damage Repair Services
                </h2>
                <p>
                  If your property has been affected by wind damage, GA Castro Construction offers reliable repair services in Stamford, Guilford, New Haven County, and Fairfield County, CT. Contact us today for a free consultation and ensure your home is protected.
                </p>
                <div className="service-benefits-wrap" aria-labelledby="wind-damage-benefits">
                  <h2 className="title" id="wind-damage-benefits">Why Choose Our Wind Damage Repair Services?</h2>
                  <div className="row">
                    <div className="col-lg-7 order-0 order-lg-2">
                      <div className="benefits-img">
                        <img
                          src={require(`../../../../assets/img/services/wind-damage-services-04.jpg`)}
                          alt="High-quality wind damage repair project"
                        />
                        <img
                          src={require(`../../../../assets/img/services/wind-damage-services-05.jpg`)}
                          alt="Restoration of wind-damaged roof"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="benefits-content">
                        <p>
                          Our team provides comprehensive wind damage repair services, using the best materials and techniques to restore your property. We guarantee customer satisfaction with every project.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Experienced Wind Damage Specialists
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
                    <li><a href="/services/siding-services" aria-label="Link to siding services">Siding Services<i className="fas fa-arrow-right"></i></a></li>
                    <li><a href="/services/copper-services" aria-label="Link to copper services">Copper Services<i className="fas fa-arrow-right"></i></a></li>
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
                <FreeQuoteForm subject="New Quote Request for Wind Damage" /> {/* Pasa el subject específico para Wind Damage */}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WindDamageService;
