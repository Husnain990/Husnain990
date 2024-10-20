import React from "react";

// image
import Image from "next/image";

// icons
import Calendar from "@/assets/blog/calendar";

const BlogCard = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {["1", "2", "3", "4"].map((val) => {
        return (
          <div
            key={val}
            className="flex gap-5 bg-white rounded-lg hover:shadow-lg w-full max-w-[592px] hover:cursor-pointer p-5"
          >
            <div>
              <Image
                src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                width={200}
                height={100}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 justify-between items-start">
              <div className="flex gap-1 opacity-40">
                <Calendar />
                <p className="text-[12px]">15/12/2023</p>
              </div>
              <h2 className="font-extrabold">
                Painting Art Contest 2020 for histudy Clud
              </h2>
              <button className="bg-blue-800 px-3 py-1 rounded-full text-white ">
                Read Full
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
