import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import NewsLetterArea from "../HomeOne/NewsLetterArea";
import Reviews from "../Review/reviews";
import BrandAreaWid from "../Common/BrandAreaWid";
import Hero from "./Hero"; // Importa el componente Hero
import Brands from "./Brands"; // Importa el componente Brands
import ProjectArea from "../HomeThree/ProjectArea";

function DesignYourHome() {
  return (
    <>
      <HeaderThree />
      <main>
        <Hero /> {/* Incluye el componente Hero */}
        <Brands/>
        
        <ProjectArea />
        <Reviews />
        <BrandAreaWid />
        <NewsLetterArea />
      </main>
      <FooterOne />
    </>
  );
}

export default DesignYourHome;
