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
                  alt="Protecting Home from Tree Damage"
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
                <h2 className="title">Protecting Your Home from Tree Damage During Storms</h2>
                <p>
                  Storms can cause significant damage to your home, especially when trees are involved. Falling branches or entire trees can wreak havoc on your roof, windows, and overall structure. In this blog, we’ll discuss how to protect your home from tree damage during storms.
                </p>
                <h3 className="subtitle">Regular Tree Maintenance</h3>
                <p>
                  Regular maintenance is essential to keep your trees healthy and reduce the risk of damage during storms. This includes:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Pruning: Regularly prune dead or weak branches to prevent them from falling during high winds.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Inspection: Inspect trees for signs of disease or decay, which can weaken them and make them more susceptible to falling.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Professional Assessment: Have a professional arborist assess the health and stability of your trees, especially those close to your home.
                  </li>
                </ul>
                <h3 className="subtitle">Safe Tree Placement</h3>
                <p>
                  When planting new trees, consider their placement to minimize the risk of damage to your home. Follow these guidelines:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Distance: Plant trees at a safe distance from your home, ideally the tree's mature height away from the structure.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Type: Choose tree species that are known for their strong root systems and resistance to breakage.
                  </li>
                </ul>
                <h3 className="subtitle">Protective Measures Before a Storm</h3>
                <p>
                  Before a storm hits, take proactive measures to protect your home:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Secure Loose Objects: Remove or secure any loose objects in your yard that could be blown into your home or trees.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Trim Branches: Trim any overhanging branches that could break off and cause damage.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Reinforce Weak Trees: Use cables or braces to support weak or young trees and prevent them from falling.
                  </li>
                </ul>
                <h3 className="subtitle">After the Storm</h3>
                <p>
                  After a storm, inspect your property and take necessary actions:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Check for Damage: Inspect your trees and home for any damage. Look for broken branches, leaning trees, or structural damage to your home.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Professional Help: If you find any significant damage, contact a professional arborist or contractor to address the issues safely.
                  </li>
                </ul>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Tree Damage Prevention"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Protecting your home from tree damage during storms involves regular maintenance, proper tree placement, and taking preventative measures. Here are some key points to remember:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Regularly prune and inspect your trees.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Plant trees at a safe distance from your home.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Secure loose objects and trim branches before a storm.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Inspect your property for damage after a storm.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, taking steps to protect your home from tree damage can prevent costly repairs and ensure your home remains safe during storms. Regular maintenance and proactive measures are key to minimizing the risk of damage.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#TreeDamage</a>
                          </li>
                          <li>
                            <a href="#">#StormSafety</a>
                          </li>
                          <li>
                            <a href="#">#HomeMaintenance</a>
                          </li>
                          <li>
                            <a href="#">#TreeCare</a>
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
