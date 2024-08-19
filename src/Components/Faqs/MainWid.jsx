import React, { useState, useEffect } from "react";
import "./faq.css";
import faqData from "./faq.json"; // Asegúrate de que la ruta sea correcta
import faqImage from "./faq.png"; // Importar la imagen

function FaqWrapperArea() {
  const [activeCategory, setActiveCategory] = useState('Roofing Services');
  const [faqContent, setFaqContent] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    question: ""
  });

  useEffect(() => {
    if (faqData && faqData[activeCategory]) {
      setFaqContent(faqData[activeCategory]);
    } else {
      setFaqContent([]);
    }
  }, [activeCategory]);

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Form data submitted:", formData);
    setPopupVisible(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      setPopupVisible(false);
    }
  };

  return (
    <>
      <div id="faq-section" className="faq-area mt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="category-wrap">
                <div className="category-title">
                  <h3>FAQ Category</h3>
                </div>
                <div className="category-list">
                  <ul>
                    <li onClick={() => setActiveCategory('Roofing Services')}>
                      Roofing Services <i className="bi bi-arrow-right" />
                    </li>
                    <li onClick={() => setActiveCategory('Siding Services')}>
                      Siding Services <i className="bi bi-arrow-right" />
                    </li>
                    <li onClick={() => setActiveCategory('Copper Services')}>
                      Copper Services <i className="bi bi-arrow-right" />
                    </li>
                    <li onClick={() => setActiveCategory('Gutter Services')}>
                      Gutter Services <i className="bi bi-arrow-right" />
                    </li>
                    <li onClick={() => setActiveCategory('Painting Services')}>
                      Painting Services <i className="bi bi-arrow-right" />
                    </li>
                    <li onClick={() => setActiveCategory('Restoration Services')}>
                      Restoration Services <i className="bi bi-arrow-right" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="faq-form-wrap">
                <div className="faq-form-ques-box d-lg-flex align-items-center justify-content-between">
                  <div className="ques-content-wrap d-flex align-items-center">
                    <div className="ques-img">
                      <img src={faqImage} alt="questionIMG" />
                    </div>
                    <div className="ques-content">
                      <h3>ask any questions?</h3>
                      <p>Make use of a qualified tutor to get the answer</p>
                    </div>
                  </div>
                  <div className="faq-click-btn mobt-24">
                    <span className="faq-click" onClick={() => setPopupVisible(true)}>Ask Questions</span>
                  </div>
                </div>
                <div className="faq-title mt-60">
                  <h2>{activeCategory}</h2>
                </div>
                <div className="faq-wrap">
                  {faqContent && faqContent.length > 0 ? (
                    faqContent.map((item) => {
                      const uniqueId = item.id;
                      return (
                        <div className="faq-item" key={uniqueId} onClick={() => toggleQuestion(uniqueId)}>
                          <h5
                            className={`accordion-button ${activeQuestion === uniqueId ? '' : 'collapsed'}`}
                          >
                            {item.question}
                            <i className={`toggle-icon ${activeQuestion === uniqueId ? 'open' : ''}`}></i>
                          </h5>
                          <div
                            className={`accordion-collapse collapse ${activeQuestion === uniqueId ? 'show' : ''}`}
                          >
                            <div className="faq-body">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p>No FAQs available for this category.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {isPopupVisible && (
          <div className="popup-overlay" onClick={handleClickOutside}>
            <div className="popup">
              <button type="button" className="close-popup" onClick={() => setPopupVisible(false)}>×</button>
              <h2>Ask a Question</h2>
              <p>Feel free to ask any question you have, and one of our experts will get in touch with you to clarify any doubts on any topic.</p>
              <form onSubmit={handleSubmit}>
                <div className="contat-input">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="contat-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="contat-input">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="contat-input">
                  <textarea
                    name="question"
                    placeholder="Your Question"
                    value={formData.question}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="form-btn-wrap">
                  <button type="submit" className="form-btn">Send Your Question</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default FaqWrapperArea;
