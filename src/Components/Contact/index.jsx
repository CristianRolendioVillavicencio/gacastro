import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../Helpers/InnerPageTitle";
import MainWid from "./MainWid";
import BrandAreaWid from "../Common/BrandAreaWid";
import FooterOne from "../Layouts/Footers/FooterOne";

function Index() {
  return (
    <>
      <HeaderThree />
      <InnerPageTitle
        title="Contact Us"
        paths={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <MainWid />
      <BrandAreaWid />
      <FooterOne />
    </>
  );
}

export default Index;
