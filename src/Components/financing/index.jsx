import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import NewsLetterArea from "../HomeOne/NewsLetterArea";
import Reviews from "../Review/reviews";
import BrandAreaWid from "../Common/BrandAreaWid";
import Hero from "./Hero"; // Importa el componente Hero
import HowHearthWorks from "./HowHearthWorks"; // Importa el componente HowHearthWorks
import ServiceArea from "../HomeOne/ServiceArea";
import ProjectArea from "../HomeThree/ProjectArea";

function Financing() {
  return (
    <>
      <HeaderThree />
      <main>
        <Hero /> {/* Incluye el componente Hero */}
        <HowHearthWorks /> {/* Incluye el componente HowHearthWorks */}
        <ServiceArea/>
        <ProjectArea />
        <Reviews />
        <BrandAreaWid />
        <NewsLetterArea />
      </main>
      <FooterOne />
    </>
  );
}

export default Financing;
