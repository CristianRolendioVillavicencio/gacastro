import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import ProjectArea from "../HomeThree/ProjectArea";
import Reviews from "../Review/reviews";
import BannerLanding from "./BannerLanding";
import BrandAreaWid from "../Common/BrandAreaWid";
import FooterOne from "../Layouts/Footers/FooterOne";

function Index() {
  return (
    <>
      <HeaderThree />
      
      
      <BannerLanding />
      <BrandAreaWid />
      <ProjectArea />
      <Reviews />

     
      <FooterOne />
    </>
  );
}

export default Index;
