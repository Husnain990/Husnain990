import React from "react";

// icons
import { MdOutlineFacebook } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import LogoSlider from "@/components/Home/LogoSlider";
import CountrySlider from "@/components/Home/CountrySlider";
import Blogs from "@/components/Home/Blogs";


const Home = () => {
  return (
    <>
    <header className="flex flex-col">
      <div className="flex gap-2 w-full justify-between items-center py-3 px-4">
        <div className="flex gap-3">
          <h1>Logo here</h1>
          <div className="flex gap-2">
            <FaYoutube className="fill-red-700 w-6 h-6 cursor-pointer" />
            <MdOutlineFacebook className="fill-blue-700 w-6 h-6 cursor-pointer" />
            <IoLogoWhatsapp className="fill-green-500 w-6 h-6 cursor-pointer" />
            <div className="bg-instagram-gradient w-full max-w-fit h-fit rounded-md cursor-pointer">
              <FaInstagram className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        <ul className="flex gap-3">
          <li className="text-blue-900 font-bold text-xl cursor-pointer">
            Pricing
          </li>
          <li className="text-blue-900 font-bold text-xl cursor-pointer">
            Policy
          </li>
          <li className="text-blue-900 font-bold text-xl cursor-pointer">
            Contact
          </li>
          <li className="text-blue-900 font-bold text-xl cursor-pointer">
            MedicalPDF
          </li>
          <li className="text-blue-900 font-bold text-xl cursor-pointer">
            FindDoctor
          </li>
          <li className="text-blue-900 font-bold text-xl cursor-pointer">
            MediaPedia
          </li>
        </ul>
        <div className="flex gap-2 w-full max-w-[300px]">
          <button className="flex justify-between items-center uppercase bg-green-700 text-white font-bold rounded-lg p-2 text-sm w-full max-w-fit">
            <IoLogoAndroid className="fill-white w-7 h-7" />
            Study Application
          </button>
          <button className="bg-blue-800 p-2 text-white w-full max-w-[90px]">
            Login
          </button>
        </div>
      </div>
      <div className="flex gap-2 w-full justify-between items-center py-3 px-4 bg-red-800">
        <ul className="flex text-white gap-9 flex-1">
          <li>Guidelines</li>
          <li>Lectures</li>
          <li>Past Papers</li>
          <li>Subject MCQs</li>
          <li>System MCQs</li>
          <li>Mock Test</li>
        </ul>
        <div className="flex gap-3">
          <span className="bg-yellow-200 w-full min-w-[150px] text-center font-bold">
            LastAid Notes
          </span>
          <div className="bg-white flex justify-between items-center">
            <input
              className="placeholder:text-gray-400 focus:outline-none px-2"
              placeholder="Search MCQs"
            />
            <span>
              <FaSearch className="fill-red-800 w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </header>
    <div className="w-full max-w-[800px] mx-auto">
    <LogoSlider/>
    </div>
    <div>
      <CountrySlider/>
    </div>
    <div>
      <Blogs/>
    </div>
    </>
  );
};

export default Home;
