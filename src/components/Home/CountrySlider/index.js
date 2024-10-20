'use client'
import React from 'react'
import Image from 'next/image'

// images
import UK from '../../../assets/home/UK.png'
import USA from '../../../assets/home/USA.png'
import PAK from '../../../assets/home/PAK.png'
import IND from '../../../assets/home/IND.png'

// react slick
import Slider from "react-slick";

// slick stylings
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CountrySlider = () => {
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
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return (
    <>
    <div className='relative'>
        <div className='w-full max-w-[100px] absolute z-10 left-[10%] top-0 py-2 bg-white flex flex-col items-center'>
            <Image src={UK} alt='uk' className='rounded-full w-[50px] h-[50px]'/>
            <h3 className='text-center font-bold'>UK</h3>
        </div>
        <div className='w-full max-w-[1200px] mx-auto'>
        <Slider {...settings}>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MBBS</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-lime-700 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">FCPS-1</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-purple-500 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-white font-extrabold text-2xl">IMM</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-green-600 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-white font-extrabold text-2xl">FCPS-2</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-300 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MD/MS</h6>
          </div>
        </div>
      </Slider>
        </div>
    </div>
    <div className='relative'>
        <div className='w-full max-w-[100px] absolute z-10 left-[10%] top-0 py-2 bg-white flex flex-col items-center'>
            <Image src={USA} alt='uk' className='rounded-full w-[50px] h-[50px]'/>
            <h3 className='text-center font-bold'>USA</h3>
        </div>
        <div className='w-full max-w-[1200px] mx-auto'>
        <Slider {...settings}>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-orange-300 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">NLE</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">PLAB</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">NEET PG</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MRCP</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-pink-100 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MRCOG1</h6>
          </div>
        </div>
      </Slider>
        </div>
    </div>
    <div className='relative'>
        <div className='w-full max-w-[100px] absolute z-10 left-[10%] top-0 py-2 bg-white flex flex-col items-center'>
            <Image src={PAK} alt='uk' className='rounded-full w-[50px] h-[50px] object-cover'/>
            <h3 className='text-center font-bold'>Pakistan</h3>
        </div>
        <div className='w-full max-w-[1200px] mx-auto'>
        <Slider {...settings}>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MBBS</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-lime-700 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">FCPS-1</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-purple-500 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-white font-extrabold text-2xl">IMM</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-green-600 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-white font-extrabold text-2xl">FCPS-2</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-300 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MD/MS</h6>
          </div>
        </div>
      </Slider>
        </div>
    </div>
    <div className='relative'>
        <div className='w-full max-w-[100px] absolute z-10 left-[10%] top-0 py-2 bg-white flex flex-col items-center'>
            <Image src={IND} alt='uk' className='rounded-full w-[50px] h-[50px]'/>
            <h3 className='text-center font-bold'>India</h3>
        </div>
        <div className='w-full max-w-[1200px] mx-auto'>
        <Slider {...settings}>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-orange-300 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">NLE</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">PLAB</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">NEET PG</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-sky-200 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MRCP</h6>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pb-5">
          <div className="flex items-center justify-center bg-pink-100 rounded-md h-[75px] w-40 shadow-2xl">
            <h6 className="text-center text-black font-extrabold text-2xl">MRCOG1</h6>
          </div>
        </div>
      </Slider>
        </div>
    </div>
    </>
  )
}

export default CountrySlider