import React from "react";

function MainWid() {
  return (
    <>
      <section className="error-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-img">
                <img
                  src={require(`../../assets/img/images/404_img.png`)}
                  alt=""
                />
              </div>
              <div className="error-content">
                <h2 className="title">Oops! Page Not Found.</h2>
                <a href="/" className="btn">
                  Back to Home page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainWid;
