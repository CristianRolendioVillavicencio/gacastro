import React from "react";
import { Link } from "react-router-dom";

function InnerPageTitle({ title, paths }) {
  return (
    <section
      className="breadcrumb-area breadcrumb-bg"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/breadcrumb_bg.webp")})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-content">
              <h2 className="title">{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  {paths &&
                    paths.length > 0 &&
                    paths.map((path) => (
                      <li key={path.name} className="breadcrumb-item">
                        <Link to={path.path}>{path.name}</Link>
                      </li>
                    ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerPageTitle;
