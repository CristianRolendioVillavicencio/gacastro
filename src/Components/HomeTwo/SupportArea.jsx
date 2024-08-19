import React from "react";

function SupportArea() {
  return (
    <section className="support-area pt-115 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="support-item">
              <div className="support-icon">
                <img
                  src={
                    require(`../../assets/img/icon/support_icon01.svg`).default
                  }
                  alt=""
                />
              </div>
              <div className="support-content">
                <h4 className="title">Quick Response</h4>
                <p>
                  There are many variations of passages Ipsum available but the
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="support-item">
              <div className="support-icon">
                <img
                  src={
                    require(`../../assets/img/icon/support_icon02.svg`).default
                  }
                  alt=""
                />
              </div>
              <div className="support-content">
                <h4 className="title">Quick Response</h4>
                <p>
                  There are many variations of passages Ipsum available but the
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="support-item">
              <div className="support-icon">
                <img
                  src={
                    require(`../../assets/img/icon/support_icon03.svg`).default
                  }
                  alt=""
                />
              </div>
              <div className="support-content">
                <h4 className="title">Quick Response</h4>
                <p>
                  There are many variations of passages Ipsum available but the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportArea;
