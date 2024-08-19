import React from "react";
import HeaderThree from "../../../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../../../Helpers/InnerPageTitle";
import FooterOne from "../../../Layouts/Footers/FooterOne";
import BrandAreaWid from "../../../Common/BrandAreaWid";
import CarpentryServices from "./MainWid";

function ServiceDetails() {
  return (
    <>
      <HeaderThree />
      <main>
        <InnerPageTitle
          title="Carpentry Services"
          paths={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Carpentry Services", path: "/services/carpentry-services" },
          ]}
        />
        <CarpentryServices/>
        <BrandAreaWid className="pt-0" />
      </main>
      <FooterOne />
    </>
  );
}

export default ServiceDetails;
