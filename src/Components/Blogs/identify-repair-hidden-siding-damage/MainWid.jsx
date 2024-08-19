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
                  alt="Identify and Repair Hidden Siding Damage"
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
                <h2 className="title">How to Identify and Repair Hidden Siding Damage</h2>
                <p>
                  Siding damage is not always immediately visible. Hidden damage can occur beneath the surface, leading to serious issues if not addressed promptly. In this blog, we'll discuss how to identify and repair hidden siding damage to keep your home in top condition.
                </p>
                <h3 className="subtitle">Signs of Hidden Siding Damage</h3>
                <p>
                  Identifying hidden siding damage requires careful inspection. Here are some signs to look for:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Bubbling or Blistering: If you notice bubbling or blistering on your siding, it could indicate moisture trapped underneath.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Peeling Paint or Wallpaper Inside: This can be a sign that moisture has penetrated through the siding and is affecting your home's interior.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Mold or Mildew: The presence of mold or mildew on or around your siding suggests water infiltration.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Warping or Buckling: Warped or buckled siding may indicate that the underlying structure has been compromised by moisture.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Increased Energy Bills: Hidden siding damage can affect your home's insulation, leading to higher heating and cooling costs.
                  </li>
                </ul>
                <h3 className="subtitle">Inspecting for Hidden Damage</h3>
                <p>
                  Regular inspections can help identify hidden siding damage before it becomes a major problem. Here's how to conduct a thorough inspection:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Exterior Inspection: Walk around your home and inspect the siding for any signs of damage mentioned above. Pay close attention to areas near windows, doors, and corners.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Interior Inspection: Check the walls inside your home for peeling paint, wallpaper, or mold. These can be indicators of hidden siding damage.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Use a Moisture Meter: A moisture meter can help detect hidden moisture behind the siding. This tool is especially useful in identifying water infiltration issues.
                  </li>
                </ul>
                <h3 className="subtitle">Repairing Hidden Siding Damage</h3>
                <p>
                  Once you've identified hidden siding damage, it's important to repair it promptly to prevent further issues. Here are the steps to follow:
                </p>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Remove Damaged Siding: Carefully remove the damaged siding to expose the underlying structure. Be cautious not to damage the surrounding siding.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Address Underlying Issues: Inspect the exposed area for any structural damage, mold, or rot. Repair any issues before installing new siding.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Install New Siding: Replace the damaged siding with new material, ensuring it is properly sealed to prevent future moisture infiltration.
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Seal and Paint: Apply sealant to the edges of the new siding and paint it to match the rest of your home. This helps protect the siding and maintain your home's appearance.
                  </li>
                </ul>
                <div className="bd-inner-img-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require(`../../../assets/img/blog/blog_details02.jpg`)}
                        alt="Siding Damage Repair"
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="bd-inner-content">
                        <p>
                          Regular inspections and timely repairs are crucial for maintaining your home's siding and preventing hidden damage. Here are some key points to remember:
                        </p>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-check-circle"></i>Inspect your siding regularly for signs of hidden damage.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Use tools like moisture meters to detect issues early.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Address underlying issues before installing new siding.
                          </li>
                          <li>
                            <i className="fas fa-check-circle"></i>Ensure proper sealing and painting to protect the new siding.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  In conclusion, being proactive about inspecting and repairing hidden siding damage can save you from costly repairs and maintain the integrity of your home. If you suspect hidden damage, consider consulting with a professional to ensure thorough repairs.
                </p>
                <div className="blog-details-bottom">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags">
                        <h5 className="title">Tag:</h5>
                        <ul className="list-wrap">
                          <li>
                            <a href="#">#SidingDamage</a>
                          </li>
                          <li>
                            <a href="#">#HiddenDamage</a>
                          </li>
                          <li>
                            <a href="#">#HomeMaintenance</a>
                          </li>
                          <li>
                            <a href="#">#SidingRepair</a>
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
