import React from "react";
import HeaderThree from "../../../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../../../Helpers/InnerPageTitle";
import FooterOne from "../../../Layouts/Footers/FooterOne";
import BrandAreaWid from "../../../Common/BrandAreaWid";
import GutterServices from "./MainWid";

function ServiceDetails() {
  return (
    <>
      <HeaderThree />
      <main>
        <InnerPageTitle
          title="Gutter Services"
          paths={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Gutter Services", path: "/services/gutter-services" },
          ]}
        />
        <GutterServices/>
        <BrandAreaWid className="pt-0" />
      </main>
      <FooterOne />
    </>
  );
}

export default ServiceDetails;
