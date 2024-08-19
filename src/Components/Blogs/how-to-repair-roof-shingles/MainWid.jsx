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
import Sidebar from "./Sidebar";


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
                  alt="Repair Roof Shingles"
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
                <h2 className="title">How to Repair Roof Shingles Blown Off by Storms</h2>
                <p>
                  Storms can cause significant damage to your roof, especially blowing off shingles. If you’re dealing with this issue, follow these steps to repair your roof shingles and prevent further damage.
                </p>
                <h3 className="subtitle">Identify the Damage</h3>
                <p>
                  Before starting any repairs, assess the extent of the damage. Check for missing or damaged shingles and inspect the underlying roof structure for any signs of water damage or rot.
                </p>
                <blockquote>
                  <p>
                    "Regular roof maintenance can save homeowners a lot of money in the long run by preventing major repairs."
                  </p>
                  <cite>John Doe, Roofing Expert</cite>
                </blockquote>
                <h3 className="subtitle">Gather Necessary Tools and Materials</h3>
                <p>
                  To repair your roof shingles, you will need a hammer, roofing nails, a pry bar, replacement shingles, and roofing sealant. Make sure you have everything ready before starting the repair process.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details021.jpg`)}
                        alt="Roof Repair Tools"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Proper tools and materials are essential for a successful roof repair. Invest in quality products to ensure the longevity of your repairs.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Hammer and roofing nails
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Pry bar
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Replacement shingles
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Roofing sealant
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="subtitle">Remove Damaged Shingles</h3>
                <p>
                  Carefully remove the damaged shingles using the pry bar. Be cautious not to damage the surrounding shingles. Remove any remaining nails or debris to ensure a clean surface for the new shingles.
                </p>
                <h3 className="subtitle">Install New Shingles</h3>
                <p>
                  Place the new shingles in position and secure them with roofing nails. Apply roofing sealant to the edges of the shingles to create a waterproof barrier and prevent future leaks.
                </p>
                <p>
                  Regular maintenance and timely repairs are crucial for extending the life of your roof. If you are unsure about performing the repairs yourself, consider hiring a professional roofing service.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#RoofRepair</a>
                          </li>
                          <li>
                            <a href="#">#ShingleRepair</a>
                          </li>
                          <li>
                            <a href="#">#StormDamage</a>
                          </li>
                          <li>
                            <a href="#">#RoofMaintenance</a>
                          </li>
                        </ul>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#ConnecticutRoofing</a>
                          </li>
                          <li>
                            <a href="#">#NewHavenRoofing</a>
                          </li>
                          <li>
                            <a href="#">#FairfieldRoofing</a>
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
