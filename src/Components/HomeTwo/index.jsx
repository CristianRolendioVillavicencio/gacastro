import React from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import Hero from "./Hero";
import FeatureArea from "./FeatureArea";
import AboutArea from "./AboutArea";
import MultipleArea from "./MultipleArea";
import SupportArea from "./SupportArea";
import MultipleAreaTwo from "./MultipleAreaTwo";
import TeamArea from "./TeamArea";
import FunFact from "../HomeOne/FunFact";
import FaqArea from "./FaqArea";
import BlogArea from "./BlogArea";
import FooterOne from "../Layouts/Footers/FooterOne";
import NewsLetterArea from "../HomeOne/NewsLetterArea";

function index() {
  return (
    <>
      <HeaderThree className="menu-area-two" />
      <main>
        <Hero />
        <FeatureArea />
        <AboutArea />
        <MultipleArea />
        <SupportArea />
        <MultipleAreaTwo />
        <TeamArea />
        <FunFact />
        <FaqArea />
        <BlogArea />
        <NewsLetterArea />
      </main>
      <FooterOne />
    </>
  );
}

export default index;
