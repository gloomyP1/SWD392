/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Singleblog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">A beautiful shoes</h3>
                <img
                  src="../../public/images/blogshoes.jpg"
                  className="img-fluid w-100"
                  alt="blog"
                />
                <p>
                  "The shoes created from the creativity of the designers are
                  not only products, but also exceptional works of art.""The
                  shoes created from the creativity of the designers are not
                  only products, but also exceptional works of art.""The shoes
                  created from the creativity of the designers are not only
                  products, but also exceptional works of art.""The shoes
                  created from the creativity of the designers are not only
                  products, but also exceptional works of art."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
