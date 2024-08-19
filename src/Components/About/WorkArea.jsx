import React from "react";

function WorkArea() {
  return (
    <section className="work-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Working Plan</span>
              <h2 className="title">Roof Plan Working Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={require(`../../assets/img/images/work_img01.png`)}
                  alt=""
                />
                <h4 className="number">01</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Plan for Roofing</h2>
                <p>
                We evaluate your roofing needs and create a tailored plan to ensure quality and efficiency.


                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={require(`../../assets/img/images/work_img02.png`)}
                  alt=""
                />
                <h4 className="number">02</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Schedule Estimate</h2>
                <p>
                Arrange a convenient time for a detailed cost estimate and project timeline.


                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={require(`../../assets/img/images/work_img03.png`)}
                  alt=""
                />
                <h4 className="number">03</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Install New Roof</h2>
                <p>
                Our professional team installs your new roof with precision and care.


                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="work-item">
              <div className="work-thumb">
                <img
                  src={require(`../../assets/img/images/work_img04.png`)}
                  alt=""
                />
                <h4 className="number">04</h4>
              </div>
              <div className="work-content">
                <h2 className="title">Enjoy Roofing</h2>
                <p>
                Experience the benefits of a durable and aesthetically pleasing roof.


                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkArea;
