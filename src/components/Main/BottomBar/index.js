"use client";
import React, {useState} from "react";

// icons
import Bookmark from "@/assets/questions/bookmark";
import Discuss from "@/assets/questions/discuss";
import Pencil from "@/assets/questions/pencil";
import Share from "@/assets/questions/share";
import Skip from "@/assets/questions/skip";
import Suggestion from "@/assets/questions/suggestion";

const BottomBar = () => {
  const [hoveredIconFirst, setHoveredIconFirst] = useState(null);
  const [hoveredIconSecond, setHoveredIconSecond] = useState(null);
  return (
    <div className="relative">
      <div className="group fixed left-0 bottom-0 h-[70px] w-full transition-width duration-300 bg-blue-600 flex justify-between items-center gap-4 overflow-hidden z-10 p-2">
        {/* Section 1: Icons and Buttons */}
        <div className="flex items-center justify-around gap-2 w-full max-w-[50%] lg:max-w-[70%]">
          {[
            { icon: <Suggestion />, label: "Suggest" },
            { icon: <Skip />, label: "Skip" },
            { icon: <Discuss />, label: "Discuss" },
          ].map((item, idx) => (
            <button
            key={idx}
            className="flex items-center justify-start pl-3 gap-2 text-white h-full max-h-10 hover:bg-slate-50 hover:text-blue-600 hover:rounded-md duration-300 p-3 relative"
            onMouseEnter={() => setHoveredIconFirst(idx)}
            onMouseLeave={() => setHoveredIconFirst(null)}
          >
            <span>{item.icon}</span>
            {hoveredIconFirst === idx && (
              <p className="absolute left-full ml-2 bg-white text-blue-600 px-2 py-1 rounded whitespace-nowrap z-50 shadow-md">
                {item.label}
              </p>
            )}
          </button>
          ))}
        </div>

        {/* Section 2: Arrows */}
        <div className="flex items-center justify-center gap-12 mx-2">
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-9"
            >
              <path
                strokeWidth="3px"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="size-9"
            >
              <path
                strokeWidth="3px"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* Section 3: More Icons and Buttons */}
        <div className="flex items-center justify-around gap-2 w-full max-w-[50%] lg:max-w-[70%]">
        {[
          { icon: <Pencil />, label: "Notes" },
          { icon: <Bookmark />, label: "Bookmark" },
          { icon: <Share />, label: "Share" },
        ].map((item, idx) => (
          <button
            key={idx}
            className="flex items-center justify-start pl-3 gap-2 text-white h-full max-h-10 hover:bg-slate-50 hover:text-blue-600 hover:rounded-md duration-300 p-3 relative"
            onMouseEnter={() => setHoveredIconSecond(idx)}
            onMouseLeave={() => setHoveredIconSecond(null)}
          >
            <span>{item.icon}</span>
            {hoveredIconSecond === idx && (
              <p className="absolute right-full mr-2 bg-white text-blue-600 px-2 py-1 rounded whitespace-nowrap z-50 shadow-md">
                {item.label}
              </p>
            )}
          </button>
        ))}
      </div>

        {/* Section 4: Last Aid Button */}
        <button className="bg-white text-black font-bold rounded-md p-2 w-full max-w-[120px] hidden sm:block">
          Last Aid
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
