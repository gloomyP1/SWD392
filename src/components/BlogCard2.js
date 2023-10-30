import React from "react";
import { Link } from "react-router-dom";

const BlogCard2 = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog2.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2023</p>
          <h5 className="title">
            What are custom shoes? Reasons to customize shoes
          </h5>
          <p className="desc">
            You can simply understand custom shoes as you draw on your shoes
            according to your taste, inspiration, creativity with drawings or
            simply change the color of shoes. This process helps the look of
            your shoes change, from old shoes to a new pair of shoes and also
            expresses your personality.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard2;
