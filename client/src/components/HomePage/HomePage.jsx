import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rate } from "antd";
import "./styles.css";
import Common from "../CommonHeader/CommonHeader";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here (e.g., redirect to search results page)
    console.log("Searching for:", searchQuery);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1400 },
      items: 4, // Number of items to show at once
    },
    desktop: {
      breakpoint: { max: 1400, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  const testimonials = [
    {
      text: '"I love this online store! The products are amazing and the service is excellent."',
      author: "- John Doe",
    },
    {
      text: '"Great selection of products and easy to download. Highly recommended!"',
      author: "- Jane Smith",
    },
    {
      text: '"The quality of the digital products is top-notch! I\'ll definitely be back for more."',
      author: "- David Wilson",
    },
    {
      text: '"The quality of the digital products is top-notch! I\'ll definitely be back for more."',
      author: "- David Wilson",
    },
    {
      text: '"The quality of the digital products is top-notch! I\'ll definitely be back for more."',
      author: "- David Wilson",
    },
    {
      text: '"The quality of the digital products is top-notch! I\'ll definitely be back for more."',
      author: "- David Wilson",
    },
    {
      text: '"The quality of the digital products is top-notch! I\'ll definitely be back for more."',
      author: "- David Wilson",
    },
    {
      text: '"The quality of the digital products is top-notch! I\'ll definitely be back for more."',
      author: "- David Wilson",
    },
    // Add more testimonials here
  ];

  return (
    <div className="homepage">
      <Common />
      {/* Hero Section */}
      <section className="hero bg-white text-center py-5">
        <div
          className="container"
          style={{
            marginTop: "150px",
            position: "relative",
          }}
        >
          <h1 className="display-4">Downloadable Goods for You</h1>
          <p className="lead">
            Find the perfect digital products to elevate your life.
          </p>
          <a
            href="/categories"
            className="btn btn-primary btn-md"
            style={{
              backgroundColor: "#b37feb",
              borderColor: "#b37feb",
            }}
          >
            Shop Now
          </a>
        </div>
      </section>

      <section className="categories py-5">
        <div className="container" id="container">
          <h2 className="text-center mb-4">Categories</h2>
          <Carousel responsive={responsive}>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=eBooks"
                className="card-img-top"
                alt="eBooks"
              />
              <div className="card-body">
                <h5 className="card-title">eBooks</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Software"
                className="card-img-top"
                alt="Software"
              />
              <div className="card-body">
                <h5 className="card-title">Software</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Music"
                className="card-img-top"
                alt="Music"
              />
              <div className="card-body">
                <h5 className="card-title">Music</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Stock Images"
                className="card-img-top"
                alt="Stock Images"
              />
              <div className="card-body">
                <h5 className="card-title">Stock Images</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Stock Videos"
                className="card-img-top"
                alt="Stock Videos"
              />
              <div className="card-body">
                <h5 className="card-title">Stock Videos</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Stock Sounds"
                className="card-img-top"
                alt="Stock Sounds"
              />
              <div className="card-body">
                <h5 className="card-title">Stock Sounds</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Mini Games"
                className="card-img-top"
                alt="Mini Games"
              />
              <div className="card-body">
                <h5 className="card-title">Mini Games</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Video Editing Assets"
                className="card-img-top"
                alt="Video Editing Assets"
              />
              <div className="card-body">
                <h5 className="card-title">Video Editing Assets</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Web Design Templates"
                className="card-img-top"
                alt="Web Design Templates"
              />
              <div className="card-body">
                <h5 className="card-title">Web Design Templates</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Graphic Design Assets"
                className="card-img-top"
                alt="Graphic Design Assets"
              />
              <div className="card-body">
                <h5 className="card-title">Graphic Design Assets</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Courses"
                className="card-img-top"
                alt="Courses"
              />
              <div className="card-body">
                <h5 className="card-title">Courses</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Fonts"
                className="card-img-top"
                alt="Fonts"
              />
              <div className="card-body">
                <h5 className="card-title">Fonts</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Articles"
                className="card-img-top"
                alt="Articles"
              />
              <div className="card-body">
                <h5 className="card-title">Articles</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Wallpapers"
                className="card-img-top"
                alt="Wallpapers"
              />
              <div className="card-body">
                <h5 className="card-title">Wallpapers</h5>
                <a href="#" className="btn btn-outline-primary">
                  Explore
                </a>
              </div>
            </div>
            {/* Add more category cards here */}
          </Carousel>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="featured-products bg-white py-5" id="Feature">
        <div className="container">
          <h2 className="text-center mb-4">Featured Products</h2>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={5} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={5} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={5} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={4} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={4.5} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={5} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={4.5} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
            <div className="card mx-1">
              <img
                src="https://placehold.co/600x400/EEE/333?text=Product 1"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product Title 1</h5>
                <Rate allowHalf disabled defaultValue={4} />
                <p className="card-text">$19.99</p>
                <a href="/product/1" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>

            {/* Add more product cards here */}
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials py-5">
        <div className="container text-center">
          <h2 className="mb-4">What Our Customers Say</h2>
          <Carousel
            responsive={responsive}
            infinite={true} // Enable infinite loop
            autoPlay={true} // Enable autoplay
            autoPlaySpeed={5000} // Set autoplay speed (in milliseconds)
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-md-10 mb-6">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column">
                    <p className="card-text">{testimonial.text}</p>
                    <p className="card-text mt-auto">
                      <strong>{testimonial.author}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-dark text-light pt-5 pb-1"
        id="foot"
        style={{
          position: "relative",
        }}
      >
        {" "}
        {/* Added padding top */}
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/terms" className="text-light text-decoration-none">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-light text-decoration-none"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="text-light text-decoration-none">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: info@yourstore.com</li>
                <li>Phone: +1-555-123-4567</li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              style={{ visibility: "hidden" }}
            >
              <h5>Follow Us</h5>
              <div className="d-flex">
                {" "}
                {/* Use d-flex for better icon alignment */}
                <a href="#" className="text-light me-3">
                  <i
                    className="bi bi-facebook"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-light me-3">
                  <i
                    className="bi bi-twitter"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
                <a href="#" className="text-light">
                  <i
                    className="bi bi-instagram"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Subscribe to Our Newsletter</h5>
              <form className="d-flex">
                {" "}
                {/* Inline form for newsletter */}
                <input
                  className="form-control form-control-sm me-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  className="btn btn-outline-light btn-sm"
                  type="submit"
                  onClick={() => alert("Thank You!")}
                >
                  Go
                </button>
              </form>
            </div>
          </div>

          <div className="text-center mt-4">
            {" "}
            {/* Added margin top */}
            <p className="small">
              © {new Date().getFullYear()} Your Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
