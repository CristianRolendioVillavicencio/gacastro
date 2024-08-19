import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import BrandAreaWid from "../Common/BrandAreaWid";
import FooterOne from "../Layouts/Footers/FooterOne";
import MainWid from "./MainWid";
import Hero from "./Hero";


function Index() {
  return (
    <>
      <HeaderThree />
      <Hero
      />
      <MainWid />
      <BrandAreaWid />
      <FooterOne />
    </>
  );
}

export default Index;
