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
                  alt="Roof Inspection Guide"
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
                <h2 className="title">Roof Inspection Guide</h2>
                <p>
                  Regular roof inspections are essential for maintaining the integrity of your home and preventing costly repairs. In this guide, we'll walk you through the steps to perform a thorough roof inspection and identify common issues.
                </p>
                <h3 className="subtitle">Why Roof Inspections Are Important</h3>
                <p>
                  Roof inspections help detect potential problems early, preventing minor issues from becoming major repairs. Regular inspections can extend the life of your roof, enhance your home's safety, and maintain its value.
                </p>
                <h3 className="subtitle">Tools You'll Need</h3>
                <p>
                  Before you start, gather the necessary tools:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Ladder
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Binoculars
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Flashlight
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Work gloves
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Notebook and pen
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Camera or smartphone
                  </li>
                </ul>
                <h3 className="subtitle">Exterior Inspection</h3>
                <p>
                  Start with a visual inspection of your roof's exterior:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Check for missing, cracked, or curling shingles. These can indicate aging or damage.
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
                  <li>
                    <i className="fas fa-check-circle"></i>Use binoculars to inspect hard-to-reach areas and the overall condition of the roof.
                  </li>
                </ul>
                <h3 className="subtitle">Interior Inspection</h3>
                <p>
                  Next, inspect the interior of your home for signs of roof damage:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Check the attic for signs of leaks, such as water stains, mold, or damp insulation.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Look for any light coming through the roof, which can indicate holes or gaps.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Inspect the attic ventilation to ensure it's functioning correctly and not blocked.
                  </li>
                </ul>
                <h3 className="subtitle">Document Your Findings</h3>
                <p>
                  Take detailed notes and photos of any issues you find during your inspection. This documentation will be useful if you need to hire a professional for repairs or file an insurance claim.
                </p>
                <h3 className="subtitle">When to Call a Professional</h3>
                <p>
                  While many minor issues can be fixed with DIY solutions, certain problems require professional expertise:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Extensive damage or missing shingles
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Significant leaks or water damage
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Structural issues or sagging
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Damage to flashing or gutters that affect the roof's integrity
                  </li>
                </ul>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Roof Inspection"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Regular roof inspections can help maintain your home's integrity and prevent costly repairs. Here are some key points to remember:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Inspect your roof twice a year and after major storms.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Use binoculars for hard-to-reach areas.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Document any issues with photos and notes.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Call a professional for significant damage or repairs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, regular roof inspections are crucial for identifying potential issues early and maintaining the overall health of your home. By following this guide, you can perform thorough inspections and address any problems promptly.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#RoofInspection</a>
                          </li>
                          <li>
                            <a href="#">#HomeMaintenance</a>
                          </li>
                          <li>
                            <a href="#">#Roofing</a>
                          </li>
                          <li>
                            <a href="#">#DIYProjects</a>
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
