import React, { useEffect } from 'react';
import './Hero';

const Banner = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.gethearth.com/script.js';
    script.id = 'hearth-script';
    script.setAttribute('data-orgid', '42562');
    script.setAttribute('data-partner', 'ga-castro-construction-llc');
    script.setAttribute('data-orgUuid', '2aae6549-37b2-494b-9bbe-74d0c3ace658');
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Hearth script loaded successfully');
    };

    script.onerror = () => {
      console.error('Error loading Hearth script');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="new-banner">
      <div className="new-banner-content">
        <div className="new-banner-text">
          <h1>
            Finance Your <br />
            Project with <br />
            <span className="highlight-ga">GA Castro Construction</span>
          </h1>
          <p>
            We work with Hearth to provide financing options for our clients.
            Using their services, you can get the funds you need for your project.
            Click "Get started" to learn more and apply for financing.
          </p>
          <div className="button-container">
            <a href="https://app.gethearth.com/partners/ga-castro-construction-llc/jeison/apply" className="new-banner-button">
              Get started
            </a>
            <a href="mailto:g.a.castroconstructionllc@gmail.com" className="new-banner-button email-button">
              Email us
            </a>
          </div>
        </div>
        <div className="new-banner-widget">
          <iframe id="hearth-lead-capture-widget" title="Hearth Lead Capture Widget"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;
