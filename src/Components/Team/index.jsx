import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import InnerPageTitle from "../Helpers/InnerPageTitle";
import MainWid from "./MainWid";

function index() {
  return (
    <>
      <HeaderThree />
      <InnerPageTitle
        title="Team"
        paths={[
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
        ]}
      />
      <MainWid />
      <FooterOne />
    </>
  );
}

export default index;
