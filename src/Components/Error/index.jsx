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
        title="Error Pages"
        paths={[
          { name: "Home", path: "/" },
          { name: "Error Page", path: "/error" },
        ]}
      />
      <MainWid />
      <FooterOne />
    </>
  );
}

export default index;
