import React from "react";

const NumberList = () => {
  // class for options (${answerPercentage && answerPercentage > 50 ? 'bg-lime-400' : 'bg-red-700'})
  return (
    <div className="relative">
      <div className="fixed left-0 top-0 h-full max-h-[78vh] sm:max-h-[83vh] w-[70px] transition-width duration-300 bg-gray-100 flex flex-col justify-start mt-[76px] z-10 p-2 overflow-scroll">
        {Array.from({ length: 100 }, (_, index) => index + 1).map((value) => {
          return (
            <p
              key={value}
              className={`flex justify-center items-center font-semibold text-sm h-full min-h-[30px] w-full min-w-[50px] ${
                value % 2 === 0 ? "bg-transparent" : "bg-gray-300"
              } 
          `}
            >
              {value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NumberList;
