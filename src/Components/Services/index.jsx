import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../Helpers/InnerPageTitle";
import ServiceArea from "../HomeOne/ServiceArea";
import FooterOne from "../Layouts/Footers/FooterOne";
import ProjectArea from "../HomeThree/ProjectArea";
import Reviews from "../Review/reviews";
import BrandAreaWid from "../Common/BrandAreaWid";

function Services() {
  return (
    <>
      <HeaderThree />
      <main>
        <InnerPageTitle
          title="Services"
          paths={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]}
        />
        <ServiceArea className="inner-services-area pt-115 pb-90" />
        <ProjectArea />
        <Reviews />
        <BrandAreaWid />
      </main>
      <FooterOne />
    </>
  );
}

export default Services;
