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
                  alt="Preventative Roof Maintenance"
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
                <h2 className="title">Preventative Roof Maintenance</h2>
                <p>
                  Regular roof maintenance is essential for prolonging the life of your roof and preventing costly repairs. In this blog, we'll discuss key preventative maintenance tasks that can help keep your roof in excellent condition and protect your home from the elements.
                </p>
                <h3 className="subtitle">Inspect Your Roof Regularly</h3>
                <p>
                  Regular inspections are crucial for identifying potential issues before they become major problems. Check your roof at least twice a year, preferably in the spring and fall, and after any severe weather events. Look for signs of damage such as missing or cracked shingles, leaks, or sagging areas.
                </p>
                <h3 className="subtitle">Clean Your Gutters</h3>
                <p>
                  Clogged gutters can lead to water damage and roof leaks. Ensure your gutters are clean and free of debris such as leaves, twigs, and dirt. Consider installing gutter guards to help prevent debris from accumulating and to keep water flowing freely.
                </p>
                <h3 className="subtitle">Trim Overhanging Branches</h3>
                <p>
                  Trees with branches that hang over your roof can pose a risk during storms. Trim any overhanging branches to prevent them from falling and damaging your roof. This also helps reduce the amount of debris that falls onto your roof and into your gutters.
                </p>
                <h3 className="subtitle">Check for Moss and Algae</h3>
                <p>
                  Moss and algae can cause significant damage to your roof if left unchecked. Inspect your roof for any signs of moss or algae growth and remove them using a mixture of water and mild detergent. You can also install zinc or copper strips to help prevent future growth.
                </p>
                <h3 className="subtitle">Inspect and Repair Flashing</h3>
                <p>
                  Flashing is the material used to seal and protect areas of the roof where it meets walls, chimneys, and other structures. Inspect the flashing regularly for any signs of damage or wear and repair or replace it as needed to prevent leaks.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Roof Maintenance"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Implementing these preventative maintenance tasks can help extend the life of your roof and prevent costly repairs. Here are some additional tips:
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
                  In conclusion, regular preventative maintenance is key to ensuring your roof remains in good condition and protecting your home from the elements. By performing these tasks, you can avoid costly repairs and extend the life of your roof.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#RoofMaintenance</a>
                          </li>
                          <li>
                            <a href="#">#HomeImprovement</a>
                          </li>
                          <li>
                            <a href="#">#Roofing</a>
                          </li>
                          <li>
                            <a href="#">#PreventativeCare</a>
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
