import React from "react";

function HistoryArea({ videoHandler }) {
  return (
    <section className="history-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
          <div className="history-img-wrap">
  <ul className="list-wrap">
    <li>
      <img
        src="https://iili.io/dxs2wDQ.webp"
        alt="Team"
        className="history-img history-img01"
      />
    </li>

    <li>
      <img
        src={require(`../../assets/img/images/3.png`)}
        alt=""
        className="history-img history-img02"
      />
      <a
        onClick={(e) => videoHandler(e)}
        href="https://youtu.be/LbYKPcXI5ww"
        className="play-btn popup-video pulse"
      >
        <i className="fas fa-play"></i>
      </a>
    </li>
    <li>
      <img
        src="https://iili.io/dxsxmCb.jpg"
        alt=""
        className="history-img history-img03"
      />
    </li>
  </ul>
</div>

          </div>
          <div className="col-lg-6">
            <div className="history-content">
              <div className="section-title mb-20">
                <span className="sub-title">Our Roofing History</span>
                <h2 className="title">
                A Legacy of Excellence in Roofing


                </h2>
              </div>
              <p>
              Since our founding in 2005, GA Castro Construction has been dedicated 
              to providing top-quality roofing services in New Haven and Fairfield County. 
              Our journey began with a small team of passionate roofers committed to excellence 
              and customer satisfaction. Over the years, we have grown and adapted to the latest 
              roofing technologies, ensuring that our clients receive the best solutions available.
              </p>
              <div className="history-list">
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Technology management
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Roofing Solutions
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Expert Workforce
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Quick Response
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryArea;
