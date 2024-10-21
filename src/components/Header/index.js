"use client";
import React, { useState, useEffect } from "react";

// icons
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";
import { Menu } from "@headlessui/react";
import { HiDotsVertical } from "react-icons/hi";
import MediCall from "@/assets/header/medicall.png";

// Modals
import Modal from "../General/Modals/FontSizeModal";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const handleSizeChange = () => {
    setFontSize((prev) => prev + 1);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFontSize(16);
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 10); // Reset at 99999
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatCounter = (num) => {
    return num.toString().padStart(5, "0").split("");
  };

  return (
    <header className="z-10 fixed w-full flex justify-between items-center bg-darkPurple text-white px-6 py-3">
      <div className="flex items-center gap-1">
        {formatCounter(counter).map((digit, index) => (
          <div
            key={index}
            className="font-extrabold text-2xl text-darkPurple bg-white rounded w-6 flex items-center justify-center"
          >
            {index === 2 ? ":" : digit}
          </div>
        ))}
      </div>
      <div className="flex font-bold lg:text-5xl sm:text-3xl items-center gap-2">
        <Image src={MediCall} alt="logo" className="w-full h-10" />
      </div>
      <div className="text-[20px] font-bold lg:text-[35px] hidden lg:block">
        20/200
      </div>
      <div className="hidden md:block">
        <button onClick={handleOpen}>Text Size</button>
      </div>
      <div className="lg:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <HiDotsVertical className="w-5 h-5" />
          </Menu.Button>
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <p className="text-center w-full group flex rounded-md items-center px-2 py-2 text-sm text-black">
                  20/200
                </p>
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-darkPurple text-white" : ""
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm text-black`}
                  >
                    <AiFillWarning
                      className="w-5 h-5 mr-2 fill-yellow-400"
                      aria-hidden="true"
                    />
                    Warning
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-darkPurple text-white" : ""
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm text-black`}
                  >
                    <AiOutlinePauseCircle
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    />
                    Pause
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-darkPurple text-white" : ""
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm text-black`}
                  >
                    <AiFillCloseCircle
                      className="w-5 h-5 mr-2 fill-red-500"
                      aria-hidden="true"
                    />
                    Close
                  </button>
                )}
              </Menu.Item>
              <Menu.Item className="md:hidden">
                <button
                  onClick={handleOpen}
                  className="text-white bg-darkPurple w-full rounded-md p-1 mt-1"
                >
                  Change Text Size
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>

      <div className="hidden lg:flex md:space-x-2">
        <button className="hover:scale-[1.1] transition-all duration-300">
          <AiFillWarning className="fill-yellow-400 w-[42px] h-[42px]" />
        </button>
        <button className="w-[40px] h-[40px] rounded-full p-0 hover:scale-[1.1] transition-all duration-300">
          <AiOutlinePauseCircle className="w-[42px] h-[42px]" />
        </button>
        <button className="bg-white w-[40px] h-[40px] rounded-full p-0 relative hover:scale-[1.1] transition-all duration-300">
          <AiFillCloseCircle
            fill="red"
            className="w-[48px] h-[48px] absolute top-[-4px] right-[-4px]"
          />
        </button>
      </div>
      <Modal
        open={open}
        handleClose={handleClose}
        fontSize={fontSize}
        handleSizeChange={handleSizeChange}
      />
    </header>
  );
};

export default Header;
