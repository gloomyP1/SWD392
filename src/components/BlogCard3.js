import React from "react";
import { Link } from "react-router-dom";

const BlogCard3 = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog3.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">26 Dec, 2023 </p>
          <h5 className="title">The trend of custom shoes!</h5>
          <p className="desc">
            Custom shoes have long become a popular trend loved by young people
            around the world. The popularity of custom shoes is also recognized
            by the giants in the shoe industry also launching separate product
            lines for their customers to unleash their creativity on, such as
            the line: Nike by your custom shoes ( Nike) or Design your own shoes
            (Vans). This trend is especially popular among young people who are
            passionate about Streetwear style.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard3;
