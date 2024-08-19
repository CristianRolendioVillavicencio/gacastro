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
                  src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                  alt="High-Quality Siding"
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
                <h2 className="title">Benefits of High-Quality Siding</h2>
                <p>
                  Investing in high-quality siding for your home offers numerous benefits that go beyond just aesthetic appeal. In this blog, we'll explore the advantages of choosing premium siding materials and how they can improve your home's overall value and performance.
                </p>
                <h3 className="subtitle">Enhanced Curb Appeal</h3>
                <p>
                  High-quality siding can dramatically improve your home's curb appeal, making it look more attractive and well-maintained. With a wide range of colors, textures, and styles available, you can choose siding that complements your home's architecture and reflects your personal taste.
                </p>
                <h3 className="subtitle">Increased Durability</h3>
                <p>
                  Premium siding materials are designed to withstand harsh weather conditions, including extreme temperatures, high winds, and heavy rainfall. This durability ensures that your home remains protected and looking great for years to come, reducing the need for frequent repairs and maintenance.
                </p>
                <h3 className="subtitle">Improved Energy Efficiency</h3>
                <p>
                  One of the significant benefits of high-quality siding is improved energy efficiency. Insulated siding provides an additional layer of protection that helps regulate your home's temperature, reducing heating and cooling costs. This energy efficiency not only saves you money but also contributes to a more comfortable living environment.
                </p>
                <h3 className="subtitle">Low Maintenance</h3>
                <p>
                  High-quality siding materials are often low maintenance, requiring less effort to keep them looking their best. Unlike wood siding, which may need regular painting or staining, materials like vinyl or fiber cement are resistant to pests, rot, and warping, making them easier to care for.
                </p>
                <h3 className="subtitle">Increased Home Value</h3>
                <p>
                  Installing high-quality siding can significantly increase your home's value. Potential buyers are often willing to pay more for a home that features durable, low-maintenance, and energy-efficient siding. This investment can provide a high return when it comes time to sell your property.
                </p>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details022.jpg`)}
                        alt="High-Quality Siding Benefits"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Choosing the right siding material is essential for maximizing these benefits. Consult with a professional to determine the best option for your home.
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Enhanced curb appeal
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Increased durability
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Improved energy efficiency
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Low maintenance
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Increased home value
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, high-quality siding offers numerous advantages that can enhance your home's appearance, durability, and energy efficiency. Investing in premium siding materials is a smart decision that can provide long-term benefits and increase your property's value.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#HighQualitySiding</a>
                          </li>
                          <li>
                            <a href="#">#SidingBenefits</a>
                          </li>
                          <li>
                            <a href="#">#HomeImprovement</a>
                          </li>
                          <li>
                            <a href="#">#EnergyEfficiency</a>
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
