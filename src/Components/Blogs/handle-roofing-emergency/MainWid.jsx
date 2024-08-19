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
                  alt="Roofing Emergency"
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
                <h2 className="title">How to Handle a Roofing Emergency</h2>
                <p>
                  A roofing emergency can occur at any time, often without warning. Knowing how to handle such a situation can save you time, money, and prevent further damage to your home. In this blog, we will discuss the steps you should take when facing a roofing emergency.
                </p>
                <h3 className="subtitle">Identify the Problem</h3>
                <p>
                  The first step in handling a roofing emergency is to identify the problem. Common issues include leaks, missing shingles, or damage caused by storms. Assess the extent of the damage from a safe location, such as the ground or through a window.
                </p>
                <h3 className="subtitle">Ensure Safety</h3>
                <p>
                  Your safety and that of your family should always come first. If the damage is severe, such as a large hole in the roof, evacuate the affected area and seek shelter in a safe part of your home or at a neighbor's house.
                </p>
                <h3 className="subtitle">Temporary Fixes</h3>
                <p>
                  If it is safe to do so, you can make temporary repairs to minimize damage. Use a tarp or heavy plastic sheeting to cover the affected area and prevent water from entering your home. Secure the tarp with roofing nails or heavy objects to keep it in place.
                </p>
                <h3 className="subtitle">Document the Damage</h3>
                <p>
                  Take photos or videos of the damage as soon as possible. This documentation will be useful when filing an insurance claim and can help roofing professionals assess the extent of the repairs needed.
                </p>
                <h3 className="subtitle">Contact a Professional Roofer</h3>
                <p>
                  Reach out to a professional roofing contractor as soon as possible. Provide them with details about the damage and any temporary fixes you have made. A qualified roofer will be able to assess the situation, provide an estimate, and carry out the necessary repairs.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Roofing Emergency Fixes"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Handling a roofing emergency promptly can prevent further damage to your home and save you money in the long run. Here are some key points to remember:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Identify the problem quickly and accurately.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Ensure the safety of everyone in your home.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Make temporary repairs if it is safe to do so.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Document the damage thoroughly.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Contact a professional roofer for permanent repairs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, being prepared and knowing the steps to take during a roofing emergency can make a significant difference. Always prioritize safety and seek professional help to ensure your roof is properly repaired.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#RoofingEmergency</a>
                          </li>
                          <li>
                            <a href="#">#RoofRepair</a>
                          </li>
                          <li>
                            <a href="#">#EmergencyRoofing</a>
                          </li>
                          <li>
                            <a href="#">#HomeSafety</a>
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
