"use client";

import React from "react";

// react slick
import Slider from "react-slick";

// slick stylings
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import Gyna from "@/assets/home/gyna";
import ArrowRight from "@/assets/header/arrow-right";

const LogoSlider = () => {
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
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container my-8">
      <Slider {...settings}>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-green-950 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-green-700 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-yellow-400 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-900 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-green-700 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-600 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-orange-300 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-orange-600 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-green-950 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-600 rounded-full h-[75px] w-[75px]">
            <Gyna />
          </div>
          <h6 className="text-center">Gyna</h6>
        </div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
