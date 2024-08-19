import React from "react";

function BlogArea() {
  return (
    <section className="blog-area blog-area-two pt-115 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our News</span>
              <h2 className="title">Read Our Latest News & Blog</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6">
            <div className="blog-post-item">
              <div className="blog-post-thumb">
                <a href="/blogs/blog">
                  <img
                    src={require(`../../assets/img/blog/blog_img01.jpg`)}
                    alt=""
                  />
                </a>
              </div>
              <div className="blog-post-content">
                <a href="/blogs" className="tag">
                  Quality Materials
                </a>
                <div className="blog-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-user"></i> By{" "}
                      <a href="/blogs/blog">Admin</a>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>23 Dec 2022
                    </li>
                  </ul>
                </div>
                <h2 className="title">
                  <a href="/blogs/blog">
                    Building worker help each other with at construction site
                  </a>
                </h2>
                <a href="/blogs/blog" className="link-btn">
                  Read More<i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-post-item">
              <div className="blog-post-thumb">
                <a href="/blogs/blog">
                  <img
                    src={require(`../../assets/img/blog/blog_img02.jpg`)}
                    alt=""
                  />
                </a>
              </div>
              <div className="blog-post-content">
                <a href="/blogs" className="tag">
                  House Roof Work
                </a>
                <div className="blog-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-user"></i> By{" "}
                      <a href="/blogs/blog">Admin</a>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>23 Dec 2022
                    </li>
                  </ul>
                </div>
                <h2 className="title">
                  <a href="/blogs/blog">
                    Full shot roofers working together with helmets
                  </a>
                </h2>
                <a href="/blogs/blog" className="link-btn">
                  Read More<i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="blog-post-item">
              <div className="blog-post-thumb">
                <a href="/blogs/blog">
                  <img
                    src={require(`../../assets/img/blog/blog_img03.jpg`)}
                    alt=""
                  />
                </a>
              </div>
              <div className="blog-post-content">
                <a href="/blogs" className="tag">
                  Construction Engineer
                </a>
                <div className="blog-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-user"></i> By{" "}
                      <a href="/blogs/blog">Admin</a>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>23 Dec 2022
                    </li>
                  </ul>
                </div>
                <h2 className="title">
                  <a href="/blogs/blog">
                    Hard hatswork at the heavy manufacturing factory industrial
                  </a>
                </h2>
                <a href="/blogs/blog" className="link-btn">
                  Read More<i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogArea;
