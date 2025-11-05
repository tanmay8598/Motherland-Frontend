"use client";
import React from "react";

const CustomProgressBar = ({
  progress = 0,
  bgColor = "#FBECDB",
  fillColor = "#F5C056",
  className = "",
}) => {
  return (
    <div
      className={`w-[90%] px-2 md:w-[40%] h-3.5 mx-auto mt-6 overflow-hidden flex items-center ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="h-1.5 transition-all duration-300"
        style={{
          width: `${progress}%`,
          backgroundColor: fillColor,
        }}
      ></div>
    </div>
  );
};

export default CustomProgressBar;
