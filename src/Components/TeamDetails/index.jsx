import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import InnerPageTitle from "../Helpers/InnerPageTitle";
import MainWid from "./MainWid";
import BrandAreaWid from "../Common/BrandAreaWid";

function index() {
  return (
    <>
      <HeaderThree />
      <InnerPageTitle
        title="Team Details"
        paths={[
          { name: "Home", path: "/" },
          { name: "Team Details", path: "/team-details" },
        ]}
      />
      <MainWid />
      <BrandAreaWid className="pt-0" />
      <FooterOne />
    </>
  );
}

export default index;
