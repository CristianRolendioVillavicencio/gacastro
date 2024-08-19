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
                  alt="How to Replace Siding"
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
                <h2 className="title">How to Replace Siding</h2>
                <p>
                  Replacing your home's siding is a significant project that can enhance its appearance and improve energy efficiency. Whether you're dealing with damaged siding or simply want a new look, knowing how to replace siding is essential. In this blog, we will guide you through the steps to replace your siding effectively.
                </p>
                <h3 className="subtitle">Assess the Condition of Your Siding</h3>
                <p>
                  Before starting the replacement process, assess the condition of your current siding. Look for signs of damage such as cracks, warping, or rot. Determine if you need to replace all the siding or just certain sections.
                </p>
                <h3 className="subtitle">Gather Necessary Tools and Materials</h3>
                <p>
                  Having the right tools and materials is crucial for a successful siding replacement. Here’s a list of what you’ll need:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>New siding panels
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Hammer and nails or a nail gun
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Pry bar
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Utility knife
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Measuring tape
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Chalk line
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Caulk and caulk gun
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Paint and paintbrush (if needed)
                  </li>
                </ul>
                <h3 className="subtitle">Remove the Old Siding</h3>
                <p>
                  Carefully remove the old siding using a pry bar. Start at the top and work your way down, being cautious not to damage the underlying structure. Dispose of the old siding properly.
                </p>
                <h3 className="subtitle">Inspect and Repair the Underlying Structure</h3>
                <p>
                  Once the old siding is removed, inspect the underlying structure for any damage. Repair any issues such as rot, mold, or structural damage before installing the new siding. This step is crucial for ensuring the longevity of your new siding.
                </p>
                <h3 className="subtitle">Install the New Siding</h3>
                <p>
                  Follow these steps to install the new siding:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Start at the bottom: Begin installing the new siding at the bottom of your home, working your way up. Ensure the first row is level and properly aligned.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Overlap panels: Overlap each siding panel according to the manufacturer’s instructions to ensure proper sealing and water resistance.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Nail securely: Use a hammer and nails or a nail gun to secure the siding panels in place. Be careful not to overdrive the nails, as this can cause damage.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Seal edges: Apply caulk around windows, doors, and corners to seal the edges and prevent water infiltration.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Paint if necessary: If your new siding requires painting, apply a high-quality exterior paint to protect the material and enhance its appearance.
                  </li>
                </ul>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Siding Replacement"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Properly replacing your siding can improve your home's curb appeal and protect it from the elements. Here are some additional tips to ensure success:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Measure accurately: Ensure all measurements are precise to avoid gaps and overlaps.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Follow manufacturer’s guidelines: Adhere to the specific instructions provided by the siding manufacturer for best results.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Consider professional help: If you are unsure about any step of the process, consult with a professional contractor to ensure the job is done correctly.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, replacing siding involves careful planning, proper tools, and attention to detail. By following these steps and tips, you can achieve a successful siding replacement project that enhances the appearance and durability of your home.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#SidingReplacement</a>
                          </li>
                          <li>
                            <a href="#">#HomeImprovement</a>
                          </li>
                          <li>
                            <a href="#">#DIYProjects</a>
                          </li>
                          <li>
                            <a href="#">#HomeRenovation</a>
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
