import React from "react";
import HeaderThree from "../../../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../../../Helpers/InnerPageTitle";
import FooterOne from "../../../Layouts/Footers/FooterOne";
import BrandAreaWid from "../../../Common/BrandAreaWid";
import TreeDamageServices from "./MainWid";

function ServiceDetails() {
  return (
    <>
      <HeaderThree />
      <main>
        <InnerPageTitle
          title="Tree Damage Services"
          paths={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Tree Damage Services", path: "/services/tree-damage-services" },
          ]}
        />
        <TreeDamageServices />
        <BrandAreaWid className="pt-0" />
      </main>
      <FooterOne />
    </>
  );
}

export default ServiceDetails;

