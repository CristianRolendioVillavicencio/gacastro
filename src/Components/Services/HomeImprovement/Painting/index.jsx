import React from "react";
import HeaderThree from "../../../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../../../Helpers/InnerPageTitle";
import FooterOne from "../../../Layouts/Footers/FooterOne";
import BrandAreaWid from "../../../Common/BrandAreaWid";
import PaintingServices from "./MainWid";

function ServiceDetails() {
  return (
    <>
      <HeaderThree />
      <main>
        <InnerPageTitle
          title="Painting Services"
          paths={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Painting Services", path: "/services/painting-services" },
          ]}
        />
        <PaintingServices/>
        <BrandAreaWid className="pt-0" />
      </main>
      <FooterOne />
    </>
  );
}

export default ServiceDetails;
