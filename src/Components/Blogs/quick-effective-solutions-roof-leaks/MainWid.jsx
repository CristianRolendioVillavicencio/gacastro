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
                  alt="Quick and Effective Solutions for Roof Leaks"
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
                <h2 className="title">Quick and Effective Solutions for Roof Leaks</h2>
                <p>
                  Roof leaks can cause significant damage to your home if not addressed promptly. Knowing how to quickly and effectively fix a roof leak can save you time and money. In this blog, we'll explore some solutions for common roof leak issues.
                </p>
                <h3 className="subtitle">Identify the Source of the Leak</h3>
                <p>
                  The first step in addressing a roof leak is identifying its source. Look for water stains on your ceiling, walls, or attic. Follow the path of the water to locate the entry point on your roof. Common sources include damaged shingles, flashing, and vent pipes.
                </p>
                <h3 className="subtitle">Temporary Fixes</h3>
                <p>
                  If you can't get professional help immediately, here are some temporary solutions to minimize damage:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Use a Tarp: Cover the affected area with a tarp to prevent more water from entering. Secure it with roofing nails or heavy objects.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Apply Roofing Cement: Use roofing cement to seal cracks or gaps temporarily. Ensure the area is dry before applying.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Replace Damaged Shingles: If you have spare shingles, replace the damaged ones to prevent further leaks.
                  </li>
                </ul>
                <h3 className="subtitle">Permanent Repairs</h3>
                <p>
                  For a long-term solution, it's best to hire a professional roofer. Here are some common permanent repair methods:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Replace Shingles: Remove damaged shingles and replace them with new ones. Ensure they are properly aligned and sealed.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Repair Flashing: Damaged or corroded flashing can cause leaks. Replace the flashing around chimneys, vents, and skylights to ensure a watertight seal.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Seal Vent Pipes: Use a sealant to fix leaks around vent pipes. Ensure the area is dry before applying the sealant.
                  </li>
                </ul>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Roof Leak Repair"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Quick and effective roof leak solutions can prevent further damage and save you from costly repairs. Here are some additional tips:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Regularly inspect your roof for signs of damage.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Keep your gutters clean to ensure proper drainage.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Trim overhanging branches to prevent damage during storms.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Schedule regular professional roof inspections.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, addressing roof leaks promptly with quick and effective solutions is crucial for protecting your home. While temporary fixes can help in the short term, always consider professional repairs for long-lasting results.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#RoofLeaks</a>
                          </li>
                          <li>
                            <a href="#">#RoofRepair</a>
                          </li>
                          <li>
                            <a href="#">#HomeMaintenance</a>
                          </li>
                          <li>
                            <a href="#">#Roofing</a>
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
