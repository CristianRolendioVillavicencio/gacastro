import React from "react";
import HeaderThree from "../../../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../../../Helpers/InnerPageTitle";
import FooterOne from "../../../Layouts/Footers/FooterOne";
import BrandAreaWid from "../../../Common/BrandAreaWid";
import RoofingServices from "./MainWid";

function ServiceDetails() {
  return (
    <>
      <HeaderThree />
      <main>
        <InnerPageTitle
          title="Roofing Service Details"
          paths={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Service Details", path: "/services/services-details" },
          ]}
        />
        <RoofingServices/>
        <BrandAreaWid className="pt-0" />
      </main>
      <FooterOne />
    </>
  );
}

export default ServiceDetails;
