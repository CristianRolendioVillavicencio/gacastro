import React, { useState } from "react";
import HeaderThree from "../Layouts/Headers/HeaderThree";
import FooterOne from "../Layouts/Footers/FooterOne";
import MainWid from "./MainWid";
import BlogSidebar from "./BlogSidebar";
import Reviews from "../Review/reviews";


function Index() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <HeaderThree />
      
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <MainWid 
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              selectedCategory={selectedCategory}
            />
          </div>
          <div className="col-xl-4 col-lg-6 col-md-10">
            <BlogSidebar setSelectedCategory={setSelectedCategory} />
          </div>
        </div>
      </div>
      <Reviews />
      <FooterOne />
    </>
  );
}

export default Index;
