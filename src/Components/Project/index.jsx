import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../Helpers/InnerPageTitle";
import FooterOne from "../Layouts/Footers/FooterOne";
import MainWid from "./MainWid";

function Project() {
  return (
    <>
      <HeaderThree />
      <InnerPageTitle
        title="Project"
        paths={[
          { name: "Home", path: "/" },
          { name: "Project", path: "/project" },
        ]}
      />
      <MainWid />
      <FooterOne />
    </>
  );
}

export default Project;
