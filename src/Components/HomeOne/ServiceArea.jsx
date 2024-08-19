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
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".4s"
              style={{
                background: `url("../../assets/img/services/services_item02.jpg")`,
              }}
            >
              <div className="services-icon">
                <img
                  src={
                    require(`../../assets/img/icon/services_icon02.svg`).default
                  }
                  alt="Roofing Services Icon - Professional Roofing Installation and Repair"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/roofing-services">Roofing Services</a>
                </h2>
                <h2 className="number">01</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/roofing-services">Roofing Services</a>
                </h2>
                <p>
                  Ensure the durability and safety of your home with our expert roofing services. We offer installation, repair, and maintenance to keep your roof in top condition.
                </p>
                <a href="/services/roofing-services" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".2s"
              style={{
                background: `url("../../assets/img/services/services_item01.jpg")`,
              }}
            >
              <div className="services-icon">
                <img
                  src={
                    require(`../../assets/img/icon/services_icon01.svg`).default
                  }
                  alt="Siding Services Icon - High-Quality Siding Installation and Repair"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/siding-services">Siding Services</a>
                </h2>
                <h2 className="number">02</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/siding-services">Siding Services</a>
                </h2>
                <p>
                  Enhance the look and protection of your home with our siding services. We provide high-quality siding installation and repair to suit your style and budget.
                </p>
                <a href="/services/siding-services" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".6s"
              style={{
                background: `url("../../assets/img/services/services_item03.jpg")`,
              }}
            >
              <div className="services-icon">
                <img
                  src={
                    require(`../../assets/img/icon/services_icon03.svg`).default
                  }
                  alt="Copper Services Icon - Copper Roofing and Guttering Solutions"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/copper-services">Copper Services</a>
                </h2>
                <h2 className="number">03</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/copper-services">Copper Services</a>
                </h2>
                <p>
                  We specialize in copper roofing and guttering solutions. Our copper services add elegance and longevity to your property, ensuring superior weather resistance.
                </p>
                <a href="/services/copper-services" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".3s"
              style={{
                background: `url("../../assets/img/services/services_item04.jpg")`,
              }}
            >
              <div className="services-icon">
                <img
                  src={
                    require(`../../assets/img/icon/services_icon04.svg`).default
                  }
                  alt="Wind Damage Services Icon - Protection and Repair from Severe Weather"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/wind-damage-services">Wind Damage Services</a>
                </h2>
                <h2 className="number">04</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/wind-damage-services">Wind Damage Services</a>
                </h2>
                <p>
                  Protect your home from severe weather. Our wind damage services include assessment, repair, and reinforcement to keep your home safe and secure.
                </p>
                <a href="/services/wind-damage-services" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".6s"
              style={{
                background: `url("../../assets/img/services/services_item05.jpg")`,
              }}
            >
              <div className="services-icon">
                <img
                  src={
                    require(`../../assets/img/icon/services_icon05.svg`).default
                  }
                  alt="Water Damage Services Icon - Comprehensive Water Damage Solutions"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/water-damage-services">Water Damage Services</a>
                </h2>
                <h2 className="number">05</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/water-damage-services">Water Damage Services</a>
                </h2>
                <p>
                  Address water damage promptly with our specialized services. We provide comprehensive water damage assessment, repair, and prevention solutions.
                </p>
                <a href="/services/water-damage-services" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div
              className="services-item wow fadeInUp"
              data-wow-delay=".9s"
              style={{
                background: `url("../../assets/img/services/services_item06.jpg")`,
              }}
            >
              <div className="services-icon">
                <img
                  src={
                    require(`../../assets/img/icon/services_icon06.svg`).default
                  }
                  alt="Tree Damage Services Icon - Tree Removal and Property Protection"
                />
              </div>
              <div className="services-content">
                <h2 className="title">
                  <a href="/services/tree-damage-services">Tree Damage Services</a>
                </h2>
                <h2 className="number">06</h2>
              </div>
              <div className="services-overlay-content">
                <h2 className="title">
                  <a href="/services/tree-damage-services">Tree Damage Services</a>
                </h2>
                <p>
                  Our tree damage services help you recover from fallen or damaged trees. We offer removal, repair, and preventive measures to protect your property.
                </p>
                <a href="/services/tree-damage-services" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '5px',
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
      }}></div>
    </section>
  );
}

export default ServiceArea;
