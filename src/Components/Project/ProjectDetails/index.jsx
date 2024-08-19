import React from "react";
import HeaderThree from "../../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../../Helpers/InnerPageTitle";
import FooterOne from "../../Layouts/Footers/FooterOne";
import MainWid from "./MainWid";
import BrandAreaWid from "../../Common/BrandAreaWid";

function ProjectDetails() {
  return (
    <>
      <HeaderThree />
      <InnerPageTitle
        title="Project Details"
        paths={[
          { name: "Home", path: "/" },
          { name: "Project Details", path: "/project-details" },
        ]}
      />
      <MainWid />
      <BrandAreaWid className="pt-0" />
      <FooterOne />
    </>
  );
}

export default ProjectDetails;
