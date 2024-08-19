import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="breadcrumb-wrap text-center">
                <p>
                  <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                  <i className="bx bxs-right-arrow-alt" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
