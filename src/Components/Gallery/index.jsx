import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import Reviews from "../Review/reviews";
import BrandAreaWid from "../Common/BrandAreaWid";
import NewsLetterArea from "../HomeOne/NewsLetterArea";
import Gallery from "./GalleryPage";
import ProjectArea from "../HomeThree/ProjectArea";

function GalleryPage() {
  return (
    <>
      <HeaderThree />
      <main>
        
        <Gallery /> {/* Incluye el componente Gallery */}
        <ProjectArea /> {/* Incluye el componente ProjectArea */}
        <Reviews />
        <BrandAreaWid />
        <NewsLetterArea />
      </main>
      <FooterOne />
    </>
  );
}

export default GalleryPage;
