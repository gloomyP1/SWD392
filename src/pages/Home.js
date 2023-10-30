import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import BlogCard2 from "../components/BlogCard2";
import BlogCard3 from "../components/BlogCard3";
import BlogCard4 from "../components/BlogCard4";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPPERCHARGED FOR PROS.</h4>
                  <h5>IpAD s13+</h5>
                  <p>From 20.000.000 </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sake</h4>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>nEW ARRIVAL</h4>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>nEW ARRIVAL</h4>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>nEW ARRIVAL</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servcies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over 500.000</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise offers</h6>
                    <p className="mb-0">Sale upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Air Force 1 MultiColor</h6>
                  </div>
                  <img src="images/af1-1.jpg " alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Air Force 1 Pink Pastel</h6>
                  </div>
                  <img src="images/af1-2.jpg " alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Vans</h6>
                  </div>
                  <img src="images/vans-3.jpg " alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Joker & Harley Quinn</h6>
                  </div>
                  <img src="images/vans-4.jpg " alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Gucci</h6>
                  </div>
                  <img src="images/gucci-5.jpg " alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>YeezYxOff-White</h6>
                  </div>
                  <img src="images/yzy-6.jpg " alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Vans Shark</h6>
                  </div>
                  <img src="images/vans-7.png " alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Adidas Carp</h6>
                  </div>
                  <img src="images/add-8.jpg " alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/yzy-seasame.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div class="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Yeezy SeaSame </h6>
                  <p>From 16.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/converse.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div class="famous-content position-absolute">
                  <h6>Converse Flowers </h6>
                  <p>From 1.500.000</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/af1-gucci.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div class="famous-content position-absolute">
                  <h6>Af1 x Gucci </h6>
                  <p>From 5.000.000</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/pink.jpg" className="img-fluid" alt="famous" />
                <div class="famous-content position-absolute">
                  <h6>Air Force 1 </h6>
                  <p>From 2.000.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      {/* <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section> */}
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/nike-1.jpg" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/adidas-2.jpg" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/puma-3.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/vans-4.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/gucci-5-5.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/balenciaga-6.jpg" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <div className="row">
              <div className="col-3">
                <BlogCard />
              </div>
              <div className="col-3">
                <BlogCard2 />
              </div>
              <div className="col-3">
                <BlogCard3 />
              </div>
              <div className="col-3">
                <BlogCard4 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
