import React from "react";
import HeaderFour from "../Layouts/Headers/HeaderFour";
import FooterOne from "../Layouts/Footers/FooterOne";
import Hero from "./Hero";
import FeatureArea from "./FeatureArea";
import AboutArea from "../HomeTwo/AboutArea";
import ServiceArea from "./ServiceArea";
import ProjectArea from "./ProjectArea";
import MultipleArea from "../HomeTwo/MultipleArea";
import SupportArea from "../HomeTwo/SupportArea";
import TestimonialArea from "../About/TestimonialArea";
import Blogs from "../HomeOne/Blogs";
import NewsLetterArea from "../HomeOne/NewsLetterArea";

function HomeFour() {
  return (
    <>
      <HeaderFour />
      <main>
        <Hero />
        <FeatureArea />
        <AboutArea />
        <ServiceArea />
        <ProjectArea />
        <MultipleArea />
        <SupportArea />
        <TestimonialArea className="testimonial-area-three  pt-115" />
        <Blogs />
        <NewsLetterArea />
      </main>
      <FooterOne />
    </>
  );
}

export default HomeFour;
