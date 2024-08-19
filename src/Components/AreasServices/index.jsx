import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import NewsLetterArea from "../HomeOne/NewsLetterArea";
import Reviews from "../Review/reviews";
import BrandAreaWid from "../Common/BrandAreaWid";
import ProjectArea from "../HomeThree/ProjectArea";
import ServiceAreas from "./mapa"; // Importa el componente ServiceAreas


function AreasOfService() {
  return (
    <>
      <HeaderThree />
      <main>
      <ServiceAreas/>
      <BrandAreaWid />
        <ProjectArea />
        <Reviews />
        
        <NewsLetterArea />
      </main>
      <FooterOne />
    </>
  );
}

export default AreasOfService;
