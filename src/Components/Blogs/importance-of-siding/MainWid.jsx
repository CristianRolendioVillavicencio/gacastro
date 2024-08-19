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
                  alt="Importance of Siding"
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
                <h2 className="title">The Importance of Siding for Your Home</h2>
                <p>
                  Siding plays a crucial role in protecting your home from the elements, enhancing its curb appeal, and improving energy efficiency. In this blog, we'll explore the various benefits of having quality siding installed on your home and why it is an essential component of your house's exterior.
                </p>
                <h3 className="subtitle">Protection from the Elements</h3>
                <p>
                  One of the primary functions of siding is to protect your home from the elements. It acts as a barrier against rain, wind, snow, and harsh sunlight, preventing moisture from penetrating the walls and causing structural damage. High-quality siding can withstand extreme weather conditions and keep your home safe and dry.
                </p>
                <h3 className="subtitle">Enhanced Curb Appeal</h3>
                <p>
                  Siding significantly contributes to the overall aesthetic appeal of your home. With a wide variety of colors, textures, and styles available, siding can transform the look of your house and increase its value. Whether you prefer a classic, modern, or rustic appearance, there's a siding option to suit your taste and complement your home's architecture.
                </p>
                <h3 className="subtitle">Improved Energy Efficiency</h3>
                <p>
                  Properly installed siding can improve your home's energy efficiency by providing an additional layer of insulation. This helps to regulate indoor temperatures, reducing the strain on your heating and cooling systems. As a result, you can enjoy lower energy bills and a more comfortable living environment throughout the year.
                </p>
                <h3 className="subtitle">Low Maintenance</h3>
                <p>
                  Many siding materials are designed to be low maintenance, requiring minimal upkeep to keep them looking their best. Vinyl and fiber cement siding, for example, are resistant to pests, rot, and warping, and they don't need to be painted or stained regularly. This means you can spend less time on maintenance and more time enjoying your home.
                </p>
                <h3 className="subtitle">Increased Home Value</h3>
                <p>
                  Investing in quality siding can significantly increase the value of your home. Potential buyers are often attracted to homes with well-maintained, durable siding, as it suggests the property has been well cared for. In addition, the enhanced curb appeal and improved energy efficiency that siding provides can make your home more appealing in the real estate market.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Siding Benefits"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Understanding the importance of siding can help you make informed decisions about maintaining and upgrading your home's exterior. Here are some key points to remember:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Protects your home from the elements
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Enhances curb appeal
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Improves energy efficiency
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Requires low maintenance
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Increases home value
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, siding is an essential component of your home's exterior that offers numerous benefits. From protection against the elements to enhancing curb appeal and increasing home value, quality siding is a worthwhile investment. If you're considering new siding or need to maintain your existing siding, consult with a professional to ensure the best results.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#Siding</a>
                          </li>
                          <li>
                            <a href="#">#HomeImprovement</a>
                          </li>
                          <li>
                            <a href="#">#EnergyEfficiency</a>
                          </li>
                          <li>
                            <a href="#">#CurbAppeal</a>
                          </li>
                          <li>
                            <a href="#">#HomeValue</a>
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
