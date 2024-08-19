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
                  alt="Roof Repair Process"
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
                <h2 className="title">Roof Repair Process</h2>
                <p>
                  Understanding the roof repair process can help you manage expectations and ensure your home is protected. From identifying the issue to completing the repairs, this guide will walk you through each step of the roof repair process.
                </p>
                <h3 className="subtitle">Step 1: Initial Inspection</h3>
                <p>
                  The first step in the roof repair process is a thorough inspection. A professional roofer will assess the condition of your roof, looking for signs of damage such as missing shingles, leaks, and structural issues. This inspection helps identify the scope of the repair work needed.
                </p>
                <h3 className="subtitle">Step 2: Damage Assessment</h3>
                <p>
                  After the initial inspection, the roofer will provide a detailed assessment of the damage. This includes identifying the cause of the damage and determining the best course of action for repairs. The assessment will also include an estimate of the repair costs.
                </p>
                <h3 className="subtitle">Step 3: Preparing for Repairs</h3>
                <p>
                  Before starting the repairs, the roofer will prepare the area. This involves clearing debris, securing the work area, and gathering the necessary materials and tools. Safety measures will be put in place to protect both the workers and your property.
                </p>
                <h3 className="subtitle">Step 4: Repairing the Roof</h3>
                <p>
                  The actual repair process will vary depending on the type and extent of the damage. Common repairs include:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Replacing Missing or Damaged Shingles: The roofer will remove damaged shingles and replace them with new ones.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Fixing Leaks: Leaks are repaired by sealing cracks, replacing flashing, and ensuring a watertight seal around vents, chimneys, and skylights.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Repairing Structural Damage: If the roof has structural damage, the roofer will reinforce or replace the damaged areas to restore stability.
                  </li>
                </ul>
                <h3 className="subtitle">Step 5: Clean-Up and Final Inspection</h3>
                <p>
                  Once the repairs are complete, the roofer will clean up the work area, removing any debris and ensuring your property is left in good condition. A final inspection will be conducted to ensure the repairs meet quality standards and that no issues remain.
                </p>
                <h3 className="subtitle">Step 6: Preventative Measures</h3>
                <p>
                  After the repair process, the roofer may recommend preventative measures to help extend the life of your roof. This can include regular inspections, maintenance tips, and advice on addressing potential issues before they become major problems.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Roof Repair Steps"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          The roof repair process involves several important steps to ensure your roof is properly fixed and your home is protected. Here are some key points to remember:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Regular inspections can help identify issues early.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Choose a reputable roofer with experience in handling the specific repairs needed.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Ensure clear communication with your roofer about the scope and cost of the repairs.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Consider preventative measures to maintain the health of your roof.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, understanding the roof repair process can help you navigate repairs with confidence and ensure your roof remains in good condition. Regular maintenance and prompt attention to issues can extend the life of your roof and protect your home.
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
                            <a href="#">#HomeMaintenance</a>
                          </li>
                          <li>
                            <a href="#">#Roofing</a>
                          </li>
                          <li>
                            <a href="#">#RepairProcess</a>
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
