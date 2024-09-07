import React from "react";


// Image from Next
import Image from "next/image";


// Icons
import Bookmark from "@/assets/questions/bookmark";
import Discuss from "@/assets/questions/discuss";
import Pencil from "@/assets/questions/pencil";
import Share from "@/assets/questions/share";
import Skip from "@/assets/questions/skip";
import Suggestion from "@/assets/questions/suggestion";
import { FcApproval } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";


const Content = () => {
 const answerPercentage = 17;
 return (
   <div className="flex w-full gap-4 mt-4 mr-4 lg:flex-nowrap flex-wrap pb-4">
     {/* Question Section */}
     <div className="xl:w-3/4 lg:w-3/4 w-full">
       <p className="border mb-4 drop-shadow-md bg-white p-4 rounded shadow-md text-red-800">
         This is a dummy question showing font sizing and placement of text in
         question card...This is a dummy question showing font sizing and
         placement of text in question card...
       </p>


       <div className="space-y-4">
         {/* Explanation Box */}
         <div>
           <div className="flex gap-5">
             <span className="block w-20 p-2 border shadow-lg rounded-lg text-red-900 bg-white text-center font-extrabold text-xl">
               A
             </span>
             <button className="block w-full m-0 border shadow-lg rounded-lg relative z-0 bg-white">
               <div
                 className="bg-red-800 text-black text-center m-0 rounded-lg absolute h-full top-0 -z-10"
                 style={{ width: `${answerPercentage}%` }}
               />
               Reticulum
               <p className="absolute right-4 top-2 bg-red-600 w-[50px] rounded-full text-white opacity-80">
                 {answerPercentage}%
               </p>
             </button>
           </div>
           <div className="bg-yellow-200 w-full h-[300px] relative p-5">
             <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl">
               Explanation Box
             </p>
             <div className="absolute bottom-2 w-[97%] bg-white rounded-md">
               <div className="flex gap-4 items-center h-10">
                 <Image
                   src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                   width={30}
                   height={10}
                   className="ml-16"
                 />
                 <p className="basis-11/12 text-black text-xl ml-4 flex items-center">
                   Guyton Ed 13 Pg 339
                 </p>
                 <p className="basis-1/12 text-black flex items-center">
                   open
                 </p>
               </div>
             </div>
           </div>
         </div>
         {/* Explanation Box */}
         <div className="flex gap-5">
           <span className="block w-20 p-2 border shadow-lg rounded-lg text-red-900 bg-white text-center font-extrabold text-xl">
             B
           </span>
           <button className="block w-full m-0 border shadow-lg rounded-lg relative z-0 bg-white">
             <div
               className="bg-lime-400 text-black text-center m-0 rounded-lg absolute h-full top-0 -z-10"
               style={{ width: `${answerPercentage}%` }}
             />
             Reticulum
             <p className="absolute right-4 top-2 bg-green-600 w-[50px] rounded-full text-white opacity-80">
               {answerPercentage}%
             </p>
           </button>
         </div>
         <div className="flex gap-5">
           <span className="block w-20 p-2 border shadow-lg rounded-lg text-red-900 bg-white text-center font-extrabold text-xl">
             C
           </span>
           <button className="block w-full m-0 border shadow-lg rounded-lg relative z-0 bg-white">
             <div
               className="bg-gray-300 text-black text-center m-0 rounded-lg absolute h-full top-0 -z-10"
               style={{ width: `${answerPercentage}%` }}
             />
             Golgi apparatus
             <p className="absolute right-4 top-2 bg-gray-500 w-[50px] rounded-full text-white opacity-100">
               {answerPercentage}%
             </p>
           </button>
         </div>
         <div className="flex gap-5">
           <span className="block w-20 p-2 border shadow-lg rounded-lg text-red-900 bg-white text-center font-extrabold text-xl">
             D
           </span>
           <button className="block w-full m-0 border shadow-lg rounded-lg relative z-0 bg-white">
             <div
               className="bg-gray-300 text-black text-center m-0 rounded-lg absolute h-full top-0 -z-10"
               style={{ width: `${answerPercentage}%` }}
             />
             Centrioles
             <p className="absolute right-4 top-2 bg-gray-500 w-[50px] rounded-full text-white opacity-100">
               {answerPercentage}%
             </p>
           </button>
         </div>
         <div className="flex gap-5">
           <span className="block w-20 p-2 border shadow-lg rounded-lg text-red-900 bg-white text-center font-extrabold text-xl">
             E
           </span>
           <button className="block w-full m-0 border shadow-lg rounded-lg relative z-0 bg-white">
             <div
               className="bg-gray-300 text-black text-center m-0 rounded-lg absolute h-full top-0 -z-10"
               style={{ width: `${answerPercentage}%` }}
             />
             None
             <p className="absolute right-4 top-2 bg-gray-500 w-[50px] rounded-full text-white opacity-100">
               {answerPercentage}%
             </p>
           </button>
         </div>
       </div>


       <div className="flex justify-center mt-4 gap-8 flex-wrap lg:flex-nowrap">
         <button className="flex items-center text-center gap-1 w-full max-w-28 bg-blue-600 text-white p-2 rounded-full">
           <Suggestion />
           Suggest
         </button>
         <button className="flex items-center text-center gap-1 w-full max-w-28 bg-blue-600 text-white p-2 rounded-full">
           <Skip />
           Skip
         </button>
         <button className="flex items-center text-center gap-1 w-full max-w-28 bg-blue-600 text-white p-2 rounded-full">
           <Discuss />
           Discuss
         </button>
         <button className="flex items-center text-center gap-1 w-full max-w-28 bg-blue-600 text-white p-2 rounded-full">
           <Pencil />
           Notes
         </button>
         <button className="flex items-center text-center gap-1 w-full max-w-28 bg-blue-600 text-white p-2 rounded-full">
           <Bookmark />
           Bookmark
         </button>
         <button className="flex items-center text-center gap-1 w-full max-w-28 bg-blue-600 text-white p-2 rounded-full">
           <Share />
           Share
         </button>
       </div>


       <div className="mt-4 p-5 text-center text-gray-500 flex items-start justify-start gap-x-40 gap-y-10 border-l-4 border-blue-500 shadow-md flex-wrap">
         <div className="flex items-center gap-2 justify-start flex-row">
           <FcBarChart className="w-[30px] h-[30px]" />
           <div className="flex items-start justify-start flex-col">
           <p>2547</p>
           <p className="text-left">Users Attempted</p>
           </div>
         </div>
         <div className="flex items-center gap-2 justify-start flex-row">
           <FcApproval className="w-[30px] h-[30px]" />
           <div className="flex items-start justify-start flex-col">
             <p>35%</p>
             <p className="text-left">Answered Correctly</p>
           </div>
         </div>
         <div className="flex items-center gap-2 justify-start flex-row">
           <FcAlarmClock className="w-[30px] h-[30px]" />
           <div className="flex items-start justify-start flex-col">
             <p>06 secs</p>
             <p className="text-left">Time Spent</p>
           </div>
         </div>
         <div className="flex items-center gap-2 justify-start flex-row">
         <FcWorkflow className="w-[30px] h-[30px]" />
         <div className="flex items-start justify-start flex-col">
           <p>2022</p>
           <p className="text-left">Version</p>
           </div>
         </div>
       </div>


       <div className="mt-4 bg-white border border-black rounded">
         <h3 className="bg-darkPurple text-white font-normal pl-2 mb-3">
           My Notes:
         </h3>
         <p className="pl-2">
           This is dummy text for the notes added by users...This is dummy text
           for the notes added by users...This is dummy text for the notes
           added by users...This is dummy text for the notes added by
           users...This is dummy text for the notes added by users...This is
           dummy text for the notes added by users...
         </p>
       </div>
     </div>


     {/* Right Sidebar */}
     <div className="xl:w-1/4 lg:w-3/12 w-full">
       {/* Top Box */}
       <div className="bg-white border border-black rounded">
         <h2 className="bg-darkPurple text-white font-normal p-2 text-center">
           Medicine Feb 2024 + 13 more papers
         </h2>
         <ul className="flex items-start justify-start flex-wrap gap-y-2 gap-6 p-2">
           <li className="text-sm lg:basis-[170px] list-disc list-inside">
             Radiology jan 2022
           </li>
           <li className="text-sm lg:basis-[170px] list-disc list-inside">
             FCPS1 Med 2021 Jan
           </li>
           <li className="text-sm lg:basis-[170px] list-disc list-inside">
             FCPS1 Surg 2023 Sep
           </li>
           <li className="text-sm lg:basis-[170px] list-disc list-inside">
             Radiology jan 2022
           </li>
         </ul>
         <div className="w-full flex items-center justify-center">
           <a className="text-blue-950 underline text-center cursor-pointer">
             see more
           </a>
         </div>
       </div>


       {/* Video Section */}
       <div className="bg-white border border-black rounded my-5">
         <h2 className="bg-darkPurple text-white font-normal p-2 text-center">
           Video Title here
         </h2>
         <div className="aspect-w-16 aspect-h-9 bg-gray-300">
           <Image
             src="https://images.pexels.com/photos/5758468/pexels-photo-5758468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
             height={100}
             width={500}
           />
         </div>
       </div>


       {/* Related Links */}
       <div className="bg-white border border-black rounded my-5">
         <h2 className="bg-darkPurple text-white font-normal p-2 text-center">
           Related Links
         </h2>
         <ul className="p-2">
           <li className="list-disc list-inside">
             <a className="text-blue-950 underline text-lg">
               Dummy text for title of the link inserted Dummy text for title
               of the link inserted...
             </a>
           </li>
           <li className="list-disc list-inside">
             <a className="text-blue-950 underline text-lg">
               Dummy text for title of the link inserted...
             </a>
           </li>
         </ul>
         <div className="w-full flex items-center justify-center">
           <a className="text-blue-950 underline text-center cursor-pointer">
             see more
           </a>
         </div>
       </div>


       {/* Related Reads */}
       <div className="bg-white border border-black rounded my-5">
         <h2 className="bg-darkPurple text-white font-normal p-2 text-center mb-4">
           Related Reads
         </h2>
         <div className="p-2">
           <div className="flex shadow-md mb-2">
             <Image
               src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
               width={100}
               height={80}
             />
             <p>FCPS-1 Gynae Guidelines</p>
           </div>
           <div className="flex shadow-md mb-2">
             <Image
               src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
               width={100}
               height={80}
             />
             <p>FCPS-1 Gynae Guidelines</p>
           </div>
           <div className="w-full flex items-center justify-center">
             <a className="text-blue-950 underline text-center cursor-pointer">
               see more
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};


export default Content;