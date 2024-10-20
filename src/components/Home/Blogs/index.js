"use client";
import React from "react";
import Slider from "react-slick";

// slick stylings
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="stroke-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="stroke-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto my-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-black font-bold text-xl underline">Blogs:</h3>
        <h3 className="text-black font-bold text-lg underline">Read All</h3>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <BlogCard />
          </div>
          <div>
            <BlogCard />
          </div>
          <div>
            <BlogCard />
          </div>
          <div>
            <BlogCard />
          </div>
          <div>
            <BlogCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;
