import React from "react";
import FooterOne from "../Layouts/Footers/FooterOne";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import InnerPageTitle from "../Helpers/InnerPageTitle";
import AboutArea from "../HomeOne/AboutArea";
import HistoryArea from "./HistoryArea";
import TeamArea from "../HomeOne/TeamArea";
import Reviews from "../Review/reviews";
import BrandAreaWid from "../Common/BrandAreaWid";

function index() {
  return (
    <>
      <HeaderThree />
      <InnerPageTitle
        title="About Us"
        paths={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <AboutArea className="pt-120" />
      <HistoryArea />
      <div
        className="area-bg-five"
        style={{
          backgroundImage: `url(${require("../../assets/img/bg/area_bg05.jpg")})`,
        }}
      >
        <TeamArea className="pt-0" />
      
      </div>
      <Reviews />
      <BrandAreaWid />
      <FooterOne />
    </>
  );
}

export default index;
