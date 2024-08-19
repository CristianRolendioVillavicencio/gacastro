import React from "react";
import blogPosts from "./blogPostsData";

function MainWid({ currentPage, setCurrentPage, selectedCategory }) {
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts.flat()
    : blogPosts.flat().filter(post => post.tag === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / 6); // Asumiendo 6 posts por página

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const displayedPosts = filteredPosts.slice((currentPage - 1) * 6, currentPage * 6);

  return (
    <section className="inner-blog-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          {displayedPosts.map((post) => (
            <div className="col-lg-6 col-md-6" key={post.id}>
              <div className="blog-post-item">
                <div className="blog-post-thumb">
                  <a href={post.url}>
                    <img src={post.image} alt="" />
                  </a>
                </div>
                <div className="blog-post-content">
                  <a href={post.url} className="tag">{post.tag}</a>
                  <div className="blog-meta">
                    <ul className="list-wrap">
                      <li><i className="far fa-user"></i> By <a href={post.url}>Admin</a></li>
                      <li><i className="fas fa-calendar-alt"></i>{post.date}</li>
                    </ul>
                  </div>
                  <h2 className="title"><a href={post.url}>{post.title}</a></h2>
                  <a href={post.url} className="link-btn">Read More<i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-wrap mt-30">
          <nav aria-label="Page navigation example">
            <ul className="pagination list-wrap">
              <li className="page-item" onClick={handlePreviousPage}>
                <a className="page-link" href="#"><i className="fas fa-chevron-left"></i></a>
              </li>
              {[...Array(totalPages).keys()].map((_, index) => (
                <li 
                  className={`page-item ${currentPage === index + 1 ? "active" : ""}`} 
                  key={`page-${index + 1}`} 
                  onClick={() => setCurrentPage(index + 1)}
                >
                  <a className="page-link" href="#">{index + 1}</a>
                </li>
              ))}
              <li className="page-item" onClick={handleNextPage}>
                <a className="page-link" href="#"><i className="fas fa-chevron-right"></i></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default MainWid;
