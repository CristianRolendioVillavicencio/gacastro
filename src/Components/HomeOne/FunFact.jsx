import React from "react";
import CounterUpCom from "../Helpers/CounterUpCom";

function FunFact() {
  return (
    <div className="counter-area pb-120">
      <div className="container">
        <div className="counter-inner wow fadeInUp" data-wow-delay=".2s">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <img
                    src={
                      require(`../../assets/img/icon/counter_icon01.svg`)
                        .default
                    }
                    alt=""
                  />
                </div>
                <div className="counter-content">
                  <span className="count odometer">
                    <CounterUpCom endValue={1500} />
                  </span>
                  <p>Project Complete</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <img
                    src={
                      require(`../../assets/img/icon/counter_icon02.svg`)
                        .default
                    }
                    alt=""
                  />
                </div>
                <div className="counter-content">
                  <span className="count odometer">
                    <CounterUpCom endValue={1562} />
                  </span>
                  <p>Satisfied Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <img
                    src={
                      require(`../../assets/img/icon/counter_icon03.svg`)
                        .default
                    }
                    alt=""
                  />
                </div>
                <div className="counter-content">
                  <span className="count odometer">
                    <CounterUpCom endValue={450} />
                  </span>
                  <p>Experienced Staff</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-item">
                <div className="counter-icon">
                  <img
                    src={
                      require(`../../assets/img/icon/counter_icon04.svg`)
                        .default
                    }
                    alt=""
                  />
                </div>
                <div className="counter-content">
                  <span className="count odometer">
                    <CounterUpCom endValue={38} />
                  </span>
                  <p>Awards Win</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FunFact;
