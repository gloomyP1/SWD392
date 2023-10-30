import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img
            src="images/blogshoes.jpg"
            className="img-fluid w-100"
            alt="blog"
          />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec, 2022</p>
          <h5 className="title">A beautiful day with a designer!</h5>
          <p className="desc">
            "The shoes created from the creativity of the designers are not only
            products, but also exceptional works of art."
          </p>
          <Link to="/blog/:id" className="button">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
