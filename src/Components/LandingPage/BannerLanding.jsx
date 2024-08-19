import React, { useEffect } from 'react';
import './Banner.css';

const BannerLanding = () => {
  useEffect(() => {
    // Cargar el script cuando el componente se monte
    const script = document.createElement('script');
    script.src = "https://widget.gorillaroofleads.com/index.js";
    script.async = true;
    script.onload = () => {
      if (window.EsRoofCalcWidget) {
        window.EsRoofCalcWidget.init();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="lbanner-container">
      <div className="lbanner-content">
        <h1>Get Your Instant Roof Quote</h1>
        <h2>Enter Your Address for an Instant Estimate</h2>
        <p>
          Simply enter your address to receive an instant quote on the cost of replacing your roof. Our easy-to-use tool provides accurate estimates based on your location and roof size.
        </p>
        
        <div className="es-roof-calc-widget" data-widgetdata='{"dealer_unique_id":"35051070e572e47d2c26c241ab88307f", "buttonText":"Get Instant Roof Quote!", "borderColor":"#ffffff","primaryColor":"#faa819", "fontsize": "18px", "fontFamily": "sans-serif", "fontWeight": "bold", "textColor": "#000000", "width":"280px", "animation":"bounce","padding":"15px 30px"}'></div>
      </div>
    </div>
  );
};

export default BannerLanding;
