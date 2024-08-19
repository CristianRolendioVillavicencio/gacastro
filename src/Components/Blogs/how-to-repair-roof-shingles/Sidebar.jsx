import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ setSelectedCategory }) {
  const blogTitles = [
    { title: "Quick Effective Solutions for Roof Leaks", route: "/quick-effective-solutions-roof-leaks" },
    { title: "Protecting Your Home from Tree Damage and Storms", route: "/protecting-home-tree-damage-storms" },
    { title: "Roof Repair Process", route: "/roof-repair-process" },
    { title: "Identify and Repair Hidden Siding Damage", route: "/identify-repair-hidden-siding-damage" },
    { title: "Preventative Roof Maintenance", route: "/preventative-roof-maintenance" },
    { title: "Choosing the Best Siding Material", route: "/choosing-best-siding-material" },
    { title: "Roof Repair After a Storm", route: "/roof-repair-after-storm" },
    { title: "Roof Leak Fix", route: "/roof-leak-fix" },
    { title: "Tips to Protect Your Home from Tree Damage", route: "/tips-protect-home-tree-damage" },
    { title: "Importance of Siding", route: "/importance-of-siding" },
    { title: "How to Spot Roof Problems", route: "/spot-roof-problems" },
    { title: "Roof Inspection Guide", route: "/roof-inspection-guide" },
    { title: "When to Replace Siding", route: "/replace-siding" },
    { title: "Preparing Your Roof for Winter", route: "/preparing-roof-winter" },
    { title: "How to Handle Roofing Emergencies", route: "/handle-roofing-emergencies" },
    { title: "Benefits of High-Quality Siding", route: "/benefits-high-quality-siding" },
    { title: "Roof Repair FAQ", route: "/roof-repair-faq" },
    { title: "Roof Safety and Maintenance", route: "/roof-safety-maintenance" }
  ];

  return (
    <aside className="Sidebar">
      <div className="blog-widget">
        <h4 className="widget-title">Blog Titles</h4>
        <div className="titles-list">
          <ul className="list-wrap">
            {blogTitles.map(blog => (
              <li key={blog.title}>
                <Link to={blog.route} onClick={() => setSelectedCategory(blog.title)}>
                  {blog.title}
                </Link>
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

      <div className="blog-widget widget-bg" >
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

export default Sidebar;
