

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';


function Slider() {
  return (
    <>
      
      <div className="tf-slideshow slider-home-2 slider-effect-fade position-relative">
        {/* Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="wrap-slider">
                <img
                  src="assets/images/slider/fashion-slideshow-04.jpg"
                  className="d-block w-100"
                  alt="fashion-slideshow-01"
                />
                <div className="box-content">
                  <div className="container">
                    <h1 className="fade-item fade-item-1">
                      Summer Style<br />Sensations
                    </h1>
                    <p className="fade-item fade-item-2">
                      Discover the hottest trends and must-have looks
                    </p>
                    <Link
                      to="/shop"
                      className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                    >
                      <span>Shop collection</span>
                      <i className="icon icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="wrap-slider">
                <img
                  src="assets/images/slider/fashion-slideshow-05.jpg"
                  className="d-block w-100"
                  alt="fashion-slideshow-02"
                />
                <div className="box-content">
                  <div className="container">
                    <h1 className="fade-item fade-item-1">
                      Youthful<br />Summer Style
                    </h1>
                    <p className="fade-item fade-item-2">
                      Discover the hottest trends and must-have looks
                    </p>
                    <Link
                      to="/shop"
                      className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                    >
                      <span>Shop collection</span>
                      <i className="icon icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="wrap-slider">
                <img
                  src="assets/images/slider/fashion-slideshow-06.jpg"
                  className="d-block w-100"
                  alt="fashion-slideshow-03"
                />
                <div className="box-content">
                  <div className="container">
                    <h1 className="fade-item fade-item-1">
                      Gentle<br />Summer Style
                    </h1>
                    <p className="fade-item fade-item-2">
                      Discover the hottest trends and must-have looks
                    </p>
                    <a
                      href="shop-default.html"
                      className="fade-item fade-item-3 tf-btn btn-fill animate-hover-btn btn-xl radius-3"
                    >
                      <span>Shop collection</span>
                      <i className="icon icon-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="wrap-pagination sw-absolute-2">
          <div className="container">
            <div className="sw-dots"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;



