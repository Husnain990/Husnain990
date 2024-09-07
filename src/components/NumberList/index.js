import React from 'react'


const NumberList = () => {
 // class for options (${answerPercentage && answerPercentage > 50 ? 'bg-lime-400' : 'bg-red-700'})
 return (
   <div className="w-12 lg:w-16 bg-gray-100 rounded shadow-md">
   {Array.from({ length: 20 }, (_, index) => index + 1).map((value) => {
     return (
       <p key={value}
         className={`flex items-center justify-center font-semibold text-sm h-7 ${
           value % 2 === 0 ? "bg-transparent" : "bg-gray-300"
         }
         `}
       >
         {value}
       </p>
     );
   })}
 </div>
 )
}


export default NumberList