// src/Components/Brands.jsx
import React from "react";
import './DesignYourHome.css'; // Asegúrate de definir los estilos necesarios en este archivo CSS

const brands = [
  { name: "Owens Corning", image: "https://iili.io/dxtK2HP.png", url: "https://roofvisualizer.owenscorning.com/#" },
  { name: "GAF", image: "https://iili.io/dxtKBWJ.png", url: "https://www.gaf.com/en-us/plan-design/design-your-roof" },
  { name: "Malarkey Roofing Products", image: "https://iili.io/dxtKJUB.webp", url: "https://www.malarkeyroofing.com/roof-designer/" },
  { name: "DaVinci Roofscapes", image: "https://iili.io/dxtKofR.webp", url: "https://davinci.renoworks.com/" },
  { name: "IKO", image: "https://iili.io/dxtKHlV.webp", url: "https://iko.chameleonpower.com/#" },
  { name: "CertainTeed", image: "https://iili.io/dxtKKDg.png", url: "https://colorview.certainteed.com/" },
];

const Brands = () => (
  <div id="brands-section" className="brands-container">
    <h1>Select one of the brands we work with</h1>
    <p>Select a brand to explore their roof and siding design tools. Click on any brand logo to be redirected to their official design tool, where you can visualize and plan your home's exterior.</p>
    <div className="brands-grid">
      {brands.map((brand) => (
        <a key={brand.name} href={brand.url} target="_blank" rel="noopener noreferrer" className="brand-card">
          <img src={brand.image} alt={brand.name} />
        </a>
      ))}
    </div>
  </div>
);

export default Brands;
