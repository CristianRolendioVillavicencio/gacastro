import React from "react";

function BlogSidebar({ setSelectedCategory }) {
  const categories = [
    { name: "All", count: 20 },
    { name: "Roof Repair", count: 5 },
    { name: "Siding Replacement", count: 2 },
    { name: "Storm Damage", count: 3 },
    { name: "Maintenance Tips", count: 1 },
    { name: "Emergency Services", count: 2 },
    { name: "Home Protection", count: 1 },
    { name: "Siding Repair", count: 1 },
    { name: "Siding Material", count: 1 },
    { name: "Winter Preparation", count: 1 },
    { name: "Siding Quality", count: 1 },
    { name: "Roof Inspection", count: 2 },
    { name: "Roof Safety", count: 1 },
  ];

  return (
    <aside className="blog-sidebar">
      <div className="blog-widget">
        <h4 className="widget-title">Categories</h4>
        <div className="categories-list">
          <ul className="list-wrap">
            {categories.map(category => (
              <li key={category.name}>
                <a href="#" onClick={() => setSelectedCategory(category.name)}>
                  {category.name} <span>({category.count})</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
     

      <div className="blog-widget">
        <h4 className="widget-title">Popular Tags</h4>
        <div className="tag-list-wrap">
          <ul className="list-wrap">
            <li><a href="#">Roof Repair</a></li>
            <li><a href="#">Siding Replacement</a></li>
            <li><a href="#">Storm Damage</a></li>
            <li><a href="#">Maintenance Tips</a></li>
            <li><a href="#">Emergency Services</a></li>
            <li><a href="#">Home Protection</a></li>
            <li><a href="#">Siding Repair</a></li>
            <li><a href="#">Siding Material</a></li>
            <li><a href="#">Winter Preparation</a></li>
            <li><a href="#">Siding Quality</a></li>
            <li><a href="#">Roof Inspection</a></li>
            <li><a href="#">Roof Safety</a></li>
          </ul>
        </div>
      </div>

      <div className="blog-widget widget-bg" style={{ backgroundImage: `url(${require("../../assets/img/blog/widget_bg.jpg")})` }}>
        <h4 className="widget-title">Need Help?</h4>
        <div className="sidebar-content">
          <h4 className="title">Protecting Your Home from Storm Damage</h4>
          <p>Contact us for professional assistance with any home repair needs.</p>
          <a href="/contact" className="btn btn-two">Contact Us</a>
        </div>
      </div>
    </aside>
  );
}

export default BlogSidebar;
