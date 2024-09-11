import React from "react";
import HeaderOne from "../Layouts/Headers/HeaderOne";
import Hero from "./Hero";
import FeatureArea from "./FeatureArea";
import ServiceArea from "./ServiceArea";
import AboutArea from "./AboutArea";
import ProjectArea from "./ProjectArea";
import TeamArea from "./TeamArea";
import FunFact from "./FunFact";
import TestimonialArea from "./TestimonialArea";
import Blogs from "./Blogs";
import FooterOne from "../Layouts/Footers/FooterOne";

function HomeOne() {
  return (
    <>
      <HeaderOne />
      <main>
        <Hero />
        <FeatureArea />
        <AboutArea />
        <ServiceArea className="services-area" />
        <ProjectArea />
        <TeamArea />
        <FunFact />
        <TestimonialArea />
        <Blogs />
      </main>
      <FooterOne />
    </>
  );
}

export default HomeOne;
