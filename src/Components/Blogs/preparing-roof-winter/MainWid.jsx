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
                  alt="Preparing Roof for Winter"
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
                <h2 className="title">Preparing Your Roof for Winter</h2>
                <p>
                  As winter approaches, it's crucial to prepare your roof to withstand the harsh weather conditions. Proper preparation can prevent costly damage and ensure your home remains safe and warm. In this blog, we'll cover essential steps to get your roof ready for winter.
                </p>
                <h3 className="subtitle">Inspect Your Roof</h3>
                <p>
                  Start by conducting a thorough inspection of your roof. Look for any signs of damage such as missing or broken shingles, cracks, or sagging areas. Check for leaks or water stains on the ceiling inside your home, which could indicate roof damage.
                </p>
                <h3 className="subtitle">Clean the Gutters</h3>
                <p>
                  Clean gutters are essential for preventing ice dams and ensuring proper drainage. Remove leaves, twigs, and other debris from your gutters and downspouts. Consider installing gutter guards to keep debris out and maintain proper water flow.
                </p>
                <h3 className="subtitle">Trim Overhanging Branches</h3>
                <p>
                  Overhanging branches can damage your roof during winter storms. Trim any branches that hang over your roof to prevent them from breaking off and causing damage. This also helps reduce the accumulation of leaves and debris on your roof and in your gutters.
                </p>
                <h3 className="subtitle">Check Attic Insulation</h3>
                <p>
                  Proper attic insulation is crucial for maintaining a consistent temperature inside your home and preventing ice dams. Ensure your attic is well-insulated and ventilated to keep warm air from escaping and cold air from entering.
                </p>
                <h3 className="subtitle">Fix Any Existing Damage</h3>
                <p>
                  Address any existing roof damage before winter sets in. Repair or replace missing or damaged shingles, fix leaks, and ensure flashing is secure. It's best to hire a professional roofer for these repairs to ensure they are done correctly.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Winter Roof Preparation"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Taking the time to prepare your roof for winter can save you from significant headaches and expenses down the line. Here are some additional tips:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Check for proper attic ventilation to prevent moisture buildup.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Ensure your roof has a watertight seal around vents, chimneys, and skylights.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Inspect and replace weather stripping around doors and windows to improve energy efficiency.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Schedule a professional roof inspection if you are unsure about the condition of your roof.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, preparing your roof for winter involves thorough inspection, cleaning, and addressing any existing damage. By taking these steps, you can ensure your roof is ready to handle the winter weather and keep your home safe and comfortable.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#WinterRoofPreparation</a>
                          </li>
                          <li>
                            <a href="#">#RoofMaintenance</a>
                          </li>
                          <li>
                            <a href="#">#HomeImprovement</a>
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
