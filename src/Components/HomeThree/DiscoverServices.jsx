import React, { useState } from "react";

function ServiceArea() {
  const [tab, setTab] = useState(1);

  return (
    <section className="services-area-three">
      <div
        className="services-bg jarallax"
        style={{
          backgroundImage: `url(${require("../../assets/img/bg/services_bg.jpg")})`,
        }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center white-title mb-60">
              <span className="sub-title">Discover Our Company</span>
              <h2 className="title">Our Expert Roofing Services: <br />Shingle, Flat, and Shake Roofs for Every Home</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="services-nav-wrap">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
              

                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${tab === 1 ? "active" : ""}`}
                    onClick={() => setTab(1)}
                    id="building-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#building-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="building-tab-pane"
                    aria-selected="true"
                  >
                    Asphalt Shingle Roof
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${tab === 2 ? "active" : ""}`}
                    onClick={() => setTab(2)}
                    id="maintenance-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#maintenance-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="maintenance-tab-pane"
                    aria-selected="false"
                  >
                    Wood Shake Roof
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${tab === 3 ? "active" : ""}`}
                    onClick={() => setTab(3)}
                    id="engineer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#engineer-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="engineer-tab-pane"
                    aria-selected="false"
                  >
                    Flat Roof
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${tab === 4 ? "active" : ""}`}
                    onClick={() => setTab(4)}
                    id="engineer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#engineer-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="engineer-tab-pane"
                    aria-selected="false"
                  >
                    Metal Roof
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${tab === 5 ? "active" : ""}`}
                    onClick={() => setTab(5)}
                    id="engineer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#engineer-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="engineer-tab-pane"
                    aria-selected="false"
                  >
                    Slate Roof
                  </button>
                </li>
                
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane ${tab === 1 ? "active show" : ""}`}
                  id="building-tab-pane"
                  role="tabpanel"
                  aria-labelledby="building-tab"
                  tabIndex="0"
                >
                  <div className="services-item-three">
                  <div className="services-thumb-three">
                    <img
                      src={require(`../../assets/img/services/asphalt-shingle-roof.webp`)}
                      alt="Asphalt Shingle Roof"
                      className="services-img"
                    />
                  </div>

                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                        Asphalt Shingle Roof Services
                        </h2>
                      </div>
                      <p>
                      Asphalt shingle roofs are affordable, durable, and versatile, making them a popular choice for homeowners. 
                      GA Castro Construction provides expert installation, repair, and maintenance to ensure your asphalt shingle roof lasts for years.
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Asphalt Shingle Installation
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Asphalt Shingle Repair
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Asphalt Shingle Replacement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Roof Inspection and Consultation
                          </li>
                        </ul>
                      </div>
                      <a href="/services/services-details" className="btn">
                        Book Service
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane ${tab === 2 ? "active show" : ""}`}
                  id="maintenance-tab-pane"
                  role="tabpanel"
                  aria-labelledby="maintenance-tab"
                  tabIndex="0"
                >
                  <div className="services-item-three">
                  <div className="services-thumb-three">
  <img
    src={require(`../../assets/img/services/shake-roof.webp`)}
    alt="Wood Shake Roof"
    className="services-img"
  />
</div>

                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                        Wood Shake Roof Services
                        </h2>
                      </div>
                      <p>
                      Wood shake roofs offer a natural, rustic look and excellent insulation. GA Castro Construction 
                      specializes in the installation, repair, and maintenance of wood shake roofs, ensuring they remain beautiful and functional.
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Wood Shake Installation
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Wood Shake Repair
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Roof Inspection and Consultation
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Wood Shake Treatment and Preservation
                          </li>
                        </ul>
                      </div>
                      <a href="/services/services-details" className="btn">
                        Book Service
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane ${tab === 3 ? "active show" : ""}`}
                  id="maintenance-tab-pane"
                  role="tabpanel"
                  aria-labelledby="maintenance-tab"
                  tabIndex="0"
                >
                  <div className="services-item-three">
                  <div className="services-thumb-three">
                    <img
                      src={require(`../../assets/img/services/flat-roof.webp`)}
                      alt="Asphalt Shingle Roof"
                      className="services-img"
                    />
                  </div>

                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                        Flat Roof Services
                        </h2>
                      </div>
                      <p>
                      Flat roofs are ideal for modern homes and commercial buildings. They offer easy maintenance and can support rooftop amenities. 
                      GA Castro Construction provides comprehensive flat roof installation, repair, and maintenance services.
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Flat Roof Installation
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Flat Roof Repair
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Flat Roof Maintenance
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Flat Roof Waterproofing
                          </li>
                          
                        </ul>
                      </div>
                      <a href="/services/services-details" className="btn">
                        Book Service
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane ${tab === 4 ? "active show" : ""}`}
                  id="maintenance-tab-pane"
                  role="tabpanel"
                  aria-labelledby="maintenance-tab"
                  tabIndex="0"
                >
                  <div className="services-item-three">
                  <div className="services-thumb-three">
  <img
    src={require(`../../assets/img/services/metal-roof.jpg`)}
    alt="Metal Roof"
    className="services-img"
  />
</div>

                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                        Metal Roof Services
                        </h2>
                      </div>
                      <p>
                      Metal roofs are known for their durability and energy efficiency. GA Castro Construction offers expert installation, 
                      repair, and maintenance of metal roofs, providing long-lasting protection and a sleek appearance.
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Metal Roof Installation
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Metal Roof Repair
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Metal Roof Maintenance
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Metal Roof Coating
                          </li>
                        </ul>
                      </div>
                      <a href="/services/services-details" className="btn">
                        Book Service
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane ${tab === 5 ? "active show" : ""}`}
                  id="engineer-tab-pane"
                  role="tabpanel"
                  aria-labelledby="engineer-tab"
                  tabIndex="0"
                >
                  <div className="services-item-three">
                  <div className="services-thumb-three">
  <img
    src={require(`../../assets/img/services/slate-roof.jpg`)}
    alt="Slate Roof"
    className="services-img"
  />
</div>

                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                        Slate Roof Services
                        </h2>
                      </div>
                      <p>
                      Slate roofs provide an elegant, timeless look and exceptional durability. GA Castro Construction specializes in the installation, 
                      repair, and maintenance of slate roofs, ensuring they remain a beautiful and long-lasting feature of your home.
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Slate Roof Installation
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Slate Roof Repair
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Slate Roof Maintenance
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Slate Tile Replacement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Roof Inspection and Consultation
                          </li>
                        </ul>
                      </div>
                      <a href="/services/services-details" className="btn">
                        Book Service
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
