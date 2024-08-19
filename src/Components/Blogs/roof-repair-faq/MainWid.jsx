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
                  alt="Roof Repair FAQ"
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
                <h2 className="title">Roof Repair FAQ</h2>
                <p>
                  Roof repairs can be daunting for many homeowners. Knowing the answers to common questions about roof repairs can help you feel more confident in maintaining your home. In this blog, we'll address some frequently asked questions about roof repair.
                </p>
                <h3 className="subtitle">1. How do I know if my roof needs repair?</h3>
                <p>
                  Signs that your roof may need repair include missing or damaged shingles, leaks, water stains on your ceiling or walls, sagging areas, and visible signs of wear and tear. Regular roof inspections can help identify issues early.
                </p>
                <h3 className="subtitle">2. Can I repair my roof myself?</h3>
                <p>
                  While some minor repairs can be done by homeowners with the right tools and knowledge, it is generally recommended to hire a professional roofer for significant repairs. Professionals have the experience and equipment to safely and effectively repair your roof.
                </p>
                <h3 className="subtitle">3. How much does roof repair cost?</h3>
                <p>
                  The cost of roof repair varies depending on the extent of the damage, the type of roofing material, and the region you live in. Minor repairs may cost a few hundred dollars, while major repairs can run into the thousands. It's best to get multiple quotes from reputable roofing contractors.
                </p>
                <h3 className="subtitle">4. How long do roof repairs take?</h3>
                <p>
                  The duration of roof repairs depends on the severity of the damage and the size of your roof. Minor repairs can often be completed in a few hours, while more extensive repairs may take a few days. Weather conditions can also impact the timeline.
                </p>
                <h3 className="subtitle">5. What are the most common roof repairs?</h3>
                <p>
                  Common roof repairs include replacing missing or damaged shingles, fixing leaks, repairing or replacing flashing, and addressing issues with gutters and downspouts. Regular maintenance can help prevent many common roofing problems.
                </p>
                <h3 className="subtitle">6. How can I prevent roof damage?</h3>
                <p>
                  Preventing roof damage involves regular maintenance and inspections. Keep your gutters clean, trim overhanging branches, inspect your roof after storms, and address any issues promptly. Ensuring proper attic ventilation can also help prevent damage.
                </p>
                <h3 className="subtitle">7. What should I do if my roof is leaking?</h3>
                <p>
                  If your roof is leaking, take immediate steps to minimize damage. Place buckets or containers to catch dripping water, cover furniture and belongings, and call a professional roofer as soon as possible. Temporary fixes, such as applying roofing cement or covering the area with a tarp, can help until permanent repairs are made.
                </p>
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
                          Understanding roof repair basics can help you maintain your roof and protect your home. Here are some additional tips:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Schedule regular roof inspections to catch issues early.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Invest in quality roofing materials for longer-lasting repairs.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Keep an eye on weather conditions that can affect your roof.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Consult with a professional roofer for expert advice and repairs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, understanding the common questions and answers about roof repair can help you be more prepared to maintain and repair your roof effectively. Always consider professional help for significant repairs to ensure the job is done safely and correctly.
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
                            <a href="#">#FAQ</a>
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
