import React from "react";
import { Link } from "react-router-dom";

const BlogCard4 = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog4.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">26 June, 2023</p>
          <h5 className="title">Anyone can customize their own shoes</h5>
          <p className="desc">
            Anyone can customize their own shoes, they just need to have
            passion, love this trend and want to assert their own personality.
            You no longer need to spend money sending shoes to custom shoe
            stores and can experience the feeling of creating your own shoes.
            Custom shoes actually do not require too much ingenuity or aesthetic
            ability, what is needed is just passion, creativity and "quality" to
            create your own "own".
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard4;
