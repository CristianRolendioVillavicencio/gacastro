import React from "react";

function ProjectArea() {
  const imageHandler = () => {
    const els = document.querySelectorAll(".collapse-anim");
    els.forEach((item) => {
      const height = item.scrollHeight;
      item.style.setProperty("--max-height", `${height}px`);
    });
  };
  return (
    <section
      className="project-area project-bg"
      style={{
        backgroundImage: `url(${require("../../assets/img/bg/project_bg.jpg")})`,
      }}
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
              <span className="sub-title tg-element-title">
                Latest Projects
              </span>
              <h2 className="title tg-element-title">
                Explore Our Latest Projects
              </h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="view-all-btn text-end mb-50">
              <a href="/project" className="btn">
                View All Projects
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="project-item wow fadeInUp" data-wow-delay=".2s">
              <div className="project-thumb collapse-anim">
                <img
                  src={require(`../../assets/img/project/project_img01.jpg`)}
                  onLoad={imageHandler}
                  alt=""
                />
              </div>
              <div className="project-content">
                <div className="left-side-content">
                  <span>Projects V1</span>
                  <h2 className="title">
                    <a href="/project-details">
                      Low Rise Building and Repair Roof
                    </a>
                  </h2>
                  <p className="collapse-anim">
                    There are many variations of passages of Lorem Ipsum ava
                    have suffered alteration in some form, by injected humour
                    which don't look even slightly believable.
                  </p>
                </div>
                <div className="project-link">
                  <a href="/project-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp" data-wow-delay=".3s">
              <div className="project-thumb collapse-anim">
                <img
                  src={require(`../../assets/img/project/project_img02.jpg`)}
                  onLoad={imageHandler}
                  alt=""
                />
              </div>
              <div className="project-content">
                <div className="left-side-content">
                  <span>Projects V2</span>
                  <h2 className="title">
                    <a href="/project-details">The World Class Roofing</a>
                  </h2>
                  <p className="collapse-anim">
                    There are many variations of passages of Lorem Ipsum ava
                    have suffered alteration in some form, by injected humour
                    which don't look even slightly believable.
                  </p>
                </div>
                <div className="project-link">
                  <a href="/project-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp" data-wow-delay=".4s">
              <div className="project-thumb collapse-anim">
                <img
                  src={require(`../../assets/img/project/project_img03.jpg`)}
                  onLoad={imageHandler}
                  alt=""
                />
              </div>
              <div className="project-content">
                <div className="left-side-content">
                  <span>Projects V3</span>
                  <h2 className="title">
                    <a href="/project-details">
                      Quality Control System Roofing
                    </a>
                  </h2>
                  <p className="collapse-anim">
                    There are many variations of passages of Lorem Ipsum ava
                    have suffered alteration in some form, by injected humour
                    which don't look even slightly believable.
                  </p>
                </div>
                <div className="project-link">
                  <a href="/project-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-item wow fadeInUp" data-wow-delay=".5s">
              <div className="project-thumb collapse-anim">
                <img
                  src={require(`../../assets/img/project/project_img04.jpg`)}
                  onLoad={imageHandler}
                  alt=""
                />
              </div>
              <div className="project-content">
                <div className="left-side-content">
                  <span>Projects V3</span>
                  <h2 className="title">
                    <a href="/project-details">
                      Low Rise Building and Repair Roof
                    </a>
                  </h2>
                  <p className="collapse-anim">
                    There are many variations of passages of Lorem Ipsum ava
                    have suffered alteration in some form, by injected humour
                    which don't look even slightly believable.
                  </p>
                </div>
                <div className="project-link">
                  <a href="/project-details">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectArea;
