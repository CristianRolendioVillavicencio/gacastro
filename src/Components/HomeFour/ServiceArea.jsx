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
              <h2 className="title">See Our Roofing Services Details</h2>
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
                    Roof Building
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
                    Maintenance
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
                    Engineer
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
                        src={require(`../../assets/img/services/h4_services_img01.jpg`)}
                        alt=""
                      />
                    </div>
                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                          Bringing New IT Business Solutions And Ideas
                        </h2>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Business
                            improvement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Business
                            improvement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Network
                            Administration
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Network
                            Administration
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
                        src={require(`../../assets/img/services/h4_services_img01.jpg`)}
                        alt=""
                      />
                    </div>
                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                          Bringing New IT Business Solutions And Ideas
                        </h2>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Business
                            improvement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Business
                            improvement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Network
                            Administration
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Network
                            Administration
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
                  id="engineer-tab-pane"
                  role="tabpanel"
                  aria-labelledby="engineer-tab"
                  tabIndex="0"
                >
                  <div className="services-item-three">
                    <div className="services-thumb-three">
                      <img
                        src={require(`../../assets/img/services/h4_services_img01.jpg`)}
                        alt=""
                      />
                    </div>
                    <div className="services-content-three">
                      <div className="section-title mb-30">
                        <h2 className="title">
                          Bringing New IT Business Solutions And Ideas
                        </h2>
                      </div>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of
                      </p>
                      <div className="services-list">
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Business
                            improvement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Business
                            improvement
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Network
                            Administration
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Network
                            Administration
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
