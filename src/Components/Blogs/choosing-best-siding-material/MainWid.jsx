import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import Sidebar from "../how-to-repair-roof-shingles/Sidebar";

function MainWid() {
  const shareUrl = 'https://www.gacastro.com'; // URL de tu página web
  const title = 'GA Castro Construction Blog';

  return (
    <section className="blog-details-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="blog-details-wrap">
              <div className="blog-details-thumb">
                <img
                  src={require(`../../../assets/img/blog/blog_details01.jpg`)}
                  alt="Choosing Best Siding Material"
                />
              </div>
              <div className="blog-details-content">
                <div className="blog-meta">
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-user"></i> By{" "}
                      <a href="/blogs/blog">Admin</a>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i>23 Dec 2022
                    </li>
                    <li>
                      <i className="far fa-comments"></i>05
                    </li>
                    <li>
                      <i className="far fa-eye"></i>1,526 VIEWS
                    </li>
                  </ul>
                </div>
                <h2 className="title">Choosing the Best Siding Material</h2>
                <p>
                  Selecting the right siding material for your home is a crucial decision that impacts its appearance, durability, and energy efficiency. In this blog, we will guide you through the different types of siding materials available and help you choose the best option for your home.
                </p>
                <h3 className="subtitle">Vinyl Siding</h3>
                <p>
                  Vinyl siding is a popular choice for many homeowners due to its affordability, low maintenance, and variety of styles and colors. It is resistant to moisture and insect damage, making it a durable option for different climates.
                </p>
                <h3 className="subtitle">Fiber Cement Siding</h3>
                <p>
                  Fiber cement siding is known for its exceptional durability and resistance to fire, moisture, and pests. It mimics the look of wood, stone, or brick, providing a high-end appearance without the high-end cost. However, it is heavier and may require professional installation.
                </p>
                <h3 className="subtitle">Wood Siding</h3>
                <p>
                  Wood siding offers a classic, natural look that is hard to beat. It can be painted or stained in various colors to match your home’s aesthetic. However, it requires regular maintenance to prevent rot, insect damage, and warping.
                </p>
                <h3 className="subtitle">Metal Siding</h3>
                <p>
                  Metal siding, including aluminum and steel, is durable and resistant to fire, rot, and insects. It is available in various styles and colors, offering a modern look. Metal siding is also low maintenance but can be prone to dents and scratches.
                </p>
                <h3 className="subtitle">Stone and Brick Veneer</h3>
                <p>
                  Stone and brick veneer siding provide a luxurious, timeless appearance. These materials are highly durable and resistant to fire and weather elements. However, they are more expensive and may require professional installation.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Siding Materials"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Choosing the right siding material depends on various factors, including your budget, climate, and desired aesthetic. Here are some key points to consider:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Budget: Determine how much you are willing to spend on siding materials and installation.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Climate: Consider the weather conditions in your area and choose a material that can withstand them.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Maintenance: Think about how much time and effort you are willing to invest in maintaining the siding.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Aesthetic: Choose a material that complements your home's architectural style and enhances its curb appeal.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, selecting the best siding material for your home involves evaluating various factors such as budget, climate, maintenance, and aesthetic preferences. Consult with a professional to help you make an informed decision and ensure proper installation.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#SidingMaterial</a>
                          </li>
                          <li>
                            <a href="#">#HomeImprovement</a>
                          </li>
                          <li>
                            <a href="#">#VinylSiding</a>
                          </li>
                          <li>
                            <a href="#">#FiberCementSiding</a>
                          </li>
                          <li>
                            <a href="#">#WoodSiding</a>
                          </li>
                          <li>
                            <a href="#">#MetalSiding</a>
                          </li>
                          <li>
                            <a href="#">#StoneBrickVeneer</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="blog-post-share">
                        <h5 className="title">Share:</h5>
                        <ul className="list-wrap">
                          <li>
                            <FacebookShareButton url={shareUrl} quote={title} className="share-button">
                              <FacebookIcon size={32} round />
                            </FacebookShareButton>
                          </li>
                          <li>
                            <TwitterShareButton url={shareUrl} title={title} className="share-button">
                              <TwitterIcon size={32} round />
                            </TwitterShareButton>
                          </li>
                          <li>
                            <LinkedinShareButton url={shareUrl} title={title} summary={title} source={shareUrl} className="share-button">
                              <LinkedinIcon size={32} round />
                            </LinkedinShareButton>
                          </li>
                          <li>
                            <WhatsappShareButton url={shareUrl} title={title} separator=":: " className="share-button">
                              <WhatsappIcon size={32} round />
                            </WhatsappShareButton>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="comment-respond">
                <h3 className="comment-reply-title">Write Your Comment</h3>
                <form className="comment-form" action="#">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="text" placeholder="Name *" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="email" placeholder="Email *" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="url" placeholder="Website*" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea name="message" placeholder="Comment *"></textarea>
                  </div>
                  <button type="submit" className="btn btn-two">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-10">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainWid;
