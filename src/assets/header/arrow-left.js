import React from "react";

const ArrowLeft = (props) => {
  const {color} = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={color ? color : "currentColor"}
        className="size-6"
        width={50}
        height={50}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </>
  );
};

export default ArrowLeft;
