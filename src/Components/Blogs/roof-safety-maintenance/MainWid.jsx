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
                  alt="Roof Safety Maintenance"
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
                <h2 className="title">Roof Safety Maintenance</h2>
                <p>
                  Maintaining the safety and integrity of your roof is crucial for protecting your home. Regular roof safety maintenance helps prevent accidents and costly repairs. In this blog, we'll cover essential roof safety maintenance tips to keep your roof in top condition.
                </p>
                <h3 className="subtitle">Regular Inspections</h3>
                <p>
                  Conducting regular roof inspections is key to identifying potential issues before they become major problems. Inspect your roof at least twice a year, preferably in the spring and fall, and after any severe weather events.
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Check for missing, cracked, or curling shingles.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Look for signs of moss, algae, or lichen growth, which can signal moisture problems.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Inspect flashing around chimneys, vents, and skylights for cracks or rust.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Examine gutters and downspouts for debris and ensure they are securely attached.
                  </li>
                </ul>
                <h3 className="subtitle">Cleaning Gutters and Downspouts</h3>
                <p>
                  Clogged gutters can cause water to back up and damage your roof. Clean your gutters and downspouts regularly to ensure proper drainage. Consider installing gutter guards to prevent debris buildup.
                </p>
                <h3 className="subtitle">Trimming Overhanging Branches</h3>
                <p>
                  Overhanging branches can damage your roof during storms and allow leaves and debris to accumulate. Trim back any branches that hang over your roof to prevent potential damage.
                </p>
                <h3 className="subtitle">Ensuring Proper Ventilation</h3>
                <p>
                  Proper attic ventilation is essential for maintaining the health of your roof. Good ventilation helps regulate temperature and moisture levels, preventing issues like mold growth and ice dams.
                </p>
                <h3 className="subtitle">Checking for Leaks</h3>
                <p>
                  Regularly check your attic and ceilings for signs of leaks, such as water stains, mold, or dampness. Address any leaks immediately to prevent further damage to your roof and home.
                </p>
                <h3 className="subtitle">Safety Precautions</h3>
                <p>
                  When performing roof maintenance, always prioritize safety. Use a sturdy ladder, wear non-slip shoes, and consider using a safety harness if you're working on a steep roof. If you're unsure or uncomfortable performing maintenance tasks, hire a professional roofer.
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
                          Regular roof safety maintenance is crucial for preventing accidents and prolonging the life of your roof. Here are some key points to remember:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Inspect your roof regularly for signs of damage.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Keep your gutters clean to ensure proper drainage.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Trim overhanging branches to prevent damage during storms.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Ensure proper attic ventilation to regulate temperature and moisture levels.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Check for leaks and address them promptly to prevent further damage.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Prioritize safety when performing roof maintenance tasks.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, regular roof safety maintenance is essential for protecting your home and preventing costly repairs. By following these tips and prioritizing safety, you can ensure your roof remains in top condition.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#RoofSafety</a>
                          </li>
                          <li>
                            <a href="#">#RoofMaintenance</a>
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
