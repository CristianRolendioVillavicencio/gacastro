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
                  alt="Roof Repair After a Storm"
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
                <h2 className="title">Roof Repair After a Storm</h2>
                <p>
                  Storms can cause significant damage to your roof, leading to leaks and structural issues if not addressed promptly. Knowing how to inspect and repair your roof after a storm is crucial for maintaining your home's integrity. In this blog, we'll guide you through the steps to take for effective roof repair after a storm.
                </p>
                <h3 className="subtitle">Safety First</h3>
                <p>
                  Before inspecting your roof, ensure it is safe to do so. Look for any hazards such as downed power lines or unstable structures. If the damage is extensive, it is best to call a professional roofer to conduct the inspection safely.
                </p>
                <h3 className="subtitle">Initial Roof Inspection</h3>
                <p>
                  Start with a visual inspection from the ground. Look for obvious signs of damage such as missing or broken shingles, sagging areas, or debris on the roof. Use binoculars to get a closer look at hard-to-reach areas.
                </p>
                <h3 className="subtitle">Detailed Roof Inspection</h3>
                <p>
                  If it is safe to climb onto your roof, conduct a detailed inspection. Here’s what to check for:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Check for missing, cracked, or curled shingles.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Inspect the flashing around chimneys, vents, and skylights for any damage.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Look for signs of water infiltration, such as water stains or mold growth.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Examine gutters and downspouts for blockages and ensure they are securely attached.
                  </li>
                </ul>
                <h3 className="subtitle">Temporary Fixes</h3>
                <p>
                  While waiting for professional repairs, you can apply some temporary fixes to prevent further damage:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Cover any holes or missing shingles with a tarp to prevent water from entering your home.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Use roofing cement to seal small cracks or gaps temporarily.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Clear debris from gutters and downspouts to ensure proper drainage.
                  </li>
                </ul>
                <h3 className="subtitle">Permanent Repairs</h3>
                <p>
                  For long-term solutions, hire a professional roofer to perform permanent repairs:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Replace missing or damaged shingles to restore your roof's integrity.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Repair or replace damaged flashing to prevent leaks around chimneys, vents, and skylights.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Fix any structural damage to ensure your roof remains stable and secure.
                  </li>
                </ul>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Roof Repair"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Proper roof repair after a storm is essential to prevent further damage and maintain your home's integrity. Here are some additional tips:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Document all damage with photos and notes for insurance purposes.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Contact your insurance company to file a claim if the damage is extensive.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Schedule regular roof inspections to identify and address potential issues early.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, addressing roof damage promptly after a storm with both temporary and permanent solutions is crucial for protecting your home. Always prioritize safety and consider hiring a professional for significant repairs to ensure the job is done correctly.
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
                            <a href="#">#StormDamage</a>
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
