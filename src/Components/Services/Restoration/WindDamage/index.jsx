import React from "react";
import HeaderThree from "../../../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../../../Helpers/InnerPageTitle";
import FooterOne from "../../../Layouts/Footers/FooterOne";
import BrandAreaWid from "../../../Common/BrandAreaWid";
import WindDamageServices from "./MainWid";

function WindDamageService() {
  return (
    <>
      <HeaderThree />
      <main>
        <InnerPageTitle
          title="Wind Damage Services"
          paths={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Wind Damage Services", path: "/services/wind-damage-services" },
          ]}
        />
        <WindDamageServices />
        <BrandAreaWid className="pt-0" />
      </main>
      <FooterOne />
    </>
  );
}

export default WindDamageService;
