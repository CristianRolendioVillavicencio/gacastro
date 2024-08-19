import React, { useState } from "react";

function FaqArea() {
  const [tab, setTab] = useState(1);
  return (
    <section
      className="faq-area faq-bg"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/faq_bg.jpg")})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our Faqs</span>
              <h2 className="title">Have Any Questions & Answer?</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
            <div className="faq-img-wrap">
              <img
                src={require(`../../assets/img/images/faq_img01.jpg`)}
                alt=""
                className="wow fadeInRight"
                data-wow-delay=".4s"
              />
              <img
                src={require(`../../assets/img/images/faq_img02.jpg`)}
                alt=""
                className="wow fadeInRight"
                data-wow-delay=".2s"
              />
              <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                <h2 className="title">FAQ</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="faq-wrap">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2
                    onClick={() => setTab(1)}
                    className="accordion-header"
                    id="headingOne"
                  >
                    <button
                      className={`accordion-button  ${
                        tab !== 1 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How to install Exclusive Addons Plugin?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${
                      tab === 1 ? "show" : ""
                    }`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As far as our Plugin is concerned, it works smoothly
                        with all of the WordPress themes. But if you are looking
                        for a clean, lightweight, minimal, and fully
                        customizable WordPress theme for your site we recommend
                        Credence. multipurpose theme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    onClick={() => setTab(2)}
                    className="accordion-header"
                    id="headingTwo"
                  >
                    <button
                      className={`accordion-button  ${
                        tab !== 2 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you recommend any WordPress theme?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${
                      tab === 2 ? "show" : ""
                    }`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As far as our Plugin is concerned, it works smoothly
                        with all of the WordPress themes. But if you are looking
                        for a clean, lightweight, minimal, and fully
                        customizable WordPress theme for your site we recommend
                        Credence. multipurpose theme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    onClick={() => setTab(3)}
                    className="accordion-header"
                    id="headingThree"
                  >
                    <button
                      className={`accordion-button  ${
                        tab !== 3 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How to install Exclusive Addons Plugin?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${
                      tab === 3 ? "show" : ""
                    }`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As far as our Plugin is concerned, it works smoothly
                        with all of the WordPress themes. But if you are looking
                        for a clean, lightweight, minimal, and fully
                        customizable WordPress theme for your site we recommend
                        Credence. multipurpose theme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    onClick={() => setTab(4)}
                    className="accordion-header"
                    id="headingFour"
                  >
                    <button
                      className={`accordion-button  ${
                        tab !== 4 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How to install Exclusive Addons Plugin?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className={`accordion-collapse collapse ${
                      tab === 4 ? "show" : ""
                    }`}
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As far as our Plugin is concerned, it works smoothly
                        with all of the WordPress themes. But if you are looking
                        for a clean, lightweight, minimal, and fully
                        customizable WordPress theme for your site we recommend
                        Credence. multipurpose theme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2
                    onClick={() => setTab(5)}
                    className="accordion-header"
                    id="headingFive"
                  >
                    <button
                      className={`accordion-button  ${
                        tab !== 5 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How to install Exclusive Addons Plugin?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className={`accordion-collapse collapse ${
                      tab === 5 ? "show" : ""
                    }`}
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        As far as our Plugin is concerned, it works smoothly
                        with all of the WordPress themes. But if you are looking
                        for a clean, lightweight, minimal, and fully
                        customizable WordPress theme for your site we recommend
                        Credence. multipurpose theme
                      </p>
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

export default FaqArea;
