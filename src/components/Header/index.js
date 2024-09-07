import React from "react";


// icons
import ArrowLeft from "@/assets/header/arrow-left";
import ArrowRight from "@/assets/header/arrow-right";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";


const Header = () => {
 return (
   <header className="flex justify-between items-center bg-darkPurple text-white px-6 py-3">
     <div className="flex items-center gap-1">
       <div className="font-extrabold text-2xl text-darkPurple bg-white rounded w-6 flex items-center justify-center">
         0
       </div>
       <div className="font-extrabold text-2xl text-darkPurple bg-white rounded w-6 flex items-center justify-center">
         1
       </div>
       <div className="font-extrabold text-2xl text-darkPurple bg-white rounded w-6 flex items-center justify-center">
         :
       </div>
       <div className="font-extrabold text-2xl text-darkPurple bg-white rounded w-6 flex items-center justify-center">
         3
       </div>
       <div className="font-extrabold text-2xl text-darkPurple bg-white rounded w-6 flex items-center justify-center">
         8
       </div>
     </div>
     <div className="flex font-bold lg:text-5xl sm:text-3xl items-center gap-2">
       <ArrowLeft/> Medicall<ArrowRight/>
     </div>
     <div className="text-[35px] font-bold">20/200</div>
     <div className="flex space-x-2">
       <button>
       <AiFillWarning className="fill-yellow-400 w-[42px] h-[42px]"/>
       </button>
       <button className=" w-[40px] h-[40px] rounded-full p-0">
         <AiOutlinePauseCircle className="w-[42px] h-[42px]"/>
       </button>
       <button className="bg-white w-[40px] h-[40px] rounded-full p-0 relative">
         <AiFillCloseCircle fill="red" className="w-[48px] h-[48px] absolute top-[-4px] right-[-4px]"/>
       </button>
     </div>
   </header>
 );
};


export default Header;



