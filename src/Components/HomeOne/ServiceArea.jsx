import React from "react";

function ServiceArea({ className }) {
  return (
    <section className={className || ""} style={{ position: 'relative', paddingBottom: '50px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">What We Do</span>
              <h2 className="title tg-element-title">Our Service Areas</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="services-item" style={{ transition: 'transform 0.2s ease-in-out' }}>
              <div className="services-icon">
                <img
                  src={require(`../../assets/img/icon/services_icon02.svg`).default}
                  alt="Roofing Services Icon - Professional Roofing Installation and Repair"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/roofing-services">Roofing Services</a>
                </h2>
                <p>
                  Ensure the durability and safety of your home with our expert roofing services. We offer installation, repair, and maintenance to keep your roof in top condition.
                </p>
                <a href="/services/roofing-services" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="services-item" style={{ transition: 'transform 0.2s ease-in-out' }}>
              <div className="services-icon">
                <img
                  src={require(`../../assets/img/icon/services_icon06.svg`).default}
                  alt="Tree Damage Services Icon - Tree Removal and Property Protection"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/tree-damage-services">Tree Damage Services</a>
                </h2>
                <p>
                  Our tree damage services help you recover from fallen or damaged trees. We offer removal, repair, and preventive measures to protect your property.
                </p>
                <a href="/services/tree-damage-services" className="read-more">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
